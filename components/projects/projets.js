import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredData, setFilteredData] = useState([]);
  const [dark, setDark] = useState(true);



  useEffect(() => {
    fetch("https://portfolio-server-phi-murex.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProjects(data);
        setFilteredData(data);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredData(projects.slice(0, 3));
      return;
    }
  }, [projects]);
  const categories = [
    { title: "All" },
    { title: "Fullstack" },
    { title: "Frontend" },
    { title: "Landing Page" },
  ];

  const handleFilter = (e) => {
    if (e.target.innerText === "All") {
      setFilteredData(projects.slice(0, 3));
      return;
    }
    const result = projects.filter(
      (project) =>
        project.type.toLowerCase() === e.target.innerText.toLowerCase()
    );
    if (result.length > 3) {
      setFilteredData(result.slice(0, 3));
      return;
    }
    setFilteredData(result);
  };
  if (loading) {
    return <div className="min-h-[600px] flex justify-center items-center">
      <span className="loading loading-bars loading-lg"></span>
    </div>;
  }

  return (
    <div id="projects" className="py-20">
      <div className={`container bg-[#FFFFFF0F] py-10`}>
        <h1 className="text-center text-4xl font-bold">Projects</h1>
        <p className="text-center mt-2 text-[#858585] text-lg">Recent Works</p>

        <div>
          <ul className="flex flex-wrap justify-center items-center gap-5 my-8 lg:text-lg text-sm cursor-pointer text-white">
            {categories.map((category, i) => (
              <li
                key={i}
                onClick={(e) => {
                  setSelectedCategory(e.target.innerText);
                  handleFilter(e);
                }}
                style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
                className={`py-2 px-5 ${
                  selectedCategory === category.title && "bg-[#297BB2] "
                }  ${
                  dark
                    ? "bg-[#09152E]"
                    : "bg-white hover:text-white  text-black"
                } rounded-md hover:bg-[#297BB2]`}
              >
                {category.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {filteredData.map((project, i) => (
            <div
              key={i}
              className={` mx-auto py-10 px-6 bg-white  text-black shadow-2xl
               rounded-xl w-full`}
            >
              <h1 className="text-3xl font-bold text-center mt-4">
                {project.name}
              </h1>
              <h1 className="text-xl  text-center mb-2">({project.type})</h1>
              {project.technology && (
                <div className="px-2 py-2 my-3 rounded-md bg-[#FFFFFF0F] flex flex-wrap justify-start gap-2">
                  {project.technology.map((tech, i) => (
                    <p
                      key={i}
                      className="px-2 rounded border border-[#23a0f3] text-[#139df8] text-sm"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              )}
              <Image
                className="rounded mx-auto w-full object-cover h-44"
                width={400}
                height={260}
                alt="photo"
                src={project.image}
              ></Image>
              <div className="flex justify-center items-center gap-3 my-3 text-sm">
                <button className="hover:bg-white hover:text-black px-2 py-2 rounded-md bg-[#297BB2] my-2 text-white w-full">
                  <Link href={`${project.live && project.live}`}>
                    Live Site
                  </Link>
                </button>
                <button className="hover:bg-white hover:text-black px-2 py-2 rounded-md bg-[#297BB2] my-2 text-white w-full">
                  <Link href={`${project.client && project.client}`}>
                    Client Site
                  </Link>
                </button>
                {project.server && (
                  <button className="hover:bg-white hover:text-black px-2 py-2 rounded-md bg-[#297BB2] my-2 text-white w-full">
                    <Link href={`${project.server}`}>Server Code</Link>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-8">
          <Link href={"/projects"}>
            <button className="btn btn-outline px-16 ">See All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
