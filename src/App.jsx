import ButtonGradient from "./assets/svg/ButtonGradient";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setIsVisible(true)}
      onExit={() => setIsVisible(false)}
    >
      {/* The container div doesn't need conditional rendering */}
      <div className="container mx-auto">
        {/* Conditionally render the main content based on visibility */}
        {isVisible ? (
          <main className="bg-[url('./assets/images/grid.png')] bg-fixed bg-cover text-white">
            <Navbar />
            {/* <Header/> */}
            <Home />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
            <ButtonGradient />
          </main>
        ) : (
          <p className="text-white">Scroll down to view content!</p> // Add something when it's not visible
        )}
      </div>
    </ScrollTrigger>
  );
}

export default App;
// bg-[url('./assets/images/noise.jpg')]
