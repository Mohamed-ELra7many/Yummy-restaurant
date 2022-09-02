import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"
import { HeaderLinks } from './Data'

const Header = () => {
    const [mobile, setMobile] = useState(false)                 // responsev screen
    const state = useSelector(state => state.cart.cartItems)    // data from redux
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container d-flex align-items-center justify-content-between">
                <NavLink to="/" className="logo" data-aos="fade-right" >Yummy.</NavLink>

                <ul className={mobile ? "mobile-navbar" : "navbar-list"} onClick={() => setMobile(false)}>
                    {HeaderLinks.map((item, i) => (
                        <li className="nav-item" key={i}>
                            <NavLink to={item.link} className="nav-link">{item.title}</NavLink>
                        </li>
                    ))}
                </ul>
                <button className='book-table'>
                    <NavLink to="/cart">
                        <i className='fa fa-shopping-bag'></i>
                        <span>{state.length}</span>
                    </NavLink>
                </button>
                <div className="toggle" onClick={() => setMobile(!mobile)}>
                    {mobile ? <i className="fa fa-times close home-btn"></i> : <i className="fa fa-bars open"></i>}
                </div>
            </div>
        </nav>
    )
}

export default Header
