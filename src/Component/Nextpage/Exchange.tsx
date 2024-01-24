import React from 'react';
import { IoMdArrowRoundDown, IoMdArrowRoundUp, IoIosArrowRoundForward  } from "react-icons/io";
import './Exchange.css';
import { Business } from './Business';


export const Exchange:React.FC = () => {

    const exchangeCurrency = () =>{
        return (
            <>
            <section className='exchange-rate'>
                <div className="exchange">
                    <div className="volume">
                        <h1>Exchange currency</h1>
                        <p>Exchange at the best possible rates. Eversend is one of the biggest currency exchange platforms in Africa by volume.</p>
                    </div>

                    <div className="amount">
                        <div className="usd">
                            <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1706097123/image_20_dp9zxd.png" alt="USA flag" />
                            <div className="usd-amt">
                                <h3>USD 899.00</h3>
                                <h6>American Dollar</h6>
                            </div>
                        </div>
                        <div className='arrow'>
                            <div>
                                <IoMdArrowRoundDown className='nav-arrow' />
                                <IoMdArrowRoundUp className='nav-arrow' />
                            </div>
                        </div>
                        <div className="ugx">
                            <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1706097123/flag_eihy82.png" alt="Ugandan flag" />
                            <div className="usd-amt">
                                <h3>UGX 45,000.98</h3>
                                <h6>Ugandan Shillings</h6>
                            </div>
                        </div>

                        <div className="ngn">
                            <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1706097123/Vector_1_x6w83m.png" alt="Nigerian flag" />
                            <div className="usd-amt">
                                <h3>NGN 3,766.03</h3>
                                <h6>Nigerian Naira</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='exchange-rate'>
                <div className="debit">
                    <div className="card">
                        <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1705932336/Card_group_l2il20.png" alt="Debit card" />
                    </div>

                    <div className="debit-card">
                        <h2>Virtual debit cards</h2>
                        <p>Banks in Africa charge you up to 15% in hidden foreign exchange fees when you pay online with your local currency bank card. Use Eversend USD virtual cards to save uo to 13%</p>
                    </div>
                </div>
            </section>

            <section className='exchange-rate'>
                <div className="stock">
                    <div className="stock-trade">
                        <h2>Stock trading</h2>
                        <p>Evesend brings you access to US stocks in Africa. Providing you the tools to protect and grow your wealth. Sign up now to get early access.</p>
                        <a href="">Request early access <IoIosArrowRoundForward className='arrow-icon' /></a>
                    </div>

                    <div className="card">
                        <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1705932336/Phone_frame_1_dxzpr8.png" alt="Debit card" />
                    </div>
                </div>
            </section>

            <Business />
            </>
        )
    }

  return (
    <>
    {exchangeCurrency()}
    </>
  )
}