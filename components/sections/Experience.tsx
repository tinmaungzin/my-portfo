"use client";

import { useState } from "react";
import Image from "next/image";
import { experiences, Experience as ExperienceItem } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

type Filter = "all" | ExperienceItem["track"];

const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "engineering", label: "Engineering" },
    { key: "research", label: "Research" },
];

const countFor = (key: Filter) =>
    key === "all" ? experiences.length : experiences.filter((e) => e.track === key).length;

const Experience = () => {
    const [filter, setFilter] = useState<Filter>("all");
    const visible = filter === "all" ? experiences : experiences.filter((e) => e.track === filter);

    return (
        <section id="experience" className="py-20 md:py-28">
            <div className="max-w-content mx-auto px-5 sm:px-6">
                <SectionHeader
                    comment="work experience"
                    title="Where I've worked"
                    subtitle="Seven years across software teams in Myanmar, Singapore and Thailand, plus two years in conflict and security research."
                />

                <Reveal className="mb-8 md:mb-10">
                    <div role="group" aria-label="Filter experience" className="inline-flex p-1 rounded-xl bg-glass-bg border border-glass-border">
                        {filters.map((f) => {
                            const active = filter === f.key;
                            return (
                                <button
                                    key={f.key}
                                    type="button"
                                    onClick={() => setFilter(f.key)}
                                    aria-pressed={active}
                                    className={`px-3.5 sm:px-4 py-2 rounded-lg text-sm transition-colors duration-200 ${
                                        active
                                            ? "bg-surface text-text-primary shadow-sm border border-glass-border"
                                            : "text-text-secondary hover:text-text-primary border border-transparent"
                                    }`}
                                >
                                    {f.label}
                                    <span className="ml-1.5 font-mono text-xs text-text-muted">{countFor(f.key)}</span>
                                </button>
                            );
                        })}
                    </div>
                </Reveal>

                <ol className="relative max-w-4xl">
                    <span
                        className="absolute left-[7px] md:left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent"
                        aria-hidden
                    />
                    {visible.map((exp) => (
                        <li key={exp.company} className="relative pl-7 md:pl-12 pb-5 md:pb-6 last:pb-0">
                            <span
                                className="absolute left-0 md:left-1 top-7 w-[15px] h-[15px] rounded-full border-2 bg-bg-primary"
                                style={{ borderColor: exp.track === "research" ? "var(--accent-pink)" : "var(--accent-cyan)" }}
                                aria-hidden
                            />
                            <Reveal>
                                <article className="card card-interactive p-4 sm:p-5 md:p-6">
                                    <header className="flex gap-4">
                                        <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-xl overflow-hidden bg-white ring-1 ring-glass-border">
                                            <Image
                                                src={exp.logo}
                                                alt=""
                                                width={48}
                                                height={48}
                                                sizes="48px"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                                <h3 className="font-semibold text-text-primary text-[17px] leading-snug">
                                                    {exp.company}
                                                </h3>
                                                <p className="font-mono text-xs text-text-muted whitespace-nowrap">
                                                    {exp.duration}
                                                </p>
                                            </div>
                                            <p className="mt-0.5 text-sm font-medium text-accent-purple">{exp.role}</p>
                                            <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-text-muted">
                                                <span>{exp.location}</span>
                                                {exp.employmentType && <span className="chip !py-0 !text-[11px]">{exp.employmentType}</span>}
                                                {exp.current && (
                                                    <span className="chip !py-0 !text-[11px] !text-accent-green">Current</span>
                                                )}
                                            </div>
                                        </div>
                                    </header>

                                    <ul className="mt-4 space-y-1.5 sm:space-y-2">
                                        {exp.bullets.map((bullet) => (
                                            <li key={bullet} className="flex gap-3 text-[14px] sm:text-[15px] leading-relaxed text-text-secondary">
                                                <span className="mt-[9px] w-1 h-1 rounded-full bg-text-muted shrink-0" aria-hidden />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies and skills">
                                        {exp.technologies.map((tech) => (
                                            <li key={tech} className="chip">
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Experience;
