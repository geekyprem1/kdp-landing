"use client";

import { motion } from "framer-motion";

export function TheAwakening() {
  return (
    <section className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-10 leading-tight">
            We Got Sick Of The BS, So We Built The Solution
          </h2>
          
          <p className="text-xl text-gray-300 font-medium leading-relaxed">
            As a team of 7-figure Amazon KDP publishers, we were hitting a wall. We were managing a portfolio of over 10,000 books, and the overhead of juggling multiple software tools was crushing our margins and our sanity.
          </p>
          
          <p className="text-xl text-gray-300 font-medium leading-relaxed">
            We looked for an all-in-one platform. It didn't exist.
          </p>
          
          <p className="text-xl text-gray-300 font-medium leading-relaxed">
            So, we hired a team of elite developers and spent the last 14 months (and over $250,000) engineering the ultimate Amazon publishing operating system.
          </p>

          <p className="text-xl text-gray-300 font-medium leading-relaxed">
            We integrated cutting-edge AI. We built proprietary algorithms to calculate a true "Opportunity Score" for niches. We engineered high-end generation engines for everything from complex Sudoku puzzles to stunning full-color children's books.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
