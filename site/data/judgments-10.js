/* Landmark judgments, rewritten in full. Batch 10: Articles 72 to 75, and the
   Governor.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. Each entry was checked against the full text
   of the judgment on Indian Kanoon: the date, the bench, the split, who wrote
   each opinion, the facts, the operative holding and any directions. S.R.
   Bommai runs to several hundred pages; its conclusions and the alignment of
   the six opinions were read from the judgment itself. The corrections to the
   short summaries that came out of the check: Kehar Singh was decided on
   16 December 1988, not in 1989. Samsher Singh concerned two probationary
   judicial officers, not one, and both termination orders were set aside.
   In Shivraj Singh Chouhan the floor test was ordered by an interim order on
   19 March 2020; the reasoned judgment followed on 13 April 2020.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'kehar-singh-1989': {
  name: 'Kehar Singh v. Union of India',
  full: 'Kehar Singh and Another v. Union of India and Another',
  aka: 'The pardon power case',
  decided: '16 December 1988',
  year: 1988,
  citation: '(1989) 1 SCC 204, AIR 1989 SC 653',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 72', 'Pardon power', 'Judicial review'],
  judges: 'R.S. Pathak CJI, E.S. Venkataramiah, Ranganath Misra, M.N. Venkatachaliah and N.D. Ojha',
  summary: 'When deciding a mercy petition under Article 72, the President can examine the evidence afresh and take a different view from the courts. The President acts on the advice of the Council of Ministers, and the petitioner has no right to an oral hearing.',
  question: [
    'Can the President, when considering a petition under Article 72, examine the evidence and differ from the Supreme Court on guilt or sentence?',
    'Does the petitioner have a right to an oral hearing before the President?',
    'Can the courts review the use of the pardon power, and are guidelines needed?'
  ],
  facts: [
    'Prime Minister Indira Gandhi was assassinated on 31 October 1984. Kehar Singh was convicted of conspiracy to murder her and sentenced to death.',
    'The Supreme Court dismissed Kehar Singh\'s appeal on 3 August 1988.',
    'On 14 October 1988 Kehar Singh\'s son, Rajinder Singh, petitioned the President for a pardon under Article 72. The petition said the evidence showed that Kehar Singh was innocent, and asked that a representative be allowed to meet the President.',
    'The Secretary to the President replied that the President could not go into the merits of a case finally decided by the Supreme Court. The decision was challenged under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Chief Justice R.S. Pathak', points: [
      'The power to pardon is part of the constitutional scheme. It is not merely a private act of grace.',
      'The President can examine the evidence on record and reach a different conclusion from the court on guilt and on sentence. In doing so, the President acts under a constitutional power that is entirely different from judicial power.',
      'The President exercises the power on the advice of the Council of Ministers, under Article 74(1).',
      'The petitioner has no right to an oral hearing. The President decides how to deal with the petition and what material to consider.',
      'No specific guidelines need be laid down, because the power under Article 72 is of the widest amplitude.',
      'Whether the President acted within the power under Article 72 can be examined by the courts. But the order cannot be reviewed on its merits, except within the narrow limits set in Maru Ram (1980).',
      'The President had proceeded on the wrong view that the merits could not be examined. The petition was to be treated as pending and decided afresh, and the death sentence was kept in abeyance meanwhile.'
    ] }
  ],
  principles: [
    'The pardon power under Article 72 is a constitutional power, exercised on the advice of ministers.',
    'The President may review the evidence and differ from the courts.',
    'Judicial review of decisions on pardon is narrow.'
  ],
  legacy: [
    'Kehar Singh\'s mercy petition was later rejected, and Kehar Singh was executed on 6 January 1989.',
    'In Epuru Sudhakar (2006), the Court set out the grounds on which an order of pardon or remission can be challenged.'
  ],
  source: 'https://indiankanoon.org/doc/1152284/'
},

'shatrughan-chauhan-2014': {
  name: 'Shatrughan Chauhan v. Union of India',
  full: 'Shatrughan Chauhan and Another v. Union of India and Others',
  aka: 'The mercy petition delay case',
  decided: '21 January 2014',
  citation: '(2014) 3 SCC 1',
  bench: 3,
  result: 'Unanimous, 3:0',
  tags: ['Article 72', 'Death penalty', 'Article 21'],
  judges: 'P. Sathasivam CJI, Ranjan Gogoi and Shiva Kirti Singh',
  summary: 'Long and unexplained delay in deciding a mercy petition is a ground to commute a death sentence to life imprisonment, in every kind of case. The death sentences of 15 convicts were commuted, and the Court laid down safeguards for prisoners on death row.',
  question: [
    'Can delay in deciding a mercy petition, after the death sentence has become final, be a ground to commute the sentence?',
    'Does this ground apply to offences under anti-terror laws such as TADA?',
    'Are mental illness and solitary confinement grounds for relief?',
    'What procedural safeguards should protect prisoners on death row?'
  ],
  facts: [
    'Fifteen prisoners whose death sentences had become final filed writ petitions. Their mercy petitions had been rejected after long delays.',
    'The longest delay in deciding a mercy petition was about 12 years.',
    'The petitioners argued that the delay, mental illness, solitary confinement and other lapses violated Article 21.',
    'In Devender Pal Singh Bhullar (2013), the Court had held that delay could not help convicts in TADA cases.',
    'The People\'s Union for Democratic Rights asked the Court to lay down guidelines for dealing with mercy petitions.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (3:0), judgment by Chief Justice P. Sathasivam', points: [
      'Article 21 protects a condemned prisoner until the very last breath. Events after the final judgment, called supervening circumstances, can justify commuting a death sentence.',
      'Undue, inordinate and unexplained delay in deciding a mercy petition is a ground for commutation. The delay must not have been caused by the prisoner.',
      'This ground applies to all cases, including cases under TADA. Devender Pal Singh Bhullar was per incuriam on this point.',
      'A prisoner who has become insane or mentally ill, as certified by a doctor, cannot be executed.',
      'Decisions on mercy petitions can be reviewed on limited grounds: non-application of mind, mala fides, extraneous considerations, exclusion of relevant material, or arbitrariness.',
      'The death sentences of the 15 convicts were commuted to life imprisonment.'
    ] },
    { kind: 'unanimous', label: 'Guidelines for prisoners on death row', points: [
      'Solitary confinement of a prisoner before the mercy petition is rejected is unconstitutional, as held in Sunil Batra (1978).',
      'The rejection of a mercy petition by the Governor or the President must be sent at once, in writing, to the prisoner and the family. The prisoner is entitled to a copy of the rejection.',
      'There must be at least 14 days between the communication of the rejection and the date of execution. This lets the prisoner prepare, seek court remedies and meet the family.',
      'Legal aid must be provided at every stage. The jail superintendent must inform the nearest legal aid centre when a mercy petition is rejected.',
      'The Ministry of Home Affairs must call for all records at once and send its advice to the President within a reasonable time.',
      'Prisoners must be given copies of their court papers within a week, to help with mercy petitions and court remedies.',
      'Prisoners on death row must have regular mental health checks. Before an execution, the superintendent must be satisfied from medical reports that the prisoner is fit.',
      'Prison authorities must allow a final meeting with family and friends. A post-mortem after execution is compulsory.'
    ] }
  ],
  principles: [
    'The protection of Article 21 lasts until execution, so delay and mental illness after the final judgment matter.',
    'Mercy petitions must be decided without undue delay, and prisoners on death row have procedural rights.'
  ],
  legacy: [
    'On 18 February 2014, relying on this judgment, the Court commuted the death sentences of three convicts in the Rajiv Gandhi assassination case because of delay.'
  ],
  source: 'https://indiankanoon.org/doc/59968841/'
},

'samsher-singh-1974': {
  name: 'Samsher Singh v. State of Punjab',
  full: 'Shamsher Singh and Another v. State of Punjab',
  aka: 'The aid and advice case',
  decided: '23 August 1974',
  citation: '(1974) 2 SCC 831, AIR 1974 SC 2192',
  bench: 7,
  result: 'Unanimous, 7:0',
  tags: ['Articles 74 and 163', 'Aid and advice', 'Article 311'],
  judges: 'A.N. Ray CJI, D.G. Palekar, K.K. Mathew, Y.V. Chandrachud, A. Alagiriswami, P.N. Bhagwati and V.R. Krishna Iyer',
  summary: 'The President and the Governor are constitutional heads. They act on the aid and advice of their Council of Ministers, except where the Constitution gives the Governor a discretion. The termination orders of two probationary judicial officers were set aside.',
  question: [
    'Must the Governor be personally satisfied before removing a probationary officer, or can the Governor act on the advice of ministers?',
    'Were the termination orders of the two probationary judicial officers really punishments, which needed an inquiry under Article 311?',
    'Did the High Court properly exercise its control over the subordinate judiciary under Article 235?'
  ],
  facts: [
    'Samsher Singh and Ishwar Chand Agarwal were probationary officers in the Punjab Civil Service (Judicial Branch).',
    'Samsher Singh\'s services were terminated on 27 April 1967. Agarwal\'s services were terminated on 15 December 1969, on the recommendation of the High Court.',
    'In one of the cases, the High Court had asked the State Government to hold an inquiry through its Vigilance Department.',
    'The officers argued that the orders were invalid because the Governor had not personally decided them. They relied on Sardari Lal v. Union of India (1971).'
  ],
  held: [
    { kind: 'majority', label: 'Majority opinion by Chief Justice A.N. Ray, for himself and Justices Palekar, Mathew, Chandrachud and Alagiriswami', points: [
      'The President and the Governor exercise their powers on the aid and advice of their Council of Ministers, except where the Constitution requires the Governor to act in discretion.',
      'The satisfaction required by the Constitution is not the personal satisfaction of the President or the Governor. It is the satisfaction of the Council of Ministers.',
      'A decision taken by a minister or an officer under the rules of business is the decision of the President or the Governor.',
      'Sardari Lal, which held that the President must be personally satisfied, is not good law.',
      'An order terminating a probationer can be a punishment even if it is worded innocently. The Court looks at its substance. Both orders were in substance punishments made without an inquiry under Article 311, so both were set aside.',
      'The subordinate judiciary is under the control of the High Court. The High Court failed in that duty when it asked the Government to hold an inquiry through its Vigilance Department.'
    ] },
    { kind: 'concurring', label: 'Concurring opinion (Justice V.R. Krishna Iyer, for himself and Justice P.N. Bhagwati)', points: [
      'The President is "not at all a glorified cipher". But the real functions of government are carried on by the Prime Minister and the Council of Ministers.',
      'The President must act on the advice of ministers, except in a narrow area. The President keeps the right to be consulted, to warn and to encourage.'
    ] }
  ],
  principles: [
    'India follows the cabinet form of government. The President and the Governors act on the advice of their ministers.',
    'Whether a termination is a punishment depends on its substance, not its wording.',
    'The High Court, not the executive, controls the subordinate judiciary.'
  ],
  legacy: [
    'The 42nd Amendment (1976) amended Article 74(1) to say that the President shall act in accordance with the advice of the Council of Ministers.',
    'The 44th Amendment (1978) allowed the President to send the advice back once for reconsideration. The President must act on the advice given after reconsideration.'
  ],
  source: 'https://indiankanoon.org/doc/1382698/'
},

'sr-bommai-1994': {
  name: 'S.R. Bommai v. Union of India',
  full: 'S.R. Bommai and Others v. Union of India and Others',
  aka: 'The President\'s Rule case',
  decided: '11 March 1994',
  citation: '(1994) 3 SCC 1, AIR 1994 SC 1918',
  bench: 9,
  result: 'Majority on the main points, in six opinions',
  tags: ['Article 356', 'Floor test', 'Secularism'],
  judges: 'S. Ratnavel Pandian, A.M. Ahmadi, Kuldip Singh, J.S. Verma, P.B. Sawant, K. Ramaswamy, S.C. Agrawal, Yogeshwar Dayal and B.P. Jeevan Reddy',
  summary: 'A proclamation of President\'s Rule under Article 356 can be reviewed by the courts. A government\'s majority must be tested on the floor of the House, and the Assembly cannot be dissolved before Parliament approves the proclamation. Secularism is a basic feature of the Constitution.',
  question: [
    'Can the courts review a proclamation under Article 356, and how far?',
    'Does Article 74(2) stop the courts from seeing the material behind a proclamation?',
    'Can the Assembly be dissolved before Parliament approves the proclamation, and can a dismissed government be restored?',
    'Could the governments of Madhya Pradesh, Rajasthan and Himachal Pradesh be dismissed after the demolition of the Babri Masjid?'
  ],
  facts: [
    'The case heard challenges to President\'s Rule in six States.',
    'In Karnataka, the government of S.R. Bommai was dismissed on 21 April 1989, after the Governor reported that it had lost its majority. No floor test was held. The Karnataka High Court dismissed Bommai\'s petition.',
    'President\'s Rule had also been imposed in Nagaland in 1988 and in Meghalaya on 11 October 1991.',
    'After the demolition of the Babri Masjid on 6 December 1992, the governments of Madhya Pradesh, Rajasthan and Himachal Pradesh were dismissed. The Madhya Pradesh High Court quashed the proclamation for that State.'
  ],
  held: [
    { kind: 'majority', label: 'Majority on the main points: Justice Sawant for himself and Justice Kuldip Singh, Justice Jeevan Reddy for himself and Justice Agrawal, and Justice Pandian', points: [
      'The power under Article 356 is a conditional power, not an absolute one. The President\'s satisfaction must be based on relevant material.',
      'A proclamation can be reviewed by the courts. It can be struck down if it is mala fide or based on wholly irrelevant or extraneous grounds.',
      'The court does not examine whether the material was correct or adequate. It examines only whether the material was relevant.',
      'Article 74(2) bars an inquiry only into the advice given to the President. It does not bar the court from seeing the material on which the advice was based.',
      'Whether a government has lost its majority must be tested on the floor of the House. The only exception is where all-pervasive violence makes a free vote impossible.',
      'The Assembly can be dissolved only after both Houses of Parliament approve the proclamation. Until then it can only be kept in suspended animation.',
      'If the court strikes down a proclamation, it can restore the dismissed government and revive the Assembly.',
      'Secularism is a basic feature of the Constitution. A State government that pursues unsecular policies acts against the Constitution, and Article 356 can be used against it.',
      'The Karnataka and Meghalaya proclamations were unconstitutional. They were not formally struck down, because fresh elections had since been held.',
      'The proclamations for Madhya Pradesh, Rajasthan and Himachal Pradesh were valid. The judgment of the Madhya Pradesh High Court was set aside.'
    ] },
    { kind: 'concurring', label: 'Separate opinions (Justices K. Ramaswamy and A.M. Ahmadi)', points: [
      'Justices Ramaswamy and Ahmadi wrote separate opinions on the scope of review. Both accepted that secularism is a basic feature of the Constitution.'
    ] },
    { kind: 'dissent', label: 'Narrower view (Justice J.S. Verma, for himself and Justice Yogeshwar Dayal)', points: [
      'Only the Meghalaya proclamation was open to judicial review, and it was invalid. The proclamations for Karnataka, Madhya Pradesh, Rajasthan and Himachal Pradesh were not justiciable.'
    ] }
  ],
  principles: [
    'President\'s Rule under Article 356 is subject to judicial review.',
    'The floor of the House is the place to test a government\'s majority.',
    'Secularism is part of the basic structure of the Constitution.'
  ],
  legacy: [
    'The use of Article 356 fell sharply after this judgment.',
    'In Rameshwar Prasad v. Union of India (2006), the Court applied these principles and held the dissolution of the Bihar Assembly in 2005 unconstitutional.',
    'In Shivraj Singh Chouhan (2020), the Court relied on the floor test rule laid down here.'
  ],
  source: 'https://indiankanoon.org/doc/60799/'
},

'shivraj-singh-chouhan-2020': {
  name: 'Shivraj Singh Chouhan v. Speaker, Madhya Pradesh Legislative Assembly',
  full: 'Shivraj Singh Chouhan and Others v. Speaker, Madhya Pradesh Legislative Assembly and Others',
  aka: 'The Madhya Pradesh floor test case',
  decided: '13 April 2020',
  citation: 'AIRONLINE 2020 SC 439',
  bench: 2,
  result: 'Unanimous, 2:0',
  tags: ['Article 175', 'Floor test', 'Governor'],
  judges: 'D.Y. Chandrachud and Hemant Gupta',
  summary: 'A Governor can ask a government to prove its majority on the floor of the House, even while the House is in session, if there is objective material to doubt its majority. The power must not be used to topple an elected government.',
  question: [
    'Can the Governor call for a floor test while the Assembly is in session?',
    'On what material may the Governor act?',
    'Does the Governor\'s direction interfere with the Speaker\'s power over resignations?'
  ],
  facts: [
    'On 10 March 2020, 22 Congress members of the Madhya Pradesh Legislative Assembly sent their resignations to the Speaker.',
    'On 14 March 2020 the Speaker accepted the resignations of six of them, who had been ministers.',
    'The Governor then directed that a trust vote be held after the Governor\'s address on 16 March. On 16 March the Speaker adjourned the House to 26 March, citing COVID-19.',
    'Shivraj Singh Chouhan, a former Chief Minister, and other members petitioned the Supreme Court. On 19 March the Court ordered a floor test for 20 March.',
    'Chief Minister Kamal Nath resigned on 20 March, before the vote. The Court gave its reasons on 13 April 2020.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (2:0), judgment by Justice D.Y. Chandrachud', points: [
      'The Governor can call on the Chief Minister to prove the government\'s majority on the floor of the House, even while the House is in session.',
      'The Governor must act on objective material and reasons that are relevant and germane. The Governor\'s satisfaction is not immune from judicial review.',
      'The power is not meant to destabilise or displace an elected government. Without compelling circumstances, the Governor should let the ordinary process of a no-confidence motion run its course.',
      'Following S.R. Bommai, a government\'s majority must be decided on the floor of the House, not by the Governor\'s own assessment.',
      'The Governor\'s direction did not interfere with the Speaker\'s power to decide whether resignations are voluntary and genuine, or to decide questions of disqualification.'
    ] }
  ],
  principles: [
    'A floor test is the proper way to settle a doubt about a government\'s majority.',
    'The Governor may call for a floor test on objective material, but must not use the power to topple a government.'
  ],
  legacy: [
    'In Subhash Desai v. Principal Secretary, Governor of Maharashtra (2023), five judges held that the Governor had no objective material to call for a floor test in Maharashtra in June 2022.'
  ],
  source: 'https://indiankanoon.org/doc/179738554/'
},

'epuru-sudhakar-2006': {
  name: 'Epuru Sudhakar v. Government of Andhra Pradesh',
  full: 'Epuru Sudhakar and Another v. Government of Andhra Pradesh and Others',
  aka: 'The remission review case',
  decided: '11 October 2006',
  citation: '(2006) 8 SCC 161, AIR 2006 SC 3385',
  bench: 2,
  result: 'Unanimous, 2:0',
  tags: ['Article 161', 'Pardon power', 'Judicial review'],
  judges: 'Arijit Pasayat and S.H. Kapadia',
  summary: 'Orders of pardon or remission under Articles 72 and 161 can be reviewed by the courts on limited grounds. A Governor\'s order of remission, based on irrelevant and political considerations, was set aside.',
  question: [
    'Can a court review an order of remission passed by the Governor under Article 161?',
    'On what grounds can such an order be set aside?'
  ],
  facts: [
    'Gowru Venkata Reddy was serving a sentence of 10 years\' rigorous imprisonment in a case of killings. The petitioners were sons of people who had been killed.',
    'By an order dated 11 August 2005, the Governor of Andhra Pradesh granted Reddy remission of the sentence.',
    'The petitioners challenged the order under Article 32. They said it rested on irrelevant material and political considerations, and that relevant facts had been kept from the Governor.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (2:0), judgment by Justice Arijit Pasayat, with a concurring opinion by Justice S.H. Kapadia', points: [
      'Orders under Articles 72 and 161 are subject to judicial review.',
      'Such an order can be challenged if it was passed without application of mind, if it is mala fide, if it was passed on extraneous or wholly irrelevant considerations, if relevant material was kept out of consideration, or if it is arbitrary.',
      'The official reports placed before the Governor relied on irrelevant matters. One described the convict as "a good Congress Worker". A police report on the likely reaction to his release changed after the government changed.',
      'The petition for remission did not mention a criminal case pending against the convict. A person who asks for such a discretionary power to be used must come with clean hands.',
      'Irrelevant and extraneous material had entered the decision. So the remission order was set aside, and the Government could treat the petition as pending and reconsider it.'
    ] }
  ],
  principles: [
    'The power of pardon and remission is not beyond judicial review. It must be exercised on relevant considerations.',
    'Courts do not decide whether a pardon should be granted. They check whether the decision was lawfully made.'
  ],
  legacy: [
    'In Shatrughan Chauhan (2014), the Court applied the same grounds of review to decisions on mercy petitions.'
  ],
  source: 'https://indiankanoon.org/doc/758562/'
}

});
