import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const imageVariants = {
  initial: { opacity: 1, scale: 1 },
  hover: { opacity: 0.5, scale: 1.1 }
};

const textVariants = {
  initial: { opacity: 0, y: 50 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

export default function ProjectBadge({ project }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      ref={ref}
      className="project-badge relative overflow-hidden rounded-lg shadow-2xl border border-gray-300 bg-white bg-opacity-10 hover:backdrop-blur-md p-3 min-w-[350px] lg:w-4/5 h-[350px] "
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="image-container absolute inset-0"
        variants={imageVariants}
        initial="initial"
        animate={isHovered ? 'hover' : 'initial'}
      >
        <Image
          src={project.banner}
          layout="fill"
          objectFit="cover"
          className="project-image rounded-lg"
          alt={`${project.name} banner`}
        />
      </motion.div>
      <div className="project-name absolute inset-0 flex items-center justify-center text-3xl text-white bg-zinc-600 bg-opacity-50 p-3 font-comic-neue">
        {project.name}
      </div>
      <AnimatePresence>
        {isHovered || isExpanded ? (
          <motion.div
            className="text-container absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-50 backdrop-blur-lg p-4"
            variants={textVariants}
            initial="initial"
            animate="hover"
            exit="initial"
          >
            <div className="project-description text-lg md:text-xl text-gray-700 my-auto overflow-y-auto max-h-70">
              {project.description}
            </div>
            <div className="links-container flex justify-start items-baseline mb-5">
              {project.links.map((link, index) => (
                <motion.a
                  key={link.name}
                  variants={linkVariants}
                  className="project-link flex-1 m-1 p-2 text-center rounded-md bg-black text-white hover:bg-gray-700 active:bg-gray-900 block max-w-[100px] max-h-[50px]"
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover="hover"
                  whileTap="tap"
                  style={{ marginBottom: index === project.links.length - 1 ? '2rem' : '0' }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button
        className="expand-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 absolute bottom-2 right-2 lg:hidden"
        onClick={handleToggle}
      >
        {isExpanded ? 'Hide Details' : 'More Info'}
      </button>
    </motion.div>
  );
}
