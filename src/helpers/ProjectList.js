import MTGBanner from "../assets/projects/mtg-banner.png";
import PortfolioBanner from "../assets/projects/portfolio-banner.png";
import SBATBanner from "../assets/projects/sbat-banner.png"
import EE4211Banner from "../assets/projects/ee4211-banner.gif"
import CG3207Banner from "../assets/projects/cg3207-banner.png"
import CG4002Banner from "../assets/projects/cg4002-banner.png"
import CS3241Banner from "../assets/projects/cs3241-banner.png"
import CS2113TBanner from "../assets/projects/cs2113t-banner.png"

export const PersonalProjectList = [
  {
    image: MTGBanner,
    name: "Magic: The Gathering Card Price Comparison",
    status: "Starting in Dec 2023",
    shortdesc: "A website that allows users to compare card prices between MTG hobby shops in Singapore. ",
    longdesc: " <p>\
                  The inspiration for this project came about when a friend and I spent over 3 hours comparing the prices of 100 individual cards across at least 6 different MTG hobby shops across Singapore.\
                </p>\
                <p>\
                  We decided that there had to be a faster way to do this instead of manually tabulating prices using Microsoft Excel and thus, this project was born.\
                </p>\
              ",
    skills: ["Django", "Python"],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Coming Soon"
  },
  {
    image: SBATBanner,
    name: "Sentiment-based Algorithmic Trading",
    status: "Paused (to study for school)",
    shortdesc: "Using sentiment from online articles to enter Crypto trading positions.",
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
    ghlinkreason: "Private"
  },
  {
    image: PortfolioBanner,
    name: "Portfolio Website",
    status: "Completed",
    shortdesc: "A React.js website to showcase my work - this website!",
    longdesc: " <p>\
                  This website is my first attempt at Front-end Development with almost no prior experience; just a lot of Googling and learning from tutorials.\
                </p>\
                <p>\
                  I had a blast making it! 😊\
                </p>",
    skills: ["JavaScript", "HTML", "CSS", "React.js", "Node.js"],
    ghlink:"https://github.com/renzocanare/portfolio-website",
    ghlinkavail: true,
    ghlinkreason: ""
  },
];

export const SchoolProjectList = [
  {
    image: EE4211Banner,
    name: "EE4211 Data Science for the Internet of Things",
    status: "Completed Semester 1 AY23/24",
    shortdesc: "Predicting carpark availability in Singapore based on historical data using various Machine Learning models.",
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
    skills: ["Python", "SKLearn", "Pandas", "Machine Learning"],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Coming Soon"
  },
  {
    image: CG3207Banner,
    name: "CG3207 Computer Architecture",
    status: "Completed Semester 1 AY23/24",
    shortdesc: "Single-cycle processor that supports all basic ARM DP/Mem/Branch instructions with additional optimizations.",
    longdesc: " <p>\
                  Working as a team of 2, we developed a single-cycle processor using the concepts taught in this course.\
                </p>\
                <p>\
                  Our final project could support all basic ARM DP/Mem/Branch instructions, with the addition of SMULL/UMULL through multi-cycle micro operations.\
                </p>",
    skills: ["Verilog", "ARM", "Vivado", "Hardware Design" ],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Private"
  },
  {
    image: CG4002Banner,
    name: "CG4002 Computer Engineering Capstone",
    status: "Completed Semester 1 AY22/23",
    shortdesc: "Developed the Augmented Reality Visualizer component for our Laser Tag system using Unity AR.",
    longdesc: " <p>\
                  Working in a team of 5, I was the Visualizer Component Lead for my Computer Engineering Capstone Project.\
                </p>\
                <p>\
                  This involved designing an Android/iOS Augmented Reality (AR) visualizer using Unity AR that displayed various animations \
                  such as shooting, throwing grenades and using an energy shield (depending on the action of the player). The AR visualizer could also display important game information such ammo & grenade count and number of shields remaining.\
                </p>\
                <p>\
                  MQTT was used to receive and relay live information between the game engine and our AR visualizer.\
                </p>",
    skills: ["Unity AR", "C# Programming", "MQTT", "Python"],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Coming Soon"
  },
  {
    image: CS3241Banner,
    name: "CS3241 Computer Graphics",
    status: "Completed Semester 1 AY22/23",
    shortdesc: "Implemented various computer graphics algorithms in simple 2D and 3D programs.",
    longdesc: " <p>\
                  This course explored the fundamentals of programming in computer graphics, the Mathematics behind it and culminated with a final lab project that utilized the Whitted Ray Tracing algorithm to demonstrate how Raytracing works.\
                </p>",
    skills: ["C++ Programming", "OpenGL/GLUT", "Computer Graphics"],
    ghlink:"https://github.com/renzocanare/nus-renzocanare/tree/main/CS3241",
    ghlinkavail: true,
    ghlinkreason: ""
  },
  {
    image: CS2113TBanner,
    name: "CS2113T Software Engineering & OOP",
    status: "Completed Semester 1 AY21/22",
    shortdesc: "A CLI application that helps restaurant hawkers and owners to keep track of their food resources.",
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
    ghlinkreason: ""
  },
];