'use client'

import { ThemeContext } from "@/context/themeContext"
import { useContext } from "react"


export default function ThemeProvider({children}:{children:React.ReactNode}){

    const theme = useContext(ThemeContext)
    return(
      
        <div className={theme}>{children}</div>


    )
}