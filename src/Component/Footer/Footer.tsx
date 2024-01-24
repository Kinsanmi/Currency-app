import React from 'react';
import './Footer.css';
import { MdOutlineFacebook } from "react-icons/md";
import { FaSquareXTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";

interface Footer {
    id: number;
    heading: string;
    title: string;
}


export const Footer:React.FC = () => {

    const footerList = () =>{
        return (
            <>
            <footer>
                <div className="footer">
                    <div className='ever-logo'>
                        <h2>Eversend</h2>
                    </div>

                    <div className='context'>
                        <h2>Company</h2>
                        <a href="">FAQs</a>
                        <a href="">Careers</a>
                        <a href="">Blog</a>
                        <a href="">About</a>
                    </div>

                    <div className='context'>
                        <h2>Products</h2>
                        <a href="">Money transfer</a>
                        <a href="">currency exchange</a>
                        <a href="">Stock trading</a>
                        <a href="">Business banking</a>
                        <a href="">Virtual cards</a>
                    </div>

                    <div className='context'>
                        <h2>Legal</h2>
                        <a href="">Privacy policy</a>
                        <a href="">Cookie policy</a>
                        <a href="">Terms of service</a>
                        <a href="">Promotions</a>
                    </div>

                    <div className='context'>
                        <h2>Social media</h2>
                        <a href="">Facebook <MdOutlineFacebook className='media-icon' /></a>
                        <a href="">Twitter <FaSquareXTwitter className='media-icon' / ></a>
                        <a href="">Instagram <FaInstagram className='media-icon' /></a>
                        <a href="">Youtube <FaYoutube className='media-icon' /></a>
                        <a href="">LinkedIn <FaLinkedin className='media-icon' /></a>
                    </div>
                </div>
            </footer>
            </>
        )
    }

  return (
    <>
    {footerList()}
    </>
  )
}