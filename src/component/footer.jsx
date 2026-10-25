import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 bg-slate-950 border-t border-slate-800/80 text-center text-slate-400">
      <p className="m-0">
        © {new Date().getFullYear()} Full Stack Developer. Built with React, Vite, Bootstrap & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;