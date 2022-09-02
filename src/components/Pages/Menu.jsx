import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { AddToCart } from '../../Redux/Slice/CartSlice'
const Menu = () => {

    const state = useSelector(state => state.products)
    const dispatch = useDispatch()

    const ADDTOCART = (item) => {                                       // to add item to page cart
        dispatch(AddToCart(item))
    }

    const AllProducts = ["All", ...new Set(state.map((item) => item.cat))]    //To combine an All item with other items

    const [data, setData] = useState(state)
    const [filter, setFilter] = useState(AllProducts)

    const FilterProduct = (category) => {
        const FilterItem = state.filter(item => item.cat === category)    // to filter items
        setData(FilterItem)
        if (category === "All") {
            setData(state)
        }
    }
    return (
        <div className='menu'>
            <div className='container' data-aos="fade-up">
                <div className='header'>
                    <p>OUR MENU</p>
                    <h3>
                        Check Our
                        <span>Yummy Menu</span>
                    </h3>
                </div>
                <ul className='d-flex justify-content-center' data-aos="fade-up">
                    {filter.map((item, i) => (
                        <li key={i} onClick={() => FilterProduct(item)} data-aos="fade-up">{item}</li>
                    ))}
                </ul>
                <div className='row gy-5'>
                    {data.map((item, i) => (
                        <div className='box col-lg-4' key={item.id} data-aos="fade-up">
                            <img className=' img-fluid' src={item.image} alt="" />
                            <h4>{item.title}</h4>
                            <p className='desc'>{item.desc}</p>
                            <div className='price-add'>
                                <p className='price'>${item.price}</p>
                                <i className="fa fa-cart-plus" onClick={() => ADDTOCART(item)}></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu
