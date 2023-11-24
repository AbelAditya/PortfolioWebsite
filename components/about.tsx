"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I specialize in constructing <span className="font-medium">digital machines</span>,
      leveraging my expertise as a skilled programmer and adept problem solver. 
      I excel in tackling novel challenges, using them as opportunities for continuous learning. 
      My commitment and diligence enable me to stay dedicated to my objectives, ensuring consistent and successful outcomes. 
      I am enthusiastic about undertaking fresh projects to further fuel my personal and professional development.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing Basketball & Badminton, playing my ukelele and listening to songs. I also enjoy{" "}
        <span className="font-medium">learning new things</span>
      </p>
    </motion.section>
  );
}
