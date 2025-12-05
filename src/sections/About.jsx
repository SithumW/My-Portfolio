import { motion } from "framer-motion";
import avatar from "../assets/photo03.jpeg"; // Your profile photo

export default function About(){

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return(
    <section 
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden py-20"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[160px] animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[100px] animate-pulse" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left side - Photo with new frame design */}
          <motion.div 
            className="order-1 lg:order-1 flex justify-center"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Dynamic glow backdrop */}
              <motion.div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                style={{
                  background: "conic-gradient(from 0deg, #ff6b35, #f7931e, #ffcc02, #ff6b35)",
                  filter: "blur(40px)"
                }}
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Main photo frame with gradient border */}
              <div className="relative bg-gradient-to-br from-[#ff6b35] via-[#1cd8d2] to-[#302b63] p-1.5 rounded-3xl shadow-2xl">
                <div className="bg-black rounded-3xl overflow-hidden" style={{ contain: "layout style paint" }}>
                  <img 
                    src={avatar} 
                    alt="Profile picture" 
                    className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: "1/1" }}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div 
                className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-[#ff6b35] to-[#ffcc02] rounded-full opacity-70"
                animate={{
                  y: [0, -10, 0],
                  rotate: 360
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity
                }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-[#302b63] to-[#1cd8d2] rounded-full opacity-60"
                animate={{
                  y: [0, 10, 0],
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 1
                }}
              />
            </div>
          </motion.div>

          {/* Right side - Content with original design */}
          <div 
            className="order-2 lg:order-2 text-center lg:text-left"
          >
            {/* Section title */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-2"
                  style={{
                    background: "conic-gradient(from 0deg, #ff6b35, #f7931e, #ffcc02, #ff6b35)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>
                About Me
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
                Who I Am
              </h3>
            </div>

            {/* About text content */}
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Software developer and undergraduate at the University of Sri Jayewardenepura. I specialize in full-stack development, cloud systems, and IoT engineering.
              </p>
            </div>

            {/* Skills highlight */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">What I Love</h4>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  "Web Development", 
                  "Problem Solving", 
                  "CTF Competitions", 
                  "Innovation", 
                  "Learning"
                ].map((item, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-[#302b63] to-[#00bf8f] rounded-full text-sm font-medium text-white shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );

}