export default function About() {
  return (
    <div
      id="About"
      className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-purple-100/40 to-indigo-100 py-16"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-14">

        {/* Header */}
        <header className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent drop-shadow-md">
            About Me
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Tender & Procurement professional with expertise in managing bids, vendor assessments,
            and government procurement across global markets — driving process excellence and compliance.
          </p>
        </header>

        {/* Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Professional Summary",
              color: "from-purple-500/10 to-purple-100/40",
              content: (
                <>
                  <p className="text-[15px]">
                    Results-driven professional with over <strong>5 years</strong> of experience in Government,
                    PSU, and Corporate tenders across India and global platforms. Skilled in costing, compliance,
                    and bid execution.
                  </p>
                  <p className="mt-2 text-sm text-gray-500 italic">
                    Certified <strong>GeM Silver + Gold Buyer/Seller</strong>
                  </p>
                </>
              ),
            },
            {
              title: "Core Skills & Expertise",
              color: "from-indigo-500/10 to-purple-100/40",
              content: (
                <ul className="list-disc list-inside space-y-1.5 text-[15px]">
                  <li>Tender Management & Bid Execution</li>
                  <li>BOQ Costing & Financial Estimation</li>
                  <li>RFP/RFQ/RFI Documentation</li>
                  <li>Pre-Bid Meetings & Evaluation</li>
                  <li>Contract Management & Reporting</li>
                </ul>
              ),
            },
            {
              title: "e-Procurement Platforms",
              color: "from-purple-400/10 to-indigo-100/40",
              content: (
                <>
                  <p className="mb-2 text-[15px]">Hands-on experience with major platforms:</p>
                  <p className="text-sm text-gray-700">
                    <strong>India:</strong> GeM, NICSI, CPPP, IREPS, IOCL, ONGC, Coal India, BHEL, Defence
                  </p>
                  <p className="text-sm text-gray-700 mt-1.5">
                    <strong>Global:</strong> TED (EU), UNGM, World Bank, WTO, ADB, GeBIZ (Singapore), JETRO, KONEPS, MyProcurement
                  </p>
                </>
              ),
            },
            {
              title: "Vendor Assessment Expertise",
              color: "from-indigo-400/10 to-purple-100/40",
              content: (
                <ul className="list-disc list-inside space-y-1.5 text-[15px]">
                  <li>Vendor qualification & OEM compliance</li>
                  <li>Financial & risk-based evaluation</li>
                  <li>Audit documentation & capability checks</li>
                  <li>Supplier scoring & transparent selection</li>
                  <li>Coordination with tech & finance teams</li>
                </ul>
              ),
            },
          ].map((card, i) => (
            <section
              key={i}
              className={`relative p-6 rounded-xl backdrop-blur-xl bg-gradient-to-br ${card.color}
              border border-white/40 shadow-[0_5px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgb(0,0,0,0.15)]
              transition-all duration-400 hover:scale-[1.015]`}
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-t-xl"></div>

              <h2 className="text-xl font-semibold text-gray-900 mb-3 mt-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></span>
                {card.title}
              </h2>

              <div className="text-gray-700 leading-relaxed">{card.content}</div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-6">
          <a
            href="mailto:manjeetmau1994@gmail.com"
            className="inline-block px-8 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white 
                       rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 
                       transition-all duration-300 text-sm md:text-base"
          >
            Contact for Collaboration
          </a>
        </div>
      </div>
    </div>
  );
}
