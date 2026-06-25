"use client";

import { motion } from "framer-motion";
import { Grid3X3, ArrowRight } from "lucide-react";

export function PuzzleGenerators() {
  const puzzles = [
    { name: "Word Search", desc: "Upload a list of words, or let AI generate them by theme.", color: "from-blue-500 to-blue-700" },
    { name: "Sudoku", desc: "Generate thousands of grids from Easy to Extreme.", color: "from-red-500 to-red-700" },
    { name: "Mazes", desc: "Create complex labyrinths in square, circular, or custom shapes.", color: "from-purple-500 to-purple-700" },
  ];

  return (
    <section className="py-24 bg-background border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Module 07: The Puzzle Suite</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Instantly Generate Evergreen Puzzle Books
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Puzzle books sell year-round. Instead of manually creating grids, our algorithms generate mathematically perfect puzzles and answer keys with one click.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {puzzles.map((puzzle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface rounded-[2rem] p-8 border border-white/5 hover:border-primary-500/30 transition-colors group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${puzzle.color} blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity`} />
              
              <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6">
                <Grid3X3 className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-black text-white mb-3">{puzzle.name}</h3>
              <p className="text-gray-400 font-medium leading-relaxed mb-6">
                {puzzle.desc}
              </p>
              
              <div className="flex items-center text-primary-400 font-bold text-sm uppercase tracking-wider group-hover:text-primary-300">
                View Features <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
