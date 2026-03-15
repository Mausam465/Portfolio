import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const certificates = [
  {
    title: 'React Native Advanced',
    issuer: 'Meta',
    image: 'https://via.placeholder.com/400x300/1e293b/38bdf8?text=React+Native',
    link: '#',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    image: 'https://via.placeholder.com/400x300/1e293b/0ea5e9?text=Web+Dev',
    link: '#',
  },
  {
    title: 'UI/UX Design Fundamentals',
    issuer: 'Coursera',
    image: 'https://via.placeholder.com/400x300/1e293b/38bdf8?text=UI+UX',
    link: '#',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative z-10 bg-[#242424]/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#e8e8e8]"
          >
            My <span className="text-gradient">Certificates</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#c9a961] mx-auto rounded-full shadow-[0_0_10px_rgba(201,169,97,0.3)]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden group border border-[#c9a961]/10 hover:border-[#c9a961]/40 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-[#1a1a1a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2 bg-gradient-to-r from-[#9b8b7e] to-[#c9a961] text-[#0f0f1e] rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_15px_rgba(201,169,97,0.4)]"
                  >
                    View <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#e8e8e8]">{cert.title}</h3>
                <p className="text-[#c9a961] text-sm font-medium">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
