// HospitalHomepage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HospitalHomepage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#188ba0] to-[#1F4C4A]">
      <div className="text-center text-white">
        <h2 className="text-5xl font-bold mb-6">
          Welcome to Your Hospital Dashboard
        </h2>
        <p className="text-xl mb-4">
          Manage patients, view appointments, and more!
        </p>
        <Link
          to="/manage-patients"
          className="bg-[#D1B2FF] text-[#188ba0] px-6 py-3 rounded-lg font-semibold hover:bg-[#D1B2FF]/80 transition-all"
        >
          Manage Patients
        </Link>
      </div>
    </div>
  );
}
