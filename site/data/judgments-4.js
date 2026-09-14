/* Landmark judgments, rewritten in full. Batch 4: Articles 15, 16 and 17.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. Each entry was checked against the full text
   of the judgment on Indian Kanoon: the date, the bench, the split, who wrote
   each opinion, the facts and the operative holding. One correction to the
   short summaries came out of the check: Appa Balu Ingale was decided on
   1 December 1992, not in 1993, and Appa Balu Ingale himself had died before
   the appeal was heard, so the convictions were restored against the two
   surviving accused.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'champakam-dorairajan-1951': {
  name: 'State of Madras v. Champakam Dorairajan',
  full: 'State of Madras v. Srimathi Champakam Dorairajan',
  aka: 'The Communal G.O. case',
  decided: '9 April 1951',
  citation: 'AIR 1951 SC 226, 1951 SCR 525',
  bench: 7,
  result: 'Unanimous, 7:0',
  tags: ['Article 29(2)', 'Reservation in education', 'Directive Principles'],
  summary: 'A Madras order that fixed college seats by religion and caste violated Article 29(2). Directive Principles cannot override fundamental rights.',
  question: [
    'Did the Communal G.O. of Madras, which divided seats in State medical and engineering colleges among religions and castes, violate Article 29(2)?',
    'Could the order be saved by Article 46, the Directive Principle on promoting the interests of weaker sections?'
  ],
  facts: [
    'The Madras Government had an order, known as the Communal G.O., for admissions to State medical and engineering colleges.',
    'For every 14 seats, it gave 6 to non-Brahmin Hindus, 2 to backward Hindus, 2 to Brahmins, 2 to Harijans, 1 to Anglo-Indians and Indian Christians, and 1 to Muslims.',
    'Champakam Dorairajan, a Brahmin, did not apply to the medical college. She said the order meant she would not be admitted. Another student, Srinivasan, applied to the engineering college with high marks and was not admitted.',
    'The Madras High Court allowed their petitions. The State of Madras appealed.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (7:0), judgment by Justice S.R. Das', points: [
      'The Communal G.O. denies admission on grounds only of religion, race or caste. It violates Article 29(2) and is void under Article 13.',
      '"The directive principles of State policy have to conform to and run as subsidiary to the Chapter of Fundamental Rights."',
      'Article 16(4) allows reservation for backward classes in public jobs. Article 29 has no such clause, and the Court found that difference significant.',
      'The appeals were dismissed.'
    ] }
  ],
  principles: [
    'In 1951 the Court held that fundamental rights prevail over Directive Principles when the two conflict.',
    'The State cannot allot seats in its educational institutions by religion or caste unless the Constitution clearly allows it.'
  ],
  legacy: [
    'Parliament responded with the First Amendment in 1951. It added Article 15(4), which allows special provisions for socially and educationally backward classes and for the Scheduled Castes and Scheduled Tribes.',
    'The view that Directive Principles are subordinate was later softened. In Minerva Mills (1980), the Court held that the balance between fundamental rights and Directive Principles is part of the basic structure.'
  ],
  source: 'https://indiankanoon.org/doc/149321/'
},

'm-nagaraj-2006': {
  name: 'M. Nagaraj v. Union of India',
  full: 'M. Nagaraj and Others v. Union of India and Others',
  decided: '19 October 2006',
  citation: '(2006) 8 SCC 212, AIR 2007 SC 71',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 16(4A)', 'Reservation in promotion', 'Basic structure'],
  judges: 'Y.K. Sabharwal CJI, K.G. Balakrishnan, S.H. Kapadia, C.K. Thakker and P.K. Balasubramanyan',
  summary: 'The amendments that allow reservation in promotion with consequential seniority are valid. A State that uses them must show backwardness, inadequate representation and no harm to efficiency.',
  question: [
    'Did the 77th, 81st, 82nd and 85th Amendments, which allowed reservation in promotion for the Scheduled Castes and Scheduled Tribes, violate the basic structure?'
  ],
  facts: [
    'In Indra Sawhney (1992), the Court held that Article 16(4) does not allow reservation in promotions.',
    'The 77th Amendment (1995) added Article 16(4A). It allowed reservation in promotion for the Scheduled Castes and Scheduled Tribes.',
    'The 81st Amendment (2000) added Article 16(4B). It lets unfilled reserved vacancies be carried forward as a separate class, outside the 50 per cent limit for that year.',
    'The 82nd Amendment (2000) added a proviso to Article 335 that allows relaxed qualifying marks. The 85th Amendment (2001) added "consequential seniority" to Article 16(4A).',
    'M. Nagaraj and others challenged these amendments under Article 32. They argued that the amendments destroyed equality, which is part of the basic structure.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Justice S.H. Kapadia', points: [
      'The amendments are valid. They do not destroy the identity of the Constitution.',
      'Articles 16(4A) and 16(4B) are enabling provisions. The State is not bound to give reservation in promotion.',
      'A State that chooses to give it must show quantifiable data on the backwardness of the class and its inadequate representation, and must keep in mind the overall efficiency of administration under Article 335.',
      'The 50 per cent ceiling, the exclusion of the creamy layer, and the concepts of backwardness and inadequate representation still limit the State\'s power.',
      'Rules such as the "catch-up" rule and consequential seniority were made by courts. They are not constitutional principles beyond the power of amendment.'
    ] }
  ],
  principles: [
    'An amendment is tested by two questions. Does it widen a power so much that the limits on it disappear? Does it destroy the identity of the Constitution?',
    'Reservation in promotion is a power of the State, not a duty.',
    'Equality of opportunity is protected by limits such as the 50 per cent ceiling and the exclusion of the creamy layer.'
  ],
  legacy: [
    'The requirement of quantifiable data held up promotions in many States for years.',
    'In Jarnail Singh (2018), five judges held that the State need not collect data to show the backwardness of the Scheduled Castes and Scheduled Tribes. The other conditions remain.',
    'In B.K. Pavitra II (2019), the Court upheld a Karnataka law on consequential seniority, after the State collected data on representation and efficiency.'
  ],
  source: 'https://indiankanoon.org/doc/102852/'
},

'jarnail-singh-2018': {
  name: 'Jarnail Singh v. Lachhmi Narain Gupta',
  full: 'Jarnail Singh and Others v. Lachhmi Narain Gupta and Others',
  decided: '26 September 2018',
  citation: '(2018) 10 SCC 396',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Reservation in promotion', 'Creamy layer', 'Article 16(4A)'],
  judges: 'Dipak Misra CJI, Kurian Joseph, R.F. Nariman, S.K. Kaul and Indu Malhotra',
  summary: 'M. Nagaraj need not go to a larger bench. But its rule that States must prove the backwardness of the Scheduled Castes and Scheduled Tribes with data was wrong. The creamy layer principle can apply to them.',
  question: [
    'Should M. Nagaraj (2006) be reconsidered by a bench of seven judges?',
    'Must a State collect quantifiable data to show the backwardness of the Scheduled Castes and Scheduled Tribes before giving them reservation in promotion?',
    'Does the creamy layer principle apply to the Scheduled Castes and Scheduled Tribes?'
  ],
  facts: [
    'After M. Nagaraj (2006), a State had to show quantifiable data on backwardness, inadequate representation and efficiency before giving reservation in promotion.',
    'Several State schemes of reservation in promotion were struck down for lack of such data.',
    'The Union Government and several States argued that Nagaraj conflicted with Indra Sawhney (1992). Indra Sawhney had treated the Scheduled Castes and Scheduled Tribes as backward because they are listed under Articles 341 and 342.',
    'The question whether Nagaraj should be reconsidered came before five judges.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Justice R.F. Nariman', points: [
      'Nagaraj does not need to be referred to a larger bench.',
      'The part of Nagaraj that requires the State to collect quantifiable data on the backwardness of the Scheduled Castes and Scheduled Tribes is contrary to Indra Sawhney. It is invalid to that extent.',
      'The creamy layer principle can be applied to the Scheduled Castes and Scheduled Tribes. This does not change the Presidential lists under Articles 341 and 342.',
      'The creamy layer principle comes from Articles 14 and 16(1). If the better-off members of a class take all the benefits, the rest of the class stays behind.',
      'The other conditions in Nagaraj remain. The State must still show inadequate representation and keep administrative efficiency in mind.'
    ] }
  ],
  principles: [
    'The Scheduled Castes and Scheduled Tribes do not have to prove their backwardness again. Their inclusion in the Presidential lists shows it.',
    'Reservation is meant to help the whole class move forward. Its benefits should not be taken only by its better-off members.'
  ],
  legacy: [
    'In January 2022, in a later judgment in the same case, the Court declined to lay down a yardstick for inadequate representation. It left that to the States, to be judged cadre by cadre.',
    'In State of Punjab v. Davinder Singh (2024), a seven-judge bench held that States can sub-classify the Scheduled Castes and Scheduled Tribes for reservation.'
  ],
  source: 'https://indiankanoon.org/doc/190772988/'
},

'appa-balu-ingale-1993': {
  name: 'State of Karnataka v. Appa Balu Ingale',
  full: 'State of Karnataka v. Appa Balu Ingale and Others',
  decided: '1 December 1992',
  year: 1992,
  citation: 'AIR 1993 SC 1126',
  bench: 2,
  result: 'Unanimous, 2:0',
  tags: ['Article 17', 'Untouchability', 'Protection of Civil Rights Act'],
  judges: 'Kuldip Singh and K. Ramaswamy',
  summary: 'Men who stopped Dalits from drawing water from a new borewell because they were "untouchables" were guilty under the Protection of Civil Rights Act. Article 17 binds private persons, not only the State.',
  question: [
    'Were the accused guilty of enforcing untouchability under the Protection of Civil Rights Act, 1955?',
    'How far do Article 17 and the Act reach the conduct of private persons?'
  ],
  facts: [
    'A new borewell had been dug in a village in Karnataka.',
    'The accused stopped the complainants, who were Dalits, from drawing water from it. They said the complainants were untouchables and had a separate well of their own, and they threatened them.',
    'The trial court convicted five accused under Section 4 of the Protection of Civil Rights Act, 1955. Each was sentenced to one month\'s simple imprisonment and a fine of Rs. 100.',
    'The Sessions Court at Belgaum upheld the conviction of three of them and acquitted two. The Karnataka High Court then acquitted all of them. The State appealed.'
  ],
  held: [
    { kind: 'unanimous', label: 'Judgment by Justice Kuldip Singh', points: [
      'The evidence of four eyewitnesses proved the offence beyond reasonable doubt. The High Court was wrong to reject it for small differences in their accounts.',
      'The convictions were restored. Appa Balu Ingale had died, so the appeal against him came to an end. The two others were sentenced to one month\'s simple imprisonment and a fine of Rs. 100 each.'
    ] },
    { kind: 'concurring', label: 'Concurring opinion (Justice K. Ramaswamy)', points: [
      '"Untouchability" in Article 17 cannot be read literally. It means the practices that grew out of the caste system and treat certain people as polluting because of their birth.',
      'Article 17, read with Article 15(2), protects a person against such conduct by private persons, not only by the State.',
      'Courts must read laws against untouchability in a way that achieves their social purpose.'
    ] }
  ],
  principles: [
    'Article 17 abolishes untouchability in every form. It applies to private persons as well as to the State.',
    'Laws against social evils such as untouchability must be read to serve their purpose, not narrowly.'
  ],
  legacy: [
    'The case is often cited for the rule that Article 17 reaches private conduct.',
    'In Sukanya Shantha v. Union of India (2024), the Court relied on Article 17, among other provisions, to strike down caste-based division of work in prison manuals.'
  ],
  source: 'https://indiankanoon.org/doc/514077/'
}

});
