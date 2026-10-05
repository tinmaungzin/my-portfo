"use client";

import { FormEvent, useState } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaPaperPlane } from "react-icons/fa6";
import { IoMailOpenSharp } from "react-icons/io5";
import { FiArrowUp, FiCheck, FiCopy } from "react-icons/fi";
import { personalInfo } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

const contactLinks = [
    {
        href: `tel:${personalInfo.phone}`,
        label: "Phone",
        value: personalInfo.phoneDisplay,
        Icon: FaPhone,
        color: "var(--accent-green)",
        external: false,
    },
    {
        href: personalInfo.linkedin,
        label: "LinkedIn",
        value: "/in/tinmaungzin",
        Icon: FaLinkedin,
        color: "var(--accent-blue)",
        external: true,
    },
    {
        href: personalInfo.github,
        label: "GitHub",
        value: "@tinmaungzin",
        Icon: FaGithub,
        color: "var(--text-primary)",
        external: true,
    },
];

const inputClass =
    "w-full rounded-lg px-4 py-3 bg-glass-bg border border-glass-border text-text-primary placeholder:text-text-muted font-mono text-sm transition-colors focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-[color:var(--accent-cyan)]/20";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [copied, setCopied] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent("Hello from your portfolio");
        const body = encodeURIComponent(`${message}\n\nFrom: ${email}`);
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(personalInfo.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${personalInfo.email}`;
        }
    };

    return (
        <footer id="contact" className="pt-20 md:pt-28 pb-10 border-t border-glass-border">
            <div className="max-w-content mx-auto px-5 sm:px-6">
                <SectionHeader
                    comment="get in touch"
                    title="Let's work together"
                    subtitle={`${personalInfo.availability} in web engineering, data and automation. Send a message or reach me directly.`}
                />

                <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                    <Reveal>
                        <div className="terminal">
                            <div className="terminal-header">
                                <span className="terminal-dot terminal-dot-red" />
                                <span className="terminal-dot terminal-dot-yellow" />
                                <span className="terminal-dot terminal-dot-green" />
                                <span className="ml-3 text-text-muted text-xs font-mono">send-message.sh</span>
                            </div>
                            <form onSubmit={handleSubmit} className="terminal-body space-y-5">
                                <div>
                                    <label htmlFor="contact-email" className="block mb-2 text-sm text-accent-green">
                                        $ your_email=
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        autoComplete="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        required
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block mb-2 text-sm text-accent-green">
                                        $ message=
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Hi Tin, I'd like to talk about..."
                                        required
                                        rows={5}
                                        className={`${inputClass} resize-y min-h-[120px]`}
                                    />
                                </div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <button type="submit" className="btn btn-primary font-mono">
                                        <FaPaperPlane size={14} aria-hidden />
                                        ./send
                                    </button>
                                    <span className="text-xs text-text-muted font-sans">Opens your email app</span>
                                </div>
                            </form>
                        </div>
                    </Reveal>

                    <div className="grid gap-4 content-start">
                        <Reveal delay={80}>
                            <div className="card p-5 sm:p-6">
                                <p className="text-xs uppercase tracking-wider text-text-muted">Email</p>
                                <div className="mt-2 flex items-center justify-between gap-3">
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="flex items-center gap-3 min-w-0 text-text-primary hover:text-accent-cyan transition-colors"
                                    >
                                        <IoMailOpenSharp className="shrink-0 text-accent-cyan" size={20} aria-hidden />
                                        <span className="truncate font-medium">{personalInfo.email}</span>
                                    </a>
                                    <button
                                        type="button"
                                        onClick={copyEmail}
                                        className="icon-btn shrink-0"
                                        aria-label={copied ? "Email copied" : "Copy email address"}
                                        title={copied ? "Copied" : "Copy"}
                                    >
                                        {copied ? <FiCheck className="text-accent-green" aria-hidden /> : <FiCopy aria-hidden />}
                                    </button>
                                </div>
                                <span className="sr-only" aria-live="polite">
                                    {copied ? "Email address copied to clipboard" : ""}
                                </span>
                            </div>
                        </Reveal>

                        <Reveal delay={140}>
                            <ul className="card divide-y divide-[color:var(--glass-border)]">
                                {contactLinks.map(({ href, label, value, Icon, color, external }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                            className="group flex items-center gap-4 px-5 sm:px-6 py-4 transition-colors hover:bg-glass-bg"
                                        >
                                            <span
                                                className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                                                style={{ color, background: `color-mix(in srgb, ${color} 12%, transparent)` }}
                                                aria-hidden
                                            >
                                                <Icon size={16} />
                                            </span>
                                            <span className="min-w-0">
                                                <span className="block text-xs text-text-muted">{label}</span>
                                                <span className="block text-sm text-text-primary group-hover:text-accent-cyan transition-colors truncate">
                                                    {value}
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-glass-border flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
                    <p className="font-mono">
                        © {new Date().getFullYear()} {personalInfo.name} · Built with Next.js and Tailwind CSS
                    </p>
                    <a href="#top" className="group inline-flex items-center gap-1.5 hover:text-text-primary transition-colors">
                        Back to top
                        <FiArrowUp
                            size={14}
                            aria-hidden
                            className="transition-transform duration-300 group-hover:-translate-y-0.5"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
