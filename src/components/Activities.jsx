import React from "react";
import { Users } from "lucide-react";
import { activities } from "../data/portfolioData";

const Activities = () => {
  return (
    <section id="activities" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Activities & Organizations
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((act, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm hover:-translate-y-1 hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-cyan-400 shrink-0" size={22} />
                <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-xs border border-blue-500/40">
                  {act.year}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                {act.role}
              </h3>
              <p className="text-blue-300 text-sm mb-3">{act.org}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{act.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
