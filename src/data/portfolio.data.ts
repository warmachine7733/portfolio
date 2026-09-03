export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  duration: string;
  joinDate: string;
  exitDate: string;
  description: string;
  highlights: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  details: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  links: {
    live: string;
    github: string;
  };
  highlights: string[];
}

export interface Social {
  name: string;
  url: string;
}

// Work Experience
export const workExperience: WorkExperience[] = [
  {
    id: 1,
    company: "Launch by NTT Data",
    position: "Digital Engineering Lead Engineer",
    duration: "Feb 2024 - Present",
    joinDate: "19/02/2024",
    exitDate: "",
    description: "Leading digital engineering initiatives and architecting scalable solutions",
    highlights: [
      "Architecting scalable full-stack solutions",
      "Mentoring engineering teams",
      "Driving technical excellence",
    ],
  },
  {
    id: 2,
    company: "Development Bank of Singapore",
    position: "Associate",
    duration: "May 2022 - Jan 2024",
    joinDate: "25/05/2022",
    exitDate: "25/01/2024",
    description: "Developing financial technology solutions for banking sector",
    highlights: [
      "Built secure payment processing systems",
      "Optimized database queries for 10x performance",
      "Implemented microservices architecture",
    ],
  },
  {
    id: 3,
    company: "Cognizant",
    position: "Associate Projects",
    duration: "Jul 2020 - Mar 2022",
    joinDate: "14/07/2020",
    exitDate: "01/04/2022",
    description: "Developing enterprise applications for global clients",
    highlights: [
      "Full-stack web application development",
      "Client-side optimization and testing",
      "Cross-functional team collaboration",
    ],
  },
  {
    id: 4,
    company: "Sparity",
    position: "Software Developer",
    duration: "Jul 2019 - May 2020",
    joinDate: "03/07/2019",
    exitDate: "06/05/2020",
    description: "Building SaaS applications and web platforms",
    highlights: [
      "React and Redux implementation",
      "API integration and optimization",
      "Performance optimization",
    ],
  },
  {
    id: 5,
    company: "PeopleLink Unified Communications Pvt. Ltd.",
    position: "Software Developer",
    duration: "Sept 2017 - Nov 2018",
    joinDate: "04/09/2017",
    exitDate: "06/11/2018",
    description: "Communication platform development",
    highlights: [
      "WebRTC integration",
      "Real-time communication features",
      "Frontend optimization",
    ],
  },
];

// Education
export const education: Education[] = [
  {
    id: 1,
    institution: "G.C.E, Keonjhar",
    degree: "Bachelor of Engineering",
    field: "Mechanical Engineering",
    duration: "2012 - 2016",
    details: "CGPA: 7.3",
  },
  {
    id: 2,
    institution: "B.C.S.T, Bhubaneswar",
    degree: "Senior Secondary (12th)",
    field: "Science",
    duration: "2010 - 2012",
    details: "80%",
  },
  {
    id: 3,
    institution: "M.P.C High School, Betnoti",
    degree: "Secondary (10th)",
    field: "Science",
    duration: "2008 - 2010",
    details: "88%",
  },
];

// Technical Skills
export const skills = {
  frontend: ["React", "TypeScript", "Redux", "JavaScript", "CSS3", "HTML5", "Webpack", "Next.js"],
  backend: ["Node.js", "Express", "Firebase", "Microservices", "API Design"],
  database: ["MongoDB", "SQL", "Firebase Realtime DB"],
  devtools: ["Git", "Docker", "AWS", "Vercel", "Testing", "CI/CD"],
  soft: ["Problem Solving", "Team Leadership", "Architecture Design", "Performance Optimization"],
};

// Personal Projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Local API Mock",
    description: "Chrome extension for mocking API responses in development",
    longDescription:
      "A powerful Chrome DevTools extension that enables developers to intercept and mock API responses. Perfect for testing frontend applications without relying on backend services. Features include request/response editing, persistence, and easy toggle on/off.",
    technologies: ["Chrome Extension", "JavaScript", "API Mocking"],
    imageUrl: "https://portfolio-asset-files.s3.ap-northeast-1.amazonaws.com/local-api-mock.png",
    links: {
      live: "https://chromewebstore.google.com/detail/local-api-mock/cnbebghfccibfmnnmekgmgffnkjjcfij?authuser=0&hl=en",
      github: "https://github.com/warmachine7733/local-api-mock",
    },
    highlights: [
      "API response interception",
      "Request/response editing",
      "Mock data persistence",
      "Easy enable/disable toggle",
    ],
  },
  {
    id: 2,
    title: "wp-react-cli",
    description: "Fast CLI tool to scaffold React apps with Webpack",
    longDescription:
      "An npm CLI utility that streamlines React project scaffolding with Webpack. Saves time by automatically setting up all necessary configurations and dependencies.",
    technologies: ["npm", "JavaScript", "Webpack"],
    imageUrl: "https://portfolio-asset-files.s3.ap-northeast-1.amazonaws.com/wp-react-cli.png",
    links: {
      live: "https://www.npmjs.com/package/wp-react-cli",
      github: "https://github.com/warmachine7733/wp-react-cli",
    },
    highlights: [
      "Automated project setup",
      "Webpack pre-configuration",
      "Fast scaffolding",
      "Community maintained",
    ],
  },
  {
    id: 3,
    title: "Package Version Tracker",
    description: "Dashboard tool for tracking package versions across applications",
    longDescription:
      "A comprehensive dashboard application that tracks package versions across multiple projects and detects updates automatically. Built with modern React practices and Redux for state management.",
    technologies: ["React", "JavaScript", "npm", "Redux"],
    imageUrl: "https://portfolio-asset-files.s3.ap-northeast-1.amazonaws.com/package-tracker-app.png",
    links: {
      live: "https://pkg-json-trails.vercel.app",
      github: "https://github.com/warmachine7733/pkg-json-trails",
    },
    highlights: [
      "Real-time package update detection",
      "Multi-project support",
      "Dependency analysis",
      "Export reports",
    ],
  },
];

// Social Links
export const socialLinks: Social[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prateek-jena-5205032b1",
  },
  {
    name: "Medium",
    url: "https://medium.com/@prateekjena7733",
  },
  {
    name: "GitHub",
    url: "https://github.com/warmachine7733",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/8932033/warmachine",
  },
];

// Personal Info
export const personalInfo = {
  name: "Prateek Jena",
  title: "Full-Stack Software Engineer",
  bio: "Building scalable, efficient web applications with modern technologies. Passionate about clean code, performance optimization, and mentoring developers.",
  location: "India",
  email: "prateikjena@outlook.com",
  phone: "+91-8618248104",
  dob: "28 March 1995",
  yearsOfExperience: "8+",
  description: `Full-stack software developer with 8+ years of experience specializing in web application development. 
Expert in React, Redux, Node.js, and Firebase, with domain experience in finance, telecom, and HR systems. 
Focused on building efficient, secure, and maintainable software across frontend and backend technologies.`,
};

// Additional Info
export const additionalInfo = {
  currentYear: new Date().getFullYear(),
  techStack: ["React", "Redux", "Node.js", "MongoDB", "Firebase"],
};
