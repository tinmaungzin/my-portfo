"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="section-comment mb-2">{"// work experience"}</p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-gradient">Career Timeline</span>
                    </h2>
                    <p className="text-text-muted mt-4 max-w-md mx-auto">
                        A journey through companies and projects that shaped my skills
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-orange" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-16 md:pl-20 pb-12 last:pb-0"
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-3 md:left-5 w-6 h-6 md:w-7 md:h-7 rounded-full bg-bg-primary border-[3px] border-accent-cyan flex items-center justify-center z-10">
                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-accent-cyan" />
                            </div>

                            {/* Year Badge - positioned prominently above the card */}
                            <div className="inline-block mb-2 px-3 py-1 rounded-full bg-accent-cyan/20 border border-accent-cyan/30 font-mono text-sm text-accent-cyan font-semibold">
                                {exp.startYear}
                            </div>

                            {/* Experience Card */}
                            <div className="glass-card p-6 mt-4 hover-lift group">
                                {/* Card Header */}
                                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                                    {/* Company Logo */}
                                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-glass-border flex-shrink-0">
                                        <Image
                                            src={exp.logo}
                                            alt={exp.company}
                                            width={56}
                                            height={56}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-cyan transition-colors">
                                            {exp.company}
                                        </h3>
                                        <p className="text-accent-purple font-medium text-sm">
                                            {exp.role}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-text-muted">
                                            <span>{exp.location}</span>
                                            <span className="w-1 h-1 rounded-full bg-text-muted" />
                                            <span>{exp.duration}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bullet Points */}
                                <ul className="space-y-2 mb-4">
                                    {exp.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                                            <span className="text-accent-green mt-1.5 text-xs">▹</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-xs rounded-md bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
