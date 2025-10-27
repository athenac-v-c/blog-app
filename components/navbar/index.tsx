
import './index.css'
import Image from "next/image";
import Link from 'next/link'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import AuthLinks from '../authLinks';
import ThemeToggle from '../themeToggle';


export default function Navbar(){

    return(
        <div className="navbar-container">
            <div className='navbar-social'>
                <a href="#" className="icon-circle facebook">
                    <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="icon-circle twitter">
                    <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="icon-circle instagram">
                    <i className="fa fa-instagram"></i>
                </a>
                <a href="#" className="icon-circle youtube">
                    <i className="fa fa-youtube"></i>
                </a>
            </div>
            <div className='navbar-logo'>Daily News</div>
            <div className='navbar-links'>
                <ThemeToggle />
                <Link href="/">Home</Link>
                <Link href="/">Contact</Link>
                <Link href="/">About</Link>
                <AuthLinks />
                


            </div>
            <div className='navbar-'></div>
        
        
        
        
        </div>
        
    )





}