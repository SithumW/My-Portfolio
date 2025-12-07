import { motion } from 'framer-motion';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <footer className="w-full bg-black/80 backdrop-blur-sm border-t border-slate-800/50 relative">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1cd8d2]/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Main footer content */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <a 
              href="#home"
              onClick={() => handleNavClick("home")}
              className="text-xs sm:text-sm text-slate-300 italic hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            >
              "The scroll ends. The story doesn't"
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-xs sm:text-sm text-slate-400 transition-all duration-300 hover:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#302b63] hover:via-[#00bf8f] hover:to-[#1cd8d2] font-medium"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 my-4"></div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
      
          <p className="text-xs text-slate-600">
            © {currentYear} SithumW. All rights reserved.
          </p>
          <p className="text-[8px] sm:text-[9px] text-slate-500 select-none">
            aHR0cHM6Ly95b3V0dS5iZS92aWlyQlhPWTZvWQ==
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
