import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import "./Project.css";

const ProjectList = ({ name, des, projectlink, techStackUsed }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };


  
  const colors = [
    "#1F77B4",
    "#FF7F0E",
    "#2CA02C",
    "#D62728",
    "#9467BD",
    "#8C564B",
  ];

  return (
    <div
      className={show ? "project-list-opened project-list " : "project-list"}
      onClick={handleClick}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="title-and-collapse-option">
        <h5>{name}</h5>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>
      <div className="description">
        {show ? <p>{des}</p> : <p>{des.substring(0, 50)}</p>}
      </div>

      <div className="row">
        {techStackUsed &&
          techStackUsed.map((tech, index) => (
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="tech-used-in-project">
                <p style={{ backgroundColor: colors[index] }}>
                  {tech.techStack}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="live-demo-button">
        <a target="_" href={projectlink}>
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectList;
