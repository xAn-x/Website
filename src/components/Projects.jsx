// Projects.jsx
"use client";
import ProjectBadge from './ProjectBadge';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { deep_learning_projects,web_dev_projects } from '@/utils/projects'; // Import your projects data, separated by category


const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

export default function Projects() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="m-4 p-4 rounded-lg bg-white shadow-lg"
        >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>


            {/* Deep Learning Projects */}
            <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-8 m-auto bg-zinc-800 text-white text-center w-4/5 rounded-md p-2">Deep Learning</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {deep_learning_projects.map((project, index) => (
                        <ProjectBadge key={index} project={project} />
                    ))}
                </div>
            </div>


            {/* Web Dev Projects */}
            <div className="mt-8"> {/* Added margin for separation */}
                <h3 className="text-2xl font-semibold text-gray-700 mb-4 m-auto bg-zinc-800 text-white text-center w-4/5 rounded-md p-2">Web Development</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {web_dev_projects.map((project, index) => (
                        <ProjectBadge key={index} project={project} />
                    ))}
                </div>
            </div>

        </motion.section>
    );
}

