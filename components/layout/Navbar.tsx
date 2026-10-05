"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import ThemeToggle from "../ThemeToggle";
import SocialLinks from "../ui/SocialLinks";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        // Highlight the section that crosses the upper third of the viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-30% 0px -65% 0px" }
        );
        navLinks.forEach((link) => {
            const el = document.getElementById(link.href.slice(1));
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener("scroll", onScroll);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isMenuOpen]);

    const solid = isScrolled || isMenuOpen;

    return (
        <>
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-surface focus:text-text-primary focus:shadow-lg"
            >
                Skip to content
            </a>

            <header
                className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,padding] duration-300 border-b ${
                    solid ? "nav-blur border-glass-border py-2.5" : "border-transparent py-4"
                }`}
                // An open menu covers page content, so make it fully opaque for legibility
                style={isMenuOpen ? { background: "var(--bg-primary)" } : undefined}
            >
                <nav className="max-w-content mx-auto px-5 sm:px-6 flex items-center justify-between gap-4" aria-label="Main">
                    <a href="#top" className="font-mono text-sm md:text-[15px] shrink-0" aria-label="Tin Maung Zin, back to top">
                        <span className="text-accent-cyan">tmz</span>
                        <span className="text-text-muted">@</span>
                        <span className="text-accent-purple">portfolio</span>
                        <span className="text-text-muted">:~$</span>
                        <span className="cursor-blink text-accent-cyan ml-1" aria-hidden>
                            ▋
                        </span>
                    </a>

                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const active = activeSection === link.href.slice(1);
                            return (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        aria-current={active ? "true" : undefined}
                                        className={`relative block px-3 py-2 text-sm rounded-lg transition-colors ${
                                            active ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                                        }`}
                                    >
                                        {active && (
                                            <motion.span
                                                layoutId="nav-pill"
                                                className="absolute inset-0 rounded-lg bg-glass-bg border border-glass-border"
                                                transition={{ type: "spring", stiffness: 400, damping: 34 }}
                                            />
                                        )}
                                        <span className="relative">{link.name}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="hidden md:flex items-center gap-2">
                        <SocialLinks className="hidden lg:flex" />
                        <span className="hidden lg:block w-px h-6 bg-glass-border mx-1" aria-hidden />
                        <ThemeToggle />
                    </div>

                    <div className="flex md:hidden items-center gap-2">
                        <ThemeToggle />
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((open) => !open)}
                            className="icon-btn"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            <span className="relative block w-[18px] h-3" aria-hidden>
                                <span
                                    className={`absolute left-0 w-full h-0.5 rounded bg-current transition-transform duration-300 ${
                                        isMenuOpen ? "top-[5px] rotate-45" : "top-0"
                                    }`}
                                />
                                <span
                                    className={`absolute left-0 top-[5px] w-full h-0.5 rounded bg-current transition-opacity duration-200 ${
                                        isMenuOpen ? "opacity-0" : "opacity-100"
                                    }`}
                                />
                                <span
                                    className={`absolute left-0 w-full h-0.5 rounded bg-current transition-transform duration-300 ${
                                        isMenuOpen ? "top-[5px] -rotate-45" : "top-[10px]"
                                    }`}
                                />
                            </span>
                        </button>
                    </div>
                </nav>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="md:hidden overflow-hidden"
                        >
                            <ul className="max-w-content mx-auto px-5 pt-3 pb-5 flex flex-col">
                                {navLinks.map((link) => {
                                    const active = activeSection === link.href.slice(1);
                                    return (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={`flex items-center gap-3 py-3 text-base border-b border-glass-border ${
                                                    active ? "text-accent-cyan" : "text-text-secondary"
                                                }`}
                                            >
                                                <span className="font-mono text-accent-purple text-sm" aria-hidden>
                                                    {">"}
                                                </span>
                                                {link.name}
                                            </a>
                                        </li>
                                    );
                                })}
                                <li className="pt-4">
                                    <SocialLinks />
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Navbar;
