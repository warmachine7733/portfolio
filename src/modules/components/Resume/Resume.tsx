import React from "react";
import "./Resume.css";

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume">
      <div className="container resume-content">
        <div>
          <p className="resume-eyebrow">Keep the conversation going</p>
          <h2 className="resume-title">A closer look at my work.</h2>
          <p className="resume-description">
            Download my resume for a concise overview of my experience,
            technical strengths, and the products I have helped build.
          </p>
        </div>
        <div className="resume-actions">
          <a
            href="/Prateek-Jena-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-view"
          >
            View Resume
          </a>
          <a
            href="/Prateek-Jena-Resume.pdf"
            download="Prateek-Jena-Resume.pdf"
            className="resume-download"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};
