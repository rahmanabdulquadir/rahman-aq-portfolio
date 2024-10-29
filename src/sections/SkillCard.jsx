import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
const SkillCard = ({ name, estimate, delay = 0 }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center text-center p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-24 h-24 rounded-full border-4 border-[#48dd70] flex justify-center items-center relative mb-4">
        <span className="text-lg font-bold text-white">{estimate}%</span>
        <div
          className="absolute top-0 left-0 h-full w-full rounded-full"
          style={{
            background: `conic-gradient(
              #48dd70,
              rgba(255, 255, 255, 0.1) 0deg
            )`,
          }}
        />
      </div>
      <p className="text-white font-medium">{name}</p>
    </motion.div>
  );
};

export default SkillCard;
