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
  summary: 'Any procedure set out in a valid law was enough to satisfy Article 21, whether or not it was fair. The Preventive Detention Act, 1950 was upheld, except the section that hid the reasons for detention from the courts.',
  background: [
    'Article 21 says that no person shall lose their life or personal liberty except by a "procedure established by law".',
    'The framers chose those words over the American phrase "due process of law". Due process lets judges ask whether a law itself is fair, not only whether it was followed.',
    'Preventive detention means holding a person without trial, to stop them from doing something harmful in future. Article 22 allows it, with some safeguards, such as telling the person the grounds of detention.',
    'Natural justice means the basic rules of a fair hearing. A person must be told the case against them and heard by an unbiased decision maker.'
  ],
  question: [
    'Does "procedure established by law" in Article 21 mean any procedure laid down by a law, or a fair procedure?',
    'Must a law of preventive detention also pass the tests in Article 19, which protects freedoms such as free movement?',
    'Was the Preventive Detention Act, 1950 valid?'
  ],
  facts: [
    'A.K. Gopalan, a communist leader, had been held in detention since December 1947. Earlier orders against him had been set aside.',
    'On 1 March 1950 he was served with a new detention order under Section 3(1) of the Preventive Detention Act, 1950.',
    'Gopalan asked the Supreme Court for habeas corpus under Article 32. He argued that the Act broke Articles 13, 19, 21 and 22.'
  ],
  held: [
    { kind: 'majority', label: 'The majority, including Chief Justice Kania and Justices Patanjali Sastri, Mukherjea and Das, in separate opinions', points: [
      '"Procedure established by law" means a procedure laid down by a law that the legislature has made. The phrase does not bring in natural justice or the American idea of due process.',
      'Article 19 does not apply to a law of preventive detention. Personal liberty is dealt with by Articles 21 and 22 alone.',
      'Where Article 22 sets out a procedure for preventive detention, that procedure must be followed.',
      'Section 14 of the Act stopped the grounds of detention from being shown to a court. Section 14 was void, but it could be separated from the rest of the Act.',
      'The rest of the Act, and Gopalan\'s detention, were upheld.'
    ] },
    { kind: 'dissent', label: 'Justice S. Fazl Ali, in dissent', points: [
      'Preventive detention takes away the right to move freely under Article 19(1)(d). So the law must also be a reasonable limit under Article 19(5).',
      '"Procedure established by law" must include the basic rules of natural justice: notice, a hearing, an impartial body and an orderly procedure.'
    ] }
  ],
  principles: [
    'In 1950 the Court read Article 21 narrowly. A procedure laid down by a valid law was enough, fair or not.',
    'The fundamental rights were read as separate compartments. A law that took away personal liberty was tested only under Articles 21 and 22.',
    'So the State could detain a person by following any procedure that a law set out. Twenty-eight years later, Maneka Gandhi turned this round.'
  ],
  legacy: [
    'In R.C. Cooper (1970), the Court rejected the idea that the fundamental rights are separate compartments.',
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
  background: [
    'Article 21 says that no person shall lose their life or personal liberty except by a "procedure established by law".',
    'In A.K. Gopalan (1950), the Court held that any procedure laid down by a valid law satisfied Article 21, even an unfair one. The Court also treated each fundamental right as a separate compartment.',
    'In R.C. Cooper (1970), the Court had already rejected the idea of separate compartments, in a case about property.',
    'During the Emergency of 1975 to 1977, many people were detained without trial. After the Emergency, the courts looked again at how far the State could go in taking away liberty.'
  ],
  question: [
    'Is the right to travel abroad part of "personal liberty" under Article 21?',
    'Is any procedure laid down by law enough under Article 21, or must the procedure be fair?',
    'Must a law that takes away personal liberty also pass the tests in Articles 14 and 19?',
    'Could a passport be taken away without giving the holder a hearing or reasons?'
  ],
  facts: [
    'Maneka Gandhi, a journalist and the daughter-in-law of Indira Gandhi, was given a passport on 1 June 1976.',
    'By a letter dated 2 July 1977, the Regional Passport Officer, Delhi impounded the passport under Section 10(3)(c) of the Passports Act, 1967 "in public interest". To impound means to take and hold it.',
    'She asked for the reasons. On 6 July 1977 the Ministry of External Affairs refused to give them, saying that refusing was in the interest of the general public.',
    'She challenged the order under Article 32 as breaking Articles 14, 19 and 21.'
  ],
  held: [
    { kind: 'majority', label: 'The leading opinion by Justice P.N. Bhagwati, for himself and Justices Untwalia and Fazal Ali, with Chief Justice Beg and Justices Chandrachud and Krishna Iyer agreeing, and a separate opinion by Justice P.S. Kailasam', points: [
      'Personal liberty under Article 21 includes the right to go abroad.',
      'The procedure for taking away personal liberty must be "right and just and fair and not arbitrary, fanciful or oppressive".',
      'Articles 14, 19 and 21 are not separate compartments. A law that takes away personal liberty must also pass the tests in Articles 14 and 19. The view taken in A.K. Gopalan was rejected.',
      'The right to be heard is part of Section 10(3)(c) of the Passports Act, even though the Act does not say so.',
      'Whether State action breaks Article 19(1)(a) depends on its direct and inevitable effect on that right.',
      'The Attorney General told the Court that the government would give her a hearing on the impounding. On that basis the petition was disposed of, and the order was not quashed.'
    ] }
  ],
  principles: [
    'Procedure under Article 21 must be fair, just and reasonable.',
    'Articles 14, 19 and 21 are read together. The three are often called the "golden triangle".',
    'Natural justice, such as the right to be heard, can be read into a law that says nothing about it.',
    'So after 1978 the question is not only whether a law allows the State to take away liberty. The question is also whether the law and its procedure are fair.'
  ],
  legacy: [
    'Almost every later widening of Article 21 builds on this judgment, including the rights to a speedy trial, legal aid, livelihood, a clean environment and privacy.'
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
  summary: 'A speedy trial is part of the right to life and personal liberty under Article 21. The State must give free legal aid to those who cannot pay, and it cannot plead lack of money to deny a speedy trial.',
  background: [
    'Article 21 says that no person shall lose their life or personal liberty except by a "procedure established by law".',
    'In Maneka Gandhi (1978), the Court held that the procedure for taking away liberty must be fair, just and reasonable.',
    'An undertrial prisoner is a person held in jail while waiting for trial. An undertrial has not been convicted of anything. Bail is release from jail while the case goes on.',
    'Article 39A, a Directive Principle added in 1976, asks the State to provide free legal aid so that no one is denied justice because they are poor.',
    'In a public interest petition, a person or group can go to court on behalf of people who cannot go themselves, such as poor prisoners.'
  ],
  question: [
    'Does Article 21 give an accused person the right to a speedy trial?',
    'What must the State do for undertrial prisoners who have been in jail for years without trial?'
  ],
  facts: [
    'Newspaper reports showed that thousands of undertrial prisoners were in the jails of Bihar. Many had been there for years without their trials beginning.',
    'Some had been in jail longer than the maximum sentence for the offence they were charged with.',
    'A petition for habeas corpus was filed in the Supreme Court on their behalf. The Court passed orders on 12 February and 26 February 1979, and gave this judgment on 9 March 1979.'
  ],
  held: [
    { kind: 'unanimous', label: 'Justice P.N. Bhagwati, for himself and Justice D.A. Desai', points: [
      'A speedy trial is an essential part of the fair, just and reasonable procedure that Article 21 guarantees.',
      'Free legal services for the poor are also an essential part of a fair procedure. Article 39A points the same way.',
      'The State cannot deny a speedy trial on the ground that it does not have enough money.',
      'Undertrials who had been in jail longer than the maximum sentence for their offence were to be released.',
      'The State was to provide lawyers at its own cost to eligible undertrials for their bail applications. The State was also to report the details of all undertrials and the reasons for the delays.'
    ] }
  ],
  principles: [
    'The right to a speedy trial is a fundamental right under Article 21.',
    'Free legal aid for those who cannot afford a lawyer is part of a fair procedure.',
    'So a poor person cannot be left in jail for years simply because the system is slow. The delay itself breaks Article 21.'
  ],
  legacy: [
    'The case was one of the earliest public interest petitions in the Supreme Court, and many undertrial prisoners in Bihar were released.',
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
  summary: 'The right to life includes the right to livelihood. The city could remove pavement dwellers under the law, but only by a fair procedure, and the Court gave directions for their resettlement.',
  background: [
    'Article 21 says that no person shall lose their life or personal liberty except by a "procedure established by law".',
    'In Maneka Gandhi (1978), the Court held that the procedure for taking away a right under Article 21 must be fair, just and reasonable.',
    'Thousands of migrant workers in Bombay lived on pavements and in slums near the places where they worked, because they could not afford anything else.',
    'Estoppel is a rule that stops a person from going back on something they said earlier, if others relied on it.'
  ],
  question: [
    'Can a person give up a fundamental right and lose the power to claim it later?',
    'Does the right to life under Article 21 include the right to livelihood?',
    'Is Section 314 of the Bombay Municipal Corporation Act, 1888, which allows encroachments to be removed without notice, valid?'
  ],
  facts: [
    'In July 1981 the Chief Minister of Maharashtra announced that pavement dwellers in Bombay would be evicted and sent to their places of origin or outside Bombay.',
    'Demolitions began on 23 July 1981 under Section 314 of the Act.',
    'Journalists Olga Tellis and Praful Bidwai, pavement dwellers, the People\'s Union for Civil Liberties and others filed petitions under Article 32.',
    'The city argued that the pavement dwellers had earlier conceded in the High Court that they had no right to stay. So, the city said, they could not now claim one.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Chief Justice Y.V. Chandrachud wrote the judgment', points: [
      '"There can be no estoppel against the Constitution." A person cannot give up a fundamental right, so the earlier concession did not count.',
      'The right to life includes the right to livelihood, because no one can live without the means of living.',
      'Section 314 is valid. The section only allows removal without notice. The power must be used reasonably, and only in exceptional cases.',
      'Pavement dwellers are trespassers in law. But they live there out of economic need, not to commit an offence.',
      'No evictions were to take place until 31 October 1985. Pavement dwellers counted in the 1976 census were to get other sites. Slums that had existed for 20 years or more were not to be removed unless the land was needed for a public purpose.'
    ] }
  ],
  principles: [
    'The right to livelihood is part of the right to life under Article 21.',
    'Fundamental rights cannot be given up.',
    'Even a lawful eviction must follow a fair procedure.',
    'So the pavement dwellers had no right to stay on the pavement for ever. But the State could not throw them out without notice, a hearing and a thought for where they would go.'
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
  summary: 'Sexual harassment at work breaks Articles 14, 15, 19(1)(g) and 21. Because no law dealt with it, the Court laid down binding guidelines, drawing on international conventions.',
  background: [
    'In 1997 India had no law against sexual harassment at the workplace.',
    'CEDAW is the United Nations Convention on the Elimination of All Forms of Discrimination against Women. India ratified it in 1993.',
    'Article 51(c) asks the State to respect international law and treaties. Article 253 lets Parliament make laws to carry out treaties.',
    'In a class action, a petition is filed for a whole group of people, here all working women, and not only for the persons who file it.'
  ],
  question: [
    'Does sexual harassment of women at work break their fundamental rights?',
    'With no law in place, can the Court lay down binding rules, using international conventions that India has ratified?'
  ],
  facts: [
    'A social worker in a village in Rajasthan was allegedly gang-raped. The attack was linked to her work against child marriage.',
    'Social activists and non-governmental organisations filed a writ petition as a class action. They asked the Court to prevent sexual harassment of working women at all workplaces.'
  ],
  held: [
    { kind: 'unanimous', label: 'All three judges agreed (3:0). Chief Justice J.S. Verma wrote the judgment', points: [
      'Sexual harassment at work breaks gender equality under Articles 14 and 15, the right to practise any profession under Article 19(1)(g), and the right to life with dignity under Article 21.',
      'Where Indian law is silent, international conventions such as CEDAW can be read into the fundamental rights if they fit with them. Articles 51(c) and 253 support this.',
      'Sexual harassment includes unwelcome physical contact and advances, a demand or request for sexual favours, sexually coloured remarks, and showing pornography.',
      'Every employer must prevent sexual harassment and set up a way to handle complaints. The complaints committee must be headed by a woman, at least half its members must be women, and it must include an outside member, such as someone from an NGO.',
      'The guidelines are binding and enforceable in law until Parliament makes a law.'
    ] }
  ],
  principles: [
    'Where the law is silent, courts can use international conventions to fill in the content of fundamental rights.',
    'The right to work with dignity is part of Articles 19(1)(g) and 21.',
    'So the Court did not wait for Parliament. The Court wrote rules that bound every workplace until Parliament acted, sixteen years later.'
  ],
  legacy: [
    'In Apparel Export Promotion Council v. A.K. Chopra (1999), the Court applied the Vishaka guidelines.',
    'Parliament passed the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, which replaced the guidelines.'
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
  summary: 'The right to die with dignity is part of Article 21. Passive euthanasia and living wills are lawful, with safeguards. Active euthanasia is not allowed.',
  background: [
    'Euthanasia means ending a life to end suffering. In active euthanasia, something is done to cause death, such as a lethal injection. In passive euthanasia, treatment that keeps a person alive is withdrawn or not given.',
    'A living will, also called an advance medical directive, is a written instruction made in advance. The person says what treatment they do not want if they later cannot decide for themselves.',
    'In Gian Kaur (1996), five judges held that the right to life does not include a right to die by suicide. But they said the right to a dignified life includes dignity at the end of life.',
    'In Aruna Shanbaug (2011), two judges allowed passive euthanasia under strict conditions. Aruna Shanbaug was a nurse who had been in a vegetative state for decades. The two judges read Gian Kaur as leaving the subject to Parliament.'
  ],
  question: [
    'Does the right to live with dignity under Article 21 include the right to die with dignity?',
    'Is passive euthanasia lawful? Are living wills valid?'
  ],
  facts: [
    'Common Cause, a registered society, filed a writ petition in 2005. Common Cause asked the Court to declare the right to die with dignity a fundamental right.',
    'In 2014 three judges doubted Aruna Shanbaug\'s reading of Gian Kaur and sent the question to five judges.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0) in four opinions: Chief Justice Misra for himself and Justice Khanwilkar, and Justices Sikri, Chandrachud and Bhushan', points: [
      'The right to live with dignity under Article 21 includes the right to die with dignity.',
      'Passive euthanasia, meaning withdrawing or withholding treatment that keeps a person alive, is lawful, with safeguards.',
      'An adult of sound mind can make a living will refusing treatment in the future.',
      'Gian Kaur did not hold that passive euthanasia could be allowed only by a law of Parliament. Aruna Shanbaug had misread Gian Kaur on this point.',
      'Active euthanasia is not allowed.',
      'The Court laid down guidelines on making and carrying out living wills. The guidelines apply until Parliament makes a law.'
    ] }
  ],
  principles: [
    'Dignity at the end of life is part of the right to life.',
    'A competent adult can refuse medical treatment, including in advance.',
    'So a person may choose not to be kept alive by machines. But no one may act to end another person\'s life.'
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
  summary: 'Section 377 of the Indian Penal Code was struck down so far as it made consensual sex between adults a crime. Suresh Kumar Koushal (2013) was overruled.',
  background: [
    'Section 377 of the Indian Penal Code, a colonial law of 1860, punished "carnal intercourse against the order of nature". In practice it made gay sex a crime.',
    'In Naz Foundation (2009), the Delhi High Court held that Section 377 was unconstitutional as applied to consensual acts between adults.',
    'In Suresh Kumar Koushal (2013), the Supreme Court reversed that decision and upheld Section 377.',
    'In Puttaswamy (2017), nine judges held that privacy, including choices about one\'s body and relationships, is a fundamental right.'
  ],
  question: [
    'Is Section 377 valid, so far as it makes consensual sex between adults of the same sex a crime?',
    'Was Suresh Kumar Koushal (2013), which upheld Section 377, rightly decided?'
  ],
  facts: [
    'Navtej Singh Johar, a dancer, and others filed a writ petition in 2016.',
    'In January 2018 three judges sent the question of reconsidering Koushal to a larger bench, and five judges heard it.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0) in four opinions: Chief Justice Misra for himself and Justice Khanwilkar, and Justices Nariman, Chandrachud and Indu Malhotra', points: [
      'Section 377 is unconstitutional so far as it makes consensual sex between adults a crime. The section breaks Articles 14, 15, 19(1)(a) and 21.',
      'Section 377 still applies to acts without consent, acts involving minors, and bestiality.',
      'Sexual orientation is part of a person\'s identity, dignity and privacy. The judgment relied on Puttaswamy.',
      'Constitutional morality, meaning the values of the Constitution, guides the Court, not popular opinion. "The morality that public perceives, the Constitution may not conceive of."',
      'Suresh Kumar Koushal is overruled.'
    ] }
  ],
  principles: [
    'The State cannot make a person\'s sexual orientation, or consensual private conduct, a crime.',
    'Fundamental rights do not depend on the approval of the majority.',
    'So a right protects a minority even when most people disapprove. The Constitution\'s values decide, not a vote.'
  ],
  legacy: [
    'In Joseph Shine (2018), decided three weeks later, the Court struck down the offence of adultery, relying on the same ideas of dignity and personal choice.',
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
  summary: 'Torture in police custody breaks Article 21, and the State must pay compensation for it. The Court laid down requirements that the police must follow at every arrest and detention.',
  background: [
    'Article 21 says that no person shall lose their life or personal liberty except by a "procedure established by law".',
    'Custodial violence means torture or death of a person held by the police. Victims are usually poor, and the evidence lies with the police themselves.',
    'In public interest cases, the Court has treated letters from citizens as petitions. A letter about people who cannot reach the Court themselves can start a case.',
    'Sovereign immunity is an old rule that the State cannot be sued for acts done in using its powers of government. In Nilabati Behera (1993), the Court had held that the rule does not apply when fundamental rights are broken.'
  ],
  question: [
    'What safeguards must the police follow when they arrest and hold a person, to prevent violence in custody?',
    'Must the State pay compensation for deaths and torture in custody?'
  ],
  facts: [
    'On 26 August 1986 D.K. Basu, Executive Chairman of Legal Aid Services, West Bengal, wrote to the Chief Justice of India about newspaper reports of deaths in police lock-ups. The letter was treated as a writ petition.',
    'On 29 July 1987 Ashok K. Johri wrote to the Chief Justice about the death of Mahesh Bihari in police custody at Pilkhana, Aligarh. The two matters were heard together.',
    'The Court issued notice to all State Governments and to the Law Commission of India.'
  ],
  held: [
    { kind: 'unanimous', label: 'Both judges agreed (2:0). Justice A.S. Anand wrote the judgment', points: [
      'Torture and cruel, inhuman or degrading treatment in custody break Article 21. Convicts, undertrials and other prisoners keep this right.',
      'The State must pay compensation for such violations, as a remedy in public law. Sovereign immunity is no defence.',
      'Police officers who arrest or question a person must wear clear name tags. An arrest memo must be prepared, signed by a witness and countersigned by the arrested person.',
      'A friend or relative must be told of the arrest and the place of custody, and the arrested person must be told of this right. An entry must be made in the diary at the place of detention.',
      'On request, the arrested person must be examined for injuries at the time of arrest. A doctor must examine the person every 48 hours in custody.',
      'The arrested person may meet a lawyer during questioning, though not throughout it. Copies of the arrest documents go to the magistrate, and a police control room must display the details.',
      'Failing to follow these requirements leads to departmental action and can be punished as contempt of court.'
    ] }
  ],
  principles: [
    'Arrest and detention must follow basic safeguards that protect dignity and prevent torture.',
    'Compensation is a remedy in public law for the breach of fundamental rights.',
    'So every arrest must leave a record: who arrested whom, when, where, and in what condition. Torture becomes harder to hide.'
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
  summary: 'A business that carries on a hazardous activity is absolutely liable for any harm it causes, with no exceptions. The compensation must match the size and wealth of the business.',
  background: [
    'In December 1984, a year before this case, gas leaked from the Union Carbide plant in Bhopal and killed thousands of people.',
    'Under strict liability, a rule from the English case Rylands v. Fletcher (1868), a person who keeps something dangerous is liable if it escapes and causes harm. But the rule has exceptions, such as an act of God or the act of a stranger.',
    'Article 32 lets a person go straight to the Supreme Court to enforce a fundamental right. Article 12 says which bodies count as "the State" and so must respect the rights.'
  ],
  question: [
    'Can the Supreme Court award compensation under Article 32 for the breach of fundamental rights?',
    'How far is a business in a hazardous industry liable when an accident harms people?',
    'Is a private company such as Shriram "the State" under Article 12?'
  ],
  facts: [
    'Shriram Foods and Fertiliser Industries ran a plant in a crowded part of Delhi.',
    'Oleum gas leaked from the plant on 4 and 6 December 1985. Workers and people nearby were affected, and an advocate practising in the Tis Hazari courts died.',
    'M.C. Mehta had already filed a petition about the plant. The Delhi Legal Aid and Advice Board and the Delhi Bar Association applied for compensation for the victims.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Chief Justice P.N. Bhagwati wrote the judgment', points: [
      'The power under Article 32 includes the power to provide a remedy. In cases of gross and large-scale breach of fundamental rights, the Court can award compensation.',
      'A business that carries on a hazardous or inherently dangerous activity is absolutely liable to compensate everyone harmed by an accident in that activity, even if it took all reasonable care.',
      'The exceptions allowed under strict liability in Rylands v. Fletcher do not apply.',
      'The compensation must be linked to the size and wealth of the business, so that it deters others.',
      'The question whether Shriram is "the State" under Article 12 was left open.',
      'The Delhi Legal Aid and Advice Board was told to file compensation claims for the victims within two months.'
    ] }
  ],
  principles: [
    'Absolute liability means that a business carrying on a hazardous activity bears the full cost of the harm it causes, with no excuses.',
    'Larger and richer businesses must pay larger compensation.',
    'So the English rule of strict liability, with its exceptions, was not enough for India. A dangerous industry pays for every accident it causes.'
  ],
  legacy: [
    'Parliament passed the Public Liability Insurance Act, 1991, which requires insurance for hazardous activities.',
    'In Indian Council for Enviro-Legal Action v. Union of India (1996), the Court applied absolute liability and the polluter pays principle.'
  ],
  source: 'https://indiankanoon.org/doc/1486949/'
}

});
