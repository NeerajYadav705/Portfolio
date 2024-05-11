'use client'
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiArrowDownSLine,
  RiTeamFill,
  RiTodoFill,
  RiBriefcase4Fill,
} from "react-icons/ri";
import Socials from "./Socials";
import DevImg from "./DevImg";

const Hero = () => {


  const handleDownload = () => {
    // Replace 'file-url' with the actual URL of the file you want to download
    const fileUrl = '/contact/Neeraj Yadav.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'Neeraj Yadav.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Front-End Developer
            </div>
            <h1 className="h1">"Welcome, I am Neeraj Yadav"</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            A seasoned Front-End Engineer dedicated to crafting intuitive and engaging user experiences.
            </p>
            {/* button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me
                  <Send size={18} />
                </Button>
              </Link>
              
              <Button onClick={handleDownload} variant="secondary" className="gap-x-2">
                Download CV
                <Download size={18} />
              </Button>
              
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0 "
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            <div className=" w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles=" w-[450px] h-[450px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/AasmaniNeeraj.png"
            />
          </div>
          {/* icons */}
          <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
