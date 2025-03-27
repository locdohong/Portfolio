import React, { useState, useEffect, useRef } from "react";
import Project1 from "../images/project_1.png";
import Project2 from "../images/project_2.png";
import Project3 from "../images/project_3.png";
import Project6 from "../images/project_6.png";
import Project7 from "../images/project_7.png";
import Project8 from "../images/project_8.png";

import ProjectModal from "./ProjectModal";

const projects = [
  {
    name: "Shoes E-commerce Website",
    image: Project1,
    link: "https://github.com/thinhbosua123/Shoes-Store",
    members: 4,
    desc: "Developed a social networking web application from MVC pattern for products and users, purchases, add products to cart and checkout. In addition separate admin features",
    technologies:
      "Springboot, MVC, Java, MySQL, HTML, CSS, Bootstrap",
    date: "May 2024 - July 2024",
  },
  {
    name: "App Hôm nay ăn gì",
    image: Project6,
    link: "https://github.com/thinhbosua123/App-Recommend-food",
    members: 2,
    desc: "What we eat today is a food management application, helping users have a healthy, complete meal.",
    technologies: "C#, WPF, XAML, MSSQL",
    date: "April 2024 - June 2024",
  },
  {
    name: "App-Web Deface Monitoring",
    image: Project7,
    link: "https://github.com/thinhbosua123/APP-WEB-DEFACE-MONITORING",
    members: 4,
    desc: "The application helps users to see warnings that hackers are trying to attack the website.",
    technologies:
      "Python, HTML, CSS",
    date: "April 2024 - June 2024",
  },
  {
    name: "Desktop App Caro games online",
    image: Project8,
    link: "https://github.com/thinhbosua123/Caro-game-online",
    members: 2,
    desc: "Gain a better understanding of how to design systems, manage client-server connections, and process data in a network environment.",
    technologies:
      "Java Swing, MySQL, Client-Server, TCP",
    date: "September 2024 - October",
    width: "100%",
    headerSize: "30px",
    descSize: "16px",
  },
  {
    name: "Mobile App Fast-food",
    image: Project2,
    link: "https://github.com/thinhbosua123/App-Fast-food-Mobile",
    members: 3,
    desc: "Developed a fast-food sales system with a friendly and easy-to-use interface, food management, food search, order status management, food tracking and rating.",
    technologies: "Flutter, Dart, C++, Firebase",
    date: "September 2024 - October 2024",
  },
  {
    name: "Mobile App Fast Food Ordering System",
    image: Project3,
    link: "https://github.com/NHViet03/Mobile-App_Social_Network",
    members: 1,
    desc: "Developed a mobile social network app featuring CRUD operations for posts and users, real-time notifications, messaging, and active status indicators.",
    technologies:
      "Flutter, Dart, C++, CMake, Firebase",
    date: "November 2024 - December 2024",
    maxImageHeight: "350px",
  },
 
];

const Projects = () => {
  const [animationDelayMax, setAnimationDelayMax] = useState(3);
  const [isVisible, setIsVisible] = useState(false);

  const [projectModal, setProjectModal] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: "0.1",
      }
    );
    observer.observe(ref.current);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const projectsList = document.querySelectorAll(".projects_list_item");
      projectsList.forEach((project, index) => {
        project.classList.add("fadeInUp");
      });
    }
  }, [isVisible]);

  useEffect(() => {
    const animationEffect = () => {
      if (window.innerWidth <= 1024) {
        setAnimationDelayMax(2);
      } else if (window.innerWidth <= 768) {
        setAnimationDelayMax(1);
      } else {
        setAnimationDelayMax(3);
      }
    };

    window.addEventListener("resize", animationEffect);

    return () => {
      window.removeEventListener("resize", animationEffect);
    };
  }, []);

  const setProject = (project) => {
    setIsModalOpen(true);
    setProjectModal(project);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setProjectModal({});
  };

  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <div className="container">
        <div ref={ref} className="row projects_list">
          {projects.map((project, index) => (
            <div className="col">
              <div
                className="projects_list_item"
                style={{
                  animationDelay: `${
                    ((index % animationDelayMax) * 200 + 300) / 1000
                  }s`,
                }}
                onClick={() => setProject(project)}
              >
                <div className="projects_list_item_img">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project_list_item_info">
                  <span>Members: {project.members}</span>
                  <span>{project.date}</span>
                </div>
                <h5> {project.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <ProjectModal project={projectModal} handleClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Projects;
