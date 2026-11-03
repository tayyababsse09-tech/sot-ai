import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What technologies do you use for web development?",
      a: "I build responsive, modern web applications using React.js, Tailwind CSS, Bootstrap 5, JavaScript, HTML5, and CSS3."
    },
    {
      q: "What is GetDustify and what was your role?",
      a: "GetDustify (www.getdustify.com) is a commercial and domestic cleaning service platform where I designed and developed the frontend portal, user booking workflows, and brand aesthetics."
    },
    {
      q: "Are you available for freelance projects or full-time roles?",
      a: "Yes! Feel free to reach out via the Contact page or send a direct message through WhatsApp to discuss collaborations."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-800/80 border border-slate-700 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 font-semibold text-slate-200 flex justify-between items-center hover:bg-slate-800 transition"
            >
              <span>{faq.q}</span>
              <span className="text-pink-400 font-bold">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;