/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button";
import curve from "../assets/images/curve.png";
import bubble from "../assets/images/bubble.svg";

const Home = () => {
  return (
    <div
      id="home"
      className={`space-x-y relative  flex flex-col items-center justify-center  text-white text-center p-2`}
    >
      <h1 className="text-4xl md:text-7xl font-bold mb-4 font-code">
        hi, <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">Rahman</span> here!
      </h1>
      <div className="lg:w-[370px] w-[200px]">
        <img className="lg:ml-32 ml-20 mt-[-10px]" src={curve} alt="" />
      </div>

      <p className="text-xl md:text-3xl font-semibold mt-7 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">I create stuff sometimes</p>
      <p className="lg:w-[550px] text-center py-5 leading-loose">
        Howdy! I'm Nowrin. I graduated from North University of China in
        Computer Science and Technology. I'm passionate about Web development.
        Apart from coding, I like to play games, listen music,reading books.
      </p>
  
        <Button className="mt-5">
          <a href="#" className=" font-code">Resume</a>
        </Button>

        <img src={bubble} alt=""  className="absolute z-[-20]"/>

    </div>
  );
};

export default Home;
