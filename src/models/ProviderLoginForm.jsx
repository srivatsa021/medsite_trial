import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProviderLoginForm = () => {
  const [providerId, setProviderId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock authentication logic
    const user = {
      providerId,
      role: "provider",
    };

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/provider-dashboard");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700 mb-1">Provider ID</label>
        <input
          type="text"
          placeholder="Enter your Provider ID"
          className="w-full px-4 py-2 rounded-lg border shadow focus:outline-none focus:ring-2 focus:ring-[#1e5b94]"
          value={providerId}
          onChange={(e) => setProviderId(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 rounded-lg border shadow focus:outline-none focus:ring-2 focus:ring-[#1e5b94]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#1e5b94] text-white py-2 sm:py-3 rounded-lg hover:bg-[#0d3b56] shadow-lg transform hover:translate-y-[-2px] transition duration-300"
      >
        Login
      </button>
    </form>
  );
};

export default ProviderLoginForm;
