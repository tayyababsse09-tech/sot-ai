import React from "react";
import { personalInfo } from "../Data/portfolio";

const Cv = () => {
  const handleDownloadCV = () => {
    const cvContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tayyaba - Frontend Developer CV</title>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; color: #f8fafc; padding: 40px; }
    .container { max-width: 800px; background: #1e293b; padding: 40px; border-radius: 12px; border: 1px solid #0d9488; }
    h1 { color: #2dd4bf; margin-bottom: 5px; }
    h3 { color: #ec4899; }
    .section { margin-top: 25px; }
    ul { padding-left: 20px; }
    li { margin-bottom: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>${personalInfo.name}</h1>
    <p><strong>${personalInfo.title}</strong> | Email: ${personalInfo.email} | WhatsApp: ${personalInfo.whatsapp}</p>
    <p>GitHub: <a href="${personalInfo.github}" style="color: #2dd4bf;">${personalInfo.github}</a></p>
    
    <div class="section">
      <h3>Professional Summary</h3>
      <p>${personalInfo.about}</p>
    </div>

    <div class="section">
      <h3>Education</h3>
      <ul>
        <li><strong>BS Software Engineering</strong> - Semester 4 (University in Lahore, Pakistan)</li>
        <li><strong>Intermediate (ICS)</strong> - 706 Marks</li>
        <li><strong>Matriculation</strong> - 815 Marks</li>
      </ul>
    </div>

    <div class="section">
      <h3>Technical Skills</h3>
      <p>HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap 5, Git, GitHub, Netlify & Vercel Deployment.</p>
    </div>

    <div class="section">
      <h3>Projects</h3>
      <ul>
        <li><strong>GetDustify Portal:</strong> Commercial & domestic cleaning platform (getdustify.com)</li>
        <li><strong>Live Portfolio App:</strong> Responsive multi-page React application</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([cvContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Tayyaba_Frontend_Developer_CV.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-slate-800/90 border border-teal-500/30 rounded-2xl p-8 shadow-2xl text-center">
        <h2 className="text-3xl font-bold mb-4 gradient-text">
          My Professional CV & Resume
        </h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          You can preview my academic records, software engineering background, and technical skill set below or download the CV file directly to your system.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={handleDownloadCV}
            className="gradient-btn font-semibold px-6 py-3 rounded-xl shadow-lg transition"
          >
            📥 Download CV File (.html)
          </button>
        </div>

        {/* CV Preview Box */}
        <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-6 text-left space-y-6">
          <div>
            <h3 className="text-xl font-bold text-teal-300">{personalInfo.name}</h3>
            <p className="text-pink-400 text-sm font-medium">{personalInfo.title}</p>
          </div>

          <div>
            <h4 className="text-slate-200 font-semibold mb-1">🎓 Education Background</h4>
            <ul className="text-slate-400 text-sm list-disc pl-5 space-y-1">
              <li>BS Software Engineering (Semester 4 - Lahore, Pakistan)</li>
              <li>Intermediate (ICS) — 706 Marks</li>
              <li>Matriculation — 815 Marks</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-200 font-semibold mb-1">⚡ Core Competencies</h4>
            <p className="text-slate-400 text-sm">React.js, JavaScript, Tailwind CSS, Bootstrap 5, HTML5, CSS3, Git, GitHub, Version Control & Deployment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cv;