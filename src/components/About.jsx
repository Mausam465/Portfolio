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
        className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* RIGHT: CONTENT */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* ABOUT ME HEADING - LETTER BY LETTER */}
          <motion.h1
            className="text-5xl md:text-6xl font-light text-white mb-12"
            viewport={{ once: true, margin: "-100px" }}
          >
            {['A', 'b', 'o', 'u', 't', '                                      '].map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ display: 'inline-block' }}
              >
                {letter}
              </motion.span>
            ))}
            <span className="text-[#c9a961]">
              {['M', 'e'].map((letter, idx) => (
                <motion.span
                  key={idx + 6}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (idx + 6) * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  style={{ display: 'inline-block' }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* DECORATIVE LINE */}
          <motion.div
            className="w-20 h-1 bg-[#c9a961] mb-12 mx-auto"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ transformOrigin: "center" }}
          />


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
            className="text-white text-lg leading-relaxed mb-12 font-light"
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


          {/* EDUCATION */}
          <motion.div
            className="border-t border-gray-700 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-light text-white mb-6">
              <span className="text-[#c9a961]">Education</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Lovely Professional University */}
              <div className="pb-4 border-b md:border-b-0 md:border-r border-gray-700 md:pr-8">
                <h4 className="text-white font-semibold mb-1">Lovely Professional University</h4>
                <p className="text-gray-400 text-sm mb-1">Bachelor of Technology - Computer Science and Engineering</p>
                <p className="text-[#c9a961] text-sm font-light">CGPA: 7.00</p>
              </div>

              {/* Holy Cross Public School */}
              <div className="pb-4 border-b md:border-b-0 md:border-r border-gray-700 md:pr-8">
                <h4 className="text-white font-semibold mb-1">Holy Cross Public School</h4>
                <p className="text-gray-400 text-sm mb-1">Intermediate (Class XII)</p>
                <p className="text-[#c9a961] text-sm font-light">Percentage: 75.8%</p>
              </div>

              {/* Holy Mission Sr. Sec. School */}
              <div>
                <h4 className="text-white font-semibold mb-1">Holy Mission Sr. Sec. School</h4>
                <p className="text-gray-400 text-sm mb-1">Matriculation (Class X)</p>
                <p className="text-[#c9a961] text-sm font-light">Percentage: 82.8%</p>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;
