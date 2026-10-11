/* Landmark judgments, rewritten in full. Batch 2: Articles 12 and 13.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. Each entry was checked against the full text
   of the judgment on Indian Kanoon: the date, the bench, the split, who wrote
   the leading opinion, the facts and the operative holding. The rules of
   severability in R.M.D. Chamarbaugwalla are paraphrased from the judgment's
   own list. Two corrections to the short summaries came out of the check:
   Ajay Hasia was decided on 13 November 1980, not in 1981, and Sankari Prasad
   is marked as partly overtaken rather than overruled, because its core
   holding, that an amendment is not "law" under Article 13, was restored by
   the 24th Amendment and upheld in Kesavananda Bharati.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'ajay-hasia-1981': {
  name: 'Ajay Hasia v. Khalid Mujib Sehravardi',
  full: 'Ajay Hasia and Others v. Khalid Mujib Sehravardi and Others',
  decided: '13 November 1980',
  year: 1980,
  citation: '(1981) 1 SCC 722, AIR 1981 SC 487',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 12', 'Article 14', 'Arbitrariness'],
  judges: 'Y.V. Chandrachud CJI, P.N. Bhagwati, V.R. Krishna Iyer, S. Murtaza Fazal Ali and A.D. Koshal',
  summary: 'A society that works as an arm of the government is "the State" under Article 12, so it must respect fundamental rights. Giving one-third of the admission marks to a two-minute interview was arbitrary and broke Article 14.',
  background: [
    'Fundamental rights protect people against "the State". Article 12 says who counts: the Union and State governments, Parliament and the State legislatures, local bodies such as municipalities, and "other authorities".',
    'Governments often run colleges, banks and factories through companies or registered societies instead of departments. The question was whether such bodies escape the fundamental rights because of their legal form.',
    'Article 14 promises equality before the law. In E.P. Royappa (1974), the Court had added that an arbitrary act is the opposite of equality, so arbitrariness itself breaks Article 14.',
    'Article 32 lets a person go straight to the Supreme Court to enforce a fundamental right. Article 226 lets a person go to a High Court, for a fundamental right or for any other legal right.'
  ],
  question: [
    'A registered society ran a government-funded engineering college. Is the society "the State" under Article 12?',
    'The college gave one-third of the admission marks to an oral interview. Was that arbitrary, and so a breach of Article 14?'
  ],
  facts: [
    'The Regional Engineering College, Srinagar was run by a society registered under the Jammu and Kashmir Registration of Societies Act, 1898.',
    'The Central Government and the Jammu and Kashmir Government paid for the college. They appointed members of its governing body, and its rules and spending needed their approval.',
    'For admission in 1979-80, candidates took a written test of 100 marks and an oral interview of 50 marks.',
    'Candidates who were refused said each interview lasted only two or three minutes, and the questions were about parentage and residence. Students with lower marks in the qualifying examination got in through high interview marks.',
    'They filed writ petitions under Article 32. The society argued that it was not "the State", so no writ could be issued against it.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Justice P.N. Bhagwati wrote the judgment', points: [
      'The society is "the State" under Article 12, because it is an instrumentality or agency of the Central and State Governments. In plain words, it is an arm of the government.',
      'How a body was created does not decide the question. A company or a society can be "the State" just as much as a corporation set up by a statute.',
      'Article 14 strikes at arbitrariness. An arbitrary action by the State denies equality.',
      'Giving one-third of the total marks to an oral interview was plainly arbitrary and unreasonable.',
      'But the admissions of 1979-80 were not cancelled. Eighteen months had passed, and the students already admitted would have suffered.'
    ] }
  ],
  principles: [
    'Six signs help show that a body is an arm of the government. The government holds its shares. Government money meets almost all its costs. The State gives or protects its monopoly.',
    'The other three signs are deep and pervasive control by the State, work of public importance close to the work of government, and a government department handed over to the body.',
    'The signs are indicators, not a checklist that must be fully met.',
    'The Court also said that interview marks should not be more than 15 per cent of the total, because an interview is so easy to misuse.',
    'So what matters is whether a body is the government in substance, whatever it calls itself.'
  ],
  legacy: [
    'From 1981 until 2002, courts used the Ajay Hasia signs to decide which bodies could be sued for breaking fundamental rights.',
    'In Pradeep Kumar Biswas (2002), seven judges said the tests are not a rigid set of rules. The question became whether the government dominates the body in money, functions and administration.'
  ],
  source: 'https://indiankanoon.org/doc/1186368/'
},

'pradeep-kumar-biswas-2002': {
  name: 'Pradeep Kumar Biswas v. Indian Institute of Chemical Biology',
  full: 'Pradeep Kumar Biswas and Others v. Indian Institute of Chemical Biology and Others',
  decided: '16 April 2002',
  citation: '(2002) 5 SCC 111',
  bench: 7,
  result: 'Majority 5:2',
  tags: ['Article 12', 'Other authorities'],
  judges: 'S.P. Bharucha CJI, S.S.M. Quadri, R.C. Lahoti, N. Santosh Hegde, Doraiswamy Raju, Ruma Pal and Arijit Pasayat',
  summary: 'The Council of Scientific and Industrial Research is "the State" under Article 12. A body is "the State" if the government dominates it in money, functions and administration.',
  background: [
    'Fundamental rights protect people against "the State". Article 12 says who counts: the Union and State governments, Parliament and the State legislatures, local bodies such as municipalities, and "other authorities".',
    'In Sabhajit Tewary (1975), five judges held that the Council of Scientific and Industrial Research (CSIR) was not "the State". So its employees could not use the fundamental rights against it.',
    'In Ajay Hasia (1980), another bench of five judges gave six signs for spotting an arm of the government. The two rulings pulled in different directions.',
    'A bench can overrule only a smaller bench. Sabhajit Tewary had five judges, so seven judges were needed to reconsider it.'
  ],
  question: [
    'CSIR is a registered society. Is it "the State" under Article 12?',
    'Was Sabhajit Tewary, which said CSIR is not "the State", rightly decided?'
  ],
  facts: [
    'Pradeep Kumar Biswas and others worked at the Indian Institute of Chemical Biology, a unit of CSIR. They challenged the end of their services in the Calcutta High Court.',
    'The High Court dismissed their writ petition as not maintainable, meaning that the court could not hear it. The High Court followed Sabhajit Tewary.',
    'The Government of India set up CSIR in 1942 and registered it as a society under the Societies Registration Act, 1860.',
    'Because Sabhajit Tewary had five judges, seven judges heard the appeal.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of five. Justice Ruma Pal wrote the judgment', points: [
      'CSIR is "the State" under Article 12.',
      'The test is whether, on all the facts, the government dominates or controls the body in money, in functions and in administration.',
      'The control must be special to that body and must run through it. The ordinary control that a law places on every body of its kind is not enough.',
      'The six Ajay Hasia signs are not a rigid set of rules.',
      'Sabhajit Tewary is overruled.'
    ] },
    { kind: 'dissent', label: 'Justice R.C. Lahoti, with Justice Doraiswamy Raju, in dissent', points: [
      'Sabhajit Tewary should not be overruled.',
      'An arm of the government is not the same as an "other authority" under Article 12. A registered society such as CSIR is not an authority under Article 12.'
    ] }
  ],
  principles: [
    'The test applies to any kind of body, whether a statute set it up or it was registered as a company or a society.',
    'No single sign settles the question. A body that shows one or two of the Ajay Hasia signs may still fall outside Article 12.',
    'So the test looks at who really runs the body, not at the form on its papers.'
  ],
  legacy: [
    'In Zee Telefilms (2005), five judges applied the test and held that the BCCI is not "the State".'
  ],
  source: 'https://indiankanoon.org/doc/471272/'
},

'zee-telefilms-2005': {
  name: 'Zee Telefilms Ltd. v. Union of India',
  full: 'Zee Telefilms Ltd. and Another v. Union of India and Others',
  decided: '2 February 2005',
  citation: '(2005) 4 SCC 649',
  bench: 5,
  result: 'Majority 3:2',
  tags: ['Article 12', 'BCCI', 'Article 226'],
  judges: 'N. Santosh Hegde, S.N. Variava, B.P. Singh, H.K. Sema and S.B. Sinha',
  summary: 'The Board of Control for Cricket in India is not "the State" under Article 12, so it cannot be taken straight to the Supreme Court under Article 32. But because it does public work, it can be taken to a High Court under Article 226.',
  background: [
    'Fundamental rights protect people against "the State". Article 12 says who counts: the Union and State governments, Parliament and the State legislatures, local bodies such as municipalities, and "other authorities".',
    'Article 32 lets a person go straight to the Supreme Court to enforce a fundamental right. Article 226 lets a person go to a High Court, for a fundamental right or for any other legal right.',
    'So the two routes differ. A body that is not "the State" cannot be sued under Article 32. But a High Court can still issue orders under Article 226 to a private body that performs a public duty.',
    'In Pradeep Kumar Biswas (2002), seven judges held that a body is "the State" if the government dominates it in money, functions and administration.'
  ],
  question: [
    'Is the Board of Control for Cricket in India (BCCI) "the State" under Article 12, so that a writ petition can be filed against it in the Supreme Court under Article 32?'
  ],
  facts: [
    'In August 2004 the BCCI invited bids for the television rights to cricket matches for four years.',
    'Zee Telefilms made a bid. On 21 September 2004 the BCCI cancelled the whole bidding process.',
    'Zee filed a writ petition under Article 32. Zee said the cancellation was arbitrary and broke the equality promised by Article 14.',
    'The BCCI replied that it is a private registered society and not "the State". The Court decided that question first.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of three. Justice N. Santosh Hegde wrote the judgment', points: [
      'The BCCI is not "the State" under Article 12.',
      'No statute created the BCCI. The government holds none of its shares and does not pay its costs.',
      'The State did not give the BCCI its monopoly over cricket and does not protect it. Whatever control the government has is only the ordinary control of regulation.',
      'So the writ petition under Article 32 cannot be heard.',
      'But the BCCI performs public duties. So a person can still go to a High Court under Article 226, which reaches further than Article 32.'
    ] },
    { kind: 'dissent', label: 'Justice S.B. Sinha, with Justice S.N. Variava, in dissent', points: [
      'The BCCI is "the State", because the BCCI controls cricket in India as a monopoly and chooses the team that represents the country.',
      'Its work is public work, and the government recognises it as the national body for cricket.'
    ] }
  ],
  principles: [
    'There are two routes with two tests. Article 32 needs "the State", but Article 226 needs only a public duty.',
    'So a body can stay outside Article 12 and still answer in court for the way it does public work.'
  ],
  legacy: [
    'In BCCI v. Cricket Association of Bihar (2015), the Supreme Court held again that the BCCI performs public functions and can be taken to court under Article 226. The Bihar case led to the Lodha Committee reforms of the BCCI.'
  ],
  source: 'https://indiankanoon.org/doc/404603/'
},

'shankari-prasad-1951': {
  name: 'Sri Sankari Prasad Singh Deo v. Union of India',
  full: 'Sri Sankari Prasad Singh Deo v. Union of India and State of Bihar',
  aka: 'The First Amendment case',
  decided: '5 October 1951',
  citation: 'AIR 1951 SC 458, 1952 SCR 89',
  bench: 5,
  result: 'Unanimous, 5:0',
  status: 'partly',
  tags: ['Amending power', 'Article 13', 'Article 368'],
  judges: 'H.J. Kania CJI, M. Patanjali Sastri, B.K. Mukherjea, S.R. Das and N. Chandrasekhara Aiyar',
  summary: 'The First Amendment was valid. An amendment to the Constitution is not an ordinary "law" under Article 13(2), so Parliament could use it to change the fundamental rights.',
  background: [
    'After independence, the States passed laws to abolish zamindari, the system of big landlords who collected rent from cultivators. The Patna High Court struck down the Bihar law for breaking the right to property.',
    'Parliament answered with the First Amendment in 1951. The amendment added Articles 31A and 31B and the Ninth Schedule, a list of laws protected from challenge under the fundamental rights.',
    'Article 13(2) says the State shall not make any "law" that takes away or cuts down a fundamental right. The zamindars argued that an amendment is also such a law.',
    'Until the first general election of 1952, the Constituent Assembly itself sat as the Provisional Parliament, with only one House. Article 379 gave it the powers of Parliament.'
  ],
  question: [
    'Is an amendment to the Constitution a "law" under Article 13(2), so that it is void if it takes away or cuts down a fundamental right?',
    'Was the First Amendment (1951) made in the proper way?'
  ],
  facts: [
    'The zamindars filed petitions under Article 32 to challenge the First Amendment.',
    'They made three arguments. The amendment broke Article 13(2). Half the States should have ratified it. And the Provisional Parliament, with only one House, could not amend the Constitution.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Justice M. Patanjali Sastri wrote the judgment', points: [
      '"Law" in Article 13(2) means the rules made in the ordinary work of law making. The word does not include amendments to the Constitution, which are made with the special power to amend.',
      'So Article 13(2) does not stop an amendment under Article 368 from cutting down fundamental rights.',
      'Under Article 379, the Provisional Parliament had all the powers of Parliament, including the power to amend.',
      'Articles 31A and 31B did not change the powers of the High Courts or the Supreme Court. So the States did not need to ratify the amendment.',
      'The petitions were dismissed.'
    ] }
  ],
  principles: [
    'The power to amend is a constituent power, different in kind from the power to make ordinary laws.',
    'So in 1951 the text placed no limit on what Parliament could amend, the fundamental rights included.'
  ],
  legacy: [
    'Sajjan Singh (1964) followed this view.',
    'In Golak Nath (1967), eleven judges overruled it by 6 votes to 5 and held that an amendment is a "law" under Article 13.',
    'The 24th Amendment (1971) added Article 13(4) and Article 368(3). They say that Article 13 does not apply to amendments made under Article 368.',
    'In Kesavananda Bharati (1973), the Court upheld the 24th Amendment, so the core of Shankari Prasad came back. But the Court added a limit. Parliament can amend any part of the Constitution, but it cannot destroy its basic structure.'
  ],
  source: 'https://indiankanoon.org/doc/1706770/'
},

'golak-nath-1967': {
  name: 'I.C. Golak Nath v. State of Punjab',
  full: 'I.C. Golak Nath and Others v. State of Punjab and Another',
  decided: '27 February 1967',
  citation: 'AIR 1967 SC 1643, (1967) 2 SCR 762',
  bench: 11,
  result: 'Majority 6:5',
  tags: ['Amending power', 'Article 13', 'Prospective overruling'],
  judges: 'K. Subba Rao CJI, K.N. Wanchoo, M. Hidayatullah, J.C. Shah, S.M. Sikri, R.S. Bachawat, V. Ramaswami, J.M. Shelat, V. Bhargava, G.K. Mitter and C.A. Vaidialingam',
  summary: 'By 6 votes to 5, Parliament could not amend the Constitution to take away or cut down the fundamental rights. To avoid upsetting the past, the ruling applied only to future amendments.',
  background: [
    'Article 13(2) says the State shall not make any "law" that takes away or cuts down a fundamental right. Article 368 gives Parliament the power to amend the Constitution.',
    'In Shankari Prasad (1951) and Sajjan Singh (1964), the Court held that an amendment is not such a "law". So Parliament could amend the fundamental rights.',
    'Parliament had used that power to protect land reform. The First Amendment (1951) created the Ninth Schedule, a list of laws that cannot be challenged under the fundamental rights. The 17th Amendment (1964) added more land laws to the list.'
  ],
  question: [
    'Can Parliament use Article 368 to take away or cut down the fundamental rights in Part III?',
    'Is an amendment to the Constitution a "law" under Article 13(2)?',
    'Were Sankari Prasad (1951) and Sajjan Singh (1964) rightly decided?'
  ],
  facts: [
    'The family of Henry Golak Nath owned farm land in Punjab. Under the Punjab Security of Land Tenures Act, 1953, 418 standard acres of it were declared surplus and could be taken. A standard acre is a unit adjusted for the quality of the land.',
    'Other petitioners challenged the Mysore Land Reforms Act.',
    'The 17th Amendment (1964) had placed both Acts in the Ninth Schedule. So the Acts could not be challenged under the fundamental rights.',
    'The petitioners therefore challenged the 17th Amendment itself. Earlier benches had upheld Parliament\'s power to amend fundamental rights, so eleven judges heard the case.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of six: Chief Justice Subba Rao for five judges, and Justice Hidayatullah separately', points: [
      'An amendment to the Constitution is a "law" under Article 13(2). So an amendment that takes away or cuts down fundamental rights is void.',
      'From the date of this judgment, Parliament has no power to amend Part III to take away or cut down fundamental rights.',
      'Chief Justice Subba Rao\'s opinion said Article 368 only sets out the procedure for amending. The power itself comes from Parliament\'s ordinary power to make laws.',
      'His opinion used prospective overruling, which means a new rule that applies only to the future. Earlier amendments, including the First, Fourth and 17th, stayed valid.',
      'Sankari Prasad and Sajjan Singh were overruled. But the 17th Amendment still stood, so the land laws stayed protected and the petitions failed.'
    ] },
    { kind: 'dissent', label: 'The five in dissent: Justice Wanchoo for three judges, and Justices Bachawat and Ramaswami separately', points: [
      'Article 368 gives Parliament both the power and the procedure to amend any part of the Constitution, including Part III.',
      'An amendment is not a "law" under Article 13(2).',
      'Sankari Prasad and Sajjan Singh were rightly decided.'
    ] }
  ],
  principles: [
    'Prospective overruling entered Indian law here. A court can lay down a new rule for the future while leaving past decisions undisturbed.',
    'So the Court protected the fundamental rights for the future without undoing the land reforms already made.'
  ],
  legacy: [
    'Parliament replied with the 24th Amendment (1971). The amendment added Article 13(4) and Article 368(3), which say that Article 13 does not apply to amendments.',
    'In Kesavananda Bharati (1973), thirteen judges overruled Golak Nath. They held that Parliament can amend the fundamental rights, but it cannot destroy the basic structure of the Constitution.'
  ],
  source: 'https://indiankanoon.org/doc/120358/'
},

'keshavan-madhava-menon-1951': {
  name: 'Keshavan Madhava Menon v. State of Bombay',
  decided: '22 January 1951',
  citation: 'AIR 1951 SC 128, 1951 SCR 228',
  bench: 7,
  result: 'Majority 5:2',
  tags: ['Article 13(1)', 'Pre-Constitution laws'],
  judges: 'H.J. Kania CJI, S. Fazl Ali, M. Patanjali Sastri, M.C. Mahajan, B.K. Mukherjea, S.R. Das and N. Chandrasekhara Aiyar',
  summary: 'Fundamental rights do not reach back into the past. A prosecution for an act done before 26 January 1950 could continue, even though the law behind it clashed with a fundamental right.',
  background: [
    'Many laws from British rule stayed in force after the Constitution began on 26 January 1950. Article 13(1) says that such a law is void to the extent that it clashes with a fundamental right.',
    'A rule is retrospective if it reaches back to acts done before it began. The question was whether Article 13(1) did that.'
  ],
  question: [
    'Does Article 13(1) reach back to acts done before 26 January 1950?',
    'A prosecution began before the Constitution came into force, under a law that clashed with a fundamental right. Could it continue after 26 January 1950?'
  ],
  facts: [
    'Keshavan Madhava Menon was the Secretary of the People\'s Publishing House, Bombay. In September 1949 he published a pamphlet without the official permission that the Indian Press (Emergency Powers) Act, 1931 required.',
    'He was arrested on 9 December 1949, and prosecuted in the Court of the Chief Presidency Magistrate, Bombay.',
    'The Constitution came into force on 26 January 1950 while the case was still going on.',
    'He argued that the 1931 Act broke the freedom of speech in Article 19(1)(a). So the Act was void under Article 13(1), and the prosecution could not go on.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of five. Justice S.R. Das wrote the leading opinion', points: [
      'Article 13(1) does not reach back into the past.',
      'An existing law that clashes with a fundamental right is not void from the start. The law stops working only against the exercise of fundamental rights from 26 January 1950.',
      'An act done before 26 January 1950, against a law that was valid at the time, can still be prosecuted and punished under that law.',
      'The appeal was dismissed, and the prosecution could continue.'
    ] },
    { kind: 'dissent', label: 'Justice S. Fazl Ali in dissent, with Justice B.K. Mukherjea agreeing', points: [
      'Once a law has become void, it cannot be used after the Constitution began to frame a charge or to convict anyone, even for an earlier act.'
    ] }
  ],
  principles: [
    'The Constitution does not undo the past. Completed acts, and prosecutions for them, are judged by the law that applied when the acts were done.',
    'So a clashing law from before 1950 is not wiped off the books. The law only stops working against rights from 26 January 1950, an idea the Court later built into the doctrine of eclipse.'
  ],
  legacy: [
    'The Court built on this view in Bhikaji Narain Dhakras (1955), where it laid down the doctrine of eclipse.'
  ],
  source: 'https://indiankanoon.org/doc/656658/'
},

'bhikaji-narain-dhakras-1955': {
  name: 'Bhikaji Narain Dhakras v. State of Madhya Pradesh',
  full: 'Bhikaji Narain Dhakras and Others v. State of Madhya Pradesh and Another',
  aka: 'The doctrine of eclipse case',
  decided: '29 September 1955',
  citation: 'AIR 1955 SC 781, (1955) 2 SCR 589',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 13(1)', 'Doctrine of eclipse'],
  summary: 'A law from before the Constitution that clashed with a fundamental right was not dead, only eclipsed. When the First Amendment removed the clash, the law worked again without being passed afresh.',
  background: [
    'Article 13(1) says that a law from before the Constitution is void to the extent that it clashes with a fundamental right. In Keshavan Madhava Menon (1951), the Court held that such a law still governs acts done before 26 January 1950.',
    'Article 19(1)(g) gives citizens the right to carry on any trade or business. Article 19(6) lets the State place reasonable limits on that right.',
    'As first written, Article 19(6) did not clearly allow the State to keep a whole business to itself. The First Amendment (1951) changed that. Since then, a law can let the State run a trade as a monopoly.'
  ],
  question: [
    'A law made before the Constitution clashed with Article 19(1)(g) from 1950. Did the law die for ever, or could it come back to life when an amendment removed the clash?'
  ],
  facts: [
    'The C.P. and Berar Motor Vehicles (Amendment) Act, 1947 gave the State Government wide powers over road transport. The government could run bus services itself and give permits to its own undertakings.',
    'The petitioners were private bus operators who had held permits for many years.',
    'From 26 January 1950, a law that let the State shut out private operators clashed with the right to carry on business under Article 19(1)(g).',
    'On 18 June 1951 the First Amendment changed Article 19(6), allowing laws for State monopolies in any trade or business.',
    'On 4 February 1955 the State issued an order to take over certain bus routes. The operators challenged the order.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Acting Chief Justice S.R. Das wrote the judgment', points: [
      'From 26 January 1950 the 1947 Act was "eclipsed, for the time being, by the fundamental right". The Act was not dead, only asleep.',
      'The First Amendment removed "the shadow" and made the Act "free from all blemish or infirmity". From 18 June 1951 the Act applied fully again, without being passed again.',
      'The eclipse covered only citizens, because the right in Article 19 belongs only to citizens. The Act stayed in force against non-citizens, and for things done before the Constitution.',
      'The order was valid, and the petitions were dismissed.'
    ] }
  ],
  principles: [
    'The rule is called the doctrine of eclipse. A clash with a fundamental right puts an old law to sleep, but does not kill it.',
    'So when the clash ends, an old law needs no new vote of the legislature to work again.'
  ],
  legacy: [
    'In Deep Chand (1959) and Mahendra Lal Jaini (1962), the Court held that the doctrine does not save a law made after the Constitution that breaks a fundamental right. A new law of that kind is void from the start.',
    'In State of Gujarat v. Ambica Mills (1974), the Court held that a law made after the Constitution that breaks a right given only to citizens is still valid against non-citizens.'
  ],
  source: 'https://indiankanoon.org/doc/762155/'
},

'rmd-chamarbaugwalla-1957': {
  name: 'R.M.D. Chamarbaugwalla v. Union of India',
  full: 'R.M.D. Chamarbaugwalla and Another v. Union of India and Another',
  aka: 'The prize competitions case',
  decided: '9 April 1957',
  citation: 'AIR 1957 SC 628, 1957 SCR 930',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 13', 'Doctrine of severability', 'Article 19(1)(g)'],
  judges: 'S.R. Das CJI, T.L. Venkatarama Aiyar, S.K. Das, P.B. Gajendragadkar and Bhuvneshwar P. Sinha',
  summary: 'When only part of a law is invalid, the valid part survives if it can be separated from the rest. The Prize Competitions Act covered only gambling competitions, so it was valid.',
  background: [
    'Article 13 says a law is void "to the extent" that it breaks a fundamental right. So a court may strike down only the bad part of a law and keep the rest. Separating the two is called severability.',
    'Article 252 lets Parliament make a law on a subject that belongs to the States, if two or more State legislatures ask it to.',
    'Prize competitions, such as crossword contests with cash prizes, were popular in the 1950s. Some depended on skill and some were a form of gambling.'
  ],
  question: [
    'The Prize Competitions Act, 1955 defined "prize competition" widely. Did the definition cover competitions of skill as well as gambling competitions?',
    'If it did, and the part about competitions of skill was invalid, did the whole Act fail? Or could the valid part be separated and saved?'
  ],
  facts: [
    'Several State legislatures passed resolutions under Article 252 asking Parliament to control prize competitions. Parliament then passed the Prize Competitions Act, 1955, which came into force on 1 April 1956.',
    'The petitioners ran prize competitions in many States. They filed petitions under Article 32.',
    'They argued that the Act\'s definition of "prize competition" covered competitions that depend on skill. Running such competitions is a business protected by Article 19(1)(g).',
    'They said the limits were unreasonable. They also said the Act could not be split into valid and invalid parts, so the whole of it must fall.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Justice T.L. Venkatarama Aiyar wrote the judgment', points: [
      'Read with its history and purpose, the Act applies only to competitions of a gambling nature. The Act does not apply to competitions in which success depends to a large degree on skill.',
      'Even if the definition covered both kinds, the parts could be separated, and the Act would be valid for gambling competitions.',
      'Severability works in both kinds of case: when a legislature had no power to pass part of a law, and when part of a law breaks a fundamental right.',
      'The petitions were dismissed with costs.'
    ] }
  ],
  principles: [
    'The main test is what the legislature intended. Would it have passed the valid part alone if it had known that the rest was invalid?',
    'If the valid part is distinct and complete in itself, the valid part survives.',
    'If the valid and invalid parts form one scheme meant to work as a whole, the whole law fails.',
    'If what is left is so thin that it differs from what the legislature passed, or cannot work without rewriting, the whole law fails.',
    'Substance matters more than form. Valid and invalid parts can sit in the same section. The history, purpose, title and preamble of a law help show what the legislature intended.',
    'So a court cuts away only the bad part of a law, as long as what remains is still the law the legislature meant to make.'
  ],
  legacy: [

  ],
  source: 'https://indiankanoon.org/doc/725224/'
}

});
