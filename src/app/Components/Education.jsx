'use client';
import { FaArrowRight } from 'react-icons/fa';

const educationData = [

    {
        institution: 'SGRRU Dehradun, Uttarakhand',
        degree: 'Bachelor of Computer Application (BCA)',
        duration: '2021-2024',
    },
    {
        institution: "Colonel'S Academy",
        degree: 'Secondary (10th)',
        duration: '2018-2019',
    },
    {
        institution: "Colonel'S Academy",
        degree: 'Higher Secondary (12th)',
        duration: '2020-2021',
    },
];

export default function EducationSection() {
    return (
        <section className="bg-gray-900 text-gray-300 py-10  border-b-1 border-gray-600">
            <div className=" mb-6 sm:mb-8">
                <h2 className="text-white text-3xl font-bold mb-2">Education</h2>
                <div className="flex items-center">
                    <div className="w-2 h-2 border-2 border-white rounded-full"></div>
                    <div className="ml-2 w-12 border-t-2 border-white"></div>
                </div>
            </div>
            <div className="relative border-l border-gray-400 pl-6 space-y-6">
                {educationData.map((edu, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-5 top-2 text-gray-300">
                            <FaArrowRight />
                        </div>
                        <h3 className="text-xl font-semibold">{edu.institution}</h3>
                        <p className="text-gray-400">{edu.degree} </p>
                        <span className="block mt-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-lg w-fit text-sm">
                            Duration: {edu.duration}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
