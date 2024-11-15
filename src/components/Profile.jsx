"use client"
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Profile() {
  const profileVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } }
  };


  return (
    <motion.section
      variants={profileVariants}
      initial="hidden"
      animate="visible"
      className="m-4 bg-white rounded-lg p-6 shadow-lg overflow-hidden relative"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <motion.div variants={imageVariants} className="relative w-full md:w-[200px] h-[200px] rounded-full overflow-hidden shadow-xl">
          <Image src="/images/profile.jpg" alt="profile-pic" fill style={{objectFit: "cover"}} />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 rounded-full"></div> {/* Subtle overlay */}
        </motion.div>


        <div className="text-lg md:text-base">
          <h2 className="text-3xl font-bold font-display text-gray-800 mb-2">Deepanshu Bhatt</h2>
          <p className="text-gray-600 mb-4 font-medium">Software Engineer</p>

          <div className="prose prose-gray text-gray-700 leading-relaxed"> {/* Use prose for better typography */}
            <p>
              I am a passionate software developer with a strong focus on Machine Learning, Deep Learning, and Data Science. My work involves building intelligent systems and leveraging cutting-edge technologies to solve real-world problems.
            </p>
            <p>
              Recent projects include a Football Shoot-out Analysis tool, an Animal Surveillance System, and Vision Lab, a repository showcasing my expertise in various computer vision architectures like GANs, Autoencoders, and ResNets.
            </p>
            {/* ... other paragraphs ... */}
            <p>
              Web development remains a significant aspect of my skillset, with projects like AmazeKart, an e-commerce platform, and MovieFlix, a movie streaming site.
            </p>
          </div>


          <motion.a
            href="https://drive.google.com/file/d/1xqOKWINQVTweBdk0VkJe_Ir6vtIBa8j0/view?usp=sharing"
            target="_blank"
            whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
            transition={{ duration: 0.3 }}
            className="bg-black text-white px-5 py-3 mt-6 rounded-lg inline-block font-medium transition-all duration-300 ease-in-out hover:bg-gray-800"
          >
            Resume
          </motion.a>

        </div>
      </div>

    </motion.section>
  );
}
