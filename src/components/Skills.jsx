import React from 'react'
import { ds_skills, programming_languages, web_dev, additional_skills } from "@/utils/skills";
import SkillsRow from './SkillsRow';

export default function Skills() {
  return (
    <div className='bg-gray-200 m-4 rounded-md font-mono text-black p-3'>
      <h2 className={'sub-heading text-black'}>Skills</h2>
      <SkillsRow skills={programming_languages} heading={"Programming Languages"} styles={{
        "text_col": 'black',
        "bg_col": "gray-200",
        "border": "black"
      }} />
      <SkillsRow skills={ds_skills} heading={"Data Science & Machine Learning"} styles={{
        "text_col": 'black',
        "bg_col": "gray-200",
        "border": "black"
      }} />
      <SkillsRow skills={web_dev} heading={"Web Devlopment"} styles={{
        "text_col": 'black',
        "bg_col": "gray-200",
        "border": "black"
      }} />
      <SkillsRow skills={additional_skills} heading={"General"} styles={{
        "text_col": 'black',
        "bg_col": "gray-200",
        "border": "black"
      }} />
    </div>
  )
}