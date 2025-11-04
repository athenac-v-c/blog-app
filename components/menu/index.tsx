'use client'
import Link from "next/link"
import "./index.css"
import Image from "next/image"
export default function Menu(){

    return (
        <div className="menu-container">
            <h2 className="menu-subtitle">{"What's hot"}</h2>
            <h1 className="menu-title">Most Popular</h1>
            <div className="items">
                <Link href="\" className="menu-item">
                    <div className="item-image-container">
                        <Image src="/style.jpg" alt = "" className="item-img" fill/>
                    </div>
                    <div className="item-text-container">
                        <span>Style</span>
                        <h3 className="item-postTitle">Style is the expression of individuality through </h3>
                    
                        <div className="item-detail">
                            <span className="item-username">Athena L</span>
                            <span className="item-date"> - 10.03.2025</span>
                        </div>
                    </div>
                </Link>

            </div>
            


        
        
        
        
        </div>
    )
}