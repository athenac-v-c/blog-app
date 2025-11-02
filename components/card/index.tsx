'use client'
import Link from 'next/link'
import './index.css'
import Image from 'next/image'
interface CardProps{
    image:string,
    createdAt:Date,
    category:string,
    title:string,

    content:string
}

export default function Card({image,createdAt,category,title,content}:CardProps){


    

    return(
        
        
        <div  className="card-container">
            <div className="image-container">
                <Image src={image} alt = " " fill className='card-img'/>
            </div>
            <div className="text-container">
                <div className="text-detail">
                    <span className='date'>{createdAt.toDateString()}</span>
                    -
                    <span className='text-category'>{category}</span>
                </div>
                <h1 className='text-title'><b>{title}</b></h1>
                <p className='text-content'>{content}</p>
                <Link href="#" className='text-btn'>Read more</Link>
            </div>
        </div>
        )



    














    }








