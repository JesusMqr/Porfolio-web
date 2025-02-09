import { EducationCard } from "../EducationCard";
import { CertificatesAndCoursesList } from "../CertificatesAndCoursesList";

import educationData from "../../data/educationData.json";
import certificateData from "../../data/certificateData.json"


export function Education() {
  return (
    <section className="py-24 bg-slate-800" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">Educación y Certificaciones</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">Grados Académicos</h3>
            {educationData.map((degree) => (
              <EducationCard key={degree.title} entry={degree} />
            ))}
          </div>
          <CertificatesAndCoursesList entries={certificateData} />
        </div>
      </div>
    </section>
  );
}
