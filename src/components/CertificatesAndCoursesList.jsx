/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {ExternalLinkIcon} from '../../public/icons/ExternallinkIcon'
import {CertificateIcon} from '../../public/icons/CertificateIcon'

export function CertificatesAndCoursesList({ entries }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-cyan-300">Certificados y Cursos</h3>
      <ul className="space-y-2">
        {entries.map((entry) => (
          <motion.li
            key={entry.title}
            className="flex items-center justify-between p-2 bg-slate-700 rounded"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center text-white">
                <CertificateIcon/>
                <span className="w-5 h-5 mr-2 sr-only text-cyan-400">Icono award</span>

              <span className="text-slate-100">
                {entry.title} - {entry.institution}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-slate-400 mr-2">{entry.date}</span>
              {entry.certificateImageUrl && (
                <button
                  className="bg-slate-700 text-sm px-3 py-1 rounded border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                  onClick={() => setSelectedCertificate(entry)}
                >
                  Ver
                </button>
              )}
            </div>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              className="bg-slate-800 text-slate-100 rounded-lg w-full max-w-2xl mx-auto p-6"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">{selectedCertificate.title}</h2>
              {selectedCertificate.certificateImageUrl && (
                <div className="relative w-full aspect-[4/3]">
                  <img
                    src={selectedCertificate.certificateImageUrl}
                    alt={`Certificado de ${selectedCertificate.title}`}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              )}
              <div className="mt-4 flex justify-between items-center">
                <span className="text-slate-300">{selectedCertificate.institution}</span>
                <span className="text-slate-300">{selectedCertificate.date}</span>
              </div>
              {selectedCertificate.certificateImageUrl && (
                <button
                  className="mt-4 bg-cyan-500 text-slate-900 px-4 py-2 rounded hover:bg-cyan-600 flex items-center"
                  onClick={() => window.open(selectedCertificate.certificateImageUrl, "_blank")}
                >
                  {
                    <>
                    <ExternalLinkIcon/>
                    <span className="sr-only">Icono external link</span>
                    </>
                    
                  }
                  Ver certificado completo
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
