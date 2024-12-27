import React, { useState } from "react";
import "./TechStack.css";

const TechStack = () => {
  const data = [
    {
      name: "Full Stack Developer",
    },
    {
      name: "MERN Stack Developer",
    },
    {
      name: "Node js",
    },
    {
      name: "React js",
    },
    {
      name: "Next.js",
    },
    {
      name: "JavaScript",
    },
    {
      name: "Ejs",
    },
    {
      name: "Express js",
    },
    {
      name: "PostgreSQL",
    },
    {
      name: "MangoDB",
    },
    {
      name: "Postman",
    },
    {
      name: "BootStrap",
    },
    {
      name: "Tailwind css",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
  ];

  const colors = [
    " #615F5F",
    " #615F5F",
    " #615F5F",
    " #615F5F",
    " #615F5F",
    " #615F5F",
    " #615F5F",
    " #615F5F",
    " #615F5F",
    " #615F5F",
    " #615F5F",
    " #615F5F",
    " #615F5F",
    " #615F5F",
    " #615F5F",
    
    
    // "#1F77B4",
    // "#FF7F0E",
    // "#2CA02C",
    // "#D62728",
    // "#9467BD",
    // "#8C564B",
    // "#E377C2",
    // "#7F7F7F",
    // "#BCBD22",
    // "#17BECF",
    // "#FFBB78",
    // "#98DF8A",
    // "#C49C94",
    // "#C5B0D5",
    // "#AEC7E8",
  ];

  const [loadMoreTechStack, setLoadMoreTechStack] = useState(6);

  const loadmore = () => {
    setLoadMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techstack-section" id="techStack">
      <div className="section-title">
        <h5>TechStack</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.slice(0, loadMoreTechStack).map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
            <div
              className={  
                index === 0
                  ? "techstack-content-marked techstack-content"
                  : "techstack-content"
              }
            >
              <span
                className="techstack-number"
                style={{ backgroundColor: colors[index] }}
              >
                {index + 1}
              </span>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      {loadMoreTechStack >= data.length ? null : (
        <span className="techstack-loadmore" onClick={loadmore}>
          Load More
        </span>
      )}
    </div>
  );
};

export default TechStack;
