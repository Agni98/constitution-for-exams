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
  summary: 'The Governor of Arunachal Pradesh acted unconstitutionally by advancing the Assembly session and directing its business without the advice of the Council of Ministers. The Court set aside everything done under those orders and restored the position as it stood on 15 December 2015.',
  question: [
    'Can the Governor summon the Assembly, advance its session or direct its business in the Governor\'s own discretion?',
    'Is the Governor\'s use of discretion under Article 163 open to judicial review?'
  ],
  facts: [
    'The sixth session of the Arunachal Pradesh Legislative Assembly was due to begin on 14 January 2016.',
    'On 9 December 2015 the Governor ordered the session to begin earlier, on 16 December 2015. By a message the same day, the Governor also directed how the proceedings were to be conducted, including a resolution for the removal of the Speaker.',
    'On 15 December 2015 the Speaker, Nabam Rebia, disqualified 14 members under the Tenth Schedule. The same day the Deputy Speaker set aside that order, and the Gauhati High Court later stayed the disqualification.',
    'The session was held as the Governor had directed. On 13 January 2016 the Gauhati High Court declined to interfere with the Governor\'s orders, and Nabam Rebia appealed.',
    'In February 2016, after a short period of President\'s Rule, a new Chief Minister was sworn in.'
  ],
  held: [
    { kind: 'majority', label: 'Leading opinion by Justice J.S. Khehar, for himself and Justices Ghose and Ramana', points: [
      'The Governor must act on the aid and advice of the Council of Ministers. Discretion is the exception, and applies only where a provision of the Constitution authorises the Governor to act in discretion.',
      'Summoning the House under Article 174, and sending messages to it under Article 175, must be done on ministerial advice. The Governor cannot fix a session or the business of the House on the Governor\'s own.',
      'Article 163(2) does not place the Governor\'s decisions beyond judicial review. Reading it that way would make the Governor an all-pervading, super-constitutional authority.',
      'The Governor has no role in disqualification proceedings under the Tenth Schedule. Acting on the basis of such proceedings is a constitutional impropriety.',
      'The Governor\'s order of 9 December 2015 advancing the session violated Articles 163 and 174. The message directing the proceedings violated Articles 163 and 175. Both were quashed.',
      'All steps taken by the Assembly under that order and message were set aside, and the position as it stood on 15 December 2015 was restored.'
    ] },
    { kind: 'concurring', label: 'Concurring opinions (Justices Dipak Misra and Madan B. Lokur)', points: [
      'Justice Misra agreed on every aspect, and added reasons on Article 179(c), which deals with the removal of a Speaker, in the context of the Tenth Schedule.',
      'Justice Lokur agreed in general and gave separate reasons. The Governor\'s order was unconstitutional, and the Deputy Speaker\'s order of 15 December 2015 was also set aside.'
    ] }
  ],
  principles: [
    'The Governor acts on ministerial advice in summoning and addressing the House.',
    'The Governor\'s discretion is narrow and subject to judicial review.'
  ],
  legacy: [
    'The judgment restored the earlier government of Chief Minister Nabam Tuki.',
    'In Subhash Desai v. Principal Secretary, Governor of Maharashtra (2023), five judges referred to a larger bench the view in this case that a Speaker facing a notice for removal cannot decide disqualification petitions.'
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
  summary: 'A Governor who withholds assent to a Bill must return it to the legislature for reconsideration. The Governor cannot simply sit on Bills and so veto the work of an elected legislature.',
  question: [
    'Can a Governor withhold assent to a Bill without returning it to the legislature?',
    'Was a sitting of the Punjab Assembly valid when the Speaker reconvened a session that had been adjourned but not prorogued?'
  ],
  facts: [
    'The Budget Session of the Punjab Legislative Assembly was adjourned without being prorogued. The Speaker reconvened it on 19 and 20 June 2023.',
    'The Assembly passed four Bills at that sitting. The Governor doubted whether the sitting was valid and did not act on the Bills.',
    'The State of Punjab petitioned the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (3:0), judgment by Chief Justice D.Y. Chandrachud', points: [
      'If the Governor decides to withhold assent under Article 200, the Governor must follow the first proviso and return the Bill to the legislature for reconsideration.',
      'Otherwise the Governor, "as the unelected Head of the State", could virtually veto the legislature simply by declaring that assent is withheld.',
      'The words "as soon as possible" in the first proviso require the Governor to act promptly. Keeping a Bill pending indefinitely goes against them.',
      'The Speaker had the power to adjourn the House and to reconvene a session that had not been prorogued.',
      'The Governor was directed to decide on the Bills.'
    ] }
  ],
  principles: [
    'The Governor\'s power under Article 200 cannot be used to stall legislation indefinitely.',
    'The power to govern rests with the elected government and legislature.'
  ],
  legacy: [
    'In State of Tamil Nadu v. Governor of Tamil Nadu (2025), two judges built on this judgment and set time limits for Governors.',
    'In its advisory opinion of 20 November 2025, a five-judge bench agreed that a Governor who withholds assent must return the Bill, but held that courts cannot fix time limits.'
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
  summary: 'The Governor of Tamil Nadu acted illegally by withholding assent to ten Bills and then reserving them for the President after they were passed again. The Court set time limits for Governors and the President, and treated the Bills as having received assent. A later advisory opinion rejected the time limits and deemed assent.',
  question: [
    'What options does a Governor have under Article 200, and must the Governor act on ministerial advice?',
    'Can a Governor reserve for the President a Bill that the legislature has passed again?',
    'Can the courts set time limits and treat Bills as having received assent?'
  ],
  facts: [
    'The Governor of Tamil Nadu kept several Bills passed by the Assembly pending for long periods. Many of them concerned the governance of State universities.',
    'The State filed a petition in the Supreme Court on 31 October 2023.',
    'In November 2023 the Governor declared that assent was withheld from ten Bills. The Assembly passed them again, and the Governor then reserved them for the President.',
    'The President later withheld assent to seven of them.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (2:0), judgment by Justice J.B. Pardiwala', points: [
      'Under Article 200 the Governor has three options: give assent, withhold assent and return the Bill, or reserve the Bill for the President. The Governor cannot withhold assent and sit on the Bill.',
      'Once the legislature passes a returned Bill again, the Governor cannot reserve it for the President, unless it is materially different from the first version.',
      'The Governor must ordinarily act on the advice of the Council of Ministers under Article 200. Discretion is limited to cases such as Bills that would affect the powers of the High Court.',
      'The Governor must act within one month, and the President must decide on a reserved Bill within three months. Failure to do so can be challenged in court.',
      'Neither the Governor nor the President is immune from judicial review when acting on Bills.',
      'Using Article 142, the Court treated the ten Bills as having received assent on the date they were presented to the Governor again.'
    ] }
  ],
  principles: [
    'In this judgment, the Court held that a Governor cannot use delay to block legislation passed by an elected legislature.'
  ],
  legacy: [
    'The President then referred questions on these issues to the Supreme Court under Article 143.',
    'On 20 November 2025 five judges, in an advisory opinion, disagreed with this judgment. They held that the Governor has discretion under Article 200, that courts cannot set time limits for the Governor or the President, and that there is no deemed assent.',
    'The advisory opinion accepted that prolonged, unexplained and indefinite inaction by a Governor can be subject to limited judicial review.'
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
  summary: 'The power of judicial review of the High Courts under Articles 226 and 227, and of the Supreme Court under Article 32, is part of the basic structure. Tribunals can decide cases first, but their decisions are subject to review by a Division Bench of the High Court.',
  question: [
    'Can the jurisdiction of the High Courts under Articles 226 and 227, and of the Supreme Court under Article 32, be excluded under Articles 323A and 323B?',
    'Can tribunals decide the constitutional validity of laws and rules?',
    'Are tribunals substitutes for the High Courts, or supplements to them?'
  ],
  facts: [
    'The 42nd Amendment (1976) added Articles 323A and 323B. They allowed Parliament and the State legislatures to set up tribunals and to exclude the jurisdiction of all courts except the Supreme Court under Article 136.',
    'Parliament passed the Administrative Tribunals Act, 1985. Section 28 of the Act excluded the jurisdiction of other courts over service matters.',
    'In S.P. Sampath Kumar (1987), the Court upheld this arrangement, treating tribunals as an effective alternative to the High Courts.',
    'Later decisions raised doubts, and the questions were referred to seven judges.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (7:0), judgment by Chief Justice A.M. Ahmadi', points: [
      'Clause 2(d) of Article 323A and clause 3(d) of Article 323B are unconstitutional to the extent that they exclude the jurisdiction of the High Courts and the Supreme Court under Articles 226, 227 and 32.',
      'Section 28 of the Administrative Tribunals Act, and similar exclusion clauses in other laws made under these Articles, are unconstitutional to the same extent.',
      'The jurisdiction of the High Courts under Articles 226 and 227, and of the Supreme Court under Article 32, is part of the inviolable basic structure of the Constitution.',
      'Tribunals lack the constitutional safeguards of the High Courts, such as security of tenure and financial independence. So they cannot be substitutes for the High Courts, only supplements to them. S.P. Sampath Kumar was overruled on this point.',
      'Tribunals can test the constitutional validity of laws and rules. Their decisions are subject to scrutiny by a Division Bench of the High Court within whose jurisdiction the tribunal falls.',
      'Tribunals remain courts of first instance in their fields. Litigants cannot go directly to the High Court, except to challenge the law that creates the tribunal.'
    ] }
  ],
  principles: [
    'Judicial review by the High Courts and the Supreme Court cannot be taken away, even by a constitutional amendment.',
    'Tribunals supplement the High Courts; they do not replace them.'
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
  summary: 'The existence of an alternative remedy does not bar a High Court from hearing a writ petition. A writ can still be entertained where a fundamental right is at stake, natural justice is violated, the action is wholly without jurisdiction, or a law is challenged as invalid.',
  question: [
    'Can a High Court dismiss a writ petition only because the petitioner has an alternative remedy under a statute?',
    'Did the Registrar of Trade Marks have jurisdiction to issue a notice to cancel the renewal of Whirlpool\'s trade mark while proceedings were pending in the High Court?'
  ],
  facts: [
    'Whirlpool\'s trade mark "WHIRLPOOL" was first registered in India in 1957. It later went off the register, and another party had the same mark registered in 1992.',
    'Whirlpool had an appeal and a suit about the mark pending in the Delhi High Court, and had obtained an injunction against passing off.',
    'In 1997 the Registrar allowed Whirlpool to renew its registration. At the other party\'s request, the Registrar then issued a notice under Section 56(4) of the Trade and Merchandise Marks Act, 1958 to consider cancelling the renewal.',
    'The Bombay High Court dismissed Whirlpool\'s writ petition against the notice, on the ground that an alternative remedy was available.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (2:0), judgment by Justice S. Saghir Ahmad', points: [
      'The High Court\'s power under Article 226 is plenary. The rule that a petitioner should first use an alternative remedy is a rule of discretion and convenience, not a limit on jurisdiction.',
      'An alternative remedy is no bar in at least four situations: where the petition seeks to enforce a fundamental right, where natural justice has been violated, where the order or proceeding is wholly without jurisdiction, or where the validity of a law is challenged.',
      'The High Court was wrong to dismiss the petition without examining whether the Registrar\'s notice was wholly without jurisdiction.',
      'While proceedings about the mark were pending in the High Court, and in view of Section 107 of the Act, only the High Court could deal with the question. The Registrar had no jurisdiction to issue the notice.',
      'The appeal was allowed and the notice was quashed.'
    ] }
  ],
  principles: [
    'Requiring a petitioner to exhaust alternative remedies is a matter of discretion, not jurisdiction.',
    'A writ lies against action that is wholly without jurisdiction, even if a statutory remedy exists.'
  ],
  legacy: [
    'The four exceptions stated here are applied in most cases where a writ petition is opposed on the ground of an alternative remedy.'
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
  summary: 'The Lieutenant Governor of Delhi is bound by the aid and advice of the elected Council of Ministers, except on public order, police and land. The Lieutenant Governor has no independent power to take decisions, and should refer differences to the President only in exceptional cases.',
  question: [
    'Who holds executive power in the National Capital Territory of Delhi: the Lieutenant Governor or the elected government?',
    'Is the Lieutenant Governor bound by the advice of the Council of Ministers?',
    'When can the Lieutenant Governor refer a difference of opinion to the President?'
  ],
  facts: [
    'The 69th Amendment (1991) added Article 239AA. It gave Delhi an elected Legislative Assembly and a Council of Ministers headed by a Chief Minister.',
    'The Delhi Government and the Lieutenant Governor disagreed over who controlled the administration.',
    'On 4 August 2016 the Delhi High Court held that the Lieutenant Governor was the administrative head of Delhi. The Delhi Government appealed, and the matter went to five judges.'
  ],
  held: [
    { kind: 'majority', label: 'Leading opinion by Chief Justice Dipak Misra, for himself and Justices Sikri and Khanwilkar', points: [
      'Delhi is not a State. It is a Union Territory with a special status under Article 239AA.',
      'The Lieutenant Governor is bound by the aid and advice of the Council of Ministers on all matters on which the Delhi Assembly can make laws. The exceptions are public order, police and land.',
      'The Lieutenant Governor has no independent power to take decisions, except where a law requires the Lieutenant Governor to act in discretion.',
      'The proviso to Article 239AA(4), which lets the Lieutenant Governor refer a difference of opinion to the President, is meant for exceptional matters, not for every matter.',
      'Decisions of the Council of Ministers must be communicated to the Lieutenant Governor, but they do not need the Lieutenant Governor\'s concurrence.',
      'Constitutional morality and collaborative federalism require the Lieutenant Governor and the elected government to work together.'
    ] },
    { kind: 'concurring', label: 'Concurring opinions (Justices D.Y. Chandrachud and Ashok Bhushan)', points: [
      'Justices Chandrachud and Bhushan wrote separately and agreed with the main conclusions.'
    ] }
  ],
  principles: [
    'In Delhi, the elected government holds executive power, except on public order, police and land.',
    'Differences with the Lieutenant Governor should be settled by discussion, and referred to the President only in exceptional cases.'
  ],
  legacy: [
    'The question of control over services was left for later. In 2023, five judges held that the Delhi Government controls services.',
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
  summary: 'The elected Government of Delhi has legislative and executive power over services, except those relating to public order, police and land. The Lieutenant Governor is bound by its advice on services. Parliament reversed the effect of the judgment within months.',
  question: [
    'Does the Government of NCT of Delhi control the civil services working in Delhi?',
    'Does Entry 41 of the State List, on services, fall within the powers of the Delhi Assembly?'
  ],
  facts: [
    'The 2018 Constitution Bench judgment left the question of control over services open.',
    'In February 2019 two judges differed on it, and the question went to a larger bench.',
    'In 2021 Parliament amended the Government of National Capital Territory of Delhi Act, increasing the powers of the Lieutenant Governor.',
    'In 2022 the question of services was referred to a Constitution Bench of five judges.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Chief Justice D.Y. Chandrachud', points: [
      'The Delhi Assembly has power to make laws on services under Entry 41 of the State List, except services relating to public order, police and land.',
      'The Delhi Government has executive power over these services. The Lieutenant Governor is bound by the aid and advice of its Council of Ministers on them.',
      'In a democracy, civil servants answer to ministers, ministers to the legislature, and the legislature to the people. Without control over services, this chain of accountability breaks.',
      'Parliament can override the Delhi Government on these matters by making a law. The Union executive cannot do so without such a law.',
      'Article 239AA must be read in a way that furthers the federal structure of the Constitution.'
    ] }
  ],
  principles: [
    'An elected government must control the officers who carry out its decisions.',
    'Delhi\'s special status under Article 239AA gives its elected government real powers.'
  ],
  legacy: [
    'On 19 May 2023 the Central Government issued an ordinance taking control of services away from the Delhi Government. A challenge to it was referred to a Constitution Bench in July 2023.',
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
  summary: 'Elections to a municipality must be completed before its five-year term ends. Delimitation and other administrative reasons cannot justify delay, and the State Election Commission has wide powers to see that elections are held on time.',
  question: [
    'Is the requirement in Article 243U(3) to complete municipal elections before the term ends mandatory?',
    'Can a State Election Commission delay elections to carry out delimitation of wards?'
  ],
  facts: [
    'The Ahmedabad Municipal Corporation was elected in October 2000. Its term was to end on 15 October 2005.',
    'On 8 June 2005 the State increased the number of wards from 43 to 45. The State Election Commission said it needed time for delimitation, so the elections could not be held before the term ended.',
    'Kishan Singh Tomar, Chairman of the Corporation\'s Standing Committee, asked the Gujarat High Court to order timely elections. The High Court allowed the elections to be completed by 31 December 2005.',
    'Tomar appealed to the Supreme Court.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (5:0), judgment by Justice K.G. Balakrishnan', points: [
      'Under Article 243U(3), elections to a municipality must be completed before the end of its term. This is mandatory.',
      'Delimitation and similar reasons are not grounds for delay. If electoral rolls cannot be revised in time, the election must be held on the existing rolls.',
      'The State Election Commission has powers of superintendence, direction and control over these elections, like those of the Election Commission of India under Article 324.',
      'If the State Government does not cooperate, the State Election Commission can approach the High Court for a writ of mandamus.',
      'Only exceptional events, such as natural calamities or a breakdown of law and order, can justify postponing elections. Postponement must not become a regular feature.',
      'No further direction was needed, because the elections had since been held.'
    ] }
  ],
  principles: [
    'Local bodies must not be left without elected members because of administrative delay.',
    'State Election Commissions are independent and must ensure timely elections.'
  ],
  legacy: [
    'In 2022 the Court ordered local body elections in Madhya Pradesh and Maharashtra to be held without further delay, relying on the constitutional requirement of timely elections.'
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
  summary: 'Reservation for Other Backward Classes in local bodies is valid only if the State meets a "triple test": a dedicated commission, local body-wise proportions based on its findings, and total reservation of no more than 50 per cent.',
  question: [
    'Is 27 per cent reservation for backward classes in Maharashtra\'s zilla parishads and panchayat samitis valid where it takes total reservation above 50 per cent?',
    'What must a State do before reserving seats for Other Backward Classes in local bodies?'
  ],
  facts: [
    'Section 12(2)(c) of the Maharashtra Zilla Parishads and Panchayat Samitis Act, 1961 provided for 27 per cent reservation of seats for backward classes of citizens.',
    'In some districts, including Washim, Akola, Nagpur, Bhandara and Gondiya, total reservation for the Scheduled Castes, Scheduled Tribes and Other Backward Classes went above 50 per cent.',
    'Elections held in these districts in December 2019 and January 2020 were made subject to the outcome of the case.',
    'Vikas Kishanrao Gawali and others filed writ petitions under Article 32.'
  ],
  held: [
    { kind: 'unanimous', label: 'Unanimous (3:0), judgment by Justice A.M. Khanwilkar', points: [
      'Following K. Krishna Murthy (2010), total reservation for the Scheduled Castes, Scheduled Tribes and Other Backward Classes in local bodies must not exceed 50 per cent.',
      'Reservation for the Scheduled Castes and Scheduled Tribes in local bodies is required by the Constitution and linked to population. Reservation for Other Backward Classes is provided by statute and must be justified by data.',
      'Before reserving seats for Other Backward Classes, the State must first set up a dedicated commission to make a contemporaneous, rigorous empirical inquiry into backwardness in local bodies.',
      'The State must then fix the proportion of reservation local body by local body, in line with the commission\'s findings. In any case, total reservation for the three groups together must not exceed 50 per cent.',
      'Section 12(2)(c) was read down, so that "shall be" 27 per cent reads as "may be", subject to the 50 per cent limit.',
      'The election of candidates to seats reserved beyond the limit was declared void, with prospective effect. The vacated seats were to be filled by open category candidates.'
    ] }
  ],
  principles: [
    'Reservation for Other Backward Classes in local bodies must rest on current empirical data.',
    'The 50 per cent ceiling on reservation applies to local bodies.'
  ],
  legacy: [
    'In 2022, in cases from Maharashtra and Madhya Pradesh, the Court insisted that the triple test be met before seats could be reserved for Other Backward Classes in local body elections.'
  ],
  source: 'https://indiankanoon.org/doc/178057376/'
}

});
