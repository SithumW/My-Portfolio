import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import ParticlesBackground from '../components/ParticlesBackground';
import { MdArrowOutward } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef();

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Initialize EmailJS
      emailjs.init('ym3bh_pLKZ8Q61Vym');

      // Send email using EmailJS
      await emailjs.send(
        'service_6wudb9u',
        'template_xkxqf8s',
        {
          to_email: 'sithumnirmal2002@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
        },
        'ym3bh_pLKZ8Q61Vym'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="relative min-h-screen w-full bg-black overflow-hidden py-16 sm:py-20 px-4">
      <ParticlesBackground />
      
      {/* Animated background blobs matching HomePage theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1cd8d2]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1cd8d2]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left side - Heading */}
          <motion.div className="flex flex-col justify-center text-center md:text-left md:col-span-2 h-full" variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider leading-tight">
              <span className="block text-white text-2xl sm:text-3xl md:text-4xl mb-2">Get In</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] via-[#f7931e] to-[#ffcc02]">
                Touch
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
            Ideas? You are always welcome...
              </p>
          </motion.div>

          {/* Right side - Form */}
          <motion.div className="md:col-span-3" variants={itemVariants}>
            <div className="w-full rounded-xl bg-[#171825] border border-slate-700 p-6 sm:p-8 lg:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} ref={formRef} className="space-y-5">
                {/* Name field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Name"
                    className={`w-full h-14 bg-slate-900/50 border-2 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent transition-all duration-300 focus:outline-none peer ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-[#1cd8d2]'
                    }`}
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-4 text-sm transition-all duration-300 pointer-events-none ${
                      focusedField === 'name' || formData.name
                        ? 'top-2 text-xs text-[#1cd8d2]'
                        : 'top-4 text-slate-400'
                    }`}
                  >
                    Name
                  </label>
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email and Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email field */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Email"
                      className={`w-full h-14 bg-slate-900/50 border-2 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent transition-all duration-300 focus:outline-none peer ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-[#1cd8d2]'
                      }`}
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-4 text-sm transition-all duration-300 pointer-events-none ${
                        focusedField === 'email' || formData.email
                          ? 'top-2 text-xs text-[#1cd8d2]'
                          : 'top-4 text-slate-400'
                      }`}
                    >
                      Email
                    </label>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone field */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Phone (Optional)"
                      className={`w-full h-14 bg-slate-900/50 border-2 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent transition-all duration-300 focus:outline-none peer ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-[#1cd8d2]'
                      }`}
                    />
                    <label
                      htmlFor="phone"
                      className={`absolute left-4 text-sm transition-all duration-300 pointer-events-none ${
                        focusedField === 'phone' || formData.phone
                          ? 'top-2 text-xs text-[#1cd8d2]'
                          : 'top-4 text-slate-400'
                      }`}
                    >
                      Phone (Optional)
                    </label>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Message field */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your message..."
                    rows="5"
                    className={`w-full bg-slate-900/50 border-2 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent resize-none transition-all duration-300 focus:outline-none peer ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-[#1cd8d2]'
                    }`}
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-4 text-sm transition-all duration-300 pointer-events-none ${
                      focusedField === 'message' || formData.message
                        ? 'top-2 text-xs text-[#1cd8d2]'
                        : 'top-6 text-slate-400'
                    }`}
                  >
                    Your message...
                  </label>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-full h-14 overflow-hidden rounded-full bg-[#1cd8d2] text-black font-bold text-lg shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_30px_rgba(28,216,210,0.5)]"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <MdArrowOutward className="group-hover:translate-x-1 transition-transform duration-300" size={20} />}
                    </span>
                  </motion.button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-200 text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-center"
                  >
                    ✗ Failed to send message. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
