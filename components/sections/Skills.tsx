import { skills, skillCategories } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

const Skills = () => (
    <section id="skills" className="py-20 md:py-28">
        <div className="max-w-content mx-auto px-5 sm:px-6">
            <SectionHeader
                comment="tech stack"
                title="Skills and tools"
                subtitle="What I use to build, ship and research, grouped by where it fits."
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((cat, i) => {
                    const items = skills.filter((s) => s.category === cat.key);
                    return (
                        <Reveal key={cat.key} delay={(i % 3) * 80} className="h-full">
                            <div className="card card-interactive h-full p-6 relative overflow-hidden">
                                <span
                                    className="absolute inset-x-0 top-0 h-px"
                                    style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }}
                                    aria-hidden
                                />
                                <div className="flex items-center justify-between">
                                    <h3 className="flex items-center gap-2.5 font-semibold text-text-primary">
                                        <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} aria-hidden />
                                        {cat.label}
                                    </h3>
                                    <span className="font-mono text-xs text-text-muted">{items.length}</span>
                                </div>
                                <ul className="mt-5 flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <li
                                            key={skill.name}
                                            className="px-3 py-1.5 rounded-lg text-[13px] text-text-primary bg-glass-bg border border-glass-border"
                                        >
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </div>
    </section>
);

export default Skills;
