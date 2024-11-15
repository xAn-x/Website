import SkillBadge from './SkillBadge';
import { motion } from 'framer-motion';


export default function SkillsRow({ skills, heading }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}

      className="mb-6"
    >
      <h3 className="text-xl font-semibold mb-3 mx-auto">{heading}</h3>
      <div className="grid gap-3 grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 mx-auto">
        {skills.map((skill, idx) => (
          <SkillBadge key={idx} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
