"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function TestimonialWall() {
  const reviews = [
    {
      title: "Stay At Home Mom",
      name: "Sarah J.",
      role: "Stay At Home Mom",
      location: "Texas USA",
      img: "/images/testimonial_mom.png",
      text: "I was skeptical because I have zero tech skills and three kids running around all day. I started KDP Mafia just to see if I could make $500 a month to help with groceries. Within two weeks, the AI helped me publish a complete series of toddler coloring books. Last month I hit $4,200 in royalties, and I literally only work on this when my kids are napping. It's the most beginner-friendly system I've ever used."
    },
    {
      title: "Complete Beginner",
      name: "Marcus T.",
      role: "Complete Beginner",
      location: "Georgia USA",
      img: "/images/testimonial_beginner.png",
      text: "Before finding KDP Mafia, I spent months trying to figure out Amazon publishing on my own. I bought courses, watched hundreds of YouTube videos, and got nowhere. This software changed everything. It took away all the guesswork. I used the niche finder, hit generate, and had my first profitable low-content book live in 48 hours. I'm now making a steady $2,500 a month passively."
    },
    {
      title: "Retired Teacher",
      name: "Evelyn R.",
      role: "Retired Teacher",
      location: "Florida USA",
      img: "/images/testimonial_teacher.png",
      text: "Living on a fixed pension was getting difficult with rising costs. A friend showed me KDP Mafia and I thought it was too good to be true. But the platform is so simple to navigate! I started creating educational workbooks using the built-in templates. Not only is it fun, but my books are actually helping students and I'm earning an extra $3,800 every month. It gave me my financial peace of mind back."
    },
    {
      title: "Digital Marketer",
      name: "David L.",
      role: "Digital Marketer",
      location: "Toronto Canada",
      img: "/images/testimonial_marketer.png",
      text: "I run a digital agency and I'm always looking for scalable side hustles. I've tried every KDP tool out there—Book Bolt, Publisher Rocket, you name it. Nothing touches the efficiency of KDP Mafia. The sheer volume of high-quality books you can produce is staggering. I scaled a portfolio of 150 puzzle books in a month and it's now generating over $12k/mo completely hands-off. It's the ultimate unfair advantage."
    },
    {
      title: "Side Hustler",
      name: "Chloe M.",
      role: "Side Hustler",
      location: "California USA",
      img: "/images/testimonial_hustler.png",
      text: "I work a 9-to-5 corporate job and barely have any free time. I needed a side hustle that didn't feel like a second full-time job. With KDP Mafia, I spend about 45 minutes every evening generating and uploading journals and planners. It's so streamlined that I was able to build a portfolio of 60 books in two months. My Amazon deposits just covered my rent for the first time. Absolutely life-changing."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-white relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight text-white">
            From <span className="underline decoration-primary-500 decoration-4 underline-offset-8">Zero To $11,954/month</span> — Here's What<br/>Our Members Are Saying About KDP Mafia
          </h2>
        </div>

        <div className="space-y-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col md:flex-row gap-6 sm:gap-10 items-center md:items-start"
            >
              {/* Profile Image */}
              <div className="shrink-0 relative">
                <img 
                  src={review.img} 
                  alt={review.title} 
                  className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-primary-500/20 shadow-inner"
                />
              </div>

              {/* Content */}
              <div className="flex-1 relative">
                {/* Quote Icon Top */}
                <Quote className="w-10 h-10 text-primary-500 fill-primary-500 absolute -top-2 -left-4 sm:-left-6 opacity-30 rotate-180" />
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{review.title}</h3>
                  <div className="flex items-center gap-1 text-primary-500">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                  </div>
                </div>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-medium relative z-10">
                  "{review.text}"
                </p>
                
                <div className="text-sm sm:text-base relative z-10">
                  <span className="text-primary-500 font-bold">— {review.name},</span>
                  <span className="text-gray-400 font-medium"> {review.role}, {review.location}</span>
                </div>

                {/* Quote Icon Bottom */}
                <Quote className="w-10 h-10 text-primary-500 fill-primary-500 absolute -bottom-4 right-0 opacity-30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
