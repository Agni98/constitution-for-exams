/* Practice MCQs. Batch 9: Part VIII (the Union territories), Part IX (the
   Panchayats), Part IXA (the Municipalities), Part IXB (co-operative
   societies) and Part X (Scheduled and tribal areas). The fields are
   described at the top of mcq-1.js. */
(function () {
var COOP = 'Since Rajendra N. Shah (2021), Part IXB applies only to multi-State co-operative societies.';
Object.assign(window.COI_MCQ = window.COI_MCQ || {}, {

'239': [
  { f: 'w', q: 'Consider the following statements:', s: [
    ['Every Union territory is administered by the President through an administrator the President appoints, unless Parliament provides otherwise.', 1, 'That is Article 239(1).'],
    ['A Union territory with an elected Legislative Assembly becomes a State.', 0, 'It remains a Union territory. Delhi has an Assembly and is still a Union territory.']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['A Governor appointed administrator of an adjoining Union territory does not act on the advice of the State Council of Ministers in that role.', 1, 'The Union territory is not part of the State.'],
    ['Article 239(2) says the Governor acts as administrator independently of the Council of Ministers.', 1, 'That is the source of the rule.']
  ] }
],

'239A': [
  { f: 'w', q: 'Consider the following statements about Article 239A:', s: [
    ['It allows Parliament to create a legislature, a Council of Ministers, or both, for Puducherry.', 1, 'Parliament did so by the Government of Union Territories Act, 1963.'],
    ['A law under it is treated as an amendment of the Constitution under Article 368.', 0, 'Article 239A(2) says it is not.']
  ] }
],

'239AA': [
  { f: 'w', q: 'Consider the following statements about Delhi:', s: [
    ['The 69th Amendment (1991) named it the National Capital Territory and provided for a Legislative Assembly.', 1, 'That is Article 239AA.'],
    ['The Delhi Legislative Assembly can make laws on public order, police and land.', 0, 'These three subjects are excluded from its powers.']
  ] },
  { f: 'w', q: 'Consider the following statements:', s: [
    ['In Government of NCT of Delhi (2018), the Supreme Court held that the Lieutenant Governor is bound by ministerial advice on matters within the Assembly\'s power.', 1, 'The Lieutenant Governor has no independent decision-making power on those matters.'],
    ['In the Delhi Services case (2023), the Supreme Court held that the Delhi government controls services, except those linked to public order, police and land.', 1, 'Five judges held this unanimously.'],
    ['Parliament made no change in the law after the 2023 judgment.', 0, 'Parliament amended the Government of National Capital Territory of Delhi Act in 2023 and set up an authority for services.']
  ] },
  { f: 'si', x: 0, q: 'Consider the following statements:', s: [
    ['Delhi is not a State.', 1, 'It is a Union territory with a special status.'],
    ['Delhi has a Legislative Assembly and a Chief Minister.', 1, 'These were provided by Article 239AA.']
  ], xw: 'Having an Assembly does not make Delhi a State, so the second statement cannot explain the first.' }
],

'239AB': [
  { f: 'w', q: 'Consider the following statements about Article 239AB:', s: [
    ['The President may suspend Article 239AA if the administration of Delhi cannot be carried on in accordance with it.', 1, 'This is the provision for a failure of constitutional machinery in Delhi.'],
    ['The President may act under Article 239AB on a report from the Lieutenant Governor or otherwise.', 1, 'That is the opening of Article 239AB.']
  ] }
],

'239B': [
  { f: 'w', q: 'Consider the following statements about Article 239B:', s: [
    ['The administrator of Puducherry may promulgate ordinances when its legislature is not in session.', 1, 'That is Article 239B(1).'],
    ['The administrator may do so without instructions from the President.', 0, 'The proviso requires the President\'s instructions first.']
  ] }
],

'240': [
  { f: 'w', q: 'Consider the following statements about Article 240:', s: [
    ['The President may make regulations for the peace, progress and good government of the Andaman and Nicobar Islands and Lakshadweep.', 1, 'Such regulations have the force of an Act of Parliament.'],
    ['The President may make such regulations for Puducherry even while its legislature is functioning.', 0, 'The proviso bars regulations for Puducherry while its legislature functions.']
  ] }
],

'241': [
  { f: 'w', q: 'Consider the following statements:', s: [
    ['Parliament may by law constitute a High Court for a Union territory.', 1, 'That is Article 241(1).'],
    ['Delhi does not have a High Court of its own.', 0, 'Delhi has had its own High Court since 1966.']
  ] }
],

'243': [
  { f: 'w', q: 'Consider the following statements about the Gram Sabha:', s: [
    ['It consists of the persons registered in the electoral rolls of a village within the panchayat area.', 1, 'That is the definition in Article 243(b).'],
    ['It consists only of the elected members of the village panchayat.', 0, 'The Gram Sabha is the body of all registered voters of the village.']
  ] },
  { f: 'w', q: 'Consider the following statements:', s: [
    ['Part IX was added by the 73rd Amendment (1992).', 1, 'It gave panchayats constitutional status.'],
    ['The 73rd Amendment came into force on 24 April 1993.', 1, 'The date is marked as National Panchayati Raj Day.']
  ] },
  { f: 'si', x: 0, q: 'Consider the following statements:', s: [
    ['A State with a population of not more than twenty lakh need not have panchayats at the intermediate level.', 1, 'That is Article 243B(2).'],
    ['The intermediate level is the one the Governor specifies by public notification.', 1, 'That is the definition in Article 243(c).']
  ], xw: 'The second statement defines the intermediate level. It does not explain why small States may leave it out.' }
],

'243A': [
  { f: 'w', q: 'Consider the following statements about Article 243A:', s: [
    ['A Gram Sabha exercises the powers that the State legislature gives it by law.', 1, 'That is the text of Article 243A.'],
    ['The Constitution lists the powers of the Gram Sabha in detail.', 0, 'The powers are left to State law.']
  ] }
],

'243B': [
  { f: 'w', q: 'Consider the following statements:', s: [
    ['Panchayats need be constituted only at the village level.', 0, 'They must be constituted at the village, intermediate and district levels, subject to the population exception.'],
    ['Every State, whatever its population, must have panchayats at the intermediate level.', 0, 'A State with a population of not more than twenty lakh may leave out the intermediate level.']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['Since 1993, a State cannot simply choose not to have panchayats.', 1, 'Panchayats are now compulsory.'],
    ['Article 243B says panchayats "shall" be constituted in every State.', 1, 'The mandatory word is what removed the State\'s choice.']
  ] },
  { f: 'w', q: 'Consider the following statements:', s: [
    ['Before 1992, panchayats existed in many States under State laws.', 1, 'What they lacked was a constitutional guarantee.'],
    ['The 73rd Amendment made Article 40 enforceable in court.', 0, 'Article 40 is still a directive principle. Part IX added separate, binding provisions.']
  ] }
],

'243C': [
  { f: 'w', q: 'Consider the following statements:', s: [
    ['All the seats in a panchayat are filled by direct election from territorial constituencies.', 1, 'That is Article 243C(2).'],
    ['The chairperson of every level of panchayat must be directly elected.', 0, 'Chairpersons at the intermediate and district levels are elected by and from the elected members. The State decides for the village level.']
  ] },
  { f: 'w', q: 'Consider the following statements:', s: [
    ['The minimum age to be a member of a panchayat is twenty-one years.', 1, 'The proviso to Article 243F(1)(a) allows this.'],
    ['A State law may provide for members of Parliament and of the State legislature to be represented in panchayats at the intermediate or district level.', 1, 'That is Article 243C(3).']
  ] },
  { f: 'n', q: 'Consider the following statements about Article 243C:', s: [
    ['The composition of panchayats is laid down by the State legislature by law.', 1, 'That is Article 243C(1).'],
    ['Every panchayat has the same number of seats, whatever its population.', 0, 'Seats follow population, and the ratio should be the same throughout the State as far as practicable.'],
    ['The chairperson of a district panchayat is elected directly by the voters of the whole district.', 0, 'The chairperson at the district level is elected by and from the elected members.']
  ] }
],

'243D': [
  { f: 'w', q: 'Consider the following statements:', s: [
    ['Not less than one-third of the seats filled by direct election in every panchayat are reserved for women.', 1, 'That is Article 243D(3).'],
    ['The one-third reservation for women is a ceiling that States cannot exceed.', 0, 'It is a minimum. Many States reserve fifty per cent.']
  ] },
  { f: 'w', q: 'Consider the following statements:', s: [
    ['Seats for the Scheduled Castes and Scheduled Tribes are reserved in proportion to their population in the panchayat area.', 1, 'That is Article 243D(1).'],
    ['Reserving the offices of chairpersons for women is not allowed.', 0, 'Article 243D(4) requires at least one-third of chairpersons\' offices to be reserved for women.']
  ] },
  { f: 'si', q: 'Consider the following statements:', s: [
    ['A State may reserve seats in panchayats for backward classes.', 1, 'Article 243D(6) allows this.'],
    ['In Vikas Kishanrao Gawali (2021), the Supreme Court held that such reservation needs no empirical data.', 0, 'The Court laid down a triple test: a dedicated commission, contemporaneous data, and a total reservation not above fifty per cent.']
  ] }
],

'243E': [
  { f: 'w', q: 'Consider the following statements about Article 243E:', s: [
    ['A panchayat continues for five years from the date of its first meeting, unless dissolved sooner.', 1, 'That is Article 243E(1).'],
    ['An election to a dissolved panchayat need not be held if less than six months of its term remain.', 1, 'That is the proviso to Article 243E(3).']
  ] }
],

'243F': [
  { f: 'w', q: 'Consider the following statements about Article 243F:', s: [
    ['A person must be twenty-five years old to be a member of a panchayat.', 0, 'Twenty-one years is enough.'],
    ['Questions on the disqualification of panchayat members are decided by the High Court under Article 243F.', 0, 'They are decided by the authority that the State legislature provides by law.']
  ] }
],

'243G': [
  { f: 'w', q: 'Consider the following statements:', s: [
    ['The Eleventh Schedule lists 29 subjects for panchayats.', 1, 'It was added by the 73rd Amendment.'],
    ['Under Article 243G, powers over these subjects pass to panchayats automatically.', 0, 'Article 243G says the State legislature "may" endow panchayats with powers.']
  ] },
  { f: 'n', q: 'Which of the following subjects are in the Eleventh Schedule?', s: [
    ['Drinking water', 1, 'It is entry 11.'],
    ['Minor irrigation, water management and watershed development', 1, 'It is entry 3.'],
    ['Poverty alleviation programmes', 1, 'It is entry 16.'],
    ['Police', 0, 'Police is a State List subject and is not in the Eleventh Schedule.']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['The actual powers of panchayats differ widely from State to State.', 1, 'Some States have devolved much more than others.'],
    ['Under Article 243G, devolution depends on what each State legislature chooses to give.', 1, 'That is why the powers vary.']
  ] }
],

'243H': [
  { f: 'w', q: 'Consider the following statements about Article 243H:', s: [
    ['A State legislature may authorise a panchayat to levy, collect and appropriate taxes, duties, tolls and fees.', 1, 'That is Article 243H(a).'],
    ['A State law may provide for grants-in-aid to panchayats from the Consolidated Fund of the State.', 1, 'That is Article 243H(c).']
  ] }
],

'243-I': [
  { f: 'w', q: 'Consider the following statements about the State Finance Commission:', s: [
    ['It is constituted by the Governor every five years to review the finances of the panchayats.', 1, 'That is Article 243-I(1).'],
    ['It is constituted by the President.', 0, 'It is constituted by the Governor of the State.']
  ] }
],

'243J': [
  { f: 'w', q: 'Consider the following statements about Article 243J:', s: [
    ['The maintenance and audit of panchayat accounts are provided for by the State legislature by law.', 1, 'That is the text of Article 243J.'],
    ['Article 243J requires the CAG to audit every panchayat.', 0, 'Article 243J leaves audit to State law.']
  ] }
],

'243K': [
  { f: 'w', q: 'Consider the following statements:', s: [
    ['Panchayat elections are conducted by the Election Commission of India.', 0, 'They are conducted by the State Election Commission.'],
    ['The State Election Commissioner is appointed by the Chief Election Commissioner of India.', 0, 'The State Election Commissioner is appointed by the Governor.']
  ] },
  { f: 'w', q: 'Consider the following statements:', s: [
    ['The State Election Commissioner can be removed only in the manner and on the grounds of a High Court judge.', 1, 'That is the proviso to Article 243K(2).'],
    ['The Election Commission of India supervises panchayat elections.', 0, 'Panchayat elections are wholly under the State Election Commission.']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['The Election Commission of India has no role in panchayat elections.', 1, 'Its jurisdiction covers Parliament, the State legislatures and the offices of President and Vice-President.'],
    ['Article 243K vests the conduct of panchayat elections in a separate State Election Commission.', 1, 'That is why the Election Commission of India has no role.']
  ] }
],

'243L': [
  { f: 'w', q: 'Consider the following statements about Article 243L:', s: [
    ['Part IX applies to Union territories, with references to the Governor read as references to the administrator.', 1, 'That is the text of Article 243L.'],
    ['The President cannot modify how Part IX applies to a Union territory.', 0, 'The proviso lets the President apply it with exceptions and modifications by notification.']
  ] }
],

'243M': [
  { f: 'w', q: 'Consider the following statements about Article 243M:', s: [
    ['Part IX does not apply to Nagaland, Meghalaya and Mizoram.', 1, 'That is Article 243M(2)(a).'],
    ['Part IX applies to the Fifth Schedule areas without any law of Parliament.', 0, 'Part IX does not apply there. Parliament extended it with changes through PESA, 1996.']
  ] },
  { f: 'si', q: 'Consider the following statements:', s: [
    ['PESA, 1996 extends Part IX to the Fifth Schedule areas with changes.', 1, 'It gives the Gram Sabha wide powers in those areas.'],
    ['PESA is a constitutional amendment that deleted Article 243M.', 0, 'PESA is an ordinary Act of Parliament, made under Article 243M(4)(b).']
  ] }
],

'243N': [
  { f: 'w', q: 'Consider the following statements about Article 243N:', s: [
    ['State laws inconsistent with Part IX could continue for up to one year after the 73rd Amendment, unless changed earlier.', 1, 'That is the main rule in Article 243N.'],
    ['Panchayats existing before the 73rd Amendment were dissolved on the day it came into force.', 0, 'The proviso let them continue till the end of their terms, unless dissolved by the State legislature.']
  ] }
],

'243-O': [
  { f: 'w', q: 'Consider the following statements about Article 243-O:', s: [
    ['A panchayat election can be questioned only by an election petition, as provided by State law.', 1, 'That is Article 243-O(b).'],
    ['A law on the delimitation of panchayat constituencies can be challenged in any court.', 0, 'Article 243-O(a) bars such challenges in any court.']
  ] }
],

'243P': [
  { f: 'w', q: 'Consider the following statements about Part IXA:', s: [
    ['A Metropolitan area has a population of five lakh or more.', 0, 'A Metropolitan area has a population of ten lakh or more.'],
    ['A Metropolitan area is declared by Parliament by law.', 0, 'It is specified by the Governor by public notification.']
  ] }
],

'243Q': [
  { f: 'n', q: 'Which of the following are kinds of municipality provided for in Article 243Q?', s: [
    ['A Nagar Panchayat for a transitional area', 1, 'An area in transition from rural to urban.'],
    ['A Municipal Council for a smaller urban area', 1, 'Article 243Q(1)(b).'],
    ['A Municipal Corporation for a larger urban area', 1, 'Article 243Q(1)(c).'],
    ['A Cantonment Board for a military area', 0, 'Cantonment Boards are set up under the Cantonments Act, not under Article 243Q.']
  ] },
  { f: 'w', q: 'Consider the following statements:', s: [
    ['The Constitution fixes population limits for each kind of municipality.', 0, 'The Constitution sets no population figures for them.'],
    ['The Governor decides which kind of municipality an area gets, having regard to factors such as population, density and revenue.', 1, 'That is Article 243Q(2).']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['An industrial township may be left without a municipality.', 1, 'Its services are provided by the industrial establishment.'],
    ['The proviso to Article 243Q lets the Governor declare such an area an industrial township.', 1, 'That is the source of the exception.']
  ] }
],

'243R': [
  { f: 'w', q: 'Consider the following statements about Article 243R:', s: [
    ['All the seats in a municipality are filled by direct election from wards, apart from members a State law may add.', 1, 'That is Article 243R(1).'],
    ['Persons with special knowledge of municipal administration who are added by State law may vote in municipal meetings.', 0, 'The proviso to Article 243R(2) says they shall not have the right to vote.']
  ] }
],

'243S': [
  { f: 'w', q: 'Consider the following statements about Wards Committees:', s: [
    ['They must be set up in a municipality with a population of three lakh or more.', 1, 'That is Article 243S(1).'],
    ['They must be set up in every municipality, whatever its population.', 0, 'They are required only where the population is three lakh or more.']
  ] }
],

'243T': [
  { f: 'w', q: 'Consider the following statements:', s: [
    ['Not less than one-third of the directly elected seats in every municipality are reserved for women.', 1, 'That is Article 243T(3).'],
    ['In Vikas Kishanrao Gawali (2021), the Supreme Court held that reservation for backward classes in local bodies must meet a triple test, including a cap of fifty per cent on total reservation.', 1, 'The other two parts are a dedicated commission and contemporaneous data.']
  ] }
],

'243U': [
  { f: 'w', q: 'Consider the following statements:', s: [
    ['A municipality must be given a reasonable opportunity of being heard before it is dissolved.', 1, 'That is the proviso to Article 243U(1).'],
    ['In Kishan Singh Tomar (2006), the Supreme Court held that a State may postpone municipal elections indefinitely.', 0, 'The Court held that elections must be completed before the term ends. This is mandatory.']
  ] }
],

'243V': [
  { f: 'w', q: 'Consider the following statements about Article 243V:', s: [
    ['A person aged twenty-one is not disqualified from municipal membership for being under twenty-five.', 1, 'That is the proviso to Article 243V(1)(a).'],
    ['Questions on the disqualification of municipal members are decided by the State Election Commission under the Constitution itself.', 0, 'They are decided by the authority that the State legislature provides by law.']
  ] }
],

'243W': [
  { f: 'w', q: 'Consider the following statements:', s: [
    ['The Twelfth Schedule lists 18 subjects for municipalities.', 1, 'It was added by the 74th Amendment.'],
    ['The Eleventh Schedule lists 18 subjects for panchayats.', 0, 'The Eleventh Schedule lists 29 subjects.']
  ] },
  { f: 'n', q: 'Which of the following subjects are in the Twelfth Schedule?', s: [
    ['Urban planning, including town planning', 1, 'It is entry 1.'],
    ['Fire services', 1, 'It is entry 7.'],
    ['Slum improvement and upgradation', 1, 'It is entry 10.'],
    ['Police', 0, 'Police is not in the Twelfth Schedule.']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['Municipalities do not get the Twelfth Schedule subjects automatically.', 1, 'The list is a guide for devolution.'],
    ['Article 243W says the State legislature "may" endow municipalities with powers.', 1, 'That is why nothing passes automatically.']
  ] }
],

'243X': [
  { f: 'w', q: 'Consider the following statements about Article 243X:', s: [
    ['A State legislature may authorise municipalities to levy taxes, duties, tolls and fees.', 1, 'That is Article 243X(a).'],
    ['A State law may provide for grants-in-aid to municipalities from the Consolidated Fund of the State.', 1, 'That is Article 243X(c).']
  ] }
],

'243Y': [
  { f: 'w', q: 'Consider the following statements about Article 243Y:', s: [
    ['The State Finance Commission set up under Article 243-I also reviews the finances of municipalities.', 1, 'One Commission covers both panchayats and municipalities.'],
    ['A separate Finance Commission is set up for municipalities.', 0, 'The same Commission does both.']
  ] }
],

'243Z': [
  { f: 'w', q: 'Consider the following statements about Article 243Z:', s: [
    ['The maintenance and audit of municipal accounts are provided for by State law.', 1, 'That is the text of Article 243Z.'],
    ['Article 243Z requires the CAG to audit every municipality.', 0, 'Audit is left to State law.']
  ] }
],

'243ZA': [
  { f: 'w', q: 'Consider the following statements about Article 243ZA:', s: [
    ['Municipal elections are conducted by the State Election Commission set up under Article 243K.', 1, 'That is Article 243ZA(1).'],
    ['Municipal elections are conducted by the Election Commission of India.', 0, 'They are conducted by the State Election Commission.']
  ] }
],

'243ZB': [
  { f: 'w', q: 'Consider the following statements about Article 243ZB:', s: [
    ['Part IXA applies to Union territories, with the administrator in place of the Governor.', 1, 'That is the text of Article 243ZB.'],
    ['Part IXA cannot be applied to a Union territory with modifications.', 0, 'The proviso lets the President apply it with exceptions and modifications.']
  ] }
],

'243ZC': [
  { f: 'w', q: 'Consider the following statements about Article 243ZC:', s: [
    ['Part IXA does not apply to the Scheduled Areas and tribal areas referred to in Article 244.', 1, 'That is Article 243ZC(1).'],
    ['Parliament has no power to extend Part IXA to those areas.', 0, 'Article 243ZC(3) lets Parliament extend it by law, with exceptions and modifications.']
  ] }
],

'243ZD': [
  { f: 'w', q: 'Consider the following statements about the District Planning Committee:', s: [
    ['It consolidates the plans of panchayats and municipalities and prepares a draft development plan for the district.', 1, 'That is Article 243ZD(1).'],
    ['At least four-fifths of its members are elected by and from the elected members of the district panchayat and the municipalities.', 1, 'That is the proviso to Article 243ZD(2).'],
    ['It is set up only in districts with a population of more than ten lakh.', 0, 'It is set up in every district.']
  ] },
  { f: 'si', q: 'Consider the following statements:', s: [
    ['Every district must have a District Planning Committee.', 1, 'Article 243ZD requires one in every district.'],
    ['Every district must also have a Metropolitan Planning Committee.', 0, 'A Metropolitan Planning Committee is required only for a metropolitan area.']
  ] }
],

'243ZE': [
  { f: 'w', q: 'Consider the following statements about the Metropolitan Planning Committee:', s: [
    ['It prepares a draft development plan for the metropolitan area as a whole.', 1, 'That is Article 243ZE(1).'],
    ['At least half of its members must be elected.', 0, 'At least two-thirds of its members must be elected.']
  ] }
],

'243ZF': [
  { f: 'w', q: 'Consider the following statements about Article 243ZF:', s: [
    ['Inconsistent municipal laws could continue for up to one year after the 74th Amendment, unless changed earlier.', 1, 'That is the main rule in Article 243ZF.'],
    ['The 74th Amendment dissolved all existing municipalities at once.', 0, 'The proviso let them continue till the end of their terms.']
  ] }
],

'243ZG': [
  { f: 'w', q: 'Consider the following statements about Article 243ZG:', s: [
    ['A municipal election can be questioned only by an election petition under State law.', 1, 'That is Article 243ZG(b).'],
    ['A law on the delimitation of municipal wards can be challenged in a High Court.', 0, 'Article 243ZG(a) bars such challenges in any court.']
  ] }
],

'243ZH': [
  { f: 'w', note: COOP, q: 'Consider the following statements about Part IXB:', s: [
    ['A "multi-State co-operative society" is one whose objects are not confined to one State.', 1, 'That is the definition in Article 243ZH(d).'],
    ['Part IXB was added by the 73rd Amendment.', 0, 'Part IXB was added by the 97th Amendment (2011).']
  ] }
],

'243Z-I': [
  { f: 'w', note: COOP, q: 'Consider the following statements:', s: [
    ['Article 243Z-I rests on the principles of voluntary formation, democratic member control, member economic participation and autonomous functioning.', 1, 'These are the principles named in the article.'],
    ['Co-operative societies of a single State are a Union List subject.', 0, 'They are a State List subject. Multi-State co-operatives are on the Union List.']
  ] }
],

'243ZJ': [
  { f: 'w', note: COOP, q: 'Consider the following statements about the board of a co-operative society:', s: [
    ['It may have at most twenty-one directors.', 1, 'That is the first proviso to Article 243ZJ(1).'],
    ['Its elected members hold office for three years.', 0, 'The term is five years from the date of election.']
  ] }
],

'243ZK': [
  { f: 'w', note: COOP, q: 'Consider the following statements about Article 243ZK:', s: [
    ['The election of a new board must be held before the term of the outgoing board ends.', 1, 'That is Article 243ZK(1).'],
    ['Co-operative elections are conducted by the Election Commission of India.', 0, 'They are conducted by the authority that the law provides.']
  ] }
],

'243ZL': [
  { f: 'w', note: COOP, q: 'Consider the following statements about Article 243ZL:', s: [
    ['A board cannot be superseded or kept under suspension for more than six months.', 1, 'That is the main rule.'],
    ['The board of a society with no government shareholding, loan or guarantee may be superseded at will.', 0, 'The second proviso bars supersession of such a board.']
  ] }
],

'243ZM': [
  { f: 'w', note: COOP, q: 'Consider the following statements about Article 243ZM:', s: [
    ['The accounts of a co-operative society must be audited at least once in each financial year.', 1, 'That is Article 243ZM(1).'],
    ['The auditor is appointed by the Registrar alone.', 0, 'The auditor is appointed by the general body, from a panel approved by the government.']
  ] }
],

'243ZN': [
  { f: 'w', note: COOP, q: 'Consider the following statements about Article 243ZN:', s: [
    ['The law may require the annual general body meeting to be held within six months of the close of the financial year.', 1, 'That is the text of Article 243ZN.'],
    ['The meeting must be held within one month of the close of the financial year.', 0, 'The period is six months.']
  ] }
],

'243Z-O': [
  { f: 'w', note: COOP, q: 'Consider the following statements about Article 243Z-O:', s: [
    ['The law may give every member access to the books and accounts of the society kept in its dealings with that member.', 1, 'That is Article 243Z-O(1).'],
    ['It gives every member an absolute right to inspect the accounts of all other members.', 0, 'Access is limited to the accounts kept in transactions with that member.']
  ] }
],

'243ZP': [
  { f: 'w', note: COOP, q: 'Consider the following statements about Article 243ZP:', s: [
    ['Every co-operative society must file returns within six months of the close of each financial year.', 1, 'That is the text of Article 243ZP.'],
    ['The returns need not include the audited statement of accounts.', 0, 'The audited statement of accounts is one of the required items.']
  ] }
],

'243ZQ': [
  { f: 'w', note: COOP, q: 'Consider the following statements about Article 243ZQ:', s: [
    ['Wilfully making a false return is one of the acts that the law must make an offence.', 1, 'That is Article 243ZQ(2)(a).'],
    ['Article 243ZQ itself fixes the punishment for these offences.', 0, 'The punishment is left to the law of the legislature.']
  ] }
],

'243ZR': [
  { f: 'w', note: COOP, q: 'Consider the following statements:', s: [
    ['Part IXB applies to multi-State co-operative societies, with references to the State legislature read as references to Parliament.', 1, 'That is Article 243ZR.'],
    ['Part IXB has been struck down entirely, including for multi-State co-operative societies.', 0, 'It survives for multi-State co-operative societies.']
  ] }
],

'243ZS': [
  { f: 'w', note: COOP, q: 'Consider the following statements about Article 243ZS:', s: [
    ['Part IXB applies to Union territories.', 1, 'References to the State legislature are read as references to the administrator or the territory\'s Assembly.'],
    ['The President cannot exclude any Union territory from Part IXB.', 0, 'The proviso lets the President exclude a Union territory by notification.']
  ] }
],

'243ZT': [
  { f: 'w', note: COOP, q: 'Consider the following statements about Article 243ZT:', s: [
    ['Inconsistent State co-operative laws could continue for at most one year after the 97th Amendment.', 1, 'That is the text of Article 243ZT.'],
    ['The 97th Amendment was made in 2001.', 0, 'The 97th Amendment was made in 2011.']
  ] }
],

'244': [
  { f: 'w', q: 'Consider the following statements about Article 244:', s: [
    ['The Fifth Schedule applies to the Scheduled Areas in States other than Assam, Meghalaya, Tripura and Mizoram.', 1, 'That is Article 244(1).'],
    ['The Sixth Schedule applies to the tribal areas of Assam, Meghalaya, Tripura and Mizoram.', 1, 'That is Article 244(2).'],
    ['The Sixth Schedule applies to the tribal areas of Manipur.', 0, 'Manipur is not covered by the Sixth Schedule.']
  ] },
  { f: 'w', q: 'Consider the following statements about Scheduled Areas:', s: [
    ['Scheduled Areas are declared by the President.', 1, 'Paragraph 6 of the Fifth Schedule gives this power to the President.'],
    ['Scheduled Areas are declared by the Governor of the State.', 0, 'The Governor reports on them, but the declaration is the President\'s.']
  ] },
  { f: 'si', q: 'Consider the following statements:', s: [
    ['Autonomous District Councils under the Sixth Schedule can make laws on certain subjects.', 1, 'They have legislative, executive and judicial powers.'],
    ['Tribes Advisory Councils under the Fifth Schedule can also make laws.', 0, 'Tribes Advisory Councils only advise the Governor.']
  ] },
  { f: 'w', q: 'Consider the following statements about the Fifth Schedule:', s: [
    ['The Governor may direct that an Act of Parliament or of the State legislature shall not apply to a Scheduled Area.', 1, 'That is paragraph 5(1).'],
    ['The Governor makes regulations for a Scheduled Area without consulting the Tribes Advisory Council.', 0, 'The Governor must consult the Council, and the regulations need the President\'s assent.']
  ] },
  { f: 'n', q: 'Consider the following statements about a Tribes Advisory Council:', s: [
    ['It has not more than twenty members.', 1, 'That is paragraph 4 of the Fifth Schedule.'],
    ['As nearly as possible, three-fourths of its members are Scheduled Tribe members of the State Legislative Assembly.', 1, 'That is also paragraph 4.'],
    ['Every State with Scheduled Tribes must have one, even if it has no Scheduled Areas.', 0, 'A State without Scheduled Areas has one only if the President so directs.']
  ] }
],

'244A': [
  { f: 'w', q: 'Consider the following statements about Article 244A:', s: [
    ['It allows Parliament to form an autonomous State within Assam out of certain tribal areas.', 1, 'It may also have a legislature and a Council of Ministers.'],
    ['It applies to all the States of the North-East.', 0, 'It applies only to Assam.']
  ] },
  { f: 'w', q: 'Consider the following statements:', s: [
    ['Article 244A was added by the 22nd Amendment (1969).', 1, 'It was added in response to demands from the hill areas of Assam.'],
    ['A law under Article 244A is treated as an amendment of the Constitution under Article 368.', 0, 'Article 244A(4) says it is not.']
  ] }
]

});
})();
