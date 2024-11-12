import Image from 'next/image'
import React from 'react'

export default function ProjectBadge({ project }) {
  return (
    <div className="project-badge bg-white p-2 rounded-md shadow-lg">
      <div className="box-1 flex flex-col items-around md:flex-row md:items-center text-justify md:gap-3 p-3">
        <div className="box md:basis-[40%] text-center p-2">
          <Image
            src={project.banner}
            width={400}
            height={400}
            className="project-image m-auto h-[200px]  w-auto min-w-[200px] w-auto rounded-sm object-cover shadow-md"
            alt={`${project.name} banner`}
          />
          <div className="project-name my-2 text-lg font-bold text-black">
            {project.name}
          </div>
        </div>
        <div className="project-description md:basis-[60%] text-md md:text-lg text-black">
          {project.description}
        </div>
      </div>
      <div className="links-container text-blue-600 items-center">
        {project.links.map(link => (
          <a
            key={link.name}
            className="project-link flex-1 h-full p-1 text-center items-center hover:cursor-pointer hover:bg-blue-600 hover:text-white active:bg-blue-900 block"
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
