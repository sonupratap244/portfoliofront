import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-br from-gray-100 to-white shadow-inner mt-16">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-10">
          <div className="flex flex-col items-center justify-center">
            {/* Social Icons */}
            <div className="flex space-x-6 mb-6">
              <a
                href="https://www.instagram.com/"
                className="text-gray-600 hover:text-blue-600 transition duration-300 transform hover:scale-110"
              >
                <FaInstagram size={26} />
              </a>
              <a
                href="https://github.com/"
                className="text-gray-600 hover:text-blue-400 transition duration-300 transform hover:scale-110"
              >
                <FaGithub size={26} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition duration-300 transform hover:scale-110"
              >
                <FaYoutube size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/manjeet-verma-b06326214/"
                className="text-gray-600 hover:text-blue-700 transition duration-300 transform hover:scale-110"
              >
                <FaLinkedinIn size={26} />
              </a>
            </div>

            {/* Footer Text */}
            <div className="text-center text-sm text-gray-600">
              <p>&copy; 2025 <span className="font-semibold text-gray-800">Manjeet Verma</span>. All rights reserved.</p>
             
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
