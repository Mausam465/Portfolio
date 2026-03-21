import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section 
        id="about" 
        className="py-32 min-h-screen bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center"
    >
      
      {/* Main Content Container */}
      <motion.div
        className="relative z-10 w-full max-w-2xl mx-auto px-6 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* PROFILE IMAGE - Circular */}
        <motion.div
          className="mb-12"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-[#c9a961]/30 shadow-lg">
            <img 
              src="https://ik.imagekit.io/vzxwc5boa/WhatsApp%20Image%202026-03-21%20at%207.05.43%20PM.jpeg" 
              alt="Profile" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* GREETING */}
        <motion.h2
          className="text-4xl md:text-5xl font-light text-white mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Hi, I'm <span className="text-[#c9a961]">Mausam</span>, nice to meet you!
        </motion.h2>

        {/* BIO PARAGRAPH */}
        <motion.p
          className="text-gray-400 text-lg leading-relaxed mb-12 font-light"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          I'm a full-stack developer passionate about creating beautiful, high-performance web applications. 
          With expertise in React, Node.js, and modern web technologies, I transform ideas into elegant digital solutions. 
          I believe in writing clean code, thoughtful design, and building experiences that users love. 
          When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
        </motion.p>

        {/* SELECTED CREDITS */}
        <motion.div
          className="text-sm text-gray-500 border-t border-gray-700 pt-8 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="mb-4">
            <span className="text-gray-400">Featured In:</span>
          </p>
          <p className="italic">
            GitHub / Dev.to / Hashnode / CodePen / Product Hunt
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;
