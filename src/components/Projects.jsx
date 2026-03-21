import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'AT Production – Azure-Deployed Full-Stack CMS Platform',
    description: 'A production-ready full-stack CMS platform designed to manage dynamic content, blogs, and user interactions with high performance and scalability. Features secure authentication, role-based access, and a responsive UI with seamless deployment on Azure.',
    image: 'https://ik.imagekit.io/vzxwc5boa/Screenshot%202026-03-21%20183026.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Azure','JWT Auth'],
    github: '#',
    live: 'https://www.atproduction.net/',
    color: '#242424'
  },
  {
    title: 'AT Production – CRM & Workforce Management Platform',
    description: 'A scalable CRM and workforce management system with real-time data handling, secure authentication, and Azure deployment for managing customers, employees, and operations.',
    image: 'https://ik.imagekit.io/vzxwc5boa/Screenshot%202026-03-21%20183048.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Azure','JWT Auth'],
    github: '#',
    live: 'https://crm.atproduction.net/dashboard',
    color: '#2a2a2a'
  },
  {
    title: 'LearnComet Edu Platform',
    description: 'Built responsive and animated UI components for an EdTech mentorship platform using Next.js and Tailwind, enhancing user engagement and performance. Ensured clean, scalable component architecture for maintainability and faster development.',
    image: 'https://ik.imagekit.io/vzxwc5boa/Screenshot%202026-03-21%20184759.png',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript','Responsive Design'],
    github: '#',
    live: 'https://www.learncometedu.com/',
    color: '#202020'
  },
];

const Card = ({ i, title, description, src, image, url, github, live, tech, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-top justify-center sticky top-0 md:top-12">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="flex flex-col relative h-auto md:h-[500px] w-full max-w-[1000px] rounded-3xl p-8 md:p-12 border border-[#c9a961] overflow-hidden shadow-2xl origin-top bg-[#1f1f1f]"
      >
        
        <div className="flex flex-col md:flex-row h-full gap-8 md:gap-12 relative z-10">
            
            {/* Project Info */}
            <div className="w-full md:w-[45%] flex flex-col justify-between">
                <div>
                    <h3 className="text-3xl font-bold text-[#e8e8e8] mb-4 font-serif">{title}</h3>
                    <p className="text-[#a8a8b8] text-base leading-relaxed mb-6">
                        {description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                        {tech.map((t, idx) => (
                             <span key={idx} className="text-xs px-3 py-1 bg-[#151515] text-[#c9a961] font-medium rounded-full border border-[#c9a961]/20">
                                {t}
                             </span>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-4">
                  <a href={live} className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#c9a961] hover:bg-[#b09252] text-[#1a1a1a] text-sm font-bold transition-all shadow-[0_4px_15px_rgba(201,169,97,0.3)] hover:shadow-[0_4px_25px_rgba(201,169,97,0.5)]">
                    <FaExternalLinkAlt className="text-sm" /> Live Demo
                  </a>
                </div>
            </div>

            {/* Project Image */}
            <div className="w-full md:w-[55%] md:self-center relative h-[250px] md:h-auto rounded-2xl overflow-hidden border border-[#c9a961]/10 shadow-lg">
                <motion.div 
                    className="w-full"
                    style={{ scale: imageScale }}
                >
                    <img 
                        src={image} 
                        alt="project"
                        className="w-full h-auto object-cover"
                    />
                </motion.div>
            </div>

        </div>
      </motion.div>
    </div>
  )
}

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={container} className="relative z-10 bg-[#111]"> 
      {/* Header Section (Not sticky, scrolls away) */}
      <div className="pt-24 pb-12 px-6">
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
      </div>

      {projects.map( (project, i) => {
        const targetScale = 1 - ( (projects.length - i) * 0.05);
        return <Card key={i} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
      })}
    </section>
  )
}

export default Projects;
