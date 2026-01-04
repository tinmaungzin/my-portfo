// ===== Portfolio Data =====
// Centralized data store for all portfolio content

export interface Skill {
    name: string;
    icon?: string;
    category: 'frontend' | 'backend' | 'devops' | 'database' | 'tools';
}

export interface Experience {
    company: string;
    logo: string;
    location: string;
    role: string;
    duration: string;
    startYear: number;
    bullets: string[];
    technologies: string[];
}

export interface Project {
    name: string;
    link: string;
    description: string;
    technologies: string[];
    featured?: boolean;
    color?: string;
}

// Personal Info
export const personalInfo = {
    name: "Tin Maung Zin",
    role: "Software Engineer",
    tagline: "Building scalable systems with modern technologies",
    yearsExperience: 6,
    email: "tinmaungzin.tmz@gmail.com",
    phone: "+66931588496",
    location: "Bangkok, Thailand",
    nationality: "Myanmar 🇲🇲",
    languages: ["English", "Burmese", "Thai (Basic)"],
    github: "https://github.com/tinmaungzin",
    linkedin: "https://www.linkedin.com/in/tinmaungzin/",
    resumePath: "/documents/Tin Maung Zin - Resume.pdf",
    profileImage: "/images/profile.jpg",
    bio: `I am a Software Engineer with around 6 years of experience who is passionate about technology. Throughout my career, I have built and managed systems from small to large in the automotive, financial, and supermarket industries. I have worked with project managers and product teams, implementing solutions in the cloud, and working with several technologies and services.`,
    education: {
        degree: "Bachelor of Engineering in Computer Science",
        university: "Mandalay Technological University",
        location: "Mandalay, Myanmar",
    },
};

// Skills organized by category
export const skills: Skill[] = [
    // Frontend
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Vue.js", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },

    // Backend
    { name: "Node.js", category: "backend" },
    { name: "NestJS", category: "backend" },
    { name: "Laravel", category: "backend" },
    { name: "Golang", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "Express.js", category: "backend" },

    // DevOps
    { name: "Docker", category: "devops" },
    { name: "AWS", category: "devops" },
    { name: "Terraform", category: "devops" },
    { name: "CI/CD", category: "devops" },

    // Database
    { name: "PostgreSQL", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Redis", category: "database" },

    // Tools
    { name: "Git", category: "tools" },
    { name: "RabbitMQ", category: "tools" },
    { name: "Jest", category: "tools" },
];

// Work Experience
export const experiences: Experience[] = [
    {
        company: "NSpiral",
        logo: "/images/N-Spiral.png",
        location: "Mandalay, Myanmar",
        role: "Software Engineer",
        duration: "Mar 2022 – June 2024",
        startYear: 2022,
        bullets: [
            "Developed and maintained multiple full-stack apps using Laravel, Golang, Node.js and Next.js",
            "Built restaurant booking, gym POS, e-commerce, and insurance management systems",
            "Implemented cloud solutions using AWS and containerized applications with Docker",
        ],
        technologies: ["React", "Next.js", "Node.js", "NestJS", "Laravel", "Golang", "Python", "MySQL", "RabbitMQ", "Terraform", "AWS", "Docker"],
    },
    {
        company: "NexStack",
        logo: "/images/NexStack.png",
        location: "Singapore",
        role: "Full-Stack Developer",
        duration: "Aug 2021 – Feb 2022",
        startYear: 2021,
        bullets: [
            "Led a team of five developers to develop and maintain ERP solutions for supermarkets and security companies",
            "Co-designed and developed a modern serverless insurance agent solution with AWS and Next.js",
            "Deployed web applications using CI/CD technology with Github Actions",
        ],
        technologies: ["React", "Next.js", "MySQL", "Strapi", "AWS", "Docker", "Git"],
    },
    {
        company: "Mounts Digital",
        logo: "/images/mounts.jpeg",
        location: "Mandalay, Myanmar",
        role: "Web Developer",
        duration: "May 2019 – June 2021",
        startYear: 2019,
        bullets: [
            "Implemented complex data flows between multiple components using Vue.js and Vuex",
            "Co-designed and developed an interactive POS system for a money exchange business",
            "Developed two advanced ERPs with accounting, finance, and multi-role authorization",
        ],
        technologies: ["Laravel", "Vue.js", "Vuex", "jQuery", "MySQL", "Git"],
    },
    {
        company: "Studio AMK",
        logo: "/images/StudioAMK.png",
        location: "Yangon, Myanmar",
        role: "Intern",
        duration: "Nov 2018 – Feb 2019",
        startYear: 2018,
        bullets: [
            "Designed and developed company internal solutions with HTML and CSS",
            "Built and tested football live score and movie database applications using Node.js",
            "Created a promotion campaign module as part of an existing microservice application",
        ],
        technologies: ["Node.js", "Express.js", "HTML", "CSS", "JavaScript", "MySQL"],
    },
];

// Projects
export const projects: Project[] = [
    {
        name: "Chat API",
        link: "https://github.com/tinmaungzin/wgw-chat-api",
        description: "A real-time chat API with WebSocket communication and message queues, built for scalability and instant messaging capabilities.",
        technologies: ["NestJS", "WebSocket", "RabbitMQ", "Terraform", "Docker"],
        featured: true,
        color: "#22d3ee",
    },
    {
        name: "Payment Card Management",
        link: "https://github.com/tinmaungzin/wgw-card-app",
        description: "Mobile app connecting with Omise payment gateway, enabling secure credit card payment processing.",
        technologies: ["React Native", "Expo", "Redux", "Omise"],
        color: "#a78bfa",
    },
    {
        name: "BKK Condo Price Analysis",
        link: "https://github.com/tinmaungzin/bkk_condo_data",
        description: "Data analysis project scraping rental listings in Bangkok, providing insights into the rental market trends.",
        technologies: ["Python", "BeautifulSoup", "Pandas", "Tableau"],
        color: "#4ade80",
    },
    {
        name: "My Portfolio",
        link: "https://github.com/tinmaungzin/my-portfo",
        description: "This responsive portfolio website built with Next.js and Tailwind CSS, hosted on Vercel.",
        technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
        color: "#fb923c",
    },
];

// Navigation links
export const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

// Skill categories for display
export const skillCategories = [
    { key: 'frontend', label: 'Frontend', color: '#22d3ee' },
    { key: 'backend', label: 'Backend', color: '#4ade80' },
    { key: 'devops', label: 'DevOps', color: '#a78bfa' },
    { key: 'database', label: 'Database', color: '#fb923c' },
    { key: 'tools', label: 'Tools', color: '#f472b6' },
] as const;
