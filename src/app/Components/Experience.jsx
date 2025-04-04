'use client';

import { FaArrowRight } from 'react-icons/fa';

const experienceData = [
  {
    title: 'Full Stack Developer',
    company: 'Codeware IT Pvt.Ltd',
    duration: 'Aug 2024-present',
    description:
      'At Codeware IT, I am responsible for developing and maintaining full-stack applications using the MERN stack (MongoDB, Express.js, React, and Node.js). My role includes designing RESTful APIs, implementing user authentication, optimizing database queries, and integrating third-party services. I work closely with frontend teams to build scalable and efficient applications that meet business requirements.',
  },
  {
    title: 'Front-end Developer',
    company: 'Edusprouts Pvt.Ltd',
    duration: '',
    description:
      'I am a passionate Front-End Developer at EduSprouts, specializing in building high-performance and visually appealing static websites. With expertise in Next.js and Tailwind CSS, I focus on creating responsive, user-friendly, and modern web interfaces that enhance user experience and engagement.',
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-gray-900 text-gray-300 py-10 border-b-1 border-gray-600">
      <div className=" mb-6 sm:mb-8">
        <h2 className="text-white text-3xl font-bold mb-2">Experience</h2>
        <div className="flex items-center">
          <div className="w-2 h-2 border-2 border-white rounded-full"></div>
          <div className="ml-2 w-12 border-t-2 border-white"></div>
        </div>
      </div>
      <div className="relative border-l border-gray-400 pl-6 space-y-6">
        {experienceData.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-5 top-2 text-gray-300">
              <FaArrowRight />
            </div>
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-400">{exp.company} | {exp.duration}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}