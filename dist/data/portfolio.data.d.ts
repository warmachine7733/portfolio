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
    icon: string;
    url: string;
}
export declare const workExperience: WorkExperience[];
export declare const education: Education[];
export declare const skills: {
    frontend: string[];
    backend: string[];
    database: string[];
    devtools: string[];
    soft: string[];
};
export declare const projects: Project[];
export declare const socialLinks: Social[];
export declare const personalInfo: {
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    dob: string;
    yearsOfExperience: string;
    description: string;
};
export declare const additionalInfo: {
    currentYear: number;
    techStack: string[];
};
//# sourceMappingURL=portfolio.data.d.ts.map