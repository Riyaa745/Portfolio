import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
    {
        title: "Personal Portfolio Website",
        description: "A portfolio built using Next.js and Tailwind CSS to showcase skills and projects.",
        github: "https://github.com/Riyaa745/Portfolio",
        preview: "#",
    },
    {
        title: "Codeware IT Website",
        description: "A business website built with Next.js and Tailwind CSS.",
        github: "https://github.com/DeepakSingh2003/codewareIT",
        preview: "https://codewareit.in/",
    },
    {
        title: "Music Web Application",
        description: "A music streaming app developed using React and Tailwind CSS.",
        github: "https://github.com/Riyaa745/Spotify-Cone",
        preview: "https://dcmusic.netlify.app",
    },
    {
        title: "E-commerce Platform",
        description: "A full-stack MERN e-commerce platform with payment integration.",
        github: "https://github.com/Riyaa745/EccomerceProject",
        preview: "https://ecommerce05.netlify.app",
    },
];

const Projects = () => {
    return (
        <div id="project" className="py-6 sm:py-10 px-4 border-b-1 border-gray-600 ">
            <div className="mb-6 sm:mb-8">
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">Projects</h2>
                <div className="flex items-center">
                    <div className="w-2 h-2 border-2 border-white rounded-full"></div>
                    <div className="ml-2 w-8 sm:w-12 border-t-2 border-white"></div>
                </div>
            </div>
            {/* Grid Layout with Two Cards in Each Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 shadow-2xl p-6 sm:p-8">
                        <h3 className="text-lg sm:text-xl font-semibold text-blue-500">{project.title}</h3>
                        <p className="text-white text-sm sm:text-md mt-2">{project.description}</p>
                        <div className="mt-4 flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
                            <a
                                href={project.github}
                                target="_blank"
                                className="flex items-center justify-center sm:justify-start px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 transition"
                            >
                                <FaGithub className="mr-2" /> GitHub
                            </a>
                            <a
                                href={project.preview}
                                target="_blank"
                                className="flex items-center justify-center sm:justify-start px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                            >
                                <FiExternalLink className="mr-2" /> Preview
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
