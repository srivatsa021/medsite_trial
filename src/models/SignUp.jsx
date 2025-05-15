import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientSignupForm from "./PatientSignUpForm";
import ProviderSignupForm from "./ProviderSignUpForm";

const SignUp = () => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-[#f4f9fc] via-[#dbe6f0] to-[#e2f0fb] pt-16">
      <div className="w-full lg:w-1/2 bg-[#f4f9fc] p-6 sm:p-8 flex flex-col items-center justify-center text-[#174e6c]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1e5b94] mb-4 flex items-center justify-center shadow-xl">
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="w-10 sm:w-12 h-10 sm:h-12"
            >
              <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-1 20v-6h2v6h5v-8h3l-1-4c-.5-2-1.9-3-3.5-3h-9c-1.6 0-3 1-3.5 3l-1 4h3v8h5z" />
            </svg>
          </div>
          <span className="text-lg sm:text-2xl font-semibold mb-8 sm:mb-12 drop-shadow">
            HealthSync Portal
          </span>
        </div>

        <div className="w-full max-w-xs sm:max-w-md flex flex-col items-center">
          <div className="bg-[#e2e2e2] w-full h-48 sm:h-80 mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500 ease-in-out">
            <img
              src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
              alt="Healthcare Professional"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-[#174e6c] text-opacity-90 max-w-xs sm:max-w-sm mb-2 text-sm sm:text-base leading-relaxed">
            Connect with experienced healthcare providers & manage appointments
            seamlessly from anywhere.
          </p>
          <a
            href="#"
            className="font-medium text-sm sm:text-base underline text-[#174e6c] hover:text-[#1e5b94] transition"
          >
            Learn More About Our Services
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-xs sm:max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 transform hover:scale-[1.02] transition duration-500 ease-in-out">
          {role === null && (
            <>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#174e6c] mb-2">
                Create Account
              </h1>
              <p className="text-gray-800 mb-6 sm:mb-8 text-sm sm:text-base">
                Join our growing healthcare community today.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => setRole("patient")}
                  className="w-full bg-[#1e5b94] text-white py-2 sm:py-3 px-4 rounded-lg flex items-center justify-center hover:bg-[#0d3b56] shadow-lg transform hover:translate-y-[-2px] transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sign Up as Patient
                </button>

                <button
                  onClick={() => setRole("provider")}
                  className="w-full bg-[#1e5b94] text-white py-2 sm:py-3 px-4 rounded-lg flex items-center justify-center hover:bg-[#0d3b56] shadow-lg transform hover:translate-y-[-2px] transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Sign Up as Healthcare Provider
                </button>
              </div>
            </>
          )}

          {role === "patient" && <PatientSignupForm navigate={navigate} />}
          {role === "provider" && <ProviderSignupForm navigate={navigate} />}

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

          {role === null && (
            <div className="mt-6 sm:mt-8 text-center">
              <span className="text-gray-700 text-sm sm:text-base">
                Already have an account?{" "}
              </span>
              <a
                href="/login"
                className="text-[#3b82f6] hover:underline text-sm sm:text-base"
              >
                Login here
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
