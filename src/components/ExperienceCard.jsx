/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { PinIcon } from "../../public/icons/PinIcon";

export function ExperienceCard({ experience }) {
  return (
    <motion.div
      className="bg-slate-800 text-slate-100 rounded-lg shadow-md mb-6 p-6 hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-cyan-400">{experience.title}</h3>
          <p className="text-lg text-slate-300">{experience.company}</p>
        </div>
        <span className="bg-cyan-600 text-slate-100 text-sm px-3 py-1 rounded-full">
          {experience.startDate} - {experience.endDate}
        </span>
      </div>
      <div className="flex items-center text-sm text-slate-400 mt-2">
        <PinIcon/>
        {experience.location}
      </div>
      <ul className="list-disc pl-5 mt-4 mb-4 text-slate-300">
        {experience.activities.map((activity, index) => (
          <li key={index} className="mb-1">
            {activity}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, index) => (
          <span key={index} className="border border-cyan-500 text-cyan-300 text-xs px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
