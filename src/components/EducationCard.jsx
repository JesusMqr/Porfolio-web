/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { SchollIcon } from "../../public/icons/SchoolIcon";

export function EducationCard({ entry }) {
  return (
    <motion.div
      className="bg-slate-700 text-slate-100 rounded-lg shadow-md mb-4 p-6 hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center">
         <SchollIcon/>
          <span className="w-6 h-6 mr-2 sr-only text-cyan-400">Icono</span>
          <div>
            <h3 className="text-lg font-bold text-cyan-400">{entry.title}</h3>
            <p className="text-sm text-slate-300">{entry.institution}</p>
          </div>
        </div>
        <span className="bg-cyan-600 text-slate-100 text-sm px-3 py-1 rounded-full">
          {entry.date}
        </span>
      </div>
      {entry.description && <p className="mt-4 text-slate-300">{entry.description}</p>}
      {entry.achievements && entry.achievements.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2 text-cyan-300">Logros:</h4>
          <ul className="list-disc pl-5">
            {entry.achievements.map((achievement, index) => (
              <li key={index} className="text-sm text-slate-300">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
