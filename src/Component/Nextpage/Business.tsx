import React from 'react';
import { IoIosArrowRoundForward  } from "react-icons/io";
import './Business.css';
import { Footer } from '../Footer/Footer';



export const Business:React.FC = () => {

    const owners = () =>{

        return (
            <>
            <section>
                <div className="biz">
                    <div className="biz-trade">
                        <h2>For business owners</h2>
                        <p>Multi-currency business payments to fuel your global <br />growth. Collections, payouts, currency exchange, <br /> and working capital.</p>
                        <a href="">Learn more <IoIosArrowRoundForward className='arrow-icon' /></a>
                    </div>

                    <div className="biz-img">
                        <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1705932336/MacBook_Pro_16-inch_Space_Black_Front_i6gnmx.png" alt="Trade business" />
                    </div>
                </div>
            </section>

            <section className='starter'>
                <div className="price-img">
                    <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1706118862/Frame_56_mlk3mm.png" alt="Getting Started" />
                </div>

                <div className="steps">
                    <h1>Get started in 3 easy steps</h1>

                    <div className="steps-app">
                        <div className='app'>
                            <div className='number'>1</div>
                            <div className="app-style">
                                <h6>Download Eversend app</h6>
                                <p>Download the Eversend mobile app for your Android or iOS device</p>
                            </div>
                        </div>
                        <div className='app'>
                            <div className='number'>2</div>
                                <div className="app-style">
                                    <h6>Complete KYC</h6>
                                    <p>Complete KYC verification within the app.</p>
                                </div>
                        </div>
                         <div className='app'>
                            <div className='number'>3</div>
                                <div className="app-style">
                                    <h6>Start transacting</h6>
                                    <p>Start transacting and receiving money from friends and family.</p>
                                </div>
                         </div>
                        <a href="">Download Eversend app now <IoIosArrowRoundForward className='arrow-icon' /></a>
                    </div>
                </div>
            </section>

            <Footer />
            </>
        )
    }

  return (
    <>
    {owners()}
    </>
  )
}