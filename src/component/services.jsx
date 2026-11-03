import React from "react";
import { servicesData } from "../Data/portfolio";

const Services = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
        My Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="bg-slate-800/80 border border-slate-700 hover:border-pink-500/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <div className="w-12 h-12 bg-teal-500/20 text-teal-300 rounded-lg flex items-center justify-center font-bold text-xl mb-4 border border-teal-500/40">
              0{index + 1}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-pink-300">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
