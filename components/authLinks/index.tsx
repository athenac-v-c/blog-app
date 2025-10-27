
import "./index.css"
import Link from "next/link"
export default function AuthLinks(){
    const status = "notauthenticated"
    return (
        <>
        {status === "notauthenticated" ? (
          <Link href="/login">Login</Link>
        ):(
          <>
          <Link href="/login">Write</Link>
          <span className="logout-link">Logout</span>
          </>
        )}
        
        </>
    )
}