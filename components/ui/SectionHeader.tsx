import { ReactNode } from "react";

interface SectionHeaderProps {
    /** id of the heading, for aria-labelledby on the section */
    id: string;
    title: string;
    /** Small text on the right, e.g. a count */
    aside?: ReactNode;
}

const SectionHeader = ({ id, title, aside }: SectionHeaderProps) => (
    <div className="mb-4 flex items-baseline justify-between gap-4">
        <h2 id={id} className="label">
            {title}
        </h2>
        {aside && <p className="text-[13px] text-ink-3">{aside}</p>}
    </div>
);

export default SectionHeader;
