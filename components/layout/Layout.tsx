"use client";

import { ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Navbar";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="min-h-screen bg-bg-primary relative">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-orange z-50 origin-left"
                style={{ scaleX }}
            />

            {/* Floating gradient orbs (background decoration) */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[color:var(--accent-cyan)] opacity-10 rounded-full blur-3xl animate-float" />
                <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[color:var(--accent-purple)] opacity-10 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[color:var(--accent-orange)] opacity-10 rounded-full blur-3xl animate-float" />
            </div>

            <Navbar />

            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
};

export default Layout;
