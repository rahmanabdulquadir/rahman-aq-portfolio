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
  SiNextdotjs,
} from "react-icons/si";

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
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      id: 4,
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" />,
    },
    {
      id: 5,
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" />,
    },
    {
      id: 6,
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      id: 7,
      name: "CSS3",
      icon: <FaCss3Alt className="" />,
    },
    {
      id: 8,
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      id: 9,
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
    <div className="space-x-y lg:pt-0 pt-24">
      <h2 className="lg:text-5xl text-2xl lg:text-start text-center text-[#FFC876] font-bold ">
        / Skills
      </h2>

      <div className=" py-10">
        {/* <h2 className="text-4xl font-bold text-center mb-8">
          
        </h2> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 bg-gradient-to-r ${skill.color}`}
            >
              <div className="text-6xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
