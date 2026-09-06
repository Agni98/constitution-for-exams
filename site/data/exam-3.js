/* What the examiners actually ask — Parts VIII to XIV:
   Union territories, local government, Scheduled Areas, centre-State relations,
   finance, trade, and the services.
   Schema, sources and house style: see exam-1.js. */
Object.assign(window.COI_EXAM = window.COI_EXAM || {}, {

"239": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  why: "Article 239 covers how Union territories are run. It became topical again in 2019, when Jammu and Kashmir and Ladakh were made Union territories.",
  concepts: [
    { t: "Who governs a Union territory", d: "The President, acting through an administrator appointed by them. Union territories are administered by the centre, not by a State government." },
    { t: "The administrator's title varies", d: "Lieutenant Governor in Delhi, Puducherry, Jammu and Kashmir, Ladakh and Andaman and Nicobar. Administrator in Chandigarh, Dadra and Nagar Haveli and Daman and Diu, and Lakshadweep." },
    { t: "A Governor can double up", d: "The President may appoint the Governor of a State as the administrator of an adjoining Union territory. The Governor then acts independently of their State ministers." },
    { t: "The administrator is not a Governor", d: "They are an agent of the President, not the head of a State. Their powers come from delegation, not from Part VI." },
    { t: "Some have legislatures", d: "Delhi, Puducherry and Jammu and Kashmir have Legislative Assemblies. Having one does not turn a Union territory into a State." }
  ],
  seen: ["UPSC Pre 2025 — the constitutional history of the former Part C States"],
  trap: "A Union territory with a legislature is still administered by the President through the administrator.\n\nAn elected Assembly does not change its constitutional status. Delhi has an Assembly and a Chief Minister and remains a Union territory."
},

"239AA": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  why: "The Delhi article is permanently in the news. The fight over who controls the civil services there produced two Constitution Bench rulings and a law reversing one of them.",
  concepts: [
    { t: "What it created", d: "The 69th Amendment (1991) gave Delhi the name National Capital Territory, a Legislative Assembly and a Council of Ministers." },
    { t: "What the Assembly can legislate on", d: "Any State List or Concurrent List subject, except three: public order, police and land. Those three stay with the centre." },
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
  why: "Article 243 is the definitions article for Part IX. It carries the three-tier structure rule, which is one of the most reliably asked facts about Panchayati Raj.",
  concepts: [
    { t: "What it defines", d: "District, Gram Sabha, intermediate level, panchayat, panchayat area, population and village — the vocabulary the rest of Part IX uses." },
    { t: "Gram Sabha", d: "The body consisting of all persons registered on the electoral rolls of a village within a panchayat area. It is the only direct-democracy institution in the Constitution: everyone is a member." },
    { t: "The 73rd Amendment", d: "Part IX was inserted in 1992 and came into force on 24 April 1993, now observed as Panchayati Raj Day." },
    { t: "Three tiers", d: "Village, intermediate (block) and district. All three are compulsory, with one exception." },
    { t: "The exception", d: "A State with a population below twenty lakh need not have the intermediate level. Village and district panchayats are required everywhere." },
    { t: "Where Part IX does not apply", d: "Scheduled Areas, tribal areas, and certain north-eastern States. Article 243M carves them out, and PESA extends Part IX to Scheduled Areas separately." }
  ],
  seen: ["UPSC Pre 2015 — the objectives of Panchayati Raj and democratic decentralisation"],
  trap: "Only the intermediate tier is optional, and only for States below twenty lakh population.\n\nGoa and Sikkim, for instance, run two tiers rather than three. The village and district tiers are compulsory everywhere Part IX applies.\n\nDo not confuse that exception with exclusion. Nagaland, Meghalaya and Mizoram have no panchayats under Part IX at all — Article 243M keeps the whole Part out, which is a different thing from dropping one tier."
},

"243B": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  why: "This is the article that made panchayats mandatory. Before it, a State could simply not have them, which is exactly what many States did.",
  concepts: [
    { t: "What it requires", d: "Panchayats shall be constituted at the village, intermediate and district levels in every State." },
    { t: "\"Shall\" is the operative word", d: "It is mandatory. No State may choose to have no panchayats." },
    { t: "What changed in 1992", d: "Before the amendment, panchayats existed only under State laws. States could set them up, dissolve them, and postpone elections indefinitely — and routinely did." },
    { t: "Elections are now compulsory too", d: "Article 243E fixes a five-year term and requires elections before it expires, or within six months of a dissolution." }
  ],
  trap: "The 73rd Amendment's real achievement was removing the State's discretion, not creating panchayats.\n\nPanchayats existed in most States before 1992. What they lacked was any guarantee of continued existence or of elections being held."
},

"243C": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  why: "Composition, eligibility and the election of chairpersons were all tested in 2025 and 2016. The age requirement is the single most-asked fact.",
  concepts: [
    { t: "The State decides composition", d: "The State legislature may by law provide for the composition of panchayats, within the limits Part IX sets." },
    { t: "The population-to-seat ratio", d: "The ratio between the population of a panchayat area and the number of seats must be the same throughout the State, as far as practicable." },
    { t: "All seats are directly elected", d: "Members are chosen by direct election from territorial constituencies at every level, including district panchayats." },
    { t: "Minimum age is 21", d: "Anyone qualified to vote in State Assembly elections may stand for a panchayat, except that the minimum age is twenty-one, not twenty-five." },
    { t: "The village chairperson", d: "How the chairperson at village level is elected is left entirely to the State to decide by law. Some States elect directly, others indirectly." },
    { t: "Intermediate and district chairpersons", d: "Elected by and from among the elected members of that panchayat — so indirectly." },
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
  why: "Reservation in panchayats is where women's political representation in India actually happened, decades before the Lok Sabha provision. It is the standard entry point for that Mains answer.",
  concepts: [
    { t: "Scheduled Castes and Tribes", d: "Seats are reserved in proportion to their population in the panchayat area. Reserved seats are rotated between constituencies." },
    { t: "Women — the one-third rule", d: "Not less than one third of all seats, including of the seats reserved for Scheduled Castes and Tribes, must go to women." },
    { t: "Chairperson posts too", d: "Not less than one third of the chairperson posts at every level must be reserved for women." },
    { t: "Backward classes", d: "The State legislature *may* reserve seats for backward classes. This is optional, unlike SC, ST and women's reservation." },
    { t: "States went further", d: "More than twenty States have raised women's reservation to fifty percent by their own law. The Constitution sets a floor, not a ceiling." },
    { t: "The Supreme Court's cap on total reservation", d: "In K. Krishna Murthy (2010) the Court held that reservation for backward classes in local bodies, taken with SC and ST reservation, should not exceed fifty percent." }
  ],
  seen: [
    "UPSC Mains 2019 — women's reservation in local government",
    "UPSC Pre 2016 — panchayat membership requirements"
  ],
  trap: "One third is a minimum, not the actual figure in force.\n\nStates legislating fifty percent are not violating the Constitution; they are exceeding a floor. An option treating one third as a ceiling is wrong."
},

