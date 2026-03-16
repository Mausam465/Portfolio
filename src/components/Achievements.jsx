import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTrophy, FaLightbulb, FaUsers, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaTrophy className="text-6xl text-[#c9a961] mb-6 drop-shadow-[0_0_15px_rgba(201,169,97,0.5)]" />,
    title: 'Technical Interview Success',
    description: 'Cleared technical interviews across three companies, contributing to four production-level industry projects and earning a Pre-Placement Offer (PPO) for strong technical performance.',
  },
  {
    icon: <FaCode className="text-6xl text-[#9b8b7e] mb-6" />,
    title: 'Consistent Coding Streak',
    description: 'Maintained 150+ consecutive days of active coding, completing 500+ problem submissions across competitive programming platforms.',
  },
  {
    icon: <FaLightbulb className="text-6xl text-[#c9a961] mb-6 drop-shadow-[0_0_15px_rgba(201,169,97,0.5)]" />,
    title: 'Data Structures & Algorithms',
    description: 'Solved 200+ DSA problems on platforms like LeetCode, strengthening problem-solving skills and algorithmic thinking.',
  },
  {
    icon: <FaUsers className="text-6xl text-[#9b8b7e] mb-6" />,
    title: 'Real-World Project Experience',
    description: 'Contributed to multiple industry-level projects, gaining hands-on experience in building scalable and production-ready applications.',
  },
];

