import { motion } from "framer-motion";
import { MdSchool, MdMenuBook, MdCode, MdVerified, MdEmojiEvents, MdCheckCircle } from "react-icons/md";

export default function Education() {
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

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const educationData = [
    {
      degree: "Bachelor of Information and Communication Technology (Hons)",
      institution: "Faculty of Technology, University of Sri Jayewardenepura",
      year: "2023 - 2027",
      badge: "GPA: 3.89",
      icon: <MdSchool className="w-5 h-5" />,
      side: "left"
    },
    {
      degree: "Diploma in English and Literature - Level 03",
      institution: "Aquinas College of Higher Studies - Colombo 10",
      year: "2022",
      badge: "",
      icon: <MdMenuBook className="w-5 h-5" />,
      side: "right"
    },
    {
      degree: "Diploma in Software Engineering",
      institution: "Esoft Metro Campus - Piliyandala",
      year: "2021",
      badge: "Pearson Certified",
      icon: <MdCode className="w-5 h-5" />,
      side: "left"
    },
    {
      degree: "GCE Advanced Level Examination",
      institution: "Ananda College - Colombo 10",
      year: "2021 (2022)",
      badge: "Z-Score: 2.6109",
      detail: "Colombo District 13th",
      icon: <MdVerified className="w-5 h-5" />,
      side: "right"
    },
    {
      degree: "GCE Ordinary Level Examination",
      institution: "Central College - Piliyandala",
      year: "2018",
      badge: "",
      detail: "7 'A' passes including Maths, ICT and Science",
      icon: <MdEmojiEvents className="w-5 h-5" />,
      side: "left"
    }
  ];

  return (
    <section
      id="education"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden py-24 px-4"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1cd8d2]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1cd8d2]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
        <motion.header
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            Education
          </h1>
     
        </motion.header>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Timeline center line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-slate-800 -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                className="relative flex items-center group"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-700 absolute left-1/2 -translate-x-1/2 z-10 transition-all duration-300 group-hover:bg-[#1cd8d2]">
                  <span className="text-white">{education.icon}</span>
                </div>

                {/* Left side content */}
                {education.side === "left" ? (
                  <>
                    <div className="w-full md:w-1/2 md:pr-12">
                      <motion.div
                        className="relative p-1 rounded-xl overflow-hidden"
                        whileHover={{ x: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Solid color background */}
                        <div className="absolute inset-0 bg-[#1cd8d2]/50 rounded-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-[#1cd8d2]/10 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="relative bg-[#171825] rounded-xl p-6 z-10">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#1cd8d2]">
                              {education.year}
                            </p>
                            {education.badge && (
                              <span className="text-[#ff6b35] font-bold text-sm">
                                {education.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-white">
                            {education.degree}
                          </h3>
                          <p className="text-slate-400 mt-1 text-sm">
                            {education.institution}
                          </p>
                          {education.detail && (
                            <p className="text-slate-500 text-sm mt-1">
                              {education.detail}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    </div>
                    <div className="hidden md:block w-1/2" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block w-1/2" />
                    <div className="w-full md:w-1/2 md:pl-12">
                      <motion.div
                        className="relative p-1 rounded-xl overflow-hidden"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Solid color background */}
                        <div className="absolute inset-0 bg-[#1cd8d2]/50 rounded-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-[#1cd8d2]/10 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="relative bg-[#171825] rounded-xl p-6 z-10">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#1cd8d2]">
                              {education.year}
                            </p>
                            {education.badge && (
                              <span className="text-[#ff6b35] font-bold text-sm">
                                {education.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-white">
                            {education.degree}
                          </h3>
                          <p className="text-slate-400 mt-1 text-sm">
                            {education.institution}
                          </p>
                          {education.detail && (
                            <p className="text-slate-500 text-sm mt-1">
                              {education.detail}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
