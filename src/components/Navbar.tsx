"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 left-0 right-0 z-40 bg-black border-b border-white/10 transition-all duration-300 ${
        isScrolled ? "py-3 shadow-2xl" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center group cursor-pointer">
          <img 
            src="/logo.png" 
            alt="KDP Mafia Logo" 
            className="h-16 sm:h-20 w-auto object-contain group-hover:opacity-80 transition-opacity"
          />
        </div>

        <button 
          onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-primary-500 hover:bg-primary-400 text-black font-black uppercase tracking-tight text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full shadow-[0_0_20px_rgba(255,138,0,0.4)] hover:shadow-[0_0_30px_rgba(255,138,0,0.6)] hover:scale-105 transition-all duration-300 transform"
        >
          Get Instant Access
        </button>
      </div>
    </motion.nav>
  );
}
