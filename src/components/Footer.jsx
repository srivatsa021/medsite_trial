import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#174e6c] text-white pt-12 pb-6 px-6 md:px-12 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <div className="flex items-center mb-4">
            <img
            src="https://res.cloudinary.com/dirkoc1m3/image/upload/v1747071611/MeditripGlobal_Color_vs42jq.svg" // <-- Replace with your actual SVG path
            alt="MediConnect Logo"
            className="w-40 h-auto mr-3"
            />
          </div>
          <p className="text-sm text-gray-200">
            Bridging patients, hospitals, and healthcare professionals for a
            smarter, connected medical experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/doctors" className="hover:text-white transition">
                Doctors
              </Link>
            </li>
            <li>
              <Link to="/hospitals" className="hover:text-white transition">
                Hospitals
              </Link>
            </li>
            <li>
              <Link to="/chatbot" className="hover:text-white transition">
                AI Help
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-white transition">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-bold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#174e6c] shadow-md hover:bg-[#123954] hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#174e6c] shadow-md hover:bg-[#123954] hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#174e6c] shadow-md hover:bg-[#123954] hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#174e6c] shadow-md hover:bg-[#123954] hover:text-white transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} MediConnect. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
