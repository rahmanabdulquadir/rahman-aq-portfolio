import About from "./sections/About";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

function App() {
  return (
    <main className=" bg-[url('./assets/images/noise.jpg')] bg-fixed  bg-cover ">
      <div className=" bg-black/[0.9]">
        <Navbar />
        <About/>
        <Projects/>
      </div>
    </main>
  );
}

export default App;
