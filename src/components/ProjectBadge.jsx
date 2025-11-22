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
      className="bg-black/80 border border-neonCyan rounded-none overflow-hidden shadow-[0_0_10px_rgba(0,255,255,0.2)] transition-all hover:shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:border-neonPink relative group"
    >
      {/* Scanline effect overlay */}
      <div className="absolute inset-0 scanlines opacity-10 pointer-events-none z-10"></div>

      <div className="relative h-48 w-full border-b border-neonCyan group-hover:border-neonPink transition-colors duration-300">
        <Image
          src={project.banner}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
        <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 border border-neonCyan text-neonCyan text-xs font-mono">
          ID: {Math.floor(Math.random() * 10000)}
        </div>
      </div>

      <div className="p-4 relative z-20">
        <h3 className="text-lg font-retro text-neonPink mb-2 tracking-wide truncate">
          {project.name}
        </h3>

        <AnimatePresence>
          <motion.div
            key="description"
            initial={{ opacity: 0, height: "auto" }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`text-gray-300 font-mono text-sm leading-relaxed ${
              showFullDescription ? "" : "line-clamp-3"
            }`}
          >
            {project.description}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={toggleDescription}
          className="text-neonCyan font-mono text-xs mt-2 hover:text-neonPink transition-colors uppercase tracking-widest"
        >
          [{showFullDescription ? "Collapse Data" : "Expand Data"}]
        </button>

        <div className="mt-4 flex space-x-2">
          {project.links.map((link, index) => (
            <motion.a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ff00ff",
                color: "#000",
                borderColor: "#ff00ff",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-neonCyan text-neonCyan px-3 py-1 rounded-none text-xs font-mono uppercase tracking-wider hover:bg-neonCyan hover:text-black transition-all duration-300"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
