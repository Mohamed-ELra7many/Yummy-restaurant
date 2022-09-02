import React from 'react'
import { NavLink } from 'react-router-dom'
import image from "../Home/menu-item-1.png"
const Hero = () => {
    return (
        <section className='hero'>
            <div className='container'>
                <div className='row justify-content-between gy-5'>
                    <div className='col-lg-5 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <h2 data-aos="fade-up">Enjoy Your Healthy Delicious Food</h2>
                        <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                        <button className='book-table'>
                            <NavLink to='/contact'>Contact Us</NavLink>
                        </button>
                    </div>
                    <div className='col-lg-5' data-aos="zoom-out">
                        <img className="img-fluid" src={image} alt="" data-aos="zoom-out"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
