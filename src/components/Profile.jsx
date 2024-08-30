import React from 'react';
import Image from "next/image"

export default function Profile() {
  return (
    <div className={'block md:flex rounded-md m-2 bg-black text-mono text-white pb-5'}>
      <Image src="/images/profile.jpg" width={300} height={300} alt="profile-pic" className={'flex-1/2 w-[300px] m-auto'}/>
      <div className="about flex-1 mx-2">
        <h2 className='font-semibold text-[2.5rem] text-rose-700'>Deepanshu Bhatt</h2>
        <h4 className='inline-block p-1 text-rose-400 text-monospace'>Software Engineer...</h4>
        <p className='text-[1.1rem] p-2 text-justify'>
          I am a dedicated software developer with a specialization in Data Science, Data Analytics, and Deep Learning. My passion for mathematics has led me to explore and excel in these fields, culminating in the development of several innovative projects. Among them is a Malaria Classification system utilizing Convolutional Neural Networks (CNNs), a Movie Recommender system, and MyGPT—my custom implementation of GPT models. Starting from basic bigram models and progressing through perceptrons, RNNs, and finally building transformer-based models from scratch, I've honed my skills in crafting intelligent systems that solve real-world problems.
        </p>
        <p className='text-[1.1rem] p-2 text-justify'>
          In addition to my focus on data-driven technologies, I have a solid background in core computer science subjects. My expertise spans Operating Systems, Database Management Systems (DBMS), MySQL, and Computer Networks (CN). This strong theoretical foundation supports my practical work, where I’ve successfully tackled over 850 problems on LeetCode, showcasing my problem-solving capabilities. I’m proficient in programming languages such as C++, Java, Python, and JavaScript, which I leverage to bring complex ideas to life.
        </p>
        <p className='text-[1.1rem] p-2 text-justify'>
          Web development is another area where I excel, particularly with the MERN stack and Next.js. My portfolio includes projects like AmazeKart, an e-commerce platform, and MovieFlix, a streaming platform, both of which demonstrate my ability to integrate advanced technologies such as Next.js, Next-auth, and Redux. My approach to development is holistic, ensuring that both the backend and frontend are optimized for performance and user experience.
        </p>
        <a href='https://drive.google.com/file/d/1VkOY2bferMlipKG8-iqcphslDsr9kFuc/view?usp=drive_link'  target='_blank' className={'inline-block text-center border border-blue-600 text-[1.1rem] p-3 w-[100px] hover:bg-blue-600 hover:border-white rounded-md my-2'}>
            Resume
        </a>
      </div>
    </div>
  );
}