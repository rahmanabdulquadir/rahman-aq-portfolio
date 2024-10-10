import About from "./sections/About";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

function App() {
  return (
    <main className=" bg-[url('./assets/images/noise.jpg')] bg-fixed  bg-cover text-white ">
      <div className="max-w-7xl mx-auto bg-black/[0.9]">
        <Navbar />
        <Home />
        <About />
        <Projects />
      </div>
    </main>
  );
}

export default App;
