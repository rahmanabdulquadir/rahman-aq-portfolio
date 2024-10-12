import Button from "../components/Button";

const About = () => {
  return (
    <div
      id="about"
      className="space-x-y  flex flex-col lg:flex-row items-center justify-center"
    >
      <div className="flex-1 slate lg:w-2/4 w-full lg:text-start text-center">
        <h2 className="text-5xl lg:text-start text-center text-[#ccd6f6] font-bold mb-12">
          / about me <span className="slate w-3 h-10"></span>
        </h2>

        <div>
          <h3 className="text-4xl font-semibold mb-4">Front-end Developer</h3>
          <p className="mb-6 w-[700px] text-2xl">
            Hey there, I am Rahman Abdul Quadir, a web developer with a twist of
            unconventional creativity.I have great interest in full-stack
            development, artificial intelligence, human-computer interactions,
            and everything in between. Apart from coding, I like to play games,
            listen music,reading books.
          </p>

          <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-8 items-center justify-center lg:justify-start">
            <Button>Contact Me</Button>
            <Button>My Portfolio</Button>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-10 lg:mt-0">
        <img
          className="lg:w-[280px] lg:h-[280px] w-60 h-60 rounded-lg"
          // src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
