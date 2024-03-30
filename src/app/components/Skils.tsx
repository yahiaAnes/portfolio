'use client';

import bootstrap from '../assets/bootstrap.png'
import laravel from '../assets/laravel.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function Skils() {
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <div name='Skils'  className='w-full   flex justify-center   items-center  h-screen py-20'>
        <div>
            <div className='px-5 mb-10'>
                <p className='text-[#00F7FF] '>My Skils</p>
                <h1 className='text-4xl sm-text-5xl  font-bold text-white'><span>Technologie I've</span><strong className='text-[#00F7FF] '> worked </strong><span>with</span></h1>
                
            </div>
            <div className='container flex justify-around items-center flex-wrap'>
                <div  ref={ref} style={{
                transform: isInView ? 'none' : 'translateY(100px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'}} className='w-[200px] h-[200px] flex items-center justify-center mx-5'>
                    <Image src={bootstrap} alt='bootstrap' width={100} />
                </div>
                <div  ref={ref} style={{
                transform: isInView ? 'none' : 'translateY(100px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'}} className='w-[200px] h-[200px] flex items-center justify-center mx-5'>
                    <Image src={tailwind} alt='bootstrap' width={200} className='rounded' />
                </div>
                <div  className='circle'></div>

                <div  ref={ref} style={{
                transform: isInView ? 'none' : 'translateY(100px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'}} className='w-[200px] h-[200px] flex items-center justify-center mx-5'>
                    <Image src={react} alt='react' width={200} />

                </div>
                <div  ref={ref} style={{
                transform: isInView ? 'none' : 'translateY(100px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'}} className='w-[200px] h-[200px] flex items-center justify-center mx-5'>
                    <Image src={laravel} alt='laravel' width={200} />
                
                </div>
                
            </div>
        </div>
        
    </div>
        
  )
}

export default Skils
