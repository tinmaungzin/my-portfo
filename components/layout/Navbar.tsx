"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import { FaGithub, FaLinkedin, FaLine } from "react-icons/fa6";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navLinks.map(link => link.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "glass-card border-b border-glass-border py-3"
                    : "py-5 bg-transparent"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo / Terminal Prompt */}
                    <Link href="/" className="font-mono text-sm md:text-base">
                        <span className="text-accent-cyan">tmz</span>
                        <span className="text-text-muted">@</span>
                        <span className="text-accent-purple">portfolio</span>
                        <span className="text-text-muted">:~$ </span>
                        <span className="animate-pulse text-accent-cyan">▋</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className={`relative text-sm transition-colors duration-200 ${activeSection === link.href.slice(1)
                                    ? "text-accent-cyan"
                                    : "text-text-secondary hover:text-text-primary"
                                    }`}
                            >
                                {link.name}
                                {activeSection === link.href.slice(1) && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-cyan rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Social Links & Theme Toggle */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="https://github.com/tinmaungzin"
                            target="_blank"
                            className="text-[var(--text-secondary)] hover:text-accent-cyan transition-colors"
                        >
                            <FaGithub size={20} />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/tinmaungzin/"
                            target="_blank"
                            className="text-[var(--text-secondary)] hover:text-accent-blue transition-colors"
                        >
                            <FaLinkedin size={20} />
                        </Link>
                        <Link
                            href="https://line.me/ti/p/m7okkh6R6_"
                            target="_blank"
                            className="text-[var(--text-secondary)] hover:text-accent-green transition-colors"
                        >
                            <FaLine size={20} />
                        </Link>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                    >
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-5 h-0.5 bg-text-primary rounded"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-5 h-0.5 bg-text-primary rounded"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="w-5 h-0.5 bg-text-primary rounded"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-16 left-0 right-0 z-40 glass-card border-b border-glass-border md:hidden"
                    >
                        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.href)}
                                    className={`text-left text-sm py-2 transition-colors ${activeSection === link.href.slice(1)
                                        ? "text-accent-cyan"
                                        : "text-text-secondary"
                                        }`}
                                >
                                    <span className="text-accent-purple mr-2">{">"}</span>
                                    {link.name}
                                </button>
                            ))}
                            <div className="flex items-center gap-4 pt-2 border-t border-[var(--glass-border)]">
                                <Link
                                    href="https://github.com/tinmaungzin"
                                    target="_blank"
                                    className="text-[var(--text-secondary)] hover:text-accent-cyan transition-colors"
                                >
                                    <FaGithub size={20} />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/tinmaungzin/"
                                    target="_blank"
                                    className="text-[var(--text-secondary)] hover:text-accent-blue transition-colors"
                                >
                                    <FaLinkedin size={20} />
                                </Link>
                                <Link
                                    href="https://line.me/ti/p/m7okkh6R6_"
                                    target="_blank"
                                    className="text-[var(--text-secondary)] hover:text-accent-green transition-colors"
                                >
                                    <FaLine size={20} />
                                </Link>
                                <ThemeToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
