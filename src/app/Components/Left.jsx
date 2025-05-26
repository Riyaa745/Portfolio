import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Left() {
    return (
        <>
            <div className="w-full sm:w-1/4 sm:pl-10 bg-gray-800 sm:fixed flex flex-col items-center">
                <div className="bg-gray-800 shadow-2xl w-full sm:ml-10">

                    {/* Profile Image (Responsive & Fixed Top Cropping) */}
                    <div className="h-60 sm:h-96 w-full overflow-hidden">
                        <img
                            src="/riya.jpg"
                            alt="Riya Sainwal"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    <h1 className="text-2xl sm:text-4xl font-bold mt-4 text-center text-green-400 pt-2 sm:pt-5">
                        Riya Sainwal
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-400 text-center py-2 sm:py-4">
                        Front-End Developer
                    </p>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4 justify-center">
                        <a
                            href="https://www.linkedin.com/in/riya-sainwal-40ba1724b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-400 text-xl sm:text-2xl bg-gray-900 shadow-2xl p-1 sm:p-2"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/Riyaa745"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-400 text-xl sm:text-2xl bg-gray-900 shadow-2xl p-1 sm:p-2"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:riyasainwal123@gmail.com"
                            className="text-gray-400 hover:text-green-400 text-xl sm:text-2xl bg-gray-900 shadow-2xl p-1 sm:p-2"
                        >
                            <FaEnvelope />
                        </a>
                    </div>

                    {/* Buttons: Resume and Contact */}
                    <div className="flex items-center mt-10 sm:mt-16 border-t border-gray-600">
                        <a
                            href="https://drive.google.com/file/d/1za5XzS8lJzjDzWSoSeqwDPThP10OMfYf/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2 text-center py-2 sm:py-4 text-white hover:bg-blue-500 cursor-pointer border-r border-gray-600"
                        >
                            View Resume
                        </a>
                        <a
                            href="#contact"
                            className="w-1/2 text-center py-2 sm:py-4 text-white hover:bg-blue-500 cursor-pointer"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
