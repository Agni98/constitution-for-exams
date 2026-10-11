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
  summary: 'The Court struck down a ban on a journal entering Madras. Freedom of speech includes the freedom to circulate what one publishes, and in 1950 "public safety" was not a ground for limiting speech.',
  background: [
    'Article 19(1)(a) gives every citizen freedom of speech and expression. Article 19(2), as first written in 1950, allowed a law to limit speech only on a few grounds.',
    'The grounds in 1950 were libel and slander, contempt of court, decency or morality, and speech that undermines the security of the State or tends to overthrow it. "Public order" was not on the list.'
  ],
  question: [
    'Does freedom of speech under Article 19(1)(a) include the freedom to circulate a journal?',
    'A law allowed limits on speech for "public safety" or "the maintenance of public order". Could that law be saved by Article 19(2) as it stood in 1950?'
  ],
  facts: [
    'Romesh Thappar printed, published and edited Cross Roads, a weekly English journal from Bombay.',
    'On 1 March 1950 the Government of Madras made an order under Section 9(1-A) of the Madras Maintenance of Public Order Act, 1949. The order banned the entry and circulation of Cross Roads in the State of Madras.',
    'The Act allowed such orders for "securing the public safety or the maintenance of public order".',
    'Romesh Thappar filed a petition under Article 32.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of five. Justice M. Patanjali Sastri wrote the judgment', points: [
      'Freedom of speech includes freedom of circulation. "Without circulation the publication would be of little value."',
      'In 1950, Article 19(2) allowed limits only on speech that undermines the security of the State or tends to overthrow it. "Public safety" and "public order" are much wider than that.',
      'The Act allowed limits both inside and outside the permitted grounds, and the two could not be separated. So Section 9(1-A) is void as a whole.',
      'The ban order was quashed.'
    ] },
    { kind: 'dissent', label: 'Justice S. Fazl Ali, in dissent', points: [
      'Serious disorder that threatens public peace can undermine the security of the State. So the law was within Article 19(2), and the petition should have been dismissed.'
    ] }
  ],
  principles: [
    'Freedom of the press is not named in Article 19, but it is part of freedom of speech.',
    'The grounds for limiting speech are a closed list. A ground that is not in Article 19(2) cannot be used, however sensible it seems.',
    'So in 1950 the government could not ban a journal merely to keep public order. Parliament changed the Constitution the next year to allow it.'
  ],
  legacy: [
    'Romesh Thappar, and Brij Bhushan v. State of Delhi decided the same day, led to the First Amendment in 1951.',
    'The First Amendment added "public order", "friendly relations with foreign States" and "incitement to an offence" as grounds in Article 19(2). The amendment also added the word "reasonable" before "restrictions".'
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
  summary: 'The Court struck down a law that fixed how many pages a newspaper could print for its price. The State cannot cut down speech in order to regulate the business side of a newspaper.',
  background: [
    'Article 19(1)(a) gives every citizen freedom of speech and expression. Article 19(2) lists the only grounds on which a law may limit that freedom, and the limits must be reasonable.',
    'Article 19(1)(g) gives the right to carry on a business. Article 19(6) allows wider limits on business than Article 19(2) allows on speech.',
    'Newspapers are both a business and a means of speech. The question was which set of limits applies when a law controls the size of a newspaper.'
  ],
  question: [
    'Did the Newspaper (Price and Page) Act, 1956 and the Daily Newspaper (Price and Page) Order, 1960 break freedom of speech under Article 19(1)(a)?'
  ],
  facts: [
    'The 1956 Act let the Central Government control the price of newspapers according to their number of pages and their space for advertisements.',
    'The Order of 1960 fixed the largest number of pages a daily could print for a given price, and limited supplements.',
    'Sakal was a Marathi daily from Poona. The paper sold about 52,000 copies on weekdays and 56,000 on Sundays. About 40 per cent of its space was advertisements.',
    'Under the Order, Sakal would have had to raise its price or cut its pages. Sakal challenged the Act and the Order under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Justice J.R. Mudholkar wrote the judgment', points: [
      'A citizen has the right to spread his views and to reach as many readers as he chooses, subject only to Article 19(2).',
      '"The freedom of a newspaper to publish any number of pages or to circulate it to any number of persons is each an integral part of the freedom of speech and expression."',
      'The State cannot cut down freedom of speech in order to regulate the business side of a newspaper. Speech can be limited only on the grounds in Article 19(2).',
      '"The State cannot make a law which directly restricts one freedom even for securing the better enjoyment of another freedom."',
      'Section 3(1) of the Act and the Order made under it were declared void.'
    ] }
  ],
  principles: [
    'Each freedom carries its own list of limits. The grounds in Article 19(6) for regulating trade cannot be used to limit speech.',
    'So a newspaper is first a voice and only then a business. A law that shrinks the voice must pass the test for speech.'
  ],
  legacy: [
    'In Bennett Coleman (1972), the Court applied the same reasoning to limits on newsprint and pages.',
    'In Indian Express Newspapers v. Union of India (1984), the Court held that the press must pay taxes like anyone else. But a tax that cripples the press can be challenged.'
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
  summary: 'The newsprint policy of 1972-73 capped newspapers at ten pages and stopped big groups from starting new editions. The Court held that it broke freedom of the press. What matters is the direct effect of a measure on the right, not its stated aim.',
  background: [
    'Article 19(1)(a) gives every citizen freedom of speech and expression. Article 19(2) lists the only grounds on which a law may limit that freedom, and the limits must be reasonable.',
    'Newsprint is the cheap paper on which newspapers are printed. In the 1970s India imported most of it, and the government decided how much each newspaper could get.',
    'In Sakal Papers (1961), the Court had struck down a law that tied the number of pages to the price. The Court held that the State cannot cut down speech to regulate the business of a newspaper.'
  ],
  question: [
    'Could newspaper companies and their shareholders challenge the newsprint policy under Article 32?',
    'Did the newsprint import policy for 1972-73 break Articles 19(1)(a) and 14?'
  ],
  facts: [
    'Newsprint was in short supply. The government issued a newsprint import policy for April 1972 to March 1973.',
    'The policy limited newspapers to ten pages. The policy also stopped groups that owned two or more newspapers from starting new newspapers or new editions, and from moving newsprint between their papers.',
    'Bennett Coleman and other newspaper companies, together with shareholders, editors and readers, challenged the policy under Article 32.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of four: Justice A.N. Ray for himself, Chief Justice Sikri and Justice Jaganmohan Reddy, with Justice Beg agreeing', points: [
      'Shareholders do not lose their fundamental rights when they form a company. So the petitions could be heard.',
      'The test is the direct effect of a law or an action on the right, not its purpose. "The direct operation of the Act upon the rights forms the real test."',
      'The page limit and the ban on new newspapers and editions directly cut down circulation, so they broke Article 19(1)(a).',
      'The ten-page limit also treated unequal newspapers as equal, and broke Article 14.',
      'The Court struck down those parts of the policy.'
    ] },
    { kind: 'dissent', label: 'Justice K.K. Mathew, in dissent', points: [
      'When newsprint is scarce, rationing it is a valid regulation. A cut in pages that follows from having less newsprint does not cut down freedom of speech.',
      'Treating groups that own several newspapers differently, to prevent monopoly, is a sensible distinction.'
    ] }
  ],
  principles: [
    'Shareholders can claim their own Article 19 rights when a law hits the company they own.',
    'So the government cannot escape the test for speech by calling a measure an economic policy. The Court looks at what the measure does.'
  ],
  legacy: [
    'In Maneka Gandhi (1978), the Court restated the approach as the "direct and inevitable effect" test.'
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
  summary: 'Section 66A of the Information Technology Act punished online messages that were "grossly offensive" or caused "annoyance". The Court struck it down because those words are vague and catch far too much speech.',
  background: [
    'Article 19(1)(a) gives every citizen freedom of speech and expression. Article 19(2) lists the only grounds on which a law may limit that freedom, and the limits must be reasonable.',
    'Section 66A was added to the Information Technology Act, 2000 by an amendment in 2008. Section 66A covered messages sent through a computer or a phone, including posts on social media.',
    'An intermediary is a service that carries or hosts other people\'s content, such as a social media site or an internet provider.'
  ],
  question: [
    'Is Section 66A of the Information Technology Act valid under Article 19(1)(a), or is it saved by Article 19(2)?',
    'Are the rules for blocking websites under Section 69A, and the duties of intermediaries under Section 79, valid?'
  ],
  facts: [
    'Section 66A punished sending any information that was "grossly offensive" or "menacing", or false information sent to cause "annoyance" or "inconvenience". The punishment was up to three years in prison.',
    'Many people were arrested under the section for posts on social media. In November 2012 two young women in Palghar, Maharashtra were arrested over a Facebook post and a "like" after the death of Bal Thackeray.',
    'Shreya Singhal, a law student, and others filed writ petitions under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'Both judges agreed (2:0). Justice R.F. Nariman wrote the judgment', points: [
      'Section 66A is struck down in full. The section breaks Article 19(1)(a) and is not saved by Article 19(2).',
      '"Mere discussion or even advocacy of a particular cause howsoever unpopular is at the heart of Article 19(1)(a)." Only incitement can be limited.',
      'Words such as "grossly offensive", "annoyance" and "inconvenience" are vague and undefined. The section catches protected speech too, and frightens people out of speaking, which the Court called a chilling effect.',
      'The section has no close link to public order or to any other ground in Article 19(2).',
      'Section 118(d) of the Kerala Police Act was struck down for the same reasons.',
      'Section 69A and the rules for blocking websites were upheld, because they have safeguards. Section 79 was given a narrower meaning: an intermediary must take content down only on a court order or a government notice.'
    ] }
  ],
  principles: [
    'A vague law on speech harms even people who are never charged, because they stay silent to be safe. Courts call this the chilling effect.',
    'So people may argue for any cause online, however unpopular. The law can step in only when speech incites harm.'
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
  summary: 'Speech and business over the internet are protected by Article 19. An internet shutdown cannot last indefinitely, and every order must be published, proportionate and reviewed.',
  background: [
    'Article 19(1)(a) gives every citizen freedom of speech and expression. Article 19(2) lists the only grounds on which a law may limit that freedom, and the limits must be reasonable.',
    'Article 19(1)(g) gives the right to carry on any trade or business. Article 19(6) allows reasonable limits on it.',
    'Section 144 of the Code of Criminal Procedure lets a magistrate ban gatherings and movement to prevent danger or disorder.',
    'A limit on a right is proportionate if it goes no further than its aim needs. The State must choose the least harmful measure that will work.'
  ],
  question: [
    'Can the government refuse to produce the orders that imposed the restrictions?',
    'Is freedom of speech and of business over the internet protected by Article 19?',
    'Were the internet shutdown and the orders under Section 144 in Jammu and Kashmir valid?'
  ],
  facts: [
    'On 5 August 2019 the President made Constitution Order 272, which applied the whole Constitution to Jammu and Kashmir and ended its special status.',
    'On the same day, district magistrates restricted movement and gatherings under Section 144. Internet, mobile and landline services were cut off.',
    'Anuradha Bhasin, executive editor of the Kashmir Times, could not publish its Srinagar edition. Ghulam Nabi Azad, a political leader, could not travel to his constituency.',
    'They filed petitions under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'All three judges agreed (3:0). Justice N.V. Ramana wrote the judgment', points: [
      'The State must produce the orders that limit fundamental rights, so that people can challenge them.',
      'Freedom of speech through the internet is part of Article 19(1)(a). Freedom of trade and business through the internet is protected by Article 19(1)(g).',
      'Suspending the internet indefinitely is not allowed. A suspension must follow the Temporary Suspension of Telecom Services Rules, 2017, and must be the least restrictive measure available.',
      'A Review Committee must review suspension orders every seven days.',
      'Orders under Section 144 cannot be used to silence the lawful expression of opinion or grievance. The orders must give reasons and be proportionate.',
      'The authorities were directed to review all the restrictions and to allow essential services such as hospitals. But the Court did not itself restore the internet.'
    ] }
  ],
  principles: [
    'Any limit on a fundamental right must be proportionate. The State must choose the least restrictive measure that will work.',
    'So the government may cut the internet in an emergency, but only for a limited time, on the record, and under regular review.'
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
  summary: 'Making an accused give samples of handwriting, signatures or fingerprints does not force him to be a witness against himself, so Article 20(3) is not broken.',
  background: [
    'Article 20(3) says that no person accused of an offence shall be compelled to be a witness against himself. The right is called the right against self-incrimination.',
    'In M.P. Sharma (1954), eight judges had read "to be a witness" widely, as meaning to furnish any evidence. On that reading, even a fingerprint taken by force might be barred.'
  ],
  question: [
    'Does taking sample handwriting or fingerprints from an accused force him "to be a witness against himself" under Article 20(3)?',
    'Does being in police custody, by itself, amount to force?'
  ],
  facts: [
    'Kathi Kalu Oghad and others were tried for murder and for an offence under the Indian Arms Act.',
    'While in police custody, one of the accused was made to give samples of his handwriting. The samples were used as evidence against him.',
    'He was convicted and sentenced to life imprisonment. On appeal the High Court left out the handwriting evidence as taken in breach of Article 20(3), and he was acquitted.',
    'The State appealed. The question turned on the meaning given in M.P. Sharma, so eleven judges heard it.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of eight. Chief Justice B.P. Sinha wrote the judgment', points: [
      'Being in police custody does not by itself mean that the accused was forced.',
      '"To be a witness" means to give information from one\'s own knowledge. The phrase does not cover giving thumb impressions, palm or foot impressions, fingerprints or sample handwriting.',
      'So taking such samples does not break Article 20(3).',
      'The protection applies only if the person was already an accused when the statement was made.',
      'M.P. Sharma had read "to be a witness" too widely. The appeals were sent back to be decided in the light of these answers.'
    ] },
    { kind: 'concurring', label: 'Justice K.C. Das Gupta, for himself and Justices S.K. Das and Sarkar, agreeing with the result for a different reason', points: [
      '"To be a witness" means to furnish evidence, so giving samples is furnishing evidence.',
      'But a sample does not prove guilt by itself. So the accused is not forced to be a witness "against himself", and there is no breach.'
    ] }
  ],
  principles: [
    'So the line runs between the mind and the body. The police may take a person\'s fingerprints, but may not force out what the person knows.'
  ],
  legacy: [
    'In Selvi (2010), the Court held that narcoanalysis, lie detector and brain mapping tests draw out testimony, so they cannot be forced on anyone.',
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
  summary: 'No one can be forced to undergo narcoanalysis, a lie detector test or brain mapping. Forcing these tests breaks the right against self-incrimination and the right to personal liberty.',
  background: [
    'Article 20(3) says that no person accused of an offence shall be compelled to be a witness against himself. Article 21 protects life and personal liberty.',
    'In Kathi Kalu Oghad (1961), the Court held that fingerprints and handwriting samples can be taken by force, because they are physical evidence, not testimony.',
    'Narcoanalysis questions a person after injecting a drug that weakens self-control. A polygraph, or lie detector, records pulse, breathing and sweating while questions are asked. A brain mapping test, called BEAP, records the brain\'s response to words and pictures.'
  ],
  question: [
    'Can a person be made to undergo narcoanalysis, a polygraph test or a Brain Electrical Activation Profile (BEAP) test without consent?',
    'Do these tests break Article 20(3) and Article 21?'
  ],
  facts: [
    'Investigators had started using these tests on suspects in criminal cases.',
    'Some High Courts held that the tests did not break Article 20(3). In their view, the subject gives no spoken answers in a polygraph or BEAP test. In a narcoanalysis test, no one knows at the time whether the answers will help or hurt the subject.',
    'Selvi and others, who had been put through these tests or ordered to undergo them, appealed to the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'All three judges agreed (3:0). Chief Justice K.G. Balakrishnan wrote the judgment', points: [
      'Forcing a person to undergo narcoanalysis, a polygraph test or a BEAP test breaks the right against self-incrimination under Article 20(3). The results reveal what the person knows, so they are a kind of testimony.',
      'Forcing these tests also breaks personal liberty under Article 21.',
      'No one should be put through these tests by force, whether in a criminal investigation or otherwise.',
      'The tests can be done only with the person\'s consent, recorded before a Judicial Magistrate, and with safeguards. Even then, the results cannot be used as evidence by themselves.',
      'But if a voluntary test leads the police to a fact or an object, that discovery can be proved under Section 27 of the Indian Evidence Act.',
      'The National Human Rights Commission\'s guidelines of 2000 on polygraph tests must be followed.'
    ] }
  ],
  principles: [
    'Mental privacy is part of personal liberty under Article 21.',
    'So the State may take a suspect\'s fingerprints, but it may not reach into the suspect\'s mind without consent.'
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
  summary: 'When customs officers confiscated smuggled gold, that was not "prosecution and punishment" by a court. So a later criminal trial for the same act did not break Article 20(2).',
  background: [
    'Article 20(2) says that no person shall be prosecuted and punished for the same offence more than once. The rule is called the bar on double jeopardy.',
    'Customs officers can seize goods brought into the country against the law. A criminal court can separately try a person for an offence under a law such as the Foreign Exchange Regulation Act.'
  ],
  question: [
    'A traveller\'s gold was confiscated by the customs authorities. Did Article 20(2) then stop his later prosecution under the Foreign Exchange Regulation Act?'
  ],
  facts: [
    'On 6 November 1949 Maqbool Hussain arrived at Santa Cruz airport, Bombay, from Jeddah. He was carrying 107.2 tolas of gold, about 1.25 kilograms, which he had not declared.',
    'The customs authorities confiscated the gold under Section 167(8) of the Sea Customs Act, 1878.',
    'In March 1950 he was prosecuted in a criminal court under the Foreign Exchange Regulation Act, 1947 for bringing in the gold without permission.',
    'He argued that he had already been prosecuted and punished, so Article 20(2) barred the second prosecution.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Justice N.H. Bhagwati wrote the judgment', points: [
      'Article 20(2) applies only if the person was earlier prosecuted and punished before a court of law or a judicial tribunal.',
      'The customs authorities are not a court or a judicial tribunal. Confiscation by them is not punishment in this sense.',
      'So the prosecution under the Foreign Exchange Regulation Act was not barred.',
      'The appeal was dismissed.'
    ] }
  ],
  principles: [
    'Article 20(2) is narrower than the rule against double jeopardy in some other countries. A second trial is barred only after a first prosecution has ended in punishment.',
    'So a person can lose smuggled goods to the customs and still face a criminal trial for the smuggling.'
  ],
  legacy: [
    'In Thomas Dana v. State of Punjab (1959), the Court held that Article 20(2) applies only where both proceedings are for the same offence.'
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
  summary: 'Three schoolchildren stood respectfully during the national anthem but did not sing it, because of their faith. The Court held that they could not be expelled, since no law makes anyone sing it.',
  background: [
    'Article 19(1)(a) gives every citizen freedom of speech and expression. Article 19(2) lists the only grounds on which a law may limit that freedom, and the limits must be reasonable.',
    'Article 25 gives every person freedom of conscience and the right to practise their religion, subject to public order, morality and health.',
    'Jehovah\'s Witnesses are a Christian group. Their faith does not allow them to join in songs or rituals that they see as worship of anything other than God.',
    'The Prevention of Insults to National Honour Act, 1971 punishes anyone who deliberately prevents the singing of the national anthem or disturbs an assembly singing it.'
  ],
  question: [
    'Could students be expelled for standing respectfully during the national anthem but not singing it, because their religion forbade it?',
    'Did the expulsion break Articles 19(1)(a) and 25?'
  ],
  facts: [
    'Bijoe, Binu Mol and Bindu Emmanuel were schoolchildren in Kerala. They belonged to the Jehovah\'s Witnesses.',
    'At the morning assembly they stood up respectfully when the national anthem was sung, but they did not sing.',
    'In July 1985, on the instructions of the Deputy Inspector of Schools, the head mistress expelled them. The school relied on circulars of the Director of Public Instruction about singing the anthem.',
    'A single judge and then a Division Bench of the Kerala High Court dismissed their writ petition, and they appealed to the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'Both judges agreed (2:0). Justice O. Chinnappa Reddy wrote the judgment', points: [
      '"There is no provision of law which obliges anyone to sing the National Anthem."',
      'Standing respectfully without singing is not disrespect. Standing in silence neither prevents the singing nor disturbs the assembly under the 1971 Act.',
      'The circulars were only departmental instructions, with no law behind them. They cannot limit a fundamental right.',
      'The expulsion broke the children\'s freedom of speech, which includes the freedom to stay silent, and their freedom of religion under Article 25.',
      'What matters is whether a religious belief is honestly held, not whether the court finds it sensible. The appeal was allowed, and the children were to be taken back.'
    ] }
  ],
  principles: [
    'A right can be limited only by a law. An official\'s circular, however well meant, is not enough.',
    'The judgment closes on tolerance. Justice Chinnappa Reddy wrote that India\'s tradition teaches tolerance, its philosophy preaches tolerance and its Constitution practises tolerance, and he asked: "let us not dilute it."',
    'So respect for the anthem can be shown by standing in silence. The State cannot force children to sing against their faith.'
  ],
  legacy: [
    'In Shyam Narayan Chouksey (2016), an interim order required the anthem to be played in cinemas. In 2018 the Court changed the order and made it optional.'
  ],
  source: 'https://indiankanoon.org/doc/1508089/'
}

});
