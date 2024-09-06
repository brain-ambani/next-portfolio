import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = () => {
  return (
    <div className="">
      <p className="text-cyan-400 font-light">Recent Projects</p>
      <ul>
        {projects.map((project, index) => (
          <div key={index} className="py-8 ">
            <li className="font-bold text-xl text-slate-50 py-2">
              {project.index}. {project.title}
            </li>

            <div className="relative ">
              <div className="relative flex items-center bg-[#0A122A] justify-end p-8 rounded-md">
                <p className="absolute z-10 left-8 top-1/2 transform -translate-y-1/2 w-[50%] text-sm bg-[#00091d] p-2 rounded-md shadow-inner ">
                  {project.description}
                </p>

                <Image
                  src={project.image}
                  width={550}
                  height={200}
                  alt="project img"
                  className="object-cover rounded-md opacity-65 hover:scale-105 hover:opacity-75 transition"
                ></Image>
              </div>
              <div className="absolute bottom-3">
                <div className="my-2 text-sm text-cyan-200 pl-8">
                  {project.technologies &&
                    project.technologies.map((tech, i) => (
                      <li
                        key={i}
                        className="inline-block mr-2 bg-foreground rounded-lg shadow-lg p-2"
                      >
                        {tech}
                      </li>
                    ))}
                </div>
                <div className="flex gap-4 text-2xl pl-8">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-500 hover:text-cyan-400 transition"
                  >
                    <AiOutlineLink />
                  </Link>
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-500 hover:text-cyan-400 transition"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
