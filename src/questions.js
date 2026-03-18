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
  },

  // ─── Buy cheap, buy again ─────────────────────────────────────
  {
    id: 163,
    category: "general",
    question: "Terry Pratchett's 'Sam Vimes Boots Theory of Socioeconomic Unfairness' appears in which 1993 Discworld novel?",
    year: 1993,
    eric: {
      options: ["Men at Arms", "Guards! Guards!", "Feet of Clay", "Jingo"],
      correct: 0,
      explanation: "Men at Arms (1993). Vimes explains that a good pair of boots costs $50 and lasts ten years, but cheap $10 boots that fall apart after a season mean a poor man spends $100 on boots over the same period — and still has wet feet."
    },
    ruth: {
      options: [
        "Men at Arms",
        "Buy Cheap, Buy Twice: A Novel",
        "Men at Arms",
        "Harry Potter and the Badly Made Boots"
      ],
      correct: 0,
      explanation: "Men at Arms! Sam Vimes explains why being poor is expensive — cheap boots fall apart, so you spend more replacing them than if you'd bought good ones."
    }
  },
  {
    id: 164,
    category: "general",
    question: "In Terry Pratchett's boots theory, how much did a good pair of boots cost, and how long did they last?",
    year: 1993,
    eric: {
      options: [
        "$50, ten years",
        "$40, ten years",
        "$50, five years",
        "$30, ten years"
      ],
      correct: 0,
      explanation: "Good boots: $50, last ten years. Cheap boots: $10, last a season or two. Over ten years, the poor man spends $100 and still has wet feet. The rich man spends $50 and has dry feet. That's the Sam Vimes 'Boots' Theory."
    },
    ruth: {
      options: [
        "$50 and they lasted ten years!",
        "$50 and they lasted ten years!",
        "$1 million (very fancy boots)",
        "Free (he nicked them)"
      ],
      correct: 0,
      explanation: "$50 for boots that last ten years — while the cheap $10 boots meant spending $100 over the same period. Buy cheap, buy twice!"
    }
  },
  {
    id: 165,
    category: "general",
    question: "The quote 'It's unwise to pay too much, but it's worse to pay too little' is often attributed to which 19th-century figure?",
    year: null,
    eric: {
      options: ["John Ruskin", "Charles Dickens", "Oscar Wilde", "Benjamin Franklin"],
      correct: 0,
      explanation: "Often attributed to John Ruskin (1819-1900), the Victorian painter, poet, and social critic. The full quote continues: 'When you pay too much, you lose a little money — that is all. When you pay too little, you sometimes lose everything.'"
    },
    ruth: {
      options: [
        "John Ruskin",
        "Eric (he says this every time Ruth buys something)",
        "John Ruskin",
        "The man in the cheap boots"
      ],
      correct: 0,
      explanation: "John Ruskin! Though Eric probably says something very similar every time someone buys the budget option."
    }
  },
  {
    id: 166,
    category: "general",
    question: "What is the economic term for a saving that actually costs you more in the long run?",
    year: null,
    eric: {
      options: ["False economy", "Diminishing returns", "Opportunity cost", "Sunk cost"],
      correct: 0,
      explanation: "A false economy — an apparent saving that leads to greater expenditure over time. Cheap tools that break, cheap paint that needs three coats, cheap batteries that die in a day. Eric knows this."
    },
    ruth: {
      options: [
        "A false economy",
        "A false economy",
        "Bargain hunting gone wrong",
        "Tuesday (everything goes wrong on Tuesdays)"
      ],
      correct: 0,
      explanation: "A false economy! When saving money now costs you more later. As Eric would say: buy cheap, buy again."
    }
  },
  {
    id: 167,
    category: "general",
    question: "Cheap cling film won't cling, cheap bin bags split, cheap sellotape won't stick. What Scottish engineer said 'there is hardly anything in the world that some man cannot make a little worse and sell a little cheaper'?",
    year: null,
    eric: {
      options: ["John Ruskin", "James Watt", "Thomas Telford", "Andrew Carnegie"],
      correct: 0,
      explanation: "This quote is also attributed to John Ruskin (though the attribution is disputed). The full version adds: 'and the people who consider price only are this man's lawful prey.' Eric would wholeheartedly agree."
    },
    ruth: {
      options: [
        "John Ruskin (he had a lot to say about cheap things)",
        "John Ruskin (he had a lot to say about cheap things)",
        "The man who invented cheap cling film (may he be ashamed)",
        "Eric, every time he opens a cheap bin bag"
      ],
      correct: 0,
      explanation: "John Ruskin again! He really had it in for cheap goods. And he was right — cheap cling film is the worst."
    }
  },
  {
    id: 168,
    category: "general",
    question: "A cheap screwdriver that strips on first use, a cheap paintbrush that sheds bristles, cheap shoes that leak after a week. Which of these is NOT a real consumer rights term?",
    year: null,
    eric: {
      options: [
        "Planned obsolescence avoidance",
        "Not of satisfactory quality",
        "Not fit for purpose",
        "Not as described"
      ],
      correct: 0,
      explanation: "'Planned obsolescence avoidance' isn't a consumer rights term. The real ones — 'not of satisfactory quality,' 'not fit for purpose,' and 'not as described' — are the three key tests under UK consumer law (Consumer Rights Act 2015). Eric probably knows them by heart."
    },
    ruth: {
      options: [
        "Planned obsolescence avoidance (that's made up!)",
        "Planned obsolescence avoidance (that's made up!)",
        "They're all made up (like most legal terms)",
        "Eric's Law of Cheap Tools"
      ],
      correct: 0,
      explanation: "'Planned obsolescence avoidance' — the other three are real consumer rights under UK law!"
    }
  },
  {
    id: 169,
    category: "general",
    question: "If a cheap £10 kettle lasts 2 years but a quality £40 kettle lasts 10 years, how much do you spend on cheap kettles over 10 years?",
    year: null,
    eric: {
      options: ["£50", "£40", "£60", "£30"],
      correct: 0,
      explanation: "Five cheap kettles × £10 = £50, versus one quality kettle at £40. You spend £10 more AND endure five kettle failures. The false economy in action. Buy cheap, buy again."
    },
    ruth: {
      options: [
        "£50 — more than the good kettle!",
        "£50 — more than the good kettle!",
        "Nothing (just boil water in a pan)",
        "Eric can calculate this faster than anyone"
      ],
      correct: 0,
      explanation: "£50 on cheap kettles vs £40 on one good one! And you had to go kettle shopping five times. Buy cheap, buy again."
    }
  },
  {
    id: 170,
    category: "general",
    question: "The phrase 'buy cheap, buy twice' has an even more Scottish variant. What is it?",
    year: null,
    eric: {
      options: [
        "Buy cheap, buy again",
        "Cheap gear is dear gear",
        "A penny saved is a penny wasted",
        "All of these are real Scottish variants"
      ],
      correct: 1,
      explanation: "'Cheap gear is dear gear' — a classic Scottish saying meaning cheap equipment ends up being expensive. 'Buy cheap, buy again' is more of a family variant. The Scots have always understood that quality pays for itself."
    },
    ruth: {
      options: [
        "Cheap gear is dear gear",
        "Cheap gear is dear gear",
        "Och, that's rubbish, buy another one",
        "If it's cheap, dinnae buy it"
      ],
      correct: 0,
      explanation: "'Cheap gear is dear gear' — the Scots know that cheap stuff ends up costing you more!"
    }
  },
  {
    id: 171,
    category: "general",
    question: "The Buy Me Once movement promotes buying quality items that last a lifetime. Their website lists products with the longest warranties. What is the key principle?",
    year: null,
    eric: {
      options: [
        "Cost per use, not purchase price",
        "Always buy the most expensive option",
        "Only buy items with a 25-year warranty",
        "Never buy anything manufactured in China"
      ],
      correct: 0,
      explanation: "Cost per use — a £100 coat worn 500 times costs 20p per use, while a £30 coat worn 20 times costs £1.50 per use. The expensive coat is actually 7.5 times cheaper per wearing. Eric has been saying this for decades."
    },
    ruth: {
      options: [
        "Work out the cost per use, not just the price tag!",
        "Work out the cost per use, not just the price tag!",
        "Never buy anything ever (saves the most money)",
        "Ask Eric — he'll tell you (at length)"
      ],
      correct: 0,
      explanation: "Cost per use! A quality item used hundreds of times is cheaper per use than a bargain that falls apart after a month."
    }
  },
  {
    id: 172,
    category: "general",
    question: "Eric's philosophy of 'buy cheap, buy again' applies especially to tools. What did Philip of Macedon supposedly say about cheapness?",
    year: null,
    eric: {
      options: [
        "I do not steal victories — cheap victories are worthless",
        "There is no such thing as cheap; only different kinds of expensive",
        "A cheap sword costs more than an expensive one — in blood",
        "None of these — Philip never discussed bargain shopping"
      ],
      correct: 3,
      explanation: "None of these! Philip of Macedon was too busy conquering Greece to discuss the false economy of cheap screwdrivers. But if he had, he'd have agreed with Eric."
    },
    ruth: {
      options: [
        "He never said anything about it (trick question!)",
        "He never said anything about it (trick question!)",
        "He never said anything about it (trick question!)",
        "He never said anything about it (trick question!)"
      ],
      correct: 0,
      explanation: "Trick question! Philip of Macedon never commented on bargain-hunting. But Eric probably would have given him an earful about cheap Macedonian swords."
    }
  },

  // ─── Toyota Aygo (the gloriously basic car) ───────────────────
  {
    id: 193,
    category: "general",
    question: "The Toyota Aygo's boot holds just 139 litres. How does this compare to a standard UK wheelie bin?",
    year: 2005,
    eric: {
      options: [
        "The wheelie bin is bigger (240 litres)",
        "They're about the same (both ~140 litres)",
        "The Aygo is slightly bigger (by about 20 litres)",
        "A wheelie bin holds 180 litres"
      ],
      correct: 0,
      explanation: "A standard UK wheelie bin holds 240 litres — the Aygo's boot is literally smaller than a bin. You could fit more shopping in your bin than in the car you drove to get it."
    },
    ruth: {
      options: [
        "The bin is bigger! 240 litres vs 139!",
        "The bin is bigger! 240 litres vs 139!",
        "Eric's cupboard under the stairs is bigger too",
        "The Aygo doesn't have a boot — it has a suggestion"
      ],
      correct: 0,
      explanation: "The wheelie bin wins! At 240 litres, your bin has 100 litres more space than the Aygo's boot. Buy cheap, buy again?"
    }
  },
  {
    id: 194,
    category: "general",
    question: "The first-generation Toyota Aygo has a top speed that fails to reach what milestone?",
    year: 2005,
    eric: {
      options: [
        "100 mph (top speed: 98 mph)",
        "110 mph (top speed: 108 mph)",
        "90 mph (top speed: 88 mph)",
        "120 mph (top speed: 118 mph)"
      ],
      correct: 0,
      explanation: "The Gen 1 Aygo tops out at 98 mph — it physically cannot reach 100 mph. Its 998cc 3-cylinder engine produces 67 bhp. For context, a Porsche 911 Turbo S does 0-60 in 2.6 seconds; the Aygo takes 14.2 seconds."
    },
    ruth: {
      options: [
        "100 mph! It can't even break the ton!",
        "100 mph! It can't even break the ton!",
        "The speed of sound (unrealistic expectations)",
        "Walking pace (on a steep hill, possibly)"
      ],
      correct: 0,
      explanation: "It can't reach 100 mph! The engine is less than one litre — 998cc of pure ambition and very little power."
    }
  },
  {
    id: 195,
    category: "general",
    question: "Toyota's 2014 marketing slogan for the Aygo was phonetically unfortunate. What was it?",
    year: 2014,
    eric: {
      options: [
        "Go Fun Yourself",
        "Fun On The Go",
        "Fun Goes Further",
        "Get Up And Go"
      ],
      correct: 0,
      explanation: "'Go Fun Yourself' — read it out loud quickly. Toyota insisted the double entendre was intentional. The campaign won advertising awards. The slogan appeared on TV adverts, billboards, and the side of buses."
    },
    ruth: {
      options: [
        "Go Fun Yourself (say it fast!)",
        "Go Fun Yourself (say it fast!)",
        "Please Buy This Car, We're Begging You",
        "It's Cheap And It Goes (Usually)"
      ],
      correct: 0,
      explanation: "'Go Fun Yourself'! Say it quickly and you'll see why people raised their eyebrows. Toyota said it was deliberate. Sure it was."
    }
  },
  {
    id: 196,
    category: "general",
    question: "The Aygo, Citroen C1, and Peugeot 107 were built on the same production line. Where?",
    year: 2005,
    eric: {
      options: [
        "TPCA plant, Kolin, Czech Republic",
        "Toyota factory, Burnaston, Derbyshire",
        "PSA plant, Trnava, Slovakia",
        "Toyota factory, Valenciennes, France"
      ],
      correct: 0,
      explanation: "The TPCA (Toyota Peugeot Citroen Automobile) plant in Kolin-Ovcary, Czech Republic. Three identical cars with different badges rolled down the same production line. You were essentially paying for a logo. Nearly 4 million were built there."
    },
    ruth: {
      options: [
        "Czech Republic — three cars, one factory, different badges!",
        "Czech Republic — three cars, one factory, different badges!",
        "Eric's garage (he's branching out)",
        "A car boot sale (appropriate for the Aygo)"
      ],
      correct: 0,
      explanation: "One factory in the Czech Republic made three 'different' cars! Same car, three badges, three prices."
    }
  },
  {
    id: 197,
    category: "general",
    question: "The Aygo weighs about 840 kg. How many polar bears is that equivalent to?",
    year: 2005,
    eric: {
      options: [
        "About 2 (male polar bear ~450 kg)",
        "About 3 (male polar bear ~280 kg)",
        "About 4 (male polar bear ~210 kg)",
        "About 1.5 (male polar bear ~560 kg)"
      ],
      correct: 0,
      explanation: "A male polar bear weighs about 450 kg, so the Aygo weighs less than two polar bears. At 840 kg, a strong gust on the motorway is a genuine concern. The Aygo Crazy concept stuffed a 200 bhp MR2 engine into one — that weighed about the same."
    },
    ruth: {
      options: [
        "Less than two polar bears!",
        "Less than two polar bears!",
        "About the same as Eric's suitcase collection",
        "So light it blows away in a stiff breeze"
      ],
      correct: 0,
      explanation: "Less than two polar bears! The Aygo is one of the lightest cars on sale. Which explains a lot about its motorway behaviour."
    }
  },

  // ─── Yes Minister / Yes Prime Minister ────────────────────────
  {
    id: 198,
    category: "general",
    question: "In Yes Minister, when Sir Humphrey describes a ministerial decision as 'courageous,' what does he really mean?",
    year: 1980,
    eric: {
      options: [
        "It will lose you the election",
        "It will lose you votes",
        "It will upset the civil service",
        "It will attract media criticism"
      ],
      correct: 0,
      explanation: "In the civil service code: 'controversial' means it will lose you votes; 'courageous' means it will lose you the election. The word 'courageous' has genuinely entered British political vocabulary with this meaning."
    },
    ruth: {
      options: [
        "It will lose you the election!",
        "It will lose you the election!",
        "He actually means courageous (he doesn't)",
        "It means 'well done' (it really doesn't)"
      ],
      correct: 0,
      explanation: "'Courageous' = career-ending! The most devastating word in the civil service vocabulary."
    }
  },
  {
    id: 199,
    category: "general",
    question: "What is Sir Humphrey Appleby's full set of honours?",
    year: 1980,
    eric: {
      options: [
        "GCB, KBE, MVO, MA (Oxon)",
        "KCB, CBE, MVO, MA (Oxon)",
        "GCB, KBE, OBE, MA (Cantab)",
        "KCB, KBE, MVO, BA (Oxon)"
      ],
      correct: 0,
      explanation: "Sir Humphrey Appleby, GCB, KBE, MVO, MA (Oxon) — Knight Grand Cross of the Order of the Bath, Knight Commander of the Order of the British Empire, Member of the Royal Victorian Order, Master of Arts from Oxford."
    },
    ruth: {
      options: [
        "GCB, KBE, MVO, MA (Oxon) — lots of letters!",
        "GCB, KBE, MVO, MA (Oxon) — lots of letters!",
        "Too many to fit on a business card",
        "He made most of them up (he didn't, they're all real)"
      ],
      correct: 0,
      explanation: "GCB, KBE, MVO, MA (Oxon) — Sir Humphrey had more letters after his name than most people have in their name."
    }
  },
  {
    id: 200,
    category: "general",
    question: "In 'The Compassionate Society,' what is remarkable about the brand-new hospital?",
    year: 1981,
    eric: {
      options: [
        "It has 500 admin staff but no doctors, nurses, or patients",
        "It has been built on the wrong site",
        "It has no operating theatre but three boardrooms",
        "Its budget has been entirely spent on car parking"
      ],
      correct: 0,
      explanation: "The hospital has 500 administrative staff running it perfectly — but no medical staff and no patients. Hacker's solution: house 1,000 Cuban refugees there. One of the most famous episodes."
    },
    ruth: {
      options: [
        "500 administrators but no patients!",
        "500 administrators but no patients!",
        "It was accidentally built upside down",
        "Sir Humphrey lost the key (again)"
      ],
      correct: 0,
      explanation: "A hospital running with 500 admin staff and zero patients! The best satire because it's barely an exaggeration."
    }
  },
  {
    id: 201,
    category: "general",
    question: "What fictional government department does Jim Hacker run in Yes Minister?",
    year: 1980,
    eric: {
      options: [
        "Department of Administrative Affairs",
        "Department of Public Affairs",
        "Ministry of Administrative Services",
        "Department of Government Administration"
      ],
      correct: 0,
      explanation: "The Department of Administrative Affairs (DAA) — described as an unglamorous political graveyard. Hacker had been Shadow Agriculture Minister for seven years and was disappointed with the posting."
    },
    ruth: {
      options: [
        "The Department of Administrative Affairs",
        "The Department of Administrative Affairs",
        "The Department of Doing Nothing Very Much",
        "The Ministry of Silly Walks (wrong show)"
      ],
      correct: 0,
      explanation: "The Department of Administrative Affairs — the most boring-sounding department possible. Which was the point."
    }
  },
  {
    id: 202,
    category: "general",
    question: "Jim Hacker's political party is never named. What colour rosette does he wear at his constituency declaration?",
    year: 1980,
    eric: {
      options: ["White", "Yellow", "Purple", "Orange"],
      correct: 0,
      explanation: "Hacker wears a white rosette — neither red (Labour) nor blue (Conservative). The party is deliberately ambiguous. HQ is 'Central House' (combining Conservative Central Office and Labour's Transport House). The words 'Labour' and 'Conservative' are never used."
    },
    ruth: {
      options: [
        "White — neither red nor blue!",
        "White — neither red nor blue!",
        "Tartan (he's secretly Scottish)",
        "He forgot his rosette (very Hacker)"
      ],
      correct: 0,
      explanation: "White! The writers deliberately made his party unidentifiable so the satire worked whoever was in power."
    }
  },
  {
    id: 203,
    category: "general",
    question: "Yes Minister was inspired by the published diaries of which Labour cabinet minister?",
    year: 1980,
    eric: {
      options: ["Richard Crossman", "Tony Benn", "Barbara Castle", "Denis Healey"],
      correct: 0,
      explanation: "Richard Crossman's diaries (published 1974) recorded officials saying 'Yes, Minister! No, Minister! If you wish it, Minister!' — giving the show its title. His struggles with Permanent Secretary Dame Evelyn Sharp directly inspired the Hacker-Humphrey dynamic."
    },
    ruth: {
      options: [
        "Richard Crossman — his diaries inspired the title!",
        "Richard Crossman — his diaries inspired the title!",
        "Jim Hacker (he's not real, Ruth)",
        "Sir Humphrey (definitely not real)"
      ],
      correct: 0,
      explanation: "Richard Crossman! His real diary entries about civil servants saying 'Yes, Minister!' gave the show its name."
    }
  },
  {
    id: 204,
    category: "general",
    question: "On 20 January 1984, Margaret Thatcher performed a sketch with the Yes Minister cast. What was the premise?",
    year: 1984,
    eric: {
      options: [
        "Thatcher as PM proposing to abolish economists",
        "Thatcher as PM ordering Sir Humphrey to cut red tape",
        "Thatcher sacking Hacker and taking over his department",
        "Thatcher proposing a Ministry of Common Sense"
      ],
      correct: 0,
      explanation: "Thatcher played the PM proposing to abolish economists, alongside Paul Eddington and Nigel Hawthorne. She co-wrote it with Press Secretary Bernard Ingham. Jonathan Lynn's acceptance speech: 'Thank you for taking your rightful place in the field of situation comedy.' Everyone except Thatcher laughed."
    },
    ruth: {
      options: [
        "She wanted to abolish economists!",
        "She wanted to abolish economists!",
        "She played Sir Humphrey (imagine!)",
        "She cancelled the show (she loved it too much)"
      ],
      correct: 0,
      explanation: "Thatcher played the PM wanting to abolish economists! She said the show was her favourite programme."
    }
  },
  {
    id: 205,
    category: "general",
    question: "How many total episodes were made across Yes Minister and Yes, Prime Minister (original run)?",
    year: 1988,
    eric: {
      options: ["36", "37", "38", "39"],
      correct: 2,
      explanation: "38 episodes: Yes Minister had 3 series of 7 (= 21) plus the hour-long 'Party Games' special (= 22). Yes, Prime Minister had 2 series of 8 (= 16). Total: 38. Every single one written by Antony Jay and Jonathan Lynn."
    },
    ruth: {
      options: [
        "38 episodes — every one a classic!",
        "38 episodes — every one a classic!",
        "Thousands (it's been running since 1066)",
        "Not enough (they should make more)"
      ],
      correct: 0,
      explanation: "38 episodes of pure comedy gold, all written by the same two people. Quality over quantity."
    }
  },
  {
    id: 206,
    category: "general",
    question: "Who composed the Yes Minister theme tune, incorporating Big Ben chimes?",
    year: 1980,
    eric: {
      options: ["Ronnie Hazlehurst", "Neil Innes", "Howard Goodall", "Dennis Wilson"],
      correct: 0,
      explanation: "Ronnie Hazlehurst, BBC Light Entertainment Musical Director. He also composed themes for Are You Being Served?, Some Mothers Do 'Ave 'Em, and Last of the Summer Wine."
    },
    ruth: {
      options: [
        "Ronnie Hazlehurst",
        "Ronnie Hazlehurst",
        "Big Ben itself (it moonlights as a musician)",
        "Sir Humphrey (he plays the oboe, probably)"
      ],
      correct: 0,
      explanation: "Ronnie Hazlehurst — the man behind some of the most recognisable BBC sitcom themes."
    }
  },
  {
    id: 207,
    category: "general",
    question: "Bernard Woolley's 'irregular verb' conjugation includes: 'I give confidential press briefings; you leak; he...'?",
    year: 1980,
    eric: {
      options: [
        "Has been charged under Section 2a of the Official Secrets Act",
        "Is a traitor to the Crown",
        "Has been referred to the Cabinet Secretary",
        "Is facing a public inquiry"
      ],
      correct: 0,
      explanation: "'I give confidential press briefings; you leak; he's been charged under Section 2a of the Official Secrets Act.' Bernard's 'irregular verbs' game is one of the show's running gags — demonstrating how the same action is described differently depending on who does it."
    },
    ruth: {
      options: [
        "He's been charged under the Official Secrets Act!",
        "He's been charged under the Official Secrets Act!",
        "He's in big trouble",
        "He's been sent to his room"
      ],
      correct: 0,
      explanation: "Charged under the Official Secrets Act! The same action — 'I brief, you leak, he gets arrested.' Classic Bernard."
    }
  },
  {
    id: 208,
    category: "general",
    question: "How many BAFTAs for Best Comedy Series did Yes Minister win consecutively?",
    year: 1982,
    eric: {
      options: ["Three (1980, 1981, 1982)", "Two (1980, 1981)", "Four (1980, 1981, 1982, 1983)", "Three (1981, 1982, 1983)"],
      correct: 0,
      explanation: "Three consecutive BAFTAs for Best Comedy Series in 1980, 1981, and 1982. Nigel Hawthorne also won Best Light Entertainment Performance four times (1981, 1982, 1986, 1987), beating Paul Eddington each time."
    },
    ruth: {
      options: [
        "Three in a row! 1980, 1981, and 1982!",
        "Three in a row! 1980, 1981, and 1982!",
        "All of them (they won every award ever)",
        "None (it was robbed)"
      ],
      correct: 0,
      explanation: "Three BAFTAs in a row! And Nigel Hawthorne won Best Performance four times. Well deserved."
    }
  },
  {
    id: 209,
    category: "general",
    question: "What are the three articles of Civil Service faith according to Yes Minister?",
    year: 1980,
    eric: {
      options: [
        "It takes longer to do things quickly, it's more expensive to do them cheaply, it's more democratic to do them in secret",
        "Never explain, never apologise, never resign",
        "Delay, obfuscate, redirect",
        "Protect the department, protect the minister, protect yourself"
      ],
      correct: 0,
      explanation: "'It takes longer to do things quickly, it's more expensive to do them cheaply, and it's more democratic to do them in secret.' A perfect encapsulation of Sir Humphrey's worldview."
    },
    ruth: {
      options: [
        "Longer to do things quickly, more expensive to do them cheaply, more democratic in secret!",
        "Longer to do things quickly, more expensive to do them cheaply, more democratic in secret!",
        "Tea, biscuits, and long lunches",
        "Never do today what you can put off until tomorrow"
      ],
      correct: 0,
      explanation: "The perfect civil service philosophy: everything takes longer, costs more, and should be done secretly. Sir Humphrey would approve."
    }
  },
  {
    id: 210,
    category: "general",
    question: "Co-writer Jonathan Lynn also directed which Oscar-nominated courtroom comedy film?",
    year: 1992,
    eric: {
      options: ["My Cousin Vinny", "A Fish Called Wanda", "The Verdict", "Liar Liar"],
      correct: 0,
      explanation: "Jonathan Lynn directed My Cousin Vinny (1992) and also Clue (1985). Marisa Tomei won the Oscar for Best Supporting Actress for My Cousin Vinny. Lynn also wrote the definitive book on the making of Yes Minister."
    },
    ruth: {
      options: [
        "My Cousin Vinny!",
        "My Cousin Vinny!",
        "Yes Minister: The Movie (doesn't exist, sadly)",
        "A documentary about Sir Humphrey's hair"
      ],
      correct: 0,
      explanation: "My Cousin Vinny! The same man who wrote Sir Humphrey's convoluted speeches also directed Joe Pesci in a courtroom."
    }
  },
  {
    id: 211,
    category: "general",
    question: "In the 'Party Games' Christmas special, how does Hacker become Prime Minister?",
    year: 1984,
    eric: {
      options: [
        "Sir Humphrey manipulates events so Hacker is the least objectionable compromise candidate",
        "Hacker wins a party leadership election outright",
        "The PM dies suddenly and Hacker is next in line",
        "Hacker blackmails the party chairman"
      ],
      correct: 0,
      explanation: "Sir Humphrey and Sir Arnold Robinson engineer events so that Hacker emerges as the least objectionable compromise candidate. Sir Arnold retires; Sir Humphrey becomes Cabinet Secretary. It's the Christmas special that bridges the two series."
    },
    ruth: {
      options: [
        "Sir Humphrey arranged it so nobody better would take the job!",
        "Sir Humphrey arranged it so nobody better would take the job!",
        "He won a raffle",
        "Nobody else wanted it (fair enough)"
      ],
      correct: 0,
      explanation: "Sir Humphrey pulled strings so Hacker was the least objectionable option. Not exactly a ringing endorsement!"
    }
  },
  {
    id: 212,
    category: "general",
    question: "Where did Yes Minister rank in the BFI's list of 100 Greatest British Television Programmes?",
    year: 2000,
    eric: {
      options: ["6th", "9th", "12th", "15th"],
      correct: 1,
      explanation: "9th in the BFI 100 Greatest British Television Programmes (2000), voted by industry professionals. It also came 6th in the BBC's 'Britain's Best Sitcom' poll (2004)."
    },
    ruth: {
      options: [
        "9th — and it should have been higher!",
        "9th — and it should have been higher!",
        "First (it was robbed of the top spot)",
        "Courageous (that means it came last)"
      ],
      correct: 0,
      explanation: "9th greatest British TV programme of all time! And Sir Humphrey would say ranking it any lower would be 'courageous.'"
    }
  },

  // ─── Aberdeen & Edinburgh Trams ───────────────────────────────
  {
    id: 173,
    category: "general",
    question: "When did Aberdeen's last tram run, and what was the tram number?",
    year: 1958,
    eric: {
      options: ["3 May 1958, No. 36", "3 May 1958, No. 38", "3 May 1957, No. 36", "1 May 1958, No. 36"],
      correct: 0,
      explanation: "Tram No. 36 made the last journey on 3 May 1958, on the 'Bridges' route from Bridge of Dee to Bridge of Don. Motorman W. Hay and Conductor T. Watson crewed it, with Lord Provost George Stephen aboard."
    },
    ruth: {
      options: [
        "3 May 1958, tram number 36",
        "3 May 1958, tram number 36",
        "Last Tuesday (they're still running, aren't they?)",
        "Aberdeen had trams?!"
      ],
      correct: 0,
      explanation: "Tram No. 36, 3 May 1958 — the last tram in Aberdeen. Lord Provost George Stephen rode along for the final journey."
    }
  },
  {
    id: 174,
    category: "general",
    question: "After closure, what happened to Aberdeen's remaining tram fleet?",
    year: 1958,
    eric: {
      options: [
        "They were burned on the beach at Beach Links",
        "They were sold to Blackpool Corporation",
        "They were scrapped at Queen's Cross depot",
        "They were dumped in Aberdeen harbour"
      ],
      correct: 0,
      explanation: "The trams were burned on the beach! 17 vehicles in the first burning on 13 May 1958 (filmed by press), then a 'secret' second burning — but word spread and locals turned up in pyjamas to watch. Only the metal frames survived, sold as scrap."
    },
    ruth: {
      options: [
        "They burned them on the beach! (Seriously!)",
        "They burned them on the beach! (Seriously!)",
        "They're still running (just very slowly)",
        "Eric has one in his garage"
      ],
      correct: 0,
      explanation: "They really did burn them on the beach! There was a public burning and then a 'secret' second one that wasn't very secret at all."
    }
  },
  {
    id: 175,
    category: "general",
    question: "Aberdeen holds what distinction among UK municipal tramways?",
    year: null,
    eric: {
      options: [
        "Most northerly municipal tramway in the UK",
        "Smallest municipal tramway in Scotland",
        "Last municipal tramway to close in Scotland",
        "Only Scottish tramway to use narrow gauge"
      ],
      correct: 0,
      explanation: "Aberdeen was the most northerly municipal tramway in the United Kingdom. Glasgow was the last Scottish tramway to close (1962), not Aberdeen (1958). Both Aberdeen and Edinburgh used standard gauge."
    },
    ruth: {
      options: [
        "The most northerly tram system in the whole UK!",
        "The most northerly tram system in the whole UK!",
        "The most fun tram system (according to Eric)",
        "The only tram system with cow-catchers (actually true!)"
      ],
      correct: 0,
      explanation: "The most northerly! No UK city further north ever had a municipal tram system."
    }
  },
  {
    id: 176,
    category: "general",
    question: "Aberdeen's Queen's Cross tram depot was sold in 1960. What was it converted into?",
    year: 1960,
    eric: {
      options: [
        "Grampian Television studios",
        "A bus depot for Alexander's",
        "An ice rink",
        "A carpet warehouse"
      ],
      correct: 0,
      explanation: "The Queen's Cross depot was purchased by Grampian Television in 1960 and converted into TV studios. It was demolished by 2004, with flats built on the site."
    },
    ruth: {
      options: [
        "A TV studio! (Grampian Television)",
        "A TV studio! (Grampian Television)",
        "A very large car park",
        "Eric's cupboard under the stairs (it's bigger than you think)"
      ],
      correct: 0,
      explanation: "Grampian Television studios! From tram shed to TV studio — quite the career change for a building."
    }
  },
  {
    id: 177,
    category: "general",
    question: "Who built Aberdeen's last new trams in 1949?",
    year: 1949,
    eric: {
      options: [
        "R.Y. Pickering of Wishaw",
        "Brush Electrical Engineering of Loughborough",
        "Metropolitan-Cammell of Birmingham",
        "English Electric of Preston"
      ],
      correct: 0,
      explanation: "R.Y. Pickering & Co. of Wishaw built the final new trams for Aberdeen in 1949. The original electric trams (c.1901) were Brush-built. Aberdeen also bought 18 second-hand trams from Nottingham in 1936."
    },
    ruth: {
      options: [
        "R.Y. Pickering of Wishaw",
        "R.Y. Pickering of Wishaw",
        "IKEA (flat-pack trams, assembly required)",
        "A man called Roy who was very good with metal"
      ],
      correct: 0,
      explanation: "R.Y. Pickering of Wishaw — the last new trams Aberdeen ever ordered, just 9 years before the whole system closed."
    }
  },
  {
    id: 178,
    category: "general",
    question: "Edinburgh's original tram system was one of the largest of what type in the world?",
    year: null,
    eric: {
      options: [
        "Cable tramway",
        "Horse tramway",
        "Overhead electric trolley",
        "Steam tramway"
      ],
      correct: 0,
      explanation: "Edinburgh had one of the largest cable tramway systems in the world (comparable to San Francisco). Cable traction was chosen because Edinburgh's steep hills made horse traction impractical. The cables ran in channels in the road, driven by steam from four power stations."
    },
    ruth: {
      options: [
        "Cable tramway — like San Francisco!",
        "Cable tramway — like San Francisco!",
        "Invisible tramway (very advanced for the time)",
        "Horse-and-cart tramway (just a cart with rails)"
      ],
      correct: 0,
      explanation: "Cable tramway! Edinburgh's hills were too steep for horses, so they used underground cables — like San Francisco does today."
    }
  },
  {
    id: 179,
    category: "general",
    question: "What was the 'Pilrig Muddle' on Edinburgh's tram system?",
    year: null,
    eric: {
      options: [
        "The forced interchange between cable and electric trams at the Edinburgh/Leith boundary",
        "A signalling error that caused two trams to collide at Pilrig",
        "The confusing one-way system around Pilrig roundabout",
        "A failed attempt to run cable and electric trams on the same track"
      ],
      correct: 0,
      explanation: "When Leith electrified its trams in 1905 but Edinburgh still used cable traction, passengers had to change trams at Pilrig (the boundary). This chaotic forced interchange lasted until June 1923 when Edinburgh finally electrified."
    },
    ruth: {
      options: [
        "Passengers had to change between cable and electric trams!",
        "Passengers had to change between cable and electric trams!",
        "A very confusing type of tram pudding",
        "Nobody knows — it's still a muddle"
      ],
      correct: 0,
      explanation: "For nearly 20 years, passengers had to get off one tram and onto another at Pilrig because Edinburgh used cables and Leith used electricity!"
    }
  },
  {
    id: 180,
    category: "general",
    question: "Edinburgh's tram No. 35 is unique in having operated on how many different tramway systems?",
    year: 1956,
    eric: {
      options: ["Three", "Four", "Five", "Two"],
      correct: 1,
      explanation: "Tram No. 35 operated on four different systems: Edinburgh, Blackpool, Glasgow (Garden Festival 1988), and the National Tramway Museum at Crich. Built at Shrubhill Works in 1948, it's now on static display at Crich."
    },
    ruth: {
      options: [
        "Four! Edinburgh, Blackpool, Glasgow, and Crich!",
        "Four! Edinburgh, Blackpool, Glasgow, and Crich!",
        "Just the one (trams can't drive between cities... can they?)",
        "All of them (it was a very well-travelled tram)"
      ],
      correct: 0,
      explanation: "Four systems! It ran in Edinburgh, then Blackpool, then at the Glasgow Garden Festival, and finally at Crich museum in Derbyshire."
    }
  },
  {
    id: 181,
    category: "general",
    question: "Edinburgh built most of its own trams at which depot/works?",
    year: null,
    eric: {
      options: ["Shrubhill Works", "Tollcross Depot", "Leith Walk Works", "Gorgie Depot"],
      correct: 0,
      explanation: "Shrubhill Works in Leith was both the main depot and the tram-building facility. Unlike most cities that bought trams from manufacturers, Edinburgh built most of its fleet in-house."
    },
    ruth: {
      options: [
        "Shrubhill Works",
        "Shrubhill Works",
        "IKEA Edinburgh (flat-pack trams, again)",
        "A very large shed on Princes Street"
      ],
      correct: 0,
      explanation: "Shrubhill Works — Edinburgh didn't just run trams, they built them too!"
    }
  },
  {
    id: 182,
    category: "general",
    question: "Edinburgh's original tram livery of madder (dark red) and white is still used today by which company?",
    year: null,
    eric: {
      options: ["Lothian Buses", "First Edinburgh", "Stagecoach East Scotland", "ScotRail"],
      correct: 0,
      explanation: "Lothian Buses still uses the madder and white colour scheme — a direct heritage link spanning over 150 years from the original Edinburgh Corporation Tramways. The modern Edinburgh Trams also echo these colours."
    },
    ruth: {
      options: [
        "Lothian Buses — the colours live on!",
        "Lothian Buses — the colours live on!",
        "Nobody (they changed to beige, the cowards)",
        "Edinburgh Airport (everything in Edinburgh is the same colour)"
      ],
      correct: 0,
      explanation: "Lothian Buses still uses madder and white! Over 150 years of the same colour scheme."
    }
  },
  {
    id: 183,
    category: "general",
    question: "How long was Edinburgh without trams between the old system closing and the modern tram opening?",
    year: 2014,
    eric: {
      options: ["About 55 years", "About 57 years", "About 59 years", "About 61 years"],
      correct: 1,
      explanation: "The old system closed on 16 November 1956 and the modern tram opened on 31 May 2014 — a gap of approximately 57 years and 6 months. Same standard gauge track, similar colours."
    },
    ruth: {
      options: [
        "About 57 years — a very long wait!",
        "About 57 years — a very long wait!",
        "Five minutes (Edinburgh is very efficient)",
        "They never left (they were just hiding)"
      ],
      correct: 0,
      explanation: "Nearly 58 years without trams! And then the new ones were three years late and massively over budget."
    }
  },
  {
    id: 184,
    category: "general",
    question: "Edinburgh's Princes Street was converted from cable to electric tram traction in what dramatic fashion in October 1922?",
    year: 1922,
    eric: {
      options: [
        "Overnight, in a single operation",
        "Over a weekend, closing the street for two days",
        "Gradually, one block at a time over six weeks",
        "During a two-week shutdown of the entire city centre"
      ],
      correct: 0,
      explanation: "Princes Street was converted from cable to electric traction overnight — an impressive feat of engineering coordination. The electric trams finally crossed the Pilrig boundary on 20 June 1923, ending the 'Pilrig Muddle.'"
    },
    ruth: {
      options: [
        "Overnight! They did it all in one go!",
        "Overnight! They did it all in one go!",
        "Very, very slowly (Edinburgh Council was involved)",
        "They're still working on it"
      ],
      correct: 0,
      explanation: "They did it overnight! One night: cable trams. Next morning: electric trams. Impressive stuff."
    }
  },
  {
    id: 185,
    category: "general",
    question: "When Edinburgh closed its tram system in 1956, what was notable about the timing in relation to passenger numbers?",
    year: 1956,
    eric: {
      options: [
        "1948 had been a record year for passengers, just 8 years before closure",
        "Passenger numbers had been declining steadily for 20 years",
        "The system hadn't turned a profit since 1939",
        "Passenger numbers had halved between 1950 and 1955"
      ],
      correct: 0,
      explanation: "1948 was a record year for passengers — and the system was closed just 8 years later. Some trams sent for scrap were only 4 years old. The decision was political, not economic."
    },
    ruth: {
      options: [
        "They closed it just 8 years after its busiest year ever!",
        "They closed it just 8 years after its busiest year ever!",
        "Nobody was using it (not true!)",
        "It was losing money (actually, it wasn't)"
      ],
      correct: 0,
      explanation: "1948 was the busiest year ever for Edinburgh trams — and they closed the whole system in 1956. Some brand-new trams went straight to the scrapyard."
    }
  },
  {
    id: 186,
    category: "general",
    question: "Aberdeen's tram depot on King Street later became the headquarters of which major transport company?",
    year: null,
    eric: {
      options: ["FirstGroup plc", "Stagecoach Group", "National Express", "Arriva"],
      correct: 0,
      explanation: "The King Street tram depot (opened 1920 on the former King Street Barracks site) became the headquarters of what is now FirstGroup plc. When redeveloped in 2010, some tram tracks were preserved and displayed outside the building."
    },
    ruth: {
      options: [
        "FirstGroup — still a transport HQ!",
        "FirstGroup — still a transport HQ!",
        "Pizza Hut (they have very large ovens)",
        "Eric's garage (it's expanding)"
      ],
      correct: 0,
      explanation: "FirstGroup plc! From tram depot to bus company headquarters — transport through the ages."
    }
  },
  {
    id: 187,
    category: "general",
    question: "Aberdeen's trams were famously fitted with what safety device, credited with saving many lives?",
    year: null,
    eric: {
      options: ["Cow-catchers", "Air brakes", "Electric bells", "Rear-view mirrors"],
      correct: 0,
      explanation: "Aberdeen trams were fitted with cow-catchers (also called lifeguards). In 1929, 14-year-old John Henderson was saved by one after swerving his bicycle into a tram on Union Street."
    },
    ruth: {
      options: [
        "Cow-catchers! (No actual cows were caught)",
        "Cow-catchers! (No actual cows were caught)",
        "Very loud horns (to scare the cows)",
        "A man running in front with a red flag"
      ],
      correct: 0,
      explanation: "Cow-catchers! Despite the name, they were mainly for catching people who fell in front of the trams."
    }
  },
  {
    id: 188,
    category: "general",
    question: "Edinburgh's last tram ran on 16 November 1956. How many trams were in the farewell procession?",
    year: 1956,
    eric: {
      options: ["Eight", "Ten", "Twelve", "Fifteen"],
      correct: 1,
      explanation: "Ten trams processed from the Braids terminus to Shrubhill Depot, retracing much of the original 1871 route. One carried the city councillors who had voted for closure. Enormous crowds gathered at the Mound and along the route."
    },
    ruth: {
      options: [
        "Ten trams — quite the farewell parade!",
        "Ten trams — quite the farewell parade!",
        "Just the one (but it went round in circles)",
        "All of them (a very long queue)"
      ],
      correct: 0,
      explanation: "Ten trams in a farewell procession! The whole of Edinburgh came out to watch."
    }
  },
  {
    id: 189,
    category: "general",
    question: "How did Edinburgh's cable trams work?",
    year: null,
    eric: {
      options: [
        "A grip mechanism dropped into a channel containing a moving cable driven by steam",
        "Overhead cables attached to the tram roof, powered by electricity",
        "A cable attached to the front, wound by a steam engine at each terminus",
        "Underground electric cables embedded in the track surface"
      ],
      correct: 0,
      explanation: "Edinburgh's cable trams used a gripping mechanism dropped into a slot in the road surface, latching onto a continuously moving cable driven by steam from four power stations. Maximum speed: a leisurely 12 mph."
    },
    ruth: {
      options: [
        "A grip grabbed an underground cable — like San Francisco!",
        "A grip grabbed an underground cable — like San Francisco!",
        "Very slowly (that's how everything works in Edinburgh)",
        "Magic (the Victorians were good at that)"
      ],
      correct: 0,
      explanation: "A grip mechanism in the road grabbed a moving underground cable — just like the famous San Francisco cable cars!"
    }
  },
  {
    id: 190,
    category: "general",
    question: "When Aberdeen's tram closure was debated on 7 February 1955, Transport Convener Councillor Sinclair Hay compared the decision to what?",
    year: 1955,
    eric: {
      options: [
        "The decision to scrap horse trams and adopt electric traction",
        "The decision to build the Forth Bridge",
        "The most important decision since the war",
        "A revolution in city transport"
      ],
      correct: 0,
      explanation: "Hay told colleagues it was 'the most important decision taken on transport since our predecessors decided to scrap the old horse trams and substitute the then-modern system of electric traction.' The main reason for closure: rising electricity costs — diesel buses were cheaper."
    },
    ruth: {
      options: [
        "The decision to swap horses for electric trams!",
        "The decision to swap horses for electric trams!",
        "The decision to have lunch (also important)",
        "The decision to burn the trams on the beach (not yet, Councillor!)"
      ],
      correct: 0,
      explanation: "He compared it to the original decision to scrap horse trams — history repeating itself, one transport revolution after another."
    }
  },
  {
    id: 191,
    category: "general",
    question: "Edinburgh's old trams closed in 1956, Aberdeen's in 1958. Which Scottish city was the very last to close its tramway?",
    year: 1962,
    eric: {
      options: ["Glasgow, 1962", "Dundee, 1960", "Glasgow, 1960", "Aberdeen, 1958"],
      correct: 0,
      explanation: "Glasgow was the last city in Scotland (and the last in Britain) to operate trams, closing on 4 September 1962. Edinburgh closed 1956, Aberdeen 1958, Dundee had closed in 1956."
    },
    ruth: {
      options: [
        "Glasgow — the last in the whole of Britain!",
        "Glasgow — the last in the whole of Britain!",
        "Edinburgh (they're never first at anything)",
        "Inverness (it's always last for everything)"
      ],
      correct: 0,
      explanation: "Glasgow held on until 1962 — the very last city in Britain to run trams. Then Edinburgh brought them back in 2014!"
    }
  },
  {
    id: 192,
    category: "general",
    question: "How many routes and trams did Edinburgh's system have at its peak in the early 1950s?",
    year: 1950,
    eric: {
      options: [
        "28 routes, about 400 trams",
        "22 routes, about 300 trams",
        "32 routes, about 450 trams",
        "25 routes, about 350 trams"
      ],
      correct: 0,
      explanation: "Edinburgh had approximately 400 trams on 28 routes covering 47 miles of track at its peak — roughly 5 times larger than Aberdeen's system (77 trams, 9 routes, 16 miles)."
    },
    ruth: {
      options: [
        "28 routes and about 400 trams — huge!",
        "28 routes and about 400 trams — huge!",
        "Just the one route (Princes Street and back)",
        "Too many to count (Edinburgh loves counting things)"
      ],
      correct: 0,
      explanation: "28 routes and 400 trams! Edinburgh's system was massive — five times bigger than Aberdeen's."
    }
  },

  // ─── Pylons and transmission conductors ───────────────────────
  {
    id: 213,
    category: "nsheb",
    question: "Where was the first National Grid pylon erected, and when?",
    year: 1928,
    eric: {
      options: [
        "Bonnyfield near Falkirk, 14 July 1928",
        "Barking, Essex, 14 July 1928",
        "Bonnyfield near Falkirk, 14 July 1927",
        "Ironbridge, Shropshire, 14 March 1928"
      ],
      correct: 0,
      explanation: "The first pylon was erected at Bonnyfield near Falkirk, Scotland, on 14 July 1928. The basic lattice A-frame design has remained essentially the same for nearly 100 years."
    },
    ruth: {
      options: [
        "Bonnyfield near Falkirk, Scotland — 1928!",
        "Bonnyfield near Falkirk, Scotland — 1928!",
        "Eric's back garden",
        "Nobody knows — they just appeared overnight"
      ],
      correct: 0,
      explanation: "Bonnyfield near Falkirk — the first pylon in Scotland and the whole UK!"
    }
  },
  {
    id: 214,
    category: "nsheb",
    question: "Who coined the word 'pylon' for electricity transmission towers, naming them after the Egyptian word for 'gateway'?",
    year: 1928,
    eric: {
      options: ["Sir Reginald Blomfield", "Lord Weir", "Charles Merz", "Sebastian de Ferranti"],
      correct: 0,
      explanation: "Architect Sir Reginald Blomfield (also designer of London's Lambeth Bridge) chose the latticed A-frame structure and named them 'pylons' from the Egyptian. The design was by Milliken Brothers, an American engineering firm."
    },
    ruth: {
      options: [
        "Sir Reginald Blomfield — inspired by Egypt!",
        "Sir Reginald Blomfield — inspired by Egypt!",
        "The Pharaohs (they had electricity, apparently)",
        "Eric (he names everything)"
      ],
      correct: 0,
      explanation: "Sir Reginald Blomfield named them after Egyptian gateways! Quite glamorous for a steel tower in a field."
    }
  },
  {
    id: 215,
    category: "nsheb",
    question: "In the ACSR conductor naming system, what is the nominal aluminium area of a 'Zebra' conductor?",
    year: null,
    eric: {
      options: ["400 mm²", "429 mm²", "450 mm²", "475 mm²"],
      correct: 1,
      explanation: "Zebra is 428.9 mm² (54/3.18 + 7/3.18 stranding). Used on 275kV and 400kV lines. Other common sizes: Dog = 100mm², Wolf = 150mm², Lynx = 183mm², Panther = 200mm², Moose = 500mm²."
    },
    ruth: {
      options: [
        "About 429 mm² (Zebra — because of the stripes!)",
        "About 429 mm² (Zebra — because of the stripes!)",
        "Zebras don't conduct electricity (do they?)",
        "Very large (it's named after a big animal)"
      ],
      correct: 0,
      explanation: "429 mm²! Electrical conductors are named after animals — bigger animal, bigger conductor. Zebra is one of the chunkier ones."
    }
  },
  {
    id: 216,
    category: "nsheb",
    question: "What does ACSR stand for in conductor terminology?",
    year: null,
    eric: {
      options: [
        "Aluminium Conductor Steel Reinforced",
        "Aluminium Core Steel Reinforced",
        "Aluminium Conductor Steel Rated",
        "Aluminium Clad Steel Reinforced"
      ],
      correct: 0,
      explanation: "Aluminium Conductor Steel Reinforced — concentrically stranded with aluminium wire layers around a galvanised steel core. The steel provides strength; the aluminium carries the current."
    },
    ruth: {
      options: [
        "Aluminium Conductor Steel Reinforced",
        "Aluminium Conductor Steel Reinforced",
        "A Completely Sensible Response (wrong acronym)",
        "Another Confusing Scottish Regulation"
      ],
      correct: 0,
      explanation: "Aluminium Conductor Steel Reinforced — aluminium for conducting, steel for strength!"
    }
  },
  {
    id: 217,
    category: "nsheb",
    question: "The L6 tower series was introduced to accommodate what conductor configuration?",
    year: null,
    eric: {
      options: [
        "Quad bundle (4 sub-conductors per phase)",
        "Twin bundle (2 sub-conductors per phase)",
        "Triple bundle (3 sub-conductors per phase)",
        "Single conductor with OPGW earth wire"
      ],
      correct: 0,
      explanation: "L6 towers carry quad conductor bundles (four cables per phase) at 400kV. The extra weight requires taller, stronger towers — suspension towers range from 49.1 to 50.6 metres. The L2 series (introduced earlier) carries twin bundles."
    },
    ruth: {
      options: [
        "Four conductors per phase — quad bundles!",
        "Four conductors per phase — quad bundles!",
        "One really big cable",
        "Eric can explain this better than anyone"
      ],
      correct: 0,
      explanation: "Four conductors bundled together per phase! The extra cables reduce corona discharge and increase capacity."
    }
  },
  {
    id: 218,
    category: "nsheb",
    question: "What is a Stockbridge damper, and what problem does it solve?",
    year: null,
    eric: {
      options: [
        "A tuned mass damper that suppresses aeolian vibration in conductors",
        "A hydraulic device that reduces tower sway in high winds",
        "A grounding device that dissipates lightning energy",
        "A tensioning device that compensates for thermal expansion"
      ],
      correct: 0,
      explanation: "Invented in the 1920s by George H. Stockbridge of Southern California Edison (patent 1928). A dumbbell-shaped tuned mass damper clamped to the conductor — vibrations flex the damper cable, dissipating energy and preventing strand fatigue failure from aeolian vibration."
    },
    ruth: {
      options: [
        "It stops power lines vibrating in the wind!",
        "It stops power lines vibrating in the wind!",
        "It's a type of bridge (the clue's in the name)",
        "A device for damping Eric's enthusiasm"
      ],
      correct: 0,
      explanation: "It stops wind-induced vibration in power lines! Invented in the 1920s by a man called Stockbridge. Two weights on a cable, clamped to the wire."
    }
  },
  {
    id: 219,
    category: "nsheb",
    question: "What causes 'galloping' in overhead conductors?",
    year: null,
    eric: {
      options: [
        "Ice destroys the circular cross-section, and wind creates aerofoil-like lift",
        "Resonant coupling between wind frequency and the conductor's natural frequency",
        "Uneven thermal expansion causing differential sag between phases",
        "Electromagnetic repulsion between parallel conductors during fault conditions"
      ],
      correct: 0,
      explanation: "Ice accumulates asymmetrically on the conductor, destroying its circular profile. Wind then acts on the iced conductor like an aerofoil, creating lift that varies with angle of attack, exciting high-amplitude oscillation. Can cause phase-to-phase flashover."
    },
    ruth: {
      options: [
        "Ice on the cables makes them swing wildly in the wind!",
        "Ice on the cables makes them swing wildly in the wind!",
        "The cables are trying to run away",
        "Horses (conductors gallop, horses gallop, coincidence?)"
      ],
      correct: 0,
      explanation: "Ice changes the shape of the cable from round to aerofoil-shaped, and wind makes them swing dramatically. Very dramatic and very dangerous!"
    }
  },
  {
    id: 220,
    category: "nsheb",
    question: "Why do power lines hum at 100Hz rather than the 50Hz supply frequency?",
    year: null,
    eric: {
      options: [
        "Corona discharge occurs on both positive and negative half-cycles",
        "The steel core resonates at double the supply frequency",
        "Electromagnetic interaction between the three phases doubles the frequency",
        "Wind-induced vibration happens to match 100Hz"
      ],
      correct: 0,
      explanation: "Corona discharge (ionisation of air around the conductor) occurs during both the positive and negative peaks of the 50Hz AC waveform, producing micro-discharges twice per cycle — hence the 100Hz buzz. Worse in wet or humid conditions."
    },
    ruth: {
      options: [
        "The buzzing happens twice every cycle — positive and negative!",
        "The buzzing happens twice every cycle — positive and negative!",
        "The pylons are singing (they're quite musical)",
        "Nobody knows — it's one of life's mysteries"
      ],
      correct: 0,
      explanation: "The buzzing happens on both halves of the electrical cycle — so 50Hz doubled to 100Hz! It's called corona discharge."
    }
  },
  {
    id: 221,
    category: "nsheb",
    question: "Approximately how many insulator discs are in a string for a 400kV line?",
    year: null,
    eric: {
      options: ["15-16", "18-19", "22-23", "27-28"],
      correct: 2,
      explanation: "400kV lines use 22-23 disc insulators per string. For comparison: 132kV uses ~9-10, and 275kV uses ~15-16. Each disc is rated for approximately 11-15kV. Tension strings generally have more discs than suspension strings."
    },
    ruth: {
      options: [
        "22 to 23 little discs!",
        "22 to 23 little discs!",
        "Just the one (a very good one)",
        "Eric knows the exact number for every pylon in Scotland"
      ],
      correct: 0,
      explanation: "22 to 23 discs! Each one adds a bit more insulation. More volts = more discs."
    }
  },
  {
    id: 222,
    category: "nsheb",
    question: "In Scotland, 132kV is classified differently from England and Wales. How?",
    year: null,
    eric: {
      options: [
        "In Scotland 132kV is transmission; in England it's distribution",
        "In Scotland 132kV is distribution; in England it's transmission",
        "In Scotland 132kV requires twin bundles; in England single conductors",
        "In Scotland 132kV uses wood poles; in England only lattice towers"
      ],
      correct: 0,
      explanation: "132kV is classified as transmission voltage in Scotland (operated by SSEN Transmission and SP Transmission) but as distribution voltage in England and Wales (operated by DNOs). A historical legacy of separate Scottish electricity development."
    },
    ruth: {
      options: [
        "It's transmission in Scotland but distribution in England!",
        "It's transmission in Scotland but distribution in England!",
        "Scotland does everything differently (on principle)",
        "Eric can explain this at length — at great length"
      ],
      correct: 0,
      explanation: "Same voltage, different classification! In Scotland 132kV is transmission; south of the border it's distribution. Historical reasons."
    }
  },
  {
    id: 223,
    category: "nsheb",
    question: "What is OPGW and what dual purpose does it serve on transmission towers?",
    year: null,
    eric: {
      options: [
        "Optical Ground Wire — lightning protection and telecommunications",
        "Overhead Protection Ground Wire — fault detection and earthing",
        "Optical Phase Guard Wire — phase monitoring and data transmission",
        "Overhead Power Ground Wire — lightning protection and corona suppression"
      ],
      correct: 0,
      explanation: "Optical Ground Wire — contains optical fibres inside a structure surrounded by steel and aluminium wire. It runs along the top of pylons, providing both lightning/earthing protection AND telecommunications for grid control. Same weight as conventional earth wire."
    },
    ruth: {
      options: [
        "Optical Ground Wire — lightning protection AND communications!",
        "Optical Ground Wire — lightning protection AND communications!",
        "Oh Please Go Wrong (what engineers say on Mondays)",
        "A very fancy type of washing line"
      ],
      correct: 0,
      explanation: "Optical Ground Wire — it protects against lightning AND carries fibre-optic communications. Two jobs, one wire!"
    }
  },
  {
    id: 224,
    category: "nsheb",
    question: "The Beauly-Denny 400kV line in Scotland is 137 miles long. How many objections were lodged against it?",
    year: 2007,
    eric: {
      options: ["12,295", "15,295", "17,295", "19,295"],
      correct: 2,
      explanation: "17,295 objections were lodged. The public inquiry ran from February to December 2007 — Scotland's longest and most expensive (~£10 million). 300 witnesses were heard over 105 days. Approved January 2010; cost ~£600 million; operational 2015. Uses SSE400 towers."
    },
    ruth: {
      options: [
        "Over 17,000 objections!",
        "Over 17,000 objections!",
        "Just the one (Eric's)",
        "None — everyone loves pylons"
      ],
      correct: 0,
      explanation: "Over 17,000 objections! Scotland's longest public inquiry. The line was eventually approved and now carries renewable energy from the Highlands."
    }
  },
  {
    id: 225,
    category: "nsheb",
    question: "What is the minimum conductor-to-ground clearance at maximum sag under UK regulations?",
    year: null,
    eric: {
      options: ["5.3 metres", "6.3 metres", "7.3 metres", "8.3 metres"],
      correct: 2,
      explanation: "7.3 metres minimum clearance to ground at maximum sag, per the Electricity Safety, Quality and Continuity Regulations (ESQCR) 2002. Where a person can stand, the minimum is 5.3 metres."
    },
    ruth: {
      options: [
        "7.3 metres — don't fly your kite there!",
        "7.3 metres — don't fly your kite there!",
        "About the height of Eric",
        "High enough (hopefully)"
      ],
      correct: 0,
      explanation: "7.3 metres — roughly the height of a double-decker bus and a bit. Stay well clear!"
    }
  },
  {
    id: 226,
    category: "nsheb",
    question: "The UK's first 275kV Supergrid circuit was energised in what year?",
    year: 1953,
    eric: {
      options: ["1951", "1953", "1955", "1957"],
      correct: 1,
      explanation: "Summer 1953 — the first 275kV circuit-breaker closed and the Supergrid was energised. The original 132kV grid had been built from 1928-1933. The first 400kV section followed in 1965 (Sundon to West Burton)."
    },
    ruth: {
      options: [
        "1953 — the Supergrid was born!",
        "1953 — the Supergrid was born!",
        "Last week (it's surprisingly new)",
        "Eric remembers it well (he doesn't, he wasn't born yet)"
      ],
      correct: 0,
      explanation: "1953! The 275kV Supergrid was energised for the first time. A huge leap from the original 132kV grid."
    }
  },
  {
    id: 227,
    category: "nsheb",
    question: "What distinguishes the L12 tower series visually from the L2 and L6?",
    year: null,
    eric: {
      options: [
        "Slim body and slightly upturned crossarms",
        "Wider base and downward-angled crossarms",
        "Tubular steel poles instead of lattice",
        "Shorter height with horizontal crossarms"
      ],
      correct: 0,
      explanation: "The L12 (c.1980) uses high tensile steel for a slim tower body, and has slightly upturned crossarms that make it instantly identifiable. It takes twin conductors up to 850mm²."
    },
    ruth: {
      options: [
        "The crossarms point slightly upward!",
        "The crossarms point slightly upward!",
        "It has a flag on top (for decoration)",
        "Eric can spot one from 5 miles away"
      ],
      correct: 0,
      explanation: "The L12 has distinctive upturned crossarms and a slim body — Eric can probably identify one at a glance!"
    }
  },
  {
    id: 228,
    category: "nsheb",
    question: "Phase transposition on a transmission line is recommended approximately how often?",
    year: null,
    eric: {
      options: ["Every 50 miles", "Every 75 miles", "Every 100 miles", "Every 150 miles"],
      correct: 2,
      explanation: "Approximately every 100 miles (160km). Transposition exchanges the vertical positions of the three phases to equalise impedance and capacitance relative to ground. Uses special DX (double circuit) or SX (single circuit) transposition towers."
    },
    ruth: {
      options: [
        "Every 100 miles — to keep the phases balanced!",
        "Every 100 miles — to keep the phases balanced!",
        "Every time Eric drives past",
        "Whenever they feel like it"
      ],
      correct: 0,
      explanation: "Every 100 miles! The three phases swap positions to keep the electrical load balanced."
    }
  },
  {
    id: 229,
    category: "nsheb",
    question: "In the ACSR animal naming system, what size is a 'Dog' conductor?",
    year: null,
    eric: {
      options: ["75 mm²", "100 mm²", "125 mm²", "150 mm²"],
      correct: 1,
      explanation: "Dog = 100mm² (stranding 6/4.72 + 7/1.57). Used on 33kV distribution. The system goes from small animals (Squirrel=20mm², Weasel=30mm²) to large ones (Moose=500mm²). Wolf=150mm², Lynx=183mm², Panther=200mm²."
    },
    ruth: {
      options: [
        "100 mm² — not a big Dog!",
        "100 mm² — not a big Dog!",
        "Woof-sized (that's a technical term)",
        "Dogs can't conduct electricity (the cable can though)"
      ],
      correct: 0,
      explanation: "100 mm²! The conductor naming goes from tiny animals to big ones — Squirrel (small) to Moose (huge)."
    }
  },
  {
    id: 230,
    category: "nsheb",
    question: "The Scottish Highland 132kV 'trident' wood pole design has what unusual feature regarding earth wires?",
    year: null,
    eric: {
      options: [
        "It has no earth wire — the middle phase conductor carries fibre-optic instead",
        "The earth wire is underground rather than overhead",
        "It uses a combined earth/phase wire on the top crossarm",
        "Earth wires are replaced by surge arresters on every third pole"
      ],
      correct: 0,
      explanation: "The trident design has no separate earth wire. Instead, the middle phase conductor incorporates a fibre-optic telecommunications wire for control purposes. EaSTS (Earthed Steel Trident Structures) cost approximately £700k/km vs £3M/km for lattice towers."
    },
    ruth: {
      options: [
        "No earth wire at all!",
        "No earth wire at all!",
        "The earth wire is invisible (very advanced)",
        "Eric designed it (he didn't, but he's proud of it)"
      ],
      correct: 0,
      explanation: "No earth wire! The trident design skips it entirely and puts fibre-optic in the middle conductor instead."
    }
  },
  {
    id: 231,
    category: "nsheb",
    question: "What is the parabolic formula for conductor sag?",
    year: null,
    eric: {
      options: [
        "Sag = wL²/8T",
        "Sag = wL²/4T",
        "Sag = wL/8T²",
        "Sag = w²L/8T"
      ],
      correct: 0,
      explanation: "Sag = wL²/8T, where w = weight per unit length, L = span, T = horizontal tension. The parabolic approximation is accurate within 1% when sag is less than 10% of span length. The true curve is a catenary."
    },
    ruth: {
      options: [
        "Sag = wL²/8T (ask Eric, he can explain)",
        "Sag = wL²/8T (ask Eric, he can explain)",
        "Sag = old age (a different kind of sag)",
        "Maths again? It's a birthday party!"
      ],
      correct: 0,
      explanation: "Sag = wL²/8T! Eric can probably calculate this in his head for any span length."
    }
  },
  {
    id: 232,
    category: "nsheb",
    question: "The T-pylon design was unveiled in 2015. Who designed it?",
    year: 2015,
    eric: {
      options: [
        "Bystrup (Danish firm)",
        "Foster + Partners",
        "Arup",
        "Mott MacDonald"
      ],
      correct: 0,
      explanation: "Danish firm Bystrup won the 2011 competition. The T-pylon is 35m tall (a third shorter than lattice), can be erected in two days by a team of five, and was first used connecting Hinkley Point C. National Grid has since mothballed the design."
    },
    ruth: {
      options: [
        "A Danish company called Bystrup!",
        "A Danish company called Bystrup!",
        "IKEA (they make everything else)",
        "Eric (he had a spare weekend)"
      ],
      correct: 0,
      explanation: "Bystrup from Denmark! The T-pylon is shorter and sleeker than traditional pylons, but National Grid mothballed the design."
    }
  },
  {
    id: 233,
    category: "nsheb",
    question: "The 1926 Electricity (Supply) Act that created the National Grid was based on the recommendations of which committee?",
    year: 1926,
    eric: {
      options: ["The Weir Committee", "The Cooper Committee", "The Merz Committee", "The Ferranti Committee"],
      correct: 0,
      explanation: "Lord Weir's committee (1925), consulting engineer Charles Merz, recommended a synchronised 132kV, 50Hz national grid connecting 122 efficient power stations. The resulting 6,400km grid was completed by September 1933. The Cooper Committee (1941) was the NSHEB one."
    },
    ruth: {
      options: [
        "The Weir Committee — Lord Weir from Glasgow!",
        "The Weir Committee — Lord Weir from Glasgow!",
        "The 'We Need Electricity' Committee",
        "A committee (everything in Britain needs a committee)"
      ],
      correct: 0,
      explanation: "Lord Weir's committee! A Glasgow industrialist who gave Britain its national electricity grid."
    }
  },
  {
    id: 234,
    category: "nsheb",
    question: "What is the typical span length between 400kV transmission towers?",
    year: null,
    eric: {
      options: ["200-300 metres", "300-500 metres", "500-700 metres", "700-900 metres"],
      correct: 1,
      explanation: "400kV lines have typical spans of 300-500 metres (standard design ~370m). By comparison: 275kV spans are 200-350m, and 132kV spans are 150-250m."
    },
    ruth: {
      options: [
        "300 to 500 metres between towers!",
        "300 to 500 metres between towers!",
        "About as far as Eric can see without his glasses",
        "Very far apart (pylons like their personal space)"
      ],
      correct: 0,
      explanation: "300 to 500 metres! That's up to a third of a mile between towers."
    }
  },
  {
    id: 235,
    category: "nsheb",
    question: "ACCC conductor uses a composite core of carbon and glass fibre. What advantage does this give over ACSR?",
    year: null,
    eric: {
      options: [
        "Nearly doubles transmission capacity in the same diameter",
        "Halves the weight of the conductor",
        "Eliminates the need for Stockbridge dampers",
        "Allows conductors to be used underwater"
      ],
      correct: 0,
      explanation: "Replacing the steel core with composite in the same diameter nearly doubles transmission capacity. Thermal expansion is ~10x less than steel (reducing sag at high temperatures), and it reduces CO2 emissions from line losses by 27-31%. Costs 2.5-3x as much as ACSR."
    },
    ruth: {
      options: [
        "Nearly double the capacity in the same size cable!",
        "Nearly double the capacity in the same size cable!",
        "It glows in the dark (it doesn't)",
        "Eric approves (and that's the highest endorsement)"
      ],
      correct: 0,
      explanation: "Nearly double the capacity! Carbon fibre instead of steel — lighter, stronger, carries more power."
    }
  },
  {
    id: 236,
    category: "nsheb",
    question: "What is the purpose of a tension (strain) tower versus a suspension tower?",
    year: null,
    eric: {
      options: [
        "Tension towers anchor conductors at direction changes; suspension towers support them on straight sections",
        "Tension towers carry higher voltage; suspension towers carry lower voltage",
        "Tension towers are at river crossings; suspension towers are on flat ground",
        "Tension towers have quad bundles; suspension towers have twin bundles"
      ],
      correct: 0,
      explanation: "Suspension towers support conductors vertically using hanging insulators on straight runs (~90% of a line). Tension/strain towers anchor conductors and resist large longitudinal forces at direction changes, line terminations, or long spans. They're heavier, stronger, and costlier."
    },
    ruth: {
      options: [
        "Tension towers handle corners; suspension towers do straight bits!",
        "Tension towers handle corners; suspension towers do straight bits!",
        "One is tense and the other is relaxed",
        "Eric knows the difference (he can explain for hours)"
      ],
      correct: 0,
      explanation: "Tension towers anchor the cables where the line changes direction — they have to resist much bigger forces than the straight-line suspension towers."
    }
  },
  {
    id: 237,
    category: "nsheb",
    question: "Why are bundle conductors (twin, triple, or quad) used on high-voltage lines rather than a single larger conductor?",
    year: null,
    eric: {
      options: [
        "To reduce corona discharge, increase capacity, and reduce losses",
        "To provide redundancy in case one conductor breaks",
        "To reduce the total weight on each tower",
        "To allow different phases to share the same insulator string"
      ],
      correct: 0,
      explanation: "Bundle conductors reduce corona discharge (which causes energy loss, noise, and radio interference), increase current-carrying capacity, reduce mutual coupling and resistive losses, and improve voltage regulation. Sub-conductors are typically spaced 300-450mm apart."
    },
    ruth: {
      options: [
        "Less buzzing, more power, less wasted energy!",
        "Less buzzing, more power, less wasted energy!",
        "They look nicer in bundles",
        "Conductors are social — they don't like being alone"
      ],
      correct: 0,
      explanation: "Multiple cables together reduce that annoying buzzing (corona) and carry more power more efficiently!"
    }
  },
  {
    id: 238,
    category: "nsheb",
    question: "In the ACSR naming system, which is larger: a Moose or a Zebra?",
    year: null,
    eric: {
      options: [
        "Moose (500mm²) is larger than Zebra (429mm²)",
        "Zebra (500mm²) is larger than Moose (429mm²)",
        "They are the same size (both 450mm²)",
        "Moose (429mm²) is larger than Zebra (400mm²)"
      ],
      correct: 0,
      explanation: "Moose is 500mm², Zebra is 429mm². The animal naming convention roughly follows size: Squirrel (20mm²), Weasel (30mm²), Rabbit (50mm²), Dog (100mm²), Wolf (150mm²), Lynx (183mm²), Panther (200mm²), Zebra (429mm²), Moose (500mm²)."
    },
    ruth: {
      options: [
        "Moose is bigger! 500mm² vs 429mm²!",
        "Moose is bigger! 500mm² vs 429mm²!",
        "In real life, Moose is definitely bigger too",
        "Neither — they're cables, not animals!"
      ],
      correct: 0,
      explanation: "Moose wins at 500mm² vs Zebra's 429mm²! The bigger the animal, the bigger the cable."
    }
  },
  {
    id: 239,
    category: "nsheb",
    question: "The flapper-type bird flight diverter achieves what percentage reduction in avian mortality on power lines?",
    year: null,
    eric: {
      options: ["50.2%", "60.2%", "70.2%", "80.2%"],
      correct: 2,
      explanation: "The flapper flight diverter achieves a 70.2% lower mean avian mortality rate. Migratory birds are most at risk from the thin earth wire — they adjust course to avoid the visible phase conductors but fly upward into the harder-to-see earth wire."
    },
    ruth: {
      options: [
        "70% fewer bird strikes!",
        "70% fewer bird strikes!",
        "100% (the birds read the warning signs)",
        "Eric fitted them himself (he didn't, but he cares about birds)"
      ],
      correct: 0,
      explanation: "70% fewer bird deaths! The flapping devices make the wires visible to birds flying at speed."
    }
  },
  {
    id: 240,
    category: "nsheb",
    question: "When was the first 400kV section of the Supergrid commissioned, and where did it run?",
    year: 1965,
    eric: {
      options: [
        "1965, Sundon to West Burton",
        "1963, Dungeness to Canterbury",
        "1965, Ratcliffe to Drakelow",
        "1967, Sundon to West Burton"
      ],
      correct: 0,
      explanation: "The first 400kV section was commissioned in 1965, running approximately 150 miles from Sundon (Bedfordshire) to West Burton (Nottinghamshire). The original 275kV grid had been designed from the outset with the potential to uprate to 400kV."
    },
    ruth: {
      options: [
        "1965, Sundon to West Burton!",
        "1965, Sundon to West Burton!",
        "Last year (very modern, these pylons)",
        "Eric was there (he wasn't, but he wishes he was)"
      ],
      correct: 0,
      explanation: "1965 — the first 400kV power line, from Sundon to West Burton. Britain's electricity backbone was growing!"
    }
  },
  {
    id: 241,
    category: "nsheb",
    question: "Aeolian vibration in conductors is caused by what phenomenon?",
    year: null,
    eric: {
      options: [
        "Alternating vortex shedding on the leeward side in steady wind",
        "Resonant electromagnetic coupling between parallel conductors",
        "Differential thermal expansion causing standing wave patterns",
        "Ice-induced aerofoil effects at high altitude"
      ],
      correct: 0,
      explanation: "Aeolian vibration is caused by alternating vortex shedding (Von Kármán vortex street) on the leeward side of the conductor in steady moderate wind, creating standing waves at 3-150Hz. It's the principal cause of conductor strand fatigue failure, worst at clamped ends. Stockbridge dampers are the standard remedy."
    },
    ruth: {
      options: [
        "Wind creates tiny whirlpools that make the cable vibrate!",
        "Wind creates tiny whirlpools that make the cable vibrate!",
        "The cables are shivering (it's cold in Scotland)",
        "Physics (the answer to everything Eric says)"
      ],
      correct: 0,
      explanation: "Wind creates tiny spinning vortices behind the cable — these make it vibrate like a guitar string. Stockbridge dampers fix it!"
    }
  },
  {
    id: 242,
    category: "nsheb",
    question: "What is the approximate cost per kilometre of Earthed Steel Trident Structures (EaSTS) for 132kV lines in Scotland, versus steel lattice towers?",
    year: null,
    eric: {
      options: [
        "£700k/km (EaSTS) vs £3M/km (lattice)",
        "£500k/km (EaSTS) vs £2M/km (lattice)",
        "£1M/km (EaSTS) vs £4M/km (lattice)",
        "£700k/km (EaSTS) vs £2M/km (lattice)"
      ],
      correct: 0,
      explanation: "EaSTS costs approximately £700k per kilometre vs £3 million per kilometre for steel lattice towers — roughly a quarter of the price. The trident design uses wood or steel poles and is extensively used in the Scottish Highlands for 132kV."
    },
    ruth: {
      options: [
        "About £700k vs £3 million — a huge saving!",
        "About £700k vs £3 million — a huge saving!",
        "Cheap ones: 50p. Expensive ones: a lot more",
        "Eric could build them cheaper (probably)"
      ],
      correct: 0,
      explanation: "£700k versus £3 million per kilometre! The trident design saves a fortune compared to the big lattice towers."
    }
  },

  // ─── Trident aircraft and BA Shuttle ──────────────────────────
  {
    id: 243,
    category: "general",
    question: "The Hawker Siddeley Trident had an unusual engine configuration. How many engines did the Trident 3B have?",
    year: 1969,
    eric: {
      options: ["Three", "Four", "Two", "Three plus an APU"],
      correct: 1,
      explanation: "The Trident 3B had FOUR engines: three Rolls-Royce Spey turbofans plus a small RB.162 boost engine in the tail. The RB.162 weighed only 280 lb but produced 5,250 lb of thrust — a thrust-to-weight ratio of 18.75:1. It was used for take-off only."
    },
    ruth: {
      options: [
        "Four! Three big ones and a little booster!",
        "Four! Three big ones and a little booster!",
        "One very large hamster wheel",
        "None — it was solar powered (it wasn't)"
      ],
      correct: 0,
      explanation: "Four engines! The little RB.162 booster weighed only 280 pounds but gave a massive thrust boost for take-off."
    }
  },
  {
    id: 244,
    category: "general",
    question: "The Trident pioneered automatic landing in commercial service. When was the world's first autoland on a scheduled passenger flight?",
    year: 1965,
    eric: {
      options: ["10 June 1965", "10 June 1964", "10 March 1965", "4 November 1966"],
      correct: 0,
      explanation: "10 June 1965, BEA Flight BE 343, Trident 1 G-ARPR, Paris to Heathrow. Captains Eric Poole and Frank Ormonroyd. The first genuinely 'blind' landing (zero visibility) followed on 4 November 1966. The Trident was eventually certified to CAT IIIB in 1975."
    },
    ruth: {
      options: [
        "10 June 1965 — the plane landed itself!",
        "10 June 1965 — the plane landed itself!",
        "Last week (they've only just figured it out)",
        "Never — planes can't land themselves (they can!)"
      ],
      correct: 0,
      explanation: "1965! The Trident was the first airliner to land itself on a scheduled flight with passengers aboard. Decades ahead of its time."
    }
  },
  {
    id: 245,
    category: "general",
    question: "The original DH.121 design was much larger than what BEA demanded. By how much was the fuselage shortened?",
    year: null,
    eric: {
      options: ["13 feet", "10 feet", "16 feet", "8 feet"],
      correct: 0,
      explanation: "BEA forced de Havilland to shorten the fuselage by 13 feet and reduce the wingspan by 17 feet. The original design used Rolls-Royce Medway engines (40% more powerful than the Spey). Boeing built the 727 to almost the exact specification of the ORIGINAL DH.121. Result: 117 Tridents sold vs 1,832 Boeing 727s. The 'BEA Blunder.'"
    },
    ruth: {
      options: [
        "13 feet — and it was a terrible decision!",
        "13 feet — and it was a terrible decision!",
        "They made it bigger (they didn't)",
        "About an inch (that doesn't sound right)"
      ],
      correct: 0,
      explanation: "13 feet shorter! BEA insisted on a smaller plane and killed its export potential. Boeing copied the ORIGINAL design and sold 1,832 of them."
    }
  },
  {
    id: 246,
    category: "general",
    question: "How many Tridents were built in total, compared to the rival Boeing 727?",
    year: null,
    eric: {
      options: ["117 vs 1,832", "117 vs 1,632", "127 vs 1,832", "117 vs 2,032"],
      correct: 0,
      explanation: "117 Tridents vs 1,832 Boeing 727s. The 727's initial specification was almost identical to de Havilland's original (pre-BEA-downsizing) DH.121 design. One of the greatest commercial blunders in British aviation history."
    },
    ruth: {
      options: [
        "117 Tridents vs 1,832 Boeings — ouch!",
        "117 Tridents vs 1,832 Boeings — ouch!",
        "Millions of each (not quite)",
        "Boeing won (Boeing always wins)"
      ],
      correct: 0,
      explanation: "117 vs 1,832! The Trident was a brilliant aircraft hamstrung by BEA's insistence on making it too small."
    }
  },
  {
    id: 247,
    category: "general",
    question: "The 1972 Staines disaster (BEA Flight 548) killed 118 people. What was the aircraft registration?",
    year: 1972,
    eric: {
      options: ["G-ARPI", "G-ARPR", "G-ARPA", "G-ARPH"],
      correct: 0,
      explanation: "G-ARPI ('Papa India'). Captain Stanley Key (51) had an arterial tear likely caused by a heated argument about an industrial dispute. The leading-edge droops were retracted too early, leading to a deep stall — a condition from which T-tail aircraft cannot recover. It remains the UK's deadliest non-terrorist air accident."
    },
    ruth: {
      options: [
        "G-ARPI — 'Papa India'",
        "G-ARPI — 'Papa India'",
        "G-ARPI — 'Papa India'",
        "G-ARPI — 'Papa India'"
      ],
      correct: 0,
      explanation: "G-ARPI, known as 'Papa India.' A tragic accident caused by a deep stall just 150 seconds after take-off."
    }
  },
  {
    id: 248,
    category: "general",
    question: "In the Staines disaster, Second Officer Keighley had how many hours as P2 (co-pilot)?",
    year: 1972,
    eric: {
      options: ["29 hours", "49 hours", "79 hours", "129 hours"],
      correct: 0,
      explanation: "Just 29 hours — he had joined line flying only 6 weeks earlier. He was 22 years old. The public inquiry noted that such inexperience contributed to his inability to intervene when Captain Key failed to maintain airspeed."
    },
    ruth: {
      options: [
        "Only 29 hours — barely started!",
        "Only 29 hours — barely started!",
        "Thousands (he was very experienced — he wasn't)",
        "Not enough (that's the point)"
      ],
      correct: 0,
      explanation: "Just 29 hours as co-pilot. He was 22 years old and had been flying the line for only 6 weeks."
    }
  },
  {
    id: 249,
    category: "general",
    question: "Which was the largest export customer for the Trident, taking 39 aircraft?",
    year: null,
    eric: {
      options: ["CAAC (China)", "Pakistan International Airlines", "Kuwait Airways", "Cyprus Airways"],
      correct: 0,
      explanation: "CAAC (Civil Aviation Administration of China) received 4 ex-PIA Trident 1Es, 33 new Trident 2Es, and 2 Super Trident 3Bs — 39 aircraft total. Chinese Tridents were the last to fly anywhere in the world, retiring around 1995."
    },
    ruth: {
      options: [
        "China! They bought 39 of them!",
        "China! They bought 39 of them!",
        "Nobody — they couldn't give them away",
        "Eric (he collects Tridents in his garage)"
      ],
      correct: 0,
      explanation: "China bought 39 Tridents — more than any other export customer. They kept flying them until 1995!"
    }
  },
  {
    id: 250,
    category: "general",
    question: "When was BA's last Trident flight in the UK?",
    year: 1985,
    eric: {
      options: ["31 December 1985", "12 September 1985", "31 March 1986", "1 January 1986"],
      correct: 0,
      explanation: "31 December 1985, Manchester to London Heathrow. ICAO Chapter 2 noise regulations (effective January 1986) sealed the Trident's fate — the noisy, smoke-belching Speys couldn't comply. Chinese Tridents flew on until ~1995."
    },
    ruth: {
      options: [
        "31 December 1985 — New Year's Eve!",
        "31 December 1985 — New Year's Eve!",
        "Last Tuesday (they're still flying — they're not)",
        "Eric was on the last one (probably)"
      ],
      correct: 0,
      explanation: "New Year's Eve 1985 — the Trident's final UK flight. Noise regulations killed it off the very next day."
    }
  },
  {
    id: 251,
    category: "general",
    question: "The BA Edinburgh-London Shuttle started in 1975 on the Glasgow route. When was Edinburgh added?",
    year: 1976,
    eric: {
      options: ["1 April 1976", "12 January 1976", "1 October 1975", "1 April 1977"],
      correct: 0,
      explanation: "Edinburgh was added on 1 April 1976. The shuttle had launched on 12 January 1975 (Glasgow). Belfast followed on 1 April 1977 and Manchester on 28 October 1979."
    },
    ruth: {
      options: [
        "1 April 1976",
        "1 April 1976",
        "Before Glasgow (Edinburgh always goes first — it didn't)",
        "Nobody remembers (Eric does)"
      ],
      correct: 0,
      explanation: "1 April 1976 — Edinburgh was the second city to get the shuttle, after Glasgow."
    }
  },
  {
    id: 252,
    category: "general",
    question: "What was revolutionary about the original BA Shuttle concept?",
    year: 1975,
    eric: {
      options: [
        "No reservation needed; guaranteed a seat; could pay on board",
        "First class only; champagne service; no hand luggage",
        "Standing room allowed; no seats required; 5-minute check-in",
        "Free flights for frequent flyers; no ticket needed; unlimited luggage"
      ],
      correct: 0,
      explanation: "Turn up and fly — no reservation, guaranteed a seat (backup aircraft on standby if full), and you could pay cash or credit card on board. Just be at the gate 10 minutes before departure. Modelled on Eastern Air Lines' US shuttle."
    },
    ruth: {
      options: [
        "Just turn up — guaranteed a seat, pay on board!",
        "Just turn up — guaranteed a seat, pay on board!",
        "Free flights for everyone (too good to be true)",
        "You had to bring your own wings"
      ],
      correct: 0,
      explanation: "No booking needed! Just turn up, get on, and pay on the plane. If it was full, they'd bring another aircraft. Amazing."
    }
  },
  {
    id: 253,
    category: "general",
    question: "What event effectively ended the BA Shuttle's walk-on, no-booking-required concept?",
    year: 2001,
    eric: {
      options: [
        "The September 11 attacks (2001)",
        "The introduction of easyJet (1995)",
        "BA's merger with BMI (2012)",
        "The opening of Terminal 5 (2008)"
      ],
      correct: 0,
      explanation: "9/11 effectively killed the walk-on concept overnight. Enhanced security requirements made it impossible for passengers to simply turn up and board without pre-booking. The 'Shuttle' name persisted but the original concept was dead."
    },
    ruth: {
      options: [
        "9/11 — security changed everything",
        "9/11 — security changed everything",
        "Eric complained too much (not the real reason)",
        "They ran out of backup aircraft"
      ],
      correct: 0,
      explanation: "9/11 changed airport security forever. After that, everyone needed a pre-booked ticket and full security screening."
    }
  },
  {
    id: 254,
    category: "general",
    question: "On 30 August 1983, the BA Shuttle was rebranded. What was the new name?",
    year: 1983,
    eric: {
      options: ["Super Shuttle", "Shuttle Plus", "Premium Shuttle", "Express Shuttle"],
      correct: 0,
      explanation: "Super Shuttle — launched across all four routes (Glasgow, Edinburgh, Belfast, Manchester) in response to British Midland's competitive 'Diamond Service.' It added complimentary hot meals, free bar, and new seat covers."
    },
    ruth: {
      options: [
        "Super Shuttle!",
        "Super Shuttle!",
        "The Really Good Shuttle",
        "The Shuttle That's Better Than BMI's"
      ],
      correct: 0,
      explanation: "Super Shuttle! With free meals and drinks — take that, British Midland!"
    }
  },
  {
    id: 255,
    category: "general",
    question: "A Trident 1C cockpit is preserved at the National Museum of Flight near Edinburgh. What is its registration?",
    year: null,
    eric: {
      options: ["G-ARPH", "G-ARPI", "G-ARPA", "G-ARPP"],
      correct: 0,
      explanation: "G-ARPH is at the National Museum of Flight at East Fortune, near Edinburgh. G-ARPI was the Staines crash aircraft. G-ARPA was the first prototype. G-ARPP's cockpit is at the Solway Aviation Museum, Carlisle."
    },
    ruth: {
      options: [
        "G-ARPH — you can visit it at East Fortune!",
        "G-ARPH — you can visit it at East Fortune!",
        "G-ERIC (named after a famous pilot)",
        "It's at Edinburgh Airport (it's not, it's at East Fortune)"
      ],
      correct: 0,
      explanation: "G-ARPH — on display at the National Museum of Flight at East Fortune, not far from Edinburgh!"
    }
  },
  {
    id: 256,
    category: "general",
    question: "How much did a BA Super Shuttle ticket cost when it launched in 1983?",
    year: 1983,
    eric: {
      options: ["£56", "£46", "£66", "£76"],
      correct: 0,
      explanation: "£56 for a walk-on, pay-on-board shuttle ticket in 1983. That's roughly £180 in today's money. Current BA Edinburgh-Heathrow fares start from about £63-75 one-way in economy."
    },
    ruth: {
      options: [
        "£56 — not bad for a walk-on flight!",
        "£56 — not bad for a walk-on flight!",
        "50p (those were the days)",
        "Free (it was a shuttle, not a charity)"
      ],
      correct: 0,
      explanation: "£56 — and that included a hot meal and free drinks! Those really were the days."
    }
  },
  {
    id: 257,
    category: "general",
    question: "Which competitor started Edinburgh-Heathrow services in 1983, challenging BA's monopoly?",
    year: 1983,
    eric: {
      options: ["British Midland (BMI)", "Dan-Air", "Air UK", "Laker Airways"],
      correct: 0,
      explanation: "British Midland began Edinburgh-Heathrow service in 1983 with DC-9s, branding it 'Diamond Service.' This directly prompted BA's Super Shuttle rebranding. BMI was eventually absorbed into BA/IAG in 2012."
    },
    ruth: {
      options: [
        "British Midland — the 'Diamond Service'!",
        "British Midland — the 'Diamond Service'!",
        "easyJet (they weren't around yet)",
        "Eric Airlines (sadly not a real airline)"
      ],
      correct: 0,
      explanation: "British Midland with their 'Diamond Service' — the first real competitor on the Edinburgh-London route!"
    }
  },
  {
    id: 258,
    category: "general",
    question: "The Trident's cruise speed was Mach 0.88. What made this remarkable?",
    year: null,
    eric: {
      options: [
        "It was one of the fastest subsonic commercial airliners of its era",
        "It was faster than the Boeing 727",
        "It could briefly exceed Mach 1.0 in a dive",
        "It was the fastest aircraft ever to use the Spey engine"
      ],
      correct: 0,
      explanation: "Mach 0.88 (about 610 mph) made it one of the fastest subsonic airliners ever. Maximum demonstrated speed was Mach 0.96. Former pilot Captain John Rankin said it 'felt like a finely tuned sports car' compared to Boeings that 'felt like a Cadillac.'"
    },
    ruth: {
      options: [
        "It was incredibly fast for its day!",
        "It was incredibly fast for its day!",
        "It was actually quite slow (it wasn't)",
        "Mach 0.88 — that's nearly the speed of sound!"
      ],
      correct: 0,
      explanation: "Mach 0.88 — incredibly fast! Pilots loved it. One said it felt like a sports car compared to the American jets."
    }
  },
  {
    id: 259,
    category: "general",
    question: "The Trident 3B's boost engine, the RB.162, weighed only 280 lb. What was its thrust?",
    year: null,
    eric: {
      options: ["5,250 lb", "4,250 lb", "6,250 lb", "3,250 lb"],
      correct: 0,
      explanation: "5,250 lb of thrust from an engine weighing just 280 lb — a thrust-to-weight ratio of 18.75:1. Originally developed as a lift engine for VTOL aircraft. It used the world's first fibreglass compressor casings and plastic compressor blades. Added only 5% to aircraft weight but gave 15% extra thrust at take-off."
    },
    ruth: {
      options: [
        "5,250 lb of thrust from a 280 lb engine!",
        "5,250 lb of thrust from a 280 lb engine!",
        "About the same as a hairdryer",
        "Enough to make Eric's tea go cold"
      ],
      correct: 0,
      explanation: "5,250 lb of thrust from something weighing only 280 lb! Nearly 19 times its own weight in thrust. Incredible engineering."
    }
  },
  {
    id: 260,
    category: "general",
    question: "The original DH.121 design used which engine, 40% more powerful than the Spey that BEA demanded?",
    year: null,
    eric: {
      options: ["Rolls-Royce Medway", "Rolls-Royce Conway", "Rolls-Royce Avon", "Rolls-Royce Tyne"],
      correct: 0,
      explanation: "The Rolls-Royce Medway at 13,790 lb thrust each — 40% more powerful than the Spey 505 (10,410 lb). BEA demanded the cheaper, less powerful Spey, hobbling the aircraft's performance and export potential. Boeing used similar-class engines on the 727 and sold 1,832."
    },
    ruth: {
      options: [
        "The Rolls-Royce Medway — much more powerful!",
        "The Rolls-Royce Medway — much more powerful!",
        "A Rolls-Royce car engine (not quite right)",
        "Eric's lawn mower engine (definitely not right)"
      ],
      correct: 0,
      explanation: "The Medway — 40% more powerful than what BEA insisted on. If they'd kept it, the Trident might have outsold the 727!"
    }
  },
  {
    id: 261,
    category: "general",
    question: "There is a marooned Cyprus Airways Trident at old Nicosia Airport. Why can't anyone reach it?",
    year: 1974,
    eric: {
      options: [
        "It's inside the UN buffer zone, inaccessible since the 1974 Turkish invasion",
        "The airport is flooded and the aircraft is partially submerged",
        "The Turkish military uses it as a decoy and restricts access",
        "It was deliberately buried as part of the runway reconstruction"
      ],
      correct: 0,
      explanation: "Trident 2E 5B-DAB sits in old Cyprus Airways colours at the former Nicosia International Airport, marooned inside the UN buffer zone since the 1974 Turkish invasion of Cyprus. The airport has been frozen in time for over 50 years."
    },
    ruth: {
      options: [
        "It's stuck in a UN buffer zone — nobody can get to it!",
        "It's stuck in a UN buffer zone — nobody can get to it!",
        "It flew away (planes do that)",
        "Eric is guarding it (he takes his hobbies seriously)"
      ],
      correct: 0,
      explanation: "Trapped in the UN buffer zone since 1974! The whole airport is frozen in time — like a time capsule with a Trident in it."
    }
  },
  {
    id: 262,
    category: "general",
    question: "The BA Shuttle originally operated from which Heathrow terminal, before moving to Terminal 5 in 2008?",
    year: 1975,
    eric: {
      options: ["Terminal 1", "Terminal 2", "Terminal 3", "Terminal 4"],
      correct: 0,
      explanation: "Terminal 1 was the primary domestic terminal at Heathrow for decades. BA domestic flights moved to Terminal 5 when it opened on 27 March 2008. Terminal 1 finally closed on 29 June 2015."
    },
    ruth: {
      options: [
        "Terminal 1",
        "Terminal 1",
        "Terminal 42 (doesn't exist)",
        "Whichever one had the shortest queue"
      ],
      correct: 0,
      explanation: "Terminal 1 — the domestic terminal for decades before Terminal 5 took over in 2008."
    }
  },

  // ─── Teenage slang (Eric vs his grandson) ─────────────────────
  {
    id: 263,
    category: "general",
    question: "Your grandson says dinner was 'bussin'.' Should you:",
    year: null,
    eric: {
      options: [
        "Be pleased — it means the food was really good",
        "Check the bus timetable — he needs transport",
        "Ground him for swearing at the table",
        "Call a doctor — he may be having a seizure"
      ],
      correct: 0,
      explanation: "'Bussin'' means really, really good — especially food. Double it ('bussin' bussin'') for maximum emphasis. If your grandson says this about your cooking, you've won."
    },
    ruth: {
      options: [
        "It means delicious! Well done, chef!",
        "It means delicious! Well done, chef!",
        "Quick, call an ambulance",
        "He wants to catch the number 42 bus"
      ],
      correct: 0,
      explanation: "'Bussin'' = delicious! It's a compliment! Eric's cooking is clearly bussin'."
    }
  },
  {
    id: 264,
    category: "general",
    question: "Your grandson texts 'no cap.' Does he mean:",
    year: null,
    eric: {
      options: [
        "He's being truthful — 'cap' means a lie",
        "He's lost his hat and needs a new one",
        "He doesn't want a cappuccino",
        "There's no limit on something"
      ],
      correct: 0,
      explanation: "'No cap' = 'I'm not lying,' 'for real.' 'Cap' means a lie. So 'no cap' means truthfully/honestly. If your grandson says 'that was the best birthday ever, no cap' — he means it."
    },
    ruth: {
      options: [
        "He's telling the truth! 'Cap' means a lie!",
        "He's telling the truth! 'Cap' means a lie!",
        "He's lost his hat (has he checked under the stairs?)",
        "He wants a flat white instead"
      ],
      correct: 0,
      explanation: "'No cap' just means 'I'm being honest.' Nothing to do with hats or coffee!"
    }
  },
  {
    id: 265,
    category: "general",
    question: "Your grandson says his sister 'absolutely slayed' at her school concert. Should you:",
    year: null,
    eric: {
      options: [
        "Congratulate her — it means she did brilliantly",
        "Report it to the police — that sounds violent",
        "Check the audience for survivors",
        "Ask what weapon she used"
      ],
      correct: 0,
      explanation: "'Slay' means to do something extremely well. 'She slayed' = she nailed it, she was amazing. No actual violence is involved."
    },
    ruth: {
      options: [
        "It's a compliment! She was brilliant!",
        "It's a compliment! She was brilliant!",
        "Call 999 immediately",
        "Slay... like a dragon? (No, Eric)"
      ],
      correct: 0,
      explanation: "'Slay' = absolutely nailed it! Nothing to do with dragons or violence."
    }
  },
  {
    id: 266,
    category: "general",
    question: "Your grandson's friend says he's 'got mad rizz.' This means:",
    year: null,
    eric: {
      options: [
        "He's extremely charming and good at flirting",
        "He has an undiagnosed skin condition",
        "He's angry about a new fizzy drink",
        "He's buzzing like a bee — possibly an allergic reaction"
      ],
      correct: 0,
      explanation: "'Rizz' means charisma, especially flirting ability. It was Oxford's 2023 Word of the Year. To 'rizz someone up' = to charm them. If your grandson has rizz, he's doing well."
    },
    ruth: {
      options: [
        "He's charming! It means charisma!",
        "He's charming! It means charisma!",
        "Is it contagious? Should we be worried?",
        "Is Rizz a type of cracker?"
      ],
      correct: 0,
      explanation: "'Rizz' = charisma. It was literally the Oxford Word of the Year in 2023!"
    }
  },
  {
    id: 267,
    category: "general",
    question: "Your grandson calls a new film 'mid.' This means:",
    year: null,
    eric: {
      options: [
        "It was average, mediocre, nothing special",
        "He only watched the middle part",
        "It was so good it was mind-blowing",
        "He's still in the middle of watching it"
      ],
      correct: 0,
      explanation: "'Mid' = average, underwhelming, nothing to write home about. It's a mild insult. If something is described as 'mid,' it's the worst kind of boring — not even bad enough to be interesting."
    },
    ruth: {
      options: [
        "It was average — a bit boring!",
        "It was average — a bit boring!",
        "Mid what? Mid-afternoon? Midfield?",
        "It means he liked the middle bit best"
      ],
      correct: 0,
      explanation: "'Mid' = meh. Not terrible, not good, just... mid. The most devastating insult is not 'bad' — it's 'mid.'"
    }
  },
  {
    id: 268,
    category: "general",
    question: "Your grandson says your new cardigan is 'fire.' You should:",
    year: null,
    eric: {
      options: [
        "Accept the compliment — it means excellent",
        "Stop, drop, and roll",
        "Check the smoke alarms",
        "Take it off immediately and call the fire brigade"
      ],
      correct: 0,
      explanation: "'Fire' = excellent, amazing, top-quality. If your grandson says your cardigan is fire, you've achieved peak fashion. Don't question it."
    },
    ruth: {
      options: [
        "It's a compliment! Your cardigan is amazing!",
        "It's a compliment! Your cardigan is amazing!",
        "STOP DROP AND ROLL",
        "The cardigan is fine, Eric. Put the extinguisher down."
      ],
      correct: 0,
      explanation: "'Fire' = amazing! Eric's cardigan game is strong."
    }
  },
  {
    id: 269,
    category: "general",
    question: "Your grandson keeps saying 'skibidi.' What on earth does it mean?",
    year: null,
    eric: {
      options: [
        "A general-purpose silly/weird/cool word from a viral YouTube series about toilets",
        "A new dance from Strictly Come Dancing",
        "A type of Italian pasta",
        "He's trying to say 'spaghetti' with his mouth full"
      ],
      correct: 0,
      explanation: "'Skibidi' comes from 'Skibidi Toilet,' a viral YouTube series featuring singing toilets. It's basically a meaningless all-purpose word that teens use. Don't try to understand it. 'Brainrot' (Oxford's 2024 Word of the Year) describes this kind of content."
    },
    ruth: {
      options: [
        "Nobody really knows — it's from a YouTube show about toilets!",
        "Nobody really knows — it's from a YouTube show about toilets!",
        "A tropical disease (it's not)",
        "Something Eric definitely shouldn't try to say"
      ],
      correct: 0,
      explanation: "It comes from a YouTube series about singing toilets. Yes, really. Welcome to 2025."
    }
  },
  {
    id: 270,
    category: "general",
    question: "Your grandson says you 'lost 50 aura points' when you tripped on the pavement. He means:",
    year: null,
    eric: {
      options: [
        "Your imaginary coolness score took a hit — it was embarrassing",
        "Your spiritual energy has been damaged and you need healing crystals",
        "You've lost 50 loyalty points at the supermarket",
        "He's checking your blood pressure"
      ],
      correct: 0,
      explanation: "Teens assign 'aura points' for cool moments and deduct them for embarrassing ones. Tripping in public = minus 50 aura. Making a great joke = plus 100 aura. It's an entirely imaginary scoring system."
    },
    ruth: {
      options: [
        "Your coolness score went down! (It's not real, don't worry)",
        "Your coolness score went down! (It's not real, don't worry)",
        "Quick, find those 50 points before someone else does",
        "Eric needs healing crystals (he definitely doesn't)"
      ],
      correct: 0,
      explanation: "Aura points are a made-up coolness score. Tripping = minus points. But fitting screwdrivers in a cupboard? That's definitely plus 100 aura."
    }
  },
  {
    id: 271,
    category: "general",
    question: "Your grandson texts 'SMH.' He means:",
    year: null,
    eric: {
      options: [
        "Shaking My Head — he's disappointed or exasperated",
        "Send More Ham",
        "So Much Happiness",
        "Saturday Morning Hello"
      ],
      correct: 0,
      explanation: "SMH = Shaking My Head — expressing disappointment, disbelief, or exasperation. Other texting abbreviations: NGL (Not Gonna Lie), TBH (To Be Honest), IDK (I Don't Know), IYKYK (If You Know You Know)."
    },
    ruth: {
      options: [
        "Shaking My Head!",
        "Shaking My Head!",
        "Send More Ham (Eric would like that)",
        "Smashing Marvellous Hurray"
      ],
      correct: 0,
      explanation: "SMH = Shaking My Head. He's not asking for ham, Eric."
    }
  },
  {
    id: 272,
    category: "general",
    question: "Your grandson says he has 'brainrot.' Should you:",
    year: null,
    eric: {
      options: [
        "Relax — it just means he's spent too much time watching nonsense online",
        "Drive him straight to A&E",
        "Google the symptoms and call NHS 111",
        "Check his temperature and prepare a hot toddy"
      ],
      correct: 0,
      explanation: "'Brainrot' was Oxford's 2024 Word of the Year. It means the effect of consuming too much mindless internet content (like Skibidi Toilet videos). It's usually self-deprecating. No actual brains are rotting."
    },
    ruth: {
      options: [
        "It just means too much TikTok! He's fine!",
        "It just means too much TikTok! He's fine!",
        "Call an ambulance! His brain is rotting!",
        "It's what happens when you don't eat your vegetables"
      ],
      correct: 0,
      explanation: "Brainrot = too much internet. It was literally the Oxford Word of the Year in 2024. No medical attention required."
    }
  },
  {
    id: 273,
    category: "general",
    question: "You catch your grandson 'mewing.' He is:",
    year: null,
    eric: {
      options: [
        "Pressing his tongue to the roof of his mouth to try to sharpen his jawline",
        "Impersonating a cat for TikTok",
        "Having difficulty speaking",
        "Calling for the family cat"
      ],
      correct: 0,
      explanation: "'Mewing' is a TikTok trend where teens press their tongue to the roof of their mouth, believing it will sharpen their jawline. Named after orthodontist Dr. John Mew. Results are... debatable."
    },
    ruth: {
      options: [
        "He's trying to get a sharper jawline! (It doesn't work)",
        "He's trying to get a sharper jawline! (It doesn't work)",
        "He's pretending to be a cat (meow!)",
        "He's got something stuck in his teeth"
      ],
      correct: 0,
      explanation: "Mewing! Teens think pressing their tongue against the roof of their mouth will make them more attractive. Bless them."
    }
  },
  {
    id: 274,
    category: "general",
    question: "Your grandson calls his teacher an 'NPC.' This means:",
    year: null,
    eric: {
      options: [
        "The teacher is robotic and boring, like a non-playable video game character",
        "The teacher is Nice, Polite, and Courteous",
        "The teacher works for a National Public Company",
        "The teacher is a Non-Practising Catholic"
      ],
      correct: 0,
      explanation: "NPC = Non-Playable Character (from video games). A person who seems scripted, robotic, lacking personality. It's not a compliment. The teacher probably doesn't deserve it."
    },
    ruth: {
      options: [
        "He thinks the teacher is robotic and boring!",
        "He thinks the teacher is robotic and boring!",
        "Nice Polite and Courteous (if only)",
        "Non-Playing Character (he should be playing more)"
      ],
      correct: 0,
      explanation: "NPC = Non-Playable Character — someone who seems to follow a script. It's a video game insult applied to real life."
    }
  },
  {
    id: 275,
    category: "general",
    question: "Your grandson says a pop star 'ate and left no crumbs.' He means:",
    year: null,
    eric: {
      options: [
        "She performed so brilliantly there was nothing left to criticise",
        "She ate all the biscuits backstage — how rude",
        "She needs better table manners",
        "She's on a very strict diet"
      ],
      correct: 0,
      explanation: "'She ate' = she did something brilliantly. 'Left no crumbs' = there's nothing to criticise, it was perfect. Nothing to do with actual food."
    },
    ruth: {
      options: [
        "She was absolutely brilliant!",
        "She was absolutely brilliant!",
        "She ate all the biscuits (not this kind of ate)",
        "Someone should teach her some table manners"
      ],
      correct: 0,
      explanation: "'Ate and left no crumbs' = gave a flawless performance. No actual eating involved."
    }
  },
  {
    id: 276,
    category: "general",
    question: "Your grandson looks at your outfit and says 'It's giving 1970s geography teacher.' This means:",
    year: null,
    eric: {
      options: [
        "Your outfit reminds him of a geography teacher from the 1970s (not a compliment)",
        "Your outfit is so generous it's giving things away",
        "He thinks you actually teach geography",
        "Your outfit is very educational"
      ],
      correct: 0,
      explanation: "'It's giving...' describes the vibe something radiates. 'It's giving 1970s geography teacher' means your outfit looks like something a geography teacher would have worn in 1975. This is not praise."
    },
    ruth: {
      options: [
        "Your outfit looks a bit... dated (sorry Eric)",
        "Your outfit looks a bit... dated (sorry Eric)",
        "He wants to study geography (he doesn't)",
        "Eric actually looks very dashing (but the grandson disagrees)"
      ],
      correct: 0,
      explanation: "'It's giving' describes the vibe. '1970s geography teacher' is not the vibe you want. Sorry, Eric."
    }
  },
  {
    id: 277,
    category: "general",
    question: "Your grandson says he was 'caught in 4K' eating the last biscuit. He means:",
    year: null,
    eric: {
      options: [
        "He was caught red-handed with undeniable proof",
        "He was caught on a 4,000-pound security camera",
        "He was running at 4 kilometres per hour while eating",
        "Four thousand people saw him do it"
      ],
      correct: 0,
      explanation: "'Caught in 4K' = caught with irrefutable evidence, as if on high-definition video. There's no denying it. The biscuit is gone. Everyone knows who did it."
    },
    ruth: {
      options: [
        "He was caught red-handed! No denying it!",
        "He was caught red-handed! No denying it!",
        "That's a very expensive camera for watching biscuits",
        "He should have hidden the evidence better"
      ],
      correct: 0,
      explanation: "Caught in 4K = caught with undeniable proof. Like HD CCTV for biscuit theft."
    }
  },
  {
    id: 278,
    category: "general",
    question: "You tell your grandson to 'just pause the game' and come for dinner. Why does he look horrified?",
    year: null,
    eric: {
      options: [
        "It's an online multiplayer game — you literally cannot pause it",
        "He's forgotten how to use the pause button",
        "The game is so exciting he can't bear to stop",
        "He's glued to the controller"
      ],
      correct: 0,
      explanation: "Online multiplayer games (Fortnite, Valorant, Roblox) cannot be paused — other real players are still playing. Leaving mid-game means letting his teammates down, losing progress, and social humiliation. 'Just pause it' is the most triggering phrase in any teenage gamer's life."
    },
    ruth: {
      options: [
        "You can't pause online games! His teammates will be furious!",
        "You can't pause online games! His teammates will be furious!",
        "Games have had pause buttons since 1985 (not these ones, Eric)",
        "He'll come when he's hungry (he's always hungry)"
      ],
      correct: 0,
      explanation: "You can't pause an online game! Other real people are playing! 'Just pause it' is the most misunderstood sentence in modern parenting."
    }
  },
  {
    id: 279,
    category: "general",
    question: "Your grandson asks if you want to 'get on Discord.' He means:",
    year: null,
    eric: {
      options: [
        "He's inviting you to join a group chat platform used by gamers",
        "He wants to have an argument with you",
        "He's asking you to dance (a Discord is like a Disco)",
        "He wants you to disconnect your internet"
      ],
      correct: 0,
      explanation: "Discord is a group chat and voice-call platform popular with gamers and teens. It has 'servers' (group spaces), voice channels, and text channels. It's not about disagreement. Accepting this invitation would be a power move."
    },
    ruth: {
      options: [
        "It's a chat app! He wants to talk to you online!",
        "It's a chat app! He wants to talk to you online!",
        "He wants to argue (he's a teenager, so... maybe)",
        "It's like the telephone but more confusing"
      ],
      correct: 0,
      explanation: "Discord is a chat app! If your grandson invites you on Discord, you should be honoured — that's his territory."
    }
  },
  {
    id: 280,
    category: "general",
    question: "Your grandson describes himself as 'a sigma.' This means:",
    year: null,
    eric: {
      options: [
        "He sees himself as a cool, independent lone wolf type",
        "He's studying Greek at school",
        "He's joined a mathematics club",
        "He's developed a lisp and is trying to say 'singer'"
      ],
      correct: 0,
      explanation: "A 'sigma male' = an independent, self-sufficient person who plays by their own rules. Neither alpha (leader) nor beta (follower). It's a compliment teens give themselves. Whether it's accurate is a separate question."
    },
    ruth: {
      options: [
        "He thinks he's a cool independent loner!",
        "He thinks he's a cool independent loner!",
        "Is that like a sigma in maths? (No, Eric)",
        "He's Greek? Since when?"
      ],
      correct: 0,
      explanation: "Sigma = cool lone wolf. Not a Greek letter, not a maths thing. Teens classify themselves into 'types' now."
    }
  },
  {
    id: 281,
    category: "general",
    question: "Your grandson says his friend is 'delulu.' His friend is:",
    year: null,
    eric: {
      options: [
        "Being playfully called delusional — out of touch with reality",
        "From Honolulu",
        "A character in a new Disney film",
        "Learning to play the didgeridoo"
      ],
      correct: 0,
      explanation: "'Delulu' = short for 'delusional.' Often used self-awarely: 'delulu is the solulu (solution)' — meaning sometimes being unrealistically optimistic is the best strategy. It's usually affectionate."
    },
    ruth: {
      options: [
        "Delusional! But in a fun way!",
        "Delusional! But in a fun way!",
        "From Hawaii (nope)",
        "Is that a type of yoghurt?"
      ],
      correct: 0,
      explanation: "Delulu = delusional. But teens use it lovingly: 'delulu is the solulu' — being unrealistically positive is sometimes the answer!"
    }
  },
  {
    id: 282,
    category: "general",
    question: "Eric tries to use teen slang at dinner. He says 'This casserole is very slay, isn't it?' His grandson's reaction is:",
    year: null,
    eric: {
      options: [
        "Cringing — you can't use 'slay' as an adjective with 'very' in front of it",
        "Impressed — Eric has mastered the youth lexicon",
        "Confused — 'slay' doesn't apply to food",
        "Delighted — finally, a grandparent who speaks their language"
      ],
      correct: 0,
      explanation: "Maximum cringe. 'Slay' doesn't work with 'very' in front of it, it's not really used for food, and a grandparent using teen slang incorrectly is the most embarrassing thing that can happen to a teenager. Eric has lost approximately 500 aura points."
    },
    ruth: {
      options: [
        "Total cringe! Don't do it, Eric!",
        "Total cringe! Don't do it, Eric!",
        "The grandson is so proud (he's really not)",
        "Eric should stick to proper English"
      ],
      correct: 0,
      explanation: "Maximum cringe! There's nothing more embarrassing than a grandparent misusing teen slang. Eric has lost 500 aura points. No cap."
    }
  },

  // ─── BBC Weather Presenters ───────────────────────────────────
  {
    id: 283,
    category: "general",
    question: "Who was the first in-vision BBC TV weather presenter, and when did he first appear?",
    year: 1954,
    eric: {
      options: [
        "George Cowling, 11 January 1954",
        "Michael Fish, 11 January 1954",
        "George Cowling, 11 January 1952",
        "Bert Foord, 11 January 1954"
      ],
      correct: 0,
      explanation: "George Cowling presented the first in-vision weather forecast on 11 January 1954 from BBC Lime Grove Studios at 7:55 PM. He stood in front of a hand-drawn map, using charcoal to illustrate fronts. Before this, weather maps appeared on screen with an off-screen announcer."
    },
    ruth: {
      options: [
        "George Cowling in 1954!",
        "George Cowling in 1954!",
        "Michael Fish (he wasn't first, but he's the most famous)",
        "Eric (he knows everything about the weather)"
      ],
      correct: 0,
      explanation: "George Cowling, 11 January 1954 — the first person to stand in front of a weather map on BBC TV!"
    }
  },
  {
    id: 284,
    category: "general",
    question: "Complete Michael Fish's famous 1987 quote: 'Earlier on today, apparently, a woman rang the BBC and said she heard there was a hurricane on the way. Well, if you're watching...'",
    year: 1987,
    eric: {
      options: [
        "...don't worry, there isn't!",
        "...she was absolutely right!",
        "...I can confirm we're expecting some wind!",
        "...please stay indoors tonight!"
      ],
      correct: 0,
      explanation: "'Don't worry, there isn't!' — broadcast on the evening of 15 October 1987, hours before the Great Storm struck overnight. 18 people died, 15 million trees were felled, and it cost insurers £2 billion. Fish later claimed he was referring to a Florida hurricane, not the UK."
    },
    ruth: {
      options: [
        "Don't worry, there isn't! (There absolutely was)",
        "Don't worry, there isn't! (There absolutely was)",
        "Run for your lives! (he didn't say that)",
        "I've lost my notes (also didn't say that)"
      ],
      correct: 0,
      explanation: "'Don't worry, there isn't!' — then 15 million trees blew down overnight. The most famous weather forecast in British history."
    }
  },
  {
    id: 285,
    category: "general",
    question: "How many trees were felled in the Great Storm of October 1987?",
    year: 1987,
    eric: {
      options: ["About 15 million", "About 10 million", "About 20 million", "About 8 million"],
      correct: 0,
      explanation: "Approximately 15 million trees were felled, including six of the seven oaks in Sevenoaks. Wind speeds exceeded 100 mph in places. 18 people died in the UK. Fish received an MBE (not OBE) in the 2004 Birthday Honours despite the gaffe."
    },
    ruth: {
      options: [
        "15 million trees!",
        "15 million trees!",
        "Just the one (it was a very important tree)",
        "None — Michael Fish said there was no hurricane"
      ],
      correct: 0,
      explanation: "15 million trees! Including six of the seven oaks in Sevenoaks. They had to rename it Oneoak. (They didn't, but they should have.)"
    }
  },
  {
    id: 286,
    category: "general",
    question: "Who designed the BBC's magnetic weather symbols (rubber symbols on steel boards), introduced on 16 August 1975?",
    year: 1975,
    eric: {
      options: [
        "Mark Allen, a Norwich School of Art student (his final year project)",
        "The BBC Graphics Department",
        "The Met Office design team",
        "Michael Fish, who was also an amateur artist"
      ],
      correct: 0,
      explanation: "Mark Allen designed them as his final year project at Norwich School of Art in 1974. Over 36 rubber symbols with magnetic backs, placed on steel map boards. They lasted until computer graphics replaced them on 18 February 1985."
    },
    ruth: {
      options: [
        "A student! It was his final year art project!",
        "A student! It was his final year art project!",
        "NASA (they had experience with magnetic things)",
        "Eric (he's good with magnets)"
      ],
      correct: 0,
      explanation: "An art student called Mark Allen designed them for his degree! The most successful final year project in history."
    }
  },
  {
    id: 287,
    category: "general",
    question: "Which BBC weather presenter had a Spitting Image puppet and was voted 'Britain's sexiest weather presenter' in 1994?",
    year: 1994,
    eric: {
      options: ["Ian McCaskill", "Michael Fish", "Bill Giles", "John Kettley"],
      correct: 0,
      explanation: "Ian McCaskill — the gentle-voiced Scotsman who presented from 1978 to 1998. Known for his famous 'Hullo!' greeting. Also impersonated by Rory Bremner. He died on 10 December 2016, aged 78."
    },
    ruth: {
      options: [
        "Ian McCaskill — the Scottish charmer!",
        "Ian McCaskill — the Scottish charmer!",
        "Eric (he's very sexy, according to Ruth)",
        "All of them (weathermen are irresistible)"
      ],
      correct: 0,
      explanation: "Ian McCaskill! A Scotsman with a gentle voice and a Spitting Image puppet. Officially Britain's sexiest weather presenter."
    }
  },
  {
    id: 288,
    category: "general",
    question: "What did Tomasz Schafernaker do on live BBC News on 18 August 2010?",
    year: 2010,
    eric: {
      options: [
        "Stuck up his middle finger, thinking he was off-camera",
        "Fell asleep during his own forecast",
        "Accidentally forecast snow in July",
        "Read out the football results instead of the weather"
      ],
      correct: 0,
      explanation: "After presenter Simon McCoy teased him, Schafernaker stuck up his middle finger — thinking he was off-camera. The camera cut live to the weather studio. He tried to disguise it by scratching his chin. The clip got 5.5 million YouTube views."
    },
    ruth: {
      options: [
        "He stuck up his middle finger on live TV!",
        "He stuck up his middle finger on live TV!",
        "He said a rude word (he didn't, but the finger was enough)",
        "He predicted sunshine (that's not scandalous at all)"
      ],
      correct: 0,
      explanation: "The middle finger! He thought he was off-camera. He wasn't. 5.5 million people watched it on YouTube."
    }
  },
  {
    id: 289,
    category: "general",
    question: "How many TRIC Awards for Best TV Weather Presenter has Carol Kirkwood won?",
    year: null,
    eric: {
      options: ["Nine", "Seven", "Five", "Eleven"],
      correct: 0,
      explanation: "Carol Kirkwood has won nine TRIC Awards (2003, 2008, 2009, 2012, 2013, 2014, 2015, 2016, 2017). She joined BBC News in April 1998 — over 28 years of presenting by 2026. The 2003 award was the first time weather was included as a category."
    },
    ruth: {
      options: [
        "Nine! More than anyone else!",
        "Nine! More than anyone else!",
        "All of them (she wins every year)",
        "None (she was robbed)"
      ],
      correct: 0,
      explanation: "Nine TRIC Awards! Carol Kirkwood is the undisputed queen of BBC weather presenting."
    }
  },
  {
    id: 290,
    category: "general",
    question: "What was controversial about the BBC weather map redesign in May 2005?",
    year: 2005,
    eric: {
      options: [
        "The 3D tilted view made Scotland appear tiny — over 4,000 complaints",
        "They removed Northern Ireland from the map entirely",
        "The new colours were garish and hard to read",
        "They accidentally reversed north and south"
      ],
      correct: 0,
      explanation: "The 3D perspective tilted the map so Scotland appeared 'little larger than Devon' and Shetland was almost invisible. Over 4,000 complaints were received. SNP MP Angus Macneil raised it in Parliament. The BBC adjusted the view within two weeks."
    },
    ruth: {
      options: [
        "Scotland looked tiny! 4,000 people complained!",
        "Scotland looked tiny! 4,000 people complained!",
        "They forgot to include the weather (just showed a map)",
        "Eric complained (he always complains about the weather)"
      ],
      correct: 0,
      explanation: "The new 3D tilted map made Scotland look minuscule! 4,000 complaints and a question in Parliament. They had to fix it within two weeks."
    }
  },
  {
    id: 291,
    category: "general",
    question: "What was Bill Giles' trademark sign-off gesture during his 25 years presenting BBC weather?",
    year: null,
    eric: {
      options: [
        "A cheery wink",
        "A thumbs up",
        "A salute",
        "A wave with both hands"
      ],
      correct: 0,
      explanation: "Bill Giles' trademark cheery wink became iconic during his 25 years on TV (1975-2000). He led the BBC Met Office forecasting team from 1983 and received an OBE in 1995 for services to broadcast meteorology."
    },
    ruth: {
      options: [
        "A cheery wink!",
        "A cheery wink!",
        "A little dance (weather presenters are jolly people)",
        "He threw his notes in the air (very dramatic)"
      ],
      correct: 0,
      explanation: "Bill Giles' famous wink! 25 years of winking at the nation. An OBE for services to broadcast meteorology and winking."
    }
  },
  {
    id: 292,
    category: "general",
    question: "When was the very first BBC weather forecast broadcast?",
    year: 1922,
    eric: {
      options: [
        "14 November 1922 (a shipping forecast on radio)",
        "11 January 1954 (George Cowling on TV)",
        "26 March 1923 (the first daily radio forecast)",
        "1 January 1924 (shipping forecast in Morse code)"
      ],
      correct: 0,
      explanation: "The first BBC weather forecast was a shipping forecast on radio on 14 November 1922. The first daily forecast followed on 26 March 1923. Morse code shipping forecasts started 1 January 1924. George Cowling's TV debut wasn't until 1954."
    },
    ruth: {
      options: [
        "14 November 1922 — on the radio!",
        "14 November 1922 — on the radio!",
        "Nobody knows (weather has always existed)",
        "The same day as Eric's birthday (it wasn't)"
      ],
      correct: 0,
      explanation: "14 November 1922 — a shipping forecast on BBC radio. Over 100 years of telling people it's going to rain!"
    }
  },

  // ─── Perth, Scotland ──────────────────────────────────────────
  {
    id: 313,
    category: "general",
    question: "How many Tesco stores are there in Perth, Scotland?",
    year: null,
    eric: {
      options: ["3", "4", "5", "2"],
      correct: 1,
      explanation: "4 Tesco stores: 1 Tesco Extra (Crieff Road, 24-hour), 1 Superstore, and 2 Tesco Express. Perth also has an Asda (built on St Johnstone's old ground), a Morrisons, 2 Aldis, 1 Lidl, but no Waitrose."
    },
    ruth: {
      options: ["4! (Eric probably knows them all)", "4! (Eric probably knows them all)", "One on every corner", "None — Perth uses carrier pigeons for groceries"],
      correct: 0,
      explanation: "4 Tescos! And no Waitrose. Eric has probably been to all of them."
    }
  },
  {
    id: 314,
    category: "general",
    question: "King James I was murdered in Perth in 1437. How did his escape attempt through a sewer fail?",
    year: 1437,
    eric: {
      options: [
        "The exit had been blocked to stop tennis balls getting lost",
        "The sewer was flooded by the River Tay",
        "A guard was posted at the exit by the conspirators",
        "The sewer had collapsed earlier that week"
      ],
      correct: 0,
      explanation: "James tried to escape through a sewer tunnel at Blackfriars, but its exit had recently been blocked to prevent tennis balls disappearing into it. He was trapped and stabbed to death. Catherine Douglas tried to bar the door using her arm as a bolt — the assassins broke it forcing entry."
    },
    ruth: {
      options: ["Tennis balls! They blocked the sewer to stop losing them!", "Tennis balls! They blocked the sewer to stop losing them!", "He took a wrong turn (sat nav hadn't been invented)", "The sewer was full (not his day)"],
      correct: 0,
      explanation: "A king killed because someone blocked a sewer to save tennis balls. You genuinely cannot make this up."
    }
  },
  {
    id: 315,
    category: "general",
    question: "Why was horse racing moved from Perth's North Inch to Scone Palace grounds?",
    year: null,
    eric: {
      options: [
        "A drinking ban on the North Inch — Lord Mansfield offered his land",
        "The North Inch was needed for military drills",
        "The course was too short for National Hunt racing",
        "Flooding repeatedly washed out the racecourse"
      ],
      correct: 0,
      explanation: "Racing moved because of a drinking ban on the North Inch. Lord Mansfield offered the Scone Palace parklands as an alternative — where they could drink freely. Perth Racecourse is now the northernmost racecourse in Britain."
    },
    ruth: {
      options: ["They banned drinking! So the racing moved!", "They banned drinking! So the racing moved!", "The horses preferred the scenery at Scone", "Eric complained about the noise"],
      correct: 0,
      explanation: "No booze, no horse racing. Lord Mansfield to the rescue with his palace grounds and a more relaxed drinks policy."
    }
  },
  {
    id: 316,
    category: "general",
    question: "The British rod-caught salmon record has stood since 1922. What was notable about the angler who caught it?",
    year: 1922,
    eric: {
      options: [
        "It was caught by a woman — Georgina Ballantine, 64 lbs on the Tay",
        "It was caught by a 12-year-old boy on his first outing",
        "The angler used homemade tackle from a bicycle wheel",
        "It was caught on the angler's last day before retirement"
      ],
      correct: 0,
      explanation: "Georgina Ballantine caught a 64 lb salmon on the Glendelvine Beat's 'Boat Pool' on the River Tay in 1922. It's still the British rod-caught record over a century later — and caught by a woman."
    },
    ruth: {
      options: ["A woman caught it! And the record still stands!", "A woman caught it! And the record still stands!", "Eric caught it (he didn't, but he'll claim he did)", "The salmon was so big it caught the angler"],
      correct: 0,
      explanation: "Georgina Ballantine — her 64lb salmon from 1922 is STILL the British record. Over 100 years and nobody has beaten her."
    }
  },
  {
    id: 317,
    category: "general",
    question: "St Johnstone FC won a historic cup double in 2020-21. Who scored the winning goal in BOTH finals?",
    year: 2021,
    eric: {
      options: ["Shaun Rooney", "Chris Kane", "Callum Davidson", "Jason Kerr"],
      correct: 0,
      explanation: "Shaun Rooney scored headed winners in both the League Cup final (1-0 v Livingston, 28 February 2021) and the Scottish Cup final (1-0 v Hibs, 22 May 2021). St Johnstone became only the fourth Scottish club to win both cups in the same season."
    },
    ruth: {
      options: ["Shaun Rooney — headers in both finals!", "Shaun Rooney — headers in both finals!", "Eric (he's a secret footballer)", "The goalkeeper (that would have been impressive)"],
      correct: 0,
      explanation: "Shaun Rooney — headed winners in BOTH cup finals! A Perth legend."
    }
  },
  {
    id: 318,
    category: "general",
    question: "Bell's Sports Centre in Perth had the largest timber dome in the UK until 1999. What surpassed it?",
    year: 1968,
    eric: {
      options: ["The Millennium Dome", "The O2 Arena", "The Eden Project", "Wembley Stadium"],
      correct: 0,
      explanation: "Bell's Sports Centre's laminated timber dome (67m diameter) held the record from 1968 until London's Millennium Dome in 1999. The centre opened on 15 October 1968, delayed from March by a fire. In October 2023, it was flooded after the council failed to close the Tay floodgates."
    },
    ruth: {
      options: ["The Millennium Dome!", "The Millennium Dome!", "Eric's shed (it's surprisingly large)", "A very large umbrella"],
      correct: 0,
      explanation: "The Millennium Dome! Bell's Sports Centre held the UK record for 31 years."
    }
  },
  {
    id: 319,
    category: "general",
    question: "Perth regained city status in 2012 after losing it during local government reorganisation. What was the occasion?",
    year: 2012,
    eric: {
      options: [
        "The Queen's Diamond Jubilee celebrations",
        "The Edinburgh Festival's 65th anniversary",
        "The 2012 London Olympics",
        "The Scottish independence referendum"
      ],
      correct: 0,
      explanation: "Perth was awarded city status on 14 March 2012 as part of the Diamond Jubilee celebrations, alongside Chelmsford and St Asaph. It became Scotland's seventh city, having been technically a 'town' since losing the designation in the 1975 reorganisation."
    },
    ruth: {
      options: ["The Queen's Diamond Jubilee!", "The Queen's Diamond Jubilee!", "Perth complained loudly enough", "Eric wrote to his MP (again)"],
      correct: 0,
      explanation: "The Diamond Jubilee! Perth had been technically a 'town' for decades. Finally a city again in 2012."
    }
  },
  {
    id: 320,
    category: "general",
    question: "St Johnstone's old ground Muirton Park was sold. What was built on the site?",
    year: 1989,
    eric: {
      options: ["An Asda superstore", "A Tesco Extra", "A housing estate", "A cinema complex"],
      correct: 0,
      explanation: "Muirton Park (used 1924-1989) was sold to Asda, who built their superstore on it. St Johnstone moved to McDiarmid Park in 1989. The club name comes from Perth's historic name: 'St John's Toun.'"
    },
    ruth: {
      options: ["An Asda! Football ground to supermarket!", "An Asda! Football ground to supermarket!", "A very large car park", "Eric's new garage (he needed the space)"],
      correct: 0,
      explanation: "An Asda superstore! From football ground to frozen food aisle. Progress?"
    }
  },
  {
    id: 321,
    category: "general",
    question: "What is Scotland's first free public lending library, located near Perth?",
    year: 1680,
    eric: {
      options: [
        "Innerpeffray Library, founded 1680",
        "Dundee Public Library, founded 1689",
        "Perth City Library, founded 1672",
        "Scone Abbey Library, founded 1660"
      ],
      correct: 0,
      explanation: "Innerpeffray Library (4 miles SE of Crieff, in Perth and Kinross), founded in 1680. Started in the attic of a chapel. The original 400 books included works on witchcraft, demonology, and astrology. The borrowing register survives from the 17th century."
    },
    ruth: {
      options: ["Innerpeffray! Founded 1680 with books on witchcraft!", "Innerpeffray! Founded 1680 with books on witchcraft!", "Eric's bookshelf (he's very generous with lending)", "The Rovers Return library (that's Coronation Street)"],
      correct: 0,
      explanation: "Innerpeffray Library — Scotland's oldest lending library, with original books on witchcraft and demonology. Not your typical library!"
    }
  },
  {
    id: 322,
    category: "general",
    question: "Perth Prison holds what distinction in the history of British capital punishment?",
    year: 1870,
    eric: {
      options: [
        "Site of Britain's first private (non-public) execution in 1870",
        "Last prison in Scotland to carry out an execution",
        "Only prison where a woman was executed in the 20th century",
        "First prison to use the long-drop method"
      ],
      correct: 0,
      explanation: "George Chalmers was hanged within Perth Prison walls in 1870 — the first private execution in Britain after public hangings were abolished in 1868. The prison was also the only one in Britain with facilities for force-feeding hunger-striking suffragettes."
    },
    ruth: {
      options: ["First private execution in Britain — 1870!", "First private execution in Britain — 1870!", "It's haunted (probably)", "Eric once visited (as a tourist, not an inmate)"],
      correct: 0,
      explanation: "The first non-public execution in British history. The prison was originally built by French Napoleonic prisoners of war, who were so popular the town waved them off when they were repatriated."
    }
  },
  {
    id: 323,
    category: "general",
    question: "The Kinnoull Tower folly overlooking Perth was inspired by castles in which European country?",
    year: null,
    eric: {
      options: ["Germany (Rhine castles)", "France (Loire castles)", "Italy (Tuscan towers)", "Spain (Andalusian forts)"],
      correct: 0,
      explanation: "Thomas Hay, 9th Earl of Kinnoull, built the tower in the early 1800s inspired by castles along the Rhine in Germany. Kinnoull Hill (222m / 728 ft) offers panoramic views of the Tay, Fife, and the Sidlaw Hills."
    },
    ruth: {
      options: ["Germany! Inspired by castles on the Rhine!", "Germany! Inspired by castles on the Rhine!", "Scotland (he was inspired by his own garden)", "Nowhere — he just liked building things (like Eric)"],
      correct: 0,
      explanation: "Rhine castles in Germany! The Earl of Kinnoull saw them on holiday and thought 'I'll have one of those at home.'"
    }
  },
  {
    id: 324,
    category: "general",
    question: "What significant historical artefact returned to Perth on 30 March 2024, displayed in the new Perth Museum?",
    year: 2024,
    eric: {
      options: [
        "The Stone of Destiny, returning to Perthshire after 700 years",
        "The Lewis Chessmen, on permanent loan from the British Museum",
        "The Declaration of Arbroath, moved from Edinburgh",
        "The Crown of Scotland, displayed for the Diamond Jubilee"
      ],
      correct: 0,
      explanation: "The Stone of Destiny moved to its new permanent home in Perth Museum (the refurbished City Hall, £27 million project), returning to Perthshire for the first time in over 700 years. Over 3,000 people visited on opening day."
    },
    ruth: {
      options: ["The Stone of Destiny! Back after 700 years!", "The Stone of Destiny! Back after 700 years!", "Eric's missing screwdriver set (found at last)", "A very old haggis"],
      correct: 0,
      explanation: "The Stone of Destiny — back in Perthshire after 700 years! It was stolen by Edward I in 1296, stolen again by students in 1950, and finally came home in 2024."
    }
  },
  {
    id: 325,
    category: "general",
    question: "At the 1396 Battle of the Clans on Perth's North Inch, one side was a man short. How was the problem solved?",
    year: 1396,
    eric: {
      options: [
        "A local blacksmith named Hal o' the Wynd volunteered to fight for a fee",
        "They reduced both sides from 30 to 29 men",
        "A substitute was drawn from the spectators by lot",
        "King Robert III lent one of his bodyguards"
      ],
      correct: 0,
      explanation: "Henry Gow ('Hal o' the Wynd'), a Perth blacksmith, volunteered to fight for Clan Chattan — but only if he survived and got paid. They won, killing all but one opponent (who escaped by jumping into the Tay and swimming across). Sir Walter Scott immortalised it in The Fair Maid of Perth."
    },
    ruth: {
      options: ["A blacksmith volunteered for cash!", "A blacksmith volunteered for cash!", "They asked Eric (he was busy)", "They cancelled and went to the pub instead"],
      correct: 0,
      explanation: "A Perth blacksmith named Hal o' the Wynd volunteered — but only for money and only if he survived. A very Scottish approach to mortal combat."
    }
  },
  {
    id: 326,
    category: "general",
    question: "Perth is twinned with its Australian namesake. Which other country also has a Perth that is twinned with Perth, Scotland?",
    year: null,
    eric: {
      options: ["Canada (Perth, Ontario)", "New Zealand", "South Africa", "USA"],
      correct: 0,
      explanation: "Perth, Ontario, Canada is twinned with Perth, Scotland — along with Perth, Western Australia. Perth Scotland is also twinned with Aschaffenburg (Germany), Bydgoszcz (Poland), Cognac (France), Haikou (China), and Pskov (Russia)."
    },
    ruth: {
      options: ["Canada! Perth, Ontario!", "Canada! Perth, Ontario!", "There are Perths everywhere!", "Eric has visited them all (he hasn't)"],
      correct: 0,
      explanation: "Canada! Perth, Ontario. The Scottish Perth gets around — twinned with 7 cities on 4 continents."
    }
  },
  {
    id: 327,
    category: "general",
    question: "Why is Perth called 'The Fair City'?",
    year: 1828,
    eric: {
      options: [
        "From Sir Walter Scott's 1828 novel 'The Fair Maid of Perth'",
        "From a royal charter by King James VI describing it as 'the fairest city'",
        "From the annual Perth Fair, held since medieval times",
        "From the fair weather Perth supposedly enjoys"
      ],
      correct: 0,
      explanation: "The nickname comes from Sir Walter Scott's 1828 novel The Fair Maid of Perth, set in 1396 when the city was effectively Scotland's capital. There's a statue of the Fair Maid in the city centre."
    },
    ruth: {
      options: ["Sir Walter Scott's novel!", "Sir Walter Scott's novel!", "Because it's quite nice (fair enough)", "Eric thinks it's the fairest city (he's biased)"],
      correct: 0,
      explanation: "Sir Walter Scott called it that in his 1828 novel — and the name stuck. Perth has been 'The Fair City' ever since."
    }
  },

  // ─── Perth, Australia ─────────────────────────────────────────
  {
    id: 328,
    category: "general",
    question: "Perth, Australia was named after Perth, Scotland. But not because the founder was from there. Why was the name chosen?",
    year: 1829,
    eric: {
      options: [
        "To flatter Sir George Murray, MP for Perthshire and Secretary of State for the Colonies",
        "Captain Stirling's wife was born in Perth, Scotland",
        "A coin toss between Perth and Edinburgh",
        "The colony's investors were based in Perth, Scotland"
      ],
      correct: 0,
      explanation: "Founded 12 August 1829 by Captain James Stirling, it was named to flatter Sir George Murray, MP for Perthshire, whose support as Secretary of State for War and the Colonies was needed. Pure political flattery."
    },
    ruth: {
      options: ["To butter up a politician! Classic!", "To butter up a politician! Classic!", "They ran out of names (Australia is big)", "Eric suggested it (he didn't)"],
      correct: 0,
      explanation: "Named to flatter a politician! Some things never change."
    }
  },
  {
    id: 329,
    category: "general",
    question: "Perth earned the nickname 'City of Light' in 1962. Why?",
    year: 1962,
    eric: {
      options: [
        "Residents turned on every light to be visible to astronaut John Glenn orbiting overhead",
        "It was the first Australian city to switch to electric street lighting",
        "A citywide festival of light was held for the Commonwealth Games",
        "The city's white sand beaches reflect more light than any other city"
      ],
      correct: 0,
      explanation: "On 20 February 1962, as John Glenn orbited Earth in Friendship 7, Perth residents turned on all their house lights and street lights. Glenn radioed: 'Just to my right I can see a big pattern of light... thank everybody for turning them on, will you?' They empathised with his isolation — Perth being the world's most isolated major city."
    },
    ruth: {
      options: ["Everyone turned on their lights for an astronaut!", "Everyone turned on their lights for an astronaut!", "It's very sunny (but that's not why)", "Eric left the lights on (again)"],
      correct: 0,
      explanation: "The whole city turned on their lights for John Glenn orbiting in space! He saw them from orbit and thanked Perth by radio."
    }
  },
  {
    id: 330,
    category: "general",
    question: "How many times has Western Australia held a referendum on daylight saving, and what was the result each time?",
    year: null,
    eric: {
      options: [
        "Four times (1975, 1984, 1992, 2009) — all rejected",
        "Three times (1975, 1992, 2009) — all rejected",
        "Four times — three rejected, one accepted then reversed",
        "Twice (1984, 2009) — both rejected"
      ],
      correct: 0,
      explanation: "Four referendums, all rejected. The 2009 vote (54.6% no) followed a three-year trial from 2006-2009. Perth is 2 hours behind Sydney in winter, but 3 hours behind in summer because the east observes DST and Perth refuses to."
    },
    ruth: {
      options: ["Four referendums — all said NO!", "Four referendums — all said NO!", "They don't believe in daylight in Perth", "Eric would vote no too (he hates change)"],
      correct: 0,
      explanation: "Four times they voted, four times they said no! Western Australians really don't want daylight saving."
    }
  },
  {
    id: 331,
    category: "general",
    question: "The Perth Mint created a record-breaking gold coin in 2011. What made it remarkable?",
    year: 2011,
    eric: {
      options: [
        "It weighs one tonne and is 99.99% pure gold — world's largest gold coin",
        "It is 2 metres in diameter — world's widest coin",
        "It was the first coin to contain exactly 1 million dollars of gold",
        "It was struck from asteroid-sourced gold — first extraterrestrial coin"
      ],
      correct: 0,
      explanation: "The Australian Kangaroo One Tonne Gold Coin — one tonne of 99.99% pure gold, 80cm wide and 12cm deep. Certified by Guinness as the world's largest gold coin. The Perth Mint has been operating from its original 1899 premises — older than Australian Federation itself."
    },
    ruth: {
      options: ["It weighs a TONNE! Made of solid gold!", "It weighs a TONNE! Made of solid gold!", "Eric would put it in his cupboard under the stairs", "You'd need a forklift for the vending machine"],
      correct: 0,
      explanation: "One tonne of solid gold! You definitely can't put that in a parking meter."
    }
  },
  {
    id: 332,
    category: "general",
    question: "Why is Rottnest Island called 'Rottnest'?",
    year: 1696,
    eric: {
      options: [
        "Dutch explorer de Vlamingh thought the quokkas were giant rats — 'Rats' Nest Island'",
        "The island's vegetation was rotting when first explored",
        "It was named after Rottnest in the Netherlands",
        "British settlers found rat infestations when they arrived"
      ],
      correct: 0,
      explanation: "Willem de Vlamingh in 1696 called it 't Eylandt 't Rottenest ('Rats' Nest Island') because he mistook the quokkas for giant rats. The Noongar name is Wadjemup, meaning 'place across the water where the spirits are.'"
    },
    ruth: {
      options: ["A Dutchman thought quokkas were giant rats!", "A Dutchman thought quokkas were giant rats!", "The rats complained about the name (they're quokkas)", "Eric named it (he's been everywhere)"],
      correct: 0,
      explanation: "A Dutch explorer in 1696 saw quokkas and thought they were enormous rats! Hence 'Rats' Nest Island.' Poor quokkas."
    }
  },
  {
    id: 333,
    category: "general",
    question: "Perth's famous summer sea breeze has a medical nickname. What is it called?",
    year: null,
    eric: {
      options: [
        "The Fremantle Doctor",
        "The Perth Physician",
        "The Swan River Surgeon",
        "The Cottesloe Consultant"
      ],
      correct: 0,
      explanation: "The 'Fremantle Doctor' — it 'cures' the oppressive summer heat, blowing in from the Indian Ocean typically between 10am and 3pm at 28-37 km/h. Cricket, sailing, and outdoor events are scheduled around it. The WACA cricket ground's characteristics are partly shaped by it."
    },
    ruth: {
      options: ["The Fremantle Doctor! It 'cures' the heat!", "The Fremantle Doctor! It 'cures' the heat!", "Dr Breeze (not a real doctor)", "Eric's fan (he brought one from Scotland)"],
      correct: 0,
      explanation: "The Fremantle Doctor! It blows in from the ocean every summer afternoon and drops the temperature in minutes."
    }
  },
  {
    id: 334,
    category: "general",
    question: "Kings Park in Perth contains a 750-year-old tree that was transported how far to be replanted there?",
    year: null,
    eric: {
      options: [
        "3,200 km from the Kimberley",
        "2,000 km from the Nullarbor",
        "1,500 km from Alice Springs",
        "800 km from Kalgoorlie"
      ],
      correct: 0,
      explanation: "A 750-year-old boab tree was trucked 3,200 km from the Kimberley region in northern WA. Kings Park (400.6 hectares) is larger than New York's Central Park (341 hectares) by about 60 hectares."
    },
    ruth: {
      options: ["3,200 km! They drove a tree across the outback!", "3,200 km! They drove a tree across the outback!", "From Eric's garden (it was getting too big)", "From the local garden centre (a very big garden centre)"],
      correct: 0,
      explanation: "3,200 km! They trucked a 750-year-old tree across the outback. Only in Australia."
    }
  },
  {
    id: 335,
    category: "general",
    question: "Perth's Bell Tower contains bells from which famous London church?",
    year: 2000,
    eric: {
      options: [
        "St Martin-in-the-Fields, Trafalgar Square",
        "St Paul's Cathedral",
        "Westminster Abbey",
        "St Clement Danes, Strand"
      ],
      correct: 0,
      explanation: "12 of the 18 bells are from St Martin-in-the-Fields, Trafalgar Square — the only 'royal bells' ever to have left England. They rang for the defeat of the Spanish Armada (1588), every coronation since George II (1727), and Captain Cook's return."
    },
    ruth: {
      options: ["St Martin-in-the-Fields — from Trafalgar Square!", "St Martin-in-the-Fields — from Trafalgar Square!", "Big Ben (they nicked the bell)", "Eric's doorbell (it's surprisingly loud)"],
      correct: 0,
      explanation: "Bells from Trafalgar Square! They rang for the Spanish Armada's defeat in 1588. Now they ring in Perth, Australia."
    }
  },
  {
    id: 336,
    category: "general",
    question: "The Fremantle Dockers AFL team's name has an unusual origin. What is it?",
    year: 1995,
    eric: {
      options: [
        "Board members invented a fake story to avoid association with a corrupt union",
        "Named after a famous dog called Docker who lived on the docks",
        "Named by a public vote in the Fremantle Gazette",
        "Named after the Docker family who donated the original ground"
      ],
      correct: 0,
      explanation: "Board members worried 'Dockers' linked them to the notoriously corrupt Federated Ship Painters and Dockers Union. They invented a fictional origin claiming it came from the 'Fremantle Docker' sea breeze. The club has never won a premiership in nearly 30 years."
    },
    ruth: {
      options: ["They made up a fake story! The name's origin is fiction!", "They made up a fake story! The name's origin is fiction!", "Named after a dog (it wasn't)", "Nobody knows (actually, everyone knows now)"],
      correct: 0,
      explanation: "They invented a fake origin story! The 'Fremantle Docker' sea breeze doesn't exist — but the corrupt dockworkers' union did. Creative problem-solving."
    }
  },
  {
    id: 337,
    category: "general",
    question: "Perth Australia is roughly how many times larger in population than Perth Scotland?",
    year: null,
    eric: {
      options: ["About 49 times", "About 30 times", "About 65 times", "About 15 times"],
      correct: 0,
      explanation: "Perth Australia (~2.3 million metro) is roughly 49 times the population of Perth Scotland (~47,000 city). The two cities are officially twinned. Perth Scotland was once the capital of Scotland; Perth Australia contains 80% of Western Australia's population."
    },
    ruth: {
      options: ["About 49 times bigger!", "About 49 times bigger!", "Same size (they're not)", "Perth Scotland is bigger (it really isn't)"],
      correct: 0,
      explanation: "49 times bigger! But the Scottish Perth was once the capital of Scotland, so it has seniority."
    }
  },
  {
    id: 338,
    category: "general",
    question: "The road from Perth to Sydney crosses the Nullarbor Plain. How long is Australia's longest straight road on this route?",
    year: null,
    eric: {
      options: ["146.6 km (the 90 Mile Straight)", "120.4 km (the 75 Mile Straight)", "164.2 km (the 100 Mile Straight)", "132.8 km (the 82 Mile Straight)"],
      correct: 0,
      explanation: "The 90 Mile Straight on the Eyre Highway is 146.6 km (91.1 miles) without a single turn. The total Perth-to-Sydney road distance is about 4,000 km. The highway doubles as an emergency airstrip for the Royal Flying Doctor Service."
    },
    ruth: {
      options: ["146.6 km without a single curve!", "146.6 km without a single curve!", "So straight even Eric couldn't complain about it", "Long enough to fall asleep (don't do that)"],
      correct: 0,
      explanation: "146.6 km in a perfectly straight line! The highway also doubles as a landing strip for the Flying Doctor Service."
    }
  },
  {
    id: 339,
    category: "general",
    question: "Which Perth-born actor won a posthumous Oscar for playing the Joker?",
    year: 2008,
    eric: {
      options: ["Heath Ledger", "Sam Worthington", "Dacre Montgomery", "Hugh Jackman"],
      correct: 0,
      explanation: "Heath Ledger (1979-2008), born in Perth, won a posthumous Academy Award for Best Supporting Actor as the Joker in The Dark Knight. Other famous Perth exports: Bon Scott (AC/DC), Kevin Parker (Tame Impala), Tim Minchin (Matilda the Musical), and Daniel Ricciardo (F1)."
    },
    ruth: {
      options: ["Heath Ledger!", "Heath Ledger!", "Eric (in a very low-budget film)", "Batman (wrong character)"],
      correct: 0,
      explanation: "Heath Ledger — born in Perth, tragically died at 28, and won an Oscar for one of cinema's greatest villain performances."
    }
  },
  {
    id: 340,
    category: "general",
    question: "Perth's CBD public transport has an unusual feature. What is it?",
    year: 1996,
    eric: {
      options: [
        "All buses and trains within the CBD are completely free",
        "All transport runs on solar power",
        "The CBD has no bus stops — you flag buses down anywhere",
        "Transport only runs every other day to save energy"
      ],
      correct: 0,
      explanation: "All buses and trains within Perth's Free Transit Zone are completely free, funded by the Perth Parking Levy on non-residential parking bays. Free colour-coded CAT buses (Red, Blue, Yellow, Green) have been running since 1996."
    },
    ruth: {
      options: ["Free! All city centre transport is free!", "Free! All city centre transport is free!", "You ride kangaroos (you don't)", "Eric would love free transport"],
      correct: 0,
      explanation: "Completely free buses and trains in the city centre! Paid for by a levy on parking spaces."
    }
  },
  {
    id: 341,
    category: "general",
    question: "How does the size of Western Australia compare to Western Europe?",
    year: null,
    eric: {
      options: [
        "WA is larger than Western Europe",
        "WA is about the same size",
        "WA is about half the size",
        "WA is about three-quarters the size"
      ],
      correct: 0,
      explanation: "Western Australia (2.5 million sq km) is larger than all of Western Europe. It's 1.5 times the size of Alaska, 3.5 times the size of Texas, and the second-largest subnational entity in the world (after Russia's Sakha Republic). And 80% of its population lives in Perth."
    },
    ruth: {
      options: ["Bigger! WA is bigger than Western Europe!", "Bigger! WA is bigger than Western Europe!", "About the size of Eric's ambitions", "Very big (that's the official measurement)"],
      correct: 0,
      explanation: "Bigger than Western Europe! One state, bigger than an entire chunk of continent. And most people there live in one city."
    }
  },
  {
    id: 342,
    category: "general",
    question: "The WACA cricket ground in Perth holds an unusual record. What is it?",
    year: null,
    eric: {
      options: [
        "Most Test scores of 99 — seven batsmen dismissed one short of a century",
        "Most Test hat-tricks taken on a single ground",
        "Fastest century ever scored in Test cricket",
        "Most consecutive draws in Test cricket history"
      ],
      correct: 0,
      explanation: "The WACA has hosted seven Test scores of 99 — the most agonising dismissal in cricket. It's also where Dennis Lillee was clocked bowling at 154.8 km/h in 1975. The Fremantle Doctor sea breeze aids swing bowling. International cricket moved to Perth Stadium after 2017."
    },
    ruth: {
      options: ["Seven batsmen got out on 99! So close!", "Seven batsmen got out on 99! So close!", "Most sunburned spectators", "Eric once scored 99 there (he didn't)"],
      correct: 0,
      explanation: "Seven batsmen dismissed on 99 at the WACA — the most agonising ground in cricket. One run short, seven times!"
    }
  },

  // ─── Coronation Street ────────────────────────────────────────
  {
    id: 293,
    category: "general",
    question: "When was the first episode of Coronation Street broadcast?",
    year: 1960,
    eric: {
      options: ["9 December 1960", "9 December 1959", "9 November 1960", "9 January 1961"],
      correct: 0,
      explanation: "Friday, 9 December 1960 at 7:00 PM on ITV (Granada Television). Broadcast live, in black and white. Daily Mirror critic Ken Irwin predicted it would last only three weeks."
    },
    ruth: {
      options: ["9 December 1960", "9 December 1960", "Before television was invented", "Eric remembers it well (he was 2)"],
      correct: 0,
      explanation: "9 December 1960! Still going strong over 65 years later. Take that, Ken Irwin of the Daily Mirror."
    }
  },
  {
    id: 294,
    category: "general",
    question: "Coronation Street was nearly called something else. What was the original name, and why was it changed?",
    year: 1960,
    eric: {
      options: [
        "Florizel Street — it sounded too much like a disinfectant (Zoflora)",
        "Victoria Street — there were too many real Victoria Streets",
        "Jubilee Terrace — it sounded too posh",
        "Archie Street — the real street it was based on"
      ],
      correct: 0,
      explanation: "'Florizel Street' was changed partly because a tea lady at Granada said it sounded like a disinfectant (Zoflora), and partly because William Roache couldn't pronounce 'Florizel.' Creator Tony Warren originally submitted it to the BBC as 'Our Street.'"
    },
    ruth: {
      options: [
        "Florizel Street — sounded like floor cleaner!",
        "Florizel Street — sounded like floor cleaner!",
        "Eric's Street (sadly rejected)",
        "Screwdriver Lane (Eric's favourite street name)"
      ],
      correct: 0,
      explanation: "Florizel Street! A tea lady said it sounded like disinfectant. Good job she spoke up."
    }
  },
  {
    id: 295,
    category: "general",
    question: "How much was composer Eric Spear paid for the Coronation Street theme tune?",
    year: 1960,
    eric: {
      options: ["£6", "£60", "£600", "£6,000"],
      correct: 0,
      explanation: "A mere £6 (about £137 in today's money). The lead instrument is a cornet, played by Ronnie Hunt. Spear died on 3 November 1966, having never seen the full success of the show. The tune was originally titled 'Lancashire Blues.'"
    },
    ruth: {
      options: [
        "Just £6! (That's about 50p per decade of broadcasting)",
        "Just £6! (That's about 50p per decade of broadcasting)",
        "A million pounds (seems fair for the most famous tune on TV)",
        "He did it for free (he should have negotiated better)"
      ],
      correct: 0,
      explanation: "£6! For the most recognisable theme tune in British television. Eric Spear got a terrible deal."
    }
  },
  {
    id: 296,
    category: "general",
    question: "What instrument plays the Coronation Street theme tune?",
    year: 1960,
    eric: {
      options: ["Cornet", "Trumpet", "Clarinet", "Flugelhorn"],
      correct: 0,
      explanation: "A cornet, played by Ronnie Hunt. Easy to confuse with a trumpet (they look similar), but the cornet has a mellower, warmer tone. Composer Eric Spear insisted on many takes before he was satisfied."
    },
    ruth: {
      options: ["A cornet!", "A cornet!", "A tuba (imagine!)", "Eric plays it live every episode (he doesn't)"],
      correct: 0,
      explanation: "A cornet! Not a trumpet — a cornet has a warmer, softer sound. That's the distinctive Corrie tune."
    }
  },
  {
    id: 297,
    category: "general",
    question: "Who is the only character to appear in Coronation Street since Episode 1?",
    year: 1960,
    eric: {
      options: ["Ken Barlow (William Roache)", "Ena Sharples (Violet Carson)", "Rita Sullivan (Barbara Knox)", "Emily Bishop (Eileen Derbyshire)"],
      correct: 0,
      explanation: "Ken Barlow, played by William Roache (born 25 April 1932). He holds the Guinness World Record for longest-serving actor in a television soap opera — over 60 years in the same role."
    },
    ruth: {
      options: ["Ken Barlow! Since 1960!", "Ken Barlow! Since 1960!", "The cobbles (they've been there longer)", "The cat (Frisky deserves recognition)"],
      correct: 0,
      explanation: "Ken Barlow — William Roache has been playing him since 1960. A Guinness World Record holder!"
    }
  },
  {
    id: 298,
    category: "general",
    question: "Hilda Ogden's famous 'muriel' featured three flying ducks. What was distinctive about the middle duck?",
    year: 1976,
    eric: {
      options: [
        "It always hung at a wonky angle — Hilda could never straighten it",
        "It was painted a different colour from the other two",
        "It was missing a wing",
        "It faced the wrong direction"
      ],
      correct: 0,
      explanation: "The middle duck famously hung at a wonky angle — Hilda could never get it straight. This was actress Jean Alexander's own idea. The mural (which Hilda called a 'muriel') was painted by Eddie Yeats when he ran out of wallpaper."
    },
    ruth: {
      options: [
        "It was always wonky!",
        "It was always wonky!",
        "It was a real duck (no, it was plaster)",
        "Eric has the same ducks in his hallway (does he?)"
      ],
      correct: 0,
      explanation: "The wonky middle duck! Hilda could never get it straight. Jean Alexander (who played Hilda) came up with the idea herself."
    }
  },
  {
    id: 299,
    category: "general",
    question: "How many viewers watched Hilda Ogden's departure on Christmas Day 1987?",
    year: 1987,
    eric: {
      options: ["26.65 million (combined)", "22.5 million", "30 million", "18.45 million"],
      correct: 0,
      explanation: "26.65 million combined (17.97 million first broadcast + 8.66 million omnibus). The highest-rated Coronation Street episode ever. Hilda sang 'Wish Me Luck As You Wave Me Goodbye' at her farewell party in the Rovers."
    },
    ruth: {
      options: ["Over 26 million!", "Over 26 million!", "Just Eric and Ruth (loyal viewers)", "The entire country (nearly)"],
      correct: 0,
      explanation: "Over 26 million! Almost half the country watched Hilda leave. She sang 'Wish Me Luck As You Wave Me Goodbye.'"
    }
  },
  {
    id: 300,
    category: "general",
    question: "How was villain Alan Bradley killed in 1989, and how many viewers watched?",
    year: 1989,
    eric: {
      options: [
        "Hit by a Blackpool tram while chasing Rita — 27 million viewers",
        "Fell from Blackpool Tower while chasing Rita — 25 million viewers",
        "Drowned in the canal after a car chase — 27 million viewers",
        "Hit by a bus on Coronation Street — 22 million viewers"
      ],
      correct: 0,
      explanation: "Alan Bradley was fatally struck by a Blackpool tram on 8 December 1989 while chasing Rita along the seafront. 27 million viewers watched. Actor Mark Eden later married Sue Nicholls (Audrey Roberts) in real life."
    },
    ruth: {
      options: ["Hit by a Blackpool tram! 27 million watched!", "Hit by a Blackpool tram! 27 million watched!", "He tripped on the cobbles (anticlimactic)", "Eric pushed him (Eric wasn't in Corrie)"],
      correct: 0,
      explanation: "A Blackpool tram! 27 million people watched. And then the actor married his co-star. Soap opera on and off screen."
    }
  },
  {
    id: 301,
    category: "general",
    question: "During the 'Free Deirdre Rachid' campaign in 1998, which two senior politicians publicly commented on her imprisonment?",
    year: 1998,
    eric: {
      options: [
        "PM Tony Blair and Conservative leader William Hague",
        "PM Tony Blair and Home Secretary Jack Straw",
        "Home Secretary Jack Straw and Liberal Democrat leader Paddy Ashdown",
        "PM John Major and Labour leader Tony Blair"
      ],
      correct: 0,
      explanation: "Both Tony Blair (who ordered Jack Straw to 'look into the case') AND William Hague ('The whole nation is deeply concerned about Deirdre'). When real politicians intervene in a soap opera storyline, you know it's become a national event."
    },
    ruth: {
      options: ["Tony Blair AND William Hague — both got involved!", "Tony Blair AND William Hague — both got involved!", "Eric wrote to his MP (probably)", "The Queen (she's a secret Corrie fan)"],
      correct: 0,
      explanation: "The Prime Minister and the Leader of the Opposition both commented on a soap storyline. Only in Britain."
    }
  },
  {
    id: 302,
    category: "general",
    question: "When Ken and Deirdre reunited in February 1983, what appeared on the scoreboard at Old Trafford?",
    year: 1983,
    eric: {
      options: [
        "Ken and Deirdre reunited. Ken 1 — Mike 0",
        "Free Deirdre! Ken wins!",
        "Coronation Street 1 — Mike Baldwin 0",
        "Ken Barlow wins the cup"
      ],
      correct: 0,
      explanation: "During the Manchester United vs Arsenal match, the Old Trafford scoreboard displayed 'Ken and Deirdre reunited. Ken 1 — Mike 0' — drawing cheers from spectators. The reconciliation episode drew 18.45 million viewers."
    },
    ruth: {
      options: ["Ken 1 — Mike 0!", "Ken 1 — Mike 0!", "Goal! (but not a football goal)", "Man United were losing (as usual)"],
      correct: 0,
      explanation: "Ken 1 — Mike 0 on the Old Trafford scoreboard! The crowd cheered louder than they did for any goal that night."
    }
  },
  {
    id: 303,
    category: "general",
    question: "What were Mike Baldwin's dying words to Ken Barlow?",
    year: 2006,
    eric: {
      options: [
        "You're finished, Barlow. Deirdre loves me; she's mine.",
        "I always won, Ken. Always.",
        "Tell Deirdre I loved her.",
        "The factory is yours now, Ken."
      ],
      correct: 0,
      explanation: "Mike (suffering from Alzheimer's) collapsed in the street and died in Ken's arms. His final words — 'You're finished, Barlow. Deirdre loves me; she's mine' — showed that even at the end, their rivalry defined him. Broadcast 7 April 2006."
    },
    ruth: {
      options: ["Deirdre loves me, she's mine!", "Deirdre loves me, she's mine!", "Tell Eric to look after the screwdrivers", "Can someone call an ambulance? (too late)"],
      correct: 0,
      explanation: "Even dying in Ken's arms, Mike couldn't resist one last dig about Deirdre. The greatest soap rivalry of all time."
    }
  },
  {
    id: 304,
    category: "general",
    question: "The cat in the Coronation Street opening credits was called Frisky. How much was his owner paid?",
    year: null,
    eric: {
      options: ["£200", "£2,000", "£20", "£20,000"],
      correct: 0,
      explanation: "Frisky's owner Jon-Paul Rimington of Leeds received a one-off payment of £200. The cat appeared in over 1,000 episodes in the title sequence. When Frisky died, his ashes were auctioned for charity and sold for £700 — more than three times his original fee."
    },
    ruth: {
      options: ["£200 — less than his ashes sold for!", "£200 — less than his ashes sold for!", "A lifetime supply of cat food (seems fair)", "Frisky negotiated his own contract (he was a smart cat)"],
      correct: 0,
      explanation: "£200! And when he died, his ashes sold at auction for £700. Frisky was worth more dead than alive. Poor cat."
    }
  },
  {
    id: 305,
    category: "general",
    question: "How many hairnets did Ena Sharples (Violet Carson) wear at once, and why?",
    year: null,
    eric: {
      options: [
        "Three — so the mesh would show on camera",
        "Two — for extra hold in the wind",
        "One — that was enough",
        "Four — she was very security-conscious about her hair"
      ],
      correct: 0,
      explanation: "Violet Carson wore three hairnets at once so the mesh would be visible on camera. She refused to let makeup touch her silver hair. In real life, Carson's favourite drink was brandy and ginger — not the milk stout Ena drank in the Rovers snug."
    },
    ruth: {
      options: ["Three! So they'd show on TV!", "Three! So they'd show on TV!", "One (a normal amount of hairnets)", "Eric wears three hairnets too (he doesn't have enough hair)"],
      correct: 0,
      explanation: "Three hairnets at once! One wasn't visible enough on the black-and-white cameras."
    }
  },
  {
    id: 306,
    category: "general",
    question: "Hayley Cropper (Julie Hesmondhalgh) made soap opera history. What first did the character achieve?",
    year: 1998,
    eric: {
      options: [
        "First transgender character in a British soap opera",
        "First character to appear in both Corrie and EastEnders",
        "First character married in a non-religious ceremony",
        "First character to have a storyline lasting over 10 years"
      ],
      correct: 0,
      explanation: "Hayley was the first transgender character in a British soap and the first permanent transgender character in world serialised drama. First appeared 26 January 1998. Julie Hesmondhalgh won multiple awards for Hayley's death storyline in 2014."
    },
    ruth: {
      options: ["First transgender character in a British soap!", "First transgender character in a British soap!", "First character to drink tea (they all drink tea)", "First character Eric actually liked (he's very picky)"],
      correct: 0,
      explanation: "The first transgender character in British soap opera — groundbreaking television in 1998."
    }
  },
  {
    id: 307,
    category: "general",
    question: "How many bricks and cobbles were needed for the new Coronation Street set at ITV Trafford Wharf?",
    year: 2014,
    eric: {
      options: [
        "400,000 bricks and 54,000 cobbles",
        "200,000 bricks and 30,000 cobbles",
        "500,000 bricks and 80,000 cobbles",
        "300,000 bricks and 40,000 cobbles"
      ],
      correct: 0,
      explanation: "400,000 bricks (144,000 reclaimed from a derelict street in Salford) and 54,000 cobbles. The new set (opened 2014) is near full scale — the old Granada Studios set was only three-quarter size."
    },
    ruth: {
      options: ["400,000 bricks and 54,000 cobbles!", "400,000 bricks and 54,000 cobbles!", "About twelve (it's not a very big street)", "Eric could have done it cheaper (probably)"],
      correct: 0,
      explanation: "400,000 bricks and 54,000 cobbles! Some of the bricks were reclaimed from a real demolished street in Salford."
    }
  },
  {
    id: 308,
    category: "general",
    question: "How old was Tony Warren when Coronation Street first aired?",
    year: 1960,
    eric: {
      options: ["24", "28", "32", "21"],
      correct: 0,
      explanation: "Tony Warren was just 24 when Corrie launched on 9 December 1960. He wrote the first 12 of the original 13-episode commission. He'd known Violet Carson (Ena Sharples) and Doris Speed (Annie Walker) from BBC Children's Hour as a child actor."
    },
    ruth: {
      options: ["Only 24!", "Only 24!", "12 (a child genius)", "Old enough to know better"],
      correct: 0,
      explanation: "Just 24! He created the longest-running soap in the world before his 25th birthday."
    }
  },
  {
    id: 309,
    category: "general",
    question: "Pat Phoenix (Elsie Tanner) married which man whose son-in-law later became Prime Minister?",
    year: 1986,
    eric: {
      options: [
        "Anthony Booth (Tony Blair's father-in-law)",
        "Denis Thatcher (Margaret Thatcher's husband)",
        "Philip May (Theresa May's husband)",
        "Peter Mandelson's father"
      ],
      correct: 0,
      explanation: "Pat Phoenix married actor Anthony Booth on 9 September 1986, just eight days before she died of lung cancer. Booth's daughter Cherie married Tony Blair. PM James Callaghan had called Phoenix 'the sexiest woman on television.'"
    },
    ruth: {
      options: ["Tony Blair's father-in-law!", "Tony Blair's father-in-law!", "Eric (in a parallel universe)", "The Prime Minister himself (not quite)"],
      correct: 0,
      explanation: "Anthony Booth — whose daughter Cherie later married Tony Blair! Coronation Street meets Downing Street."
    }
  },
  {
    id: 310,
    category: "general",
    question: "Who had a cameo in the live 40th anniversary episode on 8 December 2000?",
    year: 2000,
    eric: {
      options: ["Prince Charles", "The Queen", "Tony Blair", "David Beckham"],
      correct: 0,
      explanation: "Prince Charles appeared in footage on a TV news bulletin, meeting Councillor Audrey Roberts (Sue Nicholls). He also met the cast and unveiled a plaque at the Rovers set. The live episode drew 17 million viewers."
    },
    ruth: {
      options: ["Prince Charles!", "Prince Charles!", "Eric (he tried to get on but they wouldn't let him)", "The Queen (she was busy)"],
      correct: 0,
      explanation: "Prince Charles! He appeared in the 40th anniversary live episode. Even royalty watches Corrie."
    }
  },
  {
    id: 311,
    category: "general",
    question: "How many times has Ken Barlow been married?",
    year: null,
    eric: {
      options: ["Four times (to three women)", "Three times (to three women)", "Five times (to four women)", "Four times (to four women)"],
      correct: 0,
      explanation: "Four marriages to three women: Valerie Tatlock (1962-71, died by electrocution from a faulty hairdryer), Janet Reid (1972-77), Deirdre Hunt (1981-90s), and Deirdre again (remarried 2005-2015). Ken became a widower three times."
    },
    ruth: {
      options: ["Four times to three women!", "Four times to three women!", "Once (he's very loyal — he's really not)", "Seventeen times (even by Corrie standards, that's too many)"],
      correct: 0,
      explanation: "Four marriages to three women! He married Deirdre twice. Ken Barlow: serial husband."
    }
  },
  {
    id: 312,
    category: "general",
    question: "Kevin Kennedy, who played Curly Watts for 20 years, was in a band with two future members of which famous group?",
    year: null,
    eric: {
      options: ["The Smiths", "Oasis", "Joy Division", "The Stone Roses"],
      correct: 0,
      explanation: "Kevin Kennedy was in a band called Paris Valentinos with Johnny Marr and Andy Rourke, who later formed The Smiths. Curly Watts and 'This Charming Man' — an unlikely combination."
    },
    ruth: {
      options: ["The Smiths! Curly Watts nearly became a rock star!", "The Smiths! Curly Watts nearly became a rock star!", "The Corrie Street Band (not a real band)", "Take That (he was the quiet one)"],
      correct: 0,
      explanation: "The Smiths! Curly Watts was in a band with Johnny Marr and Andy Rourke before they became famous. What could have been!"
    }
  },

  // ─── Scotland the What? ───────────────────────────────────────
  {
    id: 343, category: "general",
    question: "Scotland the What? was a comedy trio from Aberdeen. What were the three members' day jobs?",
    year: null,
    eric: {
      options: ["Hospital administrator, lawyer, and language teacher", "Doctor, accountant, and teacher", "Banker, lawyer, and journalist", "Engineer, solicitor, and headmaster"],
      correct: 0,
      explanation: "Buff Hardie was a hospital administrator (Secretary of the NE Regional Hospital Board), Steve Robertson was a lawyer, and George Donald taught French and German. They gave up their careers to perform full-time."
    },
    ruth: { options: ["Hospital admin, lawyer, and teacher!", "Hospital admin, lawyer, and teacher!", "Full-time comedians (eventually)", "Eric's colleagues (they weren't)"], correct: 0, explanation: "A hospital administrator, a lawyer, and a languages teacher — who became Scotland's favourite comedy trio!" }
  },
  {
    id: 344, category: "general",
    question: "The name 'Scotland the What?' is a play on which famous Scottish song?",
    year: 1969,
    eric: {
      options: ["Scotland the Brave", "Flower of Scotland", "Auld Lang Syne", "Caledonia"],
      correct: 0,
      explanation: "'Scotland the Brave' — the unofficial Scottish anthem — becomes 'Scotland the What?' with a comic questioning tone. The trio debuted at the Edinburgh Festival Fringe in September 1969."
    },
    ruth: { options: ["Scotland the Brave!", "Scotland the Brave!", "Scotland the Beautiful (doesn't exist)", "Scotland the What? (it's self-referential)"], correct: 0, explanation: "Scotland the Brave! Replace 'Brave' with 'What?' and you've got the perfect comedy name." }
  },
  {
    id: 345, category: "general",
    question: "What was the fictional Aberdeenshire village that featured in many Scotland the What? sketches?",
    year: null,
    eric: {
      options: ["Auchterturra", "Auchterless", "Auchtermuchty", "Auchterarder"],
      correct: 0,
      explanation: "Auchterturra — a fictional village with a name following the pattern of real Aberdeenshire 'Auchter-' place names. It even had its own novelty whisky bottle and a '700th anniversary' DVD celebration."
    },
    ruth: { options: ["Auchterturra!", "Auchterturra!", "A real place (it's not)", "Somewhere Eric would like to retire to"], correct: 0, explanation: "Auchterturra! A fictional village that felt so real, audiences recognised every character type." }
  },
  {
    id: 346, category: "general",
    question: "Who played the piano and composed all the music for Scotland the What?",
    year: null,
    eric: {
      options: ["George Donald", "Buff Hardie", "Steve Robertson", "Jimmy Logan"],
      correct: 0,
      explanation: "George Donald (1934-2013) composed all the music, known for 'striking comedy gold by mixing classical music with everyday Doric words.' He was a French and German teacher by day. Buff Hardie wrote the lyrics."
    },
    ruth: { options: ["George Donald!", "George Donald!", "A man with very talented fingers", "Eric (he plays a mean kazoo)"], correct: 0, explanation: "George Donald — the musical genius behind every Scotland the What? song!" }
  },
  {
    id: 347, category: "general",
    question: "Where did Scotland the What? debut in September 1969?",
    year: 1969,
    eric: {
      options: ["Edinburgh Festival Fringe", "His Majesty's Theatre, Aberdeen", "Grampian Television studios", "The Aberdeen Arts Centre"],
      correct: 0,
      explanation: "The Edinburgh Festival Fringe in September 1969. They were billed as 'three semi-literate Scots taking an irreverent look at their country's institutions.' They later became synonymous with His Majesty's Theatre, Aberdeen."
    },
    ruth: { options: ["The Edinburgh Fringe!", "The Edinburgh Fringe!", "Eric's living room (invitation only)", "A pub in Aberdeen (classier than that)"], correct: 0, explanation: "The Edinburgh Fringe! From there they conquered Aberdeen and beyond." }
  },
  {
    id: 348, category: "general",
    question: "Scotland the What?'s final show was called 'The Final Fling.' When and where was it?",
    year: 1995,
    eric: {
      options: ["25 November 1995, His Majesty's Theatre, Aberdeen", "25 November 1995, Eden Court, Inverness", "25 December 1995, His Majesty's Theatre, Aberdeen", "25 November 1996, His Majesty's Theatre, Aberdeen"],
      correct: 0,
      explanation: "The Final Fling was on 25 November 1995 at His Majesty's Theatre — their spiritual home. All three received MBEs in the same year. It was later released on VHS and DVD (2008)."
    },
    ruth: { options: ["25 November 1995 at His Majesty's Theatre!", "25 November 1995 at His Majesty's Theatre!", "They're still performing (they're not, sadly)", "Eric was in the front row (probably)"], correct: 0, explanation: "25 November 1995 — their farewell show at His Majesty's Theatre, Aberdeen. All three got MBEs that year." }
  },
  {
    id: 349, category: "general",
    question: "What honour did all three members of Scotland the What? receive in 1995?",
    year: 1995,
    eric: {
      options: ["MBE", "OBE", "CBE", "Knighthood"],
      correct: 0,
      explanation: "All three — Buff Hardie, Steve Robertson, and George Donald — received MBEs in the 1995 Queen's Birthday Honours, the same year as The Final Fling."
    },
    ruth: { options: ["MBE! All three of them!", "MBE! All three of them!", "The Freedom of Auchterturra (not a real place)", "A lifetime supply of bridies"], correct: 0, explanation: "MBE for all three! Awarded in the same year as their final show." }
  },
  {
    id: 350, category: "general",
    question: "In 2007, Aberdeen City Council awarded Scotland the What? a rare honour. What was it?",
    year: 2007,
    eric: {
      options: ["The Freedom of the City of Aberdeen", "The Keys to His Majesty's Theatre", "Honorary citizenship of Aberdeenshire", "A Blue Plaque on Union Street"],
      correct: 0,
      explanation: "Freedom of the City of Aberdeen — joining recipients including Nelson Mandela, Winston Churchill, Mikhail Gorbachev, and Sir Alex Ferguson. Conferred 19-20 April 2008 at His Majesty's Theatre with a vintage car procession."
    },
    ruth: { options: ["Freedom of the City!", "Freedom of the City!", "The keys to Eric's cupboard (high honour)", "A golden butterie"], correct: 0, explanation: "Freedom of Aberdeen! Same honour given to Nelson Mandela and Winston Churchill." }
  },
  {
    id: 351, category: "general",
    question: "What was Buff Hardie's real first name, and how did he get the nickname 'Buff'?",
    year: null,
    eric: {
      options: ["William — nicknamed 'Buffalo Bill' at primary school", "Robert — nicknamed after a steam engine", "James — nicknamed after a type of leather", "George — nicknamed after his favourite colour"],
      correct: 0,
      explanation: "William Hardie was nicknamed 'Buffalo Bill' (shortened to 'Buff') at primary school. The name stuck when his pals at Robert Gordon's College kept using it."
    },
    ruth: { options: ["William! 'Buffalo Bill' became 'Buff'!", "William! 'Buffalo Bill' became 'Buff'!", "His real name was Buff (it wasn't)", "Nobody knows (everyone knew)"], correct: 0, explanation: "William 'Buffalo Bill' Hardie — nicknamed at primary school. Even his obituaries called him Buff." }
  },
  {
    id: 352, category: "general",
    question: "Buff Hardie helped design which major Aberdeen building in his day job?",
    year: null,
    eric: {
      options: ["Aberdeen Royal Infirmary", "His Majesty's Theatre", "Aberdeen Art Gallery", "Robert Gordon's College"],
      correct: 0,
      explanation: "As Secretary of the North East Regional Hospital Board, Buff helped design the current Aberdeen Royal Infirmary. By night he wrote comedy sketches. A man of many talents."
    },
    ruth: { options: ["Aberdeen Royal Infirmary!", "Aberdeen Royal Infirmary!", "The Auchterturra Village Hall (fictional)", "Eric's cupboard (surprisingly complex to design)"], correct: 0, explanation: "Aberdeen Royal Infirmary! He designed hospitals by day and wrote comedy by night." }
  },
  {
    id: 353, category: "general",
    question: "Where did Buff Hardie and Steve Robertson first meet?",
    year: 1952,
    eric: {
      options: ["The 1952 Aberdeen Student Show", "Robert Gordon's College", "Aberdeen Grammar School", "National Service"],
      correct: 0,
      explanation: "They met in the 1952 Aberdeen Student Show — the annual revue staged by Aberdeen University students at His Majesty's Theatre (running since 1921). George Donald wrote music for the 1954 show but joined them later."
    },
    ruth: { options: ["The Aberdeen Student Show in 1952!", "The Aberdeen Student Show in 1952!", "A comedy club (Aberdeen didn't have one)", "In Eric's cupboard (very social, that cupboard)"], correct: 0, explanation: "The 1952 Student Show at Aberdeen University! A friendship that lasted over 40 years." }
  },
  {
    id: 354, category: "general",
    question: "Steve Robertson was elected to what position at Aberdeen University in 2008?",
    year: 2008,
    eric: {
      options: ["Rector", "Chancellor", "Dean of Arts", "Honorary Professor"],
      correct: 0,
      explanation: "Steve Robertson was elected Rector of the University of Aberdeen in May 2008 with 928 votes. He served until summer 2011, just months before his death on 27 November 2011."
    },
    ruth: { options: ["Rector!", "Rector!", "Head of Comedy Studies (not a real course)", "Eric's boss (Eric doesn't go to university)"], correct: 0, explanation: "Rector of Aberdeen University! Elected by the students — from comedian to university leader." }
  },
  {
    id: 355, category: "general",
    question: "George Donald ended his teaching career at which school — coincidentally in the same city as his eventual death?",
    year: null,
    eric: {
      options: ["Perth Academy (died in Perth)", "Dundee High School (died in Dundee)", "Inverness Royal Academy (died in Inverness)", "Stirling High School (died in Stirling)"],
      correct: 0,
      explanation: "George Donald was Assistant Rector of Perth Academy. He died in Perth on 30 September 2013, aged 79. He had relocated there after retiring from comedy."
    },
    ruth: { options: ["Perth Academy — and he died in Perth too!", "Perth Academy — and he died in Perth too!", "The School of Comedy (not a real school)", "Eric's old school (nope)"], correct: 0, explanation: "Perth Academy! He taught French and German there, then stayed in Perth for the rest of his life." }
  },
  {
    id: 356, category: "general",
    question: "Which London venue did Scotland the What? perform at in 1985?",
    year: 1985,
    eric: {
      options: ["Queen Elizabeth Hall, South Bank", "London Palladium", "Royal Albert Hall", "Wembley Arena"],
      correct: 0,
      explanation: "Queen Elizabeth Hall on the South Bank in 1985. They also played the Duke of York's Theatre (1975) and Bloomsbury Theatre (1987). Their London appearances were relatively rare — they were primarily a Scottish phenomenon."
    },
    ruth: { options: ["The Queen Elizabeth Hall!", "The Queen Elizabeth Hall!", "Wembley (not quite that famous)", "Eric's spare room in London (he doesn't have one)"], correct: 0, explanation: "The Queen Elizabeth Hall on London's South Bank! Aberdeen's finest on the London stage." }
  },
  {
    id: 357, category: "general",
    question: "How many years did Scotland the What? perform, and how often did they produce a new show?",
    year: null,
    eric: {
      options: ["26 years (1969-1995), new show every two years", "20 years (1975-1995), new show every year", "30 years (1965-1995), new show every three years", "26 years (1969-1995), new show every year"],
      correct: 0,
      explanation: "26 years (1969-1995), devising a new show every other year (biennially). Each new show premiered at His Majesty's Theatre before touring Scotland. They had the same stage manager, Peter Garland, for 14 of those years."
    },
    ruth: { options: ["26 years, new show every two years!", "26 years, new show every two years!", "Forever (felt like it to their wives)", "About as long as Eric's been fitting screwdrivers"], correct: 0, explanation: "26 years with a new show every two years! Each one premiered at His Majesty's Theatre, Aberdeen." }
  },
  {
    id: 358, category: "general",
    question: "Their producer Jimmy Logan had to use the name 'James' professionally. Why?",
    year: null,
    eric: {
      options: ["The name 'Jimmy Logan' was already taken by the famous Glasgow comedian", "Equity rules prohibited first names under five letters", "There was already a Jimmy Logan in the Aberdeen phone book", "His mother insisted on the formal version"],
      correct: 0,
      explanation: "The famous Glasgow comedian Jimmy Logan already held the Equity membership under that name. Their James Logan had to use 'James' to comply with Equity rules that no two members share the same name."
    },
    ruth: { options: ["Another Jimmy Logan already existed!", "Another Jimmy Logan already existed!", "He thought James sounded posher", "Eric insisted (Eric is very particular about names)"], correct: 0, explanation: "There was already a famous Jimmy Logan in showbiz! Equity rules meant no two performers could share a name." }
  },
  {
    id: 359, category: "general",
    question: "Who was the last surviving member of Scotland the What?, and when did he die?",
    year: 2020,
    eric: {
      options: ["Buff Hardie, 1 December 2020 (Covid-19)", "George Donald, 30 September 2013", "Steve Robertson, 27 November 2011", "Jimmy Logan, 1993"],
      correct: 0,
      explanation: "Buff Hardie was the last surviving member, dying on 1 December 2020 aged 89 from Covid-19/pneumonia in Aberdeen. Steve Robertson died 2011, George Donald died 2013."
    },
    ruth: { options: ["Buff Hardie — December 2020", "Buff Hardie — December 2020", "They're all still going (sadly not)", "The piano survived the longest"], correct: 0, explanation: "Buff Hardie, the last of the trio, died in December 2020 during the Covid pandemic. He was 89." }
  },
  {
    id: 360, category: "general",
    question: "Buff Hardie watched which legendary cricketer score a century at Mannofield in Aberdeen in 1948?",
    year: 1948,
    eric: {
      options: ["Don Bradman", "Len Hutton", "Denis Compton", "Wally Hammond"],
      correct: 0,
      explanation: "Don Bradman scored a century at Mannofield cricket ground in Aberdeen in 1948 during the Australian touring team's visit. Buff's 80th birthday was held in the Bradman Suite at the same venue."
    },
    ruth: { options: ["Don Bradman! The greatest batsman ever!", "Don Bradman! The greatest batsman ever!", "Eric (he once hit a 6 at school)", "A man with a very large bat"], correct: 0, explanation: "Don Bradman — the greatest cricketer of all time, playing in Aberdeen! Buff was there to see it." }
  },
  {
    id: 361, category: "general",
    question: "Which famous sketch parodied a long-running BBC Scotland gardening programme?",
    year: 1979,
    eric: {
      options: ["The Beechgrove Garden", "Gardeners' World", "Countryfile", "The Land"],
      correct: 0,
      explanation: "'The Beechgrove Garden' (1979) parodied the long-running BBC Scotland gardening programme of the same name, which is filmed in Aberdeen. Other famous sketches include 'Trans-Buchan Airways,' 'Mastermind,' and 'The Sleeper.'"
    },
    ruth: { options: ["The Beechgrove Garden!", "The Beechgrove Garden!", "Gardeners' Corner (not a real show)", "Eric's allotment show (he doesn't have an allotment)"], correct: 0, explanation: "The Beechgrove Garden! Parodying the actual BBC Scotland programme filmed in Aberdeen." }
  },
  {
    id: 362, category: "general",
    question: "For how many consecutive years did Scotland the What? take over Hogmanay broadcasts on television?",
    year: null,
    eric: {
      options: ["12 years", "8 years", "15 years", "6 years"],
      correct: 0,
      explanation: "12 years of Hogmanay TV specials on Grampian Television. They were a fixture of North-East Scotland's New Year celebrations, directed by Alan Franchi."
    },
    ruth: { options: ["12 years of Hogmanay!", "12 years of Hogmanay!", "Every year since 1960 (not quite)", "Eric watches them every New Year (probably)"], correct: 0, explanation: "12 years! Aberdeen's Hogmanay wouldn't have been the same without Scotland the What? on the telly." }
  },
  {
    id: 363, category: "general",
    question: "The trio had a superstitious ritual before every performance. What was it?",
    year: null,
    eric: {
      options: ["A pre-show handshake at the side of the stage", "Singing 'Scotland the Brave' backstage", "Each touching the Rovers Return sign (wrong show)", "Drinking a dram of Auchterturra whisky"],
      correct: 0,
      explanation: "A pre-show handshake at the side of the stage — maintained from their very first performance to The Final Fling. A gesture of friendship and superstition that lasted 26 years."
    },
    ruth: { options: ["A handshake before every show!", "A handshake before every show!", "A group hug (they were too Scottish for that)", "They checked Eric was in the audience (he always was)"], correct: 0, explanation: "A handshake! Every single show for 26 years. Simple, superstitious, and Scottish." }
  },
  {
    id: 364, category: "general",
    question: "All three members received honorary degrees from Aberdeen University. When?",
    year: 1994,
    eric: {
      options: ["26 November 1994 (Honorary Master's degrees)", "25 November 1995 (Honorary Doctorates)", "1 December 1993 (Honorary Fellowships)", "20 April 2008 (Honorary Doctorates)"],
      correct: 0,
      explanation: "Honorary Master's degrees on 26 November 1994 — the year before their retirement. Combined with MBEs in 1995 and Freedom of Aberdeen in 2007/08, they collected the full set of North-East honours."
    },
    ruth: { options: ["1994 — Honorary Master's degrees!", "1994 — Honorary Master's degrees!", "Eric has one too (he doesn't)", "All three graduated with honours in comedy"], correct: 0, explanation: "Honorary Master's degrees in 1994! The university they'd first met at honoured them 42 years later." }
  },
  {
    id: 365, category: "general",
    question: "How were Scotland the What? described in their original Edinburgh Fringe billing?",
    year: 1969,
    eric: {
      options: [
        "Three semi-literate Scots taking an irreverent look at their country's institutions",
        "Aberdeen's answer to Beyond the Fringe",
        "Three men in dinner jackets who speak a language no one understands",
        "The funniest thing to come out of Aberdeen since the oil"
      ],
      correct: 0,
      explanation: "'Three semi-literate Scots taking an irreverent look at their country's institutions' — their original Fringe billing. They performed in dinner jackets and suits, giving the act a formal, revue-style polish."
    },
    ruth: { options: ["Three semi-literate Scots!", "Three semi-literate Scots!", "Three very funny men (more accurate)", "Eric's favourite act (definitely)"], correct: 0, explanation: "'Three semi-literate Scots taking an irreverent look at their country's institutions' — modesty and comedy in one billing." }
  },
  {
    id: 366, category: "general",
    question: "What was the running time of the 'Trans-Buchan Airways' sketch?",
    year: null,
    eric: {
      options: ["About 10 minutes", "About 5 minutes", "About 15 minutes", "About 3 minutes"],
      correct: 0,
      explanation: "Trans-Buchan Airways ran to 10 minutes and 1 second — an extended sketch about a fictional airline serving the Buchan area of Aberdeenshire. Other long-form pieces included 'Bruce and the Spider' (8:36), 'The Wedding Guests' (9:54), and 'Retirement' (10:45)."
    },
    ruth: { options: ["About 10 minutes!", "About 10 minutes!", "3 hours (it felt like it in a good way)", "As long as a real flight to Buchan (Buchan doesn't have an airport)"], correct: 0, explanation: "About 10 minutes! A fictional airline serving rural Aberdeenshire — the comedy practically wrote itself." }
  },
  {
    id: 367, category: "general",
    question: "How many releases (vinyl, cassette, CD, DVD) did Scotland the What? produce in total?",
    year: null,
    eric: {
      options: ["11", "8", "14", "6"],
      correct: 0,
      explanation: "11 releases across all formats (per Discogs). Albums include 'Scotland the What?' (1973, recorded live at HMT), 'More Scotland the What?', 'Still More Scotland the What?', 'At Home', 'Back at His Majesty's', plus compilations and DVDs."
    },
    ruth: { options: ["11 releases!", "11 releases!", "Thousands (they were very prolific)", "Just the one (it was very long)"], correct: 0, explanation: "11 releases! From vinyl LPs in the 1970s to DVDs in the 2000s. All the classics preserved." }
  },
  {
    id: 368, category: "general",
    question: "George Donald was part of a post-retirement cabaret ensemble called 'Music Box.' Who were his partners?",
    year: null,
    eric: {
      options: ["Baritone Donald Maxwell and soprano Linda Ormiston", "Tenor Robert Tear and mezzo Kathleen Ferrier", "Baritone Thomas Allen and soprano Lesley Garrett", "Tenor Ian Bostridge and soprano Barbara Bonney"],
      correct: 0,
      explanation: "George Donald performed with baritone Donald Maxwell and soprano Linda Ormiston in a cabaret-style show called 'Music Box,' including appearances at the Edinburgh International Festival. He was also Director of the Deeside Festival."
    },
    ruth: { options: ["Donald Maxwell and Linda Ormiston!", "Donald Maxwell and Linda Ormiston!", "Eric and Ruth (they can't sing)", "Three new semi-literate Scots"], correct: 0, explanation: "An opera baritone and a soprano! George went from Doric comedy to Edinburgh International Festival cabaret." }
  },
  {
    id: 369, category: "general",
    question: "Buff Hardie's writing partner before Steve Robertson was Alfie Wood. Where did they write together?",
    year: null,
    eric: {
      options: ["During National Service in the army", "At Robert Gordon's College", "At Cambridge University", "At Aberdeen Grammar School"],
      correct: 0,
      explanation: "Buff and Alfie Wood wrote army shows together during National Service. When Buff returned to Aberdeen from Cambridge and joined the Aberdeen Revue Group (formed 1958), Steve Robertson became his new writing partner."
    },
    ruth: { options: ["In the army during National Service!", "In the army during National Service!", "In Eric's cupboard (surprisingly spacious)", "At comedy school (doesn't exist)"], correct: 0, explanation: "During National Service! Even in the army, Buff was writing comedy sketches." }
  },
  {
    id: 370, category: "general",
    question: "An Early Day Motion was tabled in the UK Parliament to honour which member of Scotland the What? after his death?",
    year: 2011,
    eric: {
      options: ["Steve Robertson", "Buff Hardie", "George Donald", "Jimmy Logan"],
      correct: 0,
      explanation: "An Early Day Motion was tabled in tribute to Steve Robertson after his death on 27 November 2011. He had been Rector of Aberdeen University from 2008 until shortly before his death."
    },
    ruth: { options: ["Steve Robertson!", "Steve Robertson!", "All three (they were all worth an EDM)", "Eric (for services to screwdriver organisation)"], correct: 0, explanation: "Steve Robertson — honoured in Parliament after his death. From Aberdeen stages to the House of Commons." }
  },
  {
    id: 371, category: "general",
    question: "Their first vinyl LP was recorded live at His Majesty's Theatre. On what date?",
    year: 1973,
    eric: {
      options: ["Saturday 21 November 1973", "Saturday 21 November 1972", "Friday 21 November 1973", "Saturday 21 March 1973"],
      correct: 0,
      explanation: "Saturday 21 November 1973 — their self-titled debut LP 'Scotland the What?' was recorded live at His Majesty's Theatre, Aberdeen. Followed by 'More Scotland the What?' and 'Still More Scotland the What?'"
    },
    ruth: { options: ["21 November 1973!", "21 November 1973!", "Nobody recorded the date (someone did)", "Eric was there (he definitely was)"], correct: 0, explanation: "21 November 1973! The first of many live recordings at His Majesty's Theatre." }
  },
  {
    id: 372, category: "general",
    question: "In what order did the three members of Scotland the What? die?",
    year: null,
    eric: {
      options: [
        "Steve Robertson (2011), George Donald (2013), Buff Hardie (2020)",
        "George Donald (2011), Steve Robertson (2013), Buff Hardie (2020)",
        "Buff Hardie (2011), Steve Robertson (2013), George Donald (2020)",
        "Steve Robertson (2013), George Donald (2015), Buff Hardie (2020)"
      ],
      correct: 0,
      explanation: "Steve Robertson died 27 November 2011 (aged 78), George Donald died 30 September 2013 (aged 79), and Buff Hardie died 1 December 2020 (aged 89, from Covid-19). Their producer Jimmy Logan had died in 1993."
    },
    ruth: { options: ["Steve (2011), George (2013), Buff (2020)", "Steve (2011), George (2013), Buff (2020)", "They're immortal (if only)", "Eric remembers them all fondly"], correct: 0, explanation: "Steve first (2011), then George (2013), then Buff (2020). All deeply mourned in Aberdeen and beyond." }
  },

  // ─── Forfar Bridies ───────────────────────────────────────────
  {
    id: 373, category: "general", question: "What crucial ingredient is in a Cornish pasty but NEVER in a traditional Forfar Bridie?", year: null,
    eric: { options: ["Potato", "Onion", "Beef", "Salt"], correct: 0, explanation: "A traditional Forfar Bridie contains NO potato — just beef, suet, optional onion, salt and pepper. No carrot, no turnip, no gravy, no herbs. The PGI specification is strict: it's a meat-only pastry." },
    ruth: { options: ["Potato! Bridies are all meat, no tatties!", "Potato! Bridies are all meat, no tatties!", "Unicorn tears (hard to source)", "Eric's secret ingredient (it's more salt)"], correct: 0, explanation: "No potato! A Forfar Bridie is beef, suet, and that's basically it." }
  },
  {
    id: 374, category: "general", question: "According to the official PGI specification, what does ONE hole in a Forfar Bridie indicate?", year: null,
    eric: { options: ["Contains onions", "Does NOT contain onions (plain)", "Contains extra beef", "Is a large/special size"], correct: 0, explanation: "Per the PGI specification: 1 hole = onions, 2 holes = no onions ('a without'). BUT Wikipedia says the opposite! The PGI spec, prepared by the Forfar Bridie Producers' Association, is the more authoritative source." },
    ruth: { options: ["Onions! (But some people say the opposite!)", "Onions! (But some people say the opposite!)", "It's for looking through", "Nobody can agree (actually true)"], correct: 0, explanation: "Officially: 1 hole = onions. But half of Scotland thinks it's the other way round!" }
  },
  {
    id: 375, category: "general", question: "Who is commonly credited with inventing the Forfar Bridie?", year: null,
    eric: { options: ["Margaret 'Maggie' Bridie of Glamis", "David Jolly of Forfar", "James Torry of Aberdeen", "All are claimed — nobody knows for certain"], correct: 3, explanation: "Nobody knows! Maggie Bridie of Glamis (1779-1864) is the most popular story, but David Jolly (1846) and James Torry of Aberdeen (1833) are also credited." },
    ruth: { options: ["Nobody actually knows!", "Nobody actually knows!", "Eric invented them (he didn't)", "A woman called Mrs Bridie (possibly)"], correct: 0, explanation: "Nobody knows for certain! Several people are credited but the true inventor is lost to history." }
  },
  {
    id: 376, category: "general", question: "What is the famous Dundee shibboleth involving bridies?", year: null,
    eric: { options: ["'Twa bridies, a plen ane an an ingin ane an a'", "'Gie's a bridie wi' broon sauce an' a'", "'A'll hae a bridie, an' mak it a guid ane'", "'Fit's in yer bridie, like?'"], correct: 0, explanation: "'Twa bridies, a plen ane an an ingin ane an a' — 'Two bridies, a plain one and an onion one as well.' Famously difficult for non-Dundonians to pronounce." },
    ruth: { options: ["'Twa bridies, a plen ane an an ingin ane an a'!", "'Twa bridies, a plen ane an an ingin ane an a'!", "Try saying that after three pints", "Eric can say it perfectly (can he though?)"], correct: 0, explanation: "If you can say it right, you're from Dundee!" }
  },
  {
    id: 377, category: "general", question: "What type of pastry is used in an authentic Forfar Bridie?", year: null,
    eric: { options: ["Shortcrust", "Puff", "Flaky", "Hot water crust"], correct: 0, explanation: "Authentic Forfar Bridies use shortcrust pastry. Outside Forfar, many bakeries use puff or flaky pastry, but the genuine article is always shortcrust. No egg wash either." },
    ruth: { options: ["Shortcrust! Not puff!", "Shortcrust! Not puff!", "Cardboard (feels like it sometimes)", "The same pastry Eric uses (he doesn't bake)"], correct: 0, explanation: "Shortcrust! Many people think puff, but the authentic version is shortcrust." }
  },
  {
    id: 378, category: "general", question: "Forfar Athletic FC's mascot is a person dressed as a giant bridie. What is the mascot's name?", year: null,
    eric: { options: ["Baxter the Bridie", "Bertie the Bridie", "Billy the Bridie", "Brian the Bridie"], correct: 0, explanation: "Baxter the Bridie bounces around before matches at Station Park. Forfar Athletic are nicknamed 'The Loons' (Doric for young men)." },
    ruth: { options: ["Baxter the Bridie!", "Baxter the Bridie!", "A giant walking pastry", "Eric in a costume (he'd do it)"], correct: 0, explanation: "Baxter the Bridie! A giant anthropomorphic bridie." }
  },
  {
    id: 379, category: "general", question: "McLaren's bakery was founded in 1893. How many generations have now been involved?", year: 1893,
    eric: { options: ["Six", "Five", "Four", "Seven"], correct: 0, explanation: "Six generations — currently Karen Murray (5th gen) with daughter Sarah (6th gen). Their rival Saddler's was founded 1897." },
    ruth: { options: ["Six generations!", "Six generations!", "One very old baker", "Eric's family (screwdrivers not bridies)"], correct: 0, explanation: "Six generations of bridie-making! Over 130 years." }
  },
  {
    id: 380, category: "general", question: "J.M. Barrie described the bridie in his 1896 novel Sentimental Tommy. What did he call it?", year: 1896,
    eric: { options: ["'A sublime kind of pie'", "'The finest pastry in Christendom'", "'A hot pocket of joy'", "'The working man's feast'"], correct: 0, explanation: "Barrie called it 'a sublime kind of pie' with gravy oozing from a paper bag — one of the earliest literary references." },
    ruth: { options: ["'A sublime kind of pie'!", "'A sublime kind of pie'!", "Peter Pan's favourite snack", "Eric's favourite (he prefers stovies)"], correct: 0, explanation: "The man who created Peter Pan called bridies 'a sublime kind of pie.'" }
  },
  {
    id: 381, category: "general", question: "When Prince Edward was named Earl of Forfar in 2019, what did he do on his first visit?", year: 2019,
    eric: { options: ["Visited both Saddler's and McLaren's to sample bridies", "Officially opened a new bridie factory", "Judged a bridie competition", "Declared the bridie a national treasure"], correct: 0, explanation: "He diplomatically visited BOTH rival bakeries. He also received a specially designed 'Earl of Forfar' tartan." },
    ruth: { options: ["He tried bridies at BOTH bakeries!", "He tried bridies at BOTH bakeries!", "He asked for a Cornish pasty (diplomatic incident)", "Eric showed him the cupboard"], correct: 0, explanation: "Diplomatically trying both! Avoiding the great Forfar bakery rivalry." }
  },
  {
    id: 382, category: "general", question: "The Forfar Bridie PGI requires another PGI-protected product as an ingredient. What?", year: null,
    eric: { options: ["Scotch Beef PGI", "Scottish Oats PGI", "Orkney Cheddar PGI", "Stornoway Black Pudding PGI"], correct: 0, explanation: "Scotch Beef PGI — a protected product requiring another protected product. PGI inception." },
    ruth: { options: ["Scotch Beef PGI — protected inside protected!", "Scotch Beef PGI — protected inside protected!", "Eric's secret sauce", "Premium-grade Scottish air"], correct: 0, explanation: "A protected product that requires ANOTHER protected product. Very meta." }
  },
  {
    id: 383, category: "general", question: "What is a bridie without onion called in Forfar?", year: null,
    eric: { options: ["'A without'", "'A plain'", "'A dry'", "'A naked'"], correct: 0, explanation: "A bridie without onion is called 'a without' — you can walk into a bakery and say 'a without.'" },
    ruth: { options: ["'A without'!", "'A without'!", "'A lonely bridie'", "A mistake (always get onion)"], correct: 0, explanation: "'A without'! Scottish directness at its finest." }
  },
  {
    id: 384, category: "general", question: "Where is the crimp on a Forfar Bridie compared to a Cornish pasty?", year: null,
    eric: { options: ["Bridie: curved top edge. Pasty: straight side", "Bridie: straight bottom. Pasty: top", "Both in the same place", "Bridie: all around. Pasty: one edge"], correct: 0, explanation: "The bridie is crimped along the curved top edge. The Cornish pasty has its rope crimp along one straight side (historically used as a handle by tin miners)." },
    ruth: { options: ["Bridie: curve. Pasty: side!", "Bridie: curve. Pasty: side!", "The crimp goes wherever it wants", "Eric crimps differently (don't ask)"], correct: 0, explanation: "Different crimp positions! It matters to bridie purists." }
  },
  {
    id: 385, category: "general", question: "The horseshoe shape of the bridie may be linked to what tradition?", year: null,
    eric: { options: ["Wedding feasts — horseshoes for good luck", "Farriers' suppers — blacksmiths shaped them", "Cattle markets — fit in saddlebags", "Church fairs — resembled a bishop's mitre"], correct: 0, explanation: "Horseshoes symbolise good luck, and 'bridie' may derive from 'bride's meal.' Bridies remain traditional at Scottish weddings in the Angus area." },
    ruth: { options: ["Weddings! Good luck for the bride!", "Weddings! Good luck for the bride!", "Horses liked the shape", "Eric's wedding had bridies (did it?)"], correct: 0, explanation: "The horseshoe shape may symbolise good luck at weddings!" }
  },
  {
    id: 386, category: "general", question: "How long was Bill McLaren's career making bridies at McLaren's bakery?", year: null,
    eric: { options: ["About 60 years (teens to age 78)", "About 40 years", "About 50 years", "About 30 years"], correct: 0, explanation: "Bill McLaren made bridies from his teens until age 78 — roughly 60 years. He hand-made several hundred thousand bridies. He died October 2022, aged 82." },
    ruth: { options: ["About 60 years!", "About 60 years!", "His whole life (basically true)", "Longer than Eric's been fitting screwdrivers"], correct: 0, explanation: "60 years of bridie-making! Hundreds of thousands of bridies." }
  },
  {
    id: 387, category: "general", question: "Which of Forfar's two rival bakeries was founded first?", year: null,
    eric: { options: ["McLaren's (1893)", "Saddler's (1897)", "Same year", "Both claim different dates"], correct: 0, explanation: "McLaren's 1893, Saddler's 1897. Four years apart. Locals are firmly in one camp or the other." },
    ruth: { options: ["McLaren's! 1893!", "McLaren's! 1893!", "It depends who you ask", "Eric prefers one but won't say which"], correct: 0, explanation: "McLaren's by four years — 1893 vs 1897. The great Forfar bakery rivalry." }
  }

];
