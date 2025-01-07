import React from 'react';
import ProjectCard from './ui/ProjectCard';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Built using React and Firebase with a focus on team productivity.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A weather forecasting application that provides real-time weather data and forecasts using the OpenWeather API.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React", "TypeScript", "OpenWeather API"],
    githubLink: "#",
    liveLink: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}