import React from "react";
import Image from "next/image";

export default function Profile() {
  return (
    <div
      className={
        "block md:flex rounded-md m-2 bg-black text-mono text-white pb-5"
      }
    >
      <Image
        src="/images/profile.jpg"
        width={250}
        height={150}
        alt="profile-pic"
        className={"flex-1/2 w-[75%] md:w-[40%] h-auto m-auto"}
      />
      <div className="about flex-1 mx-2">
        <h2 className="font-semibold text-[2.5rem] text-rose-700">
          Deepanshu Bhatt
        </h2>
        <h4 className="inline-block p-1 text-rose-400 text-monospace">
          Software Engineer...
        </h4>
        <p className="text-[1.1rem] p-2 text-justify">
          I am a passionate software developer with a strong focus on Machine
          Learning, Deep Learning, and Data Science. My work involves building
          intelligent systems and leveraging cutting-edge technologies to solve
          real-world problems. Recent projects include a Football Shoot-out
          Analysis tool, an Animal Surveillance System, and Vision Lab, a
          repository showcasing my expertise in various computer vision
          architectures like GANs, Autoencoders, and ResNets.
        </p>
        <p className="text-[1.1rem] p-2 text-justify">
          The Football Shoot-out Analysis project utilizes advanced techniques
          such as SigLip, UMAP, and KMeans clustering to track players, analyze
          ball movement, and team identification by jersey color. My work on the
          Animal Surveillance System applies the YOLOv5 architecture for
          real-time wildlife detection, with high precision on custom datasets.
          Vision Lab serves as an evolving collection of deep learning
          implementations, aiming to simplify complex concepts in computer
          vision.
        </p>
        <p className="text-[1.1rem] p-2 text-justify">
          Among my earlier contributions are the development of a Language Model
          (MyGPT) from scratch, progressing from bigram models to sophisticated
          transformers, and a Duplicate Question Pair Detector using both
          machine learning and deep learning models. I also created a Malaria
          Classification system using CNNs to assist in medical diagnostics with
          90% accuracy and built a personalized Movie Recommender System using
          embeddings and Cosine Similarity.
        </p>
        <p className="text-[1.1rem] p-2 text-justify">
          Alongside my deep learning work, I have solved over 850 problems on
          LeetCode, showcasing my problem-solving skills. I also possess a solid
          understanding of core computer science principles like Operating
          Systems, DBMS, and Computer Networks, and I am proficient in C++,
          Java, Python, and JavaScript. I enjoy combining my knowledge of
          data-driven technologies and programming to bring innovative ideas to
          life.
        </p>
        <p className="text-[1.1rem] p-2 text-justify">
          Web development remains a significant aspect of my skillset, with
          projects like AmazeKart, an e-commerce platform, and MovieFlix, a
          movie streaming site. Both platforms demonstrate my ability to
          integrate the MERN stack, Next.js, and Redux to create seamless user
          experiences.
        </p>

        <a
          href="https://drive.google.com/file/d/1xqOKWINQVTweBdk0VkJe_Ir6vtIBa8j0/view?usp=sharing"
          target="_blank"
          className={
            "inline-block text-center border border-blue-600 text-[1.1rem] p-3 w-[100px] hover:bg-blue-600 hover:border-white rounded-md my-2"
          }
        >
          Resume
        </a>
      </div>
    </div>
  );
}
