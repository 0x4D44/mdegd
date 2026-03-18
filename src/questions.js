// Birthday quiz questions for Eric — all connected to March 21st.
// Each question has Eric mode (very hard) and Ruth mode (very easy / funny).

export const questions = [

  // ═══════════════════════════════════════════════════════════════════════════
  // US STATE HISTORY (~20 questions)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 1,
    category: "us-state-history",
    question: "On March 21, 1864, Lincoln signed the Nevada Enabling Act. What number state did Nevada become?",
    year: 1864,
    eric: {
      options: ["35th", "36th", "37th", "38th"],
      correct: 1,
      explanation: "Nevada was the 36th state, admitted October 31, 1864. West Virginia (35th) joined in 1863; Nebraska (37th) wasn't admitted until 1867."
    },
    ruth: {
      options: ["36th", "Thirty-twelve-th", "The state of confusion", "States aren't numbered, silly"],
      correct: 0,
      explanation: "Nevada became the 36th US state! Lincoln wanted it in quickly during the Civil War."
    }
  },
  {
    id: 2,
    category: "us-state-history",
    question: "Nevada's state motto is 'Battle Born.' On what date was it formally admitted as a state?",
    year: 1864,
    eric: {
      options: ["October 30, 1864", "October 31, 1864", "November 1, 1864", "November 2, 1864"],
      correct: 1,
      explanation: "Nevada was admitted on October 31, 1864 — Halloween! The Enabling Act was signed March 21, but statehood came later that year."
    },
    ruth: {
      options: ["October 31, 1864 — Halloween!", "April 1, 1864 — April Fools!", "December 25, 1864 — Christmas!", "February 29, 1864 — Leap Day!"],
      correct: 0,
      explanation: "Nevada became a state on Halloween 1864! Spooky statehood!"
    }
  },
  {
    id: 3,
    category: "us-state-history",
    question: "The Butler Act, signed on March 21, 1925, prohibited teaching what in Tennessee public schools?",
    year: 1925,
    eric: {
      options: [
        "Any theory denying the divine creation of man",
        "That man descended from a lower order of animals",
        "Darwin's theory of natural selection specifically",
        "Any theory contradicting the Book of Genesis"
      ],
      correct: 1,
      explanation: "The Butler Act specifically prohibited teaching 'that man has descended from a lower order of animals.' It didn't mention Darwin by name or Genesis specifically."
    },
    ruth: {
      options: [
        "Human evolution",
        "How to make really good biscuits",
        "Advanced yo-yo techniques",
        "The complete works of Shakespeare, but backwards"
      ],
      correct: 0,
      explanation: "The Butler Act banned teaching human evolution in Tennessee schools. It led to the famous Scopes 'Monkey Trial'!"
    }
  },
  {
    id: 4,
    category: "us-state-history",
    question: "Who introduced the Butler Act that was signed into law on March 21, 1925?",
    year: 1925,
    eric: {
      options: [
        "John Washington Butler, a state legislator and teacher",
        "John Washington Butler, a state legislator and farmer",
        "William Jennings Butler, a state legislator and farmer",
        "John Washington Butler, a state senator and preacher"
      ],
      correct: 1,
      explanation: "John Washington Butler was a Tennessee state legislator and farmer — not a teacher, preacher, or senator. William Jennings Bryan (not Butler) was the famous prosecutor at the Scopes Trial."
    },
    ruth: {
      options: [
        "A farmer named John Washington Butler",
        "A monkey with a grudge",
        "Charles Darwin's arch-nemesis, Professor Anti-Darwin",
        "The Tennessee Committee for Being Cross About Things"
      ],
      correct: 0,
      explanation: "John Washington Butler was a Tennessee farmer who didn't want evolution taught in schools."
    }
  },
  {
    id: 5,
    category: "us-state-history",
    question: "The Butler Act (March 21, 1925) led to the Scopes Trial. When was the Act finally repealed?",
    year: 1925,
    eric: {
      options: ["1957", "1960", "1967", "1968"],
      correct: 2,
      explanation: "The Butler Act wasn't repealed until 1967 — over 40 years after it was enacted. Tennessee was slow to remove it from the books."
    },
    ruth: {
      options: ["1967", "Last Tuesday", "It's still going — shh, don't tell anyone", "The year 3000"],
      correct: 0,
      explanation: "It took until 1967 for Tennessee to repeal the Butler Act — 42 years after it was signed!"
    }
  },
  {
    id: 6,
    category: "us-state-history",
    question: "Which Tennessee Governor signed the Butler Act into law on March 21, 1925?",
    year: 1925,
    eric: {
      options: ["Austin Peay", "Gordon Browning", "Henry Horton", "Hill McAlister"],
      correct: 0,
      explanation: "Governor Austin Peay signed the Butler Act. Browning, Horton, and McAlister were all real Tennessee governors, but from later periods."
    },
    ruth: {
      options: ["Austin Peay", "Austin Powers", "Austin, Texas (the whole city signed it)", "A man called Steve"],
      correct: 0,
      explanation: "Governor Austin Peay signed the Butler Act. And yes, that's a real name!"
    }
  },
  {
    id: 7,
    category: "us-state-history",
    question: "The Scopes Trial of July 1925 resulted from the Butler Act (signed March 21). What was Scopes convicted of?",
    year: 1925,
    eric: {
      options: [
        "Teaching evolution in a biology class",
        "Assigning a textbook that included evolution",
        "Violating the Butler Act — though the extent of his actual teaching is debated",
        "Publicly advocating for the theory of evolution"
      ],
      correct: 2,
      explanation: "Scopes was convicted of violating the Butler Act, but historians debate whether he actually taught evolution in class. He may have only assigned readings. The trial was partly a test case arranged by the ACLU."
    },
    ruth: {
      options: [
        "Teaching evolution",
        "Being too good at science",
        "Having an overly dramatic surname",
        "Refusing to teach that humans were made of cheese"
      ],
      correct: 0,
      explanation: "John Scopes was convicted of teaching evolution. His trial became one of the most famous in American history!"
    }
  },
  {
    id: 8,
    category: "us-state-history",
    question: "The Great New Orleans Fire of March 21, 1788 destroyed how many of the city's ~1,100 structures?",
    year: 1788,
    eric: {
      options: ["756", "816", "856", "906"],
      correct: 2,
      explanation: "The fire destroyed 856 of approximately 1,100 structures. The second New Orleans fire in 1794 destroyed another 212 buildings."
    },
    ruth: {
      options: ["856", "Just the one — but it was really big", "All of them, twice", "Forty-twelve"],
      correct: 0,
      explanation: "The fire destroyed 856 buildings — nearly the entire city! New Orleans was rebuilt in the style we see today."
    }
  },
  {
    id: 9,
    category: "us-state-history",
    question: "During the Great New Orleans Fire (March 21, 1788), the city was under which colonial power?",
    year: 1788,
    eric: {
      options: ["France", "Spain", "Britain", "It was already American territory"],
      correct: 1,
      explanation: "New Orleans was under Spanish colonial rule in 1788. France had ceded Louisiana to Spain in 1762. The 'French Quarter' was actually rebuilt in Spanish colonial style after this fire."
    },
    ruth: {
      options: [
        "Spain — which is why the 'French Quarter' is actually Spanish style!",
        "France — obviously, it's the French Quarter",
        "Narnia",
        "The Spice Girls"
      ],
      correct: 0,
      explanation: "Surprise! The famous 'French Quarter' was actually rebuilt under Spanish rule after the fire. So it's really Spanish architecture!"
    }
  },
  {
    id: 10,
    category: "us-state-history",
    question: "Why didn't church bells ring as an alarm during the Great New Orleans Fire of March 21, 1788?",
    year: 1788,
    eric: {
      options: [
        "The bells had been removed for recasting",
        "It was Good Friday and priests refused to ring them",
        "The bell towers were the first structures to burn",
        "Spanish colonial law prohibited non-liturgical bell-ringing"
      ],
      correct: 1,
      explanation: "March 21, 1788 was Good Friday. The priests refused to ring the church bells as a fire alarm because of the solemnity of the holy day."
    },
    ruth: {
      options: [
        "It was Good Friday and the priests said no",
        "The bells were on holiday",
        "Someone had filled the bells with pudding",
        "The bell-ringers were all at brunch"
      ],
      correct: 0,
      explanation: "It was Good Friday! The priests refused to ring the bells, even with the city on fire. Priorities!"
    }
  },
  {
    id: 11,
    category: "us-state-history",
    question: "The Great New Orleans Fire (March 21, 1788) started at 619 Chartres Street. Whose home was this?",
    year: 1788,
    eric: {
      options: [
        "Don Vincente Jose Nunez",
        "Don Vicente Jose Nunez",
        "Don Vincente Jose Nuñez",
        "All of these are variant spellings of the same person"
      ],
      correct: 3,
      explanation: "The fire started at the home of Don Vincente Jose Nunez. All four options are variant spellings found in historical records — the accents and letter variations reflect differences between English and Spanish transliteration."
    },
    ruth: {
      options: [
        "Don Vincente Jose Nunez",
        "Don Vincente Jose's Pizza Parlour",
        "A dragon named Gerald",
        "Nobody lived there; the fire started itself"
      ],
      correct: 0,
      explanation: "The fire started at the home of Don Vincente Jose Nunez, at 619 Chartres Street."
    }
  },
  {
    id: 12,
    category: "us-state-history",
    question: "How long did it take for the Great New Orleans Fire (March 21, 1788) to spread through the city?",
    year: 1788,
    eric: {
      options: ["3 hours", "5 hours", "8 hours", "12 hours"],
      correct: 1,
      explanation: "The fire spread through the city in approximately 5 hours, destroying 856 structures. The combination of wind, wooden buildings, and the refusal to ring alarm bells all contributed."
    },
    ruth: {
      options: ["About 5 hours", "5 minutes — it was very speedy fire", "5 years — it was very slow fire", "It's still going"],
      correct: 0,
      explanation: "The fire tore through the city in about 5 hours, destroying most of New Orleans."
    }
  },
  {
    id: 13,
    category: "us-state-history",
    question: "On March 21, 1965, how many marchers set out from Selma to Montgomery?",
    year: 1965,
    eric: {
      options: ["2,500", "3,200", "4,000", "5,000"],
      correct: 1,
      explanation: "3,200 marchers set out on March 21, 1965. By the time they reached Montgomery on March 25, the crowd had swelled to 25,000."
    },
    ruth: {
      options: ["3,200", "Just the one, but he was very determined", "A million billion", "Enough to fill a really long queue"],
      correct: 0,
      explanation: "3,200 brave people set out from Selma, and by the time they reached Montgomery, 25,000 had joined them!"
    }
  },
  {
    id: 14,
    category: "us-state-history",
    question: "The Selma to Montgomery march (starting March 21, 1965) covered how many miles over how many days?",
    year: 1965,
    eric: {
      options: ["48 miles over 4 days", "54 miles over 5 days", "54 miles over 4 days", "58 miles over 5 days"],
      correct: 1,
      explanation: "The march covered 54 miles over 5 days, departing March 21 and arriving March 25, 1965."
    },
    ruth: {
      options: ["54 miles over 5 days", "54 inches over 5 minutes", "Around the block, but they took the scenic route", "Nobody counted — they were too busy marching"],
      correct: 0,
      explanation: "The marchers walked 54 miles over 5 days from Selma to Montgomery, Alabama."
    }
  },
  {
    id: 15,
    category: "us-state-history",
    question: "The failed first attempt at the Selma to Montgomery march, known as 'Bloody Sunday,' occurred on what date?",
    year: 1965,
    eric: {
      options: ["March 5, 1965", "March 7, 1965", "March 9, 1965", "March 14, 1965"],
      correct: 1,
      explanation: "'Bloody Sunday' was March 7, 1965. A second attempt on March 9 ('Turnaround Tuesday') also turned back. The successful march began March 21."
    },
    ruth: {
      options: ["March 7, 1965", "A very sad Sunday", "The Sunday before the Monday after the Friday", "Sundays aren't bloody, they're for roast dinners"],
      correct: 0,
      explanation: "'Bloody Sunday' was March 7, 1965, when police attacked peaceful marchers on the Edmund Pettus Bridge."
    }
  },
  {
    id: 16,
    category: "us-state-history",
    question: "The Selma to Montgomery march (March 21, 1965) directly led to which legislation?",
    year: 1965,
    eric: {
      options: [
        "Civil Rights Act of 1965",
        "Voting Rights Act of 1965",
        "Civil Rights Act of 1964",
        "Equal Rights Amendment of 1965"
      ],
      correct: 1,
      explanation: "The march directly led to the Voting Rights Act, signed August 6, 1965. The Civil Rights Act was 1964. There was no Equal Rights Amendment in 1965."
    },
    ruth: {
      options: [
        "The Voting Rights Act",
        "The Right to March Act",
        "The Comfortable Shoes for Marchers Act",
        "The Please Be Nice to Everyone Act"
      ],
      correct: 0,
      explanation: "The march helped lead to the Voting Rights Act of 1965, one of the most important civil rights laws ever passed."
    }
  },
  {
    id: 17,
    category: "us-state-history",
    question: "On March 21, 1946, Kenny Washington signed with the LA Rams. What barrier did this break?",
    year: 1946,
    eric: {
      options: [
        "First African-American to play in the NFL",
        "First African-American to sign an NFL contract in the modern era",
        "First African-American to sign a professional football contract",
        "First African-American to play for a West Coast NFL team"
      ],
      correct: 1,
      explanation: "Washington was the first African-American to sign an NFL contract in the modern era, breaking a 13-year color barrier. African-Americans had played in the early NFL, so he wasn't the absolute first."
    },
    ruth: {
      options: [
        "He was the first Black player in the modern NFL",
        "He was the first person named Kenny in any sport",
        "He broke the barrier between the kitchen and the living room",
        "He broke the land speed record while carrying a football"
      ],
      correct: 0,
      explanation: "Kenny Washington broke the NFL's 13-year color barrier — even before Jackie Robinson broke baseball's!"
    }
  },
  {
    id: 18,
    category: "us-state-history",
    question: "Kenny Washington's NFL signing (March 21, 1946) preceded which other famous barrier-breaking moment?",
    year: 1946,
    eric: {
      options: [
        "Jackie Robinson's MLB debut by about 6 months",
        "Jackie Robinson's MLB debut by about a year",
        "Larry Doby's AL debut by about a year",
        "Jackie Robinson's minor league debut by about a month"
      ],
      correct: 1,
      explanation: "Washington signed March 21, 1946. Jackie Robinson's MLB debut was April 15, 1947 — about a year later. Robinson did play in the minor leagues in 1946, but his MLB debut was 1947."
    },
    ruth: {
      options: [
        "Jackie Robinson's baseball debut, by about a year",
        "The invention of the forward pass",
        "The moon landing, by quite a lot",
        "Breakfast"
      ],
      correct: 0,
      explanation: "Kenny Washington broke the NFL color barrier about a year before Jackie Robinson broke baseball's. A true pioneer!"
    }
  },
  {
    id: 19,
    category: "us-state-history",
    question: "How long had the NFL's color barrier been in place when Kenny Washington signed on March 21, 1946?",
    year: 1946,
    eric: {
      options: ["11 years", "12 years", "13 years", "14 years"],
      correct: 2,
      explanation: "The NFL's color barrier had been in place for 13 years when Washington signed in 1946. The last African-American players before the ban had played in 1933."
    },
    ruth: {
      options: ["13 years", "About a week", "Since the dinosaurs", "Nobody was counting because it was ridiculous"],
      correct: 0,
      explanation: "The NFL had kept Black players out for 13 years before Kenny Washington bravely broke through!"
    }
  },
  {
    id: 20,
    category: "us-state-history",
    question: "New Orleans had a second great fire after the March 21, 1788 one. When was it, and how many buildings were destroyed?",
    year: 1788,
    eric: {
      options: [
        "1792 — 180 buildings",
        "1794 — 212 buildings",
        "1794 — 250 buildings",
        "1796 — 212 buildings"
      ],
      correct: 1,
      explanation: "The second great fire was in 1794, destroying 212 buildings. Combined with the 856 destroyed in 1788, the city was almost entirely rebuilt in the Spanish colonial style."
    },
    ruth: {
      options: [
        "1794 — another 212 buildings",
        "There wasn't one, they learned their lesson",
        "Every Tuesday, actually",
        "1794 — but just the one building, repeatedly"
      ],
      correct: 0,
      explanation: "Poor New Orleans had ANOTHER big fire in 1794, losing 212 more buildings. At least the rebuilding gave us that beautiful architecture!"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // US STATES ATTRIBUTES (~12 questions)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 21,
    category: "us-states-attributes",
    question: "Nevada's motto is 'Battle Born.' What does this refer to?",
    year: 1864,
    eric: {
      options: [
        "It was admitted during the Mexican-American War",
        "It was admitted during the Civil War",
        "It was named after a battle between settlers and Native Americans",
        "It was the site of a territorial border war with Utah"
      ],
      correct: 1,
      explanation: "Nevada was admitted as a state on October 31, 1864, during the Civil War. The motto 'Battle Born' refers to its birth during wartime."
    },
    ruth: {
      options: [
        "Nevada became a state during the Civil War",
        "Nevadans are born ready to fight",
        "There was a big battle about what to name it",
        "It was born in a battle royale with Arizona"
      ],
      correct: 0,
      explanation: "Nevada was born during the Civil War in 1864, so it's the 'Battle Born' state!"
    }
  },
  {
    id: 22,
    category: "us-states-attributes",
    question: "Tennessee is known as the 'Volunteer State.' The Butler Act (March 21, 1925) was passed there. What is the state capital?",
    year: 1925,
    eric: {
      options: ["Memphis", "Nashville", "Knoxville", "Chattanooga"],
      correct: 1,
      explanation: "Nashville is the capital of Tennessee. Memphis is the largest city, Knoxville was the original capital, and Chattanooga is the fourth-largest city."
    },
    ruth: {
      options: ["Nashville", "Nashvegas", "Dolly Parton's Living Room", "Tennessington"],
      correct: 0,
      explanation: "Nashville is Tennessee's capital — home of country music and very important laws about monkeys!"
    }
  },
  {
    id: 23,
    category: "us-states-attributes",
    question: "Louisiana, home of New Orleans (Great Fire of March 21, 1788), is unique among US states for what legal distinction?",
    year: 1788,
    eric: {
      options: [
        "It uses parishes instead of counties and bases its civil law on the Napoleonic Code",
        "It uses parishes instead of counties and bases its civil law on English common law",
        "It uses counties but bases its civil law on the Napoleonic Code",
        "It uses parishes instead of counties and bases its civil law on Spanish colonial law"
      ],
      correct: 0,
      explanation: "Louisiana uses parishes (not counties) and its civil law is based on the Napoleonic Code — a connection to its French heritage, even though the 'French Quarter' was rebuilt under Spanish rule!"
    },
    ruth: {
      options: [
        "It uses parishes instead of counties",
        "It's the only state shaped like a boot (wait, that's Italy)",
        "Laws are written in jazz notation",
        "All legal disputes are settled by cooking competitions"
      ],
      correct: 0,
      explanation: "Louisiana uses 'parishes' instead of 'counties' — the only US state to do so! It comes from its French and Spanish colonial heritage."
    }
  },
  {
    id: 24,
    category: "us-states-attributes",
    question: "Alabama, where the Selma to Montgomery march ended on March 25, 1965, has what state motto?",
    year: 1965,
    eric: {
      options: [
        "Audemus jura nostra defendere (We dare defend our rights)",
        "Audemus jura nostra protegere (We dare protect our rights)",
        "Deus nobis fidem praestat (God grants us faith)",
        "Fortiter defendit triumphans (Triumphing by brave defense)"
      ],
      correct: 0,
      explanation: "Alabama's motto is 'Audemus jura nostra defendere' — 'We dare defend our rights.' The other Latin phrases are fabricated but plausible-sounding alternatives."
    },
    ruth: {
      options: [
        "We Dare Defend Our Rights",
        "We Dare Eat Our Barbecue",
        "Sweet Home, Obviously",
        "Roll Tide (unofficial but more popular)"
      ],
      correct: 0,
      explanation: "Alabama's motto is 'We Dare Defend Our Rights.' Though 'Roll Tide' might be more widely known!"
    }
  },
  {
    id: 25,
    category: "us-states-attributes",
    question: "The Voting Rights Act (prompted by the March 21, 1965 march) was signed on what date?",
    year: 1965,
    eric: {
      options: ["July 6, 1965", "August 6, 1965", "August 10, 1965", "September 6, 1965"],
      correct: 1,
      explanation: "The Voting Rights Act was signed by President Johnson on August 6, 1965. The Selma march began March 21, and the Act was passed less than 5 months later."
    },
    ruth: {
      options: [
        "August 6, 1965",
        "The same day — Congress was very speedy",
        "They're still working on it",
        "August 6, 1965 BC (they were ahead of their time)"
      ],
      correct: 0,
      explanation: "President Johnson signed the Voting Rights Act on August 6, 1965, just months after the Selma march."
    }
  },
  {
    id: 26,
    category: "us-states-attributes",
    question: "Nevada (Enabling Act signed March 21, 1864) gets its name from 'Sierra Nevada.' What does 'nevada' mean in Spanish?",
    year: 1864,
    eric: {
      options: ["Snow-covered", "Silver-laden", "Sun-baked", "Dust-covered"],
      correct: 0,
      explanation: "'Nevada' means 'snow-covered' in Spanish, from 'Sierra Nevada' (snow-covered mountain range). Despite Las Vegas's desert heat, the state's name references its snowy mountains."
    },
    ruth: {
      options: [
        "Snow-covered",
        "Full of casinos",
        "Very hot and sandy",
        "Land of the all-you-can-eat buffet"
      ],
      correct: 0,
      explanation: "'Nevada' means 'snow-covered' in Spanish! Ironic for a state famous for its desert, but the Sierra Nevada mountains really are snowy."
    }
  },
  {
    id: 27,
    category: "us-states-attributes",
    question: "The French Quarter, rebuilt after the March 21, 1788 fire, is in which Louisiana parish?",
    year: 1788,
    eric: {
      options: ["Orleans Parish", "Jefferson Parish", "St. Bernard Parish", "Plaquemines Parish"],
      correct: 0,
      explanation: "The French Quarter is in Orleans Parish. Jefferson Parish borders it to the west, St. Bernard to the east, and Plaquemines is south of St. Bernard."
    },
    ruth: {
      options: [
        "Orleans Parish",
        "The Parish of Good Food",
        "Jazz Parish",
        "Mardi Gras Parish"
      ],
      correct: 0,
      explanation: "The French Quarter is in Orleans Parish. Louisiana uses parishes instead of counties!"
    }
  },
  {
    id: 28,
    category: "us-states-attributes",
    question: "The Selma to Montgomery march (March 21, 1965) crossed the Edmund Pettus Bridge. In which Alabama county is Selma?",
    year: 1965,
    eric: {
      options: ["Dallas County", "Montgomery County", "Marengo County", "Perry County"],
      correct: 0,
      explanation: "Selma is in Dallas County, Alabama. Montgomery County is where the march ended. Marengo and Perry are neighboring counties."
    },
    ruth: {
      options: [
        "Dallas County",
        "Dallas, Texas (wrong Dallas!)",
        "The County of Marching",
        "Bridge County"
      ],
      correct: 0,
      explanation: "Selma is in Dallas County, Alabama — not to be confused with Dallas, Texas!"
    }
  },
  {
    id: 29,
    category: "us-states-attributes",
    question: "On March 21, 1788, New Orleans burned. Today, Louisiana is the only US state whose legal system is based on what?",
    year: 1788,
    eric: {
      options: [
        "The Napoleonic Code exclusively",
        "A mix of Napoleonic Code and common law",
        "Spanish colonial law",
        "French civil law predating the Napoleonic Code"
      ],
      correct: 1,
      explanation: "Louisiana's legal system is a mix of Napoleonic Code (civil law) and Anglo-American common law. It's not purely Napoleonic — English common law was layered in after the Louisiana Purchase."
    },
    ruth: {
      options: [
        "The Napoleonic Code (mixed with common law)",
        "Rock, paper, scissors",
        "Whoever makes the best gumbo wins the case",
        "They just ask a crawfish"
      ],
      correct: 0,
      explanation: "Louisiana's law is based on the Napoleonic Code mixed with common law — unique in the US thanks to its French heritage!"
    }
  },
  {
    id: 30,
    category: "us-states-attributes",
    question: "Nevada became 'Battle Born' thanks to the March 21, 1864 Enabling Act. Which side of the Civil War was Nevada admitted to support?",
    year: 1864,
    eric: {
      options: [
        "The Union — as a free state",
        "The Union — as a state with no position on slavery",
        "The Confederacy — Nevada was a slave state",
        "Neither — it was admitted as a neutral territory"
      ],
      correct: 0,
      explanation: "Nevada was admitted as a free state supporting the Union. Lincoln specifically wanted Nevada's support for the war effort and for ratification of the 13th Amendment."
    },
    ruth: {
      options: [
        "The Union (the North)",
        "The side with the better hats",
        "Neither — Nevada was neutral and just wanted to gamble",
        "Both sides, to keep its options open"
      ],
      correct: 0,
      explanation: "Nevada joined the Union side. Lincoln wanted its support for the Civil War and to abolish slavery!"
    }
  },
  {
    id: 31,
    category: "us-states-attributes",
    question: "The marchers on March 21, 1965 were protected by federalized National Guard troops. Who ordered their deployment?",
    year: 1965,
    eric: {
      options: [
        "President Johnson",
        "Governor Wallace",
        "Attorney General Katzenbach",
        "Secretary of Defense McNamara"
      ],
      correct: 0,
      explanation: "President Lyndon B. Johnson federalized the Alabama National Guard to protect the marchers, taking them out of the control of segregationist Governor George Wallace."
    },
    ruth: {
      options: [
        "President Johnson",
        "Captain America",
        "The marchers' mums",
        "A very stern letter was sent instead"
      ],
      correct: 0,
      explanation: "President Johnson sent in the National Guard to protect the marchers from violence."
    }
  },
  {
    id: 32,
    category: "us-states-attributes",
    question: "The Great Fire of March 21, 1788 happened on Good Friday. What style was New Orleans rebuilt in?",
    year: 1788,
    eric: {
      options: [
        "French colonial style, preserving the original aesthetic",
        "Spanish colonial style, reflecting the ruling power",
        "American Federal style, anticipating US purchase",
        "A mixture of French and Spanish colonial styles"
      ],
      correct: 1,
      explanation: "New Orleans was rebuilt in Spanish colonial style because Spain was the colonial power at the time. This is why the 'French Quarter' is architecturally Spanish, not French."
    },
    ruth: {
      options: [
        "Spanish colonial style (despite being called the French Quarter!)",
        "French Quarter style (it's right there in the name)",
        "IKEA flat-pack",
        "Whatever was on sale at the time"
      ],
      correct: 0,
      explanation: "The 'French Quarter' was rebuilt in Spanish style because Spain ruled New Orleans in 1788! The name is misleading!"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BRIDGE (~12 questions)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 33,
    category: "bridge",
    question: "Contract bridge was invented in 1925 — the same year the Butler Act was signed (March 21). Who invented it?",
    year: 1925,
    eric: {
      options: ["Ely Culbertson", "Harold Vanderbilt", "Charles Goren", "Milton Work"],
      correct: 1,
      explanation: "Harold Vanderbilt invented contract bridge in 1925 aboard the SS Finland. Culbertson popularized it, Goren later dominated it, and Work developed the point-count system."
    },
    ruth: {
      options: [
        "Harold Vanderbilt",
        "The Bridge Fairy",
        "A man who was very bored on a boat",
        "Both B and C, actually"
      ],
      correct: 0,
      explanation: "Harold Vanderbilt invented contract bridge while on a cruise ship. Being rich and bored leads to great card games!"
    }
  },
  {
    id: 34,
    category: "bridge",
    question: "Harold Vanderbilt invented contract bridge in 1925 aboard which ship?",
    year: 1925,
    eric: {
      options: ["SS France", "SS Finland", "SS Franconia", "SS Florida"],
      correct: 1,
      explanation: "Contract bridge was devised aboard the SS Finland during a cruise from Los Angeles to Havana. The other ships are real vessels but were not the location."
    },
    ruth: {
      options: [
        "SS Finland",
        "The Titanic (too soon?)",
        "A rubber dinghy named Kevin",
        "He wasn't on a ship; he was on a very large duck"
      ],
      correct: 0,
      explanation: "Vanderbilt was aboard the SS Finland. Nothing like a long sea voyage to inspire a new card game!"
    }
  },
  {
    id: 35,
    category: "bridge",
    question: "In contract bridge, how are the four suits ranked from highest to lowest in bidding?",
    year: 1925,
    eric: {
      options: [
        "Spades, Hearts, Diamonds, Clubs",
        "Hearts, Spades, Diamonds, Clubs",
        "Spades, Diamonds, Hearts, Clubs",
        "Hearts, Diamonds, Spades, Clubs"
      ],
      correct: 0,
      explanation: "The suit ranking is Spades (highest), Hearts, Diamonds, Clubs (lowest). No trump outranks all suits. An easy mnemonic: alphabetical in reverse."
    },
    ruth: {
      options: [
        "Spades, Hearts, Diamonds, Clubs",
        "Spades, Hearts, Diamonds, Clubs",
        "Spades, Hearts, Diamonds, Clubs",
        "Spades, Hearts, Diamonds, Clubs"
      ],
      correct: 0,
      explanation: "They're all the same answer! Happy birthday, Eric — have a free point!"
    }
  },
  {
    id: 36,
    category: "bridge",
    question: "In bridge, a 'grand slam' means winning how many of the 13 possible tricks?",
    year: 1925,
    eric: {
      options: ["11", "12", "13", "All tricks plus a bonus trick"],
      correct: 2,
      explanation: "A grand slam is winning all 13 tricks. A small slam is 12 tricks. There's no such thing as a bonus trick."
    },
    ruth: {
      options: [
        "All 13 tricks",
        "All 13 tricks",
        "All 13 tricks",
        "All 13 tricks"
      ],
      correct: 0,
      explanation: "Another freebie! A grand slam means winning all 13 tricks. Eric probably knew that before he could walk!"
    }
  },
  {
    id: 37,
    category: "bridge",
    question: "A 'yarborough' in bridge is a hand with no card above what rank?",
    year: 1925,
    eric: {
      options: ["8", "9", "10", "Jack"],
      correct: 1,
      explanation: "A yarborough has no card above 9. Named after Lord Yarborough, who reportedly bet 1,000 to 1 against being dealt one. The true odds are approximately 1,827 to 1."
    },
    ruth: {
      options: [
        "9 — a truly rubbish hand",
        "The Queen (nobody's above the Queen)",
        "It's a type of small boat",
        "A yarborough is a village in Yorkshire"
      ],
      correct: 0,
      explanation: "A yarborough is a hand where your highest card is a 9. Absolutely dreadful! Named after a lord who bet on getting one."
    }
  },
  {
    id: 38,
    category: "bridge",
    question: "Lord Yarborough offered 1,000:1 against being dealt a yarborough. What are the true odds?",
    year: 1925,
    eric: {
      options: ["1,287:1", "1,547:1", "1,827:1", "2,107:1"],
      correct: 2,
      explanation: "The true odds against a yarborough are approximately 1,827:1. Lord Yarborough had a healthy edge offering only 1,000:1!"
    },
    ruth: {
      options: [
        "About 1,827 to 1 — so Lord Yarborough was making money!",
        "50/50, like everything in life",
        "The same odds as finding matching socks",
        "Mathematicians are still arguing about it"
      ],
      correct: 0,
      explanation: "The odds are about 1,827 to 1. Lord Yarborough offered 1,000 to 1, so he was quietly making a profit!"
    }
  },
  {
    id: 39,
    category: "bridge",
    question: "Charles Goren, who dominated bridge in the mid-20th century, was born on March 4, 1901. How close to March 21?",
    year: 1901,
    eric: {
      options: ["15 days", "17 days", "19 days", "21 days"],
      correct: 1,
      explanation: "Goren was born March 4, 1901 — exactly 17 days before March 21. He became known as 'Mr. Bridge' and popularised the point-count bidding system."
    },
    ruth: {
      options: [
        "17 days — almost a birthday twin!",
        "Close enough to share a cake",
        "Exactly the right distance for a birthday buddy",
        "All of the above"
      ],
      correct: 0,
      explanation: "Goren was born just 17 days before Eric's birthday! Almost a birthday twin for the birthday boy!"
    }
  },
  {
    id: 40,
    category: "bridge",
    question: "The 1965 Reese-Schapiro cheating scandal occurred at the Bermuda Bowl. What were they accused of?",
    year: 1965,
    eric: {
      options: [
        "Using coded verbal signals during bidding",
        "Finger-signaling heart holdings to each other",
        "Using marked cards with subtle variations",
        "Receiving signals from a confederate in the audience"
      ],
      correct: 1,
      explanation: "Terence Reese and Boris Schapiro were accused of using finger signals to communicate their heart holdings. The scandal rocked the 1965 Bermuda Bowl in Buenos Aires."
    },
    ruth: {
      options: [
        "Sending secret signals with their fingers",
        "Hiding cards up their sleeves (see: cards category)",
        "Using a very small periscope",
        "Telepathy (unproven)"
      ],
      correct: 0,
      explanation: "They were accused of wiggling their fingers in specific ways to tell each other about their heart cards. Very sneaky!"
    }
  },
  {
    id: 41,
    category: "bridge",
    question: "The Reese-Schapiro scandal took place at the 1965 Bermuda Bowl in which city?",
    year: 1965,
    eric: {
      options: ["São Paulo", "Buenos Aires", "Rio de Janeiro", "Montevideo"],
      correct: 1,
      explanation: "The 1965 Bermuda Bowl was held in Buenos Aires, Argentina. The Reese-Schapiro finger-signaling accusation became the biggest scandal in bridge history."
    },
    ruth: {
      options: [
        "Buenos Aires",
        "Buenos Nachos",
        "Bridge City (population: people who take cards too seriously)",
        "Bermuda (it's in the name, right? ...wrong!)"
      ],
      correct: 0,
      explanation: "It was in Buenos Aires! The Bermuda Bowl is named after Bermuda where it was first held, but it moves around the world."
    }
  },
  {
    id: 42,
    category: "bridge",
    question: "The ACBL (American Contract Bridge League) was founded in which year?",
    year: 1937,
    eric: {
      options: ["1935", "1937", "1939", "1941"],
      correct: 1,
      explanation: "The ACBL was founded in 1937. It remains the largest bridge organization in North America."
    },
    ruth: {
      options: [
        "1937",
        "The year bridge was invented (nope, that was 1925)",
        "Before the internet, when people had to entertain themselves with cards",
        "Honestly, who's counting?"
      ],
      correct: 0,
      explanation: "The ACBL was founded in 1937 and has been organizing bridge tournaments ever since!"
    }
  },
  {
    id: 43,
    category: "bridge",
    question: "Duplicate bridge differs from rubber bridge primarily because it:",
    year: 1925,
    eric: {
      options: [
        "Uses two decks of cards simultaneously",
        "Eliminates the luck of the deal by having all pairs play the same hands",
        "Allows players to choose their partners between rounds",
        "Uses a modified scoring system with no trick points"
      ],
      correct: 1,
      explanation: "Duplicate bridge has all pairs play the same pre-dealt hands, eliminating the luck of the deal. This makes it a fairer test of skill."
    },
    ruth: {
      options: [
        "Everyone plays the same cards, so it's about skill not luck",
        "You have to play it twice (hence 'duplicate')",
        "You need two bridges",
        "Everything is doubled, including the arguments"
      ],
      correct: 0,
      explanation: "In duplicate bridge, every pair plays the same hands. This means the best players win, not the luckiest!"
    }
  },
  {
    id: 44,
    category: "bridge",
    question: "Who popularized contract bridge in the 1930s through media, books, and famous challenge matches?",
    year: 1930,
    eric: {
      options: ["Harold Vanderbilt", "Charles Goren", "Ely Culbertson", "P. Hal Sims"],
      correct: 2,
      explanation: "Ely Culbertson popularized contract bridge in the 1930s. Vanderbilt invented it, Goren dominated it later, and Sims was Culbertson's famous rival."
    },
    ruth: {
      options: [
        "Ely Culbertson",
        "The Bridge Marketing Board",
        "A very enthusiastic grandmother",
        "It just sort of... happened"
      ],
      correct: 0,
      explanation: "Ely Culbertson turned bridge into a national craze in the 1930s through books, radio, and publicity stunts!"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CARDS (~12 questions)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 45,
    category: "cards",
    question: "The classic card cheating manual 'The Expert at the Card Table' was published in 1902. Who wrote it?",
    year: 1902,
    eric: {
      options: [
        "S.W. Erdnase — whose real identity remains unknown",
        "S.W. Erdnase — later identified as Milton Andrews",
        "S.W. Erdnase — later identified as E.S. Andrews",
        "S.W. Erdnase — a confirmed pseudonym of Dai Vernon"
      ],
      correct: 0,
      explanation: "S.W. Erdnase's true identity remains one of magic's greatest unsolved mysteries. Various researchers have proposed candidates (including Milton Andrews), but none has been definitively proven."
    },
    ruth: {
      options: [
        "A mysterious person using the name S.W. Erdnase — nobody knows who they really were!",
        "The Queen of England (she had hobbies)",
        "A magician called 'Dave the Deceiver'",
        "It wrote itself — very mysterious book"
      ],
      correct: 0,
      explanation: "Nobody knows who S.W. Erdnase really was! It's one of the greatest mysteries in the world of magic and card tricks."
    }
  },
  {
    id: 46,
    category: "cards",
    question: "Dai Vernon, 'The Professor,' was the most influential close-up magician of the 20th century. When did he live?",
    year: 1894,
    eric: {
      options: ["1894–1992", "1896–1990", "1894–1990", "1896–1992"],
      correct: 0,
      explanation: "Dai Vernon lived from 1894 to 1992, reaching the age of 98. He was born in Ottawa, Canada, and spent his final decades as resident magician at the Magic Castle in Hollywood."
    },
    ruth: {
      options: [
        "1894 to 1992 — he lived to 98!",
        "He's still alive (magicians never die, they just disappear)",
        "1894 to 1992 — he lived to 98!",
        "1894 to 1992 — he lived to 98!"
      ],
      correct: 0,
      explanation: "Dai Vernon lived to the grand age of 98! He spent decades as the resident genius at the Magic Castle in Hollywood."
    }
  },
  {
    id: 47,
    category: "cards",
    question: "Richard Turner is considered possibly the greatest card mechanic alive. What makes his skill especially remarkable?",
    year: 2006,
    eric: {
      options: [
        "He is completely blind",
        "He is legally blind",
        "He has no feeling in his fingertips",
        "He performs only with his non-dominant hand"
      ],
      correct: 1,
      explanation: "Richard Turner is legally blind, which makes his extraordinary card handling even more remarkable. He is not completely blind — he has some very limited vision."
    },
    ruth: {
      options: [
        "He's legally blind!",
        "He does it all with his feet",
        "He's actually three children in a trenchcoat",
        "His cards are made of live bees"
      ],
      correct: 0,
      explanation: "Richard Turner can do impossible things with cards despite being legally blind. He's truly astonishing!"
    }
  },
  {
    id: 48,
    category: "cards",
    question: "In card cheating, a 'second deal' refers to what technique?",
    year: 1902,
    eric: {
      options: [
        "Dealing two cards as one to a target player",
        "Dealing the second card from the top instead of the first",
        "Dealing the second round of cards before the first is complete",
        "Dealing the bottom card while appearing to deal from the top"
      ],
      correct: 1,
      explanation: "A second deal means dealing the second card from the top instead of the top card, which the cheat retains for themselves or a confederate. Dealing from the bottom is called a 'bottom deal.'"
    },
    ruth: {
      options: [
        "Sneakily dealing the second card instead of the top card",
        "Asking 'would you like to be dealt again?'",
        "Dealing a second time because the first time didn't go well",
        "Dealing with your second-favourite hand"
      ],
      correct: 0,
      explanation: "A second deal is when a cheat secretly deals the second card from the top, keeping the top card for themselves. Sneaky!"
    }
  },
  {
    id: 49,
    category: "cards",
    question: "The 'mechanic's grip' in card handling is a way of holding the deck that allows a cheat to:",
    year: 1902,
    eric: {
      options: [
        "Peek at the top card while appearing natural",
        "Control the deal of top and bottom cards",
        "Mark cards with a thumbnail during play",
        "Palm cards off the top of the deck"
      ],
      correct: 1,
      explanation: "The mechanic's grip positions the fingers to enable bottom deals, second deals, and other sleight-of-hand moves while appearing natural."
    },
    ruth: {
      options: [
        "Cheat at dealing cards",
        "Fix a car engine while playing poker",
        "Hold the cards so they don't get grease on them",
        "It's just a normal way to hold cards (it isn't)"
      ],
      correct: 0,
      explanation: "The mechanic's grip lets a cheat secretly control which cards they deal. Named because your hand looks like it's gripping a tool!"
    }
  },
  {
    id: 50,
    category: "cards",
    question: "What are the standard dimensions of a playing card?",
    year: 1902,
    eric: {
      options: [
        "3.5 × 2.25 inches",
        "3.5 × 2.5 inches",
        "3.75 × 2.5 inches",
        "3.5 × 2.375 inches"
      ],
      correct: 1,
      explanation: "A standard poker-size playing card is 3.5 × 2.5 inches (89 × 64 mm). Bridge-size cards are slightly narrower at 3.5 × 2.25 inches."
    },
    ruth: {
      options: [
        "3.5 by 2.5 inches",
        "One card wide by one card tall",
        "Roughly the size of a small hamster",
        "It depends on how hard you squint"
      ],
      correct: 0,
      explanation: "A standard playing card is 3.5 by 2.5 inches. Now you know, in case you ever need to measure one!"
    }
  },
  {
    id: 51,
    category: "cards",
    question: "Victorian-era card cheats used 'holdout' devices. What were these?",
    year: 1902,
    eric: {
      options: [
        "Mechanical devices hidden in the table to swap cards",
        "Mechanical devices hidden up the sleeve to secretly deliver or store cards",
        "Special card cases that could switch decks mid-game",
        "Mirrors concealed in rings to read card faces"
      ],
      correct: 1,
      explanation: "Sleeve holdout devices were mechanical contraptions hidden up the sleeve that could store a card and deliver it to the cheat's hand at the right moment."
    },
    ruth: {
      options: [
        "Gadgets hidden up your sleeve to sneak cards in and out",
        "A very small assistant hidden under the table",
        "Cards hidden up your sleeve (the old-fashioned way)",
        "Both A and C, really"
      ],
      correct: 0,
      explanation: "Holdout devices were actual mechanical gadgets hidden up your sleeve! The Victorians took their cheating very seriously."
    }
  },
  {
    id: 52,
    category: "cards",
    question: "Card cheats use several methods to mark cards during play. Which of these is a real technique?",
    year: 1902,
    eric: {
      options: [
        "Shading — subtly adding ink to the card back pattern",
        "Daubing — applying a small amount of pigment during play",
        "Crimping — bending a corner to identify a card by feel",
        "All of these are real card-marking techniques"
      ],
      correct: 3,
      explanation: "Shading, daubing, and crimping are all genuine card-marking techniques used by cheats. Shading alters the back design, daubing adds marks during play, and crimping creates tactile markers."
    },
    ruth: {
      options: [
        "All of them! Shading, daubing, and crimping are all real",
        "All of them! Shading, daubing, and crimping are all real",
        "All of them! Shading, daubing, and crimping are all real",
        "All of them! Shading, daubing, and crimping are all real"
      ],
      correct: 0,
      explanation: "Freebie! Shading, daubing, and crimping are all real ways to mark cards. Card cheats are endlessly creative!"
    }
  },
  {
    id: 53,
    category: "cards",
    question: "The 'Duke of Cumberland's hand' is a famous story in card history. What is it about?",
    year: 1902,
    eric: {
      options: [
        "A historically documented hand where the Duke lost a fortune",
        "An apocryphal story of a rigged deal designed to lose spectacularly",
        "A hand so good it was used to demonstrate perfect play",
        "A real hand from a 1750 royal card game, preserved in court records"
      ],
      correct: 1,
      explanation: "The Duke of Cumberland's hand is an apocryphal (likely fictional) story of a rigged deal where the Duke was set up with a seemingly unbeatable hand but still lost."
    },
    ruth: {
      options: [
        "A story (probably made up) about a Duke being tricked at cards",
        "The Duke had very large hands and kept dropping cards",
        "A hand so bad it made the Duke cry",
        "Nobody remembers, it was ages ago"
      ],
      correct: 0,
      explanation: "It's a famous story — probably fictional — about a Duke who thought he had an unbeatable hand but was outwitted by a card sharp!"
    }
  },
  {
    id: 54,
    category: "cards",
    question: "How many cards are in a standard deck, as used in both bridge and poker?",
    year: 1902,
    eric: {
      options: ["48", "52", "52 plus 2 jokers", "54"],
      correct: 1,
      explanation: "A standard deck contains exactly 52 cards (4 suits × 13 ranks). While jokers are sometimes included in the box, the standard deck is 52. Bridge and poker both use 52 cards."
    },
    ruth: {
      options: [
        "52",
        "52",
        "52",
        "52"
      ],
      correct: 0,
      explanation: "Another freebie! 52 cards in a standard deck. Eric could probably tell you this in his sleep!"
    }
  },
  {
    id: 55,
    category: "cards",
    question: "In bridge, all 52 cards are dealt to 4 players. How many cards does each player receive?",
    year: 1925,
    eric: {
      options: ["10", "12", "13", "14"],
      correct: 2,
      explanation: "Each of the 4 players receives 13 cards (52 ÷ 4 = 13). This is also why there are 13 possible tricks in each hand."
    },
    ruth: {
      options: [
        "13",
        "All of them (greedy)",
        "As many as they can grab",
        "It depends on the size of their hands"
      ],
      correct: 0,
      explanation: "Each player gets 13 cards. That's 52 divided by 4 — nice and even!"
    }
  },
  {
    id: 56,
    category: "cards",
    question: "What is a 'small slam' in bridge — how many tricks must you win?",
    year: 1925,
    eric: {
      options: ["10 tricks", "11 tricks", "12 tricks", "13 tricks"],
      correct: 2,
      explanation: "A small slam requires winning 12 of the 13 possible tricks. A grand slam requires all 13. Both earn significant bonus points."
    },
    ruth: {
      options: [
        "12 out of 13 tricks",
        "12 out of 13 tricks",
        "12 out of 13 tricks",
        "12 out of 13 tricks"
      ],
      correct: 0,
      explanation: "Freebie! A small slam is 12 tricks. A grand slam is all 13. Either way, very impressive!"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NSHEB (~15 questions)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 57,
    category: "nsheb",
    question: "The Cooper Committee, which led to the creation of NSHEB, was established in October 1941. Who set it up?",
    year: 1941,
    eric: {
      options: ["Winston Churchill", "Tom Johnston", "Lord Cooper", "Hugh Dalton"],
      correct: 1,
      explanation: "Tom Johnston, Secretary of State for Scotland, established the Cooper Committee in October 1941. Lord Cooper (the Lord Justice-Clerk) chaired it, but Johnston was the driving force behind its creation."
    },
    ruth: {
      options: [
        "Tom Johnston, Secretary of State for Scotland",
        "A man called Cooper (it's called the Cooper Committee!)",
        "The Scottish Hydro Board itself (chicken and egg situation)",
        "Nessie (the Loch Ness Monster had opinions about hydro power)"
      ],
      correct: 0,
      explanation: "Tom Johnston set up the committee! Lord Cooper chaired it, which is why it's called the Cooper Committee."
    }
  },
  {
    id: 58,
    category: "nsheb",
    question: "The Cooper Committee report of December 15, 1942 estimated how many separate hydro schemes were needed?",
    year: 1942,
    eric: {
      options: ["About 50", "About 60", "About 70", "About 80"],
      correct: 2,
      explanation: "The Cooper Committee estimated approximately 70 separate hydro schemes would be needed for the Highlands. The report was published on 15 December 1942."
    },
    ruth: {
      options: [
        "About 70",
        "Just the one big one (how hard can it be?)",
        "A million",
        "They lost count after ten"
      ],
      correct: 0,
      explanation: "The Cooper Committee estimated about 70 separate hydro schemes were needed. That's a LOT of dams and tunnels!"
    }
  },
  {
    id: 59,
    category: "nsheb",
    question: "The 1943 Hydro Act included a unique 'social clause.' What did it require the Board to pursue?",
    year: 1943,
    eric: {
      options: [
        "Economic development of the Highlands",
        "Social improvement of the Highlands",
        "Economic development and social improvement",
        "Rural electrification as a primary objective"
      ],
      correct: 2,
      explanation: "The social clause required the Board to pursue both 'economic development and social improvement.' This was unique in UK energy legislation and reflected Johnston's vision for the Highlands."
    },
    ruth: {
      options: [
        "Economic development and social improvement",
        "Making sure everyone had nice warm houses",
        "Providing electricity and good vibes",
        "All of the above, honestly"
      ],
      correct: 0,
      explanation: "The Board wasn't just about electricity — it had to improve Highland life! Unique in all UK energy legislation."
    }
  },
  {
    id: 60,
    category: "nsheb",
    question: "The 1943 Hydro Act received Royal Assent on August 5, 1943. What was notable about its passage through Parliament?",
    year: 1943,
    eric: {
      options: [
        "It passed without a single Division in either House",
        "It passed with only one Division, in the Commons",
        "It passed unanimously on a voice vote in both Houses",
        "It passed without debate under wartime emergency powers"
      ],
      correct: 0,
      explanation: "The Act passed without a single Division (formal vote) in either House of Parliament. This didn't mean no debate — it meant no one forced a vote against it."
    },
    ruth: {
      options: [
        "Nobody voted against it — not a single objection!",
        "It passed during a tea break and nobody noticed",
        "Churchill threatened to hold his breath until it passed",
        "Parliament was so bored they just said yes to everything that day"
      ],
      correct: 0,
      explanation: "The Act passed without a single formal vote against it in either House. Everyone agreed the Highlands needed power!"
    }
  },
  {
    id: 61,
    category: "nsheb",
    question: "Who was the first chairman of the NSHEB, and who succeeded as the dominant chairman?",
    year: 1943,
    eric: {
      options: [
        "Earl of Airlie, then Tom Johnston",
        "Tom Johnston, then Earl of Airlie",
        "Lord Cooper, then Tom Johnston",
        "Earl of Airlie, then Lord Cooper"
      ],
      correct: 0,
      explanation: "The Earl of Airlie was the first chairman. Tom Johnston then chaired the Board from 1945 to 1959, becoming its most influential leader."
    },
    ruth: {
      options: [
        "The Earl of Airlie first, then the legendary Tom Johnston",
        "Tom Johnston — he basically did everything",
        "A series of increasingly confused aristocrats",
        "Eric's granddad (wouldn't that be nice?)"
      ],
      correct: 0,
      explanation: "The Earl of Airlie was first chairman, then Tom Johnston took over in 1945 and ran things until 1959!"
    }
  },
  {
    id: 62,
    category: "nsheb",
    question: "Sir Edward MacColl was NSHEB's engineering driving force. What was his official title?",
    year: 1943,
    eric: {
      options: [
        "Chief Engineer",
        "Vice-Chairman and CEO",
        "Director of Engineering",
        "Chief Executive and Technical Director"
      ],
      correct: 1,
      explanation: "MacColl held the combined role of Vice-Chairman and CEO. He was the engineering driving force behind the Board's massive construction programme."
    },
    ruth: {
      options: [
        "Vice-Chairman and CEO",
        "Chief Dam Builder",
        "Lord of the Tunnels",
        "The Guy Who Actually Did All the Work"
      ],
      correct: 0,
      explanation: "MacColl was Vice-Chairman and CEO — the engineering genius behind all those incredible dams and tunnels."
    }
  },
  {
    id: 63,
    category: "nsheb",
    question: "Sir Edward MacColl died on July 15, 1951. What was tragic about the timing?",
    year: 1951,
    eric: {
      options: [
        "It was the day before the planned opening of Pitlochry",
        "It was the day of the Loch Sloy opening ceremony",
        "It was the day his knighthood was to be formally conferred",
        "It was the day before Cruachan construction was approved"
      ],
      correct: 0,
      explanation: "MacColl died on July 15, 1951, the day before the planned opening of Pitlochry — a project he had driven. He had been knighted in 1949."
    },
    ruth: {
      options: [
        "He died the day before the Pitlochry opening he'd worked so hard for",
        "He died the day before the Pitlochry opening he'd worked so hard for",
        "He died the day before the Pitlochry opening he'd worked so hard for",
        "He died the day before the Pitlochry opening he'd worked so hard for"
      ],
      correct: 0,
      explanation: "So sad — MacColl passed away the day before the opening of Pitlochry, the project he'd poured his heart into."
    }
  },
  {
    id: 64,
    category: "nsheb",
    question: "Loch Sloy was NSHEB's Scheme No. 1. When was it approved?",
    year: 1945,
    eric: {
      options: ["28 March 1944", "28 March 1945", "28 May 1945", "15 March 1945"],
      correct: 1,
      explanation: "Loch Sloy (Scheme No. 1) was approved on 28 March 1945. Construction began in May 1945. 'Loch Sloy' was the battle cry of Clan MacFarlane."
    },
    ruth: {
      options: [
        "28 March 1945",
        "Before it was built (planning is important!)",
        "After it was built (they did things differently back then)",
        "Nobody approved it — they just started digging"
      ],
      correct: 0,
      explanation: "Loch Sloy was approved on 28 March 1945 — the very first NSHEB scheme!"
    }
  },
  {
    id: 65,
    category: "nsheb",
    question: "'Loch Sloy!' was the battle cry of which Scottish clan?",
    year: 1945,
    eric: {
      options: ["Clan MacGregor", "Clan MacFarlane", "Clan Campbell", "Clan MacLean"],
      correct: 1,
      explanation: "'Loch Sloy!' was the battle cry of Clan MacFarlane. The loch sits in MacFarlane territory in Argyll and Bute."
    },
    ruth: {
      options: [
        "Clan MacFarlane",
        "Clan MacDonald (of hamburger fame)",
        "Clan MacHydroElectric",
        "Nobody — lochs can't be battle cries (but this one was!)"
      ],
      correct: 0,
      explanation: "'Loch Sloy!' was the battle cry of Clan MacFarlane. What a brilliant name for Scotland's first major hydro scheme!"
    }
  },
  {
    id: 66,
    category: "nsheb",
    question: "How many workers died during the construction of Loch Sloy?",
    year: 1950,
    eric: {
      options: ["15", "18", "21", "24"],
      correct: 2,
      explanation: "21 men died during the construction of Loch Sloy. The work was dangerous, involving tunnelling, dam construction, and harsh Highland conditions."
    },
    ruth: {
      options: [
        "21 brave workers",
        "21 brave workers",
        "21 brave workers",
        "21 brave workers"
      ],
      correct: 0,
      explanation: "21 workers lost their lives building Loch Sloy. These incredible projects came at a real human cost."
    }
  },
  {
    id: 67,
    category: "nsheb",
    question: "When did MacColl switch on the first Loch Sloy generator, and what was the total capacity?",
    year: 1950,
    eric: {
      options: [
        "18 February 1950, 130 MW across 4 generators",
        "18 February 1950, 152.5 MW across 4 generators",
        "18 October 1950, 152.5 MW across 4 generators",
        "15 February 1950, 152.5 MW across 4 generators"
      ],
      correct: 1,
      explanation: "MacColl switched on the first generator at 3:15 PM on 18 February 1950. Total capacity was 152.5 MW across 4 generators. The official opening by Queen Elizabeth was later, on 18 October 1950."
    },
    ruth: {
      options: [
        "February 18, 1950 — 152.5 megawatts from 4 generators",
        "He just plugged it in and hoped for the best",
        "3:15 PM on a Tuesday (MacColl was very precise)",
        "Both A and C are true, actually!"
      ],
      correct: 0,
      explanation: "MacColl switched on the first generator on February 18, 1950. The station eventually produced 152.5 MW from 4 generators."
    }
  },
  {
    id: 68,
    category: "nsheb",
    question: "Cruachan, 'The Hollow Mountain,' has its machine hall inside Ben Cruachan. What are its dimensions?",
    year: 1965,
    eric: {
      options: [
        "91.5m long, 23.5m wide, 38m high",
        "95m long, 25m wide, 40m high",
        "91.5m long, 25m wide, 38m high",
        "88m long, 23.5m wide, 36m high"
      ],
      correct: 0,
      explanation: "The machine hall is 91.5m long, 23.5m wide, and 38m high — an enormous cavern carved out of solid rock inside Ben Cruachan."
    },
    ruth: {
      options: [
        "91.5 metres long, 23.5 metres wide, 38 metres high — inside a mountain!",
        "Really big. Like, REALLY big. Inside a MOUNTAIN.",
        "Big enough to park several whales",
        "All of the above"
      ],
      correct: 0,
      explanation: "The machine hall inside the mountain is massive — 91.5m long, 23.5m wide, and 38m high. All inside solid rock!"
    }
  },
  {
    id: 69,
    category: "nsheb",
    question: "Cruachan was opened on October 15, 1965 by Queen Elizabeth II. How many workers died during construction?",
    year: 1965,
    eric: {
      options: ["28", "32", "36", "40"],
      correct: 2,
      explanation: "36 workers died during the construction of Cruachan. The project cost £24.5 million and took from 1959 to 1965."
    },
    ruth: {
      options: [
        "36 workers",
        "36 workers",
        "36 workers",
        "36 workers"
      ],
      correct: 0,
      explanation: "36 workers lost their lives building Cruachan. A tremendous sacrifice for an incredible engineering achievement."
    }
  },
  {
    id: 70,
    category: "nsheb",
    question: "Cruachan was a pioneering engineering achievement. What was it the first of in the world?",
    year: 1965,
    eric: {
      options: [
        "First underground hydro power station",
        "First large-scale reversible pumped-storage station",
        "First hydro station inside a mountain",
        "First hydro station over 400 MW capacity"
      ],
      correct: 1,
      explanation: "Cruachan was the first large-scale reversible pumped-storage hydro station in the world. Other underground stations existed, but Cruachan pioneered large-scale reversible pumped storage at 440 MW."
    },
    ruth: {
      options: [
        "The first big pumped-storage power station in the world!",
        "The first power station inside a mountain (sort of true too)",
        "The first Scottish mountain to generate electricity",
        "The first anything to be inside a mountain (except caves)"
      ],
      correct: 0,
      explanation: "Cruachan was the world's first large-scale reversible pumped-storage station. Scotland leading the way!"
    }
  },
  {
    id: 71,
    category: "nsheb",
    question: "On October 27, 1955, Tunnel Tigers at St Fillans set a tunnelling record. How much rock did they cut in 7 days?",
    year: 1955,
    eric: {
      options: ["457 feet", "507 feet", "557 feet", "607 feet"],
      correct: 2,
      explanation: "The record was 557 feet of rock in 7 days, achieved by 45 Tunnel Tigers working in 3 crews of 14 (with others in support). Each man earned a £20 bonus."
    },
    ruth: {
      options: [
        "557 feet in just 7 days!",
        "About as far as you can throw a very heavy rock",
        "One foot (but it was very thorough)",
        "They didn't keep records — they were too busy tunnelling"
      ],
      correct: 0,
      explanation: "557 feet of solid rock in just 7 days! The Tunnel Tigers were absolutely extraordinary workers."
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GENERAL (~29 questions)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 72,
    category: "general",
    question: "The Napoleonic Code was enacted on March 21, 1804. Napoleon personally attended how many of the 80+ drafting sessions?",
    year: 1804,
    eric: {
      options: [
        "About a quarter of them",
        "About a third of them",
        "Nearly half of them",
        "More than half of them"
      ],
      correct: 2,
      explanation: "Napoleon personally presided over nearly half of the 80+ drafting sessions. He was deeply involved in shaping the Code, not just a figurehead."
    },
    ruth: {
      options: [
        "Nearly half of them — he was very hands-on!",
        "None — he was too busy being short and angry",
        "All of them, twice (he was very thorough)",
        "He just showed up for the snacks"
      ],
      correct: 0,
      explanation: "Napoleon attended nearly half of the 80+ sessions! He wasn't just a military man — he cared deeply about the law."
    }
  },
  {
    id: 73,
    category: "general",
    question: "Alcatraz prison closed on March 21, 1963. How many prisoners were in the final transfer?",
    year: 1963,
    eric: {
      options: ["23", "25", "27", "29"],
      correct: 2,
      explanation: "The last 27 prisoners were transferred when Alcatraz closed on March 21, 1963. The closure was ordered by Attorney General Robert F. Kennedy."
    },
    ruth: {
      options: [
        "27",
        "Just one, but he was very stubborn",
        "Zero — they'd all escaped by then",
        "Forty-twelve (that's not a number)"
      ],
      correct: 0,
      explanation: "27 prisoners were the last to leave Alcatraz when it closed forever on March 21, 1963."
    }
  },
  {
    id: 74,
    category: "general",
    question: "Who ordered the closure of Alcatraz on March 21, 1963?",
    year: 1963,
    eric: {
      options: [
        "President Kennedy",
        "Attorney General Robert F. Kennedy",
        "FBI Director J. Edgar Hoover",
        "Bureau of Prisons Director James Bennett"
      ],
      correct: 1,
      explanation: "Attorney General Robert F. Kennedy ordered Alcatraz closed, primarily because it cost $10 per prisoner per day compared to $3 at Atlanta."
    },
    ruth: {
      options: [
        "Robert F. Kennedy, the Attorney General",
        "The prisoners themselves (they voted on it)",
        "The seagulls (they wanted the island back)",
        "Nobody — the island just got tired"
      ],
      correct: 0,
      explanation: "Attorney General Robert F. Kennedy ordered it closed because it was too expensive — $10 per prisoner per day!"
    }
  },
  {
    id: 75,
    category: "general",
    question: "Alcatraz operated for how many years before closing on March 21, 1963?",
    year: 1963,
    eric: {
      options: ["26 years", "27 years", "29 years", "31 years"],
      correct: 2,
      explanation: "Alcatraz operated as a federal prison for 29 years (1934–1963). It cost $10/prisoner/day compared to $3 at Atlanta, which drove the decision to close."
    },
    ruth: {
      options: [
        "29 years",
        "Long enough",
        "Too long, according to the prisoners",
        "Not long enough, according to the seagulls"
      ],
      correct: 0,
      explanation: "Alcatraz was a federal prison for 29 years. That's a lot of cold, foggy days on 'The Rock'!"
    }
  },
  {
    id: 76,
    category: "general",
    question: "Who was the last inmate to leave Alcatraz when it closed on March 21, 1963?",
    year: 1963,
    eric: {
      options: ["Frank Morris", "Frank Weatherman", "Clarence Anglin", "Alvin Karpis"],
      correct: 1,
      explanation: "Frank Weatherman was the last inmate to leave Alcatraz. Frank Morris and Clarence Anglin were part of the famous 1962 escape. Karpis was a long-term inmate who left earlier."
    },
    ruth: {
      options: [
        "Frank Weatherman",
        "Frank 'I Don't Want To Leave' McGee",
        "The last prisoner standing (musical chairs edition)",
        "A seagull who had been squatting in cell block D"
      ],
      correct: 0,
      explanation: "Frank Weatherman was the very last inmate to walk out of Alcatraz. What a claim to fame!"
    }
  },
  {
    id: 77,
    category: "general",
    question: "The Moondog Coronation Ball on March 21, 1952 is considered the first what?",
    year: 1952,
    eric: {
      options: [
        "Rock and roll concert",
        "Rhythm and blues concert",
        "Integrated popular music concert",
        "DJ-promoted music concert"
      ],
      correct: 0,
      explanation: "The Moondog Coronation Ball is widely considered the first rock and roll concert. Organised by DJ Alan Freed at the Cleveland Arena."
    },
    ruth: {
      options: [
        "Rock and roll concert!",
        "Dog coronation ceremony",
        "Moon-themed ball (formal attire required)",
        "Concert where everyone dressed as a dog on the moon"
      ],
      correct: 0,
      explanation: "It was the very first rock and roll concert! Held in Cleveland on March 21, 1952."
    }
  },
  {
    id: 78,
    category: "general",
    question: "The Moondog Coronation Ball (March 21, 1952) at Cleveland Arena was shut down early. Why?",
    year: 1952,
    eric: {
      options: [
        "About 15,000 people tried to enter the 10,000-capacity venue",
        "About 20,000 people tried to enter the 10,000-capacity venue",
        "A riot broke out after the second song",
        "The fire marshal shut it down due to pyrotechnics"
      ],
      correct: 1,
      explanation: "Approximately 20,000 people tried to get into the 10,000-capacity Cleveland Arena. The event was shut down after the first song by Paul 'Hucklebuck' Williams."
    },
    ruth: {
      options: [
        "Way too many people showed up — double the capacity!",
        "The music was too loud (rock and roll, innit)",
        "Someone's mum came and said it was past bedtime",
        "The building started dancing and they got worried"
      ],
      correct: 0,
      explanation: "About 20,000 people tried to squeeze into a venue for 10,000! Rock and roll was clearly very popular from day one."
    }
  },
  {
    id: 79,
    category: "general",
    question: "Which DJ organized the Moondog Coronation Ball of March 21, 1952?",
    year: 1952,
    eric: {
      options: ["Wolfman Jack", "Alan Freed", "Dick Clark", "Murray the K"],
      correct: 1,
      explanation: "Alan Freed, a Cleveland DJ, organized the Moondog Coronation Ball. He is often credited with popularizing the term 'rock and roll.'"
    },
    ruth: {
      options: [
        "Alan Freed",
        "DJ Birthday Boy",
        "MC Moondog (not a real person)",
        "The first DJ ever (probably not, but it sounds good)"
      ],
      correct: 0,
      explanation: "Alan Freed organized it and helped popularize the term 'rock and roll.' A true pioneer of music history!"
    }
  },
  {
    id: 80,
    category: "general",
    question: "The first tweet was posted on March 21, 2006. What did it say?",
    year: 2006,
    eric: {
      options: [
        "\"just setting up my twitter\"",
        "\"just setting up my twttr\"",
        "\"hello world\"",
        "\"welcome to twitter\""
      ],
      correct: 1,
      explanation: "Jack Dorsey's first tweet was 'just setting up my twttr' — using the original code name for the platform, without vowels. Posted at 9:50 AM."
    },
    ruth: {
      options: [
        "\"just setting up my twttr\"",
        "\"hello is this thing on\"",
        "\"first!!!1!!\"",
        "\"follow me for more tweets about tweets\""
      ],
      correct: 0,
      explanation: "Jack Dorsey posted 'just setting up my twttr' — the platform was originally called 'twttr' without the vowels!"
    }
  },
  {
    id: 81,
    category: "general",
    question: "Jack Dorsey's first tweet (March 21, 2006) was later sold as an NFT. For how much?",
    year: 2006,
    eric: {
      options: ["$1.5 million", "$2.5 million", "$2.9 million", "$3.5 million"],
      correct: 2,
      explanation: "The NFT of Dorsey's first tweet sold for $2.9 million in March 2021. The buyer later tried to resell it and received bids as low as a few dollars."
    },
    ruth: {
      options: [
        "$2.9 million (for a tweet!)",
        "About tree fiddy",
        "One billion Stanley Nickels",
        "More money than sense, frankly"
      ],
      correct: 0,
      explanation: "Someone paid $2.9 million for an NFT of a tweet. The internet is a strange and wonderful place!"
    }
  },
  {
    id: 82,
    category: "general",
    question: "On March 21, 1935, Persia officially became Iran. What occasion did Reza Shah Pahlavi choose for the change?",
    year: 1935,
    eric: {
      options: [
        "The Shah's birthday",
        "Nowruz (Persian New Year)",
        "The anniversary of his coronation",
        "The spring equinox (separate from Nowruz)"
      ],
      correct: 1,
      explanation: "The change took effect on Nowruz, the Persian New Year. Nowruz falls on or around the spring equinox (March 20–21), so options B and D are closely connected, but the specific occasion chosen was Nowruz."
    },
    ruth: {
      options: [
        "Nowruz — the Persian New Year!",
        "A Tuesday (no particular reason)",
        "Persia's birthday (countries have those, right?)",
        "The day they ran out of 'Persia' stationery"
      ],
      correct: 0,
      explanation: "The name change happened on Nowruz, the Persian New Year, which falls around March 21. A new name for a new year!"
    }
  },
  {
    id: 83,
    category: "general",
    question: "March 21 is UNESCO's International Day for the Elimination of Racial Discrimination. What 1960 event inspired this?",
    year: 1960,
    eric: {
      options: [
        "The Sharpeville massacre in Johannesburg, South Africa",
        "The Sharpeville massacre in Sharpeville, South Africa",
        "The Soweto uprising in South Africa",
        "The Rivonia Trial in South Africa"
      ],
      correct: 1,
      explanation: "The Sharpeville massacre occurred in Sharpeville (a township in Transvaal), not Johannesburg. The Soweto uprising was 1976, and the Rivonia Trial was 1963-64."
    },
    ruth: {
      options: [
        "The Sharpeville massacre in South Africa — police attacked peaceful protesters",
        "A very important and solemn event in South Africa",
        "The world decided racism was bad (took them long enough)",
        "Both A and B, really"
      ],
      correct: 0,
      explanation: "On March 21, 1960, police opened fire on peaceful protesters in Sharpeville, South Africa. UNESCO chose this date to remind the world to fight racial discrimination."
    }
  },
  {
    id: 84,
    category: "general",
    question: "Namibia gained independence on March 21, 1990. Who was sworn in as its first president?",
    year: 1990,
    eric: {
      options: ["Hage Geingob", "Sam Nujoma", "Andimba Toivo ya Toivo", "Hendrik Witbooi"],
      correct: 1,
      explanation: "Sam Nujoma was sworn in as Namibia's first president on March 21, 1990. Geingob became president later (2015). Toivo ya Toivo was a liberation hero, and Witbooi was a historical resistance leader."
    },
    ruth: {
      options: [
        "Sam Nujoma",
        "President First (he was the first, after all)",
        "Nelson Mandela (wrong country!)",
        "A very proud Namibian"
      ],
      correct: 0,
      explanation: "Sam Nujoma became Namibia's first president on March 21, 1990 — independence day!"
    }
  },
  {
    id: 85,
    category: "general",
    question: "Thomas Cranmer was burned at the stake on March 21, 1556. What was his claim to fame?",
    year: 1556,
    eric: {
      options: [
        "First Catholic Archbishop of Canterbury",
        "First Protestant Archbishop of Canterbury",
        "Last Catholic Archbishop of Canterbury",
        "The Archbishop who crowned Henry VIII"
      ],
      correct: 1,
      explanation: "Cranmer was the first Protestant Archbishop of Canterbury. He served under Henry VIII and Edward VI before being executed under the Catholic Queen Mary I."
    },
    ruth: {
      options: [
        "First Protestant Archbishop of Canterbury",
        "He invented cranberries (Cranmer... cranberry... no)",
        "He was the world's worst fire safety inspector",
        "He asked to be burned (he didn't, actually)"
      ],
      correct: 0,
      explanation: "Thomas Cranmer was the first Protestant Archbishop of Canterbury. He was executed under Queen Mary I for his religious beliefs."
    }
  },
  {
    id: 86,
    category: "general",
    question: "When Thomas Cranmer was burned on March 21, 1556, what famous act did he perform at the stake?",
    year: 1556,
    eric: {
      options: [
        "He recited the Lord's Prayer in English rather than Latin",
        "He thrust his right hand into the fire first",
        "He forgave Queen Mary publicly",
        "He refused a blindfold and watched the flames"
      ],
      correct: 1,
      explanation: "Cranmer famously thrust his right hand into the fire first, because it was the hand that had signed recantations of his Protestant faith that he now repudiated."
    },
    ruth: {
      options: [
        "He put his right hand in the fire first — the hand that had signed papers he regretted",
        "He was incredibly brave",
        "Something very dramatic (it was the 1500s, after all)",
        "All of the above"
      ],
      correct: 0,
      explanation: "Cranmer thrust his right hand into the fire first because it had signed documents recanting his beliefs. An incredibly courageous final act."
    }
  },
  {
    id: 87,
    category: "general",
    question: "Johann Sebastian Bach was born on March 21, 1685. But that's the Julian calendar date. What's the Gregorian equivalent?",
    year: 1685,
    eric: {
      options: ["March 28", "March 29", "March 30", "March 31"],
      correct: 3,
      explanation: "Bach's Julian calendar birthday of March 21, 1685 corresponds to March 31 in the Gregorian calendar. The 10-day difference was standard for 17th-century dates."
    },
    ruth: {
      options: [
        "March 31 — ten days later!",
        "March 21 (calendars are confusing)",
        "Time is an illusion, lunchtime doubly so",
        "Bach didn't have a birthday; he just appeared fully formed at a harpsichord"
      ],
      correct: 0,
      explanation: "Bach's birthday is March 21 on the old calendar but March 31 on the modern one. Either way, he wrote amazing music!"
    }
  },
  {
    id: 88,
    category: "general",
    question: "Benito Juárez, born March 21, 1806, served as president of which country?",
    year: 1806,
    eric: {
      options: ["Argentina", "Mexico", "Colombia", "Venezuela"],
      correct: 1,
      explanation: "Benito Juárez was President of Mexico. His birthday, March 21, is a national holiday in Mexico (Natalicio de Benito Juárez)."
    },
    ruth: {
      options: [
        "Mexico",
        "Mexico",
        "Mexico",
        "Mexico"
      ],
      correct: 0,
      explanation: "Freebie! Benito Juárez was President of Mexico. His birthday is a national holiday there!"
    }
  },
  {
    id: 89,
    category: "general",
    question: "Ayrton Senna, born March 21, 1960, won how many Formula 1 World Championships?",
    year: 1960,
    eric: {
      options: ["2", "3", "4", "5"],
      correct: 1,
      explanation: "Senna won 3 F1 World Championships (1988, 1990, 1991). He died tragically on May 1, 1994, at Imola during the San Marino Grand Prix."
    },
    ruth: {
      options: [
        "3 — he was one of the greatest ever",
        "All of them (he was that good)",
        "Vroom vroom championships",
        "More than you or I ever will"
      ],
      correct: 0,
      explanation: "Senna won 3 World Championships and is considered one of the greatest F1 drivers of all time. Born on Eric's birthday!"
    }
  },
  {
    id: 90,
    category: "general",
    question: "Ayrton Senna (born March 21, 1960) died tragically during which Grand Prix?",
    year: 1960,
    eric: {
      options: [
        "1994 Italian Grand Prix at Monza",
        "1994 San Marino Grand Prix at Imola",
        "1994 Brazilian Grand Prix at Interlagos",
        "1994 Monaco Grand Prix"
      ],
      correct: 1,
      explanation: "Senna died on May 1, 1994, at the San Marino Grand Prix at Imola. The weekend was especially tragic — Roland Ratzenberger had died in qualifying the day before."
    },
    ruth: {
      options: [
        "The 1994 San Marino Grand Prix at Imola",
        "This is a sad question",
        "May 1, 1994 — the racing world lost a legend",
        "All of these are correct"
      ],
      correct: 0,
      explanation: "Senna died at the 1994 San Marino Grand Prix. He's still beloved by racing fans around the world."
    }
  },
  {
    id: 91,
    category: "general",
    question: "The first Earth Day proclamation was made on March 21, 1970 by which mayor?",
    year: 1970,
    eric: {
      options: [
        "Joseph Alioto of San Francisco",
        "Sam Yorty of Los Angeles",
        "John Lindsay of New York",
        "Richard Daley of Chicago"
      ],
      correct: 0,
      explanation: "San Francisco Mayor Joseph Alioto made the first Earth Day proclamation on March 21, 1970, inspired by peace activist John McConnell. The more widely celebrated Earth Day is April 22."
    },
    ruth: {
      options: [
        "Joseph Alioto, Mayor of San Francisco",
        "Mother Earth herself",
        "A very environmentally-conscious tree",
        "Captain Planet (he's our hero)"
      ],
      correct: 0,
      explanation: "San Francisco's Mayor Alioto made the first Earth Day proclamation on March 21, 1970. The more famous Earth Day is April 22!"
    }
  },
  {
    id: 92,
    category: "general",
    question: "The March 21, 1970 Earth Day was inspired by which peace activist?",
    year: 1970,
    eric: {
      options: ["John McConnell", "Gaylord Nelson", "Denis Hayes", "Rachel Carson"],
      correct: 0,
      explanation: "John McConnell proposed the March 21 Earth Day. Gaylord Nelson and Denis Hayes were behind the April 22 Earth Day (also 1970). Rachel Carson wrote Silent Spring (1962)."
    },
    ruth: {
      options: [
        "John McConnell",
        "A person who really, really liked the Earth",
        "Mother Nature's publicist",
        "Someone who thought 'Hey, the Earth deserves a day'"
      ],
      correct: 0,
      explanation: "John McConnell proposed the idea of Earth Day on March 21 — the spring equinox. What a lovely idea!"
    }
  },
  {
    id: 93,
    category: "general",
    question: "San Diego Comic-Con held its first event on March 21, 1970. How many people attended?",
    year: 1970,
    eric: {
      options: ["About 50", "About 100", "About 200", "About 300"],
      correct: 1,
      explanation: "About 100 people attended the original one-day 'Golden State Comic-Minicon' at the U.S. Grant Hotel on March 21, 1970. It now draws over 130,000 annually."
    },
    ruth: {
      options: [
        "About 100 — look how it's grown!",
        "About a million superhero fans",
        "Just one person, but they were really enthusiastic",
        "130,000 (no wait, that's now)"
      ],
      correct: 0,
      explanation: "Only about 100 people came to the first Comic-Con! Now it's one of the biggest events in the world with over 130,000 attendees."
    }
  },
  {
    id: 94,
    category: "general",
    question: "The first San Diego Comic-Con (March 21, 1970) was held at which hotel?",
    year: 1970,
    eric: {
      options: ["El Cortez Hotel", "U.S. Grant Hotel", "Hotel del Coronado", "Westgate Hotel"],
      correct: 1,
      explanation: "The one-day 'Golden State Comic-Minicon' was held at the U.S. Grant Hotel in downtown San Diego on March 21, 1970."
    },
    ruth: {
      options: [
        "The U.S. Grant Hotel",
        "The Batcave (it wasn't)",
        "The Hall of Justice (also wasn't)",
        "A hotel so fancy even Superman would be impressed"
      ],
      correct: 0,
      explanation: "The first Comic-Con was at the U.S. Grant Hotel. Quite a dignified start for an event that now features people dressed as Wolverine!"
    }
  },
  {
    id: 95,
    category: "general",
    question: "Gary Oldman, born March 21, 1958, won his Oscar for playing which historical figure?",
    year: 1958,
    eric: {
      options: ["Sid Vicious", "Lee Harvey Oswald", "Winston Churchill", "Ludwig van Beethoven"],
      correct: 2,
      explanation: "Oldman won the Best Actor Oscar for playing Winston Churchill in Darkest Hour (2017). He played Sid Vicious in Sid and Nancy, and Beethoven in Immortal Beloved — but those didn't win Oscars."
    },
    ruth: {
      options: [
        "Winston Churchill in Darkest Hour",
        "Commissioner Gordon (sadly, no Oscar for Batman films)",
        "Sirius Black (also no Oscar, wizards aren't real)",
        "Gary Oldman playing Gary Oldman (method acting)"
      ],
      correct: 0,
      explanation: "Gary Oldman won the Oscar for playing Winston Churchill. He was completely unrecognizable under all that makeup!"
    }
  },
  {
    id: 96,
    category: "general",
    question: "Ronaldinho, born March 21, 1980, won FIFA World Player of the Year how many times?",
    year: 1980,
    eric: {
      options: ["1", "2", "3", "4"],
      correct: 1,
      explanation: "Ronaldinho won FIFA World Player of the Year twice (2004 and 2005). He also won the Ballon d'Or in 2005 and the 2002 World Cup with Brazil."
    },
    ruth: {
      options: [
        "Twice — in 2004 and 2005",
        "Every year (in our hearts)",
        "More times than anyone can count",
        "Seventeen times (he was that good)"
      ],
      correct: 0,
      explanation: "Ronaldinho won it twice! He was one of the most joyful, skillful footballers ever to play the game."
    }
  },
  {
    id: 97,
    category: "general",
    question: "The NSHEB was dissolved in March 1990 — the same month as Namibian independence. What did it become?",
    year: 1990,
    eric: {
      options: [
        "Scottish Hydro-Electric plc",
        "Scottish Power plc",
        "Highland Electric plc",
        "North of Scotland Electric plc"
      ],
      correct: 0,
      explanation: "The Board became Scottish Hydro-Electric plc, which was floated on the stock exchange in June 1991. It later merged with Southern Electric in 1998 to form SSE."
    },
    ruth: {
      options: [
        "Scottish Hydro-Electric plc",
        "Loch Sloy Power Company (catchy name)",
        "Eric's Old Workplace plc",
        "The Hollow Mountain Energy Corporation"
      ],
      correct: 0,
      explanation: "The Board became Scottish Hydro-Electric plc, and later merged to become SSE — which still exists today!"
    }
  },
  {
    id: 98,
    category: "general",
    question: "In 1943, less than 1% of rural Highland homes had electricity. By 1959, what was the figure?",
    year: 1943,
    eric: {
      options: ["About 75%", "About 80%", "About 85%", "About 90%"],
      correct: 3,
      explanation: "By 1959, approximately 90% of rural Highland homes had electricity — up from less than 1% in 1943. This transformation was the NSHEB's greatest achievement."
    },
    ruth: {
      options: [
        "About 90% — from almost nothing to almost everyone!",
        "100% (wouldn't that be nice)",
        "About 90% — from almost nothing to almost everyone!",
        "About 90% — from almost nothing to almost everyone!"
      ],
      correct: 0,
      explanation: "From less than 1% to about 90% in just 16 years! The NSHEB transformed life in the Scottish Highlands."
    }
  },
  {
    id: 99,
    category: "general",
    question: "The Tunnel Tigers who built NSHEB's hydro schemes earned £35/week. How much did a Highland estate worker earn?",
    year: 1955,
    eric: {
      options: ["£2–3 per week", "£3–4 per week", "£4–5 per week", "£5–6 per week"],
      correct: 1,
      explanation: "Estate workers earned £3–4 per week, while Tunnel Tigers earned £35 — roughly ten times as much. The dangerous tunnelling work attracted Irish, German, Polish, and Czech workers."
    },
    ruth: {
      options: [
        "£3 to £4 a week — the Tigers earned ten times more!",
        "About a tenner (still not great)",
        "£35 as well (ha, as if)",
        "They were paid in sheep"
      ],
      correct: 0,
      explanation: "Estate workers got just £3–4 a week while Tunnel Tigers got £35! Dangerous work, but the pay was incredible for the time."
    }
  },
  {
    id: 100,
    category: "general",
    question: "By 1965, the NSHEB had built an enormous infrastructure across the Highlands. How many power stations, dams, and km of tunnel?",
    year: 1965,
    eric: {
      options: [
        "48 stations, 72 dams, 250+ km tunnel",
        "54 stations, 78 dams, 300+ km tunnel",
        "54 stations, 82 dams, 350+ km tunnel",
        "60 stations, 78 dams, 300+ km tunnel"
      ],
      correct: 1,
      explanation: "By 1965: 54 power stations, 78 dams, over 300 km of rock tunnel, and over 1,000 MW capacity. An astonishing achievement in just two decades."
    },
    ruth: {
      options: [
        "54 stations, 78 dams, and over 300 km of tunnel!",
        "Loads. Absolutely loads.",
        "More dams than you can shake a stick at",
        "All of the above (all equally correct)"
      ],
      correct: 0,
      explanation: "54 power stations, 78 dams, and over 300 km of tunnel — all built in about 20 years in the Scottish Highlands. Incredible!"
    }
  },

  // ─── Bonus NSHEB deep-knowledge questions ─────────────────────
  {
    id: 101,
    category: "nsheb",
    question: "Inside Cruachan's turbine hall there is a remarkable mural. Who created it?",
    year: 1965,
    eric: {
      options: ["Elizabeth Falconer", "Elizabeth Blackadder", "Joan Eardley", "Phoebe Anna Traquair"],
      correct: 0,
      explanation: "Elizabeth Falconer created the mural: 14.6m long, combining wood, plastic and gold leaf. One section depicts Celtic mythology, the other shows the construction. 15 faces at the base represent those killed in the 1962 ceiling collapse."
    },
    ruth: {
      options: [
        "Elizabeth Falconer",
        "Banksy (he gets everywhere)",
        "Nobody — the mountain painted itself",
        "A very artistic Tunnel Tiger with a day off"
      ],
      correct: 0,
      explanation: "Elizabeth Falconer created a stunning mural inside the turbine hall, combining Celtic mythology with the story of Cruachan's construction."
    }
  },
  {
    id: 102,
    category: "nsheb",
    question: "Foyers was the last major hydro project undertaken by the NSHEB. What was its capacity?",
    year: 1975,
    eric: {
      options: ["200 MW", "250 MW", "300 MW", "350 MW"],
      correct: 2,
      explanation: "Foyers pumped-storage station has a capacity of 300 MW from two 150 MW reversible pump-turbine sets. The site on Loch Ness had previously hosted a 3.7 MW British Aluminium station from 1896."
    },
    ruth: {
      options: [
        "300 megawatts",
        "Enough to power the Loch Ness Monster's underwater TV",
        "About three hamster wheels' worth",
        "300 megawatts"
      ],
      correct: 0,
      explanation: "Foyers produces 300 MW of power. It sits on the shores of Loch Ness — the same site where one of Britain's earliest hydro stations was built in 1896!"
    }
  },
  {
    id: 103,
    category: "nsheb",
    question: "The famous Pitlochry fish ladder has allowed how many salmon to pass since it opened in 1951?",
    year: 1951,
    eric: {
      options: ["Over 100,000", "Over 150,000", "Over 250,000", "Over 500,000"],
      correct: 2,
      explanation: "Over 250,000 salmon have passed through the Pitlochry fish ladder since it opened. The Countess of Airlie laid the first stone of Pitlochry dam on 26 April 1947."
    },
    ruth: {
      options: [
        "Over 250,000 salmon!",
        "Just the one — but he kept going back and forth",
        "Fish can't climb ladders (but these ones can!)",
        "Over 250,000 salmon!"
      ],
      correct: 0,
      explanation: "Over a quarter of a million salmon have used the Pitlochry fish ladder — it's one of Scotland's most popular visitor attractions too!"
    }
  },
  {
    id: 104,
    category: "nsheb",
    question: "When Tom Johnston retired as NSHEB chairman in 1959, roughly what percentage of Highland residents had mains electricity?",
    year: 1959,
    eric: {
      options: ["About 75%", "About 80%", "About 85%", "About 90%"],
      correct: 3,
      explanation: "By 1959, approximately 90% of Highland residents had mains electricity — up from less than 1% when the Board was established in 1943. Johnston's vision of 'Power from the Glens' had transformed the Highlands."
    },
    ruth: {
      options: [
        "About 90% — up from less than 1% in 1943!",
        "100% (including the sheep)",
        "About 90% — up from less than 1% in 1943!",
        "About 90% — up from less than 1% in 1943!"
      ],
      correct: 0,
      explanation: "When Johnston started, fewer than 1% of rural Highland residents had electricity. By the time he retired in 1959, that figure was about 90%. An extraordinary transformation."
    }
  },
  {
    id: 105,
    category: "nsheb",
    question: "The 'Tunnel Tigers' who carved the hydro tunnels earned roughly how much per week in the late 1940s?",
    year: 1950,
    eric: {
      options: ["Up to £20 per week", "Up to £25 per week", "Up to £30 per week", "Up to £35 per week"],
      correct: 3,
      explanation: "Tunnel Tigers could earn up to £35 per week — compared to just £3-4 per week for a Highland estate worker. The workers were drawn from Ireland, Germany, Poland, and Czechoslovakia, and took enormous risks for the high pay."
    },
    ruth: {
      options: [
        "Up to £35 a week — a fortune in those days!",
        "Nothing (they were paid in rocks)",
        "All the haggis they could eat",
        "Up to £35 a week — a fortune in those days!"
      ],
      correct: 0,
      explanation: "Tunnel Tigers earned up to £35 a week — roughly ten times what a Highland estate worker made. The work was extremely dangerous but the pay drew workers from across Europe."
    }
  },

  // ─── Insider NSHEB questions ────────────────────────────────────
  {
    id: 116,
    category: "nsheb",
    question: "Foyers pumped-storage station (300 MW) had an unusual and risky design feature. What was it?",
    year: 1975,
    eric: {
      options: [
        "It was built with only a single transformer",
        "It had only one access tunnel to the machine hall",
        "It shared a control room with the old aluminium works",
        "It had no backup cooling water supply"
      ],
      correct: 0,
      explanation: "Foyers was built with only a single transformer — no redundancy for a 300 MW station. When it failed early in the station's life, the entire station was out of action. A design decision that raised eyebrows at the time and proved justified in hindsight."
    },
    ruth: {
      options: [
        "It only had one transformer — and it broke!",
        "It was powered by the Loch Ness Monster on a treadmill",
        "It only had one transformer — and it broke!",
        "The whole thing was held together with sellotape"
      ],
      correct: 0,
      explanation: "Foyers had just one transformer for the entire 300 MW station. When it failed, there was no backup. Not the best plan!"
    }
  },
  {
    id: 117,
    category: "nsheb",
    question: "During the Sloy refurbishment, four new 40 MW runners were purchased. But G4's new runner went somewhere else. Where?",
    year: null,
    eric: {
      options: [
        "Clachan, because its runner was failing",
        "Cruachan, as a spare",
        "Foyers, to replace a damaged unit",
        "Inverawe, for capacity upgrade"
      ],
      correct: 0,
      explanation: "Sloy G4's new runner went to Clachan, whose own runner was falling to bits. G4 received an experimental runner instead — which turned out to be in excellent condition. Clachan, nominally 40 MW, now runs at 45 MW and has even reached 48 MW with the Sloy runner."
    },
    ruth: {
      options: [
        "Clachan — its runner was falling apart!",
        "It got lost in the post",
        "Clachan — its runner was falling apart!",
        "Eric took it home and put it in the cupboard under the stairs"
      ],
      correct: 0,
      explanation: "Sloy G4's shiny new runner went to Clachan, which desperately needed it. G4 got an experimental runner instead — which actually worked brilliantly!"
    }
  },

  // ─── Maths operator precedence ────────────────────────────────
  {
    id: 106,
    category: "general",
    question: "Birthday maths! What is 21 + 3 × 4² - 6 ÷ 2 + (-1)³ × 5?",
    year: null,
    eric: {
      options: ["61", "73", "56", "66"],
      correct: 0,
      explanation: "Step by step: 4² = 16, then 3 × 16 = 48, 6 ÷ 2 = 3, (-1)³ × 5 = -5. So: 21 + 48 - 3 - 5 = 61. If you went left-to-right you'd get 73 (treating 21+3 as 24 first). If you forgot (-1)³ is negative you'd get 66."
    },
    ruth: {
      options: [
        "Who cares, it's a birthday party!",
        "Who cares, it's a birthday party!",
        "Who cares, it's a birthday party!",
        "Who cares, it's a birthday party!"
      ],
      correct: 0,
      explanation: "Exactly. Have some cake instead."
    }
  },
  {
    id: 107,
    category: "general",
    question: "Operator precedence challenge: what is -3² + (-3)² + 2 × (4 - 6)³ ÷ 4 - 1?",
    year: null,
    eric: {
      options: ["-5", "5", "-1", "13"],
      correct: 0,
      explanation: "The key trap: -3² = -(3²) = -9, but (-3)² = +9. Then (4-6)³ = (-2)³ = -8. So: 2 × (-8) ÷ 4 = -4. Total: -9 + 9 + (-4) - 1 = -5. If you treated -3² as (-3)² you'd get 13."
    },
    ruth: {
      options: [
        "-5 (but honestly, who's counting?)",
        "A very large number",
        "Potato",
        "-5 (maths is hard, cake is easy)"
      ],
      correct: 0,
      explanation: "It's -5! The sneaky bit is that -3² equals -9 (not +9), because the exponent happens before the negative sign."
    }
  },
  {
    id: 108,
    category: "general",
    question: "The big one. What is (2⁴ - 3 × 5) × (7 - 2³) + (9 ÷ 3)² - (4² - 15) × 8?",
    year: null,
    eric: {
      options: ["0", "2", "-2", "8"],
      correct: 0,
      explanation: "All that work for nothing! Step by step: 2⁴ = 16, 3 × 5 = 15, so (16-15) = 1. Then 2³ = 8, so (7-8) = -1. Then 1 × (-1) = -1. Next: (9÷3)² = 3² = 9. Finally: (4²-15) = (16-15) = 1, and 1 × 8 = 8. Grand total: -1 + 9 - 8 = 0. Yes, zero."
    },
    ruth: {
      options: [
        "Zero! All that work for nothing!",
        "A million",
        "∞ (infinity)",
        "Error: brain overflow"
      ],
      correct: 0,
      explanation: "After all those brackets and exponents, the answer is simply zero. Sometimes maths has a sense of humour."
    }
  },

  // ─── Famous bridge moments ─────────────────────────────────────
  {
    id: 109,
    category: "bridge",
    question: "In the infamous 1965 Bermuda Bowl in Buenos Aires, Reese and Schapiro were accused of using finger signals. What were they allegedly communicating?",
    year: 1965,
    eric: {
      options: [
        "The number of hearts held",
        "The number of high-card points",
        "The number of spades held",
        "Which suit they were void in"
      ],
      correct: 0,
      explanation: "Reese and Schapiro allegedly varied the number of fingers visible on their cards to show how many hearts they held. B. Jay Becker and Dorothy Hayden spotted the pattern. The WBF found them guilty; a later British inquiry under Sir John Foster QC acquitted them. It remains bridge's greatest unsolved controversy."
    },
    ruth: {
      options: [
        "How many hearts they had in their hand",
        "What they wanted for dinner",
        "The football scores",
        "How many hearts they had in their hand"
      ],
      correct: 0,
      explanation: "They were accused of signalling how many hearts they held by changing the number of fingers showing on their cards. The biggest cheating scandal in bridge history!"
    }
  },
  {
    id: 110,
    category: "bridge",
    question: "In the 1981 Bermuda Bowl final, Jeff Meckstroth made a legendary sacrifice bid of 7♠ on just 5 HCP. How many tricks was he down, doubled?",
    year: 1981,
    eric: {
      options: ["7 down", "8 down", "9 down", "10 down"],
      correct: 2,
      explanation: "Meckstroth went down NINE tricks doubled — and still gained IMPs because the opponents could make a grand slam. He was in his mid-20s at the time. The bid was so outrageous it ultimately changed the laws of bridge: in 1987, doubled undertrick penalties were increased after the third trick (300 per trick instead of 200)."
    },
    ruth: {
      options: [
        "Nine! And he still came out ahead on points!",
        "He actually made it (just kidding — nine down)",
        "Twelve (that would be impressive even by cheating standards)",
        "Nine tricks down, but it was a brilliant sacrifice"
      ],
      correct: 0,
      explanation: "He went down nine tricks — but the opponents could make 7♥, so the sacrifice actually gained points! It was so clever they had to change the rules."
    }
  },
  {
    id: 111,
    category: "bridge",
    question: "The 1931-32 'Bridge Battle of the Century' between Culbertson and Lenz was front-page news in 30 countries. Who was Ely Culbertson's partner?",
    year: 1931,
    eric: {
      options: [
        "His wife Josephine",
        "Oswald Jacoby",
        "Harold Vanderbilt",
        "Charles Goren"
      ],
      correct: 0,
      explanation: "Culbertson's partner was his wife Josephine, who played 88 of the 150 rubbers. The delicious trap: Oswald Jacoby actually played for LENZ — and then quit partway through, dissatisfied with Lenz's play. Culbertson won by 8,980 points."
    },
    ruth: {
      options: [
        "His wife Josephine (power couple!)",
        "A very talented labrador",
        "His wife Josephine (power couple!)",
        "Nobody — he played both hands himself"
      ],
      correct: 0,
      explanation: "Ely Culbertson played with his wife Josephine. They won by 8,980 points and the match was front-page news around the world!"
    }
  },
  {
    id: 112,
    category: "bridge",
    question: "Italy's Blue Team dominated world bridge from 1957-1969. Of the 13 available world team championships in that period, how many did they win?",
    year: 1957,
    eric: {
      options: ["10", "11", "12", "13"],
      correct: 2,
      explanation: "The Blue Team won 12 out of 13 world team championships from 1957-1969. Their only miss was a sixth-place finish at the inaugural 1960 World Team Olympiad in Turin. Belladonna, Garozzo, Forquet, Avarelli, D'Alelio, and Pabis-Ticci were the core players. They later came out of retirement to win again in 1972-75."
    },
    ruth: {
      options: [
        "12 out of 13 — utterly dominant!",
        "All of them (they were very good at cards)",
        "12 out of 13 — utterly dominant!",
        "None (Italy is better known for football)"
      ],
      correct: 0,
      explanation: "Italy's Blue Team won an incredible 12 out of 13 world championships between 1957 and 1969. They are the most dominant team in bridge history!"
    }
  },
  {
    id: 113,
    category: "bridge",
    question: "Meckstroth's 1981 7♠ sacrifice exposed a flaw in bridge scoring. What specific rule change followed in 1987?",
    year: 1981,
    eric: {
      options: [
        "Doubled undertrick penalties increased to 300 after the 3rd trick",
        "A maximum penalty of 3,500 points was introduced",
        "Sacrifices at the 7-level were banned",
        "Non-vulnerable doubled undertricks were doubled in value"
      ],
      correct: 0,
      explanation: "After Meckstroth showed you could go down 9 doubled and still gain IMPs, the laws were amended in 1987: after the third undertrick, each additional doubled undertrick cost 300 points instead of 200. This made extreme sacrifices much more expensive."
    },
    ruth: {
      options: [
        "They made being down lots of tricks much more expensive",
        "They banned Jeff Meckstroth from playing (not really)",
        "They made everyone promise to play nicely",
        "Undertrick penalties were increased — no more cheeky sacrifices!"
      ],
      correct: 0,
      explanation: "After Meckstroth's outrageous sacrifice, they changed the rules so that going down lots of tricks costs more. Fair enough, really!"
    }
  },

  // ─── Family jokes ─────────────────────────────────────────────
  {
    id: 114,
    category: "general",
    question: "According to leading cake scientists, what is the optimal colour for birthday cake icing?",
    year: null,
    eric: {
      options: [
        "Emerald green (Pantone 17-5641)",
        "Forest green (Pantone 18-5845)",
        "Mint green (Pantone 13-6009)",
        "Lime green (Pantone 15-0545)"
      ],
      correct: 0,
      explanation: "The correct answer is obviously green. The precise shade is a matter of ongoing, heated scientific debate, but the seminal work by R. Davidson (c. 1970s-present) established beyond doubt that green is the only acceptable colour for cake icing."
    },
    ruth: {
      options: [
        "Green, obviously",
        "Green, obviously",
        "Green, obviously",
        "Green, obviously"
      ],
      correct: 0,
      explanation: "Green! As Ruth has conclusively demonstrated with her legendary green-iced cake. All other colours are merely pretending to be icing."
    }
  },
  {
    id: 115,
    category: "general",
    question: "According to Eric, what is the best thing he has ever done?",
    year: null,
    eric: {
      options: [
        "Fitted a set of screwdrivers in the cupboard under the stairs",
        "Fitted a set of spanners in the cupboard under the stairs",
        "Fitted a set of screwdrivers in the garage",
        "Fitted a set of Allen keys in the cupboard under the stairs"
      ],
      correct: 0,
      explanation: "Screwdrivers. Cupboard under the stairs. Not spanners, not the garage, not Allen keys. This is the hill Eric has chosen to die on, and frankly, who among us hasn't felt that same surge of pride at a perfectly organised cupboard?"
    },
    ruth: {
      options: [
        "Fitted a set of screwdrivers in the cupboard under the stairs",
        "Married Ruth",
        "Built a hydro-electric dam in the back garden",
        "Won the World Bridge Championship (in his dreams)"
      ],
      correct: 0,
      explanation: "The screwdrivers! The cupboard under the stairs! Eric's crowning achievement, as he himself has declared. (Ruth may have a different opinion.)"
    }
  },

  // ─── Personal / family questions ──────────────────────────────
  {
    id: 118,
    category: "general",
    question: "On flight BA1462 from Heathrow Terminal 5 to Edinburgh, what seat was Eric assigned?",
    year: 2014,
    eric: {
      options: ["29A", "29B", "29C", "29F"],
      correct: 1,
      explanation: "Seat 29B — the dreaded middle seat. The flight departed at 20:00, booking reference 4FZKUF, and Eric was BA Blue frequent flyer number 23030486. Hand baggage only fare, naturally."
    },
    ruth: {
      options: [
        "29B — the middle seat!",
        "First class, front row, champagne in hand",
        "29B — the middle seat!",
        "He sat on the wing (it was a budget fare)"
      ],
      correct: 0,
      explanation: "29B — the middle seat on a BA domestic flight. At least it was hand baggage only, so he could make a quick escape!"
    }
  },
  {
    id: 119,
    category: "general",
    question: "Eric has flown on how many of the 24 BA shuttle BIK* series aircraft (G-BIKA through G-BIKS, no Q)?",
    year: null,
    eric: {
      options: ["20", "21", "22", "23"],
      correct: 2,
      explanation: "Eric flew on 22 of the 24 BIK* aircraft. His missing ones were B and N. He was also on BMRD, BPED, and CPEL series planes. BIKE was an unrelated aircraft. Three of the shuttle planes he remembers were C, G, and J."
    },
    ruth: {
      options: [
        "22 out of 24 — so close to the full set!",
        "All of them, twice, backwards",
        "22 out of 24 — so close to the full set!",
        "Just the one — but it was a really nice one"
      ],
      correct: 0,
      explanation: "Eric flew on 22 of the 24 BIK* series shuttle aircraft! He was missing B and N. A true aviation enthusiast."
    }
  },
  {
    id: 120,
    category: "general",
    question: "What was the registration of the first Boeing 757 Eric ever flew on?",
    year: 1985,
    eric: {
      options: ["G-BIKK", "G-BIKI", "G-BIKA", "G-BIKL"],
      correct: 0,
      explanation: "G-BIKK in 1985, flying LHR to Munich via Dusseldorf. Eric was on G-BIKA four times (first 1986, last 1996) and G-BIKI twice (first 1986, last 1987)."
    },
    ruth: {
      options: [
        "G-BIKK",
        "G-WHIZ",
        "ERIC-1 (his personal plane)",
        "G-BIKK"
      ],
      correct: 0,
      explanation: "G-BIKK — Eric's first 757, in 1985. He flew from Heathrow to Munich via Dusseldorf. The start of a beautiful friendship with the BIK* fleet!"
    }
  },
  {
    id: 121,
    category: "nsheb",
    question: "The NSHEB line icing warning system on the Lecht used a rather unusual alarm technology. What was it?",
    year: null,
    eric: {
      options: [
        "A 78rpm gramophone record triggered by line tension",
        "A mechanical bell activated by conductor sag",
        "A radio transmitter triggered by ice weight sensors",
        "A telephone auto-dialler connected to strain gauges"
      ],
      correct: 0,
      explanation: "The Lecht alarm system used a 78rpm gramophone record that played a recorded message when triggered by tension on the line. A wonderfully ingenious low-tech solution to a high-tech problem."
    },
    ruth: {
      options: [
        "A gramophone record! Playing a warning message!",
        "A very cold man with a megaphone",
        "A gramophone record! Playing a warning message!",
        "A trained eagle that flew to the control room"
      ],
      correct: 0,
      explanation: "They used a 78rpm gramophone record that played an alarm message when the ice made the line go taut. Brilliant Scottish engineering!"
    }
  },
  {
    id: 122,
    category: "nsheb",
    question: "To operate the earth switches at the Glen Truim tee-off for de-icing the Corrieyairack Pass line, the engineer first had to go to a telephone box. In which town?",
    year: null,
    eric: {
      options: ["Newtonmore", "Kingussie", "Dalwhinnie", "Laggan"],
      correct: 0,
      explanation: "The engineer had to drive to a telephone box in Newtonmore, dial CCR, insert four old pennies, press button A, and receive switching instructions. Then drive to the tee-off tower, operate the switches, drive back to the phone box to report completion. All before mobile phones!"
    },
    ruth: {
      options: [
        "Newtonmore — and he needed four old pennies!",
        "Newtonmore — and he needed four old pennies!",
        "London (long drive for a phone call)",
        "He just shouted very loudly across the glen"
      ],
      correct: 0,
      explanation: "Newtonmore! The engineer had to find a phone box, insert four old pennies, press button A, and call the control room. Then drive to the tower, do the switching, and drive back to the phone box. Happy days!"
    }
  },
  {
    id: 123,
    category: "general",
    question: "In May 2025, Eric's suitcase went on its own European adventure while he was on a cruise. How many flights did the suitcase take?",
    year: 2025,
    eric: {
      options: ["6 flights", "7 flights", "8 flights", "9 flights"],
      correct: 2,
      explanation: "The suitcase had 8 flights, through 7 airports, with 4 different airlines, on 3 different types of aircraft. It visited Munich, Mykonos, and Athens before finally catching up with Eric — with a broken zip. Eric and Ruth had flown Edinburgh to Barcelona via Amsterdam on KL922 and KL1513."
    },
    ruth: {
      options: [
        "8 flights! It saw more of Europe than Eric did!",
        "It's still flying (last seen over Portugal)",
        "8 flights — through 7 airports with 4 airlines!",
        "None — suitcases can't fly (but this one tried)"
      ],
      correct: 0,
      explanation: "Eric's suitcase had 8 flights through 7 airports! It went on quite the European tour while Eric was stuck on a cruise ship with only one pair of trousers in Ruth's suitcase."
    }
  },

  // ─── E for Additives (Ruth's territory) ───────────────────────
  {
    id: 124,
    category: "general",
    question: "In Maurice Hanssen's bestselling book 'E for Additives,' what does the food additive E102 (Tartrazine) do?",
    year: 1985,
    eric: {
      options: [
        "It's a yellow food colouring",
        "It's an orange food colouring",
        "It's a flavour enhancer",
        "It's a preservative"
      ],
      correct: 0,
      explanation: "E102, Tartrazine, is a synthetic yellow food colouring. It was one of the most controversial additives in the 1980s — products containing it must carry allergy warnings. Ruth will know this one."
    },
    ruth: {
      options: [
        "A yellow food colouring (Ruth knows this!)",
        "A yellow food colouring (Ruth definitely knows this!)",
        "A yellow food colouring (ask Ruth, she's the expert!)",
        "A yellow food colouring (Ruth's book says so!)"
      ],
      correct: 0,
      explanation: "E102 is Tartrazine, a yellow colouring. Ruth's copy of 'E for Additives' is probably well-thumbed at this page!"
    }
  },
  {
    id: 125,
    category: "general",
    question: "What is the common name for food additive E621, which Ruth's 'E for Additives' book warned about?",
    year: 1985,
    eric: {
      options: [
        "Monosodium glutamate (MSG)",
        "Aspartame",
        "Sodium benzoate",
        "Potassium sorbate"
      ],
      correct: 0,
      explanation: "E621 is monosodium glutamate (MSG), the flavour enhancer commonly used in Chinese cooking. Aspartame is E951, sodium benzoate is E211, and potassium sorbate is E202."
    },
    ruth: {
      options: [
        "MSG — monosodium glutamate!",
        "MSG — monosodium glutamate!",
        "Unicorn tears (E numbers are mysterious)",
        "Something unpronounceable that's definitely bad for you"
      ],
      correct: 0,
      explanation: "It's MSG! One of the most debated food additives of the 1980s. Ruth's 'E for Additives' would have had plenty to say about this one."
    }
  },
  {
    id: 126,
    category: "general",
    question: "E330 is one of the most common food additives and is completely natural. What is it?",
    year: 1985,
    eric: {
      options: [
        "Citric acid",
        "Acetic acid",
        "Ascorbic acid",
        "Tartaric acid"
      ],
      correct: 0,
      explanation: "E330 is citric acid — found naturally in citrus fruits. Acetic acid is E260 (vinegar), ascorbic acid is E300 (vitamin C), and tartaric acid is E334. Not all E numbers are scary!"
    },
    ruth: {
      options: [
        "Citric acid — it's in lemons!",
        "Citric acid — nothing to worry about!",
        "Essence of danger (sounds dramatic, is actually lemon juice)",
        "Citric acid — perfectly harmless!"
      ],
      correct: 0,
      explanation: "Citric acid! It's just what makes lemons sour. Proof that not all E numbers are sinister — as Ruth's book would confirm."
    }
  },
  {
    id: 127,
    category: "general",
    question: "E300 sounds ominous, but what everyday substance is it?",
    year: 1985,
    eric: {
      options: [
        "Vitamin C (ascorbic acid)",
        "Vitamin A (retinol)",
        "Vitamin E (tocopherol)",
        "Vitamin B2 (riboflavin)"
      ],
      correct: 0,
      explanation: "E300 is ascorbic acid — vitamin C! Vitamin A is not an E number, vitamin E (tocopherols) are E306-E309, and riboflavin (B2) is E101. The E number system includes many perfectly natural, healthy substances."
    },
    ruth: {
      options: [
        "Vitamin C! Not so scary after all!",
        "Vitamin C! Not so scary after all!",
        "A terrifying chemical (it's actually just vitamin C)",
        "Vitamin C! Not so scary after all!"
      ],
      correct: 0,
      explanation: "It's vitamin C! Goes to show that E numbers aren't always as frightening as they sound."
    }
  },

  // ─── NORBIT (Eric's technology) ───────────────────────────────
  {
    id: 128,
    category: "nsheb",
    question: "Eric worked with NORBIT modules for control systems. Which company developed the NORBIT system?",
    year: 1960,
    eric: {
      options: ["Philips", "Siemens", "GEC", "Ferranti"],
      correct: 0,
      explanation: "NORBIT was developed by Philips (also marketed through their Mullard and Valvo subsidiaries) from 1960. It used discrete components to build logic function blocks in resistor-transistor logic (RTL) or diode-transistor logic (DTL), replacing electromechanical relay logic in industrial control."
    },
    ruth: {
      options: [
        "Philips (the lightbulb people!)",
        "Eric invented them himself in his shed",
        "Philips (the lightbulb people!)",
        "A company called NORBIT (too obvious?)"
      ],
      correct: 0,
      explanation: "Philips developed the NORBIT system — one of the earliest forms of digital logic for industrial control. Eric used them in power station control systems."
    }
  },
  {
    id: 129,
    category: "nsheb",
    question: "The NORBIT 2 (NORBIT-S) modules introduced in 1967 operated at what supply voltage?",
    year: 1967,
    eric: {
      options: ["12V", "24V", "48V", "110V"],
      correct: 1,
      explanation: "The NORBIT 2 / NORBIT-S 60-series operated at 24V DC, handling frequencies up to 10 kHz. The later 61-series added thyristor trigger and control modules for mains switching and power control."
    },
    ruth: {
      options: [
        "24 volts",
        "A million volts (that seems like too many)",
        "24 volts",
        "Whatever voltage Eric says (he's the expert)"
      ],
      correct: 0,
      explanation: "24 volts — the NORBIT modules were early digital logic circuits that Eric used in power station control systems. Cutting-edge technology in the 1960s!"
    }
  },

  // ─── Scottish roads ───────────────────────────────────────────
  {
    id: 130,
    category: "general",
    question: "The A9 is the longest road in Scotland. How long is it?",
    year: null,
    eric: {
      options: ["253 miles", "263 miles", "273 miles", "283 miles"],
      correct: 2,
      explanation: "The A9 is 273 miles (439 km), running from the M9 at Stirling through Perth and Inverness to Thurso. It's the longest road in Scotland and the fifth-longest A-road in the UK."
    },
    ruth: {
      options: [
        "273 miles — from Stirling to Thurso!",
        "273 miles — from Stirling to Thurso!",
        "About as long as a piece of string",
        "Too long (are we there yet?)"
      ],
      correct: 0,
      explanation: "273 miles from Stirling all the way to Thurso in the far north. That's a lot of Scotland!"
    }
  },
  {
    id: 131,
    category: "general",
    question: "The highest point on the A9 is the Pass of Drumochter. What altitude does the road reach?",
    year: null,
    eric: {
      options: ["1,398 feet (426m)", "1,454 feet (443m)", "1,508 feet (460m)", "1,562 feet (476m)"],
      correct: 2,
      explanation: "Drumochter Pass reaches 1,508 feet (460m), making it the highest point on any major road in Scotland. It's also the highest point on the UK rail network, where the Highland Main Line runs alongside."
    },
    ruth: {
      options: [
        "1,508 feet — very high and very windy!",
        "1,508 feet — very high and very windy!",
        "So high that planes have to fly under it",
        "High enough that Eric's ears pop"
      ],
      correct: 0,
      explanation: "1,508 feet above sea level! Drumochter Pass is famously cold, windy, and often the first place in Scotland to get snow."
    }
  },
  {
    id: 132,
    category: "general",
    question: "What is the second longest A-road in Scotland?",
    year: null,
    eric: {
      options: ["A82", "A96", "A90", "A85"],
      correct: 0,
      explanation: "The A82 is 167 miles (269 km), running from Glasgow through the Highlands to Inverness via Loch Lomond, Glencoe, and Fort William. The A9 (273 miles) is the longest."
    },
    ruth: {
      options: [
        "The A82 — Glasgow to Inverness the scenic way!",
        "The A82 — Glasgow to Inverness the scenic way!",
        "The B947 (it's not even an A-road)",
        "The M1 (that's in England, Eric)"
      ],
      correct: 0,
      explanation: "The A82! It runs 167 miles from Glasgow to Inverness past Loch Lomond, Glencoe, and Fort William — one of the most beautiful drives in the world."
    }
  },

  // ─── Edinburgh Airport ────────────────────────────────────────
  {
    id: 133,
    category: "general",
    question: "Edinburgh Airport's current terminal was officially opened on 27 May 1977. By whom?",
    year: 1977,
    eric: {
      options: ["Queen Elizabeth II", "The Duke of Edinburgh", "The Secretary of State for Scotland", "The Lord Provost of Edinburgh"],
      correct: 0,
      explanation: "Queen Elizabeth II opened the terminal on 27 May 1977. It opened to the public two days later. The architect was Sir Robert Matthew (RMJM), who died in June 1975 before the terminal was completed."
    },
    ruth: {
      options: [
        "The Queen!",
        "The Queen!",
        "A man with very large scissors",
        "Nobody — they just left the door open and hoped for the best"
      ],
      correct: 0,
      explanation: "Queen Elizabeth II officially opened Edinburgh Airport's new terminal in 1977. Quite the ribbon-cutting!"
    }
  },
  {
    id: 134,
    category: "general",
    question: "Who designed Edinburgh Airport's 1977 terminal building?",
    year: 1977,
    eric: {
      options: ["Sir Robert Matthew (RMJM)", "Sir Basil Spence", "Sir Norman Foster", "Sir James Stirling"],
      correct: 0,
      explanation: "Sir Robert Matthew of Robert Matthew, Johnson-Marshall and Partners (RMJM). He also designed the Royal Commonwealth Pool in Edinburgh. Sadly, he died on 2 June 1975, before the terminal was completed."
    },
    ruth: {
      options: [
        "Sir Robert Matthew",
        "A very talented architect called Bob",
        "Sir Robert Matthew",
        "Eric (in between fitting screwdrivers in cupboards)"
      ],
      correct: 0,
      explanation: "Sir Robert Matthew designed it — he was one of Scotland's leading modernist architects."
    }
  },
  {
    id: 135,
    category: "general",
    question: "What river was diverted to make way for Edinburgh Airport's 1970s redevelopment?",
    year: 1973,
    eric: {
      options: ["The River Almond", "The Water of Leith", "The River Esk", "The Gogar Burn"],
      correct: 0,
      explanation: "The River Almond was diverted starting June 1973, before main terminal construction began in March 1975. All four are real Edinburgh-area waterways."
    },
    ruth: {
      options: [
        "The River Almond",
        "The River Almond",
        "The River Thames (wrong city!)",
        "The River Nile (definitely wrong continent)"
      ],
      correct: 0,
      explanation: "The River Almond had to be moved out of the way! That's quite a commitment to building an airport."
    }
  },
  {
    id: 136,
    category: "general",
    question: "Before it became a civilian airport, Edinburgh's Turnhouse was an RAF base. Which squadron, based there, shot down the first enemy aircraft over Britain in WWII?",
    year: 1939,
    eric: {
      options: ["603 (City of Edinburgh) Squadron", "602 (City of Glasgow) Squadron", "607 (County of Durham) Squadron", "609 (West Riding) Squadron"],
      correct: 0,
      explanation: "603 Squadron shot down a Junkers Ju 88 over the Firth of Forth on 16 October 1939 — the first enemy aircraft shot down over Britain since 1918. Pilots credited: Archie McKellar and George Pinkerton. The Spitfire replica gate guardian at the airport carries 603 Squadron markings."
    },
    ruth: {
      options: [
        "603 (City of Edinburgh) Squadron",
        "The Edinburgh Flying Club (not a real squadron)",
        "603 (City of Edinburgh) Squadron",
        "Squadron 42 (the answer to everything)"
      ],
      correct: 0,
      explanation: "603 Squadron — Edinburgh's own! They shot down the first enemy plane over Britain in WWII, from Turnhouse airfield."
    }
  },
  {
    id: 137,
    category: "general",
    question: "By the time BAA took over Edinburgh Airport in 1971, the old terminal was operating at how many times its design capacity?",
    year: 1971,
    eric: {
      options: ["About four times", "About six times", "About eight times", "About ten times"],
      correct: 2,
      explanation: "The old terminal was running at approximately eight times its design capacity by 1971 — hence the urgent need for the new terminal which opened in 1977."
    },
    ruth: {
      options: [
        "About 8 times — it was bursting at the seams!",
        "About 8 times — it was bursting at the seams!",
        "About a million times (that can't be right)",
        "It was fine, everyone just breathed in"
      ],
      correct: 0,
      explanation: "Eight times its design capacity! No wonder they needed a new one."
    }
  },
  {
    id: 138,
    category: "general",
    question: "What was Edinburgh Airport's first scheduled direct route to continental Europe, and when?",
    year: 1975,
    eric: {
      options: ["Amsterdam, 1975", "Paris, 1973", "Dublin, 1972", "Amsterdam, 1977"],
      correct: 0,
      explanation: "The first direct scheduled continental European route was to Amsterdam in 1975. Dublin service had started earlier (1962) but Ireland isn't continental Europe. By the mid-1980s, Edinburgh also served Paris, Dusseldorf, Brussels, Frankfurt, and Copenhagen."
    },
    ruth: {
      options: [
        "Amsterdam in 1975!",
        "The Moon (Edinburgh was ambitious back then)",
        "Amsterdam in 1975!",
        "Narnia (direct flights on Tuesdays)"
      ],
      correct: 0,
      explanation: "Amsterdam, in 1975 — Edinburgh's first connection to mainland Europe!"
    }
  },
  {
    id: 139,
    category: "general",
    question: "How long is Edinburgh Airport's main runway (06/24)?",
    year: 1977,
    eric: {
      options: ["2,438 metres", "2,496 metres", "2,556 metres", "2,614 metres"],
      correct: 2,
      explanation: "The main runway is 2,556 metres (8,386 feet), completed in 1977. It was built entirely outside the original airfield boundary and is capable of handling all modern airliners, including Concorde. Runway 24 is in use approximately 70% of the time."
    },
    ruth: {
      options: [
        "2,556 metres — long enough for Concorde!",
        "About as long as Eric's list of complaints",
        "2,556 metres — long enough for Concorde!",
        "Very, very long (that's the technical measurement)"
      ],
      correct: 0,
      explanation: "2,556 metres — and yes, Concorde did visit Edinburgh!"
    }
  },
  {
    id: 140,
    category: "general",
    question: "In what year did Edinburgh become the first Scottish airport to exceed 10 million passengers?",
    year: 2014,
    eric: {
      options: ["2012", "2013", "2014", "2015"],
      correct: 2,
      explanation: "Edinburgh hit 10,174,684 passengers in 2014 — the first Scottish airport to break the 10 million barrier. The milestone passenger was on 23 December. Key drivers included new routes from Qatar Airways and United Airlines."
    },
    ruth: {
      options: [
        "2014 — ten million people!",
        "2014 — ten million people!",
        "1947 (they were very busy on the first day)",
        "Yesterday (it felt like it at security)"
      ],
      correct: 0,
      explanation: "2014 — over ten million passengers for the first time. Edinburgh was growing fast!"
    }
  },
  {
    id: 141,
    category: "general",
    question: "How much did Global Infrastructure Partners (GIP) pay for Edinburgh Airport in 2012?",
    year: 2012,
    eric: {
      options: ["£607 million", "£707 million", "£807 million", "£907 million"],
      correct: 2,
      explanation: "GIP paid £807.2 million — considerably more than the £500-700 million analysts had estimated. That's 16.7 times the 2011 EBITDA of £48.3 million. In 2024, VINCI bought 50.01% for £1.27 billion."
    },
    ruth: {
      options: [
        "£807 million — that's a lot of duty-free!",
        "£807 million — that's a lot of duty-free!",
        "50p and a packet of crisps",
        "They won it in a raffle"
      ],
      correct: 0,
      explanation: "£807 million! And in 2024, half of it was sold again for £1.27 billion. Not a bad investment."
    }
  },
  {
    id: 142,
    category: "general",
    question: "On 30 November 1994, an unusual aircraft operated the Edinburgh-Heathrow shuttle. What was it?",
    year: 1994,
    eric: {
      options: ["Concorde G-BOAC", "Concorde G-BOAA", "Concorde G-BOAE", "Concorde G-BOAD"],
      correct: 0,
      explanation: "Concorde G-BOAC made a surprise appearance operating the regular shuttle service. G-BOAE made the final Concorde visit to Edinburgh on 24 October 2003 as part of the farewell tour. G-BOAA ('Alpha Alpha') ended up at the National Museum of Flight at East Fortune."
    },
    ruth: {
      options: [
        "Concorde! On a regular shuttle flight!",
        "Concorde! On a regular shuttle flight!",
        "A very fast bicycle with wings",
        "The Space Shuttle (it overshot Cape Canaveral)"
      ],
      correct: 0,
      explanation: "Concorde turned up on a normal shuttle service! Imagine boarding what you think is a regular flight and finding yourself on Concorde."
    }
  },
  {
    id: 143,
    category: "general",
    question: "How tall is Edinburgh Airport's control tower, opened in 2005?",
    year: 2005,
    eric: {
      options: ["47 metres", "52 metres", "57 metres", "62 metres"],
      correct: 2,
      explanation: "The tower is 57 metres (187 feet) tall, designed by 3DReid architects and clad in diamond-shaped aluminium shingles. It received a Civic Trust Award commendation in 2006."
    },
    ruth: {
      options: [
        "57 metres — quite tall!",
        "57 metres — quite tall!",
        "Tall enough to see Eric's house",
        "So tall they had to warn passing aircraft"
      ],
      correct: 0,
      explanation: "57 metres tall — clad in diamond-shaped aluminium shingles. It's quite the landmark!"
    }
  },
  {
    id: 144,
    category: "general",
    question: "When did the Edinburgh tram finally reach the airport?",
    year: 2014,
    eric: {
      options: ["31 May 2014", "31 May 2013", "14 June 2014", "14 June 2013"],
      correct: 0,
      explanation: "The tram opened on 31 May 2014, three years late and at a cost of nearly £777 million (£231 million over budget). Lord Hardie's inquiry report wasn't published until August 2023."
    },
    ruth: {
      options: [
        "31 May 2014 — only three years late!",
        "It hasn't arrived yet (it's running late)",
        "31 May 2014 — only three years late!",
        "The tram is still being discussed at committee"
      ],
      correct: 0,
      explanation: "31 May 2014 — three years late and £231 million over budget. Very Edinburgh."
    }
  },
  {
    id: 145,
    category: "general",
    question: "What was the first aircraft type to make a commercial flight from Edinburgh Airport on 19 May 1947?",
    year: 1947,
    eric: {
      options: ["Douglas Dakota (C-47)", "Vickers Viking", "de Havilland Dragon Rapide", "Avro Anson"],
      correct: 0,
      explanation: "An 18-seat Douglas C-47 (Dakota) operated the first BEA service from London Northolt to Shetland, stopping at Edinburgh and Aberdeen. BEA later progressed through Vickers Vikings, Viscounts, and Vanguards."
    },
    ruth: {
      options: [
        "A Dakota — an 18-seat propeller plane!",
        "A Dakota — an 18-seat propeller plane!",
        "A very large paper aeroplane",
        "Concorde (wait, that wasn't until 1994)"
      ],
      correct: 0,
      explanation: "A Douglas Dakota with just 18 seats! From London Northolt to Shetland, stopping at Edinburgh."
    }
  },
  {
    id: 146,
    category: "general",
    question: "What is Edinburgh Airport's ICAO code?",
    year: null,
    eric: {
      options: ["EGPH", "EGPE", "EGPF", "EGPD"],
      correct: 0,
      explanation: "EGPH. EGPE is Inverness, EGPF is Glasgow, EGPD is Aberdeen. The IATA code is EDI. All Scottish airports share the EGP prefix in their ICAO codes."
    },
    ruth: {
      options: [
        "EGPH",
        "ABCD (too simple)",
        "EGPH",
        "HELP (that's what Eric types at check-in)"
      ],
      correct: 0,
      explanation: "EGPH! The EG means UK, P means Scotland, H means... well, it just does."
    }
  },
  {
    id: 147,
    category: "general",
    question: "When was Edinburgh Airport's old crosswind runway 12/30 officially closed?",
    year: 2018,
    eric: {
      options: ["29 March 2017", "29 March 2018", "29 September 2018", "29 September 2017"],
      correct: 1,
      explanation: "Runway 12/30 was officially withdrawn from use on 29 March 2018. The site is now the subject of a £1 billion housing development ('Elements Edinburgh') for 3,000 homes, approved by Edinburgh Council in December 2024."
    },
    ruth: {
      options: [
        "29 March 2018",
        "29 March 2018",
        "It's still open (planes just ignore it)",
        "They're building houses on it now!"
      ],
      correct: 0,
      explanation: "29 March 2018 — and now they're planning to build 3,000 houses on it!"
    }
  },
  {
    id: 148,
    category: "general",
    question: "Which airline launched Edinburgh's first direct service to the Middle East in 2014?",
    year: 2014,
    eric: {
      options: ["Qatar Airways", "Emirates", "Etihad Airways", "Turkish Airlines"],
      correct: 0,
      explanation: "Qatar Airways launched Edinburgh to Doha on 28 May 2014, using a Boeing 787 Dreamliner — Edinburgh's first scheduled Dreamliner service. It started with five flights per week; now runs 14 per week."
    },
    ruth: {
      options: [
        "Qatar Airways — Edinburgh to Doha!",
        "Qatar Airways — Edinburgh to Doha!",
        "Camel Airways (not a real airline)",
        "EasyJet (they go everywhere eventually)"
      ],
      correct: 0,
      explanation: "Qatar Airways, flying to Doha on a shiny new Boeing 787 Dreamliner!"
    }
  },
  {
    id: 149,
    category: "general",
    question: "What was Edinburgh Airport's all-time passenger record before COVID, set in 2019?",
    year: 2019,
    eric: {
      options: ["13,747,830", "14,247,830", "14,747,830", "15,247,830"],
      correct: 2,
      explanation: "Edinburgh handled 14,747,830 passengers in 2019. COVID then slashed this by 76% to just 3.48 million in 2020. The airport recovered to set a new all-time record of 15.8 million in 2024."
    },
    ruth: {
      options: [
        "Nearly 15 million passengers!",
        "Nearly 15 million passengers!",
        "About twelve (it was a quiet year)",
        "Too many (have you seen the queues?)"
      ],
      correct: 0,
      explanation: "Nearly 15 million! Then COVID happened. But by 2024 it bounced back to 15.8 million — a new record."
    }
  },
  {
    id: 150,
    category: "general",
    question: "Which Spanish construction company owned Edinburgh Airport (via BAA) from 2006 to 2012?",
    year: 2006,
    eric: {
      options: ["Ferrovial", "ACS Group", "Sacyr", "FCC"],
      correct: 0,
      explanation: "Ferrovial acquired BAA plc for approximately £10.3 billion in June 2006. The Competition Commission later forced BAA to sell Edinburgh, which went to Global Infrastructure Partners for £807 million in April 2012."
    },
    ruth: {
      options: [
        "Ferrovial",
        "Ferrovial",
        "A company nobody in Edinburgh could pronounce",
        "Eric bought it with his pension"
      ],
      correct: 0,
      explanation: "Ferrovial — a Spanish company that bought the whole of BAA for £10.3 billion!"
    }
  },
  {
    id: 151,
    category: "general",
    question: "A fibreglass Spitfire replica serves as a gate guardian at Edinburgh Airport. Which squadron's markings does it carry?",
    year: null,
    eric: {
      options: ["603 (City of Edinburgh) Squadron", "602 (City of Glasgow) Squadron", "1 Squadron RAF", "43 (Fighting Cocks) Squadron"],
      correct: 0,
      explanation: "The replica carries 603 (City of Edinburgh) Squadron markings, marked as L1067 and nicknamed 'Blue Peter.' 603 Squadron was based at Turnhouse and scored the first aerial kill over Britain in WWII on 16 October 1939."
    },
    ruth: {
      options: [
        "603 (City of Edinburgh) Squadron — local heroes!",
        "603 (City of Edinburgh) Squadron — local heroes!",
        "It's a real Spitfire (it's just very tired)",
        "Red Arrows (those are the fast colourful ones)"
      ],
      correct: 0,
      explanation: "603 Squadron — Edinburgh's own fighter squadron from WWII! They shot down the first enemy plane over Britain."
    }
  },
  {
    id: 152,
    category: "general",
    question: "How much over budget was the Edinburgh tram project that reached the airport in 2014?",
    year: 2014,
    eric: {
      options: ["£131 million over", "£181 million over", "£231 million over", "£281 million over"],
      correct: 2,
      explanation: "The tram cost nearly £777 million — £231 million over the original budget. It was also three years late. Lord Hardie's public inquiry report wasn't published until August 2023."
    },
    ruth: {
      options: [
        "£231 million over budget! Only in Edinburgh...",
        "£231 million over budget! Only in Edinburgh...",
        "It was actually under budget (just kidding)",
        "So much over budget they stopped counting"
      ],
      correct: 0,
      explanation: "£231 million over budget and three years late. The Edinburgh tram — a tale as old as time."
    }
  },

  // ─── Vauxhall Cavalier ────────────────────────────────────────
  {
    id: 153,
    category: "general",
    question: "The Vauxhall Cavalier Mk2 estate had its rear tailgates manufactured in an unlikely location. Where?",
    year: 1983,
    eric: {
      options: [
        "By Holden in Australia",
        "By Isuzu in Japan",
        "By Daewoo in South Korea",
        "By Saab in Sweden"
      ],
      correct: 0,
      explanation: "The Mk2 estate's tailgates were manufactured by Holden in Australia (based on the Holden Camira wagon) and shipped to Luton for assembly. A truly global parts-bin exercise."
    },
    ruth: {
      options: [
        "Australia! The tailgates came from Down Under!",
        "Australia! The tailgates came from Down Under!",
        "They were hand-carved by elves in Luton",
        "Eric's cupboard under the stairs (surprisingly roomy)"
      ],
      correct: 0,
      explanation: "Australia! Holden built the tailgates and shipped them halfway around the world to Luton. Globalisation, 1980s style."
    }
  },
  {
    id: 154,
    category: "general",
    question: "The Mk2 Cavalier Calibre special edition (1987-88) was styled by Aston Martin Tickford. How many were built, and in what colour?",
    year: 1987,
    eric: {
      options: [
        "500, all in Carmine Red",
        "500, all in Monaco Blue",
        "750, all in Carmine Red",
        "250, all in Black"
      ],
      correct: 0,
      explanation: "Only 500 Calibres were built, all in Carmine Red. Based on the SRi 130 with a Tickford bodykit built by Irmscher, Recaro seats, and trip computer. By 2020, only 2 genuine examples were believed to remain on the road."
    },
    ruth: {
      options: [
        "500, all in red — and only 2 survive!",
        "500, all in red — and only 2 survive!",
        "Just the one, and Eric's got it",
        "Millions, in every colour of the rainbow"
      ],
      correct: 0,
      explanation: "500 Calibres, all Carmine Red, styled by Aston Martin Tickford. Only 2 are believed to still be on the road!"
    }
  },
  {
    id: 155,
    category: "general",
    question: "The Mk3 Cavalier's 2.0-litre 16-valve Ecotec cylinder head was co-developed with which unlikely engineering partner?",
    year: 1994,
    eric: {
      options: ["Lotus", "Cosworth", "Porsche", "Ricardo"],
      correct: 0,
      explanation: "Lotus Engineering co-developed the X20XEV Ecotec head with Opel. Ironically, it produced less power than the 'Red Top' C20XE it replaced (136 bhp vs 150 bhp) due to emissions requirements."
    },
    ruth: {
      options: [
        "Lotus! (the sports car people!)",
        "Lotus! (the sports car people!)",
        "NASA (they had a spare afternoon)",
        "Eric (he's good with engines too)"
      ],
      correct: 0,
      explanation: "Lotus helped design the engine head — but it was actually less powerful than the one it replaced. Emissions rules!"
    }
  },
  {
    id: 156,
    category: "general",
    question: "What was the engine displacement of the Cavalier Mk1's launch engine in November 1975?",
    year: 1975,
    eric: {
      options: ["1897 cc", "1798 cc", "1979 cc", "1584 cc"],
      correct: 0,
      explanation: "The Mk1 launched with a 1897 cc CIH (Cam-In-Head) engine, code 19S, producing 90 PS. Bore was 93 mm, stroke 69.8 mm. The 1979 cc engine (code 20S/20E) replaced it in 1978, adding hydraulic tappets."
    },
    ruth: {
      options: [
        "1897 cc",
        "About the size of a sewing machine",
        "1897 cc",
        "Big enough (it's not a sports car)"
      ],
      correct: 0,
      explanation: "1897 cc — a nicely odd number. The Mk1 was rear-wheel drive, using Opel's CIH engine design."
    }
  },
  {
    id: 157,
    category: "general",
    question: "Vauxhall refused to rename the Cavalier to 'Vectra' for the Mk3. Why?",
    year: 1988,
    eric: {
      options: [
        "They feared it sounded too much like the Vauxhall Victor",
        "Market research showed UK buyers preferred 'Cavalier'",
        "Ford threatened trademark action over the name",
        "The name Vectra was not trademarked in the UK until 1994"
      ],
      correct: 0,
      explanation: "Vauxhall kept 'Cavalier' because they thought 'Vectra' sounded too much like the much-maligned Vauxhall Victor. The Mk3 was sold as the Opel Vectra A across continental Europe, but Britain kept the Cavalier name until the Vectra B arrived in October 1995."
    },
    ruth: {
      options: [
        "It sounded too much like the old Vauxhall Victor!",
        "It sounded too much like the old Vauxhall Victor!",
        "Nobody could spell it",
        "Eric threatened to write a strongly worded letter"
      ],
      correct: 0,
      explanation: "They thought 'Vectra' sounded like 'Victor' — and the Victor was not fondly remembered! The name finally appeared in 1995."
    }
  },
  {
    id: 158,
    category: "general",
    question: "The Cavalier Turbo 4x4 (Mk3, 1992-94) had a C20LET engine. What was its power output and 0-60 time?",
    year: 1992,
    eric: {
      options: [
        "204 bhp, 6.5 seconds",
        "200 bhp, 6.8 seconds",
        "204 bhp, 7.2 seconds",
        "210 bhp, 6.5 seconds"
      ],
      correct: 0,
      explanation: "The C20LET produced exactly 204 bhp at 6000 rpm with 280 Nm of torque. 0-60 in 6.5 seconds, top speed 149 mph. Now extremely rare — the transfer box is a known weak point and commands five-figure prices."
    },
    ruth: {
      options: [
        "204 bhp and 0-60 in 6.5 seconds — quick!",
        "204 bhp and 0-60 in 6.5 seconds — quick!",
        "Faster than Eric on his bicycle",
        "About 3 horsepower (it was a Cavalier, after all)"
      ],
      correct: 0,
      explanation: "204 bhp and 0-60 in 6.5 seconds! Not bad for a car most people think of as a sales rep's motor."
    }
  },
  {
    id: 159,
    category: "general",
    question: "The Mk2 Cavalier was runner-up for European Car of the Year in 1982. Which car beat it?",
    year: 1982,
    eric: {
      options: ["Renault 9", "Volkswagen Polo Mk2", "Ford Sierra", "Austin Maestro"],
      correct: 0,
      explanation: "The Renault 9 won, with the Cavalier Mk2 second and the VW Polo Mk2 third. The Ford Sierra wasn't launched until October 1982. The Cavalier never won the award in any of its three generations."
    },
    ruth: {
      options: [
        "The Renault 9 (really?!)",
        "The Renault 9 (really?!)",
        "A horse and cart",
        "Nothing — it won! (actually it didn't)"
      ],
      correct: 0,
      explanation: "The Renault 9! Beaten by a car hardly anyone remembers today. The Cavalier deserved better."
    }
  },
  {
    id: 160,
    category: "general",
    question: "The Mk3 Cavalier's 1.7 turbodiesel engine was built by which Japanese manufacturer?",
    year: 1992,
    eric: {
      options: ["Isuzu", "Mitsubishi", "Yanmar", "Kubota"],
      correct: 0,
      explanation: "The 1.7 TD (code TC4EE1/X17DT) was built by Isuzu, producing 82 bhp. Isuzu had a long-standing relationship with GM. An oddity: a Japanese diesel in a supposedly European car."
    },
    ruth: {
      options: [
        "Isuzu — a Japanese engine in a Vauxhall!",
        "Isuzu — a Japanese engine in a Vauxhall!",
        "Eric (he built it in the cupboard under the stairs)",
        "Toyota (everyone guesses Toyota)"
      ],
      correct: 0,
      explanation: "Isuzu! A Japanese diesel engine in what everyone thought was a European car."
    }
  },
  {
    id: 161,
    category: "general",
    question: "John Cleland won the 1995 BTCC championship driving a Cavalier. How much power did his race car produce?",
    year: 1995,
    eric: {
      options: ["270 bhp", "280 bhp", "290 bhp", "300 bhp"],
      correct: 2,
      explanation: "The championship-winning Cavalier (chassis #022) produced 290 bhp through Swindon-built engines with an X-Trac 6-speed sequential gearbox, weighing just 975 kg. It was the Cavalier's last BTCC season before being replaced by the Vectra."
    },
    ruth: {
      options: [
        "290 bhp — a proper racing car!",
        "290 bhp — a proper racing car!",
        "About the same as a lawnmower",
        "Enough to win the championship (which it did!)"
      ],
      correct: 0,
      explanation: "290 bhp in a car weighing just 975 kg! John Cleland won the 1995 championship — the Cavalier's triumphant farewell."
    }
  },
  {
    id: 162,
    category: "general",
    question: "How many Mk1 Cavalier Centaur convertibles were built between 1978 and 1979?",
    year: 1978,
    eric: {
      options: ["98", "108", "118", "128"],
      correct: 2,
      explanation: "Only 118 Centaur convertibles were built. The first 3 were by Crayford, the rest by Magraw Engineering. Based on the 1900 GLS Coupe with a T-bar for structural rigidity. Conversion cost £2,808. Fewer than 30 were believed to survive by 2007."
    },
    ruth: {
      options: [
        "Just 118 — incredibly rare!",
        "Just 118 — incredibly rare!",
        "Millions (Vauxhall was very popular in the 1970s)",
        "One, and it's in Eric's garage"
      ],
      correct: 0,
      explanation: "Only 118 were ever made! Fewer than 30 are thought to survive. If you've got one, hold onto it."
    }
  }

];
