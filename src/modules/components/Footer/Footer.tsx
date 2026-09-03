import React from "react";
import { personalInfo, socialLinks, additionalInfo } from "../../../data/portfolio.data";
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{personalInfo.name}</h3>
          <p>{personalInfo.title}</p>
          <p className="footer-tagline">
            Building exceptional web experiences with modern technologies
          </p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </li>
            <li>
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </li>
            <li>{personalInfo.location}</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow</h4>
          <div className="footer-social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title={social.name}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {additionalInfo.currentYear} {personalInfo.name}. All rights
          reserved.
        </p>
        <p>
          Built with <span className="heart">♥</span> using React & TypeScript
        </p>
      </div>
    </footer>
  );
};
