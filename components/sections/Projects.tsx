"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import { projects } from "@/lib/data";

const Projects = () => {
    const featuredProject = projects.find(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="section-comment mb-2">{"// projects"}</p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-gradient">Things I&apos;ve Built</span>
                    </h2>
                    <p className="text-text-muted mt-4 max-w-md mx-auto">
                        A collection of projects that showcase my skills and interests
                    </p>
                </motion.div>

                {/* Featured Project */}
                {featuredProject && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="ide-card overflow-hidden">
                            <div className="ide-card-header">
                                <FaFolder className="text-accent-cyan" />
                                <span className="text-text-secondary">{featuredProject.name}</span>
                                <span className="text-xs text-accent-green ml-2 px-2 py-0.5 bg-accent-green/10 rounded">
                                    Featured
                                </span>
                                <div className="flex-1" />
                                <Link
                                    href={featuredProject.link}
                                    target="_blank"
                                    className="text-text-muted hover:text-accent-cyan transition-colors"
                                >
                                    <FaGithub size={16} />
                                </Link>
                            </div>
                            <div className="p-6">
                                <p className="text-text-secondary leading-relaxed mb-6">
                                    {featuredProject.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {featuredProject.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs rounded-full border border-accent-cyan/30 text-accent-cyan bg-accent-cyan/5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Other Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={project.link} target="_blank" className="block h-full">
                                <div className="ide-card h-full flex flex-col group">
                                    <div className="ide-card-header">
                                        <FaFolder style={{ color: project.color || '#22d3ee' }} />
                                        <span className="text-text-secondary truncate">{project.name}</span>
                                        <div className="flex-1" />
                                        <FaExternalLinkAlt
                                            size={12}
                                            className="text-text-muted group-hover:text-accent-cyan transition-colors"
                                        />
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col">
                                        <p className="text-text-muted text-sm leading-relaxed flex-1 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.slice(0, 3).map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs text-text-muted font-mono"
                                                >
                                                    {tech}
                                                    {idx < Math.min(project.technologies.length - 1, 2) && (
                                                        <span className="text-text-muted mx-1">•</span>
                                                    )}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View More Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="https://github.com/tinmaungzin?tab=repositories"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors text-sm font-mono"
                    >
                        <span>{">"} view more on github</span>
                        <FaExternalLinkAlt size={12} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
