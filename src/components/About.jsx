import React from "react";
import { FaHeartbeat, FaBullseye, FaGlobeAmericas } from "react-icons/fa";

export default function About() {
  return (
    <div className="relative bg-gradient-to-b from-[#f0f4f8] to-[#e0e7ec] text-gray-900 px-6 py-24">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold text-[#174e6c] mb-6 drop-shadow-md">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          We are revolutionizing healthcare by combining innovation, technology,
          and accessibility to create a seamless patient experience.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#174e6c] h-full hidden md:block"></div>

        {[
          {
            icon: <FaHeartbeat />,
            title: "Our Mission",
            text: "To bridge the gap between patients and healthcare providers through seamless, AI-driven digital solutions.",
            iconPosition: "right",
          },
          {
            icon: <FaBullseye />,
            title: "Our Vision",
            text: "Creating a globally connected healthcare network that makes quality medical services easily accessible to everyone.",
            iconPosition: "left",
          },
          {
            icon: <FaGlobeAmericas />,
            title: "Our Story",
            text: "Starting as a small initiative, we have grown into a leading healthcare technology platform that transforms patient experiences worldwide.",
            iconPosition: "right",
          },
        ].map((item, index, arr) => (
          <div
            key={index}
            className={`relative flex items-center flex-col md:flex-row ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } ${index === arr.length - 1 ? "" : "mb-16"}`} // no margin for last
          >
            {/* Dot indicator */}
            <div className="w-10 h-10 bg-[#174e6c] rounded-full absolute left-1/2 transform -translate-x-1/2 top-5 hidden md:block"></div>

            {/* Content Box */}
            <div
              className={`w-full md:w-2/3 p-6 bg-white rounded-2xl shadow-xl relative z-10 ${
                index % 2 === 0
                  ? "md:text-left md:ml-auto"
                  : "md:text-right md:mr-auto"
              }`}
            >
              {/* Icon background */}
              <div
                className={`absolute text-6xl text-[#174e6c] opacity-30 -top-6 ${
                  item.iconPosition === "right"
                    ? "right-6 md:right-6"
                    : "left-6 md:left-6"
                }`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#174e6c] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
