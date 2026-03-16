import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Skills3D from './Skills3D';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
  },
  {
    title: 'Tools & Other',
    skills: ['Git & GitHub', 'Figma', 'Vite', 'Three.js'],
  },
];

const SkillCard = ({ category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="glass p-8 rounded-2xl relative overflow-hidden group border border-[#c9a961]/10 hover:border-[#c9a961]/30 transition-all duration-300"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c9a961]/10 to-[#9b8b7e]/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
    <h3 className="text-2xl font-bold mb-6 text-gradient">{category.title}</h3>
    <div className="flex flex-wrap gap-3">
      {category.skills.map((skill, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
          className="px-4 py-2 bg-gradient-to-r from-[#9b8b7e]/20 to-[#c9a961]/20 border border-[#c9a961]/40 rounded-lg text-[#b8b8c8] font-medium hover:bg-gradient-to-r hover:from-[#9b8b7e]/30 hover:to-[#c9a961]/30 hover:border-[#c9a961]/60 transition-all duration-300 cursor-default"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills3DCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skillCategories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* 3D Carousel Container */}
      <div className="relative h-96 flex items-center justify-center" style={{ perspective: '1200px' }}>
        {skillCategories.map((category, idx) => {
          const distance = (idx - activeIndex + skillCategories.length) % skillCategories.length;
          let rotateY = 0;
          let translateX = 0;
          let opacity = 0.3;
          let scale = 0.8;
          let zIndex = 0;

          if (distance === 0) {
            // Center - Front card
            rotateY = 0;
            translateX = 0;
            opacity = 1;
            scale = 1;
            zIndex = 10;
          } else if (distance === 1) {
            // Right - Coming from right
            rotateY = -35;
            translateX = 380;
            opacity = 0.7;
            scale = 0.85;
            zIndex = 5;
          } else {
            // Left - Going to left
            rotateY = 35;
            translateX = -380;
            opacity = 0.7;
            scale = 0.85;
            zIndex = 5;
          }

          return (
            <motion.div
              key={idx}
              className="absolute w-96"
              initial={false}
              animate={{
                rotateY,
                x: translateX,
                opacity,
                scale,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{
                transformStyle: 'preserve-3d',
                zIndex,
              }}
            >
              <SkillCard category={category} index={idx} />
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-2">
        {skillCategories.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === activeIndex ? 'bg-[#c9a961] w-8' : 'bg-[#c9a961]/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="py-24 relative z-10">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-[#e8e8e8]"
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>
        <div className="w-24 h-1 bg-[#c9a961] mx-auto rounded-full shadow-[0_0_10px_rgba(201,169,97,0.3)]"></div>
      </div>

      {/* 3D Skills Carousel */}
      <div className="flex justify-center items-center pb-20 mt-8">
        <Skills3DCarousel />
      </div>
    </div>
  </section>
);

export default Skills;
