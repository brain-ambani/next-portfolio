import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="mt-auto text-center text-zinc-400 py-5 px-7 border-t">
      <small>Built with 💗 by Brain</small>
      <Image
        src="/assets/scriptify.png"
        alt="image text"
        width={250}
        height={250}
      />
    </footer>
  );
};
