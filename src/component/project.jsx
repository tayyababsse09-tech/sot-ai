import React, { useState } from "react";
import { projectsData } from "../Data/portfolio";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
        Featured Projects & Live Demo
      </h2>

      {/* Live Preview Window / Demo Frame for GetDustify */}
      <div className="mb-12 bg-slate-800/90 border border-teal-500/40 rounded-2xl p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="bg-teal-500/20 text-teal-300 text-xs px-3 py-1 rounded-full border border-teal-500/30">
              Live Website Preview 🌐
            </span>
            <h3 className="text-xl font-bold text-slate-100 mt-2">GetDustify Commercial Portal</h3>
          </div>
          <a
            href="https://www.getdustify.com"
            target="_blank"
            rel="noreferrer"
            className="gradient-btn text-xs sm:text-sm px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Open in New Tab ↗
          </a>
        </div>

        {/* Embedded Live Web View */}
        <div className="w-full h-[450px] bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-inner relative">
          <iframe
            src="https://www.getdustify.com"
            title="GetDustify Live Demo"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Interactive Project Slider */}
      <div className="bg-slate-800/90 border border-teal-500/30 rounded-2xl p-8 relative shadow-2xl mb-12">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-pink-500/20 text-pink-300 text-xs px-3 py-1 rounded-full border border-pink-500/30">
            Featured 0{projectsData[currentIndex].id}
          </span>
          <div className="flex gap-2">
            <button 
              onClick={prevProject}
              className="bg-slate-900 hover:bg-teal-600 text-white w-9 h-9 rounded-full flex items-center justify-center transition"
            >
              ❮
            </button>
            <button 
              onClick={nextProject}
              className="bg-slate-900 hover:bg-pink-600 text-white w-9 h-9 rounded-full flex items-center justify-center transition"
            >
              ❯
            </button>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-teal-300 mb-3">{projectsData[currentIndex].title}</h3>
        <p className="text-slate-300 mb-6">{projectsData[currentIndex].description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {projectsData[currentIndex].techStack.map((tech, i) => (
            <span key={i} className="bg-slate-900 text-teal-400 border border-teal-500/30 text-xs px-3 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={projectsData[currentIndex].liveLink}
            target="_blank"
            rel="noreferrer"
            className="gradient-btn px-5 py-2.5 rounded-lg text-sm font-semibold transition"
          >
            Live Demo 🔗
          </a>
          <a
            href={projectsData[currentIndex].githubLink}
            target="_blank"
            rel="noreferrer"
            className="border border-slate-600 hover:border-pink-400 text-slate-300 hover:text-pink-300 px-5 py-2.5 rounded-lg text-sm font-semibold transition"
          >
            GitHub Code
          </a>
        </div>
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-slate-800/60 border border-slate-700 p-5 rounded-xl flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-teal-300 mb-2">{project.title}</h4>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
            </div>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="text-pink-400 hover:text-pink-300 text-sm font-medium flex items-center gap-1"
            >
              Visit Project ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
