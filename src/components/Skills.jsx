import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 70 },
      { name: 'MongoDB', level: 65 },
      { name: 'SQL', level: 70 },
    ],
  },
  {
    title: 'Tools & Other',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Figma', level: 60 },
      { name: 'Vite', level: 80 },
      { name: 'Three.js', level: 50 },
    ],
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
    <div className="space-y-6">
      {category.skills.map((skill, idx) => (
        <div key={idx}>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-slate-300">{skill.name}</span>
            <span className="text-slate-400 text-sm">{skill.level}%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
              className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"
            />
          </div>
        </div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} category={category} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
