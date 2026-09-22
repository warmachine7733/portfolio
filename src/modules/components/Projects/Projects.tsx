import React, { useState } from "react";
import { aiEngineeringExperience, personalInfo, projects } from "../../../data/portfolio.data";
import "./Projects.css";

export const Projects: React.FC = () => {
  const [activeGallery, setActiveGallery] = useState<{
    screenshots: { src: string; alt: string; label: string }[];
    index: number;
  } | null>(null);
  const activeScreenshot = activeGallery?.screenshots[activeGallery.index];

  const changeScreenshot = (direction: number) => {
    setActiveGallery((gallery) => {
      if (!gallery) return null;
      const index = (gallery.index + direction + gallery.screenshots.length) % gallery.screenshots.length;
      return { ...gallery, index };
    });
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A few things I’ve built</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className={`project-card${project.featured ? " project-card-featured" : ""}`}>
              <div className="project-info">
                <div className="project-summary">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.longDescription}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  {project.links && (
                    <div className="project-links">
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link live">View Live</a>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link github">GitHub</a>
                    </div>
                  )}
                  {(project.screenshots || project.demoRequest) && (
                    <div className="project-links">
                      {project.screenshots && (
                        <button
                          type="button"
                          className="project-link product-screens"
                          onClick={() => setActiveGallery({ screenshots: project.screenshots!, index: 0 })}
                        >
                          View product screens ({project.screenshots.length})
                        </button>
                      )}
                      {project.demoRequest && (
                        <a href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(`Demo request: ${project.title}`)}`} className="project-link demo-request">Ask for a demo</a>
                      )}
                    </div>
                  )}
                </div>

                <ul className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}><span className="checkmark">✓</span> {highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        {activeScreenshot && activeGallery && (
          <div className="screenshot-lightbox" role="dialog" aria-modal="true" aria-label={activeScreenshot.label} onClick={() => setActiveGallery(null)}>
            <div className="screenshot-lightbox-content" onClick={(event) => event.stopPropagation()}>
              <button type="button" className="screenshot-lightbox-close" onClick={() => setActiveGallery(null)} aria-label="Close screenshot">×</button>
              <img src={activeScreenshot.src} alt={activeScreenshot.alt} />
              <button type="button" className="screenshot-lightbox-nav screenshot-lightbox-prev" onClick={() => changeScreenshot(-1)} aria-label="Previous screenshot">‹</button>
              <button type="button" className="screenshot-lightbox-nav screenshot-lightbox-next" onClick={() => changeScreenshot(1)} aria-label="Next screenshot">›</button>
              <p className="screenshot-lightbox-label">{activeScreenshot.label} · {activeGallery.index + 1} / {activeGallery.screenshots.length}</p>
            </div>
          </div>
        )}
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
