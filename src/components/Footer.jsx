const Footer = () => {
  return (
    <footer className="bg-purple-600 py-6 w-full">
      <div className="container mx-auto text-center text-white px-4">
        <p className="text-sm md:text-base">
          Created by Md Anwar Alam | All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/md-anwar-alam-45b4b1240/"
            className="hover:text-gray-300 text-lg"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/programer12345anwar"
            className="hover:text-gray-300 text-lg"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="#"
            className="hover:text-gray-300 text-lg"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="hover:text-gray-300 text-lg"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

