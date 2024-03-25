'use client';
import mainImage from '../assets/main.png'
import Image from 'next/image';
import {HiArrowNarrowRight} from 'react-icons/hi';
import 'animate.css';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function Main(){
    return(
        <>
        <div className="h-screen flex justify-between items-center ">
            
            <div className='w-[700px] px-10'>
            <motion.div
            initial={{ opacity: 0, y: -100 }} // Initial styles before animation
            animate={{ opacity: 1, y: 0 }} // Target styles after animation
            >
                <h1 className=" text-white text-6xl font-semibold  ">Hello I'm <span className='text-[#00F7FF]'>Yahia</span> , full stack web developer</h1>

            </motion.div>
                <p className='text-white py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis nesciunt velit, rerum quasi sapiente ab ipsa laborum repellat dignissimos.</p>
                <div className="circle"></div>
                <button className='text-white group border-2 px-6 py-2 flex items-center hover:bg-[#00F7FF] hover:border-[#00F7FF] hover:text-[#0a192f]'>
                  check it now 
                  <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-3'/>
                  </span>
              </button>
            </div>
            <div>
                <div className="circle top-0 right-0 absolute"></div>
                <Image src={mainImage} width={500} className='md:block hidden'  alt="image" />

            </div>
            
            
        </div>
        
        </>
    );
}
export default Main;