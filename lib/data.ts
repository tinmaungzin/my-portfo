// ===== Portfolio Data =====
// Centralized data store for all portfolio content

export type SkillCategory = 'ai' | 'frontend' | 'backend' | 'data' | 'devops' | 'research';

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
    link?: string;
    linkLabel?: string;
    status?: string;
    /** One line: what it does for the people who use it */
    hook?: string;
    /** The pipeline, in order, as short verb phrases */
    steps?: string[];
    /** A real, checkable number */
    metric?: string;
    /** Shown as the status light on the system card */
    state?: { label: string; tone: "live" | "private" | "open" };
    /** Indexes of steps done by a model (highlighted in the pipeline bar) */
    aiSteps?: number[];
    description: string;
    technologies: string[];
    featured?: boolean;
    color?: string;
}

// Personal Info
export const personalInfo = {
    name: "Tin Maung Zin",
    role: "AI & Automation Engineer",
    focus: "LLM apps, RAG & agent workflows",
    tagline: "I build LLM apps and automation that run every day, and the Python services and web apps around them.",
    availability: "Open to roles in Bangkok or remote",
    yearsExperience: 7,
    email: "tinmaungzin.tmz@gmail.com",
    phone: "+66931588496",
    phoneDisplay: "+66 93 158 8496",
    line: "https://line.me/ti/p/m7okkh6R6_",
    siteUrl: "https://www.tinmaungzin.com",
    location: "Bangkok, Thailand",
    languages: ["Burmese (native)", "English (professional)"],
    github: "https://github.com/tinmaungzin",
    linkedin: "https://www.linkedin.com/in/tinmaungzin/",
    resumePath: "/documents/Tin Maung Zin - Resume.pdf",
    profileImage: "/images/profile.jpg",
    bio: [
        "I'm an AI and automation engineer in Bangkok with 7 years of software experience. I build LLM applications, retrieval (RAG) systems and agent workflows, and the Python services and web apps around them.",
        "At Tri7 I run production automation that drives real Android devices and websites every day. Before that I built ERP, point-of-sale, booking and insurance systems in Laravel, Vue, React and Next.js for companies in Myanmar and Singapore, and led a team of five developers.",
        "Outside work I build AI pipelines that run in public, like a Burmese dubbing pipeline that feeds YouTube channels with hundreds of thousands of views a month. Earlier I also spent two years in conflict and security research in Myanmar.",
    ],
    highlights: [
        { title: "LLM apps & RAG", body: "Chatbots and assistants over a company's own documents, built with LangChain, embeddings and vector search on OpenAI, Gemini and Claude." },
        { title: "Automation", body: "Python workers, Celery and Redis queues, crawlers and device automation that recover on their own." },
        { title: "Full-stack delivery", body: "Laravel, Node.js, React and Next.js, shipped with Docker and CI/CD to AWS and Vercel." },
    ],
    education: {
        degree: "Bachelor of Engineering in Computer Science",
        university: "Mandalay Technological University",
        location: "Mandalay, Myanmar",
    },
};

