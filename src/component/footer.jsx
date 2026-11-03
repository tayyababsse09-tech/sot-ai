import React from "react";
import { personalInfo } from "../Data/portfolio";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-slate-400 text-sm mt-12">
      <p>© {currentYear} {personalInfo.name}. Designed with Teal & Pink Aesthetics.</p>
    </footer>
  );
};

export default Footer;
