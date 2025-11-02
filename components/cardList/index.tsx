'use client'
import Card from "../card"
import Pagination from "../pagination"
import "./index.css"


interface Post{
    image:string,
    createdAt:Date,
    category:string,
    title:string,

    content:string
}

export default function CardList(){

    const test_posts=[
        {
            image:"/view.webp",
            createdAt:new Date("2025-2-18"),
            title:"netherlands view",
            category:"travel",
            content:"A soft morning mist lingers over the endless rows \
            of tulip fields, each stripe bursting with vibrant reds, yellows, and \
            purples beneath a pale blue sky. In the distance, old windmills turn slowly \
            by the canals, their reflections shimmering in the still water. Bicycles glide \
            past cobblestone streets lined with gabled houses, and the air carries a calm \
            rhythm — a quiet harmony of nature and human design that feels timeless and peaceful.purples beneath a pale blue sky. In the distance, old windmills turn slowly \
            by the canals, their reflections shimmering in the still water. Bicycles glide \
            past cobblestone streets lined with gabled houses, and the air carries a calm \
            rhythm — a quiet harmony of nature and human design that feels timeless and peaceful."
        },

        {
            image:"/foodView.webp",
            createdAt:new Date("2025-4-18"),
            category:"food",
            title:"my food view",
            content:"Golden fries, melting cheese, and syrup-filled waffles — the Netherlands’ \
            comfort food captures the joy of simple moments and cozy flavors"
        }

    ]
    
    return (
      
         <div className="cardList-container">
            <h1 className = "title">Recent Posts</h1>
            <div className="posts">

                {/*<div className="post">*/}
                {test_posts.map((post:Post)=>(
                     <Card key={post.image}
                     image={post.image} 
                     createdAt={post.createdAt} 
                     category={post.category} 
                     title={post.title}
                     content={post.content}
                     />

                ))}
                   

                {/*</div>*/}


               










            </div>
            <Pagination />
         
         </div>


    )
}