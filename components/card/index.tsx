import './index.css'
import Image from 'next/image'

interface Post{
    image:string,
    createdAt:Date,
    title:string,
    content:string
}
export default function Card(){



    return(

        <div className="card-container">
            <div className="image-container">
                        <Image src="/view.webp" alt = " " fill  />
                    </div>
                    <div className="text-container">
                        <div className="detail">
                             <span className='date'></span>
                             <span className='category'></span>
                        </div>
                    </div>
                    <h1 className='title'></h1>
                    <p className='text-content'></p>



        
        
        </div>



    )














    }








