// ===== Portfolio Data =====
// Centralized data store for all portfolio content

export type SkillCategory = 'frontend' | 'backend' | 'data' | 'devops' | 'database' | 'research';

export interface Skill {
    name: string;
    category: SkillCategory;
}

export interface Experience {
    company: string;
    logo: string;
    location: string;
    role: string;
    duration: string;
    startYear: number;
    employmentType?: string;
    track: 'engineering' | 'research';
    current?: boolean;
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
    focus: "Web, Data & Automation",
    tagline: "I build and run web platforms and data tools, with two years in conflict data research behind me.",
    availability: "Open to remote roles",
    yearsExperience: 7,
    email: "tinmaungzin.tmz@gmail.com",
    phone: "+66931588496",
    phoneDisplay: "+66 93 158 8496",
    line: "https://line.me/ti/p/m7okkh6R6_",
    siteUrl: "https://www.tinmaungzin.com",
    location: "Bangkok, Thailand",
    languages: ["Burmese (native)", "English", "Thai (basic)"],
    github: "https://github.com/tinmaungzin",
    linkedin: "https://www.linkedin.com/in/tinmaungzin/",
    resumePath: "/documents/Tin Maung Zin - Resume.pdf",
    profileImage: "/images/profile.jpg",
    bio: [
        "I'm a software engineer with 7 years of experience building web applications in PHP, JavaScript and Python. I've built ERP, point-of-sale, booking and insurance systems for companies in Myanmar and Singapore, and led a team of five developers.",
        "I've also worked in conflict, peace and security research in Myanmar, monitoring events, verifying sources and keeping research data in order. Today I build Python automation and web crawlers, working fully remote from Bangkok.",
    ],
    highlights: [
        { title: "Web engineering", body: "PHP, Laravel and Drupal, React and Next.js, shipped with CI/CD to AWS and Vercel." },
        { title: "Data & automation", body: "Python crawlers, mobile and web automation, scraping and analysis with Pandas." },
        { title: "Conflict research", body: "Event monitoring, source verification and research data management at INDRA and MIPS." },
    ],
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
    { name: "HTML & CSS", category: "frontend" },
    { name: "Jest", category: "frontend" },

    // Backend & CMS
    { name: "PHP", category: "backend" },
    { name: "Laravel", category: "backend" },
    { name: "Drupal", category: "backend" },
    { name: "Node.js", category: "backend" },
    { name: "NestJS", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "Golang", category: "backend" },
    { name: "RabbitMQ", category: "backend" },

    // Data, automation & web
    { name: "Python", category: "data" },
    { name: "Web Crawling", category: "data" },
    { name: "Mobile App Automation", category: "data" },
    { name: "BeautifulSoup", category: "data" },
    { name: "Pandas", category: "data" },
    { name: "SEO", category: "data" },
    { name: "Google Analytics", category: "data" },

    // DevOps & cloud
    { name: "Docker", category: "devops" },
    { name: "AWS", category: "devops" },
    { name: "Terraform", category: "devops" },
    { name: "GitHub Actions", category: "devops" },
    { name: "Vercel", category: "devops" },
    { name: "Git", category: "devops" },

