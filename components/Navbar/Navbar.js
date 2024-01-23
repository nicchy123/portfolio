import { setTheme } from "@/redux/slices/themeslice";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const router = useRouter();
  const [dark, setDark] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("dark-mode");
    if (dark === "") {
      setDark(Boolean(theme));
    }
    if (!theme) {
      localStorage.setItem("dark-mode", dark);
    } else {
      if (theme === "false") {
        setDark(false);
        document.body.classList.remove("dark-mode");
        setLoading(false);
      } else {
        setDark(true);
        document.body.classList.add("dark-mode");
        setLoading(false);
      }
    }
  }, [dark]);
  const setMediaTheme = (data) => {
    disPatch(setTheme(data));
  };
  const disPatch = useDispatch();

  const theme = useSelector((state) => state.theme.value);

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }else{
    document.documentElement.classList.remove("dark");

  }

  const menuItems = (
    <>
      <Link
        className={` mx-4 hover:border-b-2  border-[#6597FF] text-center  ${
          router.asPath === "/" ? "border-b-2  border-[#6597FF]" : ""
        }`}
        href={"/"}
      >
        Home
      </Link>

      <Link
        className={` mx-4 hover:border-b-2 border-[#6597FF]  text-center  ${
          router.asPath === "/#about" ? "border-b-2 border-[#6597FF]" : ""
        }`}
        onClick={() => setOpen(false)}
        href={"/#about"}
      >
        About Me
      </Link>

      <Link
        className={` mx-4 hover:border-b-2 border-[#6597FF] text-center ${
          router.asPath === "/projects" ? "border-b-2 border-[#6597FF]" : ""
        }`}
        onClick={() => setOpen(false)}
        href={"/projects"}
      >
        Projects
      </Link>

      <Link
        className={` mx-4 hover:border-b-2 border-[#6597FF]  text-center ${
          router.asPath === "/#testimonial" ? "border-b-2 border-[#6597FF]" : ""
        }`}
        onClick={() => setOpen(false)}
        href={"/#testimonial"}
      >
        Testimonial
      </Link>

      <Link
        className={` mx-4 hover:border-b-2 border-[#6597FF]  text-center ${
          router.asPath === "/#contact" ? "border-b-2 border-[#6597FF]" : ""
        }`}
        onClick={() => setOpen(false)}
        href={"/#contact"}
      >
        Contact Me
      </Link>
    </>
  );
  return (
    <>
      {!loading && (
        <div
          className={`
            dark:bg-[#151A25] bg-white dark:text-white text-black
           sticky top-0  z-[999] shadow-md`}
        >
          <Head>
            <title>Home | Portfolio</title>
          </Head>
          <div className={`navbar container h-16`}>
            <div className="navbar-start  ">
              <div className="dropdown">
                <label
                  onClick={() => setOpen(!open)}
                  tabIndex={0}
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                {open && (
                  <ul
                    tabIndex={0}
                    className={`${
                      "bg-[#151A25] text-white"
                    }  flex flex-col gap-5  menu-xl dropdown-content mt-3  z-[999] p-5 shadow  rounded-box w-52`}
                  >
                    {menuItems}
                  </ul>
                )}
              </div>
              <div className="flex">
                <h1 className="lg:text-2xl md:text-lg text-1xl font-bold ">
                  Nasir Portfolio
                </h1>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex z-[999]">
              {
                <ul className="menu text-lg menu-horizontal px-1">
                  {menuItems}
                </ul>
              }
            </div>
            <div className="navbar-end">
              <button>
                {theme === "light" && (
                  <svg
                    onClick={() => {
                      setMediaTheme("dark");
                    }}
                    className="swap-off fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                )}{" "}
                {theme === "dark" && (
                  <svg
                    onClick={() => {                  
                      setMediaTheme("light");
                    }}
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
      )}
    </>
  );
};

export default Navbar;
