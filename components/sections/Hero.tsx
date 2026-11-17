import Image from "next/image";
import { FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { personalInfo } from "@/lib/data";

const Hero = () => (
    <section id="top" aria-label="Introduction" className="pt-14">
        <div className="mx-auto max-w-content px-5 pb-6 pt-7 sm:px-8 sm:pb-8 sm:pt-10 md:pt-14">
            <div className="enter grid grid-cols-[64px_1fr] items-center gap-x-4 gap-y-5 sm:grid-cols-[96px_1fr] sm:gap-x-6 lg:grid-cols-[112px_1fr_auto]">
                <Image
                    src={personalInfo.profileImage}
                    alt={`Photo of ${personalInfo.name}`}
                    width={224}
                    height={224}
                    priority
                    className="h-16 w-16 rounded-xl border border-line object-cover sm:row-span-2 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
                />
                <div className="min-w-0">
                    <h1 className="text-[24px] font-semibold leading-tight tracking-[-0.01em] sm:text-[36px]">
                        {personalInfo.name}
                    </h1>
                    <p className="mt-0.5 text-[14.5px] leading-snug text-ink-2 sm:mt-1 sm:text-[17px]">
                        {personalInfo.role}
                        <span className="hidden sm:inline"> · {personalInfo.yearsExperience} years in software</span> · Bangkok
                    </p>
                </div>

                <div className="col-span-2 flex flex-wrap gap-2 sm:col-span-1 sm:col-start-2 lg:row-start-2">
                    <a href={`mailto:${personalInfo.email}`} className="btn btn-ink flex-1 justify-center sm:flex-none">
                        <FiMail aria-hidden /> Email me
                    </a>
                    <a
                        href={personalInfo.resumePath}
                        target="_blank"
                        rel="noopener"
                        className="btn btn-line flex-1 justify-center sm:flex-none"
                    >
                        <FiDownload aria-hidden /> Résumé
                    </a>
                    <span className="flex gap-2">
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
                    </span>
                </div>

                <p className="card col-span-2 inline-flex items-center gap-2.5 justify-self-start px-3.5 py-2.5 text-[13.5px] sm:col-start-2 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:self-center">
                    <span className="pulse-dot shrink-0" aria-hidden />
                    {personalInfo.availability}
                </p>
            </div>
        </div>
    </section>
);

export default Hero;
