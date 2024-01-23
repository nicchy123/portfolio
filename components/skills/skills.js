import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import html from "/public/skills-image/html.webp";
import css from "/public/skills-image/css.svg";
import tailwind from "/public/skills-image/tail.png";
import js from "/public/skills-image/js.png";
import react from "/public/skills-image/react.png";
import node from "/public/skills-image/node.webp";
import express from "/public/skills-image/express.png";
import mongodb from "/public/skills-image/mongo.png";
import firebase from "/public/skills-image/firebase.jpg";
import git from "/public/skills-image/git.png";
import github from "/public/skills-image/github.png";
import botstrap from "/public/skills-image/Bootstrap_logo.svg.png";
import mongoose from "/public/skills-image/mongoose.webp";
import redux from "/public/skills-image/toolkit.png";
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
            slidesToShow: 2,
            slidesToScroll: 1,
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
      src: html,
    },
    {
      title: "Css",
      src: css,
    },
    {
      title: "Tailwind css",
      src: tailwind,
    },
    {
      title: "Javascript",
      src: js,
    },
    {
      title: "React js",
      src: react,
    },
    {
      title: "Node js",
      src: node,
    },
    {
      title: "Express Js",
      src: express,
    },
    {
      title: "Mongodb",
      src: mongodb,
    },
    {
      title: "Firebase",
      src: firebase,
    },
    {
      title: "Bootstrap",
      src: botstrap,
    },

    {
      title: "Git",
      src: git,
    },
    {
      title: "Github",
      src: github,
    },
    {
      title: "Mongoose",
      src: mongoose,
    },
    {
      title: "Redux Toolkit",
      src: redux,
    },
  ];
  return (
    <div id="about" className="container py-20">
      <h1 className="text-center text-4xl font-bold">My Skills</h1>
      <p className="text-center text-lg  text-[#858585] mt-2">As a Developer</p>
      <p className="lg:w-2/3 mx-auto text-center my-2">
        I am MERN stack web developer specializing in building React.js WebApp.
        I enjoy creating things that live on the internet. I use{" "}
        <span className="font-bold dark:text-white text-black">
          Html, Css, Javascript, React.js, Next.js, Express, Node, Mongodb,
          Redux Toolkit, Mongoose
        </span>{" "}
        and much more technology to create high-end interactive experiences and
        products. Recently working on some Mern projects.
      </p>

      <div className="">
        <div>
          <div className="my-20 md:w-full w-80 mx-auto">
            <Slider {...settings}>
              {skills.map((skill, i) => (
                  <div key={i} className="bg-[#297BB2]  w-72 mx-auto h-[200px] rounded-xl p-5 flex flex-col justify-center items-center">
                    <Image
                      className="bg-white w-20 h-20  p-5 rounded-full mx-auto object-cover"
                      src={skill.src}
                      height={200}
                      width={200}
                    />
                    <h3 className="text-center text-2xl text-white font-bold mt-6">
                      {skill.title}
                    </h3>
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
