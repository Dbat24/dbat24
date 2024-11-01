import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "Blog App",
      des: "This blog website is a dynamic platform built with the MERN stack (MongoDB, Express.js, React, and Node.js) to deliver an engaging, scalable blogging experience. Designed to showcase the power of full-stack development, the site enables smooth navigation, fast loading, and seamless content management. Its robust back-end, combined with an intuitive front-end, allows for easy user interaction and efficient data handling.",
      projectlink: "https://blog-app-frontend-teal-kappa.vercel.app/",
      techStackUsed: [
        { techStack: "Node js" },
        { techStack: "react js" },
        { techStack: "Express js" },
        { techStack: "MongoDB" }
      ],
    },
    {
      name: "BatDigital Website",
      des: "Dbat24 is a cutting-edge digital solutions provider, specializing in innovative strategies to elevate brands and businesses. Our sleek, responsive website, crafted with React.js, Next.js, and Tailwind CSS, offers an intuitive and seamless user experience, reflecting our commitment to high performance and modern design.",
      projectlink: "https://landing-page-next-ts.vercel.app/",
      techStackUsed: [
        { techStack: "Next.js" },
        { techStack: "React.js " },
        { techStack: "Tailwind CSS" },
      ],
    },
    {
      name: "Image Gallery App",
      des: "This Image Gallery app is built with React, Node.js, Express, and Firebase, offers a visually compelling and responsive experience for users to browse, upload, and manage images seamlessly. Leveraging Firebase's real-time database and storage capabilities, the app ensures fast, secure image hosting, while React’s dynamic interface provides smooth and engaging navigation. The backend, powered by Express and Node.js, efficiently handles user requests and data flow, creating a reliable, scalable image gallery solution.",
      projectlink: "https://batstock-8a9fc.web.app",  
      techStackUsed: [
        { techStack: "Node js" },
        { techStack: "react js" },
        { techStack: "Express js" },
        { techStack: "Firebase" },
      ],
    },
    {
      name: "Anonymous SecretKeeper-App",
      des: "An anonymous SecretKeeper app that is a secure anonymous platform built with the MERN stack (MongoDB, Express.js, React, Node.js), enabling users to share secrets confidentially. Designed with a focus on privacy, the app ensures data security while providing a smooth, responsive user experience. MongoDB efficiently manages data storage, while Node.js and Express support fast, reliable back-end operations. React powers a user-friendly interface that promotes seamless interactions. SecretKeeper showcases BatDigital’s expertise in developing innovative, full-stack applications focused on user confidentiality and performance, making it an impressive asset for prospective employers in need of secure, engaging web solutions.",
      projectlink: "https://secrets-app-3vaq.onrender.com",
      techStackUsed: [
        { techStack: "Node js" },
        { techStack: "react js" },
        { techStack: "Express js" },
        { techStack: "MongoDB" },
      ],
    },
    {
      name: "World Capital Quiz App",
      des: "This World Capital Quiz App is built with React, Node.js, Express, and PostgreSQL, is an interactive trivia platform designed to test users' knowledge of global capitals. React provides a dynamic and engaging user interface, while Node.js and Express power efficient back-end processing to ensure seamless gameplay. PostgreSQL’s robust database management allows for scalable, reliable data storage of quiz questions and user scores.",
      projectlink: "https://world-capital-quiz-app.onrender.com",
      techStackUsed: [
        { techStack: "Node js" },
        { techStack: "react js" },
        { techStack: "Express js" },
        { techStack: "Postgres" },
      ],
    },
    {
      name: "Travel Tracker App",
      des: "A Travel Tracker App that is an interactive platform that enables users to log their travel history, showcasing visited countries on a world map segmented by continent. Built with React, Node.js, Express, and PostgreSQL, the app provides an engaging, personalized experience. React powers the intuitive interface, while Node.js and Express handle backend operations, ensuring data integrity and performance. PostgreSQL supports robust data storage, allowing each user to manage their travel records seamlessly.",
      projectlink: "https://travel-tracker-app.onrender.com",
      techStackUsed: [
        { techStack: "Node js" },
        { techStack: "react js" },
        { techStack: "Express js" },
        { techStack: "Postgres" },
      ],
    },
  ];
  return (
    <div className="container project-section" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
