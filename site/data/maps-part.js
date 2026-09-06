/* Mind maps drawn for one section of a Part, not for the whole Part.

   A short Part reads fine under a single map — Part III's six categories of
   rights fit on one page, and that map still sits above the panels. A long
   one does not: "The Union" runs from the President to the Comptroller and
   Auditor-General, and a single diagram of it would be a wall. So the big
   Parts get a map per section instead, drawn where that section is read.

   The key is 'part' + Part numeral + '.' + chapter numeral + ':' + the
   section's name, exactly as app.js builds it in partSections(). The chapter
   numeral is in the key because Part VI has a section called "General" in
   chapter I and another in chapter III.

   Everything here is written for this site — explanation, not law. Article
   numbers and the substance behind each line were checked against the bare
   text in this build.                                                       */

Object.assign(window.COI_MAPS, {

/* ============================ PART V — THE UNION ======================== */

'partV.I:The President and Vice-President': {
  type: 'mind',
  title: 'The President — how the office is filled, held and vacated',
  caption: 'Twenty-two articles, and only one of them (72) gives the President a power he exercises on his own judgment.',
  root: { label: 'President &\nVice-President\nArt. 52–73', children: [
    { label: 'The office itself', children: [
      { label: '52 — there shall be a President of India', href: '#/article/52' },
      { label: '53 — the executive power of the Union vests in him', href: '#/article/53' },
      { label: '73 — and reaches as far as Parliament\'s power reaches', href: '#/article/73' } ] },
    { label: 'Getting there', children: [
      { label: '54 — an electoral college of MPs and MLAs, not the voters', href: '#/article/54' },
      { label: '55 — single transferable vote; a vote\'s value set by population', href: '#/article/55' },
      { label: '58 — citizen, 35, qualified for the Lok Sabha', href: '#/article/58' },
      { label: '62 — a vacancy filled within six months', href: '#/article/62' },
      { label: '71 — election disputes go straight to the Supreme Court', href: '#/article/71' } ] },
    { label: 'Staying there', children: [
      { label: '56 — five years; resignation addressed to the Vice-President', href: '#/article/56' },
      { label: '57 — re-election allowed, with no limit on terms', href: '#/article/57' },
      { label: '59 — no seat in a legislature, no office of profit', href: '#/article/59' },
      { label: '60 — oath to preserve, protect and defend the Constitution', href: '#/article/60' },
      { label: '61 — impeachment for violation of the Constitution: two-thirds of each House', href: '#/article/61' } ] },
    { label: 'The one personal power', children: [
      { label: '72 — pardon, reprieve, respite, remission, commutation', href: '#/article/72' },
      { label: 'the only route for a death sentence or a court-martial', href: '#/article/72' } ] },
    { label: 'The Vice-President', children: [
      { label: '63 — there shall be a Vice-President', href: '#/article/63' },
      { label: '64 — ex officio Chairman of the Council of States', href: '#/article/64' },
      { label: '65 — acts as President while the office is vacant', href: '#/article/65' },
      { label: '66 — elected by the members of both Houses', href: '#/article/66' },
      { label: '67 — removed by the Rajya Sabha, with the Lok Sabha agreeing', href: '#/article/67' },
      { label: '70 — Parliament fills any gap the Constitution left', href: '#/article/70' } ] }
  ] }
},

'partV.I:Council of Ministers': {
  type: 'mind',
  title: 'Two articles that move the government out of the President\'s hands',
  caption: 'Article 74 said "may" until 1976 and "shall" after it. That one word is where the real executive sits.',
  root: { label: 'Council of\nMinisters\nArt. 74–75', children: [
    { label: '74 — advice binds', href: '#/article/74', children: [
      { label: 'the 42nd Amendment made the advice binding', href: '#/article/74' },
      { label: 'the 44th let him return it once — the second time he must act on it', href: '#/article/74' },
      { label: '74(2) — no court may ask what the advice was', href: '#/article/74' } ] },
    { label: '75 — who holds office, and for how long', href: '#/article/75', children: [
      { label: 'the President appoints the PM; the rest on the PM\'s advice', href: '#/article/75' },
      { label: '75(1A) — ministers capped at 15% of the Lok Sabha (91st Amdt)', href: '#/article/75' },
      { label: '75(1B) — a defector disqualified under the Tenth Schedule cannot be a minister', href: '#/schedule/X' },
      { label: '75(2) — they hold office during the pleasure of the President', href: '#/article/75' },
      { label: '75(3) — collectively responsible to the House of the People', href: '#/article/75' },
      { label: '75(5) — six months out of Parliament and a minister ceases to be one', href: '#/article/75' } ] }
  ] }
},

'partV.II:General': {
  type: 'mind',
  title: 'What Parliament is made of',
  caption: 'Three components in article 79, and then the numbers, terms and qualifications for each House.',
  root: { label: 'Parliament\nArt. 79–88', children: [
    { label: 'Its three parts', children: [
      { label: '79 — the President, the Council of States, the House of the People', href: '#/article/79' } ] },
    { label: 'Council of States', children: [
      { label: '80 — up to 238 from the States and Union territories', href: '#/article/80' },
      { label: '80 — plus 12 nominated for literature, science, art, social service', href: '#/article/80' },
      { label: 'the Fourth Schedule fixes each State\'s number', href: '#/schedule/IV' },
      { label: '83 — never dissolved; a third retire every second year', href: '#/article/83' } ] },
    { label: 'House of the People', children: [
      { label: '81 — up to 530 from the States and 20 from Union territories', href: '#/article/81' },
      { label: '82 — readjusted after each census, frozen until the first census after 2026', href: '#/article/82' },
      { label: '83 — five years, extendable a year at a time during an Emergency', href: '#/article/83' } ] },
    { label: 'Who may sit', children: [
      { label: '84 — a citizen: 30 for the Council, 25 for the House', href: '#/article/84' } ] },
    { label: 'Sitting and speaking', children: [
      { label: '85 — the President summons; never more than six months between sittings', href: '#/article/85' },
      { label: '86 — he may address either House and send messages to it', href: '#/article/86' },
      { label: '87 — the special address: first session after an election, first of each year', href: '#/article/87' },
      { label: '88 — ministers and the Attorney-General may speak in either House, but vote in neither unless members', href: '#/article/88' } ] }
  ] }
},

'partV.II:Officers of Parliament': {
  type: 'mind',
  title: 'Who runs each House',
  caption: 'The two Houses are built the same way, except at the top: the Rajya Sabha\'s chair comes from outside it, the Lok Sabha elects its own.',
  root: { label: 'Presiding officers\nArt. 89–98', children: [
    { label: 'Council of States', children: [
      { label: '89 — the Vice-President is Chairman; the House elects a Deputy', href: '#/article/89' },
      { label: '90 — how the Deputy Chairman\'s office falls vacant', href: '#/article/90' },
      { label: '91 — who presides when both chairs are empty', href: '#/article/91' },
      { label: '92 — neither presides over the debate on his own removal', href: '#/article/92' } ] },
    { label: 'House of the People', children: [
      { label: '93 — the House chooses a Speaker and a Deputy Speaker', href: '#/article/93' },
      { label: '94 — removal needs 14 days\' notice and a majority of all the then members', href: '#/article/94' },
      { label: '94 proviso — the Speaker stays on after dissolution, until the new House meets', href: '#/article/94' },
      { label: '95 — the Deputy Speaker acts when the office is vacant', href: '#/article/95' },
      { label: '96 — the Speaker does not preside over his own removal motion', href: '#/article/96' } ] },
    { label: 'Pay and staff', children: [
      { label: '97 — salaries fixed by Parliament; the Second Schedule until it does', href: '#/schedule/II' },
      { label: '98 — each House keeps its own secretariat', href: '#/article/98' } ] }
  ] }
},

'partV.II:Disqualifications of Members': {
  type: 'mind',
  title: 'Losing a seat',
  caption: 'Two different authorities decide: the President on the article 102 grounds, the presiding officer on defection.',
  root: { label: 'Vacating and\ndisqualification\nArt. 101–104', children: [
    { label: '101 — when a seat falls vacant', href: '#/article/101', children: [
      { label: 'no one may sit in both Houses, or in Parliament and a State legislature', href: '#/article/101' },
      { label: '101(4) — absent 60 days without leave and the House may declare the seat vacant', href: '#/article/101' } ] },
    { label: '102 — the grounds', href: '#/article/102', children: [
      { label: 'an office of profit under the Union or a State', href: '#/article/102' },
      { label: 'unsound mind, undischarged insolvent, not a citizen', href: '#/article/102' },
      { label: 'anything Parliament adds by law', href: '#/article/102' },
      { label: '102(2) — defection, under the Tenth Schedule', href: '#/schedule/X' } ] },
    { label: '103 — who decides', href: '#/article/103', children: [
      { label: 'the President decides, on the Election Commission\'s opinion — and that opinion binds him', href: '#/article/103' },
      { label: 'but a defection question goes to the Chairman or the Speaker, not the President', href: '#/schedule/X' } ] },
    { label: '104 — the penalty', children: [
      { label: 'sitting or voting before the oath, or while disqualified: ₹500 for each day', href: '#/article/104' } ] }
  ] }
},

'partV.II:Legislative Procedure': {
  type: 'mind',
  title: 'How a Bill becomes an Act',
  caption: 'Ordinary Bills, Money Bills and deadlocks each take a different route. The Speaker\'s certificate decides which one a Bill is on.',
  root: { label: 'Passing a Bill\nArt. 107–111', children: [
    { label: 'Where it starts', children: [
      { label: '107 — an ordinary Bill may begin in either House', href: '#/article/107' },
      { label: 'prorogation does not kill a Bill', href: '#/article/107' },
      { label: 'dissolution does — unless the Bill is pending in the Rajya Sabha and the Lok Sabha has not passed it', href: '#/article/107' } ] },
    { label: 'When the Houses disagree', children: [
      { label: '108 — the President may summon a joint sitting', href: '#/article/108' },
      { label: 'triggered by rejection, disagreement on amendments, or six months of silence', href: '#/article/108' },
      { label: 'decided by a simple majority of those present — which the Lok Sabha\'s numbers usually settle', href: '#/article/108' },
      { label: 'never available for a Money Bill or a Constitution Amendment Bill', href: '#/article/368' } ] },
    { label: 'Money Bills go their own way', children: [
      { label: '110 — only taxation, borrowing, the Consolidated Fund and the like', href: '#/article/110' },
      { label: '110(3) — the Speaker\'s certificate is final', href: '#/article/110' },
      { label: '109 — Lok Sabha only; the Rajya Sabha has 14 days and may only recommend', href: '#/article/109' },
      { label: '117 — and it needs the President\'s recommendation to be introduced', href: '#/article/117' } ] },
    { label: 'The last step', children: [
      { label: '111 — the President assents, withholds assent, or returns it once', href: '#/article/111' },
      { label: 'if both Houses pass it again he "shall not withhold assent"', href: '#/article/111' },
      { label: 'the article sets no deadline for any of this', href: '#/article/111' } ] }
  ] }
},

'partV.II:Procedure in Financial Matters': {
  type: 'mind',
  title: 'The financial year, article by article',
  caption: 'Two halves: what the House votes on, and what it may only discuss. Charged expenditure is deliberately put out of reach.',
  root: { label: 'The Budget\nArt. 112–117', children: [
    { label: '112 — the annual financial statement', href: '#/article/112', children: [
      { label: 'estimates of receipts and expenditure laid before both Houses', href: '#/article/112' },
      { label: '112(3) — charged expenditure: discussed but not voted', href: '#/article/112' },
      { label: 'judges\' salaries, the CAG, debt charges, court decrees — kept out of the vote on purpose', href: '#/article/112' } ] },
    { label: '113 — demands for grants', href: '#/article/113', children: [
      { label: 'the House of the People may assent, refuse, or reduce', href: '#/article/113' },
      { label: 'the Rajya Sabha does not vote them at all', href: '#/article/113' },
      { label: 'no demand except on the President\'s recommendation', href: '#/article/113' } ] },
    { label: '114 — the Appropriation Bill', href: '#/article/114', children: [
      { label: 'no money leaves the Consolidated Fund without an appropriation made by law', href: '#/article/266' },
      { label: 'no amendment may change an amount already voted', href: '#/article/114' } ] },
    { label: 'When the estimate falls short', children: [
      { label: '115 — supplementary, additional and excess grants', href: '#/article/115' },
      { label: '116 — vote on account, vote of credit, exceptional grant', href: '#/article/116' },
      { label: 'a vote on account carries the government until the Appropriation Act is passed', href: '#/article/116' } ] },
    { label: '117 — financial Bills', children: [
      { label: 'introduced only in the Lok Sabha, only on the President\'s recommendation', href: '#/article/117' },
      { label: 'a Bill that merely spends money needs his recommendation before it is passed', href: '#/article/117' } ] }
  ] }
},

'partV.IV:The Union Judiciary': {
  type: 'mind',
  title: 'The Supreme Court — who sits on it, what it can hear, what its word is worth',
  caption: 'Articles 124A to 124C set up the National Judicial Appointments Commission. The Court struck it down in 2015; the official text still prints it.',
  root: { label: 'Supreme Court\nArt. 124–147', children: [
    { label: 'The court and its judges', children: [
      { label: '124 — appointment by the President after consultation with judges', href: '#/article/124' },
      { label: '124 — removal only by an address of both Houses, for proved misbehaviour or incapacity', href: '#/article/124' },
      { label: '124A–124C — the NJAC, struck down in 2015 and still printed', href: '#/article/124A' },
      { label: '126–128 — acting Chief Justice, ad hoc judges, retired judges sitting again', href: '#/article/127' },
      { label: '129 — a court of record, with the power to punish for contempt', href: '#/article/129' },
      { label: '130 — sits in Delhi unless the Chief Justice, with the President\'s approval, says otherwise', href: '#/article/130' } ] },
    { label: 'What it may hear', children: [
      { label: '131 — original: Union against State, or State against State', href: '#/article/131' },
      { label: '132 — appeal on a substantial question of constitutional law', href: '#/article/132' },
      { label: '133, 134 — civil and criminal appeals, including death sentences on reversal of acquittal', href: '#/article/134' },
      { label: '134A — the certificate the High Court has to give first', href: '#/article/134A' },
      { label: '136 — special leave: the door the Court opens at its own discretion', href: '#/article/136' },
      { label: '143 — a reference by the President; the opinion is advice, not a decree', href: '#/article/143' } ] },
    { label: 'What its orders carry', children: [
      { label: '141 — its law binds every court in India', href: '#/article/141' },
      { label: '142 — whatever order is needed for complete justice', href: '#/article/142' },
      { label: '144 — every civil and judicial authority must act in its aid', href: '#/article/144' },
      { label: '145(3) — a constitutional question needs a bench of at least five', href: '#/article/145' },
      { label: '137 — it may review its own judgments', href: '#/article/137' } ] },
    { label: 'Housekeeping', children: [
      { label: '139 — Parliament may enlarge its writ powers', href: '#/article/139' },
      { label: '139A — cases raising the same question may be pulled together', href: '#/article/139A' },
      { label: '146 — its own officers, its own expenses', href: '#/article/146' } ] }
  ] }
},

'partV.V:Comptroller and Auditor-General of India': {
  type: 'mind',
  title: 'The auditor the executive cannot remove',
  caption: 'Four articles. Ambedkar called this office the most important in the Constitution; the Public Accounts Committee it reports to is not mentioned anywhere in the text.',
  root: { label: 'Comptroller and\nAuditor-General\nArt. 148–151', children: [
    { label: '148 — the office', href: '#/article/148', children: [
      { label: 'appointed by the President by warrant under his hand and seal', href: '#/article/148' },
      { label: 'removed only like a Supreme Court judge — an address of both Houses', href: '#/article/124' },
      { label: 'salary and the office\'s expenses charged on the Consolidated Fund', href: '#/article/148' },
      { label: 'no further office under the Union or a State after he leaves', href: '#/article/148' } ] },
    { label: '149 — the duties', children: [
      { label: 'whatever Parliament prescribes — the Constitution names none', href: '#/article/149' } ] },
    { label: '150 — the accounts', children: [
      { label: 'the President prescribes the form, on the CAG\'s advice', href: '#/article/150' } ] },
    { label: '151 — the reports', children: [
      { label: 'to the President for the Union, to the Governor for a State', href: '#/article/151' },
      { label: 'laid before the House — which sends them to the Public Accounts Committee', href: '#/article/151' } ] }
  ] }
},

/* ============================ PART VI — THE STATES ====================== */

'partVI.II:The Governor': {
  type: 'mind',
  title: 'The Governor — appointed, not elected',
  caption: 'Read this beside articles 52 to 73. The offices look alike until you reach article 156: the Governor holds office during the pleasure of the President.',
  root: { label: 'The Governor\nArt. 153–162', children: [
    { label: 'The office', children: [
      { label: '153 — a Governor for each State; one person may hold two or more', href: '#/article/153' },
      { label: '154 — the State\'s executive power vests in him', href: '#/article/154' },
      { label: '162 — and reaches as far as the State legislature\'s power reaches', href: '#/article/162' } ] },
    { label: 'How he gets there', children: [
      { label: '155 — appointed by the President — in practice, by the Union government', href: '#/article/155' },
      { label: '156 — holds office during the President\'s pleasure; five years otherwise', href: '#/article/156' },
      { label: '157 — a citizen of India who has turned 35', href: '#/article/157' },
      { label: '158 — no seat in any legislature, no other office of profit', href: '#/article/158' } ] },
    { label: 'On the job', children: [
      { label: '159 — oath before the Chief Justice of the High Court', href: '#/article/159' },
      { label: '160 — the President provides for whatever the Constitution left out', href: '#/article/160' },
      { label: '161 — pardons for offences against State law', href: '#/article/161' },
      { label: 'but only the President can pardon a death sentence, or any court-martial sentence', href: '#/article/72' } ] }
  ] }
},

'partVI.II:Council of Ministers': {
  type: 'mind',
  title: 'The Chief Minister, and the words that are not in article 74',
  caption: '"Except in so far as he is required to exercise his functions in his discretion" is the whole difference between a Governor and a President.',
  root: { label: 'Chief Minister\n& Council\nArt. 163–164', children: [
    { label: '163 — advice, and discretion', href: '#/article/163', children: [
      { label: 'the Council aids and advises — except where the Governor acts in his discretion', href: '#/article/163' },
      { label: 'article 74 gives the President no such exception', href: '#/article/74' },
      { label: '163(2) — whether a matter is discretionary is for the Governor to decide', href: '#/article/163' },
      { label: '163(3) — what he was advised cannot be inquired into in court', href: '#/article/163' } ] },
    { label: '164 — the ministry', href: '#/article/164', children: [
      { label: 'the Governor appoints the Chief Minister, and the rest on his advice', href: '#/article/164' },
      { label: 'a Tribal Welfare Minister is compulsory in Chhattisgarh, Jharkhand, Madhya Pradesh and Odisha', href: '#/article/164' },
      { label: '164(1A) — capped at 15% of the Assembly, and never fewer than 12', href: '#/article/164' },
      { label: '164(1B) — a member disqualified for defection cannot be a minister', href: '#/schedule/X' },
      { label: '164(2) — collectively responsible to the Legislative Assembly', href: '#/article/164' },
      { label: '164(4) — six months out of the House and a minister ceases to be one', href: '#/article/164' } ] }
  ] }
},

'partVI.III:General': {
  type: 'mind',
  title: 'What a State legislature is made of',
  caption: 'The one structural choice the Constitution leaves open: whether a State has a second chamber at all.',
  root: { label: 'State legislature\nArt. 168–177', children: [
    { label: 'One House or two', children: [
      { label: '168 — the Governor, and either one House or two', href: '#/article/168' },
      { label: '169 — a Council may be created or abolished', href: '#/article/169' },
      { label: 'the Assembly resolves by a special majority; then Parliament legislates — if it chooses to', href: '#/article/169' },
      { label: '169(3) — such a law is not an amendment of the Constitution', href: '#/article/368' } ] },
    { label: 'The Assembly', children: [
      { label: '170 — between 60 and 500 members, directly elected', href: '#/article/170' },
      { label: '172 — five years, extendable a year at a time during an Emergency', href: '#/article/172' } ] },
    { label: 'The Council', children: [
      { label: '171 — no more than a third of the Assembly, and never fewer than 40', href: '#/article/171' },
      { label: 'graduates, teachers, local bodies, the Assembly\'s own choice, the Governor\'s nominees', href: '#/article/171' },
      { label: '172 — never dissolved; a third retire every second year', href: '#/article/172' } ] },
    { label: 'Members and sittings', children: [
      { label: '173 — a citizen: 25 for the Assembly, 30 for the Council', href: '#/article/173' },
      { label: '174 — the Governor summons; never more than six months between sittings', href: '#/article/174' },
      { label: '175, 176 — his right to address, and the special address each year', href: '#/article/176' },
      { label: '177 — ministers and the Advocate-General may speak in either House', href: '#/article/177' } ] }
  ] }
},

'partVI.III:Legislative Procedure': {
  type: 'mind',
  title: 'A State Bill, and the two people who can stop it',
  caption: 'There is no joint sitting in a State. A Legislative Council can delay a Bill; it cannot defeat one.',
  root: { label: 'A State Bill\nArt. 196–201', children: [
    { label: 'Through the Houses', children: [
      { label: '196 — a Bill may begin in either House, where there are two', href: '#/article/196' },
      { label: '197 — the Council can hold an ordinary Bill for three months, then one month more', href: '#/article/197' },
      { label: 'after that the Assembly\'s decision stands — no joint sitting exists', href: '#/article/197' },
      { label: '198, 199 — Money Bills: Assembly only, and 14 days for the Council to recommend', href: '#/article/198' } ] },
    { label: '200 — the Governor\'s four options', href: '#/article/200', children: [
      { label: 'assent, withhold assent, return it, or reserve it for the President', href: '#/article/200' },
      { label: 'a Bill returned and passed again must be assented to', href: '#/article/200' },
      { label: 'a Bill that would cut down the High Court\'s powers must be reserved', href: '#/article/200' },
      { label: 'the article fixes no time limit — the delay has been fought over in the Supreme Court', href: '#/article/200' } ] },
    { label: '201 — and then the President\'s', href: '#/article/201', children: [
      { label: 'he may assent, withhold assent, or send it back for reconsideration', href: '#/article/201' },
      { label: 'the House must take it up within six months of getting it back', href: '#/article/201' },
      { label: 'even after it is passed again, he is not obliged to assent', href: '#/article/201' } ] }
  ] }
},

'partVI.V:The High Courts in the States': {
  type: 'mind',
  title: 'The High Courts — older than the Supreme Court, and in one respect wider',
  caption: 'Article 226 lets a High Court issue writs "for any other purpose". Article 32 does not. That single phrase is the difference.',
  root: { label: 'High Courts\nArt. 214–231', children: [
    { label: 'The court', children: [
      { label: '214 — a High Court for each State', href: '#/article/214' },
      { label: '215 — a court of record, with the power to punish for contempt', href: '#/article/215' },
      { label: '216 — a Chief Justice and as many judges as the President appoints — no fixed strength', href: '#/article/216' },
      { label: '231 — one High Court may serve two or more States', href: '#/article/231' },
      { label: '230 — Parliament may extend one to a Union territory', href: '#/article/230' } ] },
    { label: 'Its judges', children: [
      { label: '217 — appointed after consultation with the CJI, the Governor and the Chief Justice of that court', href: '#/article/217' },
      { label: '217 — ten years in judicial office, or ten years at the Bar; retirement at 62', href: '#/article/217' },
      { label: '219 — oath before the Governor', href: '#/article/219' },
      { label: '220 — no practice afterwards in that court, though the Supreme Court stays open', href: '#/article/220' },
      { label: '222 — transfer to another High Court, after consulting the CJI', href: '#/article/222' },
      { label: '224, 224A — additional and acting judges; a retired judge may be asked back', href: '#/article/224A' } ] },
    { label: 'Its powers', children: [
      { label: '226 — writs for fundamental rights and for any other purpose', href: '#/article/226' },
      { label: '226(2) — and it reaches wherever the cause of action arose', href: '#/article/226' },
      { label: '227 — superintendence over every court and tribunal in the State', href: '#/article/227' },
      { label: '228 — it may withdraw a case that turns on a constitutional question', href: '#/article/228' },
      { label: '229 — its own officers and its own expenses', href: '#/article/229' } ] }
  ] }
},

'partVI.VI:Subordinate Courts': {
  type: 'mind',
  title: 'The courts most people actually meet',
  caption: 'Appointment sits with the Governor; control sits with the High Court. Article 233A exists because the two were once confused, and a run of appointments had to be saved.',
  root: { label: 'District judiciary\nArt. 233–237', children: [
    { label: 'Getting appointed', children: [
      { label: '233 — district judges appointed by the Governor, in consultation with the High Court', href: '#/article/233' },
      { label: '233 — an outsider needs seven years at the Bar and the High Court\'s recommendation', href: '#/article/233' },
      { label: '233A — appointments made before 1966 validated after the courts struck them down', href: '#/article/233A' },
      { label: '234 — everyone else recruited under rules made with the PSC and the High Court', href: '#/article/234' } ] },
    { label: 'Who controls them', children: [
      { label: '235 — the High Court controls posting, promotion and leave', href: '#/article/235' },
      { label: 'control is administrative — dismissal still runs through the Governor', href: '#/article/235' } ] },
    { label: 'Scope', children: [
      { label: '236 — what "district judge" and "judicial service" mean here', href: '#/article/236' },
      { label: '237 — the Governor may extend this Chapter to magistrates', href: '#/article/237' } ] }
  ] }
},

/* ================= PART XI — UNION AND THE STATES ======================= */

'partXI.I:Distribution of Legislative Powers': {
  type: 'mind',
  title: 'Who may make what law',
  caption: 'The Seventh Schedule draws the lines; articles 249 to 253 are the five doors through which Parliament may cross them.',
  root: { label: 'Legislative\nrelations\nArt. 245–255', children: [
    { label: 'The basic split', children: [
      { label: '245 — Parliament for all India, a State for its own territory', href: '#/article/245' },
      { label: '246 — the three Lists of the Seventh Schedule', href: '#/schedule/VII' },
      { label: '246A — goods and services tax, where both may tax the same supply', href: '#/article/246A' },
      { label: '248 — whatever is in no List belongs to Parliament', href: '#/article/248' } ] },
    { label: 'Entering the State List', children: [
      { label: '249 — the Rajya Sabha resolves by two-thirds, for one year at a time', href: '#/article/249' },
      { label: '250 — while a Proclamation of Emergency is in force', href: '#/article/250' },
      { label: '251 — the State\'s own law revives when the Union law lapses', href: '#/article/251' },
      { label: '252 — two or more States ask Parliament to legislate for them', href: '#/article/252' },
      { label: '253 — to give effect to a treaty or an international agreement', href: '#/article/253' } ] },
    { label: 'When two laws clash', children: [
      { label: '254(1) — the Union law prevails and the State law is void to that extent', href: '#/article/254' },
      { label: '254(2) — unless the State law had the President\'s assent', href: '#/article/254' },
      { label: 'and Parliament can still legislate over it afterwards', href: '#/article/254' },
      { label: '255 — a missing recommendation is a procedural defect, not a fatal one', href: '#/article/255' } ] },
    { label: 'Also here', children: [
      { label: '247 — Parliament may set up additional courts for Union laws', href: '#/article/247' } ] }
  ] }
},

'partXI.II:General': {
  type: 'mind',
  title: 'The Union\'s hold over State administration',
  caption: 'These articles look mild until you read them with article 365: ignoring a direction under 256 or 257 is a ground for President\'s Rule.',
  root: { label: 'Administrative\nrelations\nArt. 256–261', children: [
    { label: 'Directions the Union may give', children: [
      { label: '256 — a State must administer so as to comply with Union law', href: '#/article/256' },
      { label: '257 — and must not impede the Union\'s executive power', href: '#/article/257' },
      { label: '257 — directions on railways and on means of communication, with the extra cost paid by the Union', href: '#/article/257' },
      { label: '365 — failure to comply is a ground for President\'s Rule', href: '#/article/365' } ] },
    { label: 'Functions lent both ways', children: [
      { label: '258 — the Union may entrust its functions to a State, with the State\'s consent', href: '#/article/258' },
      { label: '258A — and a State may entrust its functions to the Union', href: '#/article/258A' },
      { label: '260 — the Union may take on functions in territory outside India', href: '#/article/260' } ] },
    { label: 'Recognising each other', children: [
      { label: '261 — full faith and credit to public acts, records and judicial proceedings', href: '#/article/261' } ] }
  ] }
},

/* ======================= PART XII — FINANCE ============================= */

'partXII.I:General': {
  type: 'mind',
  title: 'Four articles the rest of public finance stands on',
  caption: 'Article 265 is one sentence long and is the reason every tax demand can be taken to court.',
  root: { label: 'Ground rules\nArt. 264–267', children: [
    { label: '265 — no tax without law', href: '#/article/265', children: [
      { label: 'levy and collection both need the authority of a law', href: '#/article/265' },
      { label: 'an executive order is not enough, however sound the reason', href: '#/article/265' } ] },
    { label: '266 — the two funds', href: '#/article/266', children: [
      { label: 'the Consolidated Fund: all revenue, all loans, all repayments', href: '#/article/266' },
      { label: 'the Public Account: money the government merely holds — provident funds, small savings', href: '#/article/266' },
      { label: 'nothing leaves the Consolidated Fund without an appropriation', href: '#/article/114' } ] },
    { label: '267 — the Contingency Fund', href: '#/article/267', children: [
      { label: 'at the President\'s disposal for spending that cannot wait', href: '#/article/267' },
      { label: 'and replenished afterwards by Parliament', href: '#/article/267' } ] },
    { label: '264 — definition', children: [
      { label: '"Finance Commission" means the one constituted under article 280', href: '#/article/280' } ] }
  ] }
},

'partXII.I:Distribution of Revenues between the Union and the States': {
  type: 'mind',
  title: 'Who levies a tax, who collects it, and who keeps it',
  caption: 'Three different answers are possible, and the article decides which. Cesses and surcharges are outside the divisible pool — the reason States argue about them.',
  root: { label: 'Sharing revenue\nArt. 268–281', children: [
    { label: 'Levied by one, kept by another', children: [
      { label: '268 — levied by the Union, collected and kept by the States', href: '#/article/268' },
      { label: '269 — levied and collected by the Union, assigned to the States', href: '#/article/269' },
      { label: '269A — inter-State GST, collected by the Union and apportioned', href: '#/article/269A' } ] },
    { label: 'The divisible pool', children: [
      { label: '270 — Union taxes shared with the States in the prescribed proportion', href: '#/article/270' },
      { label: 'surcharges under 271 and cesses stay entirely with the Union', href: '#/article/271' } ] },
    { label: 'The Finance Commission', children: [
      { label: '280 — constituted every fifth year to recommend how the pool is divided', href: '#/article/280' },
      { label: '280 — also on grants-in-aid and on what the State Finance Commissions say', href: '#/article/280' },
      { label: '281 — the report and the action taken are laid before Parliament', href: '#/article/281' },
      { label: 'the recommendations are advice; nothing in the text makes them binding', href: '#/article/280' } ] },
    { label: 'Grants and limits', children: [
      { label: '275 — grants-in-aid to States in need, charged on the Consolidated Fund', href: '#/article/275' },
      { label: '276 — a tax on professions, capped at ₹2,500 a year per person', href: '#/article/276' },
      { label: '279A — the GST Council: the Union a third of the vote, the States two-thirds, and three-quarters carries', href: '#/article/279A' } ] }
  ] }
},

/* ======================= PART XIV — SERVICES ============================ */

'partXIV.I:Services': {
  type: 'mind',
  title: 'The doctrine of pleasure, and the article that cuts it down',
  caption: 'Article 310 says a civil servant serves at pleasure. Article 311 then says what that pleasure may not do without a hearing.',
  root: { label: 'The services\nArt. 308–314', children: [
    { label: 'Who sets the terms', children: [
      { label: '309 — the legislature regulates recruitment and conditions of service', href: '#/article/309' },
      { label: 'until it does, the President or the Governor makes rules', href: '#/article/309' },
      { label: '313 — the old laws hold until they are replaced', href: '#/article/313' } ] },
    { label: '310 — pleasure', href: '#/article/310', children: [
      { label: 'a civil servant holds office during the pleasure of the President or the Governor', href: '#/article/310' },
      { label: 'inherited from England, and made subject to what follows', href: '#/article/310' } ] },
    { label: '311 — the protection', href: '#/article/311', children: [
      { label: 'never dismissed by an authority lower than the one that appointed him', href: '#/article/311' },
      { label: 'no dismissal, removal or reduction in rank without an inquiry and a hearing', href: '#/article/311' },
      { label: 'three exceptions: conviction on a criminal charge; inquiry not reasonably practicable; security of the State', href: '#/article/311' },
      { label: 'the reason must be recorded in writing where the inquiry is dispensed with', href: '#/article/311' } ] },
    { label: '312 — the All-India Services', href: '#/article/312', children: [
      { label: 'created only if the Rajya Sabha resolves by two-thirds in the national interest', href: '#/article/312' },
      { label: 'the IAS and IPS are deemed created under this article', href: '#/article/312' },
      { label: 'an all-India judicial service is expressly contemplated, and has never been created', href: '#/article/312' } ] }
  ] }
},

'partXIV.II:Public Service Commissions': {
  type: 'mind',
  title: 'Independent in appointment and removal — and advisory in effect',
  caption: 'A State Commission\'s member is appointed by the Governor but can be removed only by the President, on a Supreme Court report.',
  root: { label: 'Public Service\nCommissions\nArt. 315–323', children: [
    { label: 'Who they are', children: [
      { label: '315 — a Commission for the Union and one for each State; States may share one', href: '#/article/315' },
      { label: '316 — half the members must have served a government for ten years', href: '#/article/316' },
      { label: '316 — six years, or 65 at the Union and 62 in a State, whichever comes first', href: '#/article/316' } ] },
    { label: 'How they are protected', children: [
      { label: '317 — removed by the President alone, on a Supreme Court report after inquiry', href: '#/article/317' },
      { label: '317 — even a State Commission\'s member; the Governor cannot do it', href: '#/article/317' },
      { label: '322 — expenses charged on the Consolidated Fund, outside the annual vote', href: '#/article/322' },
      { label: '319 — the UPSC Chairman may hold no government office afterwards', href: '#/article/319' } ] },
    { label: 'What they do', children: [
      { label: '320 — consulted on recruitment, promotion, transfer and discipline', href: '#/article/320' },
      { label: 'the advice does not bind — it may be refused, with reasons', href: '#/article/320' },
      { label: '321 — the legislature may hand them more functions', href: '#/article/321' },
      { label: '323 — the annual report, with a memorandum on every refusal, laid before the House', href: '#/article/323' } ] }
  ] }
},

/* ================= PART XVII — OFFICIAL LANGUAGE (whole Part) =========== */

partXVII: {
  type: 'mind',
  title: 'Part XVII at a glance — the fifteen-year clause that never expired',
  caption: 'Article 343(2) gave English fifteen years. Article 343(3) let Parliament extend it, and the Official Languages Act 1963 did.',
  root: { label: 'Official language\nArt. 343–351', children: [
    { label: 'Of the Union', children: [
      { label: '343 — Hindi in the Devanagari script', href: '#/article/343' },
      { label: '343(2) — English for fifteen years from 1950', href: '#/article/343' },
      { label: '343(3) — which Parliament may extend, and has', href: '#/article/343' },
      { label: '344 — a Commission after five years and then every ten, and a Committee of thirty MPs', href: '#/article/344' } ] },
    { label: 'In the States', children: [
      { label: '345 — a State may adopt any language in use in it, or Hindi', href: '#/article/345' },
      { label: '346 — the language for State-to-State and State-to-Union communication', href: '#/article/346' },
      { label: '347 — the President may recognise a language a substantial part of a State speaks', href: '#/article/347' } ] },
    { label: 'In the courts', children: [
      { label: '348 — English in the Supreme Court and every High Court', href: '#/article/348' },
      { label: '348 — and for the authoritative text of every Bill, Act and rule', href: '#/article/348' },
      { label: '348(2) — a Governor may allow Hindi in the High Court, with the President\'s consent', href: '#/article/348' },
      { label: '349 — a special procedure for language Bills in the first fifteen years', href: '#/article/349' } ] },
    { label: 'Directives', children: [
      { label: '350 — a grievance may be sent to any authority in any language used in the State or the Union', href: '#/article/350' },
      { label: '350A — primary education in the mother tongue for linguistic minorities', href: '#/article/350A' },
      { label: '350B — a Special Officer for Linguistic Minorities', href: '#/article/350B' },
      { label: '351 — the Union\'s duty to develop Hindi, drawing first on Sanskrit', href: '#/article/351' } ] }
  ] }
}

});

/* The ordinance route is the whole of chapter III in Part V and chapter IV in
   Part VI, so those sections reuse the flow already drawn for articles 123
   and 213 rather than repeating it in a second shape. */
window.COI_MAPS['partV.III:Legislative Powers of the President'] = window.COI_MAPS['123'];
