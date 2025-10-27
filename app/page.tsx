'use client'
import Feature from "@/components/featured"
import "./page.css"
import CategoryList from "@/components/categoryList"
import CardList from "@/components/cardList"
import Menu from "@/components/menu"

export default function homepage(){

  return(    
    <div className="homePage-container">
      <Feature />
      <CategoryList/>
      <div className="homepage-content">
        <CardList />
        <Menu />

      </div>





    </div>
   
   )
}