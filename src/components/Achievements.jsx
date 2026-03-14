import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTrophy, FaLightbulb, FaUsers } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaTrophy className="text-4xl text-[#38bdf8]" />,
    title: 'Hackathon Winner',
    description: 'First place at National Level Tech Hackathon 2025 for building an AI-powered accessibility tool.',
  },
  {
    icon: <FaCode className="text-4xl text-[#0ea5e9]" />,
    title: 'Open Source Contributor',
    description: 'Merged 50+ PRs in major frontend libraries like React and Tailwind ecosystem.',
  },
  {
    icon: <FaLightbulb className="text-4xl text-[#38bdf8]" />,
    title: 'Innovative Project Award',
    description: 'Received the best final year project award for a smart dynamic portfolio generator.',
  },
  {
    icon: <FaUsers className="text-4xl text-[#0ea5e9]" />,
    title: 'Community Leader',
    description: 'Organized 10+ workshops for 500+ students on modern web development practices.',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#e2e8f0]"
          >
            Proud <span className="text-gradient">Achievements</span>
          </motion.h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass p-8 rounded-2xl text-center group cursor-default transition-all duration-300 border border-white/5 hover:border-[#38bdf8]/30"
            >
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="p-4 bg-slate-800 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.15)] border border-white/5">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-200">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
