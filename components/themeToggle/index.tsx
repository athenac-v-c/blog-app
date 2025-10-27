'use client'
import { useContext, useState } from "react";
import './index.css'
import Image from "next/image";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "@/context/themeContext"

export default function ThemeToggle() {
  
  
  const theme  = useContext(ThemeContext)
  console.log(theme)

  return (
    <div className="themeToggle-container">
     {/*} <Image className= "sun" src= "/sun.png"alt=" " width={15} height={15} style={{
    backgroundColor: "transparent",
  }}/>
      <div className="ball"></div>
      <Image src="/moon.png" alt=" " width={25} height={18}/>*/} 
      <FaSun className="text-yellow-400" size={12} />
       <div className="ball"></div>
      <FaMoon className="text-yellow-100" size={12} />

    </div>
  );
}
