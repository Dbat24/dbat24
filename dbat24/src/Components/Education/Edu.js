import React from "react";
import "./Edu.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

const Edu = () => {
  const data = [
    {
      name: "Self-Taught Full-Stack Web Developer",
      year: "2023",
      des: "Personally trained as a full-stack developer through dedicated study of online resources, including video tutorials and technical documentation. Developed expertise in front-end technologies like HTML, CSS, and JavaScript, as well as back-end tools such as Node.js, Express, and MongoDB/Postgres. Built real-world projects independently, applying a deep understanding of both client and server-side development.",
    },
    {
      name: "T-Max Web Development Bootcamp",
      degree: "Certificate in Web Development",
      year: "2023",
      des: "Completed an intensive web development bootcamp focused on full-stack development, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Gained hands-on experience building dynamic web applications, collaborating in teams, and mastering modern frameworks and development best practices.",
    },
    {
      name: "GIZ / Weevil",
      degree: "Certificate in web development",
      year: "2022",
      des: "Successfully completed an immersive web development bootcamp that emphasized practical coding experience in front-end technologies like HTML, CSS, JavaScript, and frameworks such as React. Additionally, developed a solid foundation in back-end development using Node.js, Express, and databases to deliver fully functional web applications.",
    },
    {
      name: "EntryLevel UI/UX Design",
      degree: "Certificate in UI/UX Design",
      year: "2021",
      des: "Completed specialized training in UI/UX design, focusing on creating intuitive and user-centered digital experiences. Gained skills in wireframing, prototyping, and user research, while mastering design tool like Figma. Developed a strong understanding of user flows, information architecture, and visual design principles to create responsive and engaging interfaces.",
    },
  ];

  const colors = [
    "#1F77B4",
    "#FF7F0E",
    "#2CA02C",
    "#D62728",
    "#9467BD",
    "#8C564B",
  ];

  return (
    <div>
      <div className="container edu-section" id="edu">
        <div className="section-title">
          <h5>Certification</h5>
          <span className="line"></span>
        </div>
        <div className="timeline-section">
          <VerticalTimeline lineColor="#8C564B">
            {data.map((item, index) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: colors[index], color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={item.year}
                dateClassName="dates"
                iconStyle={{ background: colors[index], color: "#fff" }}
                icon={<FaGraduationCap size={30} />}
              >
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.degree}
                </h4>

                <p>{item.des}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Edu;
