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
  summary: 'In appointing and transferring judges of the Supreme Court and the High Courts, the opinion of the Chief Justice of India, formed with senior judges, must prevail. S.P. Gupta (1981) was overruled on this point, and the collegium system began.',
  background: [
    'Articles 124 and 217 say that the President appoints judges of the Supreme Court and the High Courts after "consultation" with the Chief Justice of India and other judges.',
    'In S.P. Gupta (1981), the First Judges case, seven judges held that "consultation" did not mean agreement. So the government had the final say in choosing judges.',
    'A matter is justiciable if a court can decide it. The second question was whether courts could decide how many judges a High Court should have.'
  ],
  question: [
    'In appointments to the Supreme Court and the High Courts, and in transfers of High Court judges, must the opinion of the Chief Justice of India prevail?',
    'Can the courts decide how many judges a High Court should have?'
  ],
  facts: [
    'The Supreme Court Advocates-on-Record Association filed a writ petition in 1987 about appointments and vacancies in the higher judiciary.',
    'In 1990 three judges sent two questions to a larger bench: whether the Chief Justice of India\'s opinion must prevail, and whether the number of judges in a High Court is justiciable.',
    'Nine judges heard the case from 7 April to 11 May 1993.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of seven: Justice J.S. Verma, for himself and Justices Dayal, Ray, Anand and Bharucha, with Justices Pandian and Kuldip Singh agreeing in separate opinions', points: [
      'Appointing judges is a joint process of consultation. Everyone involved must try to reach an agreed decision.',
      'A proposal for the Supreme Court must start with the Chief Justice of India, and for a High Court with the Chief Justice of that High Court. A proposal for transfer must start with the Chief Justice of India.',
      'If they disagree, the judiciary\'s opinion, "symbolised by the view of the Chief Justice of India", must prevail.',
      'No judge can be appointed unless the appointment agrees with the opinion of the Chief Justice of India. The Chief Justice must form that opinion after consulting senior judges.',
      'The government may refuse an appointment only for strong reasons, disclosed to the Chief Justice of India. If the Chief Justice and the judges consulted repeat the recommendation, the appointment should be made.',
      'The senior most judge of the Supreme Court who is fit for the office should be appointed Chief Justice of India.',
      'In transfers of High Court judges, the opinion of the Chief Justice of India decides. The judge\'s consent is not needed, and a transfer on the Chief Justice\'s recommendation is not a punishment.',
      'Courts can review appointments and transfers only on limited grounds, such as lack of consultation or lack of eligibility.',
      'The number of judges in a High Court is justiciable, to a limited extent.',
      'S.P. Gupta is wrong on these points.'
    ] },
    { kind: 'dissent', label: 'Justices A.M. Ahmadi and M.M. Punchhi, in dissent', points: [
      'Justice Ahmadi dissented from the majority. Justice Punchhi agreed broadly with him.',
      'Justice Punchhi objected to turning the Chief Justice of India into a spokesman for a group of judges. In his view, the majority had added words to the Constitution by interpretation and so had in effect rewritten it.',
      'Justice Punchhi also disagreed with shutting the courts out from reviewing appointments.'
    ] }
  ],
  principles: [
    'So the power to choose judges moved from the government to the judges themselves. The group of senior judges who choose came to be called the collegium.'
  ],
  legacy: [
    'In the Third Judges Case (1998), the Court fixed the collegium as the Chief Justice of India and the four senior most judges, for appointments to the Supreme Court.',
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
  summary: 'Answering a question from the President, the Court held that the Chief Justice of India must consult a collegium of senior judges. For the Supreme Court, the collegium is the Chief Justice and the four senior most judges. A recommendation made without that consultation does not bind the government.',
  background: [
    'Articles 124 and 217 say that the President appoints judges of the Supreme Court and the High Courts after "consultation" with the Chief Justice of India and other judges.',
    'In the Second Judges Case (1993), the Court held that the opinion of the Chief Justice of India, formed with senior judges, must prevail. But how many judges, and which ones, had to be consulted was unclear.',
    'Under Article 143(1), the President can ask the Supreme Court for its opinion on a question of law, by what is called a Presidential Reference.',
    'A puisne judge is any judge of a court other than its Chief Justice.'
  ],
  question: [
    'What does "consultation with the Chief Justice of India" require in appointments and transfers of judges?',
    'Who must be consulted, and how?',
    'Is a recommendation that does not follow these rules binding on the government?'
  ],
  facts: [
    'Doubts arose about how to apply the Second Judges Case to appointments and transfers.',
    'The President referred nine questions to the Supreme Court under Article 143(1).',
    'The Attorney General told the Court that the Union was not asking for a review of the Second Judges Case, and that it would accept the Court\'s answers as binding.'
  ],
  held: [
    { kind: 'unanimous', label: 'The opinion of all nine judges, written by Justice S.P. Bharucha', points: [
      '"Consultation with the Chief Justice of India" means consultation with a group of judges. The opinion of the Chief Justice of India alone is not consultation.',
      'Recommendations for appointment to the Supreme Court, and for transfer of High Court judges and Chief Justices, must be made after consulting the four senior most puisne judges of the Supreme Court.',
      'Recommendations for appointment to a High Court must be made after consulting the two senior most puisne judges of the Supreme Court.',
      'The views of the judges consulted must be in writing, and must be sent to the government with the views of the Chief Justice.',
      'Courts can review a transfer only if the four senior most judges were not consulted, or the views of the Chief Justices of the two High Courts were not obtained.',
      'Merit is the main test for appointment to the Supreme Court. Passing over a senior judge need not be justified for each judge passed over, but the positive reason for the choice must be recorded.',
      'A recommendation made without following these rules does not bind the Government of India.'
    ] }
  ],
  principles: [
    'So the collegium took its present shape: five senior judges for the Supreme Court, recording their views in writing.'
  ],
  legacy: [
    'In 2015 the Court struck down the National Judicial Appointments Commission, and the system continued.'
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
  summary: 'A State can sue the Union under Article 131 when Central action touches the State\'s powers of government. But the Centre could appoint a Commission of Inquiry into charges against Karnataka\'s Chief Minister and ministers, so Karnataka\'s suit was dismissed.',
  background: [
    'Under Article 131, a dispute between the Union and a State goes straight to the Supreme Court, without passing through any lower court.',
    'The Commissions of Inquiry Act, 1952 lets the Central or a State Government appoint a commission to look into a definite matter of public importance. A commission gathers facts and reports, but cannot punish anyone.',
    'In ordinary civil cases, a person can sue only on a cause of action, the facts that give that person a legal claim.',
    'In 1977 the Janata Party came to power at the Centre after the Emergency. Karnataka was still ruled by the Congress, under Chief Minister D. Devaraj Urs.'
  ],
  question: [
    'Can a State bring a suit under Article 131 against the Centre\'s appointment of a Commission of Inquiry into its ministers?',
    'Could the Central Government appoint such a commission under Section 3 of the Commissions of Inquiry Act?'
  ],
  facts: [
    'On 23 May 1977 the Central Government appointed a Commission of Inquiry under Section 3 of the Act.',
    'The one-man commission of A.N. Grover was to look into charges of corruption, favouring relatives, favouritism and misuse of power against the Chief Minister and other ministers of Karnataka.',
    'The Central notice left out matters already covered by a notice of the State Government.',
    'The State of Karnataka filed a suit under Article 131. The State said the Centre had no power to inquire into the conduct of State ministers, and that the inquiry damaged the federal structure.'
  ],
  held: [
    { kind: 'majority', label: 'On whether the suit could be heard, the majority of four: Chief Justice Beg and Justices Chandrachud, Bhagwati and Kailasam', points: [
      'The suit can be heard. A State has enough interest to challenge Central action against its ministers for the way they used the State\'s powers of government.',
      'Justice Chandrachud added that Article 131 should not be tested by the rules of the Code of Civil Procedure. Article 131 speaks of a "dispute", not a cause of action.'
    ] },
    { kind: 'dissent', label: 'On whether the suit could be heard, the three in dissent: Justices Untwalia, Shinghal and Jaswant Singh', points: [
      'The suit cannot be heard. Under Article 131 the dispute must be with the State itself, not with a part of it such as its government.'
    ] },
    { kind: 'majority', label: 'On the merits, the majority', points: [
      'The Central Government had the power under Section 3 of the Act to appoint the commission. The suit was dismissed with costs.'
    ] },
    { kind: 'dissent', label: 'On the merits, Justice Kailasam in dissent', points: [
      'The notice interfered with the State\'s right to work in its own sphere and went beyond the Centre\'s power under Section 3. Justice Kailasam would have decided the suit in Karnataka\'s favour.'
    ] }
  ],
  principles: [
    'So Karnataka won the right to come to the Court, but lost the case. The federal structure did not protect State ministers from a Central inquiry.'
  ],
  legacy: [

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
  summary: 'The Supreme Court\'s power to grant special leave to appeal under Article 136 is to be used rarely, only in exceptional cases where grave injustice has been done. The Court is not an ordinary court of criminal appeal.',
  background: [
    'Article 136 lets the Supreme Court allow an appeal against any judgment of any court or tribunal in India. The permission is called special leave. The Court can grant it or refuse it as it thinks fit.',
    'A criminal case normally goes from the trial court to the High Court on appeal. The question was how often the Supreme Court should open a third round.'
  ],
  question: [
    'When should the Supreme Court grant special leave to appeal under Article 136?',
    'Will the Court look again at the facts found in a criminal case?'
  ],
  facts: [
    'Pritam Singh was convicted of murdering Buta Singh on 30 December 1948, and sentenced to death by the Sessions Judge of Ferozepore.',
    'The High Court of East Punjab at Simla upheld the conviction and sentence on 23 November 1949.',
    'Pritam Singh obtained special leave to appeal to the Supreme Court under Article 136.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Justice S. Fazl Ali wrote the judgment', points: [
      'The wide power under Article 136 "is to be exercised sparingly and in exceptional cases only".',
      'Special leave will not be granted unless there are special circumstances, grave injustice has been done, and the case is serious enough to need a review.',
      'The same standard applies when leave is granted and at the final hearing. At the final hearing, only points that could have been raised when asking for leave can be argued.',
      'The Court is not an ordinary court of criminal appeal. The Court will not usually reopen the facts, especially where two courts agree on them and they turn on whether witnesses are believable.',
      'The appeal was dismissed.'
    ] }
  ],
  principles: [
    'Article 136 gives a remedy at the Court\'s choice, not a right of appeal.',
    'So the Supreme Court keeps itself for grave injustice and important questions, not for a third trial of the facts.'
  ],
  legacy: [

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
  summary: 'The Supreme Court is not bound by its own earlier decisions and can overrule them when convinced they are wrong. The Court overruled State of Bombay v. United Motors (1953) and held that States could not tax sales between States until Parliament allowed it.',
  background: [
    'Article 141 says that the law declared by the Supreme Court binds all courts in India. The question was whether it binds the Supreme Court itself.',
    'Sales tax was a tax that States charged on the sale of goods. Article 286, as it stood in 1955, stopped States from taxing sales in the course of trade between States, unless Parliament by law allowed it.',
    'In State of Bombay v. United Motors (1953), a majority of the Supreme Court had held that the State where goods were delivered could still tax such sales.'
  ],
  question: [
    'Is the Supreme Court bound by its own earlier decisions?',
    'Under Article 286 as it then stood, could a State tax sales made in the course of trade between States before Parliament made a law?'
  ],
  facts: [
    'The Bengal Immunity Company, based outside Bihar, sold goods that were delivered to buyers in Bihar for use there.',
    'The Bihar sales tax authorities tried to tax these sales. The Patna High Court dismissed the company\'s writ petition on 4 December 1952.',
    'The company appealed, and seven judges considered whether United Motors was right.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of four: Acting Chief Justice S.R. Das, for himself and Justices Bose and Imam, with Justice Bhagwati agreeing', points: [
      '"There is nothing in our Constitution which prevents us from departing from a previous decision if we are convinced of its error and its baneful effect on the general interests of the public."',
      'Article 141 makes the law declared by the Supreme Court binding on all courts in India. The Article means courts other than the Supreme Court itself.',
      'Otherwise a mistake in reading the Constitution could stay uncorrected for a long time, because the Constitution is hard to amend.',
      'Until Parliament makes a law under Article 286(2), no State can tax sales or purchases in the course of trade between States. The majority view in United Motors was overruled.',
      'Bihar was told not to tax dealers from other States on such sales, even where the goods were delivered in Bihar for use there.'
    ] },
    { kind: 'dissent', label: 'Justices Jagannadhadas, Venkatarama Aiyar and Sinha, in dissent', points: [
      'United Motors should continue to hold good, and the appeal should have been dismissed.'
    ] }
  ],
  principles: [
    'A mistaken reading of the Constitution deserves correction more readily than one of a statute, because the Constitution is so much harder to amend.',
    'So the Court\'s own past rulings bind every other court, but not the Court itself, which can correct its own mistakes.'
  ],
  legacy: [
    'Parliament passed the Sales Tax Laws Validation Act, 1956. The Sixth Amendment (1956) gave Parliament the power to tax sales between States, and the Central Sales Tax Act, 1956 followed.'
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
  summary: 'The Bhopal gas disaster settlement of US $470 million was upheld on review. But the Court set aside the quashing of the criminal cases and revived the prosecutions. The Court also held that no ordinary law can limit its power under Article 142.',
  background: [
    'On the night of 2 and 3 December 1984, methyl isocyanate gas leaked from the plant of Union Carbide India Ltd. in Bhopal. Thousands of people died, and many more were injured.',
    'Under the Bhopal Gas Leak Disaster (Processing of Claims) Act, 1985, the Union of India represented all the victims and sued Union Carbide Corporation, the American parent company.',
    'Article 142 lets the Supreme Court pass any order needed to do "complete justice" in a case before it.',
    'A settlement ends a case by agreement between the parties, usually with one side paying money. A review lets the Court look again at its own order.'
  ],
  question: [
    'Could the Supreme Court, under Article 142, take over the civil suits and criminal cases and end them by recording a settlement?',
    'Was the quashing of the criminal cases as part of the settlement valid?',
    'Was the settlement void because the victims were not heard, or because it went against public policy?'
  ],
  facts: [
    'On 14 and 15 February 1989, while hearing appeals that arose from the suit, the Supreme Court recorded a settlement of US $470 million. The Court also ended all civil and criminal cases.',
    'Groups of victims and others filed review petitions and writ petitions against the settlement.'
  ],
  held: [
    { kind: 'majority', label: 'The main judgment by Justice M.N. Venkatachaliah, with Justice Ahmadi dissenting in part', points: [
      'Under Article 142(1), the Court had the power to take over the suits pending in the Bhopal District Court and the criminal cases, and to end them on the terms of the settlement.',
      'The Court also had the power under Article 142(1) to quash the criminal cases, and a provision in an ordinary law cannot limit that power. But on the facts, quashing them was not justified, so they were revived.',
      'The part of the 1989 orders that barred future criminal cases was also set aside.',
      'The settlement was not void for lack of a hearing to the victims, or for going against public policy. The settlement was left in place.',
      'If the settlement fund proved too small, the Union of India must make up the shortfall.',
      'The Court ordered quick decisions on claims, and a hospital of at least 500 beds giving free treatment for eight years. The Court also ordered group medical insurance for about one lakh people in the affected wards who had not filed claims.'
    ] },
    { kind: 'dissent', label: 'Justice A.M. Ahmadi, dissenting in part', points: [
      'Justice Ahmadi agreed with the other conclusions. But the Union of India could not be made to pay any shortfall, because it had not been found to be a wrongdoer.'
    ] }
  ],
  principles: [
    'So the company\'s money settled the claims for compensation, but it could not buy the accused freedom from trial.'
  ],
  legacy: [
    'In 2010 a court in Bhopal convicted seven former officials of Union Carbide India Ltd. of causing death by negligence.',
    'In Supreme Court Bar Association (1998), the Court explained that Article 142 cannot be used to ignore express provisions of a law that deals with the subject.',
    'In March 2023 five judges dismissed the Union of India\'s curative petition, which asked for more compensation from the successors of Union Carbide.'
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
  summary: 'The Supreme Court cannot suspend a lawyer\'s licence to practise as a punishment for contempt. The power to suspend belongs to the Bar Councils under the Advocates Act, and Article 142 cannot be used to take it over. In re Vinay Chandra Mishra (1995) was overruled on this point.',
  background: [
    'Contempt of court means disobeying or insulting a court in a way that interferes with justice. Under Article 129, the Supreme Court can punish contempt of itself.',
    'Under the Advocates Act, 1961, the Bar Councils, which are bodies of lawyers, discipline lawyers for professional misconduct. They can suspend or cancel a lawyer\'s licence after a fixed procedure.',
    'Article 142 lets the Supreme Court pass any order needed to do "complete justice" in a case before it.'
  ],
  question: [
    'When punishing a lawyer for contempt, can the Supreme Court suspend the lawyer\'s licence to practise?',
    'Can Article 142 be used to exercise a power that a law gives to another body?'
  ],
  facts: [
    'In In re Vinay Chandra Mishra (1995), three judges found a lawyer guilty of criminal contempt for using insulting and threatening language to overawe the court.',
    'The Court gave him a suspended sentence of six weeks\' simple imprisonment, and suspended him from practice for three years.',
    'The Supreme Court Bar Association filed a writ petition under Article 32. The Association argued that only the disciplinary committees of the Bar Councils can suspend a lawyer\'s licence.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Justice A.S. Anand wrote the judgment', points: [
      'Article 129 gives the Supreme Court the power to punish contempt of itself. The recognised punishments include a fine and imprisonment.',
      'Suspending a lawyer\'s licence is not a recognised punishment for contempt. Suspension is a punishment for professional misconduct under the Advocates Act, imposed by the Bar Councils after a detailed procedure.',
      '"Article 142, even with the width of its amplitude, cannot be used to build a new edifice where none existed earlier, by ignoring express statutory provisions dealing with a subject."',
      'Article 142 adds to the law so that the Court can do complete justice in a case. Article 142 cannot be used to take over a power that a law gives to another body.',
      'In re Vinay Chandra Mishra is wrong to the extent that it suspended the lawyer\'s licence.',
      'The Court may still stop a lawyer guilty of contempt from appearing before it until the contempt is made good, and may withdraw the privilege of practising as an Advocate-on-Record.'
    ] }
  ],
  principles: [
    'So even the Court\'s widest power works inside the law, not above it.'
  ],
  legacy: [

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
  summary: 'The law by which the Centre took over the land at Ayodhya was upheld, except the section that ended all pending court cases over the disputed site. The Court declined to answer the President\'s question on whether a Hindu temple had stood there.',
  background: [
    'For decades, Hindu and Muslim parties had argued in court over who owned the site of the Babri Masjid at Ayodhya. Hindu parties claimed that a temple to Ram had stood there before the mosque.',
    'Under Article 143, the President can ask the Supreme Court for its opinion. The Court may decline to answer if the question is not suitable.',
    'Namaz is the Muslim prayer. A statutory receiver holds disputed property under a law, until a court decides who owns it.'
  ],
  question: [
    'Was the Acquisition of Certain Area at Ayodhya Act, 1993 valid?',
    'Could the Act end all pending suits about the disputed site without providing another way to settle the dispute?',
    'Should the Court answer the President\'s question under Article 143?'
  ],
  facts: [
    'The Babri Masjid at Ayodhya was demolished on 6 December 1992.',
    'On 7 January 1993 an ordinance took over 67.703 acres of land in and around the disputed area. The same day the President asked the Supreme Court under Article 143 whether a Hindu temple or religious structure had stood on the site before the mosque was built.',
    'Parliament replaced the ordinance with the Acquisition of Certain Area at Ayodhya Act, 1993. Section 4(3) of the Act ended all pending suits and cases about the disputed area.',
    'Writ petitions challenged the Act, and the President\'s question was heard with them.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of three: Justice J.S. Verma, for himself, Chief Justice Venkatachaliah and Justice Ray', points: [
      'The Act is valid, except Section 4(3). The section ended all pending suits without providing any other way to settle the dispute, so it is unconstitutional.',
      'With Section 4(3) struck down, the pending suits came back to life and must be decided according to law.',
      'The disputed area belongs to the Central Government as a statutory receiver. The Centre must keep things as they are and hand the area over to whichever party wins the suits.',
      'A mosque has no special protection from being taken over by the State. A mosque is not an essential part of the practice of Islam, and namaz can be offered anywhere.',
      'Because the suits had come back to life, the President\'s question was unnecessary. The Court respectfully declined to answer it and returned it.'
    ] },
    { kind: 'dissent', label: 'Justice S.P. Bharucha, for himself and Justice Ahmadi, in dissent', points: [
      'The whole Act is unconstitutional and must be struck down.',
      'The President\'s question should be returned unanswered, because answering it would harm the Court\'s standing.',
      '"Ayodhya is a storm that will pass. The dignity and honour of the Supreme Court cannot be compromised because of it."'
    ] }
  ],
  principles: [
    'So the dispute went back to the ordinary courts. The Court refused to settle a question of history and faith by giving an opinion.'
  ],
  legacy: [
    'On 27 September 2018, in M. Siddiq v. Mahant Suresh Das, three judges declined by 2 votes to 1 to send the remark about mosques to a larger bench.',
    'On 9 November 2019, in the same case, five judges decided the ownership suits. The disputed site was given for a temple, and five acres of land elsewhere in Ayodhya were to be given for a mosque.'
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
  summary: 'The Comptroller and Auditor General (CAG) can examine the accounts of private telecom companies that share their revenue with the government, to check that the Union gets its due share. Spectrum is a natural resource that the State holds in trust for the people.',
  background: [
    'The CAG audits the accounts of the Union and the States under Articles 148 to 151. Article 149 sets out the CAG\'s duties and powers.',
    'Spectrum is the set of radio frequencies that mobile phones use. Only the government can allot it, and companies pay for its use.',
    'Under the public trust doctrine, the State holds natural resources in trust for the people, so it must allot them fairly. In the 2G case (2012), the Court cancelled 122 telecom licences that had been given out unfairly.',
    'Money paid to the government goes into its main account, the Consolidated Fund of India.'
  ],
  question: [
    'Can the CAG audit the accounts of private telecom companies?',
    'Does the sharing of revenue under their licences bring their accounts within the CAG\'s powers under Article 149?'
  ],
  facts: [
    'Under their Unified Access Service licences, telecom companies paid the Union a licence fee and spectrum charges as a share of their adjusted gross revenue. The money went into the Consolidated Fund of India.',
    'In 2010 the CAG, through the Department of Telecommunications and TRAI, asked the companies for their accounts from 2006-07 onwards for audit.',
    'The Telecom Disputes Settlement and Appellate Tribunal set aside the demand. The Delhi High Court upheld the CAG\'s power.',
    'The association of the companies appealed to the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'Both judges agreed (2:0). Justice K.S. Radhakrishnan wrote the judgment', points: [
      'Natural resources such as spectrum are public property. The State hands them out as a trustee for the people and must act fairly.',
      'Under Article 149 and Section 16 of the CAG (Duties, Powers and Conditions of Service) Act, 1971, the CAG can audit all money payable into the Consolidated Fund of India.',
      'The CAG can examine the companies\' accounts to find out whether the Union is getting its due share of licence fee and spectrum charges. The examination is not a general audit of private companies.',
      'The licences also let the government call for the companies\' books of account at any time.',
      'The companies\' appeals were dismissed, and the tribunal\'s decision was set aside.'
    ] }
  ],
  principles: [
    'So a private company that profits from public spectrum cannot hide from the public auditor the figures on which the public\'s share depends.'
  ],
  legacy: [
    'In October 2019 the Supreme Court upheld the Department of Telecommunications\' wide definition of adjusted gross revenue, which led to large dues from telecom companies.'
  ],
  source: 'https://indiankanoon.org/doc/112886265/'
}

});
