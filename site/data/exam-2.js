/* What the examiners actually ask — Part V (the Union) and Part VI (the States).
   Schema, sources and house style: see exam-1.js. */
Object.assign(window.COI_EXAM = window.COI_EXAM || {}, {

"52": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 52 says there shall be a President of India.",
  why: "Article 52 is the first article of the chapter on the Union executive. Most question sets on the President open with it.",
  concepts: [
    { t: "What it says", d: "There shall be a President of India. The article has no other words." },
    { t: "Head of State, not head of government", d: "The President is the ceremonial head who represents the country. The Prime Minister is the working head who actually runs the government. India copied this split from Britain." },
    { t: "Where the chapter runs", d: "Articles 52 to 78 cover the Union executive: the President, the Vice-President, the Council of Ministers and the Attorney-General." }
  ],
  trap: "Article 52 creates the office. Article 53 vests the executive power of the Union in it.\n\nQuestions separate the two, and ask which article does which."
},

"54": {
  tier: 1,
  papers: ["UPSC Pre", "UPPCS Mains", "State PCS"],
  says: "Article 54 says the President is elected by an electoral college of the elected members of both Houses of Parliament and of the State Legislative Assemblies, including those of Delhi and Puducherry.",
  why: "Questions return again and again to who sits in the electoral college, and to the arithmetic of how much each vote is worth.",
  concepts: [
    { t: "Who votes", d: "The elected members of both Houses of Parliament, and the elected members of the Legislative Assemblies of all the States." },
    { t: "Who does not vote", d: "Nominated members of either House. Members of State Legislative Councils. Both are excluded, and this is the most common trap." },
    { t: "Delhi and Puducherry were added", d: "The 70th Amendment (1992) included the elected members of these two Union territory Assemblies. No other Union territory participates." },
    { t: "Why the votes have different values", d: "The system tries to give States weight in proportion to population, and to keep the total value of MLA votes equal to the total value of MP votes. So an MLA from Uttar Pradesh carries more weight than one from Sikkim." },
    { t: "The population used is frozen at 1971", d: "The 84th Amendment fixed the 1971 census for this calculation, until the first census after 2026. So the numbers do not change even as populations grow." },
    { t: "How the counting works", d: "Proportional representation by the single transferable vote, with a secret ballot. A candidate must cross a quota, so the winner always has more than half the total value of votes." }
  ],
  seen: [
    "UPSC Pre 2023 — the value of votes in the presidential election and the population ratio",
    "UPSC Pre 2018 — presidential vote value and how it varies between States",
    "UPPCS Mains 2022 — the process of electing the President of India"
  ],
  trap: "Nominated members vote in the Vice-President's election but not in the President's.\n\nThe difference is the most heavily set trap in this whole area. The reason is that the President represents the federation, so only elected representatives choose them."
},

"61": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 61 sets out how the President can be impeached for violating the Constitution. One House brings the charge, the other investigates it, and each must pass it by two-thirds of its total membership.",
  why: "Impeachment is the only way to remove a President, and its procedure differs from every other removal in the Constitution. Questions test those differences.",
  concepts: [
    { t: "The only ground", d: "Violation of the Constitution. No other ground exists. Incompetence, misconduct and illness are not grounds. And the Constitution does not define what violating it means." },
    { t: "Either House may start it", d: "Unlike a Money Bill, impeachment can begin in the Rajya Sabha or the Lok Sabha." },
    { t: "The notice requirement", d: "The charge must be preferred in a resolution signed by at least one quarter of the total members of that House, after fourteen days' written notice." },
    { t: "The majority needed", d: "Two thirds of the *total membership* of each House, not two thirds of those present and voting. The bar is much higher." },
    { t: "Nominated members do take part", d: "They cannot vote to elect the President but they can vote to remove one. State legislatures, which do elect the President, have no role in removing them." },
    { t: "The process is quasi-judicial", d: "The other House investigates the charge. The President has the right to appear and to be represented at that investigation." },
    { t: "Never used", d: "No President of India has ever been impeached." }
  ],
  seen: [
    "UPSC Pre 2022 — powers exercisable by the Lok Sabha alone, set against impeachment"
  ],
  trap: "Two thirds of *total membership* is the threshold, not two thirds of members present and voting.\n\nAnd the electoral college and the removal body are different: State Assemblies elect the President but have no say in removal, while nominated MPs do the reverse."
},

"66": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 66 says the Vice-President is elected by the members of both Houses of Parliament, by proportional representation through the single transferable vote, in a secret ballot.",
  why: "The Vice-President's election mirrors the President's, and every difference between the two can be examined.",
  concepts: [
    { t: "Who votes", d: "Members of both Houses of Parliament vote, elected and nominated alike. Nobody else is in the electoral college." },
    { t: "States have no role at all", d: "No State Assembly participates. The absence of the States is the sharpest contrast with the President's election." },
    { t: "The method", d: "Voting is by proportional representation through the single transferable vote, by secret ballot. The President is elected with the same counting system." },
    { t: "Qualifications", d: "Must be a citizen of India, at least 35 years old, and qualified to be elected to the Rajya Sabha. Note that the President must be qualified for the Lok Sabha instead." },
    { t: "How they are removed", d: "By a resolution of the Rajya Sabha passed by a majority of all its then members, and agreed to by the Lok Sabha. Fourteen days' notice is needed. No ground has to be stated." },
    { t: "The dual role", d: "The Vice-President is ex officio Chairman of the Rajya Sabha, and is not a member of it. They act as President when that office falls vacant." }
  ],
  seen: [
    "UPSC Mains 2022 — the Vice-President's role as Chairman of the Rajya Sabha"
  ],
  trap: "Two clean reversals from the President's election: the Vice-President's college includes nominated members, and excludes the States entirely.\n\nAlso note that the removal resolution must *start* in the Rajya Sabha, and no ground need be given."
},

"72": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "Article 72 gives the President the power to pardon, or to suspend, remit or commute a sentence. The power covers sentences by court-martial, offences against Union laws, and every death sentence.",
  why: "Questions test the exact scope of the power, compare it with the Governor's power under Article 161, and ask whether courts can review it.",
  concepts: [
    { t: "The five kinds of mercy", d: "Pardon wipes out both the conviction and the sentence. Commutation replaces a punishment with a lighter kind. Remission reduces the length without changing its kind. Respite gives a lighter sentence for a special reason such as pregnancy. Reprieve is a temporary stay, usually to allow a mercy plea." },
    { t: "Where the President's power is exclusive", d: "Punishments by court martial, offences against laws made by Parliament on Union subjects, and every case where the sentence is death." },
    { t: "The President acts on advice", d: "The President acts on the advice of the Council of Ministers, not personally. So a mercy decision is really the government's decision." },
    { t: "Courts can review it, but narrowly", d: "Kehar Singh (1989) and Epuru Sudhakar (2006) held the decision can be set aside if it was made without applying the mind, on irrelevant grounds, in bad faith, or arbitrarily. Courts will not sit in appeal over the merits." },
    { t: "Delay is a ground", d: "Shatrughan Chauhan (2014) held that an unexplained and inordinate delay in deciding a mercy petition is itself a reason to commute a death sentence to life imprisonment." }
  ],
  seen: [
    "UPSC Pre 2025 — the scope of the President's remission power and the limits of judicial review",
    "UPSC Pre 2014 — the President's rule-making powers",
    "UPSC Mains 2014 — delay in commuting death sentences",
    "UPPCS Mains 2023 — the Governor's pardoning power compared with the President's under Article 72"
  ],
  trap: "Only the President can pardon a death sentence. A Governor under Article 161 can suspend, remit or commute one, but cannot pardon it.\n\nThe Governor also has no power at all over court-martial sentences. The comparison rests on those two gaps."
},

"74": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "Article 74 says a Council of Ministers led by the Prime Minister aids and advises the President. The President must act on that advice, but may send it back once for reconsideration.",
  why: "Article 74 is the sentence that makes India a parliamentary democracy, not a presidential one. Parliament has amended it twice, in opposite directions, which gives it a clean history to test.",
  concepts: [
    { t: "What it provides", d: "There shall be a Council of Ministers, with the Prime Minister at its head, to aid and advise the President, who shall act in accordance with that advice." },
    { t: "Originally the wording was softer", d: "The original text said the Council was there \"to aid and advise\". The text did not say the President must follow the advice. Convention filled the gap." },
    { t: "The 42nd Amendment made it binding", d: "In 1976 the words \"who shall, in the exercise of his functions, act in accordance with such advice\" were added, removing any doubt." },
    { t: "The 44th Amendment added one pause", d: "In 1978 a proviso was added letting the President send the advice back once for reconsideration. If the Council sends the same or different advice back, the President must act on it." },
    { t: "The advice cannot be questioned in court", d: "Clause (2) says no court may inquire into what advice ministers gave the President. The clause keeps Cabinet discussions confidential." },
    { t: "But the resulting action can be", d: "S.R. Bommai (1994) held that while the advice itself is immune, the material on which a proclamation was based can be examined by a court. The shield covers the conversation, not the outcome." }
  ],
  seen: [
    "UPSC Pre 2020 — the essence of the parliamentary system and executive responsibility"
  ],
  trap: "The President may return advice only once. On the reconsidered advice they must act, whatever it says.\n\nThere is no second refusal. There is also no time limit on how long the President may take before returning the advice, and the argument about a pocket veto comes from that gap."
},

