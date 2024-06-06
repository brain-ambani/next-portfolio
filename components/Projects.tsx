import { projects } from "@/data";
import Link from "next/link";
const Projects = () => {
  return (
    <div className="py-20">
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
            <p className=" text-gray-400">{des}</p>
            <div>
              <Link
                href={link}
                className="flex gap-4 mt-4 bg-purple-400 py-1 px-4 rounded-md over:bg-purple-300"
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
