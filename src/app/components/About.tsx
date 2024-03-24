'use client';
import React,{ useEffect } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';

function About() {

  return (
    <div  className='w-full md:px-20 px-10 flex items-center h-screen y-20'>
        <div>
            <p className='text-[#00F7FF] '>About me</p>
            <h1 className='text-6xl sm-text-7xl font-bold text-white'><span>who</span><strong className='text-[#00F7FF] '> am </strong><span>I ?</span></h1>
            <p className='text-[#8892b0] py-4 max-w-[600px]'>Seeking expert solutions? Unleash our team of professionals across
                diverse services. We combine unwavering
                dedication with proven expertise.
                <strong className='highlight'>Trust us to handle your needs with meticulous 
                attention to detail and a commitment to your success.</strong></p>
            <button className='text-white group border-2 px-6 py-2 flex items-center hover:bg-[#00F7FF] hover:border-[#00F7FF] hover:text-[#0a192f]'>
                See our services 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
            </button>
            
        </div>
    </div>
        
  )
}

export default About