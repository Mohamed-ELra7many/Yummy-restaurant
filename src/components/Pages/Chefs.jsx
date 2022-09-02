import React from 'react'
import { ChefsData } from '../Home/Data'

const Chefs = () => {
    return (
        <div className='chefs'>
            <div className='container' data-aos="fade-up">
                <div className='header'>
                    <p>CHEFS</p>
                    <h3>
                        Our
                        <span>Proffesional</span>
                        Chefs
                    </h3>
                </div>
                <div className='row gy-4'>
                    {ChefsData.map((item) => (
                        <div className='col-lg-4 col-md-6 d-flex align-items-center' key={item.id} data-aos="fade-up">
                            <div className='box'>
                                <div className='box-img'>
                                    <img className=' img-fluid' src={item.image} alt='' />
                                    <div className='links'>
                                        <a href='https://www.twitter.com'>
                                            <i className='fa fa-twitter'></i>
                                        </a>
                                        <a href='https://www.facebook.com'>
                                            <i className='fa fa-facebook'></i>
                                        </a>
                                        <a href='https://www.instagram.com'>
                                            <i className='fa fa-instagram'></i>
                                        </a>
                                        <a href='https://www.linkedin.com'>
                                            <i className='fa fa-linkedin'></i>
                                        </a>
                                    </div>
                                </div>
                                <div className='box-text'>
                                    <h4>{item.name}</h4>
                                    <span>{item.title}</span>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Chefs
