import React from "react";

const ProjectModal = ({ project, handleClose }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("project_modal")) {
      handleClose();
    }
  };

  return (
    <div className="project_modal" onClick={handleClick}>
      <div className="project_modal_container">
        <div className="col">
          <div className="project_modal_container_img">
            <img
              src={project.image}
              alt={project.name}
              style={{
                maxHeight: project.maxImageHeight ? project.maxImageHeight : "",
              }}
            />
          </div>
        </div>
        <div className="col">
          <div className="project_modal_container_info">
            <div>
              <h5
                style={{
                  fontSize: project.headerSize ? project.headerSize : "",
                }}
              >
                {project.name}
              </h5>
              <div className="project_list_item_info">
                <span>Members: {project.members}</span>
                <span>{project.date}</span>
              </div>
              <p
                style={{
                  width: project.width ? project.width : "",
                  fontSize: project.descSize ? project.descSize : "",
                  lineHeight: project.descSize ? "unset" : "",
                }}
              >
                {project.desc}
              </p>
              <h6>Technologies Used: {project.technologies}</h6>
            </div>
            <a href={project.link} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-square-github" />
              View Project
            </a>
          </div>
        </div>
        <div className="project_modal_close" onClick={handleClose}>
          <i className="fa-solid fa-xmark" />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
