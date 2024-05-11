"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";

import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
  {
    image: "/work/gemini.png",
    category: "React js",
    name: "Gemini",
    description: "Google Gemini AI ",
    link: "https://gemini-ochre-chi.vercel.app/",
    github: "https://github.com/NeerajYadav705/Gemini",
  },
  {
    image: "/work/crypto.png",
    category: "React js",
    name: "Crypto_X",
    description: "Crypto Currency",
    link: "https://crypto-kappa-gray.vercel.app/",
    github: "https://github.com/NeerajYadav705/Crypto",
  },
  {
    image: "/work/ComfortZone.png",
    category: "React js",
    name: "Comfort Zone",
    description: "Landing Page",
    link: "https://comfort-zone-ten.vercel.app/",
    github: "https://github.com/NeerajYadav705/ComfortZone",
  },
  {
    image: "/work/apple.png",
    category: "HTML, CSS, JAVASCRIPT",
    name: "Apple Vision Pro Clone",
    description: "Landing Page",
    link: "https://neerajyadav705.github.io/Apple-VisionPro-clone/",
    github: "https://github.com/NeerajYadav705/Apple-VisionPro-clone",
  },
  {
    image: "/work/amazone1.png",
    category: "Full Stack",
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
    image: "/work/3.png",
    category: "next js",
    name: "Coming soon",
    description: "Coming soon",
    link: "/",
    github: "/",
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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">
            "Transforming ideas into seamless digital experiences that captivate
            and inspire."
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only first 4 projects */}

            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
