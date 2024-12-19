import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";
import Project from "./components/Projects.jsx";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Project />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
