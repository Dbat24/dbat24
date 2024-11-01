import React from "react";
import "./About.css";
import profilepix from "../Image/softwareEngineer.jpg"


const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
			<div className="about-image">
				<img src={profilepix} alt="profile-picture"/>
			</div>
		</div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
			<div className="about-details">
			<div className="about-title">
				<h5>About Me</h5>
				<span className="line"></span>
			</div>
				<p>
As a Full-Stack Software Engineer and Web Developer, I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js. Skilled in PostgreSQL, EJS, Firebase, and Tailwind CSS, I bring expertise in building responsive user interfaces, developing RESTful APIs, and implementing back-end solutions. With experience in cloud deployment, Git version control, and database management, I focus on scalable, clean code for high-performance applications.
				</p>
			</div>
		</div>
      </div>
    </div>
  );
};

export default About;
