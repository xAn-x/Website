import Image from 'next/image'
import React from 'react'

export default function SkillBadge({ skill }) {
  return (
    <div className='skillBadge w-[80px] m-2'>
      <Image src={skill.locn} height="60" width="60" alt={skill.name}/>
      <h2 className={'text-[1.1rem] text-center'}>{skill.name}</h2>
    </div>
  )
}
