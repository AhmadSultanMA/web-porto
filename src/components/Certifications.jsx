import React from "react";
import { certifications } from "../data/portfolioData";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm hover:-translate-y-1 hover:border-blue-400/50 transition-all duration-300 text-center group"
            >
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-blue-300 mb-3">{cert.issuer}</p>
              <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/40">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
