"""Slice the bare text of the Constitution out of the Legislative Department PDF.

Footnote numbering restarts on every printed page, so inline markers are
resolved page-by-page before the pages are joined - otherwise footnote 1 of
page 40 would collide with footnote 1 of page 41.
"""
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
SRC = HERE.parent / "source" / "coi-en.txt"

BODY_START = 31          # 0-indexed page holding "PREAMBLE"
APPX_START = 381

RULE = re.compile(r"^_{6,}\s*$")
RUNHEAD = re.compile(
    r"^\s*(THE\s+CONSTITUTION\s+OF\s+INDIA|\(\s*Parts?[^)]*\)|\d{1,3})\s*$", re.I)
# The space after the number is not always there: one footnote on the page
# carrying article 332A prints as "1.Ins. by the Constitution (One Hundred and
# Sixth Amendment) Act, 2023". Requiring the space lost that whole note, and
# with it 332A's amendment history.
FN_START = re.compile(r"^\s*(\d{1,2})\.\s*(\S.*)$")
# digits sitting immediately before "[" or "*" are footnote markers, not text
MARKER = re.compile(r"(?<![\w.])(\d{1,2})(?=\*?\[|\*\*\*)")


def split_page(raw):
    """Return (body_lines, {footnote_no: text}) for one printed page."""
    lines = raw.split("\n")
    cut = len(lines)
    for i, ln in enumerate(lines):
        if RULE.match(ln):
            cut = i
            break
    body = [ln for ln in lines[:cut] if not RUNHEAD.match(ln)]

    notes, cur, buf = {}, None, []
    for ln in lines[cut + 1:]:
        m = FN_START.match(ln)
        if m and (cur is None or int(m.group(1)) in (cur + 1, 1)):
            if cur is not None:
                notes[cur] = " ".join(buf).strip()
            cur, buf = int(m.group(1)), [m.group(2)]
        elif cur is not None:
            buf.append(ln.strip())
    if cur is not None:
        notes[cur] = " ".join(buf).strip()
    return body, notes


def tag_markers(text, page_idx, valid):
    """Rewrite inline footnote markers into page-qualified tokens.

    A two-digit run is ambiguous: "12***" can be footnote 12, or footnotes 1
    and 2 side by side.  The page's own footnote list settles it.
    """
    def sub(m):
        run = m.group(1)
        if int(run) in valid:
            return "\x01%d:%d\x02" % (page_idx, int(run))
        if len(run) == 2 and int(run[1]) in valid:
            head = "\x01%d:%d\x02" % (page_idx, int(run[0])) if int(run[0]) in valid else run[0]
            return head + "\x01%d:%d\x02" % (page_idx, int(run[1]))
        return run
    return MARKER.sub(sub, text)


def main():
    pages = SRC.read_text(encoding="utf-8").split("\n\x0c\n")
    out, notes = [], {}
    for idx in range(BODY_START, APPX_START):
        body, fns = split_page(pages[idx])
        for n, t in fns.items():
            notes["%d:%d" % (idx, n)] = t
        out.append(tag_markers("\n".join(body), idx, set(fns)))

    text = "\n".join(out)
    (HERE / "body_tagged.txt").write_text(text, encoding="utf-8")
    json.dump(notes, open(HERE / "footnotes.json", "w", encoding="utf-8"),
              ensure_ascii=False, indent=0)
    print("body chars:", len(text), " footnotes:", len(notes))


if __name__ == "__main__":
    main()
