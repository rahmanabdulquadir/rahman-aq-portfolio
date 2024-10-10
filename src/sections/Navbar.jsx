import { navLinks } from "../constants";

// const NavItems = ({ onClick = () => {} }) => (
//   <ul className="flex gap-7 w-[500px] justify-center border border-gray-300 my-8 py-5 px-2 rounded-full">
//     {navLinks.map((item) => (
//       <li key={item.id} className="nav-li">
//         <a href={item.href} className="nav-li_a" onClick={onClick}>
//           {item.name}
//         </a>
//       </li>
//     ))}
//   </ul>
// );
const NavItems = () => {
  return (
    <ul className="flex gap-7 w-[500px] justify-center border border-gray-300 my-8 py-5 px-2 rounded-full">
      {navLinks.map((item) => (
        <li key={item.id}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  return (
    <div className="text-white ">
      <div className=" flex justify-center">
        {/* <ul className="flex gap-7 w-[500px] justify-center border border-gray-300 my-8 py-5 px-2 rounded-full ">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul> */}
        <NavItems />
      </div>
    </div>
  );
};

export default Navbar;
