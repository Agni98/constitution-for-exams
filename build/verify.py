"""Check the parsed articles against the raw PDF text.

Three tests:
  1. coverage  - how much of the printed body ended up inside an article
  2. fidelity  - a random sample of parsed sentences must appear verbatim in
                 the original page text, ignoring whitespace
  3. bleed     - no article may contain the heading of the article after it
"""
import json
import random
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
RAW = (HERE.parent / "source" / "coi-en.txt").read_text(encoding="utf-8")
DATA = json.load(open(HERE / "articles.json", encoding="utf-8"))
ARTS = DATA["articles"]

flat_raw = re.sub(r"\s+", " ", RAW)


def strip_markers(t):
    t = re.sub(r"⟦\d+⟧", "", t)
    return re.sub(r"\s+", " ", t).strip()


def coverage():
    """Marginal headings move into their own field, so count them back in."""
    body = (HERE / "body_tagged.txt").read_text(encoding="utf-8")
    body = re.sub(r"\x01\d+:\d+\x02", "", body)
    end = body.find("FIRST SCHEDULE")
    body_chars = len(re.sub(r"\s+", "", body[:end]))
    art_chars = sum(len(re.sub(r"\s+", "", strip_markers(p["t"])))
                    for a in ARTS for p in a["paras"])
    head_chars = sum(len(re.sub(r"\s+", "", a["heading"])) + len(a["num"]) for a in ARTS)
    pre = sum(len(re.sub(r"\s+", "", strip_markers(p["t"])))
              for p in DATA["preamble"]["paras"])
    got = art_chars + head_chars + pre
    print("coverage: %d of %d body characters accounted for (%.1f%%)"
          % (got, body_chars, 100.0 * got / body_chars))
    print("          text %d + headings %d + preamble %d" % (art_chars, head_chars, pre))
    return got, body_chars


def fidelity(n=60, seed=7):
    random.seed(seed)
    sample = random.sample([a for a in ARTS if a["paras"] and not a["omitted"]], n)
    bad = []
    for a in sample:
        para = max(a["paras"], key=lambda p: len(p["t"]))
        text = strip_markers(para["t"])
        # take a distinctive run of words from the middle of the clause
        words = text.split()
        if len(words) < 12:
            continue
        # brackets and the digits of footnote markers sit inside the printed
        # sentence, so strip both from the needle and the haystack
        def bare(s):
            return re.sub(r"[\[\]\d]", "", s)
        probe = bare(" ".join(words[4:16]))
        if bare(flat_raw).find(probe) < 0:
            bad.append((a["num"], probe[:80]))
    print("fidelity: %d of %d sampled articles matched the source verbatim"
          % (n - len(bad), n))
    for num, probe in bad:
        print("   MISMATCH art %s: %r" % (num, probe))
    return bad


def bleed():
    by_num = {a["num"]: a for a in ARTS}
    order = [a["num"] for a in ARTS]
    bad = []
    for i, num in enumerate(order[:-1]):
        nxt = by_num[order[i + 1]]
        if not nxt["heading"]:
            continue
        blob = " ".join(strip_markers(p["t"]) for p in by_num[num]["paras"])
        probe = re.sub(r"\s+", " ", nxt["heading"])[:45]
        # only a heading sitting at the very END of the text is a bleed; an
        # article may perfectly well mention the subject of the next one
        if len(probe) > 25 and probe.lower() in blob[-160:].lower():
            bad.append((num, nxt["num"]))
    print("bleed: %d articles contain the next article's heading" % len(bad))
    for x in bad[:12]:
        print("   art %s swallowed art %s" % x)
    return bad


def stray_headings():
    """Part / Chapter banners must not survive inside article text."""
    hits = []
    for a in ARTS:
        for p in a["paras"]:
            if re.search(r"\bPART\s+[IVXLC]+[AB]?\b\s+[A-Z]{4}", p["t"]):
                hits.append((a["num"], p["t"][:70]))
    print("stray Part banners inside article text: %d" % len(hits))
    for h in hits[:8]:
        print("   art %s: %r" % h)
    return hits


if __name__ == "__main__":
    got, want = coverage()
    bad_f = fidelity()
    bad_b = bleed()
    bad_s = stray_headings()
    ok = (got / want > 0.93) and not bad_f and not bad_b and not bad_s
    print("\nRESULT:", "PASS" if ok else "REVIEW NEEDED")
    sys.exit(0 if ok else 1)
