/* What the examiners actually ask — Parts XV to XXI, plus the Schedules that
   carry exam weight of their own.
   Schema, sources and house style: see exam-1.js. */
Object.assign(window.COI_EXAM = window.COI_EXAM || {}, {

"324": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "Article 324 gives the Election Commission the superintendence, direction and control of elections to Parliament, the State legislatures, and the offices of President and Vice-President.",
  why: "The Election Commission is among the most heavily examined constitutional bodies. The 2023 judgment on how Commissioners are appointed, and the law that soon overrode it, made the subject current again.",
  concepts: [
    { t: "What it controls", d: "Superintendence, direction and control of the preparation of electoral rolls and the conduct of all elections to Parliament, to State legislatures, and to the offices of President and Vice-President." },
    { t: "What it does not control", d: "Elections to panchayats and municipalities. Local elections belong to the State Election Commission, under Articles 243K and 243ZA." },
    { t: "Composition", d: "A Chief Election Commissioner and such number of other Commissioners as the President fixes. The Commission had a single member until 1989, and briefly again in 1990. The Commission has had three members since 1993." },
    { t: "The security-of-tenure gap", d: "The Chief Election Commissioner can be removed only in the same manner as a Supreme Court judge. The other Commissioners can be removed on the Chief Election Commissioner's recommendation. So the two Commissioners have weaker protection." },
    { t: "Anoop Baranwal (2023)", d: "A Constitution Bench held that until Parliament made a law, appointments should be made by a committee of the Prime Minister, the Leader of the Opposition and the Chief Justice of India." },
    { t: "What Parliament then did", d: "The Chief Election Commissioner and other Election Commissioners Act, 2023 replaced the Chief Justice on that panel with a Union Cabinet Minister, giving the government a majority on it." },
    { t: "Plenary power where law is silent", d: "Mohinder Singh Gill (1978) held that Article 324 gives the Commission residuary power to act where the law does not provide, so that elections are not left unregulated." },
    { t: "The Model Code of Conduct", d: "The Model Code has no statutory force. The Code works through consensus among parties and the Commission's moral authority." }
  ],
  seen: [
    "UPSC Pre 2017 — the Commission's composition, its power over the election schedule, and disputes over party splits",
    "UPSC Mains 2022 — the Election Commission and the Model Code of Conduct",
    "UPSC Mains 2017 — the Commission's proposed electoral reforms",
    "UPPCS Mains 2024 — revising the appointment process to secure the Commission's independence"
  ],
  trap: "The Chief Election Commissioner and the other two Commissioners do not have equal protection.\n\nThe Chief has judge-level security. The others can be removed on the Chief's recommendation. The difference is the standard criticism, and the standard question."
},

"326": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 326 says elections to the Lok Sabha and the State Assemblies shall be on the basis of adult suffrage. Every citizen aged 18 or more who is not otherwise disqualified can register as a voter.",
  why: "Universal adult suffrage and the lowering of the voting age are precise facts that are often asked. There is also a subtle point about whether voting is actually a right.",
  concepts: [
    { t: "What it guarantees", d: "Elections to the Lok Sabha and to every State Legislative Assembly shall be on the basis of adult suffrage. Every citizen not otherwise disqualified is entitled to be registered as a voter." },
    { t: "The age was lowered", d: "From 21 to 18 by the 61st Amendment, 1988, which took effect for the 1989 general election." },
    { t: "The permitted disqualifications", d: "Non-residence, unsoundness of mind, crime, or corrupt or illegal practice. Nothing else." },
    { t: "But voting itself is a statutory right", d: "The Supreme Court has repeatedly held the right to vote is conferred by the Representation of the People Act, 1951, not by the Constitution. The right to vote is neither a Fundamental Right nor a common-law right." },
    { t: "The related Fundamental Right", d: "The right to *know* a candidate's antecedents, such as assets, criminal cases and education, was held to flow from freedom of expression under Article 19(1)(a) in Union of India v. Association for Democratic Reforms (2002)." },
    { t: "NOTA", d: "The option of None of the Above was introduced by the Supreme Court in PUCL (2013), reasoning from the right to secrecy in casting a negative vote." }
  ],
  seen: [
    "UPSC Pre 2017 — voting as a constitutional rather than a Fundamental Right"
  ],
  trap: "Article 326 guarantees adult suffrage, but the right to vote is statutory.\n\nBoth statements are correct, and they sit together. The Constitution requires elections to be on the basis of adult suffrage. The individual's entitlement to cast a ballot comes from the 1951 Act."
},

"330": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 330 reserves seats in the Lok Sabha for Scheduled Castes and Scheduled Tribes, in proportion to their share of each State's population.",
  why: "Questions ask about reserved seats in legislatures together with the time limit in Article 334, and the 2019 amendment gave that limit a fresh date.",
  concepts: [
    { t: "What it reserves", d: "Seats in the Lok Sabha for Scheduled Castes and Scheduled Tribes, in proportion to their share of the population." },
    { t: "The State counterpart", d: "Article 332 does the same for State Legislative Assemblies." },
    { t: "The exclusions", d: "No seats are reserved for Scheduled Castes in Assam's autonomous districts, and none in the States of Nagaland, Meghalaya, Mizoram and Arunachal Pradesh." },
    { t: "The time limit", d: "Article 334 originally set ten years. Amendments have extended the limit every decade since. The 104th Amendment (2019) took it to 25 January 2030." },
    { t: "Anglo-Indian nomination has ended", d: "Article 331 allowed the President to nominate two Anglo-Indians to the Lok Sabha. The 104th Amendment let that lapse in January 2020." },
    { t: "Women's reservation is not yet in force", d: "The 106th Amendment (2023) reserves one third of Lok Sabha and Assembly seats for women. The reservation takes effect only after a census and the delimitation that follows." },
    { t: "No OBC reservation in legislatures", d: "Backward classes get reservation in education and public employment, never in legislative seats." }
  ],
  seen: [
    "UPSC Pre 2024 — Scheduled Tribe recognition and how it varies between States"
  ],
  trap: "There is no reservation for Other Backward Classes in Parliament or a State Assembly.\n\nAnd the 106th Amendment's women's reservation, though passed, is not operative. Treating either as being in force today is wrong."
},

