/* Landmark judgments, rewritten in full. Batch 15: services, tribunals, the
   subordinate judiciary and elections, Articles 309 to 329.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. S.P. Sampath Kumar, All India Judges'
   Association, Madras Bar Association (2021), Mohinder Singh Gill, the 2002
   Association for Democratic Reforms case and N.P. Ponnuswami were checked
   against the full text on Indian Kanoon, including the conclusions of each
   opinion. Anoop Baranwal and the Electoral Bonds case were confirmed from
   the Supreme Court Observer's summaries. The corrections to the short
   summaries that came out of the check: Mohinder Singh Gill was decided on
   2 December 1977, not in 1978. S.P. Sampath Kumar was decided on 9 December
   1986, not in 1987. The 1993 All India Judges' Association judgment made the
   retirement age of 60 conditional on an assessment at 58, and left the All
   India Judicial Service to the Union rather than directing it.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'sp-sampath-kumar-1987': {
  name: 'S.P. Sampath Kumar v. Union of India',
  full: 'S.P. Sampath Kumar and Others v. Union of India and Others',
  aka: 'The Administrative Tribunals case',
  decided: '9 December 1986',
  year: 1986,
  citation: '(1987) 1 SCC 124, AIR 1987 SC 386',
  bench: 5,
  result: 'Unanimous, in two opinions',
  status: 'partly',
  tags: ['Article 323A', 'Administrative tribunals', 'Judicial review'],
  judges: 'P.N. Bhagwati CJI, Ranganath Misra, V. Khalid, G.L. Oza and M.M. Dutt',
  summary: 'The Administrative Tribunals Act, 1985 was upheld. Judicial review is a basic feature, but Parliament could replace the High Courts in service matters with a tribunal that was an equally effective alternative. The Court required changes to make the tribunal so.',
  question: [
    'Could the Administrative Tribunals Act, 1985 exclude the jurisdiction of the High Courts over service matters?',
    'What must a tribunal be like to be an effective substitute for a High Court?'
  ],
  facts: [
    'The 42nd Amendment (1976) added Article 323A, which allowed Parliament to set up administrative tribunals for disputes about public services.',
    'Parliament passed the Administrative Tribunals Act, 1985. Section 28 excluded the jurisdiction of the High Courts under Articles 226 and 227 over service matters.',
    'The Act was challenged as destroying judicial review, and for the way the members of the tribunal were chosen.'
  ],
  held: [
    { kind: 'majority', label: 'Judgment by Justice Ranganath Misra, for himself and Justices Khalid, Oza and Dutt', points: [
      'The tribunal must be "a worthy successor and real substitute of the High Court", in substance and in fact, not only in form.',
      'The tribunal is a substitute for the High Court in service matters, not a supplement to it.',
      'Section 6(1)(c), which allowed a person who had only been a Secretary to the Government to be appointed Chairman, was invalid.',
      'Members should be chosen by a high-powered selection committee headed by a sitting Supreme Court judge nominated by the Chief Justice of India.',
      'Benches of the tribunal were to be set up at the seat of every High Court. The jurisdiction of the Supreme Court under Articles 32 and 136 was preserved.'
    ] },
    { kind: 'concurring', label: 'Concurring opinion (Chief Justice P.N. Bhagwati)', points: [
      'Judicial review is a basic and essential feature of the Constitution, and no law can abrogate it.',
      'But Parliament may set up an alternative institutional mechanism for judicial review, provided it is no less efficacious than the High Court.',
      'Appointments to the tribunal must be made in consultation with the Chief Justice of India, or by a high-powered committee headed by the Chief Justice of India or a Supreme Court judge nominated by the Chief Justice.'
    ] }
  ],
  principles: [
    'A tribunal could replace a High Court only if it was an equally effective forum for judicial review.'
  ],
  legacy: [
    'In L. Chandra Kumar (1997), seven judges overruled this view. The power of the High Courts to review cannot be excluded, and tribunals can only supplement the High Courts.'
  ],
  source: 'https://indiankanoon.org/doc/359668/'
},

'all-india-judges-association-1993': {
  name: 'All India Judges\' Association v. Union of India',
  full: 'All India Judges\' Association and Others v. Union of India and Others',
  aka: 'The judicial service conditions case',
  decided: '24 August 1993',
  citation: '(1993) 4 SCC 288, AIR 1993 SC 2493',
  bench: 3,
  result: 'Unanimous, 3:0',
  tags: ['Article 312', 'Subordinate judiciary', 'Service conditions'],
  judges: 'M.N. Venkatachaliah CJI, A.M. Ahmadi and P.B. Sawant',
  summary: 'Reviewing its 1991 directions, the Court held that judges are holders of public office, not employees, and that the minimum service conditions of the judiciary must be provided whatever a State\'s finances. It modified some directions, including the retirement age of 60.',
  question: [
    'Should the Court modify its directions of 13 November 1991 on the service conditions of the subordinate judiciary?',
    'Can States refuse minimum service conditions for judges because they lack funds?'
  ],
  facts: [
    'In a judgment of 13 November 1991, the Court gave directions to improve the service conditions of the subordinate judiciary.',
    'The directions included an All India Judicial Service, uniform designations, a retirement age of 60, a review of pay, residential accommodation, libraries and vehicles.',
    'The Union of India and several States sought a review. They argued that service conditions are for the executive and the legislature to decide, and that the States could not afford the directions.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (3:0), judgment by Justice P.B. Sawant', points: [
      '"The judicial service is not service in the sense of \'employment\'. The judges are not employees." They hold public office and exercise the sovereign judicial power of the State.',
      'Minimum service conditions for the judiciary must be provided irrespective of a State\'s capacity to fund them.',
      'Creating an All India Judicial Service was left to the Union under Article 312. Uniform designations and hierarchy were maintained.',
      'At least three years of practice as a lawyer was made an essential qualification for recruitment at the lowest level of the judiciary.',
      'The retirement age was raised to 60, but not automatically. The High Courts must assess each officer before 58, and only those found fit continue to 60.',
      'A separate pay commission for the judiciary was needed. The directions on housing and vehicles were kept with some changes, and the time for compliance was extended to 31 March 1994.'
    ] }
  ],
  principles: [
    'Judges hold constitutional office. They are not government employees.',
    'The State must give the judiciary minimum working and service conditions, whatever its finances.'
  ],
  legacy: [
    'The First National Judicial Pay Commission, headed by Justice K.J. Shetty, was set up in 1996.',
    'An All India Judicial Service under Article 312 has still not been created.'
  ],
  source: 'https://indiankanoon.org/doc/1977799/'
},

'madras-bar-association-2021': {
  name: 'Madras Bar Association v. Union of India',
  aka: 'The Tribunals Reforms Ordinance case',
  decided: '14 July 2021',
  bench: 3,
  result: 'Majority 2:1',
  tags: ['Tribunals', 'Judicial independence', 'Separation of powers'],
  judges: 'L. Nageswara Rao, Hemant Gupta and S. Ravindra Bhat',
  summary: 'Provisions of the Tribunals Reforms Ordinance, 2021 fixing a minimum age of 50 and a four-year term for tribunal members were struck down. They repeated what the Court had already rejected, and undermined the independence of tribunals.',
  question: [
    'Could the Ordinance fix a minimum age of 50 for appointment and a four-year term for tribunal members, after the Court had held otherwise in 2020?',
    'Can a law override the Court\'s directions without removing the basis of its judgment?'
  ],
  facts: [
    'In Madras Bar Association v. Union of India (2020), the Court fixed a five-year term for tribunal members and made advocates with ten years\' practice eligible for appointment.',
    'On 4 April 2021 the Tribunals Reforms (Rationalisation and Conditions of Service) Ordinance, 2021 amended Section 184 of the Finance Act, 2017.',
    'The Ordinance fixed a minimum age of 50 years for appointment and a four-year term. It also required the selection committee to recommend two names for each post.',
    'The Madras Bar Association challenged the Ordinance.'
  ],
  held: [
    { kind: 'majority', label: 'Majority: Justice L. Nageswara Rao, with a concurring opinion by Justice S. Ravindra Bhat', points: [
      'The provisos fixing a minimum age of 50 for appointment, and dealing with house rent allowance, overrode the Court\'s 2020 judgment and are unconstitutional.',
      'The provision requiring two names for each post, with the Government deciding "preferably" within three months, is also unconstitutional.',
      'The four-year term in Section 184(11) is against the separation of powers, the independence of the judiciary, the rule of law and Article 14.',
      'The term fixed in the 2020 judgment prevails: five years, or until the age of 70 for a Chairperson and 67 for a Member, whichever is earlier.',
      'A direction of the Court cannot be nullified by a law that does not remove the basis of the judgment.',
      'Appointments made under the Court\'s interim orders up to 4 April 2021 were protected.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice Hemant Gupta)', points: [
      'Justice Gupta disagreed with the majority and would have upheld the provisions, except part of Section 184(7).'
    ] }
  ],
  principles: [
    'Security of tenure and adequate service conditions are essential to the independence of tribunals.',
    'The legislature cannot override a judgment of the Court without curing its basis.'
  ],
  legacy: [
    'Parliament then passed the Tribunals Reforms Act, 2021, which repeated many of the provisions struck down.',
    'In 2025 the Supreme Court struck down key provisions of the Tribunals Reforms Act, 2021.'
  ],
  source: 'https://indiankanoon.org/doc/105716048/'
},

'mohinder-singh-gill-1978': {
  name: 'Mohinder Singh Gill v. Chief Election Commissioner',
  full: 'Mohinder Singh Gill and Another v. The Chief Election Commissioner, New Delhi and Others',
  aka: 'The Ferozepur repoll case',
  decided: '2 December 1977',
  year: 1977,
  citation: '(1978) 1 SCC 405, AIR 1978 SC 851',
  bench: 5,
  result: 'Unanimous in result',
  tags: ['Article 324', 'Article 329(b)', 'Natural justice'],
  judges: 'M.H. Beg CJI, V.R. Krishna Iyer, P.N. Bhagwati, P.K. Goswami and P.N. Shinghal',
  summary: 'Article 324 is a reservoir of power for the Election Commission where the law is silent, but the Commission must act fairly and within the law. A challenge to the cancellation of a poll must be made by an election petition after the result, not by a writ petition during the election.',
  question: [
    'Could the High Court hear a writ petition against the Election Commission\'s order cancelling a poll and ordering a fresh one?',
    'What is the scope of the Election Commission\'s power under Article 324, and must it follow natural justice?'
  ],
  facts: [
    'In the 1977 Lok Sabha election, counting in the Ferozepur constituency in Punjab was disrupted by violence. Ballot papers from one assembly segment were destroyed.',
    'The appellant, Mohinder Singh Gill, a candidate, appeared to be winning when counting was disrupted.',
    'On 22 March 1977 the Chief Election Commissioner cancelled the poll in the whole constituency and ordered a fresh poll, relying on Article 324.',
    'Gill challenged the order under Article 226. The High Court dismissed the petition as barred by Article 329(b).'
  ],
  held: [
    { kind: 'majority', label: 'Judgment by Justice V.R. Krishna Iyer, for himself, Chief Justice Beg and Justice Bhagwati, with Justices Goswami and Shinghal concurring separately', points: [
      'The only remedy against a step in an election is an election petition. Article 329(b) excludes writ petitions under Article 226 during the election process.',
      'The cancellation of the poll and the order for a fresh poll were steps in the election, so the writ petition was barred.',
      'The election court can examine whether the Commission\'s order was valid, and can grant full relief under the Representation of the People Act, 1951.',
      'Article 324 operates in areas not covered by law. But it "does not exalt the Election Commission into a law unto itself". The Commission must act fairly and within the law.',
      'Natural justice applies to the Commission where its action directly affects candidates. The hearing may be brief where quick action is needed.',
      'An order must be judged by the reasons stated in it. It cannot be supported later by fresh reasons given in affidavits.'
    ] }
  ],
  principles: [
    'The Election Commission has plenary power under Article 324 to fill gaps in the law, subject to fairness and the rule of law.',
    'Election disputes are decided by election petitions after the result, not by courts during the election.'
  ],
  legacy: [
    'The rule that an order must stand or fall on the reasons stated in it is widely applied in administrative law.'
  ],
  source: 'https://indiankanoon.org/doc/1831036/'
},

'association-for-democratic-reforms-2002': {
  name: 'Union of India v. Association for Democratic Reforms',
  full: 'Union of India v. Association for Democratic Reforms and Another',
  aka: 'The candidate disclosure case',
  decided: '2 May 2002',
  citation: '(2002) 5 SCC 294, AIR 2002 SC 2112',
  bench: 3,
  result: 'Unanimous, 3:0',
  tags: ['Article 19(1)(a)', 'Right to know', 'Election Commission'],
  judges: 'M.B. Shah, B.P. Singh and H.K. Sema',
  summary: 'Voters have a right under Article 19(1)(a) to know about the candidates. The Election Commission was directed to require every candidate to disclose on affidavit any criminal record, assets, liabilities and educational qualifications.',
  question: [
    'Do voters have a right to know the criminal record, assets and qualifications of candidates?',
    'Can the Election Commission require such disclosure when the law is silent?'
  ],
  facts: [
    'In 1999 the Association for Democratic Reforms filed a writ petition in the Delhi High Court. It asked for the Law Commission\'s recommendations in its 170th Report on disclosure by candidates to be carried out.',
    'On 2 November 2000 the High Court directed the Election Commission to obtain information about candidates, including criminal cases, assets and qualifications.',
    'The Union of India appealed to the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (3:0), judgment by Justice M.B. Shah', points: [
      'In a democracy, voters have a right to know the relevant particulars of candidates. This right is part of the freedom of speech and expression under Article 19(1)(a).',
      'Where the law is silent, Article 324 is a reservoir of power. The Election Commission can issue directions to fill the gap.',
      'Every candidate must disclose on affidavit any past conviction, acquittal or discharge in a criminal case. The candidate must also disclose any pending case for an offence punishable with two years or more, in which a charge has been framed or cognizance taken.',
      'The candidate must also disclose the assets of the candidate, spouse and dependants, liabilities such as dues to public institutions, and educational qualifications.',
      'The High Court\'s directions were modified to this extent, and the Election Commission was to act on them within two months.'
    ] }
  ],
  principles: [
    'The voter\'s right to information about candidates is a fundamental right.',
    'The Election Commission can act under Article 324 where the law is silent.'
  ],
  legacy: [
    'Parliament added Section 33A to the Representation of the People Act, 1951 in 2002, requiring less disclosure than the Court had ordered.',
    'In PUCL v. Union of India (2003), the Court struck down the provision that limited disclosure, and restored the requirement to disclose assets and liabilities.'
  ],
  source: 'https://indiankanoon.org/doc/6396968/'
},

'anoop-baranwal-2023': {
  name: 'Anoop Baranwal v. Union of India',
  aka: 'The Election Commission appointments case',
  decided: '2 March 2023',
  citation: '2023 LiveLaw (SC) 155',
  bench: 5,
  result: 'Unanimous, 5:0',
  status: 'historic',
  tags: ['Article 324(2)', 'Election Commission', 'Free and fair elections'],
  judges: 'K.M. Joseph, Ajay Rastogi, B.V. Nagarathna, J.B. Pardiwala and Manoj Misra',
  summary: 'Until Parliament made a law, the Chief Election Commissioner and Election Commissioners were to be appointed on the advice of a committee of the Prime Minister, the Leader of the Opposition and the Chief Justice of India. Parliament soon passed a law with a different committee.',
  question: [
    'Was appointment of the Chief Election Commissioner and Election Commissioners by the executive alone consistent with free and fair elections?',
    'Can the Court lay down a procedure for appointment when Parliament has not made the law that Article 324(2) contemplates?'
  ],
  facts: [
    'Article 324(2) says the President appoints the Chief Election Commissioner and the Election Commissioners, subject to any law made by Parliament. No such law had been made.',
    'In practice, appointments were made by the President on the advice of the Union Government.',
    'In 2015 Anoop Baranwal filed a public interest petition challenging this system. On 23 October 2018 the case was referred to a Constitution Bench, and similar petitions were heard with it.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), main judgment by Justice K.M. Joseph', points: [
      'The Election Commission must be independent, and must act fairly and according to the rule of law, so that elections are free and fair.',
      'Until Parliament makes a law, the President shall appoint the Chief Election Commissioner and Election Commissioners on the advice of a committee of the Prime Minister, the Leader of the Opposition in the Lok Sabha and the Chief Justice of India.',
      'Where there is no Leader of the Opposition, the leader of the largest opposition party in the Lok Sabha is to be on the committee.',
      'The Court left it to Parliament to decide on an independent secretariat for the Commission and on charging its expenses to the Consolidated Fund of India.'
    ] },
    { kind: 'concurring', label: 'Concurring opinion (Justice Ajay Rastogi)', points: [
      'Election Commissioners should be removable only on the same grounds as the Chief Election Commissioner, so that they too are free from political interference.'
    ] }
  ],
  principles: [
    'An independent Election Commission is essential to free and fair elections.'
  ],
  legacy: [
    'In December 2023 Parliament passed the Chief Election Commissioner and Other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023. It replaced the Chief Justice on the committee with a Union Cabinet Minister chosen by the Prime Minister.',
    'The Supreme Court refused to stay the 2023 Act before the 2024 general election.'
  ],
  source: 'https://www.livelaw.in/pdf_upload/155-anoop-baranwal-v-union-of-india-2-mar-2023-463622.pdf'
},

'electoral-bonds-2024': {
  name: 'Association for Democratic Reforms v. Union of India',
  aka: 'The Electoral Bonds case',
  decided: '15 February 2024',
  bench: 5,
  result: 'Unanimous, in two opinions',
  tags: ['Article 19(1)(a)', 'Political funding', 'Article 14'],
  judges: 'D.Y. Chandrachud CJI, Sanjiv Khanna, B.R. Gavai, J.B. Pardiwala and Manoj Misra',
  summary: 'The Electoral Bond Scheme, 2018 was struck down. Anonymous political funding violates voters\' right to information under Article 19(1)(a), and unlimited corporate donations violate Article 14. The State Bank of India was ordered to disclose the details of the bonds.',
  question: [
    'Does anonymous funding of political parties through electoral bonds violate voters\' right to information?',
    'Were the amendments allowing unlimited corporate donations valid?'
  ],
  facts: [
    'The Finance Act, 2017 amended the Reserve Bank of India Act, the Representation of the People Act, the Income Tax Act and the Companies Act.',
    'The Electoral Bond Scheme, 2018 let donors buy bonds from the State Bank of India and give them to political parties. The parties did not have to disclose who gave the bonds.',
    'The amendments also removed the limit on company donations, which had been 7.5 per cent of a company\'s average net profit.',
    'The Association for Democratic Reforms, Common Cause and others challenged the scheme and the amendments.'
  ],
  held: [
    { kind: 'majority', label: 'Main judgment by Chief Justice D.Y. Chandrachud, for himself and Justices Gavai, Pardiwala and Misra', points: [
      '"Information about funding to a political party is essential for a voter to exercise their freedom to vote in an effective manner." Voters have a right to this information under Article 19(1)(a).',
      'Curbing black money is not a ground for restriction under Article 19(2). In any case, the scheme was not the least restrictive way to achieve that aim.',
      'Donors\' privacy of political affiliation is protected. But the existing rule requiring disclosure of donations above Rs. 20,000 already balances it with voters\' right to know.',
      'Allowing unlimited corporate donations is manifestly arbitrary and violates Article 14. It lets companies use their resources to influence policy making.',
      'The scheme, and the amendments to the Representation of the People Act, the Income Tax Act and the Companies Act, were struck down.',
      'The State Bank of India was to stop issuing bonds and give the Election Commission details of all bonds bought and encashed since 12 April 2019. The Election Commission was to publish them.'
    ] },
    { kind: 'concurring', label: 'Concurring opinion (Justice Sanjiv Khanna)', points: [
      'Justice Khanna reached the same result by applying the proportionality test more strictly, with reference to data on bond sales. Companies cannot claim the same privacy as individuals for their political donations.'
    ] }
  ],
  principles: [
    'Voters\' right to information extends to the funding of political parties.',
    'Unlimited corporate funding of parties threatens free and fair elections.'
  ],
  legacy: [
    'After the Court refused the State Bank of India more time, the details of the bonds were published by the Election Commission in March 2024.'
  ],
  source: 'https://www.scobserver.in/reports/electoral-bonds-constitution-bench-judgement-summary/'
},

'np-ponnuswami-1952': {
  name: 'N.P. Ponnuswami v. Returning Officer, Namakkal Constituency',
  aka: 'The election petition bar case',
  decided: '21 January 1952',
  citation: 'AIR 1952 SC 64, 1952 SCR 218',
  bench: 6,
  result: 'Unanimous, 6:0',
  tags: ['Article 329(b)', 'Election petitions', 'Writ jurisdiction'],
  judges: 'M. Patanjali Sastri CJI, S. Fazl Ali, M.C. Mahajan, B.K. Mukherjea, S.R. Das and N. Chandrasekhara Aiyar',
  summary: '"Election" in Article 329(b) means the whole process, from the notification to the declaration of the result. Once the process begins, courts cannot interfere, and the only remedy is an election petition after the election.',
  question: [
    'Can the rejection of a nomination paper be challenged by a writ petition while the election is in progress?',
    'What does "election" mean in Article 329(b)?'
  ],
  facts: [
    'N.P. Ponnuswami filed nomination papers for election to the Madras Legislative Assembly from the Namakkal constituency.',
    'On 28 November 1951 the Returning Officer rejected the nomination.',
    'Ponnuswami asked the Madras High Court under Article 226 to quash the rejection. The High Court held that Article 329(b) barred it from interfering.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (6:0), judgment by Justice S. Fazl Ali', points: [
      'In Part XV of the Constitution, "election" is used in a wide sense. It means the entire process by which a candidate is returned to the legislature.',
      'Article 329(b), which opens with the words "notwithstanding anything in this Constitution", bars any challenge to an election except by an election petition. This excludes writ petitions under Article 226.',
      'The Representation of the People Act, 1951 provides only one remedy: an election petition presented after the election is over. There is no remedy at an intermediate stage.',
      'Elections should be completed on time, and disputes should wait until the election is over.',
      'Improper rejection of a nomination is a ground for setting aside an election in an election petition.',
      'The appeal was dismissed.'
    ] }
  ],
  principles: [
    'Courts do not interrupt an election in progress. Disputes are decided by election petitions after the result.'
  ],
  legacy: [
    'In Mohinder Singh Gill (1977), the Court applied this rule to the Election Commission\'s cancellation of a poll.'
  ],
  source: 'https://indiankanoon.org/doc/181440373/'
}

});
