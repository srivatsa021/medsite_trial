import React from "react";
import { createRoot } from "react-dom/client"; // Correct import
import { BrowserRouter as Router } from "react-router-dom"; // Ensure single Router
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")); // Correct method
root.render(
  <Router>
    <App />
  </Router>
);
