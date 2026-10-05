import { CSSProperties, ElementType, ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    as?: ElementType;
    delay?: number;
    className?: string;
    id?: string;
}

/**
 * Fades content in when it scrolls into view. The observer lives in the boot
 * script (_document.tsx), so this works before React hydrates, and content is
 * never hidden on slow connections or with reduced motion.
 */
const Reveal = ({ children, as: Tag = "div", delay = 0, className, id }: RevealProps) => (
    <Tag
        id={id}
        data-reveal=""
        className={className}
        style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
        // The boot script adds data-revealed before hydration
        suppressHydrationWarning
    >
        {children}
    </Tag>
);

export default Reveal;
