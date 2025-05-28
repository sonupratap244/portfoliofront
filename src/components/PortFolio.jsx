import React from "react";
import gredient from "../../public/gredient.jpeg";
import elearn from "../../public/vsg.png";
import travel from "../../public/travel.jpeg";
import logo from "../../public/logo2.jpeg";
import talk from "../../public/talk.jpeg";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: elearn,
      name: "E-Learning Platform",
      Link: "https://stydyzone.vercel.app/",
      codeLink: "https://github.com/sonupratap244?tab=repositories",
    },
    {
      id: 2,
      logo: travel,
      name: "Traveling Agency Website",
      Link: "https://github.com/sonupratap244/Traveling-website",
      codeLink: "https://github.com/sonupratap244/Traveling-website",
    },
    {
      id: 3,
      logo: logo,
      name: "Portfolio Website",
      Link: "https://youtube.com/reactjs-project-video",
      codeLink: "https://github.com/username/reactjs-project",
    },
    {
      id: 4,
      logo: talk,
      name: "Chat App",
      Link: "https://github.com/sonupratap244",
      codeLink: "https://github.com/sonupratap244",
    },
    {
      id: 5,
      logo: gredient,
      name: "Gradient background Images",
      Link: "https://github.com/sonupratap244/Gradient-Background-Images",
      codeLink: "https://github.com/sonupratap244/Gradient-Background-Images",
    },
   
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">My Projects</h1>
        <p className="text-green-600 font-semibold text-lg underline">
          Featured Projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardItem.map(({ id, logo, name, Link, codeLink }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center"
          >
            <img
              src={logo}
              alt={name}
              className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-gray-100 object-contain"
            />
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-600 my-2">
              Hands-on project using {name}. Built with best practices and modern
              tools.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={Link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
              >
                  🔗...
              </a>
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
              >
                💻 Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
