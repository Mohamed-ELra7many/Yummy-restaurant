import React from 'react'
import Slider from "react-slick";
import { GalleryData } from '../Home/Data';


const Gallery = () => {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='gallery' >
            <div className=' container' data-aos="fade-up">
                <div className='header' data-aos="fade-up">
                    <p>GALLERY</p>
                    <h3>
                        Check
                        <span>Our Gallery</span>
                        <Slider {...settings}>
                            {GalleryData.map((item) => (
                                <div className='box' key={item.id} data-aos="fade-up">
                                    <img className=' img-fluid' src={item.image} alt="" />
                                </div>
                            ))}
                        </Slider>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Gallery
