import { useState } from "react";
import { useRef, useMemo, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
// For testing: map all project image variables to the same placeholder image
// Replace `img1.JPG` with any real placeholder image in `src/assets` when available
import placeholderImg from "../assets/img1.JPG";

import swappoimg from "../assets/swappo_mobile.png";
import swappoimgWide from "../assets/swappo_desktop.png";


import sparksense from "../assets/sparksense.jpg";
import sparksensewide from "../assets/sparksense_wide_cropped.jpg";


import ecom from "../assets/ecom.png";
import ecomWide from "../assets/ecom_wide.png";


import pos from "../assets/pos.png";
import pos_wide from "../assets/pos_wide.png";


import { AnimatePresence } from "framer-motion";
import {motion} from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground.jsx";

const swappoImg = swappoimg;
const swappoImgWide = swappoimgWide;
const sparksenseImg = sparksense;
const sparksenseImgWide = sparksensewide;
const ecom_image = ecom;
const ecom_wide_image = ecomWide;


const smartclassroomImgWide = placeholderImg;
const posImg = pos;
const posImgWide = pos_wide;


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
    link: "https://github.com/SithumW/Swappo.git",
    description: "A location-based e-commerce platform where users can buy, sell, and swap products nearby using React, Node.js, and MongoDB.",
    bgColor: "#327284aa",
    image: isMobile ? swappoImg : swappoImgWide
  },
  {
    title: "SparkSense",
    link: "https://github.com/SithumW/SparkSense.git",
    description: "An IoT-powered energy monitoring system that tracks and visualizes real-time power usage with ESP32 and AWS integration.",
    bgColor: "#299ae0ff",
    image: isMobile ? sparksenseImg : sparksenseImgWide
  },
  {
    title: "Spring Microservices",
    link: "https://github.com/SithumW/Ecommerce-microservices.git",
    description: "A Spring Boot microservices-based e-commerce application with independent services for order management, product catalog, and user management.",
    bgColor: "#b68d57ff",
    image: isMobile ? ecom_image : ecom_wide_image
  },
  {
    title: "POS System (Angular)",
    link: "https://github.com/SithumW/Pos-System-Devops.git",
    description: "A modern Point of Sale system built with Angular and Express, featuring inventory management and real-time billing.",
    bgColor: "#ff8080ff",
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
                  className={`block text-center ${
                    isMobile ? "text-[clamp(1.5rem,4vw,2.5rem)]" : "text-[clamp(2rem,6vw,5rem)]"
                  } text-white/95 sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%] sm:mb-0
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