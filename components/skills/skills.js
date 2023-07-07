import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
const Skills = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    cssEase: "linear",
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          },
        },
      ]
    }

  const skills = [
    {
      title: "HTML",
      src: "/images/html1.png",
    },
    {
      title: "Css",
      src: "/images/css.svg",
    },
    {
      title: "Tailwind css",
      src: "/images/Tailwind.png",
    },
    {
      title: "Javascript",
      src: "/images/js.png",
    },
    {
      title: "React js",
      src: "https://i.ibb.co/SJzJZRz/react.png",
    },
    {
      title: "Node js",
      src: "/images/node1.png",
    },
    {
      title: "Express Js",
      src: "/images/images.png",
    },
    {
      title: "Mongodb",
      src: "https://i.ibb.co/4SD2Ynn/mongodb.png",
    },
    {
      title: "Firebase",
      src: "/images/firebase.png",
    },
    {
      title: "Bootstrap",
      src: "/images/Bootstrap.png",
    },
   
    {
      title: "Git",
      src: "/images/git.png",
    },
    {
      title: "Github",
      src: "/images/github.png",
    },
  ];
  return (
    <div id="about" className="container py-20">
      <h1 className="text-center text-4xl font-bold">My Skill</h1>
      <p className="text-center text-lg  text-[#858585] mt-2">As a Developer</p>
      <div className="">
        <div>
          <div className="my-20 lg:w-full w-80 mx-auto">
            <Slider {...settings}>
              {skills.map((skill) => (
                <div>
                 
                  <div className="bg-[#297BB2] w-72 mx-auto h-[200px] rounded-xl p-5 flex flex-col justify-center items-center">
                  <Image className="bg-white w-20 h-20  p-5 rounded-full mx-auto" src={skill.src} height={200} width={200} />
                  <h3 className="text-center text-2xl text-white font-bold mt-6">{skill.title}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Skills;
