"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills, skillCategories } from "@/lib/data";

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filteredSkills = activeCategory
        ? skills.filter(s => s.category === activeCategory)
        : skills;

    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="section-comment mb-2">{"// tech stack"}</p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-gradient">Skills & Technologies</span>
                    </h2>
                    <p className="text-text-muted mt-4 max-w-md mx-auto">
                        Technologies I work with on a daily basis
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${activeCategory === null
                            ? "bg-accent-cyan text-black"
                            : "bg-glass-bg text-text-secondary hover:bg-glass-border"
                            }`}
                    >
                        All
                    </button>
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${activeCategory === cat.key
                                ? "text-black"
                                : "bg-glass-bg text-text-secondary hover:bg-glass-border"
                                }`}
                            style={{
                                backgroundColor: activeCategory === cat.key ? cat.color : undefined,
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                    {filteredSkills.map((skill, index) => {
                        const category = skillCategories.find(c => c.key === skill.category);
                        return (
                            <motion.div
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ delay: index * 0.02 }}
                                className="glass-card p-4 text-center hover-lift group cursor-default"
                            >
                                <p className="text-text-primary font-medium text-sm group-hover:text-text-primary transition-colors">
                                    {skill.name}
                                </p>
                                <div
                                    className="w-10 h-0.5 mx-auto mt-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
                                    style={{ backgroundColor: category?.color || '#22d3ee' }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Skill Categories Legend */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 mt-12 text-xs text-text-muted"
                >
                    {skillCategories.map((cat) => (
                        <div key={cat.key} className="flex items-center gap-2">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: cat.color }}
                            />
                            <span>{cat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
