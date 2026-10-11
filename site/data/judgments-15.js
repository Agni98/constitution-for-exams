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
  summary: 'The Administrative Tribunals Act, 1985 was upheld. Judicial review is a basic feature, but in 1986 the Court held that Parliament could replace the High Courts in service disputes with a tribunal that worked equally well. The Court ordered changes to make the tribunal so.',
  background: [
    'The 42nd Amendment (1976) added Article 323A, which let Parliament set up administrative tribunals for disputes about government jobs, called service matters.',
    'Under Articles 226 and 227, the High Courts can review the decisions of authorities and lower courts. Judicial review, the courts\' power to check laws and actions against the Constitution, was held to be a basic feature in Minerva Mills (1980).',
    'Tribunals are specialist bodies that decide certain disputes in place of ordinary courts. Because they do the work of courts, their members need secure terms and freedom from government pressure.'
  ],
  question: [
    'Could the Administrative Tribunals Act, 1985 shut out the High Courts from service matters?',
    'What must a tribunal be like to take the place of a High Court?'
  ],
  facts: [
    'Parliament passed the Administrative Tribunals Act, 1985. Section 28 shut out the High Courts under Articles 226 and 227 from service matters.',
    'The Act was challenged as destroying judicial review, and for the way the members of the tribunal were chosen.'
  ],
  held: [
    { kind: 'majority', label: 'The judgment of Justice Ranganath Misra, for himself and Justices Khalid, Oza and Dutt', points: [
      'The tribunal must be "a worthy successor and real substitute of the High Court", in substance and in fact, not only in form.',
      'The tribunal takes the place of the High Court in service matters. The tribunal is not an extra layer added to the High Court.',
      'Section 6(1)(c), which allowed a person who had only been a Secretary to the Government to be appointed Chairman, was invalid.',
      'Members should be chosen by a high-level selection committee headed by a sitting Supreme Court judge named by the Chief Justice of India.',
      'Benches of the tribunal were to be set up at the seat of every High Court. The Supreme Court\'s powers under Articles 32 and 136 were kept.'
    ] },
    { kind: 'concurring', label: 'Chief Justice P.N. Bhagwati, agreeing in a separate opinion', points: [
      'Judicial review is a basic and essential feature of the Constitution, and no law can abolish it.',
      'But Parliament may set up another body for judicial review, if that body works no less well than the High Court.',
      'Appointments to the tribunal must be made after consulting the Chief Justice of India, or by a high-level committee headed by the Chief Justice or a Supreme Court judge he names.'
    ] }
  ],
  principles: [
    'In 1986, a tribunal could replace a High Court only if it was an equally effective forum for judicial review.',
    'So the Court accepted the tribunal, but only after reshaping it to look like a court. Eleven years later, a larger bench went further.'
  ],
  legacy: [
    'In L. Chandra Kumar (1997), seven judges overruled this view. The High Courts\' power of review cannot be shut out, and tribunals can only add to the High Courts.'
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
  summary: 'Looking again at its 1991 directions, the Court held that judges hold public office and are not employees. The minimum service conditions of the judiciary must be provided whatever a State\'s finances. The Court changed some directions, including the retirement age of 60.',
  background: [
    'The subordinate judiciary means the district judges and magistrates below the High Courts. Most people who go to court meet only these judges.',
    'Under Article 309, the legislature and the government normally fix the service conditions of public servants. Article 312 lets Parliament create All India Services, and since 1976 that includes an All India Judicial Service.',
    'In a judgment of 13 November 1991, the Court gave directions to improve the service conditions of the subordinate judiciary.'
  ],
  question: [
    'Should the Court change its directions of 13 November 1991 on the service conditions of the subordinate judiciary?',
    'Can States refuse minimum service conditions for judges because they lack money?'
  ],
  facts: [
    'The 1991 directions included an All India Judicial Service, uniform titles for judges, a retirement age of 60, a review of pay, housing, libraries and vehicles.',
    'The Union of India and several States asked for a review. They argued that service conditions are for the government and the legislature to decide, and that the States could not afford the directions.'
  ],
  held: [
    { kind: 'unanimous', label: 'All three judges agreed (3:0). Justice P.B. Sawant wrote the judgment', points: [
      '"The judicial service is not service in the sense of \'employment\'. The judges are not employees." They hold public office and use the sovereign power of the State to judge.',
      'Minimum service conditions for the judiciary must be provided whether or not a State can easily afford them.',
      'Creating an All India Judicial Service was left to the Union under Article 312. Uniform titles and ranks were kept.',
      'At least three years of practice as a lawyer was made essential for recruitment at the lowest level of the judiciary.',
      'The retirement age was raised to 60, but not automatically. The High Courts must assess each officer before 58, and only those found fit continue to 60.',
      'A separate pay commission for the judiciary was needed. The directions on housing and vehicles were kept with some changes, and the deadline was extended to 31 March 1994.'
    ] }
  ],
  principles: [
    'Judges hold constitutional office. They are not government employees.',
    'The State must give the judiciary minimum working and service conditions, whatever its finances.',
    'So the lower courts cannot be starved of pay, housing and books for want of money. A poor State still owes its judges the basics.'
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
  summary: 'The Court struck down the parts of the Tribunals Reforms Ordinance, 2021 that set a minimum age of 50 and a four-year term for tribunal members. The ordinance repeated rules the Court had already rejected, and weakened the independence of tribunals.',
  background: [
    'Tribunals are specialist bodies that decide certain disputes in place of ordinary courts. Because they do the work of courts, their members need secure terms and freedom from government pressure.',
    'In Madras Bar Association v. Union of India (2020), the Court fixed a five-year term for tribunal members, and made advocates with ten years\' practice eligible for appointment.',
    'A legislature may change the law on which a judgment rests, so that the judgment no longer applies. But it cannot simply declare that a judgment shall not be followed. Lawyers call the first a valid "removal of the basis" of the judgment.'
  ],
  question: [
    'After the Court\'s 2020 ruling, could the Ordinance fix a minimum age of 50 for appointment and a four-year term for tribunal members?',
    'Can a law override the Court\'s directions without removing the basis of its judgment?'
  ],
  facts: [
    'On 4 April 2021 the Tribunals Reforms (Rationalisation and Conditions of Service) Ordinance, 2021 amended Section 184 of the Finance Act, 2017.',
    'The Ordinance fixed a minimum age of 50 years for appointment and a four-year term. The Ordinance also required the selection committee to recommend two names for each post.',
    'The Madras Bar Association challenged the Ordinance.'
  ],
  held: [
    { kind: 'majority', label: 'The majority: Justice L. Nageswara Rao, with Justice S. Ravindra Bhat agreeing in a separate opinion', points: [
      'The provisos fixing a minimum age of 50, and dealing with house rent allowance, overrode the Court\'s 2020 judgment and are unconstitutional.',
      'The rule requiring two names for each post, with the government deciding "preferably" within three months, is also unconstitutional.',
      'The four-year term in Section 184(11) goes against the separation of powers, the independence of the judiciary, the rule of law and Article 14.',
      'The term fixed in the 2020 judgment prevails: five years, or until the age of 70 for a Chairperson and 67 for a Member, whichever comes first.',
      'A law that does not remove the basis of a judgment cannot cancel the Court\'s directions.',
      'Appointments made under the Court\'s interim orders up to 4 April 2021 were protected.'
    ] },
    { kind: 'dissent', label: 'Justice Hemant Gupta, in dissent', points: [
      'Justice Gupta disagreed with the majority and would have upheld the provisions, except part of Section 184(7).'
    ] }
  ],
  principles: [
    'Secure tenure and proper service conditions are essential to the independence of tribunals.',
    'The legislature cannot override a judgment of the Court without curing its basis.',
    'So the government cannot keep tribunal members on short terms, always hoping for reappointment. Short terms make them depend on the government they must sometimes rule against.'
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
  summary: 'Article 324 is a store of power for the Election Commission where the law is silent, but the Commission must act fairly and within the law. A challenge to the cancellation of a poll must be made by an election petition after the result, not by a writ petition during the election.',
  background: [
    'Article 324 gives the Election Commission the superintendence, direction and control of elections to Parliament, the State legislatures and the offices of President and Vice-President.',
    'Article 329(b) says that an election can be challenged only by an election petition, filed in the High Court after the result under the Representation of the People Act, 1951.',
    'In N.P. Ponnuswami (1952), the Court held that "election" means the whole process, so courts cannot interfere once it has begun.',
    'Natural justice means the basic rules of a fair hearing. A person affected by a decision must normally be heard first.'
  ],
  question: [
    'Could the High Court hear a writ petition against the Election Commission\'s order cancelling a poll and ordering a fresh one?',
    'How far does the Election Commission\'s power under Article 324 reach, and must it follow natural justice?'
  ],
  facts: [
    'In the 1977 Lok Sabha election, counting in the Ferozepur constituency in Punjab was disrupted by violence. Ballot papers from one assembly segment were destroyed.',
    'Mohinder Singh Gill, a candidate, appeared to be winning when counting stopped.',
    'On 22 March 1977 the Chief Election Commissioner cancelled the poll in the whole constituency and ordered a fresh poll, relying on Article 324.',
    'Gill challenged the order under Article 226. The High Court dismissed the petition as barred by Article 329(b).'
  ],
  held: [
    { kind: 'majority', label: 'The judgment of Justice V.R. Krishna Iyer, for himself, Chief Justice Beg and Justice Bhagwati, with Justices Goswami and Shinghal agreeing separately', points: [
      'The only remedy against a step in an election is an election petition. Article 329(b) shuts out writ petitions under Article 226 while the election is going on.',
      'The cancellation of the poll and the order for a fresh poll were steps in the election, so the writ petition was barred.',
      'The election court can examine whether the Commission\'s order was valid, and can grant full relief under the Representation of the People Act, 1951.',
      'Article 324 works in areas that no law covers. But it "does not exalt the Election Commission into a law unto itself". The Commission must act fairly and within the law.',
      'Natural justice applies to the Commission where its action directly affects candidates. The hearing may be short where quick action is needed.',
      'An order must be judged by the reasons written in it. The order cannot be defended later with new reasons given in affidavits.'
    ] }
  ],
  principles: [
    'The Election Commission has full power under Article 324 to fill gaps in the law, subject to fairness and the rule of law.',
    'Election disputes are decided by election petitions after the result, not by courts during the election.',
    'So the Commission may act quickly to save an election, but it must still act fairly, and it must stand by the reasons it gave at the time.'
  ],
  legacy: [
    'The rule that an order must stand or fall on the reasons written in it is widely applied in administrative law.'
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
  summary: 'Voters have a right under Article 19(1)(a) to know about the candidates. The Election Commission was told to require every candidate to declare on affidavit any criminal record, assets, debts and educational qualifications.',
  background: [
    'Article 324 gives the Election Commission the superintendence, direction and control of elections to Parliament, the State legislatures and the offices of President and Vice-President.',
    'Article 19(1)(a) protects freedom of speech and expression. The Court has held that it includes the right to receive information.',
    'In its 170th Report (1999), the Law Commission had recommended that candidates disclose their criminal cases and assets. Parliament had not acted on it.',
    'A court takes cognizance of an offence when it formally takes up the case. A charge is framed when the court formally states the accusation for trial.'
  ],
  question: [
    'Do voters have a right to know the criminal record, assets and qualifications of candidates?',
    'Can the Election Commission require such disclosure when the law is silent?'
  ],
  facts: [
    'In 1999 the Association for Democratic Reforms filed a writ petition in the Delhi High Court. The petition asked for the Law Commission\'s recommendations on disclosure by candidates to be carried out.',
    'On 2 November 2000 the High Court directed the Election Commission to obtain information about candidates, including criminal cases, assets and qualifications.',
    'The Union of India appealed to the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'All three judges agreed (3:0). Justice M.B. Shah wrote the judgment', points: [
      'In a democracy, voters have a right to know the relevant facts about candidates. The right is part of the freedom of speech and expression under Article 19(1)(a).',
      'Where the law is silent, Article 324 is a store of power. The Election Commission can issue directions to fill the gap.',
      'Every candidate must declare on affidavit any past conviction, acquittal or discharge in a criminal case. The candidate must also declare any pending case for an offence punishable with two years or more, in which a charge has been framed or cognizance taken.',
      'The candidate must also declare the assets of the candidate, spouse and dependants, debts such as dues to public institutions, and educational qualifications.',
      'The High Court\'s directions were changed to this extent, and the Election Commission was to act on them within two months.'
    ] }
  ],
  principles: [
    'The voter\'s right to information about candidates is a fundamental right.',
    'The Election Commission can act under Article 324 where the law is silent.',
    'So a voter can now see, before voting, whether a candidate faces serious criminal charges and what the candidate owns.'
  ],
  legacy: [
    'Parliament added Section 33A to the Representation of the People Act, 1951 in 2002, requiring less disclosure than the Court had ordered.',
    'In PUCL v. Union of India (2003), the Court struck down the provision that limited disclosure, and restored the requirement to disclose assets and debts.'
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
  summary: 'The Court held that, until Parliament made a law, a committee would advise on appointing the Chief Election Commissioner and the Election Commissioners. The committee was the Prime Minister, the Leader of the Opposition and the Chief Justice of India. Parliament soon passed a law with a different committee.',
  background: [
    'Article 324 gives the Election Commission the superintendence, direction and control of elections to Parliament, the State legislatures and the offices of President and Vice-President.',
    'Article 324(2) says the President appoints the Chief Election Commissioner and the Election Commissioners, subject to any law made by Parliament. No such law had ever been made.',
    'In practice, the President appointed them on the advice of the Union Government, which meant the ruling party chose the people who would referee its elections.',
    'Under Article 324(5), the Chief Election Commissioner can be removed only like a Supreme Court judge. The other Election Commissioners can be removed on the Chief Election Commissioner\'s recommendation.'
  ],
  question: [
    'Was appointment of the Chief Election Commissioner and the Election Commissioners by the government alone consistent with free and fair elections?',
    'Can the Court lay down a procedure for appointment when Parliament has not made the law that Article 324(2) expects?'
  ],
  facts: [
    'In 2015 Anoop Baranwal filed a public interest petition challenging the system of appointment.',
    'On 23 October 2018 the case was sent to a Constitution Bench of five judges, and similar petitions were heard with it.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Justice K.M. Joseph wrote the main judgment', points: [
      'The Election Commission must be independent, and must act fairly and according to the rule of law, so that elections are free and fair.',
      'Until Parliament makes a law, the President shall appoint the Chief Election Commissioner and the Election Commissioners on the advice of a committee of three.',
      'The committee is the Prime Minister, the Leader of the Opposition in the Lok Sabha and the Chief Justice of India.',
      'Where there is no Leader of the Opposition, the leader of the largest opposition party in the Lok Sabha sits on the committee.',
      'The Court left it to Parliament to decide on an independent office staff for the Commission and on paying its costs from the Consolidated Fund of India.'
    ] },
    { kind: 'concurring', label: 'Justice Ajay Rastogi, agreeing in a separate opinion', points: [
      'Election Commissioners should be removable only on the same grounds as the Chief Election Commissioner, so that they too are free from political pressure.'
    ] }
  ],
  principles: [
    'An independent Election Commission is essential to free and fair elections.',
    'So the Court tried to take the choice of election referees out of the ruling party\'s hands alone. Parliament then wrote its own law and kept the government in the majority on the committee.'
  ],
  legacy: [
    'In December 2023 Parliament passed the Chief Election Commissioner and Other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023. The Act replaced the Chief Justice on the committee with a Union Cabinet Minister chosen by the Prime Minister.',
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
  summary: 'The Electoral Bond Scheme, 2018 was struck down. Secret political funding breaks voters\' right to information under Article 19(1)(a), and unlimited company donations break Article 14. The State Bank of India was ordered to disclose the details of the bonds.',
  background: [
    'Political parties need money to fight elections. Under the Representation of the People Act, parties had to report donations above Rs. 20,000. Under the Companies Act, a company could give no more than 7.5 per cent of its average net profit.',
    'In Association for Democratic Reforms (2002), the Court held that voters have a right to know about candidates under Article 19(1)(a).',
    'A limit on a right is proportionate if it serves a legitimate aim and goes no further than needed, choosing the least harmful way to reach the aim.'
  ],
  question: [
    'Does secret funding of political parties through electoral bonds break voters\' right to information?',
    'Were the amendments allowing unlimited company donations valid?'
  ],
  facts: [
    'The Finance Act, 2017 amended the Reserve Bank of India Act, the Representation of the People Act, the Income Tax Act and the Companies Act.',
    'The Electoral Bond Scheme, 2018 let donors buy bonds from the State Bank of India and give them to political parties. The parties did not have to disclose who gave the bonds.',
    'The amendments also removed the limit on company donations.',
    'The Association for Democratic Reforms, Common Cause and others challenged the scheme and the amendments.'
  ],
  held: [
    { kind: 'majority', label: 'The main judgment by Chief Justice D.Y. Chandrachud, for himself and Justices Gavai, Pardiwala and Misra', points: [
      '"Information about funding to a political party is essential for a voter to exercise their freedom to vote in an effective manner." Voters have a right to this information under Article 19(1)(a).',
      'Curbing black money is not a ground for limiting speech under Article 19(2). In any case, the scheme was not the least restrictive way to reach that aim.',
      'Donors\' privacy about their political views is protected. But the existing rule of disclosing donations above Rs. 20,000 already balances that privacy with voters\' right to know.',
      'Allowing unlimited company donations is manifestly arbitrary and breaks Article 14, because companies could use their money to buy influence over policy.',
      'The scheme, and the amendments to the Representation of the People Act, the Income Tax Act and the Companies Act, were struck down.',
      'The State Bank of India was to stop issuing bonds and give the Election Commission details of all bonds bought and cashed since 12 April 2019. The Election Commission was to publish them.'
    ] },
    { kind: 'concurring', label: 'Justice Sanjiv Khanna, agreeing in a separate opinion', points: [
      'Justice Khanna reached the same result by applying the proportionality test more strictly, with data on bond sales. Companies cannot claim the same privacy as individuals for their political donations.'
    ] }
  ],
  principles: [
    'Voters\' right to information reaches the funding of political parties.',
    'Unlimited company funding of parties threatens free and fair elections.',
    'So voters are entitled to know who pays the parties they vote for, especially when the payer is a company that may want something back.'
  ],
  legacy: [
    'After the Court refused the State Bank of India more time, the Election Commission published the details of the bonds in March 2024.'
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
  summary: '"Election" in Article 329(b) means the whole process, from the notice of election to the declaration of the result. Once the process begins, courts cannot interfere. The only remedy is an election petition after the election.',
  background: [
    'Article 329(b) says that an election can be challenged only by an election petition, filed in the High Court after the result under the Representation of the People Act, 1951.',
    'Under Article 226, the High Courts can issue writs, orders that correct the actions of authorities. The question was whether they could use that power in the middle of an election.',
    'A candidate files nomination papers to stand for election. The Returning Officer, the official in charge of the election in a constituency, checks them and can reject them.'
  ],
  question: [
    'Can the rejection of a nomination paper be challenged by a writ petition while the election is going on?',
    'What does "election" mean in Article 329(b)?'
  ],
  facts: [
    'N.P. Ponnuswami filed nomination papers for election to the Madras Legislative Assembly from the Namakkal constituency.',
    'On 28 November 1951 the Returning Officer rejected the nomination.',
    'Ponnuswami asked the Madras High Court under Article 226 to quash the rejection. The High Court held that Article 329(b) barred it from interfering.'
  ],
  held: [
    { kind: 'unanimous', label: 'All six judges agreed (6:0). Justice S. Fazl Ali wrote the judgment', points: [
      'In Part XV of the Constitution, "election" has a wide meaning. The word covers the entire process by which a candidate is elected to the legislature.',
      'Article 329(b), which opens with the words "notwithstanding anything in this Constitution", bars any challenge to an election except by an election petition. So writ petitions under Article 226 are shut out.',
      'The Representation of the People Act, 1951 provides only one remedy: an election petition filed after the election is over. There is no remedy in the middle of the process.',
      'Elections should be completed on time, and disputes should wait until the election is over.',
      'Wrongly rejecting a nomination is a ground for setting aside an election in an election petition.',
      'The appeal was dismissed.'
    ] }
  ],
  principles: [
    'Courts do not interrupt an election that is under way. Disputes are decided by election petitions after the result.',
    'So a wrongly rejected candidate is not left without a remedy. The remedy simply comes after the vote, so that the election is not held up.'
  ],
  legacy: [
    'In Mohinder Singh Gill (1977), the Court applied this rule to the Election Commission\'s cancellation of a poll.'
  ],
  source: 'https://indiankanoon.org/doc/181440373/'
}

});