const PageContentLeft = ({ item, pageNum }) => (
  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#242424] border-r border-[#333] relative overflow-hidden">
    {/* Texture & Page Number */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 pointer-events-none" />
    <div className="absolute top-6 left-6 text-[#444] font-serif italic opacity-30 text-sm">Page {pageNum}</div>
    
    <div className="transform transition-all duration-500 hover:scale-110">
        {item.icon}
    </div>
    <h3 className="text-xl md:text-3xl font-bold text-[#e8e8e8] mt-4 font-serif text-center">
        {item.title}
    </h3>
  </div>
);

const PageContentRight = ({ item, pageNum }) => (
  <div className="w-full h-full flex flex-col items-start justify-center p-8 bg-[#2a2a2a] relative overflow-hidden">
    {/* Texture & Page Number */}
    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20 pointer-events-none" />
    <div className="absolute top-6 right-6 text-[#444] font-serif italic opacity-30 text-sm">Page {pageNum}</div>
    
    <div className="prose prose-invert relative z-10">
        <h4 className="text-[#c9a961] text-sm md:text-lg font-semibold mb-6 uppercase tracking-widest border-b border-[#c9a961]/30 pb-2 inline-block">
            Details
        </h4>
        <p className="text-sm md:text-lg text-[#b8b8c8] leading-relaxed font-serif">
            {item.description}
        </p>
    </div>
    {/* Watermark */}
    <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none">
        <FaTrophy size={100} />
    </div>
  </div>
);

const Achievements = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState(null); // 'next' or 'prev'

  const totalPages = achievements.length;

  const handleNext = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipDirection('next');
  };

  const handlePrev = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipDirection('prev');
  };

  const finishFlip = () => {
    if (flipDirection === 'next') {
        setCurrIdx((prev) => (prev + 1) % totalPages);
    } else if (flipDirection === 'prev') {
        setCurrIdx((prev) => (prev - 1 + totalPages) % totalPages);
    }
    setIsFlipping(false);
    setFlipDirection(null);
  };

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
        if (!isFlipping) handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currIdx, isFlipping]); 

  // Derived indices
  const nextIdx = (currIdx + 1) % totalPages;
  const prevIdx = (currIdx - 1 + totalPages) % totalPages;

  // Static Background Pages (Visible when not flipping, or under the moving page)
  const staticLeftItem = flipDirection === 'prev' ? achievements[prevIdx] : achievements[currIdx];
  const staticRightItem = flipDirection === 'next' ? achievements[nextIdx] : achievements[currIdx];
  
  // Page Numbers
  const staticLeftNum = flipDirection === 'prev' ? (prevIdx * 2 + 1) : (currIdx * 2 + 1);
  const staticRightNum = flipDirection === 'next' ? (nextIdx * 2 + 2) : (currIdx * 2 + 2);

  return (
    <section id="achievements" className="py-24 relative z-10 bg-[#1a1a1a] flex flex-col items-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
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

      <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center px-4">
        
        {/* Buttons */}
        <button 
            onClick={handlePrev}
            className="absolute left-2 md:left-4 z-50 p-3 rounded-full bg-[#242424] text-[#c9a961] border border-[#c9a961]/30 hover:bg-[#c9a961] hover:text-[#1a1a1a] transition-all shadow-lg"
        >
            <FaChevronLeft size={20} />
        </button>
        <button 
            onClick={handleNext}
            className="absolute right-2 md:right-4 z-50 p-3 rounded-full bg-[#242424] text-[#c9a961] border border-[#c9a961]/30 hover:bg-[#c9a961] hover:text-[#1a1a1a] transition-all shadow-lg"
        >
            <FaChevronRight size={20} />
        </button>

        {/* 3D Book Stage */}
        <div className="relative w-full md:w-[800px] h-[400px] md:h-[500px] perspective-[2000px]">
            <div className="relative w-full h-full flex shadow-2xl rounded-xl bg-[#1a1a1a]">
                
                {/* STATIC LEFT PAGE (Bottom Layer) */}
                <div className="w-1/2 h-full z-0">
                    <PageContentLeft item={staticLeftItem} pageNum={staticLeftNum} />
                </div>

                {/* STATIC RIGHT PAGE (Bottom Layer) */}
                <div className="w-1/2 h-full z-0">
                     <PageContentRight item={staticRightItem} pageNum={staticRightNum} />
                </div>

                {/* SPINE */}
                <div className="absolute left-1/2 top-0 bottom-0 w-8 bg-gradient-to-r from-[#111] via-[#333] to-[#111] z-20 transform -translate-x-1/2 shadow-inner pointer-events-none"></div>

                {/* FLIPPING PAGE (Animation Layer) */}
                {isFlipping && (
                    <motion.div
                        className="absolute top-0 w-1/2 h-full z-40 origin-left"
                        style={{ 
                            left: '50%', 
                            transformStyle: 'preserve-3d',
                            backfaceVisibility: 'hidden' // Important for browser consistency
                        }}
                        initial={{ rotateY: flipDirection === 'next' ? 0 : -180 }}
                        animate={{ rotateY: flipDirection === 'next' ? -180 : 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        onAnimationComplete={finishFlip}
                    >
                        {/* FRONT FACE (Visible when page is on Right) */}
                        <div 
                            className="absolute inset-0 w-full h-full" 
                            style={{ backfaceVisibility: 'hidden' }}
                        >
                            {/* If Next: Show OLD Right. If Prev: Show NEW Right. */}
                            <PageContentRight 
                                item={flipDirection === 'next' ? achievements[currIdx] : achievements[prevIdx]} 
                                pageNum={flipDirection === 'next' ? (currIdx * 2 + 2) : (prevIdx * 2 + 2)} 
                            />
                        </div>

                        {/* BACK FACE (Visible when page is on Left) */}
                        <div 
                            className="absolute inset-0 w-full h-full" 
                            style={{ 
                                backfaceVisibility: 'hidden', 
                                transform: 'rotateY(180deg)' 
                            }}
                        >
                            {/* If Next: Show NEW Left. If Prev: Show OLD Left. */}
                            <PageContentLeft 
                                item={flipDirection === 'next' ? achievements[nextIdx] : achievements[currIdx]} 
                                pageNum={flipDirection === 'next' ? (nextIdx * 2 + 1) : (currIdx * 2 + 1)} 
                            />
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
