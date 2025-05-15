import React, { useState } from "react";
import PatientLoginForm from "./PatientLoginForm";
import ProviderLoginForm from "./ProviderLoginForm";
import { useNavigate } from "react-router-dom"; // ✅ added

const Login = () => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate(); // ✅ added

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-[#f4f9fc] via-[#dbe6f0] to-[#e2f0fb] pt-16">
      {/* Left Side: Branding & Description */}
      <div className="w-full lg:w-1/2 bg-[#f4f9fc] p-6 sm:p-8 flex flex-col items-center justify-center text-[#174e6c]">
        {/* Branding Content */}
      </div>

      {/* Right Side: Login Logic */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-xs sm:max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 transform hover:scale-[1.02] transition duration-500 ease-in-out">
          {role === null && (
            <>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#174e6c] mb-2">
                Login
              </h1>
              <p className="text-gray-800 mb-6 sm:mb-8 text-sm sm:text-base">
                Welcome back! Choose your role to log in.
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => setRole("patient")}
                  className="w-full bg-[#1e5b94] text-white py-2 sm:py-3 px-4 rounded-lg flex items-center justify-center hover:bg-[#0d3b56] shadow-lg transform hover:translate-y-[-2px] transition duration-300"
                >
                  {/* Patient Icon */}
                  Login as Patient
                </button>

                <button
                  onClick={() => setRole("provider")}
                  className="w-full bg-[#1e5b94] text-white py-2 sm:py-3 px-4 rounded-lg flex items-center justify-center hover:bg-[#0d3b56] shadow-lg transform hover:translate-y-[-2px] transition duration-300"
                >
                  {/* Provider Icon */}
                  Login as Healthcare Provider
                </button>
              </div>
            </>
          )}

          {/* Form Rendering Based on Role */}
          {role === "patient" && (
            <PatientLoginForm navigate={navigate} setRole={setRole} />
          )}
          {role === "provider" && <ProviderLoginForm />}

          {/* Back to Role Selection */}
          {role !== null && (
            <div className="mt-4 text-center">
              <button
                className="text-[#3b82f6] underline"
                onClick={() => setRole(null)}
              >
                ← Go Back
              </button>
            </div>
          )}

          {/* Sign Up Link */}
          {role === null && (
            <div className="mt-6 sm:mt-8 text-center">
              <span className="text-gray-700 text-sm sm:text-base">
                New here?{" "}
              </span>
              <a
                href="/signup"
                className="text-[#3b82f6] hover:underline text-sm sm:text-base"
              >
                Create an account
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
