import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";

export default function App() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
         <Chatbot />  
      </div>
    </div>
  );
}
