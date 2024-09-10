import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="flex  justify-center gap-4 py-4">
      <Link href="https://github.com/brain-ambani/" target="_blank">
        <FaGithub className=" text-3xl hover:opacity-75 transition" />
      </Link>

      <Link href="https://www.linkedin.com/in/brain-ambani/" target="_blank">
        <FaLinkedin className="text-blue-500 text-3xl hover:opacity-75 transition" />
      </Link>

      <Link href="https://x.com/brain_ambani" target="_blank">
        <BsTwitterX className=" text-3xl hover:opacity-75 transition" />
      </Link>
    </div>
  );
};
