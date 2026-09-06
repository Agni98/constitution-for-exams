/* Landmark judgments — Preamble and Part III (Fundamental Rights).

   Keyed by article number. Each entry:
     case   short name everyone uses
     full   the full cause title, where it differs usefully
     year   year of the judgment
     bench  strength, where the number is part of the story
     status good | partly | overruled | historic   (historic = superseded by amendment)
     facts  what the dispute actually was
     held   what the Court decided
     why    why it still matters
*/
Object.assign(window.COI_CASES = window.COI_CASES || {}, {

preamble: [
{ case: "Berubari Union", full: "In Re: The Berubari Union and Exchange of Enclaves", year: "1960", bench: "8 judges", status: "partly",
  facts: "India agreed to transfer half of Berubari, a small enclave in West Bengal, to Pakistan. The President asked the Supreme Court whether this could be done by executive action, or whether it needed a constitutional amendment.",
  held: "Ceding territory needs a constitutional amendment, not just executive agreement. Along the way the Court said the Preamble is a key to the makers' minds but is not part of the Constitution and confers no power.",
  why: "The ruling that the Preamble is not part of the Constitution stood for thirteen years, until Kesavananda Bharati overturned it. The territory-cession holding is still good law, and it is why the 9th and 100th Amendments were needed." },
{ case: "Kesavananda Bharati", full: "Kesavananda Bharati v. State of Kerala", year: "1973", bench: "13 judges", status: "good",
  facts: "The head of a Kerala mutt challenged State land-reform laws that took over mutt property. The case grew into the biggest constitutional hearing in Indian history — 68 days of argument on how far Parliament's amending power reaches.",
  held: "By 7–6, Parliament may amend any part of the Constitution including fundamental rights, but may not damage or destroy its basic structure. The Court also held the Preamble IS part of the Constitution, reversing Berubari on that point.",
  why: "The single most important judgment in Indian constitutional law. Every later challenge to an amendment — Emergency-era, NJAC, electoral bonds — runs through the doctrine this case created." },
{ case: "S.R. Bommai", full: "S.R. Bommai v. Union of India", year: "1994", bench: "9 judges", status: "good",
  facts: "Several State governments were dismissed under Article 356, including four after the Babri Masjid demolition. The dismissed Chief Ministers challenged the proclamations.",
  held: "Secularism is a basic feature of the Constitution flowing from the Preamble. A State government acting against secularism can be dismissed — and, crucially, a proclamation under Article 356 is open to judicial review.",
  why: "It gave the word 'secular' in the Preamble real operative force, and it ended the free use of President's Rule against opposition States." }
],

/* ---------- Part III: general ---------- */

"12": [
{ case: "Ajay Hasia", full: "Ajay Hasia v. Khalid Mujib Sehravardi", year: "1981", bench: "5 judges", status: "good",
  facts: "Candidates rejected by a society-registered engineering college in Srinagar claimed the admission process violated Article 14. The college argued it was a private society, not 'the State'.",
  held: "The Court laid down six tests for when a body is an instrumentality of the State: government share capital, financial assistance, monopoly status, deep and pervasive State control, functions of public importance, and transfer of a government department.",
  why: "For twenty years the Ajay Hasia tests decided who could be sued for violating fundamental rights. They are still the starting point, though Pradeep Kumar Biswas tightened them." },
{ case: "Pradeep Kumar Biswas", full: "Pradeep Kumar Biswas v. Indian Institute of Chemical Biology", year: "2002", bench: "7 judges", status: "good",
  facts: "An employee dismissed by a CSIR laboratory filed a writ petition. Whether he could do so turned on whether CSIR — a registered society — was 'the State' under Article 12.",
  held: "By 5–2, CSIR is 'the State'. Sabhajit Tewary (1975), which had held the opposite, was overruled. The test is whether the body is financially, functionally and administratively dominated by, or under the control of, the government — and that control must be particular to the body, not the general regulatory control government exercises over everyone.",
  why: "This is now the governing test for 'other authorities'. It settled Article 12 rather than shrinking it: CSIR was brought in, but the reasoning replaced a loose reading of the Ajay Hasia factors with a single question about real control. Being regulated by government is not the same as being government." },
{ case: "Zee Telefilms", full: "Zee Telefilms Ltd. v. Union of India", year: "2005", bench: "5 judges", status: "good",
  facts: "Zee's telecast rights contract was cancelled by the Board of Control for Cricket in India. Zee sued under Article 32, arguing the BCCI was 'the State'.",
  held: "By 3–2, the BCCI is not 'the State' — it gets no government funding and is not government-controlled, however monopolistic it is. But because it performs public functions, its actions can still be challenged under Article 226.",
  why: "It draws the line between fundamental-rights liability and ordinary public-law accountability, and it is why sports bodies are answerable in the High Courts but not under Article 32." }
],

"13": [
{ case: "Shankari Prasad", full: "Shankari Prasad Singh Deo v. Union of India", year: "1951", bench: "5 judges", status: "overruled",
  facts: "The First Amendment added Articles 31A and 31B and the Ninth Schedule to save land-reform laws. Zamindars argued this violated fundamental rights and so was void under Article 13.",
  held: "'Law' in Article 13 means ordinary legislation, not a constitutional amendment made under Article 368. So an amendment can take away fundamental rights.",
  why: "The first word on Parliament's amending power. Reversed by Golak Nath, then partly restored by the 24th Amendment, and finally settled by Kesavananda." },
{ case: "Golak Nath", full: "I.C. Golak Nath v. State of Punjab", year: "1967", bench: "11 judges", status: "overruled",
  facts: "A Punjab family challenged land-ceiling laws placed in the Ninth Schedule, and asked the Court to reconsider Shankari Prasad and Sajjan Singh.",
  held: "By 6–5, an amendment IS 'law' under Article 13, so Parliament cannot take away or abridge fundamental rights at all. The Court applied this only prospectively, so past amendments survived.",
  why: "It provoked the 24th Amendment, which wrote Article 13(4) into the Constitution to undo it — which in turn provoked Kesavananda Bharati." },
{ case: "Keshavan Madhava Menon", full: "Keshavan Madhava Menon v. State of Bombay", year: "1951", bench: "7 judges", status: "good",
  facts: "A prosecution begun in 1949 under the Press (Emergency Powers) Act was still pending in 1951. The accused argued the Act was now void for violating Article 19.",
  held: "Article 13(1) has no retrospective effect. A pre-Constitution law is void only from 26 January 1950 onwards; acts done and proceedings begun before that date are unaffected.",
  why: "It established that fundamental rights operate prospectively — the foundation on which the doctrine of eclipse was later built." },
{ case: "Bhikaji Narain Dhakras", full: "Bhikaji Narain Dhakras v. State of Madhya Pradesh", year: "1955", bench: "5 judges", status: "good",
  facts: "A 1947 motor-transport law let the State monopolise the business. It became inconsistent with Article 19(1)(g) in 1950 — but the First Amendment then added Article 19(6) permitting State monopolies.",
  held: "The law was not dead, only eclipsed. Once the constitutional impediment was removed by amendment, the shadow lifted and the law became fully operative again without being re-enacted.",
  why: "This is the doctrine of eclipse. It applies to pre-Constitution laws; a post-Constitution law that violates a fundamental right is stillborn." },
{ case: "R.M.D. Chamarbaugwalla", full: "R.M.D. Chamarbaugwalla v. Union of India", year: "1957", bench: "5 judges", status: "good",
  facts: "A prize-competitions law was challenged. It covered both games of skill and games of chance; regulating games of skill was argued to violate Article 19(1)(g).",
  held: "Where the valid and invalid parts of a law can be separated, only the invalid part falls. If they are so intertwined that the remainder cannot stand as the legislature intended, the whole law goes.",
  why: "The leading statement of the doctrine of severability under Article 13 — the reason courts strike down clauses rather than whole statutes." }
],

/* ---------- Right to Equality ---------- */

"14": [
{ case: "Anwar Ali Sarkar", full: "State of West Bengal v. Anwar Ali Sarkar", year: "1952", bench: "7 judges", status: "good",
  facts: "A West Bengal Act let the government send any case it chose to a special court with a stripped-down procedure. Anwar Ali Sarkar was tried there and challenged it.",
  held: "The Act gave uncontrolled discretion with no principle for choosing which cases went to the special court. That is classification without an intelligible basis, and it violates Article 14.",
  why: "The first great equality case. It established that a law which hands the executive unguided power to pick and choose between people is unconstitutional." },
{ case: "Ram Krishna Dalmia", full: "Ram Krishna Dalmia v. Justice S.R. Tendolkar", year: "1958", bench: "5 judges", status: "good",
  facts: "A commission of inquiry was appointed into the affairs of certain companies. Those named said singling them out breached equality.",
  held: "The Court set out the classification test: the classification must rest on an intelligible differentia distinguishing those grouped together from those left out, and that differentia must have a rational relation to the object of the law.",
  why: "The two-limb reasonable-classification test, still recited in almost every Article 14 judgment." },
{ case: "E.P. Royappa", full: "E.P. Royappa v. State of Tamil Nadu", year: "1974", bench: "5 judges", status: "good",
  facts: "A senior IAS officer was transferred from Chief Secretary to a post he said was less important, and alleged it was punishment for displeasing the Chief Minister.",
  held: "Equality is a dynamic concept, not to be confined within traditional limits. Where an act is arbitrary, it is unequal both politically and constitutionally, and therefore violates Article 14.",
  why: "It opened the second route into Article 14 — arbitrariness — so a claimant no longer has to find someone comparable who was treated better." },
{ case: "Air India v. Nargesh Meerza", year: "1981", status: "good",
  facts: "Air India's rules made air hostesses retire at 35, or on marriage within four years of joining, or on first pregnancy — while male cabin crew served to 58.",
  held: "The retirement age and marriage bars could be justified as service conditions, but termination on first pregnancy was 'callous and cruel' and manifestly arbitrary, violating Article 14.",
  why: "An early and blunt application of arbitrariness to workplace discrimination against women." },
{ case: "D.S. Nakara", full: "D.S. Nakara v. Union of India", year: "1983", bench: "5 judges", status: "good",
  facts: "A revised, more generous pension formula was given only to government servants who retired after a chosen cut-off date. Those who retired earlier got the old rates.",
  held: "Pensioners form one homogeneous class. Splitting them by an arbitrary date has no rational relation to the object of the scheme, so the cut-off was struck down and the benefit extended to all.",
  why: "The classic authority against arbitrary cut-off dates in welfare and service benefits." },
{ case: "Joseph Shine", full: "Joseph Shine v. Union of India", year: "2018", bench: "5 judges", status: "good",
  facts: "Section 497 of the Indian Penal Code punished a man for adultery with a married woman without her husband's consent. The woman could not be punished, and a wife could not complain about her husband.",
  held: "Struck down unanimously. The section treated a wife as her husband's property, denied women agency, and rested on a gender stereotype — violating Articles 14, 15 and 21.",
  why: "One of the clearest modern statements that a law resting on stereotype is arbitrary, whatever its age." }
],

"15": [
{ case: "Champakam Dorairajan", full: "State of Madras v. Champakam Dorairajan", year: "1951", bench: "7 judges", status: "historic",
  facts: "A Madras government order allotted seats in engineering and medical colleges to communities in fixed proportions — so many for non-Brahmin Hindus, so many for Brahmins, for Harijans, for Muslims and so on. Champakam Dorairajan, a Brahmin, did not apply to the medical college: her affidavit said she knew the order meant she would not be admitted. She moved the High Court to have the order quashed, won, and the State appealed.",
  held: "The communal order violated Article 29(2), which forbids denial of admission to a State-aided institution on grounds only of religion, race, caste or language. Directive principles cannot override fundamental rights.",
  why: "It provoked the First Amendment, which inserted Article 15(4) to permit special provision for backward classes — the constitutional origin of caste-based reservation in education." },
{ case: "Ashoka Kumar Thakur", full: "Ashoka Kumar Thakur v. Union of India", year: "2008", bench: "5 judges", status: "good",
  facts: "The 93rd Amendment and the 2006 Act reserved 27% of seats for Other Backward Classes in central higher-education institutions. It was challenged as destroying equality.",
  held: "The reservation was upheld for government and aided institutions, but the creamy layer must be excluded from the OBC quota. The Court left the position of unaided private institutions open.",
  why: "It carried Indra Sawhney's creamy-layer rule from jobs into education, and set up the later fight resolved in Pramati." },
{ case: "Janhit Abhiyan", full: "Janhit Abhiyan v. Union of India", year: "2022", bench: "5 judges", status: "good",
  facts: "The 103rd Amendment created a 10% reservation for economically weaker sections, expressly excluding those already covered by SC, ST and OBC reservations. It was said to breach the 50% ceiling and to make poverty alone a ground.",
  held: "By 3–2, upheld. Reservation on economic criteria alone does not violate the basic structure, the 50% ceiling from Indra Sawhney is not inflexible, and excluding existing beneficiaries is permissible.",
  why: "The first breach of the 50% ceiling to be approved by the Court, and the first reservation not based on social backwardness." }
],

"16": [
{ case: "Indra Sawhney", full: "Indra Sawhney v. Union of India (the Mandal case)", year: "1992", bench: "9 judges", status: "good",
  facts: "The government implemented the Mandal Commission's recommendation of 27% reservation for Other Backward Classes in central government jobs. Nationwide protests followed, and the order was challenged.",
  held: "The 27% quota was upheld, but with limits: the creamy layer among OBCs must be excluded; total reservation should not ordinarily exceed 50%; backwardness is primarily social, not merely economic; and there is no reservation in promotions.",
  why: "The framework case for all Indian reservation law. Two of its holdings have since been displaced: the bar on reservation in promotion was reversed outright by the 77th Amendment, and the 50% ceiling was breached by the 103rd Amendment's EWS quota, which Janhit Abhiyan upheld by holding the ceiling is not inflexible. The creamy layer and the social-backwardness test still govern." },
{ case: "M. Nagaraj", full: "M. Nagaraj v. Union of India", year: "2006", bench: "5 judges", status: "partly",
  facts: "The 77th, 81st, 82nd and 85th Amendments restored reservation in promotion with consequential seniority. They were challenged as destroying the basic structure.",
  held: "The amendments were upheld, but a State wanting reservation in promotion must first collect quantifiable data showing the group's backwardness, its inadequate representation, and the effect on administrative efficiency.",
  why: "It made reservation in promotion conditional rather than automatic — and the data requirement stalled promotions across many States for years." },
{ case: "Jarnail Singh", full: "Jarnail Singh v. Lachhmi Narain Gupta", year: "2018", bench: "5 judges", status: "good",
  facts: "States asked the Court to reconsider Nagaraj, arguing that requiring proof of the backwardness of Scheduled Castes and Tribes contradicted Indra Sawhney.",
  held: "Nagaraj was wrong to require data on the backwardness of SCs and STs — their backwardness is presumed by their listing under Articles 341 and 342. But the creamy-layer principle does apply to them in promotions.",
  why: "It removed the hardest of Nagaraj's conditions while, controversially, extending the creamy layer to SC and ST promotions for the first time." }
],

"17": [
{ case: "Appa Balu Ingale", full: "State of Karnataka v. Appa Balu Ingale", year: "1993", status: "good",
  facts: "Members of a Scheduled Caste were stopped at gunpoint from drawing water from a newly dug borewell. The accused were convicted under the Protection of Civil Rights Act and acquitted on appeal.",
  held: "Convictions restored. The Court read Article 17 as directed at the whole practice of untouchability in every form, and held it operates against private individuals, not only the State.",
  why: "The clearest judicial statement that Article 17 is horizontally enforceable — you can be prosecuted for it even though you are not the government." }
],

/* ---------- Right to Freedom ---------- */

"19": [
{ case: "Romesh Thappar", full: "Romesh Thappar v. State of Madras", year: "1950", bench: "6 judges", status: "good",
  facts: "Madras banned the circulation of the left-wing journal Cross Roads in the State, using a public-safety law.",
  held: "Freedom of speech includes freedom of circulation — a ban on circulation is a ban on speech. 'Public safety' and 'public order' were then not grounds listed in Article 19(2), so the ban failed.",
  why: "India's first free-speech judgment. It, and Brij Bhushan decided the same day, provoked the First Amendment, which added three grounds to Article 19(2) — public order, friendly relations with foreign States, and incitement to an offence — and inserted the word 'reasonable' before 'restrictions'." },
{ case: "Sakal Papers", full: "Sakal Papers (P) Ltd. v. Union of India", year: "1962", bench: "5 judges", status: "good",
  facts: "An order fixed the number of pages a newspaper could publish for a given price and limited advertising space, framed as a measure to help small newspapers.",
  held: "Struck down. The State cannot curtail circulation or content indirectly through economic regulation, and the interest of a business cannot be used as a ground to restrict speech under Article 19(2).",
  why: "It established that press freedom cannot be squeezed through the commercial side of the newspaper." },
{ case: "Bennett Coleman", full: "Bennett Coleman & Co. v. Union of India", year: "1973", bench: "5 judges", status: "good",
  facts: "A newsprint control policy capped page numbers and stopped big newspaper groups from starting new editions, on the stated ground of scarce newsprint.",
  held: "Struck down. The Court applied the 'direct and inevitable effect' test: however the measure is dressed up, if its real effect is to abridge speech, Article 19(1)(a) is engaged.",
  why: "It rejected the argument that a restriction aimed at newsprint rather than content escapes free-speech scrutiny." },
{ case: "Shreya Singhal", full: "Shreya Singhal v. Union of India", year: "2015", status: "good",
  facts: "Two young women were arrested over a Facebook post and a 'like' about the shutdown of Mumbai after a politician's death. Section 66A of the IT Act punished sending 'grossly offensive' or 'menacing' online messages.",
  held: "Section 66A struck down entirely as vague and overbroad. The Court distinguished discussion and advocacy, which are protected, from incitement, which is not — only the last can be restricted.",
  why: "The most important internet free-speech judgment in India, and the source of the advocacy-versus-incitement line now used across Article 19(2) cases." },
{ case: "Anuradha Bhasin", full: "Anuradha Bhasin v. Union of India", year: "2020", status: "good",
  facts: "After Article 370 was read down in August 2019, internet and movement restrictions were imposed across Jammu and Kashmir. A newspaper editor challenged them.",
  held: "Freedom of speech and of trade over the internet is protected by Articles 19(1)(a) and 19(1)(g). An indefinite internet shutdown is impermissible; every order must be published, reasoned, proportionate, and periodically reviewed.",
  why: "It brought internet shutdowns inside constitutional discipline and made the orders themselves reviewable rather than secret." },
{ case: "Bijoe Emmanuel", full: "Bijoe Emmanuel v. State of Kerala", year: "1986", status: "good",
  facts: "Three Jehovah's Witness children were expelled from school for standing respectfully but not singing the national anthem, which their faith forbade.",
  held: "Expulsion set aside. Standing respectfully shows no disrespect; there is no law compelling anyone to sing. Compelling them violated both Article 19(1)(a) — which includes the right not to speak — and Article 25.",
  why: "The leading Indian authority that free speech includes the freedom to stay silent." }
],

"20": [
{ case: "Kathi Kalu Oghad", full: "State of Bombay v. Kathi Kalu Oghad", year: "1961", bench: "11 judges", status: "good",
  facts: "Accused persons were made to give specimen handwriting, signatures and thumb impressions. They argued this compelled them to be witnesses against themselves.",
  held: "'To be a witness' means to make a personal testimonial communication. Giving fingerprints, handwriting samples or blood is furnishing material evidence, not testimony, so Article 20(3) is not violated.",
  why: "The line it drew — testimony versus physical evidence — still decides what investigators may compel from an accused." },
{ case: "Selvi", full: "Selvi v. State of Karnataka", year: "2010", status: "good",
  facts: "Investigators used narco-analysis, polygraph and brain-mapping tests on suspects without consent, arguing the results were material rather than testimonial evidence.",
  held: "All three techniques involve testimonial responses and cannot be administered without consent. Compelling them violates Article 20(3) and the mental privacy protected by Article 21.",
  why: "It extended Article 20(3) from what a suspect says to what can be extracted from a suspect's mind." },
{ case: "Maqbool Hussain", full: "Maqbool Hussain v. State of Bombay", year: "1953", status: "good",
  facts: "Gold was confiscated from a traveller by customs authorities, and he was afterwards prosecuted under the Foreign Exchange Regulation Act for the same conduct.",
  held: "No double jeopardy. Customs officers are not a court or judicial tribunal, so the confiscation was not a 'prosecution and punishment' within Article 20(2).",
  why: "It narrowed Article 20(2) to prior proceedings before a court, which is why departmental penalties and criminal trials can both proceed on the same facts." }
],

"21": [
{ case: "A.K. Gopalan", full: "A.K. Gopalan v. State of Madras", year: "1950", bench: "6 judges", status: "overruled",
  facts: "A communist leader detained under the Preventive Detention Act argued that 'procedure established by law' in Article 21 must mean fair procedure, and that the detention also violated Article 19.",
  held: "Any procedure laid down by a validly enacted law satisfies Article 21 — the Court will not ask whether it is fair. The fundamental rights were treated as separate, watertight compartments.",
  why: "The narrowest reading Article 21 ever received, and the reason the Emergency-era detention regime was constitutionally comfortable. Overruled in Maneka Gandhi." },
{ case: "Maneka Gandhi", full: "Maneka Gandhi v. Union of India", year: "1978", bench: "7 judges", status: "good",
  facts: "Maneka Gandhi's passport was impounded 'in the public interest' with no reasons given and no hearing. She challenged the order under Articles 14, 19 and 21.",
  held: "Procedure under Article 21 must be right, just and fair — not arbitrary, fanciful or oppressive. Articles 14, 19 and 21 are not watertight compartments but a single interlocking scheme, the 'golden triangle'.",
  why: "The most consequential reinterpretation in Indian constitutional history. Every expansion of Article 21 since — privacy, dignity, livelihood, environment — descends from it." },
{ case: "ADM Jabalpur", full: "ADM Jabalpur v. Shivkant Shukla (the Habeas Corpus case)", year: "1976", bench: "5 judges", status: "overruled",
  facts: "During the Emergency, the right to move courts for enforcement of Articles 14, 21 and 22 was suspended. High Courts nevertheless entertained habeas corpus petitions from detainees, and the government appealed.",
  held: "By 4–1, a detainee has no locus to move any court for habeas corpus during the suspension — even if the detention is malicious or the person is killed. Justice H.R. Khanna dissented alone, holding that the right to life does not depend on Article 21.",
  why: "The Court's darkest hour. The 44th Amendment made Articles 20 and 21 non-suspendable so it could never recur, and a nine-judge bench in Puttaswamy (2017) expressly overruled it. Khanna's dissent cost him the Chief Justiceship and is now treated as the correct view." },
{ case: "Hussainara Khatoon", full: "Hussainara Khatoon v. State of Bihar", year: "1979", status: "good",
  facts: "A newspaper report revealed thousands of undertrial prisoners in Bihar who had been in jail awaiting trial for longer than the maximum sentence for their alleged offences.",
  held: "A speedy trial is an essential part of the right to life and personal liberty under Article 21, and free legal aid to an indigent accused is a constitutional requirement, not charity.",
  why: "India's first public interest litigation to produce mass release, and the origin of the right to speedy trial and to legal aid." },
{ case: "Olga Tellis", full: "Olga Tellis v. Bombay Municipal Corporation", year: "1985", bench: "5 judges", status: "good",
  facts: "Bombay decided to evict and deport pavement and slum dwellers without notice. A journalist and the dwellers petitioned to stop it.",
  held: "The right to life includes the right to livelihood, since no one can live without the means of living. Eviction may still be lawful, but it must follow fair procedure — notice and a hearing.",
  why: "It made livelihood a constitutional interest and set the procedural floor for evictions that later slum and rehabilitation cases build on." },
{ case: "Vishaka", full: "Vishaka v. State of Rajasthan", year: "1997", status: "historic",
  facts: "A social worker in Rajasthan was gang-raped for trying to stop a child marriage. There was then no law in India on sexual harassment at work.",
  held: "Reading Articles 14, 19(1)(g) and 21 with India's obligations under the CEDAW convention, the Court framed binding guidelines for every workplace — and directed they operate as law until Parliament legislated.",
  why: "A rare instance of the Court writing an interim legal code. The guidelines governed for sixteen years until the Sexual Harassment of Women at Workplace Act, 2013 replaced them." },
{ case: "Puttaswamy", full: "Justice K.S. Puttaswamy (Retd.) v. Union of India", year: "2017", bench: "9 judges", status: "good",
  facts: "Challenges to Aadhaar ran into two old rulings — M.P. Sharma (1954) and Kharak Singh (1962) — which suggested the Constitution contains no right to privacy. A nine-judge bench was constituted to settle it.",
  held: "Unanimously, privacy is a fundamental right intrinsic to life and personal liberty under Article 21 and to the freedoms in Part III. Any invasion must satisfy legality, a legitimate aim, and proportionality. M.P. Sharma and Kharak Singh were overruled, and so was ADM Jabalpur.",
  why: "The foundation of Indian data-protection and surveillance law, and the basis on which Section 377 and the adultery provision were struck down the following year." },
{ case: "Common Cause", full: "Common Cause v. Union of India", year: "2018", bench: "5 judges", status: "good",
  facts: "An NGO sought recognition of the right of a terminally ill patient to refuse life support, and of advance directives — 'living wills'.",
  held: "The right to die with dignity is part of the right to life. Passive euthanasia — withdrawing life support from a patient in a permanent vegetative state — is permissible, and advance directives are valid, subject to safeguards the Court laid down.",
  why: "It settled two decades of uncertainty after Gian Kaur and Aruna Shanbaug, and the safeguards were simplified further in 2023." },
{ case: "Navtej Singh Johar", full: "Navtej Singh Johar v. Union of India", year: "2018", bench: "5 judges", status: "good",
  facts: "Section 377 of the Indian Penal Code criminalised 'carnal intercourse against the order of nature'. The Delhi High Court had read it down in 2009; the Supreme Court restored it in 2013; this bench reconsidered.",
  held: "Unanimously, Section 377 is unconstitutional so far as it criminalises consensual sexual acts between adults. It violated Articles 14, 15, 19 and 21, including the dignity, autonomy and privacy recognised in Puttaswamy.",
  why: "The clearest demonstration of what Puttaswamy's privacy holding does in practice, and of the Court correcting its own 2013 error." },
{ case: "D.K. Basu", full: "D.K. Basu v. State of West Bengal", year: "1997", status: "good",
  facts: "A letter to the Chief Justice about deaths in police custody was treated as a writ petition.",
  held: "Custodial violence violates Article 21. The Court issued eleven mandatory requirements for every arrest and detention — identification of arresting officers, an arrest memo with a witness, informing a relative, a medical examination every 48 hours, and an entry in the police diary.",
  why: "The D.K. Basu guidelines were later written into the Criminal Procedure Code and remain the baseline test for a lawful arrest." },
{ case: "M.C. Mehta (Oleum Gas Leak)", full: "M.C. Mehta v. Union of India", year: "1987", bench: "5 judges", status: "good",
  facts: "Oleum gas escaped from the Shriram plant in Kirti Nagar, Delhi, on 4 and again on 6 December 1985 — almost exactly a year after the Bhopal disaster, and in the middle of a densely populated area. People nearby were injured and an advocate died.",
  held: "An enterprise engaged in a hazardous activity owes an absolute and non-delegable duty to the community — liability is absolute, with none of the exceptions English law allowed in Rylands v. Fletcher. Compensation must reflect the enterprise's size and capacity.",
  why: "The rule of absolute liability, created in India and now the basis of environmental and industrial-disaster compensation law." }
],

"21A": [
{ case: "Society for Unaided Private Schools", full: "Society for Un-aided Private Schools of Rajasthan v. Union of India", year: "2012", status: "partly",
  facts: "The Right to Education Act required all schools, including private unaided ones, to reserve 25% of entry-level seats for children from disadvantaged groups.",
  held: "By 2–1, the 25% requirement is constitutional and applies to private unaided schools, because Article 21A places the obligation on the State to provide education and the State may discharge it through them. Unaided minority schools were excluded.",
  why: "It made the RTE quota enforceable against private schools, and the minority-school exclusion was confirmed two years later in Pramati." }
],

"22": [
{ case: "A.K. Roy", full: "A.K. Roy v. Union of India", year: "1982", bench: "5 judges", status: "good",
  facts: "The National Security Act, 1980 was challenged as violating Articles 14, 19, 21 and 22, and the Court was asked to enforce the 44th Amendment's unbrought-into-force safeguards.",
  held: "The Act was upheld, but with real limits: grounds of detention must be communicated in a language the detenu understands, vague grounds vitiate detention, and the Advisory Board procedure must be fair. The Court declined to compel the government to bring the 44th Amendment provision into force.",
  why: "The leading case on how preventive detention laws must operate, and a reminder that a constitutional amendment sits inert until the government notifies it." }
],

/* ---------- Against exploitation ---------- */

"23": [
{ case: "PUDR (Asiad Workers)", full: "People's Union for Democratic Rights v. Union of India", year: "1982", status: "good",
  facts: "Workers building venues for the 1982 Asian Games in Delhi were paid below the statutory minimum wage, with contractors pocketing the difference.",
  held: "Paying less than the minimum wage is 'forced labour' under Article 23, because work accepted for less than the legal minimum cannot be truly voluntary — want and destitution are a form of force. Article 23 binds private employers too.",
  why: "It turned an anti-slavery clause into a working labour-rights guarantee, and expanded who may bring a public interest petition." },
{ case: "Bandhua Mukti Morcha", full: "Bandhua Mukti Morcha v. Union of India", year: "1984", status: "good",
  facts: "An organisation wrote to the Court about bonded labourers in stone quarries in Haryana. The letter was treated as a writ petition.",
  held: "Where a labourer is shown to be in forced labour, the Court will presume he is a bonded labourer unless the employer proves otherwise. The State has a positive duty to identify, release and rehabilitate them.",
  why: "It shifted the burden of proof onto the employer, which is what made the Bonded Labour System (Abolition) Act workable at all." }
],

"24": [
{ case: "M.C. Mehta (Child Labour)", full: "M.C. Mehta v. State of Tamil Nadu", year: "1996", status: "good",
  facts: "A petition followed a fire at a Sivakasi fireworks factory that killed child workers.",
  held: "Children under 14 must be withdrawn from hazardous work. Offending employers must pay ₹20,000 per child into a welfare fund, the State must contribute ₹5,000 where it cannot provide an adult family member a job, and the child must be educated.",
  why: "It converted the Article 24 prohibition into a concrete compensation and rehabilitation scheme rather than a bare ban." }
],

/* ---------- Freedom of religion ---------- */

"25": [
{ case: "Shirur Mutt", full: "Commissioner, Hindu Religious Endowments, Madras v. Sri Lakshmindra Thirtha Swamiar", year: "1954", bench: "7 judges", status: "good",
  facts: "A Madras Act gave a government commissioner extensive control over the administration of Hindu religious endowments. The head of the Shirur Mutt challenged it.",
  held: "What constitutes an essential part of a religion is to be decided with reference to the doctrines of that religion itself. The State may regulate secular activity associated with religion, but not the religion itself, and it may not take over administration entirely.",
  why: "The origin of the 'essential religious practices' test — the doctrine that has since let courts decide what is and is not essential to a faith, from Sabarimala to the hijab." },
{ case: "Rev. Stainislaus", full: "Rev. Stainislaus v. State of Madhya Pradesh", year: "1977", bench: "5 judges", status: "good",
  facts: "Madhya Pradesh and Odisha enacted laws prohibiting conversion by force, fraud or allurement. They were challenged as violating the right to propagate religion.",
  held: "'Propagate' means the right to transmit and spread your beliefs — it does not include a right to convert another person. What Article 25 guarantees is freedom of conscience for all equally, so the anti-conversion laws were valid.",
  why: "The constitutional foundation of every State anti-conversion law enacted since, and a much-criticised narrowing of 'propagate'." },
{ case: "Sabarimala", full: "Indian Young Lawyers Association v. State of Kerala", year: "2018", bench: "5 judges", status: "partly",
  facts: "The Sabarimala temple barred women of menstruating age, between 10 and 50, from entering. The rule was defended as an essential practice of the deity's celibate character.",
  held: "By 4–1, the exclusion was struck down as violating Articles 14, 15, 17, 21 and 25. The devotees were held not to be a separate religious denomination, and the practice not essential. Justice Indu Malhotra dissented.",
  why: "Review petitions were referred to a nine-judge bench in 2019 to settle the wider questions about essential practices and the reach of Article 25, and that reference is still pending — so the judgment stands but its foundations are under reconsideration." }
],

"26": [
{ case: "Durgah Committee", full: "Durgah Committee, Ajmer v. Syed Hussain Ali", year: "1961", bench: "5 judges", status: "good",
  facts: "A statute reorganised the administration of the Ajmer dargah. Khadims — hereditary servants of the shrine — claimed the Act infringed the denomination's right to manage its own affairs.",
  held: "The claimants were not a denomination with the rights they asserted. The Court warned that practices which are merely superstitious accretions, and not integral to the religion, get no protection under Articles 25 and 26.",
  why: "It added the 'superstitious accretion' filter to the essential-practices test, giving courts a further ground to exclude a practice from protection." }
],

/* ---------- Cultural and educational rights ---------- */

"30": [
{ case: "T.M.A. Pai Foundation", full: "T.M.A. Pai Foundation v. State of Karnataka", year: "2002", bench: "11 judges", status: "good",
  facts: "Private and minority professional colleges challenged State control over admissions and fees. An eleven-judge bench was assembled to settle the rights of private and minority institutions once and for all.",
  held: "Minority status is determined State-wise, not nationally. Private unaided institutions have autonomy over admission and fees, subject to the State's power to ensure merit, transparency and no profiteering. Aided institutions accept more regulation.",
  why: "The governing statement on private and minority education. Islamic Academy and P.A. Inamdar are attempts to work out what it meant in practice." },
{ case: "Aligarh Muslim University", full: "Aligarh Muslim University v. Naresh Agarwal", year: "2024", bench: "7 judges", status: "good",
  facts: "Whether AMU is a minority institution under Article 30 had been contested since Azeez Basha (1968), which held that a university created by statute cannot be a minority institution.",
  held: "By 4–3, Azeez Basha was overruled. An institution does not lose minority character merely because it was incorporated by statute; what matters is who founded it and for whose benefit. The question of AMU's own status was sent to a regular bench applying this test.",
  why: "It reopened minority status for institutions created by law, with consequences well beyond AMU." }
],

/* ---------- Property and saving clauses ---------- */

"31B": [
{ case: "I.R. Coelho", full: "I.R. Coelho v. State of Tamil Nadu", year: "2007", bench: "9 judges", status: "good",
  facts: "Laws placed in the Ninth Schedule after Kesavananda were challenged. Article 31B says a Ninth Schedule law cannot be questioned for violating fundamental rights.",
  held: "Any law inserted into the Ninth Schedule after 24 April 1973 — the date of Kesavananda — is open to challenge if it damages the basic structure, tested by the effect the law has on Part III rights, not merely its form.",
  why: "It ended the Ninth Schedule as an absolute shield. Around 284 entries sit there; those added after 1973 are now all vulnerable." },
{ case: "Waman Rao", full: "Waman Rao v. Union of India", year: "1981", bench: "5 judges", status: "good",
  facts: "Maharashtra agricultural land-ceiling laws placed in the Ninth Schedule were challenged after Kesavananda.",
  held: "Amendments made before 24 April 1973 are immune; those made after that date are open to basic-structure review. Articles 31A and 31C, as they stood before the 42nd Amendment, were upheld.",
  why: "It fixed the Kesavananda date as the constitutional dividing line, which Coelho then applied to the Ninth Schedule." }
],

"31C": [
{ case: "Minerva Mills", full: "Minerva Mills Ltd. v. Union of India", year: "1980", bench: "5 judges", status: "good",
  facts: "A textile mill was nationalised. The challenge grew into an attack on two clauses the 42nd Amendment had inserted — Article 368(4) and (5), which purported to put amendments beyond judicial review and declare the amending power unlimited.",
  held: "Both clauses struck down: limited amending power is itself part of the basic structure, and a power to destroy cannot be conferred on the amending body. The 42nd Amendment's widening of Article 31C to all directive principles was also struck down, since the balance between Parts III and IV is a basic feature.",
  why: "It confirmed that Parliament cannot amend away judicial review of amendments, and restored Article 31C to its pre-1976 shape." }
],

/* ---------- Constitutional remedies ---------- */

"32": [
{ case: "S.P. Gupta (Judges Transfer)", full: "S.P. Gupta v. Union of India", year: "1981", bench: "7 judges", status: "partly",
  facts: "Lawyers challenged the government's refusal to confirm additional judges and the transfer of a Chief Justice, and had to establish that they had standing to bring the case at all.",
  held: "Any member of the public acting bona fide may move the Court for a legal wrong suffered by a person or class unable to approach it themselves. On the merits, 'consultation' with the Chief Justice did not mean concurrence — the executive had primacy in judicial appointments.",
  why: "It opened the door to public interest litigation in India. Its holding on appointments was reversed by the Second Judges Case in 1993." },
{ case: "Rupa Ashok Hurra", full: "Rupa Ashok Hurra v. Ashok Hurra", year: "2002", bench: "5 judges", status: "good",
  facts: "The Court was asked whether it could reconsider a final judgment after a review petition had already been dismissed.",
  held: "Yes, in rare cases, through a newly created 'curative petition' — where there was a violation of natural justice or the judge did not disclose a conflict of interest. It must be certified by a senior advocate and is normally decided in chambers.",
  why: "The last remedy in the Indian legal system, created by the Court out of Article 142 rather than by any statute." }
]

});
