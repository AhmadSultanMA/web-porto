import React from "react";
import { BookOpen, Award, Globe, MapPin, Phone, Mail, Linkedin, Star } from "lucide-react";
import { achievements } from "../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-blue-400" size={24} />
              <h3 className="text-2xl font-bold text-blue-400">Education</h3>
            </div>
            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-blue-500/30" />
              <div className="space-y-6">
                <div className="pl-10 relative">
                  <span className="absolute left-0.5 top-1.5 w-5 h-5 rounded-full bg-blue-500 border-2 border-slate-800 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </span>
                  <h4 className="text-lg font-bold text-white">Brawijaya University</h4>
                  <p className="text-blue-300 text-sm">Bachelor's — Informatics Engineering</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Aug 2022 – Jul 2026 &nbsp;|&nbsp; CGPA:{" "}
                    <span className="text-cyan-400 font-semibold">3.83/4.00</span>
                  </p>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                    <span className="text-gray-500 uppercase text-xs font-semibold">Coursework: </span>
                    Database, HCI, OOP, AI, Machine Learning, DevOps, MLOps, IoT, Web & App Development.
                  </p>
                </div>
                <div className="pl-10 relative">
                  <span className="absolute left-0.5 top-1.5 w-5 h-5 rounded-full bg-slate-600 border-2 border-slate-800 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                  </span>
                  <h4 className="text-lg font-bold text-white">Madinatul Quran Vocational High School</h4>
                  <p className="text-gray-400 text-xs mt-1">Jul 2019 – Jun 2022</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Coursework: Database, Website Development, Application Development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Achievements */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-cyan-400" size={22} />
                <h3 className="text-xl font-bold text-blue-400">Achievements</h3>
              </div>
              <div className="space-y-2">
                {achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Star className="text-yellow-400 mt-0.5 shrink-0" size={14} />
                    <span className="text-gray-200 text-sm">{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact + Languages */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-blue-400" size={22} />
                <h3 className="text-xl font-bold text-blue-400">Contact & Languages</h3>
              </div>
              <div className="space-y-2 mb-4">
                {[
                  { icon: <MapPin size={15} />, text: "Bekasi, Indonesia" },
                  { icon: <Phone size={15} />, text: "+62 81210011827" },
                  { icon: <Mail size={15} />, text: "ahmad.irza18@gmail.com" },
                ].map(({ icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-blue-400 shrink-0">{icon}</span>
                    <span className="text-gray-300">{text}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 text-sm">
                  <Linkedin className="text-blue-400 shrink-0" size={15} />
                  <a
                    href="https://www.linkedin.com/in/ahmad-sultan-mirzam-ambary/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    linkedin.com/in/ahmad-sultan-mirzam-ambary
                  </a>
                </div>
              </div>
              <div className="border-t border-blue-500/20 pt-3">
                <p className="text-gray-500 text-xs uppercase font-semibold tracking-wide mb-2">Languages</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/40">
                    🇮🇩 Bahasa Indonesia (Native)
                  </span>
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs border border-cyan-500/40">
                    🇬🇧 English (TOEFL: 567)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
