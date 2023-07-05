import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import {BiSolidDownload} from 'react-icons/bi'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
const Hero = () => {
const [isDark, setDark] = useState(false)

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
    <div className="w-full  lg:py-20">
        <Head>
        <title>Home | Portfolio</title>
      </Head>
      <div className="container  flex lg:flex-row flex-col-reverse items-center gap-5 ">
       
        <div className="lg:w-1/2">
          <p className="text-lg">HI. I' am</p>
          <h2 className="text-[#297BB2] lg:text-6xl text-3xl font-bold my-4">
            Nasir Chowdhury
          </h2>
          <h3 className="text-[#858585] text-2xl">
            <Typewriter
              options={{
                strings: [
                  "Front End Developer",
                  "React js Developer",
                  "Mern Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <div className="flex justify-start gap-7 mt-6">
              <Link href={"/#contact"}>
            <button className="btn bg-[#6597FF] text-white  border-0">
                Contact Me
            </button>
                </Link>
            <button
              onClick={() =>
                downLoadCv("http://localhost:3000/images/Nasir.Resume.pdf")
              }
              className="btn btn-outline"
            >
              <BiSolidDownload className={`${isDark === "true"? "text-white":""} w-5 h-5`}/>
             Resume
            </button>
          </div>
          <div className="flex items-center gap-6 my-10">
            <Link href={"https://www.facebook.com/nic.nasirchy.3"}>
              <Image
                src={"/images/facebook.png"}
                width={40}
                height={100}
                alt="photo"
              />
            </Link>
            <Link href={"https://www.linkedin.com/in/nasir252/"}>
              <Image
                src={"/images/linkedin.png"}
                width={40}
                height={100}
                alt="photo"
              />
            </Link>
            <Link href={"https://www.instagram.com/nasirchy143/"}>
              <Image
                src={"/images/linkedin1.png"}
                width={40}
                height={100}
                alt="photo"
              />
            </Link>
            <Link href={"https://github.com/nicchy123"}>
              <FaGithub className="w-10 h-10" />
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex justify-center items-center">
            <Image
              className="rounded-full mx-auto "
              alt="photo"
              width={350}
              height={300}
              src="/images/nasir12.png"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
