import React, { useState } from "react";
import pic from "../../public/logo2.jpeg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experiance" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed top-0 left-0 right-0 z-50
                   bg-white/80 backdrop-blur-md shadow-md"
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2 items-center">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Logo" />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer select-none">
                Son Pra<span className="text-green-500 text-2xl">tap</span>
              </h1>
              <p className="text-xs text-gray-600 -mt-1 select-none">Web Developer</p>
            </div>
          </div>

          {/* Desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:text-green-600 hover:scale-105 transition-transform duration-200 cursor-pointer"
                >
                  <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile menu icon */}
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer text-gray-700">
              {menu ? <IoCloseSharp size={28} /> : <AiOutlineMenu size={28} />}
            </div>
          </div>
        </div>

        {/* Mobile navbar */}
        {menu && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-b-lg">
            <ul className="flex flex-col h-screen items-center justify-center space-y-6 text-xl font-semibold text-gray-700">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:text-green-600 hover:scale-105 transition-transform duration-200 cursor-pointer"
                >
                  <Link
                    onClick={() => setMenu(false)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
