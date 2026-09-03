import React from "react";
import { projects } from "../../../data/portfolio.data";
import "./Projects.css";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of professional projects and side ventures
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      View Live
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.longDescription}
                </p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <span className="checkmark">✓</span> {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
