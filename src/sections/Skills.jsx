


import { motion } from "framer-motion";
import { 
  FaGitAlt, 
  FaNodeJs, 
  FaReact, 
  FaPython,
  FaDatabase,
  FaJava
} from "react-icons/fa";
import { 
  SiExpress, 
  SiAngular, 
  SiArduino, 
  SiMysql
} from "react-icons/si";

export default function Skills() {
  // Skills data with icons and names
  const skills = [
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Arduino", icon: SiArduino, color: "#00979D" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "SQL", icon: SiMysql, color: "#4479A1" },
    { name: "Java", icon: FaJava, color: "#007396" },
  ];

  // Duplicate skills array for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section 
      id="skills"
      className="w-full h-[25vh] min-h-[300px] flex flex-col items-center justify-center relative bg-black/80 backdrop-blur-md border-t border-b border-slate-800/50 overflow-hidden"
      style={{ contain: "layout style paint" }}
    >
      {/* Skills Title */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 z-30">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
          <span className="text-white padding-y-2">
            Skills
          </span>
        </h2>
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
      
      {/* Scrolling container */}
      <div className="relative z-0 w-full h-full flex items-center mt-8 sm:mt-10 md:mt-12">
        <motion.div
          className="flex items-center space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 whitespace-nowrap will-change-transform"
          animate={{
            x: ["0%", "-100%"]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          style={{
            width: `${(skills.length * 2) * 100}px`
          }}
        >
          {duplicatedSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={`${skill.name}-${index}`}
                className="flex flex-col items-center justify-center group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Icon container */}
                <div className="relative mb-3 sm:mb-4">
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ backgroundColor: skill.color }}
                  ></div>
                  
                  {/* Icon */}
                  <div className="relative p-4 sm:p-5 md:p-6 lg:p-7 rounded-full bg-gray-800/50 border border-gray-600/50 group-hover:border-white/30 transition-all duration-300">
                    <IconComponent 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 transition-colors duration-300"
                      style={{ 
                        color: skill.name === "Express" ? "#ffffff" : skill.color 
                      }}
                    />
                  </div>
                </div>
                
                {/* Skill name */}
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Fade edges for smooth appearance */}
      <div className="absolute left-0 top-0 w-20 sm:w-32 md:w-40 h-full bg-gradient-to-r from-black/80 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-20 sm:w-32 md:w-40 h-full bg-gradient-to-l from-black/80 to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}