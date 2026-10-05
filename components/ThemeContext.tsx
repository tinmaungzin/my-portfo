"use client";

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";
import { flushSync } from "react-dom";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    /** Pass the click position to start the circular reveal from there */
    toggleTheme: (origin?: { x: number; y: number }) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

type ViewTransitionDocument = Document & {
    startViewTransition?: (update: () => void) => unknown;
};

const applyTheme = (theme: Theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
        localStorage.setItem("theme", theme);
    } catch {
        // Private mode or blocked storage: the theme still applies for this visit
    }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("dark");

    // The boot script in _document.tsx already set data-theme before paint
    useEffect(() => {
        setTheme(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");
    }, []);

    const toggleTheme = useCallback(
        (origin?: { x: number; y: number }) => {
            const next: Theme = theme === "dark" ? "light" : "dark";
            const doc = document as ViewTransitionDocument;
            const root = document.documentElement;
            const canAnimate = root.getAttribute("data-motion") === "full" && typeof doc.startViewTransition === "function";

            if (!canAnimate) {
                applyTheme(next);
                setTheme(next);
                return;
            }

            const x = origin?.x ?? window.innerWidth / 2;
            const y = origin?.y ?? 0;
            const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
            root.style.setProperty("--vt-x", `${x}px`);
            root.style.setProperty("--vt-y", `${y}px`);
            root.style.setProperty("--vt-r", `${radius}px`);

            doc.startViewTransition!(() => {
                applyTheme(next);
                flushSync(() => setTheme(next));
            });
        },
        [theme]
    );

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
