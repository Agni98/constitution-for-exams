/* Landmark judgments, rewritten in full. Batch 12: the Union judiciary and the
   CAG, Articles 124 to 151.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. Each entry was checked against the full text
   of the judgment on Indian Kanoon. The Second Judges Case, State of
   Karnataka v. Union of India, Bengal Immunity, Union Carbide and the Ayodhya
   Reference are long; their conclusions and the alignment of opinions were
   read from the judgments themselves in the browser. The corrections to the
   short summaries that came out of the check: Union Carbide did not hold that
   Article 142 cannot override statutes. It held that an ordinary law cannot
   limit the power under Article 142, but that quashing the criminal cases was
   not justified on the facts. The limit on Article 142 comes from Supreme
   Court Bar Association (1998). In State of Karnataka v. Union of India the
   suit was held maintainable, but it was dismissed on the merits. Bengal
   Immunity was decided by 4:3. The judges of the Third Judges Case could not
   all be confirmed, so the entry does not list them.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'second-judges-case-1993': {
  name: 'Supreme Court Advocates-on-Record Association v. Union of India',
  aka: 'The Second Judges Case',
  decided: '6 October 1993',
  citation: '(1993) 4 SCC 441, AIR 1994 SC 268',
  bench: 9,
  result: 'Majority 7:2',
  tags: ['Articles 124 and 217', 'Appointment of judges', 'Collegium'],
  judges: 'S. Ratnavel Pandian, A.M. Ahmadi, Kuldip Singh, J.S. Verma, M.M. Punchhi, Yogeshwar Dayal, G.N. Ray, A.S. Anand and S.P. Bharucha',
  summary: 'In appointing and transferring judges of the Supreme Court and the High Courts, the opinion of the Chief Justice of India, formed with senior judges, has primacy. S.P. Gupta (1981) was overruled on this point, and the collegium system began.',
  question: [
    'In appointments to the Supreme Court and the High Courts, and in transfers of High Court judges, does the opinion of the Chief Justice of India have primacy?',
    'Is the fixing of the number of judges in a High Court justiciable?'
  ],
  facts: [
    'In S.P. Gupta (1981), a majority of seven judges held that "consultation" with the Chief Justice of India did not mean concurrence. The executive had the final say.',
    'The Supreme Court Advocates-on-Record Association filed a writ petition in 1987 about appointments and vacancies in the higher judiciary.',
    'In 1990 a three-judge bench referred two questions to a larger bench: the primacy of the Chief Justice of India, and whether the strength of judges in a High Court is justiciable.',
    'A bench of nine judges heard the case from 7 April to 11 May 1993.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (7 judges): Justice J.S. Verma, for himself and Justices Dayal, Ray, Anand and Bharucha, with concurring opinions by Justices Pandian and Kuldip Singh', points: [
      'Appointing judges is an integrated, participatory and consultative process. All the constitutional functionaries must try to reach an agreed decision.',
      'A proposal for appointment to the Supreme Court must start with the Chief Justice of India, and for a High Court with the Chief Justice of that High Court. A proposal for transfer must start with the Chief Justice of India.',
      'If the functionaries disagree, the opinion of the judiciary, "symbolised by the view of the Chief Justice of India", has primacy.',
      'No judge can be appointed unless the appointment conforms to the opinion of the Chief Justice of India. That opinion must be formed after consulting senior judges.',
      'The Government may decline to appoint only for strong reasons disclosed to the Chief Justice of India. If the Chief Justice and the judges consulted reiterate the recommendation, the appointment should be made.',
      'The senior-most judge of the Supreme Court considered fit to hold the office should be appointed Chief Justice of India.',
      'In transfers of High Court judges, the opinion of the Chief Justice of India is determinative. The consent of the judge is not needed, and a transfer on the Chief Justice\'s recommendation is not punitive.',
      'Appointments and transfers can be reviewed by the courts only on limited grounds, such as lack of consultation or of eligibility.',
      'The fixing of the number of judges in a High Court is justiciable, to a limited extent.',
      'S.P. Gupta is not correct on the primacy of the Chief Justice of India and on justiciability.'
    ] },
    { kind: 'dissent', label: 'Dissents (Justices A.M. Ahmadi and M.M. Punchhi)', points: [
      'Justice Ahmadi dissented from the majority. Justice Punchhi agreed broadly with Justice Ahmadi.',
      'Justice Punchhi objected to reducing the Chief Justice of India to a spokesman for a group of judges. By adding words to the Constitution through interpretation, the majority had in effect rewritten it.',
      'Justice Punchhi also disagreed with shutting out judicial review of appointments.'
    ] }
  ],
  principles: [
    'The judiciary, through the Chief Justice of India acting with senior judges, has the decisive voice in appointing judges.',
    'An appointment must conform to the opinion of the Chief Justice of India, formed with senior colleagues.'
  ],
  legacy: [
    'In the Third Judges Case (1998), the Court fixed the collegium as the Chief Justice of India and the four senior-most judges for appointments to the Supreme Court.',
    'In 2015 the Court struck down the National Judicial Appointments Commission, created by the 99th Amendment, and the collegium system continued.'
  ],
  source: 'https://indiankanoon.org/doc/753224/'
},

'third-judges-case-1998': {
  name: 'In re Special Reference No. 1 of 1998',
  aka: 'The Third Judges Case',
  decided: '28 October 1998',
  citation: '(1998) 7 SCC 739, AIR 1999 SC 1',
  bench: 9,
  result: 'Unanimous opinion',
  tags: ['Article 143', 'Collegium', 'Appointment of judges'],
  summary: 'Answering a Presidential Reference, the Court held that the Chief Justice of India must consult a collegium of senior judges. For appointments to the Supreme Court, the collegium is the Chief Justice and the four senior-most judges. A recommendation made without this consultation does not bind the Government.',
  question: [
    'What does "consultation with the Chief Justice of India" require in appointments and transfers of judges?',
    'Who must be consulted, and how?',
    'Is a recommendation that does not follow these norms binding on the Government?'
  ],
  facts: [
    'Doubts arose about how the Second Judges Case (1993) should be applied to appointments and transfers.',
    'The President referred nine questions to the Supreme Court under Article 143(1).',
    'The Attorney General stated that the Union was not seeking a review of the Second Judges Case, and that it would accept the Court\'s answers as binding.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous opinion of nine judges, written by Justice S.P. Bharucha', points: [
      '"Consultation with the Chief Justice of India" requires consultation with a plurality of judges. The sole opinion of the Chief Justice of India is not consultation.',
      'Recommendations for appointment to the Supreme Court, and for transfer of High Court judges and Chief Justices, must be made in consultation with the four senior-most puisne judges of the Supreme Court.',
      'Recommendations for appointment to a High Court must be made in consultation with the two senior-most puisne judges of the Supreme Court.',
      'The views of the judges consulted must be in writing, and must be sent to the Government with the views of the Chief Justice.',
      'A transfer can be reviewed by the courts only if the four senior-most judges were not consulted, or the views of the Chief Justices of the two High Courts were not obtained.',
      'Merit is the main consideration for appointment to the Supreme Court. A departure from seniority need not be justified for each senior judge passed over, but the positive reason for the recommendation must be recorded.',
      'A recommendation made without following these norms is not binding on the Government of India.'
    ] }
  ],
  principles: [
    'Appointments to the higher judiciary are decided by a collegium, not by the Chief Justice of India alone.',
    'The consultation must be in writing and follow fixed norms.'
  ],
  legacy: [
    'The collegium system described in this opinion still governs appointments to the higher judiciary.',
    'In 2015 the Court struck down the National Judicial Appointments Commission, and this system continued.'
  ],
  source: 'https://indiankanoon.org/doc/543658/'
},

'state-of-karnataka-v-union-of-india-1977': {
  name: 'State of Karnataka v. Union of India',
  full: 'State of Karnataka v. Union of India and Another',
  aka: 'The Commission of Inquiry case',
  decided: '8 November 1977',
  citation: '(1977) 4 SCC 608, AIR 1978 SC 68',
  bench: 7,
  result: 'Suit maintainable by 4:3, but dismissed',
  tags: ['Article 131', 'Centre-State disputes', 'Commissions of Inquiry'],
  judges: 'M.H. Beg CJI, Y.V. Chandrachud, P.N. Bhagwati, N.L. Untwalia, P.N. Shinghal, Jaswant Singh and P.S. Kailasam',
  summary: 'A State can sue the Union under Article 131 when Central action affects the State\'s governmental powers. But the Central Government could appoint a Commission of Inquiry into charges against a State\'s Chief Minister and ministers, so Karnataka\'s suit was dismissed.',
  question: [
    'Can a State bring a suit under Article 131 against the Central Government\'s appointment of a Commission of Inquiry against its ministers?',
    'Could the Central Government appoint such a commission under Section 3 of the Commissions of Inquiry Act, 1952?'
  ],
  facts: [
    'On 23 May 1977 the Central Government appointed a Commission of Inquiry under Section 3 of the Commissions of Inquiry Act, 1952.',
    'The one-man commission of A.N. Grover was to inquire into charges of corruption, nepotism, favouritism and misuse of governmental power against the Chief Minister and other ministers of Karnataka.',
    'The Central notification excluded matters already covered by a notification of the State Government.',
    'The State of Karnataka filed a suit under Article 131. It said the Centre had no power to inquire into the conduct of State ministers, and that the inquiry damaged the federal structure.'
  ],
  held: [
    { kind: 'majority', label: 'On maintainability, majority (4 judges): Chief Justice Beg and Justices Chandrachud, Bhagwati and Kailasam', points: [
      'The suit is maintainable. A State has sufficient interest to challenge Central action against its ministers in respect of the exercise of the State\'s governmental powers.',
      'Justice Chandrachud added that Article 131 should not be tested by the rules of the Code of Civil Procedure. It speaks of a "dispute", not a cause of action.'
    ] },
    { kind: 'dissent', label: 'On maintainability, dissent (Justices Untwalia, Shinghal and Jaswant Singh)', points: [
      'The suit is not maintainable. Under Article 131 the dispute must be with the State itself, not with a limb of the State such as its executive.'
    ] },
    { kind: 'majority', label: 'On the merits, majority', points: [
      'The Central Government had power under Section 3 of the Commissions of Inquiry Act to appoint the commission. The suit was dismissed with costs.'
    ] },
    { kind: 'dissent', label: 'On the merits, dissent (Justice Kailasam)', points: [
      'The notification interfered with the State\'s right to function in its own sphere and was beyond the Central Government\'s power under Section 3. Justice Kailasam would have decreed the suit.'
    ] }
  ],
  principles: [
    'A State can sue the Union under Article 131 whenever its legal rights or governmental powers are in dispute, without showing a cause of action in the ordinary civil sense.',
    'The Centre may inquire into allegations of corruption against State ministers under the Commissions of Inquiry Act.'
  ],
  legacy: [
    'The case remains the leading authority on the scope of suits between the Union and the States under Article 131.'
  ],
  source: 'https://indiankanoon.org/doc/184521/'
},

'pritam-singh-1950': {
  name: 'Pritam Singh v. The State',
  aka: 'The special leave case',
  decided: '5 May 1950',
  citation: 'AIR 1950 SC 169, 1950 SCR 453',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 136', 'Special leave to appeal', 'Criminal appeals'],
  judges: 'S. Fazl Ali, M. Patanjali Sastri, M.C. Mahajan, B.K. Mukherjea and S.R. Das',
  summary: 'The Supreme Court\'s power to grant special leave under Article 136 is to be used sparingly, only in exceptional cases where substantial and grave injustice has been done. The Court is not an ordinary court of criminal appeal.',
  question: [
    'When should the Supreme Court grant special leave to appeal under Article 136?',
    'Will the Court re-examine findings of fact in a criminal appeal?'
  ],
  facts: [
    'Pritam Singh was convicted of murdering Buta Singh on 30 December 1948, and sentenced to death by the Sessions Judge of Ferozepore.',
    'The High Court of East Punjab at Simla upheld the conviction and sentence on 23 November 1949.',
    'Pritam Singh obtained special leave to appeal to the Supreme Court under Article 136.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Justice S. Fazl Ali', points: [
      'The wide discretionary power under Article 136 "is to be exercised sparingly and in exceptional cases only".',
      'Special leave will not be granted unless exceptional and special circumstances exist, substantial and grave injustice has been done, and the case has features grave enough to warrant a review.',
      'The same standard applies at the stage of granting leave and at the final hearing. At the final hearing, only points fit to be urged at the leave stage can be raised.',
      'The Court is not an ordinary court of criminal appeal. It will not generally reopen facts, especially where two courts agree on them and they depend on the credibility of witnesses.',
      'The appeal was dismissed.'
    ] }
  ],
  principles: [
    'Article 136 gives a discretionary remedy, not a right of appeal.',
    'Findings of fact on which two courts agree are rarely disturbed under Article 136.'
  ],
  legacy: [
    'The standard set here is still cited when the Court decides whether to grant special leave.'
  ],
  source: 'https://indiankanoon.org/doc/743851/'
},

'bengal-immunity-1955': {
  name: 'Bengal Immunity Co. Ltd. v. State of Bihar',
  full: 'Bengal Immunity Co. Ltd. v. State of Bihar and Others',
  decided: '6 September 1955',
  citation: '(1955) 2 SCR 603, AIR 1955 SC 661',
  bench: 7,
  result: 'Majority 4:3',
  tags: ['Article 141', 'Overruling precedent', 'Article 286'],
  judges: 'S.R. Das (Acting CJI), Vivian Bose, N.H. Bhagwati, B. Jagannadhadas, T.L. Venkatarama Aiyar, B.P. Sinha and S.J. Imam',
  summary: 'The Supreme Court is not bound by its own earlier decisions and can overrule them when convinced that they are wrong. The Court overruled State of Bombay v. United Motors (1953) and held that States could not tax inter-State sales until Parliament provided otherwise.',
  question: [
    'Is the Supreme Court bound by its own previous decisions?',
    'Under Article 286 as it then stood, could a State tax sales in the course of inter-State trade before Parliament made a law?'
  ],
  facts: [
    'The Bengal Immunity Company, based outside Bihar, sold goods that were delivered to buyers in Bihar for consumption there.',
    'The Bihar sales tax authorities sought to tax these sales. The Patna High Court dismissed the company\'s writ petition on 4 December 1952.',
    'In State of Bombay v. United Motors (1953), a majority of the Supreme Court had held that the State in which goods were delivered could tax such sales.',
    'The company appealed, and a bench of seven judges considered whether United Motors was correct.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (4 judges): Acting Chief Justice S.R. Das, for himself and Justices Bose and Imam, with Justice Bhagwati concurring', points: [
      '"There is nothing in our Constitution which prevents us from departing from a previous decision if we are convinced of its error and its baneful effect on the general interests of the public."',
      'Article 141 makes the law declared by the Supreme Court binding on all courts in India. This refers to courts other than the Supreme Court itself.',
      'An error in interpreting the Constitution could otherwise remain uncorrected for a long time, because the Constitution is hard to amend.',
      'Until Parliament by law provides otherwise under Article 286(2), no State can tax sales or purchases in the course of inter-State trade or commerce. The majority view in United Motors was overruled.',
      'Bihar was directed not to tax out-of-State dealers on such sales, even where the goods were delivered in Bihar for consumption there.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justices Jagannadhadas, Venkatarama Aiyar and Sinha)', points: [
      'United Motors should continue to hold good, and the appeal should have been dismissed.'
    ] }
  ],
  principles: [
    'The Supreme Court can overrule its own earlier decisions, especially on the Constitution.',
    'Before 1956, States could not tax inter-State sales without a law made by Parliament.'
  ],
  legacy: [
    'Parliament passed the Sales Tax Laws Validation Act, 1956. The Sixth Amendment (1956) gave Parliament the power to tax inter-State sales, and the Central Sales Tax Act, 1956 followed.',
    'The Court has relied on this power to overrule its own decisions in many later cases.'
  ],
  source: 'https://indiankanoon.org/doc/1629830/'
},

'union-carbide-1991': {
  name: 'Union Carbide Corporation v. Union of India',
  full: 'Union Carbide Corporation and Others v. Union of India and Others',
  aka: 'The Bhopal settlement review case',
  decided: '3 October 1991',
  citation: '(1991) 4 SCC 584, AIR 1992 SC 248',
  bench: 5,
  result: 'Review allowed in part',
  tags: ['Article 142', 'Bhopal gas disaster', 'Settlement'],
  judges: 'Ranganath Misra CJI, M.N. Venkatachaliah, K.N. Singh, A.M. Ahmadi and N.D. Ojha',
  summary: 'The Bhopal gas disaster settlement of US $470 million was upheld on review, but the quashing of the criminal cases was set aside and the prosecutions were revived. The Court held that its power under Article 142 is not limited by provisions of ordinary laws.',
  question: [
    'Could the Supreme Court, under Article 142, withdraw the civil suits and criminal cases to itself and dispose of them by recording a settlement?',
    'Was the quashing of the criminal proceedings as part of the settlement valid?',
    'Was the settlement void for not hearing the victims, or as against public policy?'
  ],
  facts: [
    'On the night of 2 and 3 December 1984, methyl isocyanate gas leaked from the plant of Union Carbide India Ltd. in Bhopal. Thousands of people died and many more were injured.',
    'Under the Bhopal Gas Leak Disaster (Processing of Claims) Act, 1985, the Union of India represented the victims and sued Union Carbide Corporation.',
    'On 14 and 15 February 1989, while hearing appeals arising from the suit, the Supreme Court recorded a settlement of US $470 million. It also terminated all civil and criminal proceedings.',
    'Victims\' groups and others filed review petitions and writ petitions against the settlement.'
  ],
  held: [
    { kind: 'majority', label: 'Main judgment by Justice M.N. Venkatachaliah, with Justice Ahmadi partly dissenting', points: [
      'Under Article 142(1), the Court had jurisdiction to withdraw to itself the suits pending in the Bhopal District Court and the criminal proceedings, and to dispose of them in terms of the settlement.',
      'The Court also had power under Article 142(1) to quash the criminal proceedings, and a provision in an ordinary law cannot limit that power. But on the facts, quashing the criminal proceedings was not justified, so they were revived.',
      'The part of the 1989 orders that barred future criminal proceedings was also set aside.',
      'The settlement was not void for want of a hearing to the victims, or as being against public policy. It was left undisturbed.',
      'If the settlement fund proved insufficient, the Union of India must make good the shortfall.',
      'The Court directed time-bound disposal of claims, a hospital of at least 500 beds giving free treatment for eight years, and group medical insurance for about one lakh people in the affected wards who had not filed claims.'
    ] },
    { kind: 'dissent', label: 'Partly dissenting (Justice A.M. Ahmadi)', points: [
      'Justice Ahmadi agreed with the other conclusions. But the Union of India could not be made to bear any shortfall in the fund when it had not been found liable as a wrongdoer.'
    ] }
  ],
  principles: [
    'The power to do complete justice under Article 142 is wide, and provisions of ordinary laws do not cut it down.',
    'A settlement of civil claims for a mass disaster does not wipe out criminal liability.'
  ],
  legacy: [
    'In 2010 a court in Bhopal convicted seven former officials of Union Carbide India Ltd. of causing death by negligence.',
    'In Supreme Court Bar Association (1998), the Court explained that Article 142 cannot be used to ignore express statutory provisions dealing with a subject.',
    'In March 2023 five judges dismissed the Union of India\'s curative petition, which sought more compensation from the successors of Union Carbide.'
  ],
  source: 'https://indiankanoon.org/doc/27098883/'
},

'supreme-court-bar-association-1998': {
  name: 'Supreme Court Bar Association v. Union of India',
  full: 'Supreme Court Bar Association v. Union of India and Another',
  aka: 'The limits of Article 142 case',
  decided: '17 April 1998',
  citation: 'AIR 1998 SC 1895',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 142', 'Article 129', 'Contempt of court'],
  judges: 'S.C. Agrawal, G.N. Ray, A.S. Anand, S.P. Bharucha and S. Rajendra Babu',
  summary: 'The Supreme Court cannot suspend an advocate\'s licence as a punishment for contempt. That power belongs to the Bar Councils under the Advocates Act, and Article 142 cannot be used to take it over. In re Vinay Chandra Mishra (1995) was overruled on this point.',
  question: [
    'Can the Supreme Court, while punishing an advocate for contempt, suspend the advocate\'s licence to practise?',
    'Can Article 142 be used to exercise a power that a statute gives to another body?'
  ],
  facts: [
    'In In re Vinay Chandra Mishra (1995), three judges found an advocate guilty of criminal contempt for using insulting and threatening language to overawe the court.',
    'The Court imposed a suspended sentence of six weeks\' simple imprisonment, and suspended the advocate from practice for three years.',
    'The Supreme Court Bar Association filed a writ petition under Article 32. It argued that only the disciplinary committees of the Bar Councils can suspend an advocate\'s licence.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Justice A.S. Anand', points: [
      'Article 129 gives the Supreme Court power to punish for contempt of itself. The recognised punishments include fine and imprisonment.',
      'Suspending an advocate\'s licence is not a recognised punishment for contempt. It is a punishment for professional misconduct under the Advocates Act, 1961, imposed by the Bar Councils after a detailed procedure.',
      '"Article 142, even with the width of its amplitude, cannot be used to build a new edifice where none existed earlier, by ignoring express statutory provisions dealing with a subject."',
      'Article 142 supplements the law so that the Court can do complete justice in a case. It cannot be used to take over a jurisdiction that a statute gives to another body.',
      'In re Vinay Chandra Mishra is not good law to the extent that it suspended the advocate\'s licence.',
      'The Court may still stop a contemner advocate from appearing before it until the contempt is purged, and may withdraw the privilege of practising as an Advocate-on-Record.'
    ] }
  ],
  principles: [
    'Article 142 is a supplementary power. It cannot override express statutory provisions or take over the powers of statutory bodies.',
    'Professional discipline of advocates belongs to the Bar Councils.'
  ],
  legacy: [
    'The limits on Article 142 stated here are cited whenever the Court is asked to use that power in the face of a statute.'
  ],
  source: 'https://indiankanoon.org/doc/1666530/'
},

'in-re-ayodhya-reference-1994': {
  name: 'Dr. M. Ismail Faruqui v. Union of India',
  full: 'Dr. M. Ismail Faruqui and Others v. Union of India and Others, with Special Reference No. 1 of 1993',
  aka: 'The Ayodhya Reference',
  decided: '24 October 1994',
  citation: '(1994) 6 SCC 360, AIR 1995 SC 605',
  bench: 5,
  result: 'Act upheld by 3:2, except one section; Reference returned',
  tags: ['Article 143', 'Secularism', 'Acquisition of places of worship'],
  judges: 'M.N. Venkatachaliah CJI, A.M. Ahmadi, J.S. Verma, G.N. Ray and S.P. Bharucha',
  summary: 'The Acquisition of Certain Area at Ayodhya Act, 1993 was upheld, except the section that ended all pending suits over the disputed site. The Court declined to answer the President\'s reference on whether a Hindu temple had stood at the site.',
  question: [
    'Was the Acquisition of Certain Area at Ayodhya Act, 1993 valid?',
    'Could the Act end all pending suits about the disputed site without providing another way to resolve the dispute?',
    'Should the Court answer the President\'s reference under Article 143?'
  ],
  facts: [
    'The Babri Masjid at Ayodhya was demolished on 6 December 1992.',
    'On 7 January 1993 an ordinance acquired 67.703 acres of land in and around the disputed area. The same day the President referred a question to the Supreme Court under Article 143: whether a Hindu temple or religious structure existed on the site before the mosque was built.',
    'Parliament replaced the ordinance with the Acquisition of Certain Area at Ayodhya Act, 1993. Section 4(3) of the Act ended all pending suits and legal proceedings about the disputed area.',
    'Writ petitions challenged the Act, and the Reference was heard with them.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (3 judges): Justice J.S. Verma, for himself, Chief Justice Venkatachaliah and Justice Ray', points: [
      'The Act is valid, except Section 4(3). That section ended all pending suits without providing any other way to resolve the dispute, so it is unconstitutional.',
      'With Section 4(3) struck down, the pending suits revived and must be decided in accordance with law.',
      'The disputed area vested in the Central Government as a statutory receiver. It must maintain the status quo and hand the area over to the party found entitled in the suits.',
      'A mosque has no special immunity from acquisition by the State. A mosque is not an essential part of the practice of Islam, and namaz can be offered anywhere.',
      'Since the suits revived, the Reference was unnecessary. The Court respectfully declined to answer it and returned it.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice S.P. Bharucha, for himself and Justice Ahmadi)', points: [
      'The whole Act is unconstitutional and must be struck down.',
      'The Reference should be returned unanswered, because answering it would impair the Court\'s credibility.',
      '"Ayodhya is a storm that will pass. The dignity and honour of the Supreme Court cannot be compromised because of it."'
    ] }
  ],
  principles: [
    'Places of worship of any religion, including mosques, can be acquired by the State in exceptional circumstances.',
    'The Court may decline to answer a Presidential Reference under Article 143.'
  ],
  legacy: [
    'On 27 September 2018, in M. Siddiq v. Mahant Suresh Das, three judges declined by 2:1 to refer the observation about mosques to a larger bench.',
    'On 9 November 2019, in the same case, five judges decided the title suits. The disputed site was given for a temple, and five acres of land elsewhere in Ayodhya were directed to be given for a mosque.'
  ],
  source: 'https://indiankanoon.org/doc/37494799/'
},

'association-of-unified-tele-services-2014': {
  name: 'Association of Unified Telecom Service Providers v. Union of India',
  full: 'Association of Unified Telecom Service Providers and Others v. Union of India and Others',
  aka: 'The CAG audit of telecom companies case',
  decided: '17 April 2014',
  citation: '(2014) 6 SCC 110',
  bench: 2,
  result: 'Unanimous, 2:0',
  tags: ['Article 149', 'CAG audit', 'Natural resources'],
  judges: 'K.S. Radhakrishnan and Vikramajit Sen',
  summary: 'The Comptroller and Auditor General can examine the accounts of private telecom companies that share revenue with the Government, to check whether the Union gets its due share. Spectrum is a natural resource that the State holds in trust for the people.',
  question: [
    'Can the CAG audit the accounts of private telecom service providers?',
    'Does the revenue-sharing arrangement in their licences bring their accounts within the CAG\'s powers under Article 149?'
  ],
  facts: [
    'Under their Unified Access Service licences, telecom companies paid the Union a licence fee and spectrum charges as a share of their adjusted gross revenue. The money went into the Consolidated Fund of India.',
    'In 2010 the CAG, through the Department of Telecommunications and TRAI, asked the companies for their accounts from 2006-07 onwards for audit.',
    'The Telecom Disputes Settlement and Appellate Tribunal set aside the demand. The Delhi High Court upheld the CAG\'s power.',
    'The association of the companies appealed to the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (2:0), judgment by Justice K.S. Radhakrishnan', points: [
      'Natural resources such as spectrum are public property. The State distributes them as a trustee for the people and must act fairly.',
      'Under Article 149 and Section 16 of the CAG (Duties, Powers and Conditions of Service) Act, 1971, the CAG can audit all receipts payable into the Consolidated Fund of India.',
      'The CAG can examine the accounts of the service providers to find out whether the Union is getting its due share of licence fee and spectrum charges. This is not a general audit of private companies.',
      'The licences also allow the Government to call for the companies\' books of account at any time.',
      'The companies\' appeals were dismissed, and the tribunal\'s decision was set aside.'
    ] }
  ],
  principles: [
    'Where a private party shares revenue from a public resource with the State, the CAG can examine its accounts to protect public revenue.',
    'The State holds natural resources in trust for the people.'
  ],
  legacy: [
    'In October 2019 the Supreme Court upheld the Department of Telecommunications\' wide definition of adjusted gross revenue, which led to large dues from telecom companies.'
  ],
  source: 'https://indiankanoon.org/doc/112886265/'
}

});
