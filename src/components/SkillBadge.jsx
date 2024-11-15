import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SkillBadge({ skill }) {
    const percentage = skill.level * 20; // Convert level to percentage

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 rounded-lg p-3 flex items-center space-x-2 shadow-sm transition-shadow hover:shadow-md cursor-pointer relative" // Added 'relative' for positioning
            style={{ minWidth: "120px" }}
        >
            <Image src={skill.locn} alt={skill.name} width={24} height={24} />
            <div className="flex flex-col w-full"> 
                <p className="text-sm font-medium">{skill.name}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="bg-blue-500 h-2.5 rounded-full"
                    ></motion.div>
                </div>
            </div>
        </motion.div>
    );
}
