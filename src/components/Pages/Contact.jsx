import React from 'react'
import { ContactData } from '../Home/Data'

const Contact = () => {
    return (
        <div className='contact'>
            <div className=' container' data-aos="fade-up">
                <div className='header'>
                    <p>CONTACT</p>
                    <h3>
                        Need Help?
                        <span>Contact Us</span>
                    </h3>
                </div>
                <div className='row gy-4'>
                    {ContactData.map((item, i) => (
                        <div className='col-md-6' key={i}>
                            <div className='box d-flex align-items-center'>
                                {item.icon}
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <form>
                    <div className='row '>
                        <div className='col-xl-6'>
                            <input type=" text" required placeholder='Your Email' className=' form-control' data-aos="zoom-out" />
                        </div>
                        <div className='col-xl-6'>
                            <input type=" email" required placeholder='Your Email' className=' form-control' data-aos="fade-up" />
                        </div>

                    </div>
                    <input type="text" required placeholder='Subject' className='form-control' data-aos="fade-up" />
                    <textarea className=' form-control' placeholder='Message' />
                    <button type='submit' className=' m-auto d-block book-table' data-aos="fade-up">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
