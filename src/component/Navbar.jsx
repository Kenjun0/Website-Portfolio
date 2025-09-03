import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="absolute w-[80%] justify-self-center z-50 flex md:justify-evenly md:fixed justify-between h-[50px] items-center mt-[10px] rounded-2xl">
        <ul>
          <li className="ml-10 text-[30px] font-bold text-green-500">
            <a href="/">Kien<span className="text-blue-300">.</span></a>
          </li>
        </ul>
        <ul className="md:flex hidden gap-10 pl-10 text-[15px] font-sans uppercase text-white font-bold">
          <li className="group">
            <a href="#" className="">Home</a>
            <div className="mx-auto bg-gray-500 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
          <li className="group">
            <a href="#About" className="">About</a>
            <div className="mx-auto bg-gray-500 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
          <li className="group">
            <a href="#Education" className="">Education</a>
            <div className="mx-auto bg-gray-500 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
          <li className="group">
            <a href="#skills" className="">Skill</a>
            <div className="mx-auto bg-gray-500 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
          <li className="group">
            <a href="#experience" className="">Experience</a>
            <div className="mx-auto bg-gray-500 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        </ul>
      <div onClick={handleNav} className="text-white px-10 md:hidden">
        {!nav ? <AiOutlineMenu size="25" /> : <AiOutlineClose size="25" />}
      </div>
      <div className={!nav ? "fixed top-[-100%] flex items-center justify-center inset-0 rounded-4xl h-[450px] ease-in-out duration-200 md:hidden" : "absolute top-15 bg-gray-700/80 flex items-center justify-center inset-0 rounded-4xl h-[450px] ease-in-out duration-400 md:hidden"}>
        <ul className="text-gray-300 text-[18px] uppercase font-sans font-bold text-center">
          <li className="py-4 group">
            <a href="#"
            className="hover:text-gray-400 trasition-all duration-300">
              Home
            </a>
            <div className="mx-auto bg-cyan-700 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
            </li>
            <li className="py-4 group">
            <a href="#About"
            className="hover:text-gray-400 trasition-all duration-300">
              About
            </a>
            <div className="mx-auto bg-cyan-700 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
            </li>
            <li className="py-4 group">
            <a href="#Education"
            className="hover:text-gray-400 trasition-all duration-300">
              Education
            </a>
            <div className="mx-auto bg-cyan-700 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
            </li>
            <li className="py-4 group">
            <a href="#skills"
            className="hover:text-gray-400 trasition-all duration-300">
              Skill
            </a>
            <div className="mx-auto bg-cyan-700 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
            </li>
            <li className="py-4 group">
            <a href="#experience"
            className="hover:text-gray-400 trasition-all duration-300">
              Experience
            </a>
            <div className="mx-auto bg-cyan-700 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
