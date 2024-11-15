"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2, ease: "easeInOut" } },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="bg-gray-900 text-white m-4 p-4 flex justify-between items-center font-mono rounded-md border-gray-700 border shadow-md"
    >
      <Link href="/" className="font-semibold text-lg">
        Deepanshu Bhatt
      </Link>

      <div className="hidden sm:flex space-x-4">
        {/* Desktop Layout */}
        <motion.a
          variants={linkVariants}
          href="https://github.com/xAn-x"
          target="_blank"
          className="transition duration-300 ease-in-out hover:text-gray-300"
        >
          GitHub
        </motion.a>
        <motion.a
          variants={linkVariants}
          href="https://www.linkedin.com/in/deepanshu-bhatt-b74a21209/"
          target="_blank"
          className="transition duration-300 ease-in-out hover:text-gray-300"
        >
          LinkedIn
        </motion.a>
        <motion.a
          variants={linkVariants}
          href="mailto:deepanshubhat011@gmail.com"
          target="_blank"
          className="transition duration-300 ease-in-out hover:text-gray-300"
        >
          Email
        </motion.a>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden">
        <button
          type="button"
          className="burger-menu block text-white focus:outline-none"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`h-6 w-6 transition-transform duration-300 ease-in-out transform ${showMenu ? 'rotate-90' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0h-6" />
          </svg>
        </button>
      </div>


      {/* Mobile Menu */}
      {showMenu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
          className="sm:hidden absolute top-16 right-4 bg-gray-800 rounded-md p-4 shadow-lg z-10 min-w-[200px] text-center"
        >
          <Link href="https://github.com/xAn-x" target="_blank" className="block mb-2 cursor-pointer hover:text-gray-300 active:text-gray-400">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/deepanshu-bhatt-b74a21209/" target="_blank" className="block mb-2 cursor-pointer hover:text-gray-300 active:text-gray-400">
            LinkedIn
          </Link>
          <Link href="mailto:deepanshubhat011@gmail.com" target="_blank" className="block cursor-pointer hover:text-gray-300 active:text-gray-400">
            Email
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
