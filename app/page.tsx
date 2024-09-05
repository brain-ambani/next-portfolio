import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="w-full text-gray-400 text-xl ">
      <div className="absolute top-0 z-[-2] w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <Nav />
        <Hero />
        <About />
        <Projects />
      </div>
    </main>
  );
}
