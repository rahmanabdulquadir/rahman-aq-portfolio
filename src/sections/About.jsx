import Button from "../components/Button";

const About = () => {
  return (
    <div
      id="about"
      className="space-x-y  flex flex-col-reverse lg:flex-row items-center justify-center"
    >
      <div className="flex-1 lg:w-2/4 w-full lg:text-start text-center">
        <h2 className="hidden lg:block text-5xl lg:text-start text-center font-bold mb-16">
          / about me
        </h2>

        <div className="px-6">
          <h3 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Front-end Developer
          </h3>
          <p className="mb-6 lg:w-[700px] lg:text-start text-center text-lg lg:text-2xl leading-loose">
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
      <div className=" flex flex-col justify-center mt-10 lg:mt-0">
        <h2 className="lg:hidden block text-2xl lg:text-start text-center font-bold mb-16">
          / about me
        </h2>
        <img
          className="lg:w-[280px] lg:h-[280px] w-60 h-60 rounded-xl pb-7"
          // src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
