"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
  const [show_menu, toggle_show_menu] = useState(false)
  return (
    <nav className={`bg-black m-2 p-5 flex justify-between text-white font-mono rounded-md`}>
      <h2 className={'text-amber-300  font-semibold items-baseline'}>Deepanshu Bhatt</h2>
      <div className={'hidden sm:block w-[40%]'}>
        {/* Desktop Layout */}
        <div className="links flex justify-around border-gray-2 w-full">
          <a href='https://github.com/xAn-x'  target='_blank' className={'hover:text-amber-300 hover:underline'}>
            GitHUB
          </a>
          <a href='https://www.linkedin.com/in/deepanshu-bhatt-b74a21209/' target='_blank'  className={'hover:text-amber-300 hover:underline'}>
            LinkedIN
          </a>
          <a href="mailto:deepanshubhat011@gmail.com" target="_blank" className={'hover:text-amber-300 hover:underline'}>G-Mail</a>
        </div>
      </div>
      {/* Mobile Layout */}
      <button type='btn' className="burger-menu block sm:hidden h-2/3 w-[70px] text-center text-amber-300 hover:bg-amber-300 hover:text-black border-amber-300 border rounded-sm transition ease-in-out duration-300" onClick={() => toggle_show_menu(!show_menu)}>{show_menu==false ? "Socials" : "close"}</button>
      {show_menu && <div className={"sm:hidden links flex flex-col absolute top-[70px] right-[10px] w-[200px] bg-zinc-900 rounded-md text-whitep-2 shadow-lg shadow-zinc-400 z-10 text-center "}>
        <a href='https://github.com/xAn-x' target="_blank" className={'m-auto w-[80%] hover:text-amber-300 hover:underline my-2 border-b pb-1'}>
          GitHUB
        </a>
        <a href='https://www.linkedin.com/in/deepanshu-bhatt-b74a21209/' target="_blank" className={'m-auto w-[80%] hover:text-amber-300 hover:underline my-2 border-b pb-1'}>
          LinkedIN
        </a>
        <a href="mailto:deepanshubhat011@gmail.com" target="_blank"className={'m-auto w-[80%] hover:text-amber-300 hover:underline my-2 border-b pb-1'}>G-Mail</a>
      </div>}
    </nav>
  )
}

