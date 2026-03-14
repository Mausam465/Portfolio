import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#e2e8f0]"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#38bdf8] mx-auto rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-4 text-[#e2e8f0]">Let's talk about everything!</h3>
            <p className="text-slate-400 text-lg">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass flex justify-center items-center rounded-full text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-slate-900 transition-colors duration-300 border-white/5 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">Email</h4>
                  <p className="text-slate-400">mausam@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass flex justify-center items-center rounded-full text-[#0ea5e9] group-hover:bg-[#0ea5e9] group-hover:text-slate-900 transition-colors duration-300 border-white/5 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">Phone</h4>
                  <p className="text-slate-400">+91 00000 00000</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass flex justify-center items-center rounded-full text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-slate-900 transition-colors duration-300 border-white/5 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">Location</h4>
                  <p className="text-slate-400">Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
              <a href="#" className="w-10 h-10 flex justify-center items-center rounded-full glass hover:bg-[#38bdf8] hover:text-slate-900 transition-colors text-slate-400 border-white/5"><FaGithub /></a>
              <a href="#" className="w-10 h-10 flex justify-center items-center rounded-full glass hover:bg-[#0ea5e9] hover:text-slate-900 transition-colors text-slate-400 border-white/5"><FaLinkedin /></a>
              <a href="#" className="w-10 h-10 flex justify-center items-center rounded-full glass hover:bg-[#1DA1F2] hover:text-slate-900 transition-colors text-slate-400 border-white/5"><FaTwitter /></a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="glass p-8 rounded-2xl border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-3 text-[#e2e8f0] placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Your Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-3 text-[#e2e8f0] placeholder-slate-600 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-3 text-[#e2e8f0] placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea rows="5" placeholder="Tell me about your project..." className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-3 text-[#e2e8f0] placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] text-white font-medium hover:opacity-90 transition-opacity shadow-[0_4px_15px_rgba(56,189,248,0.3)] hover:shadow-[0_4px_25px_rgba(56,189,248,0.5)]">
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
