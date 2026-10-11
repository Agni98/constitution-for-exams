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
  summary: 'A law let the government send any case it liked to a special court, where the accused got fewer protections. Because nothing guided that choice, the law broke the equal protection promised by Article 14.',
  background: [
    'Article 14 says the State shall not deny any person equality before the law or the equal protection of the laws.',
    'Equality does not mean that every law must treat everyone the same. A law may treat a group differently, as long as there is a sensible reason for drawing the line where it is drawn.',
    'Serious criminal cases normally followed the Code of Criminal Procedure. A magistrate first held committal proceedings to check whether there was enough evidence to send the case to a higher court. At the trial, a jury or assessors, who were ordinary citizens, took part.'
  ],
  question: [
    'Section 5(1) of the West Bengal Special Courts Act, 1950 let the State Government send "offences", "classes of offences", "cases" or "classes of cases" to a Special Court. Did that power break the equal protection of the laws under Article 14?'
  ],
  facts: [
    'On 26 February 1949 an armed gang raided the factory of Jessop and Company at Dum Dum. Anwar Ali Sarkar and 49 others were accused.',
    'The West Bengal Special Courts Ordinance, 1949, later replaced by the West Bengal Special Courts Act, 1950, set up Special Courts with a shorter procedure.',
    'A Special Court held no committal proceedings and had no jury or assessors. Its powers to adjourn a case and to call witnesses were limited.',
    'On 25 January 1950 the State Government directed that this case be tried by a Special Judge. The accused were convicted.',
    'A Full Bench of the Calcutta High Court quashed the conviction, and the State appealed to the Supreme Court.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of five: Justices Fazl Ali, Mahajan, Mukherjea, Chandrasekhara Aiyar and Bose', points: [
      'Section 5(1) is wholly void, because it breaks Article 14.',
      'The Act drew no line between groups and gave no basis for drawing one. The Act left the choice of cases to the uncontrolled will of the government.',
      'People sent to the Special Court got a worse procedure than the one the Code of Criminal Procedure gave to others in the same position.',
      'A speedier trial was too vague an aim to justify treating some accused differently from others.',
      'The appeal was dismissed, so the conviction stayed quashed.'
    ] },
    { kind: 'concurring', label: 'Justice S.R. Das, agreeing in part', points: [
      'Only the power to send single "cases" to the Special Court is void. The power to send "offences", "classes of offences" or "classes of cases" is valid, because those are defined groups.'
    ] },
    { kind: 'dissent', label: 'Chief Justice M. Patanjali Sastri, in dissent', points: [
      'Section 5(1) is valid. The government must be taken to use the power honestly, where a speedier trial is needed. The mere chance that a power may be misused does not make a law void.'
    ] }
  ],
  principles: [
    'A law need not discriminate on its face to break Article 14. A power to discriminate, with nothing to guide it, is enough.',
    'Equal protection reaches procedure as well as substance.',
    'So the problem was not the special court itself, but a power to send anyone there with nothing to guide the choice.'
  ],
  legacy: [
    'Later in 1952, in Kathi Raning Rawat, the Court upheld a similar special courts law of Saurashtra, because that law stated a policy to guide the government.',
    'In Ram Krishna Dalmia (1958), the Court listed laws that give unguided discretion as one of the kinds of law that break Article 14.'
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
  summary: 'A law may treat a group differently if two tests are met. The line must separate the group by a clear difference, and the difference must be linked to the law\'s purpose. On that test, an inquiry into the Dalmia companies was upheld.',
  background: [
    'Article 14 says the State shall not deny any person equality before the law or the equal protection of the laws.',
    'Equality does not mean that every law must treat everyone the same. A law may treat a group differently, as long as there is a sensible reason for drawing the line where it is drawn.',
    'In Anwar Ali Sarkar (1952), the Court had struck down a law that let the government pick cases for a special court with nothing to guide it.',
    'The Commissions of Inquiry Act, 1952 lets the government appoint a commission to look into a matter of public importance. A commission gathers facts and reports, but cannot punish anyone.'
  ],
  question: [
    'Did the Commissions of Inquiry Act, 1952, and an order setting up an inquiry into certain companies, break Article 14?',
    'What test decides whether a law may treat a group differently under Article 14?'
  ],
  facts: [
    'On 11 December 1956 the Central Government issued a notification under Section 3 of the Commissions of Inquiry Act.',
    'The notification set up a commission headed by Justice S.R. Tendolkar of the Bombay High Court. The commission was to look into nine companies, and into the control that Ram Krishna Dalmia and members of the Dalmia and Jain families had over them.',
    'Ram Krishna Dalmia and others challenged the Act and the notification in the Bombay High Court under Article 226.',
    'They argued that singling them out for an inquiry denied them equality before the law. Appeals from the High Court reached the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Chief Justice S.R. Das wrote the judgment', points: [
      'Article 14 forbids class legislation, meaning laws that favour or burden a group for no good reason. Article 14 does not forbid reasonable classification.',
      'A line between groups is valid if two conditions are met. First, it must be "founded on an intelligible differentia", a clear difference between those inside the group and those left out.',
      'Second, that difference must have "a rational relation to the object sought to be achieved" by the law.',
      'The Commissions of Inquiry Act is valid. A policy guides the power to set up a commission, because the power can be used only for a definite matter of public importance.',
      'The notification is valid too. The commission can only inquire and report. The commission cannot decide anyone\'s rights.',
      'Only the words asking the commission to recommend action "as and by way of securing redress or punishment" went beyond the Act. The Court struck out those words, and the rest of the notification stood.'
    ] }
  ],
  principles: [
    'A law is presumed to be constitutional. The person who challenges it must show that it discriminates.',
    'A law may apply to a single person or company, if special circumstances make that person a class by itself.',
    'A law that picks out one person for special treatment without any reasonable basis is void.',
    'A law that gives the government a choice without any policy to guide it is void. But if the law states a policy and the government ignores it, only the government\'s action is struck down.',
    'So a law may single out even one company, as long as a real difference sets it apart and the difference serves the law\'s purpose.'
  ],
  legacy: [
    'The two-part test of a clear difference and a rational link is still applied in almost every Article 14 case.',
    'From E.P. Royappa (1973) onwards, the Court added a second test under Article 14. State action must not be arbitrary.'
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
  summary: 'Equality is the opposite of arbitrariness, so an arbitrary act of the State breaks Articles 14 and 16. On the facts, the transfer of Tamil Nadu\'s Chief Secretary was upheld.',
  background: [
    'Article 14 says the State shall not deny any person equality before the law or the equal protection of the laws.',
    'Until this case, the Court tested Article 14 mainly by asking whether a law drew a sensible line between groups. The test came from Anwar Ali Sarkar (1952) and Ram Krishna Dalmia (1958).',
    'Article 16 promises equal opportunity in government jobs.',
    'The Chief Secretary is the senior most civil servant in a State. Bad faith, called mala fides in law, means using a power for a dishonest or improper purpose.'
  ],
  question: [
    'Did moving the Chief Secretary of Tamil Nadu to other posts break Articles 14 and 16?',
    'Was he moved in bad faith?'
  ],
  facts: [
    'E.P. Royappa, an IAS officer, had been the Chief Secretary of Tamil Nadu since November 1969.',
    'In April 1971 he was moved to the new post of Deputy Chairman of the State Planning Commission. In June 1972 he was made Officer on Special Duty to revise the sales tax laws. Both posts were in the same grade as Chief Secretary.',
    'He argued that the new posts were lower in status and responsibility than the post of Chief Secretary.',
    'He also said the Chief Minister moved him out because of his firm stand on some matters, including law and order during the 1971 elections. He filed a petition under Article 32.'
  ],
  held: [
    { kind: 'majority', label: 'Justice P.N. Bhagwati, for himself and Justices Chandrachud and Krishna Iyer', points: [
      'Equality is a living idea. Old formulas cannot hold all of it.',
      '"From a positivistic point of view, equality is antithetic to arbitrariness." In plain words, an arbitrary act is unequal, so it breaks Articles 14 and 16.',
      'A person who alleges bad faith carries a heavy burden of proof. The petitioner did not meet it.',
      'The petition was dismissed. All five judges agreed on that result.'
    ] },
    { kind: 'concurring', label: 'Chief Justice A.N. Ray, for himself and Justice Palekar', points: [
      'The new posts were equal in status and responsibility to the post of Chief Secretary, and they carried the same pay.',
      'The charge of bad faith was not proved.'
    ] }
  ],
  principles: [
    'Article 14 now has two tests. One checks the line a law draws between groups. The other, from this case, checks whether State action is arbitrary.',
    'So Royappa lost his own case, but the reasoning changed Article 14. Any arbitrary act of the State can now be challenged as a denial of equality.'
  ],
  legacy: [
    'In Maneka Gandhi (1978), the Court applied the same idea to Article 21. A procedure that takes away liberty must be fair, just and reasonable, not arbitrary.',
    'In Ajay Hasia (1980) and later cases, arbitrariness became a settled test under Article 14.',
    'In Shayara Bano (2017), Navtej Singh Johar (2018) and Joseph Shine (2018), judges held that even a law can be struck down if it is "manifestly arbitrary", which means plainly unreasonable.'
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
  summary: 'Air India\'s rule that ended an air hostess\'s job on her first pregnancy was struck down as plainly arbitrary. So was the unguided power of the Managing Director to extend her service.',
  background: [
    'Article 14 says the State shall not deny any person equality before the law or the equal protection of the laws.',
    'Article 15 forbids discrimination on grounds such as religion, caste and sex. Article 16 promises equal opportunity in government jobs.',
    'Air India and Indian Airlines were corporations owned by the government, so they counted as "the State" and had to respect these rights.',
    'In E.P. Royappa (1973), the Court had held that an arbitrary act of the State breaks Article 14.'
  ],
  question: [
    'Did the service rules for air hostesses in Air India and Indian Airlines discriminate against women under Articles 14, 15 and 16?',
    'Were the rules on retirement at 35, on marriage and on first pregnancy arbitrary?'
  ],
  facts: [
    'Under Air India\'s rules, an air hostess retired at 35, or on marriage within four years of joining, or on her first pregnancy, whichever came first.',
    'The Managing Director could extend her service up to 45 at his discretion. Male Assistant Flight Pursers retired at 58.',
    'Indian Airlines had similar rules.',
    'Nergesh Meerza and other air hostesses challenged the rules. Their petition in the Bombay High Court was moved to the Supreme Court and heard with petitions under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'All three judges agreed (3:0). Justice S. Murtaza Fazal Ali wrote the judgment', points: [
      'Air hostesses and male Assistant Flight Pursers are separate classes. They are recruited differently and have different pay and promotions. So treating them differently is not discrimination on the ground of sex alone.',
      'Retirement at 35 was upheld.',
      'The bar on marriage within four years of joining was reasonable.',
      'Ending service on first pregnancy was "not only a callous and cruel act but an open insult to Indian womanhood". The rule was plainly unreasonable and arbitrary, and it broke Article 14.',
      'The Managing Director\'s unguided power to extend service was also arbitrary, and it was struck down.'
    ] }
  ],
  principles: [
    'Articles 14 and 15 work differently. Article 15 bars only discrimination on the ground of sex alone, but Article 14 strikes at any rule that is plainly arbitrary.',
    'So a rule can survive the ban on sex discrimination and still fall as arbitrary.'
  ],
  legacy: [
    'Later cases on women at work, such as Anuj Garg (2007), held that laws based on stereotypes about women break equality.'
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
  summary: 'All pensioners form one class. A better pension formula given only to those who retired after a chosen date was arbitrary, so the Court extended it to all pensioners from that date.',
  background: [
    'Article 14 says the State shall not deny any person equality before the law or the equal protection of the laws.',
    'Equality does not mean that every law must treat everyone the same. A law may treat a group differently, as long as there is a sensible reason for drawing the line where it is drawn.',
    'Governments often use a cut-off date: a new benefit applies to those who retire after the date, and not to those who retired before it.',
    'Article 41, one of the Directive Principles, asks the State to provide public help in old age. The 42nd Amendment (1976) added the word "socialist" to the Preamble.'
  ],
  question: [
    'The government gave a better pension formula only to those who retired on or after a chosen date in 1979. Did dividing pensioners by their date of retirement break Article 14?'
  ],
  facts: [
    'On 25 May 1979 the Ministry of Finance improved the formula for civil service pensions. The new formula applied only to those in service on 31 March 1979 who retired on or after that date.',
    'On 28 September 1979 the Ministry of Defence extended the new formula to the armed forces, for those who retired on or after 1 April 1979.',
    'People who had retired earlier got a lower pension. Their pension was worked out on a longer average of pay, without the new slab system, and under a lower ceiling.',
    'D.S. Nakara, a retired civil servant, a retired officer of the armed forces and a registered society of pensioners filed petitions under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Justice D.A. Desai wrote the judgment', points: [
      'Pensioners form one class. Dividing them by the date of retirement was "devoid of any rational principle". The division was arbitrary and broke Article 14.',
      'The words that limited the new formula to those who retired on or after the chosen date were struck down.',
      'All pensioners would have their pension worked out under the new formula from the chosen date. But no arrears were payable for the period before that date.',
      'Pension is a right, not a bounty or a gift from the government.'
    ] }
  ],
  principles: [
    'A cut-off date that splits one class must have a rational link to the purpose of the scheme. An arbitrary date breaks Article 14.',
    'Pension is deferred pay earned by long service, and a form of social security in old age.',
    'The Court read pensions together with Article 41 and the idea of a socialist welfare State in the Preamble.',
    'So the government could not give two people with the same service different pensions only because one retired a day later.'
  ],
  legacy: [
    'In Krishena Kumar v. Union of India (1990), the Court held that Nakara does not apply where people move to a different scheme, instead of getting a better formula within the same scheme.'
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
  summary: 'Section 497 of the Indian Penal Code made adultery a crime and treated a wife as her husband\'s property. The Court struck it down. Adultery is still a ground for divorce.',
  background: [
    'Section 497 of the Indian Penal Code (IPC) punished a man who had sex with another man\'s wife without the husband\'s consent. The wife was never punished, and she could not complain against her own husband.',
    'In Yusuf Abdul Aziz (1954), the Court had upheld Section 497. Article 15(3) allows special provisions for women, and the Court treated sparing the wife from punishment as one.',
    'In Shayara Bano (2017), the triple talaq case, Justice Nariman\'s opinion held that even a law can be struck down under Article 14 if it is manifestly arbitrary, meaning plainly unreasonable.',
    'In Puttaswamy (2017), the Court held that dignity and the freedom to make personal choices are part of Article 21.'
  ],
  question: [
    'Is Section 497 IPC, which made adultery a crime, valid under Articles 14, 15 and 21?',
    'Is Section 198(2) of the Code of Criminal Procedure, which let only the husband complain, valid?'
  ],
  facts: [
    'Section 497 punished a man who had sex with the wife of another man without that man\'s consent or connivance. The punishment was up to five years in prison.',
    'The wife could not be punished, even as an abettor. If her husband consented, there was no offence at all.',
    'Under Section 198(2) of the Code of Criminal Procedure (CrPC), only the husband could file a complaint. A wife could not complain against her husband.',
    'Joseph Shine filed a writ petition under Article 32 in 2017. Earlier benches had upheld Section 497, so five judges heard the case.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0) in four opinions: Chief Justice Misra for himself and Justice Khanwilkar, and Justices Nariman, Chandrachud and Indu Malhotra', points: [
      'Section 497 is struck down, because the section is manifestly arbitrary and breaks Article 14.',
      'The section treats a woman as the property of her husband. The section denies her dignity and her freedom over her own body, which are part of Article 21.',
      'Justice Chandrachud also held that the section rests on a stereotype about women and breaks Article 15.',
      'Section 198(2) CrPC is struck down to the extent that it applies to Section 497.',
      'Yusuf Abdul Aziz (1954), Sowmithri Vishnu (1985) and V. Revathi (1988), which had upheld Section 497, are overruled.',
      'Adultery is no longer a crime. But adultery can still be a civil wrong and a ground for divorce.'
    ] }
  ],
  principles: [
    'Manifest arbitrariness is a ground for striking down a law, not only an executive act.',
    'Laws that rest on stereotypes about women fail Article 15, even when they seem to protect women.',
    'Criminal law should not be used to punish private conduct between adults in a marriage.',
    'So the State may still let adultery end a marriage, but it may not send a person to prison for it.'
  ],
  legacy: [
    'The judgment built on Puttaswamy (2017) and Navtej Singh Johar (2018), which read dignity and personal choice into Article 21.',
    'In January 2023 the Court clarified that the judgment does not stop the armed forces from disciplining their personnel for adultery.',
    'The Bharatiya Nyaya Sanhita, 2023, which replaced the Indian Penal Code, does not make adultery an offence.'
  ],
  source: 'https://indiankanoon.org/doc/42184625/'
}

});
