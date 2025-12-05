import { motion } from 'framer-motion';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Quick navigation links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Subtle background effect with orange/yellow gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/10 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 text-center md:text-left"
            >
              <h3 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] via-[#f7931e] to-[#ffcc02]">
                  Sithum Weerasinghe
                </span>
              </h3>
              <p className="text-gray-400 text-sm max-w-md mx-auto md:mx-0">
                Full-stack developer passionate about creating innovative digital experiences.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-center md:text-right"
            >
              <div className="flex flex-wrap justify-center md:justify-end gap-6">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-[#ff6b35] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-6"
        >
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Sithum Weerasinghe. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative bottom accent with orange/yellow gradient */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;
