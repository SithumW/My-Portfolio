import Navbar from "./components/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";

export default function App() {
const [introDone, setIntroDone] = useState(false);  




  return (

    <>
    {!introDone && <IntroAnimation onFinish={()=> setIntroDone (true)} />}

    {introDone && (

    <div className ="relative gradient text-white">
      <CustomCursor/>
{  /*    <ParticlesBackground/> */}
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact/>
      <Footer />


    </div>


)}
        </>

  )
}