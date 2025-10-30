
import "./index.css"
import Image from "next/image"
export default function Feature(){

    return (
    
    <div className="feature-container">

        <h1 className="title">
            <b>this is a practical project: Blog APP</b>
        </h1>
        <div className="post">
            <div className="imgContainer">
                <Image className="image" src="/netherlands.jpg" alt="" fill />
            </div>
            <div className="textContainer">
                <h1 className="postTitle"><b>view from outside</b></h1>
                <p className="postDesc">"Every view outside my window tells a beautiful story"
                    f life.
                   hange of scenery can help everything". Other 
                    he symbolism of the window as a portal 
                    to the world, a source of hope, or a reminder of the simple 
                    joys of life. </p>
                <button className="readBtn">Read More</button>
            </div>


        </div>


    </div>
    )
}