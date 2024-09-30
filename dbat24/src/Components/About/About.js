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
				As a Full-Stack Software Developer, I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) while also being proficient in additional technologies such as PostgreSQL, EJS, Firebase, and Tailwind CSS. I have hands-on experience building and deploying web applications, creating responsive user interfaces with React.js, and developing back-end logic using Node.js and Express.js. My skills extend to working with both MongoDB and PostgreSQL for database management, and integrating RESTful APIs to ensure smooth client-server interactions.

I focus on writing clean, efficient code and continuously improving my knowledge of best practices. Additionally, I am familiar with version control using Git and have experience deploying applications on cloud platforms like Firebase. I am adept at crafting dynamic views with EJS and leveraging Tailwind CSS to build modern, responsive designs.
				</p>
			</div>
		</div>
      </div>
    </div>
  );
};

export default About;
