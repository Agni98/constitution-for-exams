"""Build the amendment index straight out of the printed footnotes.

Every footnote in the official text names the Amendment Act that made the
change, so inverting article -> amendments gives amendment -> articles without
anyone having to retype a table.
"""
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent

WORDS = {
    "first": 1, "second": 2, "third": 3, "fourth": 4, "fifth": 5, "sixth": 6,
    "seventh": 7, "eighth": 8, "ninth": 9, "tenth": 10, "eleventh": 11,
    "twelfth": 12, "thirteenth": 13, "fourteenth": 14, "fifteenth": 15,
    "sixteenth": 16, "seventeenth": 17, "eighteenth": 18, "nineteenth": 19,
    "twentieth": 20, "thirtieth": 30, "fortieth": 40, "fiftieth": 50,
    "sixtieth": 60, "seventieth": 70, "eightieth": 80, "ninetieth": 90,
    "hundredth": 100, "hundred": 100,
    "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50, "sixty": 60,
    "seventy": 70, "eighty": 80, "ninety": 90, "one": 1, "two": 2, "three": 3,
    "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
}


def to_number(phrase):
    """'One Hundred And Sixth' -> 106, 'Forty-Second' -> 42."""
    toks = [t for t in re.split(r"[\s\-]+", phrase.lower()) if t and t != "and"]
    total, hundreds = 0, 0
    for t in toks:
        v = WORDS.get(t)
        if v is None:
            return None
        if v == 100:
            hundreds = max(total, 1) * 100
            total = 0
        else:
            total += v
    return hundreds + total or None


def main():
    arts = json.load(open(HERE / "articles.json", encoding="utf-8"))
    scheds = json.load(open(HERE / "schedules.json", encoding="utf-8"))

    idx = {}

    def entry(num, year):
        e = idx.setdefault(num, {"num": num, "year": year, "articles": [],
                                 "schedules": [], "wef": set(), "pending": False})
        e["year"] = min(e["year"], year)
        return e

    def add_where(e, where):
        bucket = e["schedules"] if where.startswith("Sch") else e["articles"]
        if where not in bucket:
            bucket.append(where)

    # A commencement date belongs to the Act named beside it in the SAME
    # footnote, not to every Act mentioned anywhere on the article. Reading a
    # whole article's notes as one blob gave the 106th Amendment (2023) a date
    # of 1991, borrowed from the 69th.
    ACT = re.compile(r"Constitution\s*\(([^)]*?)Amendment\s*\)\s*Act,?\s*(\d{4})", re.I)
    IBID = re.compile(r"\bibid\b", re.I)
    WEF = re.compile(r"w\.e\.f\.\s*(\d{1,2}-\d{1,2}-\d{4})")
    NOTYET = re.compile(r"date\s+yet\s+to\s+be\s+notified", re.I)

    # Some Schedule footnotes arrive with two or three printed notes run
    # together — "... (w.e.f. 16-9-2016). 4 Ins. by the Assam Reorganisation
    # ... (w.e.f. 2-4-1970)." Splitting on that boundary keeps one note's date
    # from being handed to the Act named in the next.
    JOINED = re.compile(r"(?<=\.)\s+\d{1,2}\s+(?=[A-Z][a-z])")

    def scan(notes, where):
        """Pair each Act named in a note with the date that follows it there."""
        last = None                       # what "ibid." currently refers back to
        for n in notes:
          for text in JOINED.split(n["text"]):
              marks = [(m.start(), "act", m) for m in ACT.finditer(text)]
              marks += [(m.start(), "wef", m) for m in WEF.finditer(text)]
              marks += [(m.start(), "none", m) for m in NOTYET.finditer(text)]
              marks.sort()

              if not any(k == "act" for _, k, _ in marks) and IBID.search(text) and last:
                  marks = [(-1, "act", None)] + marks   # "ibid." stands in for `last`

              cur = None
              for _, kind, m in marks:
                  if kind == "act":
                      if m is None:
                          cur = last
                      else:
                          num = to_number(re.sub(r"\s+", " ", m.group(1)).strip(" -"))
                          if not num:
                              cur = None
                              continue
                          cur = (num, m.group(2))
                          last = cur
                      e = entry(cur[0], cur[1])
                      add_where(e, where)
                  elif cur:
                      e = entry(cur[0], cur[1])
                      if kind == "wef":
                          e["wef"].add(m.group(1))
                      else:
                          e["pending"] = True

    for a in arts["articles"]:
        scan(a["notes"], "Art. " + a["num"])
    for s in scheds:
        scan(s["notes"], "Sch. " + s["id"])

    out = []
    for num in sorted(idx):
        e = idx[num]
        wef = sorted(e["wef"], key=lambda d: tuple(reversed(d.split("-"))))
        # Keep every commencement date the footnotes gave, not just the first.
        # A large Act commences in stages — the 44th has seven distinct dates —
        # and the footnote on any one article records the date for that
        # provision alone. Picking one and calling it "the" date was how the
        # 100th Amendment (2015) came to be dated 1960. The page says "in force
        # from" only where a single date was found.
        rec = {"num": num, "year": e["year"],
               "articles": e["articles"], "schedules": e["schedules"],
               "wef": wef}
        # an Act whose footnotes say only "date yet to be notified" is passed
        # but not in force, which is a fact worth showing rather than hiding
        if not wef and e["pending"]:
            rec["pending"] = True
        out.append(rec)
    json.dump(out, open(HERE / "amendments.json", "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    print("amendments traced from footnotes:", len(out))
    print("highest:", out[-1]["num"], out[-1]["year"], out[-1]["articles"][:6])
    have = {e["num"] for e in out}
    print("gaps 1-106:", [n for n in range(1, 107) if n not in have])


if __name__ == "__main__":
    main()
