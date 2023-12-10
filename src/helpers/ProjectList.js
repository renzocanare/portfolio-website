import MTGBanner from "../assets/projects/mtg-banner.png";
import SBATBanner from "../assets/projects/sbat-banner.png"
import PortfolioBanner from "../assets/projects/portfolio-banner.png";
import LBPBanner from "../assets/projects/lbp-banner.png";
import GBABanner from "../assets/projects/gba-banner.gif";
import EE4211Banner from "../assets/projects/ee4211-banner.gif"
import CG3207Banner from "../assets/projects/cg3207-banner.png"
import CS3243Banner from "../assets/projects/cs3243-banner.png"
import CS2102Banner from "../assets/projects/cs2102-banner.png"
import CG4002Banner from "../assets/projects/cg4002-banner.png"
import CS3241Banner from "../assets/projects/cs3241-banner.png"
import EE4204Banner from "../assets/projects/ee4204-banner.png"
import CG2271Banner from "../assets/projects/cg2271-banner.gif"
import CS2113TBanner from "../assets/projects/cs2113t-banner.png"

export const PersonalProjectList = [
  {
    image: MTGBanner,
    name: "Magic: The Gathering Card Price Comparison",
    status: "In Progress",
    shortdesc: "A website that allows users to compare card prices between MTG hobby shops in Singapore. ",
    // eslint-disable-next-line
    longdesc: " <p>\
                  The inspiration for this project came about when a friend and I spent over 3 hours comparing the prices of 100 individual cards across at least 6 different MTG hobby shops across Singapore.\
                </p>\
                <p>\
                  We decided that there had to be a faster way to do this instead of manually tabulating prices using Microsoft Excel and thus, this project was born.\
                </p>\
                <p>\
                  As a possible extension to this project, we may integrate card price history with short-term price predictions using simple Machine Learning models.\
                </p>\
              ",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Coming Soon",
    pinned: false
  },
  {
    image: SBATBanner,
    name: "Sentiment-Driven Trading Bot",
    status: "In Progress",
    shortdesc: "Using sentiment from online articles to enter Crypto trading positions.",
    // eslint-disable-next-line
    longdesc: " <p>\
                  A friend shared that he had an interesting Crypto trading algorithm that seemed to work for him, but remarked that it might possibly be better if he could enter his positions faster. \
                </p>\
                <p>\
                  Out of an interest for Machine Learning and to try my hand at Natural Language Processing (and because the idea sounded very fun), I offered to start this project with him. \
                </p>\
                <p>\
                  Working as a team of 2, we are currently in the process of labelling our dataset using Doccano (hosted on a Google Compute Engine) to train a Named Entity Recognition (NER) model.\
                </p>",
    skills: ["Python", "Machine Learning", "NLP (spaCy)", "Doccano"],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Private",
    pinned: false
  },
  {
    image: PortfolioBanner,
    name: "Portfolio Website",
    status: "Completed",
    shortdesc: "A React.js website to showcase my work - this website!",
    // eslint-disable-next-line
    longdesc: " <p>\
                  This website is my first attempt at proper Front-end Development with almost no prior experience; just a lot of Googling and learning from tutorials.\
                </p>\
                <p>\
                  I had a blast making it! 😊\
                </p>",
    skills: ["JavaScript", "HTML", "CSS", "React.js", "Node.js"],
    ghlink:"https://github.com/renzocanare/portfolio-website",
    ghlinkavail: true,
    ghlinkreason: "",
    pinned: false
  },
  {
    image: LBPBanner,
    name: "Laundry Bot",
    status: "Completed",
    shortdesc: "Prototyped a system that automatically notifies Hall residents over Telegram when laundry is completed.",
    // eslint-disable-next-line
    longdesc: " <p>\
                  Working as a team of 2, we prototyped a system which was aimed at improving the quality of life of residents at Eusoff Hall. Since there were only 6 washing machines\
                  shared between approximately 80 residents in each block, we hoped that such a system would help residents to be able to plan their laundry scheduling.\
                </p>\
                <p>\
                  The prototype involved:\
                  <li>Setting up vibration sensors at various washing machines to detect their status.</li>\
                  <li>Connecting these vibration sensors to a Raspberry Pi Zero.</li>\
                  <li>Updating a Google Sheets page with the washing machine status.</li>\
                  <li>Relaying the status information to a Telegram bot where users can check the status or reserve washing machines.</li>\
                </p>\
                <p>\
                  Due to upgrading works to the washing machine areas, we were unable to push our project past the prototyping stage before our last day at Hall.\
              </p>",
    skills: ["Python", "RaspberryPi", "IoT"],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Private",
    pinned: false
  },
  {
    image: GBABanner,
    name: "Retro GameBoy Modding",
    status: "Completed",
    shortdesc: "Restored my old GameBoy Advance system, adding a new backlit IPS LCD screen, a USB-C rechargeable battery pack and replacing the case.",
    // eslint-disable-next-line
    longdesc: " <p>\
                  I spent much of my younger days playing different iterations of Pokemon on my GameBoy. Many years later, I dug it out to find that the original LCD \
                  screen had liquid crystal leakage and the case was showing it's old age. I then decided to restore my GameBoy to it's former glory, with the addition of newer technology that wasn't widely available when this device was released in the early 2000's.\
                </p>\
                <p>\
                  Modifications Made (with some soldering):\
                  <li>Replaced the leaking, non-backlit LCD with a new IPS LCD screen.</li>\
                  <li>Added a USB-C rechargeable battery pack module in place of AA-batteries.</li>\
                  <li>Swapped the original purple case and gray buttons for a sleeker black and orange combination.</li>\
                  <li>Replaced the batteries in my Pokemon GameBoy cartridges so the in-game clock works again.</li>\
                </p>",
    skills: ["Hardware", "Retro Modding", "Tinkering"],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Unavailable",
    pinned: false
  },
];

