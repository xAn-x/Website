import React from 'react'
import ProjectBadge from './ProjectBadge';
import { deep_learning_projects,web_dev_projects } from "@/utils/projects";

export default function Projects() {
  return (
    <div className={`m-4 p-5 bg-gray-200 rounded-md text-black text-monospace`}>
      <h1 className={`sub-heading text-black`}>Projects</h1>
      <div className="project-box">
        <h2 className={`sub-heading text-rose-500  mt-7`}>Data Science and Deep Learning Projects</h2>
        {
          deep_learning_projects.map((project,idx) => <ProjectBadge key={`web-project-${idx}`} project={project} />)
        }
      </div>
      <hr className="text-black"/>
      <hr className="text-black"/>
      <div className="project-box">
        <h2 className={`sub-heading text-emerald-700 mt-7`}>Web Development Projects</h2>
        {
          web_dev_projects.map((project,idx) => <ProjectBadge key={`web-project-${idx}`} project={project} />)
        }
      </div>
    </div>
  )
}
