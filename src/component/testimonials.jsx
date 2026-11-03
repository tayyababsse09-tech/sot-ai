import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Ali Ahmed",
      role: "Client, GetDustify",
      comment: "Tayyaba built our commercial cleaning service portal with exceptional attention to detail, smooth booking layouts, and a very professional aesthetic.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 2,
      name: "Dr. Farhan",
      role: "Project Mentor",
      comment: "Her mastery of React.js, Tailwind, and clean component architecture makes her stand out as a top-tier frontend developer.",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
        Client & Mentor Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((rev) => (
          <div key={rev.id} className="bg-slate-800/80 border border-teal-500/30 rounded-2xl p-6 shadow-xl relative">
            <div className="text-xl mb-3">{rev.rating}</div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">"{rev.comment}"</p>
            <div>
              <h4 className="text-teal-300 font-bold">{rev.name}</h4>
              <span className="text-pink-400 text-xs">{rev.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;