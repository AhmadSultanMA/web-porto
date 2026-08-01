import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Download, ChevronDown } from "lucide-react";
import { profilePhoto, cvPdf, typingPhrases, stats } from "../data/portfolioData";

const Hero = ({ scrollToSection }) => {
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[typingIndex];
    let timeout;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else {
      setIsDeleting(false);
      setTypingIndex((i) => (i + 1) % typingPhrases.length);
    }

    setTypedText(currentPhrase.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, typingIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="text-center max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-3xl opacity-20" />
          <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-3xl p-10 border border-blue-500/30 backdrop-blur-sm">

            {/* Profile photo */}
            <div className="flex justify-center items-center mb-6">
              <div className="relative flex justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-60" />
                <img
                  src={profilePhoto}
                  alt="Ahmad Sultan Mirzam Ambary"
                  className="relative w-32 h-36 rounded-full object-cover border-4 border-blue-400/60 shadow-2xl"
                />
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-slate-800 rounded-full" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
              Ahmad Sultan Mirzam Ambary
            </h1>

            {/* Typing animation */}
            <div className="h-9 flex items-center justify-center mb-4">
              <p className="text-xl md:text-2xl text-cyan-300 font-semibold">
                {typedText}
                <span className="inline-block w-0.5 h-6 bg-cyan-300 ml-1 animate-pulse" />
              </p>
            </div>

            <p className="text-base text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Informatics Engineering graduate from Brawijaya University specializing in
              Software Engineering, Full-Stack Development, and AI/Computer Vision — passionate
              about building robust, scalable digital products and intelligent systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <a
                href="mailto:ahmad.irza18@gmail.com"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Mail size={18} /> Get In Touch
              </a>
              <a
                href={cvPdf}
                download="Ahmad_Sultan_CV.pdf"
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Download size={18} /> Download CV
              </a>
              <a
                href="https://github.com/AhmadSultanMA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-sultan-mirzam-ambary/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-slate-800/60 border border-blue-500/20 rounded-2xl px-4 py-4 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300"
            >
              <p className="text-2xl font-bold text-blue-400">
                {stat.value}
                <span className="text-sm text-gray-400">{stat.suffix}</span>
              </p>
              <p className="text-gray-400 text-sm mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="mt-10 animate-bounce text-blue-400 hover:text-blue-300 transition-colors"
          aria-label="Scroll to About"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
