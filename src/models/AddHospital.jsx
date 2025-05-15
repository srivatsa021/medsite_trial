import React, { useState } from "react";
import axios from "axios";

const AddHospital = ({ setHospitals }) => {
  const [hospitalData, setHospitalData] = useState({
    name: "",
    location: "",
    type: "",
    image: "",
    doctors: [],
  });
  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    contact: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes for hospital data
  const handleHospitalChange = (e) => {
    const { name, value } = e.target;
    setHospitalData({ ...hospitalData, [name]: value });
  };

  // Handle input changes for doctor data
  const handleDoctorChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  // Add a doctor to the doctors list
  const addDoctor = () => {
    if (doctor.name && doctor.specialization && doctor.contact) {
      setHospitalData((prevData) => ({
        ...prevData,
        doctors: [...prevData.doctors, doctor],
      }));
      setDoctor({ name: "", specialization: "", contact: "" }); // Reset doctor form
    } else {
      setError("Please fill out all doctor fields.");
    }
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Submit the hospital data with doctors to the backend
      const response = await axios.post(
        "http://localhost:5000/api/hospitals",
        hospitalData
      );
      if (response.status === 201) {
        setSuccess("Hospital added successfully!");
        setHospitals((prevHospitals) => [...prevHospitals, hospitalData]);
        setHospitalData({
          name: "",
          location: "",
          type: "",
          image: "",
          doctors: [],
        });
      }
    } catch (err) {
      console.error("Error adding hospital:", err);
      setError("Failed to add hospital. Please try again.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-[#188ba0]">Add Hospital</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form onSubmit={handleSubmit}>
        {/* Hospital Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Hospital Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#188ba0]"
            value={hospitalData.name}
            onChange={handleHospitalChange}
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Location</label>
          <input
            type="text"
            name="location"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#188ba0]"
            value={hospitalData.location}
            onChange={handleHospitalChange}
            required
          />
        </div>

        {/* Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Type</label>
          <input
            type="text"
            name="type"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#188ba0]"
            value={hospitalData.type}
            onChange={handleHospitalChange}
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <input
            type="text"
            name="image"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#188ba0]"
            value={hospitalData.image}
            onChange={handleHospitalChange}
          />
        </div>

        {/* Doctor Fields */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Add Doctor</h3>
          <label className="block text-sm font-medium mb-2">Doctor Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#188ba0]"
            value={doctor.name}
            onChange={handleDoctorChange}
          />

          <label className="block text-sm font-medium mb-2 mt-4">
            Specialization
          </label>
          <input
            type="text"
            name="specialization"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#188ba0]"
            value={doctor.specialization}
            onChange={handleDoctorChange}
          />

          <label className="block text-sm font-medium mb-2 mt-4">
            Contact Info
          </label>
          <input
            type="text"
            name="contact"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#188ba0]"
            value={doctor.contact}
            onChange={handleDoctorChange}
          />

          <button
            type="button"
            onClick={addDoctor}
            className="mt-4 bg-[#188ba0] text-white px-6 py-2 rounded-lg hover:bg-[#126e78] transition duration-300"
          >
            Add Doctor
          </button>
        </div>

        {/* Display Added Doctors */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Doctors Added:</h3>
          <ul className="list-disc pl-6">
            {hospitalData.doctors.map((doc, index) => (
              <li key={index}>
                {doc.name} - {doc.specialization} - {doc.contact}
              </li>
            ))}
          </ul>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#188ba0] text-white px-6 py-2 rounded-lg hover:bg-[#126e78] transition duration-300"
        >
          Submit Hospital
        </button>
      </form>
    </div>
  );
};

export default AddHospital;
