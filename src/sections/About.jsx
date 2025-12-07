import { motion } from "framer-motion";
import avatar from "../assets/photo03.jpeg"; // Your profile photo

export default function About(){

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, rotateY: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, rotateY: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return(
    <section 
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden py-20"
    >
      {/* Background glow effects - Homepage theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-58 -left-78 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] rounded-full bg-[#1cd8d2]/30 opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" />
        <div className="absolute -bottom-60 -right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] rounded-full bg-[#1cd8d2]/30 opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left side - Photo */}
          <motion.div 
            className="flex justify-center"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Gradient border frame with glowing corners */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-96 rounded-3xl overflow-hidden">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35] via-[#1cd8d2] to-[#ff6b35] rounded-3xl p-1">
                  {/* Inner image container */}
                  <div className="w-full h-full bg-black rounded-3xl overflow-hidden relative">
                    <img 
                      src={avatar} 
                      alt="Profile picture" 
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Glowing corner elements */}
                {/* Top-right golden circle */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#ffcc02] to-[#ff6b35] rounded-full blur-lg opacity-60 animate-pulse" />
                
                {/* Bottom-left cyan circle */}
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#1cd8d2] rounded-full blur-md opacity-40 animate-pulse delay-500" />

                {/* Subtle glow shadow */}
                <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-[#ff6b35]/30" />
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={itemVariants}
          >
            {/* Section title */}
            <div className="mb-8">
              <h2 className="text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] via-[#f7931e] to-[#ffcc02] mb-2 uppercase tracking-widest">
                About Me
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Who I Am
              </h1>
            </div>

            {/* About text content */}
            <div className="space-y-6 mb-8">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Software developer and undergraduate at the University of Sri Jayewardenepura. I specialize in full-stack development, cloud systems, and IoT engineering.
              </p>
            </div>

            {/* Skills highlight */}
            <div>
              <h3 className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] via-[#f7931e] to-[#ffcc02] mb-4 uppercase tracking-widest">
                What I Love
              </h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  "Web Development", 
                  "Problem Solving", 
                  "CTF Competitions", 
                  "Innovation", 
                  "Learning"
                ].map((item, index) => (
                  <motion.span 
                    key={index}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white hover:border-[#ff6b35] hover:bg-[#ff6b35]/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

}