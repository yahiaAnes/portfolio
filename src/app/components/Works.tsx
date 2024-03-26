'use client';
import dmcWeb from '../assets/dmc-web.png';
import nexmedWeb from '../assets/nexmed-web.png';
import Image from 'next/image';
import { useEffect ,useRef} from 'react';
import { useInView } from 'framer-motion';

function Works() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

/*
  useEffect(() => {
    const webBtn = document.getElementById("webBtn");
    const designBtn = document.getElementById("designBtn");
    const videoBtn = document.getElementById("videoBtn");
    console.log(webBtn);

    webBtn.addEventListener('click',()=>{
      console.log('test');
      const web = document.getElementById('web');
      const design = document.getElementById('design');
      const video = document.getElementById('video');
      web.classList.add("show_animation");
      design.classList.remove("show_animation");
      video.classList.remove("show_animation");
      web.style.display='flex';


    });
    designBtn.addEventListener('click',()=>{
      console.log('test');
      const web = document.getElementById('web');
      const design = document.getElementById('design');
      const video = document.getElementById('video');
      web.classList.remove("show_animation");
      design.classList.add("show_animation");
      video.classList.remove("show_animation");
      web.style.display='none';
    });
    videoBtn.addEventListener('click',()=>{
      console.log('test');
      const web = document.getElementById('web');
      const design = document.getElementById('design');
      const video = document.getElementById('video');
      web.classList.remove("show_animation");
      design.classList.remove("show_animation");
      video.classList.add("show_animation");
      web.style.display='none';
    });

  }, []); // Empty dependency array ensures execution after first render
  
  */

  return (
    <div   className='w-full     min-h-screen py-20'>
      <div>
        <div className='px-10 mb-10'>
          <div>
            <p className='text-[#00F7FF] '>My projects</p>
            <h1 className='text-4xl sm-text-5xl  font-bold text-white'><span>Projects that I've</span><strong className='text-[#00F7FF] '> made </strong></h1>
                
          </div>
        
                
        </div>
        <div className='flex justify-center   items-center'>
          <div className="webs flex justify-center flex-wrap items-center" id='web'>
              <div  ref={ref}  style={{
                    transform: isInView ? "none" : "translateX(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} className="card relative w-[350px] m-10  shadow-lg shadow-cyan-500/50 rounded-lg " >
                <a href="https://digitalmedcare.com">
                  <Image
                        src={dmcWeb} // Replace with your image path
                        alt="Background Image"
                        layout="cover" // Or "contain", "cover", or "intrinsic"
                        objectFit="cover" // Optional: control image positioning within the div
                        className='block  hover:opacity-10 ease-out duration-300 rounded-lg'
                    />
                    <div className='absolute rounded-lg top-0 bottom-0 left-0 right-0 w-full  bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center items-center bg-slate-100 -z-10'>
                      <strong className='text-white text-2xl'>take a look</strong>
                    </div>
                  </a> 
              </div>
              <div  ref={ref}  style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} className="card relative w-[350px] m-10  shadow-lg shadow-cyan-500/50 rounded-lg " >
                <a href="https://nexmed.vercel.app">
                  <Image
                        src={nexmedWeb} // Replace with your image path
                        alt="Background Image"
                        layout="cover" // Or "contain", "cover", or "intrinsic"
                        objectFit="cover" // Optional: control image positioning within the div
                        className='block  hover:opacity-10 ease-out duration-300 rounded-lg'
                    />
                    <div className='absolute rounded-lg top-0 bottom-0 left-0 right-0 w-full  bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center items-center bg-slate-100 -z-10'>
                      <strong className='text-white text-2xl'>take a look</strong>
                      <strong className='text-white'>In progress...</strong>
                    </div>
                  </a> 
              </div>
          </div>
        
        </div>
       
      </div>
        
    </div>
        
  )
}

export default Works;
