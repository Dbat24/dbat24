import React from "react";
import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FcBusiness } from "react-icons/fc";

const Experience = () => {
  const data = [
    {
      companyname: "Dbat24",
      position: "MERN-Stack Developer",
      des: "Blog App: I built a feature-rich blogging platform that empowers users to create, edit, and share blog posts. Using React for a responsive user interface, I integrated Node.js, Express, and MongoDB to manage user authentication, content storage, and seamless content delivery. This project allowed me to enhance my skills in managing complex data structures and creating a user-friendly experience.",
      year: "2021-2022",

      techskills: [
        { techname: "Node JS" },
        { techname: "Express JS" },
        { techname: "React JS" },
        { techname: "MangoDB" },
      ],
    },
    {
      companyname: "Dbat24",
      position: "Frontend Developer",
      des: "As a Next.js Developer, I developed responsive, high-performance web applications with a focus on server-side rendering and optimized client experiences. I collaborated with cross-functional teams to deliver scalable, SEO-friendly solutions, utilizing React.js and Next.js features like dynamic routing and API integration. Proficient in Git, Tailwind CSS, and cloud deployment.",
      year: "2021-2022",

      techskills: [
        { techname: "Next JS" },
        { techname: "React JS" },
        { techname: "TAILWIND CSS" },
        { techname: "JAVASCRIPT" },
      ],
    },
    {
      companyname: "Mirrabelle",
      position: "Full Stack Developer",
      des: "Image Gallery: I designed a user-friendly image storage solution that allows users to upload and organize their photos for future use. Utilizing React for the frontend, I integrated Firebase to provide backend services, including real-time data storage, image hosting, and user authentication, ensuring a seamless experience for users.",
      year: "2022",

      techskills: [
        { techname: "React" },
        { techname: "FireStore" },
        { techname: "Fire Auth" },
        { techname: "Firebase hosting" },
      ],
    },
    {
      companyname: "Batech",
      position: "Full-Stack Developer",
      des: "Secret App: I engineered a secure anonymous secret-sharing platform using Ejs for a dynamic user interface, along with Node.js, Express, and MongoDB for robust backend functionality and data management. This application prioritizes user privacy and security, providing a safe space for individuals to share their secrets.",

      year: "2024-till date",

      techskills: [
        { techname: "Ejs" },
        { techname: "Node" },
        { techname: "Express" },
        { techname: "MongoDB" },
      ],
    },
    {
      companyname: "Zyeebis Place",
      position: "Full Stack Developer",
      des: "World Capital Quiz: I developed an engaging interactive quiz application that challenges users to test their knowledge of world capitals. This project utilized EJS for dynamic content rendering and was built on a foundation of Node.js, Express, and Postgres, enabling efficient data management and providing users with immediate feedback on their quiz performance.",
      year: "2021-2022",

      techskills: [
        { techname: "EJS" },
        { techname: "Express JS" },
        { techname: "React JS" },
        { techname: "Postgres" },
      ],
    },
    {
      companyname: "Dbat24",
      position: "Full Stack Developer",
      des: "Travel Tracker: I created a comprehensive travel log application that enables users to record and track countries they have visited. This project utilized EJS for dynamic templating and rendered content on the server-side, while Express, Node.js, and Postgres were employed to handle backend processes and maintain an efficient database for user records.",
      year: "2023",

      techskills: [
        { techname: "Ejs" },
        { techname: "Node" },
        { techname: "Express" },
        { techname: "MangoDB" },
      ],
    },
  ];

  const colors = [
    " #282828",
    " #282828",
    " #282828",
    " #282828",
    " #282828",
    " #282828",
    // " #615F5F",
    // "#1F77B4",  
    // "#FF7F0E",
    // "#2CA02C",
    // "#D62728",
    // "#9467BD",
    // "#8C564B",
  ];
  return (
    <div className="container exp-section" id="exp">
      <div className="section-title">
        <h5>Experience</h5>
        <span className="line"></span>
      </div>
      <div className="timeline-section">
        <VerticalTimeline lineColor="#4caf50">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element-work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #4caf50",
              }}
              date={item.year}
              dateClassName= "dates"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<FcBusiness size={30} />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tech, index) => (
                  <div
                    className="col-xl-5 col-lg-5 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tech.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
