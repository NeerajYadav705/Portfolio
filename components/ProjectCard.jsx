import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-gray-100 dark:bg-secondary/40">
          <Image
            className="absolute bottom-5 shadow-2xl 
            rounded-t-xl "
            src={project.image}
            width={447}
            height={250}
            //247
            //250
            alt=""
            priority
          />
          {/* btns link */}
          <div className="flex gap-x-4">
            <Link
              target="_blank"
              href={project.link}
              className="bg-slate-600 w-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
             target="_blank"
              href={project.github}
              className="bg-slate-700 w-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p>{project.description}</p>
        {/* <p className="text-muted-foreground text-lg">{project.description}</p> */}
      </div>
    </Card>
  );
};

export default ProjectCard;
