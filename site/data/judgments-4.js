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
  summary: 'A Madras order that shared out college seats by religion and caste broke Article 29(2). The Court also held that the Directive Principles cannot override the fundamental rights.',
  background: [
    'Article 29(2) says that no citizen may be refused admission to a college run or aided by the State only because of religion, race, caste or language.',
    'The Directive Principles in Part IV set out goals for the State. Article 46 asks the State to promote the education and economic interests of the weaker sections. But under Article 37, no court can enforce a Directive Principle.',
    'For jobs, Article 16(4) clearly allows reservation for backward classes. In 1951 the Constitution had no such clause for education.',
    'Madras had used orders that shared out seats among communities since the 1920s. The order in force in 1951 was known as the Communal G.O., short for Government Order.'
  ],
  question: [
    'The Communal G.O. divided seats in State medical and engineering colleges among religions and castes. Did the order break Article 29(2)?',
    'Could Article 46, the Directive Principle on helping the weaker sections, save the order?'
  ],
  facts: [
    'For every 14 seats, the order gave 6 to non-Brahmin Hindus, 2 to backward Hindus, 2 to Brahmins, 2 to Harijans, 1 to Anglo-Indians and Indian Christians, and 1 to Muslims.',
    'Champakam Dorairajan, a Brahmin, did not apply to the medical college, because she said the order meant she would not be admitted. Another student, Srinivasan, applied to the engineering college with high marks and was refused.',
    'The Madras High Court allowed their petitions, and the State of Madras appealed.'
  ],
  held: [
    { kind: 'unanimous', label: 'All seven judges agreed (7:0). Justice S.R. Das wrote the judgment', points: [
      'The Communal G.O. refuses admission on grounds only of religion, race or caste. So the order breaks Article 29(2) and is void under Article 13.',
      'The Court said: "The directive principles of State policy have to conform to and run as subsidiary to the Chapter of Fundamental Rights." In plain words, the Directive Principles must give way to the fundamental rights.',
      'Article 16(4) allows reservation for backward classes in jobs. Article 29 has no such clause, and the Court treated that difference as deliberate.',
      'The appeals were dismissed.'
    ] }
  ],
  principles: [
    'A fundamental right gives way only to an exception written into the Constitution. A policy goal, however worthy, cannot create one.',
    'So the Constitution of 1951 allowed reservation in jobs but not in education, and Parliament closed that gap the same year.'
  ],
  legacy: [
    'Parliament answered with the First Amendment in 1951. The amendment added Article 15(4), which allows special provisions for socially and educationally backward classes and for the Scheduled Castes and Scheduled Tribes.',
    'The view that the Directive Principles rank lower was later softened. In Minerva Mills (1980), the Court held that the balance between the fundamental rights and the Directive Principles is part of the basic structure.'
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
  summary: 'The amendments that allow reservation in promotion, with the seniority that comes with it, are valid. But a State that uses them must show, with data, backwardness and too little representation, and must keep the administration efficient.',
  background: [
    'Article 16(4) lets the State reserve government jobs for backward classes that are not adequately represented in its services.',
    'In Indra Sawhney (1992), the Court held that Article 16(4) covers appointments but not promotions. Under Indra Sawhney (1992), reservations should not normally exceed 50 per cent, and the better-off members of a backward class, called the creamy layer, are left out of the benefit.',
    'Under the catch-up rule, made by the courts, a general candidate promoted after a reserved candidate regained seniority on reaching the same grade. Consequential seniority does the opposite: the reserved candidate keeps the seniority that came with the earlier promotion.',
    'Article 335 says that the claims of the Scheduled Castes and Scheduled Tribes must be weighed with the need for an efficient administration.',
    'The basic structure is the set of core features that Parliament cannot destroy, even by amending the Constitution.'
  ],
  question: [
    'The 77th, 81st, 82nd and 85th Amendments allowed reservation in promotion for the Scheduled Castes and Scheduled Tribes. Did they destroy the basic structure?'
  ],
  facts: [
    'The 77th Amendment (1995) added Article 16(4A). The new clause allowed reservation in promotion for the Scheduled Castes and Scheduled Tribes, undoing Indra Sawhney on that point.',
    'The 81st Amendment (2000) added Article 16(4B). Reserved posts left unfilled in one year can be carried forward as a separate group, outside the 50 per cent limit for the next year.',
    'The 82nd Amendment (2000) added a proviso to Article 335 that allows lower qualifying marks. The 85th Amendment (2001) added "consequential seniority" to Article 16(4A).',
    'M. Nagaraj and others challenged these amendments under Article 32. They argued that the amendments destroyed equality, which is part of the basic structure.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Justice S.H. Kapadia wrote the judgment', points: [
      'The amendments are valid. They do not destroy the identity of the Constitution.',
      'Articles 16(4A) and 16(4B) only enable the State. No State is bound to give reservation in promotion.',
      'A State that chooses to give it must show quantifiable data on two things: the backwardness of the class, and its inadequate representation in the service. The State must also keep in mind the efficiency of administration under Article 335.',
      'The 50 per cent ceiling, the exclusion of the creamy layer, and the tests of backwardness and inadequate representation still limit the State\'s power.',
      'The catch-up rule and consequential seniority were made by courts. Neither is a constitutional principle that Parliament cannot change.'
    ] }
  ],
  principles: [
    'An amendment is tested by two questions. Does it widen a power so far that the limits on it disappear? Does it destroy the identity of the Constitution?',
    'So Parliament could allow reservation in promotion, but each State had to justify it with evidence before using it.'
  ],
  legacy: [
    'The demand for quantifiable data held up promotions in many States for years.',
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
  summary: 'M. Nagaraj did not need a larger bench. But its demand that States prove the backwardness of the Scheduled Castes and Scheduled Tribes with data was wrong. And the creamy layer rule can apply to them.',
  background: [
    'Article 16(4) lets the State reserve government jobs for backward classes that are not adequately represented in its services.',
    'Under Indra Sawhney (1992), reservations should not normally exceed 50 per cent, and the better-off members of a backward class, called the creamy layer, are left out of the benefit.',
    'Under Articles 341 and 342, the President lists the Scheduled Castes and the Scheduled Tribes for each State. Indra Sawhney treated being on these lists as proof of backwardness.',
    'In M. Nagaraj (2006), the Court upheld reservation in promotion. But Nagaraj made each State show, with data, the backwardness of the class, its inadequate representation, and no harm to efficiency.'
  ],
  question: [
    'Should M. Nagaraj (2006) be sent to a bench of seven judges to be looked at again?',
    'Must a State collect data to prove the backwardness of the Scheduled Castes and Scheduled Tribes before giving them reservation in promotion?',
    'Does the creamy layer rule apply to the Scheduled Castes and Scheduled Tribes?'
  ],
  facts: [
    'After Nagaraj, several State schemes of reservation in promotion were struck down for lack of data.',
    'The Union Government and several States argued that Nagaraj clashed with Indra Sawhney (1992), which had treated the listed castes and tribes as backward already.',
    'The question whether to send Nagaraj to a larger bench came before five judges.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Justice R.F. Nariman wrote the judgment', points: [
      'Nagaraj does not need to go to a larger bench.',
      'But the part of Nagaraj that makes the State collect data on the backwardness of the Scheduled Castes and Scheduled Tribes goes against Indra Sawhney. To that extent, Nagaraj is wrong.',
      'The creamy layer rule can be applied to the Scheduled Castes and Scheduled Tribes. Doing so does not change the President\'s lists under Articles 341 and 342.',
      'The creamy layer rule comes from Articles 14 and 16(1). If the better-off members of a class take all the benefits, the rest of the class stays behind.',
      'The other conditions in Nagaraj remain. The State must still show inadequate representation and keep efficiency in mind.'
    ] }
  ],
  principles: [
    'The creamy layer rule comes from equality itself, not from any one scheme. So the rule can reach every group that gets reservation.',
    'So the judgment removed one hurdle for the States and added one limit. Backwardness needs no proof, but the creamy layer can be left out.'
  ],
  legacy: [
    'In January 2022, in a later judgment in the same case, the Court declined to fix a yardstick for inadequate representation. The Court left that to the States, to be judged cadre by cadre.',
    'In State of Punjab v. Davinder Singh (2024), seven judges held that States can divide the Scheduled Castes and Scheduled Tribes into sub-groups for reservation.'
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
  summary: 'Villagers who stopped Dalits from drawing water from a new borewell, calling them "untouchables", were guilty under the Protection of Civil Rights Act. Article 17 binds private persons, not only the State.',
  background: [
    'Article 17 abolishes untouchability and forbids its practice in any form. Enforcing any disability arising from untouchability is an offence punishable by law.',
    'Article 15(2) says that no citizen may be barred from public places, including wells, tanks and bathing places, on grounds such as caste.',
    'Parliament passed the Untouchability (Offences) Act in 1955. In 1976 the Act was renamed the Protection of Civil Rights Act and made stricter.'
  ],
  question: [
    'Were the accused guilty of enforcing untouchability under the Protection of Civil Rights Act, 1955?',
    'How far do Article 17 and the Act reach the conduct of private persons?'
  ],
  facts: [
    'A new borewell had been dug in a village in Karnataka.',
    'The accused stopped the complainants, who were Dalits, from drawing water from it. The accused said the complainants were untouchables with a separate well of their own, and threatened them.',
    'The trial court convicted five accused under Section 4 of the Act. Each was sentenced to one month\'s simple imprisonment and a fine of Rs. 100.',
    'The Sessions Court at Belgaum upheld the conviction of three of them and acquitted two. The Karnataka High Court then acquitted all of them, and the State appealed.'
  ],
  held: [
    { kind: 'unanimous', label: 'The judgment of the Court, by Justice Kuldip Singh', points: [
      'The evidence of four eyewitnesses proved the offence beyond reasonable doubt. The High Court was wrong to reject the evidence for small differences in their accounts.',
      'The convictions were restored. Appa Balu Ingale had died, so the appeal against him came to an end. The two others were sentenced to one month\'s simple imprisonment and a fine of Rs. 100 each.'
    ] },
    { kind: 'concurring', label: 'Justice K. Ramaswamy, in a separate opinion agreeing with the result', points: [
      '"Untouchability" in Article 17 cannot be read literally. The word means the practices that grew out of the caste system and treat some people as polluting because of their birth.',
      'Article 17, read with Article 15(2), protects a person against such conduct by private persons, not only by the State.',
      'Courts must read laws against untouchability in a way that achieves their social purpose.'
    ] }
  ],
  principles: [
    'Some fundamental rights bind private persons, because the text says so. Articles 15(2), 17, 23 and 24 are the clearest examples.',
    'So a villager who keeps a Dalit away from a public well commits a crime, even though no official is involved.'
  ],
  legacy: [
    'In Sukanya Shantha v. Union of India (2024), the Court relied on Article 17, among other provisions, to strike down caste-based division of work in prison manuals.'
  ],
  source: 'https://indiankanoon.org/doc/514077/'
}

});
