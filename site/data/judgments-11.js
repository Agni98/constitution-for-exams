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
  summary: 'Members of Parliament who took bribes and then voted as agreed were held immune from prosecution under Article 105(2). A member who took a bribe but did not vote, and those who paid the bribes, were not immune. The ruling was overruled in Sita Soren (2024).',
  question: [
    'Does Article 105(2) protect a member of Parliament from prosecution for taking a bribe to vote in a particular way?',
    'Does Article 105(3) give any such immunity?',
    'Is a member of Parliament a public servant under the Prevention of Corruption Act, 1988?'
  ],
  facts: [
    'In July 1993 a motion of no confidence was moved in the Lok Sabha against the government of Prime Minister P.V. Narasimha Rao. The government survived the vote.',
    'The CBI alleged that members of the Jharkhand Mukti Morcha and of the Janata Dal (Ajit Singh group) had been paid bribes to vote against the motion.',
    'Ajit Singh was alleged to have taken a bribe but did not vote.',
    'Narasimha Rao and others were charged with criminal conspiracy and with offences under the Prevention of Corruption Act, 1988. The accused claimed immunity under Article 105.'
  ],
  held: [
    { kind: 'majority', label: 'Majority on Article 105 (3 judges): Justice S.P. Bharucha, for himself and Justice Rajendra Babu, with Justice G.N. Ray agreeing', points: [
      'Article 105(2) protects a member from court proceedings "in respect of" any vote given in Parliament. This protection must be read broadly.',
      'The members who took bribes and then voted against the motion had the protection of Article 105(2). They could not be prosecuted.',
      'Ajit Singh, who did not vote, had no immunity. The charge of conspiracy against him had to go to trial.',
      'Those who paid the bribes had no immunity, and the trial against them had to proceed.',
      'Article 105(3) did not help the accused. Parliament could still act against both the bribe-takers and the bribe-givers for breach of privilege or contempt.',
      'Members of Parliament and of State legislatures are public servants under the Prevention of Corruption Act, 1988.'
    ] },
    { kind: 'dissent', label: 'Dissent on Article 105 (Justice S.C. Agrawal, for himself and Justice A.S. Anand)', points: [
      'A member of Parliament has no immunity under Article 105(2) or 105(3) from prosecution for offering or accepting a bribe to speak or vote in Parliament.',
      'No authority can remove a member of Parliament, so no sanction for prosecution under Section 19 of the Act is needed.',
      'Until Parliament changes the law, the prosecuting agency must get the permission of the Speaker or the Chairman before filing a charge-sheet against a member.'
    ] }
  ],
  principles: [
    'In 1998 the Court read the immunity for votes in Parliament broadly, even where the vote was bought.',
    'Those who pay bribes to members of Parliament are not protected by parliamentary privilege.'
  ],
  legacy: [
    'The ruling was widely criticised. A member who took a bribe and voted as paid was immune, while one who took a bribe and did not vote was not.',
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
  summary: 'Members of Parliament and State legislatures have no immunity from prosecution for taking bribes, even when the bribe is for a vote or speech in the House. P.V. Narasimha Rao (1998) was overruled.',
  question: [
    'Do Articles 105(2) and 194(2) protect a legislator from prosecution for taking a bribe to vote or speak in a particular way?',
    'Was P.V. Narasimha Rao (1998) correctly decided?'
  ],
  facts: [
    'In 2012 Sita Soren, a Jharkhand Mukti Morcha member of the Jharkhand Legislative Assembly, was accused of taking a bribe to vote for an independent candidate in the Rajya Sabha election.',
    'Voting was by open ballot. Sita Soren voted for the party\'s own candidate.',
    'The CBI filed a charge-sheet. In 2014 the Jharkhand High Court refused to quash the proceedings.',
    'On appeal, the question whether Narasimha Rao should be reconsidered was referred to seven judges.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (7:0), judgment by Chief Justice D.Y. Chandrachud', points: [
      'P.V. Narasimha Rao is overruled. The Court declined to apply the rule of precedent rigidly to save a wrong decision.',
      'Articles 105(2) and 194(2) do not protect a legislator from prosecution for bribery.',
      'The offence of bribery is complete when the bribe is accepted. It does not matter whether the legislator later votes or speaks as agreed.',
      'Immunity is available only if two tests are met. The act must relate to the collective functioning of the House, and it must have a functional link with the legislator\'s duties.',
      'Taking a bribe is not necessary for casting a vote or making a speech. So it is not protected.',
      'The privilege for votes extends to votes in Rajya Sabha elections and in the election of the President. It still does not cover bribery.',
      'The courts\' power to try bribery and the House\'s power to discipline its members can exist side by side.'
    ] }
  ],
  principles: [
    'Parliamentary privilege protects the free functioning of the House, not the private gain of its members.',
    'Bribery of a legislator is a crime complete outside the House.'
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
  summary: 'Each House of Parliament has the power to expel a member, as part of its privileges under Article 105(3). The courts can review the use of that power for illegality or unconstitutionality, but not for mere irregularity of procedure.',
  question: [
    'Do the Houses of Parliament have the power to expel a member?',
    'Can the courts review the exercise of parliamentary privilege, given the bar in Article 122, and to what extent?'
  ],
  facts: [
    'On 12 December 2005 a television channel broadcast a sting operation. It showed members of Parliament accepting money for asking questions or raising issues in Parliament.',
    'Committees of the Lok Sabha and the Rajya Sabha inquired and found the charges proved.',
    'Eleven members, ten of the Lok Sabha and one of the Rajya Sabha, were expelled in December 2005.',
    'Raja Ram Pal and the other expelled members challenged the expulsions.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (4 judges): Chief Justice Y.K. Sabharwal, with a concurring opinion by Justice C.K. Thakker', points: [
      'The power to expel a member is part of the powers and privileges of each House under Article 105(3), which are those of the House of Commons at the commencement of the Constitution.',
      'Expulsion is different from disqualification. Articles 101 and 102 do not list every way in which membership can end.',
      'The exercise of parliamentary privilege does not have absolute immunity from judicial review.',
      'Article 122 bars a challenge only on the ground of irregularity of procedure. Proceedings that are illegal or unconstitutional can be examined by the courts.',
      'The expulsions were valid, and the petitions were dismissed.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice R.V. Raveendran)', points: [
      'Articles 101 and 102 together cover every way in which membership of Parliament ends. The Constitution does not provide for ending membership by expulsion.',
      'The power to expel is not an incidental privilege under Article 105(3). Expulsion would need an amendment to Article 101 or 102, or a law under Article 102(1)(e).',
      'A member accused of corruption should be prosecuted, and may be suspended from the House meanwhile. The expulsions were invalid.'
    ] }
  ],
  principles: [
    'The Houses of Parliament can expel members as part of their privileges.',
    'Parliamentary privilege is subject to judicial review for illegality and unconstitutionality.'
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
  summary: 'The rules made under the Finance Act, 2017 for tribunal appointments were struck down for undermining judicial independence. Whether Part XIV of the Act could be passed as a Money Bill was referred to a larger bench.',
  question: [
    'Was Part XIV of the Finance Act, 2017, which changed the working of many tribunals, validly passed as a Money Bill?',
    'Did Section 184 of the Act give the Government excessive power to make rules?',
    'Were the Tribunal Rules, 2017 made under Section 184 valid?'
  ],
  facts: [
    'Part XIV of the Finance Act, 2017 amended many laws on tribunals. Section 184 let the Central Government make rules on the qualifications, appointment, tenure and service conditions of tribunal members.',
    'The Finance Act was passed as a Money Bill, so the Rajya Sabha could not amend it.',
    'In 2017 the Government made the Tribunal Rules. For most tribunals, the selection committees were made up entirely or mostly of persons from, or nominated by, the Central Government.',
    'Rojer Mathew and others challenged Part XIV and the Rules.'
  ],
  held: [
    { kind: 'majority', label: 'Majority opinion by Chief Justice Ranjan Gogoi, for himself and Justices Ramana and Khanna', points: [
      'The Aadhaar judgment (2018) did not examine the effect of the word "only" in Article 110(1). So whether Part XIV was a Money Bill, and the Speaker\'s certificate, were referred to a larger bench.',
      'Section 184 does not suffer from excessive delegation. The binding judgments of the Court guide the power to make rules.',
      'The Tribunal Rules, 2017 are contrary to the parent laws and to constitutional principles. They were struck down in full.',
      'The Government must frame new rules that follow the Court\'s earlier judgments on tribunals, with non-discriminatory and uniform conditions of service and assured tenure.',
      'The Ministry of Law and Justice must carry out a judicial impact assessment of the tribunals.'
    ] },
    { kind: 'concurring', label: 'Partly concurring (Justice Deepak Gupta)', points: [
      'Justice Gupta agreed with most of the majority\'s conclusions, but held that Section 184 does suffer from excessive delegation.',
      'Justice Gupta also called for a body to carry out judicial impact assessment and an independent body to select tribunal members.'
    ] },
    { kind: 'dissent', label: 'Dissent on the Money Bill question (Justice D.Y. Chandrachud)', points: [
      'Part XIV of the Finance Act, 2017 could not have been passed as a Money Bill.',
      'The Rules are unconstitutional because they violate judicial independence. An independent National Tribunals Commission should be set up to oversee tribunals.'
    ] }
  ],
  principles: [
    'Tribunals that take over the work of courts must be independent of the executive, especially in appointments and tenure.',
    'The scope of a Money Bill under Article 110 is still to be settled by a larger bench.'
  ],
  legacy: [
    'In Madras Bar Association v. Union of India (2020), the Court directed the Government to set up a National Tribunals Commission.',
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
  question: [
    'Does the Aadhaar scheme violate the right to privacy?',
    'Was the Aadhaar Act validly passed as a Money Bill?',
    'Which uses of Aadhaar are valid?'
  ],
  facts: [
    'Aadhaar gives each resident a unique identity number linked to biometric and demographic data. The scheme began in 2009 without a law.',
    'The Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016 was passed as a Money Bill.',
    'Aadhaar was made necessary for many purposes, including welfare benefits, bank accounts, mobile connections and income tax returns.',
    'Justice K.S. Puttaswamy and others challenged the scheme and the Act. In 2017, nine judges hearing the same challenge held that privacy is a fundamental right.'
  ],
  held: [
    { kind: 'majority', label: 'Majority opinion by Justice A.K. Sikri, for himself, Chief Justice Misra and Justice Khanwilkar', points: [
      'The Aadhaar Act is valid. It meets the tests of legality, legitimate aim and proportionality set in Puttaswamy (2017), and its design does not create a surveillance state.',
      'The Act was validly passed as a Money Bill.',
      'Section 7, which makes Aadhaar necessary for subsidies, benefits and services funded from the Consolidated Fund of India, is valid.',
      'The part of Section 57 that let companies and individuals demand Aadhaar authentication was struck down.',
      'Aadhaar cannot be made compulsory for bank accounts, mobile connections, school admissions, or examinations such as those of the CBSE and NEET.',
      'Linking Aadhaar with PAN under Section 139AA of the Income Tax Act is valid.',
      'Section 33(2), which allowed disclosure of data in the interest of national security, was struck down. Authentication records cannot be kept beyond six months.',
      'Children need parental consent to enrol, and can opt out when they become adults.'
    ] },
    { kind: 'concurring', label: 'Concurring opinion (Justice Ashok Bhushan)', points: [
      'Justice Bhushan agreed that the Act is valid and was properly passed as a Money Bill, but differed from the majority on some provisions, such as Section 33.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice D.Y. Chandrachud)', points: [
      '"The Aadhaar Act could not have been passed as a Money Bill." Bypassing the Rajya Sabha was a fraud on the Constitution, so the whole Act is unconstitutional.',
      'The Aadhaar programme, since 2009, violates informational privacy. It lacks adequate safeguards of consent, data protection and accountability.'
    ] }
  ],
  principles: [
    'State measures that affect privacy must pass the test of proportionality.',
    'Aadhaar may be required for welfare benefits funded by the State, but not for private services.'
  ],
  legacy: [
    'Parliament amended the Aadhaar Act in 2019 to allow voluntary use of Aadhaar for bank accounts and mobile connections.',
    'In Rojer Mathew (2019), the Court doubted the Money Bill reasoning of this judgment and referred that question to a larger bench.',
    'In January 2021 the review petitions against this judgment were dismissed by 4:1, with Justice Chandrachud dissenting.'
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
  summary: 'The Governor of Bihar\'s practice of re-promulgating ordinances again and again, without placing them before the legislature, was a fraud on the Constitution. The executive cannot take over the law-making power of the legislature.',
  question: [
    'Can the Governor keep an ordinance alive indefinitely by re-promulgating it after each session of the legislature?',
    'Does a member of the public have standing to challenge such a practice?'
  ],
  facts: [
    'Dr. D.C. Wadhwa, a professor of economics at the Gokhale Institute of Politics and Economics, Pune, researched the use of ordinances in Bihar.',
    'Between 1967 and 1981 the Governor of Bihar promulgated 256 ordinances. Many were kept alive for periods of one to 14 years by re-promulgation.',
    'The Bihar Sugarcane Ordinance of 1968, for example, was re-promulgated 39 times and lasted almost 14 years.',
    'A 1981 circular told government departments to get ordinances re-promulgated before they expired. It said the approval of the Council of Ministers was not needed if an ordinance was re-promulgated without change.',
    'Dr. Wadhwa and three others, whose interests were affected by particular ordinances, filed writ petitions under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Chief Justice P.N. Bhagwati', points: [
      'A member of the public has sufficient interest to challenge a practice by which the executive systematically violates constitutional limits. Dr. Wadhwa had standing.',
      'The power to make ordinances under Article 213 is an emergency power. It exists so that the Governor can take immediate action when the legislature is not in session.',
      '"A constitutional authority cannot do indirectly what it is not permitted to do directly." Re-promulgating ordinances as a routine, to get around their limited life, is a fraud on the Constitution.',
      'The executive cannot take over the law-making function of the legislature. That would subvert the democratic process.',
      'Re-promulgation may be justified in a rare case, for example when the legislature has too much business to pass the Bill in a session. It cannot be a routine practice.',
      'The Bihar Intermediate Education Council Ordinance, which was still in force, was struck down. Dr. Wadhwa was awarded costs of Rs. 10,000 for the research.'
    ] }
  ],
  principles: [
    'Ordinances are an emergency power, not a substitute for legislation.',
    'Routine re-promulgation of ordinances is a fraud on the Constitution.'
  ],
  legacy: [
    'In Krishna Kumar Singh v. State of Bihar (2017), seven judges relied on this judgment and held that re-promulgation without placing ordinances before the legislature is unconstitutional.'
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
  summary: 'Re-promulgating ordinances without placing them before the legislature is a fraud on the Constitution. An ordinance must be laid before the legislature, and the satisfaction behind it can be reviewed by the courts.',
  question: [
    'Is it valid to re-promulgate an ordinance again and again without placing it before the legislature?',
    'Is the duty to lay an ordinance before the legislature mandatory?',
    'Can the courts review the satisfaction on which an ordinance is made?',
    'Do rights created by an ordinance survive after it lapses?'
  ],
  facts: [
    'In 1989 the Governor of Bihar made an ordinance to take over the management of 429 of the 651 non-government Sanskrit schools in the State.',
    'The ordinance was re-promulgated several times. It was never placed before the legislature or replaced by an Act.',
    'Teachers of the schools claimed that they had become employees of the State Government.',
    'In 1998 two judges of the Supreme Court agreed that the re-promulgations were invalid, but differed on the first ordinance. The case was later referred to seven judges.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (5 judges), judgment by Justice D.Y. Chandrachud, for himself and Justices Bobde, Goel, Lalit and Nageswara Rao', points: [
      'Re-promulgating ordinances without placing them before the legislature subverts the democratic legislative process. It is a fraud on the Constitution.',
      'The duty to lay an ordinance before the legislature is mandatory.',
      'The power to make ordinances under Articles 123 and 213 is not immune from judicial review. The satisfaction of the President or the Governor can be examined.',
      'An ordinance that lapses does not automatically leave behind lasting rights. Its effects survive only where undoing them is impractical and public interest requires it.',
      'The ordinances were invalid, and the teachers did not become government employees. Salaries already paid would not be recovered.'
    ] },
    { kind: 'dissent', label: 'Separate opinions (Chief Justice T.S. Thakur and Justice Madan B. Lokur)', points: [
      'Chief Justice Thakur left open whether laying an ordinance before the legislature is mandatory.',
      'Justice Lokur held that Article 213 does not make it mandatory to lay an ordinance before the legislature.'
    ] }
  ],
  principles: [
    'Ordinances must be placed before the legislature, and repeated re-promulgation is unconstitutional.',
    'The satisfaction behind an ordinance is subject to judicial review.'
  ],
  legacy: [
    'With D.C. Wadhwa (1986), this judgment is the main authority limiting government by ordinance, at the Centre and in the States.'
  ],
  source: 'https://indiankanoon.org/doc/3040654/'
}

});
