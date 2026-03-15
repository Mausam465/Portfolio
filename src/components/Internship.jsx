import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const internships = [
  {
    role: 'Frontend Developer Intern',
    company: 'Tech Solutions Inc.',
    duration: 'June 2025 - Sep 2025',
    description: [
      'Developed and maintained responsive user interfaces using React and Tailwind CSS.',
      'Collaborated with the design team to implement modern soft glassmorphism UI components.',
      'Optimized web assets resulting in a 20% improvement in page load speed.',
    ],
  },
  {
    role: 'Web Design Intern',
    company: 'Creative Agency',
    duration: 'Oct 2025 - Feb 2026',
    description: [
      'Assisted in creating wireframes and high-fidelity prototypes in Figma.',
      'Translated designs into interactive front-end code using HTML, CSS, and JS.',
      'Participated in weekly code reviews and design critiques.',
    ],
  },
];

const Internship = () => (
  <section id="internship" className="py-24 relative z-10">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-[#e8e8e8]"
        >
          My <span className="text-gradient">Internships</span>
        </motion.h2>
        <div className="w-24 h-1 bg-[#c9a961] mx-auto rounded-full shadow-[0_0_10px_rgba(201,169,97,0.3)]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-[#7a7a8a] transform md:-translate-x-1/2"></div>

        {internships.map((internship, index) => (
          <div
            key={index}
            className={`mb-12 flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="hidden md:block w-5/12"></div>

            <div className="z-20 flex items-center justify-center w-10 h-10 bg-[#242424] shadow-[0_0_15px_rgba(201,169,97,0.2)] rounded-full border-2 border-[#c9a961] absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
              <FaBriefcase className="text-[#c9a961]" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-5/12 pl-12 md:pl-0"
            >
              <div className="glass p-6 rounded-2xl border border-[#c9a961]/10 hover:border-[#c9a961]/30 transition-all duration-300">
                <span className="text-sm font-semibold text-[#c9a961] mb-2 inline-block px-3 py-1 bg-[#c9a961]/10 rounded-full">
                  {internship.duration}
                </span>
                <h3 className="text-2xl font-bold mb-1 text-[#e8e8e8]">{internship.role}</h3>
                <h4 className="text-lg text-[#a8a8b8] mb-4">{internship.company}</h4>
                <ul className="list-disc list-inside space-y-2 text-[#a8a8b8]">
                  {internship.description.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Internship;
