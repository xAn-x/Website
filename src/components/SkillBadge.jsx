import React from 'react';
import Image from 'next/image';

export default function SkillBadge({ skill }) {
  return (
    <div 
      className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg p-3 text-center transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-gray-400 hover:to-gray-500 hover:shadow-lg text-black flex flex-col justify-center items-center w-[100px] h-[100px] md:w-[120px] md:h-[120px] overflow-hidden cursor-pointer"
    >
      <Image
        src={`${skill.locn}`}
        height="200"
        width="200"
        alt={skill.name.toLowerCase()}
        className="w-10 h-10 transition duration-300 ease-in-out transform hover:scale-110"
      />
      <p className="text-sm font-semibold mt-2">{skill.name}</p>
    </div>
  );
}
