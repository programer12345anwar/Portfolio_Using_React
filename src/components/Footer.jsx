 

const Footer = () => {
  return (
    <footer className="bg-purple-600 py-6 w-[100%]">
      <div className="container mx-auto text-center text-white">
        <p>Created by Md Anwar Alam | All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/md-anwar-alam-45b4b1240/" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/programer12345anwar" className="hover:text-gray-300"><i className="fab fa-github"></i></a>
          <a href=" #" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
          <a href=" #" className="hover:text-gray-300"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
