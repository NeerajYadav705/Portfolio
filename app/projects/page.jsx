"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/gemini.png",
    category: "react js",
    name: "Gemini",
    description: "Google Gemini AI ",
    link: "https://gemini-ochre-chi.vercel.app/",
    github: "https://github.com/NeerajYadav705/Gemini",
  },
  {
    image: "/work/crypto.png",
    category: "react js",
    name: "Crypto_X",
    description: "Crypto Currency",
    link: "https://crypto-kappa-gray.vercel.app/",
    github: "https://github.com/NeerajYadav705/Crypto",
  },
  {
    image: "/work/ComfortZone.png",
    category: "react js",
    name: "Comfort Zone",
    description: "Landing Page",
    link: "https://comfort-zone-ten.vercel.app/",
    github: "https://github.com/NeerajYadav705/ComfortZone",
  },
  {
    image: "/work/apple.png",
    category: "Basic",
    name: "Apple Vision Pro Clone",
    description: "Landing Page",
    link: "https://neerajyadav705.github.io/Apple-VisionPro-clone/",
    github: "https://github.com/NeerajYadav705/Apple-VisionPro-clone",
  },
  {
    image: "/work/amazone1.png",
    category: "fullstack",
    name: "Amazone Clone",
    description: "E commerce website",
    link: "https://amazonclone-neon.vercel.app/",
    github: "https://github.com/NeerajYadav705/Amazon-clone",
  },
  {
    image: "/work/walmart.png",
    category: "next js",
    name: "Next Website",
    description: "asdfasdfasfasdfasdfasfdasdfasdfsaf",
    link: "https://walmart-clone-gray.vercel.app/",
    github: "https://github.com/NeerajYadav705/Walmart-Clone",
  },
  {
    image: "/work/bubblegame.png",
    category: "Basic",
    name: "Bubble Game",
    description: "Game",
    link: "https://neerajyadav705.github.io/Bubble-Game/",
    github: "https://github.com/NeerajYadav705/Bubble-Game",
  },
  {
    image: "/work/megma.png",
    category: "Basic",
    name: "Megma Clone",
    description: "Landing Page",
    link: "https://neerajyadav705.github.io/Magma-clone/",
    github: "https://github.com/NeerajYadav705/Magma-clone",
  },
  {
    image: "/work/sidcup.png",
    category: "Basic",
    name: "Sidcup Family Goal",
    description: "Landing Page",
    link: "https://neerajyadav705.github.io/sidcupfamilygolf-clone/",
    github: "https://github.com/NeerajYadav705/sidcupfamilygolf-clone",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Coming soon",
    description: "Coming soon",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Coming soon",
    description: "Coming soon",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "fullstack",
    name: "Coming soon",
    description: "Coming soon",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Coming soon",
    description: "Coming soon",
    link: "/",
    github: "/",
  },
];

// category

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects" ? project : project.category === category;
  });


  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project,index)=>{
                return <TabsContent value={category} key={index}>
                    <ProjectCard project={project} />
                </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
