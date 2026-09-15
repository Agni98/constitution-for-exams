/* Landmark judgments, rewritten in full. Batch 7: Article 21.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. Each entry was checked against the full text
   of the judgment on Indian Kanoon: the date, the bench, the split, who wrote
   each opinion, the facts, the operative holding and any directions. The
   corrections to the short summaries that came out of the check: D.K. Basu
   was decided on 18 December 1996, not in 1997. The Oleum Gas Leak case was
   decided on 20 December 1986, not in 1987. In Maneka Gandhi the impounding
   order was not quashed: the petition was disposed of on the Attorney
   General's statement that Maneka Gandhi would be heard. Where the fetched
   text did not make a judge's position clear (Justice Mahajan in A.K. Gopalan,
   Justice Kailasam in Maneka Gandhi), the entry does not describe it.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'ak-gopalan-1950': {
  name: 'A.K. Gopalan v. State of Madras',
  aka: 'The preventive detention case',
  decided: '19 May 1950',
  citation: 'AIR 1950 SC 27, 1950 SCR 88',
  bench: 6,
  result: 'Detention upheld by majority',
  tags: ['Article 21', 'Preventive detention', 'Procedure established by law'],
  judges: 'H.J. Kania CJI, S. Fazl Ali, M. Patanjali Sastri, M.C. Mahajan, B.K. Mukherjea and S.R. Das',
  summary: 'Any procedure laid down by a valid law satisfies Article 21. The Preventive Detention Act, 1950 was upheld, except the section that stopped the grounds of detention being shown to a court.',
  question: [
    'Does "procedure established by law" in Article 21 mean any procedure laid down by an enacted law, or a fair procedure?',
    'Must a law of preventive detention also satisfy Article 19?',
    'Was the Preventive Detention Act, 1950 valid?'
  ],
  facts: [
    'A.K. Gopalan, a communist leader, had been in detention since December 1947. Earlier orders against him had been set aside.',
    'On 1 March 1950 Gopalan was served with a new detention order under Section 3(1) of the Preventive Detention Act, 1950.',
    'Gopalan filed a petition for habeas corpus under Article 32. The petition argued that the Act violated Articles 13, 19, 21 and 22.'
  ],
  held: [
    { kind: 'majority', label: 'Majority, including Chief Justice Kania and Justices Patanjali Sastri, Mukherjea and Das, in separate opinions', points: [
      '"Procedure established by law" means procedure laid down by a law made by the legislature. It does not bring in natural justice or the American idea of "due process".',
      'Article 19 does not apply to a law of preventive detention. Personal liberty is dealt with by Articles 21 and 22.',
      'Where Article 22 lays down a procedure for preventive detention, that procedure must be followed.',
      'Section 14 of the Act, which stopped the grounds of detention being disclosed to a court, was void. It could be separated from the rest of the Act.',
      'The rest of the Act, and Gopalan\'s detention, were upheld.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice S. Fazl Ali)', points: [
      'Preventive detention takes away the right to move freely under Article 19(1)(d). So the law must also be a reasonable restriction under Article 19(5).',
      '"Procedure established by law" must include the basic principles of natural justice: notice, a hearing, an impartial body and an orderly procedure.'
    ] }
  ],
  principles: [
    'In 1950 the Court read Article 21 narrowly. A procedure laid down by a valid law was enough, whether or not it was fair.',
    'The fundamental rights were read as separate compartments. A law that took away personal liberty was tested only under Articles 21 and 22.'
  ],
  legacy: [
    'In R.C. Cooper (1970), the Court rejected the idea that fundamental rights are separate compartments.',
    'In Maneka Gandhi (1978), the Court held that a procedure under Article 21 must be fair, just and reasonable, and that Articles 14, 19 and 21 must be read together. Gopalan\'s approach was rejected.'
  ],
  source: 'https://indiankanoon.org/doc/1857950/'
},

'maneka-gandhi-1978': {
  name: 'Maneka Gandhi v. Union of India',
  full: 'Mrs. Maneka Gandhi v. Union of India and Another',
  aka: 'The passport case',
  decided: '25 January 1978',
  citation: '(1978) 1 SCC 248, AIR 1978 SC 597',
  bench: 7,
  result: 'Disposed of, with separate opinions',
  tags: ['Article 21', 'Fair procedure', 'Articles 14, 19 and 21'],
  judges: 'M.H. Beg CJI, Y.V. Chandrachud, V.R. Krishna Iyer, P.N. Bhagwati, N.L. Untwalia, S. Murtaza Fazal Ali and P.S. Kailasam',
  summary: 'A procedure that takes away personal liberty must be right, just and fair, not arbitrary. Articles 14, 19 and 21 must be read together, and the right to go abroad is part of personal liberty.',
  question: [
    'Is the right to travel abroad part of "personal liberty" under Article 21?',
    'Is any procedure laid down by law enough under Article 21, or must the procedure be fair?',
    'Must a law that takes away personal liberty also meet the tests of Articles 14 and 19?',
    'Could a passport be impounded without giving the holder a hearing or reasons?'
  ],
  facts: [
    'Maneka Gandhi was given a passport on 1 June 1976.',
    'By a letter dated 2 July 1977, the Regional Passport Officer, Delhi impounded it under Section 10(3)(c) of the Passports Act, 1967 "in public interest".',
    'She asked for the reasons. On 6 July 1977 the Ministry of External Affairs refused to give them, saying this was in the interest of the general public.',
    'She challenged the order under Article 32 as violating Articles 14, 19 and 21.'
  ],
  held: [
    { kind: 'majority', label: 'Leading opinion by Justice P.N. Bhagwati, for himself and Justices Untwalia and Fazal Ali, with Chief Justice Beg and Justices Chandrachud and Krishna Iyer concurring, and a separate opinion by Justice P.S. Kailasam', points: [
      'Personal liberty under Article 21 includes the right to go abroad.',
      'The procedure for taking away personal liberty must be "right and just and fair and not arbitrary, fanciful or oppressive".',
      'Articles 14, 19 and 21 are not separate compartments. A law that takes away personal liberty must also meet the tests of Articles 14 and 19. The view taken in A.K. Gopalan was rejected.',
      'The right to be heard is implied in Section 10(3)(c) of the Passports Act, even though the Act does not say so.',
      'Whether State action violates Article 19(1)(a) depends on its direct and inevitable effect on that right.',
      'The Attorney General said the Government would give her a hearing on the impounding. On that basis the petition was disposed of, and the order was not quashed.'
    ] }
  ],
  principles: [
    'Procedure under Article 21 must be fair, just and reasonable.',
    'Articles 14, 19 and 21 are read together. This is often called the "golden triangle".',
    'Natural justice, such as the right to be heard, can be read into a law that is silent on it.'
  ],
  legacy: [
    'Almost every later widening of Article 21 builds on this judgment, including the rights to speedy trial, legal aid, livelihood, a clean environment and privacy.'
  ],
  source: 'https://indiankanoon.org/doc/1766147/'
},

'hussainara-khatoon-1979': {
  name: 'Hussainara Khatoon v. Home Secretary, State of Bihar',
  full: 'Hussainara Khatoon and Others v. Home Secretary, State of Bihar, Patna',
  aka: 'The undertrial prisoners case',
  decided: '9 March 1979',
  citation: '(1980) 1 SCC 98, AIR 1979 SC 1369',
  bench: 2,
  result: 'Directions issued',
  tags: ['Article 21', 'Speedy trial', 'Legal aid'],
  judges: 'P.N. Bhagwati and D.A. Desai',
  summary: 'Speedy trial is part of the right to life and personal liberty under Article 21. The State must provide free legal aid, and it cannot plead lack of money to deny a speedy trial.',
  question: [
    'Does Article 21 give an accused person the right to a speedy trial?',
    'What must the State do for undertrial prisoners who have been in jail for years without trial?'
  ],
  facts: [
    'Newspaper reports showed that thousands of undertrial prisoners were in the jails of Bihar. Many had been there for years without their trials beginning.',
    'Some had been in jail for longer than the maximum sentence for the offence they were charged with.',
    'A petition for habeas corpus was filed in the Supreme Court on their behalf. The Court passed orders on 12 February and 26 February 1979, and gave this judgment on 9 March 1979.'
  ],
  held: [
    { kind: 'unanimous', label: 'Judgment by Justice P.N. Bhagwati, for himself and Justice D.A. Desai', points: [
      'Speedy trial is an essential part of the reasonable, fair and just procedure guaranteed by Article 21.',
      'Free legal services for the poor are an essential part of a reasonable, fair and just procedure. Article 39A points the same way.',
      'The State cannot deny the right to a speedy trial on the ground that it does not have enough money.',
      'Undertrial prisoners who had been in jail longer than the maximum sentence for their offence were to be released.',
      'The State was to provide lawyers at its own cost to eligible undertrials for their bail applications. It was also to report the details of all undertrials and the reasons for the delays.'
    ] }
  ],
  principles: [
    'The right to a speedy trial is a fundamental right under Article 21.',
    'Free legal aid for those who cannot afford a lawyer is part of a fair procedure.'
  ],
  legacy: [
    'It was one of the earliest public interest litigations in the Supreme Court, and many undertrial prisoners in Bihar were released.',
    'In 1987 Parliament passed the Legal Services Authorities Act to provide free legal aid.',
    'Section 436A, added to the Code of Criminal Procedure in 2005, lets an undertrial who has spent half the maximum sentence in jail be released on bail.'
  ],
  source: 'https://indiankanoon.org/doc/1373215/'
},

'olga-tellis-1985': {
  name: 'Olga Tellis v. Bombay Municipal Corporation',
  full: 'Olga Tellis and Others v. Bombay Municipal Corporation and Others',
  aka: 'The pavement dwellers case',
  decided: '10 July 1985',
  citation: '(1985) 3 SCC 545, AIR 1986 SC 180',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 21', 'Right to livelihood', 'Evictions'],
  judges: 'Y.V. Chandrachud CJI, S. Murtaza Fazal Ali, V.D. Tulzapurkar, O. Chinnappa Reddy and A. Varadarajan',
  summary: 'The right to life includes the right to livelihood. Pavement dwellers could be removed under the law, but only by a fair procedure, and the Court gave directions for their resettlement.',
  question: [
    'Can a person give up a fundamental right and lose the power to claim it later?',
    'Does the right to life under Article 21 include the right to livelihood?',
    'Is Section 314 of the Bombay Municipal Corporation Act, 1888, which allows removal of encroachments without notice, valid?'
  ],
  facts: [
    'In July 1981 the Chief Minister of Maharashtra announced that pavement dwellers in Bombay would be evicted and sent to their places of origin or outside Bombay.',
    'Demolitions began on 23 July 1981 under Section 314 of the Bombay Municipal Corporation Act, 1888, which allows removal of encroachments without notice.',
    'Many pavement and slum dwellers lived close to where they worked.',
    'Journalists Olga Tellis and Praful Bidwai, pavement dwellers, the People\'s Union for Civil Liberties and others filed petitions under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Chief Justice Y.V. Chandrachud', points: [
      '"There can be no estoppel against the Constitution." A person cannot give up a fundamental right.',
      'The right to life includes the right to livelihood, because no one can live without the means of living.',
      'Section 314 is valid. It only enables removal without notice. That power must be used reasonably, and only in exceptional cases.',
      'Pavement dwellers are technically trespassers, but they live there out of economic need, not to commit an offence.',
      'No evictions were to take place until 31 October 1985. Pavement dwellers counted in the 1976 census were to get alternative sites. Slums that had existed for 20 years or more were not to be removed unless the land was needed for a public purpose.'
    ] }
  ],
  principles: [
    'The right to livelihood is part of the right to life under Article 21.',
    'Fundamental rights cannot be waived.',
    'Even a lawful eviction must follow a fair procedure.'
  ],
  legacy: [
    'Later cases on slum clearance, street vending and rehabilitation build on the right to livelihood recognised here.',
    'In Sodan Singh v. New Delhi Municipal Committee (1989), the Court held that street vending is a trade protected by Article 19(1)(g), subject to reasonable regulation.'
  ],
  source: 'https://indiankanoon.org/doc/709776/'
},

'vishaka-1997': {
  name: 'Vishaka v. State of Rajasthan',
  full: 'Vishaka and Others v. State of Rajasthan and Others',
  aka: 'The workplace sexual harassment case',
  decided: '13 August 1997',
  citation: '(1997) 6 SCC 241, AIR 1997 SC 3011',
  bench: 3,
  result: 'Unanimous, 3:0',
  tags: ['Article 21', 'Gender equality', 'International law'],
  judges: 'J.S. Verma CJI, Sujata V. Manohar and B.N. Kirpal',
  summary: 'Sexual harassment at work violates Articles 14, 15, 19(1)(g) and 21. With no law on the subject, the Court laid down binding guidelines, drawing on international conventions.',
  question: [
    'Does sexual harassment of women at the workplace violate their fundamental rights?',
    'In the absence of a law, can the Court lay down binding rules, using international conventions that India has ratified?'
  ],
  facts: [
    'A social worker in a village in Rajasthan was allegedly gang-raped. The attack was linked to her work against child marriage.',
    'Social activists and non-governmental organisations filed a writ petition as a class action. They sought to prevent sexual harassment of working women at all workplaces.',
    'At the time there was no law in India on sexual harassment at work.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (3:0), judgment by Chief Justice J.S. Verma', points: [
      'Sexual harassment at work violates gender equality under Articles 14 and 15, the right to practise any profession under Article 19(1)(g), and the right to life with dignity under Article 21.',
      'Where there is no law in India, international conventions such as CEDAW can be read into the fundamental rights if they are consistent with them. Articles 51(c) and 253 support this.',
      'Sexual harassment includes unwelcome physical contact and advances, a demand or request for sexual favours, sexually coloured remarks, and showing pornography.',
      'Every employer must prevent sexual harassment and set up a complaints mechanism. The complaints committee must be headed by a woman, at least half its members must be women, and it must include a third party such as an NGO.',
      'These guidelines are binding and enforceable in law until Parliament makes a law.'
    ] }
  ],
  principles: [
    'Where the law is silent, courts can use international conventions to give content to fundamental rights.',
    'The right to work with dignity is part of Articles 19(1)(g) and 21.'
  ],
  legacy: [
    'In Apparel Export Promotion Council v. A.K. Chopra (1999), the Court applied the Vishaka guidelines.',
    'Parliament passed the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. It replaced the guidelines.'
  ],
  source: 'https://indiankanoon.org/doc/1031794/'
},

'common-cause-2018': {
  name: 'Common Cause v. Union of India',
  full: 'Common Cause (A Registered Society) v. Union of India and Another',
  aka: 'The living will case',
  decided: '9 March 2018',
  citation: '(2018) 5 SCC 1',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 21', 'Right to die with dignity', 'Living wills'],
  judges: 'Dipak Misra CJI, A.K. Sikri, A.M. Khanwilkar, D.Y. Chandrachud and Ashok Bhushan',
  summary: 'The right to die with dignity is part of Article 21. Passive euthanasia and living wills are lawful, subject to safeguards. Active euthanasia is not allowed.',
  question: [
    'Does the right to live with dignity under Article 21 include the right to die with dignity?',
    'Is passive euthanasia lawful? Are advance medical directives, or living wills, valid?'
  ],
  facts: [
    'Common Cause, a registered society, filed a writ petition in 2005. It asked the Court to declare the right to die with dignity a fundamental right.',
    'In Aruna Shanbaug (2011), a two-judge bench had allowed passive euthanasia under strict conditions. It relied on its reading of Gian Kaur (1996).',
    'In 2014 a three-judge bench doubted that reading and referred the question to five judges.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), in four opinions: Chief Justice Misra for himself and Justice Khanwilkar, and Justices Sikri, Chandrachud and Bhushan', points: [
      'The right to live with dignity under Article 21 includes the right to die with dignity.',
      'Passive euthanasia, which means withdrawing or withholding life-sustaining treatment, is lawful, subject to safeguards.',
      'An adult of sound mind can make an advance medical directive, or living will, refusing treatment in the future.',
      'Gian Kaur did not hold that passive euthanasia could be allowed only by legislation. Aruna Shanbaug had misread it on this point.',
      'Active euthanasia is not permitted.',
      'The Court laid down guidelines on making and carrying out living wills. They apply until Parliament makes a law.'
    ] }
  ],
  principles: [
    'Dignity at the end of life is part of the right to life.',
    'A competent adult can refuse medical treatment, including in advance.'
  ],
  legacy: [
    'In January 2023 the Court simplified its guidelines on living wills, which had proved hard to follow in practice.'
  ],
  source: 'https://indiankanoon.org/doc/184449972/'
},

'navtej-singh-johar-2018': {
  name: 'Navtej Singh Johar v. Union of India',
  aka: 'The Section 377 case',
  decided: '6 September 2018',
  citation: '(2018) 10 SCC 1',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 21', 'Section 377 IPC', 'Sexual orientation'],
  judges: 'Dipak Misra CJI, A.M. Khanwilkar, R.F. Nariman, D.Y. Chandrachud and Indu Malhotra',
  summary: 'Section 377 of the Indian Penal Code was struck down so far as it made consensual sexual acts between adults a crime. Suresh Kumar Koushal (2013) was overruled.',
  question: [
    'Is Section 377 of the Indian Penal Code valid, so far as it makes consensual sexual acts between adults of the same sex a crime?',
    'Was Suresh Kumar Koushal (2013), which upheld Section 377, correctly decided?'
  ],
  facts: [
    'Section 377 punished "carnal intercourse against the order of nature".',
    'In Naz Foundation (2009), the Delhi High Court held it unconstitutional as applied to consensual acts between adults.',
    'In Suresh Kumar Koushal (2013), the Supreme Court reversed that decision and upheld Section 377.',
    'Navtej Singh Johar, a dancer, and others filed a writ petition in 2016. In January 2018 a three-judge bench referred the question of reconsidering Koushal to a larger bench.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), in four opinions: Chief Justice Misra for himself and Justice Khanwilkar, and Justices Nariman, Chandrachud and Indu Malhotra', points: [
      'Section 377 is unconstitutional so far as it makes consensual sexual conduct between adults a crime. It violates Articles 14, 15, 19(1)(a) and 21.',
      'Section 377 still applies to non-consensual acts, acts involving minors, and bestiality.',
      'Sexual orientation is part of a person\'s identity, dignity and privacy. The judgment relied on Puttaswamy (2017).',
      'Constitutional morality, not popular or social morality, guides the Court. "The morality that public perceives, the Constitution may not conceive of."',
      'Suresh Kumar Koushal is overruled.'
    ] }
  ],
  principles: [
    'The State cannot make a person\'s sexual orientation or consensual private conduct a crime.',
    'Fundamental rights do not depend on the approval of the majority.'
  ],
  legacy: [
    'In Joseph Shine (2018), decided three weeks later, the Court struck down the offence of adultery, relying on the same ideas of dignity and autonomy.',
    'In Supriyo Chakraborty v. Union of India (2023), the Court declined to recognise same-sex marriage and left the question to Parliament.'
  ],
  source: 'https://indiankanoon.org/doc/168671544/'
},

'dk-basu-1997': {
  name: 'D.K. Basu v. State of West Bengal',
  full: 'Shri D.K. Basu and Ashok K. Johri v. State of West Bengal and State of Uttar Pradesh',
  aka: 'The custodial violence case',
  decided: '18 December 1996',
  year: 1996,
  citation: '(1997) 1 SCC 416, AIR 1997 SC 610',
  bench: 2,
  result: 'Unanimous, 2:0',
  tags: ['Article 21', 'Custodial violence', 'Arrest'],
  judges: 'Kuldip Singh and A.S. Anand',
  summary: 'Torture in custody violates Article 21, and the State must pay compensation for it. The Court laid down eleven requirements that the police must follow at every arrest and detention.',
  question: [
    'What safeguards must the police follow when they arrest and detain a person, to prevent custodial violence?',
    'Is the State liable to pay compensation for deaths and torture in custody?'
  ],
  facts: [
    'On 26 August 1986 D.K. Basu, Executive Chairman of Legal Aid Services, West Bengal, wrote to the Chief Justice of India about newspaper reports of deaths in police lock-ups. The letter was treated as a writ petition.',
    'On 29 July 1987 Ashok K. Johri wrote to the Chief Justice about the death of Mahesh Bihari in police custody at Pilkhana, Aligarh. The two matters were heard together.',
    'The Court issued notice to all State Governments and to the Law Commission of India.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (2:0), judgment by Justice A.S. Anand', points: [
      'Torture and cruel, inhuman or degrading treatment in custody violate Article 21. Convicts, undertrials and other prisoners do not lose this right.',
      'The State is liable to pay compensation for such violations as a public law remedy. Sovereign immunity is no defence.',
      'Police officers who arrest or question a person must wear clear name tags. An arrest memo must be prepared, attested by a witness and countersigned by the arrested person.',
      'A friend or relative must be told of the arrest and the place of custody, and the arrested person must be told of this right. An entry must be made in the diary.',
      'The arrested person must be examined for injuries at the time of arrest, on request. A doctor must examine the person every 48 hours in custody.',
      'The arrested person may meet a lawyer during interrogation, though not throughout it. Copies of the arrest documents go to the magistrate, and a police control room must display the information.',
      'Failure to follow these requirements leads to departmental action and can be punished as contempt of court.'
    ] }
  ],
  principles: [
    'Arrest and detention must follow basic safeguards that protect dignity and prevent torture.',
    'Compensation is a public law remedy for the violation of fundamental rights.'
  ],
  legacy: [
    'Many of these requirements were written into the Code of Criminal Procedure by an amendment in 2008.'
  ],
  source: 'https://indiankanoon.org/doc/501198/'
},

'mc-mehta-oleum-gas-leak-1987': {
  name: 'M.C. Mehta v. Union of India',
  full: 'M.C. Mehta and Another v. Union of India and Others',
  aka: 'The Oleum Gas Leak case',
  decided: '20 December 1986',
  year: 1986,
  citation: '(1987) 1 SCC 395, AIR 1987 SC 1086',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 21', 'Absolute liability', 'Environment'],
  judges: 'P.N. Bhagwati CJI, Ranganath Misra, G.L. Oza, M.M. Dutt and K.N. Singh',
  summary: 'An enterprise engaged in a hazardous activity is absolutely liable for any harm it causes, with no exceptions. Compensation must match the size and capacity of the enterprise.',
  question: [
    'Can the Supreme Court award compensation under Article 32 for the violation of fundamental rights?',
    'What is the liability of an enterprise engaged in a hazardous industry when an accident harms people?',
    'Is a private company such as Shriram "the State" under Article 12?'
  ],
  facts: [
    'Shriram Foods and Fertiliser Industries ran a plant in a crowded part of Delhi.',
    'Oleum gas leaked from the plant on 4 and 6 December 1985. Workers and people nearby were affected, and an advocate practising in the Tis Hazari courts died.',
    'M.C. Mehta had already filed a petition about the plant. The Delhi Legal Aid and Advice Board and the Delhi Bar Association applied for compensation for the victims.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Chief Justice P.N. Bhagwati', points: [
      'The power under Article 32 is also remedial. In cases of gross and large-scale violation of fundamental rights, the Court can award compensation.',
      'An enterprise engaged in a hazardous or inherently dangerous activity is absolutely liable to compensate everyone harmed by an accident in that activity, even if it took all reasonable care.',
      'This liability is not subject to any of the exceptions allowed under the rule of strict liability in Rylands v. Fletcher.',
      'The compensation must be related to the size and capacity of the enterprise, so that it deters others.',
      'The question whether Shriram is "the State" under Article 12 was left open.',
      'The Delhi Legal Aid and Advice Board was directed to file compensation claims for the victims within two months.'
    ] }
  ],
  principles: [
    'Absolute liability: an enterprise that carries on a hazardous activity bears the full cost of the harm it causes.',
    'Larger and richer enterprises must pay larger compensation.'
  ],
  legacy: [
    'Parliament passed the Public Liability Insurance Act, 1991, which requires insurance for hazardous activities.',
    'In Indian Council for Enviro-Legal Action v. Union of India (1996), the Court applied absolute liability and the polluter pays principle.'
  ],
  source: 'https://indiankanoon.org/doc/1486949/'
}

});
