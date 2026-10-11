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
     background the story before the case, in order, for a judgment that
                cannot be followed without it (optional)
     question   the constitutional question(s) the Court answered
     facts      short points, in order
     held       blocks of { kind, label, points }
                kind: unanimous | majority | plurality | concurring | dissent
     principles how the rule works beyond the case (reach, purpose,
                limits, method, doctrine name), never a repeat of held;
                the last one starts with "So" and states the central point
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
  summary: 'Privacy is a fundamental right. The Constitution does not name it, but it is part of the right to life and personal liberty in Article 21, and of the other freedoms in Part III.',
  background: [
    'Article 21 says that no person shall lose their life or personal liberty except by a procedure set by law. The Constitution nowhere uses the word "privacy".',
    'In M.P. Sharma (1954), eight judges dealt with police searches of company records. They said the Constitution has no right to privacy of the kind found in the American Constitution.',
    'In Kharak Singh (1962), six judges dealt with police visits to a suspect\'s home at night. They struck down the night visits as a breach of personal liberty. But the majority still said privacy was not a guaranteed right.',
    'Later benches of fewer judges took a different line. In Gobind (1975) and R. Rajagopal (1994), they treated privacy as a right that the law protects.',
    'In India a smaller bench cannot overrule a larger one. So the older rulings of eight and six judges stood in the way, and only a bigger bench could settle the question.'
  ],
  question: [
    'Is privacy a fundamental right under the Constitution of India?',
    'If it is, were M.P. Sharma and Kharak Singh wrong to say that the Constitution does not protect it?'
  ],
  facts: [
    'Aadhaar gives every resident a 12-digit number linked to their fingerprints and iris scans. Justice K.S. Puttaswamy, a retired High Court judge, and others challenged the scheme. They argued that collecting such data from every resident broke their privacy.',
    'The Union Government replied that the Constitution does not guarantee privacy at all. The Government relied on M.P. Sharma and Kharak Singh.',
    'In August 2015 a bench of three judges sent the privacy question to a larger bench. Nine judges finally heard it, which was enough to overrule the bench of eight in M.P. Sharma.'
  ],
  held: [
    { kind: 'unanimous', label: 'All nine judges agreed (9:0)', points: [
      'Privacy is a fundamental right. The right is part of the right to life and personal liberty in Article 21, and of the freedoms in Part III.',
      'M.P. Sharma is overruled, because it said the Constitution does not protect privacy.',
      'Kharak Singh is overruled on the same point. Its ruling on the night visits stands.',
      'The nine judges wrote six opinions. All six reached the same result.'
    ] },
    { kind: 'concurring', label: 'The main opinion, by Justice D.Y. Chandrachud for four judges', points: [
      'Privacy is not absolute. The State may limit it, but only if three tests are met. There must be a law. The law must serve a legitimate aim of the State. And the limit must be in proportion to that aim.',
      'Privacy covers three things: the body, personal information, and the freedom to make personal choices, such as whom to live with or what to eat.',
      'The majority in ADM Jabalpur (1976) had held that no court could protect a detained person during the Emergency. The opinion called that view "seriously flawed" and overruled it.'
    ] }
  ],
  principles: [
    'Rights can sit inside other rights. A freedom the text never names can still be fundamental, if it forms part of one that is named.',
    'Dignity and the freedom to run one\'s own life lie at the core of Part III.',
    'Privacy belongs to the person, not to a place. A person does not lose it by stepping into a public space.',
    'So life and liberty are not gifts from the Constitution. Every person has them already, and the Constitution recognises them.'
  ],
  legacy: [
    'In 2018 the Court relied on this judgment twice. In Navtej Singh Johar it decriminalised consensual same-sex relations, and in Joseph Shine it decriminalised adultery.',
    'In September 2018 a bench of five judges ruled on Aadhaar itself, in Puttaswamy (Aadhaar). The bench applied the privacy tests, upheld the scheme, and struck down some parts of the Aadhaar law.',
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
  summary: 'During the 1975 Emergency, the Court held by 4 votes to 1 that a detained person could not go to court to challenge the detention, even if it was illegal or made in bad faith. Justice H.R. Khanna dissented.',
  background: [
    'Under Article 352, the President can declare a national Emergency. Under Article 359, the President can then suspend people\'s right to go to court to enforce chosen fundamental rights.',
    'Article 21 protects life and personal liberty. Article 22 gives protections to people who are arrested or detained.',
    'Habeas corpus is a court order that tells the State to bring a detained person before the court and show the legal reason for holding them. If there is none, the person goes free. Under Article 226, every High Court can issue such orders.',
    'The Maintenance of Internal Security Act, 1971 (MISA) allowed preventive detention. The government could hold a person without trial to stop them from acting against the security of the State.'
  ],
  question: [
    'The President had suspended the right to go to any court to enforce Articles 14, 21 and 22. While that order lasted, could a detained person still ask a High Court for habeas corpus?',
    'Could the person at least argue that the detention order was illegal, or was made in bad faith?'
  ],
  facts: [
    'A national Emergency was declared on 25 June 1975. On 27 June 1975 the President made an order under Article 359(1). The order suspended the right to go to any court to enforce Articles 14, 21 and 22 while the Emergency lasted.',
    'Many people, including opposition leaders, were detained under MISA. They filed habeas corpus petitions in the High Courts.',
    'The Government argued that the courts could not hear these petitions at all. Several High Courts disagreed, including Allahabad, Bombay (Nagpur Bench), Delhi, Karnataka, Madhya Pradesh and Punjab and Haryana.',
    'The Government appealed to the Supreme Court, and a bench of five judges heard the appeals.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of four: Chief Justice Ray and Justices Beg, Chandrachud and Bhagwati', points: [
      'While the order of 27 June 1975 was in force, no detained person had the standing to ask a High Court for habeas corpus under Article 226.',
      'The bar applied even if the detention was said to be illegal, made in bad faith, or outside what MISA allowed.',
      'Article 21 is the only source of the right to life and liberty against the State. A habeas corpus petition enforces Article 21. So, with Article 21 suspended, the petition could not be heard.'
    ] },
    { kind: 'dissent', label: 'Justice H.R. Khanna, alone in dissent', points: [
      'Article 21 is not the only source of the right to life and liberty. Even without Article 21, the State cannot take a person\'s life or liberty unless a law allows it.',
      'The High Courts\' power to issue habeas corpus under Article 226 is part of the Constitution. No one was given the power to suspend that power during an Emergency.',
      'He quoted Chief Justice Hughes of the United States. A dissent, Hughes had said, is "an appeal to the brooding spirit of the law, to the intelligence of a future day".'
    ] }
  ],
  principles: [
    'Justice Khanna\'s view is now the law. The State needs the authority of a law to hold anyone, whether or not Article 21 can be enforced at the time.',
    'A dissent can become the law later. Khanna\'s did, forty-one years on.',
    'So the case is remembered as a warning. Courts matter most to personal liberty when the State is at its most powerful.'
  ],
  legacy: [
    'The 44th Amendment (1978) changed Article 359. Since 20 June 1979, a Presidential Order cannot suspend the enforcement of Articles 20 and 21, even during an Emergency.',
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
  summary: 'A divorced Muslim woman who cannot support herself can claim a monthly allowance from her former husband under Section 125 of the Code of Criminal Procedure, like any other woman.',
  background: [
    'Section 125 of the Code of Criminal Procedure, 1973 (CrPC) protects people from destitution. A magistrate can order a man with enough means to pay a monthly allowance to his wife, children or parents if they cannot support themselves. A divorced woman who has not remarried counts as a "wife".',
    'Marriage, divorce and inheritance in India are governed partly by personal laws, which differ by religion. Under Muslim personal law, a husband who divorces his wife must support her during the iddat, a waiting period of about three months after the divorce.',
    'Mahr is a sum that the husband pays or promises to his wife as part of the marriage contract. Under Section 127(3)(b) of the CrPC, a maintenance order can be cancelled if the woman has received the full sum due to her on divorce under her personal law.',
    'Article 44, one of the Directive Principles, asks the State to try to secure a uniform civil code, one set of family laws for all citizens.'
  ],
  question: [
    'Can a divorced Muslim woman claim maintenance from her former husband under Section 125 CrPC?',
    'Muslim personal law makes the husband pay only for the iddat period. Does that end his duty under Section 125?',
    'Is mahr a "sum payable on divorce", so that paying it frees the husband from maintenance under Section 127(3)(b)?'
  ],
  facts: [
    'Shah Bano married Mohd. Ahmed Khan in 1932. In 1975 he turned her out of the marital home.',
    'In April 1978 she asked the Judicial Magistrate at Indore for maintenance under Section 125.',
    'On 6 November 1978 her husband divorced her by an irrevocable talaq, a divorce that cannot be taken back. He said he had paid her Rs. 3,000 as mahr during the iddat, so he owed her nothing more.',
    'The Magistrate awarded her Rs. 25 a month. In 1980 the Madhya Pradesh High Court raised the sum to Rs. 179.20 a month.',
    'The husband appealed. Two earlier rulings, Bai Tahira (1979) and Fuzlunbi (1980), had applied Section 125 to divorced Muslim women. Two judges doubted those rulings, so the case went to a bench of five judges.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Chief Justice Y.V. Chandrachud wrote the judgment', points: [
      'Section 125 is a secular provision, so it applies to every wife, whatever her religion. A divorced woman who has not remarried is a "wife" for this purpose.',
      'If a divorced Muslim woman can support herself, the husband\'s duty ends with the iddat. But if she cannot, she can claim maintenance under Section 125.',
      'Mahr is paid because of the marriage, not because of the divorce. So mahr is not a "sum payable on divorce" under Section 127(3)(b).',
      'The Court added that verses 241 and 242 of Sura II of the Quran also require a husband to provide for a divorced wife.',
      'The appeal was dismissed, and the husband was ordered to pay Rs. 10,000 as costs.'
    ] }
  ],
  principles: [
    'Laws that prevent destitution are secular. They apply to everyone, and personal law cannot take them away.',
    'The Court\'s remark that Article 44 "has remained a dead letter" was said in passing. The remark did not decide the case, but it started a long debate on a common civil code.',
    'So religion decides much of family law, but not whether a woman is left without support.'
  ],
  legacy: [
    'The judgment led to political protest. In 1986 Parliament passed the Muslim Women (Protection of Rights on Divorce) Act to limit its effect.',
    'In Danial Latifi v. Union of India (2001), five judges upheld the 1986 Act. But they read it to require the husband to make a reasonable and fair provision for the wife\'s future, paid within the iddat period.',
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
  summary: 'The Court struck down the 99th Amendment and the NJAC Act, which had given the government a say in choosing judges. The independence of the judiciary is part of the basic structure, so the collegium of senior judges came back.',
  background: [
    'Articles 124 and 217 say that the President appoints judges of the Supreme Court and the High Courts after "consultation" with the Chief Justice of India and other judges. In practice the government chose, after consulting the judges.',
    'In the Second Judges case (1993), the Court held that the opinion of the Chief Justice of India must prevail, formed together with senior colleagues. Since then, judges have chosen judges through a group of senior judges called the collegium.',
    'Critics said the collegium worked in secret, gave no reasons and kept no public record. Parliament set out to replace it.',
    'The basic structure is the set of core features that Parliament cannot destroy, even by amending the Constitution. The Court laid down the rule in Kesavananda Bharati (1973).'
  ],
  question: [
    'Were the 99th Amendment (2014) and the National Judicial Appointments Commission Act (2014) valid?',
    'The new commission included the Law Minister and two eminent persons from outside the judiciary. Did that break the independence of the judiciary, which is part of the basic structure?'
  ],
  facts: [
    'In 2014 Parliament passed the 99th Amendment and the NJAC Act. The Amendment added Articles 124A, 124B and 124C. Both laws came into force on 13 April 2015.',
    'The Commission had six members. They were the Chief Justice of India, the two next senior judges of the Supreme Court, the Union Minister of Law and Justice, and two eminent persons.',
    'A committee of the Prime Minister, the Chief Justice of India and the Leader of the Opposition in the Lok Sabha would choose the two eminent persons. One of them had to be a woman, or a person from the Scheduled Castes, Scheduled Tribes, Other Backward Classes or minorities.',
    'If any two members disagreed, the Commission could not recommend a person. So the Law Minister and one eminent person, acting together, could block any name.',
    'The Supreme Court Advocates-on-Record Association and others challenged both laws.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of four: Justices Khehar, Lokur, Joseph and Goel', points: [
      'The 99th Amendment and the NJAC Act are unconstitutional and void.',
      'When judges are chosen, the judiciary\'s view must prevail. The judiciary\'s primacy is part of the independence of the judiciary, and the independence of the judiciary is part of the basic structure.',
      'The Law Minister\'s seat, and the power of members from outside the judiciary to block a name, damaged that independence.',
      'So the collegium system that existed before the 99th Amendment works again.'
    ] },
    { kind: 'dissent', label: 'Justice J. Chelameswar, alone in dissent', points: [
      'The 99th Amendment is valid.',
      'A commission with members from outside the judiciary could check the collegium and make appointments more open.'
    ] }
  ],
  principles: [
    'How judges are chosen is part of judicial independence. So rules on appointments are tested against the basic structure, like any other amendment.',
    'So the judges kept control of appointments, but the Court accepted that the collegium had to become more open.'
  ],
  legacy: [
    'In November 2015 the Court heard suggestions on how to improve the collegium system.',
    'On 16 December 2015 the Court said the Government of India could add to the Memorandum of Procedure, the document that sets out how appointments are processed, in consultation with the Chief Justice of India. The Court named eligibility criteria, transparency, a secretariat and a way to deal with complaints.',
    'The collegium still decides appointments to the Supreme Court and the High Courts.',
    'Articles 124A, 124B and 124C are still printed in the official text of the Constitution. Because of this judgment, they have no effect.'
  ],
  source: 'https://indiankanoon.org/doc/66970168/'
}

});
