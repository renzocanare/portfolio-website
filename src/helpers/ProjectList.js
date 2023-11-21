import Proj2 from "../assets/proj2.jpg";
import PortfolioBanner from "../assets/portfolio-banner.png";
import CG4002Banner from "../assets/cg4002-banner.png"

export const PersonalProjectList = [
  {
    image: PortfolioBanner,
    name: "Portfolio Website",
    status: "In Progress",
    shortdesc: "A ReactJS website to showcase my work - this website!",
    longdesc: "This is a long description inside the modal.",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    ghlink:"https://github.com/renzocanare/portfolio-website",
    ghlinkavail: true,
    ghlinkreason: ""
  },
  {
    image: Proj2,
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
    image: Proj2,
    name: "EE4211 Data Science for the Internet of Things",
    status: "Completed Semester 1 AY23/24",
    shortdesc: "Predicting carpark availability in Singapore based on historical data using various Machine Learning models.",
    longdesc: "This is a long description inside the modal.",
    skills: ["Python", "SKLearn", "Machine Learning"],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Coming Soon"
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
    image: Proj2,
    name: "CS2113T Software Engineering & OOP",
    status: "Completed Semester 1 AY21/22",
    shortdesc: "A CLI application that helps restaurant hawkers and owners to keep track of their food resources.",
    longdesc: "This is a long description inside the modal.",
    skills: ["Java", "Software Engineering", "Agile Programming"],
    ghlink:"",
    ghlinkavail: false,
    ghlinkreason: "Coming Soon"
  },
];