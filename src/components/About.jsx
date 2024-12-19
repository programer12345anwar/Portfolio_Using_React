import AboutImg from "../assets/asset 1.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 py-10 px-6 md:py-20 md:px-20 flex flex-col-reverse md:flex-row items-center"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-6 md:mt-0">
        <img
          src={AboutImg}
          alt="Developer Illustration"
          className="w-3/4 md:w-full"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-6 dark:text-white text-purple-500">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto md:mx-0 text-gray-600 dark:text-gray-300 mb-6 text-justify px-4 md:px-0">
          Aspiring Java Developer with a foundation in OOP, Java, and web
          development, skilled in Java, C, JavaScript, HTML, CSS, and React,
          with tools like Git, VS Code, and Eclipse. Currently building
          expertise through projects like a Student Management System and
          e-commerce shopping cart using Java, Spring Boot, and MySQL. Dedicated
          to clean code, problem-solving, and continuous learning, I thrive in
          collaborative environments and am excited to contribute to impactful
          projects. Let’s connect!
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            <a
              href="https://drive.google.com/file/d/1JslHosd4xQUk2XlR4tvlIB3oBdHVeZFB/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
