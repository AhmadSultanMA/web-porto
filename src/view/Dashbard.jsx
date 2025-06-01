import React, { useState, useEffect } from "react";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Award,
  Calendar,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const skills = {
    "Programming Languages": [
      "Dart",
      "TypeScript",
      "Kotlin",
      "Java",
      "Golang",
      "Python",
      "PHP",
      "SQL",
      "HTML/CSS",
      "C++",
    ],
    "Frameworks & Libraries": [
      "React.js",
      "React Native",
      "Next.js",
      "Vue.js",
      "Flutter",
      "Laravel",
    ],
    "Tools & Platforms": [
      "Visual Studio Code",
      "Android Studio",
      "GitHub",
      "Postman",
      "Docker",
      "AWS",
      "Firebase",
      "GCP",
      "Figma",
    ],
    "Databases & Cloud": [
      "Supabase",
      "Firebase",
      "Google Cloud Platform",
      "Amazon Web Services",
      "Vertex AI",
    ],
  };

  const projects = [
    {
      title: "NEO PARK",
      description:
        "Intelligent parking system integrating computer vision and IoT technologies with YOLOv8 for car detection achieving 90%+ confidence and 1-second latency.",
      tech: ["YOLOv8", "IoT", "Computer Vision", "Real-time Processing"],
      date: "Mar 2025 - May 2025",
      type: "Capstone Project",
      link: "#",
    },
    {
      title: "GreenBox Apps",
      description:
        "Android application for waste classification detection using machine learning to enhance waste management efficiency.",
      tech: ["Kotlin", "Firebase", "Vertex AI", "Machine Learning"],
      date: "Sep 2024 - Nov 2024",
      type: "Mobile Development",
      link: "#",
    },
    {
      title: "USMAN Apps",
      description:
        "Innovative mobile app using Flutter for MTQMN Competition, securing national runner-up position.",
      tech: ["Flutter", "Mobile Development"],
      date: "Sep 2024 - Nov 2024",
      type: "Competition Project",
      link: "#",
    },
    {
      title: "SIMABA 2024 Website",
      description:
        "Comprehensive website for PKKMB event with 900+ active users, featuring assignments, attendance, and grading systems.",
      tech: ["React.js", "Full-stack Development"],
      date: "Jun 2024 - Aug 2024",
      type: "Web Development",
      link: "#",
    },
    {
      title: "Desa Babadan Website",
      description:
        "Interactive village profile website serving as information hub with responsive design using React.js and Laravel.",
      tech: ["React.js", "Laravel", "Full-stack"],
      date: "Jul 2024 - Aug 2024",
      type: "Community Project",
      link: "#",
    },
    {
      title: "UrDENTIST APPS",
      description:
        "Top 100 Google Solution Challenge 2024 - Mobile app for dental health with caries detection and treatment recommendations.",
      tech: ["Flutter", "Healthcare Tech", "AI/ML"],
      date: "Dec 2023 - Mar 2024",
      type: "Google Solution Challenge",
      link: "#",
    },
  ];

  const experience = [
    {
      company: "Bank BTPN Syariah",
      position: "Fullstack Developer Intern",
      duration: "Jan 2024",
      location: "Jakarta (Remote)",
      description:
        "Developed API using Golang and gained proficiency in Vue.js, contributing to key project development.",
    },
    {
      company: "PT. Telkom Indonesia",
      position: "Front-end Developer Intern",
      duration: "Aug 2021 - Oct 2021",
      location: "Bandung (On-site)",
      description:
        "Assisted in website development and converted documentation to integrate with Laravel framework.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ahmad Sultan
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === item
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-500/30">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                Ahmad Sultan Mirzam Ambary
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Results-driven Informatics Engineering Student & Full-Stack
                Developer
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Passionate about building scalable digital products with 45+
                projects in frontend, backend, AI/ML, and IoT solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:ahmad.irza18@gmail.com"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail size={20} />
                  Get In Touch
                </a>
                <a
                  href="https://github.com/AhmadSultanMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-blue-500 px-6 py-3 rounded-full hover:bg-blue-500/10 transition-all duration-300"
                >
                  <Github size={20} />
                  View GitHub
                </a>
              </div>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className="mt-12 animate-bounce text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Brawijaya University
                    </h4>
                    <p className="text-blue-300">Informatics Engineering</p>
                    <p className="text-gray-400">
                      Aug 2022 - Present | CGPA: 3.81/4.00
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Madinatul Quran Vocational High School
                    </h4>
                    <p className="text-gray-400">Jul 2019 - Jun 2022</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">
                  Achievements
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className="text-cyan-400" size={20} />
                    <span className="text-white">
                      Best Project at Informatics Engineering's Capstone 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-cyan-400" size={20} />
                    <span className="text-white">
                      Top 100 Google Solution Challenge 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-cyan-400" size={20} />
                    <span className="text-white">
                      The Best Staff of PIT BEM FILKOM 2023
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-cyan-400" size={20} />
                    <span className="text-white">
                      AWS Academy Data Engineering Certified
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">
                  Contact Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-400" size={20} />
                    <span className="text-gray-300">Bekasi, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-400" size={20} />
                    <span className="text-gray-300">(62) 81210011827</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-400" size={20} />
                    <span className="text-gray-300">
                      ahmad.irza18@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-blue-400" size={24} />
                  <h3 className="text-lg font-semibold text-white">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/40"
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/40">
                    {project.type}
                  </span>
                  <a
                    href={project.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors group-hover:text-blue-400"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-600/50 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar size={16} />
                  {project.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm hover:transform hover:scale-102 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-xl text-blue-400 mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300">{exp.duration}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:ahmad.irza18@gmail.com"
              className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <Mail
                className="text-blue-400 mx-auto mb-4 group-hover:text-cyan-400 transition-colors"
                size={32}
              />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">ahmad.irza18@gmail.com</p>
            </a>
            <a
              href="tel:+6281210011827"
              className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <Phone
                className="text-blue-400 mx-auto mb-4 group-hover:text-cyan-400 transition-colors"
                size={32}
              />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">(62) 81210011827</p>
            </a>
            <a
              href="https://github.com/AhmadSultanMA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <Github
                className="text-blue-400 mx-auto mb-4 group-hover:text-cyan-400 transition-colors"
                size={32}
              />
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-300">AhmadSultanMA</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-blue-500/30 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Ahmad Sultan Mirzam Ambary. Built with React.js & Tailwind
            CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
