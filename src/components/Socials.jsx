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
      className="p-6 bg-white rounded-lg shadow-lg m-4 mb-10"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect With Me</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            className="bg-gray-100 rounded-full p-3 hover:bg-gray-200 transition duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.1 }} // Add hover effect
          >
            <Image src={social.icon} alt={social.name} width={24} height={24} />{" "}
            {/* Consistent icon size */}
            <span className="text-sm font-medium text-gray-700 hidden md:inline-block">
              {" "}
              {/* Show text on larger screens */}
              {social.name}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
