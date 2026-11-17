"use client";

import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy, FiDownload, FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLine, FaLinkedin } from "react-icons/fa6";
import { personalInfo } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

const links = [
    { label: "LinkedIn", detail: "linkedin.com/in/tinmaungzin", href: personalInfo.linkedin, Icon: FaLinkedin },
    { label: "GitHub", detail: "github.com/tinmaungzin", href: personalInfo.github, Icon: FaGithub },
    { label: "LINE", detail: "Add as a friend", href: personalInfo.line, Icon: FaLine },
];

const Footer = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(personalInfo.email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            window.location.href = `mailto:${personalInfo.email}`;
        }
    };

    return (
        <footer id="contact" aria-labelledby="contact-title" className="mx-auto max-w-content px-5 pb-10 pt-10 sm:px-8">
            <SectionHeader id="contact-title" title="Contact" />
            <Reveal className="grid gap-4 md:grid-cols-2">
                <div className="card p-6">
                    <p className="text-[16px] font-semibold">Hiring for an AI or automation role?</p>
                    <p className="mt-1 text-[14.5px] text-ink-2">
                        {personalInfo.availability}. Email is the fastest way to reach me.
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                        <a href={`mailto:${personalInfo.email}`} className="btn btn-ink">
                            <FiMail aria-hidden /> {personalInfo.email}
                        </a>
                        <button type="button" onClick={copyEmail} className="btn btn-line">
                            {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
                            {copied ? "Copied" : "Copy"}
                        </button>
                        <span className="sr-only" aria-live="polite">
                            {copied ? "Email address copied" : ""}
                        </span>
                    </div>
                    <p className="mt-5 flex items-center gap-2 text-[14px] text-ink-2">
                        <FiPhone aria-hidden className="text-ink-3" />
                        <a href={`tel:${personalInfo.phone}`} className="link-u text-ink">
                            {personalInfo.phoneDisplay}
                        </a>
                    </p>
                </div>

                <ul className="card divide-y divide-line text-[14.5px]">
                    {links.map(({ label, detail, href, Icon }) => (
                        <li key={label}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-paper"
                            >
                                <span className="flex items-center gap-3">
                                    <Icon aria-hidden className="text-ink-2" /> {label}
                                </span>
                                <span className="flex items-center gap-2 text-ink-3">
                                    <span className="hidden sm:inline">{detail}</span>
                                    <FiArrowUpRight aria-hidden className="group-hover:text-ink" />
                                    <span className="sr-only">(opens in a new tab)</span>
                                </span>
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href={personalInfo.resumePath}
                            target="_blank"
                            rel="noopener"
                            className="group flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-paper"
                        >
                            <span className="flex items-center gap-3">
                                <FiDownload aria-hidden className="text-ink-2" /> Résumé
                            </span>
                            <span className="text-ink-3">PDF, 2 pages</span>
                        </a>
                    </li>
                </ul>
            </Reveal>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-[13px] text-ink-3">
                <p>
                    © {new Date().getFullYear()} {personalInfo.name} · Bangkok, Thailand
                </p>
                <a href="#top" className="hover:text-ink">
                    Back to top ↑
                </a>
            </div>
        </footer>
    );
};

export default Footer;
