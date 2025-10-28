/*'use client'

import { ThemeContext, ThemeContextProps } from "@/context/themeContext"
import { useContext } from "react"


export default function ThemeProvider({children}:{children:React.ReactNode}){

    const { theme} = useContext(ThemeContext)!;

    return(
      
        <div className={theme}>{children}</div>


    )
}*/
"use client";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/themeContext";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const ctx = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  if (!ctx) {
    throw new Error("ThemeProvider must be used within a ThemeContextProvider");
  }
  
  useEffect(()=>{
    setMounted(true)
  },[]);
  const { theme } = ctx;
  
  if(mounted){
    return (
        <div className={theme}>
            {children}
        </div>
  );
}
}


