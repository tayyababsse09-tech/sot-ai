import React from "react";
import { personalInfo } from "../Data/portfolio";

const Navbar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "cv", label: "CV / Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-teal-500/30 px-6 py-4 flex flex-wrap justify-between items-center shadow-lg">
      <div 
        onClick={() => setActiveTab("home")} 
        className="cursor-pointer text-2xl font-bold gradient-text"
      >
        {personalInfo.name}.dev
      </div>

      <div className="flex gap-2 sm:gap-4 overflow-x-auto my-2 sm:my-0">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === item.id
                ? "gradient-btn shadow-md shadow-pink-500/20"
                : "text-slate-300 hover:text-teal-300 hover:bg-slate-800"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
