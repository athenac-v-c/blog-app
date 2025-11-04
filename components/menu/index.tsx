'use client'
import Link from "next/link"
import "./index.css"
import Image from "next/image"
export default function Menu(){


    const categories =['coding', 'style','food','fashion','travel','culture']
    return (
        <div className="menu-container">
            <h2 className="menu-subtitle">{"What's hot"}</h2>
            <h1 className="menu-title">Most Popular</h1>
            <div className="menu-items">
                <Link href="\" className="menu-item">
                    {/*<div className="item-image-container">
                        <Image src="/style.jpg" alt = "" className="item-img" fill/>
                    </div>*/}
                    <div className="item-text-container">
                        <span className={`category ${categories[1]}`}>Style</span>
                        <h3 className="item-postTitle">Style is the expression of individuality through </h3>
                    
                        <div className="item-detail">
                            <span className="item-username">Athena L</span>
                            <span className="item-date"> - 10.03.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="\" className="menu-item">
                    {/*<div className="item-image-container">
                        <Image src="/style.jpg" alt = "" className="item-img" fill/>
                    </div>*/}
                    <div className="item-text-container">
                        <span className={`category ${categories[1]}`}>Style</span>
                        <h3 className="item-postTitle">Style is the expression of individuality through </h3>
                    
                        <div className="item-detail">
                            <span className="item-username">Athena L</span>
                            <span className="item-date"> - 10.03.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="\" className="menu-item">
                    {/*<div className="item-image-container">
                        <Image src="/style.jpg" alt = "" className="item-img" fill/>
                    </div>*/}
                    <div className="item-text-container">
                        <span className={`category ${categories[1]}`}>Style</span>
                        <h3 className="item-postTitle">Style is the expression of individuality through </h3>
                    
                        <div className="item-detail">
                            <span className="item-username">Athena L</span>
                            <span className="item-date"> - 10.03.2025</span>
                        </div>
                    </div>
                </Link>

            </div>
            <h2 className="menu-subtitle">Discover by topic</h2>
            <h1 className="menu-title">Categories</h1>
            <div className="menu-categoryList">
                <Link href="/blog?cat=style" className="category style">Style</Link>
                <Link href="/blog?cat=travel" className="category travel">Travel</Link>
                <Link href="/blog?cat=food" className="category food">Food</Link>
                <Link href="/blog?cat=coding" className="category coding">Coding</Link>
                <Link href="/blog?cat=culture" className="category culture">Culture</Link>
                <Link href="/blog?cat=fashion" className="category fashion">Fashion</Link>









            </div>






            <h2 className="menu-subtitle">Chosen by the editor</h2>
            <h1 className="menu-title">Editors Pick</h1>
            <div className="menu-items">
                <Link href="\" className="menu-item">
                    <div className="item-image-container">
                        <Image src="/style.jpg" alt = "" className="item-img" fill/>
                    </div>
                    <div className="item-text-container">
                        <span className={`category ${categories[1]}`}>Style</span>
                        <h3 className="item-postTitle">Style is the expression of individuality through </h3>
                    
                        <div className="item-detail">
                            <span className="item-username">Athena L</span>
                            <span className="item-date"> - 10.03.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="\" className="menu-item">
                    <div className="item-image-container">
                        <Image src="/style.jpg" alt = "" className="item-img" fill/>
                    </div>
                    <div className="item-text-container">
                        <span className={`category ${categories[1]}`}>Style</span>
                        <h3 className="item-postTitle">Style is the expression of individuality through </h3>
                    
                        <div className="item-detail">
                            <span className="item-username">Athena L</span>
                            <span className="item-date"> - 10.03.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="\" className="menu-item">
                    <div className="item-image-container">
                        <Image src="/style.jpg" alt = "" className="item-img" fill/>
                    </div>
                    <div className="item-text-container">
                        <span className={`category ${categories[1]}`}>Style</span>
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