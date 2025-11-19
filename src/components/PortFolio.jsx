"use client";
import { motion } from "framer-motion";
import { FaGlobe, FaBuilding, FaHandshake, FaFileContract } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "GeM - Government eMarketplace Tenders",
      icon: <FaBuilding className="text-purple-600 text-3xl" />,
      details:
        "Executed multiple Central Government tenders for IT hardware and software procurement on the GeM portal — including bid preparation, vendor registration, and document compliance.",
      tags: ["GeM", "Govt Bidding", "E-Procurement"],
    },
    {
      id: 2,
      title: "UNGM & World Bank International Bids",
      icon: <FaGlobe className="text-blue-600 text-3xl" />,
      details:
        "Participated in international development tenders through UNGM and World Bank eProcurement platforms. Managed proposal writing, technical documentation, and cost evaluation.",
      tags: ["UNGM", "World Bank", "Global Tenders"],
    },
    {
      id: 3,
      title: "PSU & Defence Sector Tenders",
      icon: <FaHandshake className="text-pink-600 text-3xl" />,
      details:
        "Handled tenders for PSU clients like IOCL, BHEL, and Defence departments — ensuring technical compliance, BOQ costing, and vendor qualification assessment.",
      tags: ["PSU", "Defence", "BOQ Costing"],
    },
    {
      id: 4,
      title: "International Platforms - TED (EU) & GeBIZ (Singapore)",
      icon: <FaFileContract className="text-green-600 text-3xl" />,
      details:
        "Coordinated international bids across TED (EU) and GeBIZ (Singapore) for IT hardware and consultancy tenders, including document translation and global supplier onboarding.",
      tags: ["EU", "GeBIZ", "Tender Compliance"],
    },
  ];

  return (
    <div
      id="Portfolio"
      className="w-full bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 relative overflow-hidden"
    >
      {/* Soft Glow Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Global Tender & Bid Management Projects
          </h1>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            A showcase of professional tender and bid projects managed across Government, PSU, and International procurement platforms.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white/70 backdrop-blur-xl rounded-2xl p-7 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all border border-white/30"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-white rounded-full shadow">{proj.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900">{proj.title}</h2>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{proj.details}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
