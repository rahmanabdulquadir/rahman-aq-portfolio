import Button from "../components/Button";
import rahmanImg from "../assets/images/rahman_aq.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../components/MotionVariation";

const About = () => {
  return (
    <div
      id="about"
      className="space-x-y  flex flex-col-reverse lg:flex-row justify-center"
    >
      <div
        className="flex-1 lg:w-2/4 w-full lg:text-start text-center"
      >
        <motion.h2
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          className="hidden lg:block text-5xl lg:text-start text-center text-[#ff776f] font-bold mb-16"
        >
          / about me
        </motion.h2>

        <div className="">
          <motion.h3
            variants={fadeIn("up", 1.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:text-4xl text-3xl font-semibold mb-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Frontend Developer
          </motion.h3>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-6 lg:w-[600px] lg:text-start text-center text-md lg:text-lg leading-loose font-code"
          >
            Hey there, I am Rahman Abdul Quadir, a web developer with a twist of
            unconventional creativity.I have great interest in full-stack
            development, artificial intelligence, human-computer interactions,
            and everything in between. Apart from coding, I like to play games,
            listen music,reading books.
          </motion.p>
          <motion.h2  variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}>
            {" "}
            <span className="mb-10 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Education
            </span>{" "}
            - Willes Little Flower (2019-2022){" "}
          </motion.h2>

          <motion.div  variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }} className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-8 items-center justify-center lg:justify-start mt-7">
            <Button className="move-item">
              <a className="move-item" href="#projects">
                Projects
              </a>
            </Button>
            <Button className="move-item">
              <a className="move-item" href="#contact">
                Contact Me
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className=" flex flex-col justify-center lg:mt-0"
      >
        <h2 className="lg:hidden block text-2xl lg:text-start text-center text-[#ff776f] font-bold mb-12">
          / about me
        </h2>
        <img
          className="lg:w-[310px] lg:h-[320px] w-60 h-60 mx-auto rounded-xl lg:mt-20 pb-7 lg:pb-0 transition-all duration-500 ease-in-out filter grayscale hover:grayscale-0"
          src={rahmanImg}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default About;
