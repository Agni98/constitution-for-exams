/* Landmark judgments, rewritten in full. Batch 6: Articles 19 and 20.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. Each entry was checked against the full text
   of the judgment on Indian Kanoon: the date, the bench, the split, who wrote
   each opinion, the facts and the operative holding. The corrections to the
   short summaries that came out of the check: Sakal Papers was decided on
   25 September 1961, not in 1962. Bennett Coleman was decided on 30 October
   1972, not in 1973, by a majority of 4:1. Romesh Thappar was decided by six
   judges, 5:1. In Kathi Kalu Oghad the eleven judges agreed on the result and
   split 8:3 only on the reasoning. Points of legacy that come from later
   events, not from the judgment itself, are stated only where they are well
   established.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'romesh-thappar-1950': {
  name: 'Romesh Thappar v. State of Madras',
  aka: 'The Cross Roads case',
  decided: '26 May 1950',
  citation: 'AIR 1950 SC 124, 1950 SCR 594',
  bench: 6,
  result: 'Majority 5:1',
  tags: ['Article 19(1)(a)', 'Freedom of the press', 'Article 19(2)'],
  judges: 'H.J. Kania CJI, S. Fazl Ali, M. Patanjali Sastri, M.C. Mahajan, B.K. Mukherjea and S.R. Das',
  summary: 'A ban on the circulation of a journal in Madras was struck down. Freedom of speech includes freedom of circulation, and in 1950 "public safety" was not a ground on which speech could be restricted.',
  question: [
    'Does freedom of speech and expression under Article 19(1)(a) include the freedom to circulate a journal?',
    'Article 19(2), as it then stood, allowed restrictions only on speech that undermines the security of the State or tends to overthrow it. Could a law allowing restrictions for "public safety" or "the maintenance of public order" be saved by it?'
  ],
  facts: [
    'Romesh Thappar printed, published and edited Cross Roads, a weekly English journal published from Bombay.',
    'On 1 March 1950 the Government of Madras made an order under Section 9(1-A) of the Madras Maintenance of Public Order Act, 1949. It banned the entry and circulation of Cross Roads in the State of Madras.',
    'The Act allowed such orders for "securing the public safety or the maintenance of public order".',
    'Romesh Thappar filed a petition under Article 32.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (5 judges), judgment by Justice M. Patanjali Sastri', points: [
      'Freedom of speech and expression includes freedom of circulation. "Without circulation the publication would be of little value."',
      'Article 19(2), as it then stood, allowed restrictions only on speech that undermines the security of the State or tends to overthrow it. "Public safety" and "public order" are wider than that.',
      'A law that allows restrictions both within and beyond the permitted limits cannot be upheld even in part, because the two cannot be separated. So Section 9(1-A) is void.',
      'The ban order was quashed.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice S. Fazl Ali)', points: [
      'Serious disorder that threatens public peace can undermine the security of the State. So the law was within Article 19(2), and the petition should have been dismissed.'
    ] }
  ],
  principles: [
    'Freedom of the press is part of freedom of speech and expression, and it includes the freedom to circulate.',
    'Speech can be restricted only on the grounds listed in Article 19(2).',
    'A law that restricts speech in words wide enough to cover both permitted and forbidden restrictions is void as a whole.'
  ],
  legacy: [
    'This case, and Brij Bhushan v. State of Delhi decided the same day, led to the First Amendment in 1951.',
    'The First Amendment added "public order", "friendly relations with foreign States" and "incitement to an offence" as grounds in Article 19(2). It also added the word "reasonable" before "restrictions".'
  ],
  source: 'https://indiankanoon.org/doc/456839/'
},

'sakal-papers-1962': {
  name: 'Sakal Papers (P) Ltd. v. Union of India',
  full: 'Sakal Papers (P) Ltd. and Others v. Union of India',
  decided: '25 September 1961',
  year: 1961,
  citation: 'AIR 1962 SC 305, (1962) 3 SCR 842',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 19(1)(a)', 'Freedom of the press', 'Newspapers'],
  summary: 'A law that fixed how many pages a newspaper could print for its price was struck down. The State cannot cut down speech in order to regulate the business side of a newspaper.',
  question: [
    'Did the Newspaper (Price and Page) Act, 1956 and the Daily Newspaper (Price and Page) Order, 1960 violate freedom of speech and expression under Article 19(1)(a)?'
  ],
  facts: [
    'The Newspaper (Price and Page) Act, 1956 let the Central Government regulate the price of newspapers according to their pages and their advertisement space.',
    'The Daily Newspaper (Price and Page) Order, 1960 fixed the maximum number of pages a daily could publish for a given price. It also limited supplements.',
    'Sakal was a Marathi daily published from Poona. It sold about 52,000 copies on weekdays and 56,000 on Sundays. About 40 per cent of its space was advertisements.',
    'Under the Order, Sakal would have had to raise its price or cut its pages. It challenged the Act and the Order under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Justice J.R. Mudholkar', points: [
      'A citizen has the right to spread his views and to reach as many readers as he chooses, subject only to Article 19(2).',
      '"The freedom of a newspaper to publish any number of pages or to circulate it to any number of persons is each an integral part of the freedom of speech and expression."',
      'The State cannot cut down freedom of speech in order to regulate the business side of a newspaper. Speech can be restricted only on the grounds in Article 19(2).',
      '"The State cannot make a law which directly restricts one freedom even for securing the better enjoyment of another freedom."',
      'Section 3(1) of the Act and the Order made under it were declared void.'
    ] }
  ],
  principles: [
    'Freedom of the press covers how much a newspaper publishes and how widely it circulates.',
    'A law that directly restricts speech cannot be justified by the aim of regulating trade.'
  ],
  legacy: [
    'In Bennett Coleman (1972), the Court applied the same reasoning to limits on newsprint and pages.',
    'In Indian Express Newspapers v. Union of India (1984), the Court held that the press must pay taxes like anyone else, but a tax that cripples the press can be challenged.'
  ],
  source: 'https://indiankanoon.org/doc/243002/'
},

'bennett-coleman-1973': {
  name: 'Bennett Coleman & Co. v. Union of India',
  full: 'Bennett Coleman & Co. and Others v. Union of India and Others',
  aka: 'The newsprint case',
  decided: '30 October 1972',
  year: 1972,
  citation: '(1972) 2 SCC 788, AIR 1973 SC 106',
  bench: 5,
  result: 'Majority 4:1',
  tags: ['Article 19(1)(a)', 'Freedom of the press', 'Direct effect test'],
  judges: 'S.M. Sikri CJI, A.N. Ray, P. Jaganmohan Reddy, K.K. Mathew and M.H. Beg',
  summary: 'The newsprint policy of 1972-73, which capped newspapers at ten pages and barred big groups from starting new editions, violated freedom of the press. What matters is the direct effect of a measure on the right, not its stated aim.',
  question: [
    'Could newspaper companies and their shareholders challenge the newsprint policy under Article 32?',
    'Did the newsprint import policy for 1972-73 violate Articles 19(1)(a) and 14?'
  ],
  facts: [
    'Newsprint was imported and was in short supply. The Government issued a newsprint import policy for April 1972 to March 1973.',
    'The policy set a limit of ten pages for newspapers. It barred groups that owned two or more newspapers from starting new newspapers or new editions, and did not let them move newsprint between their papers.',
    'Bennett Coleman and other newspaper companies, together with shareholders, editors and readers, challenged the policy under Article 32.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (4 judges): Justice A.N. Ray for himself, Chief Justice Sikri and Justice Jaganmohan Reddy, with Justice Beg concurring', points: [
      'Shareholders do not lose their fundamental rights when they form a company. So the petitions were maintainable.',
      'The test is the direct effect of a law or action on the right, not its object. "The direct operation of the Act upon the rights forms the real test."',
      'The page limit and the ban on new newspapers and editions directly cut down circulation. They violated Article 19(1)(a).',
      'The ten-page limit also treated unequal newspapers as equal, and violated Article 14.',
      'Those parts of the policy were struck down.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice K.K. Mathew)', points: [
      'When newsprint is scarce, rationing it is a valid regulation. A cut in pages that follows from less newsprint does not abridge freedom of speech.',
      'Treating groups that own several newspapers differently, to prevent monopoly, is a reasonable classification.'
    ] }
  ],
  principles: [
    'A measure that directly restricts speech is tested under Article 19(2), whatever its stated purpose.',
    'Freedom of the press includes the freedom to decide the number of pages and to reach more readers.'
  ],
  legacy: [
    'In Maneka Gandhi (1978), the Court restated this approach as the "direct and inevitable effect" test.',
    'The test is still used to judge laws that affect fundamental rights indirectly.'
  ],
  source: 'https://indiankanoon.org/doc/125596/'
},

'shreya-singhal-2015': {
  name: 'Shreya Singhal v. Union of India',
  aka: 'The Section 66A case',
  decided: '24 March 2015',
  bench: 2,
  result: 'Unanimous, 2:0',
  tags: ['Article 19(1)(a)', 'Section 66A IT Act', 'Online speech'],
  judges: 'J. Chelameswar and R.F. Nariman',
  summary: 'Section 66A of the Information Technology Act, which punished online messages that were "grossly offensive" or caused "annoyance", was struck down as vague and overbroad.',
  question: [
    'Is Section 66A of the Information Technology Act, 2000 valid under Article 19(1)(a), or is it saved by Article 19(2)?',
    'Are the rules for blocking websites under Section 69A, and the liability of intermediaries under Section 79, valid?'
  ],
  facts: [
    'Section 66A punished sending, through a computer or a phone, any information that was "grossly offensive" or "menacing", or false information sent to cause "annoyance" or "inconvenience". The punishment was up to three years in prison.',
    'Many people were arrested under it for posts on social media. In November 2012 two young women in Palghar, Maharashtra were arrested over a Facebook post and a "like" after the death of Bal Thackeray.',
    'Shreya Singhal, a law student, and others filed writ petitions under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (2:0), judgment by Justice R.F. Nariman', points: [
      'Section 66A is struck down in its entirety. It violates Article 19(1)(a) and is not saved by Article 19(2).',
      '"Mere discussion or even advocacy of a particular cause howsoever unpopular is at the heart of Article 19(1)(a)." Only incitement can be restricted.',
      'Words such as "grossly offensive", "annoyance" and "inconvenience" are vague and undefined. The section catches protected speech too, and has a chilling effect on free speech.',
      'The section has no proximate link to public order or to any other ground in Article 19(2).',
      'Section 118(d) of the Kerala Police Act was struck down for the same reasons.',
      'Section 69A and the rules for blocking websites were upheld, because they have safeguards. Section 79 was read down, so that an intermediary must take content down only on a court order or a government notification.'
    ] }
  ],
  principles: [
    'Speech falls into three kinds: discussion, advocacy and incitement. Only incitement can be restricted.',
    'A law that restricts speech must be clear. A vague law that chills free speech is void.'
  ],
  legacy: [
    'Police in several States kept registering cases under Section 66A after it was struck down. In 2022 the Supreme Court directed that no one be prosecuted under it and that pending cases be dropped.',
    'The line between advocacy and incitement is now used across free speech cases.'
  ],
  source: 'https://indiankanoon.org/doc/110813550/'
},

'anuradha-bhasin-2020': {
  name: 'Anuradha Bhasin v. Union of India',
  full: 'Anuradha Bhasin and Others v. Union of India and Others',
  aka: 'The Kashmir internet shutdown case',
  decided: '10 January 2020',
  citation: 'AIR 2020 SC 1308',
  bench: 3,
  result: 'Unanimous, 3:0',
  tags: ['Article 19(1)(a)', 'Internet shutdowns', 'Proportionality'],
  judges: 'N.V. Ramana, R. Subhash Reddy and B.R. Gavai',
  summary: 'Freedom of speech and freedom of trade over the internet are protected by Article 19. An internet shutdown cannot be indefinite, and every order must be published, proportionate and reviewed.',
  question: [
    'Can the Government refuse to produce the orders that imposed the restrictions?',
    'Is freedom of speech and of trade over the internet protected by Article 19?',
    'Were the internet shutdown and the orders under Section 144 in Jammu and Kashmir valid?'
  ],
  facts: [
    'On 5 August 2019 the President made Constitution Order 272, applying the whole Constitution to Jammu and Kashmir.',
    'On the same day, district magistrates imposed restrictions on movement and gatherings under Section 144 of the Code of Criminal Procedure. Internet, mobile and landline services were cut off.',
    'Anuradha Bhasin, executive editor of the Kashmir Times, could not publish its Srinagar edition. Ghulam Nabi Azad, a political leader, could not travel to his constituency.',
    'They filed petitions under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (3:0), judgment by Justice N.V. Ramana', points: [
      'The State must produce the orders that restrict fundamental rights, so that they can be challenged.',
      'Freedom of speech and expression through the internet is part of Article 19(1)(a). Freedom of trade and business through the internet is protected by Article 19(1)(g).',
      'Indefinite suspension of the internet is not permissible. A suspension must follow the Temporary Suspension of Telecom Services Rules, 2017, and must be the least restrictive measure available.',
      'A Review Committee must review suspension orders every seven days.',
      'Orders under Section 144 cannot be used to suppress the legitimate expression of opinion or grievance. They must be reasoned and proportionate.',
      'The authorities were directed to review all the restrictions and to allow essential services such as hospitals. The Court did not itself restore the internet.'
    ] }
  ],
  principles: [
    'The internet is a medium for exercising fundamental rights, so restrictions on it must meet the tests in Article 19.',
    'Orders that restrict fundamental rights must be published, reasoned and proportionate.'
  ],
  legacy: [
    'In May 2020, in Foundation for Media Professionals, the Court set up a special committee to review the restrictions on 4G internet in Jammu and Kashmir.',
    'In November 2020 the telecom suspension rules were amended so that a suspension order cannot stay in force for more than 15 days.'
  ],
  source: 'https://indiankanoon.org/doc/82461587/'
},

'kathi-kalu-oghad-1961': {
  name: 'State of Bombay v. Kathi Kalu Oghad',
  full: 'State of Bombay v. Kathi Kalu Oghad and Others',
  decided: '4 August 1961',
  citation: 'AIR 1961 SC 1808, (1962) 3 SCR 10',
  bench: 11,
  result: 'Unanimous result, 8:3 on reasoning',
  tags: ['Article 20(3)', 'Self-incrimination', 'Specimen handwriting'],
  judges: 'B.P. Sinha CJI, S.K. Das, P.B. Gajendragadkar, A.K. Sarkar, K. Subba Rao, K.N. Wanchoo, K.C. Das Gupta, Syed Jafer Imam, Raghubar Dayal, N. Rajagopala Ayyangar and J.R. Mudholkar',
  summary: 'Making an accused give specimen handwriting, signatures or fingerprints does not compel him to be a witness against himself under Article 20(3).',
  question: [
    'Does taking specimen handwriting or fingerprints from an accused compel him "to be a witness against himself" under Article 20(3)?',
    'Does being in police custody by itself amount to compulsion?'
  ],
  facts: [
    'Kathi Kalu Oghad and others were tried for murder and for an offence under the Indian Arms Act.',
    'While in police custody during the investigation, one of the accused was made to give specimens of his handwriting. The specimens were used as evidence against him.',
    'He was convicted and sentenced to life imprisonment. On appeal the High Court left out the handwriting evidence as taken in breach of Article 20(3), and he was acquitted.',
    'The State appealed. The question turned on the meaning of Article 20(3) given in M.P. Sharma (1954), so eleven judges heard it.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (8 judges), judgment by Chief Justice B.P. Sinha', points: [
      'Being in police custody does not by itself mean that the accused was compelled.',
      '"To be a witness" means to give information based on personal knowledge. It does not cover giving thumb impressions, palm or foot impressions, fingerprints or specimen handwriting.',
      'So taking such specimens does not violate Article 20(3).',
      'The protection applies only if the person was an accused when the statement was made.',
      'M.P. Sharma had put the meaning of "to be a witness" too widely. The appeals were sent back to be decided in the light of these answers.'
    ] },
    { kind: 'concurring', label: 'Separate opinion (Justice K.C. Das Gupta, for himself and Justices S.K. Das and Sarkar)', points: [
      '"To be a witness" means to furnish evidence, so giving specimens is furnishing evidence.',
      'But a specimen does not incriminate anyone by itself. So the accused is not compelled to be a witness "against himself", and there is no violation.'
    ] }
  ],
  principles: [
    'Article 20(3) protects against compelled testimony. It does not stop the collection of physical evidence.',
    'Fingerprints and handwriting samples can be taken from an accused.'
  ],
  legacy: [
    'In Selvi (2010), the Court held that narcoanalysis, polygraph and brain-mapping tests produce testimony, so they cannot be forced on anyone.',
    'In Ritesh Sinha v. State of Uttar Pradesh (2019), the Court held that a magistrate can order a person to give a voice sample for an investigation.'
  ],
  source: 'https://indiankanoon.org/doc/1626264/'
},

'selvi-2010': {
  name: 'Selvi v. State of Karnataka',
  full: 'Smt. Selvi and Others v. State of Karnataka and Another',
  aka: 'The narcoanalysis case',
  decided: '5 May 2010',
  citation: '(2010) 7 SCC 263, AIR 2010 SC 1974',
  bench: 3,
  result: 'Unanimous, 3:0',
  tags: ['Article 20(3)', 'Article 21', 'Narcoanalysis'],
  judges: 'K.G. Balakrishnan CJI, R.V. Raveendran and J.M. Panchal',
  summary: 'No one can be forced to undergo narcoanalysis, a polygraph test or brain mapping. Forcing these tests violates the right against self-incrimination and personal liberty.',
  question: [
    'Can a person be made to undergo narcoanalysis, a polygraph examination or a Brain Electrical Activation Profile (BEAP) test without consent?',
    'Do these tests violate Article 20(3) and Article 21?'
  ],
  facts: [
    'Investigators had started using narcoanalysis, polygraph and BEAP tests on suspects in criminal cases.',
    'Some High Courts held that these tests did not violate Article 20(3). They said the subject gives no spoken answers in a polygraph or BEAP test, and that it is not known at the time of a narcoanalysis test whether what is said will help or hurt the subject.',
    'Selvi and others, who had been subjected to or ordered to undergo these tests, appealed to the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (3:0), judgment by Chief Justice K.G. Balakrishnan', points: [
      'Forcing a person to undergo narcoanalysis, a polygraph test or a BEAP test violates the right against self-incrimination under Article 20(3). The results are testimonial in nature.',
      'Forcing these tests also violates personal liberty under Article 21.',
      'No one should be forcibly subjected to these tests, whether in a criminal investigation or otherwise.',
      'The tests can be done only with the person\'s consent, recorded before a Judicial Magistrate, and with safeguards. Even then, the results cannot be admitted as evidence by themselves.',
      'Information or material found later with the help of a voluntary test can be admitted under Section 27 of the Indian Evidence Act.',
      'The National Human Rights Commission\'s guidelines of 2000 on polygraph tests must be followed.'
    ] }
  ],
  principles: [
    'The right against self-incrimination protects what a person knows in the mind, not only what the person says aloud.',
    'Mental privacy is part of personal liberty under Article 21.'
  ],
  legacy: [
    'Courts have since refused to order these tests on an unwilling accused.'
  ],
  source: 'https://indiankanoon.org/doc/338008/'
},

'maqbool-hussain-1953': {
  name: 'Maqbool Hussain v. State of Bombay',
  decided: '17 April 1953',
  citation: 'AIR 1953 SC 325, 1953 SCR 730',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 20(2)', 'Double jeopardy', 'Customs'],
  judges: 'M. Patanjali Sastri CJI, B.K. Mukherjea, S.R. Das, N.H. Bhagwati and Ghulam Hasan',
  summary: 'Confiscation of gold by customs authorities is not "prosecution and punishment" by a court. So a later criminal prosecution for the same act did not violate Article 20(2).',
  question: [
    'A traveller\'s gold was confiscated by the customs authorities. Did Article 20(2), which bars prosecuting and punishing a person twice for the same offence, stop his later prosecution under the Foreign Exchange Regulation Act?'
  ],
  facts: [
    'On 6 November 1949 Maqbool Hussain arrived at Santa Cruz airport, Bombay, from Jeddah. He was carrying 107.2 tolas of gold that he had not declared.',
    'The customs authorities confiscated the gold under Section 167(8) of the Sea Customs Act, 1878.',
    'In March 1950 he was prosecuted in a criminal court under the Foreign Exchange Regulation Act, 1947 for bringing in the gold without permission.',
    'He argued that he had already been prosecuted and punished, so Article 20(2) barred the second prosecution.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Justice N.H. Bhagwati', points: [
      'Article 20(2) applies only if the person was earlier prosecuted and punished before a court of law or a judicial tribunal.',
      'The Sea Customs authorities are not a court or a judicial tribunal. Confiscation by them is not punishment in this sense.',
      'So the prosecution under the Foreign Exchange Regulation Act was not barred.',
      'The appeal was dismissed.'
    ] }
  ],
  principles: [
    'Article 20(2) bars a second prosecution only after an earlier prosecution and punishment by a court or a judicial tribunal.',
    'Departmental or administrative proceedings do not bring in this protection.'
  ],
  legacy: [
    'In Thomas Dana v. State of Punjab (1959), the Court held that Article 20(2) applies only where both proceedings are for the same offence.',
    'Because of these rules, a person can face both a departmental penalty and a criminal trial for the same conduct.'
  ],
  source: 'https://indiankanoon.org/doc/1815080/'
},

'bijoe-emmanuel-1986': {
  name: 'Bijoe Emmanuel v. State of Kerala',
  full: 'Bijoe Emmanuel and Others v. State of Kerala and Others',
  aka: 'The national anthem case',
  decided: '11 August 1986',
  citation: '(1986) 3 SCC 615, AIR 1987 SC 748',
  bench: 2,
  result: 'Unanimous, 2:0',
  tags: ['Article 19(1)(a)', 'Article 25', 'Right to silence'],
  judges: 'O. Chinnappa Reddy and M.M. Dutt',
  summary: 'Three schoolchildren who stood respectfully but did not sing the national anthem, because of their faith, could not be expelled. No law compels anyone to sing it.',
  question: [
    'Could students be expelled for standing respectfully during the national anthem but not singing it, because their religion forbade it?',
    'Did the expulsion violate Articles 19(1)(a) and 25?'
  ],
  facts: [
    'Bijoe, Binu Mol and Bindu Emmanuel were schoolchildren in Kerala. They belonged to the Jehovah\'s Witnesses.',
    'At the morning assembly they stood up respectfully when the national anthem was sung, but they did not sing. Their faith did not allow them to join in such rituals.',
    'In July 1985, on the instructions of the Deputy Inspector of Schools, the head mistress expelled them. The school relied on circulars of the Director of Public Instruction about singing the anthem.',
    'A single judge and then a Division Bench of the Kerala High Court dismissed their writ petition. They appealed to the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (2:0), judgment by Justice O. Chinnappa Reddy', points: [
      '"There is no provision of law which obliges anyone to sing the National Anthem."',
      'Standing respectfully without singing is not disrespect. It does not prevent the singing or cause a disturbance under the Prevention of Insults to National Honour Act, 1971.',
      'The circulars were only departmental instructions with no statutory basis. They are not law that can restrict a fundamental right.',
      'The expulsion violated the children\'s freedom of speech and expression, which includes the freedom to remain silent, and their freedom of religion under Article 25.',
      'What matters is whether a religious belief is genuinely and conscientiously held, not whether it appeals to the court. The appeal was allowed, and the children were to be readmitted.'
    ] }
  ],
  principles: [
    'Freedom of speech and expression includes the freedom to remain silent.',
    'A fundamental right can be restricted only by law, not by executive instructions.',
    'Courts do not ask whether a religious belief is reasonable, only whether it is sincerely held.'
  ],
  legacy: [
    'The judgment ends: "Our tradition teaches tolerance; our philosophy preaches tolerance; our Constitution practises tolerance; let us not dilute it."',
    'In Shyam Narayan Chouksey (2016), an interim order required the anthem to be played in cinemas. In 2018 the Court changed the order and made it optional.'
  ],
  source: 'https://indiankanoon.org/doc/1508089/'
}

});
