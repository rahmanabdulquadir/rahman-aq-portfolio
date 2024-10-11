
import { navLinks } from "../constants";

// export const HamburgerMenu = () => {
//   return (
//     <div className="absolute inset-0 pointer-events-none lg:hidden">
//       <div className="absolute inset-0 opacity-[.03]">
//         <img
//           className="w-full h-full object-cover"
//           src={background}
//           width={688}
//           height={953}
//           alt="Background"
//         />
//       </div>
//     </div>
//   );
// };

const Navbar = () => {
  return (
    <div className="text-white ">
      <div className=" flex justify-center">
        <ul className="flex gap-7 w-[500px] justify-center border-2 border-gradient-border  my-8 py-5 px-2 rounded-full">
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
