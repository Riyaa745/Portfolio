import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 py-10 ">
            <div className="container mx-auto text-center">
                {/* Social Icons */}
                <div className="flex space-x-6 my-4 justify-center">
                    <a
                        href="https://www.linkedin.com/in/riya-sainwal-40ba1724b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 text-2xl bg-gray-900 shadow-2xl p-2"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/Riyaa745"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 text-2xl bg-gray-900 shadow-2xl p-2"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="mailto:your-riyasainwal123@gmail.com"
                        className="text-gray-400 hover:text-green-400 text-2xl bg-gray-900 shadow-2xl p-2"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                {/* Footer Links */}
                <div className="flex justify-center space-x-4 text-gray-400 text-md mb-4 font-semibold">
                    <a href="#about" className="hover:text-white">
                        About
                    </a>
                    <span>|</span>
                    <a href="#project" className="hover:text-white">
                        Project
                    </a>
                    <span>|</span>
                    <a href="#skill" className="hover:text-white">
                        Skill
                    </a>
                    <span>|</span>
                    <a href="tel:+91 7453851791" className="hover:text-white">
                        Contact
                    </a>
                </div>


                {/* Scroll to Top Icon */}
                <div className="mt-6 ml-[108%]">
                    <a
                        href="#"
                        className="text-green-400 text-4xl hover:text-white"
                        aria-label="Scroll to top"
                    >
                        ⬆
                    </a>
                </div>
            </div>
        </footer>
    );
}
