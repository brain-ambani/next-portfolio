import Image from "next/image";

export const AboutDisplay = () => {
  return (
    <div className="sm:ml-4">
      <div className="relative ">
        <Image
          src="/assets/profile.png"
          width={350}
          height={350}
          alt="about"
          className=" rounded-md z-2 opacity-95 "
        />
        <div className="absolute  top-3 left-3 sm:top-4 sm:left-4 w-[320px] h-[320px] sm:w-[350px] sm:h-[350px]  rounded-md border-r-2 border-b-2 border-l-0 border-cyan-400 hover:top-1 hover:left-1 sm:hover:top-2 sm:hover:left-2  transition-all duration-300 ease-in-out z-1"></div>
      </div>
    </div>
  );
};