"75": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "Article 75 says the President appoints the Prime Minister, and the other ministers on the Prime Minister's advice. The Council of Ministers is collectively responsible to the Lok Sabha, and can have no more than 15 per cent of its members.",
  why: "Article 75 covers how ministers are appointed, how many there can be, how long they last and to whom they answer. Every one of those clauses has been examined.",
  concepts: [
    { t: "Appointment", d: "The President appoints the Prime Minister. The President then appoints the other ministers on the Prime Minister's advice. So in practice the Prime Minister chooses the Cabinet." },
    { t: "The 15% cap", d: "Clause (1A), added by the 91st Amendment (2003), limits the total number of ministers to 15% of the strength of the Lok Sabha. The cap was meant to stop bloated ministries being used to buy loyalty." },
    { t: "Defectors cannot be ministers", d: "Clause (1B), also from the 91st Amendment, bars a member disqualified for defection under the Tenth Schedule from being appointed a minister for the rest of that term." },
    { t: "Collective responsibility", d: "The Council of Ministers is collectively responsible to the House of the People. If the Lok Sabha passes a no-confidence motion, the whole ministry must resign, not just the minister at fault." },
    { t: "Individual responsibility", d: "Ministers hold office during the pleasure of the President. In practice the Prime Minister can have any minister removed." },
    { t: "The six-month rule", d: "A person who is not a member of either House can be made a minister, but must become a member within six months or cease to hold office." },
    { t: "Salaries are fixed by Parliament", d: "Not by the executive. The point is small, but it appears now and then." }
  ],
  seen: [
    "UPSC Pre 2022 — ranks of ministers and the 15% cap",
    "UPSC Pre 2022 — powers of the Lok Sabha alone, including the no-confidence motion",
    "UPSC Pre 2020 — executive responsibility to Parliament",
    "UPSC Pre 2015 — ministerial responsibility to the Lok Sabha"
  ],
  trap: "Collective responsibility runs to the Lok Sabha alone, not to Parliament as a whole.\n\nA minister may sit in the Rajya Sabha and still be answerable only to the Lower House. The Rajya Sabha cannot bring down a government."
},

"76": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 76 says the President appoints an Attorney-General, qualified to be a judge of the Supreme Court, to advise the Government of India on legal matters. The Attorney-General holds office during the pleasure of the President.",
  why: "The Attorney-General is the government's chief legal adviser. Questions on the office are mostly matching questions that set the Attorney-General against the Solicitor-General.",
  concepts: [
    { t: "Appointment and qualification", d: "Appointed by the President. The Attorney-General must be qualified to be a Supreme Court judge. So the person needs five years as a High Court judge, or ten years as a High Court advocate, or must be a distinguished jurist." },
    { t: "The duties", d: "To advise the Government of India on legal matters, and to perform other legal duties the President assigns." },
    { t: "Rights in Parliament", d: "The Attorney-General may speak in either House, in any joint sitting, and in any parliamentary committee of which they are a member. They have no right to vote." },
    { t: "Right of audience", d: "They can appear before any court in India. No other lawyer has so wide a right." },
    { t: "Tenure", d: "There is no fixed term and no removal procedure in the Constitution. They hold office during the President's pleasure, and conventionally resign when the government changes." },
    { t: "Not a full-time government lawyer", d: "The Attorney-General may take private practice. They may not advise against the Government of India, nor defend an accused in a criminal case without permission." },
    { t: "The Solicitor-General is different", d: "The Constitution does not create the Solicitor-General's office. The Solicitor-General and the Additional Solicitors-General assist the Attorney-General but have no right to address Parliament." }
  ],
  seen: [
    "UPSC Pre 2022 — the Attorney-General and the Solicitor-General, and participation in Parliament",
    "UPSC Mains 2019 — the role of the Attorney-General"
  ],
  trap: "Only the Attorney-General is a constitutional office. The Solicitor-General is not mentioned in the Constitution at all.\n\nSo the right to speak in Parliament belongs to the Attorney-General alone."
},

"78": {
  tier: 2,
  papers: ["UPSC Pre", "UPPCS Mains", "State PCS"],
  says: "Article 78 makes it the Prime Minister's duty to tell the President about all decisions of the Council of Ministers, and to give any information the President asks for. If the President asks, the Prime Minister must also put a single minister's decision before the full Council.",
  why: "Article 78 makes the Prime Minister the link between the government and the head of State. UPPCS asks about the duty directly.",
  concepts: [
    { t: "The three duties", d: "Communicate all decisions of the Council of Ministers to the President. Furnish any information about administration and legislation the President asks for. And if the President requires, place before the Council any matter that a single minister has decided alone." },
    { t: "Why it matters", d: "The President has no independent machinery of government. Article 78 is the only channel through which they learn what the executive is doing." },
    { t: "The limit of the President's power here", d: "The President may require a matter to be considered by the whole Council. They cannot require the decision to be reversed." },
    { t: "The duty reinforces the Prime Minister's primacy", d: "The Prime Minister is the sole formal channel between the President and the Council of Ministers. No individual minister has that access as of right." }
  ],
  seen: [
    "UPPCS Mains 2023 — the increasing powers of the Prime Minister and the effect on institutions"
  ],
  trap: "The President can force a single minister's decision to be reconsidered by the full Council, but cannot force a different outcome.\n\nThe President's power is a power to slow down, not a power to overrule."
},

"79": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 79 says Parliament consists of the President and two Houses, the Council of States and the House of the People.",
  why: "The definition of Parliament includes the President, and nearly every question on Article 79 turns on that inclusion.",
  concepts: [
    { t: "What Parliament consists of", d: "The President, the Council of States (Rajya Sabha) and the House of the People (Lok Sabha). Three components, not two." },
    { t: "The President is part of Parliament", d: "Even though they sit in neither House and never attend a debate. So a Bill is not law until the President assents." },
    { t: "The contrast with America", d: "The American President is wholly outside Congress and is not part of the legislature. Comparison questions turn on this difference." },
    { t: "The names", d: "Council of States and House of the People are the constitutional names. Rajya Sabha and Lok Sabha were adopted by the Houses themselves in 1954." }
  ],
  seen: [
    "UPSC Pre 2024 — the Union Budget and the President's recommendation"
  ],
  trap: "Because the President is part of Parliament, an Act of Parliament requires their assent. Without it, the Bill is not law.\n\nAn option describing Parliament as consisting only of the two Houses is wrong."
},

"80": {
  tier: 1,
  papers: ["UPSC Pre", "UPPCS Mains", "State PCS"],
  says: "Article 80 says the Rajya Sabha has at most 250 members. Twelve are nominated by the President, and up to 238 represent the States and Union territories, elected by their legislatures.",
  why: "Questions on Article 80 ask for the numbers, for who nominates whom, and for the rule on residence that was quietly dropped in 2003.",
  concepts: [
    { t: "The maximum strength", d: "250 members. Up to 238 represent the States and Union territories, and 12 are nominated by the President. The actual strength today is 245." },
    { t: "Who the nominated members are", d: "People with special knowledge or practical experience in literature, science, art and social service. They can vote in the Vice-President's election but not the President's." },
    { t: "How State representatives are chosen", d: "Elected by the elected members of the State Legislative Assembly, by proportional representation with a single transferable vote. Members of a Legislative Council do not vote." },
    { t: "Representation is not equal", d: "Unlike the American Senate, where every state gets two seats, India allots seats roughly by population. Uttar Pradesh has 31 seats, and Sikkim has one." },
    { t: "Where the allocation is written", d: "The Fourth Schedule of the Constitution." },
    { t: "The residence rule was dropped", d: "Until 2003 a candidate had to be ordinarily resident in the State they sought to represent. An amendment to the Representation of the People Act removed the requirement, and the Supreme Court upheld the change in Kuldip Nayar (2006)." },
    { t: "The Rajya Sabha never dissolves", d: "The Rajya Sabha is a permanent House. One third of its members retire every second year." },
    { t: "The six-year term is not in the Constitution", d: "Article 83(1) fixes the retirement of one third every second year, but says it happens \"in accordance with the provisions made in that behalf by Parliament by law\". The six-year term itself comes from the Representation of the People Act, 1951. Compare the Lok Sabha, whose five years Article 83(2) states outright." }
  ],
  seen: [
    "UPSC Pre 2017 — unequal representation in the Rajya Sabha as a feature of Indian federalism",
    "UPPCS Mains 2024 — the special legislative powers of the Rajya Sabha",
    "UPSC Mains 2020 — the transformation of the Rajya Sabha"
  ],
  trap: "Representation in the Rajya Sabha is proportional to population, not equal between States.\n\nCritics call the arrangement a weakness of Indian federalism, because a large State dominates the House of the States too. An option claiming equal State representation is wrong."
},

"81": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 81 says the Lok Sabha has at most 550 elected members, up to 530 from the States and up to 20 from the Union territories. Seats are shared among the States in proportion to population.",
  why: "Article 81 fixes the size of the Lok Sabha and how seats are shared between States. The freeze on that sharing ends after the first census taken after 2026, which makes the article live again.",
  concepts: [
    { t: "The maximum strength", d: "Not more than 530 members from the States and not more than 20 from the Union territories. The present strength is 543." },
    { t: "The two rules of allotment", d: "Seats are allotted to each State in proportion to its population, as far as practicable. And within a State, constituencies must have roughly equal populations." },
    { t: "The population freeze", d: "The 42nd Amendment froze the allocation on the 1971 census. The 84th and 87th Amendments extended the freeze until the first census after 2026." },
    { t: "Why it was frozen", d: "States that had successfully controlled population growth would have lost seats to States that had not. Freezing removed that penalty." },
    { t: "Readjustment inside a State still happened", d: "The Delimitation Commission of 2002 redrew constituency boundaries within States using the 2001 census, without changing how many seats each State had." },
    { t: "Anglo-Indian nomination has ended", d: "Article 331 allowed the President to nominate two Anglo-Indians. The 104th Amendment (2019) let that provision lapse in January 2020." }
  ],
  seen: [
    "UPSC Pre 2024 — the history of the Delimitation Commissions"
  ],
  trap: "The freeze applies to seats *between* States, not to boundaries *within* a State.\n\nConstituencies inside States were redrawn in 2008 on 2001 figures. Only the State-wise totals stayed fixed at 1971."
},

"83": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 83 says the Rajya Sabha is never dissolved, and one-third of its members retire every second year. The Lok Sabha lasts five years unless dissolved sooner, and an emergency can extend it a year at a time.",
  why: "Article 83 covers how long each House lasts, including the extension of the Lok Sabha in an emergency. The rules on extension are precise and easy to test.",
  concepts: [
    { t: "The Lok Sabha", d: "Five years from the date of its first sitting, unless dissolved earlier. Dissolution can happen at any time." },
    { t: "The Rajya Sabha", d: "The Rajya Sabha is never dissolved. One-third of its members retire every second year. The article leaves the actual term to \"provisions made in that behalf by Parliament by law\". The six years come from the Representation of the People Act, 1951, not from Article 83." },
    { t: "Extension during an emergency", d: "While a Proclamation of Emergency is in operation, Parliament may extend the life of the Lok Sabha by one year at a time. There is no limit on how many times." },
    { t: "The hard stop", d: "Any such extension ends six months after the emergency ceases to operate. So the House cannot survive long past the crisis." },
    { t: "An extension has happened once", d: "The Lok Sabha elected in 1971 was extended twice during the 1975 Emergency, running to 1977." }
  ],
  seen: [
    "UPSC Pre 2024 — the lapse of Bills on dissolution and prorogation"
  ],
  trap: "The extension is one year at a time and can be repeated without limit, but it dies six months after the emergency does.\n\nAlso remember only the Lok Sabha can be extended. The Rajya Sabha does not need extending because it never dissolves."
},

"85": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 85 says the President shall summon each House from time to time, and no more than six months shall pass between two sessions. The President may also prorogue the Houses and dissolve the Lok Sabha.",
  why: "Questions quote the six-month rule almost word for word, and many candidates misremember what it actually requires.",
  concepts: [
    { t: "The six-month rule", d: "There must not be a gap of more than six months between the last sitting of one session and the first sitting of the next. The President summons the House accordingly." },
    { t: "What that does not mean", d: "The rule does not require three sessions a year, and it fixes no minimum number of sitting days. The three sessions are a convention, not a rule." },
    { t: "Adjournment", d: "Suspends work for a short period, done by the presiding officer. Adjournment sine die means ending a sitting without setting a date to resume." },
    { t: "Prorogation", d: "Ends a session. Done by the President. Pending Bills do not lapse on prorogation, but pending notices do." },
    { t: "Dissolution", d: "Ends the life of the Lok Sabha itself. Only the Lok Sabha can be dissolved. Most pending Bills lapse." },
    { t: "What survives dissolution", d: "A Bill pending in the Rajya Sabha that the Lok Sabha has not passed does not lapse. Nor does a Bill for which a joint sitting has already been notified." }
  ],
  seen: [
    "UPSC Pre 2024 — prorogation and the President's powers",
    "UPSC Pre 2020 — the President's power to summon and how often the House must meet"
  ],
  trap: "The Constitution sets a maximum gap between sessions, not a minimum number of sessions or sitting days.\n\nIn theory Parliament could satisfy Article 85 by meeting twice a year for one day each."
},

"93": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 93 says the Lok Sabha shall choose two of its members as Speaker and Deputy Speaker, as soon as may be.",
  why: "Questions test the rules on electing the two, and the unusual rule that keeps the Speaker in office after the House is dissolved.",
  concepts: [
    { t: "What it requires", d: "The Lok Sabha shall, as soon as may be, choose two of its members to be Speaker and Deputy Speaker. When either office falls vacant, the House shall choose another member." },
    { t: "No time limit for the Deputy Speaker", d: "The words \"as soon as may be\" fix no deadline. So the post has been left vacant for long periods, most recently for the whole of the seventeenth Lok Sabha." },
    { t: "The Speaker outlives the House", d: "On dissolution the Speaker does not vacate office. They continue until immediately before the first meeting of the newly elected House. No other office survives dissolution in this way." },
    { t: "The Deputy Speaker does not", d: "The Deputy Speaker's post falls vacant when the House is dissolved." },
    { t: "Convention on party", d: "By convention the Deputy Speaker is offered to the opposition, though nothing in the Constitution requires it." }
  ],
  seen: [
    "UPSC Pre 2022 — the Deputy Speaker and the Speaker's role in that election",
    "UPSC Pre 2017 — convention on the party affiliation of the Speaker and Deputy Speaker"
  ],
  trap: "The Speaker does not lose office when the Lok Sabha is dissolved.\n\nThey stay until the new House meets, so there is never a gap. Candidates get this fact wrong more often than any other on Article 93."
},

"94": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 94 says the Speaker or Deputy Speaker leaves office on ceasing to be a member, and may resign. Either can be removed by a resolution of a majority of all the then members of the House, after fourteen days' notice.",
  why: "Removal of the Speaker was asked in both 2024 and 2025. Two years in a row is a strong signal of where the examiners are looking.",
  concepts: [
    { t: "The three ways the office ends", d: "Ceasing to be a member of the House, resigning in writing to the Deputy Speaker, or being removed by a resolution of the House." },
    { t: "The majority needed", d: "The resolution needs a majority of all the *then members* of the House, an effective majority that leaves vacant seats out. Not a simple majority of those present." },
    { t: "Fourteen days' notice", d: "The resolution cannot be moved without fourteen days' advance notice of the intention to move it. The notice is compulsory." },
    { t: "The Speaker cannot preside", d: "While a resolution for their own removal is under consideration, the Speaker steps aside from the chair. The Deputy Speaker or another member presides." },
    { t: "But the Speaker may speak and vote", d: "They have the right to take part in the debate and to vote in the first instance, though not the casting vote. Candidates often miss the exception." }
  ],
  seen: [
    "UPSC Pre 2025 — the Speaker's removal procedure and the notice requirement",
    "UPSC Pre 2024 — removal of the Speaker",
    "UPSC Pre 2018 — vacation of the State Assembly Speaker's office under Article 178"
  ],
  trap: "The Speaker votes on the resolution to remove themselves, in the first instance.\n\nOrdinarily the Speaker votes only to break a tie. Here they vote like any other member. And the threshold is a majority of all the then members, which is higher than a simple majority."
},

"105": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 105 gives freedom of speech in Parliament. No member can be taken to court for anything said or any vote given in Parliament or its committees.",
  why: "Article 105 protects members of Parliament for what they say and how they vote. A seven-judge bench reopened the subject in 2024 by overruling a ruling on bribery made in 1998.",
  concepts: [
    { t: "Freedom of speech in Parliament", d: "Subject to the Constitution and to the rules of the House, there is freedom of speech in Parliament. The freedom is not the same as the one in Article 19(1)(a), and Article 19(2) does not limit it." },
    { t: "Immunity from court proceedings", d: "No member is liable in any court for anything said or any vote given in Parliament or in a committee. Members can therefore speak without fear of being sued for defamation." },
    { t: "Publication is protected too", d: "No one is liable for publishing a report or proceedings by the authority of a House. Article 361A additionally protects faithful newspaper reports of proceedings." },
    { t: "Other privileges were never codified", d: "The article says other privileges shall be as Parliament defines by law. Parliament has never made that law, so the privileges remain those inherited from the British House of Commons." },
    { t: "Sita Soren (2024)", d: "A seven-judge bench held that a legislator who takes a bribe to vote a certain way is not protected by Article 105. The bench overruled P.V. Narasimha Rao (1998), which had given such members immunity." },
    { t: "The limit", d: "Immunity covers what is said inside the House. Repeating the same words outside carries no protection." }
  ],
  seen: [
    "UPSC Pre 2025 — the Governor's immunity under Article 361 set against legislators' immunity under Article 105",
    "UPSC Pre 2022 — the contempt power of the Houses"
  ],
  trap: "Privilege attaches to the place, not the person.\n\nA speech in the House cannot be made the subject of court proceedings. The House itself can still discipline the member for it. The same words repeated at a press conference outside carry no protection at all, and can be sued on."
},

"108": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 108 lets the President call a joint sitting of both Houses when they disagree on an ordinary Bill. The Bill passes if a majority of the members present and voting at the joint sitting approve it.",
  why: "Joint sittings are a favourite question because of what they exclude, and because there have been only three since the Constitution began.",
  concepts: [
    { t: "When it can be called", d: "When one House rejects an ordinary Bill passed by the other, or the Houses disagree on amendments, or six months pass without the second House acting. The President may then summon a joint sitting." },
    { t: "Who presides", d: "The Speaker of the Lok Sabha. The Chairman of the Rajya Sabha does not preside, even though it is a joint sitting." },
    { t: "The majority needed", d: "A simple majority of the total number of members of both Houses present and voting. Because the Lok Sabha is more than twice the size of the Rajya Sabha, it usually prevails." },
    { t: "Two Bills can never go to a joint sitting", d: "A Money Bill, because the Rajya Sabha cannot block one anyway. And a Constitution Amendment Bill, because each House must pass it separately by a special majority." },
    { t: "The three occasions", d: "The Dowry Prohibition Bill in 1961, the Banking Service Commission (Repeal) Bill in 1978, and the Prevention of Terrorism Bill in 2002." }
  ],
  seen: [
    "UPSC Pre 2015 — the joint sitting, its majority requirement, and its restriction to ordinary Bills"
  ],
  trap: "There are two exclusions and they are excluded for opposite reasons.\n\nA Money Bill is excluded because the Rajya Sabha has no power to stop it. A Constitution Amendment Bill is excluded because both Houses must pass it independently, so a joint sitting would defeat the point."
},

"109": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 109 says a Money Bill can be introduced only in the Lok Sabha. The Rajya Sabha must return it within fourteen days and can only recommend changes, which the Lok Sabha may accept or reject.",
  why: "Papers asked the Money Bill procedure in 2024, 2023, 2018 and 2015. The Aadhaar Act and a series of Finance Acts passed as Money Bills have kept it politically live.",
  concepts: [
    { t: "A Money Bill can start only in the Lok Sabha", d: "A Money Bill cannot be introduced in the Rajya Sabha, and needs the President's prior recommendation to be introduced at all." },
    { t: "The Rajya Sabha gets fourteen days", d: "After the Lok Sabha passes it, the Bill goes to the Rajya Sabha, which must return it within fourteen days." },
    { t: "The Rajya Sabha can only recommend", d: "The Rajya Sabha cannot reject the Bill and cannot amend it. The Rajya Sabha can only suggest changes, which the Lok Sabha is free to accept or ignore." },
    { t: "Silence means passage", d: "If the Rajya Sabha does not return the Bill within fourteen days, it is deemed to have been passed by both Houses in the form the Lok Sabha sent it." },
    { t: "No joint sitting", d: "There can never be a deadlock, so the mechanism is unnecessary." },
    { t: "The Speaker decides", d: "Whether a Bill is a Money Bill is decided by the Speaker of the Lok Sabha. Article 110(3) makes that decision final. Article 110(4) then requires the Speaker to endorse a certificate on the Bill." }
  ],
  seen: [
    "UPSC Pre 2024 — Money Bill procedure and the Rajya Sabha's limits",
    "UPSC Pre 2023 — Finance Bill compared with Money Bill, and the Rajya Sabha's amending power",
    "UPSC Pre 2018 — the definition of a Money Bill and what it excludes",
    "UPSC Pre 2015 — the Rajya Sabha's recommendation-only power"
  ],
  trap: "Every Money Bill is a Financial Bill, but not every Financial Bill is a Money Bill.\n\nThe Rajya Sabha *can* amend and reject an ordinary Financial Bill. The Rajya Sabha can do neither to a Money Bill. Questions rely on candidates treating the two as the same thing."
},

"110": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 110 defines a Money Bill as one that deals only with taxes, government borrowing, the Consolidated and Contingency Funds and spending from them, or the receipt and audit of public money.",
  why: "The definition is a closed list, and the word \"only\" in it decides whether a Bill can bypass the Rajya Sabha.",
  concepts: [
    { t: "The seven heads in clause (1)", d: "Sub-clause (a) covers imposing or changing a tax, and (b) covers government borrowing or guarantees. Sub-clause (c) covers the custody of the Consolidated Fund or the Contingency Fund, and payments into or out of them. Sub-clause (d) covers spending from the Consolidated Fund, and (e) covers declaring an expense charged on that Fund. Sub-clause (f) covers the receipt, custody, issue or audit of public money. Sub-clause (g) covers any matter incidental to the six before it." },
    { t: "The word \"only\"", d: "A Bill is a Money Bill only if it contains *nothing but* these matters. One provision outside the list takes it out of the category." },
    { t: "What does not make a Bill a Money Bill", d: "Imposing a fine, demanding a fee for a service rendered, or a local authority levying a tax. The article expressly leaves these out." },
    { t: "The Speaker's decision is final", d: "Two clauses, and they do different jobs. Clause (3) says that if any question arises whether a Bill is a Money Bill, the Speaker's decision on it is final. Clause (4) then requires the Speaker's certificate to be endorsed on the Bill when it goes to the Rajya Sabha and to the President. The finality is in clause (3), and the paperwork is in clause (4)." },
    { t: "The Aadhaar controversy", d: "The Aadhaar Act, 2016 was passed as a Money Bill. In Puttaswamy (Aadhaar, 2018) the majority upheld the choice. The dissent called it a fraud on the Constitution." },
    { t: "The pending question", d: "Rojer Mathew (2019) referred to a larger bench the question of how far courts can look behind the Speaker's certificate. The larger bench has not yet decided the question." }
  ],
  seen: [
    "UPSC Pre 2018 — the Money Bill definition and the appropriation exclusion"
  ],
  trap: "Because the Speaker's certificate is declared final, a wrongly certified Bill still passes as a Money Bill.\n\nWhether a court can review that certificate is still undecided by a larger bench, so an option asserting it definitively either way is unsafe."
},

"111": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 111 says the President may assent to a Bill passed by Parliament, withhold assent, or return a Bill that is not a Money Bill for reconsideration. If both Houses pass it again, the President must assent.",
  why: "Article 111 is where the President decides what to do with a Bill. The article is the source of the suspensive veto and the so-called pocket veto.",
  concepts: [
    { t: "The three options", d: "Assent to the Bill. Withhold assent. Or return it for the Houses to reconsider, if it is not a Money Bill." },
    { t: "The return can only happen once", d: "If the Houses pass the Bill again, with or without amendments, the President shall not withhold assent. The power to return is called the suspensive veto." },
    { t: "No time limit", d: "The article does not say how long the President may take before deciding. Sitting on a Bill indefinitely is called the pocket veto, borrowed by analogy from American practice." },
    { t: "The one clear example", d: "President Zail Singh never acted on the Indian Post Office (Amendment) Bill, 1986, which would have allowed interception of post. The Bill simply died." },
    { t: "Money Bills cannot be returned", d: "The President can only assent or withhold assent, and by convention always assents, because the Bill was introduced on their own recommendation." }
  ],
  trap: "The pocket veto exists only because Article 111 sets no deadline.\n\nThe Constitution does not grant a pocket veto. The pocket veto is a gap the Constitution failed to close. The distinction is real, and it makes a better answer to a Mains question."
},

"112": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 112 says the President shall lay before Parliament, every financial year, a statement of the government's estimated receipts and spending. The Constitution calls it the annual financial statement, and everyone else calls it the Budget.",
  why: "The Constitution never uses the word \"Budget\", and that absence is itself a favourite question.",
  concepts: [
    { t: "What it is called", d: "The Annual Financial Statement. The word \"budget\" appears nowhere in the Constitution." },
    { t: "What it must show", d: "The estimated receipts and expenditure of the Government of India for each financial year, laid before both Houses." },
    { t: "The two kinds of expenditure", d: "Expenditure *charged* on the Consolidated Fund, and other expenditure *made from* it. They must be shown separately." },
    { t: "Charged expenditure is not voted", d: "Parliament may discuss it but cannot vote on it. The rule protects certain offices from being starved of funds by a hostile majority." },
    { t: "What is charged", d: "The charged items include the President's pay and the expenses of the office, and the salaries of the presiding officers of both Houses. Debt charges are charged too. So are the salaries and pensions of Supreme Court judges, the pensions of High Court judges, and the salary and pension of the Comptroller and Auditor-General. Any sum needed to satisfy a judgment, decree or arbitral award is charged. Finally, a catch-all covers anything else the Constitution or Parliament declares to be charged." },
    { t: "The President lays it", d: "The President causes it to be laid before both Houses. The Finance Minister presents it on the President's behalf." }
  ],
  seen: [
    "UPSC Pre 2024 — the Annual Financial Statement and the President's recommendation",
    "UPSC Pre 2014 — the classification of non-plan expenditure"
  ],
  trap: "Charged expenditure can be discussed but not voted upon.\n\nSo Parliament cannot cut the salary of a Supreme Court judge or the Comptroller and Auditor-General by refusing a demand. The category exists for exactly that reason."
},

"123": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 123 lets the President make an ordinance when either House of Parliament is not in session and immediate action is needed. An ordinance has the force of an Act, but lapses six weeks after Parliament reassembles.",
  why: "Questions test the conditions for an ordinance, its lifespan, and the case law that bans issuing the same ordinance again and again.",
  concepts: [
    { t: "The two conditions", d: "Both Houses must not be in session, and the President must be satisfied that circumstances require immediate action. If even one House is sitting, no ordinance can be issued." },
    { t: "An ordinance has the force of an Act", d: "An ordinance is as good as a law of Parliament while it lasts, and is subject to the same constitutional limits. So an ordinance cannot violate Fundamental Rights." },
    { t: "How long it lasts", d: "The ordinance must be laid before both Houses when they reassemble, and ceases to operate six weeks from that reassembly. The ordinance dies earlier if both Houses pass resolutions disapproving it." },
    { t: "The maximum life", d: "Six weeks after reassembly, plus the gap before Parliament meets. Since the gap can be nearly six months under Article 85, an ordinance can survive about six and a half months." },
    { t: "D.C. Wadhwa (1987)", d: "Bihar had re-promulgated ordinances for years without ever putting them to the legislature. The Court called this a fraud on the Constitution." },
    { t: "Krishna Kumar Singh (2017)", d: "A seven-judge bench held that laying an ordinance before the legislature is mandatory, and that re-promulgation to keep a law alive is unconstitutional." },
    { t: "What it cannot do", d: "An ordinance cannot amend the Constitution." }
  ],
  seen: [
    "UPSC Pre 2025 — the limits of the ordinance power, including that it cannot amend the Constitution",
    "UPSC Mains 2015 — ordinance promulgation and the separation of powers",
    "UPSC Mains 2022 — the Governor's ordinance power and re-promulgation"
  ],
  trap: "The six weeks run from the date the Houses reassemble, not from the date the ordinance was made.\n\nAnd if the two Houses reassemble on different dates, the six weeks count from the later of the two."
},

"124": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "Article 124 sets up the Supreme Court and says how its judges are appointed and removed. A judge holds office until 65, and Parliament can remove one only for proved misbehaviour or incapacity.",
  why: "Judicial appointments are one of the strongest Mains themes in polity, especially since the NJAC judgment of 2015.",
  concepts: [
    { t: "Strength", d: "A Chief Justice and such number of other judges as Parliament fixes by law. The current sanctioned strength is 34 including the Chief Justice." },
    { t: "Qualification", d: "A citizen of India who has been a High Court judge for five years, or a High Court advocate for ten years, or is in the President's opinion a distinguished jurist. No distinguished jurist has ever been appointed." },
    { t: "The collegium", d: "The text says the President appoints after consultation with judges. The Second Judges case (1993) and Third Judges case (1998) reinterpreted \"consultation\" as \"concurrence\", creating a collegium of the Chief Justice and four senior-most judges that effectively selects judges." },
    { t: "The NJAC was struck down", d: "The 99th Amendment (2014) created a National Judicial Appointments Commission to replace the collegium. In 2015 the Supreme Court struck it down, holding that judicial primacy in appointments is part of the basic structure." },
    { t: "Removal: the grounds", d: "Only proved misbehaviour or incapacity. Nothing else." },
    { t: "Removal: the procedure", d: "An address by each House, supported by a majority of the total membership *and* two thirds of members present and voting, presented to the President in the same session." },
    { t: "The Judges (Inquiry) Act, 1968", d: "The Act sets out the investigation: a motion signed by 100 Lok Sabha members or 50 Rajya Sabha members, an inquiry committee of three, and only then a vote." },
    { t: "Never completed", d: "No Supreme Court judge has ever been removed. Justice V. Ramaswami's motion failed in 1993 when the ruling party abstained." }
  ],
  seen: [
    "UPSC Pre 2019 — removal of a Supreme Court judge and the Judges (Inquiry) Act",
    "UPSC Pre 2014 — Parliament's power to increase the number of judges",
    "UPSC Mains 2017 — the National Judicial Appointments Commission Act, 2014",
    "UPSC Mains 2023 — judicial independence as a prerequisite of democracy",
    "UPPCS Mains 2024 — independence of the judiciary and the basic structure"
  ],
  trap: "The Constitution says \"removal\", never \"impeachment\", for judges.\n\nImpeachment in the constitutional sense applies only to the President under Article 61. Using the word for judges is common in journalism and wrong in an exam."
},

"129": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 129 says the Supreme Court is a court of record, with all the powers of such a court, including the power to punish for contempt of itself.",
  why: "The contempt power was asked directly in 2022. Article 129 is compact, and it pairs neatly with Article 215 for the High Courts.",
  concepts: [
    { t: "Court of record", d: "The Supreme Court is a court of record. Its proceedings and judgments are recorded permanently, have evidentiary value, and cannot be questioned in any court." },
    { t: "Power to punish for contempt", d: "Being a court of record carries the power to punish anyone who contemns it. The power flows from the Constitution itself." },
    { t: "The High Courts have the same", d: "Article 215 makes every High Court a court of record with the same contempt power." },
    { t: "Two kinds of contempt", d: "Civil contempt is wilful disobedience of a court order. Criminal contempt is scandalising the court, prejudicing a case, or obstructing the administration of justice." },
    { t: "Truth is now a defence", d: "The Contempt of Courts Act was amended in 2006 to allow truth as a defence, if it is in the public interest and the request is bona fide." },
    { t: "Parliament cannot abolish it", d: "The power comes from the Constitution, not the Act. Parliament may regulate the procedure but cannot take the power away." }
  ],
  seen: [
    "UPSC Pre 2022 — the Contempt of Courts Act, 1971 and the contempt powers under Articles 129 and 215"
  ],
  trap: "The Contempt of Courts Act, 1971 regulates the power. The Act does not create it.\n\nSo the Supreme Court can punish for contempt even in a way the Act does not provide for, because its authority is constitutional."
},

"131": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 131 gives the Supreme Court sole power to hear legal disputes between the Union and one or more States, or between States.",
  why: "Original jurisdiction covers disputes between governments. The subject became topical again when Kerala and West Bengal sued the Union directly.",
  concepts: [
    { t: "What disputes it covers", d: "The disputes can be between the Government of India and one or more States, or between the Government of India and some States on one side and other States on the other. They can also be between two or more States." },
    { t: "The jurisdiction is exclusive", d: "No other court can hear these disputes. They go straight to the Supreme Court and nowhere else." },
    { t: "The dispute must involve a legal right", d: "The dispute must turn on a question of law or fact on which the existence or extent of a legal right depends. A purely political grievance will not do." },
    { t: "Private parties are excluded", d: "A citizen, a company or a public-sector undertaking cannot use Article 131, even in a dispute with a State." },
    { t: "The treaty exception", d: "Disputes arising out of a treaty or agreement entered into before the Constitution began, and still in force, are excluded." },
    { t: "Water disputes are excluded too", d: "Article 262 lets Parliament bar the courts from inter-State river water disputes, and the Inter-State River Water Disputes Act, 1956 does exactly that." }
  ],
  seen: [
    "UPSC Pre 2014 — the Supreme Court's original jurisdiction over centre-State and inter-State disputes"
  ],
  trap: "Original jurisdiction under Article 131 is not the same as writ jurisdiction under Article 32.\n\nArticle 32 is for individuals enforcing Fundamental Rights. Article 131 is for governments suing each other, and no individual can invoke it."
},

"136": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 136 lets the Supreme Court grant special leave to appeal against any judgment or order of any court or tribunal in India, except a military tribunal.",
  why: "Special leave to appeal is the widest discretionary power any court in India holds, and its breadth is what questions test.",
  concepts: [
    { t: "What it allows", d: "The Supreme Court may, in its discretion, grant special leave to appeal from any judgment, decree, determination, sentence or order, in any cause or matter, passed by any court or tribunal in India." },
    { t: "The one exclusion", d: "Courts or tribunals constituted under a law relating to the armed forces. Court-martial decisions cannot come up under Article 136." },
    { t: "Special leave is a power, not a right", d: "No litigant can demand special leave. The Court decides whether to grant it, and gives no reasons for refusing." },
    { t: "Special leave covers tribunals", d: "The reach is wider than Articles 132 to 134, which cover appeals from High Courts only." },
    { t: "Special leave is residuary", d: "The power exists to catch cases of grave injustice that the ordinary routes of appeal miss. In practice it has become the main route into the Supreme Court." }
  ],
  trap: "Article 136 reaches tribunals as well as courts, but never court-martial.\n\nAnd it confers no right of appeal on anyone. Describing it as a right rather than a discretion is the standard error."
},

"137": {
  tier: 3,
  papers: ["UPSC Pre"],
  says: "Article 137 lets the Supreme Court review its own judgments and orders, subject to any law of Parliament and the Court's own rules.",
  why: "Review, and the curative petition built on top of it, complete the picture of when a Supreme Court decision is truly final.",
  concepts: [
    { t: "What review means", d: "The Supreme Court may review any judgment or order it has pronounced, subject to any law and to rules made under Article 145." },
    { t: "The grounds are narrow", d: "Discovery of new and important evidence, an error apparent on the face of the record, or another sufficient reason. Not simply that the losing side disagrees." },
    { t: "How it is heard", d: "Normally by circulation in chambers, by the same judges, without oral argument. Death-penalty cases are an exception and get an oral hearing." },
    { t: "The curative petition", d: "Created by the Court in Rupa Ashok Hurra (2002) as a last remedy after review fails. A curative petition needs a violation of natural justice or an undisclosed conflict of interest, and a senior advocate must certify it." },
    { t: "Where the curative petition comes from", d: "Not from Article 137. The Court built it out of Article 142, its power to do complete justice." }
  ],
  trap: "The curative petition is nowhere in the Constitution.\n\nThe Court invented it, resting on Article 142. Attributing it to Article 137 is the natural but wrong answer."
},

"141": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 141 says the law declared by the Supreme Court binds all courts in India.",
  why: "Article 141 is one of the most often asked single facts in the section on the judiciary, and it has one exception that decides the answer.",
  concepts: [
    { t: "What it says", d: "The law declared by the Supreme Court shall be binding on all courts within the territory of India." },
    { t: "The Supreme Court is not bound by itself", d: "\"All courts\" has been read as all courts *below* the Supreme Court. The Court can overrule its own earlier decisions, which is how ADM Jabalpur and P.V. Narasimha Rao were undone." },
    { t: "Only the ratio binds", d: "The ratio decidendi, the reasoning essential to the decision, is binding. Obiter dicta, remarks made in passing, are persuasive but not binding." },
    { t: "Bench strength matters", d: "A larger bench can overrule a smaller one. A bench of equal strength that disagrees must refer the matter to a larger bench rather than decide against the earlier ruling." },
    { t: "High Courts", d: "A High Court's decisions bind courts within its own territory. They are only persuasive in other States." }
  ],
  trap: "The Supreme Court can overrule itself, and does.\n\nAn option saying the Court is bound by its own previous decisions is wrong. Article 141 binds everyone else."
},

"142": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 142 lets the Supreme Court pass any decree or order needed to do complete justice in a case before it, and that order can be enforced throughout India.",
  why: "Article 142 lets the Supreme Court do whatever complete justice needs. The article is the centre of the debate on judicial overreach that Mains keeps returning to.",
  concepts: [
    { t: "What it permits", d: "The Supreme Court may pass any decree or order necessary for doing complete justice in any cause or matter pending before it. The order can be enforced throughout India." },
    { t: "Where it has been used", d: "The Bhopal gas settlement (1989), the Ayodhya decree (2019), dissolving irretrievably broken marriages without the statutory waiting period, banning liquor shops near highways, and creating the curative petition." },
    { t: "The limit", d: "In Supreme Court Bar Association (1998) the Court held that Article 142 cannot be used to override an express statutory provision. Article 142 adds to the law, and does not replace it." },
    { t: "The 2024 restatement", d: "The Court reaffirmed that relief under Article 142 cannot be granted contrary to substantive law, only where the law is silent or a gap needs filling." },
    { t: "The criticism", d: "Critics say the power lets the Court legislate. Defenders say it exists precisely for cases where following the rules exactly would produce injustice." }
  ],
  seen: [
    "UPSC Pre 2021 — recall of retired judges and the Chief Justice's power",
    "UPSC Pre 2019 — the scope of Article 142 and its limits during President's rule"
  ],
  trap: "Article 142 adds to the law. The article does not replace it.\n\nThe Court has repeatedly said it cannot use this power to do what a statute expressly forbids. An option describing it as an unlimited power is wrong."
},

"143": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 143 lets the President ask the Supreme Court for its opinion on a question of law or fact of public importance.",
  why: "Advisory jurisdiction is examined for one point above all others: the answer binds nobody.",
  concepts: [
    { t: "Two kinds of reference", d: "Clause (1) covers any question of law or fact of public importance that has arisen or is likely to arise. Clause (2) covers disputes arising from pre-Constitution treaties and agreements." },
    { t: "The Court may refuse", d: "Under clause (1) the Court may decline to answer, and has done so. Under clause (2) it must give its opinion." },
    { t: "The opinion is not binding", d: "The opinion binds nobody, not even the President who asked. The opinion is advice, not a judgment, and it is not law under Article 141." },
    { t: "But it carries great weight", d: "In practice every court below treats a reference opinion as authoritative, and governments follow it." },
    { t: "The famous references", d: "The best known are Berubari (1960) on ceding territory, the Special Courts Bill (1978), the Cauvery dispute (1991) and the Third Judges case (1998) on the collegium. The Court declined to answer the Ayodhya reference of 1993." },
    { t: "The 2025 reference", d: "The President referred questions about the time limits on Governors and the President in giving assent to State Bills. The dispute arises from Articles 200 and 201." }
  ],
  seen: [
    "UPSC Pre 2023 — presidential references and the grounds for postponement"
  ],
  trap: "The Court can and has refused a reference under Article 143(1).\n\nThe Ayodhya reference was made in January 1993 and the Court declined to answer it in October 1994, holding the question favoured one religion over another and would serve no constitutional purpose. So an option saying the Court must always answer is wrong."
},

"148": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "Article 148 creates the Comptroller and Auditor-General of India, appointed by the President and removable only in the way a Supreme Court judge is. The CAG can hold no other government office afterwards.",
  why: "The CAG audits how public money was spent. Prelims asks about appointment and removal. Mains asks about the difference between checking that spending was legal and checking that it was sensible.",
  concepts: [
    { t: "Appointment", d: "Appointed by the President by warrant under hand and seal. There is no prescribed qualification and no selection committee in the Constitution." },
    { t: "Tenure, and where it comes from", d: "Six years, or until the age of 65, whichever comes first. But Article 148 fixes no term at all. Clause (3) leaves salary and conditions of service to Parliament, and the figures are in the Comptroller and Auditor-General's (Duties, Powers and Conditions of Service) Act, 1971. What the article does guarantee is that the terms cannot be varied to the holder's disadvantage after appointment." },
    { t: "Removal", d: "The CAG can be removed only in the same way and on the same grounds as a Supreme Court judge. The grounds are proved misbehaviour or incapacity, and both Houses must pass an address by a special majority." },
    { t: "Salary is charged", d: "The salary and administrative expenses are charged on the Consolidated Fund of India, so Parliament cannot vote them down." },
    { t: "No job afterwards", d: "After holding office they are ineligible for any further office under the Government of India or of any State. The bar removes any incentive to please the government." },
    { t: "Ambedkar's assessment", d: "He called the office the most important in the Constitution, more so even than the judiciary, because it guards the public purse." },
    { t: "Legality and propriety", d: "The CAG checks not only whether spending was legal but also whether it was wise and economical. The second check is the propriety audit, and most of the friction comes from it." }
  ],
  seen: [
    "UPSC Mains 2024 — the CAG's duty extends to propriety, not only legality",
    "UPSC Mains 2018 — CAG appointment and powers",
    "UPSC Mains 2016 — the CAG's power to audit policy implementation",
    "UPPCS Mains 2021 — the CAG as custodian of the public purse"
  ],
  trap: "The CAG audits after the money has been spent and then reports. The CAG does not control spending.\n\nThe \"Comptroller\" half of the title is misleading. In Britain the executive can draw from the public exchequer only with the CAG's approval. In India, departments draw by cheque without any such authority. So India's CAG is an auditor, not a comptroller, and critics often say so."
},

"149": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 149 says the CAG shall perform the duties and use the powers that Parliament lays down by law, for the accounts of the Union, the States and other bodies.",
  why: "Article 149 explains why so much of the CAG's actual mandate sits in an ordinary law rather than in the Constitution.",
  concepts: [
    { t: "What it says", d: "The CAG shall perform such duties and exercise such powers as Parliament prescribes by law." },
    { t: "The law", d: "The Comptroller and Auditor-General's (Duties, Powers and Conditions of Service) Act, 1971." },
    { t: "What is audited", d: "The Consolidated Fund of India and of each State, the Contingency Fund, the Public Account, all trading and manufacturing accounts, and government companies and corporations." },
    { t: "Where the reports go", d: "Union reports go to the President, who lays them before Parliament. State reports go to the Governor, who lays them before the State legislature." },
    { t: "Who examines them", d: "The Public Accounts Committee of Parliament. The CAG is described as the friend, philosopher and guide of that Committee." }
  ],
  trap: "Because the powers come from an ordinary Act, Parliament can widen or narrow them without amending the Constitution.\n\nThe arrangement is a real limit on the CAG's independence, and a good point for a Mains answer."
},

"153": {
  tier: 2,
  papers: ["UPSC Pre", "UPPCS Mains", "State PCS"],
  says: "Article 153 says there shall be a Governor for each State. One person may be Governor of two or more States.",
  why: "The Governor is the busiest question area in Part VI, and Article 153 is where it begins.",
  concepts: [
    { t: "What it says", d: "There shall be a Governor for each State." },
    { t: "One Governor can serve two States", d: "The 7th Amendment (1956) added a proviso allowing the same person to be Governor of two or more States. Shared Governors are common in the north-east." },
    { t: "The Governor is not elected", d: "The Constituent Assembly considered an elected Governor and rejected the idea, fearing conflict with an elected Chief Minister." },
    { t: "Not answerable to the State", d: "The Governor is appointed by, and holds office at the pleasure of, the President. The State legislature has no power over them at all." },
    { t: "The standing criticism", d: "Both the Sarkaria Commission (1988) and the Punchhi Commission (2010) found the office had been used as an agent of the centre, and recommended reforms that were never enacted." }
  ],
  seen: [
    "UPPCS Mains 2022 — the functions of the Chief Minister and the Governor, and their relationship"
  ],
  trap: "The Constitution says a Governor \"for each State\", and a later amendment permits sharing.\n\nThe Constitution never says there must be one Governor per State. Options phrased that way are wrong."
},

"155": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 155 says the President appoints the Governor of a State by warrant under the President's hand and seal.",
  why: "How Governors are appointed drives every question on friction between the Union and the States. Questions test the gap between the text of the Constitution and political convention.",
  concepts: [
    { t: "What it says", d: "The Governor of a State shall be appointed by the President by warrant under hand and seal." },
    { t: "The draft was different", d: "The draft Constitution provided for an elected Governor. The Constituent Assembly dropped it, on the ground that two elected heads in one State would clash." },
    { t: "Consulting the Chief Minister is convention only", d: "There is no requirement in the text to consult the State government. The convention has been ignored many times." },
    { t: "The Sarkaria recommendations", d: "The Governor should be an eminent person from outside the State, detached from local politics, not active in politics for some time before appointment, and appointed after consulting the Chief Minister. None of this is binding." },
    { t: "Qualifications", d: "A citizen of India, at least 35 years old. The Constitution requires nothing more." }
  ],
  seen: [
    "UPSC Pre 2013 — restrictions on the appointment of a Governor"
  ],
  trap: "There is no constitutional requirement to consult the State government before appointing a Governor.\n\nEvery proposal to make it mandatory has been a commission recommendation, never an amendment. Options treating consultation as compulsory are wrong."
},

"156": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 156 says the Governor holds office during the pleasure of the President, for a term of five years unless removed earlier.",
  why: "Tenure \"during the pleasure of the President\" is the most consequential clause about a Governor, because it makes the five-year term only nominal.",
  concepts: [
    { t: "The two rules together", d: "The Governor holds office during the pleasure of the President, and shall hold office for a term of five years. The first rule overrides the second." },
    { t: "What pleasure means in practice", d: "The Union Council of Ministers can have a Governor removed at any time, for any reason or none, because the President acts on its advice." },
    { t: "B.P. Singhal (2010)", d: "A Constitution Bench held that no reason need be given for removal, and the Governor has no right to be heard. But removal cannot be arbitrary, capricious or based on irrelevant grounds. A change of government at the centre is not by itself a valid reason." },
    { t: "The burden of proof", d: "The Court said it will presume the removal was valid. Only if the affected person produces prima facie material will the court call for the records." },
    { t: "Continuation", d: "A Governor continues in office after the five years until a successor takes charge, so there is never a vacancy." }
  ],
  seen: [
    "UPSC Pre 2013 — the removal procedure for a Governor"
  ],
  trap: "The five-year term gives no protection at all, because pleasure overrides it.\n\nB.P. Singhal said removal must not be arbitrary. But the judgment also said no reasons need be recorded and no hearing is required, so the protection is very hard to enforce."
},

"161": {
  tier: 2,
  papers: ["UPSC Pre", "UPPCS Mains", "State PCS"],
  says: "Article 161 gives the Governor the power to pardon, or to suspend, remit or commute a sentence, for offences against laws on matters within the State's executive power.",
  why: "Questions always compare the Governor's pardoning power with the President's under Article 72, and the two differences are the answer.",
  concepts: [
    { t: "What the Governor can do", d: "Grant pardons, reprieves, respites and remissions of punishment, and suspend, remit or commute the sentence of any person convicted of an offence against a State law." },
    { t: "The scope", d: "The power covers offences against laws on matters within the State's executive power, which means State List subjects." },
    { t: "Two things the Governor cannot do", d: "Pardon a death sentence, and touch a court-martial sentence. Both belong to the President alone." },
    { t: "But the Governor can commute a death sentence", d: "Many candidates find the point surprising. The Governor cannot *pardon* it, which would wipe it out entirely, but can reduce it to life imprisonment." },
    { t: "Exercised on advice", d: "The Governor acts on the advice of the State Council of Ministers, not personally. Maru Ram (1980) settled this." },
    { t: "Reviewable on narrow grounds", d: "Epuru Sudhakar (2006) applied the same limited review to Article 161 as to Article 72. The grounds are bad faith, irrelevant considerations and failure to apply the mind." }
  ],
  seen: [
    "UPPCS Mains 2023 — the Governor's pardoning power compared with the President's under Article 72"
  ],
  trap: "For an offence under State law carrying a death sentence, both the President and the Governor have power. But only the President can pardon.\n\nThe powers overlap, and neither excludes the other. The overlap is the sophisticated part of the answer."
},

"163": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "UPPCS Mains", "State PCS"],
  says: "Article 163 says a Council of Ministers led by the Chief Minister aids and advises the Governor, except where the Constitution requires the Governor to act in their discretion.",
  why: "The word \"discretion\" in Article 163 is the source of almost every confrontation between the Union and the States in the last decade. Papers tested it in 2025 and 2014.",
  concepts: [
    { t: "The basic rule", d: "There shall be a Council of Ministers with the Chief Minister at its head to aid and advise the Governor, except where the Governor is required to act in their discretion." },
    { t: "The Governor decides what is discretionary", d: "Clause (2) says if any question arises whether a matter falls within the Governor's discretion, the Governor's own decision is final and cannot be questioned." },
    { t: "Constitutional discretion", d: "Powers the Constitution expressly gives the Governor: reserving a Bill for the President under Article 200, recommending President's rule, acting as administrator of an adjoining Union territory, and special responsibilities in certain States." },
    { t: "Situational discretion", d: "Powers that arise from circumstances rather than text: appointing a Chief Minister when no party has a majority, dismissing a ministry that has lost confidence, and dissolving the Assembly." },
    { t: "The contrast with the President", d: "Article 74 gives the President no discretion in the text. Article 163 gives the Governor discretion expressly. The difference answers the question of whether the Governor is more powerful than the President." },
    { t: "The courts have narrowed it", d: "Shamsher Singh (1974) held the Governor must normally act on advice, and discretion is the exception rather than the rule. Nabam Rebia (2016) held the Governor cannot act on their own in summoning or dissolving the House." }
  ],
  seen: [
    "UPSC Pre 2025 — the Governor's discretionary powers and the reservation of a Bill under Article 200",
    "UPSC Pre 2014 — the Governor's discretion, the emergency report and the appointment of ministers",
    "UPSC Mains 2022 — the Governor's legislative powers"
  ],
  trap: "The text gives the President no discretion, and gives the Governor some.\n\nThe point is the sharpest structural difference between the two offices, and questions comparing them usually turn on it."
},

"164": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 164 says the Governor appoints the Chief Minister, and the other ministers on the Chief Minister's advice. The ministry is collectively responsible to the Assembly, and must have at least 12 ministers and no more than 15 per cent of the Assembly.",
  why: "The State Council of Ministers follows the Union pattern, with two differences that examiners like.",
  concepts: [
    { t: "Appointment", d: "The Governor appoints the Chief Minister, and the other ministers on the Chief Minister's advice." },
    { t: "The size cap has a floor as well as a ceiling", d: "The 91st Amendment (2003) fixed the total at not more than 15% of the Assembly's strength, and not fewer than twelve. The Union cap has only a ceiling." },
    { t: "The six-month rule", d: "A minister who is not a member of the legislature for six consecutive months ceases to be a minister." },
    { t: "The Tribal Welfare Minister", d: "Chhattisgarh, Jharkhand, Madhya Pradesh and Odisha must have a minister in charge of tribal welfare, who may also handle Scheduled Castes and backward classes." },
    { t: "Collective responsibility", d: "The Council of Ministers is collectively responsible to the Legislative Assembly of the State, which is the lower House where there are two." },
    { t: "Pleasure", d: "Ministers hold office during the pleasure of the Governor, which in practice means at the Chief Minister's choosing." }
  ],
  seen: [
    "UPSC Pre 2020 — the six-month provision for a State minister"
  ],
  trap: "The floor of twelve ministers exists only for States, not for the Union.\n\nThe floor was put in so that a small Assembly would still have a workable ministry. The floor matters wherever 15 per cent of the Assembly comes to fewer than twelve. So the floor applies in every State with under eighty seats, Sikkim, Goa and Mizoram among them."
},

"167": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 167 makes it the Chief Minister's duty to tell the Governor about all decisions of the Council of Ministers, and to give any information the Governor asks for.",
  why: "Article 167 is the State version of Article 78, and appears in matching questions on the duties of the Chief Minister.",
  concepts: [
    { t: "The three duties", d: "Communicate all decisions of the Council of Ministers to the Governor. Furnish any information on administration and legislation the Governor asks for. And submit for the Council's consideration any matter a single minister has decided alone, if the Governor requires it." },
    { t: "Why it matters", d: "The duty is the Governor's only channel of information about what the State government is doing, and the basis of the Governor's report under Article 356." },
    { t: "Article 167 imposes a duty, not a power", d: "The article imposes obligations on the Chief Minister. The article gives the Governor no power to change a decision." }
  ],
  trap: "The Governor may ask for information and may require a matter to be reconsidered by the full Council.\n\nThey cannot demand a different decision. Article 167 is an information channel, not a veto."
},

"169": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 169 lets Parliament create or abolish a State's Legislative Council by law, if the State Assembly asks for it in a resolution passed by a special majority.",
  why: "Creating or abolishing a Legislative Council keeps coming back in the news, as in Andhra Pradesh, Rajasthan and Assam, and the procedure is clean and testable.",
  concepts: [
    { t: "Who does it", d: "Parliament, by law. But only if the State's own Legislative Assembly first passes a resolution asking for it." },
    { t: "The majority for the resolution", d: "A majority of the total membership of the Assembly, *and* at least two thirds of the members present and voting. The combination is called a special majority." },
    { t: "A law under Article 169 is not a constitutional amendment", d: "Article 169 expressly says such a law is not an amendment for the purposes of Article 368. So Parliament passes it by simple majority." },
    { t: "Which States have Councils", d: "Six: Andhra Pradesh, Bihar, Karnataka, Maharashtra, Telangana and Uttar Pradesh." },
    { t: "Parliament is not obliged", d: "The Assembly resolution merely enables Parliament to act. Parliament may ignore it indefinitely, as it has with resolutions from Rajasthan and Assam." }
  ],
  trap: "The Assembly's resolution empowers Parliament but does not compel it.\n\nSeveral States have passed resolutions that Parliament has simply never acted on. An option saying the Council must then be created is wrong."
},

"171": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 171 says a Legislative Council can have at most one-third of the Assembly's members, and no fewer than 40. Its members come from five groups: local bodies, graduates, teachers, Assembly members and the Governor's nominees.",
  why: "The composition of a Legislative Council, with its five different constituencies, is a favourite matching question.",
  concepts: [
    { t: "The size limits", d: "Not more than one third of the Assembly's strength, and never fewer than forty members." },
    { t: "One third by local authorities", d: "Elected by members of municipalities, district boards and other local authorities in the State." },
    { t: "One twelfth by graduates", d: "Elected by graduates of three years' standing residing in the State." },
    { t: "One twelfth by teachers", d: "Elected by teachers of at least three years' standing in institutions not lower than secondary school." },
    { t: "One third by the Assembly", d: "Elected by members of the Legislative Assembly, from among people who are not themselves members of the Assembly." },
    { t: "The rest nominated", d: "The remaining sixth are nominated by the Governor from people with special knowledge or practical experience in literature, science, art, the co-operative movement and social service." },
    { t: "A permanent House", d: "Like the Rajya Sabha, it is never dissolved. One third of members retire every second year." }
  ],
  seen: [
    "UPSC Pre 2015 — the size of a Legislative Council and the Governor's power of nomination"
  ],
  trap: "One third of the Assembly's strength is the maximum, not the actual size.\n\nAnd the Council is weak: it can delay an ordinary Bill by only about four months in total, and cannot block it. The Council can hold a Money Bill for no more than fourteen days."
},

"200": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 200 says the Governor, given a Bill passed by the State legislature, may assent, withhold assent, return it for reconsideration, or reserve it for the President.",
  why: "Article 200 is what a Governor does with a Bill the State legislature has passed. The article became one of the sharpest constitutional disputes of 2023 to 2025, and the 2025 paper asked it.",
  concepts: [
    { t: "The four options", d: "Assent to the Bill. Withhold assent. Return it for reconsideration, if it is not a Money Bill. Or reserve it for the President's consideration." },
    { t: "The return can only happen once", d: "If the House passes the Bill again, with or without amendment, the Governor shall not withhold assent. There is no second refusal." },
    { t: "One compulsory reservation", d: "If a Bill would so derogate from the powers of the High Court as to endanger its constitutional position, the Governor *must* reserve it for the President." },
    { t: "No time limit anywhere", d: "The article says the Governor shall act \"as soon as possible\", but fixes no period. The whole controversy comes from the silence." },
    { t: "The recent disputes", d: "Punjab, Tamil Nadu, Kerala and Telangana went to the Supreme Court over Governors sitting on Bills for months or years." },
    { t: "Where it stands", d: "In 2025 the President made a reference under Article 143 asking whether courts can impose deadlines on Governors and on the President in giving assent." }
  ],
  seen: [
    "UPSC Pre 2025 — the Governor's discretion and the reservation of a Bill under Article 200",
    "UPSC Pre 2014 — the Governor's discretionary powers including reservation"
  ],
  trap: "The Governor cannot withhold assent a second time, but the article fixes no time within which they must act at all.\n\nSo indefinite delay achieves what a second refusal cannot. The whole dispute lies in the gap between what the text forbids and what it fails to prevent."
},

"201": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 201 says the President, given a State Bill that the Governor has reserved, may assent or withhold assent. The President may ask the State legislature to reconsider it, but need not assent even if it passes again.",
  why: "Article 201 is the companion to Article 200. The article is the one place where returning a Bill and passing it again does not force assent.",
  concepts: [
    { t: "The President's options", d: "When a Bill is reserved by the Governor, the President may assent to it or withhold assent." },
    { t: "The President may order a return", d: "If it is not a Money Bill, the President may direct the Governor to return it to the House with a message." },
    { t: "The House must act within six months", d: "The House must reconsider the Bill within six months of receiving the message. If it passes the Bill again, it goes back to the President." },
    { t: "Even then the President need not assent", d: "The President may refuse a reserved State Bill outright and indefinitely, even after the House has passed it a second time. Do not call the power the only absolute veto in the Constitution. The President can withhold assent to a Union Bill under Article 111 too. What is unique to Article 201 is that re-passage carries no consequence: under Articles 111 and 200, passing a returned Bill again compels assent, and here it does not." }
  ],
  trap: "Under Articles 111 and 200 a second passage compels assent. Under Article 201 it does not.\n\nSo the centre can kill a reserved State Bill for good. The point is the strongest single argument that Indian federalism tilts toward the Union."
},

"213": {
  tier: 2,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 213 lets the Governor make an ordinance when the State legislature is not in session and immediate action is needed. The ordinance lapses six weeks after the legislature reassembles.",
  why: "The Governor's power to make ordinances mirrors the President's, but carries one restriction the President's does not. Mains has asked about re-promulgation directly.",
  concepts: [
    { t: "The conditions", d: "The Governor can act when the Legislative Assembly is not in session. Where the State has a Council, the Governor can act unless both Houses are in session. The Governor must also be satisfied that immediate action is needed." },
    { t: "The extra restriction", d: "In three situations the Governor needs the President's prior instructions. The first is when a Bill with the same provisions would have needed the President's previous sanction. The second is when the Governor would have had to reserve such a Bill for the President. The third is when an Act with those provisions would have been invalid without the President's assent." },
    { t: "How long it lasts", d: "The ordinance must be laid before the legislature, and ceases six weeks after it reassembles, or earlier if a disapproving resolution is passed." },
    { t: "An ordinance cannot amend the Constitution", d: "Same limit as Article 123." },
    { t: "Krishna Kumar Singh (2017)", d: "The Court struck at Bihar's practice of re-promulgating the same ordinances for years. The Court held that laying the ordinance before the House is mandatory, and that re-promulgating it again and again is a fraud on the Constitution." }
  ],
  seen: [
    "UPSC Mains 2022 — the Governor's ordinance-making power and re-promulgation"
  ],
  trap: "The Governor sometimes needs the President's prior instructions before issuing an ordinance. The President never needs anyone's.\n\nThe point is the one real difference between Articles 123 and 213, and questions test it."
},

"214": {
  tier: 2,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 214 says there shall be a High Court for each State. Under Article 231, two or more States can share one High Court.",
  why: "High Court structure comes up as a matching question, especially the High Courts that States share.",
  concepts: [
    { t: "What it says", d: "There shall be a High Court for each State." },
    { t: "But States can share one", d: "Article 231 lets Parliament establish a common High Court for two or more States, or for States and a Union territory." },
    { t: "The shared ones", d: "Punjab and Haryana share one, as do Bombay, Madras, Calcutta and Gauhati across several States and Union territories. There are 25 High Courts for 28 States and 8 Union territories." },
    { t: "Only Parliament controls jurisdiction over Union territories", d: "Parliament may extend a High Court's jurisdiction to a Union territory or exclude it. The State cannot." },
    { t: "The High Court is not subordinate to the Supreme Court", d: "A High Court is a court of record in its own right under Article 215. Supreme Court decisions bind it under Article 141, which is a different thing from being subordinate." }
  ],
  trap: "Article 214 says one High Court per State, and Article 231 immediately allows the opposite.\n\nSo an option saying every State must have its own separate High Court is wrong."
},

"226": {
  tier: 1,
  papers: ["UPSC Pre", "UPSC Mains", "State PCS"],
  says: "Article 226 lets every High Court issue writs, such as habeas corpus and mandamus, to enforce Fundamental Rights and for any other purpose, against any person or authority within its territory.",
  why: "The power of the High Courts to issue writs is wider than the Supreme Court's. The contrast between Articles 32 and 226 is the most often tested contrast in the section on the judiciary.",
  concepts: [
    { t: "Wider in subject matter", d: "A High Court can issue writs to enforce Fundamental Rights *and for any other purpose*, which means any ordinary legal right. Article 32 covers Fundamental Rights only." },
    { t: "Narrower in territory", d: "A High Court's writ runs within its own territorial jurisdiction. The Supreme Court's runs throughout India." },
    { t: "The cause-of-action extension", d: "Clause (2) lets a High Court issue a writ against an authority outside its territory if the cause of action arose wholly or partly within its jurisdiction. The 15th Amendment (1963) added the rule as clause (1A), and it became clause (2) when the 42nd Amendment replaced the whole article in 1976." },
    { t: "Article 226 is not a Fundamental Right", d: "Article 32 is itself a Fundamental Right, while Article 226 is a power of the court. In an emergency that difference matters, but not in the way it is usually put. An order under Article 359 bars enforcement of the specified Fundamental Rights in *any* court, so it reaches Article 226 petitions for those rights too. Article 226 keeps everything else, because it also runs for ordinary legal rights, and Article 32 does not." },
    { t: "The power is discretionary", d: "A High Court may refuse relief if there is an adequate alternative remedy, if there is unexplained delay, or if the petitioner comes with unclean hands. The Supreme Court under Article 32 has less room to refuse." },
    { t: "L. Chandra Kumar (1997)", d: "Judicial review by High Courts under Articles 226 and 227 is part of the basic structure and cannot be excluded, even by constitutional amendment." }
  ],
  seen: [
    "UPSC Pre 2024 — the writ of prohibition and restraining a lower court",
    "UPSC Pre 2022 — the conditions for mandamus and quo warranto"
  ],
  trap: "Article 226 is wider in what it covers and narrower in where it reaches. Article 32 is the reverse.\n\nOn emergencies, be precise. An order under Article 359 bars enforcement of the *specified* Fundamental Rights in any court, the High Court included. So Article 226 is no way round the order for those rights. What survives is everything else: Article 226 also runs for ordinary legal rights, and those are untouched. Article 32 exists only for Fundamental Rights, so such an order can close it completely."
},

"233": {
  tier: 3,
  papers: ["UPSC Pre", "State PCS"],
  says: "Article 233 says the Governor appoints district judges in consultation with the High Court. A lawyer recruited directly needs seven years at the Bar and the High Court's recommendation.",
  why: "District judge appointments split power between the Governor and the High Court in an unusual way, and the split is what makes them examinable.",
  concepts: [
    { t: "Who appoints", d: "The Governor of the State, in consultation with the High Court exercising jurisdiction there." },
    { t: "Promotion versus direct recruitment", d: "Most district judges are promoted from the subordinate judiciary. Some are recruited directly from the Bar." },
    { t: "For a direct recruit from the Bar", d: "The person must have been an advocate or pleader for at least seven years, and must be recommended by the High Court. The recommendation is mandatory, not advisory." },
    { t: "Control afterwards belongs to the High Court", d: "Article 235 gives the High Court control over district courts and subordinate courts, including posting, promotion and leave. The Governor has no role after appointment." },
    { t: "Why it is structured this way", d: "The design keeps the subordinate judiciary independent of the State executive, giving effect to the directive in Article 50." }
  ],
  trap: "The Governor appoints, but the High Court's recommendation is compulsory for a direct recruit from the Bar.\n\nAnd once appointed, the judge is under the High Court's control entirely. The executive appoints and then steps away."
}

});
