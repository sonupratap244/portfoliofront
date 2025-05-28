import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUser, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("http://localhost:8000/api/create", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
        <p className="text-gray-600 mt-2 text-lg">
          I’d love to connect! Send me a message and I’ll get back to you soon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Name & Info */}
        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-extrabold text-green-700 tracking-wide select-none">
              Son <span className="text-gray-800">Pratap</span>
            </h2>
            <p className="text-gray-600 italic tracking-wide mt-1 text-center">
              MERN Stack Developer & Tech Enthusiast
            </p>
            <div className="w-20 h-1 bg-green-600 rounded-full mt-4"></div>
          </div>

          <div className="space-y-6 w-full text-gray-700">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-600 text-xl" />
              <span>sonpratap244@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-600 text-xl" />
              <span>+91 8303255391</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-600 text-xl" />
              <span>Noida, Uttar Pradesh, India</span>
            </div>
          </div>

          <p className="text-gray-600 text-center px-4">
            Available for freelance work, internships, or full-time roles. Let’s build something great together!
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-xl rounded-lg p-8 space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <div className="flex items-center border rounded-lg px-3 bg-gray-50 focus-within:ring-2 focus-within:ring-green-400">
              <FaUser className="text-gray-500 mr-2" />
              <input
                {...register("name", { required: true })}
                className="w-full py-2 bg-transparent outline-none"
                placeholder="Your Name"
              />
            </div>
            {errors.name && <p className="text-sm text-red-500 mt-1">Name is required</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <div className="flex items-center border rounded-lg px-3 bg-gray-50 focus-within:ring-2 focus-within:ring-green-400">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                {...register("email", { required: true })}
                className="w-full py-2 bg-transparent outline-none"
                placeholder="your@email.com"
              />
            </div>
            {errors.email && <p className="text-sm text-red-500 mt-1">Email is required</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Message</label>
            <textarea
              {...register("message", { required: true })}
              className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-green-400 resize-none"
              rows="5"
              placeholder="Write your message here..."
            ></textarea>
            {errors.message && <p className="text-sm text-red-500 mt-1">Message is required</p>}
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

