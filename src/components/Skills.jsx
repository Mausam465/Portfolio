import React from 'react';
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
    className="glass p-8 rounded-2xl relative overflow-hidden group border border-white/5 hover:border-[#38bdf8]/30 transition-all duration-300"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
    <h3 className="text-2xl font-bold mb-6 text-gradient">{category.title}</h3>
    <div className="flex flex-wrap gap-3">
      {category.skills.map((skill, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
          className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9]/20 to-[#38bdf8]/20 border border-[#38bdf8]/40 rounded-lg text-slate-300 font-medium hover:bg-gradient-to-r hover:from-[#0ea5e9]/30 hover:to-[#38bdf8]/30 hover:border-[#38bdf8]/60 transition-all duration-300 cursor-default"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => (
  <section id="skills" className="py-24 relative z-10">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-[#e2e8f0]"
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>
        <div className="w-24 h-1 bg-[#38bdf8] mx-auto rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
      </div>

      {/* 3D Skills Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 rounded-2xl border border-[#38bdf8]/20 overflow-hidden"
      >
        <Skills3D />
      </motion.div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} category={category} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
