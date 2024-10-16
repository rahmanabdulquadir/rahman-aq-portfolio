import { fadeIn } from "../components/MotionVariation";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  return (
    <div className="text-center mt-12">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="p-5 "
      >
        <h3 className="text-sm font-sora">
          Built and designed by Rahman Abdul Quadir.
        </h3>
        <h4 className="text-xs font-sora">
          All rights reserved.© {currentYear}
        </h4>
      </motion.div>
    </div>
  );
};

export default Footer;
