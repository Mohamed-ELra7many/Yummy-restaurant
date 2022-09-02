import React from 'react'
import Slider from "react-slick";
import { EventsData } from '../Home/Data';

const Events = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }

        ]
    };
    return (
        <div className='events'>
            <div className='container'>
                <div className='header'>
                    <p>EVENTS</p>
                    <h3>
                        Share
                        <span>Your Moments</span>
                        In Our Restaurant
                    </h3>
                </div>
            </div>
            <Slider {...settings}>
                {EventsData.map((item) => (
                    <div className='box' key={item.id}>
                        <img className=' img-fluid' src={item.image} alt="" />
                        <div className='over'></div>
                        <div className='box-text'>
                            <h3>{item.title}</h3>
                            <h4>{item.price}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Events
