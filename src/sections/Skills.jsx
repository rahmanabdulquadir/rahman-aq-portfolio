import SkillCard from "./SkillCard";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../components/MotionVariation";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    try {
      const response = await fetch(
        "https://portfolio-dashboard-server-kappa.vercel.app/api/v1/skills"
      );
      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  useEffect(() => {
    fetchSkills(); // Initial fetch

    // Fetch skills every 3 seconds
    const interval = setInterval(fetchSkills, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="skills" className="space-x-y">
      <section className=" ">
        <div className="container mx-auto">
          <motion.h2
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:text-5xl text-2xl lg:text-start text-center text-[#FFC876] font-bold"
          >
            / skills
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
            {skills?.data?.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                estimate={skill.estimate} // Assuming estimate represents the percentage
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
