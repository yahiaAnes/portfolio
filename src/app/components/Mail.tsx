'use client';

import instagram from '../assets/instagram.png';
import fb from '../assets/fb.png';
import linkdin from '../assets/linkdin.png';
import github from '../assets/github.png';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';


function Mail() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
      
        try {
          const response = await emailjs.sendForm(
            'service_m0ooafy', // Replace with your Email.js service ID
            'template_7wd3c2q', // Replace with your Email.js template ID
            event.target, // Pass the form element as the third argument
            'mf--_GOu6WfDbW7OS' // Replace with your Email.js user ID
          );
          console.log('SUCCESS!', response.status, response.text);
          setSuccessMessage('Your message has been sent successfully!');
        } catch (error) {
          console.error('FAILED...', error);
          setSuccessMessage('There was an error sending your message. Please try again later.');
        } finally {
          setIsSubmitting(false);
        }
      };
      
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
   <>
    <div  className='w-full  flex justify-around items-center flex-wrap px-10 min-h-screen py-10'>
        <div  className='contact my-10'>
            <div className='mb-5'>
                <p className='text-[#00F7FF] '>Let's get in touche</p>
                <h1 className='text-4xl sm-text-5xl  font-bold text-white'><span>You can</span><strong className='text-[#00F7FF] '> contact </strong><strong> me on</strong></h1>
            
            </div>
            <div className='circle'></div>
            
            <div ref={ref}  style={{
                    transform: isInView ? 'none' : 'translateY(100px)',
                    opacity: isInView ? 1 : 0,
                    transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'}} >
                <div className='socialMedia'>
                    <a href='https://www.instagram.com/yahia.sbahi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                        <div className='flex items-center'>
                            <Image className='my-5 mr-10' src={instagram} alt='insta' width={40} />
                            <strong className='text-white text-2xl'>ya_hi_a_19</strong>
                        </div>
                    </a>
                    <a href='https://www.facebook.com/aned.sbahi/'>
                        <div className='flex items-center'>
                            <Image className='my-5 mr-10' src={fb} alt='fb' width={40} />
                            <strong className='text-white text-2xl'>Yahia Anes</strong>
                        </div>
                    </a>
                    <a href=''>
                        <div className='flex items-center'>
                            <Image className='my-5 mr-10' src={linkdin} alt='IN' width={40} />
                            <strong className='text-white text-2xl'>Sbahi Yahia</strong>
                        </div>
                    </a>
                    <a href='https://github.com/yahiaAnes'>
                        <div className='flex items-center'>
                            <Image className='my-5 mr-10' src={github} alt='githu' width={40} />
                            <strong className='text-white text-2xl'>Sbahi_yahia</strong>
                        </div>
                    </a>
                    
                
                
                </div>
            
            </div>

        </div>
        
        <div ref={ref}  style={{
                    transform: isInView ? 'none' : 'translateY(100px)',
                    opacity: isInView ? 1 : 0,
                    transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'}} className='w-[350px] my-10'>
            <p className='text-[#00F7FF] mb-5'>Or send me an email</p>
            <form onSubmit={handleSubmit} className='contact-form'>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    className='p-3 rounded bg-gray-700 text-white w-full my-2'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='tape your name'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    className='p-3 rounded bg-gray-700 text-white w-full my-2'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='tape your email'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                    name="message"
                    id="message"
                    className='p-3 rounded bg-gray-700 text-white w-full my-2'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder='tape your mesage here'
                    ></textarea>
                </div>
                <button className='text-[#00040F] bg-[#00F7FF] px-3 py-2 rounded' type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {successMessage && <p className="success">{successMessage}</p>}
                {errorMessage && <p className="error">{errorMessage}</p>}
                </form>
            
        </div>
        
        
    </div>
   </>
  )
}

export default Mail;
