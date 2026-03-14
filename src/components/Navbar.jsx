import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-center items-center relative">
        <Link to="home" smooth duration={500} className="absolute left-0 text-2xl font-bold cursor-pointer text-[#e2e8f0]">
          MK<span className="text-[#38bdf8]">.</span>
        </Link>

        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth
              duration={500}
              spy
              activeClass="text-[#38bdf8]"
              className="text-sm font-medium text-slate-300 hover:text-[#38bdf8] cursor-pointer transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="absolute right-0 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#e2e8f0] focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth
                  duration={500}
                  spy
                  activeClass="text-[#38bdf8]"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-[#38bdf8] cursor-pointer transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
