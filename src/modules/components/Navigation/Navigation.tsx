import React, { useState, useEffect } from "react";
import "./Navigation.css";

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "blogs", label: "Articles" },
    { id: "resume", label: "Resume" },
  ];

  return (
    <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#" onClick={() => scrollToSection("about")}>
            PJ
          </a>
        </div>

        <button
          className={`mobile-toggle ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://medium.com/@prateekjena7733"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Blog
            </a>
          </li>
        </ul>

        <a href="#contact" className="nav-cta">
          Get In Touch
        </a>
      </div>
    </nav>
  );
};
