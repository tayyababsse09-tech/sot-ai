import React from "react";
import { skillsData } from "../Data/portfolio";

const Skills = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-200 font-medium flex items-center gap-2">
                <span>{skill.icon}</span> {skill.name}
              </span>
              <span className="text-pink-400 text-sm font-semibold">{skill.level}</span>
            </div>
            <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden">
              <div 
                className="gradient-btn h-full rounded-full transition-all duration-500" 
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
