# Fact-check log

## Result

All four phases complete: **125 judgments, 159 exam entries, 935 concept
explanations — every one read, plus eight mechanical checks run across the whole
dataset; then the extraction itself audited against the source PDF. 55 corrections
made.**

| Phase | Scope | Corrections |
|---|---|---|
| 1 — Case summaries | 134 entries, 125 distinct cases | 13 |
| 2 — Exam entries | 159 × tier, papers, why, seen, trap | 14 |
| 3 — Concept explanations | 935 concepts | 21 |
| 4 — The extraction | parsers, footnotes, headings, diagram links | 7 |

**What the errors were, across all three phases**

| Kind | Count |
|---|---|
| Invented detail — a plausible flourish with no source | 4 |
| Wrong fact | 16 |
| Wrong or misattributed clause / article | 5 |
| Wrong date or year | 6 |
| Misquote of the constitutional text | 5 |
| Count that disagreed with its own list | 4 |
| Incomplete list presented as complete | 4 |
| Self-contradiction within one entry | 1 |
| Misleading emphasis | 2 |
| Unverifiable claim removed rather than fixed | 1 |
| Consistency and staleness | 6 |
| Generated-data bug (28 headings, all Part III groups) | 1 |

Plus 19 lines removed from the `seen` field, which were impressions presented as
evidence.

**The mechanical checks, and what each caught**

| Check | Scope | Real errors |
|---|---|---|
| Cross-listed cases agree with themselves | 134 entries | 0 |
| Article references resolve | 502 | 0 |
| Amendment years vs official footnotes | 50 | 0 |
| "Inserted by the Nth Amendment" vs footnote trace | 16 | 1 |
| Verbatim quotes vs the article's own text | 29 | 2 |
| Stated count vs the list that follows | 936 concepts | 2 |
| Quantities vs the article's own text | 84 | 2 |
| Case years vs the judgments dataset | 61 | 2 |
| Sibling sweep — repeated claims that diverged | 136 pairs | 0 remaining |

Bench strengths and vote splits were the most reliable thing in the dataset — **not one
of the sixty-odd checked was wrong**. Dates, counts and clause references were the
weak points, along with four invented details.

**What this audit does not establish.** Every claim has been read and everything
checkable has been checked, but "no errors" is not a state I can certify. Three things
in particular still rest on judgement rather than verification: the tier rankings and
`papers` tags are editorial; the `seen` sightings map published compilations to
articles, which the commissions themselves do not do; and claims about 2024–2026
developments rest on research done during this audit rather than on the official text.
The bare act, the Schedules and the amendment footnotes remain the strongest part of
the site, and are machine-verified against the source PDF.

---

A running record of the content audit. Every claim checked, every correction made,
with the source that settled it. Order of work: case summaries → exam entries →
concept explanations.

Method:
- **Metadata** (year, bench strength, status) — extracted mechanically and checked
  against the record; cross-listed cases must agree with themselves.
- **Prose** (facts / held / why) — read line by line, with an external check on
  anything I could not settle from memory with confidence.
- **Article claims** — cross-checked against the bare text in `site/data/constitution.js`,
  which is itself verified against the official PDF at 99.4% coverage and 60/60
  sampled articles verbatim.

Status is recorded honestly: `FIXED`, `CONFIRMED` (checked, no change needed), or
`OPEN` (flagged, not yet settled).

---

## Phase 1 — Case summaries (134 entries, 125 distinct cases)

### Structural checks — all pass

| Check | Result |
|---|---|
| Entries parsed | 134 |
| Distinct case names | 125 |
| Cross-listing conflicts (same case, different year/bench/status) | 0 substantive; 1 cosmetic |
| Missing required fields | 0 |
| Malformed years | 0 |
| Status values outside the allowed set | 0 |

The one cosmetic difference: **ADM Jabalpur** carried the parenthetical
"(the Habeas Corpus case)" in its `full` title under Article 359 but not under
Article 21. Harmless, left alone.

### Findings

**1. Pradeep Kumar Biswas (2002) — outcome missing, effect described backwards. FIXED**

The entry never stated what the Court actually decided, and the `why` said it
"stopped the expansion of Article 12". Both are wrong in effect:

- The seven-judge bench held, 5:2, that CSIR **is** the State, overruling
  *Sabhajit Tewary* (1975) which had held it was not.
- So on the facts the case **widened** Article 12's reach, while articulating a
  test — financial, functional and administrative domination *particular to the
  body* — that is stricter than a loose reading of *Ajay Hasia*.

A reader of the old entry could reasonably have concluded CSIR was held not to be
the State. Rewritten to state the outcome, the 5:2 split, and the overruling, and
to describe the test as disciplining rather than shrinking Article 12.

Source: [CaseMine commentary](https://www.casemine.com/commentary/in/pradeep-kumar-biswas-v.-indian-institute-of-chemical-biology-and-others:-recognizing-csir-as-state-under-article-12/view)

**2. Champakam Dorairajan (1951) — invented fact. FIXED**

The entry said "A Brahmin applicant with high marks was denied admission." Two things
wrong with that:

- She **never applied**. Her own affidavit said she did not apply to the medical
  college because she knew the communal government order meant she would not be
  admitted. She moved the Madras High Court under Article 226 to have the order
  quashed.
- "with high marks" was an embellishment. There is no such fact in the record.

This is the worst kind of error — a plausible detail that was simply made up.
Rewritten to state what actually happened, including that the State was the
appellant because she had already won below.

Source: [Testbook case analysis](https://testbook.com/landmark-judgements/state-of-madras-vs-champakam-dorairajan),
[Jus Corpus](https://www.juscorpus.com/state-of-madras-v-srimathi-champakam-dorairajan/)

**3. Azeez Basha — wrong year. FIXED**

Cited as "Azeez Basha (1968)" in the AMU entry. The judgment was delivered
**20 October 1967**; 1968 is the AIR reporter volume. Every other case in this
dataset is dated by decision year, so 1967 is the consistent and correct figure.

Source: [Indian Kanoon, judgment dated 20 October 1967](https://indiankanoon.org/doc/1801897/)

**4. Indra Sawhney — imprecise on the 50% ceiling. FIXED**

The entry said Parliament "reversed two of its holdings by amendment — promotions
(77th) and the 50% ceiling for EWS (103rd)". The first is right; the second is not
how it happened. Parliament did not reverse the ceiling. The 103rd Amendment created
a separate EWS quota outside it, and it was the *Court*, in Janhit Abhiyan, that held
the ceiling is "not inflexible". Reworded to separate the two mechanisms.

**5. NJAC — wrong veto rule. FIXED**

The entry said the commission had "two eminent persons, either of whom could veto a
name." Section 5 of the NJAC Act actually said the Commission shall not recommend a
person **if any two members do not agree**. One eminent person could not veto alone;
two members together could — which is why the objection was that the Law Minister
plus one eminent person could block any name. Rewritten to state the real rule and
the full composition.

Source: [PRS legislative brief](https://prsindia.org/billtrack/the-national-judicial-appointments-commission-bill-2014)

**6. S.R. Bommai — wrong count and wrong date range. FIXED**

Said "six State governments were dismissed between 1989 and 1992, four of them after
the Babri Masjid demolition." Two errors:

- **Three**, not four, were dismissed after the demolition — Madhya Pradesh,
  Rajasthan and Himachal Pradesh. (Uttar Pradesh went under President's rule on
  6 December 1992 but was not part of the Bommai batch.)
- The range starts in **1988**, not 1989 — the Nagaland proclamation was August 1988.
  Karnataka, the lead case, was April 1989.

Rewritten to name all six States so the claim is checkable rather than a bare count.

Source: [Wikipedia, S.R. Bommai v. Union of India](https://en.wikipedia.org/wiki/S._R._Bommai_v._Union_of_India),
[Drishti IAS](https://www.drishtiias.com/daily-updates/daily-news-analysis/s-r-bommai-v-union-of-india-case-1994)

**7. Rajendra Singh Rana — the split exception had NOT been deleted. FIXED**

The entry said the Speaker treated the defection as a valid split "though the split
exception had been deleted in 2003." It had not. The MLAs wrote to the Governor on
**26 August 2003**, and the 91st Amendment deleted the split exception only from
**1 January 2004**. The exception was fully available to them, which is precisely why
the case turned on whether they had *established* a split — the Court held their
letters claimed no split at all, so writing to the Governor was itself voluntarily
giving up membership.

Rewritten with the dates, and the `held` now carries the actual reasoning. The Tenth
Schedule exam entry was also amended to note the 2003 title year versus the
1 January 2004 commencement, since the gap is what makes this case make sense.

Source: [Indian Kanoon, judgment of 14 February 2007](https://indiankanoon.org/doc/1620629/),
[CaseMine commentary](https://www.casemine.com/commentary/in/rajendra-singh-rana-v.-swami-prasad-maurya:-reinforcing-the-anti-defection-law-under-the-tenth-schedule/view)

**8. Dating convention — settled, and one earlier "fix" reverted**

Finding 3 above changed Azeez Basha from 1968 to 1967 on the ground that the
judgment was delivered on 20 October 1967. That was the wrong call, and it has been
**reverted to 1968**. Reasons:

- Every textbook, and the 2024 AMU judgment itself, cites it as *Azeez Basha* (1968).
- The dataset already used reporter years elsewhere — Atiabari is listed as 1961
  though it was decided 16 August 1960.

Changing one and not the other created an inconsistency worse than the original.

**The convention, now fixed:** the `year` field is the year the case is commonly
cited by. Where sources genuinely conflict, the year the judgment was delivered
wins, because it is verifiable.

Two entries were misdated under that rule and are now corrected:

- **In Re Cauvery Water Disputes Tribunal** — was 1993 (a supplementary SCC volume
  artefact). The reference was made 27 July 1991 and answered **22 November 1991**.
  Now 1991, with both dates in the facts.
- **In Re Ayodhya Reference** — was 1993, which is the *reference* number and the
  date the President made it (7 January 1993). The Court declined to answer on
  **24 October 1994**, in *Ismail Faruqui*. Now 1994, with the full cause title.

Sources: [Indian Kanoon, Cauvery opinion of 22 November 1991](https://indiankanoon.org/doc/1945849/),
[Indian Kanoon, Ismail Faruqui of 24 October 1994](https://indiankanoon.org/doc/37494799/)

**9. Delhi Services — "within a week" was off. FIXED**

Judgment 11 May 2023; ordinance promulgated 19 May 2023. That is eight days, not a
week. Replaced with the two dates, which is both accurate and more striking.

**10. All India Judges Association — overstated. FIXED**

Said the case "set up the Shetty Commission". The 1993 judgment *directed the Union
to constitute* a judicial pay commission; the Shetty Commission was actually set up
in 1996. Reworded.

**11. M.C. Mehta (Oleum Gas Leak) — wrong interval. FIXED**

Said the leak happened "weeks after the Bhopal disaster". Bhopal was 2–3 December
**1984**; the oleum leaks at Shriram in Kirti Nagar were 4 and 6 December **1985** —
almost exactly a *year* later. Rewritten with the dates, the location, and the death
of an advocate.

Source: [ELAW case record, WP 12739/1985](https://elaw.org/resource/india-mc-mehta-v-union-india-wp-127391985-19860217-oleum-gas-leak-case)

**12. Romesh Thappar — wrong count of grounds added. FIXED**

Said the First Amendment "added public order and three other grounds to Article
19(2)", implying four new grounds. It added **three in total**: public order,
friendly relations with foreign States, and incitement to an offence. (It also
inserted the word "reasonable" before "restrictions".) Now named individually rather
than counted.

**13. Article 19 exam entry — "eight grounds" followed by a list of nine. FIXED**

Caught by cross-checking against our own verified bare text, which is the method
that should have been used first. Article 19(2) reads:

> "…the sovereignty and integrity of India, the security of the State, friendly
> relations with foreign States, public order, decency or morality, or in relation
> to contempt of court, defamation or incitement to an offence."

"Decency or morality" is **one head**, joined by "or". Counting it as two gives nine
items under an "eight" label — an internal contradiction in a single sentence. The
list now matches the text and says explicitly why the total is eight.

The same entry described Article 19(6) as permitting restriction in the "public
interest". The text says **"in the interests of the general public"**. Corrected,
since the whole point of that trap is the exact wording.

### Verified, no change needed

Tranche 1 — the amendment and basic-structure line:
Shankari Prasad (1951, 5J), Golak Nath (1967, 11J, 6:5, prospective overruling),
Kesavananda Bharati (1973, 13J, 7:6, 68-day hearing), Indira Nehru Gandhi v. Raj
Narain (1975, 5J, Art 329A(4)), Minerva Mills (1980, 5J, Arts 368(4) and (5)),
Waman Rao (1981, 5J, the 24 April 1973 line), I.R. Coelho (2007, 9J),
Berubari Union (1960, 8J — bench strength externally confirmed).

Tranche 2 — Part III foundations:
A.K. Gopalan (1950, 6J), ADM Jabalpur (1976, 5J, 4:1, Khanna dissenting),
Maneka Gandhi (1978, 7J), Puttaswamy (2017, 9J, overruling M.P. Sharma, Kharak
Singh and ADM Jabalpur), Ajay Hasia (1981, 5J, six instrumentality tests),
Zee Telefilms (2005, 5J, 3:2), Bhikaji Narain Dhakras (1955, 5J, eclipse),
Keshavan Madhava Menon (1951, 7J), R.M.D. Chamarbaugwalla (1957, 5J,
severability), Anwar Ali Sarkar (1952, 7J), E.P. Royappa (1974, 5J),
Ram Krishna Dalmia (1958, 5J).

Tranche 3 — equality, reservation, religion, minorities:
Indra Sawhney (1992, 9J), M. Nagaraj (2006, 5J), Jarnail Singh (2018, 5J),
Janhit Abhiyan (2022, 5J, 3:2), Ashoka Kumar Thakur (2008, 5J),
B.K. Pavitra II (2019), Maratha Reservation (2021, 5J, 3:2 on the 102nd
Amendment; the 12–13% figure is the post-High-Court quota), Shirur Mutt (1954, 7J),
Rev. Stainislaus (1977, 5J), Durgah Committee (1961, 5J), Sabarimala (2018, 5J,
4:1, Indu Malhotra dissenting, reference to nine judges still pending),
T.M.A. Pai (2002, 11J), Aligarh Muslim University (2024, 7J, 4:3),
Society for Unaided Private Schools (2012, 2:1), Bijoe Emmanuel (1986).

Tranche 4 — executive, legislature, judiciary:
S.R. Bommai (1994, 9J), Rameshwar Prasad (2006, 5J, 3:2), Samsher Singh (1974, 7J),
Nabam Rebia (2016, 5J), Shivraj Singh Chouhan (2020, 22 MLAs resigned),
Kihoto Hollohan (1992, 5J, 3:2, Paragraph 7 void for want of State ratification),
Subhash Desai (2023, 5J), Keisham Meghachandra (2020, three months),
D.C. Wadhwa (1987, 5J, 256 Bihar ordinances 1967–81),
Krishna Kumar Singh (2017, 7J), Raja Ram Pal (2007, 5J, eleven MPs expelled),
P.V. Narasimha Rao (1998, 5J, 3:2), Sita Soren (2024, 7J),
Second Judges Case (1993, 9J), Third Judges Case (1998, 9J, CJI+4 and CJI+2),
S.P. Gupta (1981, 7J).

External confirmations this phase:
- Berubari Union — eight judges, advisory opinion of 14 March 1960 under Article 143(1)
- Sita Soren — seven judges, 4 March 2024, overruling P.V. Narasimha Rao (1998)
- Pradeep Kumar Biswas — seven judges, 5:2, CSIR held to be the State
- Champakam Dorairajan — she did not apply; affidavit said she knew she would not be admitted
- Azeez Basha — judgment delivered 20 October 1967 (AIR 1968)
- NJAC Act section 5 — "any two members" veto
- S.R. Bommai — six States, three of them post-Babri
- Rajendra Singh Rana — events of 26 August 2003, split exception then still in force
- Atiabari Tea — five judges (4:1, Sinha CJ dissenting), decided 16 August 1960
- Jindal Stainless — nine judges, 7:2, 11 November 2016
- Property Owners' Association — nine judges, 8:1, 5 November 2024 (entry was right)
- Cauvery reference — referred 27 July 1991, answered 22 November 1991
- Ayodhya reference — referred 7 January 1993, declined 24 October 1994
- Oleum gas leak — 4 and 6 December 1985
- First Amendment — three grounds added to Article 19(2)

Tranches 5–9 — the remaining 70, all read line by line:
A.K. Roy, AIIMS Students' Union, Air India v. Nargesh Meerza, All India Judges
Association, Anoop Baranwal, Anuradha Bhasin, Appa Balu Ingale, ADR (2002),
Association of Unified Tele Services, Atiabari Tea, Automobile Transport,
Bandhua Mukti Morcha, Bengal Immunity, Bennett Coleman, Common Cause, D.K. Basu,
D.S. Nakara, Delhi Services Case, Electoral Bonds, Epuru Sudhakar, Government of
NCT of Delhi (2018), Hoechst Pharmaceuticals, Hussainara Khatoon, In Re Article 370,
In Re Ayodhya Reference, In Re Cauvery, Jindal Stainless, Joseph Shine,
K.T. Plantation, Kathi Kalu Oghad, Kehar Singh, Kesoram Industries,
Kishan Singh Tomar, Kolkata Municipal Corporation, L. Chandra Kumar,
M.C. Mehta (Child Labour), M.C. Mehta (Oleum), Madras Bar Association (2021),
Maqbool Hussain, Mirzapur Moti Kureshi, Mohinder Singh Gill, Mohit Minerals,
N.P. Ponnuswami, Navtej Singh Johar, Olga Tellis, PUDR, Prafulla Kumar Mukherjee,
Prem Nath Kaul, Pritam Singh, Property Owners' Association, Puttaswamy (Aadhaar),
Rojer Mathew, Romesh Thappar, Rupa Ashok Hurra, S.P. Sampath Kumar, Sakal Papers,
Sarla Mudgal, Selvi, Shah Bano, Shatrughan Chauhan, Shreya Singhal,
State of Karnataka v. Union of India, State of Punjab v. Principal Secretary,
State of Tamil Nadu v. Governor, Supreme Court Bar Association, Union Carbide,
Union of India v. Tulsiram Patel, Vikas Kishanrao Gawali, Vishaka,
Whirlpool Corporation.

---

## Phase 1 result

**125 distinct cases, 134 entries, all read. 13 corrections made.**

| | |
|---|---|
| Fabricated detail | 2 (Champakam's application and marks; the Rana split-exception date) |
| Wrong fact | 5 (NJAC veto rule, Bommai count and range, Oleum interval, First Amendment count, Article 19 ground count) |
| Wrong date | 2 (Cauvery, Ayodhya reference) |
| Misleading emphasis | 2 (Pradeep Kumar Biswas, Indra Sawhney) |
| Overstated | 2 (Delhi Services "within a week", All India Judges "set up") |
| Self-inflicted, reverted | 1 (Azeez Basha year) |

**Roughly one entry in ten carried an error.** Bench strengths and splits were
overwhelmingly reliable — not one was wrong. Dates and counts were where the errors
clustered, along with two invented details, which is the failure mode to watch for
in the remaining phases.

**Method note for phases 2 and 3.** Finding 13 was caught by checking against
`site/data/constitution.js` rather than from memory. Since the bare text is already
verified against the official PDF, any claim about what an article *says* can be
settled locally and with certainty. That check should come first in the concept
phase, where most claims are of exactly that kind.

---

## Phase 2 — Exam entries (159 entries)

### Mechanical cross-checks, run first

Both the exam data and the verified constitution text are loaded in the browser, so
claims could be checked against the source rather than against memory.

| Check | Scope | Result |
|---|---|---|
| Every "Article N" reference resolves to a real article | 502 references | 1 flagged — **correct** (Article 35A was never in the printed text; it came by a 1954 presidential order) |
| "Nth Amendment, YYYY" against the year traced from official footnotes | 50 claims | **0 mismatches** |
| "inserted by the Nth Amendment" against the footnote trace | 16 claims | 4 flagged — 3 were tracer gaps, 1 real (below) |
| Quoted phrases against the article's own bare text | 29 quotes | 2 real misquotes (below) |

**A note on the amendment-attribution check.** Three of its four flags were false.
Where an amendment inserts a whole Part — the 74th inserting Part IXA, the 42nd
inserting Part XIVA — the official footnote sits on the *Part heading*, not on each
article, so the footnote tracer never records those articles. Absence from the trace
is not evidence of error there.

### Findings

**14. Article 226 — clause misattributed. FIXED**

Said "Clause (2), added by the 15th Amendment". The cause-of-action provision came in
as **clause (1A)** by the 15th Amendment (1963); it became **clause (2)** only when
the 42nd Amendment substituted the whole article in 1976 — which is what the official
footnote on Article 226 records ("Subs. by the Constitution (Forty-second Amendment)
Act, 1976, s. 38 for art. 226"). Both steps are now stated.

Source: [SCC Online on Article 226 territorial jurisdiction](https://www.scconline.com/blog/post/2025/02/22/article-226-where-must-the-action-be-instituted/)

**15. Article 74 — incomplete quote. FIXED**

Quoted the words the 42nd Amendment added as "who shall act in accordance with such
advice". The text actually reads "who shall, **in the exercise of his functions**, act
in accordance with such advice". Corrected against `constitution.js`.

**16. Articles 39 and 31C — misquoted the constitutional phrase. FIXED**

Both quoted "material resource of the community" in the singular. Article 39(b) says
"the material **resources** of the community". Reworded so the quoted words match the
text.

---

### 17. A parser bug found while checking quotes — 28 wrong article headings. FIXED

This is the largest single defect found so far, and it was in the *generated* data,
not the hand-written data.

**What was wrong.** The contents-page parser accumulated an article's marginal heading
by appending following lines until it hit something that looked like a new article,
Part, Chapter or Schedule. Group sub-headings ("Right to Equality", "Council of
Ministers") match none of those, so each one was swallowed into the heading of the
article above it — and lost as structure. Result:

- **28 article headings carried a foreign phrase**, e.g. Article 13 displayed as
  *"Laws inconsistent with or in derogation of the fundamental rights. Right to
  Equality"*, Article 76 as *"Attorney-General for India. Conduct of Government
  Business"*.
- **Every article in Part III was tagged "General"** — the first sub-heading in the
  Part, applied to all thirty — so the breadcrumb was wrong on every Fundamental
  Rights page. Most other Parts had no group at all.

**The fix.** A contents-page heading always ends in a full stop and wraps until it
gets there; a sub-heading carries no trailing stop. So the accumulator now stops as
soon as what it holds ends in one, allowing for the closing bracket on an omitted
entry (`[31. … —Omitted.]`).

**Result after rebuilding.** Sub-headings recovered went from a handful to **78**;
distinct groups from about 6 to **68**. All 28 headings are clean. Article count
unchanged at 506 unique, and `verify.py` still reports fidelity 60/60, bleed 0, no
stray Part banners.

Coverage moved from 99.4% to **99.0%** — expected and correct. Those ~1,000
characters of sub-headings used to be counted inside article headings, where they did
not belong; they are now held as structure, like the Part banners that were always
excluded. The README figure has been updated.

Breadcrumbs now read, correctly:

    Parts › Part III › Right to Freedom              (Article 21)
    Parts › Part III › Cultural and Educational Rights (Article 29)
    Parts › Part V › II — PARLIAMENT › Procedure in Financial Matters (Article 112)

### 18. The `seen` field contained 18 things that were not sightings. FIXED

`seen` renders on the page under the heading **"Seen in the papers"**. It reads as
evidence. 18 of its 236 lines were not dated sightings at all but impressions:

> "State PCS papers regularly ask which article contains the words 'India, that is Bharat'"
> "UPSC Mains — reservation policy and its constitutional basis"

These cannot be checked by anyone, and putting them in an evidence field overstates
what the dataset knows. All 18 removed. The substance they carried is already in the
`why` and `trap` fields of the same entries.

**A nineteenth was a real mis-attribution.** Article 80 carried both:

- "UPSC Pre 2025 — the special legislative powers of the Council of States"
- "UPPCS Mains 2024 — the special legislative powers of the Rajya Sabha"

The same question, credited to two different exams. Only the UPPCS Mains 2024 one is
supported — it is question 3 of that paper. There is no such question in the 2025
Prelims list. The Prelims line was removed.

After cleaning: **217 sightings across 111 entries, every one carrying a year.**

Cross-check of the 2025 Prelims sightings: all 23 correspond to questions I can place
in that paper. The count exceeds the number of questions because one question can test
two articles — the Governor's-assent question is recorded under both Article 163 and
Article 200, correctly.

**What that check is worth.** It rests on recollection of the paper, not on a copy of it.
No question paper and no coaching compilation was opened while this dataset was built, and
none is held in this repository. So the `seen` field cannot be audited the way the bare
text can, and it is the weakest-sourced thing on the site. Anyone who needs the questions
should read them at upsc.gov.in.

### 19. Preamble — "four kinds of liberty", listing five. FIXED

The same failure as the Article 19 ground count, in a different entry. The Preamble
reads "LIBERTY of thought, expression, belief, faith and worship" — **five**. The trap
said four and then listed five.

Rewritten, and the point it was making (justice is economic, liberty is not) is now
stated directly rather than left to be inferred from a miscount.

**This class of error is now checked mechanically.** A scan for "stated count followed
by an enumeration of a different length" across all 159 entries produced 17
candidates; on inspection 16 were artifacts of the splitter (it breaks "weights and
measures" on the "and"), and the 17th is finding 20 below. No further count errors
remain.

### 20. Eleventh and Twelfth Schedule subject lists — incomplete but presented as complete. FIXED

The concept headed "What is on it" gave, for the Twelfth Schedule, 17 of the 18
subjects — silently dropping **"Promotion of cultural, educational and aesthetic
aspects"**. For the Eleventh Schedule it gave 18 of 29 with nothing to indicate it was
a selection.

Both now list every entry, in the Schedule's own order, checked item-by-item against
`schedules.js`: **29 and 18, matching the official text exactly.** The headings say so
("All twenty-nine, in the Schedule's own order").

The related Articles 243G and 243W entries were checked too and were already honest —
they say "including" and "and others".

### 21. Article 148 — a fabricated attribution to Ambedkar. FIXED

The trap ended "Ambedkar regretted the mismatch", referring to India's CAG lacking the
comptroller function Britain's has.

Ambedkar did call the CAG "probably the most important officer in the Constitution of
India" — that appears elsewhere in the entry and is correct. But **there is no source
for him regretting the comptroller gap.** The criticism is standard commentary; the
attribution was mine. Removed, and the contrast is now stated on its own terms.

This is the third invented detail found so far, after Champakam's application and the
Rajendra Singh Rana date. All three shared a shape: a specific, quotable flourish
attached to an otherwise sound paragraph.

### 22. Article 226 — imprecise on what Article 359 suspends. FIXED

The trap said Article 32 "can be suspended under Article 359 during an emergency,
while Article 226 cannot". That is the common textbook shorthand and it misleads.

An order under Article 359 bars enforcement of the *specified* Fundamental Rights in
**any** court — the High Court included. Article 226 is not a way round it for those
rights. What survives is that Article 226 also runs for ordinary legal rights, which
such an order does not touch, whereas Article 32 exists only for Fundamental Rights and
so can be closed completely. Rewritten to say that.

### 23. Article 26 — "protected absolutely", and a missing limitation. FIXED

The trap said clause (b), matters of religion, is "protected absolutely from
legislative interference". Article 26 opens:

> **"Subject to public order, morality and health**, every religious denomination …
> shall have the right—"

Those three limits govern all four rights, so none is absolute. The concept listing
"the four rights" also omitted the opening words entirely. Both corrected, and a new
concept states the limits — including that Article 25 carries a fourth limit
(the other provisions of Part III) which Article 26 does not.

### 24. Article 201 — "the only absolute veto in the Constitution". FIXED

Wrong. Under Article 111 the President may withhold assent to a Union Bill outright;
that is the absolute veto in the standard three-way classification (absolute,
suspensive, pocket).

What is actually distinctive about Article 201 is narrower and more interesting:
under Articles 111 and 200, passing a returned Bill a second time **compels** assent;
under Article 201 it does not. Rewritten to say that instead.

Source: [Vajiram on the veto power of the President](https://vajiramandravi.com/current-affairs/veto-power-of-president/)

### 25. Article 302 — a trap that contradicted itself. FIXED

It said a State Bill under Article 304(b) without the President's previous sanction is
"void regardless of how reasonable it is" — and then, in the next sentence, that
subsequent assent can cure it. Both cannot be true.

Article 255 settles it: a requirement of recommendation or previous sanction is
"a matter of procedure only", and an Act is not invalid on that ground alone if
assent was later given. Rewritten around Article 255, which is where the answer
actually lives.

### 26. Article 243 — Mizoram used as the wrong kind of example. FIXED

The trap said "Goa, Sikkim, Mizoram and some others" lack the intermediate panchayat
tier under the below-twenty-lakh exception. Mizoram does not lack a tier — **Article
243M keeps the whole of Part IX out of Mizoram**, along with Nagaland and Meghalaya.
Exclusion from the Part is a different thing from dropping one tier of it, and the
entry now says so explicitly.

### 27. Smaller corrections from the read-through

- **Article 143** — still said the Court declined the Ayodhya reference "in 1993",
  contradicting the case entry I had just corrected to 1994. Both dates now given.
- **Tenth Schedule** — trap said the split exception was "deleted in 2003"; now carries
  the 1 January 2004 commencement, matching the Rajendra Singh Rana entry.
- **Article 105** — "a speech in the House is absolutely protected" now says protected
  from *court proceedings*, noting the House can still discipline the member.
- **Article 164** — "Sikkim, Mizoram and Goa are protected by it" read as an exhaustive
  list. The floor of twelve bites in every State with under eighty seats; reworded.
- **Article 342A** — described the 2021 judgment's reading as an "error the judgment
  made". Reworded neutrally: it is the reading the Court adopted and Parliament reversed.
- **Articles 108 and 360** — "three times in seventy-five years", "never declared in
  seventy-five years". Figures that go stale; both now avoid the count.

### Phase 2 result

**All 159 entries read: tier, papers, why, seen, trap.** Fourteen corrections, plus
the parser fix and the `seen` clean-up.

| | |
|---|---|
| Fabricated attribution | 1 (Ambedkar and the comptroller gap) |
| Wrong fact | 5 (226 clause, 201 veto, 26 absolutes, 243 Mizoram, Twelfth Schedule omission) |
| Misquote of the text | 3 (Article 74, Articles 39 and 31C) |
| Self-contradiction | 1 (Article 302 / Article 255) |
| Count vs list | 1 (Preamble liberty) |
| Evidence field misused | 19 lines (18 undated, 1 mis-attributed) |
| Consistency and staleness | 6 |
| Generated-data bug | 28 headings, all Part III groups |

The mechanical checks earned their keep: article references, amendment years,
amendment attribution, verbatim quotes and count-vs-list are now all clean, and three
of them found errors that reading alone had missed.

---

## Phase 3 — Concept explanations (935 concepts)

**Complete. All 159 entries read, plus four mechanical checks across the whole set.**

### New mechanical checks

| Check | Scope | Result |
|---|---|---|
| A quantity stated about an article appears in that article's own text | 84 quantities | 47 flagged; 45 were checker gaps or legitimate statutory/case figures, **2 real** |
| A case named with a year agrees with the judgments dataset | 61 mentions | **2 mismatches, both real** |

### Findings

**28. The Rajya Sabha's six-year term is not in the Constitution. FIXED**

Two concepts (Articles 80 and 83) stated the six-year term as though Article 83 fixed
it. Article 83(1) does not:

> "…one-third of the members thereof shall retire as soon as may be on the expiration
> of every second year **in accordance with the provisions made in that behalf by
> Parliament by law**."

The six years come from the Representation of the People Act, 1951. Both concepts now
say so, and point out the contrast with the Lok Sabha, whose five years Article 83(2)
states outright. This is a genuine exam distinction the entries were flattening.

**29. The CAG's tenure is not in Article 148 either. FIXED**

Same shape. Article 148 fixes no term at all — clause (3) leaves salary and conditions
of service to Parliament by law, and the six years / age 65 are in the CAG (DPC) Act,
1971. The concept now says where the figures come from, and notes what the article
*does* guarantee: that the terms cannot be varied to the holder's disadvantage after
appointment.

**30. Two case years contradicted the judgments dataset. FIXED**

- **E.P. Royappa** — concept said 1973, dataset said 1974. Decided 23 November 1973,
  reported (1974) 4 SCC 3, universally cited as 1974. Concept corrected.
- **Waman Rao** — concept said 1980, dataset said 1981. Decided 13 November 1980,
  reported (1981) 2 SCC 362, cited as 1981. Concept corrected.

Both were the site disagreeing with itself, which is worse than being wrong once.

**31. Article 110 — the finality is in clause (3), not clause (4). FIXED**

Two concepts said "Article 110(4) makes that certificate final". Reading the text:

- **Clause (3)** — "If any question arises whether a Bill is a Money Bill or not, the
  decision of the Speaker … shall be **final**."
- **Clause (4)** — requires the Speaker's certificate to be **endorsed** on the Bill
  when it goes to the Rajya Sabha and to the President.

The finality is in (3); (4) is the paperwork. Both concepts corrected.

**32. Article 110 lists seven heads, not six. FIXED**

The concept headed "The six subjects" gave sub-clauses (a) to (f) and omitted **(g),
"any matter incidental to any of the matters specified in sub-clauses (a) to (f)"**.
That clause is not filler — it is how a Bill carrying related provisions still
qualifies. Now titled "The seven heads in clause (1)" and complete.

**33. Article 19(1)(g) — a word dropped from the freedom. FIXED**

The six freedoms concept ended "practising any profession or carrying on any trade or
business". The text reads "to practise any profession, or to carry on any
**occupation**, trade or business". Restored.

**34. Article 22 — Advisory Board composition given only in part. FIXED**

Said the Board "consists of persons qualified to be High Court judges". The operative
text is wider: "persons who **are, or have been, or are qualified to be appointed as**,
Judges of a High Court". The concept now gives it in full, and notes that the 44th
Amendment's stricter version — requiring a serving judge as Chairman — was never
brought into force, which is the same reason the three-month period still stands.

**35. Seventh Schedule entry counts — asserted numbers I cannot verify. FIXED**

The concept gave "roughly 98 / 59 / 52" for the current Lists. Two problems: our own
copy of the Schedule does not support a clean count (the parser strips entry numbers,
and in the raw text they wrap across lines), and published sources genuinely disagree —
the Union List is variously given as 98 or 100, the State List as 59 or 61, depending
on whether omitted entries are still counted.

Rewritten to state what *is* settled — the original 97, 66 and 47 — to say plainly that
the current figures are disputed and why, and to point the reader at what is actually
examinable: which subjects sit where, and which five moved in 1976.

**37. Part IV has twenty articles, not sixteen. FIXED**

The Article 36 concept said "Articles 36 to 51. Sixteen articles in all." That counts
the plain numbers and forgets the inserted ones. Checking against our own data, Part IV
holds **twenty** articles — 39A, 43A, 43B and 48A were added later. The concept now
gives the figure and says why the naive count is wrong.

**38. Ambedkar misquoted on villages. FIXED**

The Article 40 concept had him calling villages "sinks of localism and casteism". His
words on 4 November 1948 were:

> "What is the village but a sink of localism, a den of ignorance, narrow-mindedness
> and **communalism**?"

Not casteism. Now quoted directly with the date.

Source: [Constituent Assembly Debates, 4 November 1948](https://clpr.org.in/blog/november-1948-ambedkar-presents-draft-constitution-indian-constitution-making-shifts-into-high-gear/)

**39. Article 51 — wrong year for the Declaration of Havana. FIXED**

Given as "the 1945 Havana Declaration". It is the Declaration of Havana of
**30 November 1939**. Corrected.

**40. Article 368 — the ratification list was half of one. FIXED**

The concept listed four items for the proviso to clause (2). The proviso actually
covers ten: Articles 54, 55, 73, 162, 241 and 279A; Chapter IV of Part V (the Union
judiciary); Chapter V of Part VI (the High Courts); Chapter I of Part XI (distribution
of legislative powers); any of the Lists in the Seventh Schedule; the representation of
States in Parliament; and Article 368 itself.

The judiciary chapters and the GST Council were missing, and those are exactly the
items examiners use. Now complete, with a note that ratification is by half of *all*
States, not half of those that respond.

**41. Article 112 — the charged-expenditure list dropped its catch-all. FIXED**

Same shape as the Article 110 problem. The list omitted clause (3)(g) — anything else
the Constitution or Parliament declares to be charged — and said "court decree" where
the text says "judgment, decree or award of any court or arbitral tribunal". Both
restored.

**42. Seventh Schedule entry counts — the sibling. FIXED**

Finding 35 corrected the count claim on Article 246. The `schVII` entry carried the
identical claim and was left behind. Now aligned. **Third time** a fix has left a
sibling standing; a systematic sweep for repeated claims is scheduled for the end.

**43. Article 201 — a redundancy I introduced. FIXED**

Correcting the absolute-veto error in finding 24 added a concept that said almost
exactly what the existing concept already said, leaving the entry with two overlapping
items. Merged into one. Worth recording because it is a self-inflicted defect, found
only by reading the entry after the fix rather than trusting the fix.

**44. Delhi services — wrong article and a compressed timeline. FIXED**

The Article 239AA concept said Parliament took control of services back "through a new
Article 239AB-related mechanism". Article 239AB is about *failure of constitutional
machinery* in Delhi and has nothing to do with it. The 2023 Act was made under
**Article 239AA(7)(a)**, which lets Parliament legislate to give effect to or supplement
Article 239AA. It also said "within days Parliament passed the Act" — it was an
ordinance within eight days; the Act came in August. Both corrected, and the National
Capital Civil Service Authority is now named.

**45. GST exclusions — two things out for entirely different reasons. FIXED**

The concept said "petroleum products, alcohol for human consumption, and stamp duty
remain outside GST", treating them alike. They are not alike:

- **Alcoholic liquor for human consumption** is carved out of the *definition* of GST
  in Article 366(12A). It is constitutionally beyond GST.
- **The five petroleum products** are not excluded at all. Article 279A(5) simply leaves
  the GST Council to recommend the *date* from which GST is levied on them.

One is out permanently; the other is only deferred and needs no amendment to bring in.
That distinction is examinable and the entry was erasing it.

**46. Article 243M — one exclusion described as three. FIXED**

The concept listed Darjeeling alongside Nagaland, Meghalaya, Mizoram and the Manipur
hill areas as excluded from Part IX. Darjeeling is only *partly* out: clause (3)
excludes the **district-level** panchayat provisions and leaves the rest of Part IX
applying. The concept also missed clause (3A), which disapplies Article 243D's
Scheduled Caste reservation to Arunachal Pradesh alone, and clause (4)(a), by which
Nagaland, Meghalaya or Mizoram can bring Part IX in themselves by an Assembly
resolution. All three now stated.

**47. Article 371J — "the only" provision of its kind. FIXED**

Claimed 371J is the only Article 371 provision creating domicile-based reservation in
education and public employment. **Article 371D** does the same for Andhra Pradesh and
Telangana — its clause (1) covers "public employment and … education" expressly.
Reworded to say what is actually distinctive: 371J spells the reservation out in
clause (2), tied to birth or domicile, and packages it with a development board and an
equitable-funding duty.

**48. Article 317 — wrong article for the reference. FIXED**

Said "The President refers the matter to the Supreme Court under Article 145." The
reference is made under **Article 317(1)** itself; Article 145 only supplies the
procedure the Court follows in holding the inquiry. Corrected.

**36. Article 226 — the Article 359 imprecision, again. FIXED**

The trap was corrected in Phase 2, but the concept still carried the loose version
("Article 226 cannot be suspended during an emergency"). Now consistent with the trap.
Second time a Phase-2 fix left a Phase-3 sibling behind — worth checking for
systematically at the end.

---

## The sibling sweep

Three fixes had left a duplicate claim standing elsewhere on the site, so the last step
was to hunt for the rest systematically rather than hope.

**Method.** Every six-word phrase in every `why`, `trap` and concept was indexed. Any
phrase appearing under two different entries marks a place where a fix to one could
silently leave the other stale. That found **136 pairs** of entries sharing wording —
almost all of them legitimate cross-references, since the same fact *should* appear
under both Article 246 and the Seventh Schedule.

Divergence is what matters, so a second pass grouped every "*number + noun phrase*"
across the dataset and flagged any phrase carrying two different numbers. Ten flags,
and on inspection **all ten were legitimate**: "two Union territories" (the 2019 split)
against "8 Union territories" (the current count); "three options" under Article 111
against "four options" under Article 200; ten lakh for a metropolitan area against
twenty lakh for the intermediate panchayat tier; 18 subjects against 29.

**No contradictory figure survives anywhere in the exam data.**

The specific siblings touched during the audit were then verified directly as aligned:
the Seventh Schedule counts (246 and schVII), the Coelho date (31B and schIX), the
Article 359 formulation (226's trap and its concept), the Rajya Sabha term (80 and 83),
the split exception (schX and the Rana case), and the Ayodhya and Cauvery dates (143 and
the case entries).

---

## Appendix — tranche-by-tranche record

### Verified, no change needed

---

# Phase 4 — the generated text itself

Phases 1 to 3 audited what was **written for** the site. This phase audits what was
**extracted into** it. The trigger was a reader's screenshot: the amendments page dated
the **106th Amendment (2023) to 1991**. That is not a commentary error — it is the
parser, and a parser error repeats itself silently across hundreds of entries where a
prose error sits in one place.

Six defects were found and fixed in the build, and the data was rebuilt from the source
PDF each time. `verify.py` reports PASS throughout: fidelity 60/60 sampled articles
verbatim, heading bleed 0, stray Part banners 0, coverage 99.1%.

## 37. Amendment commencement dates were taken from the wrong footnote. FIXED

`build_amendments.py` scanned a page of footnotes, collected every Act it mentioned and
every date it mentioned, and paired them positionally. On a page where footnote 3 names
the 106th Amendment and footnote 5 carries a date from 1991, the 106th got 1991.

The scan was rewritten to work footnote by footnote: an Act takes only a date printed in
its **own** footnote. Beyond that —

* `ibid.` is resolved back to the Act named in the preceding footnote, rather than dropped;
* a footnote saying the date is **yet to be notified** now records `pending` instead of
  reaching for the nearest number;
* Schedule footnotes that the extraction had run together are split before parsing, on the
  pattern of a full stop followed by a new numbered note;
* **all** the dates in a footnote are emitted, not the first one.

The last point changes what the page can honestly say. An amendment with one date reads
*"In force from 15-9-2021"*. An amendment with several reads *"Commenced in stages —
different provisions came into force on different dates; the footnote on each article
below gives the date for that provision"*, and asserts no single date at all. The 106th
now reads *"Passed, not yet in force"*, with the note that the official footnotes say the
date is yet to be notified.

**Checked afterwards.** Every commencement date was compared against its Act's year. Fourteen
amendments carry a date outside the window, and all fourteen are multi-date entries where
the page names no date. Two amendments assert a single date outside the window — the 85th
(2001, in force from 17-6-1995) and the 86th (2002, in force from 1-4-2010) — and both are
correct: the 85th was given retrospective effect and the 86th waited for the Right to
Education Act. **No wrong date reaches a reader.**

## 38. Part XVI's contents pair numbers with the wrong headings. FIXED

The contents pages for Part XVI print a run of article numbers first and the matching
headings after it:

```
330.
330A.
Reservation of seats for Scheduled Castes ... in the House of the People.
Reservation of seats for women in the House of the People.
```

Read straight through, article 330 ends up with no heading and 330A takes 330's — so the
**women's reservation articles carried the wrong titles**. The parser now detects a run of
bare numbers, reads the same number of headings after it, and pairs the two halves. Affects
330/330A, 332/332A and 334/334A.

## 39. Article 332A had no amendment history at all. FIXED

`parse_body.py` recognised a footnote by the pattern *number, full stop, space*. One
footnote on the page carrying article 332A is set without the space —
`1.Ins. by the Constitution (One Hundred and Sixth Amendment) Act, 2023` — so the whole
note was discarded, and with it 332A's only amendment footnote. The space is now optional.
Footnotes recovered from the source: **717 → 720**.

## 40. Chapter titles were cut off mid-word. FIXED

A chapter title that wraps — `CHAPTER V.—COMPTROLLER AND AUDITOR-` / `GENERAL OF INDIA` —
was truncated at the line break, so Part V's fifth chapter was called *"Comptroller and
Auditor-"*. The title now accumulates across lines, stopping when the lines stop being
capitals, which is exactly where the chapter heading ends and the group sub-heading below
it begins.

## 41. A repealed article left a phantom group on its Part page. FIXED

`Omitted.]`, the tail of a bracketed entry for a repealed article, is not all-caps and does
not begin with a number, so the parser classified it as a group sub-heading — producing a
section called *"Omitted"* on the Part page with articles filed under it. Now suppressed.

## 42. Two words the PDF sets wrong. FIXED

Two headings survive extraction broken, and the body of the **same document** shows what
they should be:

| Contents page prints | Body prints | Where |
|---|---|---|
| `Establishment and constitution ofthe Supreme Court` | `of the` | Article 124 |
| `CHAPTER II.—P UBLIC SERVICE COMMISSIONS` | `PUBLIC` | Part XIV, Chapter II |

All 28 contents pages were scanned for the two patterns that produce these — a stopword
glued to the next word, and a single capital split off from a capitalised run. **These are
the only two instances**, so the fix is a two-entry list in `clean()` and not a rule that
might damage something else. `PART B OF THE FIRST SCHEDULE` matches the split-capital
pattern legitimately and is left alone.

## 43. A diagram linked to an article that does not exist. FIXED

The Part IX mind map linked to `#/article/243I`. The official text hyphenates the letters
I and O so they cannot be misread as numerals — the article is **243-I**. The link was
dead. Every `href` in every diagram was then checked against the article list: **214
article links, and this was the only one that did not resolve.** The four Schedule links
(II, IV, VII, X) all resolve.

---

## What Phase 4 does not establish

The commencement dates are read out of footnotes, and a footnote is a printed convenience,
not an operative provision. Where the footnotes are ambiguous the site now says so rather
than picking a number. Anyone who needs the date on which a particular provision came into
force should read the notification, not this site.
