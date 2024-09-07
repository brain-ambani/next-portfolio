export const Hero = () => {
  return (
    <div className="w-full px-8 sm:px-0 sm:w-3/4 mx-auto  pt-16 h-full flex flex-col">
      <div className="flex flex-col  space-y-3">
        <p className="text-cyan-500">Hi, my name is</p>
        <h1 className="text-2xl sm:text-3xl font-semibold">Brain Ambani.</h1>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold  text-muted-foreground">
          Building interactive web solutions with precision and creativity.
        </h2>
        <p className="text-sm sm:text-lg sm:w-2/3  pt-4 leading-normal">
          I&apos;m a passionate Full-Stack Developer with two years of
          experience in building robust and scalable web applications. My
          expertise lies in creating seamless user experiences with cutting-edge
          front-end technologies while ensuring efficient back-end processes.
        </p>
      </div>
    </div>
  );
};
