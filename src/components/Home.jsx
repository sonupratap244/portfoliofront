import React from "react";
import pic from "../../public/photo.jpg";
import res from "../../public/SonPratap.pdf";

import { FaInstagram, FaLinkedin, FaGithub, FaReact } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";


function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-6 order-2 md:order-1 text-center md:text-left">
            <span className="text-lg text-gray-600">Welcome to my <span className="text-green-500 text-2xl">Portfolio</span></span>

            <div className="text-3xl md:text-5xl font-bold text-gray-800 flex flex-wrap justify-center md:justify-start items-center gap-2">
              <h1>Hello, My name is Son Pratap and I'm a</h1>
              <ReactTyped
                className="text-red-600"
                strings={["Developer.", "Programmer.", "Coder."]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>

            <p className="text-gray-600 text-md md:text-lg leading-relaxed">
              I'm currently pursuing my Master of Computer Applications (MCA) at ABES Engineering College, Ghaziabad.
I am deeply passionate about building modern, responsive web applications using the latest technologies and frameworks. With a focus on user-centric design and performance, I strive to create seamless digital experiences that are both functional and visually appealing.
            </p>

            {/* Socials + Stack */}
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {/* Social Media */}
              <div className="text-center md:text-left">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Available on</h2>
                <div className="flex justify-center md:justify-start gap-4 text-2xl text-gray-700">
                  <a href="https://www.instagram.com/_hypnosis_039/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-blue-600 transition duration-300" />
                  </a>
                  <a href="https://www.linkedin.com/in/son-pratap-7b5114238/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-800 transition duration-300" />
                  </a>
                  <a href="https://youtube.com/channel/UCtvzN_zmK9mAMMFW2f_5g6Q" target="_blank" rel="noopener noreferrer">
                    <IoLogoYoutube className="hover:text-red-600 transition duration-300" />
                  </a>
                  <a href="https://github.com/sonupratap244" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-sky-500 transition duration-300" />
                  </a>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="text-center md:text-left">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Currently Working On</h2>
                <div className="flex justify-center md:justify-start gap-4 text-3xl text-gray-700">
                  <SiMongodb className="hover:text-green-600 transition-transform transform hover:scale-110" />
                  <SiExpress className="hover:text-gray-800 transition-transform transform hover:scale-110" />
                  <FaReact className="hover:text-blue-500 transition-transform transform hover:scale-110" />
                  <FaNodeJs className="hover:text-green-700 transition-transform transform hover:scale-110" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
            <img
              src={pic}
              alt="Profile"
              className="rounded-full shadow-xl w-72 h-72 md:w-[400px] md:h-[400px] object-cover"
            />
          </div>
        </div>
        {/* Action Buttons */}
<div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
  <a
    href={res} // place your actual CV path here
    download
    className="px-6 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition duration-300"
  >
     Download CV
  </a>
 <Link
  to="Contact"
  smooth={true}
  duration={500}
  offset={-70}
  className="px-6 py-2 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition duration-300 cursor-pointer"
>
   Hire Me
</Link>

</div>

      </div>

      

      <hr className="border-t border-gray-200 my-10" />
    </>
  );
}

export default Home;
