import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  FaHospital,
  FaUserMd,
  FaSearch,
  FaCalendarAlt,
  FaStethoscope,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import homeImage from "../assets/img/home.jpg";

function PatientHomepage() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Navbar user={user} setUser={setUser} handleLogout={handleLogout} />
      <div className="bg-gradient-to-b from-[#f0f4f8] to-[#e0e7ec] text-gray-900 font-sans">
        {/* Hero Section */}
        <div className="h-screen w-full flex flex-col lg:flex-row items-center justify-between px-8 py-20 relative overflow-hidden">
          <div className="lg:w-1/2 text-center lg:text-left animate__animated animate__fadeIn animate__delay-1s">
            <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-[#174e6c] drop-shadow-md">
              Revolutionizing Global Healthcare
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 mb-8">
              Harness the power of advanced AI and technology to find the best
              healthcare solutions, tailored to your needs.
            </p>
            <ScrollLink
              to="features-section"
              smooth={true}
              duration={700}
              className="px-8 py-4 bg-[#174e6c] text-white font-bold text-lg rounded-full shadow-lg transform transition-all duration-500 hover:bg-[#123954] hover:scale-105 hover:shadow-xl"
            >
              Explore Now
            </ScrollLink>
          </div>
          <div className="lg:w-1/2 flex justify-center animate__animated animate__fadeIn animate__delay-1.5s">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-[#d6e4f0] rounded-3xl shadow-xl transform hover:scale-110 transition-all duration-500 overflow-hidden">
              <img
                src={homeImage}
                alt="High-Tech Healthcare"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features-section" className="py-20">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-4xl font-extrabold text-[#174e6c] mb-12 drop-shadow-md">
              Explore Our Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                "/hospitals",
                "/doctors",
                "/chatbot",
                "/appointments",
                "/medical-records",
              ].map((route, index) => {
                const icons = [
                  FaHospital,
                  FaUserMd,
                  FaSearch,
                  FaCalendarAlt,
                  FaStethoscope,
                ];
                const titles = [
                  "Global Network",
                  "Expert Doctors",
                  "AI-Powered Search",
                  "Manage Appointments",
                  "Medical Records",
                ];
                const descriptions = [
                  "Access top-rated hospitals worldwide with cutting-edge infrastructure.",
                  "Connect with leading medical experts in every field globally.",
                  "Find the perfect solution instantly with our intelligent search system.",
                  "View, schedule, or reschedule your medical appointments easily.",
                  "Access and manage your medical history and lab results securely.",
                ];
                const Icon = icons[index];

                return (
                  <Link
                    key={index}
                    to={route}
                    className="p-8 bg-white rounded-2xl shadow-2xl transform hover:scale-105 hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-200 hover:border-[#174e6c]"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <Icon className="text-6xl text-[#174e6c] mb-6 transform transition-transform duration-500 " />
                      <h4 className="text-2xl font-bold mb-4 text-[#174e6c] drop-shadow-md">
                        {titles[index]}
                      </h4>
                      <p className="text-gray-700 text-center">
                        {descriptions[index]}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientHomepage;
