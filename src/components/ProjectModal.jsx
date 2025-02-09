/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "../../public/icons/CloseIcon";
import { GitHubIcon } from "../../public/icons/GitHubIcon";
import { WebIcon } from "../../public/icons/WebIcon";
export function ProjectModal({ project, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-slate-800 text-slate-100 rounded-lg w-full max-w-2xl mx-auto p-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-cyan-400">{project.title}</h2>
              <button onClick={onClose} className="text-slate-300 hover:text-cyan-400">
                <CloseIcon />
              </button>
            </div>
            <div>
              <span
                className={`px-2 py-1 text-sm rounded ${project.status === "Completado" ? "bg-cyan-600 text-slate-100" : "bg-cyan-600 text-slate-100"
                  }`}
              >
                {project.status}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-300">Descripción</h3>
              <p className="text-slate-300">{project.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-300">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="border border-cyan-500 text-cyan-300 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-300">Demostración</h3>
              {project.videoUrl ? (
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={project.videoUrl}
                    title={`Demostración de ${project.title}`}

                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-md"
                  />
                </div>
              ) : (
                <img
                  src={project.thumbnailUrl}
                  alt={`Thumbnail de ${project.title}`}
                  className="w-full h-full object-cover rounded-md"
                />
              )}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
