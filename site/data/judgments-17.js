/* Landmark judgments, rewritten in full. Batch 17, the last: the basic
   structure, elections, appointments and transfers, services, Article 356,
   Jammu and Kashmir, and the Tenth Schedule.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. Every entry was checked against the full text
   on Indian Kanoon, including each judge's operative conclusions. The Indian
   Kanoon text of Kesavananda Bharati does not carry the short statement of
   the majority view signed by nine judges, so its points were taken from the
   account in I.R. Coelho (2007) and from the order in the Indian Kanoon text
   that sent the 26th Amendment to a Constitution Bench. The corrections that
   came out of the check: in S.P. Gupta the majorities differed from question
   to question, and the transfer of Chief Justice K.B.N. Singh was upheld by
   4:3, with Justice Bhagwati in the minority on that point. Rameshwar Prasad
   was decided by 3:2, and Justices Balakrishnan and Pasayat dissented.
   Tulsiram Patel was decided by 4:1. In Indira Nehru Gandhi v. Raj Narain,
   the judges gave different reasons on clause (4) of Article 329A, so each
   view is listed separately.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'kesavananda-bharati-1973': {
  name: 'Kesavananda Bharati v. State of Kerala',
  full: 'His Holiness Kesavananda Bharati Sripadagalvaru and Others v. State of Kerala and Another',
  aka: 'The basic structure case',
  decided: '24 April 1973',
  citation: '(1973) 4 SCC 225, AIR 1973 SC 1461',
  bench: 13,
  result: 'Majority 7:6',
  tags: ['Article 368', 'Basic structure', 'Amending power'],
  judges: 'S.M. Sikri CJI, J.M. Shelat, K.S. Hegde, A.N. Grover, A.N. Ray, P. Jaganmohan Reddy, D.G. Palekar, H.R. Khanna, K.K. Mathew, M.H. Beg, S.N. Dwivedi, A.K. Mukherjea and Y.V. Chandrachud',
  summary: 'Parliament can amend any part of the Constitution, including the fundamental rights, but it cannot alter the basic structure of the Constitution. Golak Nath was overruled. The 24th and 29th Amendments were upheld, but the part of Article 31C that stopped courts from examining a law\'s declaration was struck down.',
  question: [
    'Is Parliament\'s power to amend the Constitution under Article 368 unlimited?',
    'Can Parliament amend the fundamental rights, and was Golak Nath correctly decided?',
    'Were the 24th, 25th and 29th Amendments valid?'
  ],
  facts: [
    'In Golak Nath (1967), eleven judges held by 6:5 that Parliament could not amend the fundamental rights so as to take them away or abridge them.',
    'Parliament responded with the 24th Amendment (1971). It said that Parliament can amend any provision of the Constitution under Article 368, and that Article 13 does not apply to amendments.',
    'The 25th Amendment (1971) replaced "compensation" with "amount" in Article 31(2), and added Article 31C. Article 31C protected laws giving effect to Article 39(b) and (c) from challenge under Articles 14, 19 and 31. It also stopped courts from questioning a declaration that a law gave effect to that policy.',
    'The 26th Amendment (1971) abolished privy purses. The 29th Amendment (1972) placed two Kerala land reform Acts in the Ninth Schedule.',
    'Swami Kesavananda Bharati, head of the Edneer Mutt in Kasaragod, Kerala, challenged the Kerala land reform laws. The case grew to cover the amendments.',
    'Thirteen judges heard the case from 31 October 1972 to 23 March 1973. They delivered eleven separate opinions.'
  ],
  held: [
    { kind: 'majority', label: 'View of the majority, in a statement signed by nine judges', points: [
      'Golak Nath is overruled.',
      'Article 368 does not enable Parliament to alter the basic structure or framework of the Constitution.',
      'The 24th Amendment is valid.',
      'Section 2(a) and Section 2(b) of the 25th Amendment, which changed Article 31(2) and added Article 31(2B), are valid.',
      'The first part of Article 31C is valid. The second part, which stopped courts from questioning a declaration that a law gives effect to Article 39(b) or (c), is invalid.',
      'The 29th Amendment is valid.',
      'The validity of the 26th Amendment and the remaining questions were sent to a Constitution Bench of five judges.'
    ] },
    { kind: 'majority', label: 'Majority on the limits of the amending power (7 judges): Chief Justice Sikri and Justices Shelat, Grover, Hegde, Mukherjea, Jaganmohan Reddy and Khanna', points: [
      'The amending power is wide. It reaches every part of the Constitution, including the fundamental rights.',
      'But the power to amend does not include the power to destroy the basic structure or the identity of the Constitution.',
      'Chief Justice Sikri gave examples of basic features: the supremacy of the Constitution, republican and democratic government, the secular character of the Constitution, the separation of powers and the federal character of the Constitution. The list was not closed.'
    ] },
    { kind: 'dissent', label: 'Minority (6 judges): Justices Ray, Palekar, Mathew, Beg, Dwivedi and Chandrachud', points: [
      'There are no implied or inherent limits on the amending power. Parliament can amend any provision of the Constitution under Article 368.',
      'The minority also held that Golak Nath was wrongly decided, and that the 24th and 29th Amendments were valid.'
    ] }
  ],
  principles: [
    'Parliament may amend any part of the Constitution, but not its basic structure.',
    'The courts decide, case by case, what forms part of the basic structure.'
  ],
  legacy: [
    'The doctrine was used to strike down clause (4) of Article 329A in Indira Nehru Gandhi v. Raj Narain (1975), and clauses (4) and (5) of Article 368 in Minerva Mills (1980).',
    'In Waman Rao (1980) and I.R. Coelho (2007), the date of this judgment, 24 April 1973, became the cut-off date for testing laws placed in the Ninth Schedule.'
  ],
  source: 'https://indiankanoon.org/doc/257876/'
},

'indira-nehru-gandhi-v-raj-narain-1975': {
  name: 'Indira Nehru Gandhi v. Raj Narain',
  full: 'Indira Nehru Gandhi v. Shri Raj Narain and Another',
  aka: 'The election case',
  decided: '7 November 1975',
  citation: '1975 Supp SCC 1, AIR 1975 SC 2299',
  bench: 5,
  result: 'Election appeal allowed, clause (4) of Article 329A struck down',
  tags: ['Article 329A', 'Basic structure', 'Free and fair elections'],
  judges: 'A.N. Ray CJI, H.R. Khanna, K.K. Mathew, M.H. Beg and Y.V. Chandrachud',
  summary: 'The Court did two things. It struck down clause (4) of Article 329A, which the 39th Amendment had added to declare the Prime Minister\'s election valid and to cancel the High Court\'s judgment, because free and fair elections are part of the basic structure. It then decided the election appeal itself, and allowed it under the amended election laws, which it found valid.',
  question: [
    'Could Parliament, by amending the Constitution, declare a disputed election valid and cancel a court\'s judgment on it?',
    'Can ordinary laws be tested against the basic structure?',
    'Was the election of Indira Gandhi to the Lok Sabha in 1971 valid?'
  ],
  facts: [
    'Raj Narain lost the 1971 Lok Sabha election from Rae Bareli to Indira Gandhi, and filed an election petition in the Allahabad High Court.',
    'On 12 June 1975, Justice J.M.L. Sinha of the High Court found two corrupt practices under Section 123(7) of the Representation of the People Act, 1951. Indira Gandhi had obtained the help of gazetted officers of the Uttar Pradesh government, and of Yashpal Kapoor, a gazetted officer in the Prime Minister\'s Secretariat.',
    'The High Court set aside the election and disqualified Indira Gandhi for six years. Both sides appealed to the Supreme Court.',
    'A national emergency was proclaimed on 25 June 1975. While the appeals were pending, Parliament changed the election law with retrospective effect, by Acts of 1974 and 1975.',
    'The 39th Amendment (10 August 1975) added Article 329A. Clause (4) said that the election laws would not apply to the Prime Minister\'s election, that the election would not be void, and that the High Court\'s judgment was itself void. Clause (5) required pending appeals to be decided in line with clause (4).'
  ],
  held: [
    { kind: 'unanimous', label: 'On the election appeal', points: [
      'The Court allowed Indira Gandhi\'s appeal, after upholding the 1974 and 1975 amendments to the election law.',
      'Those amendments were valid, and they applied to the pending case.',
      'Under the amended law, the two corrupt practices found by the High Court could not stand. The High Court\'s judgment and the disqualification were set aside.',
      'Raj Narain\'s cross appeal was dismissed.'
    ] },
    { kind: 'majority', label: 'On clause (4) of Article 329A', points: [
      'The Court examined the validity of clause (4) separately, and held that it could not stand. The judges differed in their reasons.',
      'Justice Khanna struck down clause (4). It violated the principle of free and fair elections, which is essential to democracy and part of the basic structure. It removed the forum for deciding the dispute, and put the election beyond any law.',
      'Justice Mathew held that validating an election without finding the facts or applying any law was an exercise of despotic power. It damaged the democratic structure of the Constitution.',
      'Justice Chandrachud held clauses (4) and (5) unconstitutional and void.',
      'Chief Justice Ray held that clause (4) was a declaratory judgment, not a law. It validated the election without applying any legal norms.',
      'Justice Beg could not see how clause (4) could be valid as mere law-making. Justice Beg read clause (5) so that it did not stop the Court from deciding the appeals on their merits.'
    ] },
    { kind: 'majority', label: 'On ordinary laws (Chief Justice Ray and Justices Mathew and Chandrachud)', points: [
      'The basic structure test applies to amendments of the Constitution. It does not apply to ordinary laws.',
      'An ordinary law is tested for legislative competence and against the express provisions of the Constitution, such as the fundamental rights.'
    ] }
  ],
  principles: [
    'Free and fair elections are part of the basic structure of the Constitution.',
    'An amendment of the Constitution cannot be used to decide a particular dispute without applying any law.'
  ],
  legacy: [
    'The 44th Amendment (1978) removed Article 329A from the Constitution.'
  ],
  source: 'https://indiankanoon.org/doc/936707/'
},

'sp-gupta-judges-transfer-1981': {
  name: 'S.P. Gupta v. Union of India',
  full: 'S.P. Gupta v. President of India and Others',
  aka: 'The First Judges Case, or the Judges\' Transfer case',
  decided: '30 December 1981',
  citation: 'AIR 1982 SC 149, 1981 Supp SCC 87',
  bench: 7,
  result: 'Petitions dismissed, with different majorities on different questions',
  status: 'partly',
  tags: ['Article 217', 'Article 222', 'Judicial appointments', 'Locus standi'],
  judges: 'P.N. Bhagwati, A.C. Gupta, S. Murtaza Fazal Ali, V.D. Tulzapurkar, D.A. Desai, R.S. Pathak and E.S. Venkataramiah',
  summary: 'In appointing judges, consultation with the Chief Justice of India does not mean concurrence, and the Central Government has the final say. The Court also widened locus standi, so that lawyers could bring cases on the independence of the judiciary, and ordered the government\'s correspondence on the appointments to be disclosed.',
  question: [
    'Does consultation with the Chief Justice of India in appointing judges mean concurrence, and whose opinion prevails?',
    'Could the government refuse a further term to an additional judge, and transfer a Chief Justice without consent?',
    'Was the Law Minister\'s circular letter of 18 March 1981 valid?',
    'Could practising lawyers bring these cases, and could the government keep its correspondence on appointments secret?'
  ],
  facts: [
    'On 18 March 1981, the Union Law Minister wrote to the Chief Ministers. The letter asked them to obtain the consent of additional judges, and of persons proposed for appointment, to be appointed as permanent judges in High Courts outside their own States.',
    'S.N. Kumar, an additional judge of the Delhi High Court, was not given a further term when a short extended term ended on 6 June 1981.',
    'By an order of 19 January 1981, K.B.N. Singh, Chief Justice of the Patna High Court, was transferred as Chief Justice of the Madras High Court.',
    'Lawyers filed writ petitions in several High Courts challenging these actions. The petitions were transferred to the Supreme Court and heard by seven judges.'
  ],
  held: [
    { kind: 'majority', label: 'What the Court decided', points: [
      'All the transferred cases and writ petitions were dismissed. The majority was not the same on every question, so each question is set out below.'
    ] },
    { kind: 'majority', label: 'Majority on appointments (4 judges): Justices Bhagwati, Fazal Ali, Desai and Venkataramiah', points: [
      'Consultation under Articles 217 and 224 must be full and effective, but it does not mean concurrence.',
      'Where the constitutional functionaries differ, the opinion of none of them has primacy. The Central Government may decide after giving due weight to each opinion.',
      'The decision not to give S.N. Kumar a further term was valid.'
    ] },
    { kind: 'majority', label: 'Majority on the transfer of Chief Justice K.B.N. Singh (4 judges): Justices Gupta, Tulzapurkar, Pathak and Venkataramiah', points: [
      'The transfer was valid under Article 222(1). It was not a punishment.'
    ] },
    { kind: 'majority', label: 'Locus standi and disclosure', points: [
      'Practising advocates have a real interest in the independence of the judiciary, and could maintain the petitions. Justice Bhagwati held that any member of the public with sufficient interest may seek judicial redress for a public wrong, and other judges agreed.',
      'The Court rejected the government\'s claim of privilege over the correspondence on these appointments, and ordered it to be disclosed. Justice Fazal Ali disagreed on disclosure.'
    ] },
    { kind: 'dissent', label: 'Minority views', points: [
      'Justice Tulzapurkar held that the advice of the Chief Justice of India should have primacy. Justice Tulzapurkar would also have struck down the circular letter and quashed the decision to drop S.N. Kumar.',
      'Justice Pathak held that the circular letter could not be acted on, and that S.N. Kumar\'s case should be reconsidered.',
      'Justices Bhagwati, Fazal Ali and Desai held the transfer of K.B.N. Singh invalid. Justice Bhagwati found that there had been no full and effective consultation with the Chief Justice of India.'
    ] }
  ],
  principles: [
    'Consultation is not concurrence.',
    'Any member of the public with sufficient interest may approach the court about a public wrong.'
  ],
  legacy: [
    'In the Second Judges Case (1993), nine judges overruled this judgment on primacy. The final word on appointments went to the Chief Justice of India, acting with senior judges.',
    'Its holdings on locus standi and on open government remain important for public interest litigation.'
  ],
  source: 'https://indiankanoon.org/doc/1294854/'
},

'union-of-india-v-tulsiram-patel-1985': {
  name: 'Union of India v. Tulsiram Patel',
  full: 'Union of India and Another v. Tulsiram Patel and Others',
  aka: 'The Article 311 case',
  decided: '11 July 1985',
  citation: '(1985) 3 SCC 398, AIR 1985 SC 1416',
  bench: 5,
  result: 'Majority 4:1',
  tags: ['Article 311', 'Civil servants', 'Natural justice'],
  judges: 'Y.V. Chandrachud CJI, V.D. Tulzapurkar, R.S. Pathak, D.P. Madon and M.P. Thakkar',
  summary: 'When a case falls under the second proviso to Article 311(2), a civil servant can be dismissed, removed or reduced in rank without any inquiry, and without a hearing even on the penalty. Article 14 and natural justice cannot bring back a hearing that the Constitution itself excludes. Challappan (1975) was overruled.',
  question: [
    'When the second proviso to Article 311(2) applies, is the civil servant entitled to any hearing at all?',
    'Can Article 14 or the principles of natural justice require a hearing that the proviso excludes?',
    'When is it "not reasonably practicable" to hold an inquiry under clause (b) of the proviso?'
  ],
  facts: [
    'Under Article 311(2), a civil servant cannot be dismissed, removed or reduced in rank without an inquiry, with notice of the charges and a reasonable opportunity of being heard.',
    'The second proviso makes three exceptions. Clause (a) covers conduct that led to conviction on a criminal charge. Clause (b) covers cases where the authority records in writing that an inquiry is not reasonably practicable. Clause (c) covers cases where the President or the Governor is satisfied that an inquiry is not expedient in the interest of the security of the State.',
    'In Challappan (1975), three judges had held that a railway employee must at least be heard on the penalty before being dismissed without an inquiry.',
    'In one of the cases, a government employee hit a superior officer on the head with an iron rod, believing that officer responsible for stopping the employee\'s increment. The employee was convicted under Section 332 of the Indian Penal Code, released on probation, and then compulsorily retired without an inquiry.',
    'Other cases came from the railways, the Central Industrial Security Force and the Madhya Pradesh police. All the employees had been dismissed or removed without an inquiry.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (4 judges): Justice D.P. Madon, for Chief Justice Chandrachud and Justices Tulzapurkar and Pathak', points: [
      'The words "this clause shall not apply" in the second proviso are mandatory. Where the proviso applies, no inquiry is needed and no hearing need be given, not even on the penalty.',
      'Article 14 and the principles of natural justice cannot be used to bring back a safeguard that the Constitution has expressly excluded. Challappan was wrongly decided and is overruled.',
      'The second proviso is an exception, and is not meant for normal situations. The conditions of the clause must be met before it is used.',
      'The proviso does not require the authority to dismiss. The authority must first decide, without hearing the employee, what penalty the facts call for. The penalty must not be arbitrary or grossly excessive.',
      'Under clause (a), the authority treats the conviction as proof of misconduct. It considers the judgment of the criminal court and all the circumstances of the case.',
      'Under clause (b), there must be a situation in which an inquiry is not reasonably practicable, and the reasons must be recorded in writing. Total impossibility is not required. The test is the view of a reasonable person on the situation at the time, for example when witnesses or the disciplinary authority are threatened, or there is an atmosphere of violence.',
      'In the iron rod case, compulsory retirement was not an excessive or arbitrary penalty.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice M.P. Thakkar)', points: [
      'Challappan was rightly decided, and there was no need to overrule it. An employee dismissed without an inquiry must at least be heard on the penalty.',
      'Justice Thakkar agreed with the majority only in the cases under clause (c).'
    ] }
  ],
  principles: [
    'Where the Constitution itself excludes a hearing, natural justice cannot restore it.'
  ],
  legacy: [
    'The judgment remains the leading authority on dismissal without inquiry under the second proviso to Article 311(2).'
  ],
  source: 'https://indiankanoon.org/doc/1134697/'
},

'rameshwar-prasad-2006': {
  name: 'Rameshwar Prasad v. Union of India',
  full: 'Rameshwar Prasad and Others v. Union of India and Another',
  aka: 'The Bihar Assembly dissolution case',
  decided: '24 January 2006',
  citation: '(2006) 2 SCC 1',
  bench: 5,
  result: 'Majority 3:2',
  tags: ['Article 356', 'Governor', 'Article 361'],
  judges: 'Y.K. Sabharwal CJI, K.G. Balakrishnan, B.N. Agrawal, Ashok Bhan and Arijit Pasayat',
  summary: 'The dissolution of the Bihar Legislative Assembly on 23 May 2005 was unconstitutional. The Governor\'s report rested on no verified material, and drastic action under Article 356 cannot rest on suspicion. The Court did not restore the Assembly, because fresh elections were already under way.',
  question: [
    'Can a Legislative Assembly be dissolved before its first meeting?',
    'Can an Assembly be dissolved under Article 356 to stop a party from claiming a majority said to be won by illegal means?',
    'Does the Governor\'s immunity under Article 361 stop the courts from examining the Governor\'s actions?',
    'If the dissolution is invalid, must the Assembly be restored?'
  ],
  facts: [
    'Elections to the Bihar Legislative Assembly were held in February 2005. No party or alliance won a majority of the 243 seats. The largest pre-poll alliance, the NDA, had 92 members.',
    'On 7 March 2005, President\'s Rule was imposed under Article 356, and the Assembly was kept in suspended animation. The Assembly never met.',
    'On 27 April 2005, the Governor reported to the President that attempts were being made to win over elected members through allurements like money, caste and posts.',
    'In a further report of 21 May 2005, the Governor recommended that the Assembly be dissolved, so that the people could give a fresh mandate.',
    'The Union Cabinet accepted the report at a meeting late on 22 May 2005. The President, who was in Moscow, approved it by fax, and the Assembly was dissolved on 23 May 2005.',
    'By a short order of 7 October 2005, the Court declared the dissolution unconstitutional, but declined to restore the Assembly. It gave its reasons on 24 January 2006.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (3 judges): Chief Justice Y.K. Sabharwal, for Justices B.N. Agrawal and Ashok Bhan', points: [
      'The proclamation of 23 May 2005 dissolving the Assembly was unconstitutional.',
      'The Governor\'s reports were not backed by relevant material that had been verified. Such a report is only the personal opinion of the Governor.',
      'Drastic action under Article 356 cannot be justified by mere suspicion, whims and fancies. The Council of Ministers should have verified the facts before accepting the report. The Governor misled the Council of Ministers.',
      'An Assembly is duly constituted when the Election Commission notifies the results under Section 73 of the Representation of the People Act, 1951. It can be dissolved even before its first meeting.',
      'Under Article 361, the Governor has complete personal immunity and cannot be made to answer to a court. But the immunity does not stop the court from examining whether the action was valid, including on the ground of mala fides.',
      'Restoring the Assembly was not a proper relief, because the election process had already begun. The Court moulded the relief and let the elections go ahead.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice K.G. Balakrishnan)', points: [
      'No party or alliance was in a position to form a government. Reports of horse-trading were relevant facts for the Governor to bring to the notice of the President.',
      'The dissolution was not a mala fide use of power, and the petitions should be dismissed.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice Arijit Pasayat)', points: [
      'Whatever its merits, the Governor\'s view of the situation was not irrational, irrelevant or extraneous.',
      'A public interest petition should not be entertained when those actually affected by the action took a contrary stand.',
      'Even if the dissolution were invalid, restoring the Assembly would not follow as a matter of course. The petitions should be dismissed.',
      'Justice Pasayat also said that the right persons must be chosen as Governors.'
    ] }
  ],
  principles: [
    'A Governor\'s report under Article 356 must rest on verified material, not on suspicion.',
    'The Governor\'s personal immunity does not put the Governor\'s actions beyond judicial review.'
  ],
  legacy: [
    'With S.R. Bommai (1994), the judgment is the main authority for testing a Governor\'s report under Article 356.'
  ],
  source: 'https://indiankanoon.org/doc/79280249/'
},

'prem-nath-kaul-1959': {
  name: 'Prem Nath Kaul v. State of Jammu and Kashmir',
  aka: 'The Yuvaraj\'s legislative power case',
  decided: '2 March 1959',
  citation: 'AIR 1959 SC 749, 1959 Supp (2) SCR 270',
  bench: 5,
  result: 'Unanimous, appeal dismissed',
  status: 'historic',
  tags: ['Article 370', 'Jammu and Kashmir', 'Instrument of Accession'],
  judges: 'S.R. Das CJI, S.K. Das, P.B. Gajendragadkar, K.N. Wanchoo and M. Hidayatullah',
  summary: 'The Jammu and Kashmir Big Landed Estates Abolition Act, made by Yuvaraj Karan Singh in 1950, was valid. The Yuvaraj held the full legislative powers of the Maharaja. Article 370 did not reduce those powers, because it left the final relationship between India and the State to the State\'s Constituent Assembly.',
  question: [
    'Did Yuvaraj Karan Singh have the power to make the Big Landed Estates Abolition Act in 1950?',
    'Did the Instrument of Accession, Article 370 or the application of parts of the Constitution of India to the State take away that power?'
  ],
  facts: [
    'Maharaja Hari Singh signed the Instrument of Accession to India in October 1947.',
    'By a proclamation of 20 June 1949, the Maharaja entrusted all powers and functions to Yuvaraj Karan Singh.',
    'On 17 October 1950, the Yuvaraj enacted the Jammu and Kashmir Big Landed Estates Abolition Act. The Act abolished big landed estates and transferred land to the actual tillers, to improve agricultural production.',
    'Prem Nath Kaul filed a representative suit for a declaration that the Act was void, and that the landholders could keep their lands. The trial court and the High Court dismissed the suit.',
    'In the Supreme Court, it was argued that the Yuvaraj had become a constitutional ruler without legislative power. It was also argued that the Constituent Assembly of the State, which had decided not to pay compensation, was not properly constituted.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous, judgment by Justice P.B. Gajendragadkar', points: [
      'The Act was valid. The appeal was dismissed with costs.',
      'Before independence, the Maharaja was an absolute monarch in the internal administration of the State. The Jammu and Kashmir Constitution Act of 1939 kept those powers intact.',
      'The lapse of British paramountcy in 1947 did not change this. Clause 6 of the Instrument of Accession expressly recognised that the Maharaja\'s sovereignty over the State continued.',
      'The Maharaja could delegate all powers to the Yuvaraj. The Yuvaraj then stood in the same position as the Maharaja.',
      'Neither the scheme of Article 370 nor its Explanation made the ruler a constitutional ruler. The temporary provisions of Article 370 assumed that the final relationship between India and the State would be decided by the State\'s Constituent Assembly. Until that Assembly decided, the Instrument of Accession held the field.',
      'The Yuvaraj validly convened the Constituent Assembly by a proclamation of 20 April 1951. So the challenge to its decision not to pay compensation failed.'
    ] }
  ],
  principles: [
    'Under Article 370 as it first stood, the final decision on the State\'s relationship with India lay with the Constituent Assembly of Jammu and Kashmir.'
  ],
  legacy: [
    'The judgment is an early statement of the temporary nature of Article 370. Article 370 ceased to operate in 2019, and the Supreme Court upheld that change in 2023.'
  ],
  source: 'https://indiankanoon.org/doc/816126/'
},

'rajendra-singh-rana-2007': {
  name: 'Rajendra Singh Rana v. Swami Prasad Maurya',
  full: 'Rajendra Singh Rana and Others v. Swami Prasad Maurya and Others',
  aka: 'The Uttar Pradesh defection case',
  decided: '14 February 2007',
  citation: '(2007) 4 SCC 270, AIR 2007 SC 1305',
  bench: 5,
  result: 'Unanimous',
  tags: ['Tenth Schedule', 'Split', 'Speaker'],
  judges: 'K.G. Balakrishnan CJI, H.K. Sema, A.R. Lakshmanan, P.K. Balasubramanyan and D.K. Jain',
  summary: 'Thirteen BSP members of the Uttar Pradesh Assembly who asked the Governor to invite the Samajwadi Party to form the government had voluntarily given up membership of their party. They were disqualified from 27 August 2003. A defence of split needed proof of a split in the original political party, not just a count of legislators.',
  question: [
    'Did the 13 BSP members defect when they asked the Governor to invite the leader of another party to form the government?',
    'Was a split under paragraph 3 of the Tenth Schedule shown merely because one-third of the legislature party separated?',
    'Could the Supreme Court decide the question of disqualification itself, instead of sending it back to the Speaker?'
  ],
  facts: [
    'After the Uttar Pradesh election of February 2002, Mayawati of the Bahujan Samaj Party (BSP) led a coalition government. On 26 August 2003, after recommending that the Assembly be dissolved, the Mayawati cabinet resigned.',
    'On 27 August 2003, 13 BSP members met the Governor and asked that Mulayam Singh Yadav, leader of the Samajwadi Party, be invited to form the government. The Governor invited Mulayam Singh Yadav on 29 August 2003.',
    'On 4 September 2003, Swami Prasad Maurya, leader of the BSP legislature party, asked the Speaker to disqualify the 13 members.',
    'On 6 September 2003, 37 BSP members claimed that one-third of the 109-member legislature party had split from the party on 26 August 2003. The Speaker accepted the split the same day, and then accepted the group\'s merger with the Samajwadi Party. The Speaker left the disqualification petition undecided.',
    'In the Allahabad High Court, two of the three judges quashed the Speaker\'s order and sent the matter back to the Speaker. Both sides appealed.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous, judgment by Justice P.K. Balasubramanyan', points: [
      'The 13 members were declared disqualified from 27 August 2003, and the appeals of the 37 members were dismissed.',
      'By asking the Governor to invite the leader of the opposing party to form the government, the 13 members voluntarily gave up membership of the BSP under paragraph 2 of the Tenth Schedule.',
      'To claim the protection of paragraph 3, it was not enough to show that one-third of the legislature party had separated. There also had to be proof of a split in the original political party.',
      'No split in the BSP on 26 August 2003 was proved, even prima facie. The 24 members who later joined the 13 could not establish a split either.',
      'The Speaker\'s decision under the Tenth Schedule is open to judicial review, as held in Kihoto Hollohan. The Speaker\'s order accepting the split, made without deciding the petition for disqualification, could not stand.',
      'Normally the Court would send the matter back to the Speaker. But the term of the Assembly was coming to an end, and the members concerned were holding office, many as ministers. So the Court decided the question itself.'
    ] }
  ],
  principles: [
    'Asking the Governor to invite a rival party to form the government can amount to voluntarily giving up party membership.',
    'A defence of split needed proof of a split in the original political party.'
  ],
  legacy: [
    'The 91st Amendment (2003) had already deleted paragraph 3 of the Tenth Schedule, so the defence of split is no longer available.'
  ],
  source: 'https://indiankanoon.org/doc/1620629/'
},

'subhash-desai-2023': {
  name: 'Subhash Desai v. Principal Secretary, Governor of Maharashtra',
  full: 'Subhash Desai v. Principal Secretary, Governor of Maharashtra and Others',
  aka: 'The Shiv Sena split case',
  decided: '11 May 2023',
  bench: 5,
  result: 'Unanimous',
  tags: ['Tenth Schedule', 'Governor', 'Floor test'],
  judges: 'D.Y. Chandrachud CJI, M.R. Shah, Krishna Murari, Hima Kohli and P.S. Narasimha',
  summary: 'The Governor of Maharashtra was not justified in calling Uddhav Thackeray to a floor test in June 2022. But the Thackeray government could not be restored, because Thackeray resigned without facing the vote. The whip is appointed by the political party, not the legislature party. The correctness of Nabam Rebia was referred to seven judges.',
  question: [
    'Can a Speaker facing a notice for removal decide disqualification petitions, which Nabam Rebia had said a Speaker cannot do?',
    'Who appoints the whip and the leader of a party in the House, the political party or the legislature party?',
    'Was the Governor justified in calling for a floor test, and in inviting Eknath Shinde to form the government?',
    'Can the Speaker and the Election Commission act at the same time on rival claims to be the real party?'
  ],
  facts: [
    'In June 2022, the Shiv Sena legislature party in Maharashtra split into two factions, one led by Chief Minister Uddhav Thackeray and one led by Eknath Shinde. The post of Speaker was vacant, and the Deputy Speaker was performing its functions.',
    'On 21 June 2022, the two factions passed rival resolutions on who was the Group Leader and the Chief Whip. Thirty-four MLAs also gave notice for the removal of the Deputy Speaker.',
    'On 23 June 2022, the Thackeray faction sought the disqualification of Eknath Shinde and 15 other MLAs. On 27 June 2022, the Supreme Court extended their time to reply to 12 July 2022.',
    'On 28 June 2022, the Governor asked Uddhav Thackeray to face a floor test on 30 June 2022. The Supreme Court declined to stay the floor test, and Thackeray resigned on 29 June 2022.',
    'Eknath Shinde was sworn in as Chief Minister on 30 June 2022. On 3 July 2022, the Speaker recognised the Group Leader and the Chief Whip chosen by the Shinde faction.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous, judgment by Chief Justice D.Y. Chandrachud', points: [
      'The Court held that the Governor was wrong to call for a floor test, but did not restore the Thackeray government, because Thackeray had resigned without facing the vote. The Shinde government stayed in office.',
      'The correctness of Nabam Rebia, on whether a Speaker facing a removal notice can decide disqualification petitions, was referred to a bench of seven judges.',
      'The Court does not ordinarily decide disqualification petitions itself, and there were no extraordinary circumstances here. The Speaker must decide them within a reasonable period.',
      'A member can take part in the proceedings of the House while disqualification petitions are pending. The validity of those proceedings does not depend on the outcome of the petitions.',
      'The political party, not the legislature party, appoints the whip and the leader of the party in the House. The Speaker\'s decision of 3 July 2022 on this was contrary to law. The Speaker must recognise the whip and the leader authorised by the Shiv Sena political party, after an inquiry based on the party constitution.',
      'The Speaker and the Election Commission can act at the same time, the Speaker on disqualification under the Tenth Schedule and the Commission on the party symbol under paragraph 15 of the Symbols Order.',
      'After paragraph 3 of the Tenth Schedule was deleted, a split is no longer a defence to disqualification. Where rival factions claim to be the party, the Speaker must decide prima facie which faction is the political party.',
      'The Governor was not justified in calling Uddhav Thackeray to a floor test. The Governor had no objective material from which to conclude that Thackeray had lost the confidence of the House.',
      'The earlier position could not be restored, because Thackeray resigned without facing the floor test. The Governor was justified in inviting Eknath Shinde to form the government.'
    ] }
  ],
  principles: [
    'The whip is appointed by the political party, not by the legislature party.',
    'A Governor may call for a floor test only on objective material showing that the government may have lost the confidence of the House.'
  ],
  legacy: [
    'In January 2024, the Speaker of the Maharashtra Assembly held that the Shinde faction was the real Shiv Sena, and did not disqualify any member.'
  ],
  source: 'https://indiankanoon.org/doc/12168609/'
}

});
