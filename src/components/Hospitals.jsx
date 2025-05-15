import React, { useState, useEffect } from "react";
import { FaHospitalAlt, FaSearch } from "react-icons/fa";
import hospitalsData from "../assets/data/Hospitals-data.json";

const Hospitals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [locations, setLocations] = useState([]);
  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    setHospitals(hospitalsData);
    const uniqueLocations = [
      "",
      ...new Set(hospitalsData.map((h) => h.location)),
    ];
    const uniqueSpecialties = [
      "",
      ...new Set(hospitalsData.map((h) => h.specialty)),
    ];
    setLocations(uniqueLocations);
    setSpecialties(uniqueSpecialties);
  }, []);

  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());

  const filteredHospitals = hospitals.filter((hospital) => {
    return (
      hospital.name.toLowerCase().includes(searchTerm) &&
      (selectedLocation ? hospital.location === selectedLocation : true) &&
      (selectedSpecialty ? hospital.specialty === selectedSpecialty : true)
    );
  });

  return (
    <div className="pt-20 pb-10 px-6 bg-gradient-to-b from-[#f0f4f8] to-[#e0e7ec] min-h-screen text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <FaHospitalAlt className="text-[#174e6c] text-5xl drop-shadow-lg" />
          <h2 className="text-4xl font-extrabold text-[#174e6c] drop-shadow-md">
            Hospitals Directory
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative flex-grow">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search hospitals by name..."
              className="w-full px-10 py-3 border border-gray-300 rounded-2xl shadow-md focus:ring-2 focus:ring-[#174e6c] focus:outline-none bg-white text-gray-900"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <select
            className="px-4 py-3 border border-gray-300 rounded-2xl shadow-md focus:ring-2 focus:ring-[#174e6c] focus:outline-none bg-white text-gray-900"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((loc, idx) => (
              <option key={idx} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-3 border border-gray-300 rounded-2xl shadow-md focus:ring-2 focus:ring-[#174e6c] focus:outline-none bg-white text-gray-900"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            <option value="">All Specialties</option>
            {specialties.map((specialty, idx) => (
              <option key={idx} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHospitals.length > 0 ? (
            filteredHospitals.map((hospital, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-gray-200"
              >
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-48 object-cover rounded-t-3xl"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#174e6c] mb-2 drop-shadow-md">
                    {hospital.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Location:</strong> {hospital.location}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Specialty:</strong> {hospital.specialty}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No hospitals match your search criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
