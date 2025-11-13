import { motion } from 'framer-motion';
import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaHeart,
  FaArrowUp
} from 'react-icons/fa';
import ParticlesBackground from '../components/ParticlesBackground';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social links
  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/SithumW",
      label: "GitHub"
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/sithum-weerasinghe-309629197",
      label: "LinkedIn"
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/",
      label: "Twitter"
    },
    {
      icon: FaEnvelope,
      url: "mailto:sithum.weerasinghe@example.com",
      label: "Email"
    }
  ];

  // Quick navigation links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white text-black overflow-hidden">
      <ParticlesBackground/>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-700/50 to-black pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-r from-[#00bf8f]/10 to-[#1cd8d2]/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-1/4 w-24 h-24 bg-gradient-to-r from-[#1cd8d2]/10 to-[#00bf8f]/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 text-center md:text-left"
            >
              <h3 className="text-3xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2]">
                  Sithum Weerasinghe
                </span>
              </h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-sm mx-auto md:mx-0">
                Full-stack developer passionate about creating innovative digital experiences 
                and solving complex problems through code.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-gray-400">
                <span>we work in the dark to serve the light!</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-center"
            >
              <h4 className="text-xl font-semibold text-white">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#00bf8f] transition-colors duration-300 text-base inline-block relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6 text-center md:text-left"
            >
              <h4 className="text-xl font-semibold text-white">Connect With Me</h4>
              <div className="flex justify-center md:justify-start gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <div className="w-12 h-12 bg-gray-800/50 border border-gray-600 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#00bf8f] group-hover:to-[#1cd8d2] group-hover:border-transparent transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors duration-300" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
              
              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="mx-auto md:mx-0 flex items-center justify-center space-x-2 text-sm text-gray-400 hover:text-[#00bf8f] transition-colors duration-300 group bg-gray-800/30 px-4 py-2 rounded-lg border border-gray-700 hover:border-[#00bf8f]/50"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowUp className="w-4 h-4 group-hover:animate-bounce" />
                <span>Back to Top</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
            <p className="text-black-400 text-base text-center font-medium">
              © {currentYear} Sithum Weerasinghe. All rights reserved.
            </p>
        
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#00bf8f] to-transparent"></div>
    </footer>
  );
};

export default Footer;
