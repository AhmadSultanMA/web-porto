import React from "react";
import { Code } from "lucide-react";
import { skills } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-blue-400" size={22} />
                <h3 className="text-base font-bold text-white">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full text-xs border border-blue-500/40 hover:bg-blue-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
