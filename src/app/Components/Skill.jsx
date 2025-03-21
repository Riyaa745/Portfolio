'use client';

import React, { useState, useEffect } from "react";

const skills = [
  { name: "HTML", level: 95, color:"bg-blue-500" },
  { name: "CSS", level: 95, color: "bg-blue-500" },
  { name: "Python", level: 80, color: "bg-blue-500" },
  { name: "Javascript", level: 90, color: "bg-blue-500" },
  { name: "React", level: 90, color:"bg-blue-500" },
  { name: "Next JS", level: 80, color: "bg-blue-500" },
];

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState(
    skills.map(skill => ({ ...skill, animatedLevel: 0 }))
  );

  useEffect(() => {
    const timeouts = animatedSkills.map((skill, index) =>
      setTimeout(() => {
        setAnimatedSkills(prevSkills =>
          prevSkills.map((prevSkill, i) =>
            i === index ? { ...prevSkill, animatedLevel: skill.level } : prevSkill
          )
        );
      }, index * 300) // Staggered animation for each skill
    );

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  return (
    <div id="skill" className="text-white py-10 border-b border-gray-600">
      <h2 className="text-gray-200 text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {animatedSkills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.animatedLevel}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-in-out`}
                style={{ width: `${skill.animatedLevel}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;