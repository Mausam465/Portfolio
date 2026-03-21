import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FiExternalLink, FiFileText } from "react-icons/fi";

const certificates = [
  {
    title: "Training Certificate",
    issuer: "Training",
    image: "https://ik.imagekit.io/vzxwc5boa/Training%20Certificate..pdf",
    link: "https://ik.imagekit.io/vzxwc5boa/Training%20Certificate..pdf"
  },
  {
    title: "Event Certificate",
    issuer: "Organization",
    image: "https://ik.imagekit.io/vzxwc5boa/WhatsApp%20Image%202024-04-08%20at%2012.40.41%20AM.jpeg",
    link: "https://ik.imagekit.io/vzxwc5boa/WhatsApp%20Image%202024-04-08%20at%2012.40.41%20AM.jpeg"
  },
  {
    title: "Certificate Screenshot",
    issuer: "Unknown",
    image: "https://ik.imagekit.io/vzxwc5boa/Screenshot%202025-09-30%20224054.pdf",
    link: "https://ik.imagekit.io/vzxwc5boa/Screenshot%202025-09-30%20224054.pdf"
  },
  {
    title: "Neo Collab Certificate",
    issuer: "Neo Collab",
    image: "https://ik.imagekit.io/vzxwc5boa/neo%20collab%20certificate.pdf",
    link: "https://ik.imagekit.io/vzxwc5boa/neo%20collab%20certificate.pdf"
  },
  {
    title: "Mausam",
    issuer: "Personal",
    image: "https://ik.imagekit.io/vzxwc5boa/Mausam.png",
    link: "https://ik.imagekit.io/vzxwc5boa/Mausam.png"
  },
  {
    title: "Mausam Kumari",
    issuer: "Personal",
    image: "https://ik.imagekit.io/vzxwc5boa/Mausam%20kumari.png",
    link: "https://ik.imagekit.io/vzxwc5boa/Mausam%20kumari.png"
  },
  {
    title: "Coursera Certificate",
    issuer: "Coursera",
    image: "https://ik.imagekit.io/vzxwc5boa/Coursera_mausam.pdf",
    link: "https://ik.imagekit.io/vzxwc5boa/Coursera_mausam.pdf"
  },
  {
    title: "Document",
    issuer: "Unknown",
    image: "https://ik.imagekit.io/vzxwc5boa/DOC-20250523-WA0005..pdf",
    link: "https://ik.imagekit.io/vzxwc5boa/DOC-20250523-WA0005..pdf"
  },
  {
    title: "CSE205 Certificate",
    issuer: "Neo Collab",
    image: "https://ik.imagekit.io/vzxwc5boa/https___s3.amazonaws.com_exams-media_2027_StudentS%20certificate%20for%20CSE205_12315203@neocolab.ai.pdf",
    link: "https://ik.imagekit.io/vzxwc5boa/https___s3.amazonaws.com_exams-media_2027_StudentS%20certificate%20for%20CSE205_12315203@neocolab.ai.pdf"
  },
];

const Card = ({ cert, index, total, baseAngle, radius, spread }) => {
  const transform = useTransform([radius, spread], ([r, s]) => {
      // Circle State (s=1)
      const circleAngle = baseAngle * index;
      
      // Stack State (s=0) - "Messy Pile" Look
      // We want them to look like a scattered deck of polaroids.
      // Use deterministic math for "random" angles so it persists across renders.
      const randomRot = index === 0 ? -2 : ((index * 137.5) % 30) - 15; // Random angle between -15 and 15
      const randomX = index === 0 ? 0 : ((index * 45) % 20) - 10; // Slight X offset
      const randomY = index === 0 ? 0 : ((index * 67) % 20) - 10; // Slight Y offset
      
      // Stack Depth: Ensure top card (index 0) is closest to camera
      const stackedZ = (total - index) * 5;

      // Interpolate
      const currentRotateY = circleAngle * s; 
      const currentRotateZ = randomRot * (1 - s);
      const currentTranslateX = randomX * (1 - s);
      const currentTranslateY = randomY * (1 - s);
      
      // We blend the Z translation. 
      // In stack mode: stackedZ
      // In circle mode: radius (r)
      const currentTranslateZ = stackedZ * (1 - s) + r * s;
      
      // Scaling:
      // Initial Stack (s=0): 1.4 (Much larger to see details)
      // Moving Ring (s=1): 1.0 (Standard size)
      const currentScale = 1.4 - (0.4 * s);

      return `rotateY(${currentRotateY}deg) rotateZ(${currentRotateZ}deg) translate3d(${currentTranslateX}px, ${currentTranslateY}px, ${currentTranslateZ}px) scale(${currentScale})`;
  });

  const isPdf = cert.image.toLowerCase().endsWith(".pdf");

  return (
    <motion.div
      style={{ transform, transformStyle: "preserve-3d" }}
      onClick={() => window.open(cert.link, "_blank")}
      className="absolute left-0 top-0 w-[140px] sm:w-[160px] md:w-[180px] h-[200px] sm:h-[230px] md:h-[260px] bg-[#1e1e1e]/90 backdrop-blur-md border border-[#c9a961]/20 rounded-lg sm:rounded-xl overflow-hidden shadow-2xl cursor-pointer backface-visible"
    >
      <div className="relative h-[120px] sm:h-[140px] md:h-[160px] overflow-hidden bg-[#2a2a2a] flex items-center justify-center">
        {isPdf ? (
            <div className="text-center p-2 sm:p-3 flex flex-col items-center">
                <FiFileText className="text-[#c9a961] text-3xl sm:text-4xl md:text-5xl mb-1" />
                <span className="text-[10px] sm:text-xs text-gray-400">PDF</span>
            </div>
        ) : (
            <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
             <FiExternalLink className="text-[#c9a961] text-2xl sm:text-3xl" />
        </div>
      </div>
      <div className="p-2 sm:p-3 md:p-4 flex flex-col justify-between h-[80px] sm:h-[90px] md:h-[100px] bg-[#1e1e1e]">
        <div>
            <h3 className="text-[#e8e8e8] font-bold text-xs sm:text-sm md:text-base leading-tight mb-1 sm:mb-2 line-clamp-2">{cert.title}</h3>
            <p className="text-[#c9a961] text-[8px] sm:text-[9px] md:text-[10px] font-medium uppercase tracking-wider">{cert.issuer}</p>
        </div>
        <div className="w-full h-0.5 sm:h-1 bg-[#c9a961]/20 rounded-full mt-1 sm:mt-2">
            <div className="w-1/2 h-full bg-[#c9a961] rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Responsive radius based on screen size
  const getMaxRadius = () => {
    if (typeof window === 'undefined') return 500;
    const width = window.innerWidth;
    if (width < 640) return 200;
    if (width < 768) return 280;
    if (width < 1024) return 350;
    return 500;
  };

  const maxRadius = getMaxRadius();

  // Animation values:
  // 0 -> 0.2: Transition from Stack (0) to Ring (maxRadius)
  // 0.2 -> 1: Rotate the ring
  const radius = useTransform(smoothProgress, [0, 0.2], [0, maxRadius]);
  const spread = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const rotateY = useTransform(smoothProgress, [0, 0.2, 1], [0, 0, -360]);

  return (
    <section 
      id="certificates" 
      ref={containerRef} 
      className="relative h-[300vh] bg-[#111]" 
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center perspective-1000 overflow-hidden">
        
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="absolute top-6 sm:top-10 md:top-16 text-center z-20 pointer-events-none px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-[#e8e8e8]">
            My <span className="text-[#c9a961]">Certificates</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#c9a961] mx-auto rounded-full shadow-[0_0_10px_rgba(201,169,97,0.3)]"></div>
        </motion.div>

        {/* Mobile Heading */}
        <div className="relative w-full flex items-center justify-center mt-16 md:mt-24 lg:mt-32" style={{ perspective: "1000px" }}>
            <motion.div 
                style={{  
                    rotateY: rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-[140px] sm:w-[160px] md:w-[180px] h-[200px] sm:h-[230px] md:h-[260px] flex items-center justify-center"
            >
            {certificates.map((cert, index) => (
                <Card
                    key={index}
                    cert={cert}
                    index={index}
                    total={certificates.length}
                    baseAngle={360 / certificates.length}
                    radius={radius}
                    rotation={rotateY}
                    spread={spread}
                />
            ))}
            </motion.div>
        </div>

        <motion.p 
            style={{ opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]) }}
            className="absolute bottom-10 text-gray-500 text-sm"
        >
            Keep scrolling to see more
        </motion.p>
      </div>
    </section>
  );
};

export default Certificates;

