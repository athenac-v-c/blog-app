
'use client'
import "./index.css"
import Link from "next/link"
import {useState} from "react"


export default function AuthLinks(){
    const [open,setOpen] = useState(false);
    const status = "notauthenticated"
    return (
        <>
        {status === "notauthenticated" ? (
          <Link href="/login" className="narbar-link">Login</Link>
        ):(
          <>
          <Link href="/login" className="narbar-linl">Write</Link>
          <span className="logout-link">Logout</span>
          </>
        )}
        
        <div className="narbar-burger" onClick={()=>setOpen(!open)}>

          <div className="narbar-line"></div>
          <div className="narbar-line"></div>
          <div className="narbar-line"></div>
        </div>
        {open && (
          <div className="responsiveMenu" >
              <Link href="/" >Home</Link>
              <Link href="/" >Contact</Link>
              <Link href="/" >About</Link>
            {status === "notauthenticated" ? (
                  <Link href="/login">Login</Link>
                ):(
                <>
                  <Link href="/login">Write</Link>
                    <span className="logout-link">Logout</span>
                  </>
            )}
          </div>

        )}



        </>
    )
}