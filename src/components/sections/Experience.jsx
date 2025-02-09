import { ExperienceCard } from "../ExperienceCard";
import experienceData from '../../data/experienceData.json'

export const Experience = () => {
  return (
    <section className="py-24 bg-slate-900" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experienceData.map((experience,index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};