"335": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 335 says the claims of Scheduled Castes and Scheduled Tribes to government posts shall be taken into account, consistently with keeping the administration efficient.",
  why: "Article 335 is the efficiency clause. The 2023 paper asked it directly, and every argument about reservation in promotion turns on it.",
  concepts: [
    { t: "What it says", d: "The claims of Scheduled Castes and Scheduled Tribes shall be taken into consideration, consistently with the maintenance of efficiency of administration, in making appointments to services and posts." },
    { t: "Article 335 cuts both ways", d: "The article requires their claims to be considered, which supports reservation. And it subjects that to efficiency, which limits it." },
    { t: "The 82nd Amendment (2000)", d: "The amendment added a proviso allowing the State to relax qualifying marks and lower standards of evaluation for reservation in promotion. The proviso undid a Supreme Court ruling that such relaxation offended Article 335." },
    { t: "M. Nagaraj (2006)", d: "The Court read Article 335 as a constraint on reservation in promotion, requiring the State to show quantifiable data on backwardness, inadequate representation, and no adverse effect on efficiency." },
    { t: "Jarnail Singh (2018)", d: "The judgment removed the need to prove that Scheduled Castes and Tribes are backward, holding that they are presumed to be. The data requirement on inadequate representation survived." },
    { t: "Efficiency reinterpreted", d: "In Jarnail Singh and later cases, the Court said efficiency must be understood inclusively. A representative administration is itself efficient, not a compromise on efficiency." }
  ],
  seen: [
    "UPSC Pre 2023 — reservation, Article 16(4) and the maintenance of efficiency under Article 335"
  ],
  trap: "The 82nd Amendment neutralised the efficiency clause for relaxing marks, but not for everything.\n\nArticle 335 still operates as a constraint on reservation in promotion through the Nagaraj tests. Article 335 qualifies reservation, but never bars it."
},

"338": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 338 sets up the National Commission for Scheduled Castes, with a Chairperson, a Vice-Chairperson and three members, to investigate and report on the safeguards for Scheduled Castes.",
  why: "The three Commissions for Scheduled Castes, Scheduled Tribes and Backward Classes make a matching question that has been asked more than once, usually mixed with bodies that are *not* constitutional.",
  concepts: [
    { t: "What it creates", d: "The National Commission for Scheduled Castes." },
    { t: "Composition", d: "A Chairperson, a Vice-Chairperson and three other members, appointed by the President by warrant under hand and seal." },
    { t: "How it became constitutional", d: "The 65th Amendment (1990) replaced a single Special Officer with a multi-member constitutional Commission. The 89th Amendment (2003) split off a separate Commission for Scheduled Tribes." },
    { t: "Its powers", d: "While investigating a matter or a complaint, the Commission has all the powers of a civil court. The Commission can summon witnesses, require documents and receive evidence on affidavit." },
    { t: "Consultation is mandatory", d: "The Union and every State government must consult the Commission on all major policy matters affecting Scheduled Castes." },
    { t: "Where its reports go", d: "To the President, who lays them before each House of Parliament, along with a memorandum explaining any recommendation not accepted and the reasons." },
    { t: "Which bodies are not constitutional", d: "The National Human Rights Commission and the National Commission for Women are statutory. The Law Commission is an executive body constituted by government order." }
  ],
  seen: [
    "UPSC Pre 2023 — constitutional bodies, contrasting the NCBC with the Law Commission and others",
    "UPSC Mains 2018 — enforcement powers of the NCSC in religious minority institutions"
  ],
  trap: "Only three of these Commissions are in the Constitution: Scheduled Castes, Scheduled Tribes and Backward Classes.\n\nThe Human Rights Commission, the Commission for Women, the Commission for Minorities and the Law Commission are not. Questions routinely mix them together."
},

"338A": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 338A sets up the National Commission for Scheduled Tribes, with a Chairperson, a Vice-Chairperson and three members, to investigate and report on the safeguards for Scheduled Tribes.",
  why: "The 89th Amendment of 2003 separated the Scheduled Tribes Commission from the Scheduled Castes Commission. The split is a clean fact about an amendment, with a date attached.",
  concepts: [
    { t: "What it creates", d: "The National Commission for Scheduled Tribes." },
    { t: "When", d: "The 89th Amendment, 2003. Before that a single Commission served both Scheduled Castes and Scheduled Tribes." },
    { t: "Composition and powers", d: "The Commission is identical to the Scheduled Castes Commission: a Chairperson, a Vice-Chairperson and three members, with the powers of a civil court in investigations." },
    { t: "Mandatory consultation", d: "The Union and every State must consult it on all major policy matters affecting Scheduled Tribes." },
    { t: "Why it was split", d: "The concerns of Scheduled Tribes, such as loss of land, forest rights, displacement and autonomous councils, differ in kind from those of Scheduled Castes. In a combined body they were getting less attention." }
  ],
  trap: "Before 2003 there was one Commission for both groups.\n\nThe sequence matters: a Special Officer until 1990, a combined multi-member Commission from 1990, and two separate Commissions from 2003."
},

"338B": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 338B sets up the National Commission for Backward Classes, which investigates and reports on the safeguards for the socially and educationally backward classes.",
  why: "The National Commission for Backward Classes became constitutional only in 2018. Prelims likes recent changes of status, and this change came in a sequence of steps.",
  concepts: [
    { t: "What it creates", d: "The National Commission for Backward Classes, with five members appointed by the President." },
    { t: "The Commission was statutory first", d: "Set up in 1993 by an Act of Parliament, following the Supreme Court's direction in Indra Sawhney that a permanent body examine claims of over-inclusion and under-inclusion." },
    { t: "The 102nd Amendment (2018)", d: "The amendment gave the Commission constitutional status. The same amendment inserted Article 342A, on the central list of backward classes." },
    { t: "The unintended consequence", d: "In the Maratha reservation case (2021) the Supreme Court read the 102nd Amendment as having taken away the States' power to identify their own backward classes." },
    { t: "The 105th Amendment (2021)", d: "Passed within months to restore that power, by adding Article 342A(3) making clear States may maintain their own lists." },
    { t: "Its powers", d: "Civil-court powers of investigation, mandatory consultation on major policy affecting backward classes, and annual reports to the President." }
  ],
  seen: [
    "UPSC Pre 2023 — constitutional bodies and the NCBC",
    "UPSC Mains 2022 — the transformation of the National Commission for Backward Classes"
  ],
  trap: "The whole point is the sequence, not any single date.\n\nStatutory in 1993, constitutional in 2018, and then a correcting amendment in 2021 after a judgment read the 2018 change too widely. Questions test the order of events."
},

"340": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 340 lets the President appoint a Commission to investigate the conditions of the socially and educationally backward classes and recommend how to improve them.",
  why: "Article 340 is the constitutional source of both the Kalelkar and the Mandal Commissions. Candidates often confuse it with Article 338B.",
  concepts: [
    { t: "What it permits", d: "The President may appoint a Commission to investigate the conditions of socially and educationally backward classes, the difficulties they face, and what should be done to remove them." },
    { t: "The Commission is an investigating body", d: "A Commission under Article 340 is appointed for a task and then reports and dissolves. The Commission is not a standing institution." },
    { t: "The First Backward Classes Commission", d: "Chaired by Kaka Kalelkar, appointed in 1953, reported in 1955. Its recommendations were not acted upon. The Chairman himself later disowned parts of the report." },
    { t: "The Second Backward Classes Commission", d: "Chaired by B.P. Mandal, appointed in 1979, reported in 1980. The Commission identified 3,743 backward castes and recommended 27 per cent reservation in central government jobs." },
    { t: "Implementation and aftermath", d: "The Mandal recommendations were implemented in 1990. In Indra Sawhney (1992) the Supreme Court upheld the 27% quota but required exclusion of the creamy layer and set a 50% overall ceiling." },
    { t: "The report goes to Parliament", d: "The President lays the Commission's report, with a memorandum on the action taken, before each House." }
  ],
  trap: "Article 340 creates a temporary investigating Commission. Article 338B creates the permanent National Commission for Backward Classes.\n\nKalelkar and Mandal came from Article 340. The standing NCBC came from a 1993 statute and then the 102nd Amendment."
},

