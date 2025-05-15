import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ user, handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    // { to: "/browse", label: "Browse" },
    { to: "/chatbot", label: "AI Help" },
    { to: "/about", label: "About Us" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  const NavLinks = () => (
    <>
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          onClick={() => setMenuOpen(false)}
          className={`relative group text-base font-medium ${
            location.pathname === to
              ? "text-[#174e6c]"
              : "text-gray-800 hover:text-[#174e6c]"
          } transition-colors`}
        >
          {label}
          <span
            className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#174e6c] transform transition-transform duration-300 ease-in-out ${
              location.pathname === to
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100"
            }`}
          />
        </Link>
      ))}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between py-4 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <img
            src="https://res.cloudinary.com/dirkoc1m3/image/upload/v1747071611/MeditripGlobal_Color_vs42jq.svg" // <-- Replace with your actual SVG path
            alt="MediConnect Logo"
            className="w-40 h-auto mr-3"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLinks />
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-[#174e6c] text-white rounded-full shadow-md hover:bg-[#123954] transition-all"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/signup"
              className="px-4 py-2 bg-[#174e6c] text-white rounded-full shadow-md hover:bg-[#123954] transition-all"
            >
              Sign Up
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Links */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <NavLinks />
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="px-4 py-2 bg-[#174e6c] text-white rounded-full shadow-md hover:bg-[#123954] transition-all"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/signup"
              className="px-4 py-2 bg-[#174e6c] text-white rounded-full shadow-md hover:bg-[#123954] transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
