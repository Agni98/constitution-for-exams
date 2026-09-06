"""Report how many sightings carry a citation, and catch bad ones.

A sighting in site/data/exam-*.js is one of two shapes:

    "UPSC Pre 2021 - birth-based citizenship"                       uncited
    { s: "UPSC Pre 2021 - ...", p: "CSP-2021-GS1", q: "42" }        cited

`p` must be a key in site/data/papers.js. This script fails on anything that
would put a claim on the page that nobody can follow:

  * a paper key with no entry in papers.js  - a dangling reference
  * an entry whose url is missing or not http(s)
  * a cited sighting with no text
  * a paper defined in papers.js that nothing cites - reported, not fatal

It does not check that a citation is *correct*. Nothing here can: that needs
somebody to open the paper. What it does is make the difference between cited
and uncited countable, so the site can print the number instead of a claim.

The data files are hand-written JavaScript, so this walks them with a small
string-aware scanner rather than a regular expression. A first attempt with
regexes counted 199 sightings where the site counts 217 - a checker that
silently undercounts is worse than no checker, because the coverage figure it
prints is the whole point of it.
"""
import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

DATA = Path(__file__).resolve().parent.parent / "site" / "data"


def skip_string(src, i):
    """Index just past the string literal starting at src[i]."""
    quote, i = src[i], i + 1
    while i < len(src):
        if src[i] == "\\":
            i += 2
            continue
        if src[i] == quote:
            return i + 1
        i += 1
    return i


def find_unquoted(src, needle, start=0):
    """First index of `needle` that is not inside a string literal."""
    i, n = start, len(needle)
    while i < len(src):
        c = src[i]
        if c in "\"'":
            i = skip_string(src, i)
            continue
        if src.startswith(needle, i):
            return i
        i += 1
    return -1


def read_array(src, i):
    """Given src[i] == '[', return (elements, index past the closing ']').

    Elements are split on commas at bracket depth zero, so an element may
    itself be an object or a concatenation of strings.
    """
    assert src[i] == "["
    i += 1
    depth, start, out = 0, i, []
    while i < len(src):
        c = src[i]
        if c in "\"'":
            i = skip_string(src, i)
            continue
        if c in "[{(":
            depth += 1
        elif c in ")}":
            depth -= 1
        elif c == "]":
            if depth == 0:
                out.append(src[start:i])
                return [e for e in (x.strip() for x in out) if e], i + 1
            depth -= 1
        elif c == "," and depth == 0:
            out.append(src[start:i])
            start = i + 1
        i += 1
    return [e for e in (x.strip() for x in out) if e], i


def article_before(src, i):
    """The nearest `"key":` heading above index i, for error messages."""
    m = None
    for m2 in re.finditer(r'"([^"\n]{1,12})"\s*:\s*\{', src[:i]):
        m = m2
    return m.group(1) if m else "?"


def field(obj, name):
    """Value of a single-quoted or double-quoted field in an object literal."""
    m = re.search(r"\b%s\s*:\s*(['\"])((?:[^\\]|\\.)*?)\1" % name, obj, re.S)
    return m.group(2) if m else None


def main():
    papers_src = (DATA / "papers.js").read_text(encoding="utf-8")
    # only the live registry, not the commented-out example above it
    reg = papers_src[papers_src.find("window.COI_PAPERS ="):]
    keys = set(re.findall(r"^\s*'([^']+)'\s*:\s*\{", reg, re.M))
    urls = dict(re.findall(r"'([^']+)'\s*:\s*\{[^}]*?url:\s*'([^']*)'", reg, re.S))

    total = cited = 0
    problems, used = [], set()

    for f in sorted(DATA.glob("exam-*.js")):
        src = f.read_text(encoding="utf-8")
        i = 0
        while True:
            i = find_unquoted(src, "seen:", i)
            if i < 0:
                break
            j = src.index("[", i)
            items, i = read_array(src, j)
            for it in items:
                total += 1
                if not it.startswith("{"):
                    continue                      # a bare string: uncited
                cited += 1
                where = "%s  art %s" % (f.name, article_before(src, j))
                p, t = field(it, "p"), field(it, "s")
                if not p:
                    problems.append("%s: cited sighting with no paper key" % where)
                    continue
                used.add(p)
                if p not in keys:
                    problems.append("%s: paper '%s' is not in papers.js" % (where, p))
                elif not urls.get(p, "").startswith(("http://", "https://")):
                    problems.append("%s: paper '%s' has no usable url" % (where, p))
                if not (t or "").strip():
                    problems.append("%s: cited sighting with no text" % where)

    print("sightings:  %d" % total)
    print("cited:      %d  (%.1f%%)" % (cited, 100.0 * cited / total if total else 0))
    print("papers:     %d defined, %d cited" % (len(keys), len(used)))

    unused = keys - used
    if unused:
        print("\nnot cited by anything (harmless):")
        for k in sorted(unused):
            print("  ", k)

    if problems:
        print("\nPROBLEMS")
        for p in problems:
            print("  ", p)
        print("\nRESULT: FAIL")
        return 1

    if cited == 0:
        print("\nNo sighting carries a citation yet. That is the honest state of the")
        print("dataset - every one was written from recollection of the papers, not")
        print("transcribed from them. site/data/papers.js says how to add one.")
    print("\nRESULT: PASS")
    return 0


if __name__ == "__main__":
    sys.exit(main())