"342A": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 342A lets the President notify, for the Union's purposes, a central list of the socially and educationally backward classes. Each State keeps its own list for its own purposes.",
  why: "Two amendments three years apart, the second undoing the effect of the first, make a well-shaped question.",
  concepts: [
    { t: "What it provides", d: "The President, after consulting the Governor, may specify the socially and educationally backward classes for a State. Parliament may then include or exclude classes from that central list by law." },
    { t: "When it was added", d: "By the 102nd Amendment, 2018, alongside constitutional status for the NCBC." },
    { t: "What went wrong", d: "In the Maratha reservation case (2021) the Supreme Court held by majority that the amendment had created a single central list, stripping States of the power to identify their own backward classes." },
    { t: "Why that mattered", d: "States identify backward classes for their own reservations in State jobs and colleges. Losing that power would have thrown every State list into doubt." },
    { t: "The 105th Amendment (2021)", d: "The amendment added Article 342A(3), which expressly keeps the power of every State to prepare and maintain its own list of socially and educationally backward classes." },
    { t: "Where it stands", d: "There is a central list, used for central government jobs and central educational institutions, and separate State lists. They are not the same, and a caste can be on one and not the other." }
  ],
  trap: "The central list and the State lists are different lists.\n\nA community may be backward for State purposes and not for central purposes, or the reverse. The 2021 judgment treated them as a single list. Parliament reversed that reading months later with the 105th Amendment."
},

"343": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 343 says the official language of the Union shall be Hindi in the Devanagari script, with the international form of Indian numerals for official purposes.",
  why: "Questions on official language are a staple of State papers and appear in UPSC matching sets. The article also answers a very common misconception.",
  concepts: [
    { t: "What it says", d: "The official language of the Union shall be Hindi in the Devanagari script." },
    { t: "The numerals", d: "The numerals for official purposes are the international form of Indian numerals, which means 1, 2, 3, and not the Devanagari forms. Examiners love the small detail." },
    { t: "English for fifteen years", d: "English was to continue for official purposes for fifteen years from 1950, that is until 1965." },
    { t: "What actually happened", d: "The Official Languages Act, 1963 provided that English *may* continue to be used indefinitely, in addition to Hindi. After the 1965 anti-Hindi agitations in Tamil Nadu the Act was amended in 1967 to make continuation effectively permanent." },
    { t: "Hindi is not the national language", d: "The Constitution never uses that phrase for any language. The Constitution names an official language of the Union, which is a narrower thing." },
    { t: "The Eighth Schedule is separate", d: "The 22 languages listed there are recognised languages, relevant to Articles 344 and 351. Being in the Eighth Schedule does not make a language official." }
  ],
  trap: "India has no national language, and the Constitution never claims one.\n\nHindi is the official language of the Union. English is an additional official language by statute. And the Eighth Schedule lists 22 recognised languages. Three different categories that questions deliberately blur."
},

"348": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 348 says proceedings in the Supreme Court and the High Courts, and the authoritative texts of laws and Bills, shall be in English until Parliament decides otherwise.",
  why: "Language in the courts is a precise fact with a live policy debate behind it. The exception comes with a condition that is easy to test.",
  concepts: [
    { t: "The default", d: "All proceedings in the Supreme Court and in every High Court shall be in English, until Parliament provides otherwise." },
    { t: "Authoritative texts", d: "The authoritative texts of all Bills, Acts, ordinances, orders, rules, regulations and bye-laws, at both Union and State level, shall be in English." },
    { t: "The exception for High Courts", d: "The Governor of a State may, with the President's *previous consent*, authorise the use of Hindi or the State's official language in proceedings in that High Court." },
    { t: "But not for judgments", d: "Even where that permission is given, any judgment, decree or order must still be in English, unless Parliament provides otherwise by law." },
    { t: "Where it has been done", d: "Rajasthan, Uttar Pradesh, Madhya Pradesh and Bihar have permission to use Hindi in High Court proceedings. Requests from Tamil Nadu, Gujarat and others have been declined." },
    { t: "Nothing for the Supreme Court", d: "There is no equivalent provision allowing any language other than English in the Supreme Court." }
  ],
  trap: "Permission covers oral and written proceedings, but not the judgment itself.\n\nThe judgment, decree or order must remain in English. So a State can argue a case in Hindi and still receive an English judgment."
},

"352": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "Article 352 lets the President declare a national emergency when war, external aggression or armed rebellion threatens India's security, on the Cabinet's written advice. Parliament must approve it within one month.",
  why: "National emergency is examined every cycle. Almost every safeguard in Article 352 was added by the 44th Amendment after the 1975 Emergency, which gives it a clear before and after.",
  concepts: [
    { t: "The three grounds", d: "War, external aggression, or armed rebellion. Originally the third ground was \"internal disturbance\", which the 44th Amendment replaced with the much narrower \"armed rebellion\"." },
    { t: "The Cabinet must recommend it in writing", d: "Another 44th Amendment safeguard. In 1975 the Prime Minister advised the President alone, without consulting the Cabinet." },
    { t: "Parliamentary approval", d: "Both Houses must approve within one month, by a special majority. The special majority is a majority of total membership and two-thirds of those present and voting. Before 1978 it was two months and a simple majority." },
    { t: "Duration", d: "Six months at a time, renewable indefinitely with fresh parliamentary approval each time." },
    { t: "The Lok Sabha can revoke it", d: "If one tenth of the members of the Lok Sabha give notice, a special sitting must be held within fourteen days, and a simple majority of the House can disapprove the emergency." },
    { t: "An emergency can be partial", d: "Since the 42nd Amendment, an emergency may be declared for the whole of India or only part of it." },
    { t: "Three times so far", d: "1962, on Chinese aggression. 1971, on war with Pakistan. 1975, on internal disturbance, the only one not caused by a threat from outside." },
    { t: "Judicial review", d: "The 38th Amendment made the proclamation immune from challenge. The 44th Amendment removed that immunity, and Minerva Mills confirmed it is reviewable on the ground of mala fides." }
  ],
  seen: [
    "UPSC Pre 2024 — Part XVIII and the emergency provisions",
    "UPSC Pre 2018 — Article 356 and the suspension of Article 19"
  ],
  trap: "Nearly every safeguard you can name came from the 44th Amendment, 1978.\n\nOne month instead of two, special majority instead of simple, armed rebellion instead of internal disturbance, and the written Cabinet recommendation. Questions ask which of these was original, and the answer is usually none of them."
},

