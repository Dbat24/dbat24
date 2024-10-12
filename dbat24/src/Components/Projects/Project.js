import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "Todo-app",
      des: "The Video Player App, developed using JavaScript, offers smooth video playback with essential controls like play, pause, fast forward, and volume adjustment. It features a progress bar for easy navigation and supports full-screen mode. Designed with a responsive interface, the app ensures consistent performance on both desktop and mobile devices.",
      projectlink: "https://todo-app-6sdi.onrender.com",
      techStackUsed: [
        { techStack: "Node js" },
        { techStack: " Ejs" },
        { techStack: "Express js" },
      ],
    },
    {
      name: "Image Gallery App",
      des: "The Video Player App, developed using JavaScript, offers smooth video playback with essential controls like play, pause, fast forward, and volume adjustment. It features a progress bar for easy navigation and supports full-screen mode. Designed with a responsive interface, the app ensures consistent performance on both desktop and mobile devices.",
      projectlink: "https://batstock-8a9fc.web.app/",
      techStackUsed: [
        { techStack: "Node js" },
        { techStack: "react js" },
        { techStack: "Express js" },
      ],
    },
    {
      name: "Blog App",
      des: "The Video Player App, developed using JavaScript, offers smooth video playback with essential controls like play, pause, fast forward, and volume adjustment. It features a progress bar for easy navigation and supports full-screen mode. Designed with a responsive interface, the app ensures consistent performance on both desktop and mobile devices.",
      projectlink: "https://blog-app-frontend-eosin.vercel.app",
      techStackUsed: [
        { techStack: "Node js" },
        { techStack: "react js" },
        { techStack: "Express js" },
      ],
    },
    {
      name: "Anonymous SecretKeeper-App",
      des: "The Video Player App, developed using JavaScript, offers smooth video playback with essential controls like play, pause, fast forward, and volume adjustment. It features a progress bar for easy navigation and supports full-screen mode. Designed with a responsive interface, the app ensures consistent performance on both desktop and mobile devices.",
      projectlink: "https://secrets-app-3vaq.onrender.com",
      techStackUsed: [
        { techStack: "Node js" },
        { techStack: "react js" },
        { techStack: "Express js" },
      ],
    },
    {
      name: "Mern Stack Streaming Video",
      des: "The Video Player App, developed using JavaScript, offers smooth video playback with essential controls like play, pause, fast forward, and volume adjustment. It features a progress bar for easy navigation and supports full-screen mode. Designed with a responsive interface, the app ensures consistent performance on both desktop and mobile devices.",
      projectlink: "https://google.com",
      techStackUsed: [
        { techStack: "Node js" },
        { techStack: "react js" },
        { techStack: "Express js" },
      ],
    },
    {
      name: "Mern Stack Streaming Video",
      des: "The Video Player App, developed using JavaScript, offers smooth video playback with essential controls like play, pause, fast forward, and volume adjustment. It features a progress bar for easy navigation and supports full-screen mode. Designed with a responsive interface, the app ensures consistent performance on both desktop and mobile devices.",
      projectlink: "https://google.com",
      techStackUsed: [
        { techStack: "Node js" },
        { techStack: "react js" },
        { techStack: "Express js" },
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
