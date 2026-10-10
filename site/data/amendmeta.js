/* The 106 amendments in plain words, for the Amendments page and for the panel
   that opens when an amendment is named on an article page.

     short   the amendment in a few words
     what    what it changed
     list    the changes one by one, for the largest amendments
     why     what led to it
     court   what the courts later did with it
     cases   ids of the judgments on this site that it links to
     key     1 for the amendments the exam returns to most
     struck  1 if a court struck down part of it, 2 if all of it
     t       topics: r rights, q reservation, p Parliament and elections,
             s the Union and the States, c courts, e Emergency, m taxes,
             l panchayats and municipalities, n land and property, g languages
     year    only where the official footnotes do not date the amendment

   The articles each amendment touched are not listed here. Those are read
   from the official footnotes, in data/amendments.js.

   House style, as for the model paragraphs: plain words, one fact to a
   sentence, no sentence over 35 words, no semicolons or dashes, and no
   sentence opening on a bare This, That or It. */
window.COI_AMEND_META = {
1: { key: 1, t: "n r q",
  short: "Land reform protected, and new limits on free speech",
  what: "The 1st Amendment created the Ninth Schedule. A law placed in the Ninth Schedule cannot be struck down for violating a fundamental right. The first laws placed there were land-reform laws.",
  list: [
    "Article 31A and Article 31B protected laws that took over large estates.",
    "Article 15(4) allowed special provision for socially and educationally backward classes, Scheduled Castes and Scheduled Tribes.",
    "Article 19(2) added public order, friendly relations with foreign States and incitement to an offence as grounds for limiting free speech."
  ],
  why: "Courts had begun to strike down laws that took land from big landlords. In Champakam Dorairajan (1951) the Supreme Court also struck down caste quotas in Madras colleges. In Romesh Thappar (1950) the Court had read the limits on free speech narrowly. Parliament changed the Constitution to answer all three.",
  court: "In I.R. Coelho (2007) the Supreme Court held that laws added to the Ninth Schedule after 24 April 1973 can still be tested against the basic structure.",
  cases: ["champakam-dorairajan-1951", "romesh-thappar-1950", "ir-coelho-2007"] },

2: { year: "1952", t: "p",
  short: "More voters for each Lok Sabha seat",
  what: "The Constitution had said that one Lok Sabha member could represent no more than 7.5 lakh people. The 2nd Amendment removed that ceiling. So the seats could be shared out again as the population grew." },

3: { t: "s",
  short: "Union and States both control essential goods",
  what: "The 3rd Amendment rewrote one entry in the Concurrent List. The Concurrent List holds the subjects on which both Parliament and the States can make laws. After the change, both could control the trade, production and supply of essential goods, such as food." },

4: { t: "n r",
  short: "Courts cannot question compensation for land taken",
  what: "When the State takes private property for public use, the owner is paid compensation. The 4th Amendment said courts could not ask whether that compensation was enough. The amendment also added more laws to the Ninth Schedule.",
  why: "In Bela Banerjee (1954) the Supreme Court had said that compensation must be a fair price. Parliament wanted land reform to go ahead without paying market prices." },

5: { t: "s",
  short: "A time limit for States to give views on new boundaries",
  what: "Under Article 3, Parliament can change a State's area, boundaries or name. The President first sends the Bill to that State's legislature for its views. The 5th Amendment let the President set a time limit for those views. The views do not bind Parliament." },

6: { t: "m s",
  short: "Union tax on sales between States",
  what: "The 6th Amendment made a tax on the sale of goods from one State to another a Union subject. Parliament could now tax such sales. The money raised was handed over to the States." },

7: { key: 1, t: "s c",
  short: "States redrawn on the lines of language",
  what: "The 7th Amendment ended the four classes of States, called Part A, B, C and D. In their place came two kinds of unit: States and Union territories. The change carried out the States Reorganisation Act of 1956, which redrew most States on the lines of language.",
  list: [
    "Two or more States could share one High Court.",
    "Additional and acting judges could be appointed to the High Courts."
  ],
  why: "Before 1956, Part A States were the old British provinces and Part B States were the former princely States. Movements for States based on language, such as the one for Andhra, led to the States Reorganisation Commission." },

8: { year: "1960", t: "q p",
  short: "Reserved seats extended to 1970",
  what: "The Constitution reserved seats in the Lok Sabha and the State Assemblies for Scheduled Castes and Scheduled Tribes, at first for ten years. Anglo-Indian members could also be nominated. The 8th Amendment extended both by ten more years, to 1970." },

9: { t: "s",
  short: "Part of Berubari handed to Pakistan",
  what: "The 9th Amendment changed the First Schedule, which lists the States and their territories. The change transferred part of the Berubari Union in West Bengal to Pakistan, under the 1958 agreement between Nehru and Feroz Khan Noon.",
  why: "In the Berubari case (1960) the Supreme Court advised that India can give up its territory only by amending the Constitution. An ordinary law under Article 3 is not enough.",
  cases: ["berubari-union-1960"] },

10: { t: "s",
  short: "Dadra and Nagar Haveli joins India",
  what: "The 10th Amendment made Dadra and Nagar Haveli, freed from Portuguese rule, a Union territory of India. Since 2020 it has formed one Union territory with Daman and Diu." },

11: { t: "p",
  short: "A new way to elect the Vice-President",
  what: "The Vice-President was first elected by the two Houses of Parliament meeting together. The 11th Amendment replaced the joint meeting with an electoral college of the members of both Houses. An election of the President or Vice-President also cannot be challenged only because some seats in the electoral college were empty." },

12: { year: "1962", t: "s",
  short: "Goa, Daman and Diu join India",
  what: "The 12th Amendment made Goa, Daman and Diu, freed from Portuguese rule in 1961, a Union territory of India." },

13: { t: "s",
  short: "Nagaland becomes a State",
  what: "The 13th Amendment created the State of Nagaland, with special protections in Article 371A. Laws made by Parliament on Naga religious and social practices, customary law and ownership of land apply to Nagaland only if its Assembly agrees." },

14: { t: "s",
  short: "Puducherry joins, and Union territories get legislatures",
  what: "The 14th Amendment brought Puducherry, a former French territory, into India as a Union territory. The amendment also added Article 239A, which lets Parliament create a legislature and a council of ministers for some Union territories." },

15: { t: "c",
  short: "High Court judges retire at 62",
  what: "The 15th Amendment raised the retirement age of High Court judges from 60 to 62. A High Court could also issue writs to an authority outside its territory, if the cause of the case arose inside it." },

16: { t: "r",
  short: "Freedoms limited to protect India's sovereignty",
  what: "The 16th Amendment added the sovereignty and integrity of India as a ground for limiting the freedoms in Article 19, such as speech and association. Candidates and legislators must now swear to uphold the sovereignty and integrity of India in the oaths set out in the Third Schedule.",
  why: "The change came after the war with China in 1962 and during calls for a separate Dravida Nadu in the south." },

17: { t: "n",
  short: "More land laws protected",
  what: "The 17th Amendment widened the meaning of 'estate' in Article 31A, so that more kinds of land fell under land reform. The amendment also added 44 more land-reform laws to the Ninth Schedule." },

18: { t: "s",
  short: "New States can be made from Union territories",
  what: "Article 3 lets Parliament form new States. The 18th Amendment made clear that the word 'State' there includes a Union territory. So Parliament can also form a State out of a Union territory." },

19: { t: "p c",
  short: "Election tribunals abolished",
  what: "Election disputes were first heard by special election tribunals. The 19th Amendment ended that system. Election petitions now go to the High Courts." },

20: { t: "c",
  short: "Appointments of district judges saved",
  what: "In Chandra Mohan (1966) the Supreme Court found that some district judges in Uttar Pradesh had been appointed in the wrong way. The 20th Amendment added Article 233A, which made those appointments and their judgments valid." },

21: { t: "g",
  short: "Sindhi added to the Eighth Schedule",
  what: "The 21st Amendment added Sindhi to the Eighth Schedule, the list of the languages of India. The list went from 14 languages to 15." },

22: { t: "s",
  short: "Meghalaya formed inside Assam",
  what: "The 22nd Amendment added Article 244A, which let Parliament form an autonomous State inside Assam for certain tribal areas. Meghalaya was formed in this way in 1970, and became a full State in 1972." },

23: { t: "q p",
  short: "Reserved seats extended to 1980",
  what: "The 23rd Amendment extended the reserved seats for Scheduled Castes and Scheduled Tribes, and the nomination of Anglo-Indian members, by ten more years, to 1980. The amendment also limited the nomination of Anglo-Indian members to State Assemblies." },

24: { key: 1, t: "c r",
  short: "Parliament can amend fundamental rights",
  what: "The 24th Amendment said Parliament can amend any part of the Constitution, fundamental rights included. Article 13 strikes down laws that take away fundamental rights, and the amendment said Article 13 does not apply to amendments. The President must also sign an amendment Bill once both Houses have passed it.",
  why: "In Golak Nath (1967) the Supreme Court had held that Parliament could not take away or cut down a fundamental right, even by amending the Constitution. The 24th Amendment was Parliament's reply.",
  court: "In Kesavananda Bharati (1973) the Supreme Court upheld the amendment. But the Court added a limit. Parliament cannot change the basic structure of the Constitution.",
  cases: ["golak-nath-1967", "kesavananda-bharati-1973"] },

25: { key: 1, struck: 1, t: "r n",
  short: "Property rights cut down, and Article 31C added",
  what: "When the State took property, Article 31 had promised 'compensation'. The 25th Amendment replaced that word with 'amount', and said courts could not ask whether the amount was enough. The amendment also added Article 31C. A law made to share out the community's resources fairly, under Article 39(b) and (c), could not be struck down for limiting the rights in Articles 14, 19 or 31.",
  why: "In the Bank Nationalisation case (1970) the Supreme Court had struck down the takeover of 14 banks, because the compensation was not fair. Parliament wanted to stop courts from testing the price paid.",
  court: "In Kesavananda Bharati (1973) the Supreme Court upheld most of the amendment. The Court struck down the part that stopped courts from checking whether a law really served Article 39(b) and (c).",
  cases: ["kesavananda-bharati-1973"] },

26: { key: 1, t: "",
  short: "Privy purses of the former rulers ended",
  what: "When the princely States joined India, their rulers were promised a yearly payment called a privy purse, along with titles and privileges. The 26th Amendment ended the official recognition of the rulers. The privy purses and privileges ended with it.",
  why: "In 1970 the government had tried to end the privy purses by a presidential order. The Supreme Court struck the order down in the Privy Purses case. Parliament then made the change through the Constitution." },

27: { t: "s",
  short: "Mizoram and Arunachal Pradesh become Union territories",
  what: "The 27th Amendment made provision for Mizoram and Arunachal Pradesh as Union territories in the North-East. The amendment also added Article 239B, which lets the administrators of some Union territories make ordinances, and Article 371C on the hill areas of Manipur." },

28: { t: "",
  short: "Special terms of the old ICS officers ended",
  what: "Officers of the Indian Civil Service, recruited under British rule, had been guaranteed special terms of service. The 28th Amendment added Article 312A, which let Parliament change or end those terms." },

29: { t: "n",
  short: "Two Kerala land laws protected",
  what: "The 29th Amendment added two Kerala land-reform laws to the Ninth Schedule, so they could not be challenged for violating fundamental rights.",
  why: "Kesavananda Bharati, the head of a monastery in Kerala, had challenged these land laws. His case became the most important case on amendments.",
  cases: ["kesavananda-bharati-1973"] },

30: { t: "c",
  short: "Civil appeals to the Supreme Court on points of law",
  what: "A civil case could go to the Supreme Court on appeal if at least ₹20,000 was involved. The 30th Amendment removed the money test. An appeal now needs a substantial question of law of general importance." },

31: { t: "p",
  short: "Lok Sabha enlarged to 545 elected seats",
  what: "The 31st Amendment raised the largest possible number of elected Lok Sabha members from 525 to 545. The seats for the Union territories were cut." },

32: { t: "s",
  short: "Fair shares for the regions of Andhra Pradesh",
  what: "The 32nd Amendment added Articles 371D and 371E. Article 371D lets the President make sure the regions of Andhra Pradesh get fair shares of government jobs and seats in education. Article 371E provided for a central university in the State." },

33: { t: "p",
  short: "Resignations from legislatures must be genuine",
  what: "The 33rd Amendment lets the Speaker or Chairman refuse a member's resignation if it is not voluntary and genuine. The change aimed at resignations forced out of members by threats or pressure.",
  why: "During the Navnirman agitation in Gujarat in 1974, crowds pressed many members of the Assembly to resign." },

34: { t: "n",
  short: "Twenty more land-ceiling laws protected",
  what: "The 34th Amendment added 20 more State laws on land ceilings to the Ninth Schedule. A land-ceiling law limits how much land one family may own." },

35: { t: "s",
  short: "Sikkim becomes an associate State",
  what: "The 35th Amendment made Sikkim, until then a protectorate of India, an associate State of the Union under a new Article 2A. The terms were set out in a new Tenth Schedule, which the 36th Amendment removed. The present Tenth Schedule, on defection, came in 1985." },

36: { key: 1, t: "s",
  short: "Sikkim becomes a full State",
  what: "The 36th Amendment made Sikkim the 22nd State of India, with special provisions in Article 371F. The amendment removed Article 2A and the associate-State arrangement.",
  why: "In April 1975 a referendum in Sikkim voted to end the monarchy and join India." },

37: { year: "1975", t: "s",
  short: "A legislature for Arunachal Pradesh",
  what: "The 37th Amendment gave the Union territory of Arunachal Pradesh a Legislative Assembly and a council of ministers." },

38: { t: "e c",
  short: "Emergency decisions put beyond the courts",
  what: "The 38th Amendment was passed during the Emergency. Courts could no longer question the President's decision to declare an emergency, or ordinances made by the President and the Governors. The 44th Amendment later undid these changes." },

39: { key: 1, struck: 1, t: "p c e",
  short: "The Prime Minister's election put beyond the courts",
  what: "The 39th Amendment added Article 329A. Disputes about the election of the Prime Minister or the Speaker would no longer go to the courts. A case already pending on such an election would end.",
  why: "In June 1975 the Allahabad High Court set aside Indira Gandhi's election to the Lok Sabha for electoral malpractice. The Emergency was declared within two weeks, and the 39th Amendment followed in August.",
  court: "In Indira Nehru Gandhi v. Raj Narain (1975) the Supreme Court struck down the clause that ended the pending case. The Court held that free and fair elections are part of the basic structure. The 44th Amendment later removed Article 329A.",
  cases: ["indira-nehru-gandhi-v-raj-narain-1975"] },

40: { t: "n s",
  short: "Limits at sea, and more laws protected",
  what: "The 40th Amendment let Parliament fix the limits of India's territorial waters, continental shelf and exclusive economic zone. The amendment also added 64 more laws to the Ninth Schedule." },

41: { t: "",
  short: "State Public Service Commission members retire at 62",
  what: "The 41st Amendment raised the retirement age of members of the State Public Service Commissions from 60 to 62." },

42: { key: 1, struck: 1, t: "r p c e s",
  short: "The mini-Constitution of the Emergency",
  what: "The 42nd Amendment was passed in 1976, during the Emergency. The amendment changed more of the Constitution than any other, and is often called the mini-Constitution.",
  list: [
    "The Preamble gained the words 'socialist', 'secular' and 'integrity'.",
    "Ten Fundamental Duties were added, in a new Part IVA.",
    "New directive principles were added: free legal aid in Article 39A, workers' share in running industries in Article 43A, and protection of the environment in Article 48A.",
    "Five subjects moved from the State List to the Concurrent List: education, forests, wild animals and birds, weights and measures, and the administration of justice.",
    "The President was bound to act on the advice of the Council of Ministers.",
    "The term of the Lok Sabha and the State Assemblies went up from five years to six.",
    "Tribunals for service matters and other disputes were allowed, in a new Part XIVA.",
    "Courts were barred from questioning any constitutional amendment.",
    "All the directive principles were given priority over the rights in Articles 14 and 19."
  ],
  court: "In Minerva Mills (1980) the Supreme Court struck down two parts. One stopped courts from reviewing amendments, and the other put all directive principles above Articles 14 and 19. The Court held that judicial review, and the balance between rights and directive principles, are part of the basic structure. In L. Chandra Kumar (1997) the Court held that decisions of the new tribunals can still be challenged in the High Courts.",
  cases: ["minerva-mills-1980", "l-chandra-kumar-1997"] },

43: { t: "c e",
  short: "The courts' powers restored",
  what: "The 43rd Amendment was passed by the Janata government after the Emergency. The amendment repealed several articles added by the 42nd. The Supreme Court and the High Courts got back their power to review whether laws are constitutional." },

44: { key: 1, t: "e r p n",
  short: "Undoing the Emergency",
  what: "The 44th Amendment was passed by the Janata government. The amendment undid much of the 42nd, and made another emergency harder to declare.",
  list: [
    "An emergency can be declared for 'armed rebellion', but no longer for 'internal disturbance'.",
    "The President can declare an emergency only on the written advice of the Cabinet.",
    "Each House must approve an emergency within one month, by a special majority.",
    "The rights in Articles 20 and 21, on punishment for offences and on life and personal liberty, cannot be suspended even in an emergency.",
    "The right to property left the fundamental rights. Article 300A now protects it as an ordinary legal right.",
    "The terms of the Lok Sabha and the State Assemblies went back to five years.",
    "The President can send the advice of the Council of Ministers back once for reconsideration, but must accept it after that."
  ],
  why: "The Janata Party won the 1977 election after the Emergency. The party had promised to restore the Constitution." },

45: { t: "q p",
  short: "Reserved seats extended to 1990",
  what: "The 45th Amendment extended the reserved seats for Scheduled Castes and Scheduled Tribes, and the nomination of Anglo-Indian members, by ten more years, to 1990." },

46: { t: "m",
  short: "Sales tax on works contracts and hire purchase",
  what: "Courts had held that some deals were not sales of goods, so States could not tax them as sales. Examples were works contracts, where goods are used in building something, and hire purchase. The 46th Amendment added Article 366(29A), which treats such deals as sales for tax." },

47: { t: "n",
  short: "More land laws protected",
  what: "The 47th Amendment added another group of State land-reform laws to the Ninth Schedule." },

48: { year: "1984", t: "e s",
  short: "President's rule in Punjab beyond one year",
  what: "President's rule in a State normally cannot go on for more than one year. The 48th Amendment let President's rule in Punjab continue beyond one year, during the militancy there." },

49: { t: "s",
  short: "Self-rule for Tripura's tribal areas",
  what: "The 49th Amendment brought the tribal areas of Tripura under the Sixth Schedule. The Sixth Schedule lets tribal areas in the North-East run many of their own affairs through autonomous district councils." },

50: { t: "r",
  short: "Rights of security staff can be limited",
  what: "Article 33 lets Parliament limit the fundamental rights of the armed forces and the police, to keep discipline. The 50th Amendment extended the same power to intelligence agencies, and to staff of the communication systems set up for the forces." },

51: { t: "q",
  short: "Seats for Scheduled Tribes in four North-Eastern States",
  what: "The 51st Amendment reserved seats for Scheduled Tribes from Meghalaya, Nagaland, Arunachal Pradesh and Mizoram, both in the Lok Sabha and in the State Assemblies." },

52: { key: 1, struck: 1, t: "p",
  short: "The anti-defection law",
  what: "The 52nd Amendment added the Tenth Schedule, known as the anti-defection law. A member of Parliament or a State legislature loses the seat on leaving the party, or on voting against the party's instruction, called the whip. The Speaker or Chairman of the House decides these cases. A split by one-third of a party's members was allowed at first. A merger backed by two-thirds is still allowed.",
  why: "In the 1960s and 1970s many legislators changed parties for office or money, and governments fell as a result. In 1967 a Haryana legislator, Gaya Lal, changed party several times within days. The phrase 'Aaya Ram, Gaya Ram' comes from him.",
  court: "In Kihoto Hollohan (1992) the Supreme Court upheld the law. But the Court struck down the clause that kept courts out. The Speaker's decision on disqualification can be reviewed by the courts.",
  cases: ["kihoto-hollohan-1992"] },

53: { t: "s",
  short: "Mizoram becomes a State",
  what: "The 53rd Amendment added Article 371G, which protects Mizo religious and social practices, customary law and ownership of land. Parliament's laws on these matters apply to Mizoram only if its Assembly agrees. Mizoram became a State in 1987.",
  why: "The change followed the Mizo Peace Accord of 1986, which ended twenty years of insurgency." },

54: { t: "c",
  short: "Judges' salaries raised",
  what: "The 54th Amendment raised the salaries of the judges of the Supreme Court and the High Courts. Parliament can now change their salaries by an ordinary law, without amending the Constitution." },

55: { t: "s",
  short: "Arunachal Pradesh becomes a State",
  what: "The 55th Amendment made Arunachal Pradesh a State in 1987. Article 371H gives its Governor a special responsibility for law and order." },

56: { t: "s",
  short: "Goa becomes a State",
  what: "The 56th Amendment made Goa a State in 1987. Article 371I says its Assembly must have at least 30 members. Daman and Diu stayed a Union territory." },

57: { t: "q",
  short: "Seats for Scheduled Tribes in North-Eastern Assemblies",
  what: "The 57th Amendment set out how seats are reserved for Scheduled Tribes in the Assemblies of Arunachal Pradesh, Meghalaya, Mizoram and Nagaland, where most of the people are tribal." },

58: { year: "1987", t: "g",
  short: "An authoritative Hindi text of the Constitution",
  what: "The 58th Amendment added Article 394A. The President must publish an authoritative text of the Constitution in Hindi, and of each amendment as it is made." },

59: { year: "1988", t: "e",
  short: "Emergency powers for Punjab",
  what: "The 59th Amendment allowed an emergency to be declared in Punjab on the ground of internal disturbance, and extended President's rule there. The 63rd Amendment repealed these provisions." },

60: { t: "m",
  short: "A higher limit on profession tax",
  what: "States may tax professions, trades and jobs, but only up to the limit set in Article 276. The 60th Amendment raised that limit from ₹250 to ₹2,500 a year." },

61: { key: 1, t: "p",
  short: "Voting age lowered to 18",
  what: "The 61st Amendment lowered the voting age for Lok Sabha and State Assembly elections from 21 to 18. Young people aged 18 to 20 first voted in the general election of 1989." },

62: { t: "q p",
  short: "Reserved seats extended to 2000",
  what: "The 62nd Amendment extended the reserved seats for Scheduled Castes and Scheduled Tribes, and the nomination of Anglo-Indian members, by ten more years, to 2000." },

63: { t: "e",
  short: "Punjab emergency powers repealed",
  what: "The 63rd Amendment repealed the special emergency powers for Punjab added by the 59th Amendment." },

64: { t: "e s",
  short: "President's rule in Punjab extended",
  what: "The 64th Amendment extended President's rule in Punjab to three and a half years." },

65: { t: "q",
  short: "A national commission for Scheduled Castes and Tribes",
  what: "Article 338 first provided a single Special Officer to look after the safeguards for Scheduled Castes and Scheduled Tribes. The 65th Amendment replaced the officer with a National Commission of several members." },

66: { t: "n",
  short: "More land laws protected",
  what: "The 66th Amendment added another group of State land-ceiling laws to the Ninth Schedule." },

67: { t: "e s",
  short: "President's rule in Punjab extended to four years",
  what: "The 67th Amendment extended President's rule in Punjab to four years." },

68: { t: "e s",
  short: "President's rule in Punjab extended to five years",
  what: "The 68th Amendment extended President's rule in Punjab to five years." },

69: { key: 1, t: "s",
  short: "Delhi becomes the National Capital Territory",
  what: "The 69th Amendment added Articles 239AA and 239AB. Delhi became the National Capital Territory, with an elected Legislative Assembly and a council of ministers led by a Chief Minister. Police, public order and land stay with the Union. The Lieutenant Governor represents the Union." },

70: { t: "p",
  short: "Delhi and Puducherry legislators vote for the President",
  what: "The 70th Amendment added the elected members of the Assemblies of Delhi and Puducherry to the electoral college that elects the President." },

71: { t: "g",
  short: "Konkani, Manipuri and Nepali added",
  what: "The 71st Amendment added Konkani, Manipuri and Nepali to the Eighth Schedule. The list went from 15 languages to 18." },

72: { year: "1992", t: "q",
  short: "Seats for Scheduled Tribes in Tripura",
  what: "The 72nd Amendment made a temporary rule for reserving seats for Scheduled Tribes in the Tripura Assembly." },

73: { key: 1, t: "l",
  short: "Panchayati Raj",
  what: "The 73rd Amendment gave village panchayats a place in the Constitution, in a new Part IX and the Eleventh Schedule. Before it, a State could hold panchayat elections or put them off as it liked.",
  list: [
    "Most States have three levels: the village, the block and the district. A State with fewer than 20 lakh people may leave out the middle level.",
    "Every panchayat has a five-year term. A new one must be elected before the term ends.",
    "Seats are reserved for Scheduled Castes and Scheduled Tribes, and at least one-third of the seats for women.",
    "A State Election Commission runs panchayat elections.",
    "A State Finance Commission reviews panchayat finances every five years.",
    "The Eleventh Schedule lists 29 subjects that States may hand over to panchayats."
  ],
  why: "The idea of elected village government goes back to the Balwantrai Mehta Committee of 1957. The amendment came into force on 24 April 1993, now marked as National Panchayati Raj Day." },

74: { key: 1, t: "l",
  short: "Municipalities",
  what: "The 74th Amendment did for towns and cities what the 73rd did for villages. Part IXA and the Twelfth Schedule give municipalities a place in the Constitution.",
  list: [
    "There are three kinds: a nagar panchayat for an area changing from rural to urban, a municipal council for a smaller town, and a municipal corporation for a large city.",
    "Each has a five-year term, with seats reserved for Scheduled Castes and Scheduled Tribes, and at least one-third of the seats for women.",
    "A municipality with three lakh people or more must have ward committees.",
    "District planning committees and metropolitan planning committees draw up development plans.",
    "The Twelfth Schedule lists 18 subjects, such as town planning, water supply and fire services."
  ] },

75: { t: "c",
  short: "Tribunals for rent disputes",
  what: "Article 323B lets legislatures set up tribunals for certain kinds of dispute. The 75th Amendment added disputes over rent and tenancy to that list, so States could create rent tribunals." },

76: { t: "q n",
  short: "Tamil Nadu's 69 per cent reservation protected",
  what: "The 76th Amendment placed the Tamil Nadu law that reserves 69 per cent of seats and posts in the Ninth Schedule. The aim was to protect the law from challenge, because Indra Sawhney (1992) had capped reservation at 50 per cent.",
  court: "In I.R. Coelho (2007) the Supreme Court held that laws placed in the Ninth Schedule after 24 April 1973 can still be tested against the basic structure.",
  cases: ["indra-sawhney-1992", "ir-coelho-2007"] },

77: { key: 1, t: "q r",
  short: "Reservation in promotions",
  what: "The 77th Amendment added Article 16(4A). States may reserve posts in promotions for Scheduled Castes and Scheduled Tribes who are not adequately represented in government service.",
  why: "In Indra Sawhney (1992) the Supreme Court had said that reservation applies when people join a service, not in promotions. The amendment reversed that part of the judgment.",
  court: "In M. Nagaraj (2006) the Supreme Court upheld the amendment, with conditions. A State must collect data showing that the group is under-represented, and must keep the administration efficient.",
  cases: ["indra-sawhney-1992", "m-nagaraj-2006"] },

78: { t: "n",
  short: "More land laws protected",
  what: "The 78th Amendment added 27 more land-reform laws to the Ninth Schedule, taking the list to 284 laws." },

79: { t: "q p",
  short: "Reserved seats extended to 2010",
  what: "The 79th Amendment extended the reserved seats for Scheduled Castes and Scheduled Tribes, and the nomination of Anglo-Indian members, by ten more years, to 2010." },

80: { t: "m s",
  short: "States get a share of all Union taxes",
  what: "The 80th Amendment rewrote Articles 269 and 270, on the advice of the Tenth Finance Commission. Before the change, the States shared only some Union taxes, mainly income tax and excise duty. After the change, the States get a share of all Union taxes taken together." },

81: { t: "q",
  short: "Unfilled reserved posts carried forward",
  what: "Reserved posts that stay empty in a year can be carried forward to later years. The 81st Amendment added Article 16(4B). Posts carried forward are counted separately, so the 50 per cent limit applies only to each year's new posts." },

82: { t: "q",
  short: "Lower qualifying marks in promotions",
  what: "Article 335 says the claims of Scheduled Castes and Scheduled Tribes to government posts must be balanced with efficiency. The 82nd Amendment added that States may still relax qualifying marks and standards of evaluation for them in promotions." },

83: { t: "l q",
  short: "No Scheduled Caste seats in Arunachal panchayats",
  what: "Arunachal Pradesh has no Scheduled Caste population. The 83rd Amendment said its panchayats need not reserve seats for Scheduled Castes." },

84: { t: "p",
  short: "Seats among States frozen until after 2026",
  what: "The number of Lok Sabha and Assembly seats each State gets was fixed on the 1971 census. The 84th Amendment kept that freeze until the first census after 2026. Constituency boundaries inside each State could still be redrawn, using the 1991 census.",
  why: "The 42nd Amendment first froze the shares until 2000. States that brought down their population growth, mostly in the south, would otherwise have lost seats to States that did not." },

85: { t: "q",
  short: "Seniority kept on promotion",
  what: "The 85th Amendment changed Article 16(4A). Scheduled Caste and Scheduled Tribe employees promoted through reservation keep the seniority that comes with the promotion. The change applied from June 1995.",
  cases: ["m-nagaraj-2006"] },

86: { key: 1, t: "r",
  short: "Education becomes a fundamental right",
  what: "The 86th Amendment added Article 21A. Every child aged six to fourteen has a fundamental right to free and compulsory education. The Right to Education Act of 2009 put Article 21A into effect on 1 April 2010.",
  list: [
    "Article 45 now asks the State to provide early childhood care and education for children under six.",
    "A new Fundamental Duty, Article 51A(k), asks parents to give their children these chances of education."
  ] },

87: { t: "p",
  short: "Constituencies redrawn on the 2001 census",
  what: "The 87th Amendment allowed constituency boundaries to be redrawn using the 2001 census instead of the 1991 census. The share of seats among the States stayed frozen." },

88: { t: "m",
  short: "Service tax",
  what: "The 88th Amendment added Article 268A on service tax. The tax would be charged by the Union, and collected and kept by both the Union and the States. The 101st Amendment removed Article 268A when GST replaced service tax." },

89: { t: "q",
  short: "Separate commissions for Scheduled Castes and Scheduled Tribes",
  what: "The 89th Amendment split the National Commission for Scheduled Castes and Scheduled Tribes into two. One is for Scheduled Castes, under Article 338, and one for Scheduled Tribes, under the new Article 338A." },

90: { t: "s p",
  short: "Bodoland seats in the Assam Assembly",
  what: "The 90th Amendment kept the existing representation of the Bodoland Territorial Areas District in the Assam Assembly." },

91: { key: 1, t: "p",
  short: "Smaller ministries, and stricter defection rules",
  what: "The 91st Amendment limited the size of governments and tightened the anti-defection law.",
  list: [
    "The Council of Ministers, Prime Minister or Chief Minister included, can be no more than 15 per cent of the members of the Lok Sabha or the State Assembly.",
    "Every State must still have at least 12 ministers, however small its Assembly.",
    "The anti-defection law no longer allows a split by one-third of a party.",
    "A member disqualified for defection cannot become a minister, or hold any paid political post, until elected again."
  ],
  why: "Coalition governments had grown very large ministries to keep their partners happy. The split exception had also made group defections easy." },

92: { t: "g",
  short: "Bodo, Dogri, Maithili and Santhali added",
  what: "The 92nd Amendment added Bodo, Dogri, Maithili and Santhali to the Eighth Schedule. The list now has 22 languages." },

93: { t: "q r",
  short: "Reservation in private colleges",
  what: "The 93rd Amendment added Article 15(5). The State may reserve seats for backward classes, Scheduled Castes and Scheduled Tribes in educational institutions, private ones included, whether or not they get government aid. Minority institutions are left out.",
  why: "In P.A. Inamdar (2005) the Supreme Court had said that the State could not impose reservation on private colleges that get no government aid.",
  court: "In Pramati Educational Trust (2014) the Supreme Court upheld Article 15(5)." },

94: { t: "s",
  short: "Tribal welfare ministers for Jharkhand and Chhattisgarh",
  what: "Article 164 requires some States with large tribal populations to have a minister for tribal welfare. After Jharkhand was carved out of Bihar, the 94th Amendment dropped Bihar from the rule and added Jharkhand and Chhattisgarh. Madhya Pradesh and Odisha stayed on the list." },

95: { t: "q p",
  short: "Reserved seats extended to 2020",
  what: "The 95th Amendment extended the reserved seats for Scheduled Castes and Scheduled Tribes, and the nomination of Anglo-Indian members, by ten more years, to 2020." },

96: { t: "g",
  short: "Oriya becomes Odia",
  what: "The 96th Amendment changed the name of the language in the Eighth Schedule from Oriya to Odia." },

97: { key: 1, struck: 1, t: "r",
  short: "Co-operative societies",
  what: "The 97th Amendment made forming a co-operative society part of the fundamental right in Article 19(1)(c). Article 43B asks the State to promote co-operatives. A new Part IXB set rules for their elections, boards and accounts.",
  court: "In 2021 the Supreme Court struck down most of Part IXB. Co-operatives are a State subject, and the change had not been approved by half the State legislatures, as Article 368 requires. The rules still apply to co-operatives that work in more than one State." },

98: { t: "s",
  short: "Special status for the Hyderabad-Karnataka region",
  what: "The 98th Amendment added Article 371J for the Hyderabad-Karnataka region, now called Kalyana-Karnataka. The region gets a development board, and reserved seats in education and jobs for local people." },

99: { key: 1, struck: 2, t: "c",
  short: "The NJAC, struck down",
  what: "The 99th Amendment set up a National Judicial Appointments Commission to choose judges of the Supreme Court and the High Courts. The commission had six members: the Chief Justice of India, two senior judges, the Law Minister and two eminent persons.",
  why: "Judges were chosen by a collegium of senior judges. The government wanted a role in choosing them.",
  court: "In 2015 the Supreme Court struck the amendment down by 4 to 1. The Court held that it threatened the independence of the judiciary, which is part of the basic structure. The collegium continues.",
  cases: ["njac-case-2015"] },

100: { key: 1, t: "s",
  short: "The land boundary with Bangladesh settled",
  what: "The 100th Amendment carried out the Land Boundary Agreement with Bangladesh. The two countries exchanged enclaves, small pockets of one country's land surrounded by the other. Bangladesh received 111 enclaves and India received 51.",
  why: "The agreement was first signed in 1974. As the Berubari case had held, India can give up land only by amending the Constitution.",
  cases: ["berubari-union-1960"] },

101: { key: 1, t: "m s",
  short: "Goods and Services Tax",
  what: "The 101st Amendment created the Goods and Services Tax, GST, which began on 1 July 2017. One tax replaced many Union and State taxes, such as excise duty, service tax and sales tax.",
  list: [
    "Article 246A lets Parliament and the State legislatures both tax the supply of goods and services.",
    "Article 269A lets the Union charge GST on supplies from one State to another, and share it with the States.",
    "Article 279A sets up the GST Council, led by the Union Finance Minister, with the finance ministers of the States.",
    "A decision of the Council needs three-fourths of the weighted votes. The Union has one-third of the votes, and the States together have two-thirds.",
    "Parliament promised to make up the States' lost revenue for five years.",
    "The amendment changed the States' taxing powers, so at least half the State legislatures had to approve it."
  ],
  why: "Different taxes in each State had divided India into many markets. GST was meant to make one national market.",
  court: "In Mohit Minerals (2022) the Supreme Court held that the GST Council's recommendations guide Parliament and the States, but do not bind them." },

102: { key: 1, t: "q",
  short: "Constitutional status for the backward classes commission",
  what: "The 102nd Amendment added Article 338B, which gave the National Commission for Backward Classes a place in the Constitution. Article 342A let the President notify a central list of socially and educationally backward classes.",
  court: "In the Maratha reservation case (2021) the Supreme Court read Article 342A as taking away the States' power to make their own lists. The 105th Amendment gave that power back.",
  cases: ["maratha-reservation-2021"] },

103: { key: 1, t: "q",
  short: "Reservation for economically weaker sections",
  what: "The 103rd Amendment added Articles 15(6) and 16(6). The State may reserve up to 10 per cent of seats in education, and of government posts, for economically weaker sections. The quota is for people who do not already benefit from caste-based reservation.",
  why: "Reservation had been based on social backwardness. The 103rd Amendment was the first to make economic condition alone a ground for reservation.",
  court: "In Janhit Abhiyan (2022) the Supreme Court upheld the amendment by 3 to 2. The majority held that going above the 50 per cent limit for this quota does not breach the basic structure.",
  cases: ["janhit-abhiyan-2022"] },

104: { t: "q p",
  short: "Reserved seats to 2030, and Anglo-Indian seats ended",
  what: "The 104th Amendment extended the reserved seats for Scheduled Castes and Scheduled Tribes in the Lok Sabha and the State Assemblies to 2030. The nomination of Anglo-Indian members was not extended, so it ended in 2020." },

105: { key: 1, t: "q",
  short: "States can make their own backward class lists again",
  what: "The 105th Amendment restored the power of the States and Union territories to prepare their own lists of socially and educationally backward classes. The central list under Article 342A now serves only the Union government.",
  why: "In the Maratha reservation case (2021) the Supreme Court had read the 102nd Amendment as taking this power away from the States.",
  cases: ["maratha-reservation-2021"] },

106: { key: 1, t: "q p",
  short: "One-third of seats for women",
  what: "The 106th Amendment reserves one-third of the seats in the Lok Sabha, the State Assemblies and the Delhi Assembly for women. One-third of the seats reserved for Scheduled Castes and Scheduled Tribes also go to women from those groups. The reservation starts only after the next census and the redrawing of constituencies that follows it. The reservation then lasts for 15 years.",
  why: "A women's reservation Bill was first brought in 1996. Every earlier Bill lapsed, including one the Rajya Sabha passed in 2010. The 2023 Act is called the Nari Shakti Vandan Adhiniyam." }
};

/* The amendments in six periods, each with what was happening at the time. */
window.COI_AMEND_ERAS = [
  { from: 1, to: 20, years: "1951 to 1966", t: "Land reform and a new map",
    p: "Parliament amended the Constitution within eighteen months of its start. Courts had struck down laws that took land from large landlords, so the 1st Amendment protected those laws in a new Ninth Schedule. In 1956 the 7th Amendment redrew most States on the lines of language. Territories freed from Portugal and France joined India." },
  { from: 21, to: 42, years: "1967 to 1976", t: "Parliament against the courts, and the Emergency",
    p: "In Golak Nath (1967) the Supreme Court said Parliament could not cut down fundamental rights. Parliament replied with the 24th and 25th Amendments. In Kesavananda Bharati (1973) the Court accepted that Parliament can amend any part of the Constitution, but not its basic structure. During the Emergency of 1975 to 1977, the 38th, 39th and 42nd Amendments tried to place the government beyond the courts." },
  { from: 43, to: 63, years: "1977 to 1989", t: "Undoing the Emergency, and new States",
    p: "After the 1977 election, the Janata government used the 43rd and 44th Amendments to undo much of the 42nd. The 1980s brought the anti-defection law and the vote at 18. Mizoram, Arunachal Pradesh and Goa became States." },
  { from: 64, to: 79, years: "1990 to 1999", t: "Village and city government, and reservation",
    p: "The 73rd and 74th Amendments gave villages and towns elected governments of their own. Delhi got an elected Assembly. In Indra Sawhney (1992) the Supreme Court kept reservation out of promotions, and Parliament amended the Constitution to allow it." },
  { from: 80, to: 98, years: "2000 to 2012", t: "Education, coalitions and new commissions",
    p: "Education became a fundamental right in 2002. The 91st Amendment capped the size of ministries and tightened the anti-defection law. The share of seats among the States stayed frozen until after 2026. The Eighth Schedule reached 22 languages." },
  { from: 99, to: 106, years: "2014 to 2023", t: "GST, new reservations and seats for women",
    p: "The Supreme Court struck down the NJAC in 2015. GST began in 2017. Reservation was extended to economically weaker sections in 2019. In 2023 one-third of the seats in the Lok Sabha and the State Assemblies were reserved for women." }
];

/* How an amendment is passed, under Article 368, and the limit on it. */
window.COI_AMEND_HOW = {
  kinds: [
    { t: "Special majority of Parliament",
      need: "Each House passes the Bill by a majority of its total membership, and by two-thirds of the members present and voting.",
      ex: "Most amendments, including those on fundamental rights and directive principles." },
    { t: "Special majority, and half the States",
      need: "After both Houses pass the Bill, at least half the State legislatures must approve it by a simple majority.",
      ex: "Changes to the election of the President, the Supreme Court and the High Courts, the division of powers between the Union and the States, the States' seats in Parliament, and Article 368 itself. The 101st Amendment, on GST, went this way." },
    { t: "Simple majority, as for an ordinary law",
      need: "Some changes are made by an ordinary law of Parliament. They do not count as amendments under Article 368, and are not among the 106.",
      ex: "Forming a new State or changing a State's name under Articles 2 to 4, creating or abolishing a Legislative Council, and changes to the Fifth and Sixth Schedules." }
  ],
  rules: [
    "An amendment Bill can start in either House, and a minister or a private member can move it.",
    "The President's permission is not needed to introduce the Bill. The President must sign it once both Houses pass it.",
    "If the two Houses disagree, there is no joint sitting. The Bill fails.",
    "Parliament cannot change the basic structure of the Constitution. The Supreme Court laid down this limit in Kesavananda Bharati (1973)."
  ],
  cases: ["kesavananda-bharati-1973"]
};
