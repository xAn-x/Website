// Skills.jsx
"use client"
import { ds_skills, programming_languages, web_dev, additional_skills } from '@/utils/skills';
import SkillsRow from './SkillsRow';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


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
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
      }}
      initial="hidden"
      animate={controls}
      className="bg-white m-4 rounded-lg p-6 shadow-lg overflow-hidden text-gray-800"
      id="skills"
    >
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <SkillsRow skills={programming_languages} heading="Programming Languages" />
      <SkillsRow skills={ds_skills} heading="Data Science & Machine Learning" />
      <SkillsRow skills={web_dev} heading="Web Development" />
      <SkillsRow skills={additional_skills} heading="General" />


    </motion.section>
  );
}


