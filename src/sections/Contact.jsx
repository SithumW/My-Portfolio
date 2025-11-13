import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaCheck,
  FaTimes
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''
  const formRef = useRef();

  // Contact information
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "sithumnirmal2002@gmail.com",
      link: "mailto:sithumnirmal2002@gmail.com",
      color: "#4ECDC4"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+94 71 303 8590",
      link: "tel:+15551234567",
      color: "#4ECDC4"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: "https://maps.google.com",
      color: "#45B7D1"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Replace these with your EmailJS service details
      await emailjs.sendForm(
        'your_service_id',
        'your_template_id', 
        formRef.current,
        'your_public_key'
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-black text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-20 right-20 w-6 h-6 border-2 border-[#00bf8f]/40 rotate-45"
          animate={{
            y: [0, -20, 0],
            rotate: [45, 225, 45]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-4 h-4 bg-[#1cd8d2]/40 rounded-full"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] mb-4">
              Get In Touch
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Let's Create Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2]">
                Amazing Together
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Whether you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={itemVariants}
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group block"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-white/30 transition-all duration-300 group-hover:bg-gray-800/50">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${info.color}20`, border: `2px solid ${info.color}40` }}
                    >
                      <IconComponent 
                        className="w-8 h-8"
                        style={{ color: info.color }}
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00bf8f] transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-16 max-w-4xl mx-auto">
            
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
                <h4 className="text-2xl font-bold text-white mb-6">
                  Send me a message
                </h4>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bf8f] focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bf8f] focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bf8f] focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bf8f] focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project or just say hi!"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] hover:shadow-lg hover:shadow-[#00bf8f]/25 hover:scale-105'
                    } text-black`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-3"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </div>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center justify-center p-4 rounded-lg ${
                        submitStatus === 'success' 
                          ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                          : 'bg-red-500/20 border border-red-500/50 text-red-400'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <>
                          <FaCheck className="mr-2" />
                          Message sent successfully! I'll get back to you soon.
                        </>
                      ) : (
                        <>
                          <FaTimes className="mr-2" />
                          Something went wrong. Please try again or contact me directly.
                        </>
                      )}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
