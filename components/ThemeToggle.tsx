"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative p-2 rounded-lg bg-glass-bg border border-glass-border hover:border-accent-cyan/50 transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {theme === "dark" ? (
                    <FiMoon className="w-4 h-4 text-accent-purple" />
                ) : (
                    <FiSun className="w-4 h-4 text-accent-orange" />
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
