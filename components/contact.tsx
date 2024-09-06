import Link from "next/link";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h1 className="text-cyan-500 text-xl font-semibold">Get in touch</h1>
      <p className="py-4 w-1/2 text-center">
        Feel free to reach out to me for enquiries or quotations and i will get
        back to you!
      </p>
      <Link href="mailto:brainambani1@gmail.com?subject=Hello&body=I would like to get in touch.">
        <Button className="bg-cyan-500 opacity-65 hover:text-cyan-500">
          Say Hello
        </Button>
      </Link>
    </div>
  );
};
