const Home = () => {
  return (
    <div
      id="home"
      className="space-x-y flex flex-col items-center justify-center  text-white text-center p-2"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg md:text-xl mb-6">
        I'm a passionate developer creating amazing web experiences.
      </p>
      <a
        href="#projects"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 hover:bg-gray-200"
      >
        View My Work
      </a>
    </div>
  );
};

export default Home;
