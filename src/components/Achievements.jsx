import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTrophy, FaLightbulb, FaUsers } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaTrophy className="text-4xl text-[#c9a961]" />,
    title: 'Hackathon Winner',
    description: 'First place at National Level Tech Hackathon 2025 for building an AI-powered accessibility tool.',
  },
  {
    icon: <FaCode className="text-4xl text-[#9b8b7e]" />,
    title: 'Open Source Contributor',
    description: 'Merged 50+ PRs in major frontend libraries like React and Tailwind ecosystem.',
  },
  {
    icon: <FaLightbulb className="text-4xl text-[#c9a961]" />,
    title: 'Innovative Project Award',
    description: 'Received the best final year project award for a smart dynamic portfolio generator.',
  },
  {
    icon: <FaUsers className="text-4xl text-[#9b8b7e]" />,
    title: 'Community Leader',
    description: 'Organized 10+ workshops for 500+ students on modern web development practices.',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-[#242424]/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#e8e8e8]"
          >
            Proud <span className="text-gradient">Achievements</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#c9a961] mx-auto rounded-full shadow-[0_0_10px_rgba(201,169,97,0.3)]"></div>
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
              className="glass p-8 rounded-2xl text-center group cursor-default transition-all duration-300 border border-[#c9a961]/10 hover:border-[#c9a961]/30"
            >
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="p-4 bg-[#242424] rounded-full shadow-[0_0_15px_rgba(201,169,97,0.15)] border border-[#c9a961]/10">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#e8e8e8]">{item.title}</h3>
              <p className="text-[#a8a8b8] text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
