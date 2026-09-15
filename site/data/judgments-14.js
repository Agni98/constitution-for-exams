/* Landmark judgments, rewritten in full. Batch 14: legislative lists, taxes,
   trade and property, Articles 245 to 300A.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. Kesoram Industries, Hoechst Pharmaceuticals,
   Mohit Minerals, Atiabari Tea and K.T. Plantation were checked against the
   full text on Indian Kanoon, including the operative conclusions and the
   alignment of opinions. The Privy Council's judgment in Prafulla Kumar
   Mukherjee is not on Indian Kanoon; it was checked against published
   summaries, and its members are not listed. The corrections to the short
   summaries that came out of the check: Kesoram Industries was decided by
   4:1, not 3:2. Atiabari Tea was decided on 16 August 1960, not in 1961, and
   Chief Justice Sinha dissented.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'prafulla-kumar-mukherjee-1947': {
  name: 'Prafulla Kumar Mukherjee v. Bank of Commerce Ltd., Khulna',
  aka: 'The pith and substance case',
  decided: '11 February 1947',
  citation: 'AIR 1947 PC 60',
  bench: 5,
  result: 'Act upheld by the Privy Council',
  tags: ['Article 246', 'Pith and substance', 'Legislative lists'],
  summary: 'A law is judged by its pith and substance, that is, its true nature. If in substance it falls within a legislature\'s own list, it is valid even though it incidentally touches a subject in another list. The Bengal Money-lenders Act, 1940 was upheld.',
  question: [
    'Did the Bengal Money-lenders Act, 1940 fall within the provincial subject of money-lending, or did it invade the federal subject of promissory notes?',
    'Is a law invalid because it incidentally affects a subject outside the legislature\'s power?'
  ],
  facts: [
    'The case arose under the Government of India Act, 1935, which divided law-making powers between the federal and provincial legislatures in lists.',
    'Money-lending was a provincial subject. Promissory notes and banking were federal subjects.',
    'The Bengal Money-lenders Act, 1940 limited the amount, including interest, that a money-lender could recover from a borrower.',
    'A borrower had taken a loan on a promissory note. The lending bank argued that the Act was invalid in so far as it affected promissory notes.'
  ],
  held: [
    { kind: 'unanimous', label: 'Judgment of the Judicial Committee of the Privy Council', points: [
      'To decide which list a law belongs to, the court must look at its pith and substance, meaning its true nature and character.',
      'In pith and substance, the Bengal Money-lenders Act dealt with money-lending, which was a provincial subject.',
      'A law is not invalid merely because it incidentally affects a subject outside the legislature\'s power, such as promissory notes.',
      'The extent of the invasion into the other list is relevant. It helps to show whether the law is really about its own subject or about the other one.',
      'Some overlap between the lists is unavoidable. The Act was valid.'
    ] }
  ],
  principles: [
    'Pith and substance: a law is classified by its true nature, and incidental effects on a subject in another list do not make it invalid.'
  ],
  legacy: [
    'Indian courts apply the same doctrine under Article 246 and the Seventh Schedule, for example in Hoechst Pharmaceuticals (1983).'
  ],
  source: 'https://blog.ipleaders.in/prafulla-kumar-mukherjee-vs-bank-of-commerce-ltd-1947/'
},

'kesoram-industries-2004': {
  name: 'State of West Bengal v. Kesoram Industries Ltd.',
  full: 'State of West Bengal v. Kesoram Industries Ltd. and Others',
  aka: 'The coal and tea cess case',
  decided: '15 January 2004',
  citation: '(2004) 10 SCC 201',
  bench: 5,
  result: 'Majority 4:1',
  tags: ['Seventh Schedule', 'Taxing entries', 'Cess'],
  judges: 'V.N. Khare CJI, R.C. Lahoti, B.N. Agrawal, S.B. Sinha and A.R. Lakshmanan',
  summary: 'West Bengal\'s cesses on coal-bearing land and on tea estates were upheld. Taxation is a separate subject in the legislative lists, the measure of a tax does not decide its nature, and royalty is not a tax.',
  question: [
    'Were West Bengal\'s cesses on coal-bearing land, tea estates and minor minerals valid State levies?',
    'Did Parliament\'s laws on mines and minerals and on tea take away the State\'s power to levy them?',
    'Is royalty a tax?'
  ],
  facts: [
    'West Bengal levied a cess on coal-bearing land, measured by the coal produced. It also levied a rural employment cess on tea estates, measured by the green tea leaves produced.',
    'The companies argued that the cesses were really taxes on mineral rights or on production, in fields covered by Parliament\'s laws on mines and minerals and on tea.',
    'The Calcutta High Court struck down the cess on coal. The State appealed, and other challenges to the cesses were heard with the appeals.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (4 judges): Justice R.C. Lahoti, for himself, Chief Justice Khare and Justices Agrawal and Lakshmanan', points: [
      'In the legislative lists, taxation is a distinct subject. It is not included in the general subjects of legislation, and the taxing entries are listed separately.',
      'The measure by which a tax is calculated does not decide its nature. A levy on land may be measured by the minerals or produce the land yields.',
      'The cess on coal-bearing land, measured by the quantity of coal produced, is a valid State levy. It does not become a tax on royalty or a duty of excise.',
      'Parliament\'s declaration of control over mines and minerals did not take away the State\'s power to levy these cesses.',
      'Royalty is not a tax. The statement in India Cement (1989) that royalty is a tax was a typographical error.',
      'The State\'s appeals in the coal matters were allowed, and the challenges to the tea cess and the other levies were dismissed.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice S.B. Sinha)', points: [
      'Mineral-bearing land cannot be treated as a separate unit for a tax on land. A tax on land must be levied on land as a unit.',
      'The Tea Act was made by Parliament under entries in the Union List, so the State had no power over tea. The levies were unconstitutional.'
    ] }
  ],
  principles: [
    'The taxing powers in the Seventh Schedule are separate from the regulatory powers.',
    'The measure of a tax is different from its subject.'
  ],
  legacy: [
    'In Mineral Area Development Authority v. Steel Authority of India (2024), nine judges held by 8:1 that royalty is not a tax, and that States can tax mineral rights and mineral-bearing land.'
  ],
  source: 'https://indiankanoon.org/doc/879535/'
},

'hoechst-pharmaceuticals-1983': {
  name: 'Hoechst Pharmaceuticals Ltd. v. State of Bihar',
  full: 'Hoechst Pharmaceuticals Ltd. and Another v. State of Bihar and Others',
  aka: 'The repugnancy case',
  decided: '6 May 1983',
  citation: '(1983) 4 SCC 45, AIR 1983 SC 1019',
  bench: 3,
  result: 'Unanimous, 3:0',
  tags: ['Article 254', 'Repugnancy', 'Pith and substance'],
  judges: 'A.P. Sen, E.S. Venkataramiah and R.B. Misra',
  summary: 'A Bihar surcharge on sales tax, which large dealers could not pass on to buyers, was upheld. Repugnancy under Article 254 arises only between laws on the same Concurrent List subject, and a State tax law is tested by its pith and substance.',
  question: [
    'Was a surcharge on dealers with a turnover above Rs. 5 lakh, which they could not collect from buyers, valid?',
    'Was the bar on passing on the surcharge repugnant to the Drugs (Price Control) Order, 1979, made under a Central law?'
  ],
  facts: [
    'Section 5(1) of the Bihar Finance Act, 1981 levied a surcharge on dealers whose gross turnover in a year exceeded Rs. 5 lakh. Section 5(3) barred these dealers from collecting the surcharge from buyers.',
    'The Drugs (Price Control) Order, 1979, made under the Essential Commodities Act, 1955, fixed the prices of most medicines.',
    'Hoechst Pharmaceuticals, Glaxo Laboratories and other drug makers argued that the bar on passing on the surcharge conflicted with the price control order. The Patna High Court upheld the law.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (3:0), judgment by Justice A.P. Sen', points: [
      'The surcharge is in the nature of a sales tax. The State had power to levy it under Entry 54 of the State List, and to bar dealers from passing it on.',
      'Repugnancy under Article 254(1) arises only where a Central law and a State law occupy the same field in the Concurrent List and directly conflict.',
      'The entries in the three Lists are "fields of legislation", not powers. The State\'s power to tax sales under Entry 54 of the State List is not subject to Parliament\'s power to regulate essential commodities under Entry 33 of the Concurrent List.',
      'The right test is whether Section 5(3), in its pith and substance, is a law under Entry 54 of the State List. It is.',
      'There was no conflict with the price control order. The surcharge cuts into the dealers\' profits, but the prices paid by consumers stay the same.',
      'Taxing larger dealers more heavily is not arbitrary. It relates the tax to the capacity to pay.',
      'The appeals were dismissed.'
    ] }
  ],
  principles: [
    'Repugnancy under Article 254 is limited to conflicts on Concurrent List subjects.',
    'A tax law is classified by its pith and substance, and incidental effects on another field do not make it invalid.'
  ],
  legacy: [
    'The case is a standard authority on repugnancy and on the separation of taxing and regulatory powers.'
  ],
  source: 'https://indiankanoon.org/doc/703764/'
},

'mohit-minerals-2022': {
  name: 'Union of India v. Mohit Minerals Pvt. Ltd.',
  aka: 'The GST Council case',
  decided: '19 May 2022',
  bench: 3,
  result: 'Unanimous, 3:0',
  tags: ['Article 246A', 'Article 279A', 'GST Council'],
  judges: 'D.Y. Chandrachud, Surya Kant and Vikram Nath',
  summary: 'The recommendations of the GST Council have persuasive value. They do not bind Parliament and the State legislatures. The Court also struck down the levy of IGST on ocean freight from importers who already pay tax on the whole import.',
  question: [
    'Are the recommendations of the GST Council under Article 279A binding on the Union and the States?',
    'Could IGST be levied on an Indian importer, under reverse charge, for ocean freight on goods imported on CIF terms?'
  ],
  facts: [
    'The 101st Amendment (2016) introduced the Goods and Services Tax. Article 246A gave Parliament and the State legislatures power to make laws on GST, and Article 279A created the GST Council.',
    'Notifications under the IGST Act, 2017 made Indian importers liable, under reverse charge, to pay IGST on the ocean freight charged by foreign shipping lines on goods imported on CIF terms.',
    'Mohit Minerals, an importer, challenged the levy. The Gujarat High Court struck it down, and the Union of India appealed.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (3:0), judgment by Justice D.Y. Chandrachud', points: [
      'The recommendations of the GST Council are not binding on the Union and the States. Parliament intended them to have only persuasive value, to foster cooperative federalism.',
      'Article 279A does not begin with a non obstante clause, and Article 246A is not made subject to it. Parliament and the State legislatures have simultaneous power to make laws on GST.',
      'Indian federalism is a dialogue in which the Union and the States may both cooperate and contest. Treating the Council\'s recommendations as binding would disrupt fiscal federalism.',
      'When the Government makes rules under the CGST and IGST Acts, it is bound by the Council\'s recommendations. The recommendations do not bind the legislatures in making primary laws.',
      'An import on CIF terms is a composite supply of goods together with services such as transport and insurance. The importer already pays IGST on it, so a separate levy on the transport service violates Section 8 of the CGST Act.',
      'The Union\'s appeals were dismissed.'
    ] }
  ],
  principles: [
    'The GST Council\'s recommendations guide, but do not bind, the legislatures.',
    'A composite supply is taxed as a whole, not split into separately taxed parts.'
  ],
  legacy: [
    'The judgment is a leading statement on fiscal federalism under the GST system.'
  ],
  source: 'https://indiankanoon.org/doc/98511521/'
},

'atiabari-tea-1961': {
  name: 'Atiabari Tea Co. Ltd. v. State of Assam',
  full: 'Atiabari Tea Co. Ltd. v. State of Assam and Others',
  aka: 'The Assam goods tax case',
  decided: '16 August 1960',
  year: 1960,
  citation: 'AIR 1961 SC 232, (1961) 1 SCR 809',
  bench: 5,
  result: 'Majority 4:1',
  status: 'partly',
  tags: ['Article 301', 'Freedom of trade', 'Article 304(b)'],
  judges: 'B.P. Sinha CJI, P.B. Gajendragadkar, K.N. Wanchoo, K.C. Das Gupta and J.C. Shah',
  summary: 'A tax that directly and immediately restricts the movement of goods is a restriction on the freedom of trade under Article 301. Assam\'s tax on goods carried by road and inland waterways was struck down, because the procedure in Article 304(b) had not been followed.',
  question: [
    'Can a tax be a restriction on the freedom of trade, commerce and intercourse under Article 301?',
    'Was the Assam Taxation (on Goods Carried by Roads or Inland Waterways) Act, 1954 valid without the President\'s sanction under Article 304(b)?'
  ],
  facts: [
    'The Assam Taxation (on Goods Carried by Roads or Inland Waterways) Act, 1954 taxed goods, including tea, carried by road or inland waterway in Assam.',
    'The Bill was introduced without the President\'s previous sanction, and the President never assented to the Act.',
    'Tea producers challenged the Act as a restriction on the freedom of trade under Article 301. The Assam High Court upheld the Act.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (3 judges): Justice P.B. Gajendragadkar, for himself and Justices Wanchoo and Das Gupta', points: [
      'Article 301 means that the flow of trade must run smooth and unhampered by restrictions, at the boundaries of States or at points inside them.',
      'Only restrictions that directly and immediately impede the free movement of trade are hit by Article 301. Indirect or remote effects are not.',
      'Taxes can be such restrictions. A tax on the carriage of goods puts a direct and immediate restraint on the movement of trade.',
      'A State can impose such a tax only by a law passed in the manner laid down in Article 304(b).',
      'The Act had not complied with Article 304(b), so it was void. The appeals and writ petitions were allowed.'
    ] },
    { kind: 'concurring', label: 'Concurring opinion (Justice J.C. Shah)', points: [
      'The Act infringed the freedom of trade under Article 301. It was invalid because the President\'s previous sanction under Article 304(b) had not been obtained, and the President had not assented to it later.'
    ] },
    { kind: 'dissent', label: 'Dissent (Chief Justice B.P. Sinha)', points: [
      'Part XIII of the Constitution does not bring taxation simpliciter within Article 301. All the grounds of challenge failed, and the appeals should have been dismissed.'
    ] }
  ],
  principles: [
    'Freedom of trade under Article 301 protects the free movement of trade throughout India.',
    'A tax that directly and immediately restricts that movement must meet the conditions of Article 304(b).'
  ],
  legacy: [
    'In Automobile Transport (1962), seven judges held that regulatory measures and compensatory taxes are not restrictions under Article 301.',
    'In Jindal Stainless (2016), nine judges held that taxes are not covered by Article 301 in this way, and overruled Atiabari to that extent.'
  ],
  source: 'https://indiankanoon.org/doc/514162/'
},

'kt-plantation-2011': {
  name: 'K.T. Plantation Pvt. Ltd. v. State of Karnataka',
  full: 'K.T. Plantation Pvt. Ltd. and Another v. State of Karnataka',
  aka: 'The Roerich estate case',
  decided: '9 August 2011',
  citation: '(2011) 9 SCC 1',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 300A', 'Right to property', 'Compensation'],
  judges: 'S.H. Kapadia CJI, Mukundakam Sharma, K.S. Radhakrishnan, Swatanter Kumar and Anil R. Dave',
  summary: 'Under Article 300A, a person can be deprived of property only for a public purpose, and the right to compensation is built into the Article. A law depriving a person of property is open to judicial review. The Karnataka law acquiring the Roerich estate was upheld.',
  question: [
    'Does Article 300A require that a law depriving a person of property be for a public purpose and provide compensation?',
    'Was the Karnataka law acquiring the Roerich estate valid?'
  ],
  facts: [
    'The Roerich estate near Bangalore was associated with Svetoslav Roerich and Devika Rani Roerich. It included 468 acres of linaloe plantation and artworks.',
    'K.T. Plantation Pvt. Ltd. claimed rights in part of the estate.',
    'The Karnataka legislature passed the Roerich and Devikarani Roerich (Acquisition and Transfer) Act, 1996. It received the President\'s assent on 15 November 1996 and came into force on 21 November 1996.',
    'The company argued that the Act violated Article 300A. No separate compensation was fixed for the plantation, and after the liabilities were paid little or nothing might be left.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0)', points: [
      'Public purpose is a precondition for depriving a person of property under Article 300A.',
      'Article 300A does not mention compensation, but the right to claim compensation is built into it. When a person is deprived of property, the State must justify both the public purpose and the compensation.',
      'A law depriving a person of property is open to judicial review on these grounds.',
      'A law is not struck down merely because the Court thinks it is unjust. But the rule of law can be used, in the rarest of cases, to strike down laws that are tyrannical or violate the basic structure.',
      'The Acquisition Act had received the President\'s assent and was protected by Article 31A, so it could not be challenged under Articles 14 and 19.',
      'The appeals were dismissed. The compensation fixed by the Act was to be paid to the rightful claimants, and the land was to be used only for the purpose for which it was acquired.'
    ] }
  ],
  principles: [
    'The right to property under Article 300A requires a public purpose and carries a right to compensation.',
    'Laws that take away property are subject to the rule of law and to judicial review.'
  ],
  legacy: [
    'In Kolkata Municipal Corporation v. Bimal Kumar Shah (2024), the Court set out seven procedural sub-rights that form part of the right to property under Article 300A.'
  ],
  source: 'https://indiankanoon.org/doc/1524072/'
},

'automobile-transport-1962': {
  name: 'Automobile Transport (Rajasthan) Ltd. v. State of Rajasthan',
  full: 'Automobile Transport (Rajasthan) Ltd. v. State of Rajasthan and Others',
  aka: 'The compensatory tax case',
  decided: '9 April 1962',
  citation: 'AIR 1962 SC 1406, (1963) 1 SCR 491',
  bench: 7,
  result: 'Majority 4:3',
  status: 'partly',
  tags: ['Article 301', 'Compensatory taxes', 'Freedom of trade'],
  judges: 'S.K. Das, J.L. Kapur, A.K. Sarkar, K. Subba Rao, M. Hidayatullah, N. Rajagopala Ayyangar and J.R. Mudholkar',
  summary: 'Regulatory measures, and compensatory taxes charged for the use of trading facilities such as roads, do not restrict the freedom of trade under Article 301. Rajasthan\'s tax on motor vehicles was upheld as a compensatory tax.',
  question: [
    'Is a tax on motor vehicles using the roads of a State a restriction on the freedom of trade under Article 301?',
    'Must such a tax meet the conditions of Article 304(b), including the President\'s previous sanction?'
  ],
  facts: [
    'Section 4 of the Rajasthan Motor Vehicles Taxation Act, 1951 required the owner of every motor vehicle used or kept for use in Rajasthan to pay a tax.',
    'The appellants ran stage carriages in Ajmer State. Some of their routes crossed strips of Rajasthan territory.',
    'The tax authorities demanded tax from them for the period from 1 April 1951 to 31 March 1954. The Bill had not received the President\'s previous sanction, and the President had not assented to the Act later.',
    'The Rajasthan High Court dismissed their writ petitions on 9 August 1957. Because of the questions raised by Atiabari Tea (1960), the appeals were heard by seven judges.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (4 judges): Justice S.K. Das, for himself and Justices Kapur and Sarkar, with Justice Subba Rao concurring', points: [
      'The freedom of trade under Article 301 must be understood in the setting of an ordinary society and a federal Constitution. It allows some degree of regulatory control by the Union or the States.',
      'Regulatory measures, and compensatory taxes for the use of trading facilities such as roads and bridges, do not hamper trade but facilitate it. They are not restrictions under Article 301, and need not meet Article 304(b).',
      'The restrictions in Part XIII apply to taxing laws too, not only to laws made under the entries on trade and commerce.',
      'The Rajasthan tax was really a charge for the use of the roads in the State. Basing it on passenger or loading capacity was only a way of measuring the compensation.',
      'Justice Subba Rao agreed with the result. Article 301 protects the free movement of trade, and regulations that create the conditions for that movement promote it.',
      'The appeals were dismissed.'
    ] },
    { kind: 'dissent', label: 'Dissent (Justice M. Hidayatullah, for himself and Justices Ayyangar and Mudholkar)', points: [
      'The tax was on trade and on the movement of trade. It created a barrier between States that trade could not cross without heavy payment.',
      'It was not a fair recompense for the wear and tear of roads. It was a restriction that Article 301 forbids.',
      'The procedure in Article 304(b) had not been followed, so the tax was beyond the Constitution. The appeals should have been allowed.'
    ] }
  ],
  principles: [
    'Compensatory taxes and regulatory measures do not restrict the freedom of trade.',
    'Taxing laws are subject to Part XIII of the Constitution.'
  ],
  legacy: [
    'In Jindal Stainless (2016), nine judges rejected the compensatory tax theory as having no juristic basis, and overruled this judgment to that extent.'
  ],
  source: 'https://indiankanoon.org/doc/304499/'
},

'jindal-stainless-2016': {
  name: 'Jindal Stainless Ltd. v. State of Haryana',
  full: 'Jindal Stainless Ltd. and Another v. State of Haryana and Others',
  aka: 'The entry tax case',
  decided: '11 November 2016',
  citation: '(2017) 12 SCC 1',
  bench: 9,
  result: 'Majority 7:2',
  tags: ['Article 301', 'Article 304', 'Entry tax'],
  judges: 'T.S. Thakur CJI, A.K. Sikri, S.A. Bobde, Shiva Kirti Singh, N.V. Ramana, R. Banumathi, A.M. Khanwilkar, D.Y. Chandrachud and Ashok Bhushan',
  summary: 'A tax that does not discriminate is not a restriction on the freedom of trade under Article 301, so States can levy entry tax on goods from other States. The compensatory tax theory was rejected, and earlier judgments were overruled to that extent.',
  question: [
    'Can a tax be a restriction on the freedom of trade, commerce and intercourse under Article 301?',
    'Is the compensatory tax theory valid?',
    'When does a State tax discriminate against goods from other States under Article 304(a)?'
  ],
  facts: [
    'Many States levied entry tax on goods brought into a local area for consumption, use or sale.',
    'Traders and manufacturers challenged these laws as restrictions on the freedom of inter-State trade under Article 301.',
    'Earlier judgments had held that a tax could restrict trade unless it was compensatory. In 2010 a five-judge bench referred the questions to a larger bench, and nine judges heard them.'
  ],
  held: [
    { kind: 'majority', label: 'Majority (7 judges), led by Chief Justice T.S. Thakur', points: [
      'The word "free" in Article 301 does not mean free from taxation. A tax that does not discriminate is not a restriction on the freedom of trade.',
      'Only taxes that discriminate against goods from other States are hit, through Article 304(a). Clauses (a) and (b) of Article 304 are to be read separately.',
      'Article 304(a) forbids hostile discrimination, not mere differentiation. Incentives and set-offs given for a limited time to develop backward areas do not violate it.',
      'States may design their tax laws so that the burden on goods from other States and on goods produced within the State falls equally.',
      'The compensatory tax theory, developed in Automobile Transport (1962) and modified in Jindal Stainless (2006), has no juristic basis and is rejected. Atiabari, Automobile Transport and later decisions were overruled to the extent they relied on it.',
      'Whether each State\'s entry tax law discriminates, and related questions, were left to regular benches.'
    ] },
    { kind: 'concurring', label: 'Separate opinion (Justice R. Banumathi)', points: [
      'Justice Banumathi held that entry tax which passes the test of Article 304(a) does not violate Article 301, and that Jindal Stainless (2006) was wrongly decided.'
    ] },
    { kind: 'dissent', label: 'Dissents (Justices D.Y. Chandrachud and Ashok Bhushan)', points: [
      'Justice Bhushan disagreed with the majority on whether taxes can restrict the freedom of trade. A tax that does so must be routed through Article 304(b), including the President\'s sanction. Justice Bhushan agreed that the compensatory tax theory does not fit Part XIII.',
      'Justice Chandrachud dissented in an opinion that Justice Bhushan described as close to his own. Among other points, Justice Chandrachud held that a "local area" for entry tax under Entry 52 of the State List cannot be the entire State.'
    ] }
  ],
  principles: [
    'Taxes do not restrict the freedom of trade unless they discriminate against goods from other States.',
    'The compensatory tax theory is no longer the test under Part XIII.'
  ],
  legacy: [
    'Regular benches then decided the validity of individual State entry tax laws. Most entry taxes were replaced by the Goods and Services Tax from 2017.'
  ],
  source: 'https://indiankanoon.org/doc/141946357/'
},

'in-re-cauvery-water-disputes-tribunal-1991': {
  name: 'In re Cauvery Water Disputes Tribunal',
  full: 'In re Cauvery Water Disputes Tribunal (Special Reference No. 1 of 1991)',
  aka: 'The Cauvery Reference',
  decided: '22 November 1991',
  citation: 'AIR 1992 SC 522, 1991 Supp (2) SCR 497',
  bench: 5,
  result: 'Unanimous opinion',
  tags: ['Article 262', 'Inter-State water disputes', 'Article 143'],
  judges: 'Ranganath Misra CJI, K.N. Singh, A.M. Ahmadi, Kuldip Singh and P.B. Sawant',
  summary: 'Karnataka\'s ordinance to override the Cauvery Tribunal\'s interim order was beyond the State\'s legislative competence and unconstitutional. The Tribunal can grant interim relief, and its interim order becomes binding once the Central Government publishes it.',
  question: [
    'Was the Karnataka Cauvery Basin Irrigation Protection Ordinance, 1991 constitutional?',
    'Was the Tribunal\'s interim order a report and decision under Section 5(2) of the Inter-State Water Disputes Act, 1956, which must be published under Section 6?',
    'Can a Water Disputes Tribunal grant interim relief?'
  ],
  facts: [
    'The Central Government constituted the Cauvery Water Disputes Tribunal on 2 June 1990 under the Inter-State Water Disputes Act, 1956.',
    'On 25 June 1991 the Tribunal passed an interim order. Karnataka was to release water from its reservoirs so that 205 TMC of water reached Tamil Nadu\'s Mettur reservoir each year.',
    'On 25 July 1991 the Governor of Karnataka promulgated the Karnataka Cauvery Basin Irrigation Protection Ordinance. It was to have effect despite any order of a court or tribunal, except a final decision published under the Act.',
    'On 27 July 1991 the President referred three questions to the Supreme Court under Article 143.'
  ],
  held: [
    { kind: 'unanimous', label: 'Opinion of the Court, delivered by Justice P.B. Sawant', points: [
      'The Ordinance, since replaced by an Act, is beyond the legislative competence of the State and is unconstitutional.',
      'Adjudication of inter-State river water disputes falls under Article 262 and the law made by Parliament under it. A State cannot legislate to decide such a dispute for itself.',
      'By the Ordinance, Karnataka took on the power to decide alone how much water it would use, whatever the harm to another State. This is against the rule of law, and the Ordinance affected the rights of people in Tamil Nadu, outside Karnataka.',
      'The Tribunal\'s interim order of 25 June 1991 is a report and decision under Section 5(2) of the Act. The Central Government must publish it under Section 6 to make it effective and binding.',
      'A Water Disputes Tribunal can grant interim relief when the Central Government refers a request for such relief to it. Whether it can do so without such a reference did not arise.',
      'The Court did not decide whether its opinion on a Presidential Reference binds all courts. It noted that such an opinion is entitled to due weight and is normally followed.'
    ] }
  ],
  principles: [
    'A State cannot override the decision of an inter-State water tribunal by its own law.',
    'Inter-State water disputes are resolved under Article 262 through tribunals set up under Parliament\'s law.'
  ],
  legacy: [
    'The Tribunal gave its final award on 5 February 2007. In State of Karnataka v. State of Tamil Nadu (2018), the Supreme Court modified the award, gave Karnataka an additional 14.75 TMC, and placed drinking water needs first.'
  ],
  source: 'https://indiankanoon.org/doc/1945849/'
},

'kolkata-municipal-corporation-v-bimal-kumar-shah-2024': {
  name: 'Kolkata Municipal Corporation v. Bimal Kumar Shah',
  full: 'Kolkata Municipal Corporation and Another v. Bimal Kumar Shah and Others',
  aka: 'The seven sub-rights of property case',
  decided: '16 May 2024',
  bench: 2,
  result: 'Unanimous, 2:0',
  tags: ['Article 300A', 'Right to property', 'Acquisition procedure'],
  judges: 'P.S. Narasimha and Aravind Kumar',
  summary: 'A power to acquire property and a provision for compensation are not enough. The "authority of law" in Article 300A also requires a fair procedure, which the Court set out as seven sub-rights. The Kolkata Municipal Corporation\'s claimed acquisition was invalid.',
  question: [
    'Does Section 352 of the Kolkata Municipal Corporation Act, 1980 give the Corporation a power of compulsory acquisition?',
    'What procedure does Article 300A require before a person is deprived of property?'
  ],
  facts: [
    'A property on Narikeldanga North Road in Kolkata belonged to Birinchi Bihari Shah.',
    'In 2009 the Corporation tried to take possession of it. In 2010 it removed Shah\'s name from its records as owner and entered its own name.',
    'The Corporation claimed that it had acquired the property under Section 352 of the Kolkata Municipal Corporation Act, 1980.',
    'A single judge and a Division Bench of the Calcutta High Court held that Section 352 gives no power of compulsory acquisition. The Corporation appealed.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (2:0), judgment by Justice P.S. Narasimha', points: [
      'Section 352 only lets the Municipal Commissioner identify land needed for public purposes. It is not a power of compulsory acquisition.',
      'Section 363, on compensation, does not create a power to acquire. A compulsory acquisition must follow the procedure in Section 537, which applies the land acquisition law.',
      'A power to acquire, together with fair compensation, does not by itself make an acquisition valid. A fair procedure is part of the "authority of law" required by Article 300A.',
      'The right to property under Article 300A includes seven sub-rights: the right to notice, the right to be heard, the right to a reasoned decision, the duty to acquire only for a public purpose, the right to fair compensation, the right to an efficient and expeditious process, and the right to conclusion of the proceedings.',
      'Failure to follow these procedures violates the right to property. Section 352 provides none of them, so it cannot be a valid power of acquisition.',
      'The appeal was dismissed with costs of Rs. 5 lakh.'
    ] }
  ],
  principles: [
    'Deprivation of property under Article 300A needs a fair procedure, not just a power to acquire and compensation.',
    'The seven procedural sub-rights are the real content of the right to property.'
  ],
  legacy: [
    'Courts now test compulsory acquisitions of private property against these seven sub-rights.'
  ],
  source: 'https://indiankanoon.org/doc/11565482/'
}

});
