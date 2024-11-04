import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../components/MotionVariation";
import { navigation } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-gray-300 lg:h-[100px] lg:mb-12">
      {/* Large Screen Navbar */}
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="hidden w-full md:flex justify-center backdrop-blur-sm"
      >
        <ul className="flex gap-7 w-[700px] justify-evenly border-2 border-gradient-border mt-8 py-5 px-2 rounded-full">
          {navigation.map((item) => (
            <li key={item.id} className="move-item">
              <a className="font-code font-semibold  " href={item.href}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Small Screen Navbar */}
      <div className="md:hidden flex justify-between items-center px-5 mt-[-15px]">
        <img
          href="/"
          className="w-24 h-24 mt-7"
          src="/assets/raq_logo.png"
          alt=""
        />

        <button onClick={toggleMenu} className="focus:outline-none">
          {!isOpen ? (
            <svg
              className="w-8 h-8"
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
              className="w-8 h-8"
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

      {/* Full-screen overlay for mobile menu */}
      <div
        className={`${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } fixed inset-0 bg-black  z-50 transition-opacity duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white text-3xl">
            ✖
          </button>
        </div>
        <div className="flex flex-col justify-center items-center h-[80%] gap-6">
          <ul className="flex flex-col items-center gap-6 gap-y-12 text-white">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  className="text-2xl font-semibold font-code"
                  href={item.href}
                  onClick={toggleMenu} // Close menu when a link is clicked
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
