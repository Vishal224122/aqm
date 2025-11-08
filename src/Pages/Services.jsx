import { useEffect, useState } from "react";
import { CheckCircleIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import { MdMemory } from "react-icons/md";
import Services from "../Images/aqmservices2.mp4";
import MobileServices from "../Images/aqmservices6.mp4"
import Footer from "./Footer";
import mobileVideo from "../Images/mobile2.mp4";
import dashboard from "../Images/dashboard1.png"


export default function OurStory() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full bg-black text-white ">
      {/* ===================== Services Video Section ===================== */}
      <section className="relative bg-black py-12 text-white">
  <h3
  className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-center text-sky-400 mt-5 mb-4"
>
  Comprehensive Suit Of Phygital Service Offerings
</h3>


<p className="text-center text-white text-base sm:text-lg max-w-3xl mx-auto  md:text-2xl px-4 mt-3">
  AI Agentic Comms Orchestration & Smart Allocation Queues
</p>

{/* <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg px-4">
  AI driven smart allocation queues
</p> */}

{/* ✅ Video container (moved higher — almost touching text) */}
<div className="relative w-full sm:w-[85%] md:w-[60%] aspect-[4/3] md:aspect-[16/9] mx-auto rounded-2xl overflow-hidden shadow-xl mt-1 bg-black flex items-center justify-center">
  {/* Mobile video/image */}
  <video
    src={MobileServices} // 👉 your mobile video file
    alt="Our Story Mobile"
    className={`block md:hidden w-full h-full object-contain brightness-90 transition-opacity duration-1000 ${
      loaded ? "opacity-100" : "opacity-0"
    }`}
    autoPlay
    muted
    loop
    playsInline
  />

  {/* Desktop/Laptop video */}
  <video
    src={Services} // 👉 your desktop video file
    alt="Our Story Desktop"
    className={`hidden md:block w-full h-full object-contain brightness-90 transition-opacity duration-1000 ${
      loaded ? "opacity-100" : "opacity-0"
    }`}
    autoPlay
    muted
    loop
    playsInline
  />
</div>


<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mt-16 px-6 md:px-16 ">
  {/* Left Section - Text */}
  <div className="w-full md:w-1/2 space-y-6 -ms-4  -mt-12 ">
    <h3
      className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug "
      style={{ color: "#d8b9ff" }}
    >
      AI Driven Field Engagement Application
    </h3>

    <ul className="space-y-6">
      {[
        "Route and time planning engine for FOS visit",
        "Resource optimization through roster and schedule management",
        "Seamless handshake between FOS and Call Center",
      ].map((item, index) => (
        <li key={index} className="flex items-start text-base sm:text-lg text-gray-300">
      <span className="bg-blue-600 rounded-full p-1 mr-3 mt-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-3 h-3 sm:w-4 sm:h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Right Section - Video */}
  <div className="w-full md:w-1/2 flex justify-center">
    <video
      src={mobileVideo}
      autoPlay
      loop
      muted
      playsInline
      className="w-[250px] sm:w-[400px] md:w-[550px] lg:w-[600px] max-w-full object-contain rounded-2xl drop-shadow-2xl"
    />
  </div>
</div>






      </section>

      {/* ===================== Voice AI Platform Section ===================== */}
      <section className="bg-black text-white py-16 px-6 md:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
         {/* <h2 className="text-2xl md:text-4xl font-bold mt-4 md:mt-10">
  Lorem, ipsum.<span className="text-blue-500">Lorem, ipsum.</span> lorem
</h2> */}

          {/* <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi.
            Lorem, ipsum dolor.
          </p> */}
        </div>

        {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20 -mt-30 px-3 sm:px-4 md:px-16">
  {/* Left Side - Text */}
  <div className="w-full md:w-1/2 space-y-4 mt-8 md:mt-0 -ms-6 sm:-ms-4 md:ms-0">
    <h3
      className="text-2xl sm:text-3xl md:text-4xl font-semibold"
      style={{ color: "#d8b9ff" }}
    >
      Operational Efficiencies Through Advanced Analytics
    </h3>

    <p className="text-white text-base sm:text-lg">
      Descriptive, Predictive & Prescriptive Realtime Analytical AI Models
    </p>

    <ul className="space-y-6">
      {[
        "Propensity AI Model",
        "Non-deterministic Workflow",
        "Self-learning & multi-channel AI Bots",
        "Speech Analytics & Voice Naturalization",
        "Sector-specific Scripts",
        "Role-based Digital Cockpit",
      ].map((item, index) => (
        <li
          key={index}
          className="flex items-start text-base sm:text-lg text-gray-300"
        >
          <span className="bg-blue-600 rounded-full p-1 mr-3 mt-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-3 h-3 sm:w-4 sm:h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Right Side - Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={dashboard} // replace this with your image import or path
      alt="Dashboard Preview"
      className="w-[600px] max-w-full object-contain rounded-2xl drop-shadow-2xl"
    />
  </div>
</div>



      </section>

      {/* ===================== Footer ===================== */}
      <Footer />
    </section>
  );
}
