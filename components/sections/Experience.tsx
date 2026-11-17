"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { experiences, type Experience as Job } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

const Row = ({ job, defaultOpen = false }: { job: Job; defaultOpen?: boolean }) => {
    const [open, setOpen] = useState(defaultOpen);
    const panelId = `job-${job.company.replace(/\W+/g, "-").toLowerCase()}`;

    return (
        <li className="border-b border-line last:border-0">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-paper"
            >
                <Image
                    src={job.logo}
                    alt=""
                    width={72}
                    height={72}
                    className="h-9 w-9 shrink-0 rounded-md border border-line bg-white object-contain p-0.5"
                />
                <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-semibold">
                        {job.role}
                        {job.current && (
                            <span className="ml-2 rounded-md bg-ok-soft px-1.5 py-0.5 align-middle text-[11px] font-medium text-ok">
                                current
                            </span>
                        )}
                    </span>
                    <span className="block text-[13.5px] text-ink-2">
                        {job.company} · {job.location}
                        {job.employmentType ? ` · ${job.employmentType}` : ""}
                    </span>
                </span>
                <span className="hidden shrink-0 text-[13px] text-ink-3 sm:block">{job.duration}</span>
                <FiChevronDown
                    aria-hidden
                    className={`shrink-0 text-ink-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <div id={panelId} className={`${open ? "block" : "hidden"} px-5 pb-5 sm:pl-[4.75rem]`}>
                <p className="mb-2 text-[13px] text-ink-3 sm:hidden">{job.duration}</p>
                <ul className="list-disc space-y-1.5 pl-4 text-[14.5px] leading-relaxed text-ink-2 marker:text-ink-3">
                    {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                    ))}
                </ul>
                <p className="mt-3 flex flex-wrap gap-1.5">
                    {job.technologies.map((t) => (
                        <span key={t} className="chip">
                            {t}
                        </span>
                    ))}
                </p>
            </div>
        </li>
    );
};

const engineering = experiences.filter((e) => e.track === "engineering");
const research = experiences.filter((e) => e.track === "research");

const Experience = () => (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-content px-5 py-10 sm:px-8">
        <SectionHeader id="experience-title" title="Experience" aside={`${engineering.length} engineering roles since 2018`} />
        <Reveal>
            <ul className="card overflow-hidden">
                {engineering.map((job, i) => (
                    <Row key={job.company} job={job} defaultOpen={i === 0} />
                ))}
            </ul>
        </Reveal>
        <Reveal className="mt-6">
            <h3 className="label mb-3">Earlier: conflict and security research</h3>
            <ul className="card overflow-hidden">
                {research.map((job) => (
                    <Row key={job.company} job={job} />
                ))}
            </ul>
        </Reveal>
    </section>
);

export default Experience;
