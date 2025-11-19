"use client";
import { motion } from "framer-motion";

export default function ExperienceTimeline() {
  const experiences = [
    {
      id: 1,
      company: "Alobha Technologies Pvt. Ltd",
      role: "Bid Manager",
      period: "Jan 2025 – Present",
      details: [
        "Leading end-to-end bid processes across Government, PSU, and Global projects.",
        "Performing vendor pre-assessment and qualification before RFP participation.",
        "Managing bids on GeM, NICSI, CPPP, UNGM, and TED (EU) for IT hardware and technology products."
      ]
    },
    {
      id: 2,
      company: "Aieze",
      role: "Bid Specialist",
      period: "Sep 2024 – Jan 2025",
      details: [
        "Coordinated vendor due diligence and supplier documentation for international bids.",
        "Managed multi-region tenders under EU and Asia-Pacific frameworks."
      ]
    },
    {
      id: 3,
      company: "Planwey Global Services",
      role: "Tender Executive",
      period: "Jan 2023 – Oct 2024",
      details: [
        "Conducted vendor capability verification and technical assessment.",
        "Prepared compliance checklists and ensured end-to-end RFP submission readiness."
      ]
    },
    {
      id: 4,
      company: "Gluon Services",
      role: "Tender Executive",
      period: "Feb 2022 – Jan 2023",
      details: [
        "Managing bids through World Bank, ADB, and national eProcurement portals.",
        "Handled vendor evaluation reports, ensuring compliance with tender requirements.",
        "Improved bid win rate through effective documentation and supplier alignment."
      ]
    },
    {
      id: 5,
      company: "Cyfuture",
      role: "Tender Executive",
      period: "May 2020 – Feb 2021",
      details: [
        "Oversaw vendor registration, technical verification, and price analysis for Government bids."
      ]
    }
  ];

  return (
    <div id="Experience" className="w-full bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Professional Journey</h1>
          <p className="text-gray-600 text-base">
            A visual growth timeline showing each company and role progression.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-[3px] border-gradient-to-b from-purple-400 via-blue-400 to-pink-400 pl-8 space-y-12 before:absolute before:top-0 before:left-[-2px] before:w-[3px] before:h-full before:bg-gradient-to-b before:from-purple-400 before:via-blue-400 before:to-pink-400">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glowing node */}
              <div className="absolute -left-[1.3rem] top-2 w-5 h-5 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.5)] animate-pulse border-4 border-white"></div>

              {/* Smaller Card */}
              <div
                className={`group bg-white/60 backdrop-blur-xl rounded-xl p-5 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-400 border border-white/30
                  ${idx % 2 === 0 ? "ml-0" : "ml-5"}
                `}
              >
                <div className="flex justify-between items-center mb-1">
                  <h2 className="text-xl font-semibold text-gray-900">{exp.company}</h2>
                  <span className="text-gray-500 text-xs">{exp.period}</span>
                </div>
                <h3 className="text-base font-semibold text-purple-700 mb-2">{exp.role}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  {exp.details.map((detail, i) => (
                    <li
                      key={i}
                      className="transition-transform group-hover:translate-x-1 duration-300"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector line */}
              {idx !== experiences.length - 1 && (
                <motion.div
                  className="absolute left-[-2px] top-full h-12 w-1 bg-gradient-to-b from-purple-400 to-transparent"
                  style={{
                    transform: idx % 2 === 0 ? "rotate(8deg)" : "rotate(-8deg)",
                    transformOrigin: "top left"
                  }}
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
