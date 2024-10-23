/* eslint-disable react/prop-types */
const SkillCard = ({ name, estimate }) => {
  console.log(name, estimate)
  return (
    <div className="relative flex flex-col items-center text-center p-4  rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="w-24 h-24 rounded-full border-4 border-[#48dd70] flex justify-center items-center relative mb-4">
        <span className="text-lg font-bold text-white">{estimate}%</span>
        <div
          className="absolute top-0 left-0 h-full w-full rounded-full"
          style={{
            background: `conic-gradient(
              #48dd70
              rgba(255, 255, 255, 0.1) 0deg
            )`,
          }}
        />
      </div>
      <p className="text-white font-medium">{name}</p>
    </div>
  );
};

export default SkillCard