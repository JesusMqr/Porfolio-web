/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { GitHubIcon } from "../../public/icons/GitHubIcon";
import { WebIcon } from "../../public/icons/WebIcon";

export function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      className="cursor-pointer bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="p-4">
        <img
          src={project.thumbnailUrl || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover  rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2 text-cyan-400">{project.title}</h3>
        <p className="text-sm text-slate-300 mb-2">{project.status}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="bg-slate-600 text-cyan-300 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-slate-600 text-slate-300 text-xs px-2 py-1 rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <div className="flex gap-2 mt-3">
          {
            project.repoUrl ? <button className="flex-1 inline-flex items-center justify-center bg-slate-600 text-cyan-300 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900
                          px-4 py-2 rounded-lg transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.repoUrl, "_blank")
              }}>
              <GitHubIcon />
              Repositorio
            </button> : null
          }
          {
            project.deployedUrl ? <button className="flex-1 inline-flex items-center justify-center bg-slate-600 text-cyan-300 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900
                          px-4 py-2 rounded-lg transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.deployedUrl, "_blank")
              }}>
              <WebIcon />
              App
            </button> : null
          }
        </div>
      </div>
    </motion.div>
  );
}
