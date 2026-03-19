// Birthday quiz questions for Eric — all connected to March 21st.
// Each question has Eric mode (very hard) and Ruth mode (very easy / funny).

export const questions = [

  // ═══════════════════════════════════════════════════════════════════════════
  // US STATE HISTORY (~20 questions)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 1,
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "march-21st",
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
    category: "nsheb",
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
    category: "nsheb",
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
    category: "nsheb",
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
    category: "nsheb",
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
    category: "family",
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
    category: "family",
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
    category: "family",
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
    category: "family",
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
    category: "family",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "family",
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
    category: "e-numbers",
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
    category: "e-numbers",
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
    category: "e-numbers",
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
    category: "e-numbers",
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
    category: "scottish-roads",
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
    category: "scottish-roads",
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
    category: "scottish-roads",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "edinburgh-airport",
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
    category: "vauxhall-cavalier",
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
    category: "vauxhall-cavalier",
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
    category: "vauxhall-cavalier",
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
    category: "vauxhall-cavalier",
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
    category: "vauxhall-cavalier",
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
    category: "vauxhall-cavalier",
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
    category: "vauxhall-cavalier",
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
    category: "vauxhall-cavalier",
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
    category: "vauxhall-cavalier",
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
    category: "vauxhall-cavalier",
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
    category: "buy-cheap",
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
    category: "buy-cheap",
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
    category: "buy-cheap",
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
    category: "buy-cheap",
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
    category: "buy-cheap",
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
    category: "buy-cheap",
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
    category: "buy-cheap",
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
    category: "buy-cheap",
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
    category: "buy-cheap",
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
    category: "buy-cheap",
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
    category: "toyota-aygo",
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
    category: "toyota-aygo",
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
    category: "toyota-aygo",
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
    category: "toyota-aygo",
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
    category: "toyota-aygo",
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
    category: "toyota-aygo",
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
    category: "toyota-aygo",
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
    category: "toyota-aygo",
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
    category: "toyota-aygo",
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
    category: "toyota-aygo",
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
    category: "yes-minister",
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
    category: "yes-minister",
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
    category: "yes-minister",
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
    category: "yes-minister",
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
    category: "yes-minister",
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
    category: "yes-minister",
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
    category: "yes-minister",
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
    category: "yes-minister",
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
    category: "yes-minister",
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
    category: "yes-minister",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "trams",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "pylons",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "trident-shuttle",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "teenage-slang",
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
    category: "bbc-weather",
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
    category: "bbc-weather",
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
    category: "bbc-weather",
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
    category: "bbc-weather",
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
    category: "bbc-weather",
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
    category: "bbc-weather",
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
    category: "bbc-weather",
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
    category: "bbc-weather",
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
    category: "bbc-weather",
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
    category: "bbc-weather",
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
    category: "perth-scotland",
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
    category: "perth-scotland",
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
    category: "perth-scotland",
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
    category: "perth-scotland",
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
    category: "perth-scotland",
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
    category: "perth-scotland",
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
    category: "perth-scotland",
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
    category: "perth-scotland",
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
    category: "perth-scotland",
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
    category: "perth-scotland",
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
    category: "perth-scotland",
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
    category: "perth-scotland",
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
    category: "perth-scotland",
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
    category: "perth-scotland",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "perth-australia",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    category: "coronation-st",
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
    id: 343, category: "scotland-the-what",
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
    id: 344, category: "scotland-the-what",
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
    id: 345, category: "scotland-the-what",
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
    id: 346, category: "scotland-the-what",
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
    id: 347, category: "scotland-the-what",
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
    id: 348, category: "scotland-the-what",
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
    id: 349, category: "scotland-the-what",
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
    id: 350, category: "scotland-the-what",
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
    id: 351, category: "scotland-the-what",
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
    id: 352, category: "scotland-the-what",
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
    id: 353, category: "scotland-the-what",
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
    id: 354, category: "scotland-the-what",
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
    id: 355, category: "scotland-the-what",
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
    id: 356, category: "scotland-the-what",
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
    id: 357, category: "scotland-the-what",
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
    id: 358, category: "scotland-the-what",
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
    id: 359, category: "scotland-the-what",
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
    id: 360, category: "scotland-the-what",
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
    id: 361, category: "scotland-the-what",
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
    id: 362, category: "scotland-the-what",
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
    id: 363, category: "scotland-the-what",
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
    id: 364, category: "scotland-the-what",
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
    id: 365, category: "scotland-the-what",
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
    id: 366, category: "scotland-the-what",
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
    id: 367, category: "scotland-the-what",
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
    id: 368, category: "scotland-the-what",
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
    id: 369, category: "scotland-the-what",
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
    id: 370, category: "scotland-the-what",
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
    id: 371, category: "scotland-the-what",
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
    id: 372, category: "scotland-the-what",
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
    id: 373, category: "forfar-bridies", question: "What crucial ingredient is in a Cornish pasty but NEVER in a traditional Forfar Bridie?", year: null,
    eric: { options: ["Potato", "Onion", "Beef", "Salt"], correct: 0, explanation: "A traditional Forfar Bridie contains NO potato — just beef, suet, optional onion, salt and pepper. No carrot, no turnip, no gravy, no herbs. The PGI specification is strict: it's a meat-only pastry." },
    ruth: { options: ["Potato! Bridies are all meat, no tatties!", "Potato! Bridies are all meat, no tatties!", "Unicorn tears (hard to source)", "Eric's secret ingredient (it's more salt)"], correct: 0, explanation: "No potato! A Forfar Bridie is beef, suet, and that's basically it." }
  },
  {
    id: 374, category: "forfar-bridies", question: "According to the official PGI specification, what does ONE hole in a Forfar Bridie indicate?", year: null,
    eric: { options: ["Contains onions", "Does NOT contain onions (plain)", "Contains extra beef", "Is a large/special size"], correct: 0, explanation: "Per the PGI specification: 1 hole = onions, 2 holes = no onions ('a without'). BUT Wikipedia says the opposite! The PGI spec, prepared by the Forfar Bridie Producers' Association, is the more authoritative source." },
    ruth: { options: ["Onions! (But some people say the opposite!)", "Onions! (But some people say the opposite!)", "It's for looking through", "Nobody can agree (actually true)"], correct: 0, explanation: "Officially: 1 hole = onions. But half of Scotland thinks it's the other way round!" }
  },
  {
    id: 375, category: "forfar-bridies", question: "Who is commonly credited with inventing the Forfar Bridie?", year: null,
    eric: { options: ["Margaret 'Maggie' Bridie of Glamis", "David Jolly of Forfar", "James Torry of Aberdeen", "All are claimed — nobody knows for certain"], correct: 3, explanation: "Nobody knows! Maggie Bridie of Glamis (1779-1864) is the most popular story, but David Jolly (1846) and James Torry of Aberdeen (1833) are also credited." },
    ruth: { options: ["Nobody actually knows!", "Nobody actually knows!", "Eric invented them (he didn't)", "A woman called Mrs Bridie (possibly)"], correct: 0, explanation: "Nobody knows for certain! Several people are credited but the true inventor is lost to history." }
  },
  {
    id: 376, category: "forfar-bridies", question: "What is the famous Dundee shibboleth involving bridies?", year: null,
    eric: { options: ["'Twa bridies, a plen ane an an ingin ane an a'", "'Gie's a bridie wi' broon sauce an' a'", "'A'll hae a bridie, an' mak it a guid ane'", "'Fit's in yer bridie, like?'"], correct: 0, explanation: "'Twa bridies, a plen ane an an ingin ane an a' — 'Two bridies, a plain one and an onion one as well.' Famously difficult for non-Dundonians to pronounce." },
    ruth: { options: ["'Twa bridies, a plen ane an an ingin ane an a'!", "'Twa bridies, a plen ane an an ingin ane an a'!", "Try saying that after three pints", "Eric can say it perfectly (can he though?)"], correct: 0, explanation: "If you can say it right, you're from Dundee!" }
  },
  {
    id: 377, category: "forfar-bridies", question: "What type of pastry is used in an authentic Forfar Bridie?", year: null,
    eric: { options: ["Shortcrust", "Puff", "Flaky", "Hot water crust"], correct: 0, explanation: "Authentic Forfar Bridies use shortcrust pastry. Outside Forfar, many bakeries use puff or flaky pastry, but the genuine article is always shortcrust. No egg wash either." },
    ruth: { options: ["Shortcrust! Not puff!", "Shortcrust! Not puff!", "Cardboard (feels like it sometimes)", "The same pastry Eric uses (he doesn't bake)"], correct: 0, explanation: "Shortcrust! Many people think puff, but the authentic version is shortcrust." }
  },
  {
    id: 378, category: "forfar-bridies", question: "Forfar Athletic FC's mascot is a person dressed as a giant bridie. What is the mascot's name?", year: null,
    eric: { options: ["Baxter the Bridie", "Bertie the Bridie", "Billy the Bridie", "Brian the Bridie"], correct: 0, explanation: "Baxter the Bridie bounces around before matches at Station Park. Forfar Athletic are nicknamed 'The Loons' (Doric for young men)." },
    ruth: { options: ["Baxter the Bridie!", "Baxter the Bridie!", "A giant walking pastry", "Eric in a costume (he'd do it)"], correct: 0, explanation: "Baxter the Bridie! A giant anthropomorphic bridie." }
  },
  {
    id: 379, category: "forfar-bridies", question: "McLaren's bakery was founded in 1893. How many generations have now been involved?", year: 1893,
    eric: { options: ["Six", "Five", "Four", "Seven"], correct: 0, explanation: "Six generations — currently Karen Murray (5th gen) with daughter Sarah (6th gen). Their rival Saddler's was founded 1897." },
    ruth: { options: ["Six generations!", "Six generations!", "One very old baker", "Eric's family (screwdrivers not bridies)"], correct: 0, explanation: "Six generations of bridie-making! Over 130 years." }
  },
  {
    id: 380, category: "forfar-bridies", question: "J.M. Barrie described the bridie in his 1896 novel Sentimental Tommy. What did he call it?", year: 1896,
    eric: { options: ["'A sublime kind of pie'", "'The finest pastry in Christendom'", "'A hot pocket of joy'", "'The working man's feast'"], correct: 0, explanation: "Barrie called it 'a sublime kind of pie' with gravy oozing from a paper bag — one of the earliest literary references." },
    ruth: { options: ["'A sublime kind of pie'!", "'A sublime kind of pie'!", "Peter Pan's favourite snack", "Eric's favourite (he prefers stovies)"], correct: 0, explanation: "The man who created Peter Pan called bridies 'a sublime kind of pie.'" }
  },
  {
    id: 381, category: "forfar-bridies", question: "When Prince Edward was named Earl of Forfar in 2019, what did he do on his first visit?", year: 2019,
    eric: { options: ["Visited both Saddler's and McLaren's to sample bridies", "Officially opened a new bridie factory", "Judged a bridie competition", "Declared the bridie a national treasure"], correct: 0, explanation: "He diplomatically visited BOTH rival bakeries. He also received a specially designed 'Earl of Forfar' tartan." },
    ruth: { options: ["He tried bridies at BOTH bakeries!", "He tried bridies at BOTH bakeries!", "He asked for a Cornish pasty (diplomatic incident)", "Eric showed him the cupboard"], correct: 0, explanation: "Diplomatically trying both! Avoiding the great Forfar bakery rivalry." }
  },
  {
    id: 382, category: "forfar-bridies", question: "The Forfar Bridie PGI requires another PGI-protected product as an ingredient. What?", year: null,
    eric: { options: ["Scotch Beef PGI", "Scottish Oats PGI", "Orkney Cheddar PGI", "Stornoway Black Pudding PGI"], correct: 0, explanation: "Scotch Beef PGI — a protected product requiring another protected product. PGI inception." },
    ruth: { options: ["Scotch Beef PGI — protected inside protected!", "Scotch Beef PGI — protected inside protected!", "Eric's secret sauce", "Premium-grade Scottish air"], correct: 0, explanation: "A protected product that requires ANOTHER protected product. Very meta." }
  },
  {
    id: 383, category: "forfar-bridies", question: "What is a bridie without onion called in Forfar?", year: null,
    eric: { options: ["'A without'", "'A plain'", "'A dry'", "'A naked'"], correct: 0, explanation: "A bridie without onion is called 'a without' — you can walk into a bakery and say 'a without.'" },
    ruth: { options: ["'A without'!", "'A without'!", "'A lonely bridie'", "A mistake (always get onion)"], correct: 0, explanation: "'A without'! Scottish directness at its finest." }
  },
  {
    id: 384, category: "forfar-bridies", question: "Where is the crimp on a Forfar Bridie compared to a Cornish pasty?", year: null,
    eric: { options: ["Bridie: curved top edge. Pasty: straight side", "Bridie: straight bottom. Pasty: top", "Both in the same place", "Bridie: all around. Pasty: one edge"], correct: 0, explanation: "The bridie is crimped along the curved top edge. The Cornish pasty has its rope crimp along one straight side (historically used as a handle by tin miners)." },
    ruth: { options: ["Bridie: curve. Pasty: side!", "Bridie: curve. Pasty: side!", "The crimp goes wherever it wants", "Eric crimps differently (don't ask)"], correct: 0, explanation: "Different crimp positions! It matters to bridie purists." }
  },
  {
    id: 385, category: "forfar-bridies", question: "The horseshoe shape of the bridie may be linked to what tradition?", year: null,
    eric: { options: ["Wedding feasts — horseshoes for good luck", "Farriers' suppers — blacksmiths shaped them", "Cattle markets — fit in saddlebags", "Church fairs — resembled a bishop's mitre"], correct: 0, explanation: "Horseshoes symbolise good luck, and 'bridie' may derive from 'bride's meal.' Bridies remain traditional at Scottish weddings in the Angus area." },
    ruth: { options: ["Weddings! Good luck for the bride!", "Weddings! Good luck for the bride!", "Horses liked the shape", "Eric's wedding had bridies (did it?)"], correct: 0, explanation: "The horseshoe shape may symbolise good luck at weddings!" }
  },
  {
    id: 386, category: "forfar-bridies", question: "How long was Bill McLaren's career making bridies at McLaren's bakery?", year: null,
    eric: { options: ["About 60 years (teens to age 78)", "About 40 years", "About 50 years", "About 30 years"], correct: 0, explanation: "Bill McLaren made bridies from his teens until age 78 — roughly 60 years. He hand-made several hundred thousand bridies. He died October 2022, aged 82." },
    ruth: { options: ["About 60 years!", "About 60 years!", "His whole life (basically true)", "Longer than Eric's been fitting screwdrivers"], correct: 0, explanation: "60 years of bridie-making! Hundreds of thousands of bridies." }
  },
  {
    id: 387, category: "forfar-bridies", question: "Which of Forfar's two rival bakeries was founded first?", year: null,
    eric: { options: ["McLaren's (1893)", "Saddler's (1897)", "Same year", "Both claim different dates"], correct: 0, explanation: "McLaren's 1893, Saddler's 1897. Four years apart. Locals are firmly in one camp or the other." },
    ruth: { options: ["McLaren's! 1893!", "McLaren's! 1893!", "It depends who you ask", "Eric prefers one but won't say which"], correct: 0, explanation: "McLaren's by four years — 1893 vs 1897. The great Forfar bakery rivalry." }
  },

  // ─── Not the Nine O'Clock News ────────────────────────────────
  { id: 388, category: "ntnon", question: "In the NTNON 'Gerald the Gorilla' sketch, Gerald corrects the professor about when he was caught. What year does Gerald say?", year: 1980,
    eric: { options: ["'68", "'67", "'69", "'66"], correct: 0, explanation: "The professor says ''67 I think it was...' and Gerald corrects him: ''68.' The joke is that Gerald (Rowan Atkinson in a gorilla suit) is more articulate and knowledgeable than Professor Timothy Fielding (Mel Smith)." },
    ruth: { options: ["'68!", "'68!", "Gerald can't talk (he's a gorilla — but he can!)", "Eric knows (Eric always knows)"], correct: 0, explanation: "'68! Gerald was smarter than the professor. Classic." } },
  { id: 389, category: "ntnon", question: "In the Gerald the Gorilla sketch, when the professor says Gerald was 'completely wild,' Gerald responds with what?", year: 1980,
    eric: { options: ["'Wild? I was absolutely livid!'", "'Wild? I was perfectly civilised!'", "'Wild? I was merely enthusiastic!'", "'Wild? I was moderately irritated!'"], correct: 0, explanation: "'Wild? I was absolutely livid!' — one of the most quoted lines from NTNON. Gerald is more articulate, funnier, and smarter than the professor throughout." },
    ruth: { options: ["'I was absolutely livid!'", "'I was absolutely livid!'", "He threw a banana (he didn't)", "Eric would also be livid"], correct: 0, explanation: "'Wild? I was absolutely livid!' One of the greatest comedy lines ever written." } },
  { id: 390, category: "ntnon", question: "In Gerald the Gorilla, whose name does Gerald keep bringing up, to the professor's fury?", year: 1980,
    eric: { options: ["David Attenborough", "David Bellamy", "Johnny Morris", "Desmond Morris"], correct: 0, explanation: "'David Attenborough! All I ever hear is David bloody Attenborough!' Gerald's mother apparently got on very well with Attenborough. The professor was jealous." },
    ruth: { options: ["David Attenborough!", "David Attenborough!", "Eric Davidson (wrong show)", "Sir David (even gorillas are polite)"], correct: 0, explanation: "David Attenborough! Gerald's mother loved him. The professor was NOT pleased." } },
  { id: 391, category: "ntnon", question: "In the Constable Savage sketch, how many trumped-up charges has Savage brought against the same man in one month?", year: 1980,
    eric: { options: ["117", "107", "127", "97"], correct: 0, explanation: "117 charges against Mr Winston Kodogo of 55 Mercer Road. Including 'loitering with intent to use a pedestrian crossing,' 'walking in a loud shirt in a built-up area during the hours of darkness,' and 'coughing without due care and attention.'" },
    ruth: { options: ["117 ridiculous charges!", "117 ridiculous charges!", "Just the one (but it was very silly)", "Eric has been charged with none of these"], correct: 0, explanation: "117 absurd charges against one man! Including 'smelling of foreign food.'" } },
  { id: 392, category: "ntnon", question: "In Constable Savage, where is Savage transferred to as 'punishment'? Why is this ironic?", year: 1980,
    eric: { options: ["The S.P.G. (Special Patrol Group) — itself notorious for racist policing", "Scotland Yard's Internal Affairs — which didn't actually investigate racism", "Traffic duty — where he couldn't arrest anyone", "A desk job — effectively a promotion"], correct: 0, explanation: "The S.P.G. (Special Patrol Group) — the real-life SPG was notorious for accusations of racist policing, making the 'punishment' deeply ironic. Savage is being sent somewhere even worse." },
    ruth: { options: ["The SPG — which was even MORE racist!", "The SPG — which was even MORE racist!", "A very naughty step", "Eric's cupboard (there's room for everyone)"], correct: 0, explanation: "The Special Patrol Group! Sending a racist officer to the unit most accused of racism. Brilliant satire." } },
  { id: 393, category: "ntnon", question: "In the NTNON Hi-Fi Shop sketch, what does Atkinson say the turntable actually is when Smith calls it a 'gramophone'?", year: null,
    eric: { options: ["A Trio automatic-cut direct-drive turntable", "A Technics SL-1200 belt-drive deck", "A Bang & Olufsen linear-tracking turntable", "A Pioneer PL-12D semi-automatic"], correct: 0, explanation: "'That's a Trio automatic-cut direct-drive turntable, unless I'm very much mistaken.' When Smith asks the difference between that and a gramophone: 'About 30 years and a plastic cover to you, chief.'" },
    ruth: { options: ["A Trio automatic-cut direct-drive turntable!", "A Trio automatic-cut direct-drive turntable!", "Something very expensive with buttons", "Eric's old record player (not a gramophone!)"], correct: 0, explanation: "A Trio automatic-cut direct-drive turntable! Definitely not a gramophone, grandad." } },
  { id: 394, category: "ntnon", question: "Who was NOT a writer for Not the Nine O'Clock News — a common misconception?", year: null,
    eric: { options: ["Ben Elton", "Richard Curtis", "Andy Hamilton", "David Renwick"], correct: 0, explanation: "Ben Elton was NOT a NTNON writer — he came later as co-writer for Blackadder II. Richard Curtis wrote more than half of NTNON. David Renwick (later One Foot in the Grave) and Andy Hamilton were also writers. Even Stephen Fry contributed as an undergraduate." },
    ruth: { options: ["Ben Elton! He came later with Blackadder!", "Ben Elton! He came later with Blackadder!", "Eric (he's funnier than he looks)", "The gorilla (Gerald wrote his own material)"], correct: 0, explanation: "Ben Elton! Everyone thinks he wrote NTNON but he didn't — he joined for Blackadder II." } },
  { id: 395, category: "ntnon", question: "Pamela Stephenson left entertainment entirely after NTNON. What is her second career?", year: null,
    eric: { options: ["Clinical psychologist", "Architect", "Marine biologist", "Barrister"], correct: 0, explanation: "She became a clinical psychologist, obtaining a doctorate from the California Graduate Institute in 1996. She co-founded the Los Angeles Sexuality Centre and married Billy Connolly, writing his biography 'Billy' (2002)." },
    ruth: { options: ["A psychologist! Married Billy Connolly!", "A psychologist! Married Billy Connolly!", "A gorilla trainer (inspired by Gerald)", "Eric's therapist (he needs one)"], correct: 0, explanation: "A clinical psychologist! And she married Billy Connolly. From sketch comedy to psychology and Scotland's greatest comedian." } },
  { id: 396, category: "ntnon", question: "What was the second NTNON album called, and what chart position did it reach?", year: 1981,
    eric: { options: ["Hedgehog Sandwich — UK top 10", "The Memory Kinda Lingers — UK top 20", "Gorilla Tactics — UK top 10", "The Gramophone Album — UK top 5"], correct: 0, explanation: "Hedgehog Sandwich reached the UK top 10 in 1981. Both of the first two albums reaching the top 10 was a rare feat for spoken-word comedy albums." },
    ruth: { options: ["Hedgehog Sandwich!", "Hedgehog Sandwich!", "Not a real sandwich (don't try it)", "Eric's favourite album (he can quote every sketch)"], correct: 0, explanation: "Hedgehog Sandwich — top 10 in the UK charts! Not bad for a comedy album." } },
  { id: 397, category: "ntnon", question: "Which cast member replaced Chris Langham from Series 2 onwards?", year: 1980,
    eric: { options: ["Griff Rhys Jones", "Stephen Fry", "Ben Elton", "Hugh Laurie"], correct: 0, explanation: "Griff Rhys Jones replaced Langham, who 'did not quite fit in.' Rhys Jones had studied at Cambridge (Footlights Vice-President 1976). He and Mel Smith later co-founded TalkBack Productions, sold for £62 million in 2000." },
    ruth: { options: ["Griff Rhys Jones!", "Griff Rhys Jones!", "Eric (he was available)", "The gorilla (Gerald was overqualified)"], correct: 0, explanation: "Griff Rhys Jones! He and Mel Smith then went on to make Alas Smith and Jones." } },
  { id: 398, category: "ntnon", question: "What did Gerald the Gorilla claim NOT to eat, to the professor's accusation?", year: 1980,
    eric: { options: ["Daffodils", "Bananas", "The professor's research papers", "Garden furniture"], correct: 0, explanation: "'I do NOT eat daffodils.' 'Well, somebody does, don't they?' Gerald spent his money on Johnny Mathis records rather than, as the professor expected, peanuts, bananas, and carpet cleaner." },
    ruth: { options: ["Daffodils!", "Daffodils!", "Eric's sandwiches (he guards them carefully)", "Everything (gorillas eat everything)"], correct: 0, explanation: "'I do NOT eat daffodils!' One of Gerald's most indignant moments." } },
  { id: 399, category: "ntnon", question: "Who composed the music for NTNON, including a new pastiche song every week?", year: 1979,
    eric: { options: ["Howard Goodall", "Neil Innes", "Ronnie Hazlehurst", "Richard Stilgoe"], correct: 0, explanation: "Howard Goodall composed new pastiche songs weekly in the style of ABBA, punk, ska, heavy metal, etc. He later composed themes for Blackadder, Red Dwarf, and The Vicar of Dibley." },
    ruth: { options: ["Howard Goodall!", "Howard Goodall!", "The gorilla (he was musical)", "Eric on the kazoo"], correct: 0, explanation: "Howard Goodall! He wrote a new parody song every single week, each in a different musical style." } },
  { id: 400, category: "ntnon", question: "In the Constable Savage sketch, what is the name and address of the man Savage keeps arresting?", year: 1980,
    eric: { options: ["Mr Winston Kodogo, 55 Mercer Road", "Mr Winston Kodogo, 55 Market Street", "Mr James Kodogo, 55 Mercer Road", "Mr Winston Mbeki, 55 Mercer Road"], correct: 0, explanation: "Mr Winston Kodogo of 55 Mercer Road — the victim of 117 trumped-up charges including 'being in possession of curly black hair and thick lips.' The sketch brilliantly exposed institutional racism in policing." },
    ruth: { options: ["Mr Winston Kodogo, 55 Mercer Road!", "Mr Winston Kodogo, 55 Mercer Road!", "Eric (he's been arrested for nothing)", "A very patient man"], correct: 0, explanation: "Mr Winston Kodogo, 55 Mercer Road — victim of 117 absurd charges from one racist constable." } },
  { id: 401, category: "ntnon", question: "Rowan Atkinson held an unusual driving qualification that was used during filming of 'I Like Trucking.' What was it?", year: null,
    eric: { options: ["A Class 1 HGV licence", "A motorcycle licence for vehicles over 500cc", "An aircraft pilot's licence", "A London taxi Knowledge certificate"], correct: 0, explanation: "Atkinson held a Class 1 HGV licence and actually drove the truck during filming. He studied Electrical and Electronic Engineering at Newcastle before switching to comedy at Oxford." },
    ruth: { options: ["An HGV licence! He drove the truck himself!", "An HGV licence! He drove the truck himself!", "A licence to be funny (not a real licence)", "Eric also has an HGV licence (does he?)"], correct: 0, explanation: "Rowan Atkinson really drove that truck! He had a Class 1 HGV licence. Mr Bean behind the wheel of an artic." } },
  { id: 402, category: "ntnon", question: "The General Synod's Life of Christ sketch parodied the controversy over which Monty Python film?", year: 1979,
    eric: { options: ["Life of Brian", "The Holy Grail", "The Meaning of Life", "And Now for Something Completely Different"], correct: 0, explanation: "The sketch inverted the real Life of Brian blasphemy controversy: a bishop (Atkinson) has directed 'The Life of Christ' and is hauled over the coals by a representative of the 'Church of Python' (Mel Smith), who claims it attacks 'Our Lord, John Cleese.'" },
    ruth: { options: ["Life of Brian!", "Life of Brian!", "Eric's favourite film (is it?)", "The one with the parrot (wrong sketch show)"], correct: 0, explanation: "Life of Brian! The sketch brilliantly reversed the real controversy — the 'Church of Python' defending John Cleese." } },

  // ─── Doric dialect ────────────────────────────────────────────
  { id: 403, category: "doric", question: "In Doric, what does 'Fit like?' mean?", year: null,
    eric: { options: ["How are you?", "What's that?", "Where is it?", "Who's there?"], correct: 0, explanation: "'Fit like?' is the classic Doric greeting — literally 'What like?' but meaning 'How are you?' The stereotypical response is 'Nae bad' or 'Jist tyaavin awa' (just struggling along)." },
    ruth: { options: ["How are you!", "How are you!", "Something about fitness (nope)", "Eric says this every morning"], correct: 0, explanation: "'Fit like?' = How are you? The most famous Doric phrase." } },
  { id: 404, category: "doric", question: "The most distinctive Doric feature is replacing 'wh' with what letter?", year: null,
    eric: { options: ["F (what→fit, where→far, who→fa)", "Ch (what→chat, where→chair)", "Th (what→that, where→there)", "V (what→vat, where→var)"], correct: 0, explanation: "The f-for-wh substitution: What→Fit, Where→Far, Who→Fa, When→Fan, Why→Fit wye, How→Foo. This creates the classic puzzle: 'Fit fit fits fit fit?' (Which foot fits which foot?)." },
    ruth: { options: ["F! What becomes Fit, Where becomes Far!", "F! What becomes Fit, Where becomes Far!", "Z (everything sounds like a bee)", "Eric knows (he's been practising)"], correct: 0, explanation: "F! The defining feature of Doric — what becomes fit, where becomes far, who becomes fa." } },
  { id: 405, category: "doric", question: "What does 'Fit fit fits fit fit?' mean in Doric?", year: null,
    eric: { options: ["Which foot fits which foot?", "What thing fits what thing?", "Why does this fit work?", "How does this fit together?"], correct: 0, explanation: "'Fit fit fits fit fit?' = 'Which foot fits which foot?' Five 'fits' in a row, each perfectly meaningful. This is genuine Doric and the classic example of the f-for-wh rule." },
    ruth: { options: ["Which foot fits which foot!", "Which foot fits which foot!", "A tongue twister (definitely)", "Eric can say it (can he though?)"], correct: 0, explanation: "Which foot fits which foot! Five 'fits' in a row. Pure Doric poetry." } },
  { id: 406, category: "doric", question: "In Doric, what is a 'loon'?", year: null,
    eric: { options: ["A boy", "A fool", "A tall person", "A fisherman"], correct: 0, explanation: "A loon is a boy or young man. A girl is a 'quine.' Together: 'loons and quines' = boys and girls. Forfar Athletic FC are nicknamed 'The Loons.'" },
    ruth: { options: ["A boy!", "A boy!", "A crazy person (that's English, not Doric)", "Eric (sometimes)"], correct: 0, explanation: "A boy! 'Loons and quines' = boys and girls in Doric." } },
  { id: 407, category: "doric", question: "What is a 'quine' in Doric?", year: null,
    eric: { options: ["A girl or young woman", "A queen", "A coin", "A complaint"], correct: 0, explanation: "A quine (also 'quinie') is a girl or young woman. From the same root as 'queen.' The classic Doric pairing: loons (boys) and quines (girls)." },
    ruth: { options: ["A girl!", "A girl!", "A queen (close but not quite)", "Ruth (she's the quine of the family)"], correct: 0, explanation: "A girl! 'Quine' comes from the same root as 'queen.'" } },
  { id: 408, category: "doric", question: "What does 'Foos yer doos?' literally translate as, and what does it actually mean?", year: null,
    eric: { options: ["'How are your pigeons?' — but actually means 'How are you?'", "'Where are your shoes?' — a comment on fashion", "'Who are your friends?' — a social enquiry", "'How are your daughters?' — asking about family"], correct: 0, explanation: "'Foos yer doos?' literally means 'How are your pigeons?' but is used as a humorous informal greeting meaning 'How are you?' The Doric love of understatement and indirection at its finest." },
    ruth: { options: ["How are your pigeons! (It means how are you!)", "How are your pigeons! (It means how are you!)", "Eric's pigeons are fine (he doesn't have pigeons)", "A very confusing way to say hello"], correct: 0, explanation: "'How are your pigeons?' but it means 'How are you?' Doric is wonderfully indirect." } },
  { id: 409, category: "doric", question: "Aberdeen is sometimes called 'The Furry Boots Toon.' Why?", year: null,
    eric: { options: ["From 'Far aboots are ye frae?' (Where abouts are you from?) — 'far aboots' sounds like 'furry boots'", "Aberdeen was famous for selling fur-lined boots", "A corruption of 'Ferry Boats Town' (Aberdeen's harbour)", "Named after a brand of boots sold at the Castlegate market"], correct: 0, explanation: "When you arrive in Aberdeen, people ask 'Furry boots are ye frae?' — Doric for 'Where abouts are you from?' 'Far aboots' sounds like 'furry boots' to non-speakers. Ian Rankin used this in his Rebus novel Black and Blue." },
    ruth: { options: ["'Far aboots' sounds like 'furry boots'!", "'Far aboots' sounds like 'furry boots'!", "Aberdonians love furry boots (they don't)", "Eric has furry boots (he doesn't)"], correct: 0, explanation: "'Where abouts?' in Doric sounds like 'furry boots' to outsiders. Hence Aberdeen = The Furry Boots Toon!" } },
  { id: 410, category: "doric", question: "What is a 'butterie' (or 'rowie') and why was it invented?", year: null,
    eric: { options: ["A salty flaky bread roll, invented for fishermen — high fat content stops it going stale at sea", "A buttered oatcake for Highland cattle drovers", "A sweet pastry from Aberdeenshire bakeries", "A type of bread pudding from farming communities"], correct: 0, explanation: "A butterie/rowie is a salty, flaky bread roll unique to Aberdeen, made with flour, butter, LARD, salt, sugar, and yeast. Created for fishermen — the high fat content meant it wouldn't go stale during weeks at sea." },
    ruth: { options: ["A salty roll for fishermen! Wouldn't go stale at sea!", "A salty roll for fishermen! Wouldn't go stale at sea!", "Eric's favourite breakfast (probably)", "Like a croissant but better (and saltier)"], correct: 0, explanation: "A salty, buttery, flaky roll invented for Aberdeen fishermen. Think croissant but saltier and flatter." } },
  { id: 411, category: "doric", question: "What does 'dreich' mean?", year: null,
    eric: { options: ["Dreary, gloomy, grey, miserable weather", "Extremely cold with frost", "Heavy rain with thunder", "A sudden clearing after rain"], correct: 0, explanation: "Dreich = dreary, gloomy, bleak, grey, devoid of sunshine — the quintessential Scottish weather word. A dreich day is one where the sky is uniformly grey and it might drizzle, but it's the joylessness that defines it." },
    ruth: { options: ["Miserable, grey weather!", "Miserable, grey weather!", "Every day in Aberdeen (harsh but fair)", "Eric's mood on Mondays"], correct: 0, explanation: "Dreich = grey, miserable, devoid of sunshine. The most Scottish weather word there is." } },
  { id: 412, category: "doric", question: "What is a 'haar'?", year: null,
    eric: { options: ["A cold sea fog that rolls in off the North Sea", "A warm summer breeze from the west", "A sudden heavy downpour", "A light frost on autumn mornings"], correct: 0, explanation: "A haar is a cold sea mist/fog that rolls in from the North Sea — hauntingly beautiful and particular to Scotland's east coast, especially Aberdeen. It can reduce visibility dramatically and feel bone-chillingly cold even in summer." },
    ruth: { options: ["A cold sea fog!", "A cold sea fog!", "A type of hairstyle (it's not)", "Eric's reaction to cold weather (brrr)"], correct: 0, explanation: "A cold, ghostly sea fog from the North Sea. Aberdeen speciality. Ruins many a summer afternoon." } },
  { id: 413, category: "doric", question: "What is 'skirlie' and where does the name come from?", year: null,
    eric: { options: ["Fried oatmeal with onions — named for the skirling (high-pitched) sound it makes frying", "Skirt steak fried in dripping — named for the cut of meat", "A type of oatcake — named for its skirt-like shape", "A whisky toddy — named for the swirling motion"], correct: 0, explanation: "Skirlie = pinhead oats fried with onions in beef suet/dripping. 'Skirl' means a high-pitched sound — the noise the ingredients make in the hot pan. Served as a side dish or stuffing." },
    ruth: { options: ["Fried oatmeal! Named for the noise it makes!", "Fried oatmeal! Named for the noise it makes!", "Something Eric makes (noisily)", "A very loud breakfast"], correct: 0, explanation: "Fried oats with onions — named for the skirling sound they make in the pan!" } },
  { id: 414, category: "doric", question: "What does 'stovies' mean and when is it traditionally eaten?", year: null,
    eric: { options: ["A potato/meat stew — traditionally a Monday dish using Sunday roast leftovers", "A type of seafood chowder — traditionally on Fridays", "Baked oatmeal cakes — traditionally at breakfast", "Smoked fish pâté — traditionally at New Year"], correct: 0, explanation: "Stovies = potatoes, onions, and leftover meat cooked slowly in dripping. Name from Scots 'stove' (from French 'étuver') meaning to cook gently. Served with oatcakes, pickled beetroot, and cold milk." },
    ruth: { options: ["A Monday dinner from Sunday's leftovers!", "A Monday dinner from Sunday's leftovers!", "Eric's signature dish", "Something Ruth makes better than Eric"], correct: 0, explanation: "Stovies! Leftover Sunday roast turned into Monday dinner. Every family's recipe is different." } },
  { id: 415, category: "doric", question: "In Disney/Pixar's Brave, Young MacGuffin speaks Doric. What's the running joke?", year: 2012,
    eric: { options: ["Nobody — including his own father — can understand what he's saying", "He keeps accidentally insulting the other clans", "His Doric sounds like he's casting magic spells", "He translates everything into three languages simultaneously"], correct: 0, explanation: "Nobody can understand Young MacGuffin, including his own father. Actor Kevin McKidd (from Elgin) suggested using his grandfather's Doric for the character. A perfect in-joke for North-East Scots." },
    ruth: { options: ["Nobody can understand him — not even his dad!", "Nobody can understand him — not even his dad!", "Sounds about right for Doric", "Eric understood every word (he claims)"], correct: 0, explanation: "Even his own father can't understand his Doric! Kevin McKidd used his real grandfather's dialect." } },
  { id: 416, category: "doric", question: "Lewis Grassic Gibbon's novel Sunset Song topped a 2016 BBC poll as what?", year: 2016,
    eric: { options: ["Scotland's favourite book", "Britain's best wartime novel", "The greatest novel in Scots", "The Booker Prize's greatest omission"], correct: 0, explanation: "Sunset Song (1932) was voted Scotland's Favourite Book in a 2016 BBC poll. It's part of 'A Scots Quair' trilogy ('quair' = book in Scots). Protagonist Chris Guthrie is torn between Doric and English." },
    ruth: { options: ["Scotland's favourite book!", "Scotland's favourite book!", "Eric's favourite book (is it though?)", "A book about sunsets (it's about much more)"], correct: 0, explanation: "Scotland's favourite book! Set in the Mearns, written in the rhythms of Doric." } },
  { id: 417, category: "doric", question: "What does 'snell' mean in Doric weather terms?", year: null,
    eric: { options: ["Bitingly cold wind that seems to cut the skin", "Heavy snowfall", "A sudden thunderstorm", "A brief sunny spell between showers"], correct: 0, explanation: "Snell = a sharp, cutting, biting cold — often applied to wind. Distinct from just 'caul' (cold). A snell wind feels like it's slicing through your clothes." },
    ruth: { options: ["A biting, cutting cold wind!", "A biting, cutting cold wind!", "Eric in winter (he's always cold)", "The opposite of warm (obviously)"], correct: 0, explanation: "Snell = a wind so cold it cuts through you. Scotland has very specific words for different kinds of miserable weather." } },
  { id: 418, category: "doric", question: "Which poet is so associated with Doric that he became known by the title of his most famous collection, 'Hamewith'?", year: 1900,
    eric: { options: ["Charles Murray", "Lewis Grassic Gibbon", "Robert Burns", "Hugh MacDiarmid"], correct: 0, explanation: "Charles Murray (1864-1941) wrote 'Hamewith' (meaning 'homewards') in 1900 while living as a civil engineer in South Africa. He became so identified with it that people called HIM 'Hamewith.' His poems capture North-East characters in authentic Doric." },
    ruth: { options: ["Charles Murray — they called him 'Hamewith'!", "Charles Murray — they called him 'Hamewith'!", "Eric 'Screwdriver' Davidson (different kind of fame)", "A very homesick poet"], correct: 0, explanation: "Charles Murray! He wrote about home so beautifully from South Africa that he became known by his book's title." } },
  { id: 419, category: "doric", question: "Peterhead's nickname is 'The Blue Toon.' Why?", year: null,
    eric: { options: ["From the blue stockings/clothing worn by fisher folk — they were called 'Blue Mogganers'", "From the blue granite quarried nearby", "From the blue fishing boats in the harbour", "From a famous blue-painted pub on the high street"], correct: 0, explanation: "Peterhead's fisher folk wore coarse blue stockings ('mogganers') over their sea boots. The stockings were dyed with local woad. 'Blue Mogganers' became the nickname for Peterhead folk, and the town became 'The Blue Toon.'" },
    ruth: { options: ["Blue stockings on the fishermen!", "Blue stockings on the fishermen!", "They were sad (it was cold and wet)", "Eric's favourite colour is blue (is it?)"], correct: 0, explanation: "The fishermen wore blue stockings! 'Blue Mogganers' they were called, and the town became The Blue Toon." } },
  { id: 420, category: "doric", question: "What does 'affa' mean in Doric, and how is it used?", year: null,
    eric: { options: ["Awful/very — used as an intensifier ('affa bonnie' = very pretty)", "Afraid — used to express fear", "Away — used to mean departed", "Offer — used in bargaining"], correct: 0, explanation: "'Affa' means both 'awful' and 'very' — it's used as an intensifier. 'Affa bonnie' = very pretty, 'affa coorse' = very bad, 'affa caul' = very cold. The context determines whether it's positive or negative." },
    ruth: { options: ["Very! 'Affa bonnie' means very pretty!", "Very! 'Affa bonnie' means very pretty!", "Eric is affa good at fitting screwdrivers", "A word with two meanings (very and awful)"], correct: 0, explanation: "'Affa' means both 'awful' and 'very'! Context is everything. 'Affa bonnie' = very pretty. 'Affa coorse' = very rough." } },
  { id: 421, category: "doric", question: "What does 'drookit' mean?", year: null,
    eric: { options: ["Soaking wet / drenched", "Extremely hungry", "Very tired", "Badly dressed"], correct: 0, explanation: "Drookit = soaking wet, drenched — typically from being caught in the rain. 'I'm absolutely drookit' = I'm soaked through. A very useful word in Aberdeen." },
    ruth: { options: ["Soaking wet!", "Soaking wet!", "Eric after walking the dog in the haar", "Something that happens often in Scotland"], correct: 0, explanation: "Soaking wet! 'Drookit' — what happens when you go out in Aberdeen without a coat." } },
  { id: 422, category: "doric", question: "In 2006, who became the first MSP to take their oath in Doric at the Scottish Parliament?", year: 2006,
    eric: { options: ["Maureen Watt (SNP)", "Alex Salmond (SNP)", "Brian Adam (SNP)", "Richard Lochhead (SNP)"], correct: 0, explanation: "Maureen Watt became the first member of the Scottish Parliament to take her oath in Doric, making a public statement about the importance of Doric language and culture." },
    ruth: { options: ["Maureen Watt!", "Maureen Watt!", "Eric (he's not an MSP)", "Nobody understood a word (but it was valid!)"], correct: 0, explanation: "Maureen Watt! The first MSP to take the oath in Doric. A proud moment for the North-East." } },
  { id: 423, category: "doric", question: "A seagull is called a 'pyool' in Peterhead and a 'scurry' in Aberdeen. What is it called in Buckie?", year: null,
    eric: { options: ["A gow", "A maw", "A skreich", "A peedie"], correct: 0, explanation: "A seagull is a 'gow' in Buckie, a 'pyool' in Peterhead, and a 'scurry' in Aberdeen. Three different Doric words for the same bird, all within about 60 miles of each other. 'The language changes every 5 miles.'" },
    ruth: { options: ["A gow!", "A gow!", "A seagull (too simple for Doric)", "Something noisy (all seagulls are noisy)"], correct: 0, explanation: "A gow! Three towns, three completely different words for seagull. Doric varies every few miles." } },
  { id: 424, category: "doric", question: "What are 'foggietoddlers' in Doric?", year: null,
    eric: { options: ["Bumblebees", "Toddlers who are fussy eaters", "Old men who walk slowly", "Mushrooms"], correct: 0, explanation: "Foggietoddlers = bumblebees! One of the most delightful Doric words. The imagery of a fat bee toddling through the fog of a Scottish garden is perfect." },
    ruth: { options: ["Bumblebees!", "Bumblebees!", "Very small old men", "Eric after too much whisky"], correct: 0, explanation: "Bumblebees! Possibly the most charming word in any dialect, anywhere." } },
  { id: 425, category: "doric", question: "What does 'dinna fash yersel' mean?", year: null,
    eric: { options: ["Don't worry yourself", "Don't rush yourself", "Don't embarrass yourself", "Don't exhaust yourself"], correct: 0, explanation: "'Dinna' = don't, 'fash' = worry/trouble, 'yersel' = yourself. 'Dinna fash yersel' = Don't worry about it. One of the most widely known Scots phrases, used across Scotland, not just in Doric." },
    ruth: { options: ["Don't worry!", "Don't worry!", "Good advice from Eric", "What Ruth says to Eric every morning"], correct: 0, explanation: "Don't worry yourself! The most reassuring phrase in the Scots language." } },
  { id: 426, category: "doric", question: "What is Fraserburgh's Doric nickname?", year: null,
    eric: { options: ["The Broch", "The Blue Toon", "The Silver City", "The Fish Toon"], correct: 0, explanation: "'The Broch' — from the old Scots word for 'fort' or 'burgh.' Peterhead is 'The Blue Toon' and Aberdeen is 'The Granite City' or 'The Furry Boots Toon.'" },
    ruth: { options: ["The Broch!", "The Broch!", "The place with the harbour", "Eric's never been (he should visit)"], correct: 0, explanation: "The Broch! From the Scots word for fort. Every North-East town has its own Doric nickname." } },
  { id: 427, category: "doric", question: "The typical Doric response to 'Fit like?' is famously understated. What is the classic reply?", year: null,
    eric: { options: ["'Nae bad' or 'Jist tyaavin awa'", "'Affa weel, thank ye'", "'Champion, yersel?'", "'Fine and dandy'"], correct: 0, explanation: "'Nae bad' (not bad) or 'Jist tyaavin awa' (just struggling along/toiling away). Even if everything is wonderful, a Doric speaker would never say so. Excessive positivity would be alien. Understatement is the culture." },
    ruth: { options: ["'Nae bad' — always understated!", "'Nae bad' — always understated!", "Eric says 'nae bad' even when he's brilliant", "'Could be worse' (the Scottish way)"], correct: 0, explanation: "'Nae bad' — the ultimate in Scottish understatement. Even on the best day of your life: 'nae bad.'" } },
  { id: 428, category: "doric", question: "Queen Elizabeth II was revealed to speak Doric with villagers near which of her residences?", year: null,
    eric: { options: ["Balmoral Castle, Deeside", "Holyroodhouse, Edinburgh", "The Castle of Mey, Caithness", "Glamis Castle, Angus"], correct: 0, explanation: "The Queen spoke Doric with villagers near Balmoral on Deeside. Locals revealed after her death that she conversed in the dialect with ease and comfort — a side of her rarely seen publicly." },
    ruth: { options: ["Balmoral! The Queen spoke Doric!", "Balmoral! The Queen spoke Doric!", "Even the Queen said 'fit like?'", "Eric is impressed (and he's hard to impress)"], correct: 0, explanation: "Balmoral! The Queen could chat in Doric with the locals. Even royalty speaks Doric." } },
  { id: 429, category: "doric", question: "What is the Doric word for mashed potatoes?", year: null,
    eric: { options: ["Chappit tatties", "Birled tatties", "Stotted tatties", "Clattered tatties"], correct: 0, explanation: "Chappit tatties — 'chappit' means mashed/chopped, 'tatties' means potatoes. 'Neeps' are turnips. So 'chappit tatties an' neeps' = mashed potatoes and turnips — a Burns Supper staple." },
    ruth: { options: ["Chappit tatties!", "Chappit tatties!", "Squishy potatoes (close enough)", "Eric's favourite (with lots of butter)"], correct: 0, explanation: "Chappit tatties! 'Chappit' = mashed, 'tatties' = potatoes. Essential knowledge for Burns Night." } },
  { id: 430, category: "doric", question: "In Doric, what does 'like snaa aff a dyke' mean?", year: null,
    eric: { options: ["Selling or going very quickly (like snow off a wall)", "Melting away gradually", "Appearing suddenly from nowhere", "Being unreliable or flaky"], correct: 0, explanation: "'Like snaa aff a dyke' = like snow off a wall — meaning something sold or disappeared very quickly. 'The butteries went like snaa aff a dyke' = the butteries sold out instantly." },
    ruth: { options: ["Selling out super fast!", "Selling out super fast!", "Eric going to the pub (very quickly)", "Snow falling off things (literally)"], correct: 0, explanation: "Like snow off a wall — gone in a flash! Used when something sells out instantly." } },
  { id: 431, category: "doric", question: "What does 'speirin'' mean in Doric?", year: null,
    eric: { options: ["Asking / enquiring", "Spying / watching", "Speaking / talking", "Spending / wasting"], correct: 0, explanation: "'Speir' = to ask or enquire. 'Speirin'' = asking. 'Dinna be speirin' at me!' = Don't be asking me! Related to the German 'spüren' (to feel/sense)." },
    ruth: { options: ["Asking!", "Asking!", "Eric is always speirin' (asking questions)", "A type of fishing (it's not)"], correct: 0, explanation: "Asking! 'Speir' = to ask. Related to the German word 'spüren.' Doric has many Germanic connections." } },
  { id: 432, category: "doric", question: "In 2025, the Scottish Parliament passed an act giving Scots (including Doric) official status. What was it called?", year: 2025,
    eric: { options: ["The Scottish Languages Act 2025", "The Scots Language Recognition Act 2025", "The Doric Preservation Act 2025", "The Languages of Scotland Act 2025"], correct: 0, explanation: "The Scottish Languages Act 2025, passed on 17 June 2025, gave Scots official status alongside Gaelic. Doric is treated within the Scots language continuum. In 2018, Aberdeenshire Council had already approved a Doric language strategy for 152 primary and 17 secondary schools." },
    ruth: { options: ["The Scottish Languages Act 2025!", "The Scottish Languages Act 2025!", "The 'Fit Like?' Act (not its real name)", "Eric approves (he's a traditionalist)"], correct: 0, explanation: "The Scottish Languages Act 2025! Scots — including Doric — is now officially recognised by law." } },

  // ─── NTNON Gramophone sketch (additional) ─────────────────────
  { id: 433, category: "ntnon", question: "In the NTNON Hi-Fi Shop sketch, when Smith asks what the difference is between the turntable and a gramophone, what does Atkinson reply?", year: null,
    eric: { options: ["'About 30 years and a plastic cover to you, chief'", "'About 50 quid and a degree in electronics'", "'About the same difference as between you and a customer'", "'About as much as between a horse and a Ferrari'"], correct: 0, explanation: "'About 30 years and a plastic cover to you, chief.' The sketch has Atkinson and Rhys Jones as snobbish hi-fi shop assistants progressively humiliating Mel Smith's hapless customer." },
    ruth: { options: ["'About 30 years and a plastic cover'!", "'About 30 years and a plastic cover'!", "Something very rude (it was)", "Eric knows the exact quote"], correct: 0, explanation: "About 30 years and a plastic cover! The snobbiest putdown in hi-fi history." } },
  { id: 434, category: "ntnon", question: "In the Hi-Fi Shop sketch, Smith nervously agrees to buy speakers, rumble filters, and what unexpected item — before realising what he's said?", year: null,
    eric: { options: ["A bag on his head", "A tin of baked beans", "A subscription to What Hi-Fi?", "A lifetime service contract"], correct: 0, explanation: "Atkinson slips 'Do you want a bag on your head?' into the rapid-fire list after speakers and rumble filters. Smith automatically says 'Yes' — and a paper bag goes straight on his head. Classic comedy of momentum." },
    ruth: { options: ["A bag on his head!", "A bag on his head!", "Something for Eric's Christmas", "A very expensive cable"], correct: 0, explanation: "A bag on his head! Atkinson sneaks it into the list and Smith says yes without thinking. Genius." } },
  { id: 435, category: "ntnon", question: "In the Hi-Fi Shop sketch, when Smith asks about his old 78s, what does he do when Atkinson challenges him?", year: null,
    eric: { options: ["Denies saying it — 'Nothing, nothing... no, no I didn't, honestly'", "Proudly repeats the question louder", "Asks to speak to the manager", "Walks out of the shop in embarrassment"], correct: 0, explanation: "Smith: 'What do I do with my old 78s?' Atkinson: 'What'd you say?' Smith immediately backtracks: 'Nothing, nothing.' Atkinson: 'You said what about my old 78s, didn't you?' Smith: 'No, no I didn't, honestly, no.' Pure cowardice under pressure." },
    ruth: { options: ["He denies ever saying it!", "He denies ever saying it!", "Eric would never back down (yes he would)", "He hides behind the speakers"], correct: 0, explanation: "He completely denies it! Classic Mel Smith crumbling under the snobbery." } },
  { id: 436, category: "ntnon", question: "In the Hi-Fi Shop sketch, Smith falls into the 'Dolby trap.' What happens?", year: null,
    eric: { options: ["He says yes to Dolby, but Atkinson says 'Dolby's only with tape recorders, chief'", "He asks what Dolby is and gets laughed at", "He says he already has Dolby at home", "He confuses Dolby with Dolly Parton"], correct: 0, explanation: "Atkinson: 'Do you want a Dolby with it?' Smith: 'Yes please.' Atkinson: 'Dolby's only with tape recorders, chief.' Every question is a trap designed to expose Smith's ignorance." },
    ruth: { options: ["He says yes but Dolby's only for tape recorders!", "He says yes but Dolby's only for tape recorders!", "Eric fell for this one too", "Dolby is a type of cheese (it's not)"], correct: 0, explanation: "He eagerly says yes to Dolby — but it's only for tape recorders! Every answer is wrong in that shop." } },
  { id: 437, category: "ntnon", question: "The Hi-Fi Shop sketch ends with Smith being squirted with what, after insisting he wants it?", year: null,
    eric: { options: ["Slimline salad dressing", "Washing-up liquid", "Record cleaning fluid", "WD-40"], correct: 0, explanation: "Atkinson: 'You'll be telling us you don't want slimline salad dressing!' Smith (muffled through bag on his head): 'Yes I do want slimline salad dressing!' — and gets squirted. The ultimate humiliation after a 2-minute masterclass in snobbery." },
    ruth: { options: ["Slimline salad dressing!", "Slimline salad dressing!", "Something Eric puts on his chips", "Hi-fi cleaning fluid (much more logical)"], correct: 0, explanation: "Slimline salad dressing! The most absurd ending to any sketch. He asked for it — literally." } },
  { id: 438, category: "ntnon", question: "In the Hi-Fi Shop sketch, how many watts does Smith eventually settle on for his amp, after guessing wildly?", year: null,
    eric: { options: ["30 watts", "100 watts", "500 watts", "2,000 watts"], correct: 0, explanation: "Atkinson asks how many watts. Smith flounders: 'About... three?' 'No.' 'Two thousand?' 'Five hundred?' Atkinson: 'Thirty?' Smith (relieved): 'Thirty, thirty, thirty!' Atkinson: 'So you know all about it!' Even getting the right answer is made to feel humiliating." },
    ruth: { options: ["30 watts!", "30 watts!", "All the watts (very technical)", "Eric's stereo has at least 40"], correct: 0, explanation: "30 watts — but only after guessing three, then two thousand, then five hundred. The shop assistants enjoyed every wrong answer." } },

  // ─── DFDS Seaways & Newcastle-Esbjerg ─────────────────────────
  { id: 439, category: "dfds", question: "What does DFDS stand for?", year: 1866,
    eric: { options: ["Det Forenede Dampskibs-Selskab (The United Steamship Company)", "Danish Ferry and Docking Services", "Det Danske Færge-Selskab (The Danish Ferry Company)", "Dampskibs-Fartøj og Distribution-Selskab"], correct: 0, explanation: "Det Forenede Dampskibs-Selskab — literally 'The United Steamship Company.' Founded 11 December 1866 by Carl Frederik Tietgen, a Danish financier known as 'The Great Mogul.' He merged three existing steamship companies." },
    ruth: { options: ["The United Steamship Company!", "The United Steamship Company!", "Don't Forget Danish Sausages", "Eric's favourite ferry line"], correct: 0, explanation: "Det Forenede Dampskibs-Selskab — The United Steamship Company! Founded 1866." } },
  { id: 440, category: "dfds", question: "The MS Winston Churchill was built in 1967. In which country was she constructed?", year: 1967,
    eric: { options: ["Italy (Genoa)", "Denmark (Aalborg)", "Germany (Hamburg)", "Scotland (Glasgow)"], correct: 0, explanation: "Built by Cantieri Navali del Tirreno e Riuniti at Riva Trigoso, near Genoa, Italy. Launched 25 May 1966, delivered 19 May 1967. She was christened by Lady Churchill (Winston's widow) at Greenwich on 28 May 1967." },
    ruth: { options: ["Italy! Built in Genoa!", "Italy! Built in Genoa!", "Denmark (logical but wrong)", "Eric built her himself (he didn't)"], correct: 0, explanation: "Italy! A Danish ferry built in Genoa. She was christened by Lady Churchill herself." } },
  { id: 441, category: "dfds", question: "Who christened the MS Winston Churchill, and where?", year: 1967,
    eric: { options: ["Lady Clementine Churchill, at Greenwich", "Queen Elizabeth II, at Southampton", "Princess Margaret, at Newcastle", "The Danish Prime Minister, at Esbjerg"], correct: 0, explanation: "Lady Clementine Churchill (Winston's widow) christened the ship at Greenwich on 28 May 1967. She entered service on 2 June 1967 on the Esbjerg-Harwich route." },
    ruth: { options: ["Lady Churchill at Greenwich!", "Lady Churchill at Greenwich!", "Eric christened her (with a bottle of Irn-Bru)", "The Queen (wrong ceremony)"], correct: 0, explanation: "Lady Churchill herself, at Greenwich! A fitting godmother for a ship bearing her husband's name." } },
  { id: 442, category: "dfds", question: "What was the gross tonnage of the MS Winston Churchill?", year: 1967,
    eric: { options: ["8,658 GT", "14,399 GT", "12,348 GT", "6,200 GT"], correct: 0, explanation: "8,658 gross tonnes — roughly a quarter the tonnage of a modern DFDS ferry like the King Seaways (31,360 GT). She was 140.67m long, carried 450-750 passengers and 180 cars, with a top speed of 21-22 knots." },
    ruth: { options: ["8,658 tonnes!", "8,658 tonnes!", "Very heavy (that's all we know)", "Heavier than Eric after Christmas dinner"], correct: 0, explanation: "8,658 gross tonnes! Small by modern standards but she was a grand ship in her day." } },
  { id: 443, category: "dfds", question: "On 26 August 1979, the Winston Churchill ran aground near Gothenburg. What caused it?", year: 1979,
    eric: { options: ["An electrical blackout — she grounded at Vinga", "Thick fog and navigational error", "Engine failure during a storm", "A collision with a fishing vessel"], correct: 0, explanation: "An electrical blackout caused her to run aground at Vinga near Gothenburg on 26 August 1979. Passengers were evacuated by helicopter. She was refloated on 29 August and towed to Lindholmen shipyard, then repaired at Frederikshavn. She didn't return to service until March 1980." },
    ruth: { options: ["An electrical blackout!", "An electrical blackout!", "Eric was at the wheel (he wasn't)", "She took a wrong turn (ships don't have sat-nav)"], correct: 0, explanation: "An electrical blackout! Passengers had to be airlifted off by helicopter. Quite the adventure." } },
  { id: 444, category: "dfds", question: "The MS Dana Anglia was built at which shipyard?", year: 1978,
    eric: { options: ["Aalborg Vaerft, Denmark", "Cantieri Navali, Genoa, Italy", "Dubegion-Normandie, Nantes, France", "Kockums, Malmö, Sweden"], correct: 0, explanation: "Aalborg Vaerft A/S in Aalborg, Denmark (Yard No. 210). Launched 24 June 1977, delivered 28 April 1978. At 14,399 GT she was nearly double the tonnage of the Winston Churchill, carrying 1,370 passengers and 470 cars." },
    ruth: { options: ["Aalborg in Denmark!", "Aalborg in Denmark!", "IKEA (they make everything)", "Eric's garage (it's very spacious)"], correct: 0, explanation: "Aalborg Vaerft in Denmark! Unlike the Winston Churchill, the Dana Anglia was actually built in Denmark." } },
  { id: 445, category: "dfds", question: "The MS Dana Anglia featured in which notoriously bad BBC soap opera set on a North Sea ferry?", year: 1982,
    eric: { options: ["Triangle (1982-83, series 2 and 3)", "Eldorado (1992-93)", "Harbour Lights (1999)", "Howards' Way (1985-90)"], correct: 0, explanation: "Triangle! The BBC soap ran for 78 episodes (1981-83). Series 1 used the Tor Scandinavia; series 2-3 switched to the Dana Anglia because her less intensive schedule gave more time for filming in port. Widely remembered as 'some of the most mockable British television ever produced.'" },
    ruth: { options: ["Triangle! Famously terrible TV!", "Triangle! Famously terrible TV!", "EastEnders at Sea (not a real show)", "Eric's favourite programme (it wasn't)"], correct: 0, explanation: "Triangle! A soap opera set on a ferry. It was absolutely dreadful — and the Dana Anglia starred in it." } },
  { id: 446, category: "dfds", question: "How did the Dana Anglia's gross tonnage compare to the Winston Churchill's?", year: null,
    eric: { options: ["Nearly double (14,399 GT vs 8,658 GT)", "About the same (both around 9,000 GT)", "Three times larger (25,000 GT vs 8,658 GT)", "Slightly smaller (7,200 GT vs 8,658 GT)"], correct: 0, explanation: "The Dana Anglia was 14,399 GT — nearly double the Winston Churchill's 8,658 GT. She was also longer (152.91m vs 140.67m), carried far more passengers (1,370 vs 750) and cars (470 vs 180)." },
    ruth: { options: ["Nearly double!", "Nearly double!", "Size doesn't matter (it does on ferries)", "Eric measured them both (he didn't)"], correct: 0, explanation: "Nearly double! The Dana Anglia was a much bigger, more modern ship." } },
  { id: 447, category: "dfds", question: "Where did DFDS ferries to Denmark depart from in Newcastle?", year: null,
    eric: { options: ["Tyne Commission Quay, North Shields", "Royal Quays International Terminal", "Newcastle Central Station ferry berth", "Tynemouth Pier"], correct: 0, explanation: "Tyne Commission Quay in North Shields — opened in 1928 by the Tyne Improvement Commission for passenger and cargo trade with Scandinavia. Later renamed Northumbrian Quay. The modern Royal Quays terminal (used for the Amsterdam service) is about 350 metres away." },
    ruth: { options: ["Tyne Commission Quay, North Shields!", "Tyne Commission Quay, North Shields!", "The end of the Tyne (roughly right)", "Eric's back garden (it has a jetty — it doesn't)"], correct: 0, explanation: "Tyne Commission Quay in North Shields! Purpose-built in 1928 for Scandinavian ferry services." } },
  { id: 448, category: "dfds", question: "The DFDS Harwich-Esbjerg route was one of the longest-running ferry services in history. How long did it operate?", year: 2014,
    eric: { options: ["139 years (1875-2014)", "120 years (1894-2014)", "100 years (1914-2014)", "85 years (1929-2014)"], correct: 0, explanation: "139 years — from 1875 to 29 September 2014. The first vessel was the paddle steamer Riberhuus, which originally carried live cattle. The last ship was the Sirena Seaways. It closed due to dwindling demand, loss of duty-free (1999), low-cost airline competition, and EU sulphur emission regulations." },
    ruth: { options: ["139 years!", "139 years!", "Since the Vikings (not quite)", "Longer than Eric's been alive (just)"], correct: 0, explanation: "139 years! From 1875 to 2014. One of the longest-running ferry services in maritime history." } },
  { id: 449, category: "dfds", question: "Why was the port of Esbjerg built in 1868?", year: 1868,
    eric: { options: ["Denmark lost its port at Altona to Germany after the Second Schleswig War (1864)", "The old harbour at Ribe silted up", "King Christian IX wanted a west-coast naval base", "A new rail link needed a coastal terminus"], correct: 0, explanation: "Denmark lost the port of Altona (near Hamburg) to Germany after the Second Schleswig War of 1864. Esbjerg was purpose-built by the Danish state as a replacement west-coast port. It's Denmark's youngest city." },
    ruth: { options: ["Denmark lost its old port to Germany!", "Denmark lost its old port to Germany!", "They needed somewhere for the ferries", "Eric suggested it (he wasn't born yet)"], correct: 0, explanation: "Denmark lost Altona to Germany in a war! So they built Esbjerg from scratch. Denmark's youngest city." } },
  { id: 450, category: "dfds", question: "What happened to the MS Winston Churchill after her DFDS career ended?", year: 2004,
    eric: { options: ["Used as a refugee centre, then scrapped at Alang, India in 2004", "Converted to a cruise ship and sailed the Caribbean", "Sunk as an artificial reef off the Danish coast", "Preserved as a museum ship in Esbjerg"], correct: 0, explanation: "She was used as a refugee centre in Copenhagen (1986) and Malmö (1989-91), then renamed Mayan Empress for a failed Caribbean venture. Her new owners went bankrupt. She deteriorated at a Norwegian shipyard before being sold to Indian breakers. She arrived at Alang on 21 January 2004 and was scrapped." },
    ruth: { options: ["Refugee centre, then scrapped in India!", "Refugee centre, then scrapped in India!", "She's still sailing (sadly not)", "Eric has a piece of her (does he?)"], correct: 0, explanation: "A sad end — used as refugee housing, then scrapped in India in 2004. The Dana Anglia, remarkably, still exists." } },
  { id: 451, category: "dfds", question: "The Winston Churchill's interiors were panelled in three exotic hardwoods. Which?", year: null,
    eric: { options: ["Palisander, rosewood, and African wenge", "Teak, mahogany, and ebony", "Oak, walnut, and cedar", "Cherry, maple, and birch"], correct: 0, explanation: "Palisander (a type of rosewood), rosewood, and African wenge — luxurious hardwoods that gave her interior a rich, dark character. Unusually opulent for a North Sea ferry." },
    ruth: { options: ["Palisander, rosewood, and African wenge!", "Palisander, rosewood, and African wenge!", "MDF and Formica (much cheaper)", "Eric's favourite woods (he's a connoisseur)"], correct: 0, explanation: "Three exotic hardwoods! She was a classy ship. Not your average ferry interior." } },
  { id: 452, category: "dfds", question: "Duty-free shopping on EU ferries was abolished on what date, devastating ferry operators' revenue?", year: 1999,
    eric: { options: ["1 July 1999", "1 January 2000", "1 January 1993", "31 December 1995"], correct: 0, explanation: "1 July 1999 — an EU Council decision that ended duty-free sales between EU member states. This was a massive blow to ferry operators like DFDS, as 'booze cruises' had been enormously popular. The loss of this revenue was a key factor in the eventual closure of the Harwich-Esbjerg route in 2014. Duty-free was restored for UK-EU crossings after Brexit in 2021." },
    ruth: { options: ["1 July 1999!", "1 July 1999!", "A sad day for bargain hunters", "Eric remembers it well (the prices went up)"], correct: 0, explanation: "1 July 1999 — the end of duty-free! A dark day for ferry passengers and their cheap lager." } },
  { id: 453, category: "dfds", question: "Is the MS Dana Anglia still afloat today?", year: null,
    eric: { options: ["Yes — she's had 5 names and is currently laid up in Genoa as 'Santa Cruz'", "No — she was scrapped at Alang in 2010", "No — she sank in a storm off Vietnam in 2017", "Yes — she's a floating hotel in Copenhagen harbour"], correct: 0, explanation: "Remarkably, yes! Built 1978, she served as Dana Anglia, Duke of Scandinavia, Pont l'Abbé, Moby Corse, and finally Santa Cruz. As of 2025 she's laid up in Genoa awaiting a court-ordered auction. 47 years old and still afloat — unlike the Winston Churchill, scrapped in 2004." },
    ruth: { options: ["Yes! She's still afloat after 47 years!", "Yes! She's still afloat after 47 years!", "She's retired (like Eric should be)", "Eric visits her every summer (he doesn't)"], correct: 0, explanation: "Still afloat! She's had five different names but she's still there in Genoa. A proper survivor." } },

  // ─── Buddy Holly ──────────────────────────────────────────────
  { id: 454, category: "buddy-holly", question: "Buddy Holly's real surname was Holley, not Holly. How did the spelling change?", year: 1956,
    eric: { options: ["A typist misspelled it on his Decca Records contract", "He changed it legally to seem more modern", "A newspaper reviewer got it wrong and it stuck", "His manager thought 'Holly' looked better on posters"], correct: 0, explanation: "When Buddy signed with Decca Records on 8 February 1956, a typist dropped the 'e' from Holley. He kept the misspelling. His headstone in Lubbock still reads 'Holley' — with a carving of his Fender Stratocaster." },
    ruth: { options: ["A typo on his record contract!", "A typo on his record contract!", "Eric's name is spelled wrong too (it's not)", "Someone lost the 'e' (literally)"], correct: 0, explanation: "A typing mistake on his Decca contract! One missing letter, and music history was made." } },
  { id: 455, category: "buddy-holly", question: "Where was Buddy Holly born?", year: 1936,
    eric: { options: ["Lubbock, Texas", "Nashville, Tennessee", "Memphis, Tennessee", "Austin, Texas"], correct: 0, explanation: "Charles Hardin Holley was born on 7 September 1936 in Lubbock, Texas. He won $5 at a talent show aged 5 for singing 'Down the River of Memories.' His mother gave him the nickname 'Buddy' because she felt 'Charles Hardin' was too big a name for her little boy." },
    ruth: { options: ["Lubbock, Texas!", "Lubbock, Texas!", "Somewhere in America with a funny name", "Eric's been there (has he?)"], correct: 0, explanation: "Lubbock, Texas! A dusty West Texas town that produced one of rock and roll's greatest legends." } },
  { id: 456, category: "buddy-holly", question: "The Crickets considered calling themselves 'The Beetles' but rejected it. Why?", year: null,
    eric: { options: ["Jerry Allison said 'that's just a bug you'd want to step on'", "They thought it sounded too aggressive", "Another band already had the name", "Norman Petty thought it was unmarketable"], correct: 0, explanation: "Jerry Allison rejected 'Beetles' saying it was just a bug you'd want to step on. Years later, John Lennon adopted a similar insect-with-a-pun name — 'Beatles' (beat + beetles) — directly inspired by the Crickets." },
    ruth: { options: ["'Just a bug you'd step on'!", "'Just a bug you'd step on'!", "The Beatles copied the idea anyway", "Eric prefers spiders (he doesn't)"], correct: 0, explanation: "Jerry Allison said you'd just want to step on a beetle! Then John Lennon went and named his band after the same idea." } },
  { id: 457, category: "buddy-holly", question: "'That'll Be the Day' took its title from a catchphrase in which John Wayne film?", year: 1957,
    eric: { options: ["The Searchers (1956)", "Rio Bravo (1959)", "The Quiet Man (1952)", "True Grit (1969)"], correct: 0, explanation: "The Searchers (1956) — John Wayne repeatedly says 'That'll be the day.' The song reached #1 in both the US (23 September 1957) and UK (November 1957, 3 weeks at #1). An earlier version recorded at Decca's Nashville studio in 1956 was rejected." },
    ruth: { options: ["The Searchers!", "The Searchers!", "A cowboy film with John Wayne", "Eric's favourite John Wayne film (maybe)"], correct: 0, explanation: "The Searchers! John Wayne kept saying 'That'll be the day' and Buddy Holly turned it into a #1 hit." } },
  { id: 458, category: "buddy-holly", question: "'Peggy Sue' was originally titled something else. What, and why was it changed?", year: 1957,
    eric: { options: ["'Cindy Lou' — renamed after Jerry Allison's girlfriend to win her back after a breakup", "'Mary Jane' — renamed because it sounded like a drug reference", "'Betty Jean' — renamed after Holly's sister", "'Sweet Caroline' — renamed to avoid copying Neil Sedaka"], correct: 0, explanation: "'Cindy Lou' (Holly's niece's name). Jerry Allison suggested renaming it 'Peggy Sue' after his girlfriend Peggy Sue Gerron — they'd temporarily broken up and the name change was his way of winning her back. The beat also changed from cha-cha to paradiddle. It worked — they later married." },
    ruth: { options: ["'Cindy Lou' — changed to win back Jerry's girlfriend!", "'Cindy Lou' — changed to win back Jerry's girlfriend!", "Very romantic (it worked!)", "Eric once renamed a song for Ruth (he didn't)"], correct: 0, explanation: "Originally 'Cindy Lou'! Jerry renamed it after his girlfriend Peggy Sue to win her back. Romance through rock and roll." } },
  { id: 459, category: "buddy-holly", question: "What gives 'Everyday' its distinctive bell-like sound?", year: 1957,
    eric: { options: ["A celesta, played by Norman Petty's wife Vi", "A glockenspiel, played by session musician Tommy Allsup", "A vibraphone, played by Joe B. Mauldin", "Wind chimes hung in the studio doorway"], correct: 0, explanation: "The celesta (a keyboard producing bell-like tones) was played by Vi Petty, Norman's wife. Jerry Allison slaps his knees instead of using drums. It was the B-side of 'Peggy Sue' — two classics on one single." },
    ruth: { options: ["A celesta played by the producer's wife!", "A celesta played by the producer's wife!", "A magical tinkling thing", "Eric plays the celesta (he absolutely does not)"], correct: 0, explanation: "A celesta! Norman Petty's wife Vi played it. Meanwhile Jerry Allison slapped his own knees instead of using drums." } },
  { id: 460, category: "buddy-holly", question: "Who wrote 'It Doesn't Matter Anymore' for Buddy Holly?", year: 1959,
    eric: { options: ["Paul Anka", "Buddy Holly himself", "Carole King", "Burt Bacharach"], correct: 0, explanation: "Paul Anka wrote it specifically for Holly. Recorded 21 October 1958 at the Pythian Temple, NYC with the Dick Jacobs Orchestra. Released January 1959, it became the first posthumous #1 in UK chart history (3 weeks from 24 April 1959). Anka donated his royalties to Holly's widow Maria Elena." },
    ruth: { options: ["Paul Anka!", "Paul Anka!", "A very generous songwriter", "Eric (in his dreams)"], correct: 0, explanation: "Paul Anka! He donated all his royalties from the song to Holly's widow. A class act." } },
  { id: 461, category: "buddy-holly", question: "How long into their first date did Buddy Holly propose to Maria Elena Santiago?", year: 1958,
    eric: { options: ["Five hours", "Five minutes", "Three weeks", "At the end of their second date"], correct: 0, explanation: "Five hours into their first date on 19 June 1958, Holly handed Maria Elena a rose and proposed. They married on 15 August 1958 in Lubbock. She was a receptionist at Peer-Southern Music in the Brill Building, NYC. She was pregnant when he died." },
    ruth: { options: ["Five hours!", "Five hours!", "Very fast (even by Eric's standards)", "Faster than Eric proposed to Ruth (probably)"], correct: 0, explanation: "Five hours! He proposed on their first date. They married two months later." } },
  { id: 462, category: "buddy-holly", question: "What type of plane crashed on 3 February 1959, killing Holly, Valens, and Richardson?", year: 1959,
    eric: { options: ["A 1947 Beechcraft Bonanza", "A Cessna 172 Skyhawk", "A Piper Cherokee", "A de Havilland Dove"], correct: 0, explanation: "A 1947 Beechcraft Bonanza, a 4-seater light aircraft. Pilot Roger Peterson (age 21, not instrument-rated) took off from Mason City, Iowa at ~1:00 AM in deteriorating weather. The plane crashed in a cornfield 5 miles from the airport." },
    ruth: { options: ["A Beechcraft Bonanza!", "A Beechcraft Bonanza!", "A very small plane in very bad weather", "Eric has never been in a Bonanza (probably)"], correct: 0, explanation: "A tiny 4-seater Beechcraft Bonanza. Bad weather, a young pilot, and a decision that changed music history." } },
  { id: 463, category: "buddy-holly", question: "Who gave up their plane seat to The Big Bopper, and who lost a coin toss to Ritchie Valens?", year: 1959,
    eric: { options: ["Waylon Jennings gave up his seat; Tommy Allsup lost the coin toss", "Tommy Allsup gave up his seat; Waylon Jennings lost the coin toss", "Carl Bunch gave up his seat; Dion lost the coin toss", "Bobby Vee gave up his seat; Carl Bunch lost the coin toss"], correct: 0, explanation: "Waylon Jennings gave his seat to The Big Bopper (who had the flu). Tommy Allsup lost a coin toss to Ritchie Valens — who ironically had a fear of flying. Holly joked to Jennings: 'I hope your bus freezes up.' Jennings replied: 'I hope your plane crashes.' It haunted him for life." },
    ruth: { options: ["Waylon Jennings and Tommy Allsup!", "Waylon Jennings and Tommy Allsup!", "Two very lucky men (in the worst way)", "Eric would have taken the bus"], correct: 0, explanation: "Waylon Jennings and Tommy Allsup — their decisions saved their lives. The exchange between Holly and Jennings haunted Waylon forever." } },
  { id: 464, category: "buddy-holly", question: "Holly's famous black horn-rimmed glasses were made by which company?", year: null,
    eric: { options: ["Faosa (a Mexican company)", "Ray-Ban (American)", "Oliver Peoples (American)", "Cutler and Gross (British)"], correct: 0, explanation: "Faosa — a Mexican company. Holly's optometrist J. Davis Armistead spotted the frames in a Mexico City optician's window, inspired by Phil Silvers in Sergeant Bilko. The glasses were found at the crash site in spring 1959, sat in a sheriff's envelope for 21 years, and are now at the Buddy Holly Center in Lubbock." },
    ruth: { options: ["Faosa — from Mexico!", "Faosa — from Mexico!", "Very fashionable glasses", "Eric has similar ones (does he?)"], correct: 0, explanation: "Faosa! A Mexican brand. They sat forgotten in a sheriff's envelope for 21 years before being rediscovered." } },
  { id: 465, category: "buddy-holly", question: "Buddy Holly was inducted into the Rock and Roll Hall of Fame in 1986. What was special about that year?", year: 1986,
    eric: { options: ["It was the first ever class of inductees", "It was the 50th anniversary of his birth", "It was the Hall's 10th anniversary", "He was the youngest person ever inducted"], correct: 0, explanation: "1986 was the first ever class of Rock and Roll Hall of Fame inductees. Holly was joined by Chuck Berry, James Brown, Ray Charles, Sam Cooke, Fats Domino, the Everly Brothers, Little Richard, Jerry Lee Lewis, and Elvis Presley." },
    ruth: { options: ["The very first class ever!", "The very first class ever!", "Eric was nearly inducted too (he wasn't)", "A very exclusive club"], correct: 0, explanation: "The very first class! Holly alongside Elvis, Chuck Berry, Little Richard, and the other founding fathers of rock and roll." } },
  { id: 466, category: "buddy-holly", question: "On the Ed Sullivan Show, Sullivan tried to sabotage Holly's performance. What did he do?", year: 1958,
    eric: { options: ["Had Holly's guitar microphone turned off during the performance", "Introduced him by the wrong name and cut his set to one song", "Both of these — mispronounced his name AND cut the mic", "Moved Holly to a different time slot with lower viewership"], correct: 2, explanation: "Sullivan did BOTH: mispronounced Holly's name on air AND had his electric guitar mic turned off. Holly insisted on playing 'Oh Boy!' against Sullivan's wishes. When only Holly (not the band) showed up to the dressing room, Holly quipped: 'I hope they're damn more excited than I am.' Sullivan invited them back — Holly refused." },
    ruth: { options: ["Mispronounced his name AND cut his guitar mic!", "Mispronounced his name AND cut his guitar mic!", "Very rude of Ed Sullivan", "Eric would have walked off (definitely)"], correct: 0, explanation: "Ed Sullivan mispronounced his name AND turned off his guitar microphone! Holly refused to come back. Legend." } },
  { id: 467, category: "buddy-holly", question: "Who owns the publishing rights to Buddy Holly's song catalogue?", year: 1976,
    eric: { options: ["Paul McCartney (via MPL Communications, acquired 1976)", "Sony/ATV Music Publishing", "The Holly family estate", "Universal Music Group"], correct: 0, explanation: "Paul McCartney acquired the North American publishing rights through his company MPL Communications (McCartney Productions Ltd.) in 1976. McCartney also ran 'Buddy Holly Day' — an annual concert from 1976 to 1999." },
    ruth: { options: ["Paul McCartney!", "Paul McCartney!", "A Beatle owning a Cricket's songs", "Eric (he wishes)"], correct: 0, explanation: "Paul McCartney! A Beatle owns a Cricket's songs. The insect-name connection comes full circle." } },
  { id: 468, category: "buddy-holly", question: "The Rolling Stones' cover of which Buddy Holly song became their first UK Top 10 hit?", year: 1964,
    eric: { options: ["Not Fade Away (#3 UK, February 1964)", "That'll Be the Day (#5 UK, 1963)", "Oh Boy! (#8 UK, 1964)", "Everyday (#7 UK, 1963)"], correct: 0, explanation: "'Not Fade Away' reached #3 in the UK in February 1964. Mick Jagger had seen Holly perform it live in Woolwich during Holly's 1958 UK tour. Keith Richards modelled his early guitar playing on the song's Bo Diddley beat." },
    ruth: { options: ["Not Fade Away!", "Not Fade Away!", "The Stones loved Buddy Holly", "Eric prefers the original (obviously)"], correct: 0, explanation: "Not Fade Away! Mick Jagger saw Holly play it live in 1958 and never forgot it." } },
  { id: 469, category: "buddy-holly", question: "Holly pioneered the standard rock band format. What was the lineup?", year: null,
    eric: { options: ["Two guitars, bass, drums, and vocals", "Guitar, keyboards, bass, and drums", "Three guitars, bass, and drums", "Guitar, saxophone, bass, and drums"], correct: 0, explanation: "Two guitars, bass, drums, and vocals — Holly and the Crickets established this as the template for rock bands. The Beatles, Rolling Stones, and virtually every guitar band since followed this format. Before Holly, rock and roll acts typically used session musicians." },
    ruth: { options: ["Two guitars, bass, and drums!", "Two guitars, bass, and drums!", "Every band since has copied this", "Eric plays none of these instruments"], correct: 0, explanation: "Two guitars, bass, and drums! The Crickets invented the format that every rock band still uses." } },
  { id: 470, category: "buddy-holly", question: "On 'Words of Love,' Holly pioneered which recording technique?", year: 1957,
    eric: { options: ["Double-tracking — harmonising with his own overdubbed voice", "Reverse echo on the vocals", "Stereo panning between left and right channels", "Tape delay feedback loops"], correct: 0, explanation: "Holly harmonised with himself using double-tracking/overdubbing — recording his vocal and guitar, then overdubbing a second vocal and lead guitar on a second tape machine. One of the first uses in rock music. The Beatles later covered it on Beatles for Sale (1964), replicating the exact arrangement." },
    ruth: { options: ["Singing a duet with himself!", "Singing a duet with himself!", "Very clever (and a bit weird)", "Eric sings duets with himself in the shower"], correct: 0, explanation: "He overdubbed his own voice to harmonise with himself! A recording technique that changed music." } },
  { id: 471, category: "buddy-holly", question: "How old was Buddy Holly when he died?", year: 1959,
    eric: { options: ["22", "25", "27", "19"], correct: 0, explanation: "Just 22 years old. His entire hit-making career lasted roughly 18 months (mid-1957 to February 1959). In that time he produced enough material for Coral Records to release new albums and singles for 10 years after his death." },
    ruth: { options: ["22! So young!", "22! So young!", "Much too young", "Eric was 22 once (a long time ago)"], correct: 0, explanation: "Only 22. In just 18 months of recording, he changed music forever." } },
  { id: 472, category: "buddy-holly", question: "Don McLean's 'American Pie' refers to 3 February 1959 as what?", year: 1971,
    eric: { options: ["'The day the music died'", "'The day the angels cried'", "'The day rock and roll stood still'", "'The day the records stopped'"], correct: 0, explanation: "'The day the music died.' McLean was a teenage newspaper delivery boy who learned of the crash while delivering papers. The 1971 song memorialised the event as a symbol of collective loss of innocence." },
    ruth: { options: ["'The day the music died'!", "'The day the music died'!", "A very sad day indeed", "Eric cries every time he hears it (maybe)"], correct: 0, explanation: "'The day the music died' — Don McLean's tribute to the crash that took Holly, Valens, and The Big Bopper." } },
  { id: 473, category: "buddy-holly", question: "Holly's last professional studio session produced four tracks in 3.5 hours. Where was it recorded?", year: 1958,
    eric: { options: ["Decca's studio in the Pythian Temple, New York City", "Norman Petty's studio in Clovis, New Mexico", "Sun Studio, Memphis", "Capitol Studios, Hollywood"], correct: 0, explanation: "The Pythian Temple in NYC, on 21 October 1958. Four tracks in 3.5 hours: 'True Love Ways,' 'It Doesn't Matter Anymore,' 'Raining in My Heart,' and 'Moondreams.' Recorded with an 18-piece orchestra conducted by Dick Jacobs. These were his last professional recordings." },
    ruth: { options: ["The Pythian Temple in New York!", "The Pythian Temple in New York!", "Four songs in 3.5 hours — very efficient", "Eric takes longer to choose a sandwich"], correct: 0, explanation: "The Pythian Temple, NYC! Four songs in 3.5 hours. His last ever studio session — and what a session." } },

  // ─── Eric's Personal Disasters ────────────────────────────────
  { id: 474, category: "nsheb", question: "You've locked your keys in your car outside Foyers power station. What should you do?", year: null,
    eric: { options: ["Walk to the power station, phone the AA, and wait in the control room with a cup of tea", "Smash the window — it's the Highlands, nobody will hear", "Hotwire the ignition — you're an engineer, you know how", "Wait for a passing tourist — Foyers is a popular waterfall destination"], correct: 0, explanation: "Walk to the station, phone the AA, and have a cup of tea while you wait. The control room always has tea. It's Foyers — there's nothing else to do. The waterfall tourists won't have a slim jim." },
    ruth: { options: ["Have a cup of tea and call the AA!", "Have a cup of tea and call the AA!", "Eric has done this (hasn't he?)", "Cry (then have tea)"], correct: 0, explanation: "Cup of tea and the AA! The only sensible response to any crisis at a Highland power station." } },
  { id: 475, category: "nsheb", question: "You accidentally set off the fire alarm in a 132kV substation when you were actually trying to set the burglar alarm. What should you do?", year: null,
    eric: { options: ["Phone the fire brigade immediately to cancel, then try to silence the alarm before anyone notices", "Run away and blame the wind", "Set off the burglar alarm as well so at least you've completed the original task", "Hide behind a transformer and hope for the best"], correct: 0, explanation: "Phone the fire brigade IMMEDIATELY — a false alarm at a 132kV substation will scramble a full appliance response. Then silence the alarm, reset everything, and hope your supervisor doesn't find out you confused the fire panel with the intruder panel. Again." },
    ruth: { options: ["Phone the fire brigade to cancel!", "Phone the fire brigade to cancel!", "Eric has DEFINITELY done this", "Blame the cat (there's always a cat)"], correct: 0, explanation: "Call the fire brigade before they arrive with blue lights blazing! Then pray nobody asks how it happened." } },
  { id: 476, category: "family", question: "You've set fire to your hotel room by using a small travel water heater to make a cup of tea. What should you do?", year: null,
    eric: { options: ["Smother the flames with a wet towel, open the window, hide the evidence, and never speak of it again", "Pull the fire alarm and evacuate the hotel", "Phone reception and ask if they have a fire extinguisher you could borrow", "Make the tea anyway — you've come this far"], correct: 0, explanation: "Smother, ventilate, hide, deny. The hotel doesn't need to know. Your wife DEFINITELY doesn't need to know. The scorch mark on the desk? It was there when you arrived. The smell? Someone was smoking in the corridor. The melted travel heater? What travel heater?" },
    ruth: { options: ["Hide the evidence and deny everything!", "Hide the evidence and deny everything!", "Eric has ABSOLUTELY done this", "The tea wasn't even worth it"], correct: 0, explanation: "Hide the evidence! Deny everything! And for heaven's sake, buy a travel kettle like a normal person next time." } },

  // ─── Denmark in the 1980s ─────────────────────────────────────
  { id: 477, category: "denmark", question: "In the 1980s, you could drive from Jutland to Funen across the Little Belt Bridge. But how did you get from Funen to Zealand?", year: null,
    eric: { options: ["By ferry across the Great Belt (Halsskov-Knudshoved)", "By tunnel under the Great Belt", "By the Great Belt Bridge (it wasn't built yet)", "By hovercraft from Odense to Copenhagen"], correct: 0, explanation: "By ferry! The Great Belt was Denmark's great bottleneck. The car ferry crossing (Halsskov-Knudshoved) took about an hour, plus waiting time. Summer queues could stretch for hours. The bridge didn't open until 14 June 1998." },
    ruth: { options: ["By ferry! The bridge didn't exist yet!", "By ferry! The bridge didn't exist yet!", "By swimming (Denmark is very flat)", "Eric took the ferry many times"], correct: 0, explanation: "By ferry! There was no bridge across the Great Belt until 1998. The crossing took about an hour — if you didn't count the queue." } },
  { id: 478, category: "denmark", question: "The Great Belt Fixed Link is 18 km long. When did the road bridge open?", year: 1998,
    eric: { options: ["14 June 1998", "1 June 1997", "1 July 2000", "14 June 1996"], correct: 0, explanation: "14 June 1998 — the railway opened a year earlier (1 June 1997). The last ferry, M/F Arveprins Knud, departed Knudshoved at 10:15 PM that night, just 15 minutes after the bridge opened. End of an era that began on 1 December 1883." },
    ruth: { options: ["14 June 1998!", "14 June 1998!", "A very happy day for Danish drivers", "Eric was on the last ferry (was he?)"], correct: 0, explanation: "14 June 1998! The last ferry sailed 15 minutes after the bridge opened. 115 years of Great Belt ferries came to an end." } },
  { id: 479, category: "denmark", question: "The Great Belt East Bridge has a main span of 1,624 metres. At completion, how did it rank globally?", year: 1998,
    eric: { options: ["Third-longest suspension bridge span in the world", "Longest suspension bridge in Europe but not the world", "Fifth-longest worldwide", "The absolute longest in the world"], correct: 0, explanation: "Third-longest suspension bridge span in the world at completion (now about seventh as newer Asian bridges have overtaken it). The 254-metre pylons are the tallest structures in Denmark." },
    ruth: { options: ["Third-longest in the world!", "Third-longest in the world!", "Very long (and very windy)", "Eric measured it himself (he didn't)"], correct: 0, explanation: "Third-longest suspension bridge span in the world when it opened! The pylons are the tallest things in Denmark." } },
  { id: 480, category: "denmark", question: "What was the name of the very last ferry to cross the Great Belt?", year: 1998,
    eric: { options: ["M/F Arveprins Knud", "M/F Dronning Ingrid", "M/F Kronprins Frederik", "M/F Prins Joachim"], correct: 0, explanation: "M/F Arveprins Knud departed Knudshoved at 10:15 PM on 14 June 1998, just 15 minutes after the Great Belt road bridge opened to regular traffic. The first Great Belt ferries had sailed on 1 December 1883 — 115 years of service." },
    ruth: { options: ["The Arveprins Knud!", "The Arveprins Knud!", "A very emotional last journey", "Eric waved goodbye (maybe)"], correct: 0, explanation: "The Arveprins Knud — the very last ferry across the Great Belt. 115 years of history ended that night." } },
  { id: 481, category: "denmark", question: "How many workers died building the Great Belt Fixed Link?", year: null,
    eric: { options: ["7", "12", "3", "22"], correct: 0, explanation: "7 workers died during construction, with 479 work-related accidents and 53 serious injuries. Around 5,123 workers were employed on the project. The final cost was DKK 36.2 billion — about 29% over the original estimate of DKK 21.4 billion." },
    ruth: { options: ["7 — a dangerous project", "7 — a dangerous project", "Too many", "Eric is glad he wasn't a bridge builder"], correct: 0, explanation: "7 workers lost their lives. The tunnel also flooded during construction, causing major delays." } },
  { id: 482, category: "denmark", question: "The Øresund Bridge opened on 1 July 2000. Why does it become a tunnel on the Danish side?", year: 2000,
    eric: { options: ["Copenhagen Kastrup Airport is nearby — a bridge would interfere with air traffic", "The seabed is too shallow for bridge pylons", "Danish environmental laws prohibited a bridge near the coast", "The Danish navy required unrestricted access to the harbour"], correct: 0, explanation: "Kastrup Airport! A bridge would have interfered with flight paths. So the link goes: bridge (8 km from Sweden) → artificial island Peberholm (4 km) → immersed tunnel (4 km to Amager/Copenhagen). Total: ~16 km." },
    ruth: { options: ["The airport is in the way!", "The airport is in the way!", "Planes and bridges don't mix", "Eric prefers the tunnel bit"], correct: 0, explanation: "Copenhagen Airport! You can't have planes dodging bridge cables. So it dips into a tunnel instead." } },
  { id: 483, category: "denmark", question: "The artificial island in the Øresund link is called Peberholm ('Pepper Island'). Why?", year: 2000,
    eric: { options: ["It's paired with the nearby natural island Saltholm ('Salt Island')", "It was built using volcanic basalt that looks like pepper", "The original survey team ate pepper sandwiches on site", "A competition winner suggested it as a joke and it stuck"], correct: 0, explanation: "Salt and Pepper! The nearby natural island is called Saltholm (Salt Island), so the artificial island was named Peberholm (Pepper Island). Danish humour at its finest." },
    ruth: { options: ["Because there's already a Salt Island nearby!", "Because there's already a Salt Island nearby!", "Salt and Pepper — very Danish", "Eric puts pepper on everything"], correct: 0, explanation: "There's a natural island called Salt Island, so they named the artificial one Pepper Island. Danes love a good pairing." } },
  { id: 484, category: "denmark", question: "Denmark won Euro 92 despite not qualifying. How did they get into the tournament?", year: 1992,
    eric: { options: ["Yugoslavia were disqualified due to UN sanctions — Denmark replaced them with 9 days' notice", "They won a playoff against Scotland", "The original hosts withdrew and Denmark stepped in", "A draw of lots chose them as replacements"], correct: 0, explanation: "Yugoslavia were expelled on 31 May 1992 after UN Resolution 757 imposed sanctions over the Yugoslav Wars. Denmark, as qualifying group runners-up, got the call with just 9 days to prepare. Many players were literally on holiday — 'called from the beach.'" },
    ruth: { options: ["Yugoslavia was disqualified — Denmark got 9 days' notice!", "Yugoslavia was disqualified — Denmark got 9 days' notice!", "The greatest underdog story in football", "Eric cheered (probably)"], correct: 0, explanation: "Yugoslavia were kicked out and Denmark got the call with 9 days to prepare. Players were on the beach. Then they won the whole thing!" } },
  { id: 485, category: "denmark", question: "In the Euro 92 final, John Jensen scored. Why was this remarkable?", year: 1992,
    eric: { options: ["He had scored only 1 goal in 47 internationals before the tournament", "He was a goalkeeper playing outfield due to injuries", "He had broken his foot three weeks earlier", "He was the oldest player ever to score in a European Championship final"], correct: 0, explanation: "Jensen had scored just 1 goal in 47 internationals. At Arsenal, fans chanted 'Shoot!' and wore T-shirts saying 'I'll be there when Jensen scores.' He finally scored his only Arsenal goal on his 98th appearance — against QPR on 31 December 1994." },
    ruth: { options: ["He almost never scored!", "He almost never scored!", "Arsenal fans waited years for another one", "Eric scores more often (he doesn't play football)"], correct: 0, explanation: "One goal in 47 caps! At Arsenal it took 98 appearances to score. When he did, the place went absolutely mental." } },
  { id: 486, category: "denmark", question: "Kim Vilfort scored the second goal in the Euro 92 final. What made his story heartbreaking?", year: 1992,
    eric: { options: ["His 7-year-old daughter Line was dying of leukaemia — she pleaded with him to go back and play", "He had been told that morning his mother had died", "He had torn his cruciate ligament in the semi-final and played through the pain", "His brother was fighting in the Yugoslav war that disqualified their opponents"], correct: 0, explanation: "Vilfort's 7-year-old daughter Line was dying of leukaemia. He left training camp to be at her bedside, missed the France match, but Line begged him to go back and play. He scored the goal that sealed the championship. She died a few weeks after the final." },
    ruth: { options: ["His daughter was dying and begged him to play!", "His daughter was dying and begged him to play!", "The saddest and most beautiful football story", "Eric needs a tissue (so do we all)"], correct: 0, explanation: "His little girl Line was dying of leukaemia but told him to go back and play. He scored the winning goal. She died weeks later." } },
  { id: 487, category: "denmark", question: "Until 1988, how many TV channels did Denmark have?", year: 1988,
    eric: { options: ["One — DR (Danmarks Radio)", "Two — DR1 and DR2", "Three — DR, TV2, and TV3", "None — Danish people only listened to radio"], correct: 0, explanation: "Just one! DR (Danmarks Radio) had a complete monopoly on national television. TV2 launched on 1 October 1988 from Odense and by 1991 had overtaken DR in ratings. Funded by both advertising and the TV licence." },
    ruth: { options: ["Just ONE channel!", "Just ONE channel!", "Imagine only one channel (Eric can)", "No wonder they invented hygge"], correct: 0, explanation: "One channel! DR had a total monopoly. TV2 didn't arrive until October 1988. Imagine — one channel for an entire country!" } },
  { id: 488, category: "denmark", question: "On 2 June 1992, Denmark voted on the Maastricht Treaty. What happened?", year: 1992,
    eric: { options: ["Denmark voted NO — 50.7% against, causing a political earthquake across Europe", "Denmark voted YES by a narrow margin of 51.3%", "Denmark abstained and asked for more time", "The referendum was cancelled due to the Euro 92 tournament"], correct: 0, explanation: "Denmark voted NO — 50.7% against, turnout 83.1%. This was a political earthquake: the treaty required unanimous ratification. The Edinburgh Agreement gave Denmark four opt-outs (EMU/euro, defence, justice, citizenship). A second referendum on 18 May 1993 passed 56.8% YES." },
    ruth: { options: ["They voted NO!", "They voted NO!", "Very awkward for everyone", "Eric voted... oh wait, he's not Danish"], correct: 0, explanation: "Denmark voted NO! The whole of Europe panicked. They got four opt-outs and voted again — YES the second time." } },
  { id: 489, category: "denmark", question: "Greenland joined the EEC with Denmark in 1973 but later did something unprecedented. What?", year: 1985,
    eric: { options: ["Left the EEC on 1 February 1985 — the first territory ever to leave", "Declared independence from Denmark", "Joined NATO separately from Denmark", "Refused to adopt the Common Fisheries Policy and was expelled"], correct: 0, explanation: "Greenland voted to leave on 23 February 1982 (53% for withdrawal) and formally left on 1 February 1985 — the first territory ever to leave the European Communities. The main issue was the Common Fisheries Policy, which Greenlanders saw as a threat to their fishing industry." },
    ruth: { options: ["Left the EEC! The first ever to do so!", "Left the EEC! The first ever to do so!", "Brexit before Brexit (sort of)", "Eric didn't know this (now he does)"], correct: 0, explanation: "Greenland left the EEC in 1985 — the first territory ever to leave! Over fishing rights. Sound familiar?" } },
  { id: 490, category: "denmark", question: "The Dannebrog (Danish flag) holds a Guinness World Record. For what?", year: null,
    eric: { options: ["Oldest continuously used national flag in the world (since at least 1625)", "Largest flag ever flown from a ship", "Most reproduced design in history", "Most colours changed (it hasn't — always red and white)"], correct: 0, explanation: "The oldest continuously used national flag, in use since at least 1625. According to legend, it fell from the sky on 15 June 1219 during a battle in Estonia, led by King Valdemar the Victorious. The white cross on red became the template for all Scandinavian flags." },
    ruth: { options: ["The oldest national flag still in use!", "The oldest national flag still in use!", "It allegedly fell from the sky", "Eric has a Danish flag (does he?)"], correct: 0, explanation: "The oldest national flag in the world! Legend says it literally fell from the sky during a battle in 1219." } },
  { id: 491, category: "denmark", question: "Copenhagen's Little Mermaid statue has been repeatedly vandalised. Name one incident.", year: 1913,
    eric: { options: ["Head sawn off in 1964 (and again in 1998); right arm sawn off in 1984; blown off her rock with explosives in 2003", "Painted pink in 1975 and blue in 1990", "Stolen entirely in 1972 and found in a warehouse", "Replaced with a replica in 1988 after acid damage"], correct: 0, explanation: "She's had a rough life: head sawn off (1964 and 1998), arm sawn off (1984), blown off her rock with explosives (2003), painted multiple times. Unveiled 23 August 1913, sculpted by Edvard Eriksen. She's barely 4 feet tall and yet Copenhagen's most visited attraction." },
    ruth: { options: ["They keep cutting her head off!", "They keep cutting her head off!", "Leave the poor mermaid alone!", "Eric would never vandalise a statue"], correct: 0, explanation: "Decapitated twice, arm sawn off, blown up with explosives, painted multiple times. The most attacked statue in the world." } },
  { id: 492, category: "denmark", question: "LEGO was founded in 1932 in Billund. What does the name mean?", year: 1932,
    eric: { options: ["'Leg godt' = 'play well' in Danish", "'Lego' = 'I put together' in Latin", "'Legetøj godt' = 'good toys' in Danish", "'Lege og gøre' = 'play and do' in Danish"], correct: 0, explanation: "'Leg godt' — Danish for 'play well.' Founded by Ole Kirk Christiansen, who originally made wooden toys (yo-yos and pull-along animals). He bought Denmark's first plastic injection moulding machine in 1947 — it cost more than twice the previous year's profits. First plastic brick: 1949." },
    ruth: { options: ["'Play well' in Danish!", "'Play well' in Danish!", "The best toy ever invented", "Eric still plays with LEGO (does he?)"], correct: 0, explanation: "'Leg godt' = play well! The company nearly bankrupted itself buying a plastic moulding machine. Best investment ever." } },
  { id: 493, category: "denmark", question: "Tivoli Gardens opened in 1843. What did its founder say to convince the king?", year: 1843,
    eric: { options: ["'When the people are amusing themselves, they do not think about politics'", "'A garden of pleasure will make Copenhagen the envy of Europe'", "'The people need bread and circuses, Your Majesty'", "'A happy populace is a loyal populace'"], correct: 0, explanation: "Georg Carstensen told King Christian VIII: 'When the people are amusing themselves, they do not think about politics.' It opened 15 August 1843 — the second-oldest operating amusement park in the world (the oldest, Dyrehavsbakken, is also in Denmark)." },
    ruth: { options: ["'People who have fun don't think about politics'!", "'People who have fun don't think about politics'!", "Very wise advice", "Eric thinks about politics AND has fun"], correct: 0, explanation: "Keep the people happy and they won't rebel! Tivoli has been keeping Danes happy since 1843." } },
  { id: 494, category: "denmark", question: "In October 1943, how many of Denmark's ~8,000 Jews were rescued from the Nazis?", year: 1943,
    eric: { options: ["Over 7,200 — ferried to neutral Sweden by fishermen and the resistance", "About 4,000 — half escaped, half were deported", "About 1,000 — most were captured despite warnings", "All 8,000 — not a single Danish Jew was captured"], correct: 0, explanation: "Over 7,200 Jews plus 686 non-Jewish relatives were ferried to Sweden by fishermen after German diplomat Georg Ferdinand Duckwitz leaked the deportation plans. Fewer than 500 were captured (sent to Theresienstadt, most survived). Only ~102 Danish Jews died in the Holocaust — the lowest toll in occupied Europe." },
    ruth: { options: ["Over 7,200! Ferried to Sweden!", "Over 7,200! Ferried to Sweden!", "One of the greatest rescue stories ever", "Incredibly brave fishermen"], correct: 0, explanation: "Over 7,200 — almost all of Denmark's Jews! Fishermen ferried them to Sweden. An extraordinary act of collective courage." } },
  { id: 495, category: "denmark", question: "What is Janteloven (the Law of Jante)?", year: 1933,
    eric: { options: ["A set of 10 rules saying 'you are not special' — Danish tall poppy syndrome, coined by Aksel Sandemose in 1933", "The Danish constitution's guarantee of religious freedom", "A Viking-era code of honour still observed in Jutland", "The law that established the Danish welfare state in 1933"], correct: 0, explanation: "Coined by Danish-Norwegian author Aksel Sandemose in his 1933 novel 'A Fugitive Crosses His Tracks.' Ten rules, all variations on 'You shall not believe you are anyone special.' Rule 1: 'You shall not believe that you are somebody!' It describes the cultural pressure against standing out." },
    ruth: { options: ["'You are not special' — Danish modesty rules!", "'You are not special' — Danish modesty rules!", "Very un-Eric (he knows he's special)", "The opposite of self-help books"], correct: 0, explanation: "Ten rules that all say the same thing: don't think you're special. Very Danish. Very different from Instagram." } },
  { id: 496, category: "denmark", question: "What is the correct order for eating smørrebrød (Danish open sandwiches)?", year: null,
    eric: { options: ["Fish first (starting with herring), then meat, then cheese", "Cheese first, then meat, then fish", "Any order you like — there are no rules", "Meat first, then fish, then a sweet one for dessert"], correct: 0, explanation: "Fish first (always starting with herring — pickled, spiced, or curried), then meat, then cheese. Always on buttered rugbrød (dense dark rye bread). Always with knife and fork. Never mix proteins on the same slice. These rules are taken very seriously." },
    ruth: { options: ["Fish, then meat, then cheese!", "Fish, then meat, then cheese!", "Very strict sandwich rules", "Eric eats everything at once (chaos)"], correct: 0, explanation: "Fish first, then meat, then cheese! Start with herring. Use a knife and fork. Danes do NOT mess about with sandwich order." } },
  { id: 497, category: "denmark", question: "Danish pastries are called 'wienerbrød' in Denmark. What does this mean and why?", year: null,
    eric: { options: ["'Viennese bread' — Austrian bakers introduced the technique during a Danish bakers' strike in 1850", "'Winner's bread' — a prize at the Copenhagen baking fair", "'Winter bread' — traditionally eaten only in cold months", "'Wine bread' — originally made with wine yeast"], correct: 0, explanation: "'Wienerbrød' means 'Viennese bread.' When Danish bakers went on strike in 1850, Austrian bakers were hired as replacements, bringing their Viennese lamination technique. The Danes modified the recipe with more egg and fat, creating what the world calls 'Danish pastries' — but the Danes call 'Viennese bread.'" },
    ruth: { options: ["'Viennese bread' — from Austrian bakers!", "'Viennese bread' — from Austrian bakers!", "So 'Danish pastries' aren't actually Danish", "Eric doesn't care where they're from — they're delicious"], correct: 0, explanation: "Austrian bakers came during a strike and brought the recipe! So 'Danish pastries' are actually Viennese. Mind blown." } },
  { id: 498, category: "denmark", question: "Carlsberg's laboratory made two major scientific contributions. What were they?", year: null,
    eric: { options: ["Invented the pH scale and the method for purifying brewer's yeast", "Discovered penicillin and invented pasteurisation", "Developed the Haber process and synthetic insulin", "Created nylon and discovered vitamin C"], correct: 0, explanation: "The Carlsberg Laboratory invented the pH scale (by S.P.L. Sørensen, 1909) and developed the method for purifying a single strain of brewer's yeast (by Emil Christian Hansen, 1883). Carlsberg also funded the Ny Carlsberg Glyptotek museum and contributed to the Little Mermaid statue." },
    ruth: { options: ["The pH scale and yeast purification!", "The pH scale and yeast purification!", "Science AND beer — the perfect combination", "Eric appreciates both contributions"], correct: 0, explanation: "The pH scale and pure brewer's yeast! Carlsberg: probably the most scientifically important brewery in the world." } },
  { id: 499, category: "denmark", question: "Victor Borge's one-man show 'Comedy in Music' set a record on Broadway. What was it?", year: 1953,
    eric: { options: ["849 performances — the longest-running solo show in Broadway history", "The most expensive ticket price for a comedy show", "The first show to be broadcast live on television", "The youngest performer to headline Broadway"], correct: 0, explanation: "849 performances from 1953 to 1956 — a Broadway record for a one-man show. Born Børge Rosenbaum in Copenhagen, he gave his first piano recital aged 8 and had a scholarship to the Royal Danish Academy at 9. Known as 'The Clown Prince of Denmark.' He fled the Nazi invasion in 1940." },
    ruth: { options: ["849 performances! A Broadway record!", "849 performances! A Broadway record!", "The Clown Prince of Denmark", "Eric's favourite comedian (is he?)"], correct: 0, explanation: "849 solo performances on Broadway! 'The Clown Prince of Denmark' — a comedian, pianist, and refugee from the Nazis." } },
  { id: 500, category: "denmark", question: "How many named islands does Denmark have, and approximately how many are inhabited?", year: null,
    eric: { options: ["About 443 named islands, of which 70-78 are inhabited", "About 200 named islands, of which 30 are inhabited", "About 1,000 named islands, of which 150 are inhabited", "About 50 named islands, of which 45 are inhabited"], correct: 0, explanation: "Denmark has approximately 1,419 islands (above 100 m²), of which about 443 are named and around 70-78 are inhabited. The biggest are Zealand (7,031 km², home to Copenhagen), Funen (3,099 km², home to Odense), and Bornholm." },
    ruth: { options: ["443 named, about 70-78 inhabited!", "443 named, about 70-78 inhabited!", "A LOT of islands", "Eric has visited... some of them"], correct: 0, explanation: "443 named islands but only about 70-78 have anyone living on them! Denmark is more water than it looks." } },
  { id: 501, category: "denmark", question: "The TV series 'The Bridge' (Broen/Bron) begins with a body on the Øresund Bridge. What's unusual about it?", year: 2011,
    eric: { options: ["It's cut in half — the upper half Swedish, the lower half Danish, placed precisely on the border", "It's frozen solid in a block of ice from the Baltic", "It's wearing the uniform of both Swedish and Danish police", "It's positioned exactly where the bridge becomes the tunnel"], correct: 0, explanation: "The body is cut in half and placed precisely on the national border in the middle of the bridge — the upper half is a Swedish politician, the lower half is a Danish prostitute. This forces Swedish detective Saga Norén and Danish detective Martin Rohde to work together across jurisdictions." },
    ruth: { options: ["Cut in half — half Swedish, half Danish!", "Cut in half — half Swedish, half Danish!", "Very Nordic noir", "Eric prefers Midsomer Murders"], correct: 0, explanation: "Half a Swedish politician, half a Danish prostitute, placed right on the border! The ultimate jurisdictional nightmare." } },
  { id: 502, category: "denmark", question: "PM Poul Schlüter resigned in January 1993 over a scandal. What was it?", year: 1993,
    eric: { options: ["The Tamil Case — illegally delaying family reunification for Tamil refugees", "A tax evasion scandal involving offshore accounts", "Selling military secrets to the Soviet Union", "Embezzling funds from the Great Belt bridge project"], correct: 0, explanation: "The Tamil Case (Tamilsagen): Schlüter's government had illegally delayed family reunification claims from Tamil refugees from Sri Lanka. A judicial inquiry on 14 January 1993 found he had misled Parliament. He resigned, replaced by Social Democrat Poul Nyrup Rasmussen." },
    ruth: { options: ["The Tamil refugee scandal!", "The Tamil refugee scandal!", "He misled Parliament (always a bad idea)", "Eric stays out of politics (wise)"], correct: 0, explanation: "The Tamil Case — his government illegally blocked Tamil refugee families from reuniting. He'd been PM since 1982." } },
  { id: 503, category: "denmark", question: "Hans Christian Andersen was born in Odense on Funen. How many fairy tales did he write?", year: 1805,
    eric: { options: ["156 stories across 9 volumes", "87 stories across 5 volumes", "212 stories across 12 volumes", "42 stories in a single collection"], correct: 0, explanation: "156 stories across 9 volumes, translated into over 125 languages. Born 2 April 1805 to a cobbler, he left Odense at 14 to seek his fortune at the Royal Theatre in Copenhagen. First tales published 1835. The Ugly Duckling, The Little Mermaid, The Emperor's New Clothes — all his." },
    ruth: { options: ["156 fairy tales!", "156 fairy tales!", "The Ugly Duckling was his best (maybe)", "Eric's favourite is The Emperor's New Clothes"], correct: 0, explanation: "156 fairy tales! A cobbler's son from Odense who became the world's greatest storyteller." } },
  { id: 504, category: "denmark", question: "Niels Bohr won the Nobel Prize in Physics in 1922. What was his son Aage famous for?", year: 1922,
    eric: { options: ["Also winning the Nobel Prize in Physics (1975)", "Becoming Prime Minister of Denmark", "Designing the Great Belt Bridge", "Captaining Denmark's national football team"], correct: 0, explanation: "Aage Bohr also won the Nobel Prize in Physics — in 1975 — making them one of only a handful of parent-child Nobel laureate pairs. Niels Bohr developed the Bohr model of the atom (1913) and founded the Institute for Theoretical Physics in Copenhagen (now the Niels Bohr Institute)." },
    ruth: { options: ["He ALSO won the Nobel Prize in Physics!", "He ALSO won the Nobel Prize in Physics!", "It runs in the family", "Eric's family has no Nobel Prizes (yet)"], correct: 0, explanation: "Father AND son both won the Nobel Prize in Physics! The Bohrs — Denmark's most brilliant family." } },
  { id: 505, category: "denmark", question: "Peter Schmeichel signed for Manchester United in 1991. How much did he cost?", year: 1991,
    eric: { options: ["£505,000 — Alex Ferguson called it 'the bargain of the century'", "£2.5 million — expensive for a goalkeeper at the time", "£150,000 — a world record low for a Danish international", "Free transfer — he was out of contract at Brøndby"], correct: 0, explanation: "£505,000 from Brøndby — Ferguson called it 'the bargain of the century.' Schmeichel won 5 Premier League titles, 3 FA Cups, and captained United to the 1999 Champions League to complete the Treble. He earned 129 Denmark caps and won Euro 92." },
    ruth: { options: ["Just £505,000!", "Just £505,000!", "The bargain of the century!", "Eric thinks that's still a lot of money"], correct: 0, explanation: "Five hundred and five thousand pounds! For one of the greatest goalkeepers who ever lived. Absolute steal." } },
  { id: 506, category: "denmark", question: "What was hygge added to the Oxford English Dictionary, and what does it actually mean?", year: 2017,
    eric: { options: ["June 2017 — 'intentional intimacy' or convivial cosiness, not just 'cozy'", "January 2015 — 'the feeling of wearing thick socks by a fire'", "March 2019 — 'Danish contentment through simplicity'", "It hasn't been added — it's untranslatable"], correct: 0, explanation: "Added in June 2017. Better defined as 'intentional intimacy' than simply 'cozy.' Amazon sells over 900 books about hygge; Instagram has over 3 million #hygge posts. It's become Denmark's biggest cultural export after LEGO." },
    ruth: { options: ["June 2017 — it means 'intentional cosiness'!", "June 2017 — it means 'intentional cosiness'!", "Eric is very hygge (sometimes)", "There are 900 books about it (too many)"], correct: 0, explanation: "June 2017! It means something deeper than 'cozy' — intentional warmth, togetherness, and cosiness. Very Danish." } },

  // ─── Foster & Allen ───────────────────────────────────────────
  { id: 507, category: "foster-allen", question: "Foster & Allen's biggest hit, 'A Bunch of Thyme,' is actually a 17th-century folk song. What is it about?", year: 1982,
    eric: { options: ["A maiden losing her virginity to a sailor (thyme = virginity, rue = regret)", "A herb garden on the west coast of Ireland", "A wedding bouquet thrown from a castle tower", "A farmer's wife gathering cooking herbs"], correct: 0, explanation: "It's a bawdy allegory about a young maiden losing her virtue to a sailor. Thyme symbolises virginity, rue symbolises regret. This 17th-century song about defloration launched a 50-year career of gentle accordion music for the over-60s. The contrast is magnificent." },
    ruth: { options: ["It's about losing your virginity!", "It's about losing your virginity!", "Not what you'd expect from Foster & Allen", "Eric's favourite song (it definitely isn't)"], correct: 0, explanation: "A 17th-century song about a maiden losing her virtue! And your granny had it on in the car the whole way to Inverness." } },
  { id: 508, category: "foster-allen", question: "How many albums have Foster & Allen released?", year: null,
    eric: { options: ["Over 52", "About 25", "About 15", "About 38"], correct: 0, explanation: "Over 52 albums. That is not a typo. Fifty-two. Including at least 5 Christmas albums, a 'Greatest Hits,' a '100 Golden Greats,' and their 2025 golden anniversary album '50 at 50.' They have sold over 20 million records worldwide." },
    ruth: { options: ["Over FIFTY-TWO albums!", "Over FIFTY-TWO albums!", "That's a LOT of accordion", "Eric owns them all (he absolutely does not)"], correct: 0, explanation: "Fifty-two albums! Including '100 Golden Greats' and 'Songs We Love to Sing.' The accordion never stops." } },
  { id: 509, category: "foster-allen", question: "On Top of the Pops in 1982, what outfits did Foster & Allen wear, and who inspired the choice?", year: 1982,
    eric: { options: ["Green medieval costumes inspired by the film Barry Lyndon, on the advice of Jimmy Magee", "Matching Aran sweaters, on the advice of Val Doonican", "Black tie and tails, on the advice of their record label", "Tweed suits with flat caps, on the advice of their mothers"], correct: 0, explanation: "Green medieval costumes inspired by Stanley Kubrick's Barry Lyndon, suggested by Irish sports commentator Jimmy Magee. On the same episode: Adam and the Ants, Dexys Midnight Runners, and The Boomtown Rats. The producers asked Mick to put down the accordion and play guitar instead. He refused." },
    ruth: { options: ["Green medieval costumes! Like Barry Lyndon!", "Green medieval costumes! Like Barry Lyndon!", "On the same show as Adam Ant", "Eric would have worn the same (he wouldn't)"], correct: 0, explanation: "Green medieval outfits alongside punk and new wave bands! The Top of the Pops producers begged Mick to ditch the accordion. He said no." } },
  { id: 510, category: "foster-allen", question: "Mick Foster learned to play the accordion from whom?", year: null,
    eric: { options: ["A Mercy Order nun called Sr Agnes Murray", "His grandfather, a travelling musician", "A correspondence course from Reader's Digest", "Nobody — he is entirely self-taught"], correct: 0, explanation: "A Mercy Order nun called Sr Agnes Murray in Ballymahon, County Westmeath. He went on to win the All-Ireland Piano Accordion Championship three times (1964, 1968, 1970). His heroes are Scottish accordion legends Jimmy Shand and Will Starr." },
    ruth: { options: ["A NUN!", "A NUN!", "The most Irish origin story ever", "Eric was taught by nobody (it shows)"], correct: 0, explanation: "A nun taught him accordion! Sister Agnes Murray. From there to 52 albums and 20 million sales. Sr Agnes has a lot to answer for." } },
  { id: 511, category: "foster-allen", question: "In 2011, how much did the Irish Revenue Commissioners seek from Foster & Allen for unpaid taxes?", year: 2011,
    eric: { options: ["Approximately €6.3 million", "Approximately €63,000", "Approximately €630,000", "Approximately €6,300"], correct: 0, explanation: "€6.3 million — Tony Allen owed €3.389m and Mick Foster €2.947m, covering unpaid taxes from 1986-2002. They blamed their accountant, saying the money 'never actually got to Revenue' and 'the whole thing was a forgery.' The judge called Mick's appeal 'a hopeless application.' They kept touring." },
    ruth: { options: ["€6.3 MILLION!", "€6.3 MILLION!", "That's a LOT of accordion concerts", "Eric pays his taxes (he'd better)"], correct: 0, explanation: "Six point three million euros! Even the taxman can't stop Foster & Allen. They just kept touring." } },
  { id: 512, category: "foster-allen", question: "Which of these is a genuine Foster & Allen song title?", year: null,
    eric: { options: ["'Give the Woman in the Bed More Porter'", "'Pass the Whiskey to the Donkey'", "'Three Pints and a Bag of Crisps'", "'The Nun's Accordion Blues'"], correct: 0, explanation: "'Give the Woman in the Bed More Porter' — a traditional Irish drinking song and a genuine part of their repertoire. Other real titles include 'The Oldest Swinger in Town,' 'Delaney's Donkey,' 'Seven Old Ladies,' and 'Ninety Years Old.' You couldn't make this up." },
    ruth: { options: ["'Give the Woman in the Bed More Porter'!", "'Give the Woman in the Bed More Porter'!", "A real song! Really!", "Eric has requested this at a wedding (surely not)"], correct: 0, explanation: "It's real! Along with 'The Oldest Swinger in Town' and 'Delaney's Donkey.' Foster & Allen's songbook is a national treasure." } },
  { id: 513, category: "foster-allen", question: "Foster & Allen covered Johnny Cash's 'Ring of Fire.' What is the recommended minimum safe distance from this performance?", year: null,
    eric: { options: ["There is no safe distance — the accordion travels through walls", "500 metres (the recognised blast radius of an accordion)", "3 miles (the range of a powerful PA system in a village hall)", "Emigration to a different continent is advisable"], correct: 0, explanation: "There is no safe distance. The accordion, like radiation, passes through solid matter. Johnny Cash's original was a masterpiece of restraint and menace. Foster & Allen's version has an accordion. These two facts cannot be reconciled." },
    ruth: { options: ["No safe distance — the accordion goes through walls!", "No safe distance — the accordion goes through walls!", "Poor Johnny Cash", "Eric hides when it comes on (probably)"], correct: 0, explanation: "The accordion penetrates all known building materials. There is no escape. Johnny Cash would have had strong feelings about this cover." } },
  { id: 514, category: "foster-allen", question: "Mick Foster released a solo album. What is its title — or its threat?", year: null,
    eric: { options: ["'Accordion World'", "'Squeeze Me Tender'", "'The Bellows of Destiny'", "'One Man, One Accordion, One Vision'"], correct: 0, explanation: "'Accordion World.' Whether this is an album title or a warning about Foster & Allen's long-term ambitions for global domination remains unclear. His accordion heroes are Jimmy Shand and Will Starr — both Scottish. He claims his accordion 'would probably be the last thing he would be prepared to give up.'" },
    ruth: { options: ["'Accordion World'!", "'Accordion World'!", "Is that a promise or a threat?", "Eric lives in accordion world (involuntarily)"], correct: 0, explanation: "'Accordion World' — an album title that doubles as a dystopian warning. A world of accordion. Everywhere. Always." } },
  { id: 515, category: "foster-allen", question: "Foster & Allen received the Gradam na hEigse Award in 2023. Who were previous recipients of this honour?", year: 2023,
    eric: { options: ["Former President Mary McAleese and former Taoiseach Brian Cowen", "Bono, Bob Geldof, and Enya", "Daniel O'Donnell and Val Doonican", "The Pope, during a state visit to Ireland"], correct: 0, explanation: "Former President Mary McAleese and former Taoiseach Brian Cowen. The award was given at Fleadh Cheoil na hÉireann in Mullingar. They wore white suits. Foster & Allen: on the same honour roll as a head of state and a prime minister. For accordion music." },
    ruth: { options: ["A former President and a former Taoiseach!", "A former President and a former Taoiseach!", "Very distinguished company for an accordion duo", "Eric has not received this award"], correct: 0, explanation: "The same award as a former President of Ireland! Foster & Allen in white suits, accepting an honour usually reserved for heads of state." } },
  { id: 516, category: "foster-allen", question: "'A Bunch of Thyme' reached what chart position in the UK?", year: 1982,
    eric: { options: ["No. 18", "No. 1", "No. 42", "No. 7"], correct: 0, explanation: "No. 18 on the UK Singles Chart in 1982, spending 11 weeks on the chart. It had already hit No. 1 in Ireland in 1978. 'Maggie' followed in 1983, reaching No. 27 in the UK and No. 1 in New Zealand. Combined sales: over 20 million records. All from a song about a maiden and a sailor." },
    ruth: { options: ["Number 18!", "Number 18!", "Higher than you'd expect", "Eric bought a copy (did he?)"], correct: 0, explanation: "Number 18! And 'Maggie' got to number 1 in New Zealand. Foster & Allen: bigger in New Zealand than you'd think." } },
  { id: 517, category: "foster-allen", question: "How many times a year do Foster & Allen tour the UK, and since when?", year: 1983,
    eric: { options: ["Twice a year, every year since 1983 — over 80 UK tours", "Once a year since 1990", "Four times a year since 1978", "Sporadically — about once every three years"], correct: 0, explanation: "Twice a year, every year since 1983 — that's over 80 UK tours. Plus 20+ tours each of Australia and New Zealand. In 2025, aged 78 and 73, they're doing their '50 Years of Hits' tour. The accordion shows no signs of fatigue." },
    ruth: { options: ["TWICE a year since 1983!", "TWICE a year since 1983!", "Over 80 UK tours! Unstoppable!", "Eric has attended zero of them (smart man)"], correct: 0, explanation: "Over 80 UK tours! Twice a year for 40+ years. They are the Terminator of easy listening. They cannot be stopped." } },
  { id: 518, category: "foster-allen", question: "Your Foster & Allen CD is trapped in a disconnected CD-ROM drive. What should you do?", year: null,
    eric: { options: ["Leave it there — this is the safest place for a Foster & Allen CD", "Insert a straightened paperclip into the emergency eject hole", "Reconnect the drive, but only while wearing ear protection", "Dispose of the entire drive at a hazardous waste facility"], correct: 0, explanation: "Leave it there. A Foster & Allen CD trapped in a disconnected drive cannot harm anyone. It is contained. It is safe. Reconnecting the drive risks accidental playback, which could clear a room in under 4 seconds. The paperclip method should only be used by trained professionals in full PPE." },
    ruth: { options: ["Leave it there! It's safer that way!", "Leave it there! It's safer that way!", "Eric learned this the hard way", "The CD is at peace now"], correct: 0, explanation: "LEAVE IT. A contained Foster & Allen CD is a safe Foster & Allen CD. Do NOT attempt rescue. Think of the children." } },
  { id: 519, category: "foster-allen", question: "Tony Allen is the youngest of how many children?", year: 1952,
    eric: { options: ["Nine", "Five", "Seven", "Twelve"], correct: 0, explanation: "The youngest of nine children, born 24 February 1952 in Mount Temple, County Westmeath. His father Patrick played fiddle, his mother sang. He now lives in Lurgan, County Armagh, having married backing singer Trionagh Moore-Allen — who has also worked with Daniel O'Donnell and Van Morrison." },
    ruth: { options: ["Nine children!", "Nine children!", "A very musical family", "Eric is one of... fewer than nine"], correct: 0, explanation: "Nine! His wife has also worked with Daniel O'Donnell AND Van Morrison. The range is extraordinary." } },
  { id: 520, category: "foster-allen", question: "What do Foster & Allen, Daniel O'Donnell, and Val Doonican have in common — besides making your grandparents happy?", year: null,
    eric: { options: ["All are Irish easy-listening artists whose audiences consist primarily of people over 65", "All won the Eurovision Song Contest", "All appeared on Strictly Come Dancing", "All recorded duets with Cliff Richard"], correct: 0, explanation: "The Holy Trinity of Irish easy listening. Daniel O'Donnell is Donegal's finest, Val Doonican was the king of the rocking chair and novelty jumper, and Foster & Allen are the accordion-and-vocals duo who've sold 20 million records to people who find Daniel too edgy." },
    ruth: { options: ["Irish easy listening for the over-65s!", "Irish easy listening for the over-65s!", "Granny's favourite musicians", "Eric draws the line at Val Doonican"], correct: 0, explanation: "The three kings of Irish easy listening! If your granny had a record player, at least two of them were on it." } },
  { id: 521, category: "foster-allen", question: "What is the main long-term health risk of prolonged Foster & Allen exposure?", year: null,
    eric: { options: ["Involuntary foot-tapping, gradual loss of musical standards, and an inexplicable urge to buy cardigans", "Temporary hearing loss from accordion frequencies", "An allergy to all other forms of music", "Stockholm syndrome — eventually you start requesting their songs"], correct: 0, explanation: "Stage 1: involuntary foot-tapping. Stage 2: humming 'A Bunch of Thyme' in the shower. Stage 3: buying a Foster & Allen CD 'for your mother.' Stage 4: attending a Foster & Allen concert 'ironically.' Stage 5: owning all 52 albums and defending them on social media. There is no Stage 6. There is no cure." },
    ruth: { options: ["Involuntary foot-tapping and cardigan-buying!", "Involuntary foot-tapping and cardigan-buying!", "Eric is at Stage 4 (he denies this)", "There is no cure (correct)"], correct: 0, explanation: "It starts with foot-tapping and ends with owning 52 albums. The progression is gradual, irreversible, and accompanied by accordion music at all times." } },

  // ─── Grid Transformers ────────────────────────────────────────
  { id: 522, category: "transformers", question: "Bonar Long of Dundee made power transformers. But what kind of company originally owned them?", year: 1938,
    eric: { options: ["A jute textile company (Low & Bonar)", "A whisky distillery", "A fishing fleet operator", "A shipbuilding firm"], correct: 0, explanation: "Low & Bonar — a jute manufacturer! George Bonar, MD of the textile firm, invited electrical engineer Tom Long to set up a transformer company inside a jute factory in Dundee in 1936. They ended up as one of the top ten transformer manufacturers in the world, eventually absorbed by ABB." },
    ruth: { options: ["A jute company! Making cloth, not transformers!", "A jute company! Making cloth, not transformers!", "From jute to joules", "Eric knows his Dundee industry"], correct: 0, explanation: "A jute company! A textile manufacturer's managing director started a transformer factory in his jute mill. Only in Dundee." } },
  { id: 523, category: "transformers", question: "A transformer on a 50 Hz supply hums. At what frequency?", year: null,
    eric: { options: ["100 Hz (double the supply frequency)", "50 Hz (the supply frequency)", "150 Hz (triple the supply frequency)", "60 Hz (the American standard)"], correct: 0, explanation: "100 Hz — double the supply frequency. The hum is caused by magnetostriction: the core laminations physically change dimensions as the magnetic field alternates. The dimensional change occurs in both directions of magnetisation, so the core expands and contracts twice per cycle." },
    ruth: { options: ["100 Hz — double the supply frequency!", "100 Hz — double the supply frequency!", "That annoying hum explained", "Eric can identify transformers by their hum (probably)"], correct: 0, explanation: "100 Hz! The core vibrates twice per cycle. That's why transformers hum — magnetostriction. Eric knows this in his sleep." } },
  { id: 524, category: "transformers", question: "What is a Buchholz relay, and who invented it?", year: 1921,
    eric: { options: ["A gas-operated transformer protection device, invented by Max Buchholz in 1921", "A voltage regulator relay invented by Heinrich Buchholz in 1935", "An overcurrent relay invented by Karl Buchholz in 1910", "A temperature monitoring relay invented by Fritz Buchholz in 1945"], correct: 0, explanation: "Max Buchholz (1875-1956), a German engineer at Preussische Elektrizitäts-A.G. in Kassel, invented it in 1921. It sits in the pipe between the main tank and conservator. Slow gas accumulation = alarm (incipient fault). Rapid oil surge = trip (serious fault like arcing). Only works on transformers with a conservator tank." },
    ruth: { options: ["A gas protection device by Max Buchholz, 1921!", "A gas protection device by Max Buchholz, 1921!", "It detects transformer trouble", "Eric has tripped a few in his time"], correct: 0, explanation: "Max Buchholz invented it in 1921! It detects gas in the transformer — the first sign something's going wrong inside." } },
  { id: 525, category: "transformers", question: "In dissolved gas analysis (DGA), which fault gas indicates high-energy arcing inside a transformer?", year: null,
    eric: { options: ["Acetylene (C₂H₂) — requires temperatures above 700°C", "Hydrogen (H₂) — the first gas to appear", "Ethane (C₂H₆) — moderate overheating", "Carbon monoxide (CO) — cellulose degradation"], correct: 0, explanation: "Acetylene (C₂H₂) — the most significant fault gas, requiring temperatures above 700°C to form. If you find acetylene in a transformer oil sample, you have a serious problem. Hydrogen indicates partial discharge, ethylene indicates hot spots, and CO/CO₂ indicate paper insulation breakdown." },
    ruth: { options: ["Acetylene! Very bad news!", "Acetylene! Very bad news!", "Eric knows his fault gases", "If you see acetylene, phone Eric immediately"], correct: 0, explanation: "Acetylene! It means something inside is arcing at over 700°C. That's the gas that makes transformer engineers lose sleep." } },
  { id: 526, category: "transformers", question: "What do the letters ONAN mean in transformer cooling classification?", year: null,
    eric: { options: ["Oil Natural, Air Natural (passive convection for both)", "Oil Nitrogen, Air Nitrogen (inert gas cooling)", "Optimised Natural Air Nozzle", "Oil Non-pressurised, Air Non-forced"], correct: 0, explanation: "Oil Natural, Air Natural — the simplest cooling arrangement. Oil circulates by natural convection (hot oil rises, cooled oil falls), and air cools the radiators naturally (no fans). Suitable up to ~5 MVA. Then ONAF (fans), OFAF (oil pumps + fans), ODAF (directed oil + fans) for larger units." },
    ruth: { options: ["Oil Natural, Air Natural!", "Oil Natural, Air Natural!", "Passive cooling — no pumps, no fans", "Eric can recite all four types (can he?)"], correct: 0, explanation: "Oil Natural, Air Natural! The transformer just sits there quietly cooling itself. Very Eric — minimum fuss." } },
  { id: 527, category: "transformers", question: "What colour does a traditional silica gel breather change to when it's saturated with moisture?", year: null,
    eric: { options: ["Blue to pink (cobalt chloride indicator)", "White to yellow", "Green to red", "Clear to brown"], correct: 0, explanation: "Blue to pink — the cobalt chloride indicator changes colour as it absorbs moisture. Modern breathers use orange silica gel (cobalt-free, as cobalt chloride is carcinogenic) which changes from orange to green/white. The silica gel can be regenerated by heating to ~120°C." },
    ruth: { options: ["Blue to pink!", "Blue to pink!", "Like a mood ring for transformers", "Eric checks these regularly (or should)"], correct: 0, explanation: "Blue to pink! When the blue turns pink, it's time to replace or regenerate the silica gel. Transformer first aid." } },
  { id: 528, category: "transformers", question: "Bruce Peebles of Edinburgh built the world's largest version of what specialist transformer for the National Grid?", year: null,
    eric: { options: ["A 400kV quadrature booster", "A 400kV auto-transformer", "A 275kV earthing transformer", "A 132kV rectifier transformer"], correct: 0, explanation: "The world's largest 400kV quadrature booster — a specialist transformer that controls power flow on parallel circuits by injecting a voltage at 90° to the line voltage. Bruce Peebles (founded 1866, Edinburgh) had 3,000 employees at peak. Their East Pilton factory was destroyed by fire on 12 April 1999." },
    ruth: { options: ["A 400kV quadrature booster!", "A 400kV quadrature booster!", "Eric knows what that is (do you?)", "Made in Edinburgh! Scottish engineering at its best"], correct: 0, explanation: "A quadrature booster! It controls power flow by injecting voltage at 90 degrees. Built in Edinburgh by Bruce Peebles." } },
  { id: 529, category: "transformers", question: "The PCB-based transformer fluid 'Askarel' was widely used from the 1950s. When was PCB use in UK electrical equipment banned?", year: 1987,
    eric: { options: ["Production banned 1987; all equipment containing >0.005% PCBs must be removed by 31 December 2025", "Production banned 1975; all equipment removed by 2000", "Production banned 1995; all equipment removed by 2010", "Production banned 2001; all equipment removed by 2020"], correct: 0, explanation: "PCB production was banned in the UK in 1987 (used from the 1950s to 1982). The Stockholm Convention on Persistent Organic Pollutants (2001) imposed a global ban. Equipment containing >0.005% PCBs and volumes >0.05 dm³ must be removed by 31 December 2025. PCBs are carcinogenic and virtually indestructible in the environment." },
    ruth: { options: ["Banned in 1987!", "Banned in 1987!", "Very toxic stuff", "Eric has dealt with plenty of these"], correct: 0, explanation: "Banned in 1987! PCBs don't break down in nature and cause cancer. All remaining PCB equipment must go by end of 2025." } },
  { id: 530, category: "transformers", question: "In East Africa, stolen transformer oil is used for what shocking purpose?", year: null,
    eric: { options: ["Frying chips — it's cheaper than cooking oil and lasts longer", "Waterproofing roofs on shanty towns", "Fuel for diesel generators", "Lubricating bicycle chains"], correct: 0, explanation: "Frying chips! Thieves drain transformer oil and sell it to food vendors in Kenya, Uganda, Zimbabwe, Zambia, and Tanzania because it's cheaper than cooking oil and lasts longer. It contains toxic PCBs. This is a documented, ongoing public health crisis with investigations and prosecutions." },
    ruth: { options: ["Frying chips! With toxic transformer oil!", "Frying chips! With toxic transformer oil!", "DO NOT try this at home", "Eric prefers his chips in vegetable oil"], correct: 0, explanation: "Frying chips! Stolen transformer oil used for cooking. It contains cancer-causing PCBs. Absolutely horrifying." } },
  { id: 531, category: "transformers", question: "Metropolitan-Vickers started as a subsidiary of which American company, before being forcibly 'made British' during WWI?", year: 1919,
    eric: { options: ["Westinghouse (became British Westinghouse 1899, then Metropolitan-Vickers 1919)", "General Electric (became British GE, then Metrovick)", "Edison Electric (became British Edison, then Metrovick)", "Singer Manufacturing (diversified into electrical engineering)"], correct: 0, explanation: "George Westinghouse established British Westinghouse at Trafford Park, Manchester in 1899. During WWI, American ownership hindered government contracts, so Metropolitan Carriage Wagon Company bought a controlling interest. It became Metropolitan-Vickers on 8 September 1919. The 64-acre Trafford Park site was one of the biggest heavy engineering facilities in the world." },
    ruth: { options: ["Westinghouse! Made British during the war!", "Westinghouse! Made British during the war!", "American company turned Manchester landmark", "Eric worked with Metrovick equipment"], correct: 0, explanation: "Westinghouse! They had to remove American ownership during WWI so they could get government contracts. Very pragmatic." } },
  { id: 532, category: "transformers", question: "What is the vector group Dyn11, and why is it the most common distribution transformer connection in Europe?", year: null,
    eric: { options: ["Delta primary, star secondary with neutral, 30° displacement — the delta traps triplen harmonics", "Double-wound, star-neutral primary, 11° phase shift — for reactive power compensation", "Delta-star, no neutral, 11% voltage boost — for long rural feeders", "Dual-yoke, neutral-linked, 11-tap — for voltage regulation"], correct: 0, explanation: "D = Delta HV winding, y = star LV winding, n = neutral brought out, 11 = LV lags HV by 330° (clock notation). The delta primary provides a circulating path for third-harmonic currents, preventing them from entering the power system. Essential for keeping waveforms sinusoidal on 400V/230V supplies." },
    ruth: { options: ["Delta primary, star secondary, 30° shift!", "Delta primary, star secondary, 30° shift!", "Eric knows this like the back of his hand", "The delta catches bad harmonics (like a net)"], correct: 0, explanation: "Dyn11! The delta winding catches triple-frequency harmonics and stops them escaping. Every distribution transformer in Europe uses it." } },
  { id: 533, category: "transformers", question: "How much did a typical supergrid transformer (SGT) weigh, and how was it transported?", year: null,
    eric: { options: ["174-300 tonnes (~30 elephants) — by specialist heavy haulage with police escort, sometimes by river barge", "50-80 tonnes — by standard articulated lorry", "500-600 tonnes — only by rail on dedicated wagons", "20-30 tonnes — by helicopter in extreme cases"], correct: 0, explanation: "174-300 tonnes — described as 'about 30 African elephants.' Transport required specialist heavy haulage firms (Allelys, Collett, Mammoet), police escorts, and detailed route planning. Historically transported on special Weltrol (well trolley) railway wagons — drop-centred bogie wagons designed for tall loads." },
    ruth: { options: ["Up to 300 tonnes! Thirty elephants!", "Up to 300 tonnes! Thirty elephants!", "Very difficult to move", "Eric has never moved one himself (thankfully)"], correct: 0, explanation: "Up to 300 tonnes — the weight of 30 elephants! Moved by specialist haulage with police escort. Not something you pop in the back of a van." } },
  { id: 534, category: "transformers", question: "Arnold Weinstock took over GEC in 1963, then absorbed AEI (1967) and English Electric (1968). What was he nicknamed?", year: 1963,
    eric: { options: ["Britain's largest 'unemployer' — he cut the workforce from 250,000 to 170,000", "The Transformer King", "The Man Who Ate British Industry", "Lord Voltage"], correct: 0, explanation: "Britain's largest 'unemployer' — by 1974 he'd cut the combined workforce by 25% (from over 250,000 to 170,000). He closed the Wythenshawe transformer factory (1971), Hersham (1971), and concentrated production at Stafford. Turnover rose from £100m in 1960 to £11bn at his retirement in 1996." },
    ruth: { options: ["Britain's largest 'unemployer'!", "Britain's largest 'unemployer'!", "He closed a LOT of factories", "Eric is glad Weinstock didn't run NSHEB"], correct: 0, explanation: "Britain's largest 'unemployer'! He merged three giant companies and then fired a quarter of the staff." } },
  { id: 535, category: "transformers", question: "The Stafford transformer factory has been making transformers continuously since 1903. How many company names has it had?", year: 1903,
    eric: { options: ["Six: Siemens → English Electric → GEC → GEC Alsthom → Alstom → GE Vernova", "Three: English Electric → GEC → Alstom", "Four: BTH → GEC → Alstom → ABB", "Two: English Electric → GEC (still GEC today)"], correct: 0, explanation: "Six names in 120+ years: Siemens Brothers (1903), English Electric (1919), GEC (1968), GEC Alsthom (1989), Alstom (1998), GE/GE Vernova (2015/2024). The site has survived two world wars, six ownership changes, and Arnold Weinstock. Still making transformers today." },
    ruth: { options: ["Six different company names!", "Six different company names!", "Same factory, six name badges", "Eric has outlasted fewer employers"], correct: 0, explanation: "Six names for one factory! From Siemens in 1903 to GE Vernova in 2024. The building doesn't care what the sign says." } },
  { id: 536, category: "transformers", question: "The 2003 London blackout affected 476,000 customers. What caused it?", year: 2003,
    eric: { options: ["A failed transformer at Hurst substation (oil leak spotted weeks before but not repaired), compounded by a wrongly-installed 1A relay at Wimbledon instead of 5A", "A lightning strike on a 400kV pylon at Crystal Palace", "A cyber attack on the National Grid control centre", "A ship striking a cable under the Thames"], correct: 0, explanation: "A transformer at Hurst substation in Bexley had an oil leak spotted weeks before — it was topped up but never repaired. To make things worse, a protection relay at Wimbledon substation had been installed as 1 ampere instead of 5 ampere in 2001 — it tripped at five times lower than the correct current. Power lost at 18:20, restored at 18:57." },
    ruth: { options: ["A leaking transformer and a wrong relay!", "A leaking transformer and a wrong relay!", "Two failures at once — very unlucky", "Eric would have spotted the oil leak (definitely)"], correct: 0, explanation: "A leaky transformer nobody fixed and a relay installed at the wrong rating. Two small failures, 476,000 homes in the dark." } },
  { id: 537, category: "transformers", question: "Ferranti won the largest share of transformer orders when the National Grid was built. What did they persuade the planners to change?", year: 1926,
    eric: { options: ["To use three-phase transformers instead of single-phase", "To use 132kV instead of the originally planned 66kV", "To use oil cooling instead of air cooling", "To use copper windings instead of aluminium"], correct: 0, explanation: "Ferranti persuaded the Central Electricity Board commissioners to specify three-phase transformers instead of the originally planned single-phase units. This won them the largest single share of orders for the 132kV National Grid. Sebastian Ziani de Ferranti — an Italian-born engineer from Liverpool — changed the shape of British power engineering." },
    ruth: { options: ["Three-phase transformers instead of single-phase!", "Three-phase transformers instead of single-phase!", "A bold sales pitch that worked", "Eric appreciates good salesmanship"], correct: 0, explanation: "Ferranti talked the grid planners into three-phase transformers — and won the biggest share of orders. Brilliant salesmanship." } },
  { id: 538, category: "transformers", question: "When was the UK 275kV supergrid conceived, and why?", year: 1950,
    eric: { options: ["1950 — engineers calculated it was cheaper to transmit electricity than transport coal", "1945 — post-war reconstruction required a stronger grid", "1960 — the 132kV system collapsed under nuclear power station output", "1938 — wartime planning for a resilient power network"], correct: 0, explanation: "1950 — British Electricity Authority engineers calculated it was cheaper to transmit electricity at high voltage over long distances than to transport coal to local power stations. The 275kV supergrid (more than double the existing 132kV) was built over a 12-year programme in the 1950s, with lines designed for future upgrade to 400kV." },
    ruth: { options: ["1950 — cheaper to move electricity than coal!", "1950 — cheaper to move electricity than coal!", "A very sensible calculation", "Eric approves of this engineering logic"], correct: 0, explanation: "Cheaper to move electricity than coal! So they built the 275kV supergrid. Simple economics, world-class engineering." } },
  { id: 539, category: "transformers", question: "Bruce Peebles' Edinburgh factory was destroyed by fire on 12 April 1999. What started the blaze?", year: 1999,
    eric: { options: ["A capacitor bank failure outside the compound — burning oil entered trenches and reached the main building", "A lightning strike on a transformer under test", "An electrical fault in the office block", "Arson by a disgruntled employee"], correct: 0, explanation: "A capacitor bank outside the compound ruptured, caught fire, and burning oil flowed through trenches into the main transformer shop where a large unit was under test. The blaze could be seen from miles away. Bruce Peebles had been in Edinburgh since 1866 — 133 years of transformer manufacturing ended that night." },
    ruth: { options: ["A capacitor bank explosion — burning oil reached the factory!", "A capacitor bank explosion — burning oil reached the factory!", "133 years of history up in smoke", "Eric would have been devastated"], correct: 0, explanation: "Burning oil from a ruptured capacitor bank. It flowed through cable trenches right into the main building. 133 years gone." } },
  { id: 540, category: "transformers", question: "What is the typical design life of a grid transformer, and how long do well-maintained ones actually last?", year: null,
    eric: { options: ["Design life ~30 years, but well-maintained units commonly exceed 40; UK research shows median thermal life of 88 years", "Design life ~10 years, actual life ~20 years", "Design life ~50 years, actual life ~50 years (they never exceed design life)", "Design life ~100 years, actual life ~60 years (they always fail early)"], correct: 0, explanation: "IEC design life is ~30 years, but well-maintained transformers commonly exceed 40. UK research shows a median thermal life expectancy of 88 years for transmission transformers! The limiting factor is cellulose paper insulation, which degrades over time — accelerated by heat, moisture, and oxygen." },
    ruth: { options: ["Designed for 30 years but can last 88!", "Designed for 30 years but can last 88!", "Like Eric — built to last", "Well-maintained things go on forever"], correct: 0, explanation: "Designed for 30 years but UK research says 88 years median life! They just keep going. Like Eric." } },
  { id: 541, category: "transformers", question: "The first 400kV line in the UK was energised in 1965. Where did it run?", year: 1965,
    eric: { options: ["Sundon (Bedfordshire) to West Burton (Nottinghamshire) — 150 miles", "Dungeness to London — 80 miles", "Drax to Leeds — 30 miles", "Dounreay to Edinburgh — 200 miles"], correct: 0, explanation: "Sundon to West Burton — 150 miles — the first 400kV line in the UK. The original 132kV grid had been built in 1927-33, the 275kV supergrid in the 1950s, and by 1970 about 1,300 miles of 400kV line were in operation. The 275kV lines had been built with conductors rated for future 400kV operation." },
    ruth: { options: ["Sundon to West Burton — 150 miles!", "Sundon to West Burton — 150 miles!", "The first 400kV line in Britain", "Eric knows every pylon on that route (maybe)"], correct: 0, explanation: "Sundon to West Burton! 150 miles of 400kV — the start of the modern supergrid. Built on 275kV towers already designed for the upgrade." } },

  // ─── Circuit Breakers ─────────────────────────────────────────
  { id: 542, category: "circuit-breakers", question: "SF6 gas is used in modern HV circuit breakers. What is its global warming potential compared to CO2?", year: null,
    eric: { options: ["23,500 times worse than CO2 (and persists for ~3,200 years)", "100 times worse than CO2", "1,000 times worse than CO2", "About the same as methane (~25 times CO2)"], correct: 0, explanation: "SF6 (sulphur hexafluoride) has a global warming potential of 23,500 times CO2 and an atmospheric lifetime of approximately 3,200 years. It's the most potent greenhouse gas known to science. The EU F-gas Regulation is phasing it out — new SF6 switchgear will be banned from 2035 in most applications." },
    ruth: { options: ["23,500 times worse!", "23,500 times worse!", "The worst greenhouse gas known", "Eric has worked with a LOT of SF6"], correct: 0, explanation: "23,500 times worse than CO2! And it lasts 3,200 years. The most potent greenhouse gas known. Being phased out." } },
  { id: 543, category: "circuit-breakers", question: "What toxic decomposition products form when SF6 arcs inside a circuit breaker?", year: null,
    eric: { options: ["Sulphur tetrafluoride (SF4), thionyl fluoride (SOF2), and hydrofluoric acid (HF)", "Carbon monoxide and sulphur dioxide only", "Nitrogen oxides and ozone", "None — SF6 is completely inert even when arced"], correct: 0, explanation: "When SF6 arcs, it decomposes into toxic byproducts including SF4, SOF2, SO2F2, and in the presence of moisture, hydrofluoric acid (HF). HF is extremely dangerous — it penetrates skin and attacks bone. This is why SF6 breakers that have operated on fault must be handled with PPE and the gas must be filtered before re-use." },
    ruth: { options: ["Nasty stuff including hydrofluoric acid!", "Nasty stuff including hydrofluoric acid!", "Very dangerous — wear your PPE", "Eric always wears his PPE (doesn't he?)"], correct: 0, explanation: "Hydrofluoric acid among other horrors! This is why you NEVER open an SF6 breaker that's operated on fault without proper safety precautions." } },
  { id: 544, category: "circuit-breakers", question: "Why is an SF6 density monitor used rather than a simple pressure gauge?", year: null,
    eric: { options: ["Pressure varies with temperature, but density remains constant — a density monitor compensates for temperature", "Density monitors are cheaper than pressure gauges", "Pressure gauges cannot withstand the SF6 gas pressure", "Density monitors also detect moisture contamination"], correct: 0, explanation: "SF6 gas pressure varies with ambient temperature (like any gas), so a simple pressure gauge would give false readings on hot or cold days. A density monitor uses a temperature-compensated reference chamber to indicate whether the actual mass of gas has changed — i.e., whether there's a genuine leak rather than just thermal expansion." },
    ruth: { options: ["Pressure changes with temperature, density doesn't!", "Pressure changes with temperature, density doesn't!", "Very clever engineering", "Eric has checked a few of these"], correct: 0, explanation: "Temperature makes pressure go up and down, but the amount of gas (density) only changes if there's a leak. Smart thinking!" } },
  { id: 545, category: "circuit-breakers", question: "In bulk oil circuit breakers, how much oil might a single 132kV breaker contain?", year: null,
    eric: { options: ["Several thousand litres (up to ~10,000 litres for large units)", "About 50 litres", "About 500 litres", "They used grease, not oil"], correct: 0, explanation: "Bulk oil breakers were enormous — a 132kV unit could contain several thousand litres of transformer oil. The oil served as both the arc-quenching medium and the insulating medium. The fire and explosion risk was significant, which is why minimum-oil and then SF6 breakers replaced them." },
    ruth: { options: ["Several THOUSAND litres!", "Several THOUSAND litres!", "That's a LOT of oil", "Eric has drained a few (messy job)"], correct: 0, explanation: "Thousands of litres of oil in a single breaker! And if it caught fire... well, that's why they don't use them anymore." } },
  { id: 546, category: "circuit-breakers", question: "Air blast circuit breakers used compressed air to extinguish the arc. What was the typical operating pressure?", year: null,
    eric: { options: ["20-30 bar (approximately 300-450 psi)", "5-10 bar", "50-80 bar", "1-2 bar (just above atmospheric)"], correct: 0, explanation: "Typically 20-30 bar (some designs up to 35 bar). The compressed air was blasted across the arc at tremendous speed to cool and deionise it. They required massive compressor plants and air receivers. They were also phenomenally LOUD when they operated — you could hear an air blast breaker trip from hundreds of metres away." },
    ruth: { options: ["20-30 bar — incredibly loud!", "20-30 bar — incredibly loud!", "You could hear them a mile away", "Eric has been deafened by one (nearly)"], correct: 0, explanation: "20-30 bar of compressed air blasting through! The noise when they operated was absolutely deafening." } },
  { id: 547, category: "circuit-breakers", question: "What is the fundamental difference between a circuit breaker and an isolator (disconnector)?", year: null,
    eric: { options: ["A breaker can interrupt fault current under load; an isolator can only be operated off-load (no current flowing)", "An isolator is bigger than a circuit breaker", "A circuit breaker uses oil; an isolator uses air", "There is no difference — they are the same device"], correct: 0, explanation: "An isolator (disconnector) provides a visible break for safety isolation but CANNOT break load current — it has no arc-quenching mechanism. Opening an isolator under load would create a sustained arc that could cause an explosion. A circuit breaker can safely interrupt fault currents of 40kA or more." },
    ruth: { options: ["Breakers break current; isolators only work off-load!", "Breakers break current; isolators only work off-load!", "NEVER open an isolator under load", "Eric knows this rule very well"], correct: 0, explanation: "Never, ever open an isolator under load! It can't extinguish the arc. That's what circuit breakers are for." } },
  { id: 548, category: "circuit-breakers", question: "Reyrolle of Hebburn, Tyneside claimed to be the world's largest manufacturer of what?", year: null,
    eric: { options: ["Switchgear (by the 1960s, with 12,000 employees)", "Transformers", "Overhead line conductors", "Underground cables"], correct: 0, explanation: "Switchgear! Founded by Alphonse Reyrolle (a Frenchman!) in London in 1886, moved to Hebburn on Tyneside in 1901. By the 1960s they employed 12,000 people and claimed to be the world's largest switchgear manufacturer. Henry Clothier, who joined in 1906, was their genius designer." },
    ruth: { options: ["Switchgear! 12,000 employees!", "Switchgear! 12,000 employees!", "Founded by a Frenchman on Tyneside", "Eric knows his Reyrolle gear"], correct: 0, explanation: "Switchgear! 12,000 people on Tyneside making circuit breakers and switchgear for the world. Founded by a Frenchman." } },
  { id: 549, category: "circuit-breakers", question: "What happens if you open-circuit the secondary of a current transformer (CT) while the primary is energised?", year: null,
    eric: { options: ["Dangerously high voltage appears across the secondary — potentially thousands of volts, risking electrocution and CT destruction", "Nothing — the CT simply stops measuring", "The primary circuit trips automatically", "The CT core saturates harmlessly"], correct: 0, explanation: "EXTREMELY DANGEROUS. With no secondary burden, the CT core cannot oppose the primary flux. The core saturates violently, generating massive voltage spikes across the open secondary — potentially thousands of volts. This can kill personnel and destroy the CT's insulation. CT secondaries must NEVER be open-circuited — always short them before disconnecting." },
    ruth: { options: ["Dangerously high voltage! Potentially lethal!", "Dangerously high voltage! Potentially lethal!", "NEVER open-circuit a CT secondary", "Eric has lectured trainees about this"], correct: 0, explanation: "Potentially lethal voltages! This is one of the most dangerous things you can do in a substation. NEVER open-circuit a live CT." } },
  { id: 550, category: "circuit-breakers", question: "What does a '40kA fault level' mean at a busbar?", year: null,
    eric: { options: ["A short circuit at that busbar would produce a fault current of 40,000 amperes", "The busbar can carry a continuous current of 40,000 amperes", "The circuit breakers have 40,000 operations before overhaul", "The busbar voltage would drop to 40kV during a fault"], correct: 0, explanation: "A 40kA fault level means a bolted short circuit at that point would produce a prospective fault current of 40,000 amperes. All switchgear at that location must be rated to make and break at least 40kA. The 'make' rating is typically 2.5× the 'break' rating because the first peak of fault current contains a DC offset component." },
    ruth: { options: ["40,000 amps of fault current!", "40,000 amps of fault current!", "A LOT of electricity", "Eric has calculated many fault levels"], correct: 0, explanation: "Forty thousand amps! That's the current that would flow during a short circuit. Everything at that busbar must handle it." } },
  { id: 551, category: "circuit-breakers", question: "What is auto-reclose, and why does it work on overhead lines?", year: null,
    eric: { options: ["The breaker trips, waits a 'dead time' (0.3-3 seconds), then recloses — because most OHL faults are transient (the arc extinguishes in the dead time)", "The breaker automatically closes when voltage returns to normal", "A backup breaker closes if the primary breaker fails to trip", "The breaker recloses to test whether the fault is still present by re-energising at reduced voltage"], correct: 0, explanation: "Most overhead line faults (lightning flashover, wind-blown debris, bird strikes) are transient — the arc will extinguish itself if the line is de-energised briefly. Auto-reclose trips the breaker, waits a 'dead time' of typically 0.3-3 seconds, then recloses. About 80-90% of faults clear successfully on the first reclose attempt." },
    ruth: { options: ["Trip, wait, reclose — most faults clear themselves!", "Trip, wait, reclose — most faults clear themselves!", "Very clever — saves a lot of callouts", "Eric appreciates fewer 3 AM callouts"], correct: 0, explanation: "The breaker trips, waits a moment, then tries again. 80-90% of overhead line faults are temporary, so it usually works first time!" } },
  { id: 552, category: "circuit-breakers", question: "The transition from oil to SF6 circuit breakers at 132kV/275kV largely happened in which decades?", year: null,
    eric: { options: ["1970s-1990s (SF6 breakers became dominant by the 1980s)", "1950s-1960s", "1990s-2000s", "2000s-2010s"], correct: 0, explanation: "SF6 breakers were developed from the 1950s but became commercially dominant from the 1970s onward. By the 1980s, virtually all new 132kV and 275kV installations used SF6. The advantages were overwhelming: compact, no fire risk, minimal maintenance, excellent arc-quenching. The environmental cost only became apparent much later." },
    ruth: { options: ["1970s-1990s!", "1970s-1990s!", "SF6 replaced oil (and the noise of air blast)", "Eric lived through the transition"], correct: 0, explanation: "Oil breakers gave way to SF6 from the 1970s onward. Smaller, safer, quieter — but 23,500 times worse for the climate. Oops." } },
  { id: 553, category: "circuit-breakers", question: "What does the circuit breaker 'make' rating represent, and why is it higher than the 'break' rating?", year: null,
    eric: { options: ["The peak current it can close onto — ~2.5× the break rating due to the asymmetric DC offset in the first half-cycle of fault current", "The maximum voltage it can withstand when open", "The number of operations before maintenance is needed", "The make rating is actually lower than the break rating"], correct: 0, explanation: "When a breaker closes onto a fault, the first peak of current contains a DC offset component (due to the moment of closure relative to the voltage waveform). This makes the first peak ~2.5× the RMS symmetrical fault current. A breaker rated 40kA break must typically have a make rating of 100kA peak." },
    ruth: { options: ["The peak current when closing — 2.5× the break rating!", "The peak current when closing — 2.5× the break rating!", "The first moment is the worst", "Eric can explain the DC offset (in detail)"], correct: 0, explanation: "The first instant of a fault has a massive DC offset, making the peak current 2.5 times higher. The breaker must survive that!" } },

  // ─── Protection Relays ────────────────────────────────────────
  { id: 554, category: "protection", question: "The classic GEC CDG relay used an induction disc. What made it operate?", year: null,
    eric: { options: ["Two electromagnets create a torque on an aluminium disc — the disc rotates against a spring until it closes a contact", "A bimetallic strip bends with heat from current flow", "A piezoelectric crystal vibrates at the system frequency", "A mercury tube tilts when current exceeds the threshold"], correct: 0, explanation: "The induction disc relay uses two electromagnetic poles that create a rotating magnetic field in a thin aluminium disc (similar to an induction motor). The torque drives the disc against a restraining spring. When current exceeds the setting, the disc rotates until a moving contact bridges a fixed contact. The satisfying 'clunk' is unmistakable." },
    ruth: { options: ["A spinning aluminium disc closes a contact!", "A spinning aluminium disc closes a contact!", "It goes 'clunk' when it operates", "Eric loves the sound of a CDG operating"], correct: 0, explanation: "A spinning aluminium disc! When fault current flows, the disc rotates until it 'clunks' the contact closed. Beautiful electromechanical engineering." } },
  { id: 555, category: "protection", question: "In IDMT overcurrent protection, what do the letters IDMT stand for?", year: null,
    eric: { options: ["Inverse Definite Minimum Time", "Instantaneous Direct Maximum Trip", "Internal Differential Measurement Technique", "Integrated Digital Monitoring Terminal"], correct: 0, explanation: "Inverse Definite Minimum Time — the operating time is inversely proportional to current (higher current = faster trip), but there's a definite minimum time below which it cannot operate regardless of how high the current goes. The three standard IEC curves are Standard Inverse (SI), Very Inverse (VI), and Extremely Inverse (EI)." },
    ruth: { options: ["Inverse Definite Minimum Time!", "Inverse Definite Minimum Time!", "More current = faster trip", "Eric can draw the curves from memory"], correct: 0, explanation: "Inverse Definite Minimum Time! The bigger the fault, the faster it trips — but there's always a minimum time. Clever." } },
  { id: 556, category: "protection", question: "In distance protection, why is Zone 1 typically set to 80% of the protected line, NOT 100%?", year: null,
    eric: { options: ["To allow for CT/VT measurement errors and line impedance calculation tolerances — setting at 100% risks tripping for faults on the next line section", "Because the last 20% of a line is always stronger", "To save energy by not monitoring the full length", "Zone 1 is always set to 100% — this is a myth"], correct: 0, explanation: "CT/VT measurement errors (typically ±5%), line impedance calculation tolerances, and relay measuring errors mean the relay cannot distinguish precisely between a fault at 98% of 'this line' and 2% of 'the next line.' Setting Zone 1 at 80% provides a safety margin to prevent overreach into the adjacent protection zone. Zone 2 (typically 120%) provides time-delayed backup for the remaining 20%." },
    ruth: { options: ["Measurement errors — it might trip for a fault on the NEXT line!", "Measurement errors — it might trip for a fault on the NEXT line!", "Better safe than sorry", "Eric understands impedance (most people don't)"], correct: 0, explanation: "If you set it to 100%, small measurement errors could make it trip for a fault on the NEXT line — cutting off the wrong thing!" } },
  { id: 557, category: "protection", question: "What is the typical grading margin between successive overcurrent relays, and why?", year: null,
    eric: { options: ["0.3-0.5 seconds — to allow for breaker operating time, relay overshoot, and timing errors", "5-10 seconds — to give operators time to respond", "0.01-0.05 seconds — modern relays are very fast", "No margin is needed — relays coordinate automatically"], correct: 0, explanation: "0.3-0.5 seconds. This accounts for: upstream breaker operating time (~0.1s), relay overshoot (the disc doesn't stop instantly), CT errors, and a safety margin. If grading is too tight, both the local AND upstream relay may trip ('sympathetic tripping'), disconnecting far more of the network than necessary." },
    ruth: { options: ["0.3-0.5 seconds!", "0.3-0.5 seconds!", "Too tight and the wrong breaker trips", "Eric has graded many relay settings"], correct: 0, explanation: "About a third to half a second between each relay. Too tight and they all trip together — blackout city." } },
  { id: 558, category: "protection", question: "What does a 5P20 current transformer (CT) accuracy class mean?", year: null,
    eric: { options: ["5% accuracy at 20 times rated current — a protection CT that stays accurate up to 20× In", "5 volts output at 20 amps", "Class 5 insulation with 20kV withstand", "5 cores, each rated for 20 amperes"], correct: 0, explanation: "5P20: '5' = ±5% composite error permitted, 'P' = Protection class, '20' = accuracy limit factor (accurate up to 20 times rated current). A metering CT might be class 0.5 (±0.5% accuracy) but would saturate above 2-5× rated current. Protection CTs need to stay accurate at high fault currents — hence the high ALF of 20 or 30." },
    ruth: { options: ["5% accuracy up to 20 times rated current!", "5% accuracy up to 20 times rated current!", "Metering CTs are more accurate but saturate sooner", "Eric knows his CT classes"], correct: 0, explanation: "5% accuracy up to 20 times normal current! Protection CTs must stay accurate during faults — metering CTs only need to be accurate at normal load." } },
  { id: 559, category: "protection", question: "Why are capacitor voltage transformers (CVTs) used at 275kV instead of electromagnetic VTs?", year: null,
    eric: { options: ["A wound electromagnetic VT at 275kV would be enormous and prohibitively expensive — a CVT uses a capacitor divider and is far cheaper", "CVTs are more accurate than electromagnetic VTs", "Electromagnetic VTs cannot withstand 275kV insulation levels", "CVTs provide a better frequency response for protection relays"], correct: 0, explanation: "An electromagnetic VT for 275kV would need insulation rated for 275kV on the primary winding — making it physically enormous and very expensive. A CVT uses a capacitor voltage divider to step down to an intermediate voltage, then a small electromagnetic transformer to provide the final output. Much cheaper and more practical at EHV." },
    ruth: { options: ["A normal VT at 275kV would be too big and expensive!", "A normal VT at 275kV would be too big and expensive!", "Capacitors are much more practical", "Eric appreciates a cost-effective solution"], correct: 0, explanation: "A normal VT at 275kV would be the size of a house! A capacitor divider does the same job much more cheaply." } },
  { id: 560, category: "protection", question: "What is Merz-Price protection?", year: null,
    eric: { options: ["Circulating current differential protection — compares current entering and leaving a protected zone; any difference indicates an internal fault", "A type of distance protection developed by Merz & Price in the 1920s", "An earth fault relay designed for coal mines", "A frequency-based protection scheme for generators"], correct: 0, explanation: "Circulating current differential protection, developed by Charles Merz and Buchanan Price around 1904. CTs at each end of the protected zone produce currents that circulate in a pilot wire loop. If current in equals current out, no relay operates. If there's an internal fault, the difference current flows through the relay. Used for transformer, busbar, and generator protection." },
    ruth: { options: ["Compares current in vs current out — any difference means trouble!", "Compares current in vs current out — any difference means trouble!", "Invented around 1904!", "Eric could explain this in his sleep"], correct: 0, explanation: "Current in must equal current out. If it doesn't, there's a fault inside. Simple, elegant, and over 120 years old." } },
  { id: 561, category: "protection", question: "What does Solkor stand for (GEC's pilot wire protection system)?", year: null,
    eric: { options: ["Solid state Korndorfer (after the Korndorfer starting method it was originally designed to protect)", "Solar-Korona protection relay", "Solvent-resistant Korrekt-acting relay", "It's not an acronym — it's the surname of the inventor"], correct: 0, explanation: "SOLid state KORndorfer — named after the Korndorfer auto-transformer motor starting method that the original relay was designed to protect. Solkor uses pilot wires between the two ends of a protected circuit, comparing voltages derived from the CT currents. Solkor R and Solkor Rf were widely used for feeder protection across the UK grid." },
    ruth: { options: ["Solid state Korndorfer!", "Solid state Korndorfer!", "A very unusual name for a relay", "Eric has commissioned many Solkor schemes"], correct: 0, explanation: "Solid state Korndorfer! Named after the motor starting method it was originally designed to protect. Only engineers know this." } },
  { id: 562, category: "protection", question: "What are the three standard IEC IDMT overcurrent curve types?", year: null,
    eric: { options: ["Standard Inverse (SI), Very Inverse (VI), and Extremely Inverse (EI)", "Fast, Medium, and Slow", "Linear, Quadratic, and Exponential", "Type A, Type B, and Type C"], correct: 0, explanation: "Standard Inverse (SI), Very Inverse (VI), and Extremely Inverse (EI) — defined in IEC 60255 (formerly BS 142). SI is the most common. VI gives faster operation at high fault levels relative to the pickup. EI is the steepest curve, used where fault current varies significantly with fault position (e.g., long distribution feeders)." },
    ruth: { options: ["Standard Inverse, Very Inverse, Extremely Inverse!", "Standard Inverse, Very Inverse, Extremely Inverse!", "Three flavours of trip curve", "Eric prefers the Extremely Inverse (sounds dramatic)"], correct: 0, explanation: "SI, VI, and EI! Three curves that determine how quickly a relay trips based on how much fault current is flowing. More current = faster trip." } },
  { id: 563, category: "protection", question: "In distance protection, what does Zone 3 provide?", year: null,
    eric: { options: ["Remote backup — if Zone 1 and Zone 2 of the adjacent line fail to clear a fault, Zone 3 provides a last-resort trip with a longer time delay", "Instantaneous tripping for close-up faults", "Protection against power swings", "Earth fault protection for the local busbar"], correct: 0, explanation: "Zone 3 is remote backup protection. It reaches beyond Zone 2 into the next line section (and sometimes the one after). It operates with the longest time delay (typically 1-2 seconds). It's the safety net — if the primary protection at the far end fails, Zone 3 will eventually trip the local breaker. Setting Zone 3 too sensitively has caused cascading blackouts (e.g., the 2003 Italian blackout)." },
    ruth: { options: ["Remote backup — the last line of defence!", "Remote backup — the last line of defence!", "If everything else fails, Zone 3 trips", "Eric sets Zone 3 very carefully"], correct: 0, explanation: "The last line of defence! If the protection at the far end fails, Zone 3 eventually trips your breaker instead. Set it wrong and you black out the country." } },
  { id: 564, category: "protection", question: "What is 'sympathetic tripping' and why is it bad?", year: null,
    eric: { options: ["When a relay upstream trips unnecessarily because grading margins are too tight — disconnecting far more network than necessary", "When two relays operate at exactly the same instant by coincidence", "When a relay trips due to a transient on an adjacent circuit", "When an operator accidentally trips a breaker while sympathising with a colleague"], correct: 0, explanation: "Sympathetic tripping occurs when protection grading is too tight — the upstream relay operates before the downstream relay has finished clearing the fault. Result: both breakers trip, disconnecting a much larger area than necessary. This is why grading studies are critical and why grading margins of 0.3-0.5 seconds exist between successive relays." },
    ruth: { options: ["The wrong breaker trips too — blackout spreads!", "The wrong breaker trips too — blackout spreads!", "Poor grading = bigger blackout", "Eric has prevented many sympathetic trips"], correct: 0, explanation: "The upstream relay trips when it shouldn't, disconnecting far more of the network than necessary. Bad grading = big blackout." } },
  { id: 565, category: "protection", question: "The GEC MCGG relay was the workhorse overcurrent relay of the UK grid. What type of relay was it?", year: null,
    eric: { options: ["A static (solid-state electronic) IDMT overcurrent relay that replaced the CDG induction disc relay", "A digital microprocessor-based relay", "A high-speed electromagnetic plunger relay", "A thermal bimetallic relay"], correct: 0, explanation: "The MCGG was GEC Measurements' solid-state (static) IDMT overcurrent relay, designed as the electronic replacement for the venerable CDG induction disc relay. It offered the same SI/VI/EI curves but with greater accuracy, no moving parts, and lower burden on CTs. The later MiCOM series replaced it with fully digital/numerical technology." },
    ruth: { options: ["A solid-state electronic relay replacing the CDG!", "A solid-state electronic relay replacing the CDG!", "No spinning disc — electronics instead", "Eric has set up hundreds of these"], correct: 0, explanation: "The electronic successor to the CDG! Same job, no moving parts. Then the digital MiCOM relays replaced the MCGG. Progress marches on." } },
  { id: 566, category: "circuit-breakers", question: "What is the 'dead time' in auto-reclose, and what typically happens during it?", year: null,
    eric: { options: ["The interval (0.3-3 seconds) when the line is de-energised — the arc deionises, the fault path clears, and insulation recovers", "The time a relay waits before sending a trip signal", "The time an operator must wait before entering a substation", "The period after a breaker failure when no protection operates"], correct: 0, explanation: "Dead time is the interval between the breaker tripping and reclosing — typically 0.3-3 seconds. During this time, the fault arc (from lightning flashover, etc.) deionises and extinguishes, the air gap recovers its insulation strength, and the line can be safely re-energised. Single-pole dead times are shorter (0.3-1s) than three-pole (~1-3s)." },
    ruth: { options: ["0.3-3 seconds for the arc to go out!", "0.3-3 seconds for the arc to go out!", "Just long enough for the fault to clear", "Eric has waited through many dead times"], correct: 0, explanation: "A brief pause while the arc extinguishes itself. Then the breaker closes again and — fingers crossed — everything's fine." } },
  { id: 567, category: "protection", question: "Negative Phase Sequence (NPS) protection detects what type of fault?", year: null,
    eric: { options: ["Unbalanced faults — phase-to-phase or phase-to-earth faults that create a negative sequence current component", "Three-phase balanced faults only", "Loss of supply from the grid", "Harmonic distortion on the power system"], correct: 0, explanation: "NPS protection detects unbalanced faults (single phase-to-earth, phase-to-phase) by measuring the negative sequence component of the three-phase currents. A perfectly balanced three-phase system has zero negative sequence current. Any unbalance (from an asymmetric fault) creates a negative sequence component. Particularly important for generator protection — NPS current causes double-frequency rotor heating." },
    ruth: { options: ["Unbalanced faults — something wrong with one or two phases!", "Unbalanced faults — something wrong with one or two phases!", "When the three phases aren't equal", "Eric can spot an unbalanced fault by instinct"], correct: 0, explanation: "When the three phases aren't equally loaded — usually because of a fault. NPS protection picks up the imbalance." } },
  { id: 568, category: "circuit-breakers", question: "What are the four main types of isolator (disconnector) mechanism?", year: null,
    eric: { options: ["Centre-break (horizontal), vertical break (knee-type), pantograph, and rotating (Reyrolle rotating post type)", "Manual, motorised, pneumatic, and hydraulic", "Air break, oil break, SF6 break, and vacuum break", "Spring-loaded, gravity-operated, cam-driven, and magnetic"], correct: 0, explanation: "Centre-break (horizontal rotation), vertical break (knee-type — the arm swings up like a knee bending), pantograph (a scissor-mechanism that reaches up to the busbar), and rotating (the Reyrolle rotating post type, where the entire insulator column rotates). All provide a visible air gap for safety isolation." },
    ruth: { options: ["Centre-break, vertical break, pantograph, and rotating!", "Centre-break, vertical break, pantograph, and rotating!", "Four ways to make a visible gap", "Eric can identify them all from a distance"], correct: 0, explanation: "Four types — all designed to create a visible air gap so engineers can see the circuit is definitely open. Safety first!" } },
  { id: 569, category: "protection", question: "What was revolutionary about the transition from electromechanical to numerical/digital protection relays in the 1990s?", year: null,
    eric: { options: ["A single digital relay could replace 5-10 separate electromechanical relays, plus provide fault recording, self-diagnostics, remote communication, and event logging", "Digital relays were slightly faster but otherwise identical", "Digital relays used less power but had the same functionality", "The transition hasn't happened yet — most relays are still electromechanical"], correct: 0, explanation: "A single MiCOM or SEL numerical relay could replace an entire panel of CDGs, MCGGs, voltage relays, and auxiliary relays. Plus it added disturbance recording, self-monitoring, SCADA integration (IEC 61850), GPS time synchronisation, and programmable logic. Some electromechanical relays are still in service — they're simpler, immune to cyber attacks, and keep working for decades." },
    ruth: { options: ["One digital relay replaces a whole panel of old ones!", "One digital relay replaces a whole panel of old ones!", "Plus it records faults and talks to SCADA", "Eric has commissioned both types"], correct: 0, explanation: "One box replaces ten! Plus it records everything, communicates with control centres, and tests itself. The old CDGs were beautiful though." } },
  { id: 570, category: "circuit-breakers", question: "The EU F-gas Regulation targets SF6. From which year will new SF6 switchgear be banned in most applications?", year: null,
    eric: { options: ["2035 (with some exemptions for specialist high-voltage applications)", "2025", "2030", "2040"], correct: 0, explanation: "2035 for most applications under the revised EU F-gas Regulation. Alternatives include 'clean air' (dry air/nitrogen mixtures), fluoronitrile-based gases (3M Novec), and vacuum interrupters at higher voltages. Given that SF6 has a GWP of 23,500 and persists for 3,200 years, the phase-out is long overdue." },
    ruth: { options: ["2035!", "2035!", "SF6 is being phased out at last", "Eric will see the end of SF6 (almost)"], correct: 0, explanation: "2035! After decades of being the default, SF6 is finally being phased out. Alternatives exist — clean air and vacuum technology are the future." } },
  { id: 571, category: "protection", question: "What is a 'power swing' and why must distance relays be blocked from tripping during one?", year: null,
    eric: { options: ["A large oscillation of power flow between generators after a disturbance — the apparent impedance sweeps through the relay's operating zones, causing a false trip", "A literal swinging of overhead line conductors in high wind", "A surge of reactive power during motor starting", "A voltage dip caused by a large load switching on"], correct: 0, explanation: "After a major disturbance (like losing a large generator), the remaining generators oscillate against each other. The resulting power swings cause the apparent impedance measured by distance relays to sweep through their operating zones, potentially causing a false trip. Power swing blocking (PSB) detects the slow impedance movement (compared to a fault's near-instantaneous change) and inhibits tripping." },
    ruth: { options: ["Generators swinging against each other — the relay sees a false 'fault'!", "Generators swinging against each other — the relay sees a false 'fault'!", "Must NOT trip during a power swing", "Eric understands power swings (most people don't)"], correct: 0, explanation: "Generators oscillating after a disturbance — the relay thinks it sees a fault when it's actually just the system wobbling. Tripping would make things much worse!" } },
  { id: 572, category: "circuit-breakers", question: "A vacuum circuit breaker extinguishes the arc in a vacuum. Why does this work so well?", year: null,
    eric: { options: ["In a vacuum there are no gas molecules to ionise — the arc cannot sustain itself and collapses within microseconds at the first current zero", "The vacuum cools the arc by removing heat through radiation", "The vacuum compresses the arc into a tiny space", "Vacuum breakers use a magnetic field to blow the arc out"], correct: 0, explanation: "In a vacuum (~10⁻⁶ mbar), there are essentially no gas molecules to ionise and sustain an arc plasma. When the AC current passes through zero, the arc collapses almost instantly because there's nothing to re-ignite it. The dielectric recovery of a vacuum gap is extremely fast — within microseconds. Vacuum breakers are now dominant at 11kV-36kV and increasingly used at 132kV." },
    ruth: { options: ["No gas molecules = no arc!", "No gas molecules = no arc!", "The arc can't burn in nothing", "Eric thinks vacuum breakers are elegant"], correct: 0, explanation: "Nothing to burn in! The arc needs gas molecules to sustain itself. In a vacuum, it just... stops. Beautifully simple." } },
  { id: 573, category: "protection", question: "What is restricted earth fault (REF) protection and why is it called 'restricted'?", year: null,
    eric: { options: ["It only detects earth faults within a specific zone (between CTs) — 'restricted' to that zone, unlike standby earth fault which covers everything", "The relay is restricted to operating only once before manual reset", "It restricts the earth fault current to a safe level", "The protection is restricted to operating during daytime hours only"], correct: 0, explanation: "REF protection uses CTs at each end of a winding or zone to detect earth fault current circulating within that restricted zone only. It won't operate for external faults — it's 'restricted' to its zone. This gives it very high sensitivity (often set at 10-20% of CT rating) because it doesn't need to grade with downstream devices. Essential for transformer and generator winding protection." },
    ruth: { options: ["It only detects faults within its own zone!", "It only detects faults within its own zone!", "Very sensitive — catches small earth faults", "Eric has commissioned many REF schemes"], correct: 0, explanation: "'Restricted' means it only looks within its own zone — not at faults elsewhere. This means it can be very sensitive without causing false trips." } },
  { id: 574, category: "circuit-breakers", question: "What is breaker failure protection, and why is it critical?", year: null,
    eric: { options: ["If a breaker fails to trip when commanded, breaker failure protection trips all adjacent breakers to isolate the fault — typically within 200-300ms of the original trip command", "A scheme that prevents breakers from being operated too frequently", "Protection that detects mechanical failure of the breaker mechanism", "A backup spring that closes the breaker if the main mechanism fails"], correct: 0, explanation: "If a breaker doesn't trip when a protection relay commands it (stuck mechanism, failed trip coil, etc.), the fault remains connected. Breaker failure protection starts a timer when a trip is issued. If current is still flowing after typically 200-300ms, it trips all adjacent breakers to completely isolate the busbar section. Without it, a single stuck breaker could leave a fault energised indefinitely." },
    ruth: { options: ["If the breaker doesn't trip, trip EVERYTHING around it!", "If the breaker doesn't trip, trip EVERYTHING around it!", "The nuclear option of protection", "Eric has seen breaker failure operate (scary)"], correct: 0, explanation: "If the breaker fails to trip, the backup plan trips every adjacent breaker instead. Brutal but necessary — you cannot leave a fault energised." } },
  { id: 575, category: "protection", question: "What is an inter-trip, and when is it used?", year: null,
    eric: { options: ["A signal sent between substations to trip the remote-end breaker when local protection detects a fault — essential for unit protection schemes", "A trip command between two relays in the same cubicle", "A trip signal sent during inter-office lunch breaks", "A command to trip breakers on interconnected foreign networks"], correct: 0, explanation: "An inter-trip is a tripping signal sent from one substation to another, typically over pilot wires, fibre optic, or microwave link. When local protection detects a fault and trips the local breaker, an inter-trip signal is sent to trip the remote-end breaker too. Essential for transformer protection (where the fault is fed from both sides) and for any unit protection scheme requiring simultaneous tripping at both ends." },
    ruth: { options: ["A trip signal sent to the other end of the line!", "A trip signal sent to the other end of the line!", "Both ends must trip for a fault", "Eric has sent many inter-trips"], correct: 0, explanation: "When you trip your breaker, you send a signal to trip the breaker at the other end too. Both ends must disconnect to clear the fault." } },
  { id: 576, category: "circuit-breakers", question: "Spring-operated mechanisms largely replaced pneumatic and hydraulic mechanisms for 132kV SF6 breakers. Why?", year: null,
    eric: { options: ["Springs need no compressor plant, no hydraulic oil, minimal maintenance, and are always ready to operate — even during a power failure", "Springs are faster than pneumatic mechanisms", "Spring mechanisms are cheaper to manufacture but less reliable", "This hasn't happened — most 132kV breakers still use pneumatic mechanisms"], correct: 0, explanation: "Spring mechanisms need no compressor plant (expensive, noisy, needs maintenance), no hydraulic oil (leak-prone, temperature-sensitive), and the stored energy is available instantly even during a total site power failure. A charged spring is always ready. Modern spring-operated 132kV SF6 breakers have operating times of 40-60ms and are extremely reliable." },
    ruth: { options: ["No compressors needed — springs are always ready!", "No compressors needed — springs are always ready!", "Simple, reliable, and always ready to go", "Eric appreciates engineering simplicity"], correct: 0, explanation: "A charged spring doesn't need electricity, compressed air, or hydraulic oil. It just works. Even when everything else has failed." } },
  { id: 577, category: "protection", question: "The 2003 Italian blackout was caused in part by incorrect Zone 3 distance relay settings. What happened?", year: 2003,
    eric: { options: ["Overloaded lines caused Zone 3 relays to see apparent impedance within their reach, triggering cascade tripping that blacked out all of Italy", "A lightning strike on a single pylon tripped Zone 3 across the whole network", "A software bug in digital relays caused simultaneous Zone 3 trips", "Zone 3 relays were set too slowly and failed to clear a transformer fault"], correct: 0, explanation: "After a tree flashover on a Swiss tie-line, power redistributed onto remaining interconnectors. The overloaded lines' apparent impedance fell within Zone 3 reach of distance relays, causing them to trip one after another in a cascade — disconnecting Italy from the European grid within 28 seconds. 56 million people lost power. It took 18 hours to restore. Zone 3 settings across Europe were reviewed after this event." },
    ruth: { options: ["Relays tripped one after another — cascade blackout!", "Relays tripped one after another — cascade blackout!", "56 million people in the dark!", "Eric's worst nightmare"], correct: 0, explanation: "Relays tripping in a chain reaction — each one making the next worse! 56 million Italians in the dark for up to 18 hours. Zone 3 was too aggressive." } },
  { id: 578, category: "circuit-breakers", question: "What safety clearance distance must be maintained from live 275kV equipment?", year: null,
    eric: { options: ["Approximately 3.1 metres (as specified in ENA TS 43-8 and ESQCR)", "1 metre", "5 metres", "10 metres"], correct: 0, explanation: "Approximately 3.1 metres for 275kV (the exact figure depends on the specific standard and equipment type). For 132kV it's approximately 1.8 metres. These are the minimum distances that must be maintained between live conductors and any earthed structure, person, or unearthed equipment. Getting closer requires a permit to work and the circuit to be isolated, earthed, and locked off." },
    ruth: { options: ["About 3.1 metres!", "About 3.1 metres!", "Stay well back from live 275kV", "Eric respects safety distances (always)"], correct: 0, explanation: "3.1 metres! Get any closer to live 275kV and you're in serious danger. The air itself can break down and arc." } },
  { id: 579, category: "protection", question: "Why are electromechanical relays (like the CDG) still valued by some engineers despite being 'obsolete'?", year: null,
    eric: { options: ["They're immune to cyber attacks, have no software bugs, need no firmware updates, and keep working for decades with minimal maintenance", "They're faster than digital relays", "They're cheaper than digital relays", "There is no reason — all electromechanical relays should be replaced immediately"], correct: 0, explanation: "Electromechanical relays are analogue devices with no software, no communications ports, no firmware, and no cyber attack surface. They don't crash, don't need rebooting, don't need firmware patches, and they've been working reliably for 40+ years. Some argue this makes them more trustworthy for safety-critical applications than a digital relay running millions of lines of code. The counter-argument is that digital relays offer vastly superior functionality, recording, and remote management." },
    ruth: { options: ["No software, no hacking, no bugs, no updates!", "No software, no hacking, no bugs, no updates!", "Old doesn't mean useless", "Eric has a soft spot for the CDG"], correct: 0, explanation: "You can't hack a spinning aluminium disc! No software bugs, no firmware updates, no cyber attacks. They just quietly do their job for decades." } },
  { id: 580, category: "circuit-breakers", question: "What is the typical fault clearance time for a modern 132kV SF6 circuit breaker with distance protection?", year: null,
    eric: { options: ["80-120 milliseconds total (relay ~20-40ms + breaker ~40-60ms + arc time ~10-20ms)", "About 1 second", "About 5 milliseconds", "About 500 milliseconds"], correct: 0, explanation: "80-120ms total from fault inception to arc extinction. The distance relay measures impedance and issues a trip command in ~20-40ms. The breaker mechanism operates in ~40-60ms. The arc extinguishes at the next current zero, adding ~10-20ms. The entire fault is cleared in about a tenth of a second — five or six cycles of the 50 Hz waveform." },
    ruth: { options: ["About a tenth of a second!", "About a tenth of a second!", "Incredibly fast", "Faster than Eric can blink"], correct: 0, explanation: "A tenth of a second from fault to clear! The relay detects, the breaker trips, and the arc is out — all in the blink of an eye." } },
  { id: 581, category: "protection", question: "What is the purpose of a tertiary winding on a star-star transformer, from a protection perspective?", year: null,
    eric: { options: ["The delta-connected tertiary provides a path for zero-sequence currents during earth faults, which a star-star connection alone cannot", "The tertiary winding provides backup power during transformer outages", "It reduces the cost of the transformer by sharing insulation", "It's used exclusively for metering purposes"], correct: 0, explanation: "In a star-star transformer, zero-sequence current (which flows during earth faults) cannot circulate because there's no delta winding to provide a path. Adding a delta-connected tertiary winding provides this path, allowing earth fault current to flow and earth fault protection to operate correctly. Without it, earth fault protection on the star side may be insensitive or inoperative." },
    ruth: { options: ["It lets earth fault current flow so protection can detect it!", "It lets earth fault current flow so protection can detect it!", "Without it, earth faults might not be detected", "Eric knows his zero-sequence theory"], correct: 0, explanation: "Without the tertiary winding, earth fault current has nowhere to go in a star-star transformer — and the protection can't see the fault!" } },

  // ─── North and South Inches, Perth ────────────────────────────
  { id: 582, category: "perth-inches", question: "What does 'Inch' mean in North Inch and South Inch?", year: null,
    eric: { options: ["From Gaelic 'innis' — island, water-meadow, or riverside grassland", "An old Scots measurement of land area", "A corruption of 'enclosure' from Norman French", "Named after a surveyor called James Inch"], correct: 0, explanation: "From Scottish Gaelic 'innis' meaning island, water-meadow, or riverside grassland. Both Inches were once literally islands in the River Tay before the river's course changed. They are alluvial flood plains." },
    ruth: { options: ["Gaelic for island or water-meadow!", "Gaelic for island or water-meadow!", "Not a measurement!", "Eric walks the Inches regularly"], correct: 0, explanation: "From the Gaelic 'innis'! They were once actual islands in the River Tay." } },
  { id: 583, category: "perth-inches", question: "Which king granted the Inches to the people of Perth, and when?", year: 1374,
    eric: { options: ["King Robert II in 1374", "King Robert the Bruce in 1314", "King James I in 1424", "King David II in 1357"], correct: 0, explanation: "King Robert II in 1374. They are 'common good land' — held in perpetuity for the citizens. Over 650 years of continuous public use." },
    ruth: { options: ["Robert II in 1374!", "Robert II in 1374!", "The people's parks for 650 years", "Eric appreciates a good royal charter"], correct: 0, explanation: "Robert II in 1374! Over 650 years of public use." } },
  { id: 584, category: "perth-inches", question: "In the Battle of the North Inch (1396), 60 men fought. How many survived?", year: 1396,
    eric: { options: ["12 — 11 from Clan Chattan (winners) and 1 from Clan Quhele who escaped by swimming the Tay", "60 — it was ceremonial", "30 — one side wiped out", "2 — one per side"], correct: 0, explanation: "12 survivors. Clan Chattan won: 11 survived (including substitute Henry Wynd). 29 of Clan Quhele killed. The lone Quhele survivor escaped by jumping into the Tay. Walter Bower described it as 'like butchers killing cattle in a slaughter-house.'" },
    ruth: { options: ["Only 12 out of 60!", "Only 12 out of 60!", "Very violent", "Eric wouldn't have volunteered"], correct: 0, explanation: "12 out of 60! Only one man from the losing side survived — by swimming the Tay." } },
  { id: 585, category: "perth-inches", question: "Clan Chattan was one man short for the 1396 battle. Who volunteered, and for what reward?", year: 1396,
    eric: { options: ["Henry Wynd (Hal o' the Wynd), a bandy-legged harness-maker — half a French crown and maintenance for life", "Donald MacPherson, a tinker — a barrel of whisky", "James the Glover — a house on the High Street", "Father Andrew, a friar — spiritual glory"], correct: 0, explanation: "Henry Wynd ('Gow Chrom' = the crooked smith) — a bandy-legged local harness-maker. Half a French crown of gold and maintenance for life if he survived. He did, was adopted into Clan Chattan, and became the hero of Walter Scott's The Fair Maid of Perth." },
    ruth: { options: ["Henry Wynd — a bandy-legged smith!", "Henry Wynd — a bandy-legged smith!", "Half a crown and free meals for life", "Eric would want a better deal"], correct: 0, explanation: "A bandy-legged blacksmith for half a crown and free meals forever! He survived and became a legend." } },
  { id: 586, category: "perth-inches", question: "The Feadan Dubh (Black Chanter) bagpipe chanter allegedly arrived at the 1396 battle how?", year: 1396,
    eric: { options: ["It fell from heaven, dropped by a ghostly piper hovering over the Macpherson warriors", "Carved from a sacred oak on the morning of battle", "Seized from the enemy piper", "Blessed by the Prior of Perth"], correct: 0, explanation: "It fell from heaven! Dropped by an aerial minstrel hovering over the Macpherson warriors. The cracks in the wood are supposedly from the fall. Preserved at the Clan Macpherson Museum in Newtonmore. May actually date to the 13th century." },
    ruth: { options: ["It fell from the SKY!", "It fell from the SKY!", "Dropped by a heavenly piper", "Eric is sceptical (rightly so)"], correct: 0, explanation: "A bagpipe chanter that fell from heaven! Dropped by a ghost piper floating above the battle." } },
  { id: 587, category: "perth-inches", question: "Bell's Sports Centre on the North Inch held what UK record when it opened in 1968?", year: 1968,
    eric: { options: ["Largest laminated timber dome in the UK — over 220 feet (67m) diameter", "Largest indoor pool in Scotland", "First indoor athletics track in Britain", "Tallest sports hall ceiling in the UK"], correct: 0, explanation: "The largest laminated timber dome in the UK — 220 feet diameter, 50 feet tall, 36 arches each 115 feet long. Held this record until the Millennium Dome (1999). Now Category B listed — the first listed leisure centre in Scotland. Nearly destroyed by fire during construction." },
    ruth: { options: ["The largest timber dome in the UK!", "The largest timber dome in the UK!", "Bigger than anything until the Millennium Dome", "Eric has played badminton there"], correct: 0, explanation: "The biggest timber dome in Britain! 220 feet across. Listed building now." } },
  { id: 588, category: "perth-inches", question: "Queen Victoria unveiled the Albert statue on the North Inch in 1864. What 'first' had she experienced at Perth's Royal George Hotel in 1848?", year: 1864,
    eric: { options: ["Her first ever stay in a hotel — the Earl of Mansfield was away from Scone Palace", "Her first visit to Scotland", "Her first Scottish railway journey", "Her first public speech outside London"], correct: 0, explanation: "Her first ever hotel stay! The Earl of Mansfield was away from Scone Palace, so Victoria and Albert stayed at the Royal George Hotel instead. She returned in 1864 to unveil the Albert statue (by William Brodie), three years after Albert's death." },
    ruth: { options: ["Her first EVER hotel stay!", "Her first EVER hotel stay!", "Because the Earl wasn't home", "Eric stays in hotels all the time"], correct: 0, explanation: "Queen Victoria's first ever hotel stay! Because the Earl wasn't home at Scone Palace." } },
  { id: 589, category: "perth-inches", question: "Golf on the North Inch is first documented in 1599. How do we know?", year: 1599,
    eric: { options: ["Kirk session records document prosecutions for playing golf on a Sunday", "A painting shows golfers on the Inch", "The first club minutes mention it", "James VI wrote about it in a letter"], correct: 0, explanation: "Perth kirk session records prosecuted people for playing golf on the North Inch on a Sunday! Further prosecutions in 1604. King James IV also played golf in Perth in 1504 — despite his own law banning the game." },
    ruth: { options: ["People were prosecuted for Sunday golf!", "People were prosecuted for Sunday golf!", "Getting in trouble for golf — very Scottish", "Eric plays on weekdays (safer)"], correct: 0, explanation: "1599! We know because the Kirk prosecuted people for playing on a Sunday." } },
  { id: 590, category: "perth-inches", question: "How high did the Tay rise in Perth's Great Flood of 1814?", year: 1814,
    eric: { options: ["7 metres (23 feet) above normal — partly caused by an ice jam under Smeaton's Bridge", "3 metres above normal", "10 metres above normal", "12 feet above normal"], correct: 0, explanation: "7 metres above normal on 12 February 1814 — caused partly by an ice jam beneath Smeaton's Bridge. Flood markings carved into the bridge range from 1814 to the 1993 flood (6.48m)." },
    ruth: { options: ["7 metres — 23 feet above normal!", "7 metres — 23 feet above normal!", "An enormous flood", "Eric would have needed a boat"], correct: 0, explanation: "23 feet above normal! The worst flood Perth has ever seen." } },
  { id: 591, category: "perth-inches", question: "Cromwell built a citadel on the South Inch in 1652. What scandalous materials did he use?", year: 1652,
    eric: { options: ["Demolished buildings and tombstones from Greyfriars churchyard", "Stone from Scone Palace", "Timber from royal forests", "Bricks imported from England"], correct: 0, explanation: "Cromwell's soldiers demolished Perth buildings and even used tombstones from Greyfriars churchyard. One of five citadels built across Scotland to overawe the country. Given back to Perth in 1661. No visible remains today." },
    ruth: { options: ["Demolished buildings and GRAVESTONES!", "Demolished buildings and GRAVESTONES!", "Cromwell stole everything", "Eric disapproves strongly"], correct: 0, explanation: "He demolished houses and stole tombstones! Cromwell was not popular in Perth." } },
  { id: 592, category: "perth-inches", question: "7,000 French POWs were held near the South Inch during the Napoleonic Wars. What did they sell at a weekly market?", year: null,
    eric: { options: ["Ornaments carved from animal bones and dolls made from straw", "Paintings of French landscapes", "Homemade wine", "French lessons"], correct: 0, explanation: "Bone carvings and straw dolls at a weekly Wednesday market. Officers were paroled into the city. When they were repatriated after Waterloo, thousands of Perth citizens waved them goodbye. The prison became Scotland's oldest working prison in 1840." },
    ruth: { options: ["Bone carvings and straw dolls!", "Bone carvings and straw dolls!", "Very resourceful prisoners", "Perth liked them — waved goodbye!"], correct: 0, explanation: "Bone carvings and straw dolls! And Perth turned out to wave them off when they finally went home." } },
  { id: 593, category: "perth-inches", question: "After Culloden (1746), how many Hessian troops camped on the North Inch?", year: 1746,
    eric: { options: ["5,000", "500", "15,000", "300"], correct: 0, explanation: "5,000 Hessian (German) mercenaries brought by King George II to subdue the Highlands. The parallel lines of their camp remained visible for decades." },
    ruth: { options: ["5,000 German soldiers!", "5,000 German soldiers!", "A LOT of tents", "Eric wouldn't want them on his lawn"], correct: 0, explanation: "Five thousand! German soldiers camped on the North Inch." } },
  { id: 594, category: "perth-inches", question: "Horse racing on the South Inch was first recorded in which year?", year: 1613,
    eric: { options: ["1613 — a Silver Bell race during the reign of James VI", "1745", "1550", "1700"], correct: 0, explanation: "1613 — for a Silver Bell trophy. Racing moved to Scone Palace Parklands in 1908. Perth Racecourse is the northernmost in Britain." },
    ruth: { options: ["1613!", "1613!", "One of Scotland's first horse races", "Eric has been to Perth Races"], correct: 0, explanation: "1613! A silver bell was the prize." } },
  { id: 595, category: "perth-inches", question: "Three women were burned for witchcraft on the South Inch in 1598. Where exactly?", year: 1598,
    eric: { options: ["'Betwixt the butts' (between the archery targets)", "At the centre near the boating pond", "On the riverbank", "At the hospital entrance"], correct: 0, explanation: "'Betwixt the butts' — between the archery targets. Janet Robertson, Marian M'Cash, and Betty Ireland were among Perth's first witchcraft executions." },
    ruth: { options: ["Between the archery targets!", "Between the archery targets!", "A terrible bit of Perth history", "Eric is glad that doesn't happen anymore"], correct: 0, explanation: "'Betwixt the butts.' Dark times." } },
  { id: 596, category: "perth-inches", question: "King James I was murdered near the North Inch in 1437. Why couldn't he escape through a sewer?", year: 1437,
    eric: { options: ["The exit had been blocked to stop tennis balls getting lost", "The sewer had collapsed in a flood", "Cromwell's soldiers had sealed it", "He didn't know it existed"], correct: 0, explanation: "The sewer exit at the Blackfriars monastery had been blocked to stop tennis balls escaping during games! James hid in the sewer but was trapped and stabbed to death. The north wall of the Fair Maid's House was part of this monastery." },
    ruth: { options: ["Tennis balls! They blocked it to stop losing them!", "Tennis balls! They blocked it to stop losing them!", "Killed by tennis ball management", "The worst reason to die in history"], correct: 0, explanation: "They blocked the sewer to stop tennis balls escaping! Then the king needed it." } },
  { id: 597, category: "perth-inches", question: "Perth County Cricket Club won the Scottish championship how many times between 1953 and 1978?", year: null,
    eric: { options: ["Twenty times", "Ten", "Thirty", "Five"], correct: 0, explanation: "Twenty championships in 25 years — 'The Big County.' They played on the North Inch. The 1993 Tay flood destroyed the pitch quality and the club was placed in abeyance in February 2009." },
    ruth: { options: ["Twenty times!", "Twenty times!", "Killed off by the 1993 flood", "Eric remembers them"], correct: 0, explanation: "Twenty championships! Killed by the 1993 flood ruining their pitch." } },
  { id: 598, category: "perth-inches", question: "Perth's flood defences cost approximately £25 million. When were they completed?", year: 2001,
    eric: { options: ["2001 — covering 8 km with over 80 floodgates", "1995 — 5 km coverage", "2010 — 12 km coverage", "1993 — immediately after the flood"], correct: 0, explanation: "2001 — 8 km of defences with over 80 floodgates. Built after the 1993 flood (Tay rose 6.48m, 1,500 evacuated). Flood level markings on Smeaton's Bridge range from 1814 to 1993." },
    ruth: { options: ["2001 — 8 km with 80 floodgates!", "2001 — 8 km with 80 floodgates!", "Money well spent", "Eric appreciates good flood defences"], correct: 0, explanation: "2001! £25 million to protect Perth. Over 80 floodgates." } },
  { id: 599, category: "perth-inches", question: "Smeaton's Bridge in Perth was designed by the engineer famous for what other structure?", year: 1771,
    eric: { options: ["The Eddystone Lighthouse", "The Forth Bridge", "The Caledonian Canal", "Westminster Bridge"], correct: 0, explanation: "The Eddystone Lighthouse. Perth Bridge (nine pink sandstone arches) was completed October 1771. First bridge to use parallel wall spandrels with closed voids to reduce weight." },
    ruth: { options: ["The Eddystone Lighthouse!", "The Eddystone Lighthouse!", "A famous engineer", "Eric crosses this bridge regularly"], correct: 0, explanation: "The Eddystone Lighthouse! Smeaton designed Perth's lovely pink sandstone bridge too." } },
  { id: 600, category: "perth-inches", question: "The Norie-Miller Walk is named after a family associated with which Perth company?", year: 1971,
    eric: { options: ["General Accident (insurance)", "Bell's (whisky)", "Dewar's (whisky)", "Stagecoach (buses)"], correct: 0, explanation: "General Accident insurance. Sir Stanley Norie-Miller and his father Sir Francis were key figures. The walk was established 1971 along the Tay between Smeaton's Bridge and Queen's Bridge. Won a Civic Trust Award in 1972." },
    ruth: { options: ["General Accident insurance!", "General Accident insurance!", "Perth's biggest company", "Eric is well insured (hopefully)"], correct: 0, explanation: "General Accident insurance! The Norie-Millers ran the company and gave Perth this riverside walk." } },
  { id: 601, category: "perth-inches", question: "Balhousie Castle overlooks the North Inch. What museum does it house?", year: null,
    eric: { options: ["The Black Watch Museum", "Perth Museum and Art Gallery", "Scottish Fisheries Museum", "Clan Drummond Heritage Centre"], correct: 0, explanation: "The Black Watch Museum. The castle was built 1631, remodelled 1862-64 in Scottish Baronial style. The Black Watch (42nd/73rd) had its depot at the nearby Queen's Barracks (decommissioned 1961)." },
    ruth: { options: ["The Black Watch Museum!", "The Black Watch Museum!", "Scotland's most famous regiment", "Eric has visited"], correct: 0, explanation: "The Black Watch Museum! In a castle overlooking the North Inch." } },
  { id: 602, category: "perth-inches", question: "The River Tay is Scotland's longest river. What makes it unique among all UK rivers?", year: null,
    eric: { options: ["It has the largest discharge (water volume) of any river in the UK", "It's the only tidal river in Scotland", "It flows through more cities than any other", "It has the most tributaries"], correct: 0, explanation: "The largest discharge — more water flows through the Tay than any other British river. 120 miles long, draining 2,400 square miles. Perth sits at approximately the tidal limit." },
    ruth: { options: ["The most water of any UK river!", "The most water of any UK river!", "Scotland's longest and biggest", "Eric lives by the Tay"], correct: 0, explanation: "More water than any other British river! 120 miles of river." } },
  { id: 603, category: "perth-inches", question: "Moncreiffe Island in the Tay has a golf course designed by whom in 1897?", year: 1897,
    eric: { options: ["Old Tom Morris", "Young Tom Morris", "James Braid", "Harry Vardon"], correct: 0, explanation: "Old Tom Morris designed the King James VI Golf Club course on Moncreiffe Island in 1897. The island is one of only two permanently inhabited freshwater islands in Scotland outside Loch Lomond." },
    ruth: { options: ["Old Tom Morris!", "Old Tom Morris!", "Golf on an island in the river", "Only in Perth"], correct: 0, explanation: "Old Tom Morris! A golf course on an island in the Tay." } },
  { id: 604, category: "perth-inches", question: "Walter Scott's The Fair Maid of Perth features which hero, based on a real person from the 1396 battle?", year: 1828,
    eric: { options: ["Henry Gow (the armourer) — based on Henry Wynd who volunteered in the battle", "Simon Glover (the glovemaker)", "Conachar (the chieftain's son)", "The Duke of Rothesay"], correct: 0, explanation: "Henry Gow — Scott's fictional version of Henry Wynd. He wins the hand of Catharine Glover (the 'fair maid'). Published 1828, one of Scott's most popular Waverley novels." },
    ruth: { options: ["Henry Gow — the fighting blacksmith!", "Henry Gow — the fighting blacksmith!", "Based on the real Henry Wynd", "Perth's greatest love story"], correct: 0, explanation: "Henry Gow! From the Battle of the North Inch to a Waverley novel." } },
  { id: 605, category: "perth-inches", question: "The King James VI Hospital near the South Inch has a belfry salvaged from where?", year: null,
    eric: { options: ["Nairne House, Bankfoot — demolished after being forfeited in the 1745 Jacobite Rebellion", "Scone Palace", "St John's Kirk", "Dundee Cathedral"], correct: 0, explanation: "Nairne House at Bankfoot — demolished 1748 after forfeiture following the 1745 rebellion. The octagonal belfry was salvaged and placed atop the hospital, which stands on the site of Perth Priory (founded 1429, burned during the Reformation)." },
    ruth: { options: ["A Jacobite house that was demolished!", "A Jacobite house that was demolished!", "Recycled from a rebel's mansion", "Nothing wasted in Perth"], correct: 0, explanation: "Taken from a Jacobite mansion knocked down after the 1745 rebellion!" } },
  { id: 606, category: "perth-inches", question: "Why does Kinnoull Hill overlooking Perth have a castle tower on top?", year: null,
    eric: { options: ["The 9th Earl of Kinnoull thought the cliffs looked like the Rhine and built a folly", "It's a genuine medieval watchtower", "A Napoleonic Wars signal station", "A Victorian water tower"], correct: 0, explanation: "The Earl visited the Rhine, thought Kinnoull's cliffs looked similar, and built a castellated folly. Kinnoull Hill (222m) became Scotland's first official woodland park in 1991." },
    ruth: { options: ["An earl thought it looked like Germany!", "An earl thought it looked like Germany!", "So he built a fake castle", "Peak eccentric behaviour"], correct: 0, explanation: "He visited Germany and came home to build a pretend castle! Peak aristocratic eccentricity." } },
  { id: 607, category: "perth-inches", question: "The Perth Show on the South Inch is unique among Scottish agricultural shows. Why?", year: null,
    eric: { options: ["It's held in the city centre — nearly every other show is on farmland", "It's the only show without livestock", "It's the oldest in Scotland", "It's held indoors"], correct: 0, explanation: "Held on the South Inch for over 113 years (152nd year overall). Unique for its city-centre setting — cows, sheep, and tractors in the middle of Perth." },
    ruth: { options: ["It's in the city centre!", "It's in the city centre!", "Cows on the South Inch", "Eric goes every year"], correct: 0, explanation: "An agricultural show in the middle of the city! Only in Perth." } },
  { id: 608, category: "perth-inches", question: "How many Scottish kings were crowned at Scone, just north of Perth?", year: null,
    eric: { options: ["42", "12", "28", "7"], correct: 0, explanation: "42 kings of Scots — from Kenneth MacAlpin (c.840 AD) through Macbeth, Robert the Bruce, to Charles II (last, 1651). The Stone of Destiny, used from at least 1249, was seized by Edward I in 1296, returned 1996, and now resides in Perth Museum." },
    ruth: { options: ["42 kings!", "42 kings!", "Including Robert the Bruce and Macbeth", "Eric lives near where kings were crowned"], correct: 0, explanation: "Forty-two kings! All crowned at Scone, just up the road from Perth." } },
  { id: 609, category: "perth-inches", question: "The South Inch prison (now HM Prison Perth) was built 1810-1812. It's notable for being what?", year: 1812,
    eric: { options: ["Scotland's oldest working prison", "The largest prison in Scotland", "The only prison with a river view", "Scotland's only open prison"], correct: 0, explanation: "Scotland's oldest working prison. Built by Robert Reid to hold French Napoleonic POWs (~7,000). After Waterloo, used as military store, then converted to the General Prison in 1840. Still operational." },
    ruth: { options: ["Scotland's oldest working prison!", "Scotland's oldest working prison!", "Started as a French POW camp", "Still going after 200+ years"], correct: 0, explanation: "Scotland's oldest working prison! Started life holding French prisoners of war." } },
  { id: 610, category: "perth-inches", question: "Old Tom Morris laid out holes on the North Inch in 1892. The course was later restored to 18 holes in 1927 thanks to a gift from which whisky family?", year: 1927,
    eric: { options: ["John Dewar (of Dewar's whisky)", "Arthur Bell (of Bell's whisky)", "Matthew Gloag (of The Famous Grouse)", "John Walker (of Johnnie Walker)"], correct: 0, explanation: "John Dewar of the Dewar's whisky family. The course had shrunk back to 6 holes in 1897 when a tenant reclaimed land. Dewar's gift of land in 1927 restored it to 18 holes. Perth and whisky — a natural partnership." },
    ruth: { options: ["The Dewar's whisky family!", "The Dewar's whisky family!", "Whisky saved golf", "Eric raises a glass to John Dewar"], correct: 0, explanation: "Dewar's whisky saved Perth golf! The course had shrunk to 6 holes until the Dewar family donated land." } },
  { id: 611, category: "perth-inches", question: "Did the 1396 Battle of the North Inch actually resolve the clan feud?", year: 1396,
    eric: { options: ["No — Clan Chattan burned Clan Cameron in a church on Palm Sunday 1429; the dispute lasted until the 17th century", "Yes — the clans were reconciled immediately and became allies", "Partially — there was peace for 100 years before fighting resumed", "The historical record is silent on what happened afterwards"], correct: 0, explanation: "No! Clan Chattan and Clan Cameron were 'at each other's throats' again by the early 15th century. On Palm Sunday 1429, Clan Chattan burned a church containing Clan Cameron members. The dispute wasn't settled until court proceedings near the end of the 17th century — 300 years later." },
    ruth: { options: ["No! They were fighting again within 33 years!", "No! They were fighting again within 33 years!", "48 men died for nothing", "Eric is not surprised"], correct: 0, explanation: "Not even close! 48 men dead and within 33 years they were burning each other in churches. The feud lasted 300 more years." } },

  // ─── Perth & Kinross Council / Local News ─────────────────────
  { id: 612, category: "perth-council", question: "Perth was granted city status in which year, and for what occasion?", year: 2012,
    eric: { options: ["2012 — Queen's Diamond Jubilee (it was the only Scottish bidder)", "2022 — Queen's Platinum Jubilee", "2002 — Queen's Golden Jubilee", "1975 — local government reorganisation"], correct: 0, explanation: "2012 — Perth was the only Scottish bidder and won city status as part of the Queen's Diamond Jubilee competition. Perth had been a Royal Burgh but lost its city title in the 1975 local government reorganisation. In 2022, Dunfermline won city status (Platinum Jubilee), becoming Scotland's eighth city." },
    ruth: { options: ["2012! Diamond Jubilee!", "2012! Diamond Jubilee!", "Perth is officially a city now", "Eric lives in a city (sounds grander)"], correct: 0, explanation: "2012! Perth lost its city title in 1975 and had to apply to get it back. The only Scottish bidder for the Diamond Jubilee competition." } },
  { id: 613, category: "perth-council", question: "Perth Museum opened in 2024 in the former City Hall. How much did the transformation cost, and who designed it?", year: 2024,
    eric: { options: ["£27 million, designed by Dutch architects Mecanoo", "£10 million, designed by Richard Murphy Architects", "£50 million, designed by Foster + Partners", "£15 million, designed by Page\\Park Architects"], correct: 0, explanation: "£27 million transformation by Mecanoo (Dutch architects). Opened 30 March 2024. Over 250,000 visitors in year one — 50% above target. The centrepiece is the Stone of Destiny, displayed for free in a two-storey oak box — back in Perthshire for the first time in 700 years." },
    ruth: { options: ["£27 million by Mecanoo!", "£27 million by Mecanoo!", "250,000 visitors in year one", "Eric has been (has he?)"], correct: 0, explanation: "£27 million! Dutch architects transformed the old City Hall. The Stone of Destiny is the star attraction — free to see." } },
  { id: 614, category: "perth-council", question: "In July 2025, a man in a kilt attempted to do what to the Stone of Destiny at Perth Museum?", year: 2025,
    eric: { options: ["Smash the display case", "Steal it and carry it out the front door", "Chain himself to it in protest", "Take a selfie while sitting on it"], correct: 0, explanation: "A man in a kilt tried to smash the display case housing the Stone of Destiny at Perth Museum in July 2025. The Stone had been returned to Perthshire for the first time in 700 years, was temporarily sent to Westminster for Charles III's coronation in May 2023, and apparently attracts strong feelings." },
    ruth: { options: ["Smash the display case!", "Smash the display case!", "In a kilt! Very dramatic", "Eric would never do this"], correct: 0, explanation: "Tried to smash the case! In a kilt! The Stone of Destiny does seem to bring out strong emotions in people." } },
  { id: 615, category: "perth-council", question: "The Cross Tay Link Road opened on 31 March 2025. What is the new bridge over the Tay called?", year: 2025,
    eric: { options: ["Destiny Bridge (307 metres long)", "Scone Bridge", "Robert the Bruce Bridge", "Fair Maid Bridge"], correct: 0, explanation: "Destiny Bridge — 307 metres long, part of the £150 million Cross Tay Link Road. Named after the Stone of Destiny, which is now displayed just a mile away at Perth Museum. Perth's newest river crossing." },
    ruth: { options: ["Destiny Bridge!", "Destiny Bridge!", "307 metres of bridge", "Eric has driven across it (probably)"], correct: 0, explanation: "Destiny Bridge! Named after the Stone of Destiny. Perth's newest bridge at 307 metres." } },
  { id: 616, category: "perth-council", question: "St Johnstone achieved what historic double in 2021?", year: 2021,
    eric: { options: ["Won both the Scottish Cup and the League Cup in the same season — Shaun Rooney scored both winners", "Won the Scottish Premiership and the Scottish Cup", "Won the League Cup twice in one calendar year", "Won the Scottish Cup and qualified for the Champions League"], correct: 0, explanation: "St Johnstone won both the League Cup AND Scottish Cup in the 2020-21 season — the first time any team outside Celtic and Rangers had won the domestic cup double. Shaun Rooney scored the winning goal in BOTH finals. Bookmakers had offered 10,000/1 against the double. They were then relegated in May 2025." },
    ruth: { options: ["Scottish Cup AND League Cup! Shaun Rooney scored both winners!", "Scottish Cup AND League Cup! Shaun Rooney scored both winners!", "10,000 to 1 odds!", "Eric was at both finals (was he?)"], correct: 0, explanation: "Both cups in one season! Shaun Rooney scored the winner in both finals. 10,000/1! Then they got relegated four years later." } },
  { id: 617, category: "perth-council", question: "Perth and Kinross Council raised council tax by how much in 2025/26?", year: 2025,
    eric: { options: ["9.5% — a record increase", "3%", "5%", "15%"], correct: 0, explanation: "A record 9.5% council tax rise in 2025/26, followed by 8.9% in 2026/27. Second homes now pay 200% council tax (unanimously approved December 2023). There are 1,160 second homes in the area — 488 in Highland Perthshire alone." },
    ruth: { options: ["9.5%! A record!", "9.5%! A record!", "Eric's council tax bill went up", "Followed by 8.9% the next year"], correct: 0, explanation: "Nine point five percent! A record. And 8.9% the year after. Second homes now pay double." } },
  { id: 618, category: "perth-council", question: "Storm Babet hit Perth in October 2023 with a Met Office Red warning. How much rain fell in 24 hours at Waterside Perth?", year: 2023,
    eric: { options: ["170mm", "80mm", "250mm", "50mm"], correct: 0, explanation: "170mm of rainfall in 24 hours at Waterside Perth. The council later admitted failing to close South Inch floodgates during the September 2023 flooding (a month before Babet). A £27 million flood protection scheme for Comrie started construction in October 2024." },
    ruth: { options: ["170mm! Nearly 7 inches!", "170mm! Nearly 7 inches!", "A LOT of rain", "Eric got very wet"], correct: 0, explanation: "170mm in 24 hours! And the council forgot to close the South Inch floodgates a month earlier. Oops." } },
  { id: 619, category: "perth-council", question: "Bertha Park High School, which opened in 2019, was notable for being what?", year: 2019,
    eric: { options: ["The first new secondary school built in Scotland since 2002, and the only UK school in Microsoft's Flagship programme", "The largest school in Scotland by floor area", "The first carbon-neutral school in the UK", "Scotland's first school with no classrooms"], correct: 0, explanation: "The first new secondary school in Scotland since 2002 — a 17-year gap. Also the only school in the UK to be part of Microsoft's Flagship School programme. Named after the Roman fort of Bertha, near the confluence of the Tay and Almond." },
    ruth: { options: ["First new Scottish secondary since 2002!", "First new Scottish secondary since 2002!", "17 years without a new school", "Eric didn't go there (too new)"], correct: 0, explanation: "The first new secondary school built in Scotland in 17 years! And a Microsoft Flagship school." } },
  { id: 620, category: "perth-council", question: "The closure of Dewar's ice rink caused uproar in Perth. Why was it particularly significant?", year: null,
    eric: { options: ["World Curling is headquartered in Perth — closing the ice rink was an embarrassment for the curling capital of the world", "It was the oldest ice rink in Scotland", "The Scottish ice hockey team trained there", "It was the venue for the Winter Olympics bid"], correct: 0, explanation: "World Curling Federation is headquartered in Perth — the spiritual home of curling. Closing the city's ice rink while hosting the world governing body was described as deeply embarrassing. The rink was closed as part of the controversial £74 million PH2O leisure development plans." },
    ruth: { options: ["World Curling is based in Perth!", "World Curling is based in Perth!", "Closing the ice rink in the home of curling", "Eric used to curl there (did he?)"], correct: 0, explanation: "The world curling HQ is in Perth, and they closed the ice rink! The irony was not lost on the curling community." } },
  { id: 621, category: "perth-council", question: "A Crazy Frog mural appeared on a cottage in the Perth and Kinross village of Errol. What happened?", year: null,
    eric: { options: ["The council investigated it as a potential planning issue but took no action — the cottage was renamed 'Froghoop Cottage'", "The council ordered it removed under conservation area rules", "The owner was fined £500 for breach of planning", "It was vandalised within a week and had to be repainted"], correct: 0, explanation: "The Crazy Frog mural on 'Froghoop Cottage' in Errol was investigated by the council as a potential planning/conservation issue. After consideration, no enforcement action was taken. The cottage's rename to 'Froghoop Cottage' was presumably not subject to planning permission." },
    ruth: { options: ["No action — they renamed the cottage 'Froghoop Cottage'!", "No action — they renamed the cottage 'Froghoop Cottage'!", "Crazy Frog on a Scottish cottage", "Eric has never heard the Crazy Frog (lucky him)"], correct: 0, explanation: "The council investigated and did nothing! The cottage is now called Froghoop Cottage. Peak rural Scotland." } },
  { id: 622, category: "perth-council", question: "Which Hollywood actor was investigated by Perth and Kinross Council for unauthorised work at his mansion?", year: null,
    eric: { options: ["Ewan McGregor", "Sean Connery", "Gerard Butler", "Robert Carlyle"], correct: 0, explanation: "Ewan McGregor — investigated for unauthorised work at his Perthshire mansion. Obi-Wan Kenobi vs Perth and Kinross Council planning department. The Force was apparently insufficient to secure retrospective planning permission without scrutiny." },
    ruth: { options: ["Ewan McGregor!", "Ewan McGregor!", "Obi-Wan Kenobi vs the planning department", "Eric follows the rules (usually)"], correct: 0, explanation: "Ewan McGregor! Even Jedi Knights need planning permission in Perth and Kinross." } },
  { id: 623, category: "perth-council", question: "The A9 dualling from Perth to Inverness was originally due for completion by 2025. What is the revised target?", year: null,
    eric: { options: ["2035 — with only 35% complete as of October 2025", "2028", "2030", "It has been cancelled entirely"], correct: 0, explanation: "Pushed back from 2025 to 2035 — a decade's delay. As of October 2025, only 35% of the dualling was complete. The A9 is Scotland's most dangerous trunk road. The delay has been a persistent political controversy." },
    ruth: { options: ["2035! A ten-year delay!", "2035! A ten-year delay!", "Only 35% done", "Eric drives the A9 a lot (carefully)"], correct: 0, explanation: "Ten years late! Only a third done. Scotland's most delayed road project." } },
  { id: 624, category: "perth-council", question: "Perth had 2.3 million visitors in 2023. What drove a 68% footfall increase in 2024?", year: 2024,
    eric: { options: ["Perth Museum opening (with the Stone of Destiny)", "Taylor Swift concert at Scone Palace", "Perth winning UK City of Culture", "A new Primark opening on the High Street"], correct: 0, explanation: "Perth Museum — with the Stone of Destiny as its centrepiece — drove a 68% increase in city centre footfall after opening on 30 March 2024. The 2.3 million visitors in 2023 generated £703 million for the local economy." },
    ruth: { options: ["Perth Museum and the Stone of Destiny!", "Perth Museum and the Stone of Destiny!", "£703 million from tourism", "Eric contributes by buying coffee"], correct: 0, explanation: "The new museum with the Stone of Destiny! 68% more people in the city centre. That's a lot of museum gift shop sales." } },
  { id: 625, category: "perth-council", question: "In November 2023, Perth and Kinross switched to 'twin-stream' recycling. What changed?", year: 2023,
    eric: { options: ["Blue bins became paper/cardboard only; new grey bins for plastics and cans", "All recycling went into one bin", "Food waste bins were introduced for the first time", "Glass collection was added to the kerbside service"], correct: 0, explanation: "Blue bins became paper and cardboard only. New grey-lidded bins were introduced for plastics, cans, and cartons. Non-recyclable waste now goes to Energy from Waste rather than landfill. The change caused considerable local confusion." },
    ruth: { options: ["Blue for paper, grey for plastics!", "Blue for paper, grey for plastics!", "Very confusing at first", "Eric still puts things in the wrong bin"], correct: 0, explanation: "Blue for paper only, grey for plastics! The whole of Perth and Kinross had to relearn which bin was which." } },
  { id: 626, category: "perth-council", question: "Perth Racecourse merged with which nearby estate in 2023?", year: 2023,
    eric: { options: ["Scone Palace", "Blair Castle", "Glamis Castle", "Drummond Castle"], correct: 0, explanation: "Perth Racecourse merged with Scone Palace in 2023. The racecourse has been at Scone Palace Parklands since 1908 (having moved from the South Inch). It's the northernmost racecourse in Britain. Racing on the South Inch dates back to 1613." },
    ruth: { options: ["Scone Palace!", "Scone Palace!", "Horses and coronations", "Eric has been to Perth Races"], correct: 0, explanation: "Scone Palace! The racecourse and the palace joined forces. Racing at Scone since 1908." } },
  { id: 627, category: "perth-council", question: "How many second homes are there in Perth and Kinross, and what council tax rate do they now pay?", year: 2023,
    eric: { options: ["1,160 second homes — now paying 200% council tax (unanimously approved December 2023)", "500 second homes — paying 150%", "2,000 second homes — paying 100% (standard rate)", "750 second homes — paying 250%"], correct: 0, explanation: "1,160 second homes — now paying 200% council tax, unanimously approved in December 2023. 488 of those are in Highland Perthshire alone. The measure was designed to discourage holiday homes and free up housing for local residents." },
    ruth: { options: ["1,160 homes paying double council tax!", "1,160 homes paying double council tax!", "Unanimously approved!", "Eric's house is his only house"], correct: 0, explanation: "Double council tax on second homes! 1,160 of them in the area, nearly half in Highland Perthshire." } },
  { id: 628, category: "perth-council", question: "The Perth and Kinross Council SNP leader was charged with embezzlement in 2025. What happened next?", year: 2025,
    eric: { options: ["He resigned as leader, then the charges were dropped", "He was convicted and sentenced to community service", "He was acquitted after a trial", "He refused to resign and was eventually cleared"], correct: 0, explanation: "Council leader Grant Laing was charged with embezzlement in 2025. He resigned as SNP group leader. The charges were subsequently dropped. A dramatic few months in Perth local politics." },
    ruth: { options: ["Resigned, then charges were dropped!", "Resigned, then charges were dropped!", "Perth politics is never dull", "Eric stays out of politics (wise)"], correct: 0, explanation: "Charged, resigned, charges dropped. Perth and Kinross Council: more drama than a soap opera." } },
  { id: 629, category: "perth-council", question: "What odds did bookmakers offer against St Johnstone winning the Scottish cup double in 2020-21?", year: 2021,
    eric: { options: ["10,000/1", "500/1", "100/1", "1,000/1"], correct: 0, explanation: "10,000 to 1! St Johnstone won both the League Cup (beating Livingston 1-0) and the Scottish Cup (beating Hibernian 1-0). Shaun Rooney scored the winning goal in BOTH finals — headers from the right side. Within four years, they were relegated." },
    ruth: { options: ["TEN THOUSAND to one!", "TEN THOUSAND to one!", "Shaun Rooney scored both winners", "Then they got relegated (cruel)"], correct: 0, explanation: "10,000/1! Both cups in one season, same player scoring both winners. Then relegated four years later. Football is brutal." } },
  { id: 630, category: "perth-council", question: "The council admitted failing to close floodgates on which park during September 2023 flooding?", year: 2023,
    eric: { options: ["The South Inch", "The North Inch", "Both Inches", "Scone Palace grounds"], correct: 0, explanation: "The South Inch — the council admitted failing to close the South Inch floodgates during September 2023 flooding (a month before Storm Babet made things worse with 170mm of rain in 24 hours). The £25 million flood defences completed in 2001 are only useful if someone remembers to close the gates." },
    ruth: { options: ["The South Inch!", "The South Inch!", "They forgot to close the gates!", "Eric would have remembered"], correct: 0, explanation: "They forgot to close the floodgates! £25 million of flood defences, and someone forgot to shut the door." } },
  { id: 631, category: "perth-council", question: "How much is the PH2O leisure development planned to cost?", year: null,
    eric: { options: ["£74 million", "£20 million", "£150 million", "£40 million"], correct: 0, explanation: "£74 million — a new leisure centre to replace Perth Leisure Pool and Dewar's ice rink. Hugely controversial: the closure of the ice rink outraged the curling community (World Curling is headquartered in Perth), and the cost has been questioned given the council's financial pressures and record council tax rises." },
    ruth: { options: ["£74 million!", "£74 million!", "Very expensive swimming", "Eric just wants the ice rink back"], correct: 0, explanation: "£74 million for a new leisure centre! Meanwhile they closed the ice rink and upset every curler in Perth." } },

  // ─── Perth Academy & Viewlands Primary ────────────────────────
  { id: 632, category: "perth-academy", question: "What is Perth Academy's motto?", year: null,
    eric: { options: ["'Pro Rege, Lege et Grege' — For the King, the Law, and the People", "'Scientia et Virtute' — By Knowledge and Virtue", "'Floreat Academia' — May the Academy Flourish", "'Dum Spiro Spero' — While I Breathe, I Hope"], correct: 0, explanation: "'Pro Rege, Lege et Grege' — For the King, the Law, and the People. Perth Academy's roots go back to the 12th century, when a grammar school was established by Benedictine monks of Dunfermline Abbey during the reign of William the Lion (1165-1214)." },
    ruth: { options: ["For the King, the Law, and the People!", "For the King, the Law, and the People!", "Very grand for a school", "Eric can still recite it (can he?)"], correct: 0, explanation: "For the King, the Law, and the People! A motto as old as Perth itself." } },
  { id: 633, category: "perth-academy", question: "Perth Academy traces its origins back to monks from which abbey during the reign of William the Lion?", year: null,
    eric: { options: ["Dunfermline Abbey (Benedictine monks, 12th century)", "Scone Abbey", "Arbroath Abbey", "Iona Abbey"], correct: 0, explanation: "Benedictine monks of Dunfermline Abbey established a grammar school in Perth during the reign of William the Lion (1165-1214). The name 'Perth Academy' first appeared in 1542. The formal founding date is 1696, though the school is centuries older." },
    ruth: { options: ["Dunfermline Abbey!", "Dunfermline Abbey!", "Monks started the school", "Eric's school is medieval"], correct: 0, explanation: "Monks from Dunfermline Abbey! Perth Academy has been educating Perth's children for over 800 years." } },
  { id: 634, category: "perth-academy", question: "The old Perth Academy building on Rose Terrace (1807) was designed by Robert Reid. What else did Reid design in Perth?", year: 1807,
    eric: { options: ["The French prisoner-of-war depot south of the South Inch (1810-1812, now HM Prison Perth)", "Smeaton's Bridge", "Bell's Sports Centre", "The Fair Maid's House"], correct: 0, explanation: "Robert Reid (1774-1856) designed both Perth Academy's Rose Terrace building (1803-1807) and the prisoner-of-war depot for French Napoleonic POWs (1810-1812) — now Scotland's oldest working prison. He later became King's Architect and Surveyor in Scotland. The old Academy is Category A listed." },
    ruth: { options: ["The French prisoner-of-war camp (now the prison)!", "The French prisoner-of-war camp (now the prison)!", "Same architect: school and prison", "Eric's school architect also designed a jail"], correct: 0, explanation: "The same man designed both the school and the prison! Robert Reid — King's Architect for Scotland." } },
  { id: 635, category: "perth-academy", question: "When did Perth Academy move to its current Viewlands campus?", year: 1932,
    eric: { options: ["1 September 1932", "1 September 1960", "1 September 1907", "1 September 1945"], correct: 0, explanation: "1 September 1932 — designed by Edinburgh architects Reid & Forbes (no relation to Robert Reid). The Rose Terrace building (1807) was converted to council offices. Major extensions were added to the Viewlands campus in 1990. The school shares its campus with Viewlands Primary School and Fairview School." },
    ruth: { options: ["1932!", "1932!", "Eric's school moved there before he was born", "The old building is still standing"], correct: 0, explanation: "1 September 1932! The old Rose Terrace building became council offices. The new campus is next door to Viewlands Primary." } },
  { id: 636, category: "perth-academy", question: "Cromwell's forces destroyed the Perth Academy building in 1651. What did they use the materials for?", year: 1651,
    eric: { options: ["Building the South Inch citadel (along with houses and gravestones)", "Constructing barracks at Scone Palace", "Repairing the bridge over the Tay", "Building a new fort at Dundee"], correct: 0, explanation: "Cromwell's soldiers demolished the school building (along with houses and tombstones from Greyfriars) to build the South Inch citadel. The school relocated to St Ann's Vennel. Cromwell demolished Perth's school, stole its gravestones, and built a fortress. Not popular." },
    ruth: { options: ["Building the citadel on the South Inch!", "Building the citadel on the South Inch!", "Cromwell knocked down the school!", "Eric is still angry about this"], correct: 0, explanation: "Cromwell demolished Eric's school! Used the stones to build a fort on the South Inch. Outrageous." } },
  { id: 637, category: "perth-academy", question: "Perth Academy FP Patrick Geddes (1854-1932) is considered a pioneer of what field?", year: null,
    eric: { options: ["Town planning (also a biologist, sociologist, and geographer)", "Nuclear physics", "Aviation engineering", "Forensic pathology"], correct: 0, explanation: "Patrick Geddes — pioneering town planner, biologist, sociologist, and geographer. Attended Perth Academy from about age 8, where he read 8-10 books a week and went through the entire school library. Knighted in 1932. His ideas on urban renewal influenced city planning worldwide." },
    ruth: { options: ["Town planning!", "Town planning!", "He read 10 books a week at Perth Academy", "Eric reads... fewer than that"], correct: 0, explanation: "Town planning! He read 8-10 books a week at school and went through the entire library. Overachiever." } },
  { id: 638, category: "perth-academy", question: "Perth Academy FP Arthur Kinmond Bell is better known for what?", year: null,
    eric: { options: ["Bell's whisky — and funding Perth's A.K. Bell Library and Bell's Sports Centre (via the Gannochy Trust)", "Bell's telephone company", "Bell's brewery (not whisky)", "The Bell Rock Lighthouse"], correct: 0, explanation: "A.K. Bell — the whisky distiller behind Bell's whisky. He founded the Gannochy Trust which funded Bell's Sports Centre on the North Inch (1968, largest timber dome in the UK) and the A.K. Bell Library. A Perth Academy FP who gave generously back to his city." },
    ruth: { options: ["Bell's whisky!", "Bell's whisky!", "And the library and sports centre", "Eric appreciates both the whisky and the library"], correct: 0, explanation: "Bell's whisky! He also funded the sports centre and the library. Perth Academy's most generous alumnus." } },
  { id: 639, category: "perth-academy", question: "Perth Academy FP Sir Brian Souter co-founded which major transport company?", year: null,
    eric: { options: ["Stagecoach Group", "FirstGroup", "National Express", "Megabus (as a separate company)"], correct: 0, explanation: "Stagecoach Group — co-founded with his sister Ann Gloag. From a Perth Academy education to building one of the UK's largest transport companies. Other notable FPs include comedian Fred MacAulay, RBS chairman George Mathewson, and poet William Soutar." },
    ruth: { options: ["Stagecoach!", "Stagecoach!", "From Perth Academy to bus empire", "Eric gets the bus sometimes"], correct: 0, explanation: "Stagecoach! From Perth Academy school gates to running one of Britain's biggest bus companies." } },
  { id: 640, category: "perth-academy", question: "Perth Academy FP Patrick Matthew published work on natural selection in 1831. Why is this remarkable?", year: 1831,
    eric: { options: ["It predated Darwin's On the Origin of Species by 28 years", "He was only 15 years old at the time", "He wrote it entirely in Scots", "He published it anonymously and it was attributed to someone else"], correct: 0, explanation: "Patrick Matthew published the concept of natural selection in 1831 — 28 years before Darwin's On the Origin of Species (1859). His ideas appeared in an appendix to a book on naval timber. Darwin acknowledged Matthew's prior publication, though Matthew's work had gone largely unnoticed." },
    ruth: { options: ["28 years before Darwin!", "28 years before Darwin!", "Perth Academy beat Cambridge", "Eric had no idea (now he does)"], correct: 0, explanation: "28 years before Darwin! A Perth Academy man published natural selection first. Hidden in a book about trees." } },
  { id: 641, category: "perth-academy", question: "In 1424, Perth Academy pupils were discouraged from playing what sport?", year: 1424,
    eric: { options: ["Football ('futeball') — the authorities thought it was a nuisance", "Golf — too dangerous near buildings", "Archery — already covered by military training", "Shinty — too many broken windows"], correct: 0, explanation: "Football! The authorities discouraged 'futeball' in 1424. Meanwhile, archery was compulsory on the South Inch and golf (which was also banned by law) was played on the North Inch. Perth Academy pupils: six centuries of getting in trouble for playing games." },
    ruth: { options: ["Football!", "Football!", "Banned 600 years ago (they'd hate VAR)", "Eric played football at school (did he?)"], correct: 0, explanation: "Football! Banned in 1424. Perth Academy pupils have been ignoring authority since the 15th century." } },
  { id: 642, category: "perth-academy", question: "Perth Academy merged with Sharp's Institution in 1915. What was Sharp's?", year: 1915,
    eric: { options: ["A rival Perth school founded in 1860", "A scientific instrument workshop", "A music conservatory", "A theological seminary"], correct: 0, explanation: "Sharp's Institution was a rival Perth school founded in 1860. The merger in 1915 (under Rector Mr Smart) reduced fees and combined the two schools. There's even a joint WWI memorial for Perth Academy and Sharp's Institution pupils. The merger was part of a broader trend of rationalising Perth's educational institutions." },
    ruth: { options: ["A rival Perth school!", "A rival Perth school!", "They merged in 1915", "Eric didn't go to Sharp's (it was gone by then)"], correct: 0, explanation: "A rival school! They merged during WWI. There's a joint war memorial for pupils from both schools." } },
  { id: 643, category: "perth-academy", question: "Until 1968, Perth Academy was what type of school?", year: 1968,
    eric: { options: ["A selective senior secondary — requiring entrance examinations", "A fee-paying independent school", "A technical college", "An all-girls school"], correct: 0, explanation: "A selective senior secondary school requiring entrance examinations. It became comprehensive in 1971, serving all pupils in a defined catchment area. Before 1968, you had to pass an exam to get in. After 1971, everyone in the catchment went there regardless." },
    ruth: { options: ["Selective — you had to pass an exam!", "Selective — you had to pass an exam!", "Now it's comprehensive", "Eric passed the exam (obviously)"], correct: 0, explanation: "You had to pass an entrance exam! It went comprehensive in 1971. No more entrance tests." } },
  { id: 644, category: "perth-academy", question: "A clock and a statue of Britannia were added to the old Rose Terrace building in 1886. Who sculpted the Britannia?", year: 1886,
    eric: { options: ["John Rhind", "William Brodie", "Alexander Handyside Ritchie", "Pittendrigh Macgillivray"], correct: 0, explanation: "John Rhind sculpted the Britannia statue, which sits on the balustraded parapet alongside the clock. The old Rose Terrace building (Robert Reid, 1807) is Category A listed — the highest level of heritage protection. It also features a notable domed octagonal classroom at the rear." },
    ruth: { options: ["John Rhind!", "John Rhind!", "A statue of Britannia on the school", "Eric remembers the old building"], correct: 0, explanation: "John Rhind! Britannia watches over the old school. The building is Category A listed — top-tier heritage." } },
  { id: 645, category: "perth-academy", question: "Perth Academy's current campus includes which other two schools?", year: null,
    eric: { options: ["Viewlands Primary School and Fairview School (additional support needs)", "Goodlyburn Primary and Oakbank Nursery", "Robert Douglas Memorial School and Perth Grammar", "Letham Primary and Perth High School"], correct: 0, explanation: "Viewlands Primary School (opened 1942, motto 'Grow through learning') and Fairview School (additional support needs). All three share the Viewlands campus — Perth Academy arrived in 1932, Viewlands Primary opened 10 years later." },
    ruth: { options: ["Viewlands Primary and Fairview School!", "Viewlands Primary and Fairview School!", "Three schools on one campus", "Eric went to both (the secondary one)"], correct: 0, explanation: "Viewlands Primary and Fairview School! All three on the same campus since the 1940s." } },
  { id: 646, category: "perth-academy", question: "What is Viewlands Primary School's motto?", year: null,
    eric: { options: ["'Grow through learning'", "'Learning is fun'", "'Together we achieve'", "'Every child matters'"], correct: 0, explanation: "'Grow through learning' — Viewlands Primary School opened in 1942 on Oakbank Crescent, Perth. A double-stream primary with 14 classes plus nursery. It sits on the same campus as Perth Academy (which arrived at Viewlands in 1932, 10 years earlier)." },
    ruth: { options: ["Grow through learning!", "Grow through learning!", "A lovely motto", "Eric grew through learning here"], correct: 0, explanation: "Grow through learning! Viewlands Primary — on the same campus as Perth Academy since 1942." } },
  { id: 647, category: "perth-academy", question: "Perth Academy FP William Soutar (1898-1943) was a significant figure in what field?", year: null,
    eric: { options: ["Scottish poetry — wrote in both Scots and English", "Scottish law — became a High Court judge", "Scottish medicine — discovered a vaccine", "Scottish rugby — captained Scotland 15 times"], correct: 0, explanation: "William Soutar was a Scottish poet who wrote in both Scots and English. Born 1898 in Perth, educated at Perth Academy, he spent the last 13 years of his life bedridden due to a spinal condition (ankylosing spondylitis) but continued writing prolifically until his death in 1943." },
    ruth: { options: ["Poetry! In Scots and English!", "Poetry! In Scots and English!", "A Perth poet", "Eric has read his poems (has he?)"], correct: 0, explanation: "A poet! Wrote in both Scots and English. Bedridden for 13 years but never stopped writing." } },
  { id: 648, category: "perth-academy", question: "Edward Smart, maths master then Rector 1899-1930, has what named after him at Perth Academy?", year: null,
    eric: { options: ["Smart Tower", "The Smart Wing", "Smart Hall", "The Edward Smart Library"], correct: 0, explanation: "Smart Tower — named after Rector Edward Smart FRSE, who oversaw the merger with Sharp's Institution in 1915 and planned the move to the Viewlands campus. He was maths master from 1899 before becoming Rector in 1915, serving until 1930." },
    ruth: { options: ["Smart Tower!", "Smart Tower!", "Named after a very smart Rector", "Eric remembers Smart Tower"], correct: 0, explanation: "Smart Tower! Named after the Rector who merged Perth Academy with Sharp's Institution." } },
  { id: 649, category: "perth-academy", question: "The old Perth Academy building on Rose Terrace has what unusual architectural feature at the rear?", year: 1807,
    eric: { options: ["A domed octagonal classroom", "A rooftop observatory", "An underground swimming pool", "A clock tower with a carillon"], correct: 0, explanation: "A domed octagonal classroom — part of Robert Reid's original 1807 design. The building also features a rusticated ground floor, coupled Roman Doric columns, and the Britannia statue added in 1886. It's Category A listed — the highest level of protection for Scottish buildings." },
    ruth: { options: ["A domed octagonal classroom!", "A domed octagonal classroom!", "Eight-sided and domed", "Eric had lessons in an octagon"], correct: 0, explanation: "An eight-sided classroom with a dome! Designed by the King's Architect. Not your average school building." } },
  { id: 650, category: "perth-academy", question: "Perth Academy FP George Mathewson became chairman of which major financial institution?", year: null,
    eric: { options: ["Royal Bank of Scotland (RBS)", "Bank of Scotland", "Standard Life", "Scottish Widows"], correct: 0, explanation: "Royal Bank of Scotland. Other notable Perth Academy FPs include Sir Brian Souter (Stagecoach), comedian Fred MacAulay, judge Sir David Edward (EU Court of Justice), and Baroness Young of Old Scone (House of Lords). Not bad for a school that started in a monastery." },
    ruth: { options: ["RBS!", "RBS!", "From Perth Academy to running a bank", "Eric banks elsewhere (probably)"], correct: 0, explanation: "Royal Bank of Scotland! Perth Academy alumni include bus tycoons, bank chairmen, comedians, and poets." } },
  { id: 651, category: "perth-academy", question: "How many pupils does Perth Academy currently have, and how large is the campus?", year: null,
    eric: { options: ["Approximately 1,016 pupils on an 11.93-hectare campus", "Approximately 2,500 pupils on a 5-hectare campus", "Approximately 500 pupils on a 3-hectare campus", "Approximately 1,800 pupils on a 20-hectare campus"], correct: 0, explanation: "About 1,016 pupils on an 11.93-hectare campus (shared with Viewlands Primary and Fairview School). The current Rector is Eleanor Paul. Perth Academy's vision is TEAM: Together, Engaged, Achieving, Motivated. Core values: Respect, Integrity, Safety, Equity." },
    ruth: { options: ["About 1,016 pupils!", "About 1,016 pupils!", "On a big shared campus", "Eric was one of them once"], correct: 0, explanation: "About a thousand pupils! On a 12-hectare campus shared with two other schools." } }

];
