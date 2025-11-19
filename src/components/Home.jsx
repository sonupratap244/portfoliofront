import pic from "../../public/photo.jpg";
import gemLogo from "../../public/gem-logo.png";
import ungmLogo from "../../public/ungm-logo.png";

import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      id="Home"
      className="relative w-full min-h-screen bg-gray-50 text-gray-900 flex flex-col justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Side Shadows */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-200 to-transparent"></div>
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-200 to-transparent"></div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col-reverse md:flex-row items-center gap-10 relative z-10">

        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <span className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wide">
            Welcome to my Portfolio
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug">
            Hey, I'm <span className="text-purple-600">Manjeet Verma</span>
            <br />
            I'm a{" "}
            <ReactTyped
              className="text-blue-600 font-semibold"
              strings={["Global Tender", "Bid Manager", "Gov. Procurement"]}
              typeSpeed={60}
              backSpeed={50}
              loop
            />
          </h1>

          <p className="text-gray-700 text-sm md:text-md leading-relaxed">
            Global Tender & Bid Manager | Government Procurement | Vendor Assessment & Compliance
          </p>

          {/* GEM & UNGM Logos */}
          <div className="flex justify-start md:justify-start gap-6 mt-4 flex-wrap">
            <a href="https://gem.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
              <img src={gemLogo} alt="GEM Logo" className="w-24 md:w-32 object-contain" />
            </a>
            <a href="https://www.ungm.org/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
              <img src={ungmLogo} alt="UNGM Logo" className="w-24 md:w-32 object-contain" />
            </a>
          </div>

          {/* Contact Button */}
          <div className="mt-6">
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-2 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors font-medium"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Media */}
          <div className="mt-6 flex gap-6 text-2xl">
            {/* <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a> */}
            {/* <a href="https://www.linkedin.com/in/manjeet-verma-b06326214/" className="hover:text-blue-700 transition-colors"><FaLinkedin /></a> */}
          </div>
        </div>

        {/* Right Section - Profile */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={pic}
            alt="Profile"
            className="rounded-full shadow-2xl w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover border-4 border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
