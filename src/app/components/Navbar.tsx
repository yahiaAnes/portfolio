'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import  Yahia  from '../assets/Yahia_logo2.png';
import Image from 'next/image'
import {Link} from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div  className='fixed   w-full h-[80px] flex justify-between items-center px-4 bg-transparent text-gray-300'>
      <div>
        <Image width={70} src={Yahia} alt='' />
      </div>

      <div>
        <ul className='hidden md:flex '>
          
          <li className='px-5 cursor-pointer'><Link to="Home" smooth={true} duration={500}>
            Home
          </Link></li>
          <li className='px-5 cursor-pointer'><Link to="About" smooth={true} duration={500}>
            About
          </Link></li>
          <li className='px-5 cursor-pointer'><Link to="Skils" smooth={true} duration={500}>
            Skils
          </Link></li>
          <li className='px-5 cursor-pointer'><Link to="Works" smooth={true} duration={500}>
            Works
          </Link></li>
          <li className='px-5 cursor-pointer'><Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link></li>
        </ul>
      </div>

      <div>
        <button className='hidden md:block px-3 py-2 bg-[#00F7FF] text-black rounded'>Get started</button>
      </div>
      {/* hamburger */}

      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        { !nav ? <FaBars/> : <FaTimes/>}
      </div>
      {/* mobile responsive */}

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#00040F]  flex flex-col justify-center items-center'}>
          <li className='py-5 cursor-pointer text-4xl'><Link onClick={handleClick} to="Home" smooth={true} duration={500}>
            Home
          </Link></li>
          <li className='py-5 cursor-pointer text-4xl'><Link onClick={handleClick} to="About" smooth={true} duration={500}>
            About
          </Link></li>
          <li className='py-5 cursor-pointer text-4xl'><Link onClick={handleClick} to="Skils" smooth={true} duration={500}>
            Skils
          </Link></li>
          <li className='py-5 cursor-pointer text-4xl'><Link onClick={handleClick} to="Works" smooth={true} duration={500}>
            Works
          </Link></li>
          <li className='py-5 cursor-pointer text-4xl'><Link onClick={handleClick} to="Contact" smooth={true} duration={500}>
            Contact
          </Link></li>

          <Link onClick={handleClick} to="Contact" smooth={true} duration={500}>
            <button className=' px-3 py-6 text-2xl font-bold bg-[#00F7FF] text-black rounded-[15px]'>Get started</button>
            
          </Link>

      </ul>
      {/* social media */}

      <div className='hidden'></div>
    </div>
  );
};

export default Navbar;
