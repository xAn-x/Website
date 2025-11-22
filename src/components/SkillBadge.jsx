import Image from "next/image";
import { motion } from "framer-motion";

export default function SkillBadge({ skill }) {
  const percentage = skill.level * 20; // Convert level to percentage

  return (
    <motion.div
      whileHover={{ scale: 1.05, borderColor: "#ff00ff" }}
      transition={{ duration: 0.2 }}
      className="bg-black border border-gray-700 rounded-none p-3 flex items-center space-x-3 shadow-[0_0_5px_rgba(0,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,0,255,0.4)] cursor-pointer relative group"
      style={{ minWidth: "120px" }}
    >
      <div className="relative w-8 h-8 shrink-0">
        <Image
          src={skill.locn}
          alt={skill.name}
          fill
          style={{ objectFit: "contain" }}
          className="filter drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]"
        />
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <p className="text-xs font-mono text-neonCyan truncate group-hover:text-neonPink transition-colors duration-300">
          {skill.name}
        </p>
        <div className="w-full bg-gray-800 h-2 mt-1 border border-gray-600">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-gradient-to-r from-neonCyan to-neonPink h-full"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}
