/* Landmark judgments, rewritten in full. Batch 5: the reservation cases under
   Articles 15 and 16 that are too long to read through in one fetch.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. Indra Sawhney, Ashoka Kumar Thakur and Janhit
   Abhiyan run to several hundred pages each. The fetched full text on Indian
   Kanoon confirmed the bench, the date, the facts and the questions, but it
   stopped before the operative conclusions. Those, and the split of opinions,
   were confirmed from published summaries of the judgments (Supreme Court
   Observer, LiveLaw, SCC Online, CaseMine and study summaries of Indra
   Sawhney). Where the sources did not give a point clearly, it is left out:
   the dissents in Indra Sawhney are named but not summarised, and the review
   period suggested in Ashoka Kumar Thakur is not stated.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'indra-sawhney-1992': {
  name: 'Indra Sawhney v. Union of India',
  full: 'Indra Sawhney and Others v. Union of India and Others',
  aka: 'The Mandal case',
  decided: '16 November 1992',
  citation: '1992 Supp (3) SCC 217, AIR 1993 SC 477',
  bench: 9,
  result: 'Majority 6:3',
  status: 'partly',
  tags: ['Article 16(4)', 'OBC reservation', 'Creamy layer'],
  judges: 'M.H. Kania CJI, M.N. Venkatachaliah, S. Ratnavel Pandian, T.K. Thommen, A.M. Ahmadi, Kuldip Singh, P.B. Sawant, R.M. Sahai and B.P. Jeevan Reddy',
  summary: '27 per cent reservation for backward classes in central government jobs was upheld. The creamy layer must be excluded, total reservation should not normally cross 50 per cent, and there can be no reservation in promotions.',
  question: [
    'Was the order reserving 27 per cent of central government posts for socially and educationally backward classes valid under Article 16(4)?',
    'Can caste be used to identify a backward class? Can economic criteria alone be used?',
    'Is there a limit on how much can be reserved? Does reservation extend to promotions?'
  ],
  facts: [
    'The Second Backward Classes Commission, headed by B.P. Mandal, reported in 1980. It recommended reservation for socially and educationally backward classes.',
    'On 13 August 1990 the Government of India issued an office memorandum. It reserved 27 per cent of vacancies in civil posts under the Government of India for these classes.',
    'The order led to protests across the country and was challenged in the Supreme Court.',
    'On 25 September 1991 a new memorandum gave preference to the poorer sections within the backward classes. It also reserved another 10 per cent for other economically backward sections who were not covered by any reservation.',
    'A bench of nine judges heard the challenge.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (6 judges): Justice B.P. Jeevan Reddy for himself, Chief Justice Kania and Justices Venkatachaliah and Ahmadi, with Justices Pandian and Sawant concurring', points: [
      'The 27 per cent reservation for socially and educationally backward classes is valid.',
      'Caste can be used to identify a backward class. Backwardness under Article 16(4) is mainly social, and economic criteria alone cannot identify a backward class.',
      'The creamy layer, the advanced members of a backward class, must be excluded from reservation.',
      'Reservation should not normally exceed 50 per cent, except in extraordinary situations.',
      'Article 16(4) does not allow reservation in promotions.',
      'The extra 10 per cent reservation for economically backward sections of the other classes was struck down.',
      'Backward classes may be divided into backward and more backward classes. A permanent body was to be set up at the Centre and in the States, within four months, to examine requests for inclusion in and exclusion from the lists.'
    ] },
    { kind: 'dissent', label: 'Dissent (3 judges): Justices Thommen, Kuldip Singh and Sahai', points: [
      'Three judges dissented, each in a separate opinion.'
    ] }
  ],
  principles: [
    'Caste can be a starting point for identifying backward classes. The test is social and educational backwardness.',
    'Reservation has limits. The creamy layer is excluded, and total reservation should normally stay within 50 per cent.',
    'Article 16(4) is not an exception to Article 16(1). It is a way of achieving the equality that Article 16(1) promises.'
  ],
  legacy: [
    'The Government set criteria to identify the creamy layer. The income limit has been raised several times since.',
    'Parliament set up the National Commission for Backward Classes by a law in 1993. The 102nd Amendment (2018) made it a constitutional body under Article 338B.',
    'The 77th Amendment (1995) added Article 16(4A) to allow reservation in promotion for the Scheduled Castes and Scheduled Tribes.',
    'In Janhit Abhiyan (2022), the Court upheld 10 per cent reservation for economically weaker sections and held that the 50 per cent ceiling is not inflexible.'
  ],
  source: 'https://indiankanoon.org/doc/1363234/'
},

'ashoka-kumar-thakur-2008': {
  name: 'Ashoka Kumar Thakur v. Union of India',
  full: 'Ashoka Kumar Thakur v. Union of India and Others',
  aka: 'The OBC reservation in higher education case',
  decided: '10 April 2008',
  citation: '(2008) 6 SCC 1',
  bench: 5,
  result: 'Upheld, 5:0',
  tags: ['Article 15(5)', 'OBC reservation', 'Creamy layer'],
  judges: 'K.G. Balakrishnan CJI, Arijit Pasayat, C.K. Thakker, R.V. Raveendran and Dalveer Bhandari',
  summary: 'The 93rd Amendment and 27 per cent reservation for Other Backward Classes in central educational institutions were upheld for State-run and aided institutions. The creamy layer must be excluded.',
  question: [
    'Is the Constitution (Ninety-third Amendment) Act, 2005, which added Article 15(5), valid?',
    'Is the Central Educational Institutions (Reservation in Admission) Act, 2006, which reserved 27 per cent of seats for Other Backward Classes, valid?',
    'Must the creamy layer be excluded from this reservation?'
  ],
  facts: [
    'The 93rd Amendment (2005) added Article 15(5). It allows special provisions for socially and educationally backward classes and for the Scheduled Castes and Scheduled Tribes in admission to educational institutions, including private institutions, but not minority institutions.',
    'Parliament then passed the Central Educational Institutions (Reservation in Admission) Act, 2006. It reserved 27 per cent of seats in central educational institutions for Other Backward Classes.',
    'Ashoka Kumar Thakur and others challenged the Amendment and the Act. They argued that caste-based reservation in higher education destroyed equality.'
  ],
  held: [
    { kind: 'majority', label: 'Upheld by all five judges, in four opinions', points: [
      'The 93rd Amendment is valid for institutions maintained by the State and for aided institutions.',
      'The 2006 Act and the 27 per cent reservation for Other Backward Classes are valid.',
      'The creamy layer must be excluded from the Other Backward Classes who get the benefit.',
      'Caste can be a starting point for identifying socially and educationally backward classes.',
      'The majority did not decide whether the Amendment is valid for private unaided institutions. That question was left open.'
    ] },
    { kind: 'concurring', label: 'Separate view (Justice Dalveer Bhandari)', points: [
      'Extending reservation to private unaided institutions would destroy their autonomy and violate the basic structure. So the Amendment is invalid to that extent.'
    ] }
  ],
  principles: [
    'Article 15(5) is an enabling provision for special measures in education for backward classes.',
    'The creamy layer rule applies to reservation for Other Backward Classes in education, as it does in public jobs.'
  ],
  legacy: [
    'In Pramati Educational and Cultural Trust v. Union of India (2014), a five-judge bench upheld Article 15(5) for private unaided institutions as well.',
    'Reservation for Other Backward Classes in central educational institutions continues under the 2006 Act.'
  ],
  source: 'https://indiankanoon.org/doc/1219385/'
},

'janhit-abhiyan-2022': {
  name: 'Janhit Abhiyan v. Union of India',
  aka: 'The EWS reservation case',
  decided: '7 November 2022',
  citation: '2022 LiveLaw (SC) 922',
  bench: 5,
  result: 'Majority 3:2',
  tags: ['103rd Amendment', 'EWS reservation', 'Basic structure'],
  judges: 'U.U. Lalit CJI, Dinesh Maheshwari, S. Ravindra Bhat, Bela M. Trivedi and J.B. Pardiwala',
  summary: 'The 103rd Amendment was upheld. Reservation of up to 10 per cent for economically weaker sections, which excludes classes that already get reservation, does not violate the basic structure.',
  question: [
    'Does the 103rd Amendment violate the basic structure by allowing reservation on economic criteria alone?',
    'Does it violate the basic structure by allowing such reservation in private unaided educational institutions?',
    'Does it violate the basic structure by excluding the Scheduled Castes, Scheduled Tribes and Other Backward Classes from this reservation?'
  ],
  facts: [
    'The Constitution (One Hundred and Third Amendment) Act, 2019 added Articles 15(6) and 16(6).',
    'They allow reservation of up to 10 per cent in education and public jobs for economically weaker sections of citizens. This is in addition to existing reservations.',
    'Classes that already get reservation under Articles 15(4), 15(5) and 16(4), which include the Scheduled Castes, Scheduled Tribes and Other Backward Classes, are excluded.',
    'Janhit Abhiyan and others challenged the Amendment. They argued that reservation cannot rest on economic criteria alone, and that the extra 10 per cent breaks the 50 per cent ceiling set in Indra Sawhney.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (3 judges): Justices Dinesh Maheshwari, Bela M. Trivedi and J.B. Pardiwala, in separate opinions', points: [
      'Reservation based only on economic criteria does not violate the basic structure.',
      'Allowing such reservation in private unaided educational institutions does not violate the basic structure.',
      'Excluding the classes covered by Articles 15(4), 15(5) and 16(4) balances non-discrimination with compensatory discrimination. It does not violate the equality code.',
      'The 50 per cent ceiling is not inflexible. So the extra 10 per cent does not violate the basic structure.',
      'The majority judges also suggested that reservation should not go on without a time limit and should be revisited.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice S. Ravindra Bhat, for himself and Chief Justice U.U. Lalit)', points: [
      'Economic criteria can be a valid basis for reservation.',
      'But excluding the Scheduled Castes, Scheduled Tribes and Other Backward Classes from the benefit violates the equality code, which is part of the basic structure. So the Amendment is invalid.'
    ] }
  ],
  principles: [
    'Economic weakness alone can be a ground for special provisions in education and public jobs.',
    'The 50 per cent ceiling set in Indra Sawhney is not inflexible.'
  ],
  legacy: [
    'Economically weaker sections have up to 10 per cent reservation in central government jobs and central educational institutions.',
    'With this reservation, the total reserved share in central institutions is now above 50 per cent.'
  ],
  source: 'https://indiankanoon.org/doc/98959833/'
}

});
