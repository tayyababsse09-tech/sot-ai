import React from "react";
import { personalInfo } from "../Data/portfolio";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-slate-800/80 border border-teal-500/30 rounded-2xl p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
        <h2 className="text-3xl font-bold mb-6 gradient-text">
          About Me
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          {personalInfo.about}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700">
            <span className="text-pink-400 font-semibold block mb-1">Name</span>
            <span className="text-slate-200">{personalInfo.name}</span>
          </div>
          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700">
            <span className="text-teal-400 font-semibold block mb-1">Role</span>
            <span className="text-slate-200">{personalInfo.title}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
