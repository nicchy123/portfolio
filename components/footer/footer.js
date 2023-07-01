import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
  <div className='bg-[#0D051F] text-white'>
          <footer className="footer p-10   container">
        <div className='mx-auto '>
       <div className='flex items-center gap-2'>
       <Image className='rounded-full' src={'/images/nasir12.png'} height={50} width={50}/>
          <div>
          <p className=' text-xl'> Nasirul Islam Chowdhury</p>
          <h2 className="text-[#297BB2] font-bold">Front End Developer</h2>
          </div>
       </div>
       <div >
        <p className='my-2'>Email: nasirchy252@gmail.com</p>
        <p>Phone: 01644113296, 01852116591 </p>
       </div>
        </div> 
        <div  className='mx-auto'>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Home</a> 
          <a className="link link-hover">About</a> 
          <a className="link link-hover">Projects</a> 
          <a className="link link-hover">Testimonial</a>
          <a className="link link-hover">Contact</a>
        </div> 
        <div  className='mx-auto'>
          <span className="footer-title">Social</span> 
          <div className='flex flex-col items-center gap-4 '>
                   <Link className='flex items-center gap-4' href={'https://www.facebook.com/nic.nasirchy.3'}>
                   <Image src={'/images/facebook.png'} width={30} height={100} alt='photo'/>
                   <p>Nasir Chy</p>
                   </Link>
                   <Link className='flex items-center gap-4' href={'https://www.linkedin.com/in/nasir252/'}>
                   <Image src={'/images/linkedin.png'} width={30} height={100} alt='photo'/>
                   <p>Nasir Chy</p>
                   </Link>
               
                   <Link className='flex items-center gap-4' href={'https://github.com/nicchy123'}>
               <FaGithub className='w-8 h-8'/>
                   <p>Nasir Chy</p>
                   </Link>
    </div>
        </div> 
        <div className='mx-auto mt-6'>
      
         <button className="w-44 font-bold p-3 border rounded bg-[#6597FF] mb-4">Contact me</button>
         <button className="w-44 p-3 border rounded">Download Resume</button>
        </div>
      </footer>
      <div className='container text-center'>
      <div className="divider "></div> 
      <div className='py-10'>
    <p>Copyright © 2023 - All right reserved by Nasirul Islam Chowdhury</p>
  </div>
      </div>

  </div>
    );
};

export default Footer;