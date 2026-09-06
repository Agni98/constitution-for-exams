/* Plain-language explanations — Part VI: The States (152–237).

   Much of this Part mirrors Part V, so the notes concentrate on where the
   State machinery deliberately differs from the Union's.

   House style: short declarative sentences, one idea each. "\n\n" = paragraph. */
Object.assign(window.COI_EXPLAIN = window.COI_EXPLAIN || {}, {

partVI: {
  simple: "Part VI sets up the government of a State.\n\n" +
    "It covers the Governor, the Chief Minister and Council of Ministers, the State legislature and its procedure, the Governor's ordinance power, and the High Courts and subordinate courts.\n\n" +
    "It repeats the structure of Part V almost article for article. The differences are where all the interesting law is."
},

"152": {
  simple: "In this Part, 'State' does not include Jammu and Kashmir.",
  catch: "The exclusion is now spent. After the 2019 reorganisation, Jammu and Kashmir is a Union territory, and Part VIII governs it."
},

/* ---------- The Governor ---------- */

"153": {
  simple: "There shall be a Governor for each State. The same person may be appointed Governor of two or more States.",
  catch: "The proviso allowing one Governor for several States came with the 7th Amendment. It is used routinely in the North-East."
},
"154": {
  simple: "The executive power of the State is vested in the Governor. He exercises it directly or through subordinate officers.",
  catch: "This is the mirror of Article 53, and like it, a formality. The substance is in Article 163."
},
"155": {
  simple: "The Governor is appointed by the President by warrant under his hand and seal.",
  catch: "Appointed, not elected. This is the single largest departure from the Union model, and the root of most Centre–State friction.\n\n" +
    "The Constituent Assembly considered an elected Governor and rejected the idea."
},
"156": {
  simple: "The Governor holds office during the pleasure of the President, for a term of five years. He may resign to the President, and continues until his successor takes office.",
  catch: "'During the pleasure' means no fixed security of tenure at all.\n\n" +
    "B.P. Singhal (2010) held that a Governor cannot be removed arbitrarily, or merely because the party in power at the Centre has changed. The Court will not require reasons to be disclosed."
},
"157": {
  simple: "To be Governor you must be a citizen of India and have completed thirty-five years.",
  catch: "Two qualifications, and that is all. There is no requirement of neutrality, no bar on having held party office, and no consultation with the State.\n\n" +
    "The Sarkaria and Punchhi Commissions both recommended adding some. Nothing was added."
},
"158": {
  simple: "The Governor cannot be a member of a legislature or hold any other office of profit. He gets a rent-free residence and the emoluments in the Second Schedule, which cannot be reduced during his term.\n\n" +
    "Where one person is Governor of two States, the emoluments are shared as the President directs.",
  catch: "The bar on reducing emoluments is largely theoretical. Article 156's 'pleasure' removal means a Governor who displeases the Centre simply stops being Governor."
},
"159": {
  simple: "The Governor takes his oath before the Chief Justice of the High Court. He swears to preserve, protect and defend the Constitution and the law, and to devote himself to the service and well-being of the people of the State.",
  catch: "The oath is to the people of the State. That sits awkwardly with appointment and removal by the Union, and both the Sarkaria and Punchhi Commissions flagged the tension."
},
"160": {
  simple: "The President may make provision for the discharge of the Governor's functions in any contingency this Chapter does not cover.",
  catch: "It is used when a Governor dies or resigns suddenly. The President typically asks the Governor of a neighbouring State, or the Chief Justice of the High Court, to hold additional charge."
},
"161": {
  simple: "The Governor may pardon, reprieve, respite or remit punishment, and may suspend or commute a sentence, for offences against laws relating to matters within the State's executive power.",
  catch: "Two things the Governor cannot do that the President can: pardon a death sentence, and deal with court-martial cases.\n\n" +
    "Beyond that his remission power is genuinely wide. Like the President's, it is exercised on ministerial advice."
},
"162": {
  simple: "The State's executive power extends to matters on which its legislature can make laws.\n\n" +
    "Where the subject is one both Parliament and the State can legislate on, the State's executive power is subject to what the Union exercises.",
  catch: "This is the mirror of Article 73. It is also why the Centre's executive reach expands automatically whenever it legislates on a Concurrent List subject."
},
"163": {
  simple: "There shall be a Council of Ministers headed by the Chief Minister to aid and advise the Governor, except where the Constitution requires him to act in his discretion.\n\n" +
    "If a question arises whether a matter is within his discretion, his decision is final. The advice tendered cannot be inquired into by any court.",
  catch: "The words 'except in so far as he is required to exercise his functions in his discretion' have no counterpart in Article 74.\n\n" +
    "That single clause is what gives the Governor real personal power, and what makes the office politically contested.\n\n" +
    "Nabam Rebia (2016) held the discretion is not unlimited and is subject to judicial review.",
  note: "Recognised areas of discretion include reserving a Bill for the President under Article 200, recommending President's Rule under Article 356, appointing a Chief Minister in a hung Assembly, and the special responsibilities under Articles 371A to 371J."
},
"164": {
  simple: "The Chief Minister is appointed by the Governor. Other Ministers are appointed on the Chief Minister's advice and hold office during the Governor's pleasure.\n\n" +
    "The Council is collectively responsible to the Legislative Assembly. A Minister who is not a member of the legislature must become one within six months.",
  catch: "Clause (1A), added by the 91st Amendment, caps a State Council of Ministers at 15 per cent of the Assembly's strength, with a floor of twelve.\n\n" +
    "The proviso requiring a Minister for tribal welfare applies to Chhattisgarh, Jharkhand, Madhya Pradesh and Odisha."
},
"165": {
  simple: "The Governor appoints an Advocate-General for the State, qualified to be a High Court judge, to advise the government and perform the legal duties assigned to him.",
  catch: "He is the State counterpart of the Attorney-General. He has a right of audience in all State courts and a right to speak in the legislature, but no vote."
},
"166": {
  simple: "All executive action of a State is expressed to be taken in the Governor's name. An authenticated order cannot be questioned on the ground that the Governor did not make it.\n\n" +
    "The Governor makes rules for the more convenient transaction of business and its allocation among Ministers.",
  catch: "The authentication rule protects an order from being challenged for its form. It does not cure a want of authority. An order made by someone with no power to make it is still void."
},
"167": {
  simple: "The Chief Minister must communicate Cabinet decisions to the Governor, furnish any information he calls for, and submit for Cabinet consideration a matter decided by a single Minister if the Governor asks.",
  catch: "This is where a Governor's information-gathering power comes from. It is often the flashpoint when a Governor asks a State government for files."
},

/* ---------- The State legislature ---------- */

"168": {
  simple: "Every State has a legislature consisting of the Governor and one or two Houses. Six States have a Legislative Council as well as a Legislative Assembly.",
  catch: "Which States have a Council is not fixed by the Constitution. Article 169 lets Parliament create or abolish one on a State's own resolution, which is why the list has changed repeatedly."
},
"169": {
  simple: "Parliament may abolish or create a Legislative Council in a State, if the Assembly passes a resolution by a majority of its total membership and two-thirds of members present and voting.\n\n" +
    "Such a law is not deemed an amendment of the Constitution for Article 368 purposes.",
  catch: "The Assembly's resolution is a recommendation, not a command. Parliament is not obliged to act on it, which is why Rajasthan's 2012 resolution has never been given effect."
},
"170": {
  simple: "A Legislative Assembly has between sixty and 500 members, chosen by direct election from territorial constituencies. Seats are allotted so that the ratio of seats to population is, as far as practicable, the same throughout the State.",
  catch: "The same 1971-census freeze that applies to the Lok Sabha applies here. The 84th Amendment extended it to the first census after 2026."
},
"171": {
  simple: "A Legislative Council has no more than one-third of the Assembly's strength, and no fewer than forty members.\n\n" +
    "One-third are elected by local authorities, one-twelfth by graduates, one-twelfth by teachers, one-third by the Assembly from outside its own membership. The rest are nominated by the Governor for literature, science, art, the co-operative movement and social service.",
  catch: "A Council can delay a Bill but cannot block it. That, together with the odd franchise, is why several States have abolished theirs."
},
"172": {
  simple: "Every Legislative Assembly lasts five years from its first sitting unless dissolved sooner. During an emergency it can be extended one year at a time.\n\n" +
    "A Legislative Council is never dissolved. One-third of its members retire every second year.",
  catch: "The one-year extension applies only while a national emergency under Article 352 is in force.\n\n" +
    "A State emergency under Article 356 cannot extend an Assembly's life. It suspends or dissolves it instead."
},
"173": {
  simple: "To be a member of a State legislature you must be a citizen, take the prescribed oath, and be at least thirty for the Council or twenty-five for the Assembly.",
  catch: "Thirty for the Council but twenty-five for the Assembly. The upper House expects more age, exactly as at the Union level."
},
"174": {
  simple: "The Governor summons the House or Houses so that no more than six months separate the last sitting of one session from the first of the next. He may prorogue them, and dissolve the Assembly.",
  catch: "The six-month rule is a maximum gap between sittings, not a minimum number of sitting days.\n\n" +
    "Governors have used that silence to delay summoning an Assembly. The Supreme Court has held the Governor must act on the Council of Ministers' advice in doing so."
},
"175": {
  simple: "The Governor may address the House or Houses, and send messages about a pending Bill or anything else.",
  catch: "The power to send a message is one of the few the Governor exercises without a specific requirement of ministerial advice on the face of the article."
},
"176": {
  simple: "The Governor addresses the Assembly, or both Houses together, at the first session after each general election and at the first session of each year.",
  catch: "The address is written by the State government and read by the Governor.\n\n" +
    "Governors declining to read passages they disagree with has become a recurring flashpoint in Centre–State relations."
},
"177": {
  simple: "Ministers and the Advocate-General may speak and take part in the proceedings of either House and of its committees. They may vote only in a House of which they are members.",
  catch: "The Advocate-General may speak but can never vote. He is an officer, not a member."
},
"178": {
  simple: "The Legislative Assembly chooses a Speaker and a Deputy Speaker from among its members.",
  catch: "The Constitution sets no deadline for electing either officer. That is how Deputy Speaker posts have stayed vacant for entire Assembly terms."
},
"179": {
  simple: "The Speaker or Deputy Speaker vacates office on ceasing to be a member, on resignation, or on removal by a resolution of a majority of all the then members after fourteen days' notice.",
  catch: "The Speaker continues in office after the Assembly is dissolved, until just before the first meeting of the next one. A State is therefore never without a presiding officer."
},
"180": {
  simple: "The Deputy Speaker performs the Speaker's duties when the office is vacant or the Speaker is absent. So does a member chosen by the Assembly, where necessary."
},
"181": {
  simple: "A Speaker or Deputy Speaker whose removal is under consideration may not preside, but may speak and vote in the proceedings.",
  catch: "Nabam Rebia (2016) held that a Speaker facing a removal notice should not decide Tenth Schedule disqualification petitions while that notice is pending. That holding was referred to a larger bench in 2023 and is still unresolved."
},
"182": {
  simple: "The Legislative Council chooses a Chairman and a Deputy Chairman from among its members."
},
"183": {
  simple: "The Chairman or Deputy Chairman of a Council vacates office by the same three routes as the Speaker: ceasing to be a member, resignation, or removal by a resolution of a majority of all the then members."
},
"184": {
  simple: "The Deputy Chairman performs the Chairman's duties when the office is vacant or the Chairman is absent. So does a member chosen by the Council, where necessary."
},
"185": {
  simple: "A Chairman or Deputy Chairman whose removal is under consideration may not preside, but may speak and vote."
},
"186": {
  simple: "Salaries and allowances of the Speaker, Deputy Speaker, Chairman and Deputy Chairman are fixed by the State legislature. Until then the Second Schedule applies.",
  catch: "These salaries are charged on the Consolidated Fund of the State, so they are not voted on annually. The presiding officers' pay cannot be used as leverage against them."
},
"187": {
  simple: "Each House of a State legislature has a separate secretarial staff. The legislature may regulate their recruitment and service conditions by law."
},
"188": {
  simple: "Every member must make and subscribe the oath or affirmation in the Third Schedule, before the Governor or a person appointed by him, before taking his seat.",
  catch: "Until the oath is taken a member cannot sit or vote, and Article 193 imposes a penalty if he does."
},
"189": {
  simple: "Questions are decided by a majority of members present and voting, other than the presiding officer, who has a casting vote. The House may act despite vacancies.\n\n" +
    "The quorum is ten members or one-tenth of the total membership, whichever is greater.",
  catch: "That is a very low floor, and the presiding officer need not verify it unless a member points out the absence of quorum."
},
"190": {
  simple: "No one may sit in both Houses of a State legislature, or in the legislatures of two States.\n\n" +
    "A seat falls vacant on disqualification, on resignation, or on absence from all meetings for sixty days without permission.",
  catch: "As in Article 101, the presiding officer may refuse a resignation that is not voluntary and genuine."
},
"191": {
  simple: "The disqualifications for a State legislature are office of profit, unsound mind, undischarged insolvency, loss of citizenship, and disqualification under any law. Defection under the Tenth Schedule is added by clause (2).",
  catch: "The Constitution leaves 'office of profit' to be defined by State law, so the exemption lists vary considerably between States."
},
"192": {
  simple: "A question whether a member has become subject to a disqualification is decided by the Governor. He must obtain the Election Commission's opinion and act according to it.",
  catch: "As with the President under Article 103, the Governor is bound by that opinion. The Election Commission, not the Governor, is the real decision-maker in office-of-profit cases."
},
"193": {
  simple: "A member who sits or votes before taking the oath, or while disqualified, is liable to a penalty of ₹500 a day, recoverable as a debt to the State.",
  catch: "The figure has never been revised, exactly as with its Union counterpart in Article 104."
},
"194": {
  simple: "Members have freedom of speech in the State legislature, and immunity from court proceedings for anything said or any vote given. The same immunity covers publication of proceedings under the House's authority.",
  catch: "This is the State counterpart of Article 105, and equally subject to Sita Soren (2024), which withdrew the immunity from legislators who take bribes to vote."
},
"195": {
  simple: "Members' salaries and allowances are as the State legislature determines by law.",
  catch: "As at the Union level, the legislature fixes its own members' pay. The Second Schedule applies only until it does."
},

/* ---------- Legislative procedure in a State ---------- */

"196": {
  simple: "An ordinary Bill may originate in either House of a bicameral State legislature. A Money Bill may originate only in the Assembly.\n\n" +
    "Bills do not lapse on prorogation. A Bill pending in the Assembly lapses on its dissolution, and so does one pending in the Council that the Assembly has already passed.",
  catch: "The upper House cannot preserve a Bill that the electorate has, in effect, sent back."
},
"197": {
  simple: "Where the Council rejects a Bill passed by the Assembly, or does not pass it within three months, or amends it unacceptably, the Assembly may pass it again.\n\n" +
    "If the Council then rejects it or lets a further month pass, the Bill is deemed passed.",
  catch: "The Council's maximum delaying power is about four months on the first passage and one month on the second.\n\n" +
    "There is no joint sitting. The Assembly simply prevails."
},
"198": {
  simple: "A Money Bill may be introduced only in the Assembly. The Council may only recommend, and must return the Bill within fourteen days. The Assembly may accept or reject those recommendations, and either way the Bill is deemed passed.",
  catch: "The Council has no veto and no power of delay beyond fourteen days, exactly as the Rajya Sabha has none under Article 109."
},
"199": {
  simple: "Article 199 defines a Money Bill for a State in the same terms Article 110 uses for the Union, and makes the Speaker's certificate final.",
  catch: "The same question raised at the Union level in Rojer Mathew — whether that finality is reviewable — applies to States."
},
"200": {
  simple: "When a Bill is presented to the Governor he has four choices. He may assent, withhold assent, return it for reconsideration if it is not a Money Bill, or reserve it for the President.\n\n" +
    "If the House passes it again he must assent. He must reserve a Bill that would derogate from the powers of the High Court.",
  catch: "The article sets no time limit for any of these choices, and Governors have used that silence to sit on Bills for months.\n\n" +
    "In State of Punjab v. Principal Secretary (2023), and again in the Tamil Nadu case in 2025, the Supreme Court held that a Governor cannot withhold assent indefinitely, and read timelines into the article."
},
"201": {
  simple: "Where a Bill is reserved, the President may assent or withhold assent. He may instead direct the Governor to return it to the House for reconsideration within six months.\n\n" +
    "Even if the House then passes it again, the President is not obliged to assent.",
  catch: "Unlike the Governor under Article 200, the President is never compelled to assent to a reserved Bill.\n\n" +
    "That is the sharpest single asymmetry in Centre–State legislative relations."
},
"202": {
  simple: "The Governor lays an annual financial statement before the House or Houses, distinguishing charged expenditure from other expenditure.",
  catch: "The State budget follows the Union pattern exactly. Charged expenditure is discussed but not voted; everything else is voted as demands for grants."
},
"203": {
  simple: "Charged expenditure is not put to the vote of the Assembly. Other estimates go to it as demands for grants, which it may assent to, refuse or reduce. A demand can only be moved on the Governor's recommendation.",
  catch: "The Governor's recommendation is needed before a demand can even be moved, which means the executive controls what the legislature may vote on."
},
"204": {
  simple: "An Appropriation Bill authorises withdrawal from the Consolidated Fund of the State. No amendment varying a grant is admissible, and no withdrawal is lawful except under an Appropriation Act.",
  catch: "The Assembly may reduce a demand at the earlier stage. Once the Appropriation Bill is drawn it can only pass or reject it."
},
"205": {
  simple: "Supplementary, additional and excess grants in a State follow the Budget procedure."
},
"206": {
  simple: "Article 206 provides for votes on account, votes of credit and exceptional grants in a State."
},
"207": {
  simple: "A Bill for taxation or for expenditure from the State's Consolidated Fund needs the Governor's recommendation, and cannot be introduced in the Legislative Council.",
  catch: "A Money Bill and a Financial Bill are not the same thing. A Financial Bill needs the Governor's recommendation but leaves the Council's ordinary powers intact."
},
"208": {
  simple: "Each House of a State legislature may make rules for its own procedure.",
  catch: "As at the Union level, the rules — not the Constitution — decide what business a House actually transacts."
},
"209": {
  simple: "A State legislature may by law regulate financial procedure and the timely completion of financial business, overriding the House's own rules.",
  catch: "Almost no State has made such a law. State financial procedure runs on House rules alone."
},
"210": {
  simple: "Business in a State legislature is transacted in the official language of the State, in Hindi or in English. The presiding officer may permit a member's mother tongue.",
  catch: "The English limb was to lapse after fifteen years. Most States have extended it by law."
},
"211": {
  simple: "No discussion may take place in a State legislature on the conduct of a judge of the Supreme Court or a High Court in the discharge of his duties.",
  catch: "A State legislature cannot debate a judge's conduct even though it has no role in removing him. Removal is entirely Parliament's business under Article 218."
},
"212": {
  simple: "The validity of proceedings in a State legislature cannot be questioned on the ground of an alleged irregularity of procedure. Its officers are not subject to a court's jurisdiction for regulating procedure.",
  catch: "As with Article 122, 'irregularity' is not 'illegality'. Courts have entertained challenges where a proceeding was said to be unconstitutional rather than merely irregular."
},
"213": {
  simple: "The Governor may promulgate an Ordinance when the legislature is not in session and immediate action is needed. It has the force of an Act, must be laid before the legislature, and ceases six weeks after it reassembles.",
  catch: "Three situations require the President's prior instructions: where a corresponding Bill would have needed his previous sanction, where a Bill would have had to be reserved for him, and where a corresponding Act would have been invalid without his assent.\n\n" +
    "The Governor's ordinance power is therefore narrower than the President's."
},

/* ---------- The High Courts ---------- */

"214": {
  simple: "There shall be a High Court for each State.",
  catch: "Read with Article 231, which lets Parliament establish one High Court for two or more States. That is why there are fewer High Courts than States."
},
"215": {
  simple: "Every High Court is a court of record, with all the powers of such a court, including the power to punish for contempt of itself.",
  catch: "Being a court of record means the contempt power is inherent, not statutory. The limits in the Contempt of Courts Act do not confine a High Court's own jurisdiction."
},
"216": {
  simple: "A High Court consists of a Chief Justice and such other judges as the President may from time to time appoint.",
  catch: "There is no fixed strength. The sanctioned strength of every High Court is set by executive order, which is one reason vacancies persist."
},
"217": {
  simple: "High Court judges are appointed by the President, after consultation with the Chief Justice of India, the Governor, and — for a judge other than the Chief Justice — the Chief Justice of that High Court.\n\n" +
    "They hold office until sixty-two. The qualifications are citizenship plus ten years in judicial office, or ten years as an advocate of a High Court.",
  catch: "The retirement age is sixty-two, three years below the Supreme Court's sixty-five. The anomaly has been criticised repeatedly and never fixed.\n\n" +
    "The 15th Amendment raised it from sixty to sixty-two in 1963."
},
"218": {
  simple: "The removal provisions in Article 124 for Supreme Court judges apply to High Court judges too.",
  catch: "Same ground, proved misbehaviour or incapacity. Same two-thirds address by both Houses of Parliament, not the State legislature.\n\n" +
    "A State has no say in removing its own High Court's judges."
},
"219": {
  simple: "Every High Court judge takes an oath before the Governor, in the form set out in the Third Schedule.",
  catch: "The oath is taken before the Governor, but the judge owes the State government nothing. His appointment, transfer and removal are all outside the State's hands."
},
"220": {
  simple: "A person who has held office as a permanent judge of a High Court may not plead or act in any court or before any authority in India. The Supreme Court and other High Courts are the exceptions.",
  catch: "This is why retired High Court judges appear only in the Supreme Court or other High Courts, never before the court they sat in."
},
"221": {
  simple: "High Court judges' salaries are as Parliament determines. Allowances, leave and pension cannot be varied to their disadvantage after appointment.",
  catch: "Salaries were moved from the Constitution to parliamentary law by the 54th Amendment. Judicial pay is now revised by ordinary legislation rather than by amendment."
},
"222": {
  simple: "The President may transfer a judge from one High Court to another, after consultation with the Chief Justice of India. A transferred judge receives a compensatory allowance.",
  catch: "The transfer power was used punitively during the Emergency.\n\n" +
    "The Second Judges Case made the Chief Justice of India's recommendation binding here too, and required consultation with the four senior-most judges."
},
"223": {
  simple: "When the office of Chief Justice of a High Court is vacant, or he cannot act, the President may appoint another judge of that Court to act as Chief Justice.",
  catch: "Acting Chief Justices have on occasion held office for long periods. The Supreme Court has criticised this as leaving a High Court without settled administrative leadership."
},
"224": {
  simple: "The President may appoint additional judges for a temporary increase in business or arrears, for up to two years. He may also appoint acting judges when a permanent judge is absent.",
  catch: "Most High Court judges are appointed as additional judges before confirmation. That gives the confirmation stage a quiet significance."
},
"224A": {
  simple: "The Chief Justice of a High Court may request a retired judge of that or any other High Court to sit and act as a judge of the Court. This needs the President's previous consent and the retired judge's consent.",
  catch: "This is the ad hoc judge provision. It was revived in Lok Prahari (2021) as a tool against pendency, and is used only sparingly."
},
"225": {
  simple: "The jurisdiction of the High Courts, the law they administer, their powers and their existing rules of practice all continue as before the Constitution, subject to the Constitution and to legislation.",
  catch: "The proviso removing the old revenue-matters bar means High Courts now have original jurisdiction in revenue cases too."
},
"226": {
  simple: "Every High Court may issue directions, orders or writs — including habeas corpus, mandamus, prohibition, quo warranto and certiorari — to any person or authority within its territory, or where the cause of action arose.\n\n" +
    "It may do so both to enforce fundamental rights and for any other purpose.",
  catch: "'For any other purpose' makes this wider than Article 32. A High Court will hear an ordinary legal wrong; the Supreme Court under Article 32 will not.\n\n" +
    "Clause (2), added by the 15th Amendment, lets a High Court reach an authority sitting outside its territory if the cause of action arose within it. That is why the Delhi High Court hears so many national matters.",
  note: "Clause (3) requires an interim order made without hearing the other side to be disposed of within two weeks of an application to vacate it. It is a 44th Amendment safeguard against ex parte stays running forever."
},
"226A": {
  simple: "This article barred High Courts from considering the constitutional validity of central laws.",
  catch: "Inserted by the 42nd Amendment and repealed by the 43rd in 1977."
},
"227": {
  simple: "Every High Court has superintendence over all courts and tribunals within its territory. It may call for returns, make general rules for their practice, prescribe forms and settle fees.\n\n" +
    "Courts and tribunals constituted under a law relating to the armed forces are excluded.",
  catch: "This is administrative and judicial supervision combined, and unlike Article 226 it can be exercised by the Court on its own motion.\n\n" +
    "L. Chandra Kumar (1997) held that judicial review under Articles 226 and 227 is part of the basic structure. A tribunal's decisions can never be put beyond a High Court."
},
"228": {
  simple: "Where a case pending in a subordinate court involves a substantial question of law as to the interpretation of the Constitution, and deciding it is necessary to dispose of the case, the High Court withdraws the case.\n\n" +
    "It may then decide the case entirely, or decide the question and send the case back.",
  catch: "The second course is the usual one."
},
"228A": {
  simple: "This article prescribed a special procedure for determining the constitutional validity of State laws.",
  catch: "Inserted by the 42nd Amendment and repealed by the 43rd in 1977."
},
"229": {
  simple: "Appointments of officers and servants of a High Court are made by the Chief Justice. Their service conditions are set by his rules, subject to the Governor's approval where salaries and pensions are involved.\n\n" +
    "The Court's administrative expenses are charged on the Consolidated Fund of the State.",
  catch: "Control over its own staff, and a charged budget, are the administrative half of judicial independence."
},
"230": {
  simple: "Parliament may by law extend or exclude the jurisdiction of a High Court to or from a Union territory.",
  catch: "This is how a High Court comes to have jurisdiction over a Union territory that has no High Court of its own."
},
"231": {
  simple: "Parliament may by law establish a common High Court for two or more States, or for States and a Union territory.",
  catch: "This is why there are fewer High Courts than States. The Punjab and Haryana High Court and the Gauhati High Court are the best-known examples."
},
"232": {
  simple: "This was an earlier provision on the interpretation of this Chapter.",
  catch: "Omitted by the 7th Amendment in 1956, when the States were reorganised."
},

/* ---------- Subordinate courts ---------- */

"233": {
  simple: "District judges are appointed, posted and promoted by the Governor in consultation with the High Court.\n\n" +
    "A person not already in Union or State service qualifies if he has been an advocate or pleader for seven years and the High Court recommends him.",
  catch: "The seven-year bar applies to direct recruits only.\n\n" +
    "The split between promotion from within the service and direct recruitment from the bar has generated a long line of litigation, most recently on whether serving judicial officers may apply as advocates."
},
"233A": {
  simple: "This article validates appointments of, and judgments delivered by, certain district judges appointed irregularly before 1966.",
  catch: "Inserted by the 20th Amendment, to save a large number of decisions after the Supreme Court found the appointments defective."
},
"234": {
  simple: "Appointments to the judicial service other than district judges are made by the Governor, in accordance with rules made after consulting the State Public Service Commission and the High Court.",
  catch: "Both bodies must be consulted. It is a deliberate double lock, and the Supreme Court has held that the High Court's view carries greater weight."
},
"235": {
  simple: "Control over district courts and the courts subordinate to them is vested in the High Court. That includes posting, promotion and leave of persons in the judicial service below the rank of district judge.",
  catch: "'Control' here is the constitutional foundation of judicial independence at the trial level. The executive appoints; the High Court controls."
},
"236": {
  simple: "Article 236 defines two terms for this Chapter. 'District judge' includes a range of named judicial offices. 'Judicial service' means a service consisting exclusively of persons intended to fill the post of district judge and civil judicial posts inferior to it.",
  catch: "The definition of judicial service is exclusive. That is why the Article 235 protection does not extend to every court employee."
},
"237": {
  simple: "The Governor may by public notification apply the provisions of this Chapter to any class of magistrates in the State.",
  catch: "This lets a State bring executive magistrates under the High Court's control. It is the practical route to the separation of judiciary and executive that Article 50 directs."
}

});
