import { useState, useEffect, useMemo } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import AvatarParticles from "../components/AvatarParticles";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import superheroVid from "../assets/superhuman_vid.webm";


const socials = [ // Social media links
  { Icon: FaGithub, label: "GitHub", link: "https://github.com/SithumW" },
  { Icon: FaLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/sithum-weerasinghe-309629197" },
  { Icon: FaTwitter, label: "Twitter", link: "https://twitter.com/" },
];

const glowVarients ={
  initial : {scale:1,y:0, filter:"drop-shadow(0 0 0 rgba(0,0,0,0)) "},
  hover:{
    scale : 1.2, y:-3 ,
    filter : "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition : {type : "spring", stiffness : 300, damping:15}

  }, 
  tap: {scale: 0.95, y:0, transition : {duration:0.08}}
}

// Loading screen component
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full relative flex items-center justify-center"
               style={{
                 background: "conic-gradient(from 0deg, #ff6b35, #1cd8d2, #00bf8f, #ff6b35)",
                 animation: "spin 2s linear infinite"
               }}>
            <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#ff6b35] via-[#f7931e] to-[#ffcc02] animate-pulse"></div>
            </div>
          </div>
        </div>
        <motion.h2 
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] via-[#f7931e] to-[#ffcc02]"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
        </motion.h2>
      </div>
    </div>
  );
};


export default function Home(){

const roles = useMemo(()=> ["Developer", "Innovator","CTF Player","Tech Enthusiast"],[]);

const [avatarLoaded, setAvatarLoaded] = useState(false);
const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
const [index, setIndex] =useState (0);        // Current role index
const [subindex, setSubindex] = useState (0); // Current character index
const [deleting, setDeleting] = useState (false); // Whether currently deleting characters

const handleSmoothScroll = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Detect screen size changes
useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };
  
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);



useEffect(() => {
  const current = roles[index];
  const timeout = setTimeout(() => {
    // Add characters when not deleting and haven't reached end
    if (!deleting && subindex < current.length) {
      setSubindex(v => v + 1);
    }
    // Start deleting after reaching end of word
    else if (!deleting && subindex === current.length) {
      setTimeout(() => setDeleting(true), 1200);
    }
    // Remove characters when deleting
    else if (deleting && subindex > 0) {
      setSubindex(v => v - 1);
    }
    // Move to next role after deleting all characters
    else if (deleting && subindex === 0) {
      setDeleting(false);
      setIndex(v => (v + 1) % roles.length);
    }
  }, deleting ? 75 : 150); // Speed of typing and deleting
  
  return () => clearTimeout(timeout);
}, [subindex, index, deleting, roles]);

// Load video on desktop, skip on mobile
useEffect(() => {
  // On mobile, skip video loading and go straight to loaded state
  if (!isDesktop) {
    setAvatarLoaded(true);
    return;
  }

  // On desktop, wait for video to load
  const videoElement = document.querySelector('video');
  if (videoElement) {
    const handleCanPlay = () => {
      setAvatarLoaded(true);
    };
    
    videoElement.addEventListener('canplay', handleCanPlay);
    return () => videoElement.removeEventListener('canplay', handleCanPlay);
  } else {
    // Fallback: if video not found, load anyway after a delay
    const timer = setTimeout(() => {
      setAvatarLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }
}, [isDesktop]);

// Show loading screen until content is ready
if (!avatarLoaded) {
  return <LoadingScreen />;
}

  return (
    <section
    id="home" className="w-full h-screen relative bg-black overflow-hidden font-sans">
      <ParticlesBackground/>
      {isDesktop && <AvatarParticles/>}
      <div className="absolute inset-0">

        <div className="absolute -top-58 -left-78
        w-[70vw] sm:w-[50vw] md:w-[40vw]
        h-[70vw] sm:h-[50vw] md:h-[40vw]
        rounded-full
        bg-purple-700/20
        bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-30 sm:opacity-20 md:opacity-10
        blur-[100px] sm:blur-[130px] md:blur-[150px]
        animate-pulse

        ">

        </div>

        <div
        className="absolute -bottom-60 -right-0
        w-[70vw] sm:w-[50vw] md:w-[40vw]
        h-[70vw] sm:h-[50vw] md:h-[40vw]
        rounded-full
        bg-purple-700/20
        bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-30 sm:opacity-20 md:opacity-10
        blur-[100px] sm:blur-[130px] md:blur-[150px]
        animate-pulse delay-500

        ">


        </div>

    <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
        <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
          
          
          
          <motion.div
          className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
          initial={{opacity:0, y:12}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.6}} 
          >
            <span>

                          {roles[index].substring(0, subindex)}

            </span>

          <span className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle" style ={{height: "1em"}}>
          
          </span>


          </motion.div>


          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text
          bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
          initial={{opacity:0, y:40}}
          animate={{opacity:1, y:0}}
          transition={{duration:1}}
          >

            Hello I'm 
            <br/>
            <span className="text-white sm:text-5xl md:text-6xl lg:text-7xl font-bold lg:whitespace-nowrap" >
    
              Sithum Weerasinghe
            </span>
          </motion.h1>

          <motion.p className ="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl ms-auto lg:mx-0"
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{delay : 0.4, duration:0.8}}
          >
            I'm a full stack developer (SithumW) specializing in building innovative, scalable web applications. I blend creativity, technology, and expertise to create solutions that are smart, useful, and engaging.
          </motion.p>

<motion.div className ="mt-10 flex flex-wrap itemx-center justify-center lg:justify-start gap-6" 
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{delay:0.8, duration:0.8}}>


  <motion.button
  onClick={() => handleSmoothScroll('projects')}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-3 rounded-full font-medium text-lg text-white
  bg-gradient-to-r from-[#ffcc02] via-[#ff6b35] to-[#ff6b35]
  shadow-lg hover:scale-105 transition-all"

  >View My Work</motion.button>

  <a href ="/Sithum_Weerasinghe_CV.pdf"
  download
  className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
  >My Resume</a>
</motion.div>


<div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
  {socials.map(({ Icon, label, link }) => (
    <motion.a 
      href={link}
      key={label}
      target="_blank"
      aria-label={label}
      rel="noopener noreferrer"
      variants={glowVarients}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className="text-gray-300"
    >
      <Icon />
    </motion.a>
  ))}
</div>




      </div>

    </div>

    <div className="relative hidden lg:block">

    <motion.div
    className ="absolute pointer-events-none -z-10"
    style={{
      top: "calc(25% - 20px)",
      right: "calc(-101px + min(55vw,780px)/2 - min(22vw, 410px)/2 - min(22vw, 410px) * 0.05)",
      transform: "translateY(-26%)",
      width: "min(22vw, 410px)" , height : "min(40vh, 760px)" ,borderRadius :"50%",
      filter: "blur(80px)",
      background : "conic-gradient(from 0deg, #ff6b35, #f7931e, #ffcc02, #ff6b35)"
    }}
    animate={{ opacity: [0.25, 0.4, 0.25] }}
    transition={{ duration: 4, repeat: Infinity }}
    
    />

      {/* Video - Only loaded on desktop */}
      {isDesktop && (
        <motion.video
          src={superheroVid}
          autoPlay
          loop
          muted
          preload="none"
          className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
          style={{
            right: "-30px",
            width: "150vw",
            maxHeight: "120vh",
            aspectRatio: "1/1",
            bottom: "10px"
          }}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1.7}}
          transition={{ delay: 0.2, duration: 0.8 }}
        />
      )}
    </div>


    </div>

      </div>
    </section>
  )
}