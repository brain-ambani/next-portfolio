import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <div className=" w-full px-8 sm:p-0 sm:w-3/4 mx-auto mt-16 ">
      <div className=" text-3xl font-semibold pb-6">
        <h2 className="text-2xl sm:text-4xl pb-2 text-muted-foreground">
          Some of Things I&apos;ve Built
        </h2>
        <hr className="w-32 border-0 h-[1px] bg-cyan-400" />
      </div>
      <div className="">
        <ProjectCard />
      </div>
    </div>
  );
};
