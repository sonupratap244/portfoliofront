import React, { useState, useEffect } from "react";
import pic from "../../public/logo2.jpeg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${scrollNav ? 'bg-white shadow-xl' : 'bg-transparent'}`}>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-16 flex justify-between items-center">

        {/* Logo */}
        <div className="flex space-x-3 items-center cursor-pointer select-none" onClick={() => scroll.scrollToTop()}>
          <img src={pic} className="h-12 w-12 rounded-full shadow-lg" alt="Logo" />
          <div>
            <h1 className="font-bold text-2xl text-gray-800">
              Manjeet Ve<span className="text-purple-600">rma</span>
            </h1>
            <p className="text-xs text-gray-500 -mt-1">Global Tender & Bid Manager</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium text-gray-700 text-lg">
          {navItems.map(({ id, text }) => (
            <li key={id} className="relative group cursor-pointer">
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-purple-600"
              >
                {text}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer text-gray-800 z-50">
          {menu ? <IoCloseSharp size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menu && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-gray-800 transition-opacity duration-300 animate-fadeIn">
          {navItems.map(({ id, text }) => (
            <Link
              key={id}
              to={text}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-purple-600 transition duration-200 cursor-pointer"
              onClick={() => setMenu(false)}
            >
              {text}
            </Link>
          ))}
        </div>
      )}

      {/* Add smooth fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Navbar;
