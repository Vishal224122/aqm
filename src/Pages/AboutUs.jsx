import React, { useEffect, useState } from "react";
import bgImage from "../Images/aboutus.png"; // background for Hero
import Footer from "../Pages/Footer";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const missions = [
    "Create sustainable, compliant, risk mitigated organization",
    "Providing greater $ value to client",
    "Protect Brand Identity of client",
    "Intelligent Collections, Continuous Recovery",
    "Win–Win for all stakeholders – Client, Partner, and Debtor",
  ];

  return (
    <>
      {/* ========== HERO / ABOUT SECTION + VISION + MISSION ========== */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 py-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl text-center space-y-12">
          {/* ABOUT AQM */}
          <div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-[#d8b9ff]">
              About AQM
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Promoted by AMS, the Alpha Quick Mobility Pvt. Ltd. forays into
              creating the AI-powered next-gen data platform and apps to
              optimize the collections through all channels. Its field
              collection team has penetration across Pan-India.
            </p>
          </div>

          {/* ABOUT AMS */}
          <div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-[#d8b9ff]">
              About AMS Comtel
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              AMS Comtel BPMS Pvt. Ltd. is a comprehensive TELE-COLLECTIONS
              company, founded by a team of senior professionals who have held
              leadership positions in organizations of stature in banking &
              telecom companies.
            </p>
          </div>

          {/* VISION */}
          <div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-white">
              OUR VISION
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              To revolutionize collections by leveraging cutting-edge data
              analytics and AI to create empathetic, efficient, and highly
              personalized services.
            </p>
          </div>

          {/* MISSION (Inline Style) */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-white">
              OUR MISSION
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {missions.map((mission, index) => (
                <div
                  key={index}
                  className="bg-white/10 border border-gray-500 rounded-2xl p-4 w-72 shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <p className="text-sm sm:text-base text-gray-200 font-medium">
                    {mission}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
