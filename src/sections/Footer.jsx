import { fadeIn } from "../components/MotionVariation";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  return (
    <div className="text-center text-gray-400 font-code lg:my-5 my-10">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="p-5 "
      >
        <h3 className="lg:text-sm text-[12px]">
          Built and designed by Rahman Abdul Quadir.
        </h3>
        <h4 className="lg:text-xs text-[10px]">
          © {currentYear} All rights reserved.
        </h4>
      </motion.div>
    </div>
  );
};

export default Footer;
