"use client"
import React from 'react';
import ProjectBadge from './ProjectBadge';
import { deep_learning_projects, web_dev_projects } from "@/utils/projects";
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the element is in view
  });

  return (
    <div className="m-4 p-5 bg-gray-100 rounded-xl text-black text-monospace shadow-lg">
      <AnimatePresence>
        <motion.h1
          ref={ref}
          className="sub-heading text-black text-4xl font-bold mb-8 font-comic-neue"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h1>
      </AnimatePresence>

      <div className="project-box">
        <AnimatePresence>
          <motion.h2
            className="sub-heading text-rose-500 text-3xl font-semibold mt-7"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 3 }}
          >
            Data Science and Deep Learning Projects
          </motion.h2>
        </AnimatePresence>
        <AnimatePresence>
          {deep_learning_projects.map((project, idx) => (
            <motion.div
              key={`deep-learning-project-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectBadge project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <hr className="my-6 border-black" />
      {/* <hr className="my-6 border-black" /> */}

      <div className="project-box">
        <AnimatePresence>
          <motion.h2
            className="sub-heading text-emerald-700 text-3xl font-semibold mt-7"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 2 }}
          >
            Web Development Projects
          </motion.h2>
        </AnimatePresence>
        <AnimatePresence>
          {web_dev_projects.map((project, idx) => (
            <motion.div
              key={`web-dev-project-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectBadge project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
