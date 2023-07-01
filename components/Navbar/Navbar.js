import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgClose  } from "react-icons/cg";
import { GiHamburgerMenu  } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  function toggleDarkMode() {
    setDark(!dark);
    localStorage.setItem("dark-mode", dark);
  }

  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem("dark-mode"));
    setDark(!darkMode);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);
  return (
    <div
      className={`${
        dark ? "bg-white" : "bg-[#151A25]"
      } shadow-md sticky z-[999]   top-0`}
    >
      <div
        className={`container h-16 flex flex-row  justify-between items-center`}
      >
       <div className="flex items-center gap-4">
       <div
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer"
        >
          {open ? (
            <CgClose className=" h-6 w-6" />
          ) : (
            <GiHamburgerMenu className=" h-6 w-6 " />
          )}
        </div>
        <div className="flex justify-start items-center lg:gap-5 gap-2">
          <div className="avatar">
            <div className="rounded-full">
              <Image
                width={30}
                height={20}
                alt={"photo"}
                src="/images/nasir12.png"
              />
            </div>
          </div>
          <div>
            <h1 className="lg:text-2xl text-xl font-semibold">Nasir Chowdhury</h1>
          </div>
        </div>
       </div>
        <div className="flex justify-end gap-10 items-center">
          <div>
            <ul
              className={`z-[999] text-white lg:w-full w-[250px] lg:p-0 py-10 rounded bg-[#151A25] text-lg flex lg:flex-row flex-col text-center items-center lg:gap-10 gap-6 md:static absolute ${open?"top-16 left-0 duration-500" :"left-[-900px]"}`}
            >
              <Link className="" href={"#home"}>
                Home
              </Link>
              <Link href={"#about"}>About Me</Link>
              <Link href={"#projects"}>Projects</Link>
              <Link href={"#testimonial"}>Testimonial</Link>
              <Link href={"#contact"}>Contact Me</Link>
            </ul>
          </div>
          <div>
            <button onClick={toggleDarkMode}>
              {dark && (
                <svg
                  className="swap-off fill-current w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              )}{" "}
              {!dark && (
                <svg
                  className="swap-on fill-current w-8 h-8 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
