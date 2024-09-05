import { data } from "@/lib/data";
import { AboutDisplay } from "./about-display";

export const About = () => {
  return (
    <div className="w-3/4 mx-auto py-16 ">
      <div className=" text-3xl font-semibold pb-6">
        <h2 className="pb-2">About</h2> <hr className="w-12" />
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className="text-sm">
            I am a software engineer who possesses a strong enthusiasm for
            crafting, constructing, and executing technological resolutions. I
            collaborate with individuals, startups, small businesses, and large
            corporate entities, aiding them in formulating a strategic framework
            for their online ventures.
          </p>
          <br />
          <p className="pb-4">Here are a few technologies I use:</p>
          <ul className="grid grid-cols-2 gap-4">
            {data.map((data, id) => (
              <li key={id} className=" font-medium flex items-center space-x-2">
                <span className="text-cyan-600 mr-2">&gt;</span>
                {data.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <AboutDisplay />
        </div>
      </div>
    </div>
  );
};