    // Databases
    { name: "PostgreSQL", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Redis", category: "database" },

    // Research
    { name: "Conflict Monitoring", category: "research" },
    { name: "OSINT", category: "research" },
    { name: "Source Verification", category: "research" },
    { name: "Stakeholder Assessment", category: "research" },
    { name: "Information Management", category: "research" },
];

// Work Experience
export const experiences: Experience[] = [
    {
        company: "Tri7 Solutions",
        logo: "/images/Tri7.png",
        location: "Bangkok, Thailand (Remote)",
        role: "Automation Engineer",
        duration: "2024 – Present",
        startYear: 2024,
        track: "engineering",
        current: true,
        bullets: [
            "Build and maintain Python automation for mobile apps and websites for the SuperGroup department",
            "Develop web crawlers that collect and structure data from websites and apps for the marketing team",
            "Work fully remote on a shift schedule set by the operations team",
        ],
        technologies: ["Python", "Web Crawling", "Mobile App Automation", "Data Collection"],
    },
    {
        company: "Myanmar Institute for Peace and Security (MIPS)",
        logo: "/images/MIPS.png",
        location: "Yangon, Myanmar",
        role: "Research Assistant",
        duration: "May 2022 – Mar 2024",
        startYear: 2022,
        track: "research",
        bullets: [
            "Research Assistant on the Conflict Analysis and Stakeholder Assessment project, a multi-year, donor-funded research program on conflict in Myanmar",
            "Contract extended through the project's fourth year",
        ],
        technologies: ["Conflict Analysis", "Stakeholder Assessment", "Peace & Security Research"],
    },
    {
        company: "NSpiral",
        logo: "/images/N-Spiral.png",
        location: "Mandalay, Myanmar",
        role: "Software Engineer",
        duration: "Mar 2022 – June 2024",
        startYear: 2022,
        track: "engineering",
        employmentType: "Part-time",
        bullets: [
            "Developed and maintained multiple full-stack apps using Laravel, Golang, Node.js and Next.js",
            "Built restaurant booking, gym POS, e-commerce, and insurance management systems",
            "Implemented cloud solutions using AWS and containerized applications with Docker",
        ],
        technologies: ["React", "Next.js", "Node.js", "NestJS", "Laravel", "Golang", "Python", "MySQL", "RabbitMQ", "Terraform", "AWS", "Docker"],
    },
    {
        company: "INDRA Innovation & Communication",
        logo: "/images/INDRA.png",
        location: "Mandalay, Myanmar (Remote)",
        role: "Consultant, Conflict, Peace and Security Data Research",
        duration: "Nov 2021 – Apr 2022",
        startYear: 2021,
        track: "research",
        employmentType: "Part-time",
        bullets: [
            "Monitored conflict, peace and security news from online media, print media and other sources",
            "Collected event data and screened sources for validity, accuracy and quality",
            "Categorized events to INDRA's data standards and entered them into a web-based information management system",
            "Helped maintain the archive, database and knowledge base, and suggested improvements to data management practices",
        ],
        technologies: ["Conflict Monitoring", "OSINT", "Data Verification", "Information Management"],
    },
    {
        company: "NexStack",
        logo: "/images/NexStack.png",
        location: "Singapore",
        role: "Full-Stack Developer",
        duration: "Aug 2021 – Feb 2022",
        startYear: 2021,
        track: "engineering",
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
        track: "engineering",
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
        track: "engineering",
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
        description: "Real-time chat API with WebSocket messaging and RabbitMQ message queues, packaged with Docker and provisioned with Terraform.",
        technologies: ["NestJS", "WebSocket", "RabbitMQ", "Terraform", "Docker"],
        featured: true,
        color: "var(--accent-cyan)",
    },
    {
        name: "Payment Card Management",
        link: "https://github.com/tinmaungzin/wgw-card-app",
        description: "React Native app that connects to the Omise payment gateway to process credit card payments.",
        technologies: ["React Native", "Expo", "Redux", "Omise"],
        color: "var(--accent-purple)",
    },
    {
        name: "BKK Condo Price Analysis",
        link: "https://github.com/tinmaungzin/bkk_condo_data",
        description: "Scrapes Bangkok condo rental listings and analyses rental market trends with Pandas and Tableau.",
        technologies: ["Python", "BeautifulSoup", "Pandas", "Tableau"],
        color: "var(--accent-green)",
    },
    {
        name: "My Portfolio",
        link: "https://github.com/tinmaungzin/my-portfo",
        description: "This site. A responsive Next.js and Tailwind CSS build, hosted on Vercel, that adapts its animations to your connection.",
        technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
        color: "var(--accent-orange)",
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
export const skillCategories: { key: SkillCategory; label: string; color: string }[] = [
    { key: 'frontend', label: 'Frontend', color: 'var(--accent-cyan)' },
    { key: 'backend', label: 'Backend & CMS', color: 'var(--accent-green)' },
    { key: 'data', label: 'Data, Automation & SEO', color: 'var(--accent-orange)' },
    { key: 'devops', label: 'DevOps & Cloud', color: 'var(--accent-purple)' },
    { key: 'database', label: 'Databases', color: 'var(--accent-blue)' },
    { key: 'research', label: 'Research', color: 'var(--accent-pink)' },
];
