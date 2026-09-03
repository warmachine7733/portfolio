import React from "react";
import { personalInfo, skills } from "../../../data/portfolio.data";
import "./About.css";

export const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">{personalInfo.description}</p>

            <div className="info-grid">
              <div className="info-item">
                <span className="label">Experience</span>
                <span className="value">{personalInfo.yearsOfExperience}</span>
              </div>
              <div className="info-item">
                <span className="label">Location</span>
                <span className="value">{personalInfo.location}</span>
              </div>
              <div className="info-item">
                <span className="label">Email</span>
                <span className="value">
                  <a href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>
                </span>
              </div>
              <div className="info-item">
                <span className="label">Phone</span>
                <span className="value">
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </span>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Database & Tools</h3>
              <div className="skill-tags">
                {[...skills.database, ...skills.devtools].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