// Skills organized by category
export const skills: Skill[] = [
    // AI & LLM
    { name: "LLM APIs (OpenAI, Gemini, Claude)", category: "ai" },
    { name: "RAG", category: "ai" },
    { name: "LangChain", category: "ai" },
    { name: "Vector Search (ChromaDB)", category: "ai" },
    { name: "Prompt Design", category: "ai" },
    { name: "Agent Workflows", category: "ai" },
    { name: "Whisper", category: "ai" },
    { name: "Voice Cloning (VoxCPM)", category: "ai" },
    { name: "Claude Code", category: "ai" },

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
    { name: "FastAPI", category: "data" },
    { name: "Celery", category: "data" },
    { name: "n8n", category: "data" },
    { name: "Appium & uiautomator2", category: "data" },
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
    { name: "PostgreSQL", category: "devops" },
    { name: "MySQL", category: "devops" },
    { name: "MongoDB", category: "devops" },
    { name: "Redis", category: "devops" },

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
            "Build and run Python automation that drives real Android devices and websites every day (uiautomator2, Appium)",
            "Queue and retry jobs with Celery and Redis; Docker and Supervisor restart failed workers so runs recover without anyone stepping in",
            "Built a browser console to watch and control Android devices remotely (adbkit, WebSocket, H.264 streaming)",
            "Develop web crawlers that collect and structure data for the marketing team, and maintain a Laravel back office",
        ],
        technologies: ["Python", "uiautomator2", "Appium", "Celery", "Redis", "Docker", "Supervisor", "Laravel", "Web Crawling"],
    },
    {
        company: "NSpiral",
        logo: "/images/N-Spiral.png",
        location: "Mandalay, Myanmar",
        role: "Full Stack Engineer",
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
    {
        company: "Myanmar Institute for Peace and Security (MIPS)",
        logo: "/images/MIPS.png",
        location: "Remote",
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
];

// Projects
export const projects: Project[] = [
    {
        name: "Burmese AI Dubbing Pipeline",
        state: { label: "runs daily", tone: "live" },
        aiSteps: [0, 1, 2],
        link: "https://github.com/tinmaungzin/voxcpm2-dub-server",
        linkLabel: "Dub server code",
        hook: "A foreign drama episode in, a Burmese-narrated recap out.",
        steps: ["Transcribe & translate", "Write the script", "Clone the voice", "Align & render", "Human review"],
        metric: "~580K views in 28 days on one channel (Oct 2026)",
        description: "Turns long Chinese and Japanese videos into Burmese-narrated recaps. Gemini translates and writes the script, VoxCPM clones the narrator's voice on rented GPUs, Whisper lines the words up with the picture, and ffmpeg and Remotion render the video. A Next.js console lets me review every step before upload. It runs daily for YouTube channels with hundreds of thousands of views a month.",
        technologies: ["Python", "Gemini", "VoxCPM", "Whisper", "ffmpeg", "Remotion", "Next.js", "Docker", "Colab GPUs"],
        featured: true,
        color: "var(--accent-cyan)",
    },
    {
        name: "Bilingual RAG Chatbot",
        state: { label: "in production", tone: "live" },
        aiSteps: [0, 2],
        status: "Private · demo on request",
        hook: "A shop's customers get answers in Burmese or English, any hour.",
        steps: ["Detect intent", "Search shop docs", "Answer", "Remember the chat"],
        description: "Facebook Messenger bot that answers a cosmetics shop's customers in Burmese and English from the shop's own documents. Conversation memory, intent routing, and a cheaper model for internal steps to keep cost down. Next.js dashboard for the catalogue.",
        technologies: ["FastAPI", "LangChain", "ChromaDB", "PostgreSQL", "Next.js"],
        color: "var(--accent-purple)",
    },
    {
        name: "Property Listing Agent",
        state: { label: "in production", tone: "live" },
        aiSteps: [1, 3],
        status: "Private · demo on request",
        hook: "One ad in; a checked listing, a Facebook post and a LINE message out.",
        steps: ["Collect the ad", "Read it", "Check & save", "Write the post", "Publish"],
        description: "One property ad goes in; a checked listing, a Facebook post and a LINE message come out. Scripts handle every step with one right answer, and the AI agent only makes the judgement calls. It replaced an n8n and Telegram flow.",
        technologies: ["Claude Code", "Node.js", "Facebook", "LINE"],
        color: "var(--accent-green)",
    },
    {
        name: "Trend-to-Article News Agent",
        state: { label: "runs daily", tone: "live" },
        aiSteps: [1, 2],
        status: "Private · demo on request",
        hook: "A trending topic becomes a published Burmese article, every day.",
        steps: ["Read Google Trends", "Pick a topic", "Draft & edit", "Render image", "Post"],
        description: "Reads Google Trends for four countries, has Gemini pick a topic and write and edit a Burmese article, renders an image with Burmese text, and posts it through the Facebook Graph API.",
        technologies: ["Python", "Gemini", "Pillow", "Facebook Graph API"],
        color: "var(--accent-orange)",
    },
    {
        name: "Cockpit",
        state: { label: "private", tone: "private" },
        status: "Private · demo on request",
        hook: "The toolbox my AI coding agents use to produce video on their own.",
        description: "Toolkit that lets AI coding agents run content production on their own: image and video generation, GPU jobs on Colab and Hugging Face, voice cloning, text-to-speech, captions and editing. Runs on macOS and Windows.",
        technologies: ["Python", "Node.js", "Gemini", "Google Flow", "Colab"],
        color: "var(--accent-pink)",
    },
    {
        name: "Android Automation",
        state: { label: "open source", tone: "open" },
        steps: ["Queue the job", "Drive the phone", "Check the screen", "Retry on failure"],
        link: "https://github.com/tinmaungzin/uiautomator2-mobile-automation",
        hook: "Real phones, driven by Python workers that recover on their own.",
        description: "Python automation that drives real Android apps with uiautomator2 and Celery workers, the approach I use in production at Tri7.",
        technologies: ["Python", "uiautomator2", "Celery", "Redis"],
        color: "var(--accent-blue)",
    },
    {
        name: "Chat API",
        state: { label: "open source", tone: "open" },
        link: "https://github.com/tinmaungzin/wgw-chat-api",
        hook: "Real-time messaging backend with queues and infrastructure as code.",
        description: "Real-time chat API with WebSocket messaging and RabbitMQ message queues, packaged with Docker and provisioned with Terraform.",
        technologies: ["NestJS", "WebSocket", "RabbitMQ", "Terraform", "Docker"],
        color: "var(--accent-cyan)",
    },
];

// Navigation links
export const navLinks = [
    { name: "Systems", href: "#systems" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

// Skill categories for display
export const skillCategories: { key: SkillCategory; label: string; color: string }[] = [
    { key: 'ai', label: 'AI & LLM', color: 'var(--accent-blue)' },
    { key: 'data', label: 'Automation & Data', color: 'var(--accent-orange)' },
    { key: 'backend', label: 'Backend & CMS', color: 'var(--accent-green)' },
    { key: 'frontend', label: 'Frontend', color: 'var(--accent-cyan)' },
    { key: 'devops', label: 'Cloud, DevOps & Databases', color: 'var(--accent-purple)' },
    { key: 'research', label: 'Research', color: 'var(--accent-pink)' },
];
