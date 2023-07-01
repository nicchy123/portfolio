import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (

     
  <div id='contact' class="container py-20">
    <div>
    <h1 className="text-center text-4xl font-bold">Contact Me</h1>
      <p className="text-center mt-2 text-[#858585] text-lg">Get in touch</p>
   <div className='flex lg:flex-row flex-col-reverse justify-center items-center gap-10'>
   <div className='lg:flex flex-col items-center gap-6 my-10  sm:hidden'>
                   <Link className='flex items-center gap-4' href={'https://www.facebook.com/nic.nasirchy.3'}>
                   <Image src={'/images/facebook.png'} width={40} height={100} alt='photo'/>
                   <p>Nasir Chy</p>
                   </Link>
                   <Link className='flex items-center gap-4' href={'https://www.linkedin.com/in/nasir252/'}>
                   <Image src={'/images/linkedin.png'} width={40} height={100} alt='photo'/>
                   <p>Nasir Chy</p>
                   </Link>
                   <Link className='flex items-center gap-4' href={'https://www.instagram.com/nasirchy143/'}>
                   <Image src={'/images/linkedin1.png'} width={40} height={100} alt='photo'/>
                   <p>Nasir Chy</p>
                   </Link>
                   <Link className='flex items-center gap-4' href={'https://github.com/nicchy123'}>
               <FaGithub className='w-10 h-10'/>
                   <p>Nasir Chy</p>
                   </Link>
    </div>
    <div>
 


    <div className="lg:w-[500px] w-full ">
      <div className="card-body">
        <div className="form-control mb-2">
          <input type="name" placeholder="Full Name" className="input input-bordered bg-white text-black" />
        </div>
        <div className="form-control mb-2">
       
          <input type="email" placeholder="email" className="input input-bordered bg-white text-black" />
       
        </div>
        <div className="form-control ">
       
          <input type="number" placeholder="Phone Number" className="input input-bordered bg-white text-black" />
       
        </div>
        <div className='mt-4'>
            <label className='mt-4'>
                Enter your messages
            </label>
            <textarea className='w-full rounded-md bg-white mt-1 h-[180px] border border-black text-black p-1' name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn  text-white bg-[#6597FF] lg:w-1/3 w-1/2">Send Now</button>
        </div>
      </div>
    </div>

    </div>
   </div>
    </div>
    <div>

    </div>
    
  </div>

 
    );
};

export default Contact;