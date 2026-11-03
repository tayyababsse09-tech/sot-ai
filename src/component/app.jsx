import React, { useState } from "react";
import Navbar from "./navbar";
import About from "./about";
import Services from "./services";
import Skills from "./skills";
import Project from "./project";
import Cv from "./cv";
import Contact from "./contact";
import Footer from "./footer";
import Testimonials from "./testimonials";
import Faq from "./faq";
import { personalInfo } from "../Data/portfolio";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "skills":
        return <Skills />;
      case "project":
        return <Project />;
      case "cv":
        return <Cv />;
      case "contact":
        return <Contact />;
      case "home":
      default:
        return (
          <div>
            {/* Hero Section */}
            <div className="max-w-5xl mx-auto px-6 py-16 text-center">
              <span className="bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs px-4 py-1.5 rounded-full font-medium inline-block mb-4">
                Welcome to my Portfolio ✨
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 gradient-text">
                Hi, I'm {personalInfo.name} 👋
              </h1>
              <p className="text-2xl text-teal-300 mb-6 font-medium">
                {personalInfo.title}
              </p>
              <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
                Fourth-semester Software Engineering student in Lahore, specializing in building high-performance web applications, interactive user interfaces, and commercial web portals like GetDustify.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={() => setActiveTab("project")}
                  className="gradient-btn font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-pink-500/25 transition"
                >
                  Explore Projects 🚀
                </button>
                <button
                  onClick={() => setActiveTab("cv")}
                  className="border border-teal-500/50 hover:border-pink-500 text-teal-300 hover:text-pink-300 font-semibold px-6 py-3 rounded-xl transition"
                >
                  View / Download CV 📄
                </button>
              </div>
            </div>

            {/* Quick Highlights Grid */}
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl shadow-xl">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="text-xl font-bold text-teal-300 mb-2">Frontend Stack</h3>
                <p className="text-slate-400 text-sm">Proficient in React.js, Tailwind CSS, Bootstrap 5, JavaScript, HTML5, and CSS3.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl shadow-xl">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-pink-300 mb-2">Live Deployments</h3>
                <p className="text-slate-400 text-sm">Successfully deployed and managed commercial projects like getdustify.com and Netlify apps.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl shadow-xl">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="text-xl font-bold text-teal-300 mb-2">Academic Record</h3>
                <p className="text-slate-400 text-sm">BS Software Engineering student with strong fundamentals in algorithms, UI engineering, and Git version control.</p>
              </div>
            </div>

            {/* Testimonials Section */}
            <Testimonials />

            {/* FAQ Section */}
            <Faq />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-900 text-slate-100">
      <div>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main>{renderContent()}</main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
