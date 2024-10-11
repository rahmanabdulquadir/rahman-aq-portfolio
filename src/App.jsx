
import ButtonGradient from "./assets/svg/ButtonGradient";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Button from "./components/Button"

function App() {
  return (
    <main className="  bg-fixed  bg-cover text-white ">
      <div className=" bg-black/[0.9]">
        <Navbar />
        <Button className='mt-10' href="#about">Something</Button>
        <ButtonGradient/>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}

export default App;


// bg-[url('./assets/images/noise.jpg')]