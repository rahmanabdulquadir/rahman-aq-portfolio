import { fadeIn, fadeIn2, parentVariants } from "../components/MotionVariation";
import { motion } from "framer-motion";
import { skillSet } from "../constants";


const Skills = () => {
 
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
          {skillSet.map((skill) => (
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
