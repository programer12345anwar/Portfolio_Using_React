import AboutImg from "../assets/asset 1.png";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20 flex px-20">
      <img src={AboutImg} alt="Developer Illustration" className="w-1/2" />
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6  dark:text-white pb-12 text-purple-500">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-6 text-justify">
          Aspiring Java Developer  with a foundation in OOP, Java, and web
          development, skilled in Java, C, JavaScript, HTML, CSS, and React,
          with tools like Git, VS Code, and Eclipse. Currently building
          expertise through projects like a Student Management System and
          e-commerce shopping cart using Java, Spring Boot, and MySQL. Dedicated
          to clean code, problem-solving, and continuous learning, I thrive in
          collaborative environments and am excited to contribute to impactful
          projects. Let’s connect!
        </p>
        <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 flex ">
          <a href="https://drive.google.com/file/d/1JslHosd4xQUk2XlR4tvlIB3oBdHVeZFB/view?usp=drivesdk">
            Download CV
          </a>
        </button>
      </div>
    </section>
  );
};

export default About;
