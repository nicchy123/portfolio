"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { BiSolidDownload } from "react-icons/bi";
import Head from "next/head";
import { useSelector } from "react-redux";
import profile from "/public/skills-image/profile-pic (2).png";
import facebook from "/public/skills-image/facebook.png";
import insta from "/public/skills-image/Instagram_logo_2022.svg.webp";
import linkedin from "/public/skills-image/LinkedIn_logo_initials.png";
const Hero = () => {
  const theme = useSelector((state) => state.theme.value);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/skills-image/Nasir_Resume.pdf"; // Replace with the actual path to your PDF resume
    link.download = "Nasir_Developer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full  lg:my-32 md:my-20">
      <Head>
        <title>Home | Portfolio</title>
      </Head>
      <div className="container  ">
        <div
          className={` ${
            theme == "dark" ? " " : ""
          }flex lg:flex-row flex-col-reverse items-center gap-5 `}
        >
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
                onClick={() => downloadResume()}
                className="btn btn-outline"
              >
                <BiSolidDownload
                  className={`${theme === "dark" ? "text-white" : ""} w-5 h-5`}
                />
                Resume
              </button>
            </div>
            <div className="flex items-center gap-6 my-10">
              <Link href={"https://www.facebook.com/nic.nasirchy.3"}>
                <Image src={facebook} width={40} height={100} alt="photo" />
              </Link>
              <Link href={"https://www.linkedin.com/in/nasir252/"}>
                <Image src={linkedin} width={40} height={100} alt="photo" />
              </Link>
              <Link href={"https://www.instagram.com/nasirchy143/"}>
                <Image src={insta} width={40} height={100} alt="photo" />
              </Link>
              <Link href={"https://github.com/nicchy123"}>
                <FaGithub className="w-10 h-10" />
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex justify-center items-center w-full">
              <Image
                className="rounded-full mx-auto lg:w-2/3 mt-2"
                alt="photo"
                width={450}
                height={300}
                src={profile}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
