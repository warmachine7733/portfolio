import React from "react";
import { personalInfo, socialLinks } from "../../../data/portfolio.data";
import "./Hero.css";

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{personalInfo.name}</span>
          </h1>
          <p className="hero-subtitle">{personalInfo.title}</p>
          <p className="hero-description">{personalInfo.bio}</p>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-secondary"
            >
              Get In Touch
            </a>
            <a
              href="/Prateek-Jena-Resume.pdf"
              download="Prateek-Jena-Resume.pdf"
              className="btn btn-resume"
            >
              Download Resume
            </a>
          </div>

          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={social.name}
              >
                <span>{social.name}</span>
                <span className="social-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="gradient-circle"></div>
          <div className="floating-card card-1">
            <span className="badge">React</span>
          </div>
          <div className="floating-card card-2">
            <span className="badge">TypeScript</span>
          </div>
          <div className="floating-card card-3">
            <span className="badge">Node.js</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};