"355": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 355 makes it the Union's duty to protect every State against external aggression and internal disturbance, and to make sure every State is governed according to the Constitution.",
  why: "Article 355 is the justification for President's rule, and since Bommai it also works as a limit on it. The double role is the sophisticated answer.",
  concepts: [
    { t: "The two duties", d: "The Union has two duties. The first is to protect every State against external aggression and internal disturbance. The second is to make sure the government of every State is carried on according to the Constitution." },
    { t: "Why it exists", d: "The States have no independent means of defence, and cannot secede. In exchange, the Union owes them protection." },
    { t: "Article 355 justifies Articles 356 and 365", d: "The second duty is the constitutional basis for intervening when a State government breaks down." },
    { t: "But it also constrains", d: "Because the article is framed as a duty, courts have read it as requiring the Union to act in proportion. The Union must try lesser measures before reaching for dismissal." },
    { t: "Sarbananda Sonowal (2005)", d: "The Court held that large-scale illegal migration into Assam amounted to external aggression, and struck down a law that made deportation harder, as a failure of the Union's Article 355 duty." },
    { t: "Naga People's Movement (1998)", d: "The Court upheld the deployment of armed forces in a State under Article 355, holding it does not displace the State government." }
  ],
  trap: "Article 355 is a duty on the Union, not merely a power.\n\nThe duty is what lets courts ask whether dismissal was proportionate. The duty is also why sending central forces into a State does not by itself require President's rule."
},

"356": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "Article 356 lets the President take over a State's government when, on the Governor's report or otherwise, the President is satisfied it cannot be carried on according to the Constitution. Parliament must approve within two months.",
  why: "President's rule is the most examined emergency provision. Prelims tests the procedure. Mains tests how far the Bommai judgment actually curbed its misuse.",
  concepts: [
    { t: "The ground", d: "The President is satisfied that a situation has arisen in which the government of a State cannot be carried on in accordance with the Constitution." },
    { t: "How it is triggered", d: "On receipt of a report from the Governor, *or otherwise*. The words \"or otherwise\" mean the centre does not need a Governor's report at all." },
    { t: "What happens", d: "The President may assume the functions of the State government, declare that the powers of the State legislature shall be exercised by Parliament, and make any incidental provisions." },
    { t: "What is not affected", d: "The High Court's powers cannot be assumed or suspended. And the State legislature is not necessarily dissolved. The legislature may only be suspended." },
    { t: "Approval and duration", d: "Both Houses must approve within two months, by a simple majority. Then six months at a time, up to a maximum of three years." },
    { t: "Beyond one year is very hard", d: "After the 44th Amendment, extension past one year requires two conditions together: a national emergency must be in force, and the Election Commission must certify that elections in that State cannot be held." },
    { t: "S.R. Bommai (1994)", d: "The landmark. The proclamation is subject to judicial review. The floor of the House, not the Governor's opinion, is the test of majority. The Assembly cannot be dissolved before Parliament approves. And if the proclamation is struck down, the dismissed government is restored." },
    { t: "Article 365", d: "If a State fails to comply with a Union direction, the President may hold that constitutional machinery has failed. The finding is a separate route into Article 356." }
  ],
  seen: [
    "UPSC Pre 2018 — Article 356, Parliament exercising legislative power, and the suspension of Article 19",
    "UPSC Pre 2017 — the consequences of President's rule, including that dissolution is not necessary",
    "UPSC Pre 2019 — the limits of Article 142 during President's rule",
    "UPSC Mains 2023 — the reduced use of Article 356 since the mid-1990s"
  ],
  trap: "Article 19 is not suspended when President's rule is imposed.\n\nOnly a *national* emergency under Article 352 suspends Article 19, and then through Article 358. The 2018 paper set precisely this trap, and it is the most valuable single distinction in Part XVIII."
},

"358": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 358 says that during a national emergency declared on the ground of war or external aggression, the freedoms in Article 19 are suspended automatically.",
  why: "Articles 358 and 359 are always examined as a pair, because they do similar-sounding things in importantly different ways.",
  concepts: [
    { t: "What it does", d: "When a Proclamation of Emergency is in operation, the six freedoms in Article 19 are automatically suspended. The State may make any law or take any action that would otherwise violate Article 19." },
    { t: "The suspension is automatic", d: "No separate presidential order is needed. The emergency itself does it." },
    { t: "Article 358 covers Article 19 only", d: "No other Fundamental Right is touched by Article 358." },
    { t: "The 44th Amendment narrowed it", d: "Article 358 now applies only when the emergency is declared on the ground of war or external aggression, and not for armed rebellion." },
    { t: "Only emergency-related laws are protected", d: "Another 44th Amendment change. A law must contain a recital that it relates to the emergency to get protection." },
    { t: "What happens afterwards", d: "When the emergency ends, Article 19 revives, and any law made under its shelter stops working as far as it conflicts with Article 19. Acts already done remain valid." }
  ],
  trap: "Article 358 is automatic. Article 359 needs a presidential order.\n\nAnd since 1978, Article 358 does not operate at all in an emergency proclaimed on the ground of armed rebellion. Both distinctions get tested."
},

"359": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 359 lets the President, during a national emergency, suspend the right to go to court to enforce the Fundamental Rights named in the order, except Articles 20 and 21.",
  why: "ADM Jabalpur, widely seen as the Supreme Court's worst decision, was decided under Article 359. Questions ask it as a question about rights during an emergency.",
  concepts: [
    { t: "What it does", d: "The President may by order suspend the right to move any court for the enforcement of specified Fundamental Rights, for the period of the emergency or a shorter period." },
    { t: "Article 359 suspends the remedy, not the right", d: "The point is the crucial difference from Article 358. The right continues to exist. You simply cannot go to court about it." },
    { t: "The suspension is not automatic", d: "A separate presidential order is required, and it must specify which rights are covered." },
    { t: "Articles 20 and 21 can never be suspended", d: "Added by the 44th Amendment, in direct response to what happened in 1975." },
    { t: "The order must be laid before Parliament", d: "Each House must be given the order as soon as possible after it is made." },
    { t: "ADM Jabalpur (1976)", d: "By 4 to 1 the Court held that during the Emergency, a person had no right to move any court even against unlawful detention or death in custody. Justice H.R. Khanna dissented and lost his chance at the Chief Justiceship." },
    { t: "ADM Jabalpur was overruled", d: "Puttaswamy (2017) expressly declared ADM Jabalpur wrong, forty-one years later." }
  ],
  trap: "Article 358 suspends the *right*. Article 359 suspends the *remedy*.\n\nUnder 359 the right survives, so a claim can be brought once the emergency ends. Papers rely on candidates treating the two as the same mechanism."
},

