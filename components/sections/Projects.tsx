import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiFolder } from "react-icons/fi";
import { projects, personalInfo } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

const Projects = () => {
    const featured = projects.find((p) => p.featured);
    const others = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-20 md:py-28">
            <div className="max-w-content mx-auto px-5 sm:px-6">
                <SectionHeader
                    comment="projects"
                    title="Things I've built"
                    subtitle="Side projects where I try out new tools, from real-time messaging to scraping and analysing the Bangkok rental market."
                />

                {featured && (
                    <Reveal className="mb-6">
                        <a
                            href={featured.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block rounded-2xl p-px bg-gradient-to-br from-accent-cyan/60 via-glass-border to-accent-purple/60"
                            aria-label={`${featured.name} on GitHub (opens in a new tab)`}
                        >
                            <div className="rounded-[15px] bg-surface p-6 md:p-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                                <div>
                                    <div className="flex items-center gap-3 font-mono text-sm">
                                        <FiFolder className="text-accent-cyan" aria-hidden />
                                        <span className="text-text-secondary">featured project</span>
                                    </div>
                                    <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-text-primary">
                                        {featured.name}
                                    </h3>
                                    <p className="mt-3 max-w-2xl text-text-secondary leading-relaxed text-pretty">
                                        {featured.description}
                                    </p>
                                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                                        {featured.technologies.map((tech) => (
                                            <li key={tech} className="chip chip-accent">
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <span className="btn btn-ghost self-start md:self-end">
                                    <FaGithub size={16} aria-hidden />
                                    View code
                                    <FiArrowUpRight
                                        size={16}
                                        aria-hidden
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </span>
                            </div>
                        </a>
                    </Reveal>
                )}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {others.map((project, i) => (
                        <Reveal key={project.name} delay={i * 80} className="h-full">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group card card-interactive h-full p-6 flex flex-col"
                                aria-label={`${project.name} on GitHub (opens in a new tab)`}
                            >
                                <div className="flex items-center justify-between">
                                    <span
                                        className="w-10 h-10 rounded-xl grid place-items-center"
                                        style={{
                                            color: project.color,
                                            background: `color-mix(in srgb, ${project.color} 14%, transparent)`,
                                        }}
                                        aria-hidden
                                    >
                                        <FiFolder size={18} />
                                    </span>
                                    <FiArrowUpRight
                                        size={18}
                                        aria-hidden
                                        className="text-text-muted transition-all duration-300 group-hover:text-accent-cyan group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </div>
                                <h3 className="mt-5 font-semibold text-lg text-text-primary group-hover:text-accent-cyan transition-colors">
                                    {project.name}
                                </h3>
                                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-text-secondary">
                                    {project.description}
                                </p>
                                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-text-muted" aria-label="Technologies">
                                    {project.technologies.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                            </a>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-10">
                    <a
                        href={`${personalInfo.github}?tab=repositories`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent-cyan transition-colors"
                    >
                        <span aria-hidden>{">"}</span> more on GitHub
                        <FiArrowUpRight
                            size={14}
                            aria-hidden
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>
                </Reveal>
            </div>
        </section>
    );
};

export default Projects;
