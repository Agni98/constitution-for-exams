"""Parse the official Table of Contents out of the Legislative Department PDF text.

The ToC is the authoritative index: it fixes the order of Parts, Chapters,
sub-headings and articles, and gives each article its official marginal
heading.  Parsing it first means the body parser never has to guess where an
article begins - it already knows which numbers to look for, and in what order.
"""
import json
import re
import sys
from pathlib import Path

SRC = Path(__file__).resolve().parent.parent / "source" / "coi-en.txt"
OUT = Path(__file__).resolve().parent / "toc.json"

TOC_PAGES = range(3, 31)          # 0-indexed; PDF pages 4-31

ROMAN = r"[IVXLC]+[AB]?"
NOISE = re.compile(
    r"^\s*(Contents|ARTICLES|THE CONSTITUTION OF INDIA|CONTENTS|_+|\(?[ivxlcdm]+\)?|"
    r"\(\s*[ivxlcdm]+\s*\)|[-\u2014\s]*)\s*$", re.I)

PART_RE     = re.compile(r"^\s*\[?\s*PART\s+(" + ROMAN + r")\s*[.—-]*\s*(Omitted)?\s*\]?\s*$", re.I)
CHAPTER_RE  = re.compile(r"^\s*CHAPTER\s+(" + ROMAN + r")\s*[.\u2014-]*\s*(.*)$")
# 21A.  /  [2A.  /  1[239AA.
# the official text hyphenates the letters I and O so they cannot be misread as
# a numeral or a roman numeral: 243-I, 243-O, 243Z-I, 243Z-O, 371-I
ART_RE      = re.compile(r"^\s*\[?\s*(\d{1,3}(?:-?[A-Z]){0,3})\s*\.\s*(.*)$")
SCHED_RE    = re.compile(r"^\s*(FIRST|SECOND|THIRD|FOURTH|FIFTH|SIXTH|SEVENTH|EIGHTH|NINTH|"
                         r"TENTH|ELEVENTH|TWELFTH)\s+SCHEDULE\b(.*)$", re.I)


def clean(s):
    s = s.replace("\u2014", " - ").replace("\u2019", "'").replace("\u201c", '"').replace("\u201d", '"')
    s = re.sub(r"\.{2,}", " ", s)          # dot leaders
    s = re.sub(r"\s+", " ", s).strip()
    s = re.sub(r"\s+([,.;:])", r"\1", s)
    # Two artifacts of the way the contents pages are typeset, both
    # contradicted by the body of the same document: article 124's heading
    # prints as "ofthe Supreme Court" (the body prints "of the"), and Part XIV
    # chapter II prints as "P UBLIC SERVICE COMMISSIONS" (the body prints
    # "PUBLIC").  Nothing else across the 28 contents pages is glued or split
    # this way, so this is a fix-up list and not a rule.
    s = s.replace("ofthe ", "of the ").replace("P UBLIC", "PUBLIC")
    return s.strip(" .-")


