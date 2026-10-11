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
   Chief Justice Sinha dissented. Automobile Transport was decided by 4:3.
   Indian Kanoon lists Chief Justice Sinha on that bench, but the Chief Justice
   did not sit in the case. The Cauvery entry is the 1991 Presidential
   Reference on the Karnataka ordinance, not a later order of the tribunal.

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
  summary: 'A law is judged by its "pith and substance", meaning its true nature. If in substance it falls within the legislature\'s own list, it is valid even though it touches a subject in another list along the way. The Bengal Money-lenders Act, 1940 was upheld.',
  background: [
    'Before independence, the Government of India Act, 1935 divided law making between the central (federal) legislature and the provincial legislatures, in lists. The Constitution later followed the same plan.',
    'The Privy Council in London was India\'s highest court of appeal until 1949.',
    'Money-lending was a provincial subject. Promissory notes, written promises to pay a sum of money, and banking were federal subjects. Many laws touch more than one list, so courts need a test to decide which list a law really belongs to.'
  ],
  question: [
    'Did the Bengal Money-lenders Act, 1940 fall within the provincial subject of money-lending, or did it invade the federal subject of promissory notes?',
    'Is a law invalid because it touches, along the way, a subject outside the legislature\'s power?'
  ],
  facts: [
    'The Bengal Money-lenders Act, 1940 limited the amount, including interest, that a money-lender could recover from a borrower.',
    'A borrower had taken a loan on a promissory note. The lending bank argued that the Act was invalid in so far as it affected promissory notes.'
  ],
  held: [
    { kind: 'unanimous', label: 'The judgment of the Judicial Committee of the Privy Council', points: [
      'To decide which list a law belongs to, the court must look at its pith and substance, meaning its true nature and character.',
      'In pith and substance, the Bengal Money-lenders Act dealt with money-lending, which was a provincial subject.',
      'A law is not invalid merely because it touches, along the way, a subject outside the legislature\'s power, such as promissory notes.',
      'How far the law reaches into the other list still matters. The extent helps to show whether the law is really about its own subject or about the other one.',
      'Some overlap between the lists cannot be avoided. The Act was valid.'
    ] }
  ],
  principles: [
    'Pith and substance: a law is classified by its true nature, and side effects on a subject in another list do not make it invalid.',
    'So a money-lending law stays a money-lending law, even if it affects the promissory notes on which loans are given.'
  ],
  legacy: [
    'Indian courts apply the same test under Article 246 and the Seventh Schedule, for example in Hoechst Pharmaceuticals (1983).'
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
  summary: 'West Bengal\'s cesses on coal-bearing land and on tea estates were upheld. The power to tax is a separate subject in the lists, the way a tax is measured does not decide what it is, and royalty is not a tax.',
  background: [
    'The Seventh Schedule divides law making between Parliament and the States in three lists. Parliament alone makes laws on the Union List, the States alone on the State List, and both on the Concurrent List (Article 246).',
    'The power to tax is listed in separate entries from the power to regulate. For example, the State List lets States tax land (Entry 49) and mineral rights (Entry 50), while the Union List lets Parliament regulate mines (Entry 54).',
    'A cess is a tax raised for a particular purpose. Royalty is the payment that a mining company makes to the owner of the minerals, usually the State, for each tonne it digs out.',
    'In India Cement (1989), seven judges had said that royalty is a tax. If so, States could not add further levies on minerals.'
  ],
  question: [
    'Were West Bengal\'s cesses on coal-bearing land, tea estates and minor minerals valid State taxes?',
    'Did Parliament\'s laws on mines and minerals and on tea take away the State\'s power to levy them?',
    'Is royalty a tax?'
  ],
  facts: [
    'West Bengal levied a cess on coal-bearing land, measured by the coal produced. The State also levied a rural employment cess on tea estates, measured by the green tea leaves produced.',
    'The companies argued that the cesses were really taxes on mineral rights or on production, in fields covered by Parliament\'s laws on mines and minerals and on tea.',
    'The Calcutta High Court struck down the cess on coal. The State appealed, and other challenges to the cesses were heard with the appeals.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of four: Justice R.C. Lahoti, for himself, Chief Justice Khare and Justices Agrawal and Lakshmanan', points: [
      'In the lists, taxation is a subject of its own. The power to tax is not included in the general subjects, and the taxing entries are listed separately.',
      'The way a tax is calculated does not decide what the tax is. A tax on land may be measured by the minerals or produce that the land yields.',
      'The cess on coal-bearing land, measured by the amount of coal produced, is a valid State tax. The cess does not turn into a tax on royalty or a duty of excise.',
      'Parliament\'s declaration of control over mines and minerals did not take away the State\'s power to levy these cesses.',
      'Royalty is not a tax. The statement in India Cement that royalty is a tax was a typing error.',
      'The State\'s appeals in the coal matters were allowed, and the challenges to the tea cess and the other levies were dismissed.'
    ] },
    { kind: 'dissent', label: 'Justice S.B. Sinha, in dissent', points: [
      'Mineral-bearing land cannot be treated as a separate unit for a tax on land. A tax on land must be levied on land as a unit.',
      'Parliament made the Tea Act under entries in the Union List, so the State had no power over tea. The levies were unconstitutional.'
    ] }
  ],
  principles: [
    'The taxing powers in the Seventh Schedule are separate from the powers to regulate.',
    'How a tax is measured is different from what is taxed.',
    'So a State may tax its land and measure the tax by what the land produces, even where Parliament regulates the industry.'
  ],
  legacy: [
    'In Mineral Area Development Authority v. Steel Authority of India (2024), nine judges held by 8 votes to 1 that royalty is not a tax, and that States can tax mineral rights and mineral-bearing land.'
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
  summary: 'A Bihar surcharge on sales tax, which large dealers could not pass on to buyers, was upheld. A clash under Article 254 arises only between laws on the same Concurrent List subject, and a State tax law is judged by its pith and substance.',
  background: [
    'The Seventh Schedule divides law making between Parliament and the States in three lists. Parliament alone makes laws on the Union List, the States alone on the State List, and both on the Concurrent List (Article 246).',
    'Under Article 254, if a State law and a Central law on a Concurrent List subject clash, the Central law wins. Lawyers call a clash of this kind repugnancy.',
    'In Prafulla Kumar Mukherjee (1947), the Privy Council held that a law is judged by its pith and substance, its true nature, and not by its side effects.',
    'The Drugs (Price Control) Order, 1979, made under the Essential Commodities Act, 1955, fixed the prices of most medicines.'
  ],
  question: [
    'Bihar levied a surcharge on dealers with sales of more than Rs. 5 lakh a year, and barred them from collecting it from buyers. Was the surcharge valid?',
    'Did the bar on passing on the surcharge clash with the Central price control order?'
  ],
  facts: [
    'Section 5(1) of the Bihar Finance Act, 1981 levied a surcharge on dealers whose gross turnover in a year exceeded Rs. 5 lakh. Section 5(3) barred these dealers from collecting the surcharge from buyers.',
    'Hoechst Pharmaceuticals, Glaxo Laboratories and other drug makers argued that the bar clashed with the price control order. The Patna High Court upheld the law.'
  ],
  held: [
    { kind: 'unanimous', label: 'All three judges agreed (3:0). Justice A.P. Sen wrote the judgment', points: [
      'The surcharge is a kind of sales tax. The State could levy it under Entry 54 of the State List, and could bar dealers from passing it on.',
      'Repugnancy under Article 254(1) arises only where a Central law and a State law cover the same Concurrent List subject and directly clash.',
      'The entries in the three lists are "fields of legislation", not powers. The State\'s power to tax sales under Entry 54 of the State List is not subject to Parliament\'s power over essential goods under Entry 33 of the Concurrent List.',
      'The right test is whether Section 5(3), in its pith and substance, is a law under Entry 54 of the State List. The Court held that it is.',
      'There was no clash with the price control order. The surcharge cuts into the dealers\' profits, but the prices paid by buyers stay the same.',
      'Taxing larger dealers more heavily is not arbitrary. The tax is linked to the ability to pay.',
      'The appeals were dismissed.'
    ] }
  ],
  principles: [
    'Repugnancy under Article 254 is limited to clashes on Concurrent List subjects.',
    'A tax law is classified by its pith and substance, and side effects on another field do not make it invalid.',
    'So the drug makers had to bear the surcharge out of their profits, while patients still paid the controlled price.'
  ],
  legacy: [
    'The case is a standard authority on repugnancy and on the separation of taxing and regulating powers.'
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
  summary: 'The GST Council\'s recommendations guide Parliament and the State legislatures, but do not bind them. The Court also struck down a separate GST on ocean freight charged to importers who already pay tax on the whole import.',
  background: [
    'The Goods and Services Tax (GST), brought in by the 101st Amendment (2016), replaced many separate Central and State taxes from 2017.',
    'Article 246A gives both Parliament and the State legislatures the power to make GST laws. Article 279A created the GST Council, made up of the Union Finance Minister and the finance ministers of the States, to recommend rates and rules.',
    'IGST, or Integrated GST, is charged on supplies between States and on imports. Under reverse charge, the buyer pays the tax instead of the seller.',
    'In a CIF import, the price paid covers the cost of the goods, their insurance and the freight, which is the cost of shipping them.'
  ],
  question: [
    'Are the recommendations of the GST Council under Article 279A binding on the Union and the States?',
    'Could IGST be charged to an Indian importer, under reverse charge, on the ocean freight for goods imported on CIF terms?'
  ],
  facts: [
    'Notices under the IGST Act, 2017 made Indian importers liable, under reverse charge, to pay IGST on the ocean freight charged by foreign shipping lines on goods imported on CIF terms.',
    'Mohit Minerals, an importer, challenged the levy. The Gujarat High Court struck it down, and the Union of India appealed.'
  ],
  held: [
    { kind: 'unanimous', label: 'All three judges agreed (3:0). Justice D.Y. Chandrachud wrote the judgment', points: [
      'The recommendations of the GST Council do not bind the Union and the States. Parliament meant them only to persuade, to encourage cooperative federalism.',
      'Article 279A does not begin with a non obstante clause, a clause that overrides everything else. Article 246A is not made subject to it. So Parliament and the State legislatures share the power to make GST laws.',
      'Indian federalism is a dialogue in which the Union and the States may both cooperate and disagree. Treating the Council\'s recommendations as binding would upset the balance of financial powers.',
      'When the government makes rules under the GST Acts, the Council\'s recommendations bind it. The recommendations do not bind the legislatures in making the laws themselves.',
      'An import on CIF terms is one combined supply of goods together with services such as transport and insurance. The importer already pays IGST on it, so a separate tax on the transport breaks Section 8 of the CGST Act.',
      'The Union\'s appeals were dismissed.'
    ] }
  ],
  principles: [
    'The GST Council\'s recommendations guide the legislatures but do not bind them.',
    'A combined supply is taxed as a whole, not split into separately taxed parts.',
    'So GST did not make the States give up their power to tax. Each legislature keeps the final say over its own GST law.'
  ],
  legacy: [
    'The judgment is a leading statement on the sharing of financial powers under GST.'
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
  summary: 'A tax that directly and immediately holds up the movement of goods restricts the freedom of trade under Article 301. Assam\'s tax on goods carried by road and inland waterway was struck down, because the procedure in Article 304(b) had not been followed.',
  background: [
    'Article 301 says that trade, commerce and movement throughout India shall be free. Article 304(a) lets a State tax goods from other States, but only as it taxes its own goods. Article 304(b) lets a State impose reasonable limits on trade in the public interest, but only by a Bill introduced with the President\'s prior permission.',
    'The aim of Part XIII was to make India one economic unit, so that goods could move between and within States without barriers.'
  ],
  question: [
    'Can a tax restrict the freedom of trade, commerce and movement under Article 301?',
    'Was the Assam Taxation (on Goods Carried by Roads or Inland Waterways) Act, 1954 valid without the President\'s permission under Article 304(b)?'
  ],
  facts: [
    'The 1954 Act taxed goods, including tea, carried by road or inland waterway in Assam.',
    'The Bill was introduced without the President\'s prior permission, and the President never approved the Act afterwards.',
    'Tea producers challenged the Act as a restriction on the freedom of trade under Article 301. The Assam High Court upheld the Act.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of three: Justice P.B. Gajendragadkar, for himself and Justices Wanchoo and Das Gupta', points: [
      'Article 301 means that the flow of trade must run smooth and free of restrictions, at the borders of States or at points inside them.',
      'Only restrictions that directly and immediately hold up the free movement of trade are caught by Article 301. Indirect or remote effects are not.',
      'Taxes can be such restrictions. A tax on carrying goods directly and immediately holds up the movement of trade.',
      'A State can impose such a tax only by a law passed in the way that Article 304(b) lays down.',
      'The Act had not followed Article 304(b), so it was void. The appeals and writ petitions were allowed.'
    ] },
    { kind: 'concurring', label: 'Justice J.C. Shah, agreeing in a separate opinion', points: [
      'The Act broke the freedom of trade under Article 301. The Act was invalid because the President\'s prior permission under Article 304(b) had not been obtained, and the President had not approved it afterwards.'
    ] },
    { kind: 'dissent', label: 'Chief Justice B.P. Sinha, in dissent', points: [
      'Part XIII of the Constitution does not bring an ordinary tax within Article 301. All the grounds of challenge failed, and the appeals should have been dismissed.'
    ] }
  ],
  principles: [
    'The freedom of trade under Article 301 protects the free movement of trade throughout India.',
    'A tax that directly and immediately restricts that movement must meet the conditions of Article 304(b).',
    'So in 1960 the Court treated a tax on moving goods as a barrier to trade. Later benches narrowed this view, and in 2016 nine judges set it aside.'
  ],
  legacy: [
    'In Automobile Transport (1962), seven judges held that regulatory measures and compensatory taxes are not restrictions under Article 301.',
    'In Jindal Stainless (2016), nine judges held that taxes are not caught by Article 301 in this way, and overruled Atiabari to that extent.'
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
  summary: 'Under Article 300A, a person can be deprived of property only for a public purpose, and the right to compensation is built into the Article. Courts can review a law that takes property. The Karnataka law taking over the Roerich estate was upheld.',
  background: [
    'The 44th Amendment (1978) removed the right to property from the fundamental rights. Article 300A now says only that no person shall be deprived of property except by "authority of law".',
    'Article 300A does not say whether the purpose must be public, or whether compensation must be paid. The question was whether those conditions are implied.',
    'Article 31A protects certain laws, such as laws taking over estates, from challenge under Articles 14 and 19, if a State law has received the President\'s assent.'
  ],
  question: [
    'Does Article 300A require that a law taking a person\'s property be for a public purpose and provide compensation?',
    'Was the Karnataka law taking over the Roerich estate valid?'
  ],
  facts: [
    'The Roerich estate near Bangalore belonged to the painter Svetoslav Roerich and his wife, the actress Devika Rani Roerich. The estate included 468 acres of linaloe plantation and artworks.',
    'K.T. Plantation Pvt. Ltd. claimed rights in part of the estate.',
    'The Karnataka legislature passed the Roerich and Devikarani Roerich (Acquisition and Transfer) Act, 1996. The Act received the President\'s assent on 15 November 1996 and came into force on 21 November 1996.',
    'The company argued that the Act broke Article 300A. No separate compensation was fixed for the plantation, and after the debts were paid little or nothing might be left.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0)', points: [
      'A public purpose is a precondition for depriving a person of property under Article 300A.',
      'Article 300A does not mention compensation, but the right to claim compensation is built into it. When a person loses property, the State must justify both the public purpose and the compensation.',
      'Courts can review a law that takes property on these grounds.',
      'A law is not struck down merely because the Court thinks it unjust. But in the rarest of cases, the rule of law can be used to strike down a law that is tyrannical or destroys the basic structure.',
      'The Acquisition Act had received the President\'s assent and was protected by Article 31A, so it could not be challenged under Articles 14 and 19.',
      'The appeals were dismissed. The compensation fixed by the Act was to be paid to the rightful claimants, and the land was to be used only for the purpose for which it was taken.'
    ] }
  ],
  principles: [
    'The right to property under Article 300A requires a public purpose and carries a right to compensation.',
    'Laws that take away property are subject to the rule of law and to review by the courts.',
    'So property is no longer a fundamental right, but it is not unprotected. The State must show a public need and pay for what it takes.'
  ],
  legacy: [
    'In Kolkata Municipal Corporation v. Bimal Kumar Shah (2024), the Court set out seven procedural rights that form part of the right to property under Article 300A.'
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
  summary: 'Regulatory measures, and compensatory taxes charged for the use of facilities such as roads, do not restrict the freedom of trade under Article 301. Rajasthan\'s tax on motor vehicles was upheld as a compensatory tax.',
  background: [
    'Article 301 says that trade, commerce and movement throughout India shall be free. Article 304(a) lets a State tax goods from other States, but only as it taxes its own goods. Article 304(b) lets a State impose reasonable limits on trade in the public interest, but only by a Bill introduced with the President\'s prior permission.',
    'In Atiabari Tea (1960), the Court held that a tax that directly holds up the movement of goods restricts the freedom of trade, and needs the procedure of Article 304(b).',
    'A compensatory tax is a charge for using a facility that the State provides, such as roads or bridges. The idea is that it pays for what helps trade, rather than blocking trade.'
  ],
  question: [
    'Is a tax on motor vehicles using a State\'s roads a restriction on the freedom of trade under Article 301?',
    'Must such a tax meet the conditions of Article 304(b), including the President\'s prior permission?'
  ],
  facts: [
    'Section 4 of the Rajasthan Motor Vehicles Taxation Act, 1951 required the owner of every motor vehicle used or kept for use in Rajasthan to pay a tax.',
    'The appellants ran bus services in Ajmer State. Some of their routes crossed strips of Rajasthan territory.',
    'The tax authorities demanded tax from them for 1 April 1951 to 31 March 1954. The Bill had not received the President\'s prior permission, and the President had not approved the Act afterwards.',
    'The Rajasthan High Court dismissed their writ petitions on 9 August 1957. Because of the questions raised by Atiabari Tea, seven judges heard the appeals.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of four: Justice S.K. Das, for himself and Justices Kapur and Sarkar, with Justice Subba Rao agreeing', points: [
      'The freedom of trade under Article 301 must be understood in the setting of an ordinary society and a federal Constitution. The freedom allows some regulation by the Union or the States.',
      'Regulatory measures, and compensatory taxes for the use of facilities such as roads and bridges, help trade rather than hold it up. They are not restrictions under Article 301, and need not meet Article 304(b).',
      'The limits in Part XIII apply to taxing laws too, not only to laws on trade and commerce.',
      'The Rajasthan tax was really a charge for using the State\'s roads. Basing it on the number of passengers or the load was only a way of measuring the charge.',
      'Justice Subba Rao agreed with the result. Article 301 protects the free movement of trade, and rules that make that movement possible promote it.',
      'The appeals were dismissed.'
    ] },
    { kind: 'dissent', label: 'Justice M. Hidayatullah, for himself and Justices Ayyangar and Mudholkar, in dissent', points: [
      'The tax was on trade and on the movement of trade. The tax created a barrier between States that trade could not cross without heavy payment.',
      'The tax was not a fair payment for the wear and tear of roads. The tax was a restriction that Article 301 forbids.',
      'The procedure in Article 304(b) had not been followed, so the tax was beyond the Constitution. The appeals should have been allowed.'
    ] }
  ],
  principles: [
    'Compensatory taxes and regulatory measures do not restrict the freedom of trade.',
    'Taxing laws are subject to Part XIII of the Constitution.',
    'So a State could charge buses for using its roads without the President\'s permission, as long as the charge paid for the roads.'
  ],
  legacy: [
    'In Jindal Stainless (2016), nine judges rejected the compensatory tax theory as having no basis in law, and overruled this judgment to that extent.'
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
  summary: 'A tax that does not discriminate does not restrict the freedom of trade under Article 301, so States can levy entry tax on goods from other States. The compensatory tax theory was rejected, and earlier judgments were overruled to that extent.',
  background: [
    'Article 301 says that trade, commerce and movement throughout India shall be free. Article 304(a) lets a State tax goods from other States, but only as it taxes its own goods. Article 304(b) lets a State impose reasonable limits on trade in the public interest, but only by a Bill introduced with the President\'s prior permission.',
    'Entry tax is a State tax on goods brought into a local area for use, consumption or sale.',
    'In Atiabari Tea (1960), the Court held that a tax could restrict trade. In Automobile Transport (1962), it added that a compensatory tax, one that pays for facilities used by traders, does not.'
  ],
  question: [
    'Can a tax restrict the freedom of trade, commerce and movement under Article 301?',
    'Is the compensatory tax theory sound?',
    'When does a State tax discriminate against goods from other States under Article 304(a)?'
  ],
  facts: [
    'Many States levied entry tax on goods brought into a local area for consumption, use or sale.',
    'Traders and manufacturers challenged these laws as restrictions on the freedom of trade between States under Article 301.',
    'In 2010 five judges sent the questions to a larger bench, and nine judges heard them.'
  ],
  held: [
    { kind: 'majority', label: 'The majority of seven, led by Chief Justice T.S. Thakur', points: [
      'The word "free" in Article 301 does not mean free from tax. A tax that does not discriminate is not a restriction on the freedom of trade.',
      'Only taxes that discriminate against goods from other States are caught, through Article 304(a). Clauses (a) and (b) of Article 304 are to be read separately.',
      'Article 304(a) forbids hostile discrimination, not every difference in treatment. Tax breaks given for a limited time to develop backward areas do not break it.',
      'States may design their tax laws so that the burden falls equally on goods from other States and on goods made within the State.',
      'The compensatory tax theory, from Automobile Transport (1962) and modified in Jindal Stainless (2006), has no basis in law and is rejected. Atiabari, Automobile Transport and later decisions were overruled to the extent they relied on it.',
      'Whether each State\'s entry tax law discriminates, and related questions, were left to regular benches.'
    ] },
    { kind: 'concurring', label: 'Justice R. Banumathi, in a separate opinion', points: [
      'Justice Banumathi held that entry tax which passes the test of Article 304(a) does not break Article 301, and that Jindal Stainless (2006) was wrongly decided.'
    ] },
    { kind: 'dissent', label: 'Justices D.Y. Chandrachud and Ashok Bhushan, in dissent', points: [
      'Justice Bhushan disagreed with the majority on whether taxes can restrict the freedom of trade. In his view, such a tax must follow Article 304(b), including the President\'s permission. But he agreed that the compensatory tax theory does not fit Part XIII.',
      'Justice Chandrachud dissented in an opinion that Justice Bhushan described as close to his own. Among other points, Justice Chandrachud held that a "local area" for entry tax under Entry 52 of the State List cannot be the whole State.'
    ] }
  ],
  principles: [
    'Taxes do not restrict the freedom of trade unless they discriminate against goods from other States.',
    'The compensatory tax theory is no longer the test under Part XIII.',
    'So the question about a State tax is now simple. Does it treat goods from outside worse than local goods? If not, it is valid.'
  ],
  legacy: [
    'Regular benches then decided whether individual State entry tax laws were valid. Most entry taxes were replaced by the Goods and Services Tax from 2017.'
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
  summary: 'Karnataka passed an ordinance to override the Cauvery Tribunal\'s interim order, and the Court held the ordinance beyond the State\'s power and unconstitutional. The Tribunal can grant interim relief, and its interim order becomes binding once the Central Government publishes it.',
  background: [
    'The Cauvery river rises in Karnataka and flows into Tamil Nadu. The two States have long disputed how its water should be shared.',
    'Under Article 262, Parliament can make a law for settling disputes between States over river water, and can bar the courts from deciding them. Parliament passed the Inter-State Water Disputes Act, 1956, which sets up tribunals for this.',
    'Under Article 143, the President can ask the Supreme Court for its opinion on a question of law. A TMC is a thousand million cubic feet of water.'
  ],
  question: [
    'Was the Karnataka Cauvery Basin Irrigation Protection Ordinance, 1991 constitutional?',
    'Was the Tribunal\'s interim order a "report and decision" under Section 5(2) of the 1956 Act, which must be published under Section 6?',
    'Can a Water Disputes Tribunal grant interim relief?'
  ],
  facts: [
    'The Central Government set up the Cauvery Water Disputes Tribunal on 2 June 1990 under the 1956 Act.',
    'On 25 June 1991 the Tribunal passed an interim order. Karnataka was to release enough water from its reservoirs for 205 TMC to reach Tamil Nadu\'s Mettur reservoir each year.',
    'On 25 July 1991 the Governor of Karnataka made the Karnataka Cauvery Basin Irrigation Protection Ordinance. The ordinance was to override any order of a court or tribunal, except a final decision published under the Act.',
    'On 27 July 1991 the President referred three questions to the Supreme Court under Article 143.'
  ],
  held: [
    { kind: 'unanimous', label: 'The opinion of the Court, given by Justice P.B. Sawant', points: [
      'The Ordinance, since replaced by an Act, is beyond the State\'s power to make laws and is unconstitutional.',
      'Settling disputes between States over river water falls under Article 262 and the law Parliament made under it. A State cannot pass a law to decide such a dispute in its own favour.',
      'Through the Ordinance, Karnataka took the power to decide alone how much water it would use, whatever the harm to another State. The Ordinance went against the rule of law and affected the rights of people in Tamil Nadu, outside Karnataka.',
      'The Tribunal\'s interim order of 25 June 1991 is a report and decision under Section 5(2) of the Act. The Central Government must publish it under Section 6 to make it effective and binding.',
      'A Water Disputes Tribunal can grant interim relief when the Central Government refers a request for such relief to it. Whether it can do so without such a reference did not arise.',
      'The Court did not decide whether its opinion on a Presidential Reference binds all courts. The Court noted that such an opinion deserves due weight and is normally followed.'
    ] }
  ],
  principles: [
    'A State cannot override the decision of a water tribunal by passing its own law.',
    'Disputes between States over river water are settled under Article 262, through tribunals set up under Parliament\'s law.',
    'So an upstream State cannot use its position on the river, or its own legislature, to keep the water from a downstream State.'
  ],
  legacy: [
    'The Tribunal gave its final award on 5 February 2007. In State of Karnataka v. State of Tamil Nadu (2018), the Supreme Court changed the award, gave Karnataka an extra 14.75 TMC, and put drinking water needs first.'
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
  summary: 'A power to take property and a promise of compensation are not enough. The "authority of law" in Article 300A also requires a fair procedure, which the Court set out as seven rights. The Kolkata Municipal Corporation\'s claim to have taken a property was invalid.',
  background: [
    'The 44th Amendment (1978) removed the right to property from the fundamental rights. Article 300A now says only that no person shall be deprived of property except by "authority of law".',
    'In K.T. Plantation (2011), the Court held that a taking of property under Article 300A needs a public purpose and compensation.',
    'Compulsory acquisition means the State taking private property without the owner\'s consent, for a public purpose, on payment of compensation. The procedure is set out in the land acquisition law.'
  ],
  question: [
    'Does Section 352 of the Kolkata Municipal Corporation Act, 1980 give the Corporation a power of compulsory acquisition?',
    'What procedure does Article 300A require before a person loses property?'
  ],
  facts: [
    'A property on Narikeldanga North Road in Kolkata belonged to Birinchi Bihari Shah.',
    'In 2009 the Corporation tried to take possession of it. In 2010 the Corporation removed Shah\'s name from its records as owner and entered its own name.',
    'The Corporation claimed that it had acquired the property under Section 352 of the 1980 Act.',
    'A single judge and a Division Bench of the Calcutta High Court held that Section 352 gives no power of compulsory acquisition, and the Corporation appealed.'
  ],
  held: [
    { kind: 'unanimous', label: 'Both judges agreed (2:0). Justice P.S. Narasimha wrote the judgment', points: [
      'Section 352 only lets the Municipal Commissioner identify land needed for public purposes. The section is not a power of compulsory acquisition.',
      'Section 363, on compensation, does not create a power to take property either. A compulsory acquisition must follow the procedure in Section 537, which applies the land acquisition law.',
      'A power to take property, together with fair compensation, does not by itself make a taking valid. A fair procedure is part of the "authority of law" that Article 300A requires.',
      'The right to property includes seven rights. The owner must get notice, a hearing and a reasoned decision. The taking must be for a public purpose, with fair compensation.',
      'The last two rights are a quick and efficient process, and a final end to the proceedings.',
      'Failing to follow these steps breaks the right to property. Section 352 provides none of them, so it cannot be a valid power of acquisition.',
      'The appeal was dismissed with costs of Rs. 5 lakh.'
    ] }
  ],
  principles: [
    'Taking property under Article 300A needs a fair procedure, not just a power to take and compensation.',
    'The seven procedural rights are the real content of the right to property.',
    'So the State cannot simply write its own name into the property records. The State must follow every step, from notice to a final decision.'
  ],
  legacy: [
    'Courts now test compulsory acquisitions of private property against these seven rights.'
  ],
  source: 'https://indiankanoon.org/doc/11565482/'
}

});
