import React from 'react'
import { NumberData } from './Data'
import CountUp from "react-countup"

const Numbers = () => {
    return (
        <div className='number'>
            <div className='container' data-aos="zoom-out">
                <div className='row gy-4'>
                    {NumberData.map((item, i) => (
                        <div className='col-lg-3 col-md-6' key={i}>
                            <div className='coun text-center w-100 h-100' data-aos="zoom-out">
                                <h4 data-aos="zoom-out">
                                    <CountUp enableScrollSpy duration={3} start={0} end={item.count} />   {/* to increase the numbers */}
                                </h4>
                                <p data-aos="zoom-out">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Numbers
