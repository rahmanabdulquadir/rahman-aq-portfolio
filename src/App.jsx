import ButtonGradient from "./assets/svg/ButtonGradient";
import { zoomIn } from "./components/MotionVariation";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.main
     
      className=" bg-[url('./assets/images/grid.png')] bg-fixed  bg-cover text-white "
    >
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ButtonGradient />
    </motion.main>
  );
}

export default App;

// bg-[url('./assets/images/noise.jpg')]
