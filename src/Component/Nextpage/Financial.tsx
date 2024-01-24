import React from 'react'
import { Exchange } from './Exchange'
// import { PiCurrencyNgnLight } from "react-icons/pi";



export const Financial:React.FunctionComponent = () => {

    const currentDate = new Date().toLocaleTimeString()

    const wallet = () =>{


        return (
            <>
            <section>
                <div className="multi">
                    <div className="wallet">
                        <h5>Features</h5>
                        <h1>The financial super app</h1>
                        <p>A multi currency e-wallet that allows you to exchange, <br />spend and send money at the best possible rates</p>

                        <div className="wallet-rate">
                            <div className="rate-app">
                                <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1705932337/iPhone_14_Pro_Space_Black_Mockup_ic5kcj.png" alt="" />
                                <div className="rate-img">
                                    {/* <h3>Image logo</h3> */}
                                </div>
                                <div className="rate-text">
                                    <div className="time-rate">
                                        <div className='date'>Esend</div>
                                        <div className='date'>{currentDate}</div>
                                    </div>
                                    <h3>You received USD 1,000 from Sophia Alwoch</h3>
                                </div>
                            </div>

                            <div className="rate-fee">
                                <h2>Send and <br />receive money</h2>
                                <h6>The cheap fast way to send money <br />abroad, we are 10X cheaper and faster <br />than your bank.</h6>
                            </div>

                            {/* <div className="trigger">
                                <div className="home-trigger">
                                    <div>
                                        <PiCurrencyNgnLight />
                                    </div>
                                    <div className="home"></div>
                                </div>
                                <div className="items">
                                    <h1>context goes here for items</h1>
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </section>
            <Exchange />
            </>
        )
    }


  return (
    <>
    {wallet()}
    </>
  )
}