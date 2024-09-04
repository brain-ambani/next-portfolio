import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Profile } from "./profile";

export const Hero = () => {
  return (
    <div className="w-3/4 mx-auto py-8 h-full flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-3">
        <Profile />

        <h2 className="text-6xl font-semibold md:w-2/3 items-center">
          Building interactive web solutions with precision and creativity.
        </h2>
      </div>
      <div className="flex gap-4 py-8">
        <Link href="https://github.com/brain-ambani/" target="_blank">
          <FaGithub size={35} className="text-black" />
        </Link>
        <Link href="https://www.linkedin.com/in/brain-ambani/" target="_blank">
          <FaLinkedin size={35} className="text-blue-500" />
        </Link>
        <Link href="/" target="_blank">
          <BsTwitterX size={35} className="text-black" />
        </Link>
      </div>
    </div>
  );
};
