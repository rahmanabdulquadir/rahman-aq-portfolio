import Button from "../components/Button";
import rahmanImg from "../assets/images/rahman_aq.jpg";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../components/MotionVariation";

const About = () => {
  return (
    <motion.div
      variants={zoomIn(0.2)} // Add delay as needed
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      id="about"
      className="space-x-y  flex flex-col-reverse lg:flex-row justify-center"
    >
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="flex-1 lg:w-2/4 w-full lg:text-start text-center"
      >
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="hidden lg:block text-5xl lg:text-start text-center text-[#ff776f] font-bold mb-16"
        >
          / about me
        </motion.h2>

        <div className="">
          <h3 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Frontend Developer
          </h3>
          <p className="mb-6 lg:w-[600px] lg:text-start text-center text-lg lg:text-xl leading-loose">
            Hey there, I am Rahman Abdul Quadir, a web developer with a twist of
            unconventional creativity.I have great interest in full-stack
            development, artificial intelligence, human-computer interactions,
            and everything in between. Apart from coding, I like to play games,
            listen music,reading books.
          </p>
          <h2>
            {" "}
            <span className="mb-10 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Education
            </span>{" "}
            - Willes Little Flower (2019-2022){" "}
          </h2>

          <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-8 items-center justify-center lg:justify-start mt-7">
            <Button className="move-item">
              <a className="move-item" href="#contact">
                Contact Me
              </a>
            </Button>
            <Button className="move-item">
              <a className="move-item" href="#projects">
                Projects
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.7)}
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
    </motion.div>
  );
};

export default About;
