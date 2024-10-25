// src/components/Projects.js
import React from 'react';

const Projects = () => {
    const projects = [
        { title: "Project One", description: "A brief description of Project One.", link: "#" },
        { title: "Project Two", description: "A brief description of Project Two.", link: "#" },
        // Add more projects as needed
    ];

    return (
        <section id="projects" className="p-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 content-center">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} className="text-blue-400 hover:underline mt-4 inline-block">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
