import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./Resume.css";

export const Resume: React.FC = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const layoutPlugin = defaultLayoutPlugin();

  return (
    <section id="resume" className="resume">
      <div className="container resume-content">
        <div className="resume-copy">
          <p className="resume-eyebrow">Keep the conversation going</p>
          <h2 className="resume-title">A closer look at my work.</h2>
          <p className="resume-description">
            Download my resume for a concise overview of my experience,
            technical strengths, and the products I have helped build.
          </p>
        </div>
        <div className="resume-actions">
          <button
            type="button"
            className="resume-view"
            onClick={() => setIsViewerOpen((isOpen) => !isOpen)}
          >
            {isViewerOpen ? "Close Resume" : "View Resume"}
          </button>
          <a
            href="/Prateek-Jena-Resume.pdf"
            download="Prateek-Jena-Resume.pdf"
            className="resume-download"
          >
            Download Resume
          </a>
        </div>
      </div>
      {isViewerOpen && (
        <div
          className="resume-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
          onClick={() => setIsViewerOpen(false)}
        >
          <div className="resume-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="resume-modal-close"
              aria-label="Close resume preview"
              onClick={() => setIsViewerOpen(false)}
            >
              Close
            </button>
            <div className="resume-viewer">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer
                  fileUrl="/Prateek-Jena-Resume.pdf"
                  plugins={[layoutPlugin]}
                />
              </Worker>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
