"use client"

import React from 'react';
import { ds_skills, programming_languages, web_dev, additional_skills } from '@/utils/skills';
import SkillsRow from './SkillsRow';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
    // rootMargin: window.innerWidth < 768 ? '0px 0px -250px 0px' : '0px 0px -150px 0px',
  });

  return (
    <motion.div
      ref={ref}
      className="bg-gray-200 m-4 rounded-md shadow-lg font-mono text-black p-3 opacity-0 translate-y-20 transition duration-700 ease-in-out"
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <h2 className="sub-heading text-black mb-2">Skills</h2>
      <div>
        <SkillsRow skills={programming_languages} heading="Programming Languages" styles={{
          text_col: 'black',
          bg_col: "gray-200",
          border: "black"
        }} />
        <SkillsRow skills={ds_skills} heading="Data Science & Machine Learning" styles={{
          text_col: 'black',
          bg_col: "gray-200",
          border: "black"
        }} />
        <SkillsRow skills={web_dev} heading="Web Development" styles={{
          text_col: 'black',
          bg_col: "gray-200",
          border: "black"
        }} />
        <SkillsRow skills={additional_skills} heading="General" styles={{
          text_col: 'black',
          bg_col: "gray-200",
          border: "black"
        }} />
      </div>
    </motion.div>
  );
}
