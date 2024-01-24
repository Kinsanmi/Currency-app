import React from 'react'
import { feature, money } from '../../Product/Product';
import './Feature.css';
import { Financial } from './Financial';

export interface Featured {
    id: number;
    image: string
    title: string;
    body: string
}

export interface FeaturedItem {
    slide: Featured[]
}

export const Feature:React.FC = () => {

    const featureData = () =>{
        return (
            <>
            <div className="feature">
            <h1>As featured in</h1>
            <div className="items">
            {feature.map((items, index)=>{
                return (
                    <>
                    <div className='img-slide' key={index}>
                        {items.slide.map((slideItem)=>{
                            return (
                                <>
                                <div key={slideItem.id}>
                                    <img src={slideItem.image} alt="Logos" />
                                </div>
                                </>
                            )
                        })}
                    </div>
                    </>
                )
            })}
        </div>
    </div>
        </>
        )
    }


    const services = ()=>{
        return (
            <>
            <section className='fees'>
                <h1>Manage your money in the palm <br />of your hand</h1>
                <div className="range">
                    <div className="home-campaign"></div>
                    <div className="fees-low">
                    {money.map((manage)=>{
                        return (
                            <>
                            <div key={manage.id} className="low">
                                <div className="imgs">
                                    <img src={manage.image} alt="" />
                                </div>
                                <h2>{manage.title}</h2>
                                <p>{manage.body}</p>
                            </div>
                            </>
                        )
                    })}
                </div>
                </div>
                
                
            </section>
            

            <section className='map-region'>
                <div className="map">
                    <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1705953504/customers_group_kgeuvg.png" alt="" />
                </div>
            </section>

            <Financial />
            </>
        )
    }
  return (
    <>
    {featureData()}
    {services()}
    </>
  )
}