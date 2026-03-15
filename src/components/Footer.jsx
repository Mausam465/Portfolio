import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 relative z-10 glass border-t border-[#c9a961]/10 bg-[#242424]/30">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[#a8a8b8] text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Mausam Kumari. All Rights Reserved.
        </p>
        
        <div className="flex items-center text-[#a8a8b8] text-sm gap-2">
          <span>Built with</span>
          <FaHeart className="text-[#c9a961] animate-pulse drop-shadow-[0_0_5px_rgba(201,169,97,0.8)]" />
          <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
