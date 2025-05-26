"use client";
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 ml-[-9px] py-6 sm:py-10 text-white">
            <div className="container mx-auto text-center px-4 sm:px-10">
                {/* Social Icons */}
                <div className="flex space-x-4 sm:space-x-6 my-4 justify-center">
                    <a
                        href="https://www.linkedin.com/in/riya-sainwal-40ba1724b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 text-xl sm:text-2xl bg-gray-900 shadow-2xl p-2"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/Riyaa745"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 text-xl sm:text-2xl bg-gray-900 shadow-2xl p-2"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="mailto:your-riyasainwal123@gmail.com"
                        className="text-gray-400 hover:text-green-400 text-xl sm:text-2xl bg-gray-900 shadow-2xl p-2"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                {/* Footer Links */}
                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400 text-lg sm:text-md mb-4 font-semibold">
                    <a href="#about" className="hover:text-white">
                        About
                    </a>
                    <span className="hidden sm:inline">|</span>
                    <a href="#project" className="hover:text-white">
                        Project
                    </a>
                    <span className="hidden sm:inline">|</span>
                    <a href="#skill" className="hover:text-white">
                        Skill
                    </a>
                    <span className="hidden sm:inline">|</span>
                    <a href="https://wa.me/917453851791" target="_blank" className="hover:text-white">
                        Contact
                    </a>
                </div>

                {/* Scroll to Top Icon */}
                <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="text-green-400 text-3xl sm:text-4xl hover:text-white focus:outline-none"
                        aria-label="Scroll to top"
                    >
                        ⬆
                    </button>
                </div>

            </div>
        </footer>
    );
}
