import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import resume from '../../public/images/Nasir.Resume.pdf'
const Footer = () => {
  const downLoadCv = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
    return (
  <div className='bg-[#0D051F] text-white w-full'>
          <footer className="footer p-10   container">
        <div className='lg:mx-auto '>
       <div className='flex items-center gap-2'>
       <Image className='rounded-full' src={'/images/nasir12.png'} height={50} width={50} alt='nasir'/>
          <div>
          <p className=' text-xl'> Nasirul Islam Chowdhury</p>
          <h2 className="text-[#297BB2] font-bold">Front End Developer</h2>
          </div>
       </div>
       <div >
        <p className='my-2 flex items-center gap-2'><AiOutlineMail className='w-5 h-5'/> nasirchy252@gmail.com</p>
        <p className='flex items-center gap-2'><FiPhoneCall className='w-5 h-5'/> 01644113296, 01852116591 </p>
        <p className='mt-2 flex items-center gap-2'><MdLocationPin className='w-5 h-5'/> Bangladesh, sylhet, 3100</p>
       </div>
        </div> 
        <div  className='lg:mx-auto'>
          <span className="footer-title">Services</span> 
          <div className='flex flex-col items-start gap-3'>
       
          <Link href='#home' className="link link-hover">Home</Link> 
          <Link href='#about' className="link link-hover">About</Link> 
          <Link href='#projects' className="link link-hover">Projects</Link> 
          <Link href='#testimonial' className="link link-hover">Testimonial</Link> 
          <Link href='#contact' className="link link-hover">Contact</Link> 
          </div>
        
        </div> 
        <div  className='lg:mx-auto'>
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
        <div className='lg:mx-auto mt-6'>
      
          <Link href={'/#contact'}>
         <button className="w-44 font-bold p-3 border rounded bg-[#6597FF] mb-4">
          Contact me
         </button>
          </Link>
         <button  onClick={() =>
                downLoadCv(resume)
              } className="w-44 p-3 border rounded">Download Resume</button>
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