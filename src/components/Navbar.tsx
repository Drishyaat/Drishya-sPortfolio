// Navbar.js
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-6 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <div className="hidden md:flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-teal-300" : "hover:text-blue-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive ? "text-teal-300" : "hover:text-blue-400"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? "text-teal-300" : "hover:text-blue-400"
          }
        >
          Resume
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-gray-900 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        style={{ zIndex: 50 }} // Ensure it's on top of other elements
      >
        <ul className="flex flex-col items-center space-y-4 p-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-teal-300" : "hover:text-blue-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ? "text-teal-300" : "hover:text-blue-400"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? "text-teal-300" : "hover:text-blue-400"
              }
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
