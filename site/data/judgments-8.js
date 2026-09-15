/* Landmark judgments, rewritten in full. Batch 8: Articles 22 to 26.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. Each entry was checked against the full text
   of the judgment on Indian Kanoon: the date, the bench, the split, who wrote
   each opinion, the facts, the operative holding and any directions. The
   corrections to the short summaries that came out of the check: A.K. Roy was
   decided on 28 December 1981, not in 1982, and two judges dissented in part.
   Bandhua Mukti Morcha was decided on 16 December 1983, not in 1984. In the
   Durgah Committee case the Court did not hold that the Khadims were not a
   denomination: it assumed that they were, and held that Article 26 gave them
   no rights they never had. The M.C. Mehta child labour petition did not
   follow the Sivakasi accident: the petition came first, and the accident led
   the Court to set up a committee of advocates. The A.K. Roy text on Indian
   Kanoon breaks off before the final order, so the entry does not state how
   each petition was disposed of. Indian Kanoon lists Shirur Mutt under both
   16 March and 16 April 1954; the law reports and most sources give 16 April.
   The Sabarimala text breaks off before the separate opinions, which were
   confirmed from the Supreme Court Observer's summary. Its later history is
   stated as of September 2026, when the nine-judge reference was reserved but
   not decided.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'ak-roy-1982': {
  name: 'A.K. Roy v. Union of India',
  full: 'A.K. Roy and Others v. Union of India and Another',
  aka: 'The National Security Act case',
  decided: '28 December 1981',
  year: 1981,
  citation: 'AIR 1982 SC 710, (1982) 1 SCC 271',
  bench: 5,
  result: 'Act upheld, two judges partly dissenting',
  tags: ['Article 22', 'Preventive detention', 'National Security Act'],
  judges: 'Y.V. Chandrachud CJI, P.N. Bhagwati, A.C. Gupta, V.D. Tulzapurkar and D.A. Desai',
  summary: 'The National Security Act, 1980 was upheld. The Court laid down safeguards for detenus, and held that it could not order the Government to bring the 44th Amendment\'s changes to Article 22 into force.',
  question: [
    'Is an ordinance "law" under Article 21, so that it can take away personal liberty?',
    'Can the Court order the Central Government to bring into force Section 3 of the 44th Amendment, which changes the rules for Advisory Boards under Article 22?',
    'Are the grounds of detention in the National Security Act too vague?',
    'What rights does a detenu have before the Advisory Board and during detention?'
  ],
  facts: [
    'The President promulgated the National Security Ordinance on 23 September 1980. Parliament replaced it with the National Security Act, 1980 on 27 December 1980.',
    'The law allows preventive detention. It applied to the whole of India except Jammu and Kashmir.',
    'A.K. Roy, a Marxist member of Parliament, was detained under the Ordinance by the District Magistrate, Dhanbad. The ground was activities prejudicial to public order.',
    'The 44th Amendment received the President\'s assent on 30 April 1979. Its Section 3 would require an Advisory Board to be set up on the recommendation of the Chief Justice of the High Court, with a serving High Court judge as chairman.',
    'Section 1(2) of the Amendment left the Central Government to decide when each part would come into force. The Government had not brought Section 3 into force.',
    'Roy and others challenged the Ordinance and the Act under Article 32.'
  ],
  held: [
    { kind: 'majority', label: 'Majority opinion by Chief Justice Y.V. Chandrachud, for himself and Justices Bhagwati and Desai', points: [
      'An ordinance is law. It has the same force as an Act of Parliament, so it can take away personal liberty under Article 21.',
      'The Constitution expressly allows laws of preventive detention. Such a law must still meet the requirements of Part III, including Article 22.',
      'Section 1(2) of the 44th Amendment is valid. The Court cannot issue a mandamus to make the Government bring Section 3 into force. Until it does, Article 22(4) applies in its original form.',
      'Detention for acting against "the maintenance of supplies and services essential to the community" is too vague. No one can be detained on this ground unless those supplies and services are made known to the public in advance, by a law, order or notification.',
      'Grounds such as the defence of India, the security of India and public order are not void for vagueness. Courts must give them a narrow meaning.',
      'A detenu has no right to a lawyer before the Advisory Board, and no right to cross-examine witnesses. But if the Government appears through a lawyer, the detenu must be allowed one too.',
      'A detenu may be helped before the Board by a friend who is not a lawyer, and may give evidence in reply to the allegations. The Board\'s hearings need not be public.',
      'A detenu should normally be held near home. The family must be told in writing of the detention and of the place of detention.',
      'Detenus must be kept apart from convicts. They may wear their own clothes, eat their own food, and meet their family at least once a week.'
    ] },
    { kind: 'dissent', label: 'Partly dissenting (Justices A.C. Gupta and V.D. Tulzapurkar)', points: [
      'The Central Government had to bring Section 3 of the 44th Amendment into force within a reasonable time. Two and a half years was too long, and Section 1(2) could not let the executive block a constitutional amendment.',
      'Justice Gupta also held that an ordinance is not "law" under Article 21, because it is temporary. Justice Tulzapurkar agreed with the majority on this point.'
    ] }
  ],
  principles: [
    'Preventive detention is allowed, but only within the safeguards of Article 22 and a fair procedure under Article 21.',
    'A vague ground of detention cannot be used unless the public is told in advance what conduct it covers.',
    'Where Parliament has left the date of an amendment to the Government, the Court cannot fix that date.'
  ],
  legacy: [
    'Section 3 of the 44th Amendment has not been brought into force. Article 22(4) still applies in its original form.',
    'The National Security Act, 1980 remains in force.'
  ],
  source: 'https://indiankanoon.org/doc/875590/'
},

'pudr-asiad-workers-1982': {
  name: 'People\'s Union for Democratic Rights v. Union of India',
  full: 'People\'s Union for Democratic Rights and Others v. Union of India and Others',
  aka: 'The Asiad workers case',
  decided: '18 September 1982',
  citation: 'AIR 1982 SC 1473, 1983 SCR (1) 456',
  bench: 2,
  result: 'Unanimous, 2:0',
  tags: ['Article 23', 'Forced labour', 'Minimum wages'],
  judges: 'P.N. Bhagwati and Baharul Islam',
  summary: 'Paying a worker less than the minimum wage is forced labour under Article 23. Articles 23 and 24 bind private persons, and a government that engages contractors must make sure they obey the labour laws.',
  question: [
    'Can an organisation bring a case for workers who cannot come to court themselves?',
    'Does paying less than the minimum wage amount to "forced labour" under Article 23?',
    'Do Articles 23 and 24 apply against private contractors?',
    'Are the government bodies that engaged the contractors responsible when the contractors break the labour laws?'
  ],
  facts: [
    'Many construction projects were under way in Delhi for the Asian Games of 1982. They included flyovers, stadiums, swimming pools, hotels and the Asian Games Village.',
    'The Union of India, the Delhi Administration and the Delhi Development Authority gave the work to contractors. The workers were brought from Rajasthan, Uttar Pradesh and Orissa by middlemen called jamadars.',
    'The minimum wage was Rs. 9.25 a day. The jamadars kept Rs. 1 a day from each worker, so the workers got Rs. 8.25. Women workers got only Rs. 7.',
    'The People\'s Union for Democratic Rights had three social scientists study the workers\' conditions. On the basis of their report, it wrote a letter to Justice Bhagwati. The Court treated the letter as a writ petition.',
    'The petition said that several labour laws, and Article 24, were being broken on these projects.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (2:0), judgment by Justice P.N. Bhagwati', points: [
      'Where people cannot come to court because of poverty or disability, any member of the public acting in good faith can move the Court for them. The petitioners had standing.',
      'Articles 17, 23 and 24 are enforceable against everyone, not only the State. Article 23 protects a person against private employers too.',
      'The "force" in forced labour can be physical force or legal compulsion. It can also be "compulsion arising from hunger and poverty, want and destitution".',
      'Work done for less than the minimum wage is forced labour under Article 23. The worker can ask the Court to order payment of the minimum wage.',
      'Construction work is hazardous employment. Under Article 24, no child below 14 can be employed in it, even though the Employment of Children Act, 1938 did not list construction.',
      'The Union of India, the Delhi Administration and the Delhi Development Authority, as principal employers, must make sure their contractors obey the labour laws. The minimum wage must be paid to the workers directly, with no deduction by the jamadars.'
    ] }
  ],
  principles: [
    'Forced labour includes work done out of economic need for less than the minimum wage.',
    'Some fundamental rights, such as those in Articles 17, 23 and 24, bind private persons.',
    'A person acting in good faith can bring a case for those who cannot reach the Court.'
  ],
  legacy: [
    'In Sanjit Roy v. State of Rajasthan (1983), the Court applied the same reasoning to famine relief work paid below the minimum wage.',
    'The case is a leading authority on public interest litigation and on the reach of Article 23.'
  ],
  source: 'https://indiankanoon.org/doc/496663/'
},

'bandhua-mukti-morcha-1984': {
  name: 'Bandhua Mukti Morcha v. Union of India',
  full: 'Bandhua Mukti Morcha v. Union of India and Others',
  aka: 'The bonded labour case',
  decided: '16 December 1983',
  year: 1983,
  citation: 'AIR 1984 SC 802, 1984 SCR (2) 67',
  bench: 3,
  result: 'Unanimous, 3:0',
  tags: ['Article 23', 'Bonded labour', 'Life with dignity'],
  judges: 'P.N. Bhagwati, R.S. Pathak and A.N. Sen',
  summary: 'The right to live with human dignity under Article 21 protects workers from exploitation. Where a labourer is made to do forced labour, the Court presumes that the labourer is bonded, and the State must enforce the welfare laws.',
  question: [
    'Can a letter to the Court about bonded labourers be treated as a writ petition under Article 32?',
    'Can the Court appoint commissioners to find the facts?',
    'What must the State do for labourers held in bondage in stone quarries?'
  ],
  facts: [
    'Bandhua Mukti Morcha, an organisation that works to free bonded labourers, wrote a letter to Justice Bhagwati.',
    'It said that many labourers from different parts of India worked in stone quarries in Faridabad district, Haryana, in inhuman conditions. Many of them were bonded labourers.',
    'The Court treated the letter as a writ petition and appointed commissioners to inquire.',
    'The commissioners found air full of dust, no clean drinking water, poor shelter, no medical care or schools, and workers who were not allowed to leave.',
    'The State of Haryana objected that the petition was not maintainable.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (3:0), main judgment by Justice P.N. Bhagwati', points: [
      'Anyone can move the Supreme Court when a fundamental right is violated. For poor and disadvantaged people, a member of the public acting in good faith can do so even by writing a letter.',
      'The Court has power under Article 32 to appoint commissioners to gather facts. Their reports are prima facie evidence.',
      'Article 21 gives everyone the right to live with human dignity, free from exploitation. This right draws on Articles 39(e), 39(f), 41 and 42.',
      'At the least, this right includes protection of the health and strength of workers, protection of children against abuse, educational facilities, just and humane conditions of work, and maternity relief.',
      'Where a labourer is shown to be doing forced labour, the Court presumes that the labourer is a bonded labourer. The employer or the State may disprove this.',
      'The Central Government and the State of Haryana must enforce the welfare laws. These include the Bonded Labour System (Abolition) Act, 1976, the Minimum Wages Act, 1948, the Mines Act, 1952, the Contract Labour Act, 1970 and the Inter-State Migrant Workmen Act, 1979.',
      'The Court gave detailed directions. Among them, Vigilance Committees were to be set up under the Bonded Labour Act, and the employers, not the workers, were to bear the cost of explosives.'
    ] },
    { kind: 'concurring', label: 'Concurring opinions (Justices R.S. Pathak and A.N. Sen)', points: [
      'Justice Pathak agreed that a letter can be treated as a petition. But it should normally be verified by an affidavit before notice is issued, and the procedure must follow natural justice.',
      'Justice Sen held that the Court\'s procedural rules cannot limit its jurisdiction under Article 32. The power to appoint commissions is inherent in Article 32.'
    ] }
  ],
  principles: [
    'The right to life under Article 21 includes the right to live with human dignity, free from exploitation.',
    'Forced labour is presumed to be bonded labour unless shown otherwise.',
    'In public interest cases, the Court may use flexible procedures, such as acting on letters and appointing fact-finding commissions.'
  ],
  legacy: [
    'In Neeraja Chaudhary v. State of Madhya Pradesh (1984), the Court held that released bonded labourers must also be rehabilitated.',
    'The idea of life with human dignity from this case is relied on in many later cases on labour and welfare rights.'
  ],
  source: 'https://indiankanoon.org/doc/595099/'
},

'rev-stainislaus-1977': {
  name: 'Rev. Stainislaus v. State of Madhya Pradesh',
  full: 'Rev. Stainislaus v. State of Madhya Pradesh and Others',
  aka: 'The anti-conversion laws case',
  decided: '17 January 1977',
  citation: '(1977) 1 SCC 677, AIR 1977 SC 908',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 25', 'Right to propagate', 'Conversion'],
  judges: 'A.N. Ray CJI, M.H. Beg, R.S. Sarkaria, P.N. Shinghal and Jaswant Singh',
  summary: 'The right to propagate religion under Article 25 does not include a right to convert another person. State laws that punish conversion by force, fraud or allurement are valid.',
  question: [
    'Does the right to "propagate" religion under Article 25(1) include the right to convert others?',
    'Did the States of Madhya Pradesh and Orissa have the power to make laws against forcible conversion?'
  ],
  facts: [
    'The Orissa Freedom of Religion Act, 1967 and the Madhya Pradesh Dharma Swatantraya Adhiniyam, 1968 banned conversion by force, fraud or allurement, and made it an offence.',
    'Rev. Stainislaus was prosecuted under the Madhya Pradesh Act. The Madhya Pradesh High Court upheld the Act.',
    'On 24 October 1972 the Orissa High Court struck down the Orissa Act. It held that the Act dealt with religion, which only Parliament could regulate under Entry 97 of the Union List, and that Article 25 protects conversion.',
    'Appeals from both High Courts were heard together by five judges.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Chief Justice A.N. Ray', points: [
      '"Propagate" means to transmit or spread one\'s religion by explaining its tenets. It does not mean the right to convert another person.',
      '"There can therefore be no such thing as a fundamental right to convert any person to one\'s own religion."',
      'Article 25 gives the same freedom of conscience to the followers of every religion. Converting a person by force, fraud or allurement interferes with that person\'s freedom of conscience.',
      'The Acts aim to prevent disturbances of public order. So they fall under Entry 1 of the State List, and the States had the power to make them. They do not regulate religion under Entry 97 of the Union List.',
      'The Madhya Pradesh appeals were dismissed. The Orissa appeals were allowed, and the Orissa High Court\'s judgment was set aside.'
    ] }
  ],
  principles: [
    'Article 25 protects the spreading of religion, not the conversion of others.',
    'Laws against conversion by force, fraud or allurement are laws for public order, which the States can make.'
  ],
  legacy: [
    'Several other States have since passed laws against conversion by force, fraud or allurement. Their validity rests on this judgment.'
  ],
  source: 'https://indiankanoon.org/doc/1308071/'
},

'durgah-committee-1961': {
  name: 'Durgah Committee, Ajmer v. Syed Hussain Ali',
  full: 'The Durgah Committee, Ajmer and Another v. Syed Hussain Ali and Others',
  aka: 'The Ajmer Durgah case',
  decided: '17 March 1961',
  citation: 'AIR 1961 SC 1402, (1962) 1 SCR 383',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 26', 'Religious denomination', 'Essential practices'],
  judges: 'P.B. Gajendragadkar, A.K. Sarkar, K.N. Wanchoo, K.C. Das Gupta and N. Rajagopala Ayyangar',
  summary: 'Article 26 protects only the rights that a religious denomination already had. It does not create new ones. The Durgah Khawaja Saheb Act, 1955 was upheld, and the Court warned that practices based on superstition may not be protected.',
  question: [
    'Did the Durgah Khawaja Saheb Act, 1955 violate the rights of the Khadims and of the Chishtia Sufis under Articles 25 and 26?',
    'Did it violate the Khadims\' right to property under Articles 19(1)(f) and 31?'
  ],
  facts: [
    'The Durgah of Khwaja Moin-ud-din Chishti at Ajmer is a shrine visited by pilgrims of many faiths.',
    'The Khadims are the hereditary servants of the shrine. They receive offerings from pilgrims.',
    'The Durgah Khawaja Saheb Act, 1955 put the administration of the Durgah endowment under a Committee of Hanafi Muslims. It also provided that offerings for the Durgah could be received only by the Nazim or an authorised agent.',
    'Nine Khadims challenged the Act in the Rajasthan High Court under Article 226. The High Court struck down several provisions.',
    'The Durgah Committee appealed to the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Justice P.B. Gajendragadkar', points: [
      'The Court assumed, without deciding, that the Chishtia Sufis are a section of a religious denomination and that the Khadims represent it.',
      'Articles 26(c) and 26(d) "do not create rights in any denomination or its section which it never had". They only protect the rights it already had.',
      'For centuries the Durgah had been managed by mutawallis appointed by the rulers of the time, not by the Chishtia sect. So the Act took away no right protected by Article 26.',
      'Only practices that are essential and integral to a religion are protected. Practices that come from superstition may be "extraneous and unessential accretions" to religion, and a claim to protect them must be carefully examined.',
      'Offerings made generally for the Durgah had always belonged to the Durgah. The Act did not touch offerings made directly to the Khadims, so it did not violate their right to property.',
      'The Act does not violate Article 25. It regulates only how the Khadims carry out their duties, and the Committee must act according to the tenets of the Chishti saint.',
      'The appeal was allowed, and the Khadims\' writ petition was dismissed.'
    ] }
  ],
  principles: [
    'Article 26 guarantees that a denomination keeps the rights it already had. It does not create new ones.',
    'Courts may examine whether a practice is essential to a religion. Superstitious additions to a religion may not be protected.'
  ],
  legacy: [
    'Its caution about superstitious practices is often cited with Shirur Mutt (1954) when courts apply the essential religious practices test.'
  ],
  source: 'https://indiankanoon.org/doc/1262157/'
},

'mc-mehta-child-labour-1996': {
  name: 'M.C. Mehta v. State of Tamil Nadu',
  full: 'M.C. Mehta v. State of Tamil Nadu and Others',
  aka: 'The child labour case',
  decided: '10 December 1996',
  citation: '(1996) 6 SCC 756, AIR 1997 SC 699',
  bench: 3,
  result: 'Unanimous, 3:0',
  tags: ['Article 24', 'Child labour', 'Rehabilitation'],
  judges: 'Kuldip Singh, B.L. Hansaria and S.B. Majmudar',
  summary: 'Children in hazardous jobs must be taken out of work and sent to school. The offending employer must pay Rs. 20,000 for each child into a welfare fund, and the Government must find a job for an adult in the family or contribute Rs. 5,000.',
  question: [
    'How should the ban in Article 24 on employing children in hazardous work be enforced?',
    'What should happen to children taken out of such work, and to their families?'
  ],
  facts: [
    'M.C. Mehta, a lawyer, filed a petition under Article 32 about children working in the match and fireworks factories of Sivakasi, Tamil Nadu.',
    'In an order of 31 October 1990, the Court noted that on 31 December 1985 there were 221 registered match factories in Sivakasi. They employed 27,338 workers, of whom 2,941 were children.',
    'After an accident in a cracker factory in which 39 people died, a committee of advocates was set up to inquire.',
    'The Court later widened the case to deal with child labour in hazardous industries across the country.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (3:0), judgment by Justice B.L. Hansaria', points: [
      'Making matches and fireworks is hazardous work. Under Article 24 and the Child Labour (Prohibition and Regulation) Act, 1986, children cannot be employed in it.',
      'Governments must survey child labour within six months. Hazardous industries come first, such as matches in Sivakasi, diamond polishing in Surat, glass in Firozabad and locks in Aligarh.',
      'An employer who employs a child in breach of the Act must pay Rs. 20,000 for each child into a Child Labour Rehabilitation-cum-Welfare Fund.',
      'The Government must try to find a job for an adult member of the child\'s family, in place of the child. If it cannot, it must deposit Rs. 5,000 for each child in the Fund.',
      'Where no job is given, the family is paid the income earned on the amount deposited for the child. The job or the payment stops if the child is not sent to school.',
      'A child taken out of work must be given education in a suitable institution.',
      'In a non-hazardous job, a child may work no more than four to six hours a day. The child must get at least two hours of education a day, paid for by the employer.',
      'The Secretary, Ministry of Labour, Government of India must report compliance to the Court within one year.'
    ] }
  ],
  principles: [
    'The ban on child labour in hazardous work must be backed by rehabilitation and education, not only by punishment.',
    'Articles 39(e), 39(f), 41, 45 and 47 guide how Article 24 is enforced.'
  ],
  legacy: [
    'The 86th Amendment (2002) added Article 21A, which makes free and compulsory education a fundamental right for children aged 6 to 14.',
    'An amendment to the Child Labour Act in 2016 banned the employment of children below 14 in all occupations, with limited exceptions such as helping in a family enterprise.'
  ],
  source: 'https://indiankanoon.org/doc/212829/'
},

'shirur-mutt-1954': {
  name: 'Commissioner, Hindu Religious Endowments, Madras v. Sri Lakshmindra Thirtha Swamiar of Sri Shirur Mutt',
  aka: 'The Shirur Mutt case',
  decided: '16 April 1954',
  citation: 'AIR 1954 SC 282, 1954 SCR 1005',
  bench: 7,
  result: 'Unanimous, 7:0',
  tags: ['Article 26', 'Essential practices', 'Religious denomination'],
  judges: 'M.C. Mahajan CJI, B.K. Mukherjea, S.R. Das, Vivian Bose, Ghulam Hasan, N.H. Bhagwati and T.L. Venkatarama Aiyar',
  summary: 'What is an essential part of a religion is decided by the doctrines of that religion. A religious denomination has the right to manage its affairs in matters of religion, and the State can regulate only the secular side. Several sections of the Madras Act were struck down.',
  question: [
    'What does "religion" mean in Articles 25 and 26, and what is a "religious denomination"?',
    'How far can the State control the administration of a Math and its property?',
    'Did the Madras Hindu Religious and Charitable Endowments Act, 1951 violate Articles 19(1)(f), 25 and 26?',
    'Was the annual contribution charged under Section 76 of the Act a fee or a tax?'
  ],
  facts: [
    'The Shirur Math is one of eight Maths at Udipi founded by Madhwacharya. The respondent became its head, the Mathadhipati, in 1919.',
    'By 1946 the Math was heavily in debt. The Hindu Religious Endowments Board directed the Swami to appoint a manager.',
    'In September 1950 the Swami dismissed the agent. In November 1950 the Board began proceedings to frame a scheme for the administration of the Math.',
    'The Madras Hindu Religious and Charitable Endowments Act, 1951 then replaced the old law. It gave a Commissioner wide powers over religious institutions.',
    'The Swami challenged the Act. On 13 December 1951 the Madras High Court held many of its provisions invalid and stopped the Commissioner from proceeding. The Commissioner appealed.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (7:0), judgment by Justice B.K. Mukherjea', points: [
      'Religion is not only a matter of belief. It can include rituals, observances, ceremonies and modes of worship that are integral parts of the religion.',
      '"What constitutes the essential part of a religion is primarily to be ascertained with reference to the doctrines of that religion itself."',
      'A religious denomination is a body of persons with a common faith and a common organisation, known by a distinctive name. The followers of Madhwacharya are a religious denomination.',
      'Under Article 26(b), a denomination has a fundamental right to manage its own affairs in matters of religion. The legislature cannot take this away. Under Article 26(d), the administration of its property can be regulated by law.',
      'The head of a Math is not a mere trustee. The office carries a beneficial interest in the property, which is "property" under Article 19(1)(f).',
      'Sections 21, 30(2), 31, 55, 56 and 63 to 69 of the Act were struck down. They included powers to enter any part of the Math without limit, to control how its surplus income was spent, and to appoint a manager or take over its administration.',
      'Other challenged sections, such as the Commissioner\'s general power of supervision and the rules on budgets, accounts and alienation of property, were upheld.',
      'The annual contribution under Section 76(1) was a tax, not a fee. The money went into general revenue and had no link to the cost of any service. The State Legislature had no power to impose it as a tax, so Section 76(1) was void.'
    ] }
  ],
  principles: [
    'The essential religious practices test: a practice that is an essential part of a religion, judged by its own doctrines, is protected.',
    'The State may regulate the secular activities connected with religion, but not matters of religion.',
    'A fee must be linked to a service rendered. A levy that goes into general revenue is a tax.'
  ],
  legacy: [
    'In S.P. Mittal v. Union of India (1983), its definition of a religious denomination was developed into a three-part test. The Court applied that test in Sabarimala (2018).',
    'In Durgah Committee (1961), the Court added that practices based on superstition may not be protected.',
    'The scope of the essential religious practices test is one of the questions referred to a nine-judge bench in the Sabarimala review.'
  ],
  source: 'https://indiankanoon.org/doc/1430396/'
},

'sabarimala-2018': {
  name: 'Indian Young Lawyers Association v. State of Kerala',
  aka: 'The Sabarimala case',
  decided: '28 September 2018',
  citation: '(2019) 11 SCC 1',
  bench: 5,
  result: 'Majority 4:1',
  status: 'partly',
  tags: ['Article 25', 'Temple entry', 'Essential practices'],
  judges: 'Dipak Misra CJI, R.F. Nariman, A.M. Khanwilkar, D.Y. Chandrachud and Indu Malhotra',
  summary: 'The bar on women aged 10 to 50 entering the Sabarimala temple was struck down by 4:1. The devotees of Lord Ayyappa are not a separate denomination, and the exclusion is not an essential religious practice. Wider questions from the case are now before a nine-judge bench.',
  question: [
    'Does excluding women aged 10 to 50 from the Sabarimala temple violate Articles 14, 15, 17 and 25?',
    'Is the exclusion an essential religious practice protected by Articles 25 and 26?',
    'Are the devotees of Lord Ayyappa a separate religious denomination?',
    'Is Rule 3(b) of the Kerala Hindu Places of Public Worship (Authorisation of Entry) Rules, 1965 valid?'
  ],
  facts: [
    'The Sabarimala temple in Kerala is dedicated to Lord Ayyappa. By custom, women aged 10 to 50 were not allowed to enter it.',
    'Rule 3(b) of the Kerala Hindu Places of Public Worship (Authorisation of Entry) Rules, 1965 allowed women to be kept out of a place of public worship at times when custom did not allow them to enter.',
    'The Kerala High Court had upheld the restriction in S. Mahendran v. Travancore Devaswom Board (AIR 1993 Ker 42).',
    'The Indian Young Lawyers Association filed a writ petition in the Supreme Court in 2006.',
    'On 13 October 2017 the case was referred to a Constitution Bench, with five questions.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (4 judges): Chief Justice Misra for himself and Justice Khanwilkar, with Justices Nariman and Chandrachud in separate opinions', points: [
      'The devotees of Lord Ayyappa are Hindus. They do not form a separate religious denomination.',
      'Excluding women aged 10 to 50 is not an essential religious practice.',
      '"Women of any age group have as much a right as men to visit and enter a temple" to practise their religion under Article 25(1).',
      'Rule 3(b) is unconstitutional. It is also beyond the power to make rules under the 1965 Act.',
      'The "morality" in Article 25(1) means constitutional morality, not the morality of one section of society.'
    ] },
    { kind: 'concurring', label: 'Concurring opinion (Justice D.Y. Chandrachud)', points: [
      'Excluding women because of menstruation is a form of untouchability. Article 17 is not limited to caste, and it forbids such exclusion.',
      'Menstrual status has no bearing on the rights the Constitution gives to women.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice Indu Malhotra)', points: [
      'The Sabarimala temple has the character of a religious denomination, with a right under Article 26(b) to manage its own affairs in matters of religion.',
      'The right to practise one\'s faith under Article 25 cannot be overridden by a claim to equality under Article 14. Constitutional morality requires the Court to balance these rights.',
      'Untouchability under Article 17 refers to caste. It does not extend to discrimination based on gender.',
      'Rule 3(b) is valid.'
    ] }
  ],
  principles: [
    'Under Article 25(1), women have the same right as men to enter a public temple and worship.',
    'A practice is protected only if it is essential to the religion. The exclusion of women of a certain age from Sabarimala was held not to be essential.'
  ],
  legacy: [
    'On 14 November 2019, a five-judge bench kept the review petitions pending by 3:2 and referred wider questions to a larger bench. Justices Nariman and Chandrachud dissented. The 2018 judgment was not stayed.',
    'On 10 February 2020, a nine-judge bench led by Chief Justice S.A. Bobde held that a reference could be made in review proceedings, and it framed the questions to be decided.',
    'The referred questions include the scope of the essential religious practices test, the meaning of constitutional morality, and the relation between Articles 25 and 26.',
    'A nine-judge bench led by Chief Justice Surya Kant heard the reference from 7 April 2026. It reserved judgment on 14 May 2026.',
    'The reference also affects other cases, such as the entry of Muslim women into mosques, the rights of Parsi women married outside the community, and female genital mutilation among Dawoodi Bohras.'
  ],
  source: 'https://indiankanoon.org/doc/163639357/'
}

});
