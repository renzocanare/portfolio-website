import MTGBanner from "../assets/mtg-banner.png";
import PortfolioBanner from "../assets/portfolio-banner.png";
import SBATBanner from "../assets/sbat-banner.png"
import EE4211Banner from "../assets/ee4211-banner.gif"
import CG3207Banner from "../assets/cg3207-banner.png"
import CG4002Banner from "../assets/cg4002-banner.png"
import CS2113TBanner from "../assets/cs2113t-banner.png"

export const PersonalProjectList = [
  {
    image: MTGBanner,
    name: "Magic: The Gathering Card Price Comparison",
    status: "Starting in Dec 2023",
    shortdesc: "A website that allows users to compare card prices between MTG hobby shops in Singapore. ",
    longdesc: "This is a long description inside the modal.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Coming Soon"
  },
  {
    image: PortfolioBanner,
    name: "Portfolio Website",
    status: "In Progress",
    shortdesc: "A React.js website to showcase my work - this website!",
    longdesc: "This is a long description inside the modal.",
    skills: ["JavaScript", "HTML", "CSS", "React.js", "Node.js"],
    ghlink:"https://github.com/renzocanare/portfolio-website",
    ghlinkavail: true,
    ghlinkreason: ""
  },
  {
    image: SBATBanner,
    name: "Sentiment-based Algorithmic Trading",
    status: "Paused (to study for school)",
    shortdesc: "Using sentiment from online articles to enter trading positions.",
    longdesc: "This is a long description inside the modal.",
    skills: ["Python", "Machine Learning", "NLP (spaCy)", "Doccano"],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Private"
  },
];

export const SchoolProjectList = [
  {
    image: EE4211Banner,
    name: "EE4211 Data Science for the Internet of Things",
    status: "Completed Semester 1 AY23/24",
    shortdesc: "Predicting carpark availability in Singapore based on historical data using various Machine Learning models.",
    longdesc: "This is a long description inside the modal.",
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
    longdesc: "This is a long description inside the modal.",
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
    longdesc: "This is a long description inside the modal.",
    skills: ["Unity AR", "C# Programming", "MQTT", "Python"],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Coming Soon"
  },
  {
    image: CS2113TBanner,
    name: "CS2113T Software Engineering & OOP",
    status: "Completed Semester 1 AY21/22",
    shortdesc: "A CLI application that helps restaurant hawkers and owners to keep track of their food resources.",
    longdesc: "This is a long description inside the modal.",
    skills: ["Java", "Software Engineering", "Agile Programming"],
    ghlink:"https://github.com/renzocanare/CS2113T-Team-Project",
    ghlinkavail: true,
    ghlinkreason: ""
  },
];