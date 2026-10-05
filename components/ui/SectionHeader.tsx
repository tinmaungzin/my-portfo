import Reveal from "./Reveal";

interface SectionHeaderProps {
    comment: string;
    title: string;
    subtitle?: string;
}

const SectionHeader = ({ comment, title, subtitle }: SectionHeaderProps) => (
    <Reveal className="mb-12 md:mb-16 max-w-2xl">
        <p className="section-comment mb-3">{`// ${comment}`}</p>
        <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight text-text-primary text-balance leading-tight">
            {title}
        </h2>
        {subtitle && (
            <p className="text-text-secondary mt-4 text-base md:text-lg leading-relaxed text-pretty">{subtitle}</p>
        )}
    </Reveal>
);

export default SectionHeader;
