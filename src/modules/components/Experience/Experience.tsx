import React, { useState } from "react";
import { workExperience, education } from "../../../data/portfolio.data";
import "./Experience.css";

type TabType = "work" | "education";

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("work");

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>

        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "work" ? "active" : ""}`}
            onClick={() => setActiveTab("work")}
          >
            <span className="tab-icon">💼</span> Work Experience
          </button>
          <button
            className={`tab-button ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            <span className="tab-icon">🎓</span> Education
          </button>
        </div>

        <div className="timeline-container">
          {activeTab === "work" && (
            <div className="timeline">
              {workExperience.map((item, index) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                    {index !== workExperience.length - 1 && (
                      <div className="marker-line"></div>
                    )}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">{item.position}</h3>
                      <span className="timeline-date">{item.duration}</span>
                    </div>
                    <p className="timeline-company">{item.company}</p>
                    <p className="timeline-description">{item.description}</p>
                    <ul className="timeline-highlights">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="timeline">
              {education.map((item, index) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                    {index !== education.length - 1 && (
                      <div className="marker-line"></div>
                    )}
                  </div>
                  <div className="timeline-content education-item">
                    <div className="timeline-header">
                      <h3 className="timeline-title">{item.degree}</h3>
                      <span className="timeline-date">{item.duration}</span>
                    </div>
                    <p className="timeline-company">{item.institution}</p>
                    <p className="timeline-field">
                      <strong>{item.field}</strong>
                    </p>
                    <p className="timeline-description">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