export const SchoolProjectList= [
  {
    image: EE4211Banner,
    name: "EE4211 Data Science for the Internet of Things",
    status: "Completed Semester 1 AY23/24",
    shortdesc: "Predicting carpark availability in Singapore based on historical data using various Machine Learning models.",
    // eslint-disable-next-line
    longdesc: " <p>\
                  Working as a team of 4, we explored how various Machine Learning models could be applied to real world datasets.\
                </p>\
                <p>\
                  Our final project was aimed at helping users to identify which public carparks near Hawker Centres were likely to be full at a certain hour during the day.\
                  This involved collecting about 5 months of carpark data through API calls and using it to train a Machine Learning model that could predict parking availability.\
                </p>\
                <p>\
                  As a proof of concept, we visualized the predictions using a heatmap for a particular set of carparks that are within 200 metres of a hawker centre (located in the Northern region of Singapore).\
                </p>",      
    skills: ["Python", "SKLearn", "Pandas", "Machine Learning", "IoT"],
    ghlink:"https://github.com/renzocanare/nus-renzocanare/tree/main/EE4211",
    ghlinkavail: true,
    ghlinkreason: "",
    pinned: true
  },
  {
    image: CG3207Banner,
    name: "CG3207 Computer Architecture",
    status: "Completed Semester 1 AY23/24",
    shortdesc: "Single-cycle processor that supports all basic ARM DP/Mem/Branch instructions with additional optimizations.",
    // eslint-disable-next-line
    longdesc: " <p>\
                  Working as a team of 2, we developed a single-cycle processor using the concepts taught in this course.\
                </p>\
                <p>\
                  Our final project could support all basic ARM DP/Mem/Branch instructions, with the addition of SMULL/UMULL through multi-cycle micro operations.\
                </p>",
    skills: ["Verilog", "FPGA", "ARM", "Vivado", "Hardware Design" ],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Private",
    pinned: true
  },
  {
    image: CS3243Banner,
    name: "CS3243 Introduction to Artificial Intelligence",
    status: "Completed Semester 1 AY23/24",
    shortdesc: "Implemented various uninformed/informed search, CSPs and adversarial search algorithms to solve problems and develop AI agents.",
    // eslint-disable-next-line
    longdesc: " <p>\
                  This course involved a series of individual projects that implemented:\
                  <li>Uninformed Search: DFS, BFS, UCS</li>\
                  <li>Informed Search: A* Search</li>\
                  <li>Local Search: Hill-Climbing and its variations</li>\
                  <li>Constraint Satisfaction Problems(CSPs): Variable/Value Order Heuristics, Forward Checking, AC-3</li>\
                  <li>Adversarial Search: Minimax Play with Alpha-Beta Pruning and heuristics</li>\
                </p>\
                <p>\
                  The mathematical theory behind other relevant topics such as Logical Agents and Bayesian Networks were also covered.\
                </p>",
    skills: ["Python", "Artificial Intelligence"],
    ghlink:"https://github.com/renzocanare/nus-renzocanare/tree/main/CS3243",
    ghlinkavail: true,
    ghlinkreason: "",
    pinned: true
  },
  {
    image: CS2102Banner,
    name: "CS2102 Database Systems",
    status: "Completed Semester 1 AY23/24",
    shortdesc: "Explored the fundamentals of Database Systems such as the ER model, querying, stored functions, procedures and triggers using PostgreSQL.",
    // eslint-disable-next-line
    longdesc: " <p>\
                  Through both individual and group work, this course explored Database Systems concepts such as:\
                  <li>Entity-Relationship (ER) Model</li>\
                  <li>SQL Schema and Querying</li>\
                  <li>Relational Algebra and Calculus</li>\
                  <li>Functions, Procedures and Triggers</li>\
                  <li>Functional Dependencies and Normalization</li>\
                  <li>Further Database Algorithms</li>\
                </p>\
                <p>\
                  The practical group projects involved ER Modelling based on a contextual problem, Schema creation and implementation of Functions, Procedures and Triggers.\
                </p>",
    skills: ["PostgreSQL", "Database Systems"],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Unavailable",
    pinned: true
  },
  {
    image: CG4002Banner,
    name: "CG4002 Computer Engineering Capstone",
    status: "Completed Semester 1 AY22/23",
    shortdesc: "Developed the Augmented Reality Visualizer component for our Laser Tag system using Unity AR.",
    // eslint-disable-next-line
    longdesc: " <p>\
                  Working in a team of 5, I was the Visualizer Component Lead for my Computer Engineering Capstone Project.\
                </p>\
                <p>\
                  This involved designing an Android/iOS Augmented Reality (AR) visualizer using Unity AR that displayed various animations \
                  such as shooting, throwing grenades and using an energy shield (depending on the action of the player). The AR visualizer could also display important game information such ammo & grenade count and number of shields remaining.\
                </p>\
                <p>\
                  MQTT was used to relay live information between our game engine and the AR visualizer.\
                </p>",
    skills: ["Unity AR", "C# Programming", "MQTT", "Python"],
    ghlink:"https://github.com/renzocanare/nus-renzocanare/tree/main/CG4002",
    ghlinkavail: true,
    ghlinkreason: "",
    pinned: true
  },
  {
    image: CS3241Banner,
    name: "CS3241 Computer Graphics",
    status: "Completed Semester 1 AY22/23",
    shortdesc: "Implemented various computer graphics algorithms in simple 2D and 3D programs.",
    // eslint-disable-next-line
    longdesc: " <p>\
                  This course explored the fundamentals of programming in computer graphics, the Mathematics behind it and culminated in a final lab project that utilized the Whitted Ray Tracing algorithm to demonstrate how Ray Tracing is applied.\
                </p>",
    skills: ["C++ Programming", "OpenGL/GLUT", "Computer Graphics"],
    ghlink:"https://github.com/renzocanare/nus-renzocanare/tree/main/CS3241",
    ghlinkavail: true,
    ghlinkreason: "",
    pinned: false
  },
  {
    image: EE4204Banner,
    name: "EE4204 Computer Networks",
    status: "Completed Semester 1 AY22/23",
    shortdesc: "Implementation of simple UDP/TCP client-server socket programs for message transfer.",
    // eslint-disable-next-line
    longdesc: " <p>\
                  This project involves developing various UDP and TCP client-server socket programs in C and explores how different versions of such protocols could be used to send short or long messages.\
                </p>",
    skills: ["C Programming", "UDP/TCP", "Computer Networking"],
    ghlink:"https://github.com/renzocanare/nus-renzocanare/tree/main/EE4204",
    ghlinkavail: true,
    ghlinkreason: "",
    pinned: false
  },
  {
    image: CG2271Banner,
    name: "CG2271 Real-Time Operating Systems",
    status: "Completed Semester 2 AY21/22",
    shortdesc: "Developed a robotic car that can be driven using an Android App connected over Bluetooth.",
    // eslint-disable-next-line
    longdesc: " <p>\
                  Working in a team of 4, the aim of this project was to develop a Real-Time Operating System (RTOS) based robotic car that was fully controllable using an Android App over Bluetooth.\
                <p>\
                  The project explored various RTOS concepts such as tasks, scheduling algorithms, RTOS customisation and concurrent real-time programming through practical hands-on experience.\
                </p>",
    skills: ["C Programming", "RTOS", "Hardware"],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Private",
    pinned: false
  },
  {
    image: CS2113TBanner,
    name: "CS2113T Software Engineering & OOP",
    status: "Completed Semester 1 AY21/22",
    shortdesc: "A CLI application that helps restaurant owners and hawkers to keep track of their food resources.",
    // eslint-disable-next-line
    longdesc: " <p>\
                  Working in a team of 4, Food-O-Rama was our final project to demonstrate our understanding of Java, Object-Oriented Programming and working in an Agile environment.\
                </p>\
                <p>\
                  Food-O-Rama is a food wastage tracking application for restaurant owners and hawkers to keep track of their food resources. It provides the user with insight on the amount of ingredients in their storage and how much food is wasted.\
                </p>\
                <p>\
                  We were also tasked with writing documentation for our final project, which can be found <a href='https://ay2122s1-cs2113t-w11-4.github.io/tp/' target='_blank' title='Food-O-Rama Documentation'>here</a>.\
                </p>",
    skills: ["Java", "Software Engineering", "Agile Programming"],
    ghlink:"https://github.com/renzocanare/CS2113T-Team-Project",
    ghlinkavail: true,
    ghlinkreason: "",
    pinned: false
  },
];