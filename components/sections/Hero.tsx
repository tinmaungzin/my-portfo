import Image from "next/image";
import { FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { personalInfo } from "@/lib/data";

const Hero = () => (
    <section id="top" aria-label="Introduction" className="pt-14">
        <div className="mx-auto max-w-content px-5 pb-8 pt-10 sm:px-8 md:pt-14">
            <div className="enter grid items-center gap-6 sm:grid-cols-[96px_1fr] lg:grid-cols-[112px_1fr_auto]">
                <Image
                    src={personalInfo.profileImage}
                    alt={`Photo of ${personalInfo.name}`}
                    width={224}
                    height={224}
                    priority
                    className="h-24 w-24 rounded-xl border border-line object-cover lg:h-28 lg:w-28"
                />
                <div>
                    <h1 className="text-[30px] font-semibold leading-tight tracking-[-0.01em] sm:text-[36px]">
                        {personalInfo.name}
                    </h1>
                    <p className="mt-1 text-[16px] text-ink-2 sm:text-[17px]">
                        {personalInfo.role} · {personalInfo.yearsExperience} years in software · Bangkok
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <a href={`mailto:${personalInfo.email}`} className="btn btn-ink">
                            <FiMail aria-hidden /> Email me
                        </a>
                        <a href={personalInfo.resumePath} target="_blank" rel="noopener" className="btn btn-line">
                            <FiDownload aria-hidden /> Résumé (PDF)
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn border border-line bg-card"
                            aria-label="LinkedIn (opens in a new tab)"
                        >
                            <FaLinkedin aria-hidden />
                        </a>
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn border border-line bg-card"
                            aria-label="GitHub (opens in a new tab)"
                        >
                            <FaGithub aria-hidden />
                        </a>
                    </div>
                </div>
                <p className="card inline-flex items-center gap-2.5 self-start justify-self-start px-3.5 py-2.5 text-[13.5px] sm:col-span-2 lg:col-span-1 lg:self-center">
                    <span className="pulse-dot shrink-0" aria-hidden />
                    {personalInfo.availability}
                </p>
            </div>
        </div>
    </section>
);

export default Hero;
