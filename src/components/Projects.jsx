import React from 'react'
import ProjectBadge from './ProjectBadge';
import { deep_learning_projects,web_dev_projects } from "@/utils/projects.js"

export default function Projects() {
  return (
    <div className={`m-2 p-5 bg-black rounded-md text-white text-monospace`}>
      <h1 className={`sub-heading`}>Projects</h1>
      <div className="project-box">
        <h2 className={`sub-heading text-blue-300 mt-7`}>Data Science and Deep Learning Projects</h2>
        {
          deep_learning_projects.map(project => <ProjectBadge project={project} />)
        }
      </div>
      <div className="project-box">
        <h2 className={`sub-heading text-rose-400 mt-7`}>Web Development Projects</h2>
        {
          web_dev_projects.map(project => <ProjectBadge project={project} />)
        }
      </div>
    </div>
  )
}
