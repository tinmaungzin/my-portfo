"use client";

import { ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return (
        <div className="min-h-screen relative">
            {/* Scroll progress */}
            <motion.div
                className="motion-only fixed top-0 inset-x-0 h-0.5 z-[55] origin-left bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-orange"
                style={{ scaleX }}
                aria-hidden
            />

            {/* Ambient light, decorative and only on capable devices */}
            <div className="motion-only fixed inset-0 overflow-hidden pointer-events-none -z-0" aria-hidden>
                <div className="orb animate-float -top-32 -right-24 w-[28rem] h-[28rem] bg-[color:var(--accent-cyan)]" />
                <div className="orb animate-float-delayed top-[40%] -left-40 w-[26rem] h-[26rem] bg-[color:var(--accent-purple)]" />
            </div>

            <Navbar />

            <main id="main" className="relative z-10">
                {children}
            </main>
        </div>
    );
};

export default Layout;
