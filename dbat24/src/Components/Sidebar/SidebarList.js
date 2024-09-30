import React from "react";
import "./SidebarList.css";
import profilepix from "../Image/softwareEngineer.jpg";
import {
  FcAbout,
  FcContacts,
  FcHome,
  FcReading,
  FcSalesPerformance,
  FcTodoList,
  FcWorkflow,
} from "react-icons/fc";
import { MdBiotech } from "react-icons/md";
import { Link } from "react-scroll";

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebarbar-profile-pix">
            <img src={profilepix} alt="Profile-pix" />
          </div>

          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcAbout size={25} />
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="exp"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcWorkflow size={25} />
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="techStack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdBiotech size={25} color="orange" />
                Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="edu"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcReading size={25} />
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={25} />
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcSalesPerformance size={25} />
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcContacts size={25} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-icons-only">
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcAbout size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="exp"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcWorkflow size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="techStack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdBiotech size={25} color="orange" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="edu"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcReading size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcSalesPerformance size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcContacts size={25} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
