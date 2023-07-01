import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/projects.module.css'

const Projects = () => {

    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])
useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>{
        setLoading(false)
        setProjects(data)
    }
        )
},[])
if(loading){
    return <div>Loading</div>
}
    return (
        <div id='projects' className='container bg-[#FFFFFF0F] py-10 my-20'>
               <h1 className="text-center text-4xl font-bold">Projects</h1>
      <p className="text-center mt-2 text-[#858585] text-lg">Recent Works</p>

        <div>
            <ul className='flex flex-wrap justify-center items-center gap-5 my-8 lg:text-lg text-sm cursor-pointer text-white'>
            <li className='py-2 px-5  bg-[#09152E] rounded-md hover:bg-[#297BB2]'>All</li>
                <li className='py-2 px-5 bg-[#09152E] rounded-md hover:bg-[#297BB2]'>Fullstack</li>
                <li className='py-2 px-5 bg-[#09152E] rounded-md hover:bg-[#297BB2]'>Frontend</li>
                <li className='py-2 px-5 bg-[#09152E] rounded-md hover:bg-[#297BB2]'>Backend</li>
                <li className='py-2 px-5 bg-[#09152E] rounded-md hover:bg-[#297BB2]'>Landing Page</li>
            </ul>
        </div>
<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
    {
        projects.map((project, i)=>
        
         <div key={i}  className='text-white mx-auto py-10 px-6 bg-[#151A25] rounded-xl w-full'>
            <h1 className='text-3xl font-bold text-center mt-4'>{project.name}</h1>
            <h1 className='text-xl  text-center mb-2'>({project.type})</h1>
           {project.technology && <div className='px-4 py-2 my-3 rounded-md bg-[#FFFFFF0F] flex flex-wrap justify-start gap-2'>
            {project.technology.map(tech=>
            <p className='px-2 rounded border border-[#23a0f3] text-[#139df8] text-sm'>{tech}</p>
            )}
                
            </div>}
            <Image className='rounded mx-auto' width={940} height={900} alt="" src={project.image}></Image>
            <div className='flex justify-center items-center gap-3 my-3 text-sm'>
         
            <button className='hover:bg-white hover:text-black px-2 py-2 rounded-md bg-[#297BB2] my-2 text-white w-full'>
                <Link href="">Live Site</Link>
            </button>
            <button className='hover:bg-white hover:text-black px-2 py-2 rounded-md bg-[#297BB2] my-2 text-white w-full' >
                <Link href="">Client Site</Link>
            </button>
            <button className='hover:bg-white hover:text-black px-2 py-2 rounded-md bg-[#297BB2] my-2 text-white w-full'>
                <Link href="">Server Code</Link>
            </button>
            </div>
        </div>)
    }
</div>
        </div>
    );
};

export default Projects;