import React from 'react'
import { socials } from "@/utils/links.js"
import Image from 'next/image'
export default function Socials() {
  return (
    <div className={`bg-black rounded-md m-3 p-3 pb-10 text-purple-600`}>
      <div className="sub-heading mb-10">Socials</div>
      <div className="container w-2/3 min-w-[300px] m-auto flex flex-around justify-around items-center border border-purple-600 shadow-md shadow-purple-600 p-3 flex-wrap ">
        {socials.map((obj, idx) => <a href={obj.link} target="_blank" key={idx} className={'flex-1 p-3 text-center hover:bg-white hover:cursor-pointer active:bg-slate-200 rounded-md'}>
          <Image src={obj.icon} height="40" width="40" alt={obj.name} className={`mx-auto w-[30px] md:w-[40px]`}/>
          <div target="_blank">{obj.name}</div>
        </a>)}
      </div>
    </div>
  )
}