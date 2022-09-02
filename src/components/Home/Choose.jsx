import React from 'react'
import { ChooseData } from './Data'

const Choose = () => {
    return (
        <div className='Choose'>
            <div className='container'>
                <div className='row gy-4'>
                    <div className='col-lg-4' data-aos="fade-up">
                        <div className='why'>
                            <h3>Why Choose Yummy?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className='row gy-4'>
                            {ChooseData.map((item) => (
                                <div className='col-xl-4' key={item.id} data-aos="fade-up">
                                    <div className='box d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                                        {item.icon}
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose
