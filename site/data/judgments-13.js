/* Landmark judgments, rewritten in full. Batch 13: Governors, tribunals,
   High Courts, Delhi and local bodies, Articles 163 to 243ZG.

   The fields are described at the top of judgments-1.js.

   How this batch was checked. Nabam Rebia, L. Chandra Kumar, Whirlpool,
   Kishan Singh Tomar and Vikas Kishanrao Gawali were checked against the full
   text on Indian Kanoon, including the operative conclusions. The Punjab and
   Tamil Nadu Governor cases and the two Delhi cases were confirmed from the
   judgments hosted by the Supreme Court Observer and from its summaries and
   those of LiveLaw. The corrections to the short summaries that came out of
   the check: the Presidential Reference on the Tamil Nadu judgment has since
   been answered. On 20 November 2025 five judges disagreed with the time
   limits and deemed assent laid down in that judgment, so its status is
   shown as partly overtaken.

   Written in plain, direct English: one fact to a sentence, normal word order. */
Object.assign(window.COI_JUDGMENTS = window.COI_JUDGMENTS || {}, {

'nabam-rebia-2016': {
  name: 'Nabam Rebia v. Deputy Speaker, Arunachal Pradesh Legislative Assembly',
  full: 'Nabam Rebia and Bamang Felix v. Deputy Speaker, Arunachal Pradesh Legislative Assembly and Others',
  aka: 'The Arunachal Pradesh Governor case',
  decided: '13 July 2016',
  citation: '(2016) 8 SCC 1',
  bench: 5,
  result: 'Unanimous in result, in three opinions',
  tags: ['Article 163', 'Governor\'s discretion', 'Article 174'],
  judges: 'J.S. Khehar, Dipak Misra, Madan B. Lokur, Pinaki Chandra Ghose and N.V. Ramana',
  summary: 'The Governor of Arunachal Pradesh acted unconstitutionally when, without the ministers\' advice, he brought the Assembly session forward and directed its business. The Court set aside everything done under those orders and restored the position of 15 December 2015.',
  background: [
    'Under Article 163, a Governor acts on the advice of the State\'s Council of Ministers, except where the Constitution allows the Governor to act in discretion.',
    'Under Article 174, the Governor summons the Assembly to meet. Under Article 175, the Governor can address the Assembly and send it messages.',
    'Under the Tenth Schedule, the anti-defection law, the Speaker can disqualify a member who leaves his party or votes against its orders.',
    'In late 2015 a group of Congress members in Arunachal Pradesh rebelled against their own government, led by Chief Minister Nabam Tuki.'
  ],
  question: [
    'Can the Governor summon the Assembly, bring its session forward or direct its business in the Governor\'s own discretion?',
    'Can the courts review the Governor\'s use of discretion under Article 163?'
  ],
  facts: [
    'The sixth session of the Arunachal Pradesh Legislative Assembly was due to begin on 14 January 2016.',
    'On 9 December 2015 the Governor ordered the session to begin earlier, on 16 December 2015. By a message the same day, the Governor also directed how the session was to run, including a resolution to remove the Speaker.',
    'On 15 December 2015 the Speaker, Nabam Rebia, disqualified 14 members under the Tenth Schedule. The same day the Deputy Speaker set that order aside, and the Gauhati High Court later stayed the disqualification.',
    'The session was held as the Governor had directed. On 13 January 2016 the Gauhati High Court refused to interfere with the Governor\'s orders, and Nabam Rebia appealed.',
    'In February 2016, after a short spell of President\'s Rule, a new Chief Minister was sworn in.'
  ],
  held: [
    { kind: 'majority', label: 'The leading opinion by Justice J.S. Khehar, for himself and Justices Ghose and Ramana', points: [
      'The Governor must act on the advice of the Council of Ministers. Discretion is the exception, and applies only where a provision of the Constitution allows the Governor to act in discretion.',
      'Summoning the House under Article 174, and sending messages to it under Article 175, must be done on the ministers\' advice. The Governor cannot fix a session or the business of the House on his own.',
      'Article 163(2) does not put the Governor\'s decisions beyond the courts. Reading it that way would make the Governor an all-powerful authority above the Constitution.',
      'The Governor has no role in disqualification proceedings under the Tenth Schedule. Acting on the basis of such proceedings is constitutionally improper.',
      'The Governor\'s order of 9 December 2015 bringing the session forward broke Articles 163 and 174. The message directing the session broke Articles 163 and 175. Both were quashed.',
      'Everything the Assembly did under that order and message was set aside, and the position as it stood on 15 December 2015 was restored.'
    ] },
    { kind: 'concurring', label: 'Justices Dipak Misra and Madan B. Lokur, agreeing in separate opinions', points: [
      'Justice Misra agreed on every point, and added reasons on Article 179(c), which deals with removing a Speaker, in the context of the Tenth Schedule.',
      'Justice Lokur agreed in general and gave separate reasons. The Governor\'s order was unconstitutional, and the Deputy Speaker\'s order of 15 December 2015 was also set aside.'
    ] }
  ],
  principles: [
    'The Governor acts on the ministers\' advice in summoning and addressing the House.',
    'The Governor\'s discretion is narrow, and the courts can review it.',
    'So a Governor cannot take sides in a party\'s internal revolt by changing the Assembly\'s calendar. The elected government decides when the House meets.'
  ],
  legacy: [
    'The judgment restored the earlier government of Chief Minister Nabam Tuki.',
    'In Subhash Desai v. Principal Secretary, Governor of Maharashtra (2023), five judges sent to a larger bench the view in this case that a Speaker facing a notice for removal cannot decide disqualification petitions.'
  ],
  source: 'https://indiankanoon.org/doc/192490620/'
},

'state-of-punjab-v-principal-secretary-to-the-governor-2023': {
  name: 'State of Punjab v. Principal Secretary to the Governor of Punjab',
  aka: 'The Punjab Bills case',
  decided: '10 November 2023',
  bench: 3,
  result: 'Unanimous, 3:0',
  tags: ['Article 200', 'Governor\'s assent', 'State legislature'],
  judges: 'D.Y. Chandrachud CJI, J.B. Pardiwala and Manoj Misra',
  summary: 'A Governor who withholds assent to a Bill must send it back to the legislature to be reconsidered. The Governor cannot simply sit on Bills and so veto the work of an elected legislature.',
  background: [
    'Under Article 200, when the State legislature passes a Bill, the Governor can give assent, withhold assent, or reserve the Bill for the President. The first proviso adds that the Governor may return a Bill to the legislature "as soon as possible" for reconsideration. If the legislature passes it again, the Governor shall not withhold assent.',
    'A session of the Assembly ends when the Governor prorogues it. The Speaker can adjourn the House, which only pauses its sittings within the same session.'
  ],
  question: [
    'Can a Governor withhold assent to a Bill without sending it back to the legislature?',
    'The Speaker called the Assembly back for a session that had been adjourned but not prorogued. Was that sitting valid?'
  ],
  facts: [
    'The Budget Session of the Punjab Legislative Assembly was adjourned without being prorogued. The Speaker called it back on 19 and 20 June 2023.',
    'The Assembly passed four Bills at that sitting. The Governor doubted whether the sitting was valid and did not act on the Bills.',
    'The State of Punjab petitioned the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'All three judges agreed (3:0). Chief Justice D.Y. Chandrachud wrote the judgment', points: [
      'If the Governor decides to withhold assent under Article 200, the Governor must follow the first proviso and send the Bill back to the legislature for reconsideration.',
      'Otherwise the Governor, "as the unelected Head of the State", could in effect veto the legislature just by declaring that assent is withheld.',
      'The words "as soon as possible" in the first proviso require the Governor to act promptly. Keeping a Bill pending without end goes against them.',
      'The Speaker had the power to adjourn the House and to call back a session that had not been prorogued.',
      'The Governor was directed to decide on the Bills.'
    ] }
  ],
  principles: [
    'The Governor\'s power under Article 200 cannot be used to stall laws for ever.',
    'The power to govern rests with the elected government and legislature.',
    'So the Governor may ask the legislature to think again, but the legislature has the last word on its own Bills.'
  ],
  legacy: [
    'In State of Tamil Nadu v. Governor of Tamil Nadu (2025), two judges built on this judgment and set time limits for Governors.',
    'In its advisory opinion of 20 November 2025, five judges agreed that a Governor who withholds assent must return the Bill. But they held that courts cannot fix time limits.'
  ],
  source: 'https://www.scobserver.in/wp-content/uploads/2023/11/State-of-Punjab-v-Principal-Secretary-to-the-Governor-of-Punjab-2023.pdf'
},

'state-of-tamil-nadu-v-governor-of-tamil-nadu-2025': {
  name: 'State of Tamil Nadu v. Governor of Tamil Nadu',
  aka: 'The Tamil Nadu Bills case',
  decided: '8 April 2025',
  citation: '2025 INSC 481',
  bench: 2,
  result: 'Unanimous, 2:0',
  status: 'partly',
  tags: ['Article 200', 'Governor\'s assent', 'Article 142'],
  judges: 'J.B. Pardiwala and R. Mahadevan',
  summary: 'The Governor of Tamil Nadu acted illegally when he withheld assent to ten Bills and then, after they were passed again, reserved them for the President. The Court set time limits for Governors and the President and treated the Bills as approved. A later advisory opinion rejected the time limits and the deemed approval.',
  background: [
    'Under Article 200, when the State legislature passes a Bill, the Governor can give assent, withhold assent, or reserve the Bill for the President. The first proviso adds that the Governor may return a Bill to the legislature "as soon as possible" for reconsideration. If the legislature passes it again, the Governor shall not withhold assent.',
    'Under Article 201, the President decides on a Bill that a Governor has reserved.',
    'In the Punjab Bills case (2023), the Court held that a Governor who withholds assent must send the Bill back to the legislature.',
    'Article 142 lets the Supreme Court pass any order needed to do complete justice. Deemed assent means treating a Bill as approved even though no formal approval was given.'
  ],
  question: [
    'What choices does a Governor have under Article 200, and must the Governor act on the ministers\' advice?',
    'Can a Governor reserve for the President a Bill that the legislature has passed again?',
    'Can the courts set time limits, and treat Bills as approved?'
  ],
  facts: [
    'The Governor of Tamil Nadu kept several Bills passed by the Assembly pending for long periods. Many of them concerned how State universities are run.',
    'The State filed a petition in the Supreme Court on 31 October 2023.',
    'In November 2023 the Governor declared that assent was withheld from ten Bills. The Assembly passed them again, and the Governor then reserved them for the President.',
    'The President later withheld assent to seven of them.'
  ],
  held: [
    { kind: 'unanimous', label: 'Both judges agreed (2:0). Justice J.B. Pardiwala wrote the judgment', points: [
      'Under Article 200 the Governor has three choices: give assent, withhold assent and return the Bill, or reserve the Bill for the President. The Governor cannot withhold assent and sit on the Bill.',
      'Once the legislature passes a returned Bill again, the Governor cannot reserve it for the President, unless it is materially different from the first version.',
      'The Governor must normally act on the advice of the Council of Ministers under Article 200. Discretion is limited to cases such as Bills that would affect the powers of the High Court.',
      'The Governor must act within one month, and the President must decide on a reserved Bill within three months. A failure to do so can be challenged in court.',
      'Neither the Governor nor the President is beyond the courts when acting on Bills.',
      'Using Article 142, the Court treated the ten Bills as approved from the date they were presented to the Governor again.'
    ] }
  ],
  principles: [
    'In this judgment, the Court held that a Governor cannot use delay to block laws passed by an elected legislature.',
    'But the judgment did not stand for long. Its time limits and deemed approval were rejected by five judges seven months later, while its core point against endless delay survived.'
  ],
  legacy: [
    'The President then referred questions on these issues to the Supreme Court under Article 143.',
    'On 20 November 2025 five judges, in an advisory opinion, disagreed with this judgment. They held that the Governor has discretion under Article 200, that courts cannot set time limits for the Governor or the President, and that there is no deemed assent.',
    'The advisory opinion accepted that long, unexplained and endless inaction by a Governor can face limited review by the courts.'
  ],
  source: 'https://www.scobserver.in/wp-content/uploads/2025/04/Supreme-Court-Judgement_-State-of-Tamil-Nadu-v-Governor-of-Tamil-Nadu.pdf'
},

'l-chandra-kumar-1997': {
  name: 'L. Chandra Kumar v. Union of India',
  full: 'L. Chandra Kumar v. Union of India and Others',
  aka: 'The tribunals case',
  decided: '18 March 1997',
  citation: '(1997) 3 SCC 261, AIR 1997 SC 1125',
  bench: 7,
  result: 'Unanimous, 7:0',
  tags: ['Articles 323A and 323B', 'Tribunals', 'Judicial review'],
  judges: 'A.M. Ahmadi CJI, M.M. Punchhi, K. Ramaswamy, S.P. Bharucha, S. Saghir Ahmad, K. Venkataswami and K.T. Thomas',
  summary: 'The power of the High Courts under Articles 226 and 227, and of the Supreme Court under Article 32, to review laws and decisions is part of the basic structure. Tribunals can hear cases first, but a bench of two High Court judges can review their decisions.',
  background: [
    'Tribunals are specialist bodies that decide certain disputes in place of ordinary courts. The Central Administrative Tribunal, for example, decides disputes about government jobs.',
    'The 42nd Amendment (1976) added Articles 323A and 323B. They allowed Parliament and the State legislatures to set up tribunals, and to shut out every court except the Supreme Court hearing an appeal under Article 136.',
    'Under Article 226, a High Court can issue writs. Under Article 227, it supervises all courts and tribunals in its area.',
    'The basic structure is the set of core features that Parliament cannot destroy, even by amending the Constitution.'
  ],
  question: [
    'Can Articles 323A and 323B shut out the High Courts under Articles 226 and 227, and the Supreme Court under Article 32?',
    'Can tribunals decide whether laws and rules are constitutional?',
    'Do tribunals replace the High Courts, or only add to them?'
  ],
  facts: [
    'Parliament passed the Administrative Tribunals Act, 1985. Section 28 of the Act shut out the other courts from service matters.',
    'In S.P. Sampath Kumar (1987), the Court upheld this arrangement, treating tribunals as an effective alternative to the High Courts.',
    'Later decisions raised doubts, and the questions were sent to seven judges.'
  ],
  held: [
    { kind: 'unanimous', label: 'All seven judges agreed (7:0). Chief Justice A.M. Ahmadi wrote the judgment', points: [
      'Clause 2(d) of Article 323A and clause 3(d) of Article 323B are unconstitutional to the extent that they shut out the High Courts and the Supreme Court under Articles 226, 227 and 32.',
      'Section 28 of the Administrative Tribunals Act, and similar clauses in other laws made under these Articles, are unconstitutional to the same extent.',
      'The power of the High Courts under Articles 226 and 227, and of the Supreme Court under Article 32, is part of the basic structure of the Constitution, which no one can take away.',
      'Tribunals lack the safeguards that protect High Court judges, such as secure tenure and financial independence. So they cannot replace the High Courts, only add to them. S.P. Sampath Kumar was overruled on this point.',
      'Tribunals can decide whether laws and rules are constitutional. But a Division Bench of the High Court, a bench of two judges, can review their decisions.',
      'Tribunals remain the first stop in their fields. Litigants cannot go straight to the High Court, except to challenge the law that creates the tribunal.'
    ] }
  ],
  principles: [
    'Review by the High Courts and the Supreme Court cannot be taken away, even by an amendment to the Constitution.',
    'Tribunals add to the High Courts. They do not replace them.',
    'So a tribunal can take the first look at a dispute, but its decision always remains open to a High Court.'
  ],
  legacy: [
    'In Rojer Mathew (2019) and Madras Bar Association (2020), the Court relied on this judgment to protect the independence of tribunals.'
  ],
  source: 'https://indiankanoon.org/doc/1152518/'
},

'whirlpool-corporation-1998': {
  name: 'Whirlpool Corporation v. Registrar of Trade Marks, Mumbai',
  full: 'Whirlpool Corporation v. Registrar of Trade Marks, Mumbai and Others',
  aka: 'The alternative remedy case',
  decided: '26 October 1998',
  citation: '(1998) 8 SCC 1, AIR 1999 SC 22',
  bench: 2,
  result: 'Unanimous, 2:0',
  tags: ['Article 226', 'Alternative remedy', 'Writ jurisdiction'],
  judges: 'K.T. Thomas and S. Saghir Ahmad',
  summary: 'Having another remedy does not stop a High Court from hearing a writ petition. The High Court can still hear one where a fundamental right is at stake, natural justice is broken, the action is wholly without legal power, or a law is challenged as invalid.',
  background: [
    'Under Article 226, a High Court can issue writs to protect fundamental rights and other legal rights.',
    'Many laws provide their own route for complaints, such as an appeal to a tribunal. Courts often send a petitioner back to use that route first, called an alternative remedy.',
    'A trade mark is a brand name or sign that identifies a company\'s goods. Passing off means selling goods in a way that makes buyers think they come from another company.'
  ],
  question: [
    'Can a High Court dismiss a writ petition only because the petitioner has another remedy under a law?',
    'Did the Registrar of Trade Marks have the power to issue a notice to cancel Whirlpool\'s renewal while cases about the mark were pending in the High Court?'
  ],
  facts: [
    'Whirlpool\'s trade mark "WHIRLPOOL" was first registered in India in 1957. The mark later dropped off the register, and another party had the same mark registered in 1992.',
    'Whirlpool had an appeal and a suit about the mark pending in the Delhi High Court, and had got an order stopping passing off.',
    'In 1997 the Registrar allowed Whirlpool to renew its registration. At the other party\'s request, the Registrar then issued a notice under Section 56(4) of the Trade and Merchandise Marks Act, 1958 to consider cancelling the renewal.',
    'The Bombay High Court dismissed Whirlpool\'s writ petition against the notice, because another remedy was available.'
  ],
  held: [
    { kind: 'unanimous', label: 'Both judges agreed (2:0). Justice S. Saghir Ahmad wrote the judgment', points: [
      'The High Court\'s power under Article 226 is complete. The rule that a petitioner should first use another remedy is a matter of the court\'s choice and convenience, not a limit on its power.',
      'Another remedy is no bar in at least four situations. The first is where a fundamental right is to be enforced, and the second where natural justice has been broken.',
      'The third is where the order or proceeding is wholly without legal power. The fourth is where a law is challenged as invalid.',
      'The High Court was wrong to dismiss the petition without checking whether the Registrar\'s notice was wholly without legal power.',
      'While cases about the mark were pending in the High Court, Section 107 of the Act meant that only the High Court could deal with the question. The Registrar had no power to issue the notice.',
      'The appeal was allowed and the notice was quashed.'
    ] }
  ],
  principles: [
    'Making a petitioner use other remedies first is a matter of the court\'s choice, not of its power.',
    'A writ lies against action taken wholly without legal power, even if the law provides another remedy.',
    'So the High Court\'s door stays open where the problem is serious. The other remedy is a rule of convenience, not a lock.'
  ],
  legacy: [
    'The four exceptions stated here are applied in most cases where a writ petition is opposed because another remedy exists.'
  ],
  source: 'https://indiankanoon.org/doc/1885496/'
},

'government-of-nct-of-delhi-v-union-of-india-2018': {
  name: 'Government of NCT of Delhi v. Union of India',
  aka: 'The Delhi Lieutenant Governor case',
  decided: '4 July 2018',
  citation: '(2018) 8 SCC 501',
  bench: 5,
  result: 'Unanimous, in three opinions',
  tags: ['Article 239AA', 'Lieutenant Governor', 'Aid and advice'],
  judges: 'Dipak Misra CJI, A.K. Sikri, A.M. Khanwilkar, D.Y. Chandrachud and Ashok Bhushan',
  summary: 'The Lieutenant Governor of Delhi must act on the advice of the elected Council of Ministers, except on public order, police and land. The Lieutenant Governor has no independent power to decide, and should refer differences to the President only in exceptional cases.',
  background: [
    'Delhi is a Union Territory, governed by the Centre through a Lieutenant Governor. The 69th Amendment (1991) added Article 239AA, which gave Delhi an elected Assembly and a Council of Ministers headed by a Chief Minister. Public order, police and land stayed with the Centre.',
    'Under the proviso to Article 239AA(4), if the Lieutenant Governor and the ministers disagree, the Lieutenant Governor can refer the matter to the President.',
    'After 2015, the elected Delhi Government and the Lieutenant Governor clashed repeatedly over who controlled the administration.'
  ],
  question: [
    'Who holds executive power in Delhi: the Lieutenant Governor or the elected government?',
    'Must the Lieutenant Governor act on the advice of the Council of Ministers?',
    'When can the Lieutenant Governor refer a difference of opinion to the President?'
  ],
  facts: [
    'On 4 August 2016 the Delhi High Court held that the Lieutenant Governor was the administrative head of Delhi.',
    'The Delhi Government appealed, and the matter went to five judges.'
  ],
  held: [
    { kind: 'majority', label: 'The leading opinion by Chief Justice Dipak Misra, for himself and Justices Sikri and Khanwilkar', points: [
      'Delhi is not a State. Delhi is a Union Territory with a special status under Article 239AA.',
      'The Lieutenant Governor must act on the advice of the Council of Ministers on all matters on which the Delhi Assembly can make laws. The exceptions are public order, police and land.',
      'The Lieutenant Governor has no independent power to decide, except where a law requires the Lieutenant Governor to act in discretion.',
      'The power to refer a difference to the President is meant for exceptional matters, not for every matter.',
      'Decisions of the Council of Ministers must be shared with the Lieutenant Governor, but they do not need the Lieutenant Governor\'s agreement.',
      'The values of the Constitution, and a federalism based on cooperation, require the Lieutenant Governor and the elected government to work together.'
    ] },
    { kind: 'concurring', label: 'Justices D.Y. Chandrachud and Ashok Bhushan, agreeing in separate opinions', points: [
      'Justices Chandrachud and Bhushan wrote separately and agreed with the main conclusions.'
    ] }
  ],
  principles: [
    'In Delhi, the elected government holds executive power, except on public order, police and land.',
    'Differences with the Lieutenant Governor should be settled by discussion, and referred to the President only in exceptional cases.',
    'So the people\'s vote in Delhi decides who governs most matters. The Lieutenant Governor is not a parallel ruler.'
  ],
  legacy: [
    'The question of control over services, meaning the civil servants, was left for later. In 2023, five judges held that the Delhi Government controls services.',
    'Parliament amended the Government of National Capital Territory of Delhi Act in 2021 and in 2023, increasing the role of the Lieutenant Governor.'
  ],
  source: 'https://www.scobserver.in/wp-content/uploads/2021/10/NCT_Judgement_04-Jul-2018.pdf'
},

'delhi-services-case-2023': {
  name: 'Government of NCT of Delhi v. Union of India',
  aka: 'The Delhi Services case',
  decided: '11 May 2023',
  bench: 5,
  result: 'Unanimous, 5:0',
  status: 'historic',
  tags: ['Article 239AA', 'Control of services', 'Federalism'],
  judges: 'D.Y. Chandrachud CJI, M.R. Shah, Krishna Murari, Hima Kohli and P.S. Narasimha',
  summary: 'The elected Government of Delhi controls the civil servants who work for it, except those dealing with public order, police and land. The Lieutenant Governor must act on its advice on services. But Parliament reversed the effect of the judgment within months.',
  background: [
    'Delhi is a Union Territory, governed by the Centre through a Lieutenant Governor. The 69th Amendment (1991) added Article 239AA, which gave Delhi an elected Assembly and a Council of Ministers headed by a Chief Minister. Public order, police and land stayed with the Centre.',
    'In 2018, five judges held that the Lieutenant Governor must act on the elected government\'s advice, except on public order, police and land. But they left open who controls services, meaning the civil servants posted in Delhi.',
    'Entry 41 of the State List covers State public services. The question was whether Delhi\'s Assembly had power over that entry.'
  ],
  question: [
    'Does the Government of NCT of Delhi control the civil servants working in Delhi?',
    'Does Entry 41 of the State List, on services, fall within the powers of the Delhi Assembly?'
  ],
  facts: [
    'In February 2019 two judges differed on the question of services, and it went to a larger bench.',
    'In 2021 Parliament amended the Government of National Capital Territory of Delhi Act, increasing the powers of the Lieutenant Governor.',
    'In 2022 the question of services was sent to five judges.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Chief Justice D.Y. Chandrachud wrote the judgment', points: [
      'The Delhi Assembly can make laws on services under Entry 41 of the State List, except services relating to public order, police and land.',
      'The Delhi Government has executive power over these services. The Lieutenant Governor must act on the advice of its Council of Ministers on them.',
      'In a democracy, civil servants answer to ministers, ministers to the legislature, and the legislature to the people. Without control over services, this chain of accountability breaks.',
      'Parliament can override the Delhi Government on these matters by making a law. The Union government cannot do so without such a law.',
      'Article 239AA must be read in a way that strengthens the federal structure of the Constitution.'
    ] }
  ],
  principles: [
    'An elected government must control the officers who carry out its decisions.',
    'Delhi\'s special status under Article 239AA gives its elected government real powers.',
    'But the judgment also showed the limit of Delhi\'s powers. Parliament could take services back by law, and within months it did.'
  ],
  legacy: [
    'On 19 May 2023 the Central Government issued an ordinance taking control of services away from the Delhi Government. A challenge to it was sent to a Constitution Bench in July 2023.',
    'In August 2023 Parliament replaced the ordinance with the Government of National Capital Territory of Delhi (Amendment) Act, 2023.'
  ],
  source: 'https://www.scobserver.in/reports/judgement-summary-sc-upholds-nctds-power-over-services/'
},

'kishan-singh-tomar-2006': {
  name: 'Kishan Singh Tomar v. Municipal Corporation of the City of Ahmedabad',
  full: 'Kishan Singh Tomar v. Municipal Corporation of the City of Ahmedabad and Others',
  aka: 'The municipal elections case',
  decided: '19 October 2006',
  citation: 'Civil Appeal No. 5756 of 2005',
  bench: 5,
  result: 'Unanimous, 5:0',
  tags: ['Article 243U', 'Municipal elections', 'State Election Commission'],
  judges: 'Y.K. Sabharwal CJI, K.G. Balakrishnan, S.H. Kapadia, C.K. Thakker and P.K. Balasubramanyan',
  summary: 'Elections to a municipality must be completed before its five-year term ends. Redrawing ward boundaries and other administrative reasons cannot justify delay, and the State Election Commission has wide powers to make sure elections are held on time.',
  background: [
    'The 74th Amendment (1992) gave municipalities a place in the Constitution, in Part IXA. Article 243U fixes their term at five years, and says that elections must be completed before the term ends.',
    'Each State has a State Election Commission, independent of the State Government, to hold local body elections.',
    'Delimitation means redrawing the boundaries of wards when their number changes.'
  ],
  question: [
    'Is the rule in Article 243U(3), that municipal elections must be completed before the term ends, mandatory?',
    'Can a State Election Commission delay elections in order to redraw ward boundaries?'
  ],
  facts: [
    'The Ahmedabad Municipal Corporation was elected in October 2000. Its term was to end on 15 October 2005.',
    'On 8 June 2005 the State increased the number of wards from 43 to 45. The State Election Commission said it needed time to redraw the wards, so the elections could not be held before the term ended.',
    'Kishan Singh Tomar, Chairman of the Corporation\'s Standing Committee, asked the Gujarat High Court to order elections on time. The High Court allowed the elections to be completed by 31 December 2005.',
    'Tomar appealed to the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'All five judges agreed (5:0). Justice K.G. Balakrishnan wrote the judgment', points: [
      'Under Article 243U(3), elections to a municipality must be completed before the end of its term. The rule is mandatory.',
      'Redrawing wards and similar reasons are not grounds for delay. If the voters\' lists cannot be revised in time, the election must be held on the existing lists.',
      'The State Election Commission has powers of superintendence, direction and control over these elections, like those of the Election Commission of India under Article 324.',
      'If the State Government does not cooperate, the State Election Commission can ask the High Court for a writ of mandamus, an order directing the government to do its duty.',
      'Only exceptional events, such as natural disasters or a breakdown of law and order, can justify putting elections off. Putting them off must not become a habit.',
      'No further order was needed, because the elections had since been held.'
    ] }
  ],
  principles: [
    'Local bodies must not be left without elected members because of administrative delay.',
    'State Election Commissions are independent and must make sure elections are held on time.',
    'So a city cannot be run by officials alone because the government is slow to redraw its wards. The vote comes first.'
  ],
  legacy: [
    'In 2022 the Court ordered local body elections in Madhya Pradesh and Maharashtra to be held without further delay, relying on the rule of elections on time.'
  ],
  source: 'https://indiankanoon.org/doc/1736371/'
},

'vikas-kishanrao-gawali-2021': {
  name: 'Vikas Kishanrao Gawali v. State of Maharashtra',
  full: 'Vikas Kishanrao Gawali v. State of Maharashtra and Others',
  aka: 'The local bodies OBC reservation case',
  decided: '4 March 2021',
  citation: 'AIRONLINE 2021 SC 125',
  bench: 3,
  result: 'Unanimous, 3:0',
  tags: ['Article 243D', 'OBC reservation', 'Local bodies'],
  judges: 'A.M. Khanwilkar, Indu Malhotra and Ajay Rastogi',
  summary: 'Reservation for Other Backward Classes in local bodies is valid only if the State meets a "triple test". The State needs a dedicated commission, a share fixed for each local body on its findings, and total reservation of no more than 50 per cent.',
  background: [
    'The 73rd Amendment (1992) gave panchayats a place in the Constitution, in Part IX. In Maharashtra, the zilla parishad is the district panchayat and the panchayat samiti works at the block level.',
    'Under Article 243D, seats in panchayats must be reserved for the Scheduled Castes and Scheduled Tribes in proportion to their population. A State may also reserve seats for backward classes, but the Constitution does not require it.',
    'In K. Krishna Murthy (2010), five judges held that reservation for backward classes in local bodies must rest on a careful study of their backwardness, and must keep total reservation within 50 per cent.'
  ],
  question: [
    'Maharashtra reserved 27 per cent of seats in its zilla parishads and panchayat samitis for backward classes. Is that valid where it takes total reservation above 50 per cent?',
    'What must a State do before reserving seats for Other Backward Classes in local bodies?'
  ],
  facts: [
    'Section 12(2)(c) of the Maharashtra Zilla Parishads and Panchayat Samitis Act, 1961 provided for 27 per cent reservation of seats for backward classes of citizens.',
    'In some districts, including Washim, Akola, Nagpur, Bhandara and Gondiya, total reservation for the Scheduled Castes, Scheduled Tribes and Other Backward Classes went above 50 per cent.',
    'Elections held in these districts in December 2019 and January 2020 were made subject to the outcome of the case.',
    'Vikas Kishanrao Gawali and others filed writ petitions under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'All three judges agreed (3:0). Justice A.M. Khanwilkar wrote the judgment', points: [
      'Following K. Krishna Murthy, total reservation for the Scheduled Castes, Scheduled Tribes and Other Backward Classes in local bodies must not exceed 50 per cent.',
      'Reservation for the Scheduled Castes and Scheduled Tribes in local bodies is required by the Constitution and linked to population. Reservation for Other Backward Classes comes from State law and must be justified by data.',
      'Before reserving seats for Other Backward Classes, the State must first set up a dedicated commission. The commission must make a current, careful study of backwardness in local bodies, based on evidence.',
      'The State must then fix the share of reservation for each local body, in line with the commission\'s findings. In any case, total reservation for the three groups together must not exceed 50 per cent.',
      'Section 12(2)(c) was read down, so that "shall be" 27 per cent now reads as "may be", subject to the 50 per cent limit.',
      'The election of candidates to seats reserved beyond the limit was declared void, from then on. The vacated seats were to be filled by open category candidates.'
    ] }
  ],
  principles: [
    'Reservation for Other Backward Classes in local bodies must rest on current evidence.',
    'The 50 per cent ceiling on reservation applies to local bodies.',
    'So a State cannot carry over a flat 27 per cent quota into local bodies. The State must study each place first and stay within half the seats.'
  ],
  legacy: [
    'In 2022, in cases from Maharashtra and Madhya Pradesh, the Court insisted that the triple test be met before seats could be reserved for Other Backward Classes in local body elections.'
  ],
  source: 'https://indiankanoon.org/doc/178057376/'
}

});
