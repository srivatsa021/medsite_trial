import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import appointmentsData from "../assets/data/appointments.json";
import hospitalsData from "../assets/data/Hospitals-data.json";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [hospitals, setHospitals] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    location: "",
    hospital: "",
    doctor: "",
    date: "",
    time: "",
    status: "Pending",
  });

  useEffect(() => {
    const savedAppointments =
      JSON.parse(localStorage.getItem("userAppointments")) || appointmentsData;
    setAppointments(savedAppointments);
    setHospitals(hospitalsData);
  }, []);

  useEffect(() => {
    localStorage.setItem("userAppointments", JSON.stringify(appointments));
  }, [appointments]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prev) => ({ ...prev, [name]: value }));

    if (name === "location") {
      setNewAppointment((prev) => ({ ...prev, hospital: "", doctor: "" }));
      setFilteredDoctors([]);
    }

    if (name === "hospital") {
      const selectedHospital = hospitals.find(
        (h) => h.hospital === value && h.location === newAppointment.location
      );
      setFilteredDoctors(selectedHospital?.doctors?.map((d) => d.name) || []);
      setNewAppointment((prev) => ({ ...prev, doctor: "" }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { location, hospital, doctor, date, time } = newAppointment;
    if (location && hospital && doctor && date && time) {
      const newApp = { id: Date.now(), ...newAppointment };
      setAppointments((prev) => [...prev, newApp]);
      setNewAppointment({
        location: "",
        hospital: "",
        doctor: "",
        date: "",
        time: "",
        status: "Pending",
      });
      setShowForm(false);
    }
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter((app) => app.id !== id));
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-br from-[#d2f1f5] to-[#f2faff] pt-24 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#0b5d69] mb-2">
          Appointment Management
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Schedule and view your upcoming appointments
        </p>

        <div className="flex justify-center mb-6">
          <button
            className="px-6 py-2 bg-[#0b5d69] hover:bg-[#083e45] text-white font-semibold rounded-lg shadow-md transition duration-300"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close Form" : "Schedule New Appointment"}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Location
                </label>
                <select
                  name="location"
                  value={newAppointment.location}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0b5d69] focus:border-[#0b5d69]"
                >
                  <option value="">Select Location</option>
                  {[...new Set(hospitals.map((h) => h.location))].map(
                    (loc, i) => (
                      <option key={i} value={loc}>
                        {loc}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Hospital
                </label>
                <select
                  name="hospital"
                  value={newAppointment.hospital}
                  onChange={handleInputChange}
                  disabled={!newAppointment.location}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0b5d69] focus:border-[#0b5d69]"
                >
                  <option value="">Select Hospital</option>
                  {hospitals
                    .filter((h) => h.location === newAppointment.location)
                    .map((h, i) => (
                      <option key={i} value={h.hospital}>
                        {h.hospital}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Doctor
                </label>
                <select
                  name="doctor"
                  value={newAppointment.doctor}
                  onChange={handleInputChange}
                  disabled={!newAppointment.hospital}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0b5d69] focus:border-[#0b5d69]"
                >
                  <option value="">Select Doctor</option>
                  {filteredDoctors.map((doc, i) => (
                    <option key={i} value={doc}>
                      {doc}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newAppointment.date}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0b5d69] focus:border-[#0b5d69]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Time</label>
                <input
                  type="time"
                  name="time"
                  value={newAppointment.time}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0b5d69] focus:border-[#0b5d69]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0b5d69] hover:bg-[#083e45] text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
            >
              Submit Appointment
            </button>
          </form>
        )}

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-[#0b5d69] mb-4">
            Upcoming Appointments
          </h3>
          {appointments.length === 0 ? (
            <p className="text-gray-600 text-center">
              No appointments scheduled.
            </p>
          ) : (
            <ul className="space-y-4">
              {appointments.map((app) => (
                <li
                  key={app.id}
                  className="p-5 bg-[#f0faff] border border-[#c1e7ed] rounded-xl flex justify-between items-center shadow-sm"
                >
                  <div>
                    <p className="text-lg font-semibold text-[#0b5d69]">
                      {app.doctor} @ {app.hospital}
                    </p>
                    <p className="text-sm text-gray-700">
                      Location: {app.location} | Date: {app.date} | Time:{" "}
                      {app.time}
                    </p>
                    <p className="text-sm font-medium text-yellow-700">
                      Status: {app.status}
                    </p>
                  </div>
                  <div className="flex gap-4 text-lg">
                    <button
                      onClick={() => deleteAppointment(app.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => alert("Edit functionality coming soon")}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
