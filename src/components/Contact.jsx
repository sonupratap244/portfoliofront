import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import confetti from "canvas-confetti";
import { FaCheck, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUser, FaCalendarAlt } from "react-icons/fa";
import API from "../utils/api";

function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name.trim(),
      email: data.email.trim(),
      message: data.message.trim(),
      meetingDate: data.meetingDate || "",
      meetingTime: data.meetingTime || "",
    };

    setLoading(true);  // Show "Sending..."

    try {
      const response = await API.post("/messages/create", userInfo);

      if (response && response.status >= 200 && response.status < 300) {
        // Reset form only after successful submission
        reset();

        // Confetti animation
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

        // Success toast
        toast.custom((t) => (
          <div className={`${t.visible ? "animate-enter" : "animate-leave"} max-w-md w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg rounded-2xl pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <span className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-white text-2xl shadow-lg animate-bounce">
                    <FaCheck />
                  </span>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-lg font-bold">Message Sent Successfully!</p>
                  <p className="mt-1 text-sm text-purple-100">
                    Thank you for reaching out. We’ll contact you very soon.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-purple-500">
              <button onClick={() => toast.dismiss(t.id)} className="w-full rounded-none rounded-r-2xl p-4 flex items-center justify-center text-sm font-medium hover:bg-purple-700 focus:outline-none">
                Close
              </button>
            </div>
          </div>
        ));
      } else {
        toast.error(response?.data?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error.response || error.message);
      toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Reset button
    }
  };

  return (
    <div id="Contact" className="max-w-screen-xl mx-auto px-6 md:px-16 my-16 bg-gray-50 rounded-xl shadow-lg py-12">
      <Toaster />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">Contact Me</h1>
        <p className="text-gray-600 mt-2 text-lg">
          I’d love to connect! Send me a message or book a meeting and I’ll get back to you soon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-600 tracking-wide select-none">Manjeet <span className="text-gray-800">Verma</span></h2>
          <p className="text-gray-600 italic mt-1 text-center">Global Tender & Bid Manager | Government Procurement Expert</p>
          <div className="w-20 h-1 bg-purple-600 rounded-full mt-4"></div>
          <div className="space-y-6 w-full text-gray-700">
            <div className="flex items-center gap-4"><FaEnvelope className="text-purple-600 text-xl" /><span>manjeetmau1994@gmail.com</span></div>
            <div className="flex items-center gap-4"><FaPhoneAlt className="text-purple-600 text-xl" /><span>+91 7080886174</span></div>
            <div className="flex items-center gap-4"><FaMapMarkerAlt className="text-purple-600 text-xl" /><span>Noida, Uttar Pradesh, India</span></div>
          </div>
          <p className="text-gray-600 text-center px-4">
            Global Tender & Bid Manager | Government Procurement | Vendor Assessment & Compliance!
          </p>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-xl rounded-xl p-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <div className="flex items-center border rounded-lg px-3 bg-gray-50 focus-within:ring-2 focus-within:ring-purple-400">
              <FaUser className="text-gray-500 mr-2" />
              <input {...register("name", { required: "Full name is required", minLength: { value: 2, message: "Name must be at least 2 characters" }})} className="w-full py-2 bg-transparent outline-none" placeholder="Your Name" />
            </div>
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <div className="flex items-center border rounded-lg px-3 bg-gray-50 focus-within:ring-2 focus-within:ring-purple-400">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email" }})} className="w-full py-2 bg-transparent outline-none" placeholder="your@email.com" />
            </div>
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" }})} className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-purple-400 resize-none" rows="4" placeholder="Write your message here..." />
            {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Preferred Meeting Date</label>
              <div className="flex items-center border rounded-lg px-3 bg-gray-50 focus-within:ring-2 focus-within:ring-purple-400">
                <FaCalendarAlt className="text-gray-500 mr-2" />
                <input type="date" {...register("meetingDate")} className="w-full py-2 bg-transparent outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Preferred Time</label>
              <div className="flex items-center border rounded-lg px-3 bg-gray-50 focus-within:ring-2 focus-within:ring-purple-400">
                <FaCalendarAlt className="text-gray-500 mr-2" />
                <input type="time" {...register("meetingTime")} className="w-full py-2 bg-transparent outline-none" />
              </div>
            </div>
          </div>

          <button type="submit" disabled={loading} className={`flex items-center gap-2 bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"}`}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
