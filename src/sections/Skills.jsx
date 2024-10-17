import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import { fadeIn, fadeIn2, parentVariants } from "../components/MotionVariation";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "React.js",
      icon: <FaReact className="text-blue-500" />,
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
  return (
    <div id="skills" className="space-x-y lg:pt-0 pt-24">
      <motion.h2
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="lg:text-5xl text-2xl lg:text-start text-center text-[#FFC876] font-bold "
      >
        / skills
      </motion.h2>

      <div className=" py-10">
        {/* <h2 className="text-4xl font-bold text-center mb-8">
          
        </h2> */}
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div
              variants={fadeIn2}
              key={skill.id}
              className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 bg-gradient-to-r ${skill.color}`}
            >
              <div className="text-6xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
