// Socials.jsx
import { motion } from "framer-motion";
import { socials } from "@/utils/links";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 100 },
  },
};

export default function Socials() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Animate on scroll into view
      viewport={{ once: true }} // Only animate once
      className="p-6 bg-black/60 backdrop-blur-sm border border-neonCyan rounded-none shadow-[0_0_20px_rgba(0,255,255,0.2)] m-4 mb-10 relative"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neonPink via-neonPurple to-neonCyan"></div>

      <h2 className="text-2xl font-bold text-neonCyan mb-8 font-retro text-center drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">
        &lt;Connect /&gt;
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            className="bg-black border border-gray-700 p-4 hover:border-neonPink transition duration-300 flex items-center space-x-3 group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-neonPink opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

            <div className="relative w-6 h-6 filter invert group-hover:invert-0 transition-all duration-300">
              <Image
                src={social.icon}
                alt={social.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <span className="text-sm font-mono text-gray-300 group-hover:text-neonPink transition-colors duration-300 hidden md:inline-block uppercase tracking-wider">
              {social.name}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
