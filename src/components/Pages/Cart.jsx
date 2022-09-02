/* eslint-disable no-lone-blocks */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AddToCart, clearCart, Decrees, getTotals, RemoveFromCart } from '../../Redux/Slice/CartSlice';

const Cart = () => {
    const state = useSelector(state => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals());
    }, [state, dispatch]);
    const AddItemToCart = (product) => {                       // to add item to page cart
        dispatch(AddToCart(product));
    };
    const DecreaseCart = (product) => {                      // to decrease item to page cart
        dispatch(Decrees(product));
    };
    const RemoveCart = (product) => {                         // to remove item to page cart
        dispatch(RemoveFromCart(product));
    };
    const ClearCart = () => {                               // to remove all item to page cart
        dispatch(clearCart());
    };
    return (
        <div className='cart'>
            <div className='container' data-aos="fade-up">
                <div className='header'>
                    <p>CART</p>
                    <h3>
                        Your
                        <span>Cart</span>

                    </h3>
                </div>
                {state.cartItems.length === 0 ? (
                    <div className="empty" data-aos="fade-up">
                        <p>Your cart is currently empty</p>
                        <div className=" text-center">
                            <NavLink to="/">
                                <i className='fa fa-arrow-left'></i>
                                <span>Start Shopping</span>
                            </NavLink>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="titles row" data-aos="fade-up">
                            <h4 className="col product-title">Image</h4>
                            <h4 className="col price">Title</h4>
                            <h4 className="col price">MRP</h4>
                            <h4 className="col quantity">Quantity</h4>
                            <h4 className="col total">Total</h4>
                            <h4 className="col total">Delete</h4>
                        </div>
                        <div className="items mt-5 mb-5">
                            {state.cartItems &&
                                state.cartItems.map((item) => (
                                    <div className='row box' key={item.id} data-aos="fade-up">
                                        <div className='col' data-aos="fade-up">
                                            <img className=' img-fluid' src={item.image} alt="" />
                                        </div>
                                        <div className='col title'>{item.title}</div>
                                        <div className='col price'>${item.price}</div>
                                        <div className='col qouantity d-flex'>
                                            <div onClick={() => AddItemToCart(item)}>+</div>
                                            <span>{item.cartQouantity}</span>
                                            <div onClick={() => DecreaseCart(item)}>-</div>
                                        </div>
                                        <div className='col total'>${item.price * item.cartQouantity}</div>
                                        <div className='col remove' onClick={() => RemoveCart(item)}> <i className="fa fa-trash-o"></i> </div>
                                    </div>
                                ))}
                        </div>
                        <div className="summary" data-aos="fade-up">
                            <button className="book-table" onClick={() => ClearCart()}>
                                Clear Cart
                            </button>
                            <div className="checkout">
                                <div className="subtotal">
                                    <span>Subtotal</span>
                                    <span className="amount">$ {state.cartTotalAmount}</span>
                                </div>
                                <p>Taxes and shipping calculated at checkout</p>
                                <button className='book-table'>Check out</button>
                                <div className="continue-shopping">
                                    <NavLink to="/">
                                        <i className='fa fa-arrow-left'></i>
                                        <span>Continue Shopping</span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Cart

