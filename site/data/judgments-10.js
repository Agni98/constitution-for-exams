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
  summary: 'When deciding a mercy petition under Article 72, the President can look at the evidence afresh and take a different view from the courts. The President acts on the advice of the ministers, and the petitioner has no right to an oral hearing.',
  background: [
    'Under Article 72, the President can pardon a convict, or reduce, suspend or change a sentence, including a death sentence. Article 161 gives Governors a similar power. A request to use this power is called a mercy petition.',
    'Under Article 74(1), the President acts on the advice of the Council of Ministers. So in practice, the government decides mercy petitions.',
    'In Maru Ram (1980), the Court held that decisions on pardon can be reviewed by the courts, but only on narrow grounds.'
  ],
  question: [
    'When considering a mercy petition under Article 72, can the President look at the evidence and differ from the Supreme Court on guilt or sentence?',
    'Does the petitioner have a right to be heard in person by the President?',
    'Can the courts review how the pardon power is used, and are guidelines needed?'
  ],
  facts: [
    'Prime Minister Indira Gandhi was assassinated on 31 October 1984. Kehar Singh was convicted of conspiracy to murder her and sentenced to death.',
    'The Supreme Court dismissed Kehar Singh\'s appeal on 3 August 1988.',
    'On 14 October 1988 Kehar Singh\'s son, Rajinder Singh, petitioned the President for a pardon. The petition said the evidence showed that Kehar Singh was innocent, and asked that a representative be allowed to meet the President.',
    'The Secretary to the President replied that the President could not go into the merits of a case finally decided by the Supreme Court. The reply was challenged under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Chief Justice R.S. Pathak wrote the judgment', points: [
      'The power to pardon is part of the constitutional scheme. The power is not merely a private act of kindness.',
      'The President can examine the evidence on record and reach a different view from the court on guilt and on sentence. In doing so, the President uses a constitutional power that is entirely different from the power of a court.',
      'The President uses the power on the advice of the Council of Ministers, under Article 74(1).',
      'The petitioner has no right to be heard in person. The President decides how to deal with the petition and what material to consider.',
      'No specific guidelines need be laid down, because the power under Article 72 is as wide as it can be.',
      'The courts can check whether the President acted within the power under Article 72. But they cannot review the order on its merits, except within the narrow limits set in Maru Ram.',
      'The President had acted on the wrong view that the merits could not be examined. So the petition was to be treated as pending and decided afresh, and the death sentence was put on hold meanwhile.'
    ] }
  ],
  principles: [
    'So a mercy petition is a real second look at the case, not a formality. But it is a political decision, not a fresh trial.'
  ],
  legacy: [
    'Kehar Singh\'s mercy petition was later rejected, and he was executed on 6 January 1989.',
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
  summary: 'A long, unexplained delay in deciding a mercy petition is a ground to change a death sentence to life imprisonment, in every kind of case. The death sentences of 15 convicts were changed, and the Court laid down safeguards for prisoners on death row.',
  background: [
    'A death sentence goes through the trial court, the High Court and the Supreme Court. After that, the prisoner can send a mercy petition to the Governor and the President.',
    'Under Article 72, the President can pardon a convict, or reduce, suspend or change a sentence, including a death sentence. Article 161 gives Governors a similar power. A request to use this power is called a mercy petition.',
    'Article 21 protects life and personal liberty. In Sunil Batra (1978), the Court held that a prisoner under sentence of death cannot be kept in solitary confinement before his mercy petition is decided.',
    'TADA, the Terrorist and Disruptive Activities (Prevention) Act, was an anti-terror law in force from 1985 to 1995.',
    'A judgment is per incuriam when it was given without noticing a binding rule or an earlier binding decision. Courts do not follow a judgment on the point where it is per incuriam.'
  ],
  question: [
    'After a death sentence becomes final, can delay in deciding the mercy petition be a ground to reduce the sentence?',
    'Does this ground apply to offences under anti-terror laws such as TADA?',
    'Are mental illness and solitary confinement grounds for relief?',
    'What safeguards should protect prisoners on death row?'
  ],
  facts: [
    'Fifteen prisoners whose death sentences had become final filed writ petitions. Their mercy petitions had been rejected after long delays, the longest about 12 years.',
    'The petitioners argued that the delay, mental illness, solitary confinement and other lapses broke Article 21.',
    'In Devender Pal Singh Bhullar (2013), the Court had held that delay could not help convicts in TADA cases.',
    'The People\'s Union for Democratic Rights asked the Court to lay down guidelines for dealing with mercy petitions.'
  ],
  held: [
    { kind: 'unanimous', label: 'All three judges agreed (3:0). Chief Justice P. Sathasivam wrote the judgment', points: [
      'Article 21 protects a condemned prisoner until the very last breath. Events after the final judgment, called supervening circumstances, can justify changing a death sentence.',
      'Undue, very long and unexplained delay in deciding a mercy petition is a ground to change the sentence. The prisoner must not have caused the delay.',
      'The ground applies to all cases, including cases under TADA. Devender Pal Singh Bhullar was per incuriam on this point.',
      'A prisoner who has become insane or mentally ill, as certified by a doctor, cannot be executed.',
      'Decisions on mercy petitions can be reviewed on limited grounds: the decision maker did not apply their mind, acted in bad faith, relied on irrelevant matters, left out relevant material, or acted arbitrarily.',
      'The death sentences of the 15 convicts were changed to life imprisonment.'
    ] },
    { kind: 'unanimous', label: 'Guidelines for prisoners on death row', points: [
      'Keeping a prisoner in solitary confinement before the mercy petition is rejected is unconstitutional, as held in Sunil Batra.',
      'The rejection of a mercy petition must be sent at once, in writing, to the prisoner and the family. The prisoner is entitled to a copy of the rejection.',
      'At least 14 days must pass between telling the prisoner of the rejection and the date of execution. The gap lets the prisoner prepare, go to court and meet the family.',
      'Legal aid must be provided at every stage. The jail superintendent must inform the nearest legal aid centre when a mercy petition is rejected.',
      'The Ministry of Home Affairs must call for all records at once and send its advice to the President within a reasonable time.',
      'Prisoners must be given copies of their court papers within a week, to help with mercy petitions and court remedies.',
      'Prisoners on death row must have regular mental health checks. Before an execution, the superintendent must be satisfied from medical reports that the prisoner is fit.',
      'Prison authorities must allow a final meeting with family and friends. A post-mortem after execution is compulsory.'
    ] }
  ],
  principles: [
    'So waiting for years under a death sentence is itself a punishment. When the State causes that wait, the State loses the right to carry out the execution.'
  ],
  legacy: [
    'On 18 February 2014, relying on this judgment, the Court changed the death sentences of three convicts in the Rajiv Gandhi assassination case to life imprisonment because of delay.'
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
  summary: 'The President and the Governor are constitutional heads. They act on the advice of their Council of Ministers, except where the Constitution gives the Governor a discretion. The orders ending the service of two judicial officers on probation were set aside.',
  background: [
    'India follows the British model of cabinet government. The President and the Governors are formal heads, and they act on the advice of their Council of Ministers, led by the Prime Minister or the Chief Minister (Articles 74 and 163).',
    'In Sardari Lal (1971), the Court had held that in some matters the President must be personally satisfied before acting.',
    'A probationer is a new employee on trial for a fixed period before being confirmed. Under Article 311, a government servant cannot be dismissed as a punishment without an inquiry in which they can defend themselves.',
    'Under Article 235, the High Court controls the district courts and the judges below it.'
  ],
  question: [
    'Must the Governor be personally satisfied before removing an officer on probation, or can the Governor act on the advice of ministers?',
    'Were the orders ending the service of two judicial officers on probation really punishments, which needed an inquiry under Article 311?',
    'Did the High Court properly use its control over the lower judiciary under Article 235?'
  ],
  facts: [
    'Samsher Singh and Ishwar Chand Agarwal were officers on probation in the Punjab Civil Service (Judicial Branch).',
    'Samsher Singh\'s service was ended on 27 April 1967. Agarwal\'s service was ended on 15 December 1969, on the recommendation of the High Court.',
    'In one of the cases, the High Court had asked the State Government to hold an inquiry through its Vigilance Department.',
    'The officers argued that the orders were invalid because the Governor had not decided them personally. They relied on Sardari Lal.'
  ],
  held: [
    { kind: 'majority', label: 'The majority opinion by Chief Justice A.N. Ray, for himself and Justices Palekar, Mathew, Chandrachud and Alagiriswami', points: [
      'The President and the Governor use their powers on the advice of their Council of Ministers, except where the Constitution requires the Governor to act in discretion.',
      'The satisfaction that the Constitution requires is not the personal satisfaction of the President or the Governor. The satisfaction required is that of the Council of Ministers.',
      'A decision taken by a minister or an officer under the rules of business is the decision of the President or the Governor.',
      'Sardari Lal, which held that the President must be personally satisfied, is not good law.',
      'An order ending a probationer\'s service can be a punishment even if it is worded innocently. The Court looks at its substance. Both orders were in substance punishments made without an inquiry under Article 311, so both were set aside.',
      'The lower judiciary is under the control of the High Court. The High Court failed in that duty when it asked the government to hold an inquiry through its Vigilance Department.'
    ] },
    { kind: 'concurring', label: 'Justice V.R. Krishna Iyer, for himself and Justice P.N. Bhagwati, agreeing in a separate opinion', points: [
      'The President is "not at all a glorified cipher". But the real work of government is carried on by the Prime Minister and the Council of Ministers.',
      'The President must act on the advice of ministers, except in a narrow area. The President keeps the right to be consulted, to warn and to encourage.'
    ] }
  ],
  principles: [
    'So power rests with the elected ministers, not with the formal head of State. The head of State advises and warns, but follows the ministers\' advice.'
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
  summary: 'A proclamation of President\'s Rule under Article 356 can be reviewed by the courts. A government\'s majority must be tested by a vote in the House, and the Assembly cannot be dissolved before Parliament approves the proclamation. Secularism is a basic feature of the Constitution.',
  background: [
    'Under Article 356, if the President is satisfied that a State government cannot be carried on according to the Constitution, the President can take over the State. The State government is dismissed, and the Centre rules the State. The takeover is called President\'s Rule.',
    'Both Houses of Parliament must approve the proclamation within two months. The Governor\'s report is usually the basis for it.',
    'Article 74(2) says that no court may inquire into the advice that ministers gave to the President.',
    'By 1994, Article 356 had been used more than a hundred times. The Sarkaria Commission had reported in 1988 that it was often misused to remove State governments of rival parties.',
    'A floor test is a vote in the Assembly that shows whether the government still has the support of a majority of members.'
  ],
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
    'After the Babri Masjid was demolished on 6 December 1992, the governments of Madhya Pradesh, Rajasthan and Himachal Pradesh were dismissed. The Madhya Pradesh High Court quashed the proclamation for that State.'
  ],
  held: [
    { kind: 'majority', label: 'The majority on the main points: Justice Sawant for himself and Justice Kuldip Singh, Justice Jeevan Reddy for himself and Justice Agrawal, and Justice Pandian', points: [
      'The power under Article 356 is a conditional power, not an absolute one. The President\'s satisfaction must be based on relevant material.',
      'A proclamation can be reviewed by the courts, and struck down if it was made in bad faith or on wholly irrelevant grounds.',
      'The court does not ask whether the material was correct or enough. The court asks only whether the material was relevant.',
      'Article 74(2) bars an inquiry only into the advice given to the President. The clause does not stop the court from seeing the material on which the advice was based.',
      'Whether a government has lost its majority must be tested by a vote in the House. The only exception is where violence everywhere makes a free vote impossible.',
      'The Assembly can be dissolved only after both Houses of Parliament approve the proclamation. Until then it can only be suspended, kept alive but not sitting.',
      'If the court strikes down a proclamation, it can restore the dismissed government and revive the Assembly.',
      'Secularism is a basic feature of the Constitution. A State government that pursues unsecular policies acts against the Constitution, and Article 356 can be used against it.',
      'The Karnataka and Meghalaya proclamations were unconstitutional. They were not formally struck down, because fresh elections had since been held.',
      'The proclamations for Madhya Pradesh, Rajasthan and Himachal Pradesh were valid. The judgment of the Madhya Pradesh High Court was set aside.'
    ] },
    { kind: 'concurring', label: 'Justices K. Ramaswamy and A.M. Ahmadi, in separate opinions', points: [
      'Justices Ramaswamy and Ahmadi wrote separate opinions on how far the courts can review a proclamation. Both accepted that secularism is a basic feature of the Constitution.'
    ] },
    { kind: 'dissent', label: 'Justice J.S. Verma, for himself and Justice Yogeshwar Dayal, taking a narrower view', points: [
      'Only the Meghalaya proclamation was open to review by the courts, and it was invalid. The proclamations for Karnataka, Madhya Pradesh, Rajasthan and Himachal Pradesh were not matters for the courts.'
    ] }
  ],
  principles: [
    'Federalism is part of the basic structure. The States are not mere agents of the Centre.',
    'So the Centre can no longer dismiss a State government on a Governor\'s say-so. The Centre must show relevant reasons, and the majority is counted in the House.'
  ],
  legacy: [
    'After 1994 the use of Article 356 fell sharply.',
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
  summary: 'A Governor can ask a government to prove its majority in the House, even while the House is sitting, if there is objective material to doubt its majority. But the power must not be used to topple an elected government.',
  background: [
    'A floor test is a vote in the Assembly that shows whether the government still has the support of a majority of members.',
    'Under Article 175, the Governor can address the Assembly and send it messages. The Speaker decides whether a member\'s resignation is genuine, and decides questions of disqualification under the anti-defection law.',
    'A no-confidence motion is the usual way for members to remove a government. Members move it in the House, and the House votes on it.',
    'In S.R. Bommai (1994), the Court held that a government\'s majority must be tested in the House, not in the Governor\'s mind.'
  ],
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
    { kind: 'unanimous', label: 'Both judges agreed (2:0). Justice D.Y. Chandrachud wrote the judgment', points: [
      'The Governor can ask the Chief Minister to prove the government\'s majority in the House, even while the House is in session.',
      'The Governor must act on objective material and on reasons that are relevant. The courts can review the Governor\'s satisfaction.',
      'The power is not meant to unsettle or remove an elected government. Without compelling reasons, the Governor should let the ordinary process of a no-confidence motion run its course.',
      'Following S.R. Bommai, a government\'s majority must be decided in the House, not by the Governor\'s own judgment.',
      'The Governor\'s direction did not interfere with the Speaker\'s power to decide whether resignations are voluntary and genuine, or to decide questions of disqualification.'
    ] }
  ],
  principles: [
    'So when a majority is in doubt, the House decides it quickly by a vote. Neither the Governor nor a delay by the Speaker can decide it for the members.'
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
  summary: 'Orders of pardon or remission under Articles 72 and 161 can be reviewed by the courts on limited grounds. A Governor\'s order cutting a sentence, based on irrelevant and political considerations, was set aside.',
  background: [
    'Under Article 72, the President can pardon a convict, or reduce, suspend or change a sentence, including a death sentence. Article 161 gives Governors a similar power. A request to use this power is called a mercy petition.',
    'Remission means cutting short a sentence. The convict is released early, but the conviction stays.',
    'In Kehar Singh (1988) and earlier in Maru Ram (1980), the Court held that the courts can review pardon decisions, but only on narrow grounds.',
    'A person who asks a court or an authority for a favour must come with clean hands, which means they must disclose all the relevant facts honestly.'
  ],
  question: [
    'Can a court review an order of remission passed by the Governor under Article 161?',
    'On what grounds can such an order be set aside?'
  ],
  facts: [
    'Gowru Venkata Reddy was serving a sentence of 10 years\' rigorous imprisonment in a case of killings. The petitioners were sons of people who had been killed.',
    'By an order dated 11 August 2005, the Governor of Andhra Pradesh granted Reddy remission of the sentence.',
    'The petitioners challenged the order under Article 32. They said the order rested on irrelevant material and political considerations, and that relevant facts had been kept from the Governor.'
  ],
  held: [
    { kind: 'unanimous', label: 'Both judges agreed (2:0). Justice Arijit Pasayat wrote the judgment, with a separate opinion by Justice S.H. Kapadia agreeing', points: [
      'Orders under Articles 72 and 161 can be reviewed by the courts.',
      'An order of pardon or remission can be challenged if the decision maker did not apply their mind, acted in bad faith, relied on irrelevant matters, left out relevant material, or acted arbitrarily.',
      'The official reports placed before the Governor relied on irrelevant matters. One described the convict as "a good Congress Worker". A police report on the likely reaction to his release changed after the government changed.',
      'The petition for remission did not mention a criminal case still pending against the convict. A person who asks for such a power to be used in his favour must come with clean hands.',
      'Irrelevant material had entered the decision. So the remission order was set aside, and the government could treat the petition as pending and consider it again.'
    ] }
  ],
  principles: [
    'Courts check how a mercy decision was made, not whether mercy was deserved.',
    'So mercy cannot be handed out as a political favour. A pardon based on party loyalty can be struck down.'
  ],
  legacy: [
    'In Shatrughan Chauhan (2014), the Court applied the same grounds of review to decisions on mercy petitions.'
  ],
  source: 'https://indiankanoon.org/doc/758562/'
}

});
