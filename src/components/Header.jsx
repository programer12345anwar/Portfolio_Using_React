 
import PropTypes from 'prop-types'; // Import PropTypes
import { FaSun, FaMoon } from 'react-icons/fa';
import "@fontsource/poppins/700.css";
 

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white z-20 dark:bg-gray-900 shadow-md py-4 px-[10rem] fixed">
      <div className="container flex items-center">
         <img src="./src/assets/logo.png" alt="logo " width={"50px"} height={"50px"} />
        
        <nav className='px-6 ml-[38rem]'>
          <ul className="flex space-x-8 font-bold font-lg">
            <li><a href="#home" className="text-gray-700 dark:text-gray-300">Home</a></li>
            <li><a href="#about" className="text-gray-700 dark:text-gray-300">About</a></li>
            <li><a href="#skills" className="text-gray-700 dark:text-gray-300">Skills</a></li>
            <li><a href="#portfolio" className="text-gray-700 dark:text-gray-300">Projects</a></li>
            <li><a href="#contact" className="text-gray-700 dark:text-gray-300">Contact</a></li>
          </ul>
        </nav>
        
        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl focus:outline-none transition duration-500 ease-in-out"
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
        </button>
      </div>
    </header>
  );
};

// Add PropTypes validation
Header.propTypes = {
  darkMode: PropTypes.bool.isRequired, // darkMode must be a boolean and is required
  setDarkMode: PropTypes.func.isRequired, // setDarkMode must be a function and is required
};

export default Header;
