// Skills.jsx
"use client";
import {
  ds_skills,
  programming_languages,
  web_dev,
  additional_skills,
} from "@/utils/skills";
import SkillsRow from "./SkillsRow";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
        },
      }}
      initial="hidden"
      animate={controls}
      className="bg-black/50 backdrop-blur-sm m-4 rounded-none p-6 border border-neonCyan shadow-[0_0_20px_rgba(0,255,255,0.1)] relative"
      id="skills"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 p-2">
        <div className="w-3 h-3 bg-neonPink rounded-full animate-pulse"></div>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-neonCyan font-retro text-center drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">
        &lt;Skills /&gt;
      </h2>

      <SkillsRow
        skills={programming_languages}
        heading="Programming Languages"
      />
      <SkillsRow skills={ds_skills} heading="Data Science & Machine Learning" />
      <SkillsRow skills={web_dev} heading="Web Development" />
      <SkillsRow skills={additional_skills} heading="General" />
    </motion.section>
  );
}
