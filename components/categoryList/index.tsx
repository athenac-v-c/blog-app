
import Link from "next/link"
import "./index.css"
import Image from "next/image"


interface Category {
    picDir:string;
    cssName:string

}
export default function CategoryList(){
   const categories:Category[] =[
    {picDir:"/style.jpg",cssName:"style"},
    {picDir:"/fashion.jpg",cssName:"fashion"},
    {picDir:"/food.jpg",cssName:"food"},
    {picDir:"/travel.jpeg",cssName:"travel"},
    {picDir:"/coding.jpg",cssName:"coding"},
    {picDir:"/culture.jpg",cssName:"culture"},
   ]

   return (

       <div className="categoryList-container">
        <h1 className="categoryList-title">Popular Categories</h1>
        <div className="categories">
           
           {
             categories.map((category:Category)=>(
                
                <Link href={`/blog?category=${category.cssName}`} key={category.cssName} className={`category-link ${category.cssName}`}>
                    <div className="img">
                        <Image src={category.picDir} alt="" fill className="category-img"/>
                    </div>
                    {category.cssName}
                </Link>

                
             ))
           }

            {/*
                <Link href="#">
                    <Image src="/style.jpg" alt="" width={43} height={43}/>
                    style
                </Link>
                <Link href="#" className="style-link">
                    <Image src="/travel.jpeg" alt="" width={43} height={43}/>
                    travel
                </Link>
                <Link href="#" className="style-link">
                    <Image src="/fashion.jpg" alt="" width={43} height={43}/>
                    fashion
                </Link>
                <Link href="#" className="style-link">
                    <Image src="/food.jpg" alt="" width={43} height={43}/>
                    food
                </Link>
                 <Link href="#" className="style-link">
                    <Image src="/coding.jpg" alt="" width={43} height={43}/>
                    coding
                </Link>
                <Link href="#" className="style-link">
                    <Image src="/style.jpg" alt="" width={43} height={43}/>
                    style
                </Link>

             */}
        </div>
       </div>


   )

}