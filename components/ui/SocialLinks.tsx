import { FaGithub, FaLinkedin, FaLine } from "react-icons/fa6";
import { personalInfo } from "@/lib/data";

const links = [
    { href: personalInfo.github, label: "GitHub", Icon: FaGithub },
    { href: personalInfo.linkedin, label: "LinkedIn", Icon: FaLinkedin },
    { href: personalInfo.line, label: "LINE", Icon: FaLine },
];

const SocialLinks = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-2 ${className}`}>
        {links.map(({ href, label, Icon }) => (
            <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label={`${label} (opens in a new tab)`}
                title={label}
            >
                <Icon size={18} aria-hidden />
            </a>
        ))}
    </div>
);

export default SocialLinks;
