import React, { useState } from "react";
import { personalInfo } from "../Data/portfolio";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/${personalInfo.whatsapp.replace("+923294509525", "")}?text=${encodeURIComponent(
      `Hello Tayyaba,\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
        Get In Touch
      </h2>
      <div className="bg-slate-800/80 border border-teal-500/30 rounded-2xl p-8 shadow-xl">
        <p className="text-slate-300 mb-6 text-center">
          Have a project in mind or want to hire me? Fill out the form below to send a message directly to my WhatsApp!
        </p>

        <form onSubmit={handleWhatsAppSubmit} className="space-y-4 mb-8">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:border-teal-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:border-teal-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Your Message</label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:border-teal-400 outline-none resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full gradient-btn font-semibold py-3 rounded-xl shadow-lg transition"
          >
            💬 Send Message via WhatsApp
          </button>
        </form>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-teal-500/40 hover:border-pink-500 text-teal-300 hover:text-pink-300 px-6 py-3 rounded-xl font-semibold transition text-center"
          >
            GitHub Profile
          </a>
          <a
            href="https://www.getdustify.com"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-pink-500/40 hover:border-teal-500 text-pink-300 hover:text-teal-300 px-6 py-3 rounded-xl font-semibold transition text-center"
          >
            GetDustify Live Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
