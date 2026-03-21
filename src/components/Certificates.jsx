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

const Card = ({ cert, index, total, baseAngle, rotation, radius }) => {
  const angle = baseAngle * index;
  const transform = useTransform(radius, (r) => `rotateY(${angle}deg) translateZ(${r}px)`);
  
  const isPdf = cert.image.toLowerCase().endsWith(".pdf");

  return (
    <motion.div
      style={{ transform, transformStyle: "preserve-3d" }}
      onClick={() => window.open(cert.link, "_blank")}
      className="absolute left-0 top-0 w-[220px] h-[300px] bg-[#1e1e1e]/90 backdrop-blur-md border border-[#c9a961]/20 rounded-xl overflow-hidden shadow-2xl cursor-pointer backface-visible"
    >
      <div className="relative h-[180px] overflow-hidden bg-[#2a2a2a] flex items-center justify-center">
        {isPdf ? (
            <div className="text-center p-4 flex flex-col items-center">
                <FiFileText className="text-[#c9a961] text-5xl mb-2" />
                <span className="text-sm text-gray-400">PDF Document</span>
            </div>
        ) : (
            <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
             <FiExternalLink className="text-[#c9a961] text-3xl" />
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between h-[120px] bg-[#1e1e1e]">
        <div>
            <h3 className="text-[#e8e8e8] font-bold text-lg leading-tight mb-2 line-clamp-2">{cert.title}</h3>
            <p className="text-[#c9a961] text-xs font-medium uppercase tracking-wider">{cert.issuer}</p>
        </div>
        <div className="w-full h-1 bg-[#c9a961]/20 rounded-full mt-2">
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

  const radius = useTransform(smoothProgress, [0, 0.3], [0, 500]);
  const rotateY = useTransform(smoothProgress, [0, 1], [0, -360]);

  return (
    <section 
      id="certificates" 
      ref={containerRef} 
      className="relative h-[300vh] bg-[#111]" 
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center perspective-1000 overflow-hidden">
        
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
            className="absolute top-20 text-center z-20 pointer-events-none"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#e8e8e8]">
            My <span className="text-[#c9a961]">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-[#c9a961] mx-auto rounded-full shadow-[0_0_10px_rgba(201,169,97,0.3)]"></div>
        </motion.div>

        <div className="relative w-full flex items-center justify-center" style={{ perspective: "1000px" }}>
            <motion.div 
                style={{ 
                    rotateY: rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-[220px] h-[300px] flex items-center justify-center"
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

