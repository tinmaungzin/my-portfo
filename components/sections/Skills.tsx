import { skills, skillCategories } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

const Skills = () => (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-content px-5 py-10 sm:px-8">
        <SectionHeader id="skills-title" title="Skills" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat, i) => (
                <Reveal key={cat.key} delay={(i % 3) * 60} className="card p-5">
                    <h3 className="text-[14.5px] font-semibold">{cat.label}</h3>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                        {skills
                            .filter((s) => s.category === cat.key)
                            .map((s) => (
                                <li key={s.name} className="chip">
                                    {s.name}
                                </li>
                            ))}
                    </ul>
                </Reveal>
            ))}
        </div>
    </section>
);

export default Skills;
