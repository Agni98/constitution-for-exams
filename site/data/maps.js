/* Hand-drawn diagrams, keyed by article number ("21"), by part ("part3"),
   by schedule ("schVII"), or "preamble".  A key may hold one spec or an array.

   flow: { type:'flow', title, caption, nodes:[{id,label,kind,note}], edges:[{from,to,label,lane}] }
         kind = start | step | decision | end
   mind: { type:'mind', title, caption, root:{label, href, children:[...] } }
   Every Part also gets an automatic mind map built from the data itself. */
window.COI_MAPS = {

preamble: {
  type: 'mind',
  title: 'What the Preamble is actually doing',
  caption: 'Four jobs in one sentence. The words in the middle column were fought over the hardest.',
  root: { label: 'Preamble', children: [
    { label: 'Source of authority', children: [
      { label: 'WE, THE PEOPLE — not the Crown, not the Assembly' },
      { label: 'adopt, enact, give to ourselves' } ] },
    { label: 'Nature of the State', children: [
      { label: 'Sovereign' }, { label: 'Socialist — added 1976' },
      { label: 'Secular — added 1976' }, { label: 'Democratic' }, { label: 'Republic' } ] },
    { label: 'Objectives', children: [
      { label: 'Justice — social, economic, political' },
      { label: 'Liberty — thought, expression, belief, faith, worship' },
      { label: 'Equality — of status and opportunity' },
      { label: 'Fraternity — dignity of the individual, unity and integrity' } ] },
    { label: 'Date of adoption', children: [
      { label: '26 November 1949' },
      { label: 'Commenced 26 January 1950', href: '#/article/394' } ] }
  ] }
},

/* ---------- Fundamental Rights ---------- */

partIII: {
  type: 'mind',
  title: 'Part III — the six surviving categories of rights',
  caption: 'The right to property was the seventh until 1978. Click a box to open the article.',
  root: { label: 'Fundamental\nRights\nArt. 12–35', children: [
    { label: 'Right to Equality', children: [
      { label: '14 — equality before law', href: '#/article/14' },
      { label: '15 — no discrimination', href: '#/article/15' },
      { label: '16 — equal opportunity in jobs', href: '#/article/16' },
      { label: '17 — untouchability abolished', href: '#/article/17' },
      { label: '18 — no titles', href: '#/article/18' } ] },
    { label: 'Right to Freedom', children: [
      { label: '19 — six freedoms', href: '#/article/19' },
      { label: '20 — protection on conviction', href: '#/article/20' },
      { label: '21 — life and personal liberty', href: '#/article/21' },
      { label: '21A — right to education', href: '#/article/21A' },
      { label: '22 — arrest and detention', href: '#/article/22' } ] },
    { label: 'Against Exploitation', children: [
      { label: '23 — trafficking, forced labour', href: '#/article/23' },
      { label: '24 — child labour in factories', href: '#/article/24' } ] },
    { label: 'Freedom of Religion', children: [
      { label: '25 — profess, practise, propagate', href: '#/article/25' },
      { label: '26 — manage religious affairs', href: '#/article/26' },
      { label: '27 — no tax for religion', href: '#/article/27' },
      { label: '28 — religious instruction', href: '#/article/28' } ] },
    { label: 'Cultural & Educational', children: [
      { label: '29 — minority interests', href: '#/article/29' },
      { label: '30 — minority institutions', href: '#/article/30' } ] },
    { label: 'Constitutional Remedies', children: [
      { label: '32 — the heart of it', href: '#/article/32' },
      { label: '33, 34 — forces, martial law', href: '#/article/33' },
      { label: '35 — only Parliament may legislate', href: '#/article/35' } ] }
  ] }
},

13: {
  type: 'flow',
  title: 'How Article 13 decides whether a law survives',
  nodes: [
    { id: 'a', kind: 'start', label: 'A law is challenged as violating a fundamental right' },
    { id: 'b', kind: 'decision', label: 'Was it made before 26 January 1950?' },
    { id: 'c', kind: 'step', label: 'Pre-Constitution law: void only to the extent of the inconsistency, and only from 1950 onwards — doctrine of eclipse keeps it alive for non-citizens and revives it if the right is amended' },
    { id: 'd', kind: 'step', label: 'Post-Constitution law: void ab initio to the extent it takes away or abridges a fundamental right' },
    { id: 'e', kind: 'decision', label: 'Is it a constitutional amendment under Article 368?' },
    { id: 'f', kind: 'end', label: 'Article 13(4) says Article 13 does not apply — but Kesavananda holds the amendment must still not damage the basic structure' }
  ],
  edges: [ { from: 'a', to: 'b' }, { from: 'b', to: 'c', label: 'yes' },
           { from: 'b', to: 'd', label: 'no', lane: 0 }, { from: 'c', to: 'd' },
           { from: 'd', to: 'e' }, { from: 'e', to: 'f', label: 'yes' } ]
},

19: {
  type: 'mind',
  title: 'Article 19 — six freedoms, and the leash on each',
  caption: 'Every freedom in clause (1) has its own restriction clause. The restriction must be reasonable, and the courts decide what reasonable means.',
  root: { label: 'Art. 19(1)\nsix freedoms', children: [
    { label: '(a) speech and expression', children: [
      { label: 'Restricted by 19(2): sovereignty, security, foreign relations, public order, decency, morality, contempt, defamation, incitement' } ] },
    { label: '(b) assemble peaceably, unarmed', children: [
      { label: 'Restricted by 19(3): sovereignty, public order' } ] },
    { label: '(c) form associations, unions, co-operatives', children: [
      { label: 'Restricted by 19(4): sovereignty, public order, morality' },
      { label: 'Co-operatives added by the 97th Amendment, 2011' } ] },
    { label: '(d) move freely throughout India', children: [
      { label: 'Restricted by 19(5): general public interest, protection of Scheduled Tribes' } ] },
    { label: '(e) reside and settle anywhere', children: [
      { label: 'Restricted by 19(5), same grounds' } ] },
    { label: '(g) any profession, trade or business', children: [
      { label: 'Restricted by 19(6): professional qualifications, State monopoly' } ] }
  ] }
},

21: {
  type: 'mind',
  title: 'What courts have read into "life and personal liberty"',
  caption: 'The text is one sentence. Everything below it was built by interpretation, mostly after Maneka Gandhi (1978).',
  root: { label: 'Art. 21\nlife & personal\nliberty', children: [
    { label: 'Procedure must be fair', children: [
      { label: 'Maneka Gandhi 1978 — procedure must be just, fair and reasonable, not any procedure at all' },
      { label: 'Reads 14, 19 and 21 as one golden triangle' } ] },
    { label: 'Dignity and livelihood', children: [
      { label: 'Right to live with human dignity' },
      { label: 'Right to livelihood — Olga Tellis' },
      { label: 'Right to shelter, food, health' } ] },
    { label: 'Personal autonomy', children: [
      { label: 'Privacy — Puttaswamy 2017, nine judges' },
      { label: 'Choice of partner, sexual orientation' },
      { label: 'Death with dignity, passive euthanasia' } ] },
    { label: 'Access to justice', children: [
      { label: 'Speedy trial, free legal aid' },
      { label: 'Against solitary confinement and custodial torture' } ] },
    { label: 'Environment', children: [
      { label: 'Clean air and water read into "life"' } ] },
    { label: 'Cannot be suspended', children: [
      { label: 'Even in emergency — Art. 359 as amended by the 44th Amendment', href: '#/article/359' } ] }
  ] }
},

32: {
  type: 'mind',
  title: 'The five writs under Article 32',
  caption: 'The Supreme Court may issue these; High Courts have the same power and more under Article 226.',
  root: { label: 'Writs\nArt. 32 & 226', children: [
    { label: 'Habeas corpus', children: [
      { label: '"Produce the body" — tests the legality of a detention' },
      { label: 'Lies against the State and against private persons' } ] },
    { label: 'Mandamus', children: [
      { label: '"We command" — orders a public authority to do its legal duty' },
      { label: 'Does not lie against a private individual or for a discretionary act' } ] },
    { label: 'Prohibition', children: [
      { label: 'Stops a lower court or tribunal exceeding its jurisdiction' },
      { label: 'Issued while proceedings are still pending' } ] },
    { label: 'Certiorari', children: [
      { label: 'Quashes an order already passed without jurisdiction' } ] },
    { label: 'Quo warranto', children: [
      { label: '"By what authority" — tests a person\'s claim to a public office' } ] }
  ] }
},

/* ---------- Legislature ---------- */

107: {
  type: 'flow',
  title: 'How an ordinary Bill becomes law',
  caption: 'Introduced in either House. A Money Bill follows a different, shorter path — see Article 109.',
  nodes: [
    { id: 'a', kind: 'start', label: 'Bill introduced in either House — first reading', note: 'Art. 107' },
    { id: 'b', kind: 'step', label: 'Second reading: general discussion, committee stage, clause-by-clause consideration' },
    { id: 'c', kind: 'step', label: 'Third reading and passage by the first House' },
    { id: 'd', kind: 'decision', label: 'Does the second House pass it too?' },
    { id: 'e', kind: 'step', label: 'Deadlock: rejected, or amendments not agreed, or six months elapse' },
    { id: 'f', kind: 'step', label: 'President may summon a joint sitting under Article 108 — decided by majority of those present and voting', note: 'Art. 108' },
    { id: 'g', kind: 'decision', label: 'President\'s assent under Article 111' },
    { id: 'h', kind: 'step', label: 'President may withhold assent, or return a non-Money Bill once for reconsideration' },
    { id: 'i', kind: 'end', label: 'Assent given — the Bill becomes an Act' }
  ],
  edges: [
    { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' },
    { from: 'd', to: 'g', label: 'yes', lane: 0 },
    { from: 'd', to: 'e', label: 'no' }, { from: 'e', to: 'f' }, { from: 'f', to: 'g' },
    { from: 'g', to: 'i', label: 'assents' }, { from: 'g', to: 'h', label: 'returns' },
    { from: 'h', to: 'i', label: 'passed again — assent is then compulsory', lane: 1 }
  ]
},

110: {
  type: 'flow',
  title: 'The Money Bill route',
  caption: 'The Speaker\'s certificate is the whole game: once a Bill is certified a Money Bill, the Rajya Sabha loses its veto.',
  nodes: [
    { id: 'a', kind: 'start', label: 'Bill deals only with the matters listed in Article 110(1) — taxes, borrowing, Consolidated Fund, appropriation' },
    { id: 'b', kind: 'decision', label: 'Speaker of the Lok Sabha certifies it as a Money Bill — his decision is final' },
    { id: 'c', kind: 'step', label: 'Introduced in the Lok Sabha only, and only on the President\'s recommendation' },
    { id: 'd', kind: 'step', label: 'Passed by the Lok Sabha, then sent to the Rajya Sabha' },
    { id: 'e', kind: 'step', label: 'Rajya Sabha may only recommend changes, and must return it within 14 days', note: 'Art. 109' },
    { id: 'f', kind: 'step', label: 'Lok Sabha may accept or reject those recommendations; either way the Bill is deemed passed by both Houses' },
    { id: 'g', kind: 'end', label: 'President must assent — a Money Bill cannot be returned for reconsideration' }
  ],
  edges: [ { from: 'a', to: 'b' }, { from: 'b', to: 'c', label: 'certified' },
           { from: 'c', to: 'd' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' }, { from: 'f', to: 'g' } ]
},

123: {
  type: 'flow',
  title: 'The life of an Ordinance',
  caption: 'An ordinance is emergency legislation by the executive. It dies unless Parliament adopts it.',
  nodes: [
    { id: 'a', kind: 'start', label: 'Both Houses are not in session and immediate action is needed' },
    { id: 'b', kind: 'step', label: 'President promulgates an Ordinance on the Council of Ministers\' advice — same force as an Act' },
    { id: 'c', kind: 'step', label: 'Laid before both Houses when Parliament reassembles' },
    { id: 'd', kind: 'decision', label: 'Approved within six weeks of reassembly?' },
    { id: 'e', kind: 'end', label: 'Becomes an Act of Parliament' },
    { id: 'f', kind: 'end', label: 'Ceases to operate — and re-promulgating it repeatedly is a fraud on the Constitution (Krishna Kumar Singh, 2017)' }
  ],
  edges: [ { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' },
           { from: 'd', to: 'e', label: 'yes' }, { from: 'd', to: 'f', label: 'no or disapproved' } ]
},

/* ---------- Executive ---------- */

54: {
  type: 'flow',
  title: 'Electing the President',
  caption: 'A weighted, single transferable vote — designed so a President represents the Union and the States equally.',
  nodes: [
    { id: 'a', kind: 'start', label: 'Electoral college: elected MPs of both Houses + elected MLAs of all States + Delhi and Puducherry', note: 'Art. 54' },
    { id: 'b', kind: 'step', label: 'MLA vote value = State population (1971 census) ÷ elected MLAs ÷ 1000' },
    { id: 'c', kind: 'step', label: 'MP vote value = total value of all MLA votes ÷ number of elected MPs' },
    { id: 'd', kind: 'step', label: 'Single transferable vote, secret ballot, proportional representation', note: 'Art. 55' },
    { id: 'e', kind: 'decision', label: 'Does any candidate reach the quota — half the valid votes plus one?' },
    { id: 'f', kind: 'step', label: 'Lowest candidate eliminated, second preferences transferred' },
    { id: 'g', kind: 'end', label: 'Elected. Term five years; disputes go only to the Supreme Court under Article 71' }
  ],
  edges: [ { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' },
           { from: 'd', to: 'e' }, { from: 'e', to: 'g', label: 'yes', lane: 0 },
           { from: 'e', to: 'f', label: 'no' }, { from: 'f', to: 'e', label: 'count again', lane: 1 } ]
},

61: {
  type: 'flow',
  title: 'Impeaching the President',
  caption: 'The only ground is violation of the Constitution, and it has never been used.',
  nodes: [
    { id: 'a', kind: 'start', label: 'Charge of violation of the Constitution' },
    { id: 'b', kind: 'step', label: 'Resolution signed by at least one-quarter of the members of the House that frames the charge, with 14 days\' notice' },
    { id: 'c', kind: 'decision', label: 'Passed by two-thirds of the total membership of that House?' },
    { id: 'd', kind: 'step', label: 'The other House investigates the charge; the President has the right to appear and be represented' },
    { id: 'e', kind: 'decision', label: 'Two-thirds of the total membership of the investigating House sustain the charge?' },
    { id: 'f', kind: 'end', label: 'President removed from office from the date of the resolution' },
    { id: 'g', kind: 'end', label: 'Process fails' }
  ],
  edges: [ { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd', label: 'yes' },
           { from: 'c', to: 'g', label: 'no', lane: 1 }, { from: 'd', to: 'e' },
           { from: 'e', to: 'f', label: 'yes' }, { from: 'e', to: 'g', label: 'no' } ]
},

74: {
  type: 'mind',
  title: 'Who actually exercises the President\'s powers',
  caption: 'Article 53 vests executive power in the President; Article 74 tells you who decides how it is used.',
  root: { label: 'Executive\npower of the\nUnion', children: [
    { label: 'Vested in the President — Art. 53', href: '#/article/53' },
    { label: 'Exercised on the aid and advice of the Council of Ministers — Art. 74(1)', children: [
      { label: 'Advice is binding after the 42nd Amendment' },
      { label: 'President may return it once for reconsideration — 44th Amendment' },
      { label: 'The advice tendered cannot be inquired into by any court — Art. 74(2)' } ] },
    { label: 'Council collectively responsible to the Lok Sabha — Art. 75(3)', href: '#/article/75' },
    { label: 'Discretion survives in a few places', children: [
      { label: 'Appointing a PM in a hung House' },
      { label: 'Dismissing a government that has lost confidence' },
      { label: 'Pocket veto — no time limit for assent under Art. 111' } ] }
  ] }
},

/* ---------- Judiciary ---------- */

124: {
  type: 'flow',
  title: 'Appointing and removing a Supreme Court judge',
  caption: 'The text says "in consultation with"; the collegium system is judge-made, from the Three Judges Cases.',
  nodes: [
    { id: 'a', kind: 'start', label: 'Vacancy in the Supreme Court' },
    { id: 'b', kind: 'step', label: 'Collegium — the Chief Justice of India and the four senior-most judges — recommends a name' },
    { id: 'c', kind: 'decision', label: 'Government accepts the recommendation?' },
    { id: 'd', kind: 'step', label: 'File returned once for reconsideration' },
    { id: 'e', kind: 'end', label: 'Appointed by warrant under the President\'s hand and seal — Art. 124(2)' },
    { id: 'f', kind: 'start', label: 'REMOVAL: motion for proved misbehaviour or incapacity, signed by 100 Lok Sabha or 50 Rajya Sabha members' },
    { id: 'g', kind: 'step', label: 'Inquiry committee under the Judges (Inquiry) Act finds the charge proved' },
    { id: 'h', kind: 'decision', label: 'Each House passes it by a majority of total membership AND two-thirds of members present and voting' },
    { id: 'i', kind: 'end', label: 'President orders removal — never yet completed against a sitting judge' }
  ],
  edges: [ { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'e', label: 'yes', lane: 0 },
           { from: 'c', to: 'd', label: 'no' }, { from: 'd', to: 'e', label: 'reiterated — binding' },
           { from: 'f', to: 'g' }, { from: 'g', to: 'h' }, { from: 'h', to: 'i', label: 'yes' } ]
},

/* ---------- Federalism ---------- */

246: {
  type: 'mind',
  title: 'Who may legislate on what',
  caption: 'Three lists in the Seventh Schedule, plus the residue. Read with Article 254 for what happens on a clash.',
  root: { label: 'Legislative\npower\nArt. 246', children: [
    { label: 'List I — Union List', href: '#/schedule/VII', children: [
      { label: '100 entries: defence, foreign affairs, railways, banking, currency, income tax' },
      { label: 'Parliament alone' } ] },
    { label: 'List II — State List', href: '#/schedule/VII', children: [
      { label: 'Public order, police, health, agriculture, land, local government' },
      { label: 'State legislature alone — subject to Art. 249, 250, 252, 253' } ] },
    { label: 'List III — Concurrent List', href: '#/schedule/VII', children: [
      { label: 'Criminal law, marriage, contracts, bankruptcy, education, forests' },
      { label: 'Both may legislate; Union law prevails on repugnancy — Art. 254', href: '#/article/254' } ] },
    { label: 'Residuary power', href: '#/article/248', children: [
      { label: 'Anything not in any list goes to Parliament — Art. 248 and entry 97 of List I' } ] },
    { label: 'Art. 246A — GST', href: '#/article/246A', children: [
      { label: 'A fourth, concurrent field created by the 101st Amendment in 2016' } ] }
  ] }
},

254: {
  type: 'flow',
  title: 'Repugnancy: when Union and State laws collide',
  nodes: [
    { id: 'a', kind: 'start', label: 'A State law and a Union law on the same Concurrent List entry cannot stand together' },
    { id: 'b', kind: 'decision', label: 'Did the State law receive the President\'s assent under Article 254(2)?' },
    { id: 'c', kind: 'step', label: 'Union law prevails; the State law is void to the extent of the repugnancy' },
    { id: 'd', kind: 'step', label: 'State law prevails in that State' },
    { id: 'e', kind: 'end', label: 'But Parliament may still legislate afresh on the same matter and override it again' }
  ],
  edges: [ { from: 'a', to: 'b' }, { from: 'b', to: 'c', label: 'no' },
           { from: 'b', to: 'd', label: 'yes', lane: 0 }, { from: 'd', to: 'e' } ]
},

/* ---------- Emergency ---------- */

352: {
  type: 'flow',
  title: 'National Emergency',
  caption: 'Proclaimed three times: 1962, 1971 and 1975. The 44th Amendment rebuilt almost every safeguard here.',
  nodes: [
    { id: 'a', kind: 'start', label: 'War, external aggression or armed rebellion threatens the security of India or any part of it' },
    { id: 'b', kind: 'step', label: 'Cabinet decision communicated to the President in writing — 44th Amendment requirement' },
    { id: 'c', kind: 'step', label: 'President issues the Proclamation' },
    { id: 'd', kind: 'decision', label: 'Approved by both Houses within one month, each by a majority of total membership and two-thirds of those present and voting?' },
    { id: 'e', kind: 'step', label: 'Operates for six months, extendable six months at a time by fresh approval' },
    { id: 'f', kind: 'end', label: 'Lapses' },
    { id: 'g', kind: 'step', label: 'Effect: Union may legislate on State subjects; Centre may direct States; Art. 19 suspended only in a war or external-aggression emergency; other rights may be suspended under Art. 359 — but never Articles 20 and 21' },
    { id: 'h', kind: 'end', label: 'Revoked by the President at any time, or the Lok Sabha may force revocation by a simple-majority resolution' }
  ],
  edges: [ { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' },
           { from: 'd', to: 'e', label: 'yes' }, { from: 'd', to: 'f', label: 'no', lane: 1 },
           { from: 'e', to: 'g' }, { from: 'g', to: 'h' } ]
},

356: {
  type: 'flow',
  title: 'President\'s Rule in a State',
  caption: 'S.R. Bommai (1994) turned this from a political instrument into a reviewable one.',
  nodes: [
    { id: 'a', kind: 'start', label: 'Governor reports, or the President is otherwise satisfied, that the State government cannot be carried on in accordance with the Constitution' },
    { id: 'b', kind: 'step', label: 'Proclamation: President assumes the State executive\'s functions and Parliament exercises the State legislature\'s powers' },
    { id: 'c', kind: 'decision', label: 'Approved by both Houses within two months, by simple majority?' },
    { id: 'd', kind: 'step', label: 'Runs six months; extendable six months at a time up to three years, and beyond one year only if an emergency is in force and the Election Commission certifies that elections cannot be held' },
    { id: 'e', kind: 'end', label: 'Lapses and the State government revives' },
    { id: 'f', kind: 'end', label: 'Bommai: the proclamation is subject to judicial review, the majority must be tested on the floor of the House, and a dissolved Assembly can be restored if the proclamation is struck down' }
  ],
  edges: [ { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd', label: 'yes' },
           { from: 'c', to: 'e', label: 'no', lane: 1 }, { from: 'd', to: 'f' } ]
},

360: {
  type: 'flow',
  title: 'Financial Emergency',
  caption: 'Never once proclaimed since 1950.',
  nodes: [
    { id: 'a', kind: 'start', label: 'President is satisfied that the financial stability or credit of India or of any part is threatened' },
    { id: 'b', kind: 'step', label: 'Proclamation issued' },
    { id: 'c', kind: 'decision', label: 'Approved by both Houses within two months by simple majority?' },
    { id: 'd', kind: 'step', label: 'Continues indefinitely until revoked — no maximum period' },
    { id: 'e', kind: 'end', label: 'Lapses' },
    { id: 'f', kind: 'end', label: 'Effect: Centre may direct States on financial propriety, cut the salaries of State servants, reserve all Money Bills for the President, and reduce the salaries of judges of the Supreme Court and High Courts' }
  ],
  edges: [ { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd', label: 'yes' },
           { from: 'c', to: 'e', label: 'no', lane: 1 }, { from: 'd', to: 'f' } ]
},

/* ---------- Amendment ---------- */

368: [{
  type: 'flow',
  title: 'How the Constitution is amended',
  caption: 'Three majorities exist in practice, though Article 368 names only two.',
  nodes: [
    { id: 'a', kind: 'start', label: 'Bill introduced in either House — no prior recommendation of the President needed, and no joint sitting is possible' },
    { id: 'b', kind: 'step', label: 'Passed in EACH House separately by a majority of the total membership of that House AND two-thirds of the members present and voting' },
    { id: 'c', kind: 'decision', label: 'Does it change the federal structure — election of the President, distribution of legislative powers, the Seventh Schedule, representation of States, or Article 368 itself?' },
    { id: 'd', kind: 'step', label: 'Also ratified by the legislatures of at least half the States, by simple majority' },
    { id: 'e', kind: 'step', label: 'Presented to the President, who must give assent — Article 368(2) as amended in 1971' },
    { id: 'f', kind: 'end', label: 'The Constitution stands amended' },
    { id: 'g', kind: 'end', label: 'Still open to challenge: an amendment that damages the basic structure is void, whatever Article 368(4) and (5) say' }
  ],
  edges: [ { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd', label: 'yes' },
           { from: 'c', to: 'e', label: 'no', lane: 0 }, { from: 'd', to: 'e' },
           { from: 'e', to: 'f' }, { from: 'f', to: 'g' } ]
}, {
  type: 'mind',
  title: 'The basic structure doctrine, in four cases',
  root: { label: 'Basic\nstructure', children: [
    { label: 'Shankari Prasad 1951 & Sajjan Singh 1965', children: [
      { label: 'Parliament may amend fundamental rights — "law" in Art. 13 does not include an amendment' } ] },
    { label: 'Golak Nath 1967', children: [
      { label: 'Reversed: fundamental rights are outside the amending power' } ] },
    { label: '24th Amendment 1971', children: [
      { label: 'Parliament writes Golak Nath out with Art. 13(4) and 368(1)' } ] },
    { label: 'Kesavananda Bharati 1973', children: [
      { label: '13 judges, 7-6: Parliament may amend anything, but may not damage the basic structure' } ] },
    { label: 'Applied since', children: [
      { label: 'Indira Gandhi 1975 — free elections' },
      { label: 'Minerva Mills 1980 — struck down Art. 368(4) and (5)' },
      { label: 'Kihoto 1992, Coelho 2007, NJAC 2015' } ] }
  ] }
}],

/* ---------- Local government ---------- */

partIX: {
  type: 'mind',
  title: 'Part IX — the panchayat system the 73rd Amendment built',
  root: { label: 'Panchayati Raj\nArt. 243–243O', children: [
    { label: 'Three tiers', children: [
      { label: 'Village, intermediate, district — intermediate optional if the State has under 20 lakh people', href: '#/article/243B' } ] },
    { label: 'Who sits on it', children: [
      { label: 'All seats filled by direct election from territorial constituencies', href: '#/article/243C' },
      { label: 'Seats reserved for SC and ST in proportion to population', href: '#/article/243D' },
      { label: 'At least one-third of all seats and chairperson posts for women' } ] },
    { label: 'How long it lasts', children: [
      { label: 'Five years; election before expiry, or within six months of dissolution', href: '#/article/243E' } ] },
    { label: 'What it may do', children: [
      { label: '29 subjects in the Eleventh Schedule — but only if the State legislature devolves them', href: '#/article/243G' },
      { label: 'May be authorised to levy taxes and tolls', href: '#/article/243H' } ] },
    { label: 'Who supervises', children: [
      { label: 'State Election Commission runs the polls', href: '#/article/243K' },
      { label: 'State Finance Commission reviews finances every five years', href: '#/article/243-I' } ] },
    { label: 'Gram Sabha', children: [
      { label: 'The village electorate itself — powers are whatever the State law gives it', href: '#/article/243A' } ] }
  ] }
},

/* ---------- Anti-defection ---------- */

schX: {
  type: 'flow',
  title: 'Anti-defection under the Tenth Schedule',
  caption: 'Added by the 52nd Amendment in 1985; the "split" escape route was deleted by the 91st in 2003.',
  nodes: [
    { id: 'a', kind: 'start', label: 'A member of a House is alleged to have defected' },
    { id: 'b', kind: 'decision', label: 'Did the member voluntarily give up party membership, or vote or abstain against the party whip?' },
    { id: 'c', kind: 'decision', label: 'Was there a merger of the original party, with two-thirds of its legislators agreeing?' },
    { id: 'd', kind: 'end', label: 'No disqualification — merger is the only surviving exception, along with a Speaker who gives up party membership on taking office' },
    { id: 'e', kind: 'step', label: 'The Speaker or Chairman of the House decides the question' },
    { id: 'f', kind: 'end', label: 'Disqualified from the House, and barred from any remunerative political post until the term ends — 91st Amendment' },
    { id: 'g', kind: 'end', label: 'The Speaker\'s decision is subject to judicial review (Kihoto Hollohan, 1992), and courts have urged that it be made within three months' }
  ],
  edges: [ { from: 'a', to: 'b' }, { from: 'b', to: 'c', label: 'yes' },
           { from: 'b', to: 'd', label: 'no', lane: 1 }, { from: 'c', to: 'd', label: 'yes' },
           { from: 'c', to: 'e', label: 'no', lane: 0 }, { from: 'e', to: 'f' }, { from: 'f', to: 'g' } ]
},

/* ---------- J&K ---------- */

370: {
  type: 'flow',
  title: 'Article 370, from 1950 to now',
  caption: 'Upheld in In Re Article 370 (2023): the Court held the abrogation valid and directed that statehood be restored.',
  nodes: [
    { id: 'a', kind: 'start', label: '1950 — Article 370 gives Jammu and Kashmir a special arrangement: Parliament may legislate only on defence, foreign affairs and communications without the State\'s concurrence' },
    { id: 'b', kind: 'step', label: '1954 — Constitution (Application to J&K) Order extends most of the Constitution to the State and inserts Article 35A' },
    { id: 'c', kind: 'step', label: '5 August 2019 — C.O. 272 applies the whole Constitution to J&K and reads "Constituent Assembly" in Article 370(3) as "Legislative Assembly"' },
    { id: 'd', kind: 'step', label: 'C.O. 273 declares that all clauses of Article 370 cease to operate, leaving only the sentence that the Constitution applies in full' },
    { id: 'e', kind: 'step', label: 'J&K Reorganisation Act 2019 splits the State into the Union territories of Jammu and Kashmir and of Ladakh' },
    { id: 'f', kind: 'end', label: 'December 2023 — the Supreme Court upholds the abrogation, holds Article 370 was always temporary, and directs restoration of statehood and elections' }
  ],
  edges: [ { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' },
           { from: 'd', to: 'e' }, { from: 'e', to: 'f' } ]
},

/* ---------- Finance ---------- */

280: {
  type: 'mind',
  title: 'Where money moves between Centre and States',
  root: { label: 'Fiscal\nfederalism', children: [
    { label: 'Finance Commission — Art. 280', href: '#/article/280', children: [
      { label: 'Every fifth year; recommends how the divisible pool of taxes is shared' },
      { label: 'Also recommends grants-in-aid and measures to help panchayats and municipalities' },
      { label: 'Recommendations are advisory, not binding' } ] },
    { label: 'Taxes levied and distributed — Art. 270', href: '#/article/270' },
    { label: 'GST Council — Art. 279A', href: '#/article/279A', children: [
      { label: 'Centre has one-third of the votes, all States together two-thirds; decisions need three-quarters' } ] },
    { label: 'Grants-in-aid — Art. 275', href: '#/article/275' },
    { label: 'Borrowing — Art. 292 (Union) and 293 (States)', href: '#/article/293' },
    { label: 'Consolidated Fund, Contingency Fund, Public Account — Art. 266, 267', href: '#/article/266' }
  ] }
}

};
