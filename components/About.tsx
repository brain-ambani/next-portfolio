"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I'm a dynamic full-stack developer proficient in ReactJS, Next.js,
        Node.js, and TypeScript. Crafting engaging interfaces with ReactJS and
        Next.js, I ensure seamless integration with MongoDB for reliable data
        storage. From frontend design using Tailwind CSS to backend logic with
        Node.js, I specialize in creating high-performance applications that
        marry innovation with scalability.
      </p>
      <p>
        Let's collaborate to transform your vision into a digital reality,
        leveraging cutting-edge technologies to drive business growth and
        captivate audiences.
      </p>
    </motion.section>
  );
}
