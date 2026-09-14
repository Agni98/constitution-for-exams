/* Landmark judgments, rewritten in full. Batch 1.

   Each judgment has its own page. The id is made from the short name and the
   year in the cases files (for example "puttaswamy-2017"), and the articles a
   judgment is filed under still come from those files.

   Fields
     name       the cause title, as the page heading
     full       the full cause title, where it differs
     aka        the name people know it by
     decided    the date of the judgment
     citation   a law report citation
     bench      number of judges
     result     "Unanimous, 9:0" or "Majority 4:1"
     status     good | partly | overruled | historic (overrides the cases file)
     tags       topic pills
     judges     the bench, by name
     summary    one or two sentences, used on cards and in search
     question   the constitutional question(s) the Court answered
     facts      short points, in order
     held       blocks of { kind, label, points }
                kind: unanimous | majority | plurality | concurring | dissent
     principles the rules of law the case stands for
     legacy     what happened after the judgment
     source     the full text of the judgment

   How this batch was checked. Each entry was checked against the full text of
   the judgment on Indian Kanoon: bench, date, split, facts and the operative
   holding. Where the fetched full text stopped before the operative part (the
   NJAC case and Puttaswamy, both several hundred pages), the operative order
   and the split of opinions were confirmed from reports of the judgment
   (Wikipedia, LiveLaw, The Quint). Justice Khanna's dissent in ADM Jabalpur is
   paraphrased from reports of it, and the one quotation used is identified as
   his quotation of Chief Justice Hughes.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'puttaswamy-2017': {
  name: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
  full: 'Justice K.S. Puttaswamy (Retd.) and Another v. Union of India and Others',
  aka: 'The right to privacy case',
  decided: '24 August 2017',
  citation: '(2017) 10 SCC 1',
  bench: 9,
  result: 'Unanimous, 9:0',
  tags: ['Right to privacy', 'Article 21'],
  judges: 'J.S. Khehar CJI, J. Chelameswar, S.A. Bobde, R.K. Agrawal, R.F. Nariman, A.M. Sapre, D.Y. Chandrachud, S.K. Kaul and S. Abdul Nazeer',
  summary: 'The right to privacy is a fundamental right. It is part of the right to life and personal liberty under Article 21 and of the freedoms in Part III.',
  question: [
    'Is the right to privacy a fundamental right under the Constitution of India?',
    'Two older judgments of larger benches said the Constitution does not protect privacy. Were they correct?'
  ],
  facts: [
    'Justice K.S. Puttaswamy, a retired High Court judge, and others challenged the Aadhaar scheme. They argued that collecting biometric data of every resident violated their privacy.',
    'The Union Government argued that the Constitution does not guarantee a right to privacy. It relied on M.P. Sharma (1954), decided by eight judges, and Kharak Singh (1962), decided by six judges.',
    'Later cases decided by smaller benches, such as Gobind (1975) and R. Rajagopal (1994), had treated privacy as a protected right. Only a larger bench could settle the conflict.',
    'In August 2015 a bench of three judges referred the question to a larger bench. The question was finally heard by nine judges.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (9:0)', points: [
      'The right to privacy is protected as an intrinsic part of the right to life and personal liberty under Article 21. It is also part of the freedoms guaranteed by Part III.',
      'M.P. Sharma is overruled. It had held that the Constitution does not protect privacy.',
      'Kharak Singh is overruled to the extent that it held privacy is not a guaranteed right.',
      'The nine judges wrote six opinions. All of them agreed on this result.'
    ] },
    { kind: 'concurring', label: 'The main opinion (Justice D.Y. Chandrachud, for four judges)', points: [
      'Privacy is not absolute. A law that limits it must pass three tests. There must be a law. The law must pursue a legitimate aim of the State. The limit must be proportionate to that aim.',
      'Privacy covers the body, personal information and the freedom to make personal choices.',
      'The majority opinions in ADM Jabalpur (1976) were "seriously flawed". ADM Jabalpur is overruled.'
    ] }
  ],
  principles: [
    'Privacy is a fundamental right even though the Constitution does not name it.',
    'Dignity and personal autonomy are at the core of the fundamental rights in Part III.',
    'The State can limit privacy only by a law that has a legitimate aim and is proportionate.',
    'Life and personal liberty are not gifts of the Constitution. They belong to every person, and the Constitution recognises them.'
  ],
  legacy: [
    'In 2018 the Court relied on this judgment to decriminalise consensual same-sex relations in Navtej Singh Johar, and adultery in Joseph Shine.',
    'In September 2018 a five-judge bench upheld the Aadhaar scheme in Puttaswamy (Aadhaar). It applied the privacy tests and struck down some parts of the Aadhaar law.',
    'Justice D.Y. Chandrachud\'s opinion overruled ADM Jabalpur. His father, Justice Y.V. Chandrachud, had been one of the four majority judges in that case.',
    'The judgment shaped the debate on data protection that led to the Digital Personal Data Protection Act, 2023.'
  ],
  source: 'https://indiankanoon.org/doc/91938676/'
},

'adm-jabalpur-1976': {
  name: 'ADM Jabalpur v. Shivkant Shukla',
  full: 'Additional District Magistrate, Jabalpur v. S.S. Shukla and Others',
  aka: 'The habeas corpus case',
  decided: '28 April 1976',
  citation: '(1976) 2 SCC 521, AIR 1976 SC 1207',
  bench: 5,
  result: 'Majority 4:1',
  tags: ['Emergency', 'Habeas corpus', 'Article 359'],
  judges: 'A.N. Ray CJI, H.R. Khanna, M.H. Beg, Y.V. Chandrachud and P.N. Bhagwati',
  summary: 'During the 1975 Emergency, no detained person could go to court for habeas corpus, even against an illegal or bad-faith detention. Justice H.R. Khanna dissented.',
  question: [
    'The President had suspended the right to move any court to enforce Articles 14, 21 and 22. While that order was in force, could a detained person still ask a High Court for a writ of habeas corpus under Article 226?',
    'Could the detained person argue that the detention order was illegal, or was made in bad faith?'
  ],
  facts: [
    'A national Emergency was proclaimed on 25 June 1975. On 27 June 1975 the President issued an order under Article 359(1). It suspended the right to move any court to enforce Articles 14, 21 and 22 while the Emergency lasted.',
    'Many people were detained under the Maintenance of Internal Security Act, 1971 (MISA). They filed habeas corpus petitions in the High Courts.',
    'The Government argued that these petitions could not be heard at all. Several High Courts rejected that argument, including Allahabad, Bombay (Nagpur Bench), Delhi, Karnataka, Madhya Pradesh and Punjab and Haryana.',
    'The Government appealed to the Supreme Court. A bench of five judges heard the appeals.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (4 judges: Ray CJI, Beg, Chandrachud and Bhagwati)', points: [
      'Because of the Presidential Order of 27 June 1975, no person has locus standi to file a writ petition under Article 226 for habeas corpus against a detention order.',
      'This is so even if the detention is said to be illegal, made in bad faith, or not in line with MISA.',
      'Article 21 is the only source of the right to life and personal liberty against the State. A habeas corpus petition enforces Article 21, so it is barred while the order is in force.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice H.R. Khanna)', points: [
      'Article 21 is not the only source of the right to life and personal liberty. Even without Article 21, the State cannot take away a person\'s life or liberty without the authority of law.',
      'The power of the High Courts to issue habeas corpus under Article 226 is part of the Constitution. No authority was given the power to suspend it during an Emergency.',
      'He quoted Chief Justice Hughes of the United States: a dissent is "an appeal to the brooding spirit of the law, to the intelligence of a future day".'
    ] }
  ],
  principles: [
    'The majority read an Article 359 order very widely. Courts could not examine a detention at all while the order lasted.',
    'Justice Khanna held that the rule of law protects life and liberty even during an Emergency.',
    'The case shows why the power of the courts to protect personal liberty matters most when the State is most powerful.'
  ],
  legacy: [
    'The 44th Amendment (1978) changed Article 359. Since 20 June 1979, a Presidential Order cannot suspend the enforcement of Articles 20 and 21.',
    'In January 1977 Justice Khanna was passed over for Chief Justice of India. Justice M.H. Beg was appointed instead, and Justice Khanna resigned.',
    'In 2011 Justice P.N. Bhagwati, one of the majority judges, said the decision was wrong and apologised for it.',
    'In Puttaswamy (2017), Justice D.Y. Chandrachud\'s opinion for four judges called the majority opinions "seriously flawed" and overruled ADM Jabalpur.'
  ],
  source: 'https://indiankanoon.org/doc/1735815/'
},

'shah-bano-1985': {
  name: 'Mohd. Ahmed Khan v. Shah Bano Begum',
  full: 'Mohd. Ahmed Khan v. Shah Bano Begum and Others',
  aka: 'The Shah Bano case',
  decided: '23 April 1985',
  citation: '(1985) 2 SCC 556, AIR 1985 SC 945',
  bench: 5,
  result: 'Unanimous, 5:0',
  status: 'partly',
  tags: ['Maintenance', 'Section 125 CrPC', 'Uniform Civil Code'],
  judges: 'Y.V. Chandrachud CJI, D.A. Desai, O. Chinnappa Reddy, E.S. Venkataramiah and Ranganath Misra',
  summary: 'A divorced Muslim woman who cannot maintain herself can claim maintenance from her former husband under Section 125 of the Code of Criminal Procedure.',
  question: [
    'Can a divorced Muslim woman claim maintenance from her former husband under Section 125 of the Code of Criminal Procedure, 1973?',
    'Under Muslim personal law, the husband pays maintenance only for the iddat period after divorce. Does that end his liability under Section 125?',
    'Is mahr (dower) a "sum payable on divorce" that frees the husband from paying maintenance under Section 127(3)(b)?'
  ],
  facts: [
    'Shah Bano married Mohd. Ahmed Khan in 1932. In 1975 he turned her out of the matrimonial home.',
    'In April 1978 she applied to the Judicial Magistrate at Indore for maintenance under Section 125 CrPC.',
    'On 6 November 1978 her husband divorced her by an irrevocable talaq. He said he had paid her Rs. 3,000 as mahr during the iddat period, so he owed her nothing more.',
    'The Magistrate awarded her Rs. 25 a month. In 1980 the Madhya Pradesh High Court raised this to Rs. 179.20 a month.',
    'The husband appealed. Two judges doubted earlier rulings, Bai Tahira (1979) and Fuzlunbi (1980), which had applied Section 125 to divorced Muslim women. So the case went to a bench of five judges.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Chief Justice Y.V. Chandrachud', points: [
      'Section 125 is a secular provision. It applies to every wife, whatever her religion. A divorced woman who has not remarried is a "wife" for this purpose.',
      'If a divorced Muslim woman can maintain herself, her husband\'s duty ends with the iddat period. If she cannot, she can claim maintenance under Section 125.',
      'Mahr is paid in consideration of the marriage, not of the divorce. So it is not a "sum payable on divorce" under Section 127(3)(b).',
      'Verses 241 and 242 of Sura II of the Quran also place a duty on the husband to provide for a divorced wife.',
      'The appeal was dismissed. The husband was ordered to pay Rs. 10,000 as costs.'
    ] }
  ],
  principles: [
    'A general law that protects women from destitution applies to all women, whatever their personal law.',
    'Personal law cannot defeat a statutory right that prevents destitution.',
    'The Court said that "Article 44 of our Constitution has remained a dead letter". It said a common civil code would help national integration.'
  ],
  legacy: [
    'The judgment led to political protest. In 1986 Parliament passed the Muslim Women (Protection of Rights on Divorce) Act to limit its effect.',
    'In Danial Latifi v. Union of India (2001), a five-judge bench upheld the 1986 Act. It read the Act to require the husband to make a reasonable and fair provision for the wife\'s future, paid within the iddat period.',
    'In Mohd. Abdul Samad v. State of Telangana (2024), the Supreme Court held that the 1986 Act does not take away a divorced Muslim woman\'s right to claim maintenance under Section 125.',
    'The call for a uniform civil code under Article 44 is still debated.'
  ],
  source: 'https://indiankanoon.org/doc/823221/'
},

'njac-case-2015': {
  name: 'Supreme Court Advocates-on-Record Association v. Union of India',
  full: 'Supreme Court Advocates-on-Record Association and Another v. Union of India',
  aka: 'The NJAC case, or the Fourth Judges case',
  decided: '16 October 2015',
  citation: '(2016) 5 SCC 1',
  bench: 5,
  result: 'Majority 4:1',
  tags: ['Judicial appointments', 'Basic structure', 'Article 124A'],
  judges: 'J.S. Khehar, J. Chelameswar, Madan B. Lokur, Kurian Joseph and Adarsh Kumar Goel',
  summary: 'The 99th Amendment and the NJAC Act were struck down because they compromised the independence of the judiciary, which is part of the basic structure. The collegium system was restored.',
  question: [
    'Were the Constitution (Ninety-ninth Amendment) Act, 2014 and the National Judicial Appointments Commission Act, 2014 valid?',
    'Did replacing the collegium with a commission that included the Law Minister and two eminent persons violate the independence of the judiciary, which is part of the basic structure?'
  ],
  facts: [
    'Since the Second Judges case (1993), judges of the Supreme Court and the High Courts had been chosen by a collegium of senior judges.',
    'In 2014 Parliament passed the 99th Amendment and the NJAC Act. The Amendment inserted Articles 124A, 124B and 124C. Both laws came into force on 13 April 2015.',
    'The Commission had six members: the Chief Justice of India, the two next senior judges of the Supreme Court, the Union Minister of Law and Justice, and two eminent persons.',
    'The eminent persons were to be chosen by a committee of the Prime Minister, the Chief Justice of India and the Leader of the Opposition in the Lok Sabha. One of them had to be from the Scheduled Castes, Scheduled Tribes, Other Backward Classes or minorities, or a woman.',
    'The Commission could not recommend a person if any two members disagreed. So the Law Minister and one eminent person together could block a name.',
    'The Supreme Court Advocates-on-Record Association and others challenged both laws.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (4 judges: Khehar, Lokur, Joseph and Goel)', points: [
      'The 99th Amendment and the NJAC Act are unconstitutional and void.',
      'The primacy of the judiciary in choosing judges is part of the independence of the judiciary. The independence of the judiciary is part of the basic structure.',
      'The presence of the Law Minister, and the power of non-judicial members to block a recommendation, compromised that independence.',
      'The collegium system that existed before the 99th Amendment is operative again.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice J. Chelameswar)', points: [
      'The 99th Amendment is valid.',
      'A commission that includes people from outside the judiciary could act as a check on the collegium and make appointments more transparent.'
    ] }
  ],
  principles: [
    'The independence of the judiciary is part of the basic structure. Even a constitutional amendment cannot take it away.',
    'In appointments to the Supreme Court and the High Courts, the opinion of the judiciary must have primacy.',
    'The Court accepted that the collegium system needed to become more transparent.'
  ],
  legacy: [
    'In November 2015 the Court heard suggestions on how to improve the collegium system.',
    'On 16 December 2015 the Court said the Government of India could supplement the Memorandum of Procedure for appointments, in consultation with the Chief Justice of India. It named eligibility criteria, transparency, a secretariat and a way to deal with complaints.',
    'The collegium system still decides appointments to the Supreme Court and the High Courts.',
    'Articles 124A, 124B and 124C are still printed in the official text of the Constitution. Because of this judgment, they have no effect.'
  ],
  source: 'https://indiankanoon.org/doc/66970168/'
}

});
