import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import mongodb from "../../public/mongodb.jpg";
import mysql from "../../public/mysql.png";
import bootStrap from "../../public/bootstrap.png";

function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: java, name: "Java" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: reactjs, name: "React.js" },
    { id: 6, logo: nodejs, name: "Node.js" },
    { id: 7, logo: mongodb, name: "MongoDB" },
    { id: 8, logo: mysql, name: "MySQL" },
    { id: 9, logo: bootStrap, name: "Bootstrap" },
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Technological Knowledge</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Over 2 years of experience working with the following technologies:
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 flex flex-col items-center justify-center transition-transform transform hover:-translate-y-2 duration-300"
          >
            <img
              src={logo}
              alt={name}
              className="w-20 h-20 object-contain mb-4 rounded-full border-2 border-gray-100"
            />
            <h3 className="text-md font-semibold text-gray-800">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiance;
