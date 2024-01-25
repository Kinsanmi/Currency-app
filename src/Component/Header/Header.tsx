import React, { useEffect, useState } from 'react';
import './Header.css';
import { IoIosArrowRoundForward } from "react-icons/io";


export const Header:React.FC = ():JSX.Element => {

    const [open, setOpen] = useState<boolean>(false);

    const [scroll, setScroll] =useState<boolean>(false);

    const scrollEffect = () =>{
        if(window.scrollY > 10){
            setScroll(true);
        } else { setScroll(false)}
    }

    useEffect(()=>{
        window.addEventListener("scroll", scrollEffect);

        return()=>{
            window.removeEventListener("scroll", scrollEffect)
        }
    },[])

    const headerSection = () =>{
        return (
            <>
            <header>
                <div className={scroll ? "container down": "container"}>
                    <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1705932589/eversend_logo_1_df77qf.png" alt="ever-send logo" />

                    <ul className={open ? 'navbar open' : 'navbar'} onFocus={() => setOpen(false)}>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">FAQS</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>

                    <div className={open ? "hamburger open" : "hamburger"} onClick={() => setOpen(!open)}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>

                <div className="currency">
                    <div className="needs">
                        <div className="money">
                            <h1>One multi-currency app <br />for all your money needs. <br /><span>Send money</span></h1>
                            <p>Unlock the power of seamless banking with few taps</p>

                            <div className="apps">
                             <p>Available on:</p>
                                <div className="available">
                                    <div className='store'>
                                        <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1705932339/Google_play_logo_bije6q.png" alt="Goggle play store" />
                                    </div>
                                    <div className='store'>
                                        <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1705932339/image_1_exxszx.png" alt="App store" />
                                    </div>
                                </div>
                            </div>

                            <div className='download'>
                                <a href="">Download EverSend app <IoIosArrowRoundForward className='arrow-icon' /></a>
                            </div>
                        </div>
                            <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1705932338/phone_frame_tzop6u.png" alt="currency app logo" />
                    </div>
                </div>
            </header>
            </>
        )
    }

  return (
    <>
    {headerSection()}
    </>
  )
}