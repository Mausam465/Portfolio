import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiX } from 'react-icons/hi';
import { BsThreeDots } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Skills', to: 'skills' },
    { name: 'Certificates', to: 'certificates' },
    { name: 'Internships', to: 'internship' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Projects', to: 'projects' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 sm:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-[#c9a961]/10' : 'bg-transparent py-4 sm:py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center relative">
        <Link to="home" smooth duration={500} className="text-xl sm:text-2xl font-bold cursor-pointer text-[#e8e8e8] hover:text-[#c9a961] transition-colors whitespace-nowrap">
          MK<span className="text-[#c9a961]">.❑</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth
              duration={500}
              spy
              activeClass="text-[#c9a961]"
              className="text-sm font-medium text-[#b8b8c8] hover:text-[#c9a961] cursor-pointer transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Three-Dot Menu */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-[#e8e8e8] hover:text-[#c9a961] focus:outline-none transition-colors p-2"
            aria-label="Menu"
          >
            {isOpen ? <HiX size={24} /> : <BsThreeDots size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-[#c9a961]/10 shadow-lg"
          >
            <div className="flex flex-col px-4 sm:px-6 py-4 space-y-1 max-h-[60vh] overflow-y-auto">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={item.to}
                    smooth
                    duration={500}
                    spy
                    activeClass="text-[#c9a961] bg-[#c9a961]/10"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm sm:text-base font-semibold text-[#b8b8c8] hover:text-[#c9a961] hover:bg-[#c9a961]/5 cursor-pointer transition-all rounded-lg px-4 py-2.5 sm:py-3"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
