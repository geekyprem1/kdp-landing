"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function NoSkillsBanner() {
  const skills = [
    "No Writing Needed",
    "No Designing Needed",
    "No Formatting Needed",
    "No Tech Experience Needed",
  ];

  return (
    <section className="bg-primary-500 py-6 border-y border-primary-400 relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-black font-black uppercase tracking-widest text-sm md:text-base"
            >
              <CheckCircle2 className="w-5 h-5 text-black" />
              <span>{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
