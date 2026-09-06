"""Split the twelve Schedules out of the tagged body text."""
import json
import re
from pathlib import Path

import build_data as B

HERE = Path(__file__).resolve().parent
TEXT = B.TEXT

NAMES = ["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH", "SIXTH",
         "SEVENTH", "EIGHTH", "NINTH", "TENTH", "ELEVENTH", "TWELFTH"]
ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]

TITLES = {
    "FIRST":   "The States and the Union territories",
    "SECOND":  "Emoluments, allowances and privileges of high constitutional offices",
    "THIRD":   "Forms of Oaths or Affirmations",
    "FOURTH":  "Allocation of seats in the Council of States",
    "FIFTH":   "Administration and control of Scheduled Areas and Scheduled Tribes",
    "SIXTH":   "Administration of Tribal Areas in Assam, Meghalaya, Tripura and Mizoram",
    "SEVENTH": "Union List, State List and Concurrent List",
    "EIGHTH":  "Languages recognised by the Constitution",
    "NINTH":   "Acts and Regulations validated against fundamental-rights challenge",
    "TENTH":   "Provisions as to disqualification on ground of defection",
    "ELEVENTH": "Powers, authority and responsibilities of Panchayats",
    "TWELFTH": "Powers, authority and responsibilities of Municipalities",
}

HEAD = re.compile(r"(?m)^.{0,20}(" + "|".join(NAMES) + r")\s+SCHEDULE.*$")
ARTREF = re.compile(r"\[\s*Articles?\s+([^\]]+)\]", re.I)
ENTRY = re.compile(r"^\s*(?:\x03\d+\x04)?\[?\s*(\d{1,3}[A-Z]?)\s*\.\s")
# longest alternative first, or "List III" matches as "List I"
LIST_HEAD = re.compile(r"(?m)^\s*(?:\x03\d+\x04)?\[?\s*List\s+(III|II|I)\s*[.—-]*\s*(.*)$")
# the Eighth Schedule prints several languages per line, so lines cannot split it
LANG = re.compile(r"(\d{1,2})\s*\.\s*\]?\s*(?:⟦\d+⟧)?\[?\s*([A-Z][A-Za-z’']*)")


def blocks(raw, strip_num=True):
    """Group the schedule's lines into numbered entries / plain paragraphs."""
    out, cur, num = [], [], None
    for ln in raw.split("\n"):
        if not ln.strip():
            continue
        m = ENTRY.match(ln)
        if m:
            if cur:
                out.append({"n": num, "t": " ".join(cur)})
            num, cur = m.group(1), [ln.strip()]
        elif cur:
            cur.append(ln.strip())
        else:
            num, cur = None, [ln.strip()]
    if cur:
        out.append({"n": num, "t": " ".join(cur)})
    clean = []
    for b in out:
        t = re.sub(r"[ \t]+", " ", b["t"]).strip()
        t = re.sub("\x03(\\d+)\x04", "⟦\\1⟧", t)
        if b["n"] and strip_num:
            # the entry number gets its own column, so drop it from the text -
            # but keep any footnote marker or bracket that opened the entry
            t = re.sub(r"^((?:⟦\d+⟧)?\[?\s*)" + re.escape(b["n"]) + r"\s*\.\s*", r"\1", t)
        if t:
            clean.append({"n": b["n"], "t": t})
    return clean


def main():
    start = re.search(r"(?m)^[\s\[\*\d]*(?:\x01\d+:\d+\x02)?\[?\s*FIRST\s+SCHEDULE", TEXT).start()
    tail = TEXT[start:]
    spots = [(m.group(1), m.start()) for m in HEAD.finditer(tail)]
    seen, cuts = set(), []
    for name, pos in spots:                     # keep the first hit for each name
        if name not in seen:
            seen.add(name)
            cuts.append((name, pos))

    scheds = []
    for i, (name, pos) in enumerate(cuts):
        end = cuts[i + 1][1] if i + 1 < len(cuts) else len(tail)
        chunk, notes = B.resolve_notes(tail[pos:end])
        m = ARTREF.search(chunk)
        refs = re.sub(r"\s+", " ", m.group(1)).strip() if m else ""
        chunk = HEAD.sub("", chunk, count=1)
        if m:
            chunk = chunk.replace(m.group(0), "", 1)

        sections = []
        lists = list(LIST_HEAD.finditer(chunk))
        if name == "SEVENTH" and lists:
            for j, lm in enumerate(lists):
                stop = lists[j + 1].start() if j + 1 < len(lists) else len(chunk)
                sections.append({
                    "title": "List %s%s" % (lm.group(1),
                                            (" - " + lm.group(2).strip()) if lm.group(2).strip() else ""),
                    "blocks": blocks(chunk[lm.end():stop]),
                })
        elif name == "EIGHTH":
            joined = " ".join(b["t"] for b in blocks(chunk, strip_num=False))
            langs = [{"n": n, "t": lang} for n, lang in LANG.findall(joined)]
            sections.append({"title": "", "blocks": langs})
        else:
            sections.append({"title": "", "blocks": blocks(chunk)})

        scheds.append({
            "id": ROMAN[NAMES.index(name)],
            "name": "%s Schedule" % name.title(),
            "title": TITLES[name],
            "articles": refs,
            "sections": sections,
            "notes": notes,
        })

    json.dump(scheds, open(HERE / "schedules.json", "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    for s in scheds:
        n = sum(len(sec["blocks"]) for sec in s["sections"])
        print("%-18s art %-22s sections %d  blocks %3d  notes %d"
              % (s["name"], s["articles"][:22], len(s["sections"]), n, len(s["notes"])))


if __name__ == "__main__":
    main()
