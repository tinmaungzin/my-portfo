"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaLine } from "react-icons/fa6";
import { IoMailOpenSharp, IoDocumentText } from "react-icons/io5";
import { personalInfo, skills } from "@/lib/data";

const commands = [
    { command: "whoami", output: personalInfo.name },
    { command: "cat role.txt", output: personalInfo.role },
    { command: "echo $EXPERIENCE", output: `${personalInfo.yearsExperience}+ years of experience` },
    { command: "head -3 skills.txt", output: skills.slice(0, 5).map(s => s.name).join(", ") + "..." },
];

const Hero = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [commandIndex, setCommandIndex] = useState(0);

    useEffect(() => {
        const currentCommand = commands[commandIndex];
        if (!currentCommand) return;

        const fullText = currentCommand.command;
        let charIndex = 0;

        const typingInterval = setInterval(() => {
            if (charIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    if (commandIndex < commands.length - 1) {
                        setCommandIndex(prev => prev + 1);
                    }
                }, 2000);
            }
        }, 80);

        return () => clearInterval(typingInterval);
    }, [commandIndex]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <section id="about" className="min-h-screen flex items-center pt-20 pb-10 px-6">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                    {/* Left side - Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-2 flex flex-col"
                    >
                        <div className="terminal shadow-2xl flex-1">
                            <div className="terminal-header">
                                <div className="terminal-dot terminal-dot-red" />
                                <div className="terminal-dot terminal-dot-yellow" />
                                <div className="terminal-dot terminal-dot-green" />
                                <span className="ml-4 text-text-muted text-xs font-mono">
                                    ~/portfolio — zsh
                                </span>
                            </div>
                            <div className="terminal-body space-y-4">
                                {commands.slice(0, commandIndex + 1).map((cmd, idx) => (
                                    <div key={idx}>
                                        <div className="flex items-center gap-2">
                                            <span className="text-accent-green">➜</span>
                                            <span className="text-accent-cyan">~</span>
                                            <span className="text-text-primary">
                                                {idx === commandIndex ? displayedText : cmd.command}
                                                {idx === commandIndex && showCursor && (
                                                    <span className="text-accent-cyan">▋</span>
                                                )}
                                            </span>
                                        </div>
                                        {(idx < commandIndex || displayedText === cmd.command) && (
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="text-text-secondary ml-6 mt-1"
                                            >
                                                {cmd.output}
                                            </motion.p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Unified Action Bar - Social + Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap items-center gap-3 mt-6"
                        >
                            {/* Social Links */}
                            <Link
                                href={personalInfo.github}
                                target="_blank"
                                className="p-2.5 rounded-lg bg-glass-bg text-text-secondary hover:text-accent-cyan transition-colors"
                                title="GitHub"
                            >
                                <FaGithub size={20} />
                            </Link>
                            <Link
                                href={personalInfo.linkedin}
                                target="_blank"
                                className="p-2.5 rounded-lg bg-glass-bg text-text-secondary hover:text-accent-blue transition-colors"
                                title="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </Link>
                            <Link
                                href="https://line.me/ti/p/m7okkh6R6_"
                                target="_blank"
                                className="p-2.5 rounded-lg bg-glass-bg text-text-secondary hover:text-accent-green transition-colors"
                                title="LINE"
                            >
                                <FaLine size={20} />
                            </Link>

                            {/* Divider - Hidden on very small screens if needed, or keep as is since we wrap */}
                            <div className="hidden sm:block w-px h-6 bg-glass-border mx-2" />

                            {/* Inline Stats */}
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="text-sm text-text-muted whitespace-nowrap">
                                    <span className="text-accent-cyan font-mono font-semibold">{personalInfo.yearsExperience}+</span> yrs
                                </span>
                                <span className="text-text-muted/50 hidden sm:inline">•</span>
                                <span className="text-sm text-text-muted whitespace-nowrap">
                                    <span className="text-accent-green font-mono font-semibold">4</span> companies
                                </span>
                                <span className="text-text-muted/50 hidden sm:inline">•</span>
                                <span className="text-sm text-text-muted whitespace-nowrap">
                                    <span className="text-accent-purple font-mono font-semibold">10+</span> projects
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Profile */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="order-1 lg:order-1 flex flex-col items-center text-center"
                    >
                        {/* Profile Image - Cut Corners Design */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative mb-8"
                        >
                            {/* Gradient border container */}
                            <div
                                className="w-52 h-52 md:w-60 md:h-60 p-[3px] relative"
                                style={{
                                    clipPath: 'polygon(0 15%, 15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
                                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple), var(--accent-blue))',
                                }}
                            >
                                <div
                                    className="w-full h-full relative overflow-hidden bg-bg-primary"
                                    style={{
                                        clipPath: 'polygon(0 15%, 15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
                                    }}
                                >
                                    <Image
                                        src={personalInfo.profileImage}
                                        alt={personalInfo.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                            {/* Corner accents */}
                            <div className="absolute top-0 left-[15%] w-8 h-[3px] bg-accent-cyan shadow-glow-cyan" />
                            <div className="absolute top-[15%] left-0 w-[3px] h-8 bg-accent-cyan shadow-glow-cyan" />
                            <div className="absolute bottom-0 right-[15%] w-8 h-[3px] bg-accent-purple shadow-glow-purple" />
                            <div className="absolute bottom-[15%] right-0 w-[3px] h-8 bg-accent-purple shadow-glow-purple" />
                        </motion.div>

                        {/* Name & Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        >
                            <span className="text-gradient">{personalInfo.name}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-text-secondary mb-6 font-mono"
                        >
                            {"<"}<span className="text-accent-orange">{personalInfo.role}</span>{" />"}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-text-muted max-w-md text-sm leading-relaxed"
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        {/* Resume Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-6"
                        >
                            <Link
                                href={personalInfo.resumePath}
                                target="_blank"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
                            >
                                <IoDocumentText size={18} />
                                Download Resume
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bio Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 lg:mt-24 max-w-3xl mx-auto"
                >
                    <p className="section-comment">{"// about me"}</p>
                    <p className="text-text-secondary leading-relaxed text-center lg:text-left">
                        {personalInfo.bio}
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
                        <span className="tech-badge">
                            📍 {personalInfo.location}
                        </span>
                        <span className="tech-badge">
                            🎓 {personalInfo.education.degree.split(" ").slice(0, 3).join(" ")}
                        </span>
                        <span className="tech-badge">
                            🏫 {personalInfo.education.university}
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
