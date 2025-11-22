import SkillBadge from "./SkillBadge";
import { motion } from "framer-motion";

export default function SkillsRow({ skills, heading }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      className="mb-8"
    >
      <h3 className="text-lg font-retro text-neonPurple mb-4 border-b border-gray-700 pb-2 inline-block pr-8">
        {heading}
      </h3>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {skills.map((skill, idx) => (
          <SkillBadge key={idx} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
