import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from 'next/link';
export default function Left() {
    return (
        <>
            <div className="w-1/4 pl-10 bg-gray-800  fixed h-full flex flex-col items-center">
                <div className=" bg-gray-800 shadow-2xl h-full ml-10 w-full">
                    {/* Background image with Tailwind CSS and inline styling */}
                    <div
                        className="bg-center bg-cover bg-no-repeat h-96 w-full"
                        style={{ backgroundImage: "url('/riya.jpg')" }}
                    ></div>

                    <h1 className="text-4xl font-bold mt-4 text-center text-green-400 pt-5">Riya Sainwal</h1>
                    <p className="text-xl text-gray-400 text-center py-4">Front-End Developer</p>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4 justify-center">
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
                    {/* Buttons container styled as in the attached image */}
                    <div className="flex mt-16 border-t border-gray-600">
                        <Link
                            href="https://drive.google.com/file/d/1za5XzS8lJzjDzWSoSeqwDPThP10OMfYf/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2 text-center py-4  text-white hover:bg-blue-500 cursor-pointer border-r border-gray-600"
                        >
                            See My Resume
                        </Link>

                        <button className="w-1/2 text-center py-3 text-white hover:bg-blue-500 cursor-pointer">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
