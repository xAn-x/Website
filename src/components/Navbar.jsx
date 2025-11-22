"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="bg-black/80 backdrop-blur-md text-neonCyan m-4 p-4 flex justify-between items-center font-mono rounded-none border-b-2 border-neonPink shadow-[0_0_15px_rgba(255,0,255,0.3)] sticky top-0 z-50"
    >
      <Link
        href="/"
        className="font-bold text-xl tracking-wider hover:text-neonPink transition-colors duration-300"
      >
        &lt;Deepanshu /&gt;
      </Link>

      <div className="hidden sm:flex space-x-8">
        {/* Desktop Layout */}
        {["GitHub", "LinkedIn", "Email"].map((item, index) => (
          <motion.a
            key={item}
            variants={linkVariants}
            href={
              item === "GitHub"
                ? "https://github.com/xAn-x"
                : item === "LinkedIn"
                ? "https://www.linkedin.com/in/deepanshu-bhatt-b74a21209/"
                : "mailto:deepanshubhat011@gmail.com"
            }
            target="_blank"
            className="relative group transition duration-300 ease-in-out hover:text-neonPink"
          >
            <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neonPink">
              &gt;
            </span>
            {item}
          </motion.a>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden">
        <button
          type="button"
          className="burger-menu block text-neonCyan focus:outline-none"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`h-8 w-8 transition-transform duration-300 ease-in-out transform ${
              showMenu ? "rotate-90" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, x: 100, transition: { duration: 0.2 } }}
          className="sm:hidden fixed top-20 right-4 bg-black border border-neonCyan rounded-none p-6 shadow-[0_0_20px_rgba(0,255,255,0.2)] z-50 min-w-[200px] text-right"
        >
          <Link
            href="https://github.com/xAn-x"
            target="_blank"
            className="block mb-4 cursor-pointer hover:text-neonPink transition-colors duration-300"
          >
            &gt; GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/deepanshu-bhatt-b74a21209/"
            target="_blank"
            className="block mb-4 cursor-pointer hover:text-neonPink transition-colors duration-300"
          >
            &gt; LinkedIn
          </Link>
          <Link
            href="mailto:deepanshubhat011@gmail.com"
            target="_blank"
            className="block cursor-pointer hover:text-neonPink transition-colors duration-300"
          >
            &gt; Email
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
