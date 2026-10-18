# The Constitution of India — bare act, indexed and explained

The **full official text** of the Constitution of India, arranged exactly as the Constitution
arranges itself — 26 Parts, 506 article entries, 12 Schedules — with a plain-language reading
under every article, the landmark judgments, all 106 amendments, exam notes, an MCQ bank and
hand-drawn mind maps.

**<https://constitution.okayupsc.com>** — Cloudflare Pages publishes `site/` on every push to
`main`.

## What is in it

| | |
|---|---|
| **Bare text** | Every article as printed, footnote markers intact, with the articles and Schedules it refers to and the amendments that changed it |
| **Explain** | What it says, how it works and worth knowing. For the 159 provisions on the priority list, the exam note follows under **For the exam** |
| **Landmark judgments** | 125, each on its own page: the story before the case, the constitutional question, the facts, the majority and every separate opinion, the key principles and what followed |
| **Amendments** | All 106, in six periods, each with what it changed in plain words, its background, what the courts did with it and when it came into force |
| **What the examiners ask** | The 159 provisions ranked in three tiers, with why each is asked, the points a question tests and where the mark is lost |
| **MCQ Bank** | 870 statement-based questions in the Civil Services prelims format, each statement marked true or false with the reason |
| **Mind maps & flows** | Hand-drawn diagrams for the processes that are hard to hold in your head, one per Part or per section, plus one generated for every Part |
| **Search** | Article numbers and headings, the bare text, the Schedules, the explanations, the judgments and the exam notes. `/` focuses it |

An article page sorts its readings into tabs — Text, Explain, Diagrams, Cases, MCQs — and leaves
out a tab with nothing in it. The Part tree runs down the left. Every article and amendment named
on a page opens **in place**, so a look-up does not cost you your place.

Addresses are stable: `#/article/21/judgments`, `#/part/V/13`, `#/amendments/42`,
`#/judgment/<id>`, `#/exam`, `#/mcq/part/III`.

## What is verified, and what is written here

Two kinds of writing sit on the site and they are not worth the same. They are told apart by how
they are set, rather than by a badge on every heading.

| How it is set | What it is |
|---|---|
| Serif, unboxed, footnote markers intact | Reproduced from the official PDF and machine-checked against it — the bare text of every article, the Schedules, and the amendment footnotes |
| Anything in a panel | Commentary written for this site — the plain-language readings, judgment summaries, exam notes and diagrams |

**The audit.** Every judgment summary, exam entry and concept explanation has been read line by
line, with eight mechanical cross-checks run against the verified text: article references,
amendment years, verbatim quotations, stated counts against the lists that follow, quantities
against the article text, case years against the judgments dataset, and a sweep for claims
repeated across entries that had diverged. A fourth phase audited the extraction itself, after a
reader's screenshot showed the 106th Amendment dated to 1991. A parser fault repeats silently
across hundreds of entries where a prose fault sits in one place. **55 corrections** were made in
all, and `build/FACTCHECK.md` records each one with the source that settled it, including what
the audit does **not** establish.

Where the source is genuinely ambiguous the site says so rather than choosing. An amendment whose
provisions commenced on different dates reads *"Commenced in stages"* and asserts no single date.
One whose date has not been notified reads *"Passed, not yet in force"*.

## The source

**The Constitution of India, as on 1st May 2024**, published by the Legislative Department,
Ministry of Law and Justice, Government of India — updated to the Constitution (One Hundred and
Sixth Amendment) Act, 2023.

<https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf>

The 106th is still the most recent amendment actually enacted, so this is the Constitution as it
currently stands. Later Amendment Bills have not become law.

A superscript number in the text is the official footnote recording which Amendment Act inserted
or substituted that passage. `***` marks words omitted by an amendment, again as the official
text prints them.

## Licensing

Four kinds of material, four sets of terms — set out in full in `LICENSE`.

| | |
|---|---|
| The Constitution text | Government material, reproduced with commentary under section 52(1)(q)(ii) of the Copyright Act, 1957 and the Government of India reproduction terms |
| The commentary written here | CC BY 4.0 |
| The code and build scripts | MIT |
| The home page photograph | CC BY-SA 4.0. Taken by Kuldeep Maruvada, from Wikimedia Commons, cropped and resized |

This project is not produced by, endorsed by or affiliated with the UPSC, any State Public Service
Commission, the Legislative Department, or any government body.

## Rebuilding the data

Everything under `site/data/` except the hand-written files is generated from the PDF:

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

`python verify.py` passes: 99.0% of body characters accounted for, 60 of 60 sampled articles
matching the source verbatim, no article carrying the next one's heading. The 1.0% not accounted
for is Part and Chapter banners and the group sub-headings, which are held in the structure
rather than in any article's text.

## House style

Every word written for this site follows the same rules. No sentence over 35 words. No semicolons
or dashes. No sentence opening with a bare This, That, It, These, Those or Such. Say the thing
plainly before qualifying it, give concrete examples, signpost a contrast with "But", and end each
section on its central point.

**Each thing is said once.** Where two sections could carry the same fact, it belongs to one of
them, and the others leave it out.

## Editing the explanations

`site/data/explain-1.js` … `explain-8.js`, one entry per article, split by Part. Part-level
entries are keyed `partIII`, schedule-level ones `schVII`.

```js
"21": {
  simple: "what the article does, in ordinary words",
  catch:  "the qualifier, exception or judicial gloss that changes how it works",
  note:   "anything else worth carrying in your head"     // optional
},
```

The three fields render as What it says, How it works and Worth knowing. `simple` gives the plain
meaning. `catch` tells the story: the exception, the amendment or the line of cases that changes
how the article works, told here and nowhere else. `note` holds only what neither of the others
nor the exam note carries, and is left out when nothing is left. Most of the 159 priority
provisions have no `note`. A `\n\n` inside a string becomes a paragraph on the page.

## Editing the landmark judgments

`site/data/cases-1.js` … `cases-4.js` hold the short card for each case, keyed by article number,
or `preamble`, or `schX`. A key holds an array, newest last:

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

A case may appear under more than one article. Kesavananda sits under the Preamble and under
Article 368, Bommai under the Preamble, Article 75 and Article 356. The counts de-duplicate by
case name, so a cross-listing does not inflate them.

The full page for each of the 125 judgments comes from `site/data/judgments-1.js` …
`judgments-17.js`, and the fields are listed at the top of `judgments-1.js`. Every page opens with
**The Story Before the Case** (the `background` field), so that a reader who does not know the
earlier cases or amendments can follow it. Each article, amendment, writ or legal term is
explained in plain words where it first appears.

**Held, Key Principles and Subsequent Developments do different jobs.** What the Court Held says
what was decided in the case. Key Principles says how the rule works beyond it: how far it
reaches, what it is for, where it stops, how courts apply it, and the name of the doctrine if it
has one. The last principle starts with "So" and states the case's central point. Subsequent
Developments (`legacy`) lists only what happened afterwards, in date order, each item with its
year. Anything that would restate another section is left out, so many judgments have one or two
principles and some have no developments at all. An empty `legacy` hides that section.

## Editing what the examiners ask

`site/data/exam-1.js` … `exam-4.js`, keyed by article number, or `preamble`, or `schX`. One entry
per key. It renders in the Explain tab under **For the exam**, and clicking a row at `#/exam`
opens the same reading as a panel.

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

`tier`, `why` and `concepts` are required, and adding a key is all it takes: the row at `#/exam`
and the block on that article follow from the data. In a concept, `t` is the point in three to seven words
and `d` gives the testable fact in one or two short sentences. The story behind it belongs in the
explanation's `catch`, and a point that only repeats What it says is dropped. `why` gives the exam
angle, not the story.

`*stress*` marks the single word a question turns on — "only", "or otherwise", "total membership"
— and renders as coloured bold. Any `Article 21`-style reference is auto-linked, and every field
is included in search.

**Where the ranking comes from.** Published previous-year-paper compilations for the UPSC Civil
Services Prelims (1995–2025) and Mains General Studies Paper II (2013–2024), UPPSC / UPPCS Mains
(2015–2025), and the polity sections of other State PSC papers. The commissions do not tag their
own questions by article, so the mapping from a question to an article is editorial. A `seen` line
records that the year's paper carried a question on that subject, not a numbered question.

### Citing a question paper

Every sighting under **Seen in the papers** is one of two shapes:

```js
"UPSC Pre 2021 — birth-based citizenship"                    // uncited
{ s: "UPSC Pre 2021 — birth-based citizenship",              // cited
  p: "CSP-2021-GS1", q: "42" }
```

`p` is a key in `site/data/papers.js`, which holds each paper's name and URL once rather than on
every sighting. The page prints the count of cited sightings, counted from the data as it is
drawn, so it cannot drift from what is there.

**The registry ships empty, and that is deliberate.** Every sighting was written from recollection
of the papers rather than transcribed from them. A citation generated from that same recollection
would be worth nothing, because it would make an unverified claim look verified. A citation
belongs in the file once somebody has opened the actual paper and read the question. Papers are at
<https://upsc.gov.in/examinations/previous-question-papers>.
`python constitution/build/check_citations.py` reports coverage and **fails** on a citation nobody
could follow. It cannot check that a citation is correct, and nothing automated can.

## Editing the MCQs

`site/data/mcq-1.js` … `mcq-15.js`, split by Part and keyed like the exam notes. A question stores
only its statements, each marked true or false with the reason. `app.js` builds the options and
the answer from those marks, so an answer key can never disagree with its explanation.

```js
"356": [
  { f: 'w', q: 'Consider the following statements about Article 356:', s: [
    ['President\'s Rule can be imposed only on a report from the Governor.', 0,
     'Article 356(1) also allows it "or otherwise", without a report.'],
    ['A proclamation must be approved by both Houses within two months.', 1,
     'That is Article 356(3).']
  ] },
  { f: 'si', x: 0, q: 'Consider the following statements:', s: [ [...], [...] ] },
],
```

| `f` | Form | Statements |
|---|---|---|
| `w` | Which of the statements are correct | Two or three |
| `n` | How many of the statements are correct | Three or four |
| `p` | How many pairs are correctly matched. Each row is `[left, right, 1 or 0, reason]` | Three or four |
| `si` | Statement-I and Statement-II. `x: 1` when Statement-II explains Statement-I | Two |

`note` is optional and prints under the explanation. `a` replaces the closing line for a list of
items rather than statements, in the form the papers use: *Consider the following: … How many of
the above are grounds in Article 19(2)?*

**House style.** The stem names the subject in words, not only an article number: *Consider the
following statements about a sitting of the Rajya Sabha at which a resolution to remove the
Vice-President is under consideration*. Every statement stands on its own and names its own
subject, because `w`, `n` and `p` statements are shown in a fixed shuffled order. A statement
never leans on another with "such", "it" or "that power". Each one is a single fact that a reader
who knows the article can mark true or false, and a false statement is false for one plain reason
that says what is actually the case. No double negatives, and no statement that turns on a single
tricky word. The number of questions on a key follows its tier: five for Core, three for Recurs,
two for Worth holding and one for any other article in force.

## Editing the diagrams

`site/data/maps.js`, keyed by article number (`"368"`), Part (`partIII`), Schedule (`schX`) or
`preamble`. A key may hold one diagram or an array of them.

`site/data/maps-part.js` holds the maps drawn for **one section** of a Part rather than the whole
of it. The key is `part` + the Part numeral + `.` + the chapter numeral + `:` + the section's
name, exactly as `partSections()` in `app.js` builds it:

```js
'partV.IV:The Union Judiciary': { ... }      // Part V, chapter IV
'partXIV.II:Public Service Commissions': { ... }
'partIII:Right to Equality': { ... }         // no chapter numeral - Part III has no chapters
```

The chapter numeral is in the key because Part VI has a section called *General* in chapter I and
another in chapter III. A whole-Part key still works, and its map is drawn above the panels.

```js
// vertical flow chart; jumps are drawn down the right margin
{ type: 'flow', title, caption,
  nodes: [{ id, label, kind: 'start'|'step'|'decision'|'end', note }],
  edges: [{ from, to, label, lane }] }

// left-to-right mind map; a node with href becomes clickable
{ type: 'mind', title, caption, root: { label, href, children: [...] } }
```

Both are laid out and drawn as inline SVG by `app.js`, with no libraries, and they inherit the
light and dark themes. Labels are never truncated: box widths are measured from the real text
metrics of the longest label in each column, and anything that still does not fit takes more
lines.

## Files

```
constitution/
  source/     the downloaded PDFs and the extracted plain text
  build/      the parsers, the intermediate JSON, and verify.py
  site/       the website
    data/     generated data + hand-written explanations, judgments, diagrams, exam
              notes and MCQs; papers.js is the registry a citation points into
```

Every data file ships as a `.js` file that assigns to `window`, so the site runs from the file
system with no server and no build step.

`site/okay-ui.css` is the look this site shares with okayupsc.com and the Thinkers site: the
colours in light and dark, the two typefaces, the corners and shadows, and the navy OkayUPSC bar
at the top of the page. `site/fonts/` holds the Roboto Slab files it loads, and `site/styles.css`
maps this site's own colour names onto it. The master copy lives in the okayupsc repo, where
`node tools/sync-ui.js` copies it here, so edit it there and not in this repo.