"243G": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  why: "This article explains why devolution to panchayats stalled. It is the direct answer to the Mains question about why local bodies remain weak.",
  concepts: [
    { t: "What it says", d: "The State legislature *may* by law endow panchayats with such powers and authority as may be necessary to enable them to function as institutions of self-government." },
    { t: "The word is \"may\"", d: "Not \"shall\". The State is permitted, not required, to transfer powers. This single word is why devolution varies enormously between States." },
    { t: "The Eleventh Schedule", d: "It lists 29 subjects that may be devolved, including agriculture, minor irrigation, rural housing, drinking water, poverty alleviation, education and health." },
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
  why: "The State Election Commission is regularly confused with the Election Commission of India. That confusion is exactly what the question is built on.",
  concepts: [
    { t: "What it creates", d: "Superintendence, direction and control of panchayat elections, including preparing electoral rolls, vests in a State Election Commission consisting of a State Election Commissioner." },
    { t: "Who appoints", d: "The Governor of the State." },
    { t: "How they are removed", d: "In the same manner and on the same grounds as a High Court judge. This gives real security of tenure." },
    { t: "Conditions of service protected", d: "They cannot be varied to the Commissioner's disadvantage after appointment." },
    { t: "The municipal equivalent", d: "Article 243ZA applies the same scheme to municipal elections, using the same State Election Commission." },
    { t: "It is entirely separate from the ECI", d: "The Election Commission of India conducts elections to Parliament, State legislatures, and the offices of President and Vice-President. It has no role in local body elections." }
  ],
  trap: "The Election Commission of India has nothing to do with panchayat or municipal elections.\n\nTwo different bodies, two different appointing authorities, two entirely separate jurisdictions. Options that merge them are wrong."
},

"243M": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  why: "Article 243M excludes tribal areas from Part IX. It is the reason PESA exists, and PESA has been asked directly.",
  concepts: [
    { t: "Who is excluded, and how completely", d: "Wholly out: Scheduled Areas and tribal areas under Article 244; the States of Nagaland, Meghalaya and Mizoram; and the hill areas of Manipur that have District Councils. Only partly out: the hill areas of Darjeeling, where clause (3) excludes just the *district-level* panchayat provisions, leaving the rest of Part IX to apply. And a third, narrower carve-out: clause (3A) disapplies Article 243D — reservation of seats for Scheduled Castes — to Arunachal Pradesh alone." },
    { t: "Why", d: "These areas already have their own systems of tribal self-government, under the Fifth and Sixth Schedules or under separate arrangements." },
    { t: "Two ways back in", d: "Clause (4)(b) lets Parliament extend Part IX to Scheduled and tribal areas, subject to exceptions and modifications — and expressly says such a law is not an amendment of the Constitution. Clause (4)(a) lets Nagaland, Meghalaya or Mizoram bring Part IX in themselves, if the Assembly resolves to do so by a majority of its total membership and two thirds of those present and voting." },
    { t: "PESA, 1996", d: "The Panchayats (Extension to Scheduled Areas) Act did exactly that. It extends Part IX to Fifth Schedule areas with major changes." },
    { t: "What PESA gives the Gram Sabha", d: "Power to approve development plans, to be consulted before land acquisition, to control minor forest produce and minor water bodies, and to recommend on prospecting licences for minor minerals." },
    { t: "It covers ten States", d: "Andhra Pradesh, Chhattisgarh, Gujarat, Himachal Pradesh, Jharkhand, Madhya Pradesh, Maharashtra, Odisha, Rajasthan and Telangana." }
  ],
  seen: [
    "UPSC Pre 2013 — the objectives of the PESA Act, 1996",
    "UPSC Pre 2019 — tribal land transfer and mineral extraction in Fifth Schedule areas"
  ],
  trap: "PESA is an ordinary Act of Parliament, not a constitutional amendment.\n\nIt does not delete Article 243M. It works through the escape clause in Article 243M(4)(b), which is why it can modify Part IX so heavily."
},

"243Q": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  why: "The three kinds of municipality make a clean matching question, and the criteria for classifying them are frequently asked.",
  concepts: [
    { t: "Nagar Panchayat", d: "For a transitional area — a place changing from rural to urban." },
    { t: "Municipal Council", d: "For a smaller urban area." },
    { t: "Municipal Corporation", d: "For a larger urban area." },
    { t: "Who decides which is which", d: "The Governor, by public notification, having regard to population, density, revenue generated for local administration, percentage of employment in non-agricultural activities, and economic importance." },
    { t: "No numbers in the Constitution", d: "The Constitution gives no population figures for any of the three. Each State fixes its own thresholds." },
    { t: "The industrial township exception", d: "The Governor may decide not to constitute a municipality in an area where municipal services are provided by an industrial establishment." },
    { t: "Part IXA", d: "Inserted by the 74th Amendment, 1992, alongside the Twelfth Schedule." }
  ],
  seen: ["UPSC Pre 2024 — Part IXA and the constitutional placement of municipalities"],
  trap: "The Constitution gives no population thresholds at all for the three types.\n\nAny option quoting a specific figure as a constitutional requirement is wrong. The Governor decides on the listed factors, and States vary widely."
},

"243W": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  why: "Article 243W is the municipal counterpart of Article 243G, and the peg for every urban-governance answer.",
  concepts: [
    { t: "What it says", d: "The State legislature may by law endow municipalities with the powers and authority needed to function as institutions of self-government." },
    { t: "Again the word is \"may\"", d: "The same permissive wording as for panchayats, with the same consequence: devolution depends entirely on State willingness." },
    { t: "The Twelfth Schedule", d: "Lists 18 subjects: urban planning, regulation of land use, roads and bridges, water supply, public health and sanitation, fire services, urban forestry, slum improvement, urban poverty alleviation, and others." },
    { t: "It also covers committees", d: "The State may endow ward committees and other committees with powers too." },
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
  why: "The District Planning Committee is a small, precise fact that turns up in matching sets on urban and rural planning.",
  concepts: [
    { t: "What it does", d: "Every State shall constitute a District Planning Committee in each district, to consolidate the plans prepared by the panchayats and the municipalities and prepare a draft development plan for the district as a whole." },
    { t: "How it is composed", d: "At least four fifths of the members must be elected by, and from among, the elected members of the district panchayat and the municipalities in the district." },
    { t: "Rural and urban balance", d: "Representation must be in proportion to the ratio between rural and urban population in the district." },
    { t: "What the plan must consider", d: "Matters of common interest between panchayats and municipalities — spatial planning, sharing of water and other physical and natural resources, integrated infrastructure and environmental conservation." },
    { t: "The metropolitan version", d: "Article 243ZE requires a Metropolitan Planning Committee for every metropolitan area, meaning an area with a population of ten lakh or more." }
  ],
  trap: "Four fifths must be elected; the remaining fifth may be nominated.\n\nAnd note the difference: the District Planning Committee exists in every district, while the Metropolitan Planning Committee applies only above ten lakh population."
},

"244": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  why: "Scheduled and tribal areas were asked in 2025, 2023, 2022, 2019 and 2015. Almost no other topic in polity recurs this densely.",
  concepts: [
    { t: "Two different schemes", d: "The Fifth Schedule governs Scheduled Areas and Scheduled Tribes in States other than Assam, Meghalaya, Tripura and Mizoram. The Sixth Schedule governs the tribal areas in those four States." },
    { t: "Who declares a Scheduled Area", d: "The President, by order, after consulting the Governor. The criteria are a preponderance of tribal population, compactness, underdevelopment and marked economic disparity." },
    { t: "The Governor's special role", d: "In a Fifth Schedule area the Governor reports annually to the President, and may direct that any Act of Parliament or of the State legislature shall not apply, or shall apply with modifications." },
    { t: "Tribes Advisory Council", d: "Every Fifth Schedule State must have one, of up to twenty members, three quarters of them representatives of Scheduled Tribes in the Assembly. It only advises." },
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
  trap: "The Fifth Schedule Tribes Advisory Council only advises. The Sixth Schedule District Councils actually legislate.\n\nThat is the sharpest contrast in tribal governance and the point most questions turn on."
},

"244A": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  why: "The autonomous State provision applies to Assam alone. It surfaces whenever an autonomous-state demand is in the news.",
  concepts: [
    { t: "What it permits", d: "Parliament may by law form an autonomous State within Assam, comprising some or all of the tribal areas listed in the Sixth Schedule." },
    { t: "What that State would have", d: "Its own legislature, or its own Council of Ministers, or both, with powers Parliament defines." },
    { t: "When it was added", d: "By the 22nd Amendment, 1969, in response to demands from the hill areas of what was then a much larger Assam." },
    { t: "It was never fully used", d: "Meghalaya was created as a full State instead. The provision remains the constitutional basis of demands from Bodoland and Karbi Anglong." },
    { t: "It is unique to Assam", d: "No other State has an equivalent provision." }
  ],
  trap: "Article 244A applies only to Assam.\n\nAn option extending it to other north-eastern States, or treating it as a general provision for tribal areas, is wrong."
},

"246": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  why: "Article 246 divides law-making power between the Union and the States. It is the backbone of every federalism question in both papers.",
  concepts: [
    { t: "The three Lists", d: "List I is the Union List, on which only Parliament can legislate. List II is the State List, reserved to State legislatures. List III is the Concurrent List, on which both can." },
    { t: "How many entries", d: "The original figures are settled: 97 in the Union List, 66 in the State List, 47 in the Concurrent List. The current figures are not. Books variously give the Union List as 98 or 100 and the State List as 59 or 61, depending on whether entries that have since been omitted are still counted; the Concurrent List is given as 52. Do not memorise a current figure — know the original three, know that the Concurrent List grew and the State List shrank, and know which subjects moved." },
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
  why: "GST rewrote the fiscal constitution. The 101st Amendment is among the most examined recent amendments, and this is its core provision.",
  concepts: [
    { t: "What it does", d: "It gives Parliament and every State legislature power to make laws on goods and services tax. Both can tax the same transaction." },
    { t: "It stands outside the three Lists", d: "GST does not appear in the Union, State or Concurrent List. Article 246A is a stand-alone power that overrides Articles 246 and 254." },
    { t: "Inter-State supply is the Union's alone", d: "Where a supply crosses State borders, only Parliament can tax it. That is Integrated GST under Article 269A." },
    { t: "What was subsumed", d: "Central excise, service tax, additional customs duties, State VAT, entry tax, octroi, luxury tax and entertainment tax were all folded into GST." },
    { t: "What stayed out — and the two are not out for the same reason", d: "Alcoholic liquor for human consumption is excluded from the *definition* of GST in Article 366(12A), so it is constitutionally beyond GST altogether. The five petroleum products — crude, high speed diesel, petrol, natural gas and aviation turbine fuel — are not excluded at all: Article 279A(5) simply leaves it to the GST Council to recommend the date from which GST will be levied on them. One is out permanently; the other is only deferred, and needs no amendment to bring in." },
    { t: "The Council", d: "Article 279A created the GST Council to recommend rates, exemptions and rules." },
    { t: "Mohit Minerals (2022)", d: "The Supreme Court held the Council's recommendations are persuasive, not binding on Parliament or on any State legislature." }
  ],
  seen: ["UPSC Mains 2023 — the 101st Amendment and its impact on federalism"],
  trap: "GST is not in any of the three Lists, which is precisely why a constitutional amendment was needed.\n\nAnd since Mohit Minerals, describing the GST Council's recommendations as binding is wrong. Both Parliament and the States retain their own power."
},

"248": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  why: "Residuary power is one of the clearest contrasts between Indian federalism and other federations, which makes it a standard comparison question.",
  concepts: [
    { t: "What it says", d: "Parliament has exclusive power to make any law on any matter not enumerated in the Concurrent List or the State List, including the power to impose a tax not mentioned in either." },
    { t: "It matches an entry in the Union List", d: "Entry 97 of List I is the residuary entry, saying the same thing from the other direction." },
    { t: "Who decides whether a subject is residuary", d: "The courts. And they lean against finding a subject residuary, preferring to fit it into an existing entry by generous interpretation." },
    { t: "The comparison", d: "In the United States, Australia and Switzerland the residue belongs to the states. In India and Canada it belongs to the centre." },
    { t: "Why India chose this", d: "The framers had just seen Partition. Leaving unlisted subjects with the States was thought to risk fragmentation." },
    { t: "Examples", d: "Cyberspace, the Central Vigilance Commission, and the Wealth Tax before it was abolished were all justified under residuary power." }
  ],
  seen: ["UPSC Pre 2017 — features of Indian federalism"],
  trap: "India took its residuary power from the Canadian model, not the American.\n\nQuestions frequently list countries and ask which follow which pattern. India and Canada centralise the residue; the United States, Australia and Switzerland leave it with the units."
},

"249": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  why: "This is the Rajya Sabha's power to hand a State subject to Parliament. It is a distinctive Indian feature and was asked directly in 2016.",
  concepts: [
    { t: "How it works", d: "If the Rajya Sabha declares by resolution that it is necessary in the national interest, Parliament may make a law on a State List subject." },
    { t: "The majority needed", d: "Two thirds of the members present and voting. Not two thirds of the total membership." },
    { t: "Only the Rajya Sabha", d: "The Lok Sabha has no equivalent power. The reasoning is that the House of the States should be the one to consent to States losing ground." },
    { t: "How long it lasts", d: "The resolution stays in force for one year, and can be renewed any number of times, each time for a year." },
    { t: "What happens afterwards", d: "The law ceases to have effect six months after the resolution expires." },
    { t: "The State keeps its own power", d: "The State legislature is not stripped of the subject. Both can legislate; if they conflict, the Union law prevails." }
  ],
  seen: ["UPSC Pre 2016 — Parliament's power to legislate on a State List subject by Rajya Sabha resolution, and the two-thirds requirement"],
  trap: "Two thirds of members *present and voting*, not of total membership.\n\nThat is a much lower bar than it looks. And the State legislature does not lose its power — a point candidates routinely get wrong."
},

"250": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  why: "Article 250 is the emergency counterpart of Article 249, completing the set of ways Parliament can reach the State List.",
  concepts: [
    { t: "When it applies", d: "While a Proclamation of Emergency under Article 352 is in operation." },
    { t: "What Parliament can do", d: "Make laws for the whole or any part of India on any matter in the State List." },
    { t: "No resolution needed", d: "Unlike Article 249, no Rajya Sabha resolution is required. The emergency itself is enough." },
    { t: "How long the law lasts", d: "It ceases to have effect six months after the emergency ends." },
    { t: "The State keeps its power", d: "As with Article 249, the State legislature is not suspended. The Union law simply prevails while it lasts." }
  ],
  trap: "Even during a national emergency the State legislatures continue to function and to legislate.\n\nA national emergency does not dissolve State governments. That is Article 356, which is a different thing entirely."
},

"252": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  why: "Legislation by consent is the one route where States voluntarily hand power upward. Its unusual consequence is what gets asked.",
  concepts: [
    { t: "How it starts", d: "Two or more State legislatures pass resolutions asking Parliament to legislate on a State List subject for them." },
    { t: "Where the Act applies", d: "Only to the States that consented, and to any State that adopts it later by resolution." },
    { t: "The consequence States often miss", d: "Once a State consents, its own legislature can no longer amend or repeal that Act on that subject. Only Parliament can." },
    { t: "The examples", d: "The Wildlife (Protection) Act, 1972, the Urban Land (Ceiling and Regulation) Act, 1976, the Water (Prevention and Control of Pollution) Act, 1974, and the Transplantation of Human Organs Act, 1994." },
    { t: "Why it matters", d: "It shows Indian federalism has a cooperative route as well as a coercive one, which is useful in a Mains answer." }
  ],
  trap: "Consenting States permanently lose the power to amend or repeal that law themselves.\n\nThat is why States are cautious about Article 252 resolutions, and it is the detail questions test."
},

"254": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  why: "Repugnancy decides what happens when a Union law and a State law collide on a Concurrent subject. It is asked as an applied question rather than a definition.",
  concepts: [
    { t: "The general rule", d: "If a State law on a Concurrent subject conflicts with a Union law, the Union law prevails and the State law is void to the extent of the conflict." },
    { t: "The exception in clause (2)", d: "If the State law was reserved for the President's consideration and received their assent, the State law prevails *in that State*." },
    { t: "But Parliament can still override", d: "Even after presidential assent, Parliament may later pass a fresh law on the subject that overrides the State law again. The State's victory is never permanent." },
    { t: "What counts as repugnancy", d: "There must be a direct and irreconcilable conflict — obeying one law means disobeying the other. A mere difference in detail is not enough." },
    { t: "The occupied field doctrine", d: "If Parliament has legislated so comprehensively that it clearly intended to cover the whole subject, a State law on the same ground is void even without a direct clash." },
    { t: "It applies to the State List too", d: "Where Parliament validly legislates on a State subject under Articles 249, 250, 252 or 356, the same rule of Union primacy applies." }
  ],
  trap: "Presidential assent under Article 254(2) gives the State law priority only within that State, and only until Parliament legislates again.\n\nIt is a temporary shield, not a permanent win. The farm laws debate turned on exactly this mechanism."
},

"256": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  why: "The Union's power to direct a State was asked in 2023, and it sits behind every discussion of President's rule.",
  concepts: [
    { t: "What it requires of States", d: "Every State must exercise its executive power so as to ensure compliance with the laws made by Parliament and any existing laws applying in that State." },
    { t: "The Union's power", d: "The Union executive may give directions to a State that appear necessary for that purpose." },
    { t: "Article 257 goes further", d: "The Union may direct a State not to impede Union executive power, and may direct it on the construction and maintenance of means of communication of national or military importance, and on protecting railways." },
    { t: "What happens if a State refuses", d: "Article 365 says that if a State fails to comply with a direction, the President may hold that a situation has arisen in which the State's government cannot be carried on in accordance with the Constitution." },
    { t: "Which opens the door to Article 356", d: "That finding is the trigger for President's rule. Articles 256, 257 and 365 together form the chain." }
  ],
  seen: ["UPSC Pre 2023 — the central government's duty and its power to direct States"],
  trap: "Article 365 is the hinge. A State's refusal to obey a Union direction is not itself a ground for President's rule.\n\nIt lets the President *hold* that constitutional machinery has failed, which is then a ground under Article 356. Knowing the chain matters more than knowing any one article."
},

"263": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  why: "The Inter-State Council was asked in 2025. It anchors any answer on cooperative federalism, and it sits in a set of bodies whose constitutional status candidates confuse.",
  concepts: [
    { t: "What it permits", d: "The President may establish an Inter-State Council if it appears that the public interest would be served by it." },
    { t: "What it does", d: "Inquires into and advises on disputes between States, investigates subjects of common interest to the Union and the States, and makes recommendations for better coordination of policy." },
    { t: "It is advisory only", d: "It cannot decide a dispute or bind anyone. Contrast Article 131, where the Supreme Court actually adjudicates." },
    { t: "When it was set up", d: "In 1990, by presidential order, on the recommendation of the Sarkaria Commission. It took forty years from the Constitution." },
    { t: "Its composition", d: "The Prime Minister as chairman, all Chief Ministers, Chief Ministers or administrators of Union territories, and six Union Ministers nominated by the Prime Minister." },
    { t: "Zonal Councils are different", d: "They are statutory, created by the States Reorganisation Act, 1956 — not constitutional. There are five, plus the North Eastern Council under a separate 1971 Act." },
    { t: "NITI Aayog is neither", d: "It was created by an executive resolution of the Cabinet in 2015. It is neither constitutional nor statutory, exactly as the Planning Commission was not." }
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
  why: "The government's funds are a standard matching question, and the three are almost always asked together.",
  concepts: [
    { t: "The Consolidated Fund of India", d: "All revenues the government receives, all loans it raises, and all money it recovers from loans repaid. This is the main account." },
    { t: "How money leaves it", d: "Nothing can be withdrawn except by law — that is, by an appropriation Act passed by Parliament." },
    { t: "The Public Account", d: "Money where the government is only a banker or trustee, not the owner: provident funds, small savings, remittances, deposits." },
    { t: "The key difference", d: "Withdrawals from the Public Account need no parliamentary appropriation, because the money is not the government's to begin with. It is being held for someone else." },
    { t: "The Contingency Fund", d: "A separate fund under Article 267, held by the President, for unforeseen expenditure. It is an imprest, and must be recouped by Parliament afterwards." },
    { t: "States have all three", d: "Each State has its own Consolidated Fund, Public Account and Contingency Fund on the same pattern." }
  ],
  seen: ["UPSC Pre 2024 — the Annual Financial Statement and the government's funds"],
  trap: "The Public Account is the odd one out: money can be paid out of it without Parliament voting.\n\nThat is because it is not government revenue. Questions test exactly this exception."
},

"269A": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  why: "Integrated GST is the technical core of the 101st Amendment, and it appears in fiscal-federalism sets.",
  concepts: [
    { t: "What it covers", d: "Goods and services tax on supplies made in the course of inter-State trade or commerce." },
    { t: "Who levies and collects", d: "The Government of India alone. States have no power over inter-State supply." },
    { t: "How it is shared", d: "The proceeds are apportioned between the Union and the States in the manner Parliament provides, on the GST Council's recommendation." },
    { t: "Imports count as inter-State", d: "Supply of goods or services in the course of import into India is deemed to be inter-State supply, and so attracts IGST." },
    { t: "It bypasses the Consolidated Fund", d: "The amount apportioned to a State does not form part of the Consolidated Fund of India. This is an express carve-out." }
  ],
  trap: "IGST is apportioned directly, not shared through the ordinary divisible pool under Article 270.\n\nThat is why it needed its own article. Treating IGST as part of normal tax devolution is the error."
},

"270": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  why: "This is the divisible pool — the money the centre shares with the States. Every Finance Commission question comes back to it.",
  concepts: [
    { t: "What it provides", d: "All taxes and duties in the Union List are levied and collected by the Union, and then distributed between the Union and the States." },
    { t: "Who decides the share", d: "The President, by order, on the recommendation of the Finance Commission." },
    { t: "The current share", d: "The 15th Finance Commission recommended 41% of the divisible pool for the States, for 2021 to 2026. It was 42% under the 14th, reduced by one point when Jammu and Kashmir became a Union territory." },
    { t: "Cesses and surcharges are excluded", d: "Article 271 lets the Union levy a surcharge on any tax for its own purposes. Cesses and surcharges do not enter the divisible pool at all." },
    { t: "Why that matters", d: "The Union's share of cesses and surcharges has grown substantially, which means the States' effective share of total central taxes is well below 41%. This is their main fiscal grievance." },
    { t: "The 80th Amendment", d: "It created the single divisible pool in 2000, on the 10th Finance Commission's recommendation. Before that, different taxes were shared under different rules." }
  ],
  seen: ["UPSC Pre 2025 — the 15th Finance Commission and tax-sharing formulas"],
  trap: "Cesses and surcharges sit outside the divisible pool entirely.\n\nSo the headline 41% overstates what States actually receive. This gap is the strongest fact to deploy in a fiscal-federalism answer."
},

"275": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  why: "Statutory grants under Article 275 are always contrasted with discretionary grants under Article 282, and the pair is asked together.",
  concepts: [
    { t: "What Article 275 provides", d: "Grants-in-aid from the Union to States that Parliament determines to be in need of assistance." },
    { t: "They are charged", d: "These grants are charged on the Consolidated Fund of India, so they are not subject to a parliamentary vote." },
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
  why: "The GST Council is the most-cited example of cooperative federalism in India. A 2022 judgment changed how it must be described, which makes older material unreliable.",
  concepts: [
    { t: "Who sits on it", d: "The Union Finance Minister as chairperson, the Union Minister of State for Finance or Revenue, and the Finance Minister or another nominated minister from every State." },
    { t: "How votes are weighted", d: "The Union's vote counts for one third of the total votes cast. All the States together count for two thirds." },
    { t: "The threshold", d: "A decision needs three quarters of the weighted votes of members present and voting." },
    { t: "What that means in practice", d: "The Union alone cannot pass a decision, because one third is below three quarters. The States alone cannot either, because two thirds is also below three quarters. Neither side can act without some support from the other." },
    { t: "Quorum", d: "One half of the total number of members." },
    { t: "What it recommends", d: "Rates, exemptions, model laws, the threshold turnover for exemption, and special provisions for the north-eastern and hill States." },
    { t: "Mohit Minerals (2022)", d: "The Supreme Court held the Council's recommendations are only persuasive. Parliament and the State legislatures both retain independent power to legislate on GST under Article 246A." }
  ],
  seen: ["UPSC Mains 2023 — the 101st Amendment and federalism"],
  trap: "Neither the Union nor the States hold a decisive bloc on their own.\n\nThe Union has a one-third share, which is a blocking minority but not a majority. Describing the Union as having a veto is imprecise: it can block, but it cannot decide alone."
},

"280": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  why: "The Finance Commission is asked in some form nearly every year — in Prelims for its composition and status, in Mains for what its recommendations mean for the States.",
  concepts: [
    { t: "When it is constituted", d: "By the President, every fifth year or earlier if the President thinks it necessary." },
    { t: "Composition", d: "A chairman and four other members, all appointed by the President. Parliament prescribes their qualifications by law." },
    { t: "The three core functions", d: "Recommend how net tax proceeds should be distributed between the Union and the States, and among the States; lay down the principles governing grants-in-aid from the Consolidated Fund of India; and recommend measures to augment State funds to supplement the resources of panchayats and municipalities." },
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
  trap: "The recommendations bind nobody, yet the tax-devolution one has never been rejected.\n\nBoth halves of that are true and both are examinable. The constitutional position is advisory; the political convention is acceptance."
},

"300A": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  why: "Property was demoted from a Fundamental Right to an ordinary constitutional right in 1978. It is one of the most reliably asked amendment facts in the whole syllabus.",
  concepts: [
    { t: "What it says", d: "No person shall be deprived of his property save by authority of law." },
    { t: "What the 44th Amendment did", d: "In 1978 it deleted Article 19(1)(f), the right to acquire, hold and dispose of property, and deleted Article 31, the right against deprivation of property. It inserted Article 300A in Part XII instead." },
    { t: "Why the location matters", d: "Part XII is not Part III. So property is now a constitutional and legal right, but not a Fundamental Right." },
    { t: "The practical consequence", d: "You cannot go to the Supreme Court under Article 32 for a property violation. You can still go to a High Court under Article 226." },
    { t: "Why it was done", d: "Land reform and nationalisation laws kept being struck down as violating the right to property. Removing it from Part III ended that conflict." },
    { t: "Courts have rebuilt some protection", d: "The Supreme Court has read a requirement of fair compensation and due procedure into Article 300A, calling it a human right in Vidya Devi (2020)." },
    { t: "One place property is still fundamental", d: "Article 30(1A) protects compensation when the State acquires property of a minority educational institution." }
  ],
  seen: ["UPSC Pre 2021 — the right to property as a legal rather than a Fundamental Right"],
  trap: "Property is not a Fundamental Right, but it is not unprotected either.\n\nArticle 300A still requires a valid law, and the courts have read fairness into it. And the 44th Amendment removed the general right, not every trace of property from Part III."
},

"301": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  why: "Freedom of trade across State borders comes up whenever entry taxes, checkposts or inter-State barriers are in the news.",
  concepts: [
    { t: "What it says", d: "Trade, commerce and intercourse throughout the territory of India shall be free." },
    { t: "But heavily qualified", d: "Articles 302 to 305 immediately allow restrictions. The word \"free\" cannot be read on its own." },
    { t: "It binds the State, not private parties", d: "The freedom is against legislative and executive action, not against a private business refusing to trade." },
    { t: "Only direct restrictions are caught", d: "Atiabari Tea (1961) and Automobile Transport (1962) held that only a law that directly and immediately restricts the movement of trade is hit. Taxes that merely add to cost are not." },
    { t: "Jindal Stainless (2016)", d: "A nine-judge bench discarded the compensatory tax doctrine that had been built on Automobile Transport, and held that a non-discriminatory tax does not by itself violate Article 301." },
    { t: "\"Intercourse\" is wider than trade", d: "It covers movement and dealings generally, not only commercial transactions." }
  ],
  seen: ["UPSC Pre 2024 — inter-State subjects and commerce across the Lists"],
  trap: "The word is \"free\", but four articles immediately qualify it.\n\nAfter Jindal Stainless, an ordinary non-discriminatory tax does not offend Article 301. Treating any tax on inter-State movement as unconstitutional is wrong."
},

"302": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  why: "Article 302 and the two that follow it are the counterweight to Article 301, and they contain a procedural requirement that is a favourite detail.",
  concepts: [
    { t: "Article 302", d: "Parliament may impose restrictions on the freedom of trade in the public interest." },
    { t: "Article 303 — no preference", d: "Neither Parliament nor a State legislature may give preference to one State over another, or discriminate between States, on the basis of a trade entry in any List." },
    { t: "The scarcity exception", d: "Parliament alone may discriminate if it declares that it is necessary to do so to deal with a situation arising from a scarcity of goods. A State cannot." },
    { t: "Article 304(a) — taxing imports", d: "A State may tax goods imported from other States, but only if similar goods produced within the State are taxed at the same rate. No discrimination." },
    { t: "Article 304(b) — reasonable restrictions", d: "A State may impose reasonable restrictions on trade in the public interest, but such a Bill needs the President's *previous* sanction before it is introduced." }
  ],
  trap: "A State Bill under Article 304(b) needs the President's previous sanction before it is introduced.\n\nBut missing that sanction does not by itself kill the Act. Article 255 says a requirement of recommendation or previous sanction is a matter of procedure only, and the Act is not invalid on that ground alone if the President later assented to it. So the sequence can be cured — the substantive test of reasonableness cannot."
},

"310": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  why: "The doctrine of pleasure is the rule that Article 311 then cuts down. The two are always examined together.",
  concepts: [
    { t: "What it says", d: "Members of the defence services and civil services of the Union hold office during the pleasure of the President. State civil servants hold office during the pleasure of the Governor." },
    { t: "Where it comes from", d: "The English common law rule that a Crown servant serves at the Crown's pleasure and can be dismissed at will." },
    { t: "It is not absolute in India", d: "The article itself says \"except as expressly provided by this Constitution\". Article 311 is that express provision, and it is a large exception." },
    { t: "Who is outside the doctrine entirely", d: "Supreme Court and High Court judges, the Comptroller and Auditor-General, the Chief Election Commissioner, and the Chairman and members of the Union Public Service Commission. They have judge-like removal procedures instead." },
    { t: "Contractual appointments", d: "Where a person is appointed on contract, compensation may be paid for early termination, and the article expressly permits this." }
  ],
  trap: "Pleasure is the rule and Article 311 is the exception, but the exception covers almost every civil servant.\n\nSo describing Indian civil servants as removable at will is wrong. What survives of the doctrine is mainly its application to the armed forces, who do not get Article 311's full protection."
},

"311": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  why: "Article 311 protects civil servants from arbitrary dismissal. The three exceptions to that protection are the standard question.",
  concepts: [
    { t: "The first protection", d: "No civil servant may be dismissed or removed by an authority subordinate to the one that appointed them." },
    { t: "The second protection", d: "No dismissal, removal or reduction in rank without an inquiry, in which the person is informed of the charges and given a reasonable opportunity to answer them." },
    { t: "Exception one — conviction", d: "Where the person is dismissed on the ground of conduct that led to a conviction on a criminal charge, no inquiry is needed." },
    { t: "Exception two — impracticability", d: "Where the disciplinary authority records in writing that it is not reasonably practicable to hold an inquiry — for example where witnesses are being intimidated." },
    { t: "Exception three — security of the State", d: "Where the President or Governor is satisfied that an inquiry would not be expedient in the interest of the security of the State." },
    { t: "Who is covered", d: "Members of a civil service of the Union or a State, and persons holding a civil post. Defence personnel are not covered." },
    { t: "What is not covered", d: "Compulsory retirement, transfer, reversion at the end of a probation, and the termination of a temporary appointment are not \"dismissal, removal or reduction in rank\"." }
  ],
  trap: "The protection covers only dismissal, removal and reduction in rank.\n\nCompulsory retirement in the public interest, transfer and the end of a probation all fall outside Article 311, which is how governments move inconvenient officers without triggering it."
},

"312": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  why: "The All-India Services are a distinctive feature of Indian federalism, and the mechanism for creating a new one mirrors Article 249 in an instructive way.",
  concepts: [
    { t: "How a new service is created", d: "The Rajya Sabha must declare by resolution, supported by two thirds of members present and voting, that it is necessary in the national interest. Parliament may then create the service by law." },
    { t: "Why the Rajya Sabha", d: "Because an All-India Service affects the States, and the Rajya Sabha is the House of the States. This is the same logic as Article 249." },
    { t: "The existing services", d: "The Indian Administrative Service and the Indian Police Service were continued from before the Constitution. The Indian Forest Service was created in 1966 using this procedure." },
    { t: "The unusual feature", d: "Officers are recruited and trained by the Union and are subject to Union disciplinary control, but they serve in the States. So the centre supplies the States' senior administrators." },
    { t: "The all-India judicial service", d: "Article 312(2) expressly contemplates one, and says it shall not include any post inferior to that of a district judge. It has never been created, despite repeated proposals." },
    { t: "The criticism", d: "States argue that officers loyal to the centre for their careers cannot be fully answerable to State governments. Supporters argue it is a unifying force." }
  ],
  seen: [
    "UPPCS Mains 2021 — the role of civil services in a democratic setup"
  ],
  trap: "Only the Rajya Sabha can start the process, and only by a two-thirds majority of those present and voting.\n\nThe Lok Sabha cannot initiate an All-India Service. This is one of the few real powers the Upper House holds exclusively."
},

"315": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  why: "The Public Service Commissions are constitutional bodies. Their composition and the split between who appoints and who removes are precisely the sort of detail that gets tested.",
  concepts: [
    { t: "What it creates", d: "A Union Public Service Commission for the Union, and a Public Service Commission for each State." },
    { t: "Joint Commissions", d: "Two or more States may ask Parliament to create a Joint State Public Service Commission for them, by law." },
    { t: "The UPSC can serve a State", d: "If the Governor of a State requests and the President approves, the UPSC may perform functions for that State." },
    { t: "Who appoints", d: "The President appoints the Chairman and members of the UPSC and of a Joint Commission. The Governor appoints those of a State Commission." },
    { t: "Composition is not fixed", d: "The Constitution does not fix the number of members. The President determines it for the UPSC, and the Governor for a State Commission. About half must have held government office for at least ten years." },
    { t: "Tenure", d: "Six years or age 65 for the UPSC; six years or age 62 for a State Commission." }
  ],
  trap: "A State Public Service Commission is created by the Constitution. A Joint State Public Service Commission is created by Parliament.\n\nAnd note the split: the Governor appoints State Commission members, but only the President can remove them."
},

"317": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  why: "The removal procedure is the sharpest fact in this cluster, because the authority that appoints is not the authority that removes.",
  concepts: [
    { t: "Only the President can remove", d: "This applies to members of the UPSC, of a Joint Commission, and of any State Public Service Commission — even though a Governor appoints the last of these." },
    { t: "Misbehaviour needs a Supreme Court inquiry", d: "The reference to the Supreme Court is made by the President under Article 317 itself; Article 145 only supplies the procedure the Court follows in holding the inquiry. Only if the Court then reports that the member ought to be removed can the President remove them, and that report binds." },
    { t: "The other grounds", d: "The President may remove a member who is adjudged insolvent, engages in paid employment outside their duties, or is unfit through infirmity of mind or body. No Supreme Court reference is needed for these." },
    { t: "Suspension pending inquiry", d: "The President may suspend a member of the UPSC or a Joint Commission while a reference is pending. For a State Commission, the Governor may suspend." },
    { t: "What counts as misbehaviour", d: "The article defines one instance: being concerned or interested in any contract or agreement made by the Government of India or a State, or participating in its profit." }
  ],
  trap: "A Governor appoints a State Public Service Commission member but cannot remove one.\n\nOnly the President can, and for misbehaviour only after a Supreme Court inquiry whose advice binds. This split is the whole point of the article."
},

"320": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  why: "The functions of the Public Service Commissions are asked as a list, and the fact that their advice does not bind is the catch.",
  concepts: [
    { t: "The main duty", d: "To conduct examinations for appointments to the services of the Union and of the States." },
    { t: "What they are consulted on", d: "Methods of recruitment; principles for appointments, promotions and transfers; the suitability of candidates for these; disciplinary matters affecting civil servants; and claims for costs and pensions arising from official duties." },
    { t: "The advice is not binding", d: "The government may reject the Commission's advice. This is the single most important point about Article 320." },
    { t: "But rejection must be explained", d: "Where the government does not accept the advice, it must lay a memorandum explaining the reasons before Parliament or the State legislature. The check is political, not legal." },
    { t: "Exemptions", d: "The President or Governor may make regulations specifying matters on which the Commission need not be consulted. Those regulations must be laid before the legislature." },
    { t: "The annual report", d: "Article 323 requires the Commission to present an annual report on its work, which is laid before the legislature along with a memorandum on any advice rejected." }
  ],
  trap: "The UPSC only advises, and the government can ignore it.\n\nThe only consequence is having to explain the rejection to the legislature. Calling the advice binding is the standard error."
},

"323A": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  why: "Administrative tribunals and the L. Chandra Kumar ruling make a compact story that Mains likes and Prelims can test in one line.",
  concepts: [
    { t: "What it permits", d: "Parliament may by law establish administrative tribunals to decide disputes about recruitment and conditions of service of persons appointed to public services." },
    { t: "Only Parliament", d: "A State legislature cannot create a tribunal under Article 323A, even for its own services. This is the first difference from Article 323B." },
    { t: "Where it came from", d: "The 42nd Amendment, 1976, on the recommendation of the Swaran Singh Committee. It added Part XIVA." },
    { t: "The law that followed", d: "The Administrative Tribunals Act, 1985, which created the Central Administrative Tribunal and allows State Administrative Tribunals." },
    { t: "The exclusion clause", d: "Article 323A(2)(d) originally allowed Parliament to exclude the jurisdiction of all courts except the Supreme Court under Article 136. That meant no High Court review." },
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
  why: "The second tribunal article differs from the first in three specific ways, and those three differences are exactly what gets tested.",
  concepts: [
    { t: "The subjects it covers", d: "Taxation, foreign exchange, industrial and labour disputes, land reforms, ceiling on urban property, elections to Parliament and State legislatures, food supplies, and rent and tenancy matters." },
    { t: "Difference one — who can legislate", d: "Both Parliament and a State legislature may establish tribunals under Article 323B. Only Parliament can under 323A." },
    { t: "Difference two — the subjects", d: "323A covers only service matters. 323B covers a long list of other subjects." },
    { t: "Difference three — hierarchy", d: "323B expressly allows a hierarchy of tribunals. 323A contemplates only one tribunal for the Union and one for each State, with no appellate tier." },
    { t: "Same origin", d: "Both were inserted by the 42nd Amendment, 1976." },
    { t: "Same limit", d: "L. Chandra Kumar applies here too. High Court review under Articles 226 and 227 cannot be excluded." }
  ],
  trap: "Three differences, all examinable: who legislates, what subjects, and whether a hierarchy is allowed.\n\nQuestions typically give you one article and ask which statements apply to it. Holding all three differences is the safest preparation."
}

});
