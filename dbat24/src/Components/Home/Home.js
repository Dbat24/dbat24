import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import DevCv from "../CV/FULL_STACK_MERN_STACK_WEB_DEVELOPER_RESUME.pdf";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-scroll";

const Home = ({ theme, changeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p>
            <FaMoon size={25} />
          </p>
        ) : (
          <p className="sunny-icon">
            <IoIosSunny size={25} />
          </p>
        )}
      </div>

      <div className="container home-content">
        <Slide triggerOnce direction="right">
          <h1>I'm Abdulhafis Bamidele</h1>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "JAVASCRIPT DEVELOPER",
                  "REACT DEVELOPER",
                  "NODE.JS DEVELOPER",
                  "FULL STACK DEVELOPER",
                  "MERN STACK DEVELOPER",
                  "TUTOR",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h3>
        </Slide>
        <div className="home-btn">
          <Slide triggerOnce direction="up">
            <div className="hire-btn">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                Hire Me
              </Link>
            </div>
            <div className="resume-btn">
              <a href={DevCv} download="FULL_STACK_MERN_STACK_WEB_DEVELOPER_RESUME.pdf">
                Get Resume
              </a>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Home;
