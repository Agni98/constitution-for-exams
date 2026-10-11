/* Landmark judgments, rewritten in full. Batch 11: Parliament and the
   legislative process, Articles 105 to 123.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. P.V. Narasimha Rao, Raja Ram Pal, Rojer Mathew
   and D.C. Wadhwa were checked against the full text on Indian Kanoon,
   including the conclusions of each opinion. The Aadhaar judgment, Sita Soren
   and Krishna Kumar Singh are too long to read through in one fetch; their
   holdings and the split of opinions were confirmed from the Supreme Court
   Observer's summaries. The corrections to the short summaries that came out
   of the check: D.C. Wadhwa was decided on 20 December 1986, not in 1987.
   In Krishna Kumar Singh the number of re-promulgations could not be
   confirmed, so the entry says only that the ordinance was re-promulgated
   several times.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'pv-narasimha-rao-1998': {
  name: 'P.V. Narasimha Rao v. State (CBI/SPE)',
  aka: 'The JMM bribery case',
  decided: '17 April 1998',
  citation: '(1998) 4 SCC 626',
  bench: 5,
  result: 'Majority 3:2',
  status: 'overruled',
  tags: ['Article 105(2)', 'Parliamentary privilege', 'Bribery'],
  judges: 'S.C. Agrawal, G.N. Ray, A.S. Anand, S.P. Bharucha and S. Rajendra Babu',
  summary: 'By 3 votes to 2, members of Parliament who took bribes and then voted as agreed were held immune from prosecution under Article 105(2). A member who took a bribe but did not vote, and those who paid, were not immune. The ruling was overruled in Sita Soren (2024).',
  background: [
    'Article 105 protects members of Parliament so that they can speak and vote freely. Under Article 105(2), no member can be taken to court for anything said or any vote given in Parliament. Article 194 gives the same protection to members of State legislatures.',
    'Article 105(3) gives each House its other powers and privileges, which trace back to those of the British House of Commons. Each House can punish its own members for breach of privilege.',
    'A no-confidence motion is a vote in the Lok Sabha to remove the government. If most members vote for it, the government must resign.',
    'Under the Prevention of Corruption Act, 1988, a public servant who takes a bribe commits an offence. Before prosecuting a public servant, permission is usually needed from the authority that can remove them.'
  ],
  question: [
    'Does Article 105(2) protect a member of Parliament from prosecution for taking a bribe to vote in a particular way?',
    'Does Article 105(3) give any such immunity?',
    'Is a member of Parliament a public servant under the Prevention of Corruption Act, 1988?'
  ],
  facts: [
    'In July 1993 a no-confidence motion was moved in the Lok Sabha against the government of Prime Minister P.V. Narasimha Rao. The government survived the vote.',
    'The CBI alleged that members of the Jharkhand Mukti Morcha (JMM) and of the Janata Dal (Ajit Singh group) had been paid bribes to vote against the motion.',
    'Ajit Singh was said to have taken a bribe but did not vote.',
    'Narasimha Rao and others were charged with criminal conspiracy and with offences under the Prevention of Corruption Act. The accused claimed immunity under Article 105.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of three on Article 105: Justice S.P. Bharucha, for himself and Justice Rajendra Babu, with Justice G.N. Ray agreeing', points: [
      'Article 105(2) protects a member from court proceedings "in respect of" any vote given in Parliament. The protection must be read broadly.',
      'The members who took bribes and then voted against the motion had the protection of Article 105(2). They could not be prosecuted.',
      'Ajit Singh, who did not vote, had no immunity. The charge of conspiracy against him had to go to trial.',
      'The people who paid the bribes had no immunity either, and their trial had to go ahead.',
      'Article 105(3) did not help the accused. Parliament could still act against both the takers and the givers of bribes, for breach of privilege or contempt.',
      'Members of Parliament and of State legislatures are public servants under the Prevention of Corruption Act.'
    ] },
    { kind: 'dissent', label: 'Justice S.C. Agrawal, for himself and Justice A.S. Anand, in dissent on Article 105', points: [
      'A member of Parliament has no immunity under Article 105(2) or 105(3) from prosecution for offering or taking a bribe to speak or vote in Parliament.',
      'No authority can remove a member of Parliament, so no permission to prosecute is needed under Section 19 of the Act.',
      'Until Parliament changes the law, the prosecutor must get the permission of the Speaker or the Chairman before filing a charge-sheet against a member.'
    ] }
  ],
  principles: [
    'So the result was strange. The member who took the money and voted as paid was safe, while the member who took the money and stayed away was not.'
  ],
  legacy: [
    'The ruling was widely criticised for that reason.',
    'In Sita Soren v. Union of India (2024), seven judges unanimously overruled this judgment and held that bribery is not protected by parliamentary privilege.'
  ],
  source: 'https://indiankanoon.org/doc/1301360/'
},

'sita-soren-2024': {
  name: 'Sita Soren v. Union of India',
  aka: 'The legislators\' bribery case',
  decided: '4 March 2024',
  citation: 'Criminal Appeal No. 451 of 2019',
  bench: 7,
  result: 'Unanimous, 7:0',
  tags: ['Article 194(2)', 'Parliamentary privilege', 'Bribery'],
  judges: 'D.Y. Chandrachud CJI, A.S. Bopanna, M.M. Sundresh, P.S. Narasimha, J.B. Pardiwala, P.V. Sanjay Kumar and Manoj Misra',
  summary: 'Members of Parliament and State legislatures have no immunity from prosecution for taking bribes, even when the bribe is for a vote or a speech in the House. P.V. Narasimha Rao (1998) was overruled.',
  background: [
    'Article 105 protects members of Parliament so that they can speak and vote freely. Under Article 105(2), no member can be taken to court for anything said or any vote given in Parliament. Article 194 gives the same protection to members of State legislatures.',
    'In P.V. Narasimha Rao (1998), three judges out of five held that members who took bribes and then voted as paid were immune under Article 105(2).',
    'Members of each State Assembly elect that State\'s members of the Rajya Sabha. In these elections, members of a party vote by open ballot, so the party can see how each member voted.'
  ],
  question: [
    'Do Articles 105(2) and 194(2) protect a legislator from prosecution for taking a bribe to vote or speak in a particular way?',
    'Was P.V. Narasimha Rao (1998) rightly decided?'
  ],
  facts: [
    'In 2012 Sita Soren, a Jharkhand Mukti Morcha member of the Jharkhand Legislative Assembly, was accused of taking a bribe to vote for an independent candidate in the Rajya Sabha election.',
    'In the end, Sita Soren voted for her party\'s own candidate.',
    'The CBI filed a charge-sheet. In 2014 the Jharkhand High Court refused to quash the proceedings.',
    'On appeal, the question whether Narasimha Rao should be reconsidered was sent to seven judges.'
  ],
  held: [
    { kind: 'unanimous', label: 'All seven judges agreed (7:0). Chief Justice D.Y. Chandrachud wrote the judgment', points: [
      'P.V. Narasimha Rao is overruled. The Court refused to follow precedent rigidly to save a wrong decision.',
      'Articles 105(2) and 194(2) do not protect a legislator from prosecution for bribery.',
      'The offence of bribery is complete when the bribe is accepted, whether or not the legislator later votes or speaks as agreed.',
      'Immunity is available only if two tests are met. The act must relate to the collective working of the House, and it must be necessary for the legislator\'s duties.',
      'Taking a bribe is not necessary for casting a vote or making a speech. So bribery is not protected.',
      'The privilege for votes covers votes in Rajya Sabha elections and in the election of the President. But it still does not cover bribery.',
      'The courts\' power to try bribery and the House\'s power to discipline its members can work side by side.'
    ] }
  ],
  principles: [
    'Parliamentary privilege protects the free working of the House, not the private gain of its members.',
    'So the protection for a legislator\'s vote does not protect a vote that was sold.'
  ],
  legacy: [
    'The prosecution against Sita Soren was allowed to go ahead.'
  ],
  source: 'https://indiankanoon.org/doc/193599726/'
},

'raja-ram-pal-2007': {
  name: 'Raja Ram Pal v. Hon\'ble Speaker, Lok Sabha',
  full: 'Raja Ram Pal v. Hon\'ble Speaker, Lok Sabha and Others',
  aka: 'The cash-for-query expulsion case',
  decided: '10 January 2007',
  citation: '(2007) 3 SCC 184',
  bench: 5,
  result: 'Majority 4:1',
  tags: ['Article 105(3)', 'Expulsion of members', 'Article 122'],
  judges: 'Y.K. Sabharwal CJI, K.G. Balakrishnan, C.K. Thakker, R.V. Raveendran and D.K. Jain',
  summary: 'Each House of Parliament can expel a member, as part of its privileges under Article 105(3). The courts can review that power for illegality or unconstitutionality, but not for mere mistakes of procedure.',
  background: [
    'Article 105(3) gives each House of Parliament its powers and privileges, which trace back to those of the British House of Commons.',
    'Articles 101 and 102 list the ways in which a member\'s seat falls vacant, such as resignation or disqualification. Expulsion is not on the list.',
    'Article 122 says that no court can question the proceedings of Parliament on the ground of any irregularity of procedure.'
  ],
  question: [
    'Do the Houses of Parliament have the power to expel a member?',
    'Given the bar in Article 122, can the courts review how a House uses its privileges, and how far?'
  ],
  facts: [
    'On 12 December 2005 a television channel broadcast a sting operation, a secret recording. The recording showed members of Parliament taking money for asking questions or raising issues in Parliament.',
    'Committees of the Lok Sabha and the Rajya Sabha inquired and found the charges proved.',
    'Eleven members, ten of the Lok Sabha and one of the Rajya Sabha, were expelled in December 2005.',
    'Raja Ram Pal and the other expelled members challenged the expulsions.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of four: Chief Justice Y.K. Sabharwal, with a separate opinion by Justice C.K. Thakker agreeing', points: [
      'The power to expel a member is part of the powers and privileges of each House under Article 105(3).',
      'Expulsion is different from disqualification. Articles 101 and 102 do not list every way in which membership can end.',
      'The use of parliamentary privilege is not wholly beyond the courts.',
      'Article 122 bars a challenge only on the ground of irregular procedure. Courts can examine proceedings that are illegal or unconstitutional.',
      'The expulsions were valid, and the petitions were dismissed.'
    ] },
    { kind: 'dissent', label: 'Justice R.V. Raveendran, in dissent', points: [
      'Articles 101 and 102 together cover every way in which membership of Parliament ends. The Constitution does not provide for ending membership by expulsion.',
      'The power to expel is not a privilege that comes with Article 105(3). Expulsion would need an amendment to Article 101 or 102, or a law under Article 102(1)(e).',
      'A member accused of corruption should be prosecuted, and may be suspended from the House meanwhile. The expulsions were invalid.'
    ] }
  ],
  principles: [
    'So the House can throw out members who sold their questions. But the courts keep a narrow power to check that the House acted within the Constitution.'
  ],
  legacy: [
    'In Sita Soren (2024), the Court held that bribery by legislators is not protected by parliamentary privilege, while each House keeps its power to discipline members.'
  ],
  source: 'https://indiankanoon.org/doc/61480953/'
},

'rojer-mathew-2019': {
  name: 'Rojer Mathew v. South Indian Bank Ltd.',
  full: 'Rojer Mathew v. South Indian Bank Ltd. and Others',
  aka: 'The tribunals and Money Bill case',
  decided: '13 November 2019',
  citation: '(2020) 6 SCC 1',
  bench: 5,
  result: 'Majority, with two separate opinions',
  tags: ['Article 110', 'Money Bill', 'Tribunals'],
  judges: 'Ranjan Gogoi CJI, N.V. Ramana, D.Y. Chandrachud, Deepak Gupta and Sanjiv Khanna',
  summary: 'The rules made under the Finance Act, 2017 for appointing tribunal members were struck down for weakening judicial independence. Whether that part of the Act could be passed as a Money Bill was sent to a larger bench.',
  background: [
    'Tribunals are specialist bodies, such as the income tax and company law tribunals, that decide disputes in place of ordinary courts. Because they do the work of courts, they must be independent of the government.',
    'A Money Bill, under Article 110, is a Bill that deals only with taxes, government borrowing, and money paid into or out of the government\'s main account, the Consolidated Fund of India. The Speaker certifies a Bill as a Money Bill. The Rajya Sabha cannot amend or block it, and can only suggest changes within 14 days.',
    'Excessive delegation means that a legislature hands its law-making power to the government without giving it any guidance.'
  ],
  question: [
    'Part XIV of the Finance Act, 2017 changed the working of many tribunals. Was it validly passed as a Money Bill?',
    'Did Section 184 of the Act give the government too much power to make rules?',
    'Were the Tribunal Rules, 2017, made under Section 184, valid?'
  ],
  facts: [
    'Part XIV of the Finance Act, 2017 amended many laws on tribunals. Section 184 let the Central Government make rules on the qualifications, appointment, tenure and service conditions of tribunal members.',
    'The Finance Act was passed as a Money Bill, so the Rajya Sabha could not amend it.',
    'In 2017 the government made the Tribunal Rules. For most tribunals, the committees that chose members were made up wholly or mostly of people from, or chosen by, the Central Government.',
    'Rojer Mathew and others challenged Part XIV and the Rules.'
  ],
  held: [
    { kind: 'majority', label: 'The majority opinion by Chief Justice Ranjan Gogoi, for himself and Justices Ramana and Khanna', points: [
      'The Tribunal Rules, 2017 go against the parent laws and against constitutional principles. The Rules were struck down in full.',
      'The Aadhaar judgment (2018) did not examine the effect of the word "only" in Article 110(1). So the Money Bill question, and the Speaker\'s certificate, were sent to a larger bench.',
      'Section 184 does not give away too much power. The Court\'s binding judgments on tribunals guide the power to make rules.',
      'The government must frame new rules that follow the Court\'s earlier judgments on tribunals, with equal and uniform conditions of service and a secure tenure.',
      'The Ministry of Law and Justice must carry out a judicial impact assessment, a study of how new laws add to the work of the courts and tribunals.'
    ] },
    { kind: 'concurring', label: 'Justice Deepak Gupta, agreeing in part', points: [
      'Justice Gupta agreed with most of the majority\'s conclusions, but held that Section 184 does give away too much power.',
      'Justice Gupta also called for a body to carry out judicial impact assessment and an independent body to choose tribunal members.'
    ] },
    { kind: 'dissent', label: 'Justice D.Y. Chandrachud, in dissent on the Money Bill question', points: [
      'Part XIV of the Finance Act, 2017 could not have been passed as a Money Bill.',
      'The Rules are unconstitutional because they break judicial independence. An independent National Tribunals Commission should be set up to oversee tribunals.'
    ] }
  ],
  principles: [
    'Tribunals that take over the work of courts must be independent of the government, especially in appointments and tenure.',
    'So the government cannot pick and control the people who decide cases against it.'
  ],
  legacy: [
    'In Madras Bar Association v. Union of India (2020), the Court directed the government to set up a National Tribunals Commission.',
    'The seven-judge reference on Money Bills was still pending in 2025.'
  ],
  source: 'https://indiankanoon.org/doc/36423291/'
},

'puttaswamy-aadhaar-2018': {
  name: 'K.S. Puttaswamy v. Union of India (Aadhaar)',
  full: 'Justice K.S. Puttaswamy (Retd.) v. Union of India and Others',
  aka: 'The Aadhaar case',
  decided: '26 September 2018',
  citation: '(2019) 1 SCC 1',
  bench: 5,
  result: 'Majority 4:1',
  status: 'partly',
  tags: ['Aadhaar', 'Right to privacy', 'Money Bill'],
  judges: 'Dipak Misra CJI, A.K. Sikri, A.M. Khanwilkar, D.Y. Chandrachud and Ashok Bhushan',
  summary: 'The Aadhaar Act, 2016 was upheld, and its passage as a Money Bill was accepted. But private companies cannot demand Aadhaar, and it cannot be made compulsory for bank accounts, mobile connections or school admissions.',
  background: [
    'Aadhaar gives each resident a unique 12-digit number linked to fingerprints, iris scans and basic details such as name and address. The scheme began in 2009 without any law behind it.',
    'In Puttaswamy (2017), nine judges held that privacy is a fundamental right. A law that limits privacy must have a legitimate aim and must be proportionate, going no further than the aim needs.',
    'A Money Bill, under Article 110, is a Bill that deals only with taxes, government borrowing, and money paid into or out of the government\'s main account, the Consolidated Fund of India. The Speaker certifies a Bill as a Money Bill. The Rajya Sabha cannot amend or block it, and can only suggest changes within 14 days.'
  ],
  question: [
    'Does the Aadhaar scheme break the right to privacy?',
    'Was the Aadhaar Act validly passed as a Money Bill?',
    'Which uses of Aadhaar are valid?'
  ],
  facts: [
    'The Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016 was passed as a Money Bill.',
    'Aadhaar was made necessary for many purposes, including welfare benefits, bank accounts, mobile connections and income tax returns.',
    'Justice K.S. Puttaswamy and others challenged the scheme and the Act. The privacy judgment of 2017 had come out of the same challenge.'
  ],
  held: [
    { kind: 'majority', label: 'The majority opinion by Justice A.K. Sikri, for himself, Chief Justice Misra and Justice Khanwilkar', points: [
      'The Aadhaar Act is valid. The Act meets the tests of legality, legitimate aim and proportionality set in Puttaswamy (2017), and its design does not create a surveillance state.',
      'The Act was validly passed as a Money Bill.',
      'Section 7, which makes Aadhaar necessary for subsidies, benefits and services paid for from the Consolidated Fund of India, is valid.',
      'The part of Section 57 that let companies and individuals demand Aadhaar checks was struck down.',
      'Aadhaar cannot be made compulsory for bank accounts, mobile connections, school admissions, or examinations such as those of the CBSE and NEET.',
      'Linking Aadhaar with PAN, the income tax number, under Section 139AA of the Income Tax Act is valid.',
      'Section 33(2), which allowed data to be disclosed in the interest of national security, was struck down. Records of Aadhaar checks cannot be kept beyond six months.',
      'Children need their parents\' consent to enrol, and can opt out when they become adults.'
    ] },
    { kind: 'concurring', label: 'Justice Ashok Bhushan, in a separate opinion agreeing', points: [
      'Justice Bhushan agreed that the Act is valid and was properly passed as a Money Bill, but differed from the majority on some provisions, such as Section 33.'
    ] },
    { kind: 'dissent', label: 'Justice D.Y. Chandrachud, in dissent', points: [
      '"The Aadhaar Act could not have been passed as a Money Bill." Going around the Rajya Sabha was a fraud on the Constitution, so the whole Act is unconstitutional.',
      'The Aadhaar programme, since 2009, breaks the privacy of personal information. The programme lacks proper safeguards of consent, data protection and accountability.'
    ] }
  ],
  principles: [
    'So Aadhaar survived as a tool for delivering welfare, but not as a key that every bank, phone company and school could demand.'
  ],
  legacy: [
    'Parliament amended the Aadhaar Act in 2019 to allow voluntary use of Aadhaar for bank accounts and mobile connections.',
    'In Rojer Mathew (2019), the Court doubted the Money Bill reasoning of this judgment and sent that question to a larger bench.',
    'In January 2021 the review petitions against this judgment were dismissed by 4 votes to 1, with Justice Chandrachud dissenting.'
  ],
  source: 'https://indiankanoon.org/doc/127517806/'
},

'dc-wadhwa-1987': {
  name: 'D.C. Wadhwa v. State of Bihar',
  full: 'Dr. D.C. Wadhwa and Others v. State of Bihar and Others',
  aka: 'The ordinance raj case',
  decided: '20 December 1986',
  year: 1986,
  citation: '(1987) 1 SCC 378, AIR 1987 SC 579',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 213', 'Ordinances', 'Re-promulgation'],
  judges: 'P.N. Bhagwati CJI, Ranganath Misra, G.L. Oza, M.M. Dutt and K.N. Singh',
  summary: 'The Governor of Bihar kept making the same ordinances again and again without placing them before the legislature. The Court called this a fraud on the Constitution. The government cannot take over the law-making power of the legislature.',
  background: [
    'When the legislature is not sitting, the President (Article 123) or a Governor (Article 213) can make an ordinance, a temporary law for urgent needs. An ordinance lapses six weeks after the legislature meets again, unless the legislature passes it as an Act. Making the same ordinance again after it lapses is called re-promulgation.',
    'An ordinance is meant for emergencies. If the government keeps re-making it, a temporary law can last for years without the legislature ever voting on it.',
    'Normally only a person whose own rights are hurt can bring a case. In public interest cases, the Court allows a concerned citizen to raise a wrong that affects the public.'
  ],
  question: [
    'Can the Governor keep an ordinance alive for ever by re-making it after each session of the legislature?',
    'Does a member of the public have the standing to challenge such a practice?'
  ],
  facts: [
    'Dr. D.C. Wadhwa, a professor of economics at the Gokhale Institute of Politics and Economics, Pune, researched the use of ordinances in Bihar.',
    'Between 1967 and 1981 the Governor of Bihar made 256 ordinances. Many were kept alive for one to 14 years by being made again and again.',
    'The Bihar Sugarcane Ordinance of 1968, for example, was re-made 39 times and lasted almost 14 years.',
    'A 1981 circular told government departments to get ordinances re-made before they expired. The circular said the approval of the Council of Ministers was not needed if an ordinance was re-made without change.',
    'Dr. Wadhwa and three others, whose interests were affected by particular ordinances, filed writ petitions under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Chief Justice P.N. Bhagwati wrote the judgment', points: [
      'A member of the public has enough interest to challenge a practice by which the government regularly breaks the limits set by the Constitution. So Dr. Wadhwa could bring the case.',
      'The power to make ordinances under Article 213 is an emergency power. The power exists so that the Governor can act at once when the legislature is not sitting.',
      '"A constitutional authority cannot do indirectly what it is not permitted to do directly." Re-making ordinances as a routine, to get around their short life, is a fraud on the Constitution.',
      'The government cannot take over the law-making work of the legislature. Doing so would undermine democracy.',
      'Re-making an ordinance may be justified in a rare case, for example when the legislature has too much business to pass the Bill in one session. But it cannot be a routine practice.',
      'The Bihar Intermediate Education Council Ordinance, which was still in force, was struck down. Dr. Wadhwa was awarded costs of Rs. 10,000 for his research.'
    ] }
  ],
  principles: [
    'What cannot be done directly cannot be done indirectly. The rule binds every constitutional power, not only the power to make ordinances.',
    'So an ordinance may bridge a gap while the legislature is away, but may not become a way of governing.'
  ],
  legacy: [
    'In Krishna Kumar Singh v. State of Bihar (2017), seven judges relied on this judgment and held that re-making ordinances without placing them before the legislature is unconstitutional.'
  ],
  source: 'https://indiankanoon.org/doc/504006/'
},

'krishna-kumar-singh-2017': {
  name: 'Krishna Kumar Singh v. State of Bihar',
  full: 'Krishna Kumar Singh and Another v. State of Bihar and Others',
  aka: 'The re-promulgation of ordinances case',
  decided: '2 January 2017',
  citation: '(2017) 3 SCC 1',
  bench: 7,
  result: 'Majority 5:2',
  tags: ['Article 213', 'Ordinances', 'Judicial review'],
  judges: 'T.S. Thakur CJI, Madan B. Lokur, S.A. Bobde, A.K. Goel, U.U. Lalit, D.Y. Chandrachud and L. Nageswara Rao',
  summary: 'Re-making ordinances without placing them before the legislature is a fraud on the Constitution. Every ordinance must be laid before the legislature, and the courts can review the satisfaction behind it.',
  background: [
    'When the legislature is not sitting, the President (Article 123) or a Governor (Article 213) can make an ordinance, a temporary law for urgent needs. An ordinance lapses six weeks after the legislature meets again, unless the legislature passes it as an Act. Making the same ordinance again after it lapses is called re-promulgation.',
    'In D.C. Wadhwa (1986), the Court held that routinely re-making ordinances in Bihar was a fraud on the Constitution.',
    'The President or Governor makes an ordinance only when "satisfied" that urgent action is needed. The question was whether courts can examine that satisfaction.'
  ],
  question: [
    'Is it valid to re-make an ordinance again and again without placing it before the legislature?',
    'Is the duty to lay an ordinance before the legislature mandatory?',
    'Can the courts review the satisfaction on which an ordinance is made?',
    'Do rights created by an ordinance survive after it lapses?'
  ],
  facts: [
    'In 1989 the Governor of Bihar made an ordinance to take over the management of 429 of the 651 private Sanskrit schools in the State.',
    'The ordinance was re-made several times. The ordinance was never placed before the legislature or replaced by an Act.',
    'Teachers of the schools claimed that they had become employees of the State Government.',
    'In 1998 two judges of the Supreme Court agreed that the re-made ordinances were invalid, but differed on the first ordinance. The case was later sent to seven judges.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of five. Justice D.Y. Chandrachud wrote the judgment, for himself and Justices Bobde, Goel, Lalit and Nageswara Rao', points: [
      'Re-making ordinances without placing them before the legislature undermines the democratic process of law making. The practice is a fraud on the Constitution.',
      'The duty to lay an ordinance before the legislature is mandatory.',
      'The power to make ordinances under Articles 123 and 213 is not beyond the courts. The courts can examine the satisfaction of the President or the Governor.',
      'An ordinance that lapses does not automatically leave behind lasting rights. Its effects survive only where undoing them is impractical and the public interest requires it.',
      'The ordinances were invalid, and the teachers did not become government employees. But salaries already paid would not be taken back.'
    ] },
    { kind: 'dissent', label: 'Chief Justice T.S. Thakur and Justice Madan B. Lokur, in separate opinions', points: [
      'Chief Justice Thakur left open whether laying an ordinance before the legislature is mandatory.',
      'Justice Lokur held that Article 213 does not make it mandatory to lay an ordinance before the legislature.'
    ] }
  ],
  principles: [
    'So an ordinance is a bridge to a law, not a replacement for one. The legislature must get its chance to vote on it.'
  ],
  legacy: [
    'With D.C. Wadhwa (1986), this judgment is the main authority limiting government by ordinance, at the Centre and in the States.'
  ],
  source: 'https://indiankanoon.org/doc/3040654/'
}

});
