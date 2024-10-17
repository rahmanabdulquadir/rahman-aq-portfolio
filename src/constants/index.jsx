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
    icon: <FaReact className="text-black" />,
  },
  {
    id: 2,
    name: "Next.js",
    icon: <SiNextdotjs className="text-black" />,
  },
  {
    id: 3,
    name: "Redux",
    icon: <SiRedux className="text-black" />,
  },
  {
    id: 4,
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    id: 5,
    name: "Express",
    icon: <SiExpress className="text-green-500" />,
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
    icon: <FaCss3Alt className="" />,
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
