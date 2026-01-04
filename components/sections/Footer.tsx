"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhone, FaPaperPlane } from "react-icons/fa6";
import { IoMailOpenSharp } from "react-icons/io5";
import { personalInfo } from "@/lib/data";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const currentYear = new Date().getFullYear();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Open mailto with the message
        window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    };

    return (
        <footer id="contact" className="py-20 px-6 border-t border-glass-border">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="section-comment mb-2">{"// get in touch"}</p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-gradient">Let&apos;s Connect</span>
                    </h2>
                    <p className="text-text-muted mt-4 max-w-md mx-auto">
                        Have a project in mind or just want to chat? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="terminal">
                            <div className="terminal-header">
                                <div className="terminal-dot terminal-dot-red" />
                                <div className="terminal-dot terminal-dot-yellow" />
                                <div className="terminal-dot terminal-dot-green" />
                                <span className="ml-4 text-text-muted text-xs font-mono">
                                    send-message.sh
                                </span>
                            </div>
                            <form onSubmit={handleSubmit} className="terminal-body space-y-4">
                                <div>
                                    <label className="text-accent-green text-sm block mb-2">
                                        $ your_email=
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        required
                                        className="w-full bg-glass-bg border border-glass-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-cyan/50 font-mono text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="text-accent-green text-sm block mb-2">
                                        $ message=
                                    </label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Hello, I'd like to talk about..."
                                        required
                                        rows={4}
                                        className="w-full bg-glass-bg border border-glass-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-cyan/50 font-mono text-sm resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-cyan text-black font-semibold rounded-lg hover:opacity-90 transition-opacity font-mono text-sm"
                                >
                                    <FaPaperPlane size={14} />
                                    ./send
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="glass-card p-6">
                            <h3 className="text-text-primary font-semibold mb-4">Quick Links</h3>
                            <div className="space-y-4">
                                <Link
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex items-center gap-4 text-text-secondary hover:text-accent-cyan transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                                        <IoMailOpenSharp className="text-accent-cyan" size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted">Email</p>
                                        <p className="text-sm">{personalInfo.email}</p>
                                    </div>
                                </Link>

                                <Link
                                    href={`tel:${personalInfo.phone}`}
                                    className="flex items-center gap-4 text-text-secondary hover:text-accent-green transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center group-hover:bg-accent-green/20 transition-colors">
                                        <FaPhone className="text-accent-green" size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted">Phone</p>
                                        <p className="text-sm">{personalInfo.phone}</p>
                                    </div>
                                </Link>

                                <Link
                                    href={personalInfo.github}
                                    target="_blank"
                                    className="flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-glass-border flex items-center justify-center group-hover:bg-glass-bg transition-colors">
                                        <FaGithub className="text-text-primary" size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted">GitHub</p>
                                        <p className="text-sm">@tinmaungzin</p>
                                    </div>
                                </Link>

                                <Link
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    className="flex items-center gap-4 text-text-secondary hover:text-accent-blue transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                                        <FaLinkedin className="text-accent-blue" size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted">LinkedIn</p>
                                        <p className="text-sm">/in/tinmaungzin</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="glass-card p-6">
                            <p className="text-text-muted text-sm">
                                Currently based in <span className="text-accent-orange">{personalInfo.location}</span>
                            </p>
                            <p className="text-text-muted text-xs mt-2">
                                Open to remote opportunities worldwide
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-8 border-t border-glass-border text-center"
                >
                    <p className="text-text-muted text-xs font-mono">
                        © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
