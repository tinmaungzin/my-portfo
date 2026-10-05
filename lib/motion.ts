import { useEffect, useState } from "react";

export type MotionTier = "full" | "lite" | "reduced";

const readTier = (): MotionTier => {
    const value = document.documentElement.getAttribute("data-motion");
    return value === "full" || value === "lite" ? value : "reduced";
};

/**
 * Motion tier chosen by the boot script in _document.tsx.
 * It updates live if the connection or the OS motion setting changes.
 * Starts as "reduced" so the server render and first client render match.
 */
export const useMotionTier = (): MotionTier => {
    const [tier, setTier] = useState<MotionTier>("reduced");

    useEffect(() => {
        setTier(readTier());
        const observer = new MutationObserver(() => setTier(readTier()));
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });
        return () => observer.disconnect();
    }, []);

    return tier;
};
