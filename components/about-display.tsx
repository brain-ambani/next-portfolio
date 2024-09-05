import Image from "next/image";
import profilePic from "../assets/profile.png";

export const AboutDisplay = () => {
  return (
    <div className="ml-4 ">
      <div className="relative  ">
        <Image
          src={profilePic}
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
