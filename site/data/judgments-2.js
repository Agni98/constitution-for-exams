/* Landmark judgments, rewritten in full. Batch 2: Articles 12 and 13.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. Each entry was checked against the full text
   of the judgment on Indian Kanoon: the date, the bench, the split, who wrote
   the leading opinion, the facts and the operative holding. The rules of
   severability in R.M.D. Chamarbaugwalla are paraphrased from the judgment's
   own list. Two corrections to the short summaries came out of the check:
   Ajay Hasia was decided on 13 November 1980, not in 1981, and Sankari Prasad
   is marked as partly overtaken rather than overruled, because its core
   holding, that an amendment is not "law" under Article 13, was restored by
   the 24th Amendment and upheld in Kesavananda Bharati.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'ajay-hasia-1981': {
  name: 'Ajay Hasia v. Khalid Mujib Sehravardi',
  full: 'Ajay Hasia and Others v. Khalid Mujib Sehravardi and Others',
  decided: '13 November 1980',
  year: 1980,
  citation: '(1981) 1 SCC 722, AIR 1981 SC 487',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 12', 'Article 14', 'Arbitrariness'],
  judges: 'Y.V. Chandrachud CJI, P.N. Bhagwati, V.R. Krishna Iyer, S. Murtaza Fazal Ali and A.D. Koshal',
  summary: 'A society that is an instrumentality or agency of the Government is "the State" under Article 12. Giving one-third of the admission marks to a short interview was arbitrary.',
  question: [
    'Is a registered society that runs a government-funded engineering college "the State" under Article 12?',
    'Was an admission process that gave one-third of the marks to an oral interview arbitrary under Article 14?'
  ],
  facts: [
    'The Regional Engineering College, Srinagar was run by a society registered under the Jammu and Kashmir Registration of Societies Act, 1898.',
    'The Central Government and the Jammu and Kashmir Government paid for the college. They appointed members of its governing body, and their approval was needed for its rules and its spending.',
    'For admission in 1979-80, candidates took a written test of 100 marks and an oral interview of 50 marks.',
    'Candidates who were refused said each interview lasted only two or three minutes, and the questions were about parentage and residence. Students with lower marks in the qualifying examination got in through high interview marks.',
    'They filed writ petitions under Article 32. The society argued that it was not "the State", so no writ could be issued against it.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Justice P.N. Bhagwati', points: [
      'The society is "the State" under Article 12. It is an instrumentality or agency of the Central and State Governments.',
      'What matters is not how a body was created but whether it is an instrumentality of the Government. A company or a society can be "the State" as much as a statutory corporation.',
      'Article 14 strikes at arbitrariness. An arbitrary action denies equality.',
      'Giving one-third of the total marks to an oral interview was plainly arbitrary and unreasonable.',
      'The admissions of 1979-80 were not set aside, because 18 months had passed and the students already admitted would suffer.'
    ] }
  ],
  principles: [
    'Six tests help decide whether a body is an instrumentality of the State: Government share capital, Government money meeting almost all its expenses, a monopoly given or protected by the State, deep and pervasive State control, functions of public importance close to those of government, and a government department transferred to the body.',
    'The tests are indicators. They are not a checklist that must be fully met.',
    'Article 14 is not only about classification. Any arbitrary State action violates it.',
    'The Court said that marks for an oral interview should not be more than 15 per cent of the total.'
  ],
  legacy: [
    'For twenty years the Ajay Hasia tests decided which bodies could be sued for violating fundamental rights.',
    'In Pradeep Kumar Biswas (2002), seven judges said these tests are not a rigid set of principles. The question is whether the Government dominates the body financially, functionally and administratively.'
  ],
  source: 'https://indiankanoon.org/doc/1186368/'
},

'pradeep-kumar-biswas-2002': {
  name: 'Pradeep Kumar Biswas v. Indian Institute of Chemical Biology',
  full: 'Pradeep Kumar Biswas and Others v. Indian Institute of Chemical Biology and Others',
  decided: '16 April 2002',
  citation: '(2002) 5 SCC 111',
  bench: 7,
  result: 'Majority 5:2',
  tags: ['Article 12', 'Other authorities'],
  judges: 'S.P. Bharucha CJI, S.S.M. Quadri, R.C. Lahoti, N. Santosh Hegde, Doraiswamy Raju, Ruma Pal and Arijit Pasayat',
  summary: 'The Council of Scientific and Industrial Research is "the State" under Article 12. A body is "the State" if the Government dominates it financially, functionally and administratively.',
  question: [
    'Is the Council of Scientific and Industrial Research (CSIR), a registered society, "the State" under Article 12?',
    'Was Sabhajit Tewary (1975), which held that CSIR is not "the State", correctly decided?'
  ],
  facts: [
    'Pradeep Kumar Biswas and others worked at the Indian Institute of Chemical Biology, a unit of CSIR. They challenged the end of their services in the Calcutta High Court.',
    'The High Court dismissed their writ petition as not maintainable. It followed Sabhajit Tewary (1975), where five judges had held that CSIR is not "the State".',
    'CSIR was set up by the Government of India in 1942 and registered as a society under the Societies Registration Act, 1860.',
    'Sabhajit Tewary had been decided by five judges, so seven judges heard the appeal.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (5 judges), judgment by Justice Ruma Pal', points: [
      'CSIR is "the State" under Article 12.',
      'The question is whether, on all the facts, the body is financially, functionally and administratively dominated by or under the control of the Government.',
      'The control must be particular to that body and must be pervasive. Ordinary regulatory control is not enough.',
      'The Ajay Hasia tests are not a rigid set of principles.',
      'Sabhajit Tewary is overruled.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice R.C. Lahoti, for himself and Justice Doraiswamy Raju)', points: [
      'Sabhajit Tewary should not be overruled.',
      'An instrumentality of the Government is not the same as an "other authority" under Article 12. A registered society such as CSIR is not an authority under Article 12.'
    ] }
  ],
  principles: [
    'A body is "the State" if the Government dominates it in money, functions and administration.',
    'The control must be special to that body. General regulation by law does not make a body "the State".',
    'Whether a body was set up by a statute, as a company or as a society does not settle the question by itself.'
  ],
  legacy: [
    'This is now the leading test for deciding whether a body is "the State" under Article 12.',
    'In Zee Telefilms (2005), five judges applied it and held that the BCCI is not "the State".'
  ],
  source: 'https://indiankanoon.org/doc/471272/'
},

'zee-telefilms-2005': {
  name: 'Zee Telefilms Ltd. v. Union of India',
  full: 'Zee Telefilms Ltd. and Another v. Union of India and Others',
  decided: '2 February 2005',
  citation: '(2005) 4 SCC 649',
  bench: 5,
  result: 'Majority 3:2',
  tags: ['Article 12', 'BCCI', 'Article 226'],
  judges: 'N. Santosh Hegde, S.N. Variava, B.P. Singh, H.K. Sema and S.B. Sinha',
  summary: 'The Board of Control for Cricket in India is not "the State" under Article 12, so a writ petition under Article 32 does not lie against it. Its public duties can still be challenged under Article 226.',
  question: [
    'Is the Board of Control for Cricket in India (BCCI) "the State" under Article 12, so that a writ petition under Article 32 can be filed against it?'
  ],
  facts: [
    'In August 2004 the BCCI invited tenders for the television rights to cricket matches for four years.',
    'Zee Telefilms made a bid. On 21 September 2004 the BCCI cancelled the whole tender process.',
    'Zee filed a writ petition under Article 32. It said the cancellation was arbitrary and violated Article 14.',
    'The BCCI argued that it is a private registered society and not "the State". The Court heard this as a preliminary question.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (3 judges), judgment by Justice N. Santosh Hegde', points: [
      'The BCCI is not "the State" under Article 12.',
      'It was not created by a statute. The Government holds none of its share capital and does not meet its expenses.',
      'Its monopoly over cricket is not given or protected by the State. Any control the Government has over it is only regulatory.',
      'So the writ petition under Article 32 is not maintainable.',
      'Because the BCCI performs public duties, a person can still go to a High Court under Article 226, which is wider than Article 32.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice S.B. Sinha, with Justice S.N. Variava)', points: [
      'The BCCI is "the State". It controls cricket in India as a monopoly and chooses the team that represents the country.',
      'Its functions are public functions, and the Government recognises it as the national body for cricket.'
    ] }
  ],
  principles: [
    'A body is not "the State" only because it has a monopoly or does public work.',
    'A body that is not "the State" can still be answerable under Article 226 when it performs a public duty.'
  ],
  legacy: [
    'This is why sports bodies can be taken to the High Courts under Article 226 but not straight to the Supreme Court under Article 32.',
    'In BCCI v. Cricket Association of Bihar (2015), the Supreme Court held again that the BCCI performs public functions and can be taken to court under Article 226. That case led to the Lodha Committee reforms of the BCCI.'
  ],
  source: 'https://indiankanoon.org/doc/404603/'
},

'shankari-prasad-1951': {
  name: 'Sri Sankari Prasad Singh Deo v. Union of India',
  full: 'Sri Sankari Prasad Singh Deo v. Union of India and State of Bihar',
  aka: 'The First Amendment case',
  decided: '5 October 1951',
  citation: 'AIR 1951 SC 458, 1952 SCR 89',
  bench: 5,
  result: 'Unanimous, 5:0',
  status: 'partly',
  tags: ['Amending power', 'Article 13', 'Article 368'],
  judges: 'H.J. Kania CJI, M. Patanjali Sastri, B.K. Mukherjea, S.R. Das and N. Chandrasekhara Aiyar',
  summary: 'The First Amendment was valid. A constitutional amendment made under Article 368 is not "law" under Article 13(2), so it can take away or abridge fundamental rights.',
  question: [
    'Is a constitutional amendment "law" under Article 13(2), so that it is void if it takes away or abridges fundamental rights?',
    'Was the Constitution (First Amendment) Act, 1951 validly made?'
  ],
  facts: [
    'After independence, States passed laws to abolish zamindari. The Patna High Court struck down the Bihar law for violating fundamental rights.',
    'Parliament passed the Constitution (First Amendment) Act, 1951. It inserted Articles 31A and 31B and the Ninth Schedule to protect land reform laws.',
    'Zamindars filed petitions under Article 32 to challenge the Amendment.',
    'They argued that it violated Article 13(2), that half the States should have ratified it, and that the Provisional Parliament, which had only one House, could not amend the Constitution.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Justice M. Patanjali Sastri', points: [
      '"Law" in Article 13(2) means rules made in exercise of ordinary legislative power. It does not include amendments to the Constitution made in exercise of constituent power.',
      'So Article 13(2) does not stop an amendment under Article 368 from abridging fundamental rights.',
      'Under Article 379, the Provisional Parliament had all the powers of Parliament, including the power to amend.',
      'Articles 31A and 31B did not change the powers of the High Courts or the Supreme Court. So ratification by the States was not needed.',
      'The petitions were dismissed.'
    ] }
  ],
  principles: [
    'Ordinary law and constitutional amendments are different. Article 13(2) controls only ordinary law.',
    'In 1951 the Court held that Parliament\'s power to amend under Article 368 extends to fundamental rights.'
  ],
  legacy: [
    'Sajjan Singh (1964) followed this view.',
    'In Golak Nath (1967), eleven judges overruled it by 6:5 and held that an amendment is "law" under Article 13.',
    'The 24th Amendment (1971) added Article 13(4) and Article 368(3). They say that Article 13 does not apply to amendments made under Article 368.',
    'In Kesavananda Bharati (1973), the Court upheld the 24th Amendment. Parliament can amend any part of the Constitution, but it cannot destroy its basic structure.'
  ],
  source: 'https://indiankanoon.org/doc/1706770/'
},

'golak-nath-1967': {
  name: 'I.C. Golak Nath v. State of Punjab',
  full: 'I.C. Golak Nath and Others v. State of Punjab and Another',
  decided: '27 February 1967',
  citation: 'AIR 1967 SC 1643, (1967) 2 SCR 762',
  bench: 11,
  result: 'Majority 6:5',
  tags: ['Amending power', 'Article 13', 'Prospective overruling'],
  judges: 'K. Subba Rao CJI, K.N. Wanchoo, M. Hidayatullah, J.C. Shah, S.M. Sikri, R.S. Bachawat, V. Ramaswami, J.M. Shelat, V. Bhargava, G.K. Mitter and C.A. Vaidialingam',
  summary: 'By 6:5, Parliament cannot amend the Constitution to take away or abridge fundamental rights. The ruling applied only to future amendments.',
  question: [
    'Can Parliament use Article 368 to take away or abridge the fundamental rights in Part III?',
    'Is a constitutional amendment "law" under Article 13(2)?',
    'Were Sankari Prasad (1951) and Sajjan Singh (1964) correctly decided?'
  ],
  facts: [
    'The family of Henry Golak Nath owned farm land in Punjab. Under the Punjab Security of Land Tenures Act, 1953, 418 standard acres of it were declared surplus.',
    'Other petitioners challenged the Mysore Land Reforms Act.',
    'Both Acts had been placed in the Ninth Schedule by the Constitution (Seventeenth Amendment) Act, 1964. That protected them from challenge on the ground of fundamental rights.',
    'The petitioners challenged the Seventeenth Amendment itself. Earlier benches had upheld Parliament\'s power to amend fundamental rights, so eleven judges heard the case.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (6 judges): Chief Justice Subba Rao for five judges, and Justice Hidayatullah separately', points: [
      'A constitutional amendment is "law" under Article 13(2). So an amendment that takes away or abridges fundamental rights is void.',
      'From the date of this judgment, Parliament has no power to amend Part III to take away or abridge fundamental rights.',
      'Chief Justice Subba Rao\'s opinion said Article 368 only lays down the procedure for amendment. The power itself comes from Parliament\'s legislative powers.',
      'His opinion applied the doctrine of prospective overruling. Earlier amendments, including the First, Fourth and Seventeenth, remained valid.',
      'Sankari Prasad and Sajjan Singh were overruled. Because the Seventeenth Amendment stood, the land laws stayed protected and the petitions failed.'
    ] },
    { kind: 'dissent', label: 'Dissent (5 judges): Justice Wanchoo for three judges, and Justices Bachawat and Ramaswami separately', points: [
      'Article 368 gives Parliament both the power and the procedure to amend any part of the Constitution, including Part III.',
      'An amendment is not "law" under Article 13(2).',
      'Sankari Prasad and Sajjan Singh were correctly decided.'
    ] }
  ],
  principles: [
    'In this view, fundamental rights could not be abridged even by a constitutional amendment.',
    'The doctrine of prospective overruling was used for the first time in India. A new rule applies only to the future, so that settled laws and decisions are not upset.'
  ],
  legacy: [
    'Parliament responded with the 24th Amendment (1971). It added Article 13(4) and Article 368(3), which say that Article 13 does not apply to amendments.',
    'In Kesavananda Bharati (1973), thirteen judges overruled Golak Nath. They held that Parliament can amend fundamental rights, but it cannot destroy the basic structure of the Constitution.'
  ],
  source: 'https://indiankanoon.org/doc/120358/'
},

'keshavan-madhava-menon-1951': {
  name: 'Keshavan Madhava Menon v. State of Bombay',
  decided: '22 January 1951',
  citation: 'AIR 1951 SC 128, 1951 SCR 228',
  bench: 7,
  result: 'Majority 5:2',
  tags: ['Article 13(1)', 'Pre-Constitution laws'],
  judges: 'H.J. Kania CJI, S. Fazl Ali, M. Patanjali Sastri, M.C. Mahajan, B.K. Mukherjea, S.R. Das and N. Chandrasekhara Aiyar',
  summary: 'Article 13(1) is not retrospective. A prosecution begun before 26 January 1950, for an act done before that date, can continue even though the law is inconsistent with a fundamental right.',
  question: [
    'Is Article 13(1) retrospective?',
    'Can a prosecution begun before the Constitution came into force continue after 26 January 1950, if the law behind it is inconsistent with a fundamental right?'
  ],
  facts: [
    'Keshavan Madhava Menon was the Secretary of the People\'s Publishing House, Bombay. In September 1949 he published a pamphlet without the authority that the Indian Press (Emergency Powers) Act, 1931 required.',
    'He was arrested on 9 December 1949. He was prosecuted in the Court of the Chief Presidency Magistrate, Bombay.',
    'The Constitution came into force on 26 January 1950 while the case was pending.',
    'He argued that the 1931 Act violated the freedom of speech in Article 19(1)(a). So it was void under Article 13(1), and the prosecution could not go on.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (5 judges), leading opinion by Justice S.R. Das', points: [
      'Article 13(1) is not retrospective.',
      'An existing law that is inconsistent with a fundamental right is not void from the start. It becomes ineffective only for the exercise of fundamental rights on and after 26 January 1950.',
      'An act done before 26 January 1950 against a law that was valid at the time can still be prosecuted and punished under that law.',
      'The appeal was dismissed, and the prosecution could continue.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice S. Fazl Ali, with Justice B.K. Mukherjea agreeing)', points: [
      'A law that has become void cannot be used to frame a charge or to convict a person after the Constitution came into force, even for an earlier act.'
    ] }
  ],
  principles: [
    'Fundamental rights operate from 26 January 1950. They do not reopen past acts.',
    'A pre-Constitution law that is inconsistent with fundamental rights is not wiped out. It still governs what was done before the Constitution.'
  ],
  legacy: [
    'The Court built on this view in Bhikaji Narain Dhakras (1955), where it laid down the doctrine of eclipse.'
  ],
  source: 'https://indiankanoon.org/doc/656658/'
},

'bhikaji-narain-dhakras-1955': {
  name: 'Bhikaji Narain Dhakras v. State of Madhya Pradesh',
  full: 'Bhikaji Narain Dhakras and Others v. State of Madhya Pradesh and Another',
  aka: 'The doctrine of eclipse case',
  decided: '29 September 1955',
  citation: 'AIR 1955 SC 781, (1955) 2 SCR 589',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 13(1)', 'Doctrine of eclipse'],
  summary: 'A pre-Constitution law that conflicted with a fundamental right was not dead but eclipsed. When the First Amendment removed the conflict, the law became fully valid again.',
  question: [
    'A pre-Constitution law became inconsistent with Article 19(1)(g) in 1950. Did it become void for ever, or could it revive when a constitutional amendment removed the inconsistency?'
  ],
  facts: [
    'The C.P. and Berar Motor Vehicles (Amendment) Act, 1947 gave the State Government wide powers over road transport. It could run bus services itself and direct that permits be given to its own undertakings.',
    'The petitioners were private bus operators who had held permits for many years.',
    'From 26 January 1950, a law that let the State shut out private operators was inconsistent with the right to carry on any business under Article 19(1)(g).',
    'On 18 June 1951 the First Amendment changed Article 19(6). It allowed laws for State monopolies in any trade or business.',
    'On 4 February 1955 the State issued a notification to take over certain bus routes. The operators challenged it.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Acting Chief Justice S.R. Das', points: [
      'From 26 January 1950 the 1947 Act was "eclipsed, for the time being, by the fundamental right". It was not dead. It was dormant.',
      'The First Amendment removed "the shadow" and made the Act "free from all blemish or infirmity". From 18 June 1951 it applied fully again, without being passed again.',
      'The eclipse applied only to citizens. The Act stayed in force against non-citizens, and for things done before the Constitution.',
      'The notification was valid, and the petitions were dismissed.'
    ] }
  ],
  principles: [
    'This is the doctrine of eclipse. A pre-Constitution law that is inconsistent with a fundamental right is not void from the start. It is only overshadowed by the right.',
    'If the Constitution is later amended to remove the inconsistency, the law revives by itself.'
  ],
  legacy: [
    'In Deep Chand (1959) and Mahendra Lal Jaini (1962), the Court held that the doctrine does not apply to a law made after the Constitution that violates a fundamental right. Such a law is void from the start.',
    'In State of Gujarat v. Ambica Mills (1974), the Court held that a post-Constitution law that violates a right given only to citizens is still valid against non-citizens.'
  ],
  source: 'https://indiankanoon.org/doc/762155/'
},

'rmd-chamarbaugwalla-1957': {
  name: 'R.M.D. Chamarbaugwalla v. Union of India',
  full: 'R.M.D. Chamarbaugwalla and Another v. Union of India and Another',
  aka: 'The prize competitions case',
  decided: '9 April 1957',
  citation: 'AIR 1957 SC 628, 1957 SCR 930',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 13', 'Doctrine of severability', 'Article 19(1)(g)'],
  judges: 'S.R. Das CJI, T.L. Venkatarama Aiyar, S.K. Das, P.B. Gajendragadkar and Bhuvneshwar P. Sinha',
  summary: 'When only part of a law is invalid, the valid part survives if it can be separated. The Prize Competitions Act covered only competitions of a gambling nature, and it was valid.',
  question: [
    'The Prize Competitions Act, 1955 defined "prize competition" widely. Did it cover competitions of skill as well as gambling competitions?',
    'If it did, and the part about competitions of skill was invalid, did the whole Act fail, or could the valid part be separated and saved?'
  ],
  facts: [
    'Several State Legislatures passed resolutions under Article 252 asking Parliament to control prize competitions. Parliament then passed the Prize Competitions Act, 1955, which came into force on 1 April 1956.',
    'The petitioners ran prize competitions in many States. They filed petitions under Article 32.',
    'They argued that the Act\'s definition of "prize competition" covered competitions that depend on skill. Running such competitions is a business protected by Article 19(1)(g).',
    'They said the restrictions were unreasonable, and that the Act could not be split into valid and invalid parts, so the whole of it must fall.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Justice T.L. Venkatarama Aiyar', points: [
      'Read with its history and purpose, the Act applies only to competitions of a gambling nature. It does not apply to competitions in which success depends to a substantial degree on skill.',
      'Even if the definition covered both kinds, the provisions could be separated, and they would be valid for gambling competitions.',
      'Severability applies whether a law is invalid because the legislature lacked power, or because it breaks a constitutional prohibition such as a fundamental right.',
      'The petitions were dismissed with costs.'
    ] }
  ],
  principles: [
    'The main test of severability is the intention of the legislature. Would it have passed the valid part if it had known that the rest was invalid?',
    'If the valid part is distinct and complete in itself, it survives.',
    'If the valid and invalid parts form one scheme meant to work as a whole, the whole law fails.',
    'If what is left is so thin that it is different from what the legislature passed, or it cannot be enforced without rewriting, the whole law fails.',
    'Substance matters, not form. Valid and invalid parts can sit in the same section. The history, object, title and preamble of a law can be used to find the intention of the legislature.'
  ],
  legacy: [
    'These rules are still the standard statement of the doctrine of severability in India.',
    'Courts use them to strike down only the offending part of a law under Article 13 and keep the rest.'
  ],
  source: 'https://indiankanoon.org/doc/725224/'
}

});
