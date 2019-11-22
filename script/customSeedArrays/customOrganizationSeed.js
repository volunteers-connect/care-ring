const organizationArr = [
  {
    name: '',
    contactFirstName: '',
    contactLastName: '',
    contactEmail: '',
    contactPhone: '',
    missionStatement: '',
    webUrl: '',
    orgImage: '',
    address: '',
    password: ''
  }
]

const organizationNames = [
  'Tree House Humane Society',
  'Whiskers & Tails Rescue Foundation',
  'The Safe Haven Network',
  'Chicago Alliance for Animals',
  'Center for Ethical Science',
  'Canine Therapy Corps',
  'SpiderWorld',
  'Chicago Sinfonietta',
  'The Chicago Humanities Festival',
  'The History Makers',
  'CircEsteem',
  'Greenhouse Theater Center',
  'Girls Rock! Chicago',
  'Ladder Up',
  'Project: VISION',
  'Interfaith Youth Core',
  'El Valor',
  'Genesys Works Chicago',
  'MAPSCorps',
  'Growing Home',
  'FamilyFarmed',
  'Urban Growers Collective',
  'Heifer International Chicago',
  'The Gan Project',
  'Simple Seed',
  'Chicago Votes',
  'BYP100',
  'Mikva Challenge',
  'Women Employed',
  'Center for Technology and Civic Life',
  'Chicago Debates',
  'Progressive Turnout Project',
  'Illinois Green Alliance',
  'Carbon Neutral Cities Alliance',
  'Urban Rivers',
  'Illinois Solar Energy Corporation'
]

const missionStatements = [
  'Founded in 1971, Tree House Humane Society is a cageless shelter primarily for sick, injured, and stray cats. It is located in a new, state-of-the art building in West Rogers Park.',
  'Whiskers & Tails Rescue Foundation is a non-profit 501(c)(3) organization, dedicated to reducing the suffering and overpopulation of feral and stray free roaming community cats through practicing Trap-Neuter-Return (TNR) and Trap-Neuter-Adopt (TNA). We believe, as a community, it is our obligation to come together and be the difference in community cats’ lives.  With an estimated 500,000 to 800,000 cats on the streets of Chicago, by practicing and educating the public on our mission programs, it allow us to not only save lives, lower the cat population numbers on our streets, but it also lowers the euthanasia rates and animal intake numbers at our local area animal pounds.',
  'The Safe Haven Network is a 501(c)(3) nonprofit organization that facilitates temporary emergency boarding for the pets of domestic violence victims.  We address the link between domestic violence and animal abuse through our referral program, as well as community education and outreach.',
  "Formed to make Chicago a more humane city. Our first campaign is to ban the city's inhumane, highly dangerous and completely unnecessary horse carriages.",
  'The Center For Ethical Science (CFES) is a non-profit animal advocacy organization dedicated to educating the public on the vast amount of invasive animal research and testing that goes on every day, how their tax dollars pay for much of it and what they can do to help eliminate it. There are much more effective and humane ways to search for cures to disease and protect the public from the dangers of household products and cosmetics. We also are dedicated to promoting ways to prevent disease such as a healthy diet and lifestyle, which is the best way to avoid illnesses such as cancer, heart disease, diabetes, etc.',
  'Canine Therapy Corps is a Chicago-based network of dedicated volunteers and their certified therapy dogs offering rehabilitative therapy to people with physical and emotional challenges. These programs help restore health and hope to thousands of clients every year.',
  "At SpiderWorld we love spiders and we want everyone else to love them, too! There is an overwhelming amount of misinformation out there about the spider: a beautiful, delicate, ecologically important, and often misunderstood animal. The first goal of our organization (we are still in the very beginning stages of non profit creation) is to create a virtual sanctuary for spiders at spiderworld.org to combat misinformation about them on the internet, or on 'The Web' as we like to call it. Our second goal is to eventually create a physical sanctuary. This would be a facility where unwanted, confiscated, or mistreated spiders can find a forever home, and people can find fun opportunities to learn about these special animals.",
  "The Chicago Sinfonietta is Chicago's premier mid-sized professional orchestra dedicated to Musical Excellence through Diversity. Through its performances and community programs, the Sinfonietta fosters the talents of emerging and established soloists, composers and musicians of color as it creates new, more inclusive audiences for symphonic music.",
  'The Chicago Humanities Festival connects people to the ideas that shape and define us, and promotes the lifelong exploration of what it means to be human. CHF fosters curiosity, celebrates creativity, explores the boundaries of contemporary knowledge and culture, and challenges us to see ourselves and the world anew.',
  'The HistoryMakers is a national, 501(c)(3) non-profit institution committed to preserving, developing and providing easy access to an internationally recognized, archival collection of thousands of African American video oral histories. The purpose of this archive is to educate and to show the breadth and depth of this important American history as told by the first person; to highlight the accomplishments of individual African Americans across a variety of disciplines; to showcase those who have played a role in African American led movements and/or organizations; and to preserve this material for years and generations to come. The HistoryMakers is committed to creating and exposing its archival collection to the widest audience possible using collaborations as well as the Internet, a digital archive and other new technologies.',
  'CircEsteem is a nonprofit youth circus with a mission to unite youth from diverse backgrounds and build self-esteem through the practice and performance of circus arts.',
  'The Greenhouse Theater Center is a 501(c)()3 non-profit organization that serves as a rental facility and theater production company. With five stages and one rehearsal space, the building serves over 50,000 patrons annually.',
  "Girls Rock! Chicago is a 501(c)(3) nonprofit organization dedicated to fostering girls' creative expression self-esteem and community awareness through music. Through our music education programs for girls ages 8 to 16, we are committed to educating girls about the musical, technical, and creative aspects involved in musicianship because we believe that young girls are rarely encouraged to explore self-expressive creative outlets and are less likely to be given access to musical and technical instruction or equipment. We believe that music can be a crucial tool in allowing young women to respond to preconceived notions of what they can do and what they can become.",
  "Since 1994, Ladder Up has been committed to helping hardworking families and students access the financial resources they need to move up the economic ladder. Whether it's helping clients get the tax refunds they deserve, secure the financial aid that makes higher education affordable, or develop positive financial behaviors, Ladder Up provides families and students with the tools they need to climb up and out of poverty.",
  'Our mission is to provide youth in the Bridgeport and Chinatown communities of Chicago with tools for educational, professional, personal, interpersonal, and civic development.',
  "Based in Chicago, Interfaith Youth Core's mission is to make interfaith cooperation a social norm. We focus our efforts on colleges and universities across the United States to train students to become interfaith leaders and to work with faculty, staff and administration to create ecologies of religious pluralism on campus. We work with people of different religious and non-religious backgrounds to work together for the civic good.",
  'El Valor’s mission is to support and challenge urban families to achieve excellence and participate fully in community life. Our programs exist to enrich and empower people with disabilities, the disenfranchised and the underserved.',
  'Genesys Works is a nonprofit organization that trains and employs high school seniors to perform professional services for major corporations. Our mission is to transform the lives of disadvantaged high school students through skills training, meaningful internships, and impactful relationships.',
  'MAPSCorps (Meaningful Active Productive Science in Service to Communities) is a nonprofit organization that provides youth with meaningful employment and STEM (Science Technology Engineering Math) training opportunities through an innovative technology-based community asset mapping program.',
  "Growing Home is a leading social enterprise in empowering people and communities within Chicago. The organization developed Chicago's first USDA Certified organic, high-production urban farms. We strongly believe that organic agriculture is a catalyst for incredible social and economic improvement.",
  'FamilyFarmed is a nonprofit organization committed to expanding the production, marketing and distribution of locally grown and responsibly produced food, to enhance the social, economic, and environmental health of our communities. Our goal is to increase local and sustainable/organic food sales in the region to create new jobs, sustainable economic development and rural revitalization through our primary function areas: Good Food EXPO; Farmer Training Program; Good Food Accelerator; and Market Development.',
  'Urban Growers Collective (UGC) was founded by Laurell Sims and Erika Allen in the fall of 2017. Our approach is to demonstrate and support communities in developing community-based food systems where food is grown, prepared, and distributed within their home communities. In this way, vulnerable populations help themselves by learning how to provide for their own needs in a sustainable manner.',
  "Heifer International is a nonprofit, humanitarian organization committed to ending hunger and poverty and caring for the Earth. We pursue this mission by providing livestock, seeds, trees and training in animal well-being and environmentally sound agricultural practices to families in need in more than 40 countries, including the United States. Our Chicago office helps school, faith and community groups get involved locally to support Heifer's global mission.",
  'The Gan Project endeavors to create a vibrant, sustainable, and healthy Chicago Jewish community through recurring, action oriented environmental and agricultural programming. Through working the land as our ancestors did before us, Jews from all walks of life can revitalize their connection to some of the most basic principles of Judaism. By providing positive experiences in nature we can breath life into old traditions, explore the foundation of our faith, and foster a greater understanding of Torah.',
  "Simple Seed's mission is to enhance the livelihoods of small-scale farmers in Africa by providing them with access to credit and promoting the distinctive value of their produce.",
  "Chicago Votes is a civic organization created for and by leaders from the city's Millennial and Hip Hop Generation (think people born after Elvis died in 1977 and before Facebook was born in 2004), which aims to engage young Chicagoans in the political process.",
  'BYP 100 is an activist member-based organization of Black 18-35 year olds, dedicated to creating justice and freedom for all Black people. We do this through building a collective focused on transformative leadership development, direct action organizing, advocacy and education.',
  'Mikva Challenge is a non-partisan nonprofit that trains the next generation of civic leaders to take action now through innovative programs that put young people at the center of the democratic process. Our mission is to develop the next generation of civic leaders, activists and policymakers by giving young people the opportunity to actively participate in the political process. By opening up spaces for democratic education and youth participation in Chicago schools and government, we strive to prioritize the needs of low-income youth and under-resourced Chicago neighborhoods and schools. Currently, we engage more than 5000 students from over 80 Chicago schools in the skills needed to become active participants in their schools and communities.',
  'Women Employed has one passion: to make life better for working women. We believe that all women deserve full and fair economic opportunities. That means better career options and higher pay, more opportunities for training and education, and strict enforcement of fair employment laws.',
  'CTCL is a non-partisan, non-profit that uses technology to improve the way local governments and communities interact. We do this by providing free and low-cost resources for local election administrators so they can update the ways they use technology to communicate with voters. We also do this by publishing free, open-source civic datasets that are used in some of the most powerful tools that drive civic participation.',
  'Through the transformational activity of debate, Chicago Debates empowers Chicago youth to find their voice, succeed in college and career, and become community leaders. In partnership with Chicago Public Schools, Chicago Debates administers and supports debate programming in nearly 90 middle and high schools across the city. As the largest urban policy debate league in the country, we will support approximately 1600 CPS students in the 2018-2019 school year.',
  'Progressive Turnout Project is a grassroots-funded organization with a single mission: get Democrats to the polls. We design, test, and execute specialized voter turnout programs targeting inconsistent Democratic voters in the most competitive districts in the country.',
  'The Illinois Green Alliance (formerly USGBC-Illinois) is a member funded and directed non-profit organization working to transform the region’s built environment to become ecologically sustainable, profitable, and healthy. We accomplish this through education, advocacy and collaboration.',
  'The Carbon Neutral Cities Alliance (CNCA) is an international network of leading cities working to cut greenhouse gas (GHG) emissions by 80-100% by 2050 or sooner—the most aggressive GHG reduction targets undertaken anywhere in the world. The Alliance aims to address what it will take for leading global cities to achieve these deep emissions reductions and how they can work together to meet their respective goals more efficiently and effectively.',
  'Our mission is to transform urban waterways into wildlife sanctuaries, to provide an opportunity for residents to connect with nature in new, meaningful ways.',
  'The Illinois Solar Energy Association is a non-profit organization that promotes the widespread application of renewable energy through education and advocacy. As the Illinois chapter of the American Solar Energy Society, we are the local resource for educational classes, events, renewable energy related policy developments, local news and access to local renewable energy vendors.'
]
