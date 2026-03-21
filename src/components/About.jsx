import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaLinkedin, FaTimes, FaRocket, FaCode, FaLaptopCode, FaBrain } from "react-icons/fa";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);

  // Mouse Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  return (
    <section 
        id="about" 
        className="py-20 min-h-screen bg-[#050505] relative overflow-hidden flex items-center justify-center"
        ref={containerRef} 
        onMouseMove={handleMouseMove} 
        onMouseLeave={() => {x.set(0); y.set(0)}}
        style={{ perspective: "2000px" }}
    >
      
      {/* Background - Cyber Grid & Particles */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
         {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#c9a961] rounded-full"
                style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
         ))}
      </div>

      {/* Main Interactive Deck */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-0 perspective-[1000px] px-4 sm:px-6 md:px-0"
        initial={{ scale: 0, z: -500, rotateX: 60 }}
        whileInView={{ scale: 1, z: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
         
         {/* LEFT WING: BIO */}
         {/* Starts behind center, slides out to left */}
         <motion.div
            className="w-full sm:w-[280px] md:w-[300px] h-[350px] sm:h-[400px] md:h-[400px] lg:h-[450px] bg-[#111] border border-[#333] rounded-2xl p-4 sm:p-5 md:p-6 relative lg:mr-[-20px] shadow-2xl flex flex-col justify-center backdrop-blur-md"
            initial={{ x: 150, opacity: 0, rotateY: 90 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(-50px)" }}
         >
             <div className="absolute top-3 sm:top-4 left-3 sm:left-4 text-[#c9a961] opacity-50"><FaCode className="text-2xl sm:text-3xl" /></div>
             <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-6 sm:mt-8 mb-3 sm:mb-4">The <span className="text-[#c9a961]">Mission</span></h3>
             <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Coding isn't just about syntax; it's about <span className="text-white">problem solving</span>. 
                I specialize in building high-performance web applications that merge stunning visuals with robust backend logic.
                <br/><br/>
                Every line of code is a step towards a more interactive internet.
             </p>
             
             {/* Decorative lines */}
             <div className="mt-4 sm:mt-6 space-y-2">
                 <div className="h-1 w-full bg-[#222] rounded-full overflow-hidden"><div className="h-full w-3/4 bg-[#c9a961]"></div></div>
                 <div className="h-1 w-full bg-[#222] rounded-full overflow-hidden"><div className="h-full w-1/2 bg-[#333]"></div></div>
             </div>
         </motion.div>


         {/* CENTER CORE: PROFILE & IDENTITY */}
         {/* The main anchor */}
         <motion.div
            className="w-full sm:w-[280px] md:w-[320px] h-[400px] sm:h-[450px] md:h-[500px] bg-[#0a0a0a] border-2 border-[#c9a961]/50 rounded-3xl p-2 relative z-20 shadow-[0_0_50px_rgba(201,169,97,0.2)] group cursor-pointer flex-shrink-0"
            onClick={() => setIsExpanded(true)}
            whileHover={{ scale: 1.05, y: -10 }}
            style={{ transformStyle: "preserve-3d" }}
         >
             {/* Holographic Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#c9a961]/10 to-transparent rounded-3xl pointer-events-none"></div>
            <div className="absolute -inset-1 bg-gradient-to-b from-[#c9a961] to-transparent opacity-20 blur-lg -z-10 rounded-3xl"></div>

            {/* Profile Image Area */}
            <div className="h-3/5 w-full bg-[#1a1a1a] rounded-2xl overflow-hidden relative">
                 <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                 
                 {/* ID Overlay */}
                 <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 sm:p-3 border-t border-[#c9a961]/30">
                     <h2 className="text-base sm:text-lg md:text-xl font-bold text-white text-center">Mausam Kumari</h2>
                     <p className="text-[#c9a961] text-[10px] sm:text-xs text-center font-mono tracking-widest">FULL STACK DEV</p>
                 </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="h-2/5 p-2 sm:p-3 md:p-4 grid grid-cols-2 gap-1.5 sm:gap-2">
                 <div className="bg-[#1a1a1a] rounded-lg sm:rounded-xl flex flex-col items-center justify-center p-1.5 sm:p-2 border border-[#333] group-hover:border-[#c9a961]/30 transition-colors">
                     <FaLaptopCode className="text-[#c9a961] text-sm sm:text-lg md:text-xl mb-0.5 sm:mb-1" />
                     <span className="text-white font-bold text-sm sm:text-base md:text-lg">15+</span>
                     <span className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500 uppercase">Projects</span>
                 </div>
                 <div className="bg-[#1a1a1a] rounded-lg sm:rounded-xl flex flex-col items-center justify-center p-1.5 sm:p-2 border border-[#333] group-hover:border-[#c9a961]/30 transition-colors">
                     <FaBrain className="text-[#c9a961] text-sm sm:text-lg md:text-xl mb-0.5 sm:mb-1" />
                     <span className="text-white font-bold text-sm sm:text-base md:text-lg">98%</span>
                     <span className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500 uppercase">Focus</span>
                 </div>
                 <div className="col-span-2 bg-[#1a1a1a] rounded-lg sm:rounded-xl flex items-center justify-between px-2 sm:px-3 md:px-4 border border-[#333]">
                     <span className="text-gray-400 text-[8px] sm:text-[9px] md:text-xs">Status:</span>
                     <span className="text-[#c9a961] text-[8px] sm:text-[9px] md:text-xs font-mono animate-pulse">AVAILABLE</span>
                 </div>
            </div>
         </motion.div>


         {/* RIGHT WING: TECH STACK */}
         {/* Starts behind center, slides out to right */}
         <motion.div
            className="w-full sm:w-[280px] md:w-[300px] h-[350px] sm:h-[400px] md:h-[400px] lg:h-[450px] bg-[#111] border border-[#333] rounded-2xl p-4 sm:p-5 md:p-6 relative lg:ml-[-20px] shadow-2xl flex flex-col backdrop-blur-md"
            initial={{ x: -150, opacity: 0, rotateY: -90 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(-50px)" }}
         >
             <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-[#c9a961] opacity-50"><FaRocket className="text-2xl sm:text-3xl" /></div>
             <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-6 sm:mt-8 mb-4 sm:mb-6 text-right">Tech <span className="text-[#c9a961]">Stack</span></h3>
             
             <div className="space-y-2 sm:space-y-3 md:space-y-4">
                 {[
                    { icon: <FaReact className="text-[#61DAFB]" />, name: "React / Next.js", level: "95%" },
                    { icon: <FaNodeJs className="text-[#8CC84B]" />, name: "Node / Express", level: "90%" },
                    { icon: <FaDatabase className="text-orange-400" />, name: "MongoDB / SQL", level: "85%" },
                 ].map((skill, idx) => (
                     <div key={idx} className="group">
                         <div className="flex items-center gap-2 sm:gap-3 mb-0.5 sm:mb-1">
                             <span className="text-lg sm:text-xl md:text-2xl">{skill.icon}</span>
                             <span className="text-gray-300 font-medium text-xs sm:text-sm">{skill.name}</span>
                         </div>
                         <div className="w-full h-1 sm:h-1.5 bg-[#222] rounded-full overflow-hidden">
                             <motion.div 
                                className="h-full bg-[#c9a961]"
                                initial={{ width: 0 }}
                                whileInView={{ width: skill.level }}
                                transition={{ duration: 1, delay: 1.5 + (idx * 0.2) }}
                             />
                         </div>
                     </div>
                 ))}
             </div>

             <div className="flex justify-end gap-3 sm:gap-4 mt-auto">
                 <a href="#" className="p-1.5 sm:p-2 bg-[#222] rounded-full hover:bg-[#c9a961] hover:text-black transition-colors text-sm sm:text-base"><FaGithub /></a>
                 <a href="#" className="p-1.5 sm:p-2 bg-[#222] rounded-full hover:bg-[#c9a961] hover:text-black transition-colors text-sm sm:text-base"><FaLinkedin /></a>
             </div>
         </motion.div>

      </motion.div>
      
      
      {/* EXPANDED IMAGE MODAL */}
      <AnimatePresence>
        {isExpanded && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-lg"
                onClick={() => setIsExpanded(false)}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    className="relative max-w-4xl max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={() => setIsExpanded(false)} className="absolute -top-12 right-0 text-white text-3xl hover:text-[#c9a961]"><FaTimes /></button>
                    <img 
                        src="/images/profile.jpg" 
                        alt="Expanded" 
                        className="rounded-lg shadow-[0_0_100px_rgba(201,169,97,0.3)] border border-[#c9a961]/30"
                    />
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
