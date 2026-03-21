import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-[#e8e8e8]"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#c9a961] mx-auto rounded-full shadow-[0_0_10px_rgba(201,169,97,0.3)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#e8e8e8]">Let's talk about everything!</h3>
            <p className="text-[#a8a8b8] text-sm sm:text-base md:text-lg leading-relaxed">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-4 sm:space-y-6 pt-4">
              <div className="flex items-center gap-3 sm:gap-4 group">
                <div className="w-10 sm:w-12 h-10 sm:h-12 glass flex justify-center items-center rounded-full text-[#c9a961] group-hover:bg-[#c9a961] group-hover:text-[#0f0f1e] transition-colors duration-300 border-[#c9a961]/10 shadow-[0_0_15px_rgba(201,169,97,0.15)] flex-shrink-0 text-sm sm:text-base">
                  <FaEnvelope />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-[#e8e8e8] text-sm sm:text-base">Email</h4>
                  <p className="text-[#a8a8b8] text-xs sm:text-sm truncate">mausam@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 group">
                <div className="w-10 sm:w-12 h-10 sm:h-12 glass flex justify-center items-center rounded-full text-[#9b8b7e] group-hover:bg-[#9b8b7e] group-hover:text-[#0f0f1e] transition-colors duration-300 border-[#c9a961]/10 shadow-[0_0_15px_rgba(155,139,126,0.15)] flex-shrink-0 text-sm sm:text-base">
                  <FaPhoneAlt />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-[#e8e8e8] text-sm sm:text-base">Phone</h4>
                  <p className="text-[#a8a8b8] text-xs sm:text-sm truncate">+91 00000 00000</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 group">
                <div className="w-10 sm:w-12 h-10 sm:h-12 glass flex justify-center items-center rounded-full text-[#c9a961] group-hover:bg-[#c9a961] group-hover:text-[#0f0f1e] transition-colors duration-300 border-[#c9a961]/10 shadow-[0_0_15px_rgba(201,169,97,0.15)] flex-shrink-0 text-sm sm:text-base">
                  <FaMapMarkerAlt />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-[#e8e8e8] text-sm sm:text-base">Location</h4>
                  <p className="text-[#a8a8b8] text-xs sm:text-sm truncate">Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 flex gap-3">
              <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 flex justify-center items-center rounded-full glass hover:bg-[#c9a961] hover:text-[#0f0f1e] transition-colors text-[#a8a8b8] border-[#c9a961]/10 text-xs sm:text-base flex-shrink-0"><FaGithub /></a>
              <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 flex justify-center items-center rounded-full glass hover:bg-[#9b8b7e] hover:text-[#0f0f1e] transition-colors text-[#a8a8b8] border-[#c9a961]/10 text-xs sm:text-base flex-shrink-0"><FaLinkedin /></a>
              <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 flex justify-center items-center rounded-full glass hover:bg-[#b8956a] hover:text-[#0f0f1e] transition-colors text-[#a8a8b8] border-[#c9a961]/10 text-xs sm:text-base flex-shrink-0"><FaTwitter /></a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="glass p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-[#c9a961]/10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-[#a8a8b8] ml-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-[#242424] border border-[#c9a961]/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-[#e8e8e8] placeholder-[#7a7a8a] text-sm focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-[#a8a8b8] ml-1">Your Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-[#242424] border border-[#c9a961]/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-[#e8e8e8] placeholder-[#7a7a8a] text-sm focus:outline-none focus:border-[#9b8b7e] focus:ring-1 focus:ring-[#9b8b7e] transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-[#a8a8b8] ml-1">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full bg-[#242424] border border-[#c9a961]/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-[#e8e8e8] placeholder-[#7a7a8a] text-sm focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-[#a8a8b8] ml-1">Message</label>
                <textarea rows="5" placeholder="Tell me about your project..." className="w-full bg-[#242424] border border-[#c9a961]/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-[#e8e8e8] placeholder-[#7a7a8a] text-sm focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-2.5 sm:py-3 px-6 rounded-lg bg-gradient-to-r from-[#9b8b7e] to-[#c9a961] text-[#0f0f1e] font-medium text-sm sm:text-base hover:opacity-90 transition-opacity shadow-[0_4px_15px_rgba(201,169,97,0.3)] hover:shadow-[0_4px_25px_rgba(201,169,97,0.5)]">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
