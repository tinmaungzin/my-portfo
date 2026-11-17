"use client";

import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { navLinks, personalInfo } from "@/lib/data";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // Close the menu on Escape
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <header className="nav-blur fixed inset-x-0 top-0 z-50 border-b border-line">
            <nav className="mx-auto flex h-14 max-w-content items-center justify-between px-5 sm:px-8" aria-label="Main">
                <a href="#top" className="text-[15px] font-semibold" aria-label={`${personalInfo.name}, back to top`}>
                    {personalInfo.name}
                </a>

                <div className="flex items-center gap-1">
                    <ul className="mr-3 hidden items-center gap-6 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="text-[14px] text-ink-2 transition-colors hover:text-ink">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                    <a
                        href={personalInfo.resumePath}
                        target="_blank"
                        rel="noopener"
                        className="btn btn-ink ml-1 hidden !px-3 !py-1.5 !text-[13px] sm:inline-flex"
                    >
                        <FiDownload aria-hidden /> Résumé
                    </a>
                    <button
                        type="button"
                        className="icon-btn md:hidden"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? "Close menu" : "Open menu"}
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? <FiX size={18} aria-hidden /> : <FiMenu size={18} aria-hidden />}
                    </button>
                </div>
            </nav>

            {open && (
                <div id="mobile-menu" className="border-t border-line px-5 pb-5 pt-1 md:hidden">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.href} className="border-b border-line">
                                <a href={link.href} onClick={() => setOpen(false)} className="block py-3 text-[16px]">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href={personalInfo.resumePath} target="_blank" rel="noopener" className="btn btn-ink mt-4">
                        <FiDownload aria-hidden /> Download résumé
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
