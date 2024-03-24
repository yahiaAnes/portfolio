'use client'

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skils from "./components/Skils";
import Works from "./components/Works";
import Mail from "./components/Mail";
import { motion , useScroll} from "framer-motion";
import Footer from "./components/Footer";
import { useRef } from "react";


 function Home() {
  const{scrollYProgress} = useScroll();


  return (
    <>
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      
          <Navbar />
          <Main />
          <About />
          <Skils />
          <Works />
          <Mail />
          <Footer />
    
    </>
  );
}
export default Home;