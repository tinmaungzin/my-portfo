import { experiences, personalInfo } from "@/lib/data";
import Reveal from "../ui/Reveal";

const current = experiences.find((e) => e.current);

const facts = [
    { label: "Current role", value: current ? `${current.role}, ${current.company}` : personalInfo.role },
    { label: "Focus", value: personalInfo.focus },
    { label: "Location", value: personalInfo.location },
    { label: "Languages", value: personalInfo.languages.join(", ") },
    { label: "Education", value: `${personalInfo.education.degree}, ${personalInfo.education.university}` },
];

const About = () => (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-content px-5 pb-6 sm:px-8">
        <h2 id="about-title" className="sr-only">
            About
        </h2>
        <Reveal className="grid gap-4 lg:grid-cols-[1fr_380px]">
            <div className="card p-6">
                <p className="label">Profile</p>
                <div className="mt-3 space-y-3 text-[15.5px] leading-relaxed text-ink-2">
                    {personalInfo.bio.map((p) => (
                        <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                </div>
            </div>
            <div className="card p-6">
                <p className="label">At a glance</p>
                <dl className="mt-1 text-[14px]">
                    {facts.map((f) => (
                        <div key={f.label} className="flex justify-between gap-6 border-b border-line py-2.5 last:border-0">
                            <dt className="shrink-0 text-ink-3">{f.label}</dt>
                            <dd className="text-right font-medium">{f.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </Reveal>
    </section>
);

export default About;
