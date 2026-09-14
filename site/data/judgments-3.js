/* Landmark judgments, rewritten in full. Batch 3: Article 14.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. Each entry was checked against the full text
   of the judgment on Indian Kanoon: the date, the bench, the split, who wrote
   each opinion, the facts and the operative holding. The corrections to the
   short summaries that came out of the check: E.P. Royappa was decided on
   23 November 1973, not in 1974, and the petition was dismissed. D.S. Nakara
   was decided on 17 December 1982, not in 1983, and no arrears were paid for
   the period before the specified date. Nergesh Meerza was decided by three
   judges. In Anwar Ali Sarkar, six of the seven judges held section 5(1) void,
   five of them wholly and one in part.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'anwar-ali-sarkar-1952': {
  name: 'State of West Bengal v. Anwar Ali Sarkar',
  aka: 'The Special Courts case',
  decided: '11 January 1952',
  citation: 'AIR 1952 SC 75, 1952 SCR 284',
  bench: 7,
  result: 'Majority 6:1',
  tags: ['Article 14', 'Special courts', 'Unguided discretion'],
  judges: 'M. Patanjali Sastri CJI, S. Fazl Ali, M.C. Mahajan, B.K. Mukherjea, S.R. Das, N. Chandrasekhara Aiyar and Vivian Bose',
  summary: 'A law that let the Government send any case it chose to a special court, with a less protective procedure and no principle to guide the choice, violated Article 14.',
  question: [
    'Section 5(1) of the West Bengal Special Courts Act, 1950 let the State Government send "offences", "classes of offences", "cases" or "classes of cases" to a Special Court. Did this violate the equal protection of the laws under Article 14?'
  ],
  facts: [
    'On 26 February 1949 an armed gang raided the factory of Jessop and Company at Dum Dum. Anwar Ali Sarkar and 49 others were accused.',
    'The West Bengal Special Courts Ordinance, 1949, later replaced by the West Bengal Special Courts Act, 1950, set up Special Courts with a shorter procedure.',
    'In a Special Court there were no committal proceedings and no jury or assessors. The powers to adjourn and to call witnesses were limited.',
    'On 25 January 1950 the State Government directed that this case be tried by a Special Judge. The accused were convicted.',
    'A Full Bench of the Calcutta High Court quashed the conviction. The State appealed to the Supreme Court.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (5 judges): Justices Fazl Ali, Mahajan, Mukherjea, Chandrasekhara Aiyar and Bose', points: [
      'Section 5(1) is wholly void because it violates Article 14.',
      'The Act made no classification and gave no basis for one. It left the choice of cases to the uncontrolled discretion of the Government.',
      'People sent to the Special Court got a procedure less favourable than the one the Code of Criminal Procedure gave to others in the same position.',
      'The aim of a speedier trial was too vague to be a basis for classification.',
      'The appeal was dismissed, so the conviction stayed quashed.'
    ] },
    { kind: 'concurring', label: 'Concurring in part (Justice S.R. Das)', points: [
      'Only the power to send individual "cases" to the Special Court is void. The power to send "offences", "classes of offences" or "classes of cases" is valid.'
    ] },
    { kind: 'dissent', label: 'Dissent (Chief Justice M. Patanjali Sastri)', points: [
      'Section 5(1) is valid. The Government must be taken to use the power honestly, where a speedier trial is needed. The mere chance that a power may be abused does not make a law void.'
    ] }
  ],
  principles: [
    'Article 14 forbids a law that gives the executive unguided power to pick and choose whom to treat differently.',
    'A valid classification needs a clear basis. A vague aim such as a speedier trial is not enough.',
    'Equal protection covers procedure too. People in the same position must get the same procedural safeguards.'
  ],
  legacy: [
    'It was one of the first major judgments on Article 14.',
    'Later in 1952, in Kathi Raning Rawat, the Court upheld a similar special courts law of Saurashtra, because that law stated a policy to guide the Government.',
    'In Ram Krishna Dalmia (1958), the Court listed laws that give unguided discretion as one of the kinds of law that violate Article 14.'
  ],
  source: 'https://indiankanoon.org/doc/1270239/'
},

'ram-krishna-dalmia-1958': {
  name: 'Shri Ram Krishna Dalmia v. Shri Justice S.R. Tendolkar',
  full: 'Shri Ram Krishna Dalmia v. Shri Justice S.R. Tendolkar and Others',
  decided: '28 March 1958',
  citation: 'AIR 1958 SC 538, 1959 SCR 279',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 14', 'Reasonable classification', 'Commissions of inquiry'],
  judges: 'S.R. Das CJI, T.L. Venkatarama Aiyar, S.K. Das, A.K. Sarkar and Bhuvneshwar P. Sinha',
  summary: 'A classification is valid under Article 14 if it rests on an intelligible differentia that has a rational relation to the object of the law. The inquiry into the Dalmia companies was upheld.',
  question: [
    'Did the Commissions of Inquiry Act, 1952, and a notification setting up an inquiry into certain companies, violate Article 14?',
    'What test decides whether a classification is allowed under Article 14?'
  ],
  facts: [
    'On 11 December 1956 the Central Government issued a notification under Section 3 of the Commissions of Inquiry Act, 1952.',
    'It set up a commission headed by Justice S.R. Tendolkar of the Bombay High Court. The commission was to inquire into nine companies and the control that Ram Krishna Dalmia and members of the Dalmia and Jain families had over them.',
    'Ram Krishna Dalmia and others challenged the Act and the notification in the Bombay High Court under Article 226.',
    'They argued that singling them out for an inquiry denied them equality before the law. Appeals from the High Court reached the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Chief Justice S.R. Das', points: [
      'Article 14 forbids class legislation. It does not forbid reasonable classification.',
      'A classification is valid if two conditions are met. It must be "founded on an intelligible differentia" that separates those grouped together from those left out. That differentia must have "a rational relation to the object sought to be achieved" by the law.',
      'The Commissions of Inquiry Act is valid. The power to set up a commission is guided by a policy, because it can be used only for a definite matter of public importance.',
      'The notification is valid. The commission can only inquire and report. It cannot decide anyone\'s rights.',
      'Only the words asking the commission to recommend action "as and by way of securing redress or punishment" went beyond the Act. Those words were struck out, and the rest of the notification stood.'
    ] }
  ],
  principles: [
    'A law is presumed to be constitutional. The person who challenges it must show that it is discriminatory.',
    'A law may apply to a single person or company, if special circumstances make that person a class by itself.',
    'A law that picks out one person for special treatment without any reasonable basis is void.',
    'A law that gives the Government a choice without any policy to guide it is void. If the law states a policy but the Government does not follow it, only the Government\'s action is struck down.'
  ],
  legacy: [
    'The two-part test of intelligible differentia and rational relation is still applied in almost every Article 14 case.',
    'From E.P. Royappa (1973) onwards, the Court added a second test under Article 14: State action must not be arbitrary.'
  ],
  source: 'https://indiankanoon.org/doc/685234/'
},

'ep-royappa-1974': {
  name: 'E.P. Royappa v. State of Tamil Nadu',
  full: 'E.P. Royappa v. State of Tamil Nadu and Another',
  decided: '23 November 1973',
  year: 1973,
  citation: '(1974) 4 SCC 3, AIR 1974 SC 555',
  bench: 5,
  result: 'Petition dismissed, 5:0',
  tags: ['Article 14', 'Article 16', 'Arbitrariness'],
  judges: 'A.N. Ray CJI, D.G. Palekar, Y.V. Chandrachud, P.N. Bhagwati and V.R. Krishna Iyer',
  summary: 'Equality is the opposite of arbitrariness, so an arbitrary act of the State violates Articles 14 and 16. On the facts, the transfer of the Chief Secretary was upheld.',
  question: [
    'Did moving the Chief Secretary of Tamil Nadu to other posts violate Articles 14 and 16?',
    'Was the move made in bad faith?'
  ],
  facts: [
    'E.P. Royappa, an IAS officer, had been the Chief Secretary of Tamil Nadu since November 1969.',
    'In April 1971 he was moved to the new post of Deputy Chairman of the State Planning Commission. In June 1972 he was made Officer on Special Duty to revise the sales tax laws. Both posts were in the grade of Chief Secretary.',
    'He argued that these posts were lower in status and responsibility than the post of Chief Secretary.',
    'He also alleged that the Chief Minister moved him out because of his firm stand on some matters, including law and order during the 1971 elections. He filed a petition under Article 32.'
  ],
  held: [
    { kind: 'majority', label: 'Opinion of Justice P.N. Bhagwati, for himself and Justices Chandrachud and Krishna Iyer', points: [
      'Equality is a dynamic concept. It cannot be confined within traditional limits.',
      '"From a positivistic point of view, equality is antithetic to arbitrariness." An arbitrary act is unequal, so it violates Articles 14 and 16.',
      'The burden of proving bad faith is heavy. The petitioner did not prove it.',
      'The petition was dismissed. All five judges agreed on this result.'
    ] },
    { kind: 'concurring', label: 'Opinion of Chief Justice A.N. Ray, for himself and Justice Palekar', points: [
      'The new posts were equal in status and responsibility to the post of Chief Secretary, and they carried the same pay.',
      'The allegations of bad faith were not proved.'
    ] }
  ],
  principles: [
    'Article 14 has a second test. Besides reasonable classification, State action must not be arbitrary.',
    'Articles 14 and 16 strike at arbitrariness in public employment too.',
    'A person who alleges bad faith against high officials must prove it with clear facts.'
  ],
  legacy: [
    'In Maneka Gandhi (1978), the Court applied this idea to Article 21. A procedure that takes away liberty must be fair, just and reasonable, not arbitrary.',
    'In Ajay Hasia (1980) and later cases, arbitrariness became a settled test under Article 14.',
    'In Shayara Bano (2017), Navtej Singh Johar (2018) and Joseph Shine (2018), judges held that even a law can be struck down if it is "manifestly arbitrary".'
  ],
  source: 'https://indiankanoon.org/doc/1327287/'
},

'air-india-v-nargesh-meerza-1981': {
  name: 'Air India v. Nergesh Meerza',
  full: 'Air India and Others v. Nergesh Meerza and Others',
  decided: '28 August 1981',
  citation: '(1981) 4 SCC 335, AIR 1981 SC 1829',
  bench: 3,
  result: 'Unanimous, 3:0',
  tags: ['Article 14', 'Article 15', 'Women at work'],
  judges: 'S. Murtaza Fazal Ali, A. Varadarajan and A.P. Sen',
  summary: 'Air India\'s rule that ended an air hostess\'s service on her first pregnancy was struck down as manifestly arbitrary. So was the unguided power to extend her service.',
  question: [
    'Did the service rules for air hostesses in Air India and Indian Airlines discriminate against women under Articles 14, 15 and 16?',
    'Were the rules on retirement at 35, on marriage and on first pregnancy arbitrary?'
  ],
  facts: [
    'Under Air India\'s regulations, an air hostess retired at 35, or on marriage within four years of joining, or on her first pregnancy, whichever came first.',
    'Her service could be extended up to 45 at the discretion of the Managing Director. Male Assistant Flight Pursers retired at 58.',
    'Indian Airlines had similar rules.',
    'Nergesh Meerza and other air hostesses challenged the rules. Their writ petition in the Bombay High Court was transferred to the Supreme Court and heard with petitions under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (3:0), judgment by Justice S. Murtaza Fazal Ali', points: [
      'Air hostesses and male Assistant Flight Pursers are separate classes. They are recruited differently and have different pay and promotions. So treating them differently is not discrimination on the ground of sex alone.',
      'Retirement at 35 was upheld.',
      'The bar on marriage within four years of joining was reasonable.',
      'Ending service on first pregnancy was "not only a callous and cruel act but an open insult to Indian womanhood". It was manifestly unreasonable and arbitrary, and it violated Article 14.',
      'The Managing Director\'s unguided discretion to extend service was also arbitrary, and it was struck down.'
    ] }
  ],
  principles: [
    'A rule that ends a woman\'s job because she becomes pregnant is manifestly arbitrary.',
    'Unguided discretion over a person\'s conditions of service violates Article 14.',
    'Treating two groups of employees differently is not sex discrimination if they are genuinely different classes.'
  ],
  legacy: [
    'The separate-class reasoning has been criticised, because the difference between the two classes was itself created by the employer\'s rules.',
    'Later cases on women at work, such as Anuj Garg (2007), held that laws based on stereotypes about women violate equality.'
  ],
  source: 'https://indiankanoon.org/doc/1903603/'
},

'ds-nakara-1983': {
  name: 'D.S. Nakara v. Union of India',
  full: 'D.S. Nakara and Others v. Union of India',
  aka: 'The pensioners case',
  decided: '17 December 1982',
  year: 1982,
  citation: '(1983) 1 SCC 305, AIR 1983 SC 130',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 14', 'Pensions', 'Cut-off dates'],
  judges: 'Y.V. Chandrachud CJI, V.D. Tulzapurkar, D.A. Desai, O. Chinnappa Reddy and Baharul Islam',
  summary: 'Pensioners form one class. A better pension formula given only to those who retired after a chosen date was arbitrary. It was extended to all pensioners from that date.',
  question: [
    'The Government gave a better pension formula only to those who retired on or after a chosen date in 1979. Did dividing pensioners by their date of retirement violate Article 14?'
  ],
  facts: [
    'On 25 May 1979 the Ministry of Finance liberalised the formula for civil service pensions. It applied only to those in service on 31 March 1979 who retired on or after that date.',
    'On 28 September 1979 the Ministry of Defence extended the new formula to the armed forces, for those who retired on or after 1 April 1979.',
    'Those who had retired earlier got a lower pension. It was worked out on a longer average of pay, without the new slab system, and under a lower ceiling.',
    'D.S. Nakara, a retired civil servant, a retired officer of the armed forces and a registered society of pensioners filed petitions under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Justice D.A. Desai', points: [
      'Pensioners form one class. Dividing them by the date of retirement was "devoid of any rational principle". It was arbitrary and violated Article 14.',
      'The words that limited the new formula to those who retired on or after the specified date were struck down.',
      'All pensioners would have their pension worked out under the liberalised formula from the specified date. No arrears were payable for the period before that date.',
      'Pension is a right, not a bounty or a gift from the Government.'
    ] }
  ],
  principles: [
    'A cut-off date that splits one class must have a rational link to the purpose of the scheme. An arbitrary date violates Article 14.',
    'Pension is earned by long service. It is deferred pay and a measure of social security in old age.',
    'The Court read pensions with Article 41 and the idea of a socialist welfare State in the Preamble.'
  ],
  legacy: [
    'It became the leading case against arbitrary cut-off dates in pensions and other service benefits.',
    'In Krishena Kumar v. Union of India (1990), the Court held that Nakara does not apply where people move to a different scheme, rather than get a better formula within the same scheme.'
  ],
  source: 'https://indiankanoon.org/doc/1416283/'
},

'joseph-shine-2018': {
  name: 'Joseph Shine v. Union of India',
  aka: 'The adultery case',
  decided: '27 September 2018',
  citation: '(2019) 3 SCC 39',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 14', 'Article 21', 'Gender equality'],
  judges: 'Dipak Misra CJI, A.M. Khanwilkar, R.F. Nariman, D.Y. Chandrachud and Indu Malhotra',
  summary: 'Section 497 of the Indian Penal Code, which made adultery a crime and treated a wife as her husband\'s property, was struck down. Adultery remains a ground for divorce.',
  question: [
    'Is Section 497 of the Indian Penal Code, which made adultery a crime, valid under Articles 14, 15 and 21?',
    'Is Section 198(2) of the Code of Criminal Procedure, which let only the husband complain, valid?'
  ],
  facts: [
    'Section 497 punished a man who had sexual intercourse with the wife of another man without that man\'s consent or connivance. The punishment was up to five years in prison.',
    'The wife could not be punished, even as an abettor. If her husband consented, there was no offence.',
    'Under Section 198(2) CrPC, only the husband could file a complaint. A wife could not complain against her husband.',
    'Joseph Shine filed a writ petition under Article 32 in 2017. Earlier benches had upheld Section 497, so five judges heard the case.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), in four opinions: Chief Justice Misra for himself and Justice Khanwilkar, and Justices Nariman, Chandrachud and Indu Malhotra', points: [
      'Section 497 is struck down. It is manifestly arbitrary and violates Article 14.',
      'It treats a woman as the property of her husband. It denies her dignity and sexual autonomy, which are part of Article 21.',
      'Justice Chandrachud also held that it rests on a stereotype about women and violates Article 15.',
      'Section 198(2) CrPC is struck down to the extent that it applies to Section 497.',
      'Yusuf Abdul Aziz (1954), Sowmithri Vishnu (1985) and V. Revathi (1988), which had upheld Section 497, are overruled.',
      'Adultery is no longer a crime. It can still be a civil wrong and a ground for divorce.'
    ] }
  ],
  principles: [
    'A law that treats a woman as the property of her husband violates equality and dignity.',
    'A law can be struck down under Article 14 if it is manifestly arbitrary.',
    'Criminal law should not be used to punish private conduct between adults in a marriage.'
  ],
  legacy: [
    'It built on Puttaswamy (2017) and Navtej Singh Johar (2018), which read dignity and autonomy into Article 21.',
    'In January 2023 the Court clarified that this judgment does not stop the armed forces from taking disciplinary action against their personnel for adultery.',
    'The Bharatiya Nyaya Sanhita, 2023, which replaced the Indian Penal Code, does not make adultery an offence.'
  ],
  source: 'https://indiankanoon.org/doc/42184625/'
}

});
