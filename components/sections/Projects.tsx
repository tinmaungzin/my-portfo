import { FiArrowUpRight, FiLock } from "react-icons/fi";
import { projects, type Project } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

const toneClass = { live: "", private: "is-private", open: "is-open" } as const;
const toneText = { live: "text-ok", private: "text-ink-3", open: "text-signal-ink" } as const;

const Pipeline = ({ steps, ai = [] }: { steps: string[]; ai?: number[] }) => (
    <ol className="pipe" aria-label="Pipeline steps">
        {steps.map((step, i) => (
            <li key={step} className={ai.includes(i) ? "ai" : undefined}>
                <span className="sr-only">
                    Step {i + 1}
                    {ai.includes(i) ? " (AI model)" : ""}:{" "}
                </span>
                {step}
            </li>
        ))}
    </ol>
);

const SystemCard = ({ project }: { project: Project }) => {
    const tone = project.state?.tone ?? "private";
    return (
        <article className="card flex w-full flex-col p-5">
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-[16.5px] font-semibold leading-snug">{project.name}</h3>
                {project.state && (
                    <span className={`flex shrink-0 items-center gap-2 pt-0.5 text-[12.5px] ${toneText[tone]}`}>
                        <span className={`pulse-dot ${toneClass[tone]}`} aria-hidden />
                        {project.state.label}
                    </span>
                )}
            </div>
            <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-2">{project.hook}</p>

            {project.steps && (
                <div className="mt-4">
                    <Pipeline steps={project.steps} ai={project.aiSteps} />
                </div>
            )}

            {project.metric && (
                <p className="mt-3 text-[13px] text-ink-2">
                    <span className="font-semibold text-ink">{project.metric.split(" ")[0]}</span>{" "}
                    {project.metric.split(" ").slice(1).join(" ")}
                </p>
            )}

            <details className="group mt-3 text-[14px]">
                <summary className="cursor-pointer list-none text-[13px] font-medium text-ink-3 hover:text-ink [&::-webkit-details-marker]:hidden">
                    <span className="group-open:hidden">How it works +</span>
                    <span className="hidden group-open:inline">Hide details −</span>
                </summary>
                <p className="mt-2 leading-relaxed text-ink-2">{project.description}</p>
            </details>

            <div className="mt-auto pt-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3">
                <p className="font-mono text-[12px] text-ink-3">{project.technologies.slice(0, 4).join(" · ")}</p>
                {project.link ? (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[13px] font-medium text-signal-ink hover:underline"
                    >
                        {project.linkLabel ?? "Code"} <FiArrowUpRight aria-hidden />
                        <span className="sr-only">(opens in a new tab)</span>
                    </a>
                ) : (
                    <span className="inline-flex items-center gap-1.5 text-[13px] text-ink-3">
                        <FiLock aria-hidden size={12} /> demo on request
                    </span>
                )}
            </div>
            </div>
        </article>
    );
};

const Projects = () => (
    <section id="systems" aria-labelledby="systems-title" className="mx-auto max-w-content px-5 py-10 sm:px-8">
        <SectionHeader
            id="systems-title"
            title="Systems I built and run"
            aside={
                <span className="inline-flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-sm border border-signal bg-signal-soft" aria-hidden />
                    AI model step
                </span>
            }
        />
        <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p, i) => (
                <Reveal key={p.name} delay={(i % 2) * 60} className="flex">
                    <SystemCard project={p} />
                </Reveal>
            ))}
        </div>
    </section>
);

export default Projects;
