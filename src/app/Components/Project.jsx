import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
    {
        title: "Personal Portfolio Website",
        description: "A portfolio built using Next.js and Tailwind CSS to showcase skills and projects.",
        github: "#",
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
        preview: "#",
    },
    {
        title: "E-commerce Platform",
        description: "A full-stack MERN e-commerce platform with payment integration.",
        github: "https://github.com/Riyaa745/EccomerceProject",
        preview: "#",
    },
];

const Projects = () => {
    return (
        <div id="project" className="py-10 ">
            <h2 className="text-3xl font-bold text-gray-200 mb-8 flex items-center">
                Projects
            </h2>

            {/* Grid Layout with Two Cards in Each Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 shadow-2xl p-10">
                        <h3 className="text-xl font-semibold text-blue-500">{project.title}</h3>
                        <p className="text-white mt-2">{project.description}</p>
                        <div className="mt-4 flex space-x-3">
                            <a href={project.github} target="_blank" className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 transition">
                                <FaGithub className="mr-2" /> GitHub
                            </a>
                            <a href={project.preview} target="_blank" className="flex items-center px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
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
