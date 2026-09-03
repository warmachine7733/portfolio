import React from "react";
import {
  Navigation,
  Hero,
  About,
  Experience,
  Projects,
  Blogs,
  Resume,
  Footer,
} from "./modules/components";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blogs />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
