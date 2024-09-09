import Image from "next/image";

export const AboutDisplay = () => {
  return (
    <div className="sm:ml-4">
      <div className="relative  ">
        <Image
          src="/assets/profile.png"
          width={350}
          height={350}
          alt="about"
          className=" rounded-md z-2 "
        />
        <div className="absolute top-4 left-4 w-[350px] h-[350px] rounded-md border-r-2 border-b-2 border-l-0 border-cyan-400 hover:top-2 hover:left-2 transition-all duration-300 ease-in-out z-1"></div>
      </div>
    </div>
  );
};
