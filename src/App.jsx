import ButtonGradient from "./assets/svg/ButtonGradient";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Blogs from "./sections/Blogs"
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { Toaster } from "sonner";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setIsVisible(true)}
      onExit={() => setIsVisible(false)}
    >
      <div className="container mx-auto">
        {isVisible ? (
          <main >
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Skills />
            <Blogs/>
            <Contact />
            <Footer />
            <ButtonGradient />
            <Toaster position="top-center" />
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
