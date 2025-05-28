import React from "react";
import aboutImg from "../../public/photo2.jpg"; 

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutImg}
            alt="About"
            className="rounded-3xl shadow-xl w-80 h-80 object-cover md:w-96 md:h-96"
          />
        </div>

        {/* Right Side - Info */}
        <div className="md:w-1/2 space-y-10">
          {/* About Me */}
          <section>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              About Me
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Hello! I'm{" "}
              <span className="text-green-600 font-semibold">Son Pratap</span>, a
              passionate MERN Stack Web Developer with a strong background in IT.
              I specialize in building high-quality web applications and enjoy
              turning complex problems into simple, beautiful, and intuitive
              designs.
            </p>
          </section>

          {/* Education & Skills */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-green-600 mb-3 flex items-center gap-2">
                🎓 Education
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>MCA in CS - ABES Engineering College, Ghaziabad (2025)</li>
                <li>BCA in CS - CSJM University, Kanpur (2023)</li>
                <li>Full Stack Web Development Training in College</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-green-600 mb-3 flex items-center gap-2">
                💡 Skills & Expertise
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>JavaScript, React.js, Node.js, MongoDB, Express</li>
                <li>Core JAVA, MySQL, Bootstrap</li>
                <li>HTML5, CSS3, Git, Firebase, REST APIs</li>
                <li>Strong UI/UX design understanding</li>
                <li>Excellent problem-solving & collaboration skills</li>
              </ul>
            </div>
          </section>

          {/* Mission Statement */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600 mb-3 flex items-center gap-2">
              🌟 Mission Statement
            </h2>
            <p className="text-gray-700 leading-relaxed">
              My goal is to create scalable, user-friendly software that solves
              real-world problems and delights users. I constantly strive to
              improve my craft and contribute to impactful digital products.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
