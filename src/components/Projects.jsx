// Projects.jsx
"use client";
import ProjectBadge from "./ProjectBadge";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { deep_learning_projects, web_dev_projects } from "@/utils/projects";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="m-4 p-6 rounded-none bg-black/40 backdrop-blur-sm border border-neonPurple shadow-[0_0_20px_rgba(191,0,255,0.1)]"
    >
      <h2 className="text-3xl font-bold text-neonPurple mb-8 font-retro text-center drop-shadow-[0_0_5px_rgba(191,0,255,0.8)]">
        &lt;Projects /&gt;
      </h2>

      {/* Deep Learning Projects */}
      <div className="mb-12">
        <h3 className="text-xl font-mono text-black bg-neonCyan inline-block px-4 py-1 mb-6 transform -skew-x-12 border-r-4 border-b-4 border-white">
          <span className="transform skew-x-12 inline-block font-bold">
            :: Deep Learning ::
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {deep_learning_projects.map((project, index) => (
            <ProjectBadge key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Web Dev Projects */}
      <div>
        <h3 className="text-xl font-mono text-black bg-neonPink inline-block px-4 py-1 mb-6 transform -skew-x-12 border-r-4 border-b-4 border-white">
          <span className="transform skew-x-12 inline-block font-bold">
            :: Web Development ::
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {web_dev_projects.map((project, index) => (
            <ProjectBadge key={index} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
