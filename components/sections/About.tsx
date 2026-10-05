import { FiCode, FiDatabase, FiGlobe, FiMapPin, FiMessageCircle, FiBookOpen } from "react-icons/fi";
import { personalInfo } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

const highlightIcons = [FiCode, FiDatabase, FiGlobe];
const highlightColors = ["var(--accent-cyan)", "var(--accent-orange)", "var(--accent-pink)"];

const facts = [
    { Icon: FiMapPin, label: "Based in", value: `${personalInfo.location} · remote` },
    { Icon: FiMessageCircle, label: "Languages", value: personalInfo.languages.join(", ") },
    { Icon: FiBookOpen, label: "Education", value: `B.E., ${personalInfo.education.university}` },
];

const About = () => (
    <section id="about" className="py-20 md:py-28">
        <div className="max-w-content mx-auto px-5 sm:px-6">
            <SectionHeader comment="about me" title="Engineer by trade, researcher by experience" />

            <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                <Reveal>
                    <div className="space-y-5 text-[17px] leading-[1.75] text-text-secondary text-pretty">
                        {personalInfo.bio.map((paragraph) => (
                            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                        ))}
                    </div>

                    <dl className="mt-8 grid gap-3 sm:grid-cols-1">
                        {facts.map(({ Icon, label, value }) => (
                            <div key={label} className="flex items-start gap-3 text-sm">
                                <Icon className="mt-0.5 shrink-0 text-accent-cyan" size={16} aria-hidden />
                                <dt className="text-text-muted w-24 shrink-0">{label}</dt>
                                <dd className="text-text-primary">{value}</dd>
                            </div>
                        ))}
                    </dl>
                </Reveal>

                <div className="grid gap-4">
                    {personalInfo.highlights.map((item, i) => {
                        const Icon = highlightIcons[i % highlightIcons.length];
                        const color = highlightColors[i % highlightColors.length];
                        return (
                            <Reveal key={item.title} delay={i * 90}>
                                <div className="card card-interactive p-5 sm:p-6 flex gap-4">
                                    <span
                                        className="shrink-0 w-11 h-11 rounded-xl grid place-items-center"
                                        style={{
                                            color,
                                            background: `color-mix(in srgb, ${color} 12%, transparent)`,
                                        }}
                                        aria-hidden
                                    >
                                        <Icon size={20} />
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-text-primary">{item.title}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.body}</p>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
);

export default About;
