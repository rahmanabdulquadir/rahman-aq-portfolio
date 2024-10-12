import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-gray-400 lg:h-[100px]">
      {/* Large Screen Navbar */}
      <div className="hidden w-full md:flex justify-center ">
        <ul className="flex gap-7 w-[700px] justify-evenly border-2 border-gradient-border mt-8 py-5 px-2 rounded-full">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a className="font-code font-semibold" href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Small Screen Navbar */}
      <div className="md:hidden flex justify-between items-center px-4 py-5">
        <div className="text-xl font-bold">MyBrand</div>
        <button onClick={toggleMenu} className="focus:outline-none">
          {!isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col gap-4 border-2 border-gradient-border py-5 px-4 rounded-lg">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a className="font-code font-semibold" href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
