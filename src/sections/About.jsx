
import { motion } from "framer-motion";
import avatar from "../assets/photo01.png"; // Your profile photo

export default function About(){
  // Background glow effects for visual appeal
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-10 blur-[160px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]"
  ];

  // Animation variants for content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
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
        {glows.map((glow, index) => (
          <div 
            key={index} 
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${glow}`}
          />
        ))}
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
          {/* Left side - Photo */}
          <motion.div 
            className="order-1 lg:order-1 flex justify-center"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] rounded-2xl blur-xl opacity-20 animate-pulse"></div>
              
              {/* Photo container */}
              <div className="relative bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] p-1 rounded-2xl">
                <div className="bg-black rounded-xl overflow-hidden">
                  <img 
                    src={avatar} 
                    alt="Profile picture" 
                    className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] rounded-full opacity-60 animate-bounce delay-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#302b63] to-[#00bf8f] rounded-full opacity-40 animate-bounce delay-2000"></div>
            </div>
          </motion.div>

          {/* Right side - Content */}
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
              <p className="text-lg sm:text-xl text-white leading-relaxed">
                A software developer and undergraduate at the University of Sri Jayewardenepura. My work spans full-stack development, cloud systems, and IoT engineering. I focus on building efficient, reliable, and scalable solutions while constantly learning and exploring new technologies.
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