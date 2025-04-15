import {Coffee} from "../assets/image"
import { NavLink, Link } from "react-router-dom";
import "../App.css";

import { FaHome, FaBookOpen, FaPaperPlane, FaCoffee } from "react-icons/fa";

const baseLink =
  "relative inline-block font-bold duration-300 transition-all before:absolute before:left-0 before:bg-[#492201] before:duration-300";

const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About Us", path: "/About", icon: <FaBookOpen /> },
  { name: "Contact Us", path: "/Contact", icon: <FaPaperPlane /> },
  { name: "Coffee", path: "/Coffee", icon: <FaCoffee /> },
];

function Header() {
  return (
    <header className="py-2 md:px-6 md:py-3">
      <div className="flex max-w-6xl mx-auto justify-center md:justify-between items-center">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <img
              src={Coffee}
              alt="coffee"
              loading="lazy"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <h1 className="text-[#492201] text-xl md:text-2xl font-black">
              S<span className="text-[#c1905a]">easons</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${isActive ? "text-[#492201] -translate-y-1 before:w-full before:h-[2px]" : "text-[#c1905a] hover:before:w-full before:h-[2px] before:w-0 "} ${baseLink} text-xl hover:before:w-full hover:text-[#492201] before:-bottom-1`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      <div className="fixed backdrop-blur-md md:hidden bottom-0 left-1/2 bg-[#c9b8ac93] rounded-tr-3xl rounded-tl-3xl -translate-x-1/2 w-full px-3 py-3 z-50">
        <ul className="flex justify-between w-full gap-4">
          {navItems.map(({ name, path, icon }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${isActive ? "text-[#492201] before:w-full before:h-[2px]" : "text-[#c1905a] before:w-0 before:h-0"} ${baseLink} flex flex-col items-center text-[10px] hover:before:w-full hover:text-[#492201] before:-bottom-1`
                }
              >
                <span className="text-xl">{icon}</span>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
