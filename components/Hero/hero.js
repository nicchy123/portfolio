import Image from 'next/image'
import Link from 'next/link';
import {FaFacebook, FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa'
const Hero = () => {
    return (
        <div id='home' className="w-full  lg:py-20 md:py-10 py-6">
           <div className="container  flex lg:flex-row flex-col-reverse items-center gap-5 ">
            <div className="lg:w-1/2">
                <p className="text-lg">HI. I' am</p>
                <h2 className="text-[#297BB2] lg:text-6xl text-3xl font-bold my-4">Nasir Chowdhury</h2>
                <h3 className="text-[#858585] text-2xl">FrontEnd Developer</h3>
                <div className="flex justify-start gap-7 mt-6">
                    <button className="btn bg-[#6597FF] text-white  border-0">Contact Me</button>
                    <button className="btn btn-outline">Download CV</button>
                </div>
                <div className='flex items-center gap-6 my-10'>
                   <Link href={'https://www.facebook.com/nic.nasirchy.3'}>
                   <Image src={'/images/facebook.png'} width={40} height={100} alt='photo'/>
                   </Link>
                   <Link href={'https://www.linkedin.com/in/nasir252/'}>
                   <Image src={'/images/linkedin.png'} width={40} height={100} alt='photo'/>
                   </Link>
                   <Link href={'https://www.instagram.com/nasirchy143/'}>
                   <Image src={'/images/linkedin1.png'} width={40} height={100} alt='photo'/>
                   </Link>
                   <Link href={'https://github.com/nicchy123'}>
               <FaGithub className='w-10 h-10'/>
                   </Link>
                   
                </div>
            </div>
            <div  className='w-1/2 '>
               <div className='  flex justify-center items-center'>
               <Image className='rounded-full mx-auto ' alt='photo' width={350} height={200} src="/images/nasir12.png">
                </Image>
               </div>
             
            </div>
           </div>
        </div>
    );
};

export default Hero;