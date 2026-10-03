/* Practice MCQs. Batch 1: the Preamble, Parts I and II, and Articles 12 to 21A.

   Each question is a set of statements, each marked true (1) or false (0)
   with the reason. The options and the answer are worked out from these
   marks in app.js, in the forms the Civil Services prelims uses.

   f: 'w' which of two or three statements are correct
      'n' how many of three or four statements are correct
      'p' how many of three or four pairs are correctly matched [left, right, mark, reason]
      'si' Statement-I and Statement-II, with x: 1 if II explains I
   a: the closing line, for a list of items rather than statements
   The stem names the subject, and every statement stands on its own,
   because the statements are shown in a shuffled order.
   Core provisions carry five questions, Recurs three, Worth holding two,
   and every other article in force one. */
Object.assign(window.COI_MCQ = window.COI_MCQ || {}, {

'preamble': [
  { f: 'w', q: 'Consider the following statements about the Preamble to the Constitution of India:', s: [
    ['The words "Socialist" and "Secular" were added to the Preamble by the 42nd Amendment, 1976.', 1, 'The 42nd Amendment added "Socialist", "Secular" and "integrity". The original Preamble described India as a "Sovereign Democratic Republic" and spoke of the "unity of the Nation".'],
    ['The Preamble records that the Constituent Assembly adopted the Constitution on 26 January 1950.', 0, 'The Preamble gives 26 November 1949 as the date of adoption. The Constitution came into force on 26 January 1950.']
  ] },
  { f: 'si', q: 'Consider the following statements:', s: [
    ['The Preamble is a part of the Constitution of India.', 1, 'In Kesavananda Bharati (1973), the Supreme Court held that the Preamble is a part of the Constitution.'],
    ['In the Berubari Reference (1960), the Supreme Court held that the Preamble is a part of the Constitution.', 0, 'In Berubari, the Court said the Preamble is not a part of the Constitution, though it is a key to the minds of its makers. Kesavananda Bharati took the opposite view.']
  ] },
  { f: 'n', q: 'Consider the following statements about the Preamble to the Constitution of India:', s: [
    ['The Preamble can be amended under Article 368, so long as the basic structure is not destroyed.', 1, 'Kesavananda Bharati held that the Preamble can be amended like any other part of the Constitution, subject to the basic structure.'],
    ['The Preamble can be enforced in a court of law in the same way as a fundamental right.', 0, 'The Preamble is not enforceable. It is neither a source of power nor a limit on power, but courts use it to interpret the text.'],
    ['The Preamble has been amended only once.', 1, 'The only amendment to the Preamble so far is the 42nd Amendment of 1976.']
  ] },
  { f: 'w', q: 'Consider the following statements about the ideals set out in the Preamble:', s: [
    ['Justice is promised in three forms: social, economic and political.', 1, 'The Preamble speaks of "JUSTICE, social, economic and political".'],
    ['Liberty is promised of status and of opportunity.', 0, 'Liberty in the Preamble is of thought, expression, belief, faith and worship. "Status and opportunity" describe equality.'],
    ['Fraternity is meant to assure the dignity of the individual and the unity and integrity of the Nation.', 1, 'That is the text as amended in 1976, when "and integrity" was added after "unity".']
  ] },
  { f: 'w', q: 'Consider the following statements about the Preamble\'s description of India as sovereign and secular:', s: [
    ['In S.R. Bommai (1994), the Supreme Court held that secularism is a part of the basic structure of the Constitution.', 1, 'Bommai treated secularism as a basic feature, and held that a State government working against it could be dismissed under Article 356.'],
    ['India\'s membership of the Commonwealth limits its sovereignty, because the British monarch heads the Commonwealth.', 0, 'India is a voluntary member, and the head of the Commonwealth has no authority over it. Membership does not affect India\'s sovereignty.']
  ] }
],

'1': [
  { f: 'w', q: 'Consider the following statements about how Article 1 describes India:', s: [
    ['Article 1 describes India as a "Union of States", not as a "Federation of States".', 1, 'The word "federation" does not appear in Article 1. B.R. Ambedkar explained that the Indian Union was not the result of an agreement among the States.'],
    ['In Article 1, "the territory of India" and "the Union of India" mean the same thing.', 0, 'The territory of India is wider. It covers the States, the Union territories and any territory acquired. The Union of India means only the States.']
  ] },
  { f: 'w', q: 'Consider the following statements about the name and territory of India under Article 1:', s: [
    ['Both "India" and "Bharat" are names given to the country in the Constitution.', 1, 'Article 1(1) says "India, that is Bharat, shall be a Union of States".'],
    ['The names of the States and the Union territories are set out in the First Schedule.', 1, 'Article 1(2) and 1(3)(b) refer to the First Schedule for the actual list.'],
    ['Territory acquired by India becomes part of the territory of India only after a constitutional amendment.', 0, 'Article 1(3)(c) includes "such other territories as may be acquired" in the territory of India. No amendment is needed for that.']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['No State of India has a right to secede from the Union.', 1, 'The Union is described as indestructible, and no provision allows a State to leave it.'],
    ['The Indian Union was not formed by an agreement among the States.', 1, 'Ambedkar told the Constituent Assembly that, because the States did not come together by agreement, none of them has a right to break away.']
  ] },
  { f: 'n', q: 'Consider the following:', a: 'How many of the above are part of the territory of India under Article 1(3)?', s: [
    ['The territories of the States', 1, 'Article 1(3)(a) includes the territories of the States.'],
    ['The Union territories, whether or not they have a legislature of their own', 1, 'Article 1(3)(b) includes every Union territory in the First Schedule. Having a legislature makes no difference.'],
    ['The premises of Indian embassies abroad', 0, 'An embassy\'s premises remain the territory of the host country. They are protected under the Vienna Convention, but they are not Indian territory.']
  ] },
  { f: 'w', q: 'Consider the following statements about changing the First Schedule:', s: [
    ['A law under Article 3 that changes the First Schedule needs a special majority under Article 368.', 0, 'Article 4(2) says a law under Article 2 or 3 is not an amendment under Article 368, so a simple majority is enough.'],
    ['Every change in the First Schedule needs ratification by half the State legislatures.', 0, 'Changes made through laws under Articles 2 and 3 are simple laws of Parliament. No ratification by the States is needed.']
  ] }
],

'2': [
  { f: 'w', q: 'Consider the following statements about the admission of new States into the Union:', s: [
    ['Article 2 allows Parliament to change the boundaries of existing States.', 0, 'Boundaries of existing States are changed under Article 3. Article 2 deals with admitting or establishing new States.'],
    ['Sikkim became a full State of India through a law under Article 2 alone, without any constitutional amendment.', 0, 'Sikkim was made an associate State by the 35th Amendment (1974) and a full State by the 36th Amendment (1975).']
  ] }
],

'3': [
  { f: 'w', q: 'Consider the following statements about a Bill under Article 3 to form a new State or change a State\'s boundaries:', s: [
    ['A Bill under Article 3 can be introduced in Parliament only on the recommendation of the President.', 1, 'The proviso to Article 3 requires the President\'s recommendation before introduction in either House.'],
    ['Parliament is bound by the views of the State legislature to which an Article 3 Bill is referred.', 0, 'The State legislature only expresses its views. Parliament may accept or ignore them.']
  ] },
  { f: 'w', q: 'Consider the following statements about Parliament\'s power to reorganise the States:', s: [
    ['Parliament can change the name of a State by an ordinary law under Article 3.', 1, 'Article 3(e) covers altering the name of a State. A simple majority is enough.'],
    ['A law under Article 3 is treated as an amendment of the Constitution under Article 368.', 0, 'Article 4(2) says a law under Article 2 or 3 is not an amendment for the purposes of Article 368.'],
    ['The President must refer a Bill affecting a State to that State\'s legislature for its views, within a period the President fixes.', 1, 'The proviso to Article 3 requires this reference, and the President may extend the period.']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['A Bill under Article 3 that affects only a Union territory need not be referred to any legislature for views.', 1, 'The reference to a legislature is required only where the Bill affects a State.'],
    ['In the proviso to Article 3, "State" does not include a Union territory.', 1, 'Explanation I to Article 3 says so. In clauses (a) to (e), "State" includes a Union territory, but in the proviso it does not.']
  ] },
  { f: 'w', q: 'Consider the following statements about ceding Indian territory to a foreign country:', s: [
    ['In the Berubari Reference (1960), the Supreme Court held that ceding Indian territory to a foreign country needs a constitutional amendment under Article 368.', 1, 'The Court held that Article 3 does not cover cession. Parliament then passed the Ninth Amendment (1960).'],
    ['The power to "diminish the area of any State" in Article 3 includes the power to cede Indian territory to another country.', 0, 'Article 3 assumes that the area stays within India. Giving territory to a foreign country is outside it.']
  ] },
  { f: 'p', q: 'Consider the following pairs:', h: ['Change', 'How it was made'], s: [
    ['Orissa renamed Odisha (2011)', 'A law of Parliament altering the name of a State', 1, 'The Orissa (Alteration of Name) Act, 2011 was made under Article 3.'],
    ['Telangana formed (2014)', 'A law of Parliament forming a new State from part of a State', 1, 'The Andhra Pradesh Reorganisation Act, 2014 created Telangana under Article 3.'],
    ['Dadra and Nagar Haveli merged with Daman and Diu (2020)', 'A law of Parliament uniting two Union territories', 1, 'Explanation II to Article 3 allows Union territories to be united. The merger took effect on 26 January 2020.'],
    ['Goa made a State (1987)', 'A law of Parliament forming a new State from a Union territory', 1, 'The Goa, Daman and Diu Reorganisation Act, 1987 made Goa a State.']
  ] }
],

'4': [
  { f: 'w', q: 'Consider the following statements about laws made under Articles 2 and 3:', s: [
    ['A law under Article 2 or 3 may change a State\'s representation in Parliament and in the State legislature.', 1, 'Article 4(1) lets a law under Article 2 or 3 make supplemental, incidental and consequential provisions, including provisions on representation in Parliament and the State legislature.'],
    ['A law under Article 2 or 3 that changes the First and Fourth Schedules is passed by a simple majority.', 1, 'Article 4(2) says a law under Article 2 or 3 is not an amendment of the Constitution under Article 368, even though it changes the First and Fourth Schedules.']
  ] }
],

'5': [
  { f: 'w', q: 'Consider the following conditions for a person domiciled in the territory of India:', a: 'Which of the above made the person a citizen at the commencement of the Constitution under Article 5?', s: [
    ['Birth in the territory of India', 1, 'Article 5(a) covers a person born in the territory of India.'],
    ['Birth of either parent in the territory of India', 1, 'Article 5(b) covers a person either of whose parents was born in the territory of India.'],
    ['Ordinary residence in India for at least ten years before the commencement', 0, 'Article 5(c) needs ordinary residence for not less than five years, not ten.']
  ] },
  { f: 'w', q: 'Consider the following statements about citizenship under the Constitution:', s: [
    ['Part II of the Constitution lays down how citizenship is acquired after 26 January 1950.', 0, 'Part II only settles who was a citizen on 26 January 1950. Acquiring citizenship after that is governed by the Citizenship Act, 1955.'],
    ['The Constitution provides for a single citizenship, with no separate citizenship of the States.', 1, 'There is only Indian citizenship. The States have no citizenship of their own.']
  ] },
  { f: 'si', q: 'Consider the following statements:', s: [
    ['An Overseas Citizen of India cannot vote in elections in India.', 1, 'Overseas Citizens of India have no voting rights and cannot hold constitutional offices.'],
    ['Overseas Citizenship of India is a form of citizenship conferred by Part II of the Constitution.', 0, 'It is a status created by the Citizenship Act, 1955. It is not citizenship at all.']
  ] }
],

'6': [
  { f: 'w', q: 'Consider the following statements about Article 6, on persons who migrated from Pakistan:', s: [
    ['A person who migrated from Pakistan before 19 July 1948 had to be registered by an officer to become a citizen.', 0, 'Registration was needed only for those who came on or after 19 July 1948. Earlier migrants needed only ordinary residence since their migration.'],
    ['A person who migrated on or after 19 July 1948 became a citizen automatically, without registration.', 0, 'A person who came on or after 19 July 1948 had to apply and be registered by an officer of the Government of India, after at least six months\' residence.']
  ] }
],

'7': [
  { f: 'w', q: 'Consider the following statements about persons who migrated from India to Pakistan:', s: [
    ['Article 7 denies citizenship to a person who migrated from India to Pakistan after 1 March 1947.', 1, 'Article 7 overrides Articles 5 and 6 for a person who migrated to Pakistan after 1 March 1947.'],
    ['A person who migrated to Pakistan and came back under a permit for resettlement is treated as having migrated to India after 19 July 1948.', 1, 'The proviso to Article 7 says so, for the purposes of Article 6(b). That person therefore had to be registered.']
  ] }
],

'8': [
  { f: 'w', q: 'Consider the following statements about the registration of persons of Indian origin living outside India:', s: [
    ['Registration of a person of Indian origin living abroad was done by the government of the Indian State where the person\'s grandparents were born.', 0, 'It was done by the Indian diplomatic or consular representative in the country where the person lived.'],
    ['Registration of a person of Indian origin living abroad was possible only before the Constitution came into force.', 0, 'Article 8 allows an application "whether before or after the commencement of this Constitution".']
  ] }
],

'9': [
  { f: 'w', q: 'Consider the following statements about Indians who voluntarily acquire foreign citizenship:', s: [
    ['A person who voluntarily acquired the citizenship of a foreign State is not a citizen of India under Article 5, 6 or 8.', 1, 'Article 9 says a person who has voluntarily acquired the citizenship of a foreign State is not a citizen of India under Article 5, 6 or 8.'],
    ['Article 9 allows persons of Indian origin to hold the citizenship of India and of a foreign State together.', 0, 'Article 9 does the opposite. India does not allow dual citizenship.']
  ] }
],

'10': [
  { f: 'w', q: 'Consider the following statements about the continuance of citizenship under Article 10:', s: [
    ['Persons who are citizens under Part II continue to be citizens, subject to any law made by Parliament.', 1, 'Article 10 says every person who is a citizen under Part II continues to be one, subject to any law made by Parliament.'],
    ['Article 10 places citizenship under Part II beyond the reach of any law made by Parliament.', 0, 'Article 10 is expressly "subject to the provisions of any law that may be made by Parliament".']
  ] }
],

'11': [
  { f: 'w', q: 'Consider the following statements about the power to make laws on citizenship:', s: [
    ['Article 11 allows Parliament to make laws on both the acquisition and the termination of citizenship.', 1, 'Article 11 covers "the acquisition and termination of citizenship and all other matters relating to citizenship".'],
    ['A State legislature may make laws on citizenship for persons domiciled in that State.', 0, 'Citizenship is Entry 17 of the Union List. Only Parliament can legislate on it.']
  ] },
  { f: 'n', q: 'Consider the following:', a: 'Under the Citizenship Act, 1955, how many of the above are ways of acquiring Indian citizenship?', s: [
    ['Birth', 1, 'Section 3 of the Act provides for citizenship by birth.'],
    ['Descent', 1, 'Section 4 of the Act provides for citizenship by descent.'],
    ['Naturalisation', 1, 'Section 6 of the Act provides for citizenship by naturalisation.'],
    ['Investment of a set amount of money in India', 0, 'The Act has no route to citizenship by investment. The ways it provides are birth, descent, registration, naturalisation and the incorporation of territory.']
  ] },
  { f: 'w', q: 'Consider the following statements about loss of citizenship under the Citizenship Act, 1955:', s: [
    ['Renunciation of Indian citizenship is a voluntary act by the citizen.', 1, 'A citizen of full age may renounce citizenship by a declaration.'],
    ['Citizenship is terminated when a citizen voluntarily acquires the citizenship of another country.', 1, 'Section 9 of the Act provides for this.'],
    ['Deprivation of citizenship is ordered by the Supreme Court.', 0, 'Deprivation is ordered by the Central Government under Section 10 of the Act.']
  ] }
],

'12': [
  { f: 'w', q: 'Consider the following statements about the meaning of "the State" in Article 12:', s: [
    ['"The State" includes local authorities such as municipalities and panchayats.', 1, 'Article 12 includes "all local or other authorities within the territory of India".'],
    ['Article 12 defines "the State" for the purposes of the whole Constitution.', 0, 'Article 12 opens with "In this Part", so it applies to Part III. Article 36 applies the same meaning to Part IV.']
  ] },
  { f: 'w', q: 'Consider the following statements about when a body is "the State" under Article 12:', s: [
    ['In Ajay Hasia (1981), the Supreme Court laid down tests for deciding when a body is an instrumentality or agency of the government.', 1, 'Ajay Hasia set out the tests, and held a society running an engineering college to be "the State".'],
    ['In Pradeep Kumar Biswas (2002), the Supreme Court held that the CSIR is "the State" under Article 12.', 1, 'The seven-judge bench held CSIR to be "the State", overruling an earlier decision.'],
    ['In Zee Telefilms (2005), the Supreme Court held that the BCCI is "the State" under Article 12.', 0, 'By 3:2, the Court held that the BCCI is not "the State".']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['A person aggrieved by the BCCI can still approach a High Court under Article 226.', 1, 'Zee Telefilms noted that the BCCI performs public functions, so a remedy lies under Article 226.'],
    ['A writ under Article 226 can issue to any person or authority performing a public duty, even if it is not "the State".', 1, 'Article 226 is wider than Article 32. It runs to "any person or authority".']
  ] },
  { f: 'w', q: 'Consider the following statements about the test for deciding whether a body is "the State":', s: [
    ['Under the test in Pradeep Kumar Biswas, a body is "the State" if it is financially, functionally and administratively dominated by the government.', 1, 'The seven judges in Pradeep Kumar Biswas (2002) laid down this test.'],
    ['A body becomes "the State" merely because the government regulates it closely.', 0, 'Regulation alone is not enough. The control must be deep and pervasive.']
  ] },
  { f: 'w', q: 'Consider the following statements about the bodies named in Article 12:', s: [
    ['Article 12 names the judiciary as part of "the State".', 0, 'The courts are not named. When a court acts judicially, its orders are not treated as State action that can be challenged under Article 32.'],
    ['Article 12 names Parliament and the legislature of each State as part of "the State".', 1, 'Article 12 names the Government and Parliament of India, and the Government and the Legislature of each State.']
  ] }
],

'13': [
  { f: 'w', q: 'Consider the following statements about the meaning of "law" in Article 13:', s: [
    ['"Law" in Article 13 includes an ordinance, a bye-law, a rule, a notification and a custom or usage having the force of law.', 1, 'That is the definition in Article 13(3)(a).'],
    ['A constitutional amendment made under Article 368 is a "law" under Article 13 that can be struck down for violating fundamental rights.', 0, 'Article 13(4), added by the 24th Amendment (1971), says nothing in Article 13 applies to an amendment made under Article 368.']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['A law made after 26 January 1950 that violates a fundamental right does not revive if the right is later amended.', 1, 'The doctrine of eclipse applies only to laws made before the Constitution came into force.'],
    ['Under Article 13(2), a law made after 26 January 1950 that violates a fundamental right is void from the time it is made.', 1, 'Article 13(2) forbids the State to make a law that takes away or abridges a fundamental right. A law made in breach of it is void from the start.']
  ] },
  { f: 'w', q: 'Consider the following statements about whether a constitutional amendment is "law" under Article 13:', s: [
    ['In Shankari Prasad (1951), the Supreme Court held that "law" in Article 13(2) does not include a constitutional amendment.', 1, 'That was the unanimous view of five judges.'],
    ['In Golak Nath (1967), the Supreme Court held that a constitutional amendment is "law" under Article 13(2).', 1, 'By 6:5, the Court held that Parliament could not amend fundamental rights so as to take them away or abridge them.'],
    ['The 24th Amendment (1971) was made to give effect to the view taken in Golak Nath.', 0, 'The 24th Amendment was made to overcome Golak Nath. It added Article 13(4) and changed Article 368.']
  ] },
  { f: 'w', q: 'Consider the following statements about laws that violate fundamental rights:', s: [
    ['Under the doctrine of severability, only the part of a law that violates a fundamental right is void, if it can be separated from the rest.', 1, 'Article 13 says a law is void "to the extent of" the inconsistency. R.M.D. Chamarbaugwalla (1957) applied this.'],
    ['Article 13(1) is retrospective, and makes pre-Constitution laws void even for acts done before 26 January 1950.', 0, 'In Keshavan Madhava Menon (1951), the Court held that Article 13(1) is not retrospective.']
  ] },
  { f: 'w', q: 'Consider the following statements about custom, usage and personal law under Article 13:', s: [
    ['Article 13 does not apply to custom or usage.', 0, 'Custom or usage having the force of law is expressly part of "law" under Article 13(3)(a).'],
    ['Personal laws are expressly named in the definition of "law" in Article 13(3).', 0, 'Personal laws are not named. Whether uncodified personal law is "law" under Article 13 has been debated since the Bombay High Court said no in 1952.']
  ] }
],

'14': [
  { f: 'w', q: 'Consider the following statements about equality before the law under Article 14:', s: [
    ['Article 14 guarantees equality before the law to every person, including a foreigner.', 1, 'Article 14 uses the words "any person", not "any citizen".'],
    ['"Equality before the law" comes from the American Constitution and "equal protection of the laws" from British law.', 0, 'It is the other way round. Equality before the law is the British idea of the rule of law. Equal protection of the laws comes from the Fourteenth Amendment of the United States Constitution.']
  ] },
  { f: 'w', q: 'Consider the following statements about reasonable classification under Article 14:', s: [
    ['The classification must rest on an intelligible differentia.', 1, 'The first limb of the classification test, settled in Budhan Choudhry (1955), is an intelligible differentia that marks off the persons grouped together from those left out.'],
    ['The differentia must have a rational relation to the object of the law.', 1, 'The second limb is that the differentia must have a rational relation to the object the law seeks to achieve.'],
    ['A single person or body may form a class by itself, if there are special reasons.', 1, 'Ram Krishna Dalmia (1958) held this.']
  ] },
  { f: 'si', q: 'Consider the following statements:', s: [
    ['In E.P. Royappa (1974), the Supreme Court held that equality and arbitrariness are sworn enemies.', 1, 'Royappa added the arbitrariness test to the classification test.'],
    ['Article 14 forbids all classification of persons by law.', 0, 'Article 14 forbids class legislation, not reasonable classification.']
  ] },
  { f: 'p', q: 'Consider the following pairs:', h: ['Case', 'What the Court did'], s: [
    ['Anwar Ali Sarkar (1952)', 'Struck down a special courts law that gave unguided power to choose cases', 1, 'Section 5(1) of the West Bengal Special Courts Act was held void.'],
    ['D.S. Nakara (1983)', 'Struck down a cut-off date that split pensioners into two classes', 1, 'The Court held that pensioners form one class.'],
    ['Joseph Shine (2018)', 'Struck down the offence of adultery in Section 497 of the IPC', 1, 'Section 497 was held manifestly arbitrary.'],
    ['Air India v. Nargesh Meerza (1981)', 'Upheld a rule ending an air hostess\'s service on the first pregnancy', 0, 'That rule was struck down as arbitrary and unreasonable.']
  ] },
  { f: 'w', q: 'Consider the following statements about the reach of Article 14:', s: [
    ['Article 14 applies only to laws, and not to executive action.', 0, 'Article 14 binds the State in everything it does, including executive action.'],
    ['The enforcement of Article 14 cannot be suspended even during a national emergency.', 0, 'Under Article 359, the President may suspend the enforcement of any right in Part III except Articles 20 and 21.']
  ] }
],

'15': [
  { f: 'n', q: 'Consider the following grounds:', a: 'On how many of the above grounds does Article 15(1) forbid the State to discriminate against a citizen?', s: [
    ['Place of birth', 1, 'Place of birth is one of the five grounds in Article 15(1). The five are religion, race, caste, sex and place of birth.'],
    ['Descent', 0, 'Descent is a ground in Article 16(2), on public employment. It is not in Article 15(1).'],
    ['Residence', 0, 'Residence is a ground in Article 16(2), on public employment. It is not in Article 15(1).'],
    ['Sex', 1, 'Sex is one of the five grounds in Article 15(1).']
  ] },
  { f: 'w', q: 'Consider the following statements about the protection against discrimination in Article 15:', s: [
    ['Article 15(2) applies to private persons as well as to the State, for access to shops and public places.', 1, 'Article 15(2) speaks of "any disability, liability, restriction or condition", from whoever it comes.'],
    ['Article 15(1) protects every person, including a non-citizen.', 0, 'Article 15 protects citizens only.']
  ] },
  { f: 'w', q: 'Consider the following statements about special provisions for backward classes and weaker sections:', s: [
    ['Article 15(4) was added by the First Amendment (1951), after the decision in Champakam Dorairajan.', 1, 'The Court had struck down the Madras communal order. The First Amendment enabled special provisions for backward classes.'],
    ['Article 15(5) allows reservation in all private educational institutions, including minority institutions.', 0, 'Article 15(5) expressly excludes minority educational institutions referred to in Article 30(1).'],
    ['Article 15(6) caps reservation for economically weaker sections in admissions at ten per cent of seats in each category.', 1, 'Article 15(6), added by the 103rd Amendment (2019), sets a maximum of ten per cent.']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['The State may make special provisions for women and children.', 1, 'Article 15(3) allows this.'],
    ['Article 15(3) is an express exception to the rule against discrimination on the ground of sex.', 1, 'Clause (3) opens with "Nothing in this article shall prevent the State", so it qualifies clause (1).']
  ] },
  { f: 'w', q: 'Consider the following statements about reservation in educational institutions:', s: [
    ['In Ashoka Kumar Thakur (2008), the Supreme Court upheld the 93rd Amendment for State and State-aided institutions.', 1, 'The question of private unaided institutions was left open.'],
    ['In Janhit Abhiyan (2022), the Supreme Court struck down the 103rd Amendment on reservation for economically weaker sections.', 0, 'By 3:2, the Court upheld the 103rd Amendment.']
  ] }
],

'16': [
  { f: 'n', q: 'Consider the following grounds:', a: 'On how many of the above grounds does Article 16(2) forbid discrimination in public employment?', s: [
    ['Descent', 1, 'Descent is a ground in Article 16(2). It is not a ground in Article 15(1).'],
    ['Residence', 1, 'Residence is a ground in Article 16(2). Under Article 16(3), Parliament alone may still prescribe residence as a requirement for some posts.'],
    ['Sex', 1, 'Sex is a ground in Article 16(2).'],
    ['Place of birth', 1, 'The grounds in Article 16(2) are religion, race, caste, sex, descent, place of birth and residence.']
  ] },
  { f: 'w', q: 'Consider the following statements about equality of opportunity in public employment:', s: [
    ['Only Parliament, not a State legislature, can prescribe a residence requirement for public employment.', 1, 'Article 16(3) gives this power to Parliament alone.'],
    ['Article 16(4) gives an individual a fundamental right to claim reservation in appointments.', 0, 'Article 16(4) is an enabling provision. It allows the State to reserve posts, but no one can compel it to.']
  ] },
  { f: 'w', q: 'Consider the following statements about the Supreme Court\'s judgment in Indra Sawhney (1992):', s: [
    ['Indra Sawhney upheld 27 per cent reservation for socially and educationally backward classes in central government posts.', 1, 'The Court upheld the reservation recommended by the Mandal Commission.'],
    ['Indra Sawhney held that the creamy layer must be excluded from the backward classes.', 1, 'The advanced members of a backward class do not get the benefit.'],
    ['Indra Sawhney allowed reservation in promotions under Article 16(4).', 0, 'Indra Sawhney held that Article 16(4) does not allow reservation in promotions. The 77th Amendment (1995) then added Article 16(4A).']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['Unfilled reserved vacancies of a year can be filled in later years without counting against the fifty per cent ceiling of those years.', 1, 'This is the carry-forward of the backlog.'],
    ['Article 16(4B), added by the 81st Amendment (2000), treats unfilled reserved vacancies carried forward from earlier years as a separate class.', 1, 'That is what allows the carried-forward vacancies to be kept out of the ceiling for the later year.']
  ] },
  { f: 'w', q: 'Consider the following statements about reservation in promotion:', s: [
    ['In M. Nagaraj (2006), the Supreme Court upheld Article 16(4A), but required data on backwardness, inadequate representation and efficiency before reservation in promotion.', 1, 'Those were the conditions Nagaraj attached.'],
    ['In Jarnail Singh (2018), the Supreme Court held that the State must still collect data on the backwardness of the Scheduled Castes and Scheduled Tribes.', 0, 'Jarnail Singh dropped that requirement. It also applied the creamy layer to promotions.']
  ] }
],

'17': [
  { f: 'w', q: 'Consider the following statements about the abolition of untouchability:', s: [
    ['Article 17 abolishes "untouchability" and forbids its practice in any form.', 1, 'That is the first sentence of Article 17.'],
    ['The Constitution defines the word "untouchability".', 0, 'The word is not defined anywhere in the Constitution.']
  ] },
  { f: 'w', q: 'Consider the following statements about the enforcement of Article 17:', s: [
    ['Article 17 can be enforced against private persons.', 1, 'Untouchability is forbidden "in any form", by anyone.'],
    ['A State legislature can prescribe the punishment for practising untouchability.', 0, 'Under Article 35, only Parliament can prescribe punishment for offences declared in Part III.']
  ] },
  { f: 'n', q: 'Consider the following statements about untouchability and the law:', s: [
    ['The Untouchability (Offences) Act, 1955 was renamed the Protection of Civil Rights Act in 1976.', 1, 'The name was changed by an amendment in 1976.'],
    ['The Scheduled Castes and the Scheduled Tribes (Prevention of Atrocities) Act was enacted in 1955.', 0, 'The Prevention of Atrocities Act was enacted in 1989.'],
    ['Article 17 falls under the Right against Exploitation in Part III.', 0, 'Article 17 falls under the Right to Equality (Articles 14 to 18). The Right against Exploitation is Articles 23 and 24.']
  ] },
  { f: 'si', x: 0, q: 'Consider the following statements:', s: [
    ['Article 17 falls under the Right to Equality.', 1, 'The Right to Equality covers Articles 14 to 18.'],
    ['The Right against Exploitation covers only Articles 23 and 24.', 1, 'Those two articles deal with trafficking, forced labour and child labour.']
  ], xw: 'The second statement is true, but it says nothing about why Article 17 sits under equality.' },
  { f: 'w', q: 'Consider the following statements about the reach of Article 17:', s: [
    ['In Appa Balu Ingale (1993), the Supreme Court restored the conviction of persons who stopped Dalits from drawing water from a borewell.', 1, 'The Court held that the High Court was wrong to reject the evidence of the eyewitnesses.'],
    ['Article 17 protects only persons who profess the Hindu religion.', 0, 'Article 17 forbids untouchability in any form. It is not limited to any religion.']
  ] }
],

'18': [
  { f: 'w', q: 'Consider the following statements about the abolition of titles under Article 18:', s: [
    ['The State shall not confer any title other than a military or academic distinction.', 1, 'That is Article 18(1).'],
    ['A citizen of India may accept a title from a foreign State with the consent of the President.', 0, 'Article 18(2) is an absolute bar for citizens. The President\'s consent is relevant only for non-citizens holding office under the State.']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['The Bharat Ratna and the Padma awards do not violate Article 18.', 1, 'The awards are still conferred, and they remain valid.'],
    ['In Balaji Raghavan (1996), the Supreme Court held that the Bharat Ratna and the Padma awards are not titles within the meaning of Article 18.', 1, 'The Court held that they are decorations for merit, not titles.']
  ] },
  { f: 'w', q: 'Consider the following statements about foreign titles and presents under Article 18:', s: [
    ['A person holding an office of profit under the State may accept a present from a foreign State without anyone\'s consent.', 0, 'Article 18(4) requires the consent of the President.'],
    ['A recipient of a national award may use it as a prefix or suffix to the recipient\'s name.', 0, 'In Balaji Raghavan, the Court said the awards must not be used as prefixes or suffixes.']
  ] }
],

'19': [
  { f: 'n', q: 'Consider the following:', a: 'How many of the above are grounds in Article 19(2) on which reasonable restrictions may be placed on the freedom of speech and expression?', s: [
    ['Friendly relations with foreign States', 1, 'Friendly relations with foreign States was added to Article 19(2) by the First Amendment (1951).'],
    ['Contempt of court', 1, 'Contempt of court has been a ground in Article 19(2) since 1950.'],
    ['Decency or morality', 1, 'Decency or morality has been a ground in Article 19(2) since 1950.'],
    ['Incitement to an offence', 1, 'Incitement to an offence was added to Article 19(2) by the First Amendment (1951).']
  ] },
  { f: 'w', q: 'Consider the following statements about the freedoms in Article 19:', s: [
    ['The right to property was removed from Article 19 by the 44th Amendment (1978).', 1, 'Article 19(1)(f) was deleted, and the right became Article 300A.'],
    ['The freedoms in Article 19 are available to every person, including a foreigner.', 0, 'Article 19 is available to citizens only.']
  ] },
  { f: 'w', q: 'Consider the following statements about the freedom of speech and of the press:', s: [
    ['In Romesh Thappar (1950), the Supreme Court held that freedom of speech includes freedom of circulation.', 1, 'The Court struck down a ban on a journal\'s entry into Madras State.'],
    ['In Bennett Coleman (1973), the Supreme Court upheld a newsprint policy that limited the pages of newspapers.', 0, 'The Court struck the policy down as a restriction on the freedom of the press.'],
    ['In Shreya Singhal (2015), the Supreme Court struck down Section 66A of the Information Technology Act.', 1, 'Section 66A was held vague and not saved by Article 19(2).']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['In Bijoe Emmanuel (1986), students who stood respectfully but did not sing the National Anthem could not be expelled.', 1, 'The Court held that their expulsion violated their fundamental rights.'],
    ['The freedom of speech and expression includes the freedom to remain silent.', 1, 'The Court relied on this reading of Article 19(1)(a), along with Article 25.']
  ] },
  { f: 'w', q: 'Consider the following statements about amendments to Article 19:', s: [
    ['The 16th Amendment (1963) added "the sovereignty and integrity of India" as a ground for restricting speech.', 1, 'It was added to Article 19(2), (3) and (4).'],
    ['The right to form co-operative societies was added to Article 19(1)(c) by the 73rd Amendment.', 0, 'It was added by the 97th Amendment (2011).']
  ] }
],

'20': [
  { f: 'w', q: 'Consider the following:', a: 'Against which of the above does Article 20 give protection?', s: [
    ['Conviction under an ex post facto criminal law', 1, 'Article 20(1) bars conviction for an act that was not an offence when it was done.'],
    ['Double jeopardy', 1, 'Article 20(2) bars prosecution and punishment for the same offence more than once.'],
    ['Preventive detention', 0, 'Preventive detention is dealt with in Article 22, not in Article 20.']
  ] },
  { f: 'w', q: 'Consider the following statements about the protection against ex post facto laws in Article 20(1):', s: [
    ['Article 20(1) bars retrospective tax laws.', 0, 'Article 20(1) applies only to criminal law. Tax and civil laws may be retrospective.'],
    ['Article 20(1) allows a heavier penalty if the law is changed after the offence was committed.', 0, 'Article 20(1) forbids a penalty greater than the one in force when the offence was committed.']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['The protection against double jeopardy does not bar a departmental inquiry after a criminal prosecution for the same act.', 1, 'A departmental inquiry is not a prosecution.'],
    ['Article 20(2) applies only where the earlier proceeding was a prosecution and punishment before a court or a judicial tribunal.', 1, 'Maqbool Hussain (1953) held this. Proceedings before customs authorities did not count.']
  ] },
  { f: 'w', q: 'Consider the following statements about the right against self-incrimination in Article 20(3):', s: [
    ['In Selvi (2010), the Supreme Court held that narcoanalysis, polygraph and BEAP tests cannot be forced on a person.', 1, 'Forcing these tests violates Article 20(3) and Article 21.'],
    ['In Kathi Kalu Oghad (1961), the Supreme Court held that taking an accused\'s fingerprints or specimen handwriting violates Article 20(3).', 0, 'The Court held that these are not testimony, so they do not violate Article 20(3).']
  ] },
  { f: 'w', q: 'Consider the following statements about the protections in Article 20:', s: [
    ['The enforcement of Articles 20 and 21 cannot be suspended during a national emergency.', 1, 'The 44th Amendment (1978) changed Article 359 to protect these two articles.'],
    ['Article 20(3) protects a witness who is not accused of any offence.', 0, 'Article 20(3) protects a "person accused of any offence".']
  ] }
],

'21': [
  { f: 'w', q: 'Consider the following statements about the protection of life and personal liberty in Article 21:', s: [
    ['Article 21 uses the words "procedure established by law", not "due process of law".', 1, 'The text has never been changed. The Court has read fairness into it.'],
    ['Article 21 is available only to citizens of India.', 0, 'Article 21 says "No person", so it protects foreigners as well.']
  ] },
  { f: 'w', q: 'Consider the following statements about how the Supreme Court has read "procedure established by law" in Article 21:', s: [
    ['In A.K. Gopalan (1950), the Supreme Court read "procedure established by law" to mean any procedure laid down by a valid law.', 1, 'Gopalan gave the words a narrow, literal reading.'],
    ['In Maneka Gandhi (1978), the Supreme Court held that the procedure must be fair, just and reasonable.', 1, 'Maneka Gandhi also linked Articles 14, 19 and 21.'],
    ['In ADM Jabalpur (1976), Justice H.R. Khanna dissented and held that a detention without the authority of law could be challenged in court even during the Emergency.', 1, 'Justice Khanna was the lone dissenter. Justice Khanna held that Article 21 was not the only source of the right to life and liberty.']
  ] },
  { f: 'p', q: 'Consider the following pairs:', h: ['Case', 'Right read into Article 21'], s: [
    ['Puttaswamy (2017)', 'Right to privacy', 1, 'Nine judges held privacy to be a fundamental right.'],
    ['Olga Tellis (1985)', 'Right to livelihood', 1, 'The case concerned the eviction of pavement dwellers in Bombay.'],
    ['Common Cause (2018)', 'Right to die with dignity, including passive euthanasia', 1, 'The Court also recognised advance directives.'],
    ['Hussainara Khatoon (1979)', 'Right to freedom of speech', 0, 'Hussainara Khatoon read the right to a speedy trial into Article 21.']
  ] },
  { f: 'si', x: 1, q: 'Consider the following statements:', s: [
    ['The majority view in ADM Jabalpur is no longer good law.', 1, 'It has been disowned by the Court itself.'],
    ['In Puttaswamy (2017), the Supreme Court held that the majority in ADM Jabalpur was wrong.', 1, 'The plurality opinion said the majority judgments were seriously flawed and stood overruled.']
  ] },
  { f: 'w', q: 'Consider the following statements about rights read into Article 21:', s: [
    ['Vishaka (1997) laid down guidelines on sexual harassment at the workplace, drawing on international conventions.', 1, 'The Court relied on CEDAW in the absence of a domestic law.'],
    ['Navtej Singh Johar (2018) upheld Section 377 of the IPC as applied to consensual acts between adults.', 0, 'The Court struck down Section 377 so far as it made consensual sexual conduct between adults a crime.']
  ] }
],

'21A': [
  { f: 'w', q: 'Consider the following statements about the right to education in Article 21A:', s: [
    ['Article 21A covers children aged six to fourteen years.', 1, 'Article 21A requires the State to provide free and compulsory education to all children from six to fourteen years of age.'],
    ['Article 21A was inserted by the 86th Amendment, 2002.', 1, 'The 86th Amendment inserted Article 21A.'],
    ['Free education for children below six is a fundamental right under Article 21A.', 0, 'Early childhood care and education for children below six is in Article 45, a directive principle.']
  ] },
  { f: 'n', q: 'Consider the following changes to the Constitution:', a: 'How many of the above were made by the 86th Amendment, 2002?', s: [
    ['The insertion of Article 21A, on the right to education', 1, 'The 86th Amendment made elementary education a fundamental right.'],
    ['A new Article 45, on early childhood care and education for children below six', 1, 'The old Article 45 had asked the State to provide free and compulsory education for children up to fourteen.'],
    ['A fundamental duty on parents and guardians to provide opportunities for education to children aged six to fourteen', 1, 'This duty is Article 51A(k).']
  ] },
  { f: 'si', q: 'Consider the following statements:', s: [
    ['The Right of Children to Free and Compulsory Education Act, 2009 requires unaided private schools to admit children from weaker sections up to 25 per cent of the entry class.', 1, 'Section 12(1)(c) of the Act lays this down.'],
    ['In Society for Unaided Private Schools (2012), the Supreme Court held that the 25 per cent rule binds unaided minority schools as well.', 0, 'The Court upheld the Act, but not for unaided minority schools.']
  ] }
]

});
