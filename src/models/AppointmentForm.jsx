import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AppointmentForm() {
  const [appointments, setAppointments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedAppointments =
      JSON.parse(localStorage.getItem("userAppointments")) || [];
    setAppointments(savedAppointments);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      id: Date.now(),
      name,
      email,
      date,
      time,
      message,
    };

    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    localStorage.setItem(
      "userAppointments",
      JSON.stringify(updatedAppointments)
    );

    // Clear form
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#E9F3F6] to-[#F0F4F8] pt-24 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#188ba0] mb-4">
          Book an Appointment
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please fill in your details to schedule an appointment.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#188ba0] focus:border-[#188ba0]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#188ba0] focus:border-[#188ba0]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-gray-700 font-semibold">
              Date
            </label>
            <input
              id="date"
              type="date"
              required
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#188ba0] focus:border-[#188ba0]"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-gray-700 font-semibold">
              Time
            </label>
            <input
              id="time"
              type="time"
              required
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#188ba0] focus:border-[#188ba0]"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold"
            >
              Message (Optional)
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Additional notes or details"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#188ba0] focus:border-[#188ba0]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#188ba0] hover:bg-[#0f3441] text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
          >
            Book Appointment
          </button>
        </form>

        <div className="mt-6 text-center text-[#188ba0]">
          <Link to="/doctors" className="hover:underline">
            ← Back to Doctors
          </Link>
        </div>
      </div>
    </div>
  );
}
