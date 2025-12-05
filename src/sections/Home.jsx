import { useState, useEffect, useMemo } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import avatar from "../assets/sithumw_superhero_rm-min.png";


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


export default function Home(){

const roles = useMemo(()=> ["Developer", "Innovator","CTF Player","Tech Enthusiast"],[]);


const [index, setIndex] =useState (0);        // Current role index
const [subindex, setSubindex] = useState (0); // Current character index
const [deleting, setDeleting] = useState (false); // Whether currently deleting characters



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



  return (
    <section
    id="home" className="w-full h-screen relative bg-black overflow-hidden">
      <ParticlesBackground/>
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
    
              Sithum  Weerasinghe
            </span>
          </motion.h1>

          <motion.p className ="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl ms-auto lg:mx-0"
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{delay : 0.4, duration:0.8}}
          >
            I love bringing ideas to life through code — blending creativity, technology, and a bit of curiosity to build things that are smart, useful, and fun to create.
          </motion.p>

<motion.div className ="mt-10 flex flex-wrap itemx-center justify-center lg:justify-start gap-6" 
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{delay:0.8, duration:0.8}}>


  <a href ="#projects"
  className="px-6 py-3 rounded-full font-medium text-lg text-white
  bg-gradient-to-r from-[#1cdBd2] via-[#00bf8f] to-[#302b63]
  shadow-lg hover:scale-105 transition-all"

  >View My Work</a>

  <a href ="/CV_SithumWeerasinghe.pdf"
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

    <div
    className ="absolute pointer-events-none -z-10"
    style={{
      top: "calc(50% - 20px)",
      right: "calc(-110px + min(55vw,780px)/2 - min(22vw, 410px)/2)",
      transform: "translateY(-65%)",
      width: "min(22vw, 410px)" , height : "min(40vh, 760px)" ,borderRadius :"50%",
      filter: "blur(38px)",opacity :0.32,
      background : "conic-gradient(from 0deg, #ff6b35, #f7931e, #ffcc02, #ff6b35)"
    }}
    
    />

      <img src={avatar} alt="SithumW"
      className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
      style={{
        right :"-40px", width: "mon(55vw,780px)", maxHeight :"90vh", bottom:"10px"

      }}
      initial={{opacity:0, y:40, scale:0.98}}
      animate={{opacity:1, y:0, scale:1.15}}
      transition={{delay:0.2, duration:0.8}}


      ></img>
    </div>


    </div>

      </div>
    </section>
  )
}