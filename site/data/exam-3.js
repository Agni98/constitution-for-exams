/* What the examiners actually ask — Parts VIII to XIV:
   Union territories, local government, Scheduled Areas, centre-State relations,
   finance, trade, and the services.
   Schema, sources and house style: see exam-1.js. */
Object.assign(window.COI_EXAM = window.COI_EXAM || {}, {

"239": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 239 says every Union territory is run by the President, acting through an administrator the President appoints.",
  why: "Article 239 covers how Union territories are run. The article became topical again in 2019, when Jammu and Kashmir and Ladakh became Union territories.",
  concepts: [
    { t: "Who governs a Union territory", d: "The President, acting through an administrator appointed by them. Union territories are administered by the centre, not by a State government." },
    { t: "The administrator's title varies", d: "Lieutenant Governor in Delhi, Puducherry, Jammu and Kashmir, Ladakh and Andaman and Nicobar. Administrator in Chandigarh, Dadra and Nagar Haveli and Daman and Diu, and Lakshadweep." },
    { t: "A Governor can double up", d: "The President may appoint the Governor of a State as the administrator of an adjoining Union territory. The Governor then acts independently of their State ministers." },
    { t: "The administrator is not a Governor", d: "They are an agent of the President, not the head of a State. Their powers come from delegation, not from Part VI." },
    { t: "Some have legislatures", d: "Delhi, Puducherry and Jammu and Kashmir have Legislative Assemblies. Having one does not turn a Union territory into a State." }
  ],
  seen: [
    "UPSC Pre 2025 — the constitutional history of the former Part C States"
  ],
  trap: "A Union territory with a legislature is still administered by the President through the administrator.\n\nAn elected Assembly does not change its constitutional status. Delhi has an Assembly and a Chief Minister and remains a Union territory."
},

"239AA": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 239AA gives Delhi an elected Legislative Assembly and a Council of Ministers led by a Chief Minister. The Assembly can make laws on State and Concurrent List subjects, except public order, police and land.",
  why: "The Delhi article is always in the news. The fight over who controls the civil services in Delhi produced two Constitution Bench rulings and a law that reversed one of them.",
  concepts: [
    { t: "What it created", d: "The 69th Amendment (1991) gave Delhi the name National Capital Territory, a Legislative Assembly and a Council of Ministers." },
    { t: "What the Assembly can legislate on", d: "Any State List or Concurrent List subject, except three: public order, police and land. The three subjects stay with the centre." },
    { t: "The Lieutenant Governor's position", d: "The LG acts on the aid and advice of the Council of Ministers, except on matters where they act in their discretion or under a law." },
    { t: "The referral power", d: "If the LG disagrees with ministers, they may refer the matter to the President. Until the President decides, the LG may act on their own in an urgent case." },
    { t: "The 2018 ruling", d: "A Constitution Bench held the LG has no general power of discretion, must act on ministerial advice outside the three excepted subjects, and cannot obstruct every decision." },
    { t: "The 2023 ruling and its reversal", d: "On 11 May 2023 a Constitution Bench gave the Delhi government control over services. An ordinance undoing it followed on 19 May, and the Government of NCT of Delhi (Amendment) Act, 2023 replaced that ordinance in August. The Act was made under Article 239AA(7)(a), which lets Parliament legislate to give effect to or supplement Article 239AA, and it created a National Capital Civil Service Authority to decide transfers and postings." }
  ],
  trap: "Delhi is not a State and the Lieutenant Governor is not a Governor.\n\nBut since 2018 the LG must act on ministerial advice for everything outside public order, police and land. Claims that the LG has full discretion over Delhi are wrong."
},

"243": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 243 defines the words Part IX uses, such as Gram Sabha, panchayat, intermediate level and village.",
  why: "Article 243 is the definitions article for Part IX. The definitions feed the three-level structure of panchayats, one of the most reliably asked facts about Panchayati Raj.",
  concepts: [
    { t: "What it defines", d: "The article defines district, Gram Sabha, intermediate level, panchayat, panchayat area, population and village. The rest of Part IX uses these words." },
    { t: "Gram Sabha", d: "The body consisting of all persons registered on the electoral rolls of a village within a panchayat area. The Gram Sabha is the only institution of direct democracy in the Constitution, because every voter is a member." },
    { t: "The 73rd Amendment", d: "Part IX was inserted in 1992 and came into force on 24 April 1993, now observed as Panchayati Raj Day." },
    { t: "Three tiers", d: "Village, intermediate (block) and district. All three are compulsory, with one exception." },
    { t: "The exception", d: "A State with a population below twenty lakh need not have the intermediate level. Village and district panchayats are required everywhere." },
    { t: "Where Part IX does not apply", d: "Scheduled Areas, tribal areas, and certain north-eastern States. Article 243M carves them out, and PESA extends Part IX to Scheduled Areas separately." }
  ],
  seen: [
    "UPSC Pre 2015 — the objectives of Panchayati Raj and democratic decentralisation"
  ],
  trap: "Only the intermediate tier is optional, and only for States below twenty lakh population.\n\nGoa and Sikkim, for instance, run two tiers rather than three. The village and district tiers are compulsory everywhere Part IX applies.\n\nDo not confuse that exception with exclusion. Nagaland, Meghalaya and Mizoram have no panchayats under Part IX at all. Article 243M keeps the whole Part out, which is a different thing from dropping one tier."
},

"243B": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 243B says every State shall have panchayats at the village, intermediate and district levels. A State with fewer than 20 lakh people may leave out the intermediate level.",
  why: "Article 243B made panchayats mandatory. Before it, a State could simply not have them, and many States did exactly that.",
  concepts: [
    { t: "What it requires", d: "Panchayats shall be constituted at the village, intermediate and district levels in every State." },
    { t: "\"Shall\" is the operative word", d: "The rule is mandatory. No State may choose to have no panchayats." },
    { t: "What changed in 1992", d: "Before the amendment, panchayats existed only under State laws. States could set them up, dissolve them and postpone elections without limit, and many routinely did." },
    { t: "Elections are now compulsory too", d: "Article 243E fixes a five-year term and requires elections before it expires, or within six months of a dissolution." }
  ],
  trap: "The 73rd Amendment's real achievement was removing the State's discretion, not creating panchayats.\n\nPanchayats existed in most States before 1992. What they lacked was any guarantee of continued existence or of elections being held."
},

"243C": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 243C lets the State legislature decide how panchayats are made up. Members are directly elected from territorial wards, and the members of the intermediate and district panchayats elect their chairpersons.",
  why: "Papers tested composition, eligibility and the election of chairpersons in 2025 and 2016. The age requirement is the most often asked single fact.",
  concepts: [
    { t: "The State decides composition", d: "The State legislature may by law provide for the composition of panchayats, within the limits Part IX sets." },
    { t: "The population-to-seat ratio", d: "The ratio between the population of a panchayat area and the number of seats must be the same throughout the State, as far as practicable." },
    { t: "All seats are directly elected", d: "Members are chosen by direct election from territorial constituencies at every level, including district panchayats." },
    { t: "Minimum age is 21", d: "Anyone qualified to vote in State Assembly elections may stand for a panchayat, except that the minimum age is twenty-one, not twenty-five." },
    { t: "The village chairperson", d: "How the chairperson at village level is elected is left entirely to the State to decide by law. Some States elect directly, others indirectly." },
    { t: "Intermediate and district chairpersons", d: "The elected members of that panchayat choose the chairperson from among themselves, so the election is indirect." },
    { t: "Who else can sit on a panchayat", d: "MPs, MLAs and MLCs representing the area, and the chairpersons of lower-tier panchayats, may be given representation. MPs and MLAs vote only at intermediate and district level." }
  ],
  seen: [
    "UPSC Pre 2025 — panchayat eligibility, the age requirement and the intermediate level",
    "UPSC Pre 2016 — the minimum age for panchayat membership"
  ],
  trap: "Twenty-one is the minimum age for a panchayat. Twenty-five is the minimum for the Lok Sabha and a State Assembly.\n\nPapers deliberately place the two side by side. The lower age was set to encourage young people into local politics."
},

"243D": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 243D reserves seats in every panchayat for Scheduled Castes and Scheduled Tribes in proportion to population, and at least one-third of all seats for women. The offices of chairperson are reserved in the same way.",
  why: "Reservation in panchayats is where women's political representation in India actually began, decades before the Lok Sabha provision. The article is the standard opening for that Mains answer.",
  concepts: [
    { t: "Scheduled Castes and Tribes", d: "Seats are reserved in proportion to their population in the panchayat area. Reserved seats are rotated between constituencies." },
    { t: "Women: the one-third rule", d: "Not less than one third of all seats, including of the seats reserved for Scheduled Castes and Tribes, must go to women." },
    { t: "Chairperson posts too", d: "Not less than one third of the chairperson posts at every level must be reserved for women." },
    { t: "Backward classes", d: "The State legislature *may* reserve seats for backward classes. Reservation for backward classes is optional, unlike reservation for Scheduled Castes, Scheduled Tribes and women." },
    { t: "States went further", d: "More than twenty States have raised women's reservation to fifty percent by their own law. The Constitution sets a floor, not a ceiling." },
    { t: "The Supreme Court's cap on total reservation", d: "In K. Krishna Murthy (2010) the Court held that reservation for backward classes in local bodies, taken with SC and ST reservation, should not exceed fifty percent." }
  ],
  seen: [
    "UPSC Mains 2019 — women's reservation in local government",
    "UPSC Pre 2016 — panchayat membership requirements"
  ],
  trap: "One third is a minimum, not the actual figure in force.\n\nStates that reserve fifty per cent are not violating the Constitution. They are going above a floor. An option treating one third as a ceiling is wrong."
},

"243G": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "Article 243G lets the State legislature give panchayats the powers they need to work as institutions of self-government, including on the subjects in the Eleventh Schedule.",
  why: "Article 243G explains why devolution to panchayats stalled. The article is the direct answer to the Mains question about why local bodies remain weak.",
  concepts: [
    { t: "What it says", d: "The State legislature *may* by law endow panchayats with such powers and authority as may be necessary to enable them to function as institutions of self-government." },
    { t: "The word is \"may\"", d: "Not \"shall\". The State is permitted, not required, to transfer powers. The single word explains why devolution varies so widely between States." },
    { t: "The Eleventh Schedule", d: "The Eleventh Schedule lists 29 subjects that may be devolved, including agriculture, minor irrigation, rural housing, drinking water, poverty alleviation, education and health." },
    { t: "The Schedule transfers nothing by itself", d: "Listing a subject creates no obligation. Each subject needs a State law to actually move to the panchayat." },
    { t: "The three Fs", d: "Real devolution requires functions, funds and functionaries. Most States transferred some functions on paper without the money or the staff to perform them." },
    { t: "Kerala and Karnataka are the usual examples", d: "They devolved substantially. Most States did not, which is why the Union government publishes a Devolution Index ranking them." }
  ],
  seen: [
    "UPSC Mains 2023 — States' reluctance to empower local bodies functionally and financially",
    "UPPCS Mains 2021 — the problems of Panchayati Raj and the success of the 73rd Amendment"
  ],
  trap: "The 29 subjects in the Eleventh Schedule are illustrative, and nothing devolves automatically.\n\nSo a question asking what powers panchayats *have* is different from one asking what they *may be given*. The Constitution answers only the second."
},

"243K": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 243K puts a State Election Commission, appointed by the Governor, in charge of all panchayat elections. A State Election Commissioner can be removed only in the way a High Court judge is.",
  why: "Candidates regularly confuse the State Election Commission with the Election Commission of India, and the question is built on that confusion.",
  concepts: [
    { t: "What it creates", d: "Superintendence, direction and control of panchayat elections, including preparing electoral rolls, vests in a State Election Commission consisting of a State Election Commissioner." },
    { t: "Who appoints", d: "The Governor of the State." },
    { t: "How they are removed", d: "In the same manner and on the same grounds as a High Court judge. The rule gives real security of tenure." },
    { t: "Conditions of service protected", d: "They cannot be varied to the Commissioner's disadvantage after appointment." },
    { t: "The municipal equivalent", d: "Article 243ZA applies the same scheme to municipal elections, using the same State Election Commission." },
    { t: "The State Election Commission is entirely separate from the ECI", d: "The Election Commission of India conducts elections to Parliament, State legislatures, and the offices of President and Vice-President. The Election Commission of India has no role in local body elections." }
  ],
  trap: "The Election Commission of India has nothing to do with panchayat or municipal elections.\n\nTwo different bodies, two different appointing authorities, two entirely separate jurisdictions. Options that merge them are wrong."
},

"243M": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 243M keeps Part IX out of the Scheduled and tribal areas, out of Nagaland, Meghalaya and Mizoram, and out of the hill areas of Manipur that have District Councils. Parliament can extend Part IX to them by law.",
  why: "Article 243M is the reason PESA exists, and papers have asked about PESA directly.",
  concepts: [
    { t: "Who is excluded, and how completely", d: "Some areas are wholly out: the Scheduled Areas and tribal areas under Article 244, the States of Nagaland, Meghalaya and Mizoram, and the hill areas of Manipur that have District Councils. Only partly out: the hill areas of Darjeeling, where clause (3) excludes just the *district-level* panchayat provisions, leaving the rest of Part IX to apply. A third, narrower carve-out is clause (3A). The clause stops Article 243D's reservation of seats for Scheduled Castes from applying in Arunachal Pradesh alone." },
    { t: "Why", d: "The excluded areas already have their own systems of tribal self-government, under the Fifth and Sixth Schedules or under separate arrangements." },
    { t: "Two ways back in", d: "Clause (4)(b) lets Parliament extend Part IX to Scheduled and tribal areas, with exceptions and modifications. The clause expressly says that such a law is not an amendment of the Constitution. Clause (4)(a) lets Nagaland, Meghalaya or Mizoram bring Part IX in themselves, if the Assembly resolves to do so by a majority of its total membership and two thirds of those present and voting." },
    { t: "PESA, 1996", d: "The Panchayats (Extension to Scheduled Areas) Act did exactly that. PESA extends Part IX to Fifth Schedule areas with major changes." },
    { t: "What PESA gives the Gram Sabha", d: "Power to approve development plans, to be consulted before land acquisition, to control minor forest produce and minor water bodies, and to recommend on prospecting licences for minor minerals." },
    { t: "PESA covers ten States", d: "Andhra Pradesh, Chhattisgarh, Gujarat, Himachal Pradesh, Jharkhand, Madhya Pradesh, Maharashtra, Odisha, Rajasthan and Telangana." }
  ],
  seen: [
    "UPSC Pre 2013 — the objectives of the PESA Act, 1996",
    "UPSC Pre 2019 — tribal land transfer and mineral extraction in Fifth Schedule areas"
  ],
  trap: "PESA is an ordinary Act of Parliament, not a constitutional amendment.\n\nPESA does not delete Article 243M. PESA works through the escape clause in Article 243M(4)(b), which is why it can change Part IX so heavily."
},

"243Q": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 243Q says every State shall have a nagar panchayat for an area changing from rural to urban, a municipal council for a smaller urban area, and a municipal corporation for a larger one.",
  why: "The three kinds of municipality make a clean matching question, and the criteria for classifying them are often asked.",
  concepts: [
    { t: "Nagar Panchayat", d: "A nagar panchayat is for a transitional area, a place changing from rural to urban." },
    { t: "Municipal Council", d: "For a smaller urban area." },
    { t: "Municipal Corporation", d: "For a larger urban area." },
    { t: "Who decides which is which", d: "The Governor, by public notification, having regard to population, density, revenue generated for local administration, percentage of employment in non-agricultural activities, and economic importance." },
    { t: "No numbers in the Constitution", d: "The Constitution gives no population figures for any of the three. Each State fixes its own thresholds." },
    { t: "The industrial township exception", d: "The Governor may decide not to constitute a municipality in an area where municipal services are provided by an industrial establishment." },
    { t: "Part IXA", d: "Inserted by the 74th Amendment, 1992, alongside the Twelfth Schedule." }
  ],
  seen: [
    "UPSC Pre 2024 — Part IXA and the constitutional placement of municipalities"
  ],
  trap: "The Constitution gives no population thresholds at all for the three types.\n\nAny option quoting a specific figure as a constitutional requirement is wrong. The Governor decides on the listed factors, and States vary widely."
},

"243W": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 243W lets the State legislature give municipalities the powers they need to work as institutions of self-government, including on the subjects in the Twelfth Schedule.",
  why: "Article 243W is the municipal counterpart of Article 243G, and every answer on urban governance rests on it.",
  concepts: [
    { t: "What it says", d: "The State legislature may by law endow municipalities with the powers and authority needed to function as institutions of self-government." },
    { t: "Again the word is \"may\"", d: "The same permissive wording as for panchayats, with the same consequence: devolution depends entirely on State willingness." },
    { t: "The Twelfth Schedule", d: "Lists 18 subjects: urban planning, regulation of land use, roads and bridges, water supply, public health and sanitation, fire services, urban forestry, slum improvement, urban poverty alleviation, and others." },
    { t: "The article also covers committees", d: "The State may endow ward committees and other committees with powers too." },
    { t: "Why urban devolution lagged", d: "Cities generate revenue that State governments are reluctant to hand over, and parastatal bodies such as development authorities and water boards often hold the real powers." }
  ],
  seen: [
    "UPSC Mains 2023 — States' reluctance to empower urban local bodies functionally and financially",
    "UPSC Mains 2017 — the effectiveness of local self-government"
  ],
  trap: "Twenty-nine subjects for panchayats in the Eleventh Schedule. Eighteen for municipalities in the Twelfth.\n\nSwapping the two numbers is the commonest single error in local-government questions."
},

"243ZD": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 243ZD says every State shall set up a District Planning Committee to combine the plans of the panchayats and municipalities into a draft development plan for the whole district.",
  why: "The District Planning Committee is a small, precise fact that turns up in matching sets on urban and rural planning.",
  concepts: [
    { t: "What it does", d: "Every State shall constitute a District Planning Committee in each district, to consolidate the plans prepared by the panchayats and the municipalities and prepare a draft development plan for the district as a whole." },
    { t: "How it is composed", d: "At least four fifths of the members must be elected by, and from among, the elected members of the district panchayat and the municipalities in the district." },
    { t: "Rural and urban balance", d: "Representation must be in proportion to the ratio between rural and urban population in the district." },
    { t: "What the plan must consider", d: "The plan must consider matters of common interest to panchayats and municipalities. The common matters include spatial planning, sharing water and other resources, integrated infrastructure, and conservation of the environment." },
    { t: "The metropolitan version", d: "Article 243ZE requires a Metropolitan Planning Committee for every metropolitan area, meaning an area with a population of ten lakh or more." }
  ],
  trap: "Four-fifths of the members must be elected. The remaining fifth may be nominated.\n\nAnd note the difference: the District Planning Committee exists in every district, while the Metropolitan Planning Committee applies only above ten lakh population."
},

"244": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 244 says the Fifth Schedule governs the Scheduled Areas and tribes of most States. The Sixth Schedule governs the tribal areas of Assam, Meghalaya, Tripura and Mizoram.",
  why: "Papers asked about Scheduled and tribal areas in 2025, 2023, 2022, 2019 and 2015. Almost no other topic in polity comes back so often.",
  concepts: [
    { t: "Two different schemes", d: "The Fifth Schedule governs Scheduled Areas and Scheduled Tribes in States other than Assam, Meghalaya, Tripura and Mizoram. The Sixth Schedule governs the tribal areas in those four States." },
    { t: "Who declares a Scheduled Area", d: "The President, by order, after consulting the Governor. The criteria are a preponderance of tribal population, compactness, underdevelopment and marked economic disparity." },
    { t: "The Governor's special role", d: "In a Fifth Schedule area the Governor reports annually to the President, and may direct that any Act of Parliament or of the State legislature shall not apply, or shall apply with modifications." },
    { t: "Tribes Advisory Council", d: "Every Fifth Schedule State must have one, of up to twenty members, three quarters of them representatives of Scheduled Tribes in the Assembly. The Council only advises." },
    { t: "Autonomous District Councils", d: "Under the Sixth Schedule these bodies can make laws on land, forests, shifting cultivation, inheritance and marriage, run village courts, and levy certain taxes. They have real legislative and judicial power." },
    { t: "Part IX does not apply", d: "Article 243M excludes both kinds of area. PESA extends Part IX to Fifth Schedule areas with modifications." }
  ],
  seen: [
    "UPSC Pre 2025 — Scheduled Areas administration and executive power",
    "UPSC Pre 2023 — Fifth Schedule areas, presidential notification and governance",
    "UPSC Pre 2022 — Fifth Schedule areas and tribal land transfer restrictions",
    "UPSC Pre 2019 — tribal land transfer and mineral extraction",
    "UPSC Pre 2015 — the purpose of the Fifth and Sixth Schedules"
  ],
  trap: "The Fifth Schedule Tribes Advisory Council only advises. The Sixth Schedule District Councils actually legislate.\n\nThe contrast is the sharpest in tribal governance, and most questions turn on it."
},

"244A": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 244A lets Parliament form an autonomous State within Assam out of certain tribal areas, with its own legislature, its own council of ministers, or both.",
  why: "The provision for an autonomous State applies to Assam alone. The article surfaces whenever a demand for an autonomous State is in the news.",
  concepts: [
    { t: "What it permits", d: "Parliament may by law form an autonomous State within Assam, comprising some or all of the tribal areas listed in the Sixth Schedule." },
    { t: "What that State would have", d: "Its own legislature, or its own Council of Ministers, or both, with powers Parliament defines." },
    { t: "When it was added", d: "By the 22nd Amendment, 1969, in response to demands from the hill areas of what was then a much larger Assam." },
    { t: "The power was never fully used", d: "Meghalaya was created as a full State instead. The provision remains the constitutional basis of demands from Bodoland and Karbi Anglong." },
    { t: "Article 244A is unique to Assam", d: "No other State has an equivalent provision." }
  ],
  trap: "Article 244A applies only to Assam.\n\nAn option extending it to other north-eastern States, or treating it as a general provision for tribal areas, is wrong."
},

"246": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "Article 246 divides law-making power. Parliament alone makes laws on the Union List, the States alone on the State List, and both on the Concurrent List.",
  why: "Article 246 divides law-making power between the Union and the States. Every question on federalism in both papers rests on it.",
  concepts: [
    { t: "The three Lists", d: "List I is the Union List, on which only Parliament can legislate. List II is the State List, reserved to State legislatures. List III is the Concurrent List, on which both can." },
    { t: "How many entries", d: "The original figures are settled: 97 in the Union List, 66 in the State List, 47 in the Concurrent List. The current figures are not. Books give the Union List as 98 or 100 entries and the State List as 59 or 61, depending on whether omitted entries are still counted. The Concurrent List is given as 52. Do not memorise a current figure. Know the original three figures, know that the Concurrent List grew and the State List shrank, and know which subjects moved." },
    { t: "What is where", d: "Defence, foreign affairs, railways, banking, currency and atomic energy are Union. Police, public order, public health, agriculture and land are State. Criminal law, marriage, education, forests and electricity are Concurrent." },
    { t: "The Union wins ties", d: "Article 246 gives Parliament's power a non-obstante effect. On a Concurrent subject, a Union law prevails over a conflicting State law under Article 254." },
    { t: "Pith and substance", d: "When a law seems to touch more than one List, courts look at its true nature and dominant purpose. If that falls within the legislature's competence, incidental encroachment on another List does not invalidate it." },
    { t: "Colourable legislation", d: "A legislature cannot do indirectly what it cannot do directly. If it dresses up a law to appear within its competence when it is really outside, the law is struck down." },
    { t: "The 42nd Amendment shifted five subjects", d: "Education, forests, weights and measures, protection of wild animals and birds, and administration of justice moved from the State List to the Concurrent List in 1976." }
  ],
  seen: [
    "UPSC Pre 2025 — minor minerals and the division of powers over natural resources",
    "UPSC Pre 2024 — the placement of subjects across the three Lists",
    "UPPCS Mains 2021 — the Constitution as federal in structure and unitary in spirit"
  ],
  trap: "The entry counts have changed with amendments, so old figures do not match the current Schedule.\n\nAnd remember which five subjects the 42nd Amendment moved. Education and forests being Concurrent rather than State is the single most-set trap in this area."
},

"246A": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 246A gives Parliament and every State legislature the power to make laws on goods and services tax. Only Parliament can tax supplies that cross from one State to another.",
  why: "GST rewrote the fiscal constitution. The 101st Amendment is among the most examined recent amendments, and Article 246A is its core provision.",
  concepts: [
    { t: "What it does", d: "Article 246A gives Parliament and every State legislature power to make laws on goods and services tax. Both can tax the same transaction." },
    { t: "Article 246A stands outside the three Lists", d: "GST does not appear in the Union, State or Concurrent List. Article 246A is a stand-alone power that overrides Articles 246 and 254." },
    { t: "Inter-State supply is the Union's alone", d: "Where a supply crosses State borders, only Parliament can tax it. The tax on such supplies is Integrated GST, under Article 269A." },
    { t: "What was subsumed", d: "Central excise, service tax, additional customs duties, State VAT, entry tax, octroi, luxury tax and entertainment tax were all folded into GST." },
    { t: "What stayed out, and why the two are out for different reasons", d: "Alcoholic liquor for human consumption is excluded from the *definition* of GST in Article 366(12A), so it is constitutionally beyond GST altogether. The five petroleum products are crude, high speed diesel, petrol, natural gas and aviation turbine fuel. They are not excluded at all. Article 279A(5) simply leaves it to the GST Council to recommend the date from which GST will apply to them. Liquor is out for good. The petroleum products are only deferred, and bringing them in needs no amendment." },
    { t: "The Council", d: "Article 279A created the GST Council to recommend rates, exemptions and rules." },
    { t: "Mohit Minerals (2022)", d: "The Supreme Court held the Council's recommendations are persuasive, not binding on Parliament or on any State legislature." }
  ],
  seen: [
    "UPSC Mains 2023 — the 101st Amendment and its impact on federalism"
  ],
  trap: "GST is not in any of the three Lists, which is precisely why a constitutional amendment was needed.\n\nAnd since Mohit Minerals, describing the GST Council's recommendations as binding is wrong. Both Parliament and the States retain their own power."
},

"248": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 248 gives Parliament the sole power to make laws on any matter not named in the State List or the Concurrent List, including any tax not named in either.",
  why: "Residuary power is one of the clearest contrasts between Indian federalism and other federations, so questions often compare them.",
  concepts: [
    { t: "What it says", d: "Parliament has exclusive power to make any law on any matter not enumerated in the Concurrent List or the State List, including the power to impose a tax not mentioned in either." },
    { t: "Article 248 matches an entry in the Union List", d: "Entry 97 of List I is the residuary entry, saying the same thing from the other direction." },
    { t: "Who decides whether a subject is residuary", d: "The courts. And they lean against finding a subject residuary, preferring to fit it into an existing entry by generous interpretation." },
    { t: "The comparison", d: "In the United States, Australia and Switzerland the residue belongs to the states. In India and Canada it belongs to the centre." },
    { t: "Why India chose this", d: "The framers had just seen Partition. Leaving unlisted subjects with the States was thought to risk fragmentation." },
    { t: "Examples", d: "Cyberspace, the Central Vigilance Commission, and the Wealth Tax before it was abolished were all justified under residuary power." }
  ],
  seen: [
    "UPSC Pre 2017 — features of Indian federalism"
  ],
  trap: "India took its residuary power from the Canadian model, not the American.\n\nQuestions frequently list countries and ask which follow which pattern. India and Canada give the residue to the centre. The United States, Australia and Switzerland leave it with the units."
},

"249": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 249 lets Parliament make laws on a State List subject for a year at a time, if the Rajya Sabha resolves by a two-thirds majority that the national interest needs it.",
  why: "Article 249 is the Rajya Sabha's power to hand a State subject to Parliament. The power is a distinctive Indian feature, and the 2016 paper asked it directly.",
  concepts: [
    { t: "How it works", d: "If the Rajya Sabha declares by resolution that it is necessary in the national interest, Parliament may make a law on a State List subject." },
    { t: "The majority needed", d: "Two thirds of the members present and voting. Not two thirds of the total membership." },
    { t: "Only the Rajya Sabha", d: "The Lok Sabha has no equivalent power. The reasoning is that the House of the States should be the one to consent to States losing ground." },
    { t: "How long it lasts", d: "The resolution stays in force for one year, and can be renewed any number of times, each time for a year." },
    { t: "What happens afterwards", d: "The law ceases to have effect six months after the resolution expires." },
    { t: "The State keeps its own power", d: "The State legislature is not stripped of the subject. Both can legislate. If they conflict, the Union law prevails." }
  ],
  seen: [
    "UPSC Pre 2016 — Parliament's power to legislate on a State List subject by Rajya Sabha resolution, and the two-thirds requirement"
  ],
  trap: "Two thirds of members *present and voting*, not of total membership.\n\nThe bar is much lower than it looks. And the State legislature does not lose its power, a point candidates often get wrong."
},

"250": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 250 lets Parliament make laws on any State List subject while a national emergency is in force.",
  why: "Article 250 is the emergency counterpart of Article 249, and completes the set of ways Parliament can reach the State List.",
  concepts: [
    { t: "When it applies", d: "While a Proclamation of Emergency under Article 352 is in operation." },
    { t: "What Parliament can do", d: "Make laws for the whole or any part of India on any matter in the State List." },
    { t: "No resolution needed", d: "Unlike Article 249, no Rajya Sabha resolution is required. The emergency itself is enough." },
    { t: "How long the law lasts", d: "The law ceases to have effect six months after the emergency ends." },
    { t: "The State keeps its power", d: "As with Article 249, the State legislature is not suspended. The Union law simply prevails while it lasts." }
  ],
  trap: "Even during a national emergency the State legislatures continue to function and to legislate.\n\nA national emergency does not dissolve State governments. Dismissing a State government is Article 356, which is a different thing entirely."
},

"252": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 252 lets Parliament make a law on a State subject for two or more States whose legislatures ask for it. Any other State can adopt the law later by its own resolution.",
  why: "Legislation by consent is the one route by which States hand power upward of their own will. Questions ask about its unusual consequence.",
  concepts: [
    { t: "How it starts", d: "Two or more State legislatures pass resolutions asking Parliament to legislate on a State List subject for them." },
    { t: "Where the Act applies", d: "Only to the States that consented, and to any State that adopts it later by resolution." },
    { t: "The consequence States often miss", d: "Once a State consents, its own legislature can no longer amend or repeal that Act on that subject. Only Parliament can." },
    { t: "The examples", d: "The Wildlife (Protection) Act, 1972, the Urban Land (Ceiling and Regulation) Act, 1976, the Water (Prevention and Control of Pollution) Act, 1974, and the Transplantation of Human Organs Act, 1994." },
    { t: "Why it matters", d: "Article 252 shows that Indian federalism has a cooperative route as well as a coercive one, which is useful in a Mains answer." }
  ],
  trap: "Consenting States permanently lose the power to amend or repeal that law themselves.\n\nSo States are cautious about Article 252 resolutions, and questions test the detail."
},

"254": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 254 says that when a State law clashes with a Union law on a Concurrent List subject, the Union law prevails. A State law reserved for the President and given assent prevails in that State, until Parliament legislates again.",
  why: "Article 254 decides what happens when a Union law and a State law collide on a Concurrent subject. Questions apply it to a case rather than ask for a definition.",
  concepts: [
    { t: "The general rule", d: "If a State law on a Concurrent subject conflicts with a Union law, the Union law prevails and the State law is void to the extent of the conflict." },
    { t: "The exception in clause (2)", d: "If the State law was reserved for the President's consideration and received their assent, the State law prevails *in that State*." },
    { t: "But Parliament can still override", d: "Even after presidential assent, Parliament may later pass a fresh law on the subject that overrides the State law again. The State's victory is never permanent." },
    { t: "What counts as repugnancy", d: "There must be a direct conflict that cannot be reconciled, where obeying one law means disobeying the other. A mere difference in detail is not enough." },
    { t: "The occupied field doctrine", d: "If Parliament has legislated so comprehensively that it clearly intended to cover the whole subject, a State law on the same ground is void even without a direct clash." },
    { t: "The rule applies to the State List too", d: "Where Parliament validly legislates on a State subject under Articles 249, 250, 252 or 356, the same rule of Union primacy applies." }
  ],
  trap: "Presidential assent under Article 254(2) gives the State law priority only within that State, and only until Parliament legislates again.\n\nThe assent is a temporary shield, not a permanent win. The farm laws debate turned on exactly this mechanism."
},

"256": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 256 says each State must use its executive power to comply with the laws of Parliament, and the Union may give the State directions for that purpose.",
  why: "The 2023 paper asked about the Union's power to direct a State. The power also sits behind every discussion of President's rule.",
  concepts: [
    { t: "What it requires of States", d: "Every State must exercise its executive power so as to ensure compliance with the laws made by Parliament and any existing laws applying in that State." },
    { t: "The Union's power", d: "The Union executive may give directions to a State that appear necessary for that purpose." },
    { t: "Article 257 goes further", d: "The Union may direct a State not to impede Union executive power, and may direct it on the construction and maintenance of means of communication of national or military importance, and on protecting railways." },
    { t: "What happens if a State refuses", d: "Article 365 covers a State that fails to follow a direction. The President may then hold that the State's government cannot be carried on according to the Constitution." },
    { t: "Which opens the door to Article 356", d: "The finding is the trigger for President's rule. Articles 256, 257 and 365 together form the chain." }
  ],
  seen: [
    "UPSC Pre 2023 — the central government's duty and its power to direct States"
  ],
  trap: "Article 365 is the hinge. A State's refusal to obey a Union direction is not itself a ground for President's rule.\n\nThe refusal lets the President *hold* that constitutional machinery has failed, which is then a ground under Article 356. Knowing the chain matters more than knowing any one article."
},

"263": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 263 lets the President set up an Inter-State Council to inquire into disputes between States, discuss subjects of common interest, and recommend better coordination of policy.",
  why: "The 2025 paper asked about the Inter-State Council. The Council anchors any answer on cooperative federalism, and it belongs to a set of bodies whose constitutional status candidates confuse.",
  concepts: [
    { t: "What it permits", d: "The President may establish an Inter-State Council if it appears that the public interest would be served by it." },
    { t: "What it does", d: "Inquires into and advises on disputes between States, investigates subjects of common interest to the Union and the States, and makes recommendations for better coordination of policy." },
    { t: "The Council is advisory only", d: "The Council cannot decide a dispute or bind anyone. Contrast Article 131, where the Supreme Court actually adjudicates." },
    { t: "When it was set up", d: "In 1990, by presidential order, on the recommendation of the Sarkaria Commission. The Council came forty years after the Constitution." },
    { t: "Its composition", d: "The Prime Minister as chairman, all Chief Ministers, Chief Ministers or administrators of Union territories, and six Union Ministers nominated by the Prime Minister." },
    { t: "Zonal Councils are different", d: "Zonal Councils are statutory, created by the States Reorganisation Act, 1956, and not by the Constitution. There are five, plus the North Eastern Council under a separate 1971 Act." },
    { t: "NITI Aayog is neither", d: "NITI Aayog was created by an executive resolution of the Cabinet in 2015. NITI Aayog is neither constitutional nor statutory, just like the Planning Commission before it." }
  ],
  seen: [
    "UPSC Pre 2025 — the Inter-State Council, Zonal Councils, and which bodies are constitutional",
    "UPSC Pre 2013 — the non-constitutional status of the National Development Council, the Planning Commission and the Zonal Councils",
    "UPSC Mains 2020 — cooperation, competition and confrontation in the federation"
  ],
  trap: "Three levels, three different statuses, and questions test all three at once.\n\nThe Inter-State Council is constitutional in source but created by presidential order. Zonal Councils are statutory. NITI Aayog is an executive body with no legal foundation at all."
},

"266": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 266 creates the Consolidated Fund of India and of each State, into which all government revenue and loans go. Public Accounts hold all other money the government receives.",
  why: "The government's funds are a standard matching question, and the three funds are almost always asked together.",
  concepts: [
    { t: "The Consolidated Fund of India", d: "All revenues the government receives, all loans it raises, and all money it recovers from loans repaid. The Consolidated Fund is the main account." },
    { t: "How money leaves it", d: "Nothing can be withdrawn except by law, which means an appropriation Act passed by Parliament." },
    { t: "The Public Account", d: "Money where the government is only a banker or trustee, not the owner: provident funds, small savings, remittances, deposits." },
    { t: "The key difference", d: "Withdrawals from the Public Account need no parliamentary appropriation, because the money is not the government's to begin with. The government only holds the money for someone else." },
    { t: "The Contingency Fund", d: "A separate fund under Article 267, held by the President, for unforeseen expenditure. The Contingency Fund is an imprest, and Parliament must make up what is spent from it afterwards." },
    { t: "States have all three", d: "Each State has its own Consolidated Fund, Public Account and Contingency Fund on the same pattern." }
  ],
  seen: [
    "UPSC Pre 2024 — the Annual Financial Statement and the government's funds"
  ],
  trap: "The Public Account is the odd one out: money can be paid out of it without Parliament voting.\n\nThe reason is that the money is not government revenue. Questions test exactly this exception."
},

"269A": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 269A says GST on supplies between States is charged and collected by the Union, and shared between the Union and the States as Parliament decides on the GST Council's advice.",
  why: "Integrated GST is the technical core of the 101st Amendment, and it appears in question sets on fiscal federalism.",
  concepts: [
    { t: "What it covers", d: "Goods and services tax on supplies made in the course of inter-State trade or commerce." },
    { t: "Who levies and collects", d: "The Government of India alone. States have no power over inter-State supply." },
    { t: "How it is shared", d: "The proceeds are apportioned between the Union and the States in the manner Parliament provides, on the GST Council's recommendation." },
    { t: "Imports count as inter-State", d: "Supply of goods or services in the course of import into India is deemed to be inter-State supply, and so attracts IGST." },
    { t: "The State's share bypasses the Consolidated Fund", d: "The amount apportioned to a State does not form part of the Consolidated Fund of India. The Constitution makes the exception expressly." }
  ],
  trap: "IGST is apportioned directly, not shared through the ordinary divisible pool under Article 270.\n\nIGST needed its own article for that reason. Treating IGST as part of normal tax devolution is the error."
},

"270": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 270 says most taxes the Union levies are shared between the Union and the States, in the shares the Finance Commission recommends. Cesses and surcharges are not shared.",
  why: "Article 270 creates the divisible pool, the money the centre shares with the States. Every question on the Finance Commission comes back to it.",
  concepts: [
    { t: "What it provides", d: "All taxes and duties in the Union List are levied and collected by the Union, and then distributed between the Union and the States." },
    { t: "Who decides the share", d: "The President, by order, on the recommendation of the Finance Commission." },
    { t: "The current share", d: "The 15th Finance Commission recommended 41% of the divisible pool for the States, for 2021 to 2026. The share was 42 per cent under the 14th Finance Commission, and fell by one point when Jammu and Kashmir became a Union territory." },
    { t: "Cesses and surcharges are excluded", d: "Article 271 lets the Union levy a surcharge on any tax for its own purposes. Cesses and surcharges do not enter the divisible pool at all." },
    { t: "Why that matters", d: "The Union's share of cesses and surcharges has grown substantially, which means the States' effective share of total central taxes is well below 41%. The gap is the States' main fiscal grievance." },
    { t: "The 80th Amendment", d: "The amendment created the single divisible pool in 2000, on the 10th Finance Commission's recommendation. Before that, different taxes were shared under different rules." }
  ],
  seen: [
    "UPSC Pre 2025 — the 15th Finance Commission and tax-sharing formulas"
  ],
  trap: "Cesses and surcharges sit outside the divisible pool entirely.\n\nSo the headline 41% overstates what States actually receive. The gap is the strongest fact to use in an answer on fiscal federalism."
},

"275": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 275 lets Parliament give grants-in-aid from the Consolidated Fund of India to States in need of help, including grants for tribal welfare and for developing Scheduled Areas.",
  why: "Questions always contrast the grants under Article 275, which a law of Parliament provides, with the discretionary grants under Article 282, and ask about the two together.",
  concepts: [
    { t: "What Article 275 provides", d: "Grants-in-aid from the Union to States that Parliament determines to be in need of assistance." },
    { t: "They are charged", d: "Grants under Article 275 are charged on the Consolidated Fund of India, so Parliament does not vote on them." },
    { t: "Special grants for tribal welfare", d: "Specific grants to meet the cost of schemes for the welfare of Scheduled Tribes and for raising the level of administration in Scheduled Areas." },
    { t: "Given on Finance Commission advice", d: "The sums and the principles are recommended by the Finance Commission." },
    { t: "Article 282 is the discretionary route", d: "Either the Union or a State may make any grant for any public purpose, even one outside its own legislative competence." },
    { t: "Why Article 282 matters more in practice", d: "Most centrally sponsored schemes are funded under Article 282, not Article 275. States object that this lets the centre set priorities on State subjects." }
  ],
  trap: "Article 275 grants are statutory and Finance Commission-driven. Article 282 grants are discretionary and executive-driven.\n\nThe bulk of actual central transfers to States for schemes flows through Article 282, which is a strong point for a federalism answer."
},

"279A": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 279A sets up the GST Council, chaired by the Union Finance Minister, with the finance ministers of every State. The Council recommends GST rates, exemptions and model laws.",
  why: "The GST Council is the most cited example of cooperative federalism in India. A 2022 judgment changed how it must be described, which makes older study material unreliable.",
  concepts: [
    { t: "Who sits on it", d: "The Union Finance Minister as chairperson, the Union Minister of State for Finance or Revenue, and the Finance Minister or another nominated minister from every State." },
    { t: "How votes are weighted", d: "The Union's vote counts for one third of the total votes cast. All the States together count for two thirds." },
    { t: "The threshold", d: "A decision needs three quarters of the weighted votes of members present and voting." },
    { t: "What that means in practice", d: "The Union alone cannot pass a decision, because one third is below three quarters. The States alone cannot either, because two thirds is also below three quarters. Neither side can act without some support from the other." },
    { t: "Quorum", d: "One half of the total number of members." },
    { t: "What it recommends", d: "Rates, exemptions, model laws, the threshold turnover for exemption, and special provisions for the north-eastern and hill States." },
    { t: "Mohit Minerals (2022)", d: "The Supreme Court held the Council's recommendations are only persuasive. Parliament and the State legislatures both retain independent power to legislate on GST under Article 246A." }
  ],
  seen: [
    "UPSC Mains 2023 — the 101st Amendment and federalism"
  ],
  trap: "Neither the Union nor the States hold a decisive bloc on their own.\n\nThe Union has a one-third share, which is a blocking minority but not a majority. Describing the Union as having a veto is imprecise: it can block, but it cannot decide alone."
},

"280": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "Article 280 says the President shall set up a Finance Commission every five years. The Commission recommends how tax money is shared between the Union and the States, and among the States.",
  why: "The Finance Commission is asked in some form nearly every year. Prelims asks about its composition and status, and Mains about what its recommendations mean for the States.",
  concepts: [
    { t: "When it is constituted", d: "By the President, every fifth year or earlier if the President thinks it necessary." },
    { t: "Composition", d: "A chairman and four other members, all appointed by the President. Parliament prescribes their qualifications by law." },
    { t: "The three core functions", d: "First, the Commission recommends how net tax proceeds are shared between the Union and the States, and among the States. Second, the Commission lays down the principles for grants-in-aid from the Consolidated Fund of India. Third, the Commission recommends ways to add to State funds so that States can support their panchayats and municipalities." },
    { t: "The local-government function was added later", d: "By the 73rd and 74th Amendments in 1992." },
    { t: "The recommendations are not binding", d: "They are advisory. The government must lay each recommendation, with an explanatory memorandum on the action taken, before both Houses of Parliament." },
    { t: "In practice", d: "The tax-devolution recommendation has always been accepted. Grant recommendations are frequently modified or ignored." },
    { t: "The 15th Commission", d: "Chaired by N.K. Singh, it reported for 2021 to 2026, recommending 41% devolution and using the 2011 census rather than 1971." }
  ],
  seen: [
    "UPSC Pre 2025 — the 15th Finance Commission and tax-sharing formulas",
    "UPSC Pre 2014 — bodies associated with planning",
    "UPSC Mains 2021 — the 14th Finance Commission's recommendations",
    "UPPCS Mains 2024 — the Finance Commission and regional disparity",
    "UPPCS Mains 2022 — the Finance Commission in centre-State financial relations"
  ],
  trap: "The recommendations bind nobody, yet the tax-devolution one has never been rejected.\n\nBoth halves of that are true and both are examinable. In the Constitution the recommendation is only advice. In political practice it is always accepted."
},

"300A": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 300A says no person shall be deprived of property except by authority of law.",
  why: "The 44th Amendment turned property from a Fundamental Right into an ordinary constitutional right in 1978. The change is one of the most reliably asked facts about amendments in the whole syllabus.",
  concepts: [
    { t: "What it says", d: "No person shall be deprived of his property save by authority of law." },
    { t: "What the 44th Amendment did", d: "In 1978 it deleted Article 19(1)(f), the right to acquire, hold and dispose of property, and deleted Article 31, the right against deprivation of property. The amendment inserted Article 300A in Part XII instead." },
    { t: "Why the location matters", d: "Part XII is not Part III. So property is now a constitutional and legal right, but not a Fundamental Right." },
    { t: "The practical consequence", d: "You cannot go to the Supreme Court under Article 32 for a property violation. You can still go to a High Court under Article 226." },
    { t: "Why it was done", d: "Land reform and nationalisation laws kept being struck down as violating the right to property. Removing it from Part III ended that conflict." },
    { t: "Courts have rebuilt some protection", d: "The Supreme Court has read a requirement of fair compensation and due procedure into Article 300A, calling it a human right in Vidya Devi (2020)." },
    { t: "One place property is still fundamental", d: "Article 30(1A) protects compensation when the State acquires property of a minority educational institution." }
  ],
  seen: [
    "UPSC Pre 2021 — the right to property as a legal rather than a Fundamental Right"
  ],
  trap: "Property is not a Fundamental Right, but it is not unprotected either.\n\nArticle 300A still requires a valid law, and the courts have read fairness into it. And the 44th Amendment removed the general right, not every trace of property from Part III."
},

"301": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 301 says trade, commerce and intercourse throughout India shall be free, subject to the rest of Part XIII.",
  why: "Freedom of trade across State borders comes up whenever entry taxes, checkposts or barriers between States are in the news.",
  concepts: [
    { t: "What it says", d: "Trade, commerce and intercourse throughout the territory of India shall be free." },
    { t: "But heavily qualified", d: "Articles 302 to 305 immediately allow restrictions. The word \"free\" cannot be read on its own." },
    { t: "The freedom binds the State, not private parties", d: "The freedom is against legislative and executive action, not against a private business refusing to trade." },
    { t: "Only direct restrictions are caught", d: "Atiabari Tea (1961) and Automobile Transport (1962) held that only a law that directly and immediately restricts the movement of trade is hit. Taxes that merely add to cost are not." },
    { t: "Jindal Stainless (2016)", d: "A nine-judge bench discarded the compensatory tax doctrine that had been built on Automobile Transport, and held that a non-discriminatory tax does not by itself violate Article 301." },
    { t: "\"Intercourse\" is wider than trade", d: "The word covers movement and dealings in general, not only commercial transactions." }
  ],
  seen: [
    "UPSC Pre 2024 — inter-State subjects and commerce across the Lists"
  ],
  trap: "The word is \"free\", but four articles immediately qualify it.\n\nAfter Jindal Stainless, an ordinary non-discriminatory tax does not offend Article 301. Treating any tax on inter-State movement as unconstitutional is wrong."
},

"302": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 302 lets Parliament restrict trade between States, or within a State, in the public interest. Articles 303 and 304 then limit what Parliament and the States may do.",
  why: "Article 302 and the two articles after it balance Article 301, and they contain a requirement of procedure that examiners like.",
  concepts: [
    { t: "Article 302", d: "Parliament may impose restrictions on the freedom of trade in the public interest." },
    { t: "Article 303: no preference", d: "Neither Parliament nor a State legislature may give preference to one State over another, or discriminate between States, on the basis of a trade entry in any List." },
    { t: "The scarcity exception", d: "Parliament alone may discriminate if it declares that it is necessary to do so to deal with a situation arising from a scarcity of goods. A State cannot." },
    { t: "Article 304(a): taxing imports", d: "A State may tax goods imported from other States, but only if similar goods produced within the State are taxed at the same rate. No discrimination." },
    { t: "Article 304(b): reasonable restrictions", d: "A State may impose reasonable restrictions on trade in the public interest, but such a Bill needs the President's *previous* sanction before it is introduced." }
  ],
  trap: "A State Bill under Article 304(b) needs the President's previous sanction before it is introduced.\n\nBut missing that sanction does not by itself kill the Act. Article 255 says a requirement of recommendation or previous sanction is a matter of procedure only, and the Act is not invalid on that ground alone if the President later assented to it. So a fault in the order of steps can be cured, but a failure of the test of reasonableness cannot."
},

"310": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 310 says Union civil servants hold office during the pleasure of the President, and State civil servants during the pleasure of the Governor, except as the Constitution provides.",
  why: "The doctrine of pleasure is the rule that Article 311 then cuts down, so the two are always examined together.",
  concepts: [
    { t: "What it says", d: "Members of the defence services and civil services of the Union hold office during the pleasure of the President. State civil servants hold office during the pleasure of the Governor." },
    { t: "Where it comes from", d: "The English common law rule that a Crown servant serves at the Crown's pleasure and can be dismissed at will." },
    { t: "The doctrine is not absolute in India", d: "The article itself says \"except as expressly provided by this Constitution\". Article 311 is that express provision, and it is a large exception." },
    { t: "Who is outside the doctrine entirely", d: "Supreme Court and High Court judges, the Comptroller and Auditor-General, the Chief Election Commissioner, and the Chairman and members of the Union Public Service Commission. They have judge-like removal procedures instead." },
    { t: "Contractual appointments", d: "Where a person is appointed on contract, compensation may be paid for early termination, and the article expressly permits this." }
  ],
  trap: "Pleasure is the rule and Article 311 is the exception, but the exception covers almost every civil servant.\n\nSo describing Indian civil servants as removable at will is wrong. What survives of the doctrine is mainly its application to the armed forces, who do not get Article 311's full protection."
},

"311": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 311 says no civil servant can be dismissed by an authority lower than the one that appointed them. Nor can one be dismissed, removed or reduced in rank without an inquiry and a fair hearing.",
  why: "Article 311 protects civil servants from arbitrary dismissal. Questions ask about the three exceptions to that protection.",
  concepts: [
    { t: "The first protection", d: "No civil servant may be dismissed or removed by an authority subordinate to the one that appointed them." },
    { t: "The second protection", d: "No dismissal, removal or reduction in rank without an inquiry, in which the person is informed of the charges and given a reasonable opportunity to answer them." },
    { t: "Exception one: conviction", d: "Where the person is dismissed on the ground of conduct that led to a conviction on a criminal charge, no inquiry is needed." },
    { t: "Exception two: impracticability", d: "No inquiry is needed where the disciplinary authority records in writing that holding one is not reasonably practicable. An example is when witnesses are being intimidated." },
    { t: "Exception three: security of the State", d: "Where the President or Governor is satisfied that an inquiry would not be expedient in the interest of the security of the State." },
    { t: "Who is covered", d: "Members of a civil service of the Union or a State, and persons holding a civil post. Defence personnel are not covered." },
    { t: "What is not covered", d: "Compulsory retirement, transfer, reversion at the end of a probation, and the termination of a temporary appointment are not \"dismissal, removal or reduction in rank\"." }
  ],
  trap: "The protection covers only dismissal, removal and reduction in rank.\n\nCompulsory retirement in the public interest, transfer and the end of a probation all fall outside Article 311, which is how governments move inconvenient officers without triggering it."
},

"312": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 312 lets Parliament create new All-India Services, common to the Union and the States, if the Rajya Sabha resolves by a two-thirds majority that the national interest needs it.",
  why: "The All-India Services are a distinctive feature of Indian federalism. The way to create a new one mirrors Article 249, which is instructive.",
  concepts: [
    { t: "How a new service is created", d: "The Rajya Sabha must declare by resolution, supported by two thirds of members present and voting, that it is necessary in the national interest. Parliament may then create the service by law." },
    { t: "Why the Rajya Sabha", d: "Because an All-India Service affects the States, and the Rajya Sabha is the House of the States. Article 249 follows the same logic." },
    { t: "The existing services", d: "The Indian Administrative Service and the Indian Police Service were continued from before the Constitution. The Indian Forest Service was created in 1966 using this procedure." },
    { t: "The unusual feature", d: "Officers are recruited and trained by the Union and are subject to Union disciplinary control, but they serve in the States. So the centre supplies the States' senior administrators." },
    { t: "The all-India judicial service", d: "Article 312(2) expressly contemplates one, and says it shall not include any post inferior to that of a district judge. The service has never been created, despite repeated proposals." },
    { t: "The criticism", d: "States argue that officers loyal to the centre for their careers cannot be fully answerable to State governments. Supporters argue it is a unifying force." }
  ],
  seen: [
    "UPPCS Mains 2021 — the role of civil services in a democratic setup"
  ],
  trap: "Only the Rajya Sabha can start the process, and only by a two-thirds majority of those present and voting.\n\nThe Lok Sabha cannot initiate an All-India Service. The power is one of the few real powers that the Upper House alone holds."
},

"315": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 315 says there shall be a Union Public Service Commission and a Public Service Commission for each State. Two or more States may agree to share a Joint Commission.",
  why: "The Public Service Commissions are constitutional bodies. Questions test their composition and the split between who appoints members and who removes them.",
  concepts: [
    { t: "What it creates", d: "A Union Public Service Commission for the Union, and a Public Service Commission for each State." },
    { t: "Joint Commissions", d: "Two or more States may ask Parliament to create a Joint State Public Service Commission for them, by law." },
    { t: "The UPSC can serve a State", d: "If the Governor of a State requests and the President approves, the UPSC may perform functions for that State." },
    { t: "Who appoints", d: "The President appoints the Chairman and members of the UPSC and of a Joint Commission. The Governor appoints those of a State Commission." },
    { t: "Composition is not fixed", d: "The Constitution does not fix the number of members. The President determines it for the UPSC, and the Governor for a State Commission. About half must have held government office for at least ten years." },
    { t: "Tenure", d: "Members of the UPSC serve six years or until 65. Members of a State Commission serve six years or until 62." }
  ],
  trap: "A State Public Service Commission is created by the Constitution. A Joint State Public Service Commission is created by Parliament.\n\nAnd note the split: the Governor appoints State Commission members, but only the President can remove them."
},

"317": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 317 says only the President can remove a member of a Public Service Commission, and for misbehaviour only after an inquiry by the Supreme Court.",
  why: "The removal procedure is the sharpest fact in this group, because the authority that appoints a member is not always the one that removes.",
  concepts: [
    { t: "Only the President can remove", d: "The rule applies to members of the UPSC, of a Joint Commission, and of any State Public Service Commission, even though a Governor appoints the last of these." },
    { t: "Misbehaviour needs a Supreme Court inquiry", d: "The President makes the reference to the Supreme Court under Article 317 itself. Article 145 only supplies the procedure the Court follows in the inquiry. Only if the Court then reports that the member ought to be removed can the President remove them, and that report binds." },
    { t: "The other grounds", d: "The President may remove a member who is adjudged insolvent, engages in paid employment outside their duties, or is unfit through infirmity of mind or body. No Supreme Court reference is needed for these." },
    { t: "Suspension pending inquiry", d: "The President may suspend a member of the UPSC or a Joint Commission while a reference is pending. For a State Commission, the Governor may suspend." },
    { t: "What counts as misbehaviour", d: "The article defines one instance: being concerned or interested in any contract or agreement made by the Government of India or a State, or participating in its profit." }
  ],
  trap: "A Governor appoints a State Public Service Commission member but cannot remove one.\n\nOnly the President can, and for misbehaviour only after a Supreme Court inquiry whose advice binds. The split is the whole point of the article."
},

"320": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 320 says the Public Service Commissions conduct examinations for government jobs, and must be consulted on recruitment, promotions, transfers and disciplinary matters.",
  why: "Questions ask the functions of the Public Service Commissions as a list. The catch is that their advice does not bind the government.",
  concepts: [
    { t: "The main duty", d: "To conduct examinations for appointments to the services of the Union and of the States." },
    { t: "What they are consulted on", d: "The Commission is consulted on methods of recruitment, on the principles for appointments, promotions and transfers, and on the suitability of candidates. The Commission is also consulted on disciplinary matters affecting civil servants, and on claims for costs and pensions arising from official duties." },
    { t: "The advice is not binding", d: "The government may reject the Commission's advice. The point matters more than any other about Article 320." },
    { t: "But rejection must be explained", d: "Where the government does not accept the advice, it must lay a memorandum explaining the reasons before Parliament or the State legislature. The check is political, not legal." },
    { t: "Exemptions", d: "The President or Governor may make regulations specifying matters on which the Commission need not be consulted. The regulations must be laid before the legislature." },
    { t: "The annual report", d: "Article 323 requires the Commission to present an annual report on its work, which is laid before the legislature along with a memorandum on any advice rejected." }
  ],
  trap: "The UPSC only advises, and the government can ignore it.\n\nThe only consequence is having to explain the rejection to the legislature. Calling the advice binding is the standard error."
},

"323A": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 323A lets Parliament set up administrative tribunals to decide disputes about the recruitment and service conditions of government employees.",
  why: "Administrative tribunals and the L. Chandra Kumar ruling make a compact story that Mains likes and Prelims can test in one line.",
  concepts: [
    { t: "What it permits", d: "Parliament may by law establish administrative tribunals to decide disputes about recruitment and conditions of service of persons appointed to public services." },
    { t: "Only Parliament", d: "A State legislature cannot create a tribunal under Article 323A, even for its own services. The point is the first difference from Article 323B." },
    { t: "Where it came from", d: "The 42nd Amendment, 1976, on the recommendation of the Swaran Singh Committee. The amendment added Part XIVA." },
    { t: "The law that followed", d: "The Administrative Tribunals Act, 1985, which created the Central Administrative Tribunal and allows State Administrative Tribunals." },
    { t: "The exclusion clause", d: "Article 323A(2)(d) originally allowed Parliament to exclude the jurisdiction of all courts except the Supreme Court under Article 136. So the High Courts could not review the tribunals' decisions." },
    { t: "L. Chandra Kumar (1997)", d: "A seven-judge bench struck that down. Judicial review by High Courts under Articles 226 and 227 is part of the basic structure and cannot be excluded." },
    { t: "The result", d: "Tribunal decisions now go first to a division bench of the relevant High Court, not straight to the Supreme Court." }
  ],
  seen: [
    "UPSC Mains 2019 — the Central Administrative Tribunal as a judicial authority",
    "UPSC Mains 2018 — tribunals' jurisdiction against that of ordinary courts"
  ],
  trap: "The power to exclude High Court jurisdiction was written into the Constitution and then struck down by the Court.\n\nSo the text of Article 323A(2)(d) still reads as if exclusion is permitted, but it is not. Reading the bare article without knowing L. Chandra Kumar gives the wrong answer."
},

"323B": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 323B lets Parliament or a State legislature set up tribunals for other kinds of dispute, such as taxation, land reform, industrial disputes, rent and elections.",
  why: "The second article on tribunals differs from the first in three specific ways, and questions test exactly those differences.",
  concepts: [
    { t: "The subjects it covers", d: "Taxation, foreign exchange, industrial and labour disputes, land reforms, ceiling on urban property, elections to Parliament and State legislatures, food supplies, and rent and tenancy matters." },
    { t: "Difference one: who can legislate", d: "Both Parliament and a State legislature may establish tribunals under Article 323B. Only Parliament can under 323A." },
    { t: "Difference two: the subjects", d: "323A covers only service matters. 323B covers a long list of other subjects." },
    { t: "Difference three: hierarchy", d: "323B expressly allows a hierarchy of tribunals. 323A contemplates only one tribunal for the Union and one for each State, with no appellate tier." },
    { t: "Same origin", d: "Both were inserted by the 42nd Amendment, 1976." },
    { t: "Same limit", d: "L. Chandra Kumar applies here too. High Court review under Articles 226 and 227 cannot be excluded." }
  ],
  trap: "Three differences, all examinable: who legislates, what subjects, and whether a hierarchy is allowed.\n\nQuestions typically give you one article and ask which statements apply to it. Holding all three differences is the safest preparation."
}

});
