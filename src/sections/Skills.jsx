import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "React.js",
      level: "90%",
      icon: <FaReact className="text-blue-400" />,
    },
    {
      id: 2,
      name: "Node.js",
      level: "85%",
      icon: <FaNodeJs className="text-green-400" />,
    },
    {
      id: 3,
      name: "MongoDB",
      level: "80%",
      icon: <FaDatabase className="text-green-600" />,
    },
    {
      id: 4,
      name: "CSS3",
      level: "90%",
      icon: <FaCss3Alt className="text-blue-500" />,
    },
    {
      id: 5,
      name: "HTML5",
      level: "95%",
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      id: 6,
      name: "JavaScript",
      level: "92%",
      icon: <FaJs className="text-yellow-400" />,
    },
  ];
  return (
    <div className="space-x-y lg:pt-0 pt-24">
      <h2 className="lg:text-5xl text-2xl lg:text-start text-center text-[#FFC876] font-bold mb-3">
        / Skills
      </h2>

      <div className="p-8">
        <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className=" shadow-lg p-6 rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl flex items-center gap-4"
            >
              {/* Skill Icon */}
              <div className="text-4xl">{skill.icon}</div>

              {/* Skill Name and Bar */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                  <div
                    className={`bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 h-full rounded-full`}
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <p className="text-right mt-2 font-semibold">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
