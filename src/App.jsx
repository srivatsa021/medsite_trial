// App.jsx
import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Login from "./models/Login";
import Signup from "./models/SignUp";
import ForgotPassword from "./models/ForgotPass";
import PatientLoginForm from "./models/PatientLoginForm";
import PatientSignUpForm from "./models/PatientSignUpForm";
import ProviderLoginForm from "./models/ProviderLoginForm";
import ProviderSignUpForm from "./models/ProviderSignUpForm";
import PatientHomepage from "./components/PatientHomepage";
import HospitalHomepage from "./components/HospitalHomepage";
import Doctors from "./components/Doctors";
import Hospitals from "./components/Hospitals";
import MedicalRecords from "./components/MedicalRecords";
import About from "./components/About";
import Blogs from "./components/Blogs";
import AppointmentForm from "./models/AppointmentForm";
import Chatbot from "./components/ChatbotSection";
import Footer from "./components/Footer";
import Appointments from "./components/Appointments";
import ContactPage from "./components/ContactUs";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");
    const userRole = localStorage.getItem("userRole");
    if (userName && userEmail && userRole) {
      setUser({ name: userName, email: userEmail });
      setRole(userRole);
    }
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem("userName", userData.name);
    localStorage.setItem("userEmail", userData.email);
    localStorage.setItem("userRole", userData.role);
    setUser({ name: userData.name, email: userData.email });
    setRole(userData.role);
    navigate(
      userData.role === "patient" ? "/patient-homepage" : "/hospital-homepage"
    );
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setRole(null);
    navigate("/");
  };

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              role === "patient" ? (
                <PatientHomepage user={user} />
              ) : (
                <HospitalHomepage user={user} />
              )
            ) : (
              <LandingPage />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup/patient" element={<PatientSignUpForm />} />
        <Route path="/signup/provider" element={<ProviderSignUpForm />} />
        <Route path="/login/patient" element={<PatientLoginForm />} />
        <Route path="/login/provider" element={<ProviderLoginForm />} />
        <Route
          path="/patient-homepage"
          element={
            <ProtectedRoute allowedRole="patient">
              <PatientHomepage user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital-homepage"
          element={
            <ProtectedRoute allowedRole="hospital">
              <HospitalHomepage user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/medical-records" element={<MedicalRecords />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/book-appointment" element={<AppointmentForm />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
