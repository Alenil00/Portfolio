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
  naij,
  Netto,
  stadium,
  kprefab,
  threejs,
  kanban,
  bygglink,
  diceof,
  flowtrack,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack JavaScript Developer",
    icon: web,
  },
  {
    title: "React & Vue Developer",
    icon: mobile,
  },
  {
    title: "Backend & Database Developer",
    icon: backend,
  },
  {
    title: "WordPress & Custom Theme Developer",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Butiksmedarbetare",
    company_name: "Netto",
    icon: Netto,
    iconBg: "#383E56",
    date: "Sep 2017 - Mars 2020",
    points: [
      "Ensured the store was well-stocked, clean, and organized to provide an excellent shopping experience for customers.",
      "Received, unloaded, and organized shipments efficiently, ensuring accurate inventory management.",
      "Operated the cash register, processed transactions, and assisted customers with inquiries in a professional manner.",
      "Greeted customers and provided friendly, helpful service to enhance their overall shopping experience.",
    ],
  },
  {
    title: "Betongarbetare",
    company_name: "Naij Betong",
    icon: naij,
    iconBg: "#E6DEDD",
    date: "April 2020 - Aug 2021",
    points: [
      "Constructed walls, balconies, and foundations by assembling formwork according to technical drawings.",
      "Installed reinforcement based on specifications to ensure structural integrity and durability.",
      "Poured and finished concrete surfaces with precision, ensuring high-quality results that met customer expectations.",
      "Collaborated with team members to maintain efficiency, safety, and quality in a prefabrication environment.",
    ],
  },
  {
    title: "Betongmästare",
    company_name: "K-prefab",
    icon: kprefab,
    iconBg: "#383E56",
    date: "Aug 2021 - Maj 2023",
    points: [
      "Constructed walls, balconies, and foundations by assembling formwork according to technical drawings and project specifications.",
      "Mixed concrete and conducted quality checks to ensure compliance with CE standards and industry regulations.",
      "Installed reinforcement and poured concrete with precision, ensuring structural integrity and durability.",
      "Monitored the finishing process to achieve smooth, high-quality surfaces that met customer and project requirements.",
    ],
  },
  {
    title: "Butikssäljare",
    company_name: "Stadium",
    icon: stadium,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Providing the assisting needs for customers with product selection, including running shoes, training gear, and sportswear.",
      "Maintained a well-organized and visually appealing store to enhance the shopping experience.",
      "Offered expert advice on sports equipment and apparel to help customers make informed purchasing decisions.",
      "Worked collaboratively with team members to achieve sales goals and ensure smooth daily operations.",
    ],
  },
];

const projects = [
  {
    name: "Kanban Kingdom",
    description:
      "A web-based platform that allows users to create and manage Kanban boards, visualize their progress, and collaborate with team members.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: kanban,
    source_code_link: "https://github.com/Fridbergs/kanban_kingdom.git",
    website_link: "https://kanbankingdom.netlify.app/",
  },
  {
    name: "ByggLink",
    description:
      "A job management system that streamlines job posting, user role management, and job acceptance processes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "aws-s3",
        color: "yellow-text-gradient",
      },
      {
        name: "JWT Auth",
        color: "red-text-gradient",
      },
      {
        name: "express.js",
        color: "orange-text-gradient",
      },
      {
        name: "REST API",
        color: "purple-text-gradient",
      },
    ],
    image: bygglink,
    source_code_link: "https://github.com/Alenil00/LIA-Login.git",
    website_link: "",
  },
  {
    name: "The Dice of Destiny",
    description:
      "An upcoming fantasy-themed board game where your fate is decided by the roll of the dice. Built with TypeScript and tailwindcss, players will embark on a journey full of chance, strategy, and surprises. COMING SOON!",
    tags: [
      {
        name: "React TSX",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: diceof,
    source_code_link: "https://github.com/",
  },
  {
    name: "FlowTrack",
    description:
      "FlowTrack helps you turn daily actions into lifelong habits. Whether you're building a workout streak, remembering to journal, or staying on top of hydration — FlowTrack is your all-in-one habit tracker designed for clarity, motivation, and progress. COMING SOON!",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "yellow-text-gradient",
      },
      {
        name: "Express.js",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "JWT Auth",
        color: "red-text-gradient",
      },
      {
        name: "REST API",
        color: "purple-text-gradient",
      },
    ],
    image: flowtrack,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
