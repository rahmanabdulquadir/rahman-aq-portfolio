
import ButtonGradient from "./assets/svg/ButtonGradient";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

import "aos/dist/aos.css";



function App() {
  return (
    <main
     
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
    </main>
  );
}

export default App;
// bg-[url('./assets/images/noise.jpg')]
