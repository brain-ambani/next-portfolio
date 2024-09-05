import { projects } from "@/lib/data";
import Image from "next/image";

export const ProjectCard = () => {
  return (
    <div>
      <p className="text-cyan-400 font-light">Recent Projects</p>
      <ul>
        {projects.map((project, index) => (
          <div key={index} className="py-2">
            <li className="font-bold text-xl text-slate-50 py-2">
              {project.title}
            </li>
            <div className="flex items-start space-x-4">
              <p className="w-[450px] text-sm bg-[#00091d] p-2 rounded-md shadow-inner  ">
                {project.description}
              </p>
              <Image
                src={project.image}
                width={300}
                height={200}
                alt="project img"
                className="object-cover"
              ></Image>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
