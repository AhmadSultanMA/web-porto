import React, { useState } from "react";
import { Filter, Calendar, ExternalLink } from "lucide-react";
import { projects, projectFilters } from "../data/portfolioData";

const DESCRIPTION_LIMIT = 150;

const categoryColors = {
  "AI/ML": "bg-purple-500/20 text-purple-300 border-purple-500/40",
  IoT: "bg-green-500/20 text-green-300 border-green-500/40",
  Mobile: "bg-orange-500/20 text-orange-300 border-orange-500/40",
  Web: "bg-blue-500/20 text-blue-300 border-blue-500/40",
};

/** Renders a description with a smooth expandable "...more / less" transition */
const ExpandableDescription = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > DESCRIPTION_LIMIT;

  if (!isLong) {
    return <p className="text-gray-300 mb-4 leading-relaxed text-sm">{text}</p>;
  }

  return (
    <div className="text-gray-300 mb-4 leading-relaxed text-sm">
      <div
        className={`overflow-hidden transition-[max-height] min-h-[71px] duration-500 ease-in-out ${
          expanded ? "max-h-[500px]" : "max-h-[3.75em]"
        }`}
      >
        <p className="line-clamp-none">
          {text}
        </p>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-1 text-blue-400 hover:text-cyan-400 font-semibold text-xs transition-colors focus:outline-none"
      >
        {expanded ? "Show less" : "Read more..."}
      </button>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeFilter)
            : p.category === activeFilter
        );

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "border-blue-500/40 text-gray-300 hover:border-blue-400 hover:text-blue-300"
              }`}
            >
              <Filter size={14} />
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredProjects.map((project, index) => {
            const categories = Array.isArray(project.category)
              ? project.category
              : [project.category];

            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 border backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 group flex flex-col ${
                  project.active
                    ? "border-cyan-400/60 shadow-lg shadow-cyan-500/10"
                    : "border-blue-500/30 hover:border-blue-400/50"
                }`}
              >
                {/* Active badge */}
                {project.active && (
                  <div className="absolute -top-3 left-4">
                    <span className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      Currently Working On
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-4 mt-1 flex-wrap gap-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/40">
                    {project.type}
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {categories.map((cat) => (
                      <span
                        key={cat}
                        className={`text-xs px-2 py-0.5 rounded-full border ${categoryColors[cat] || "bg-blue-500/20 text-blue-300 border-blue-500/40"}`}
                      >
                        {cat}
                      </span>
                    ))}
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <ExpandableDescription text={project.description} />

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-600/50 text-gray-300 px-2 py-0.5 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Calendar size={13} />
                {project.date}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
