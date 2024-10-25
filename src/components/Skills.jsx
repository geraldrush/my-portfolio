import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // Correct import for faDatabase
import { faCloudscale } from '@fortawesome/free-brands-svg-icons';
import { faCloudversify } from '@fortawesome/free-brands-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const skills = [
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Node.js", icon: faNodeJs },
    { name: "Express", icon: faDatabase }, // You can choose an appropriate icon
    { name: "MySQL", icon: faDatabase },
    { name: "Google Cloud", icon: faSoundcloud } // Use an appropriate icon for UX Design
  ];

  return (
    <section id="skills" className="p-10 bg-purple-900">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap gap-4 content-center">
        {skills.map((skill, index) => (
          <div key={index} className="bg-orange-600 p-4 rounded flex items-center">
            <FontAwesomeIcon icon={skill.icon} className="mr-2" />
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
