import React from 'react'
import { AboutData } from '../../Home/Data'
import image2 from "./about-2.jpg"

const About = () => {
    const data = AboutData
    return (
        <section className='about'>
            <div className='container' data-aos="fade-up">
                <div className='header' data-aos="fade-up">
                    <p>ABOUT US</p>
                    <h3>
                        Learn More
                        <span>About Us</span>
                    </h3>
                </div>
                <div className='row gy-4'>
                    <div className='col-lg-7 position-relative about-img' data-aos="fade-up">
                        <div className='about-img-text' data-aos="fade-up">
                            <h4>Book a Table</h4>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>
                    <div className='col-lg-5 d-flex align-items-end'>
                        <div className='text ps-0 p-lg-5' data-aos="fade-up">
                            <p>{data[3].text}</p>
                            <ul>
                                {data.map(item => (
                                    <li key={item.id}>
                                        {item.icon}
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                            <p>{data[3].text2}</p>
                            <div className='img-text position-relative mt-4' data-aos="fade-up">
                                <img className='img-fluid' src={image2} alt="" />
                                <a href='https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox play-btn'></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
