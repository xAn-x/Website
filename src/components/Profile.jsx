"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Profile() {
  const [text, setText] = useState("");
  const fullText = "Software Engineer | ML Enthusiast | Web Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const profileVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0, filter: "grayscale(100%)" },
    visible: {
      scale: 1,
      opacity: 1,
      filter: "grayscale(0%)",
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      variants={profileVariants}
      initial="hidden"
      animate="visible"
      className="m-4 bg-black/50 border border-neonCyan rounded-none p-6 shadow-[0_0_20px_rgba(0,255,255,0.1)] relative overflow-hidden"
    >
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neonPink"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neonPink"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neonPink"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neonPink"></div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
        <motion.div
          variants={imageVariants}
          className="relative w-full md:w-[200px] h-[200px] rounded-none overflow-hidden border-2 border-neonPink shadow-[0_0_15px_rgba(255,0,255,0.5)]"
        >
          <Image
            src="/images/profile.gif"
            alt="profile-pic"
            fill
            style={{ objectFit: "cover" }}
            className="hover:scale-110 transition-transform duration-500"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-neonCyan animate-pulse"></div>
        </motion.div>

        <div className="text-lg md:text-base flex-1">
          <h2 className="text-3xl md:text-4xl font-bold font-retro text-neonCyan mb-2 tracking-wider drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">
            Deepanshu Bhatt
          </h2>
          <p className="text-neonPink mb-4 font-mono text-sm md:text-base h-6">
            &gt; {text}
            <span className="animate-pulse">_</span>
          </p>

          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed font-mono text-sm md:text-base border-l-2 border-gray-700 pl-4">
            <p className="mb-2">
              <span className="text-neonPurple">const</span>{" "}
              <span className="text-yellow-300">aboutMe</span> ={" "}
              <span className="text-green-400">
                "Passionate developer focused on intelligent systems."
              </span>
              ;
            </p>
            <p>
              I specialize in Machine Learning, Deep Learning, and Data Science.
              My mission is to leverage cutting-edge tech to solve real-world
              problems.
            </p>
            <p className="mt-2">
              From analyzing football shootouts to building e-commerce
              platforms, I bridge the gap between complex algorithms and
              user-friendly interfaces.
            </p>
          </div>

          <motion.a
            href="https://drive.google.com/file/d/1xqOKWINQVTweBdk0VkJe_Ir6vtIBa8j0/view?usp=sharing"
            target="_blank"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block px-6 py-3 bg-transparent border border-neonCyan text-neonCyan font-mono uppercase tracking-widest hover:bg-neonCyan hover:text-black transition-all duration-300"
          >
            [ Download Resume ]
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
