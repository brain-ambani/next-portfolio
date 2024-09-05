import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Profile } from "./profile";

export const Nav = () => {
  return (
    <div className="bg-[#00091d] sticky top-0 z-50 shadow-md  opacity-85">
      <div className="w-3/4 mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <Profile />
          </Link>
        </div>
        <div className="flex gap-4 py-4">
          <Link href="https://github.com/brain-ambani/" target="_blank">
            <FaGithub className=" text-3xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/brain-ambani/"
            target="_blank"
          >
            <FaLinkedin className="text-blue-500 text-3xl" />
          </Link>
          <Link href="/" target="_blank">
            <BsTwitterX className=" text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};
