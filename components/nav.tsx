import Link from "next/link";

import { Profile } from "./profile";
import { Button } from "./ui/button";

export const Nav = () => {
  return (
    <div className="bg-[#00091d] sticky top-0 z-50 shadow-md  opacity-85">
      <div className="w-full py-4 px-8 sm:px-0 sm:w-[85%] mx-auto  flex items-center justify-between">
        <div>
          <Link href="/">
            <Profile />
          </Link>
        </div>
        <div>
          <Link href="/assets/resume.pdf" download="resume.pdf" target="_blank">
            <Button
              variant="outline"
              className="border-cyan-400 bg-transparent hover:bg-transparent hover:text-cyan-400 hover:opacity-95"
            >
              Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
