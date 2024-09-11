
import Coffee from "../assets/cup.png";
import { NavLink, Link } from "react-router-dom";
import "../App.css";
import "./header.css";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { FaHome,FaBookOpen ,FaPaperPlane ,FaCoffee  } from "react-icons/fa";
function Header() {
  gsap.registerPlugin(useGSAP);
  useGSAP(()=>{
    const menu = document.querySelectorAll('header ul li');
  

      
      const tl = gsap.timeline();
      tl.from('#logo', { x: -100, opacity: 1 })
        .from('#logoImage', { opacity: 0, scale: 0 })
        .from(menu, { y: 100, opacity: 0, scale: 0, stagger: { amount: 1.5 } });

      // Adjust delay as needed
  },[])

  return (
    <header className="py-2  md:px-6 md:py-3 overflow-hidden">
      <div className="flex max-w-6xl mx-auto justify-center md:justify-between items-center ">
      <Link to={"/"}>
        <div className="logo flex justify-center items-center gap-2 overflow-hidden">
          <img id="logoImage"  src={Coffee} alt="" className=" w-10 h-10 md:w-12 md:h-12 " />
          <h1 id="logo" className="text-[#492201] text-xl md:text-2xl font-black ">S<span className="text-[#c1905a]">easons</span></h1>
        </div>
        </Link>
        <ul id="menu" className=" hidden md:flex justify-between h-full gap-6 ">
        <li className="relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#492201] before:w-full before:h-[2px] transform translate-y-[-10px]"
                    : "text-[#c1905a] before:w-0 before:h-0"
                } 
      relative inline-block text-2xl hover:before:w-full   hover:text-[#492201] transition-all  hover:before:h-[2px] font-bold duration-300 before:absolute before:-bottom-3 before:left-0 before:bg-[#492201] before:duration-300`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#492201] before:w-full before:h-[2px] transform translate-y-[-10px]"
                    : "text-[#c1905a] before:w-0 before:h-0"
                } 
      relative inline-block text-2xl hover:before:w-full hover:text-[#492201] transition-all  hover:before:h-[2px] font-bold duration-300 before:absolute before:-bottom-3 before:left-0 before:bg-[#492201] before:duration-300`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#492201] before:w-full before:h-[2px] transform translate-y-[-10px]"
                    : "text-[#c1905a] before:w-0 before:h-0"
                } 
      relative inline-block text-2xl hover:before:w-full hover:text-[#492201] transition-all  hover:before:h-[2px] font-bold duration-300 before:absolute before:-bottom-3 before:left-0 before:bg-[#492201] before:duration-300`
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/Coffee"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#492201] before:w-full before:h-[2px] transform translate-y-[-10px]"
                    : "text-[#c1905a] before:w-0 before:h-0"
                } 
      relative inline-block text-2xl hover:before:w-full hover:text-[#492201] transition-all  hover:before:h-[2px] font-bold duration-300 before:absolute before:-bottom-3 before:left-0 before:bg-[#492201] before:duration-300`
              }
            >
              Coffee
            </NavLink>
          </li>
        </ul>
      </div>
      <div id="mobileHeader" className="fixed   md:hidden px-3  py-3  z-50  bottom-0 left-1/2 -translate-x-1/2  w-full ">

        <ul className="  md:hidden flex justify-between w-full h-full gap-4 ">
        <li className="relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#492201] before:w-full before:h-[2px] transform translate-y-[-8px]"
                    : "text-[#c1905a] before:w-0 before:h-0"
                } 
      relative  flex justify-center items-center flex-col  text-[10px] hover:before:w-full hover:text-[#492201] transition-all  hover:before:h-[2px] font-bold duration-300 before:absolute before:-bottom-1 before:left-0 before:bg-[#492201] before:duration-300`
              }
             
            >
              <FaHome className="text-xl"/>
              Home
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#492201] before:w-full before:h-[2px] transform translate-y-[-8px]"
                    : "text-[#c1905a] before:w-0 before:h-0"
                } 
      relative  flex justify-center items-center flex-col  text-[10px] hover:before:w-full hover:text-[#492201] transition-all  hover:before:h-[2px] font-bold duration-300 before:absolute before:-bottom-1 before:left-0 before:bg-[#492201] before:duration-300`
              }
             
            >
              <FaBookOpen className="text-xl"/>
              About Us
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#492201] before:w-full before:h-[2px] transform translate-y-[-8px]"
                    : "text-[#c1905a] before:w-0 before:h-0"
                } 
      relative  flex justify-center items-center flex-col  text-[10px] hover:before:w-full hover:text-[#492201] transition-all  hover:before:h-[2px] font-bold duration-300 before:absolute before:-bottom-1 before:left-0 before:bg-[#492201] before:duration-300`
              }
             
            >
              <FaPaperPlane className="text-xl"/>
              Contact Us
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/Coffee"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#492201] before:w-full before:h-[2px] transform translate-y-[-8px]"
                    : "text-[#c1905a] before:w-0 before:h-0"
                } 
      relative  flex justify-center items-center flex-col  text-[10px] hover:before:w-full hover:text-[#492201] transition-all  hover:before:h-[2px] font-bold duration-300 before:absolute before:-bottom-1 before:left-0 before:bg-[#492201] before:duration-300`
              }
             
            >
              <FaCoffee className="text-xl"/>
              Coffee 
            </NavLink>
          </li>
        </ul>
      
      </div>
    </header>
  );
}

export default Header;