"360": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 360 lets the President declare a financial emergency when the financial stability or credit of India, or of any part of it, is threatened. Parliament must approve it within two months.",
  why: "A financial emergency has never been declared, which makes it tidy factual material. Article 360 also lacks a feature the other two emergencies have.",
  concepts: [
    { t: "The ground", d: "The President is satisfied that a situation has arisen whereby the financial stability or credit of India, or of any part of it, is threatened." },
    { t: "Approval", d: "Both Houses must approve within two months, by simple majority." },
    { t: "No maximum duration", d: "The lack of a maximum is the key difference. Once approved, it continues indefinitely until revoked. There is no six-month renewal cycle as under Articles 352 and 356." },
    { t: "What the Union can do", d: "Direct any State to observe canons of financial propriety, and give any other directions it considers necessary." },
    { t: "Salaries can be cut", d: "The Union may direct cuts in the salaries and allowances of any class of people serving a State or the Union. The cuts can include the judges of the Supreme Court and the High Courts." },
    { t: "State money Bills", d: "All money Bills and financial Bills passed by a State legislature may be required to be reserved for the President's consideration." },
    { t: "Never used", d: "India came close to one in 1991, during the balance-of-payments crisis, but none was declared." }
  ],
  seen: [
    "UPSC Mains 2018 — the proclamation of a financial emergency"
  ],
  trap: "A financial emergency needs no periodic renewal.\n\nArticles 352 and 356 both require reapproval every six months. Article 360 does not, which makes it in one respect the most open-ended of the three."
},

"361": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 361 says the President and the Governors are not answerable to any court for their official acts. No criminal case can be brought against them while they hold office.",
  why: "The immunity of the President and the Governors was asked in both 2025 and 2018. The immunity contrasts instructively with the immunity of legislators in Article 105.",
  concepts: [
    { t: "Not answerable to any court", d: "The President and the Governors are not answerable to any court for the exercise and performance of the powers and duties of their office." },
    { t: "No criminal proceedings at all", d: "No criminal proceedings whatsoever may be instituted or continued against them during their term of office. The bar is absolute while they hold office." },
    { t: "No arrest or imprisonment", d: "No process for arrest or imprisonment may issue from any court during their term." },
    { t: "Civil proceedings need notice", d: "Civil proceedings about their personal acts may be brought only after two months' written notice." },
    { t: "The immunity is personal, not institutional", d: "The office-holder cannot be sued, but their official decisions can be struck down. Bommai reviewed the material behind a Governor's report while the Governor remained personally immune." },
    { t: "The immunity ends with the term", d: "Once they leave office, the ordinary law applies to acts done before, during or after. The shield lasts for a time, not for ever." },
    { t: "The contrast with Article 105", d: "A legislator's immunity attaches to what is said or voted in the House and lasts forever for those words. A Governor's immunity attaches to the person and lasts only while in office." }
  ],
  seen: [
    "UPSC Pre 2025 — the Governor's immunity under Article 361 set against legislators' immunity under Article 105",
    "UPSC Pre 2018 — the Governor's criminal immunity and the protection of emoluments"
  ],
  trap: "The person is immune, but the decision is not.\n\nA Governor cannot be prosecuted or sued while in office, but every order they make can be challenged in court. Confusing personal immunity with immunity for official acts is the standard error."
},

"368": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "Article 368 lets Parliament amend the Constitution by a special majority in each House. Some changes also need the approval of at least half the State legislatures.",
  why: "Article 368 is the second most examined article after Article 21. The basic structure doctrine that grew out of it is a permanent Mains theme.",
  concepts: [
    { t: "Three ways to amend, not one", d: "Some provisions change by a simple majority outside Article 368. Most need a special majority. A few need a special majority plus ratification by the States." },
    { t: "Simple majority: outside Article 368", d: "Admitting or creating States, changing State boundaries or names, creating or abolishing a Legislative Council, citizenship, Scheduled Areas, and the Second Schedule. The Constitution does not count these changes as amendments at all." },
    { t: "Special majority", d: "A majority of the total membership of each House, *and* two thirds of the members present and voting in each House. Most amendments use this route." },
    { t: "Special majority plus State ratification", d: "The proviso to clause (2) lists them. The list covers the election of the President (Articles 54 and 55) and the reach of Union and State executive power (Articles 73 and 162). The list also covers High Courts for Union territories (Article 241), the GST Council (Article 279A), the Union judiciary (Chapter IV of Part V) and the High Courts (Chapter V of Part VI). Finally, the list covers the division of legislative powers (Chapter I of Part XI), any List in the Seventh Schedule, the representation of States in Parliament, and Article 368 itself. At least half the State legislatures must ratify, by simple majority. The rule means half of all the States, not half of those that respond." },
    { t: "Procedure", d: "A Bill may be introduced in either House. There is no joint sitting if they disagree. Each House must pass it separately. The President must assent, which became compulsory with the 24th Amendment." },
    { t: "Kesavananda Bharati (1973)", d: "By 7 to 6, a thirteen-judge bench held that Parliament can amend any part of the Constitution, including Fundamental Rights, but cannot destroy or damage its basic structure." },
    { t: "What is in the basic structure", d: "There is no closed list. Judgments have included supremacy of the Constitution, republican and democratic government, secularism, separation of powers, federalism, judicial review, free and fair elections, and the rule of law." },
    { t: "Minerva Mills (1980)", d: "The Court struck down clauses (4) and (5) of Article 368, inserted by the 42nd Amendment. The clauses had said there is no limit on Parliament's power to amend, and that no court can question an amendment." }
  ],
  seen: [
    "UPSC Pre 2025 — amendment requirements and which provisions need State ratification",
    "UPSC Pre 2024 — the three methods of amendment: addition, variation and repeal",
    "UPSC Pre 2020 — the Rajya Sabha's equal power in a constitutional amendment",
    "UPSC Pre 2013 — that either House may introduce an amendment Bill, and which changes need ratification",
    "UPSC Pre 2013 — that both Houses must pass it and there is no joint sitting",
    "UPSC Mains 2019 — Article 368 and the basic structure limit",
    "UPPCS Mains 2022 — the evolution and impact of the basic structure doctrine"
  ],
  trap: "Changes made by simple majority are not amendments under Article 368 at all.\n\nCreating a new State, abolishing a Legislative Council, or changing citizenship law all alter the Constitution's Schedules or effect, yet need only an ordinary law. The Constitution expressly says these are not amendments under Article 368. So India's Constitution is called partly rigid and partly flexible."
},

"370": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "Article 370 gave Jammu and Kashmir a special status, limiting Parliament's power to make laws for the State. The President declared it inoperative in 2019, and the Supreme Court upheld the step in 2023.",
  why: "The abrogation of 2019 and the judgment of 2023 that upheld it made Article 370 the most current constitutional question of the decade.",
  concepts: [
    { t: "What it did", d: "Article 370 gave Jammu and Kashmir a special status. Parliament could make laws for the State only on the matters in the Instrument of Accession, which were defence, foreign affairs and communications. Anything else needed the State government's agreement." },
    { t: "The heading mattered", d: "The article was headed \"Temporary provisions with respect to the State of Jammu and Kashmir\", and sat in Part XXI among temporary and transitional provisions." },
    { t: "How it was to end", d: "Clause (3) said the President could declare it inoperative, but only on the recommendation of the State's Constituent Assembly. The Constituent Assembly dissolved in 1957 without making such a recommendation." },
    { t: "How that obstacle was got around in 2019", d: "Constitutional Order 272 used Article 367, the interpretation article, to read \"Constituent Assembly\" as \"Legislative Assembly\". The State was then under President's rule, so Parliament acted in place of the Assembly." },
    { t: "What followed", d: "The Jammu and Kashmir Reorganisation Act, 2019 split the State into two Union territories. Jammu and Kashmir has a legislature, and Ladakh does not." },
    { t: "Article 35A went too", d: "Article 35A had been added by a presidential order of 1954. The article let the State define permanent residents and give them special rights in property and employment." },
    { t: "In Re Article 370 (2023)", d: "A five-judge bench unanimously upheld the abrogation. The bench held that Jammu and Kashmir kept no sovereignty after accession, that Article 370 was always a temporary provision, and that the President could act after the Constituent Assembly ceased to exist." },
    { t: "One direction the Court gave", d: "Statehood must be restored at the earliest, and elections to the Assembly held. Elections were held in 2024." }
  ],
  trap: "Article 370 has not been deleted from the Constitution.\n\nThe article is still printed in the text, made inoperative by a presidential order under clause (3). So the litigation was about the *procedure* used, not about whether the article could ever be ended."
},

"371A": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 371A says no Act of Parliament on Naga religious or social practices, customary law, justice under customary law, or ownership of land applies to Nagaland unless its Assembly agrees.",
  why: "Nagaland's provision is the strongest of the special provisions, and in some ways stronger than Article 370 ever was. Questions ask it as a comparison.",
  concepts: [
    { t: "What it protects", d: "No Act of Parliament applies to Nagaland on four subjects unless the Nagaland Assembly resolves that it should. The four are the religious or social practices of the Nagas, Naga customary law and procedure, civil and criminal justice under Naga customary law, and the ownership and transfer of land and its resources." },
    { t: "When it was added", d: "By the 13th Amendment, 1962, as part of the settlement creating the State of Nagaland." },
    { t: "The Governor's special responsibility", d: "The Governor has special responsibility for law and order in Nagaland so long as internal disturbances continue, and exercises individual judgment on it after consulting the Council of Ministers." },
    { t: "Mizoram has an almost identical provision", d: "Article 371G, added by the 53rd Amendment in 1986, protects the same four subjects for Mizoram." },
    { t: "Why it is stronger than Article 370", d: "Article 371A is not headed \"temporary\", and no presidential order can make it inoperative. Removing it would need a constitutional amendment." }
  ],
  seen: [
    "UPSC Pre 2025 — the constitutional history of Nagaland"
  ],
  trap: "Articles 371 to 371J are *special* provisions. Only Article 370 was *temporary*.\n\nThe difference in heading is not cosmetic. The heading explains why a presidential order could end Article 370 but cannot end Article 371A."
},

"371J": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 371J lets the President give the Governor of Karnataka special responsibility for the Kalyana-Karnataka region: a development board, a fair share of funds, and reserved seats in education and jobs for local people.",
  why: "The Hyderabad-Karnataka provision is the newest of the special provisions. The article packages local reservation in jobs and education with a development board.",
  concepts: [
    { t: "What it covers", d: "The article covers the Kalyana-Karnataka region, formerly called Hyderabad-Karnataka. The region is made up of the districts of northern Karnataka that were part of the princely state of Hyderabad." },
    { t: "When it was added", d: "By the 98th Amendment, 2012." },
    { t: "What it provides", d: "The region gets a separate development board, which reports every year to the State legislature, and a fair share of State funds for development. People from the region also get reservation in education and in State government jobs." },
    { t: "What is distinctive about it", d: "Article 371J is the most recent of the Article 371 provisions, and clause (2) spells the reservation out unusually plainly. A share of seats in the region's educational and vocational institutions goes to students who belong to it \"by birth or by domicile\". A share of identified posts under the State Government there goes to them too. Do not call it the only such provision: Article 371D does the same for Andhra Pradesh and Telangana, covering public employment *and* education. What 371J adds is that it packages the reservation with a development board and an equitable funding duty." },
    { t: "Comparable provisions", d: "Article 371 provides development boards for Vidarbha, Marathwada and parts of Gujarat. Article 371D gives Andhra Pradesh and Telangana local-cadre reservations in public employment, which is the closest parallel." }
  ],
  trap: "Article 371 provisions cannot be abrogated by presidential order.\n\nThey sit in Part XXI under the heading of temporary, transitional *and special* provisions. Only Article 370 was in the temporary category. The 371 series is special, and permanent unless amended."
},

schV: {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "The Fifth Schedule governs the Scheduled Areas and Scheduled Tribes in States other than Assam, Meghalaya, Tripura and Mizoram. The Governor can keep laws from applying there, and a Tribes Advisory Council advises the State.",
  why: "Papers asked about Scheduled Areas in 2025, 2023, 2022, 2019 and 2013. Few topics in the polity paper come back so often, because tribal rights over land and minerals are always contested.",
  concepts: [
    { t: "Where it applies", d: "Scheduled Areas and Scheduled Tribes in every State except Assam, Meghalaya, Tripura and Mizoram, which are covered by the Sixth Schedule. Ten States have Scheduled Areas." },
    { t: "Who declares an area Scheduled", d: "The President, by order, after consulting the Governor. The President may also alter the boundaries or rescind the declaration." },
    { t: "The Governor's report", d: "The Governor must report annually to the President on the administration of Scheduled Areas in the State, and whenever the President requires." },
    { t: "The Governor's power over laws", d: "The Governor may direct that any Act of Parliament or of the State legislature shall not apply to a Scheduled Area, or shall apply with modifications. The power is real and unusual." },
    { t: "Regulations on land and money-lending", d: "The Governor may make regulations prohibiting or restricting the transfer of land by or among members of Scheduled Tribes, and regulating money-lending to them. The regulations need the President's assent." },
    { t: "Tribes Advisory Council", d: "Every State with Scheduled Areas must have one, of not more than twenty members, three quarters of whom are representatives of Scheduled Tribes in the Legislative Assembly. Its role is purely advisory." },
    { t: "The executive power", d: "The executive power of the Union extends to giving directions to a State on the administration of Scheduled Areas." },
    { t: "PESA, 1996", d: "PESA extends Part IX to Scheduled Areas with changes, giving the Gram Sabha powers over land acquisition, minor forest produce, minor water bodies and minor minerals." }
  ],
  seen: [
    "UPSC Pre 2025 — Scheduled Areas administration and executive power",
    "UPSC Pre 2023 — Fifth Schedule areas and presidential notification",
    "UPSC Pre 2022 — restrictions on tribal land transfer",
    "UPSC Pre 2019 — mineral extraction in Fifth Schedule areas",
    "UPSC Pre 2013 — the objectives of PESA"
  ],
  trap: "The Tribes Advisory Council only advises, and the Governor acts on ministerial advice.\n\nSo the Fifth Schedule's apparent protections run through the ordinary State government. Critics make the point often, and it is the difference between the Fifth Schedule and the Sixth."
},

schVI: {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "The Sixth Schedule lets the tribal areas of Assam, Meghalaya, Tripura and Mizoram govern themselves through autonomous district councils, which can make laws, run courts and collect some taxes.",
  why: "Autonomous District Councils are the strongest form of tribal self-government in India. Their powers differ from anything in the Fifth Schedule, and the comparison is what questions test.",
  concepts: [
    { t: "Where it applies", d: "The tribal areas of Assam, Meghalaya, Tripura and Mizoram. There are ten autonomous districts across the four States." },
    { t: "Autonomous District Councils", d: "Each district has a Council of up to thirty members: twenty-six elected for five years by adult suffrage, and four nominated by the Governor to hold office at the Governor's pleasure." },
    { t: "They make laws", d: "On land allotment and use, forests other than reserved forests, canal water for agriculture, shifting cultivation, village administration, inheritance, marriage and divorce, and social customs. The laws need the Governor's assent." },
    { t: "They run courts", d: "Village councils and courts may try suits and cases between members of Scheduled Tribes. The High Court's jurisdiction over these is as the Governor specifies." },
    { t: "They raise money", d: "They may levy land revenue and certain taxes, and collect royalties from licences for mineral extraction." },
    { t: "The Governor's power over laws", d: "The Governor may direct that any Act of Parliament or of the State legislature shall not apply to an autonomous district, or shall apply with modifications." },
    { t: "Part IX does not apply", d: "Article 243M excludes these areas from the panchayat system, because the Councils already perform that role with far greater powers." }
  ],
  seen: [
    "UPSC Pre 2015 — the purpose of the Fifth and Sixth Schedules"
  ],
  trap: "Sixth Schedule Councils legislate and adjudicate. Fifth Schedule councils only advise.\n\nThe contrast is the sharpest in tribal governance, and the most useful fact to hold from both Schedules."
},

schVII: {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "The Seventh Schedule holds the three Lists of subjects: the Union List for Parliament, the State List for the States, and the Concurrent List for both.",
  why: "The three Lists appear in some form in almost every paper, usually as a matching question about which subject sits where. The Seventh is the most reliably tested Schedule.",
  concepts: [
    { t: "The three Lists", d: "List I the Union List, List II the State List, List III the Concurrent List. The original entry counts were 97, 66 and 47. Sources give different current figures, the Union List as 98 or 100 and the State List as 59 or 61, because they differ on whether omitted entries are still counted. The direction of travel is the examinable point: the Concurrent List grew, the State List shrank." },
    { t: "Union List: the big ones", d: "Defence, armed forces, atomic energy, foreign affairs, railways, shipping, airways, posts, currency, banking, insurance, inter-State trade and commerce, census, and the residuary entry 97." },
    { t: "State List: the big ones", d: "Public order, police, prisons, local government, public health and sanitation, agriculture, land, fisheries, betting and gambling, State taxes on agricultural income, and alcohol." },
    { t: "Concurrent List: the big ones", d: "Criminal law and procedure, marriage and divorce, transfer of property other than agricultural land, bankruptcy, trusts, education, forests, protection of wild animals and birds, electricity, factories, and economic and social planning." },
    { t: "The five subjects the 42nd Amendment moved", d: "Education, forests, weights and measures, protection of wild animals and birds, and administration of justice all moved from the State List to the Concurrent List in 1976." },
    { t: "How conflicts are resolved", d: "Article 254: on a Concurrent subject the Union law prevails, unless the State law received the President's assent, and even then Parliament can override it later." },
    { t: "GST sits outside all three", d: "Article 246A is a stand-alone power. So the 101st Amendment was needed." }
  ],
  seen: [
    "UPSC Pre 2025 — minor minerals and State powers over natural resources",
    "UPSC Pre 2024 — the distribution of subjects across the Lists and inter-State commerce",
    "UPSC Pre 2023 — prison administration and which List it falls in"
  ],
  trap: "Education and forests are Concurrent, not State. Police, public health and agriculture are still State.\n\nQuestions habitually pair one subject that was moved in 1976 with one that was not. Knowing the five that moved settles most of them."
},

schVIII: {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "The Eighth Schedule lists the 22 languages of India recognised by the Constitution, from Assamese to Urdu.",
  why: "The language list is factual and precise. Four separate amendments made additions, and questions ask which language came in when.",
  concepts: [
    { t: "How many", d: "Twenty-two languages today. There were fourteen when the Constitution came into force." },
    { t: "Sindhi, 1967", d: "Added by the 21st Amendment, bringing the total to fifteen." },
    { t: "Konkani, Manipuri and Nepali, 1992", d: "Added by the 71st Amendment, bringing the total to eighteen." },
    { t: "Bodo, Dogri, Maithili and Santhali, 2003", d: "Added by the 92nd Amendment, bringing the total to twenty-two." },
    { t: "What inclusion actually does", d: "Members of the Official Language Commission under Article 344 are drawn from these languages. Article 351 requires Hindi to draw on them for vocabulary. And candidates may use them in certain public examinations." },
    { t: "English is not in it", d: "English is an additional official language of the Union under the Official Languages Act, 1963, but it is not an Eighth Schedule language." },
    { t: "Classical language status is separate", d: "A government decision confers the status, not the Schedule. Tamil, Sanskrit, Telugu, Kannada, Malayalam, Odia and others hold it." }
  ],
  seen: [
    "UPSC Pre 2024 — the 71st Amendment and the languages it added to the Eighth Schedule"
  ],
  trap: "Three separate categories get blurred: official language of the Union, Eighth Schedule languages, and classical languages.\n\nEnglish is official but not in the Schedule. Sanskrit is in the Schedule and also classical. Being in the Eighth Schedule does not make a language official anywhere."
},

schIX: {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "The Ninth Schedule lists the laws that Article 31B protects from challenge for violating Fundamental Rights. Laws added after 24 April 1973 can still be tested against the basic structure.",
  why: "Papers asked the Ninth Schedule in both 2019 and 2018. The Schedule has a clean arc: created to protect land reform, stretched far beyond it, then partly reopened by the courts.",
  concepts: [
    { t: "What it does", d: "Acts placed in it are protected by Article 31B from being struck down for violating any Fundamental Right." },
    { t: "How it started", d: "The First Amendment, 1951, inserted it with thirteen laws, almost all of them State land-reform legislation that courts had struck down as violating the right to property." },
    { t: "How it grew", d: "There are now more than 280 entries, covering reservation, mining, trade regulation and much else. Most have nothing to do with land." },
    { t: "The protection is retrospective", d: "A law already declared void by a court revives once placed in the Schedule. The protection is wider than the one in Article 31A." },
    { t: "How a law is added", d: "Only by a constitutional amendment, since it means adding to a Schedule of the Constitution." },
    { t: "Waman Rao (1981)", d: "The Court drew the line at 24 April 1973, the date of the Kesavananda judgment. Laws added before the date were immune. Laws added after it could be tested." },
    { t: "I.R. Coelho (2007)", d: "A nine-judge bench confirmed and elaborated this. Any law added after 24 April 1973 can be tested against the basic structure, and if it damages the essence of a Fundamental Right it will be struck down despite being in the Schedule." }
  ],
  seen: [
    "UPSC Pre 2019 — the Ninth Schedule and its origin in the Nehru years",
    "UPSC Pre 2018 — Ninth Schedule validity, Parliament's power to add laws, and judicial review"
  ],
  trap: "Coelho did not empty the Ninth Schedule.\n\nPre-1973 entries keep absolute immunity. Later entries can be reviewed, but only against the basic structure, and not against every Fundamental Right. So the Schedule still works, just not as an unlimited shield."
},

schX: {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "The Tenth Schedule disqualifies a member of a legislature who voluntarily gives up party membership, or votes against the party's instruction without permission. The Speaker or Chairman decides, and a merger backed by two-thirds of the party is exempt.",
  why: "Anti-defection is one of the most reliably examined topics in the whole polity paper. The Speaker's role in deciding disqualification is a permanent Mains controversy.",
  concepts: [
    { t: "When it was added", d: "The 52nd Amendment, 1985, in response to the era of frequent floor-crossing. The 91st Amendment, 2003, tightened it." },
    { t: "Ground one: giving up membership", d: "A member of a political party is disqualified if they voluntarily give up membership of that party. Courts have read the ground widely. The ground needs no formal resignation, and conduct alone can be enough." },
    { t: "Ground two: defying the whip", d: "Voting or abstaining contrary to the party's direction, without prior permission, and without the party condoning it within fifteen days." },
    { t: "Independents and nominated members", d: "An independent member who joins any political party after election is disqualified. A nominated member has six months from taking their seat to join a party, and is disqualified if they join one later." },
    { t: "The split exception was deleted", d: "Originally a split by one third of a legislature party was protected. The 91st Amendment removed it, because it had become the standard route to engineered defections. The Act is titled 2003 but took effect on 1 January 2004, which matters for anything that happened in between." },
    { t: "The merger exception survives", d: "If two thirds of the members of a legislature party agree to merge with another party, they are not disqualified." },
    { t: "Who decides", d: "The Speaker or Chairman of the House. Their decision is final under the Schedule, and no time limit is prescribed for making it." },
    { t: "Kihoto Hollohan (1992)", d: "The Court upheld the Schedule but struck down the clause barring judicial review. The Speaker acts as a tribunal, and the decision can be reviewed, though not before it is made." },
    { t: "Keisham Meghachandra (2020)", d: "The Court said Speakers should decide within three months, and suggested Parliament consider transferring the power to an independent tribunal." }
  ],
  seen: [
    "UPSC Pre 2025 — disqualification under the Tenth Schedule and Article 102",
    "UPSC Pre 2022 — the anti-defection law and the six-month window for a nominated member",
    "UPSC Pre 2014 — where the anti-defection provision sits in the Constitution",
    "UPSC Mains 2013 — the anti-defection law and the diminished role of the individual MP"
  ],
  trap: "The exception for a split by one-third is gone. The 91st Amendment, of 2003, removed it with effect from 1 January 2004. Only the two-thirds merger exception survives.\n\nAnd \"voluntarily giving up membership\" is far wider than resigning. A member who publicly campaigns against their own party can be caught by it without ever quitting."
},

schXI: {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "The Eleventh Schedule lists 29 subjects that a State may hand over to its panchayats, such as agriculture, drinking water, rural housing, primary education and health.",
  why: "Questions ask the 29 panchayat subjects both by count and by content, and almost always pair them with the Twelfth Schedule.",
  concepts: [
    { t: "What it is", d: "A list of 29 subjects that a State may devolve to panchayats under Article 243G." },
    { t: "All twenty-nine, in the Schedule's own order", d: "Farming and land come first: agriculture, land improvement and land reform, minor irrigation and watershed development, animal husbandry with dairying and poultry, fisheries, social and farm forestry, and minor forest produce. Then come small-scale industries, khadi with village and cottage industries, rural housing, drinking water, fuel and fodder, and roads with culverts, bridges, ferries and waterways. Next are rural electrification, non-conventional energy, poverty alleviation, education including primary and secondary schools, technical training and vocational education, adult and non-formal education, and libraries. The last nine are cultural activities, markets and fairs, health and sanitation, family welfare, women and child development, social welfare, welfare of the weaker sections, the public distribution system, and maintenance of community assets." },
    { t: "When it was added", d: "By the 73rd Amendment, 1992, along with Part IX." },
    { t: "The list is illustrative, not mandatory", d: "Listing a subject creates no obligation on the State to transfer it. Each transfer needs a State law." },
    { t: "Why devolution is uneven", d: "States differ enormously in how many of the 29 they have actually devolved, and in whether they transferred the funds and staff to go with the function." }
  ],
  trap: "The Eleventh Schedule devolves nothing by itself.\n\nThe Schedule is a menu of what *may* be transferred. Confusing it with a list of powers panchayats actually hold is the error, and it is what makes the Mains question about weak local government answerable."
},

schXII: {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "The Twelfth Schedule lists 18 subjects that a State may hand over to its municipalities, such as town planning, water supply, public health, fire services and slum improvement.",
  why: "The 18 municipal subjects are the urban counterpart of the Eleventh Schedule. Options constantly swap the two counts, and that swap is the whole point of the question.",
  concepts: [
    { t: "What it is", d: "A list of 18 subjects that a State may devolve to municipalities under Article 243W." },
    { t: "All eighteen, in the Schedule's own order", d: "Planning comes first: urban and town planning, rules on land use and buildings, and planning for economic and social development. Then come roads and bridges, water supply, public health with sanitation and solid waste management, fire services, and urban forestry with protection of the environment. Next are safeguarding the weaker sections, slum improvement, urban poverty alleviation, amenities such as parks and playgrounds, and promotion of cultural, educational and aesthetic aspects. The last five are burial and cremation grounds, cattle pounds and prevention of cruelty to animals, registration of births and deaths, street lighting with parking and bus stops, and regulation of slaughter houses and tanneries." },
    { t: "When it was added", d: "By the 74th Amendment, 1992, along with Part IXA." },
    { t: "Same permissive wording", d: "Article 243W says the State \"may\" endow municipalities with these powers. Devolution depends on a State law." },
    { t: "Why cities remain weak", d: "Much of what a city needs, such as water, transport and housing, is often run by State bodies like development authorities and water boards. The elected municipal body has no control over them." }
  ],
  seen: [
    "UPSC Mains 2023 — States' reluctance to empower urban local bodies functionally and financially"
  ],
  trap: "Twenty-nine for panchayats, eighteen for municipalities.\n\nSwapping the two numbers is the single commonest error in local-government questions, and options are written specifically to catch it."
}

});
