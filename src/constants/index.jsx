import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const navigation = [
  {
    id: "1",
    title: "Home",
    href: "#home",
  },
  {
    id: "2",
    title: "About",
    href: "#about",
  },
  {
    id: "3",
    title: "Projects",
    href: "#projects",
  },
  {
    id: "4",
    title: "Skills",
    href: "#skills",
  },
  {
    id: "5",
    title: "Contact",
    href: "#contact",
  },
];

export const skillSet = [
  {
    id: 1,
    name: "React.js",
    icon: <FaReact className="text-blue-400" />,
  },
  {
    id: 2,
    name: "Next.js",
    icon: <SiNextdotjs className="text-gray-600" />,
  },
  {
    id: 3,
    name: "Redux",
    icon: <SiRedux className="text-purple-500" />,
  },
  {
    id: 4,
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    id: 5,
    name: "Express",
    icon: <SiExpress className="text-yellow-500" />,
  },
  {
    id: 6,
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
  },
  {
    id: 7,
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    id: 8,
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    id: 9,
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  {
    id: 10,
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    id: 11,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" />,
  },

  {
    id: 12,
    name: "Git",
    icon: <FaGitAlt className="text-orange-500" />,
  },
];

export const projects = [
  {
    id: 1,
    title: "Globe Tales",
    description:
      "A social media like platform where people shares their travel stories, tips and tricks",
    image: "path-to-image", // Replace with actual image path
    liveLink: "https://globe-tales-client.vercel.app/",
    githubLink: "https://github.com/rahmanabdulquadir/globe-tales-client",
  },
  {
    id: 2,
    title: "Polish Pro",
    description: "A car wash booking management system. Where",
    image: "path-to-image",
    liveLink: "https://car-wash-booking-system-frontend.vercel.app/",
    githubLink: "https://github.com/rahmanabdulquadir/car-wash-system-frontend",
  },
  {
    id: 3,
    title: "FitFlex Essentials",
    description: "A fitness equipment and accessories website.",
    image: "path-to-image",
    liveLink: "https://harmonious-fenglisu-b99a7d.netlify.app/",
    githubLink:
      "https://github.com/rahmanabdulquadir/fitness-equipment-and-accessories-client",
  },
];
