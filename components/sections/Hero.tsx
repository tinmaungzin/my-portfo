import { CSSProperties } from "react";
import Image from "next/image";
import { IoDocumentText } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import { personalInfo, experiences } from "@/lib/data";
import SocialLinks from "../ui/SocialLinks";

const commands = [
    { command: "whoami", output: personalInfo.name },
    { command: "cat focus.txt", output: "web platforms · data & automation · conflict research" },
    { command: "echo $EXPERIENCE", output: `${personalInfo.yearsExperience}+ years, ${experiences.length} companies` },
    { command: "cat status", output: `${personalInfo.availability.toLowerCase()} ✓`, highlight: true },
];

// Timeline for the CSS typing animation (ms)
const CHAR_MS = 55;
let clock = 500;
const timeline = commands.map((cmd) => {
    const delay = clock;
    const outDelay = delay + cmd.command.length * CHAR_MS + 200;
    clock = outDelay + 550;
    return { ...cmd, delay, outDelay };
});
const lastOut = timeline[timeline.length - 1].outDelay;

const enter = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as CSSProperties;

const photoClip = "polygon(0 14%, 14% 0, 100% 0, 100% 86%, 86% 100%, 0 100%)";

const Hero = () => {
    return (
        <section id="top" className="relative pt-28 pb-12 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
            <div className="max-w-content mx-auto w-full px-5 sm:px-6">
                <div className="grid gap-10 lg:gap-x-16 lg:grid-cols-[1.1fr_0.9fr] lg:grid-rows-[auto_auto] items-start">
                    {/* Photo */}
                    <div className="enter lg:col-start-2 lg:row-start-1 lg:justify-self-end" style={enter(0)}>
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-80 lg:h-80">
                            <div
                                className="absolute inset-0 p-[3px]"
                                style={{
                                    clipPath: photoClip,
                                    background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))",
                                }}
                            >
                                <div className="relative w-full h-full overflow-hidden bg-bg-secondary" style={{ clipPath: photoClip }}>
                                    <Image
                                        src={personalInfo.profileImage}
                                        alt={`Portrait of ${personalInfo.name}`}
                                        fill
                                        priority
                                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 160px, 128px"
                                        className="object-cover object-[60%_30%]"
                                    />
                                </div>
                            </div>
                            <span className="absolute top-0 left-[14%] w-[22%] h-[3px] bg-accent-cyan" aria-hidden />
                            <span className="absolute bottom-0 right-[14%] w-[22%] h-[3px] bg-accent-purple" aria-hidden />
                        </div>
                    </div>

                    {/* Intro */}
                    <div className="lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:self-center">
                        <p
                            className="enter inline-flex items-center gap-2.5 chip !py-1.5 !px-3.5 !text-[13px]"
                            style={enter(80)}
                        >
                            <span className="relative flex w-2 h-2" aria-hidden>
                                <span className="ping-soft absolute inset-0 rounded-full bg-accent-green" />
                                <span className="relative w-2 h-2 rounded-full bg-accent-green" />
                            </span>
                            {personalInfo.availability}
                            <span className="text-text-muted" aria-hidden>
                                ·
                            </span>
                            {personalInfo.location}
                        </p>

                        <h1
                            className="enter mt-6 text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary"
                            style={enter(140)}
                        >
                            Tin Maung <span className="text-gradient">Zin</span>
                        </h1>

                        <p className="enter mt-4 font-mono text-base sm:text-lg text-text-secondary" style={enter(200)}>
                            <span className="text-text-muted">{"<"}</span>
                            <span className="text-accent-orange">{personalInfo.role}</span>
                            <span className="text-text-muted">{" />"}</span>
                            <span className="hidden sm:inline text-text-muted mx-2" aria-hidden>
                                ·
                            </span>
                            <span className="block sm:inline mt-1 sm:mt-0">{personalInfo.focus}</span>
                        </p>

                        <p
                            className="enter mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-text-secondary text-pretty"
                            style={enter(260)}
                        >
                            {personalInfo.tagline}
                        </p>

                        <div className="enter mt-8 grid grid-cols-1 min-[420px]:flex min-[420px]:flex-wrap items-center gap-3" style={enter(320)}>
                            <a href={personalInfo.resumePath} target="_blank" rel="noopener" className="btn btn-primary">
                                <IoDocumentText size={18} aria-hidden />
                                Download resume
                            </a>
                            <a href="#contact" className="btn btn-ghost group">
                                Get in touch
                                <FiArrowRight
                                    size={16}
                                    aria-hidden
                                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>

                        <div className="enter mt-8 flex flex-wrap items-center gap-x-5 gap-y-4" style={enter(380)}>
                            <SocialLinks />
                            <dl className="flex items-center gap-5 text-sm">
                                {[
                                    { value: `${personalInfo.yearsExperience}+`, label: "years" },
                                    { value: `${experiences.length}`, label: "companies" },
                                    { value: "10+", label: "projects" },
                                ].map((stat) => (
                                    <div key={stat.label} className="flex items-baseline gap-1.5">
                                        <dt className="sr-only">{stat.label}</dt>
                                        <dd className="font-mono font-semibold text-text-primary">{stat.value}</dd>
                                        <span className="text-text-muted" aria-hidden>
                                            {stat.label}
                                        </span>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                    {/* Terminal */}
                    <div
                        className="enter lg:col-start-2 lg:row-start-2 lg:-mt-28 lg:mr-20 relative z-10"
                        style={enter(450)}
                        aria-hidden
                    >
                        <div className="terminal">
                            <div className="terminal-header">
                                <span className="terminal-dot terminal-dot-red" />
                                <span className="terminal-dot terminal-dot-yellow" />
                                <span className="terminal-dot terminal-dot-green" />
                                <span className="ml-3 text-text-muted text-xs font-mono">~/portfolio — zsh</span>
                            </div>
                            <div className="terminal-body space-y-2.5">
                                {timeline.map((line) => (
                                    <div key={line.command}>
                                        <div className="flex items-center gap-2 whitespace-nowrap">
                                            <span className="text-accent-green">➜</span>
                                            <span className="text-accent-cyan">~</span>
                                            <span
                                                className="type-cmd text-text-primary"
                                                style={
                                                    {
                                                        "--chars": line.command.length,
                                                        "--delay": `${line.delay}ms`,
                                                    } as CSSProperties
                                                }
                                            >
                                                {line.command}
                                            </span>
                                        </div>
                                        <p
                                            className={`type-out pl-6 text-[13px] ${
                                                line.highlight ? "text-accent-green" : "text-text-secondary"
                                            }`}
                                            style={{ "--out-delay": `${line.outDelay}ms` } as CSSProperties}
                                        >
                                            {line.output}
                                        </p>
                                    </div>
                                ))}
                                <div
                                    className="type-out flex items-center gap-2"
                                    style={{ "--out-delay": `${lastOut + 400}ms` } as CSSProperties}
                                >
                                    <span className="text-accent-green">➜</span>
                                    <span className="text-accent-cyan">~</span>
                                    <span className="cursor-blink text-accent-cyan">▋</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
