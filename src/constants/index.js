import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import githubAlt from "../assets/tech/github-alt.png";
import github from "../assets/github.png"; 



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: mobile,
  },  
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Collaborative Projects",
    icon: web,
  },

  {
    title: "Hackathons & Competitions",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  /*{
    name: "TypeScript",
    icon: typescript,
  },*/
  {
    name: "React JS",
    icon: reactjs,
  },
  /*{
    name: "Redux Toolkit",
    icon: redux,
  },*/
  /*{
    name: "Tailwind CSS",
    icon: tailwind,
  },*/
  {
    name: "Node JS",
    icon: nodejs,
  },
  /*{
    name: "MongoDB",
    icon: mongodb,
  },*/
  /*{
    name: "Three JS",
    icon: threejs,
  },*/
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub Alt",
    icon: githubAlt ,
  },
  /*{
    name: "figma",
    icon: figma,
  },*/
  /*{
    name: "docker",
    icon: docker,
  },*/
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Feriel defines the club’s vision, leads IT workshops, and oversees challenges.",
    name: "Feriel",
    designation: "President IT",
    company: "OMC",
    image: "",
  },
  {
    testimonial:
      "Chemsou manages infrastructure, coordinates teams, and fosters collaboration.",
    name: "Chmsou",
    designation: "President IT",
    company: "OMC",
    image: "",
  },
  {
    testimonial:
      "Aymen mentors in web development, optimizes platforms, and applies best practices.",
    name: "Aymen",
    designation: "President Web Development",
    company: "OMC",
    image: "",
  },
];

