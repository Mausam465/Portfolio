import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with dynamic routing, payment gateway integration, and a modern admin dashboard.',
    image: 'https://via.placeholder.com/600x400/1e293b/38bdf8?text=E-Commerce',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    title: 'AI Productivity Tool',
    description: 'A conceptual AI-driven tool that helps developers manage their tasks, featuring semantic search and automated tagging based on GPT.',
    image: 'https://via.placeholder.com/600x400/1e293b/0ea5e9?text=AI+Tool',
    tech: ['Next.js', 'Tailwind', 'OpenAI API', 'Supabase'],
    github: '#',
    live: '#',
  },
  {
    title: 'Crypto Tracker Dashboard',
    description: 'Real-time cryptocurrency tracking dashboard visualizing market trends utilizing WebSockets and advanced charting libraries.',
    image: 'https://via.placeholder.com/600x400/1e293b/38bdf8?text=Crypto+Tracker',
    tech: ['Vue.js', 'Chart.js', 'Firebase', 'WebSockets'],
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#e8e8e8]"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#c9a961] mx-auto rounded-full shadow-[0_0_10px_rgba(201,169,97,0.3)]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl overflow-hidden flex flex-col h-full group border border-[#c9a961]/10 hover:border-[#c9a961]/30 transition-all duration-300"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-[#1a1a1a]/30 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow bg-[#242424]/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-3 text-[#e8e8e8] group-hover:text-[#c9a961] transition-colors">{project.title}</h3>
                <p className="text-[#a8a8b8] text-sm mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-[#1a1a1a] text-[#c9a961] font-medium rounded-full border border-[#c9a961]/10">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#242424] hover:bg-[#2a2a2a] text-[#e8e8e8] text-sm font-semibold transition-all shadow-sm border border-[#c9a961]/10">
                    <FaGithub /> Source
                  </a>
                  <a href={project.live} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-[#9b8b7e] to-[#c9a961] hover:opacity-90 text-[#0f0f1e] text-sm font-semibold transition-opacity shadow-[0_4px_15px_rgba(201,169,97,0.3)] hover:shadow-[0_4px_25px_rgba(201,169,97,0.5)]">
                    <FaExternalLinkAlt className="text-xs" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
