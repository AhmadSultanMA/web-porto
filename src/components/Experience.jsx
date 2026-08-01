import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Work Experience
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1 md:left-1/2 md:-translate-x-1/2 top-6 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900 z-10 flex items-center justify-center">
                  <Briefcase size={10} className="text-white" />
                </div>

                {/* Card */}
                <div
                  className={`md:w-1/2 pl-12 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-gray-300 text-sm justify-end">
                          <Calendar size={12} />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-xs justify-end mt-0.5">
                          <MapPin size={11} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed"
                        >
                          <span className="text-cyan-400 mt-1.5 shrink-0 text-xs">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