const projects = [
  {
    name: "Profile-Card",
    description:
      "Une carte de profil interactive utilisant HTML et CSS, idéale pour afficher des informations personnelles avec un design élégant.",
    tags: [
      {
        name: "HTML",
        color: "text-blue-400",
      },
      {
        name: "CSS",
        color: "text-orange-400",
      },
    ],
    image: carrent,
    demoLink: [
      { label: "meriem2319", url: "https://benfekhadoumeriem.github.io/profile-card/" },
      { label: "nada", url: "https://nadameriem.github.io/Profile-Card/" },
      { label: "Cerine🦋", url: "https://cerine-it.github.io/profile-card/" },
      { label: "Rawane", url: "https://rawane-dev.github.io/profile-card/" },
      { label: "iness🌸", url: "https://ines-aouali.github.io/profile-card/" },
      { label: "Houda", url: "https://hou-da-nour.github.io/Profile_Card/" },
      { label: "Yousra ♡", url: "https://yousrabch.github.io/First-challange/" },
      { label: "Hadjer_tlb🐰🌸", url: "https://hadjertalbi.github.io/Hadjer/" },
      { label: "zineb hmz", url: "https://hemaizizineb.github.io/Profile-card/" },
      { label: "Nawel💜", url: "https://chellah-nawel.github.io/First-HTML-challenge/" },
      { label: "Maybe", url: "https://may01-cpu.github.io/Profile-card/Profile-Card/" },
      { label: "Cru", url: "https://cru-sudo.github.io/profile_card_/" },
      { label: "achraf amalou", url: "https://achrafamalou77.github.io/OMC-Card-profile/" },
      { label: "*دعاء شهرزاد*", url: "https://douaachahrazed21.github.io/Profile-Card/" },
      { label: "meriem rachedi", url: " https://meriem-rachedi.github.io/challengen1/" },
      { label: "Yous", url: "https://youshs.github.io/Profile_Card/" },
      { label: "oumelkheiirbkh", url: "https://oumelkheirbkh.github.io/omc_first_challenge/" },
      { label: "Lina", url: "https://lina-manel.github.io/first-challenge-OMC/" },
      { label: "fettoumi maya", url: "https://fettoumi.github.io/profil__card-2/ " },
      { label: "HallaMz", url: "https://halla38.github.io/Victor/" },
      { label: "sara", url: "https://sarasdn25.github.io/victor-card/" },
      { label: "Meriem", url: "https://derbassimeriem.github.io/profile-card-/" },
      { label: "Rekaia Benhatite", url: "https://rekaia-benhatite.github.io/Profil_Card/" },
      { label: "Cerine Hafri", url: "https://cerinehafri.github.io/profile-card-challenge-1/" },
      { label: "Takemichi", url: "https://imadzakxy.github.io/profile-insta/" },
      { label: "Amira", url: "https://amirailli.github.io/challenge1/" },
      { label: "Mehdi", url: " https://mehdi-prg.github.io/Profil-Card/" }

    ],
    github: github
  },
  {
    name: "Games",
    description:
      "Une collection de mini-jeux développés avec JavaScript, HTML et CSS, offrant une expérience interactive et engageante.",
    tags: [

      {
        name: "HTML",
        color: "text-blue-400",
      },
      {
        name: "CSS",
        color: "text-orange-400",
      },      
      {
        name: "JavaScript",
        color: "text-yellow-400",
      },
    ],
    image: jobit,
    demoLink: [
      { label: "meriem2319", url: "https://benfekhadoumeriem.github.io/squid-game/games/red-light-green-light.html" },
      { label: "achraf amalou", url: "https://omcgames.netlify.app/" },
      { label: "Cerine 🦋", url: "https://cerine-it.github.io/Word-Puzzle/" },
      { label: "fettoumi maya", url: "https://fettoumi.github.io/word-puzzle/" },
      { label: "Takemichi", url: "https://imadzakxy.github.io/osu_mood/" },
      { label: "sami", url: "https://rizu-sm.github.io/suggest-the-word/" },
      { label: "𐙚منار", url: "https://manarrezik.github.io/guess-the-word/" },
      { label: "Houda", url: "https://hou-da-nour.github.io/Quiz-Game/" },
      { label: "𐙚منار", url: "https://manarrezik.github.io/BrainBoost/" },
      { label: "zineb hmz", url: "https://hemaizizineb.github.io/Flappy_bird_JS/" },
      { label: "Hadjer_tlb🐰🌸", url: "https://hadjertalbi.github.io/PROJET_GAME/ " },
      { label: "iness🌸", url: "https://ines-aouali.github.io/guess_the_number/" },
      { label: "Nawel💜", url: "https://chellah-nawel.github.io/Islamic-Game/" },
      { label: "nada", url: "https://nadameriem.github.io/Word_Weaver/" },
      { label: "Maria", url: "https://its-mg.github.io/Memory-Game/" },
      { label: "Rekaia Benhatite", url: "https://rekaia-benhatite.github.io/guess_number/" },
      { label: "Amira", url: "https://amirailli.github.io/Challenge2/" },
      { label: "Cerine 🦋 & fettoumi maya ", url: "https://cerine-it.github.io/2048-Game/" },
      { label: "lydia", url: "https://lydiachal.github.io/minigame/" },
      { label: "khawlaaa", url: "https://threerachaa.github.io/game/tictactoe.html" }
    ],
    github: github
  },
  {
    name: "Portfolio",
    description:
      "Un portfolio moderne et réactif conçu avec React, Bootstrap, mettant en valeur les projets et compétences du développeur.",
    tags: [
      {
        name: "React",
        color: "text-cyan-400",
      },
      {
        name: "Bootstrap",
        color: "text-purple-400",
      },
    ],
    image: tripguide,
    demoLink: [
      { label: "meriem2319", url: "" },
      { label: "Rawane", url: "https://show-work-omc.vercel.app/ " },
      { label: "DOUAA 🎀", url: "https://douaachahrazed21.github.io/OMC-Project-showcase-website/" },
      { label: "khawlaaa", url: "https://threerachaa.github.io/gameCardsSite/" },
      { label: "Amira", url: "https://amirailli.github.io/Team/" },
      { label: "Hadjer_tlb🐰🌸", url: "https://hadjertalbi.github.io/PROJETS/index.html" }
    ],
    github: github
  },
];


export { services, technologies, experiences, testimonials, projects };
