import React from "react";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="block md:flex rounded-md m-4 bg-gray-200 text-black p-1">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <Image
          src="/images/profile.jpg"
          width={500}
          height={300}
          alt="profile-pic"
          className="w-full md:w-[40%] md:h-full rounded-md" 
        />
        <div className="flex flex-col gap-2 px-5">
          <h2 className="font-bold text-[25px] font-sans text-red-500">Deepanshu Bhatt</h2> 
          <h4 className="text-gray-600 text-[15px] font-mono text-blue-500">Software Engineer</h4>
          <p className="text-gray-700 text-[13px]">
            I am a passionate software developer with a strong focus on Machine
            Learning, Deep Learning, and Data Science. My work involves building
            intelligent systems and leveraging cutting-edge technologies to solve
            real-world problems. 
          </p>
          <p className="text-gray-700 text-[13px]">
            Recent projects include a Football Shoot-out Analysis tool, an Animal
            Surveillance System, and Vision Lab, a repository showcasing my
            expertise in various computer vision architectures like GANs,
            Autoencoders, and ResNets.
          </p>
          <p className="text-gray-700 text-[13px]">
            Among my earlier contributions are the development of a Language Model
            (MyGPT) from scratch, progressing from bigram models to sophisticated
            transformers, and a Duplicate Question Pair Detector using both
            machine learning and deep learning models. 
          </p>
          <p className="text-gray-700 text-[13px]">
            I also possess a solid understanding of core computer science
            principles like Operating Systems, DBMS, and Computer Networks, and I
            am proficient in C++, Java, Python, and JavaScript. 
          </p>
          <p className="text-gray-700 text-[13px]">
            Web development remains a significant aspect of my skillset, with
            projects like AmazeKart, an e-commerce platform, and MovieFlix, a
            movie streaming site. 
          </p>
          <a
            href="https://drive.google.com/file/d/1xqOKWINQVTweBdk0VkJe_Ir6vtIBa8j0/view?usp=sharing"
            target="_blank"
            className="bg-black border border-black text-white px-4 py-2 rounded-md w-[150px] m-auto text-center mb-5 hover:bg-white hover:text-black transition eaase-in-out duration-200"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
