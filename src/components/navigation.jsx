import { useState, useRef, useEffect } from 'react'
export default function Navigation() {
    const [opend, setOpend] = useState(false)
    const humBtn = useRef()
    const navLinks = useRef(null)
    function toogleNav() {
      opend ? setOpend(false) : setOpend(true)
    }
    return (
        <nav className='w-screen sm:flex-row sm:justify-between h-fit bg-gradient-to-br from-white/30 to-gray-500/20 text-white items-center px-5 fixed z-9999 flex flex-col' style={{ backdropFilter: "blur(10px)" }}>
            <div className={`w-full sm:w-fit flex justify-between h-16 items-center ${opend && " max-sm:border-b max-sm:border-b-white"}`} >
                <h1 className='text-3xl font-bold! font-medium text-[#1fff00] flex items-end'>{"<"} <span className='text-white'>BG</span>{"/> "} </h1 >
                <button ref={humBtn} onClick={toogleNav} className="humBtn sm:hidden">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div >
                            <div style={{ ...(!opend && { display: "none" }) }} onClick={toogleNav} className="absolute w-screen h-screen top-0 left-0 z-1">
                </div>
            <ul onClick={toogleNav} ref={navLinks} className={`z-100 transition sm:w-[70%] duration-300 transition-all overflow-y-hidden justify-around w-full !font-normal flex flex-col gap-4 items-center sm:flex-row min-[640px]:h-fit ${opend ? "h-72 py-4" : "h-0"}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills" >Skills</a></li>
                <li><a href="#tools" >Tools</a></li>
                <li><a href="#projects" >Projects</a></li>
            </ul>
        </nav >
    )
} 
