
import travel from"../assets/Travel.jpg";
import first from "../assets/Firstproject.png";
import profile from "../assets/Portfolio.jpg";
import turkey from "../assets/Turkey.jpg";


// Array of work objects
export const works = [
  {
    title: "My Trip To Turkey",
    src:turkey,
    tech: ["HTML", "CSS", "PHP"],
    workUrl:
      "https://cs.slu.edu/student/amamidi3/hw2/index.html",
    duration: "400",
  },

  {
    title: "Portfolio Website",
    src:profile,
    tech: ["HTML", "CSS", "Java script"],
    workUrl:
      "https://abhaysai.github.io/Abhay_Portfolio/",
    duration: "500",
  },
  {
    title: "Travel website",
    src:travel,
    tech: ["Javascript", "CSS", "Boottsrap 5", "Jquery"],
    workUrl: "https://cs.slu.edu/student/amamidi3/ProjectA/index.html",
    duration: "600",
  },
  {
    title: "My First Project",
   src:first,
    tech: ["HTML", "CSS"],
    workUrl:
      "https://cs.slu.edu/student/amamidi3/hw1/index.html",
    duration: "700",
  },
];

// Array of experience objects
export const experiences = [
  {
    date: "January 2023 - July 2023",
    company: "TCS",
    position: "Developer",
    description:
      "Implemented and Collaborated with UI/UX teams to enhance website aesthetics and functionality, contributing to the overall success of the KIMS client's online presence.",
  },
  {
    date: "February 2021 - December 2022",
    company: "TCS",
    position: "Junior Developer",
    description:
      "Spearheaded Java-based application development for Humana, implementing innovative features and enhancements to meet client specifications.",
  },
  {
    date: "July 2020 - January 2021",
    company: "TCS",
    position: "Systems Engineer",
    description:
      "Managed and maintained critical infrastructure, troubleshooting technical issues promptly to minimize downtime and enhance system reliability.     ",
  },
];

