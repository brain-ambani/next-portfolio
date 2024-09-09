// import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    index: "01",
    title: "Scriptify",
    description:
      "Scriptify is an innovative web app that allows users to interact with PDF documents in a conversational way. Through an AI-powered chat interface, users can ask questions, search for content, and extract information from PDFs seamlessly, enhancing productivity and accessibility.",
    image: "/assets/scriptify.png",
    link: "https://scriptify-one.vercel.app/",
    repo: "https://github.com/brain-ambani/scriptify",
    technologies: ["Next.js", "OpenAI API", "Clerk", "PostgreSQL"],
  },
  {
    index: "02",
    title: "BlogAI",
    description:
      "BlogAI is an innovative AI-driven content creation tool designed to assist bloggers and businesses in producing high-quality, SEO-optimized articles. By analyzing user input and target audience preferences, BlogAI generates engaging, relevant content tailored to meet specific objectives.",
    image: "/assets/blogai.png",
    link: "https://blog-app-67ff.vercel.app/",
    repo: "https://github.com/brain-ambani/blog-app",
    technologies: ["React.js", "Expressjs", "OpenAI API"],
  },
  {
    index: "03",
    title: "Workout Buddy",
    description:
      "Workout Buddy is a comprehensive fitness web app designed to help users achieve their health and fitness goals. Set fitness goals, monitor progress and stay motivated with custom workout routines. The app provides an intuitive interface and seamless experience for users looking to enhance their fitness journey.",
    image: "/assets/fitness.png",
    link: "https://fitness-app-lac.vercel.app/",
    repo: "https://github.com/brain-ambani/fitness-app",
    technologies: ["Next.js", "MongoDB", "Expressjs"],
  },
];

export const ProjectCard = () => {
  return (
    <div className="">
      <p className="text-cyan-400 font-light">Recent Projects</p>
      <ul>
        {projects.map((project, index) => (
          <div key={index} className="py-12 sm:py-8 ">
            <li className="font-bold text-xl text-slate-50 py-2">
              {project.index}. {project.title}
            </li>

            <div className="relative ">
              <div className="relative flex items-center bg-[#0A122A] sm:justify-end sm:p-8 rounded-md">
                <div>
                  <p className=" absolute z-10 left-8 text-sm  sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:w-[50%]  sm:bg-[#00091d] p-2 rounded-md shadow-inner  ">
                    {project.description}
                  </p>
                </div>

                <div>
                  <Image
                    src={project.image}
                    width={550}
                    height={200}
                    alt={project.title}
                    className="object-cover w-[550px] h-[250px] rounded-md sm:opacity-65 hover:scale-105 hover:opacity-75 transition opacity-20"
                  />
                </div>
              </div>
              <div className=" absolute sm:bottom-3 -bottom-16">
                <div className=" sm:block my-2 text-xs sm:text-sm text-cyan-200 sm:pl-8">
                  {project.technologies &&
                    project.technologies.map((tech, i) => (
                      <li
                        key={i}
                        className="inline-block mr-2 bg-foreground rounded-md sm:rounded-lg shadow-lg p-1 sm:p-2"
                      >
                        {tech}
                      </li>
                    ))}
                </div>
                <div className="flex gap-4 text-2xl sm:pl-8">
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
