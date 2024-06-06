import { projects } from "@/data";
import Link from "next/link";
const Projects = () => {
  return (
    <div className="py-20 shadow-md">
      <h1 className="heading">
        A small selection of <span className="text-purple">my projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] flex flex-col items-center justify-center sm:w-96 w-[80vw] p-4"
          >
            <h1 className="text-lg font-semibold">{title}</h1>
            <img src={img} alt="project image" className="py-2 rounded-md" />
            <p className=" text-gray-400 mb-4">{des}</p>
            <div>
              <Link
                href={link}
                className=" font-semibold bg-slate-800 text-gray-400 py-2 px-6 text-xl rounded-md hover:bg-slate-400 hover:text-gray-600"
              >
                View code
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
