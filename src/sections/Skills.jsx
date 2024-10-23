import { fadeIn, fadeIn2, parentVariants } from "../components/MotionVariation";
import { motion } from "framer-motion";
// import { skillSet } from "../constants";
import SkillCard from "./SkillCard";
import { useEffect, useState } from "react";

// const skillsData = [
//   { name: "JavaScript", percentage: 90 },
//   { name: "React", percentage: 85 },
//   { name: "Node.js", percentage: 80 },
//   { name: "CSS", percentage: 75 },
//   { name: "MongoDB", percentage: 70 },
// ];

const Skills = () => {
  const [skills, setSkills] = useState([]);
  console.log(skills);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/skills");
      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    // <div id="skills" className="space-x-y">
    //   <motion.h2
    //     variants={fadeIn("down", 0.5)}
    //     initial="hidden"
    //     whileInView={"show"}
    //     viewport={{ once: true, amount: 0.3 }}
    //     className="lg:text-5xl text-2xl lg:text-start text-center text-[#FFC876] font-bold "
    //   >
    //     / skills
    //   </motion.h2>

    //   <div className=" py-10">
    //     {/* <h2 className="text-4xl font-bold text-center mb-8">

    //     </h2> */}
    //     <motion.div
    //       variants={parentVariants}
    //       initial="hidden"
    //       whileInView={"show"}
    //       viewport={{ once: true, amount: 0.3 }}
    //       className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
    //     >
    //       {skillSet.map((skill) => (
    //         <motion.div
    //           variants={fadeIn2}
    //           key={skill.id}
    //           className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 bg-gradient-to-r ${skill.color}`}
    //         >
    //           <div className="text-6xl mb-4 move-item">{skill.icon}</div>
    //           <h3 className="text-xl font-semibold move-item">{skill.name}</h3>
    //         </motion.div>
    //       ))}
    //     </motion.div>
    //   </div>
    // </div>
    <div>
      <section className="py-16 ">
        <div className="container mx-auto">
          <h2 className="text-3xl text-white font-bold text-center mb-12">
            My Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills?.data?.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                estimate={skill.estimate}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
