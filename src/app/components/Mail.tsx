'use client';

import { Input } from "postcss";
import instagram from '../assets/instagram.png';
import fb from '../assets/fb.png';
import linkdin from '../assets/linkdin.png';
import github from '../assets/github.png';
import Image from 'next/image';
import { FaBaby } from "react-icons/fa6";
import { useInView } from 'framer-motion';
import { useRef } from "react";

function Mail() {

    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
   <>
    <div  className='w-full  flex justify-around items-center flex-wrap px-10 min-h-screen py-10'>
        <div className="contact my-10">
            <div className="mb-5">
                <p className='text-[#00F7FF] '>Let's get in touche</p>
                <h1 className='text-4xl sm-text-5xl  font-bold text-white'><span>You can</span><strong className='text-[#00F7FF] '> contact </strong><strong> me on</strong></h1>
            
            </div>
            <div className="circle"></div>
            
            <div className="socialMedia">
                <a href="">
                    <div className="flex items-center">
                        <Image className="my-5 mr-10" src={instagram} alt="insta" width={40} />
                        <strong className="text-white text-2xl">ya_hi_a_19</strong>
                    </div>
                </a>
                <a href="">
                    <div className="flex items-center">
                        <Image className="my-5 mr-10" src={fb} alt="insta" width={40} />
                        <strong className="text-white text-2xl">Yahia Anes</strong>
                    </div>
                </a>
                <a href="">
                    <div className="flex items-center">
                        <Image className="my-5 mr-10" src={linkdin} alt="insta" width={40} />
                        <strong className="text-white text-2xl">Sbahi Yahia</strong>
                    </div>
                </a>
                <a href="">
                    <div className="flex items-center">
                        <Image className="my-5 mr-10" src={github} alt="insta" width={40} />
                        <strong className="text-white text-2xl">Sbahi_yahia</strong>
                    </div>
                </a>
                
               
               
            </div>

        </div>
        
        <div className="w-[350px] my-10">
            <p className='text-[#00F7FF] mb-5'>Or send me an email</p>
            <form action="">
                <div  ref={ref}  style={{
                    transform: isInView ? "none" : "translateX(-100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} className="mb-6">
                    <label   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div  ref={ref}  style={{
                    transform: isInView ? "none" : "translateX(100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} className="mb-6">
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div ref={ref}  style={{
                    transform: isInView ? "none" : "translateX(-100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} className="">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <button  ref={ref}  style={{
                    transform: isInView ? "none" : "translateY(100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} className="text-2xl text-[#00040F] font-bold bg-[#00F7FF] px-2 py-1 my-4  rounded ">Send</button>
            </form>
            
        </div>
        
        
    </div>
   </>
  )
}

export default Mail;
