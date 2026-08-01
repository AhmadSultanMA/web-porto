import React from "react";
import { Mail, Phone, Github, Linkedin, Download } from "lucide-react";
import { cvPdf } from "../data/portfolioData";

const contactLinks = [
  {
    href: "mailto:ahmad.irza18@gmail.com",
    icon: <Mail size={28} />,
    label: "Email",
    text: "ahmad.irza18@gmail.com",
  },
  {
    href: "https://wa.me/6281210011827",
    icon: <Phone size={28} />,
    label: "WhatsApp",
    text: "+62 81210011827",
    external: true,
  },
  {
    href: "https://github.com/AhmadSultanMA",
    icon: <Github size={28} />,
    label: "GitHub",
    text: "AhmadSultanMA",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/ahmad-sultan-mirzam-ambary/",
    icon: <Linkedin size={28} />,
    label: "LinkedIn",
    text: "Ahmad Sultan MA",
    external: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          I'm always open to discussing new opportunities and interesting projects.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {contactLinks.map(({ href, icon, label, text, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm hover:-translate-y-1 hover:border-blue-400/50 transition-all duration-300 group flex flex-col items-center"
            >
              <span className="text-blue-400 mb-3 group-hover:text-cyan-400 transition-colors">
                {icon}
              </span>
              <h3 className="text-sm font-semibold text-white mb-1">{label}</h3>
              <p className="text-gray-400 text-xs text-center">{text}</p>
            </a>
          ))}
        </div>

        {/* Download CTA */}
        <a
          href={cvPdf}
          download="Ahmad_Sultan_CV.pdf"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          <Download size={22} />
          Download My CV
        </a>
      </div>
    </section>
  );
};

export default Contact;
