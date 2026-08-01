import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-lg flex items-center justify-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-110"
      aria-label="Scroll to top"
    >
      <ChevronUp size={22} />
    </button>
  );
};

export default ScrollToTop;
