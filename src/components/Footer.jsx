import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 relative z-10 glass border-t border-white/5 bg-slate-900/50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Mausam Kumari. All Rights Reserved.
        </p>
        
        <div className="flex items-center text-slate-400 text-sm gap-2">
          <span>Built with</span>
          <FaHeart className="text-[#38bdf8] animate-pulse drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]" />
          <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
