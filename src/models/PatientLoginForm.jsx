import React, { useState } from "react";

const PatientLoginForm = ({ navigate, setRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "try@gmail.com" && password === "try@1") {
      const user = { email, role: "patient" };
      localStorage.setItem("user", JSON.stringify(user));

      // Optional: store email separately if needed later
      localStorage.setItem("email", email);

      setError("");
      setRole(null); // reset role selection state
      navigate("/patient-homepage");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="w-full bg-[#1e5b94] text-white py-2 rounded hover:bg-[#0d3b56]"
      >
        Login
      </button>
    </form>
  );
};

export default PatientLoginForm;
