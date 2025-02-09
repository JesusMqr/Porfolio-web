import { useState } from "react";
import { ProjectCard } from "../ProjectCard";
import { ProjectModal } from "../ProjectModal";
import projects from '../../data/projectsData.json';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-24 bg-slate-800" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};
