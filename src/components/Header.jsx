import PropTypes from "prop-types"; // Import PropTypes
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa"; // Import FaTimes
import { useState } from "react";
import "@fontsource/poppins/700.css";

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white z-20 dark:bg-gray-900 shadow-md py-4 px-6 md:px-[10rem] fixed w-full">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <img
          src="./src/assets/logo.png"
          alt="logo"
          width={"50px"}
          height={"50px"}
        />

        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center md:space-x-8 font-bold font-lg absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-900 shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 font-bold font-lg">
            <li>
              <a
                href="#home"
                className="block text-gray-700 dark:text-gray-300 py-2 px-4 md:py-0"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-gray-700 dark:text-gray-300 py-2 px-4 md:py-0"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block text-gray-700 dark:text-gray-300 py-2 px-4 md:py-0"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="block text-gray-700 dark:text-gray-300 py-2 px-4 md:py-0"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-gray-700 dark:text-gray-300 py-2 px-4 md:py-0"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Dark Mode Toggle (Inside Mobile Menu for Better Layout) */}
          <div className="flex justify-end md:hidden mt-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-2xl focus:outline-none transition duration-500 ease-in-out"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-500" />
              )}
            </button>
          </div>
        </nav>

        {/* Dark Mode Toggle (Always Visible in Desktop View) */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden md:block text-2xl focus:outline-none transition duration-500 ease-in-out"
        >
          {darkMode ? (
            <FaSun className="text-yellow-500 " />
          ) : (
            <FaMoon className="text-gray-500" />
          )}
        </button>
      </div>
    </header>
  );
};

// Add PropTypes validation
Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Header;