def main():
    pages = SRC.read_text(encoding="utf-8").split("\n\x0c\n")
    lines = []
    for p in TOC_PAGES:
        for ln in pages[p].split("\n"):
            if NOISE.match(ln):
                continue
            ln = re.sub(r"\s*\d+\s*$", "", ln.rstrip())     # trailing page number
            if ln.strip():
                lines.append(ln)

    items, i = [], 0
    pending_part = None
    while i < len(lines):
        ln = lines[i]

        m = PART_RE.match(ln)
        if m:
            pending_part = m.group(1)
            i += 1
            continue

        if pending_part:
            # the line(s) after "PART X" are the part title, in capitals
            title = []
            while i < len(lines) and not ART_RE.match(lines[i]) and not CHAPTER_RE.match(lines[i]) \
                    and lines[i].strip() == lines[i].strip().upper():
                title.append(lines[i].strip())
                i += 1
            items.append({"kind": "part", "num": pending_part, "title": clean(" ".join(title))})
            pending_part = None
            continue

        m = CHAPTER_RE.match(ln)
        if m:
            # A chapter title wraps: "CHAPTER V. COMPTROLLER AND AUDITOR-" /
            # "GENERAL OF INDIA". It runs until the first article entry, so
            # gather everything up to that rather than taking one line.
            # Chapter titles are set in capitals; the group sub-heading that
            # follows is not. Continue only while the line is still capitals,
            # or the chapter title eats the sub-heading under it.
            title = [m.group(2).strip()]
            j = i + 1
            while j < len(lines) and lines[j].strip() \
                    and lines[j].strip() == lines[j].strip().upper() \
                    and not ART_RE.match(lines[j]) and not PART_RE.match(lines[j]) \
                    and not CHAPTER_RE.match(lines[j]) and not SCHED_RE.match(lines[j]):
                title.append(lines[j].strip())
                j += 1
            joined = " ".join(t for t in title if t)
            items.append({"kind": "chapter", "num": m.group(1),
                          "title": clean(joined.replace("- ", "-"))})
            i = j
            continue

        m = SCHED_RE.match(ln)
        if m:
            items.append({"kind": "schedule", "num": m.group(1).upper(), "title": clean(m.group(2))})
            i += 1
            continue

        m = ART_RE.match(ln)
        if m:
            # Part XVI's contents print a run of article numbers first and the
            # matching headings after it, in the same order:
            #     330.
            #     330A.
            #     Reservation of seats for Scheduled Castes ... in the House of the People.
            #     Reservation of seats for women in the House of the People.
            # Read straight through, 330 ends up with no heading and 330A takes
            # 330's. Detect the run and pair the two halves instead.
            run, j = [], i
            while j < len(lines):
                mm = ART_RE.match(lines[j])
                if not mm or mm.group(2).strip():
                    break
                run.append((mm.group(1), lines[j].lstrip().startswith("[")))
                j += 1
            if len(run) > 1:
                heads = []
                while len(heads) < len(run) and j < len(lines):
                    body = []
                    while j < len(lines) and not \
                            " ".join(body).strip().rstrip("]").strip().endswith("."):
                        if ART_RE.match(lines[j]) or PART_RE.match(lines[j]) \
                                or CHAPTER_RE.match(lines[j]) or SCHED_RE.match(lines[j]):
                            break
                        body.append(lines[j])
                        j += 1
                    if not body:
                        break
                    heads.append(clean(" ".join(body)))
                if len(heads) == len(run):
                    for (rnum, romit), rhead in zip(run, heads):
                        items.append({"kind": "article", "num": rnum,
                                      "heading": rhead.replace("]", "").strip(" .-"),
                                      "omitted": romit or rhead.lower().endswith("omitted")})
                    i = j
                    continue

            num, rest = m.group(1), m.group(2)
            omitted = ln.lstrip().startswith("[")
            body = [rest]
            i += 1
            # A contents-page heading always ends in a full stop, and wraps across
            # lines until it gets there. A group sub-heading ("Right to Equality",
            # "Council of Ministers") carries no trailing stop. So stop as soon as
            # what we have ends in one - otherwise the sub-heading that follows is
            # swallowed into the previous article's heading and lost as a group.
            # an omitted entry is bracketed - "[31. ... —Omitted.]" - so the stop
            # can sit inside a closing bracket
            while i < len(lines) and not " ".join(body).strip().rstrip("]").strip().endswith(".") \
                    and not ART_RE.match(lines[i]) and not PART_RE.match(lines[i]) \
                    and not CHAPTER_RE.match(lines[i]) and not SCHED_RE.match(lines[i]) \
                    and not lines[i].strip() == lines[i].strip().upper():
                body.append(lines[i])
                i += 1
            heading = clean(" ".join(body))
            if heading.lower().endswith("omitted"):
                omitted = True
            items.append({"kind": "article", "num": num,
                          "heading": heading.replace("]", "").strip(" .-"),
                          "omitted": omitted})
            continue

        # anything left that is not all-caps is a sub-heading like "Right to Equality"
        s = ln.strip()
        # "Omitted.]" left over from a repealed article's entry is not a group
        # heading; without this it becomes a phantom group on the Part page.
        if re.fullmatch(r"\[?\s*Omitted\.?\s*\]?", s, re.I):
            i += 1
            continue
        if s and s != s.upper():
            # A group sub-heading carries no trailing stop and may wrap:
            # "Powers, Privileges and Immunities of Parliament and its" /
            # "Members". It always runs up to the next article entry.
            parts = [s]
            j = i + 1
            while j < len(lines) and not ART_RE.match(lines[j]) \
                    and not PART_RE.match(lines[j]) and not CHAPTER_RE.match(lines[j]) \
                    and not SCHED_RE.match(lines[j]) and lines[j].strip() \
                    and lines[j].strip() != lines[j].strip().upper():
                parts.append(lines[j].strip())
                j += 1
            items.append({"kind": "subheading", "title": clean(" ".join(parts))})
            i = j
            continue
        elif s:
            items.append({"kind": "caps", "title": clean(s)})
        i += 1

    OUT.write_text(json.dumps(items, ensure_ascii=False, indent=1), encoding="utf-8")
    counts = {}
    for it in items:
        counts[it["kind"]] = counts.get(it["kind"], 0) + 1
    print("parsed:", counts)
    arts = [it["num"] for it in items if it["kind"] == "article"]
    print("articles:", len(arts), "unique:", len(set(arts)))
    print("first 12:", arts[:12])
    print("last 12:", arts[-12:])


if __name__ == "__main__":
    sys.exit(main())
