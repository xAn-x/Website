import React from 'react'
import SkillBadge from './SkillBadge'

export default function SkillsRow({ skills,heading}) {
  return (
    <div className={`my-5 font-bold text-black border-b border-gray-600`}>
      <div className={`skillName text-[1.1rem] inline-block p-3 border rounded-md text-white bg-black`}>{heading}</div>
      <div className={`container grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-3 mb-3 m-auto items-baseline justify-around`}>
        {
          skills.map((skill,idx)=> <SkillBadge key={`skill-${idx}`} skill={skill} />)
        }
      </div>
    </div>
  )
}
