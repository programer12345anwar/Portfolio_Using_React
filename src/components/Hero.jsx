 
import DevImg from '../assets/asset 0.png';

const Hero = () => {
  return (
    <section id="home" className="bg-white dark:bg-gray-900 py-20 px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col justify-center p-16 mt-4 text-2xl">
          <a href="https://www.linkedin.com/in/md-anwar-alam-45b4b1240/" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/programer12345anwar" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4"><i className="fab fa-github"></i></a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="text-left">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Hello, I am <br />
            <span className="text-purple-600 dark:text-purple-400">Md Anwar Alam</span>
          </h1>
          <h2 className="text-2xl font-semibold mt-2 text-gray-800 dark:text-gray-300">Java Full Stack Developer</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400"> I have a passion for coding and love to create innovative solutions. I have a strong foundation in Java, Spring Boot, and MySQL.</p>
          <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600">
            Contact Me
          </button>
        </div>
        <img src={DevImg} alt="Developer Illustration" className="w-1/2 " />
      </div>
    </section>
  );
};

export default Hero;

