import { useState } from "react";
import { useRef, useMemo, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
// For testing: map all project image variables to the same placeholder image
// Replace `img1.JPG` with any real placeholder image in `src/assets` when available
import placeholderImg from "../assets/img1.JPG";
import { AnimatePresence } from "framer-motion";
import {motion} from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground.jsx";

const swappoImg = placeholderImg;
const swappoImgWide = placeholderImg;
const sparksenseImg = placeholderImg;
const sparksenseImgWide = placeholderImg;
const smartclassroomImg = placeholderImg;
const smartclassroomImgWide = placeholderImg;
const posImg = placeholderImg;
const posImgWide = placeholderImg;


/*
import swappoImg from "../assets/projects/swappo-mobile.png";
import swappoImgWide from "../assets/projects/swappo-wide.png"; 
import sparksenseImg from "../assets/projects/sparksense-mobile.png";
import sparksenseImgWide from "../assets/projects/sparksense-wide.png"; 
import smartclassroomImg from "../assets/projects/smartclassroom-mobile.png";
import smartclassroomImgWide from "../assets/projects/smartclassroom-wide.png"; 
import posImg from "../assets/projects/pos-mobile.png";
import posImgWide from "../assets/projects/pos-wide.png";
*/
const useIsMobile = (query = "(max-width : 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => {
      setIsMobile(e.matches);
    };
    mql.addEventListener("change", handler);
    return () => {
      mql.removeEventListener("change", handler);
    };
  }, [query]);

  return isMobile;
};


export default function Projects(){
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);
const projects = useMemo(() => [
  {
    title: "Swappo",
    link: "https://swappo-demo.com",
    description: "A location-based e-commerce platform where users can buy, sell, and swap products nearby using React, Node.js, and MongoDB.",
    bgColor: "#0d4d0d",
    image: isMobile ? swappoImg : swappoImgWide
  },
  {
    title: "SparkSense",
    link: "https://sparksense-demo.com",
    description: "An IoT-powered energy monitoring system that tracks and visualizes real-time power usage with ESP32 and AWS integration.",
    bgColor: "#1a237e",
    image: isMobile ? sparksenseImg : sparksenseImgWide
  },
  {
    title: "CRM",
    link: "https://smartclassroom-demo.com",
    description: "An intelligent classroom management system that automates and monitors electrical devices using IoT and cloud technology.",
    bgColor: "#4a148c",
    image: isMobile ? smartclassroomImg : smartclassroomImgWide
  },
  {
    title: "POS System (Angular)",
    link: "https://pos-angular-demo.com",
    description: "A modern Point of Sale system built with Angular and Express, featuring inventory management and real-time billing.",
    bgColor: "#b71c1c",
    image: isMobile ? posImg : posImgWide
  }
], [isMobile]); //re run only when isMobile changes


const {scrollYProgress} = useScroll({
  target: sceneRef,
  offset: ["start start", "end end"]
});

const thresholds = projects.map((_, i) => (i+1)/projects.length);
const [activeIndex, setActiveIndex] = useState(0);

useMotionValueEvent(scrollYProgress, "change", (v) => {
  const idx = thresholds.findIndex((t) => v <= t);
  setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
});

const activeProject = projects[activeIndex];



  return(



    <section id = "projects"
    ref={sceneRef}
     className ="relative text-white"
     style={{
      height : `${100*projects.length}vh`,
      backgroundColor : activeProject.bgColor,
      transition : "background-color 400ms ease"


     }}
    >
      <ParticlesBackground/>

      <div className ="sticky top-0 h-screen flex flex-col items-center justify-center">
        <h2 className={`text-3xl font-semibold z-10 text-center ${
          isMobile ? "mt-4" : "mt-8"

        }`}>
          My Work
        </h2>
<div className={`relative w-full flex-1 flex items-center justify-center ${
  isMobile ? "-mt-4" : ""
}`}>
        {projects.map((project, idx) => {
          return (
            <div key={project.title}
            className ={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-0 sm:z-10  "}`}
              style={{width : "85%", maxWidth :"1200px"}}

          >   

          <AnimatePresence mode="wait">
              {activeIndex === idx && (
                <motion.h3 
                  key={project.title}
                  initial={{opacity: 0, y: -30}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 30}}
                  transition={{duration: 0.5, ease: "easeOut"}}
                  className={`block text-center text-[clamp(2rem,6vw,5rem)] text-white/95 sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%] sm:mb-0
                  italic font-semibold ${
                    isMobile ? "-mt-24" : ""
                  }`}
                  style={{
                    zIndex: 5,
                    textAlign: isMobile ? "center" : "left"
                  }}
                >
                  {project.title}
                </motion.h3>
              )}
          </AnimatePresence>


          <div 
            className={`relative w-full overflow-hidden bg-black/20 shadow-2xl
            md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]
            ${ 
              isMobile ? "mb-6 rounded-lg" : "mb-10 sm:mb-12 rounded-xl"         
            }
            h-[62vh] sm:h-[66vh]
            `}
            style={{
              zIndex: 10,
              transition: "box-shadow 250ms ease"
            }}
          >
            <img src={project.image} alt={project.title}
            className="w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl"
            style={{ 
              position: "relative",
              zIndex: 10,
              filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.65))",
              transition: "filter 200ms ease"
            }}
            loading ="lazy" //lazy loading for performance
            />
            
            <div className = "pointer-events-none absolute inset-0"
            style={{
              zIndex : 11,
              background : "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 40%)"
            }}>


              </div>
            
          </div>
       </div>
          );
        })}
</div>
        
        <div className={`absolute ${
          isMobile ? "bottom-20" : "bottom-10"
        }`}>
          <a href ={activeProject.link}
          target ="_blank"
          rel ="noopener noreferrer"
          className ="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
          aria-label ={
            `View ${activeProject?.title}`
          }
          >View Project</a>
        </div>
</div>

    </section>
  )
}