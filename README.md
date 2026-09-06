# The Constitution of India — bare act, indexed and explained

A local, offline single-page site carrying the **full official text** of the Constitution of
India, arranged exactly as the Constitution arranges itself — 26 Parts, 506 article entries,
12 Schedules — with a plain-language reading and **the catch** under every article, plus
mind maps and flow diagrams for the processes that are hard to hold in your head.

## Opening it

Double-click **`Open the Constitution.bat`**. It starts the local server and opens your
browser. Keep the console window open while you read; closing it stops the server.

Or double-click **`site/index.html`** directly. No server, no install — every data file ships
as a `.js` file precisely so that `file://` works.

Or from a terminal:

```bash
python constitution/site/serve.py
```

Then open <http://localhost:8770>.

**If the page will not load.** `localhost:8770` only answers while the server is running, so
start it with the `.bat` (or the command above) before using that address. If the page opens
but comes up blank or half-drawn, the browser is holding an old copy — press **Ctrl+Shift+R**.
When the data genuinely fails to load, the page now says so and names the likely cause instead
of showing you nothing.

## What is in it

| View | What it gives you |
|---|---|
| **Overview** | *The Constitution of India for Exams* — a board of doors and nothing else. Four illustrated ways in (Preamble, All articles, Important articles for exams, Mind maps), then Landmark judgments at the head of the 26 Parts, then Amendments, Schedules and About & sources. No prose, no counts row — the source note and the disclaimer sit in the footer of every page |
| **Preamble** | Bare text, the 42nd Amendment footnotes, and a mind map of what it is doing |
| **All Parts** | 26 Parts, I to XXII including IVA, IXA, IXB and XIVA — and VII, repealed whole |
| **Article page** | *What it says* → **bare text as printed** → *The catch* → *Worth knowing* → diagram → landmark judgments → *What the examiners ask* → amendment footnotes → cross-links. The plain reading comes first, so you meet the provision already knowing roughly what it does |
| **Part page** | Every Part with more than one article opens as two panels. Where the Part has chapters or group headings they fill the left panel and one section’s articles the right — The Union splits into the President, the Council of Ministers, Parliament, the ordinance power, the Supreme Court and the CAG. Where it has neither, the left panel lists its articles instead, so moving from The Union to Citizenship never makes the column vanish. A section has its own address: `#/part/V/13` opens the Union Judiciary, `#/part/V/all` opens the lot |
| **Reading an article** | Every article is read **in the same shell**. The rail stays on the left with its section open and every article in it listed, so you move article to article without leaving the section — and the mind map is a strip under the breadcrumb that stays open, once opened, for every article in that section. Previous and next sit at both ends: short buttons beside the breadcrumb, and at the foot two cards naming the article each one leads to |
| **Cross-references** | Every article and amendment named on a page opens **in place**. Reading article 368 and hit the 24th Amendment? Click it and what it did, when it commenced and which articles it touched unfold under the line, without losing your place |
| **Schedules** | All twelve, including the three legislative Lists and the 22 languages |
| **Amendments** | All 106, each with what it did and which articles it touched |
| **Landmark judgments** | 125 cases across 63 articles as a filterable card grid; click a card to read the judgment in an overlay without leaving the page |
| **What the examiners ask** | 150 articles, the Preamble and eight Schedules ranked by exam weight, filterable by keyword and by tier; click a row to read the whole note in a panel without leaving the list |
| **Mind maps & flows** | 46 hand-drawn diagrams. A short Part gets one map for the whole of it — Part III's six categories of rights fit on a page. A long one gets a map per section instead, drawn where that section is read, and carried into every article of that section. Every Part also gets one generated from the data |
| **About & sources** | What the site is and is not, where the text came from, what has been verified, the licence, and how to report an error |

The site sidebar folds away with the **☰** button in the top bar, at any width, and the
choice is remembered — two panels and a wide diagram both want the room.

Search (`/` to focus) covers article numbers and headings, the bare text, the Schedules, the
plain-language explanations, the landmark judgments and the exam notes. Typing `21` jumps to
Article 21; `habeas corpus` finds Articles 32 and 226; `kesavananda` finds Article 368; `kihoto`
finds the Tenth Schedule; `creamy layer` finds Articles 15, 16 and 340.

## What is verified, and what is written here

Every section heading on the site carries one of two markers.

| Marker | Meaning |
|---|---|
| **official text** | Reproduced from the official PDF and machine-checked against it — the bare text of every article, the Schedules, and the amendment footnotes |
| **written for this site** | Commentary — the plain-language readings, judgment summaries, exam notes and diagrams |

The distinction matters and the site states it rather than blurring it. The full
account, including what the audit does **not** establish, is on the About page and in
`build/FACTCHECK.md`.

**The audit.** Every judgment summary, exam entry and concept explanation has been read
line by line, with eight mechanical cross-checks run against the verified text
— article references, amendment years, verbatim quotations, stated counts against the
lists that follow, quantities against the article text, case years against the judgments
dataset, and a sweep for claims repeated across entries that had diverged. A fourth
phase audited the extraction itself after a reader's screenshot showed the 106th
Amendment dated to 1991 — a parser fault repeats silently across hundreds of entries
where a prose fault sits in one place. **55 corrections** were made in all.
`build/FACTCHECK.md` records each one with the source that settled it.

Where the source is genuinely ambiguous the site now says so rather than choosing. An
amendment whose provisions commenced on different dates reads *"Commenced in stages"* and
asserts no single date; one whose date has not been notified reads *"Passed, not yet in
force"*.

## Licensing

Three kinds of material, three sets of terms — set out in full in `LICENSE`.

| | |
|---|---|
| The Constitution text | Government material, reproduced with commentary under section 52(1)(q)(ii) of the Copyright Act, 1957 and the Government of India reproduction terms |
| The commentary written here | CC BY 4.0 |
| The code and build scripts | MIT |

This project is not produced by, endorsed by or affiliated with the UPSC, any State
Public Service Commission, the Legislative Department, or any government body.

## The source

**The Constitution of India, as on 1st May 2024**, published by the Legislative Department,
Ministry of Law and Justice, Government of India — updated to the Constitution (One Hundred
and Sixth Amendment) Act, 2023.

<https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf>

The 106th is still the most recent amendment actually enacted, so this is the Constitution as
it currently stands. Later Amendment Bills have not become law.

The bare text is reproduced exactly as printed, footnote markers and all. A superscript number
in the text is the official footnote recording which Amendment Act inserted or substituted that
passage — hover it to read the note, or scroll to the *Amendment history* section. `***` marks
words omitted by an amendment, again as the official text prints them.

## Rebuilding the data

Everything under `site/data/` except the explanation files is generated from the PDF:

```bash
cd constitution/build && python parse_toc.py && python parse_body.py && python build_data.py && python parse_schedules.py && python build_amendments.py && python export_site.py
```

| Script | What it does |
|---|---|
| `parse_toc.py` | Reads the printed contents pages to fix the exact order of Parts, Chapters, sub-headings and article numbers, and each article's official marginal heading |
| `parse_body.py` | Strips running headers, splits each printed page's footnotes from its body, and resolves the page-local footnote markers so they survive being joined |
| `build_data.py` | Slices each article out of the body, rebuilds its clauses, attaches its footnotes, and derives which Amendment Acts touched it |
| `parse_schedules.py` | Splits the twelve Schedules, breaking the Seventh into its three Lists |
| `build_amendments.py` | Inverts article → amendment into amendment → articles, straight from the official footnotes |
| `export_site.py` | Writes the `window.X = {...}` data files and builds the cross-reference index |
| `verify.py` | Checks the result against the raw PDF text |

`python verify.py` currently reports:

```
coverage: 405981 of 409946 body characters accounted for (99.0%)
fidelity: 60 of 60 sampled articles matched the source verbatim
bleed:    0 articles contain the next article's heading
RESULT:   PASS
```

The 1.0% not accounted for is Part and Chapter banners and the group sub-headings, which are held
in the structure rather than in any article's text.

## Editing the explanations

`site/data/explain-1.js` … `explain-8.js` hold one entry per article, split by Part:

```js
"21": {
  simple: "what the article does, in ordinary words",
  catch:  "the qualifier, exception or judicial gloss that changes how it works",
  note:   "anything else worth carrying in your head"     // optional
},
```

Part-level entries are keyed `partIII`, schedule-level ones `schVII`.

**House style.** Short declarative sentences, one idea each. Say the thing plainly before
qualifying it. Break into paragraphs where the ideas are distinct — a `\n\n` inside the string
becomes a paragraph on the page. Avoid stacking clauses behind em-dashes; if a sentence needs
three of them, it is two sentences.

## Editing the landmark judgments

`site/data/cases-1.js` … `cases-4.js`, keyed the same way — by article number, or `preamble`,
or `schX`. A key holds an array, newest last:

```js
"21": [
  { case:   "Maneka Gandhi",                        // the short name everyone uses
    full:   "Maneka Gandhi v. Union of India",      // optional, if it adds anything
    year:   "1978",
    bench:  "7 judges",                             // optional; include when the number matters
    status: "good",   // good | partly | overruled | historic (historic = undone by Parliament)
    facts:  "what the dispute actually was",
    held:   "what the Court decided",
    why:    "why it still matters" },
]
```

A case may appear under more than one article — Kesavananda sits under the Preamble and under
Article 368, Bommai under the Preamble, Article 75 and Article 356. The counts on the overview
page and in the sidebar de-duplicate by case name, so adding a cross-listing does not inflate
them. Any `Article 21`-style reference inside these fields is auto-linked, and the whole text
is included in search.

## Editing what the examiners ask

`site/data/exam-1.js` … `exam-4.js`, keyed by article number, or `preamble`, or `schX`. One
entry per key. It renders directly below the landmark judgments on the article page, and the
same note opens as a panel when you click a row at `#/exam`:

```js
"356": {
  tier: 1,                    // 1 core, 2 recurs, 3 worth holding — drives the ranking
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  why: "why it is on the list, in plain words",
  concepts: [
    { t: "How it is triggered",
      d: "On receipt of a report from the Governor, *or otherwise*. The words \"or \
otherwise\" mean the centre does not need a Governor's report at all." },
  ],
  seen: ["UPSC Pre 2018 — what that year's paper tested"],   // optional
  trap: "where the mark is usually lost"                     // optional
},
```

**House style for `concepts`.** `t` is the point, three to seven words. `d` explains it in one
or two sentences. Write it out — no shorthand, no bare fragments, and assume the reader knows
no law and has not read the article yet. A concept that reads as a label rather than an
explanation is the thing this section exists to avoid.

`\n\n` inside `why` or `trap` becomes a paragraph break. `*stress*` marks the single word a
question turns on — “only”, “or otherwise”, “total membership” — and renders as coloured
bold, not italics. Any `Article 21`-style reference is auto-linked, and every field is
included in search.

`tier`, `why` and `concepts` are the required fields. Adding a key adds a row to `#/exam` and a
block to that article; nothing else needs touching. A concept written as a plain string still
renders, as the point with no explanation after it.

**Where the ranking comes from.** Published previous-year-paper compilations for the UPSC Civil
Services Prelims (1995–2025) and Mains General Studies Paper II (2013–2024), UPPSC / UPPCS Mains
(2015–2025), and the polity sections of other State PSC papers. The commissions do not tag their
own questions by article, so the mapping from a question to an article is editorial — a `seen`
line records that the year's paper carried a question on that subject, not a numbered question.

## Editing the diagrams

`site/data/maps.js`, keyed by article number (`"368"`), Part (`partIII`), Schedule (`schX`)
or `preamble`. A key may hold one diagram or an array of them.

`site/data/maps-part.js` holds the maps drawn for **one section** of a Part rather than the
whole of it. The key is `part` + the Part numeral + `.` + the chapter numeral + `:` + the
section's name, exactly as `partSections()` in `app.js` builds it:

```js
'partV.IV:The Union Judiciary': { ... }      // Part V, chapter IV
'partXIV.II:Public Service Commissions': { ... }
'partIII:Right to Equality': { ... }         // no chapter numeral - Part III has no chapters
```

The chapter numeral is in the key because Part VI has a section called *General* in chapter
I and another in chapter III. A whole-Part key (`partIII`, `partXVII`) still works and its
map is drawn above the panels, which is the right shape when one diagram covers the Part.

```js
// vertical flow chart; jumps are drawn down the right margin
{ type: 'flow', title, caption,
  nodes: [{ id, label, kind: 'start'|'step'|'decision'|'end', note }],
  edges: [{ from, to, label, lane }] }

// left-to-right mind map; a node with href becomes clickable
{ type: 'mind', title, caption, root: { label, href, children: [...] } }
```

Both are laid out and drawn as inline SVG by `app.js` — no libraries, and they inherit the
light/dark theme automatically.

A mind map centres its root box in the full height of the tree, which on a tall map leaves a
column of nothing beside the first few hundred pixels. Where the heading immediately above
already names the diagram — a section panel, the strip on an article page — the root is
dropped and the branches start at the top left. `diagrams(spec, compact)` is the switch; a
Part-level or article-level map keeps its root, because there the root is the only thing
naming it.

Labels are never truncated. Box widths are measured from the real text metrics of the longest
label in each column (via a canvas `measureText`), so a column of long article headings gets
the width it needs and a column of short ones stays narrow; anything that still does not fit
on one line simply takes more lines, and the tidy-tree pass gives every subtree the height it
asks for. A map wider than the reading column scrolls inside its own box rather than pushing
the page sideways.

## Files

```
constitution/
  source/     the downloaded PDFs and the extracted plain text
  build/      the parsers, the intermediate JSON, and verify.py
  site/       the website — open index.html
    data/     generated data + hand-written explanations, judgments, diagrams and exam notes
```
