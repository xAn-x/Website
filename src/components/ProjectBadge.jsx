// ProjectBadge.jsx
"use client";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export default function ProjectBadge({ project }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg relative group"
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.banner}
          alt={project.name}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {project.name}
        </h3>

        <AnimatePresence>
          <motion.p
            key="description"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: showFullDescription ? "auto" : "60px",
            }} // Conditional height
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`text-gray-600 ${
              showFullDescription ? "" : "line-clamp-3 overflow-hidden"
            }`}
          >
            {project.description}
          </motion.p>
        </AnimatePresence>

        <button
          onClick={toggleDescription}
          className="text-blue-500 font-medium mt-2"
        >
          {showFullDescription ? "Read Less" : "Read More"}
        </button>

        <div className="mt-4 flex space-x-2">
          {project.links.map((link, index) => (
            <motion.a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="bg-black text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
