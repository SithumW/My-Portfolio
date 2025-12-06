import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ParticlesBackground from '../components/ParticlesBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const formRef = useRef();

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await emailjs.sendForm(
        'your_service_id',
        'your_template_id', 
        formRef.current,
        'your_public_key'
      );
      setSubmitStatus('success');
      setFormData({ name: '', contactNumber: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socials = [
    { Icon: FaGithub, label: "GitHub", link: "https://github.com/SithumW" },
    { Icon: FaLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/sithum-weerasinghe-309629197" },
    { Icon: FaTwitter, label: "Twitter", link: "https://twitter.com/" },
  ];

  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden py-20">
      <ParticlesBackground />

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-15 blur-[150px] animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-15 blur-[150px] animate-pulse delay-300" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-lg sm:text-xl font-semibold mb-4 text-[#ffcc02]"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Let's Connect
          </motion.h3>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors duration-300"
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Phone Number (optional)"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="w-full px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors duration-300"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                className="w-full px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors duration-300 resize-none"
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#ff6b35] via-[#f7931e] to-[#ffcc02] hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Error sending message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="p-6 rounded-lg bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-[#ff6b35]/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-2 text-[#ffcc02]">Let's Chat</h4>
              <p className="text-gray-300">Have a question or project in mind? Feel free to get in touch. I'd love to collaborate!</p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50">
              <h4 className="text-xl font-bold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socials.map(({ Icon, label, link }) => (
                  <motion.a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gray-800/50 text-white hover:bg-[#ff6b35] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
