import React from 'react'
import { ds_skills, programming_languages, web_dev, additional_skills } from "@/utils/skills";
import SkillsRow from './SkillsRow';

export default function Skills() {
  return (
    <div className='bg-black m-2 rounded-md font-monospace text-white p-3'>
      <h2 className={'sub-heading text-pink-600'}>Skills</h2>
      <SkillsRow skills={programming_languages} heading={"Programming Languages"} styles={{
        "text_col": 'rose-600',
        "bg_col": "black",
        "border": "white"
      }} />
      <SkillsRow skills={ds_skills} heading={"Data Science & Machine Learning"} styles={{
        "text_col": 'sky-600',
        "bg_col": "black",
        "border": "white"
      }} />
      <SkillsRow skills={web_dev} heading={"Web Devlopment"} styles={{
        "text_col": 'red-600',
        "bg_col": "black",
        "border": "white"
      }} />
      <SkillsRow skills={additional_skills} heading={"General"} styles={{
        "text_col": 'rose-600',
        "bg_col": "black",
        "border": "white"
      }} />
    </div>
  )
}
