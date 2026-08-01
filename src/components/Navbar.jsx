import React from "react";
import { Download, Menu, X } from "lucide-react";
import { navItems, cvPdf } from "../data/portfolioData";

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNav = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => handleNav("home")}
          >
            Ahmad Sultan
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`capitalize transition-colors duration-300 text-sm font-medium ${
                  activeSection === item.id
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={cvPdf}
              download="Ahmad_Sultan_CV.pdf"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-full text-sm font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              <Download size={14} />
              Download CV
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-500/30 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="block w-full text-left py-2 px-2 capitalize text-gray-300 hover:text-blue-400 transition-colors rounded"
              >
                {item.label}
              </button>
            ))}
            <a
              href={cvPdf}
              download="Ahmad_Sultan_CV.pdf"
              className="flex items-center gap-2 mt-3 bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-full text-sm font-semibold w-fit"
            >
              <Download size={14} />
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
