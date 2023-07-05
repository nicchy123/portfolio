import Hero from "@/components/Hero/hero";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Projects from "@/components/projects/projets";
import CoolPage from "@/components/scrollToTop/coolPage";
import Skills from "@/components/skills/skills";
import Testimonial from "@/components/testimonial/testimonial";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Testimonial/>
      <CoolPage/>
      <Contact/>
      <Footer/>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}
