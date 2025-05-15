import React, { useEffect, useState } from "react";
import Button from "../layouts/Buttons";
import doctorsData from "../assets/data/Doctors-data.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Doctors() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedHospital, setSelectedHospital] = useState("All");
  const [doctors, setDoctors] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = import.meta.glob("../assets/img/*.{jpg,jpeg,png}", {
    eager: true,
  });

  const getImage = (imageName) => {
    for (const path in images) {
      if (path.endsWith(`/${imageName}`)) return images[path].default;
    }
    return "";
  };

  useEffect(() => {
    setDoctors(doctorsData);
  }, []);

  // Generate unique filter values
  const specializations = [
    "All",
    ...new Set(doctors.map((doc) => doc.specialties)),
  ];
  const locations = ["All", ...new Set(doctors.map((doc) => doc.location))];
  const hospitals = [
    "All",
    ...new Set(
      doctors
        .filter(
          (doc) =>
            selectedLocation === "All" || doc.location === selectedLocation
        )
        .map((doc) => doc.hospital)
    ),
  ];

  const filteredDoctors = doctors.filter(
    (doctor) =>
      (selectedSpecialty === "All" ||
        doctor.specialties === selectedSpecialty) &&
      (selectedLocation === "All" || doctor.location === selectedLocation) &&
      (selectedHospital === "All" || doctor.hospital === selectedHospital)
  );

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedSpecialty, selectedLocation, selectedHospital]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      filteredDoctors.length > 0 ? (prevIndex + 1) % filteredDoctors.length : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      filteredDoctors.length > 0
        ? (prevIndex - 1 + filteredDoctors.length) % filteredDoctors.length
        : 0
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4f8] to-[#e0e7ec] text-gray-900 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-[#174e6c] mb-4 leading-tight">
          Meet Our Expert Doctors
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Bringing you top-tier medical professionals who care for your health
          with expertise and compassion.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          {
            label: "Specialty",
            value: selectedSpecialty,
            setValue: setSelectedSpecialty,
            options: specializations,
          },
          {
            label: "Location",
            value: selectedLocation,
            setValue: setSelectedLocation,
            options: locations,
          },
          {
            label: "Hospital",
            value: selectedHospital,
            setValue: setSelectedHospital,
            options: hospitals,
          },
        ].map(({ label, value, setValue, options }, index) => (
          <select
            key={index}
            className="px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-[#174e6c] bg-white text-gray-900 w-full md:w-auto"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            {options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        ))}
      </div>

      {/* Doctor Cards */}
      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#174e6c] mb-8 text-center">
          Our Doctors
        </h2>

        {filteredDoctors.length > 0 ? (
          <div className="relative flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-4 bg-[#174e6c] text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              <FaArrowLeft size={24} />
            </button>

            <div className="w-full flex justify-center">
              <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <img
                  src={getImage(filteredDoctors[currentIndex].image)}
                  alt={filteredDoctors[currentIndex].name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-[#174e6c]"
                />
                <h3 className="text-xl font-semibold text-[#174e6c] text-center mb-2">
                  {filteredDoctors[currentIndex].name}
                </h3>
                <p className="text-md text-gray-700 text-center mb-1">
                  {filteredDoctors[currentIndex].specialties}
                </p>
                <p className="text-sm text-gray-500 text-center">
                  {filteredDoctors[currentIndex].hospital} —{" "}
                  {filteredDoctors[currentIndex].location}
                </p>
                <div className="flex justify-center mt-4">
                  <Button title="Book Appointment" />
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 bg-[#174e6c] text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        ) : (
          <div className="text-center text-gray-600 text-xl mt-8">
            No doctors found with the selected filters.
          </div>
        )}
      </div>
    </div>
  );
}
