"""Turn the tagged body text into the structured JSON the site reads."""
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
TEXT = (HERE / "body_tagged.txt").read_text(encoding="utf-8")
NOTES = json.load(open(HERE / "footnotes.json", encoding="utf-8"))
TOC = json.load(open(HERE / "toc.json", encoding="utf-8"))

TAG = re.compile(r"\x01(\d+):(\d+)\x02")
# what may sit between the start of a line and an article number: footnote
# markers, the "[" that opens amended text, and the "*" of a starred note
PRE = r"[\[\* \t]*(?:\x01\d+:\d+\x02)?[\[\* \t]*\d{0,2}(?:\x01\d+:\d+\x02)?[\[\* \t]*"
PRE_RESOLVED = r"[\[\* \t]*(?:\x03\d+\x04)?[\[\* \t]*\d{0,2}(?:\x03\d+\x04)?[\[\* \t]*"
CLAUSE = re.compile(r"^\s*(?:\x03\d+\x04)?\[?\s*\(\s*([0-9]{1,2}|[a-z]{1,4}|[ivxl]{1,5})\s*\)")
# "Clause" and "Sub-clause" are deliberately not here: they almost never open a
# new clause, but a wrapped line very often starts "clause (1)." mid-sentence
PARA_START = re.compile(r"^\s*(?:\x03\d+\x04)?\[?\s*(\(|Provided|Explanation)", re.I)
ROMAN_CL = re.compile(r"^[ivxl]+$")
HEADING_CUT = re.compile(
    r"(?m)^[\s\[\*\d]*(?:\x01\d+:\d+\x02)?[\s\[\*]*"
    r"(?:PART\s+[IVXLC]+[AB]?|CHAPTER\s+[IVXLC]+)\b.*$")
SUBHEADS = {re.sub(r"\W+", "", it["title"]).lower()
            for it in TOC if it["kind"] == "subheading" and it["title"]}


def locate_articles():
    """Match every ToC article number to its position in the body.

    A plain forward scan breaks on articles the printed text drops entirely
    (Part VII is repealed, so article 238 has no body): the search runs on and
    latches onto a "238." far downstream, dragging the cursor past two hundred
    real articles.  So candidates are collected globally first, then walked
    monotonically - and an article whose earliest candidate sits after one of
    the next few articles' candidates is treated as absent rather than trusted.
    """
    nums = [it["num"] for it in TOC if it["kind"] == "article"]
    cand = {}
    for n in nums:
        # the contents page hyphenates 243-I and 243-O; the body prints them
        # without the hyphen, so look for both spellings
        spellings = {n, n.replace("-", "")}
        hits = set()
        for sp in spellings:
            for m in re.finditer(r"(?m)^" + PRE + re.escape(sp) + r"[ \t]*\.", TEXT):
                hits.add(m.start())
        cand[n] = sorted(hits)
    spots, cur = [], -1
    for i, n in enumerate(nums):
        mine = [p for p in cand[n] if p > cur]
        if not mine:
            spots.append((n, None))
            continue
        pick = mine[0]
        jumped = False
        for nx in nums[i + 1:i + 4]:
            later = [p for p in cand[nx] if p > cur]
            if later and later[0] < pick:
                jumped = True
                break
        if jumped:
            spots.append((n, None))
            continue
        spots.append((n, pick))
        cur = pick
    return spots


def trim_tail(chunk):
    """Drop a Part/Chapter banner or group sub-heading belonging to what follows."""
    m = HEADING_CUT.search(chunk, 1)
    if m:
        chunk = chunk[:m.start()]
    lines = chunk.rstrip().split("\n")
    while lines:
        last = lines[-1].strip()
        key = re.sub(r"\W+", "", last).lower()
        caps_banner = (last == last.upper() and len(last) > 3
                       and not re.search(r"[.;:,]", last))
        if key and (key in SUBHEADS or caps_banner):
            lines.pop()
        else:
            break
    return "\n".join(lines)


def clause_level(tok):
    if tok.isdigit():
        return 1
    if ROMAN_CL.match(tok) and len(tok) > 1:
        return 3
    return 2


def to_paragraphs(raw):
    """Rebuild clauses from the PDF's own line breaks."""
    paras, cur, lvl = [], [], 0
    for ln in raw.split("\n"):
        if not ln.strip():
            continue
        starts = bool(PARA_START.match(ln))
        if starts and cur:
            paras.append((lvl, " ".join(cur)))
            cur = []
        if starts or not cur:
            m = CLAUSE.match(ln)
            lvl = clause_level(m.group(1)) if m else 0
        cur.append(ln.strip())
    if cur:
        paras.append((lvl, " ".join(cur)))
    out = []
    for l, t in paras:
        t = re.sub(r"[ \t]+", " ", t).strip()
        # footnote marker -> a token the page turns into a <sup>
        t = re.sub("\x03(\\d+)\x04", "⟦\\1⟧", t)
        if t:
            out.append({"lvl": l, "t": t})
    return out


def resolve_notes(chunk):
    """Renumber page-local footnote markers into per-article ones."""
    seen, order = {}, []

    def sub(m):
        key = "%s:%s" % (m.group(1), m.group(2))
        if key not in seen:
            order.append(key)
            seen[key] = len(order)
        return "\x03%d\x04" % seen[key]

    chunk = TAG.sub(sub, chunk)
    notes = [{"n": i + 1, "text": NOTES.get(k, "").strip()} for i, k in enumerate(order)]
    return chunk, [n for n in notes if n["text"]]


AMD = re.compile(r"Constitution\s*\(([^)]*?)Amendment\s*\)\s*Act,?\s*(\d{4})", re.I)


def amendments_of(notes):
    out, seen = [], set()
    for n in notes:
        for m in AMD.finditer(n["text"]):
            words = re.sub(r"\s+", " ", m.group(1)).strip(" -")
            label = "%s (%s)" % (words.title(), m.group(2))
            if label not in seen:
                seen.add(label)
                out.append(label)
    return out


PREAMBLE_BREAK = re.compile(
    r"(?=JUSTICE, social|LIBERTY of thought|EQUALITY of status"
    r"|and to promote among|FRATERNITY assuring|IN OUR CONSTITUENT)")


def preamble():
    """The Preamble prints as one block; break it where it is meant to be read."""
    i = TEXT.find("WE, THE PEOPLE OF INDIA")
    j = TEXT.find("PART I", i)
    raw, notes = resolve_notes(TEXT[i:j])
    paras = to_paragraphs(raw)
    out = []
    for p in paras:
        for piece in PREAMBLE_BREAK.split(p["t"]):
            piece = piece.strip()
            if piece:
                out.append({"lvl": 1 if piece[0].isupper() and not piece.startswith("WE,")
                            and not piece.startswith("IN OUR") else 0, "t": piece})
    return out, notes


def main():
    spots = locate_articles()
    ordered = [(n, p) for n, p in spots if p is not None]
    missing = [n for n, p in spots if p is None]

    ctx, part, chapter, sub = {}, None, None, None
    for it in TOC:
        if it["kind"] == "part":
            part, chapter, sub = it, None, None
        elif it["kind"] == "chapter":
            chapter, sub = it, None
        elif it["kind"] == "subheading":
            sub = it["title"]
        elif it["kind"] == "article":
            ctx[it["num"]] = (part, chapter, sub)

    tocmap = {it["num"]: it for it in TOC if it["kind"] == "article"}
    # article 395 is the last one; without this the schedules land inside it
    sched = re.search(r"(?m)^[\s\[\*\d]*(?:\x01\d+:\d+\x02)?\[?\s*FIRST\s+SCHEDULE", TEXT)
    body_end = sched.start() if sched else len(TEXT)
    arts = []
    for i, (num, start) in enumerate(ordered):
        stop = ordered[i + 1][1] if i + 1 < len(ordered) else body_end
        chunk, notes = resolve_notes(trim_tail(TEXT[start:stop]))
        head = "(?:%s)" % "|".join(re.escape(x) for x in {num, num.replace("-", "")})
        rest = re.sub(r"^" + PRE_RESOLVED + head + r"\s*\.\s*", "", chunk, count=1)
        # only a true em/en dash ends the marginal heading - an ASCII hyphen
        # would cut "Subject-matter of laws..." in half
        m = re.match(r"\s*\[?\s*(.{3,240}?)\s*\.?\s*\]?\s*[—–]{1,2}\s*", rest, re.S)
        if m:
            rest = rest[m.end():]
        p, c, s = ctx.get(num, (None, None, None))
        it = tocmap.get(num, {})
        n_int = int(re.match(r"\d+", num).group(0))
        arts.append({
            "num": num,
            "n": n_int,
            "suffix": num[len(str(n_int)):],
            "heading": it.get("heading", "").rstrip(" .-"),
            "omitted": bool(it.get("omitted")) or bool(re.match(r"^\s*Omitted", rest)),
            "part": p["num"] if p else None,
            "partTitle": p["title"] if p else None,
            "chapter": ("%s. %s" % (c["num"], c["title"])) if c else None,
            "group": s,
            "paras": to_paragraphs(rest),
            "notes": notes,
            "amendments": amendments_of(notes),
        })

    for num in missing:
        it = tocmap.get(num, {})
        p, c, s = ctx.get(num, (None, None, None))
        n_int = int(re.match(r"\d+", num).group(0))
        arts.append({
            "num": num, "n": n_int, "suffix": num[len(str(n_int)):],
            "heading": it.get("heading", "").rstrip(" .-"), "omitted": True,
            "part": p["num"] if p else None,
            "partTitle": p["title"] if p else None,
            "chapter": ("%s. %s" % (c["num"], c["title"])) if c else None,
            "group": s,
            "paras": [{"lvl": 0, "t": "Omitted."}], "notes": [], "amendments": [],
        })
    # "-I" must sort with "I", not before "A", so drop the hyphen for ordering
    arts.sort(key=lambda a: (a["n"], a["suffix"].replace("-", "")))
    for a in arts:
        plain = a["num"].replace("-", "")
        if plain != a["num"]:
            a["alias"] = plain

    pre_paras, pre_notes = preamble()
    data = {
        "parts": [{"num": it["num"], "title": it["title"]}
                  for it in TOC if it["kind"] == "part"],
        "preamble": {"paras": pre_paras, "notes": pre_notes},
        "articles": arts,
    }
    json.dump(data, open(HERE / "articles.json", "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)

    print("articles:", len(arts), " not printed in body:", missing)
    print("omitted:", sum(1 for a in arts if a["omitted"]),
          " live:", sum(1 for a in arts if not a["omitted"]))
    print("empty:", [a["num"] for a in arts if not a["paras"]])
    longest = sorted(arts, key=lambda a: -sum(len(p["t"]) for p in a["paras"]))[:4]
    print("longest:", [(a["num"], sum(len(p["t"]) for p in a["paras"])) for a in longest])


if __name__ == "__main__":
    main()
