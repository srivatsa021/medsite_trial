import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    // In a real scenario, here you would send the email to the server
    alert(`Password reset link sent to ${email}`);
    navigate("/login"); // Redirect to login after reset
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#188ba0] to-[#1F4C4A] text-white">
      <div className="bg-white text-[#1F4C4A] rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#188ba0]"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#188ba0] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#1F4C4A] transition-transform transform hover:scale-105"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
