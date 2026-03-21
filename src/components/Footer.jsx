import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-4 sm:py-6 md:py-8 relative z-10 glass border-t border-[#c9a961]/10 bg-[#242424]/30">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col gap-3 sm:gap-4 md:gap-0 md:flex-row justify-between items-center md:items-center text-center md:text-left">
        <p className="text-[#a8a8b8] text-xs sm:text-sm" style={{ fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}>
          © {new Date().getFullYear()} Mausam Kumari. All Rights Reserved.
        </p>
        
        <div className="flex items-center justify-center text-[#a8a8b8]" style={{ fontSize: "clamp(0.75rem, 2vw, 0.875rem)", gap: "clamp(6px, 1vw, 8px)" }}>
          <span>Built with</span>
          <FaHeart className="text-[#c9a961] animate-pulse drop-shadow-[0_0_5px_rgba(201,169,97,0.8)] flex-shrink-0" style={{ width: "clamp(12px, 3vw, 16px)", height: "clamp(12px, 3vw, 16px)" }} />
          <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
