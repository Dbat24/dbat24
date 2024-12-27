import React, { useState, createContext } from "react";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import About from "./Components/About/About.js";
import TechStack from "./Components/TechStack/TechStack.js";
import Project from "./Components/Projects/Project.js";
import Experience from "./Components/Experience/Experience.js";
import Cert from "./Components/Certification/Cert.js";
import Testimonial from "./Components/Testimonial/Testimonial.js";
import Contact from "./Components/Contact/Contact.js";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView.js";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div id={theme}>
        <NavbarMobileView changeTheme={changeTheme} theme={theme}/>
        <Sidebar changeTheme={changeTheme} theme={theme} />
        <About />
        <Experience />
        <TechStack />
        <Cert />
        <Project />
        <Testimonial />
        <Contact />
      </div>

      <ScrollToTop
        smooth={true}
        top="20"
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#615F5F" }}
      />
    </ThemeContext.Provider>
  );
};

export default App;
