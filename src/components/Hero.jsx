import DevImg from "../assets/asset 0.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-white dark:bg-gray-900 py-10 px-6 md:py-20 md:px-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Social Links */}
        <div className="flex flex-row md:flex-col justify-center md:p-8 text-xl gap-4 md:gap-0">
          <a
            href="https://www.linkedin.com/in/md-anwar-alam-45b4b1240/"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-400"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/programer12345anwar"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-400"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-400"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-400"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Main Content */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Hello, I am <br />
            <span className="text-purple-600 dark:text-purple-400">
              Md Anwar Alam
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold mt-2 text-gray-800 dark:text-gray-300">
            Java Full Stack Developer
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            I have a passion for coding and love to create innovative solutions.
            I have a strong foundation in Java, Spring Boot, and MySQL.
          </p>
          <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600">
            <a href="#contact">Contact Me</a>
          </button>
        </div>

        {/* Developer Illustration */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src={DevImg}
            alt="Developer Illustration"
            className="w-3/4 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
