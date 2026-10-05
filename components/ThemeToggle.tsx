"use client";

import { useTheme } from "./ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const next = theme === "dark" ? "light" : "dark";

    return (
        <button
            type="button"
            onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
            }}
            className="icon-btn"
            aria-label={`Switch to ${next} theme`}
            title={`Switch to ${next} theme`}
        >
            {/* Both icons are rendered; CSS picks one, so the right icon shows before hydration */}
            <FiSun className="w-[18px] h-[18px] theme-icon-sun" aria-hidden />
            <FiMoon className="w-[18px] h-[18px] theme-icon-moon" aria-hidden />
        </button>
    );
};

export default ThemeToggle;
