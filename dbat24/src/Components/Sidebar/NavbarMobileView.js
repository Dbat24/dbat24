import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
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
import Switch from "react-switch";

const NavbarMobileView = ({ theme, changeTheme }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>{<GiHamburgerMenu size={25} onClick={handleClick} />}</p>
      </div>

      {open ? (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item-mobileview">
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

            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
              <Switch onChange={changeTheme} checked={theme === "light"} />
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobileView;
