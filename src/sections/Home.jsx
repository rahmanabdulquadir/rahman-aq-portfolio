import Button from '../components/Button'

const Home = () => {
  return (
    <div
      id="home"
      className="space-x-y flex flex-col items-center justify-center  text-white text-center p-2"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4 font-code">
        hi, Rahman here!
      </h1>
      <p className="text-lg md:text-xl mb-6">
        I create stuff sometimes
      </p>
      <a
        href="#projects"
        className=" font-semibold px-6 py-3 rounded-full shadow-lg font-code"
      >
        <Button>Resume</Button>
      </a>
    </div>
  );
};

export default Home;
