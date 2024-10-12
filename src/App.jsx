import ButtonGradient from "./assets/svg/ButtonGradient";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";


function App() {
  return (
    <main className=" bg-[url('./assets/images/grid.png')] bg-fixed  bg-cover text-white ">
      <div className=" ">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer/>
        <ButtonGradient />
      </div>
    </main>
  );
}

export default App;

// bg-[url('./assets/images/noise.jpg')]

