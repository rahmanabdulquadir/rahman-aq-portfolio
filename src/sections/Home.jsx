/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button";
import curve from "../assets/images/curve.png";
import bubble from "../assets/images/bubble.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../components/MotionVariation";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      id="home"
      className={`space-x-y relative pt-20  flex flex-col items-center justify-center text-center`}
    >
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
        className="text-4xl md:text-7xl font-bold mb-4 font-code"
      >
        hi,{" "}
        <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Rahman
        </span>{" "}
        here!
      </motion.h1>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0 }}
        className="lg:w-[370px] w-[200px]"
      >
        <img className="lg:ml-32 ml-20 mt-[-10px]" src={curve} alt="" />
      </motion.div>

      <motion.p
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="text-xl md:text-3xl font-semibold mt-7 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
      >
        <Typewriter
          options={{
            strings: [
              `<span class='bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent'>Frontend developer</span>`,
              `<span class='bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent'>Mern stack developer</span>`,
            ],
            autoStart: true,
            delay: 75,
            loop: true,
          }}
        />
      </motion.p>
      <motion.p
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="lg:w-[550px] text-center py-5 leading-loose"
      >
        Howdy! I'm Rahman Abdul Quadir. I'm passionate about modern web technologies.
        Apart from coding, I like to play games, listen music,reading books.
      </motion.p>

      <div className="flex justify-center items-center gap-6">
        <a href="https://github.com/rahmanabdulquadir" target="_blank">
          <FaGithub className="size-5" />
        </a>
        <a href="mailto:rahmanaq777@gmail.com">
          <FaEnvelope className="size-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/rahman-abdul-quadir-529a46246/"
          target="_blank"
        >
          <FaLinkedin className="size-5" />
        </a>
        <a href="https://www.instagram.com/___babahyaga" target="_blank">
          <FaInstagram className="size-5" />
        </a>
      </div>

      <Button className="mt-5 move-item">
        <motion.a
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          href="#"
          className="move-item font-code "
        >
          Resume
        </motion.a>
      </Button>

      <img src={bubble} alt="" className="absolute z-[-20]" />
    </div>
  );
};

export default Home;
