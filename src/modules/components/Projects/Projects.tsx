import React from "react";
import { aiEngineeringExperience, projects } from "../../../data/portfolio.data";
import "./Projects.css";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Developer tools built for frontend workflows, API testing and dependency tracking
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
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
          ))}
        </div>
        <section className="ai-engineering" id="ai-engineering" aria-labelledby="ai-engineering-title">
          <h2 className="section-title" id="ai-engineering-title">AI Engineering</h2>
          <p className="section-subtitle">
            Hands-on work with local LLMs and AI-assisted software development
          </p>
          <div className="projects-grid">
            {aiEngineeringExperience.map((experience) => (
              <article key={experience.id} className="project-card">
                <div className="project-info">
                  <h3 className="project-title">{experience.title}</h3>
                  <p className="project-description">{experience.description}</p>
                  <ul className="project-highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>
                        <span className="checkmark" aria-hidden="true">&#10003;</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
