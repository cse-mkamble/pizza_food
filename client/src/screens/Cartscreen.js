import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Checkout from '../components/Checkout'
import { addToCart, deleteFromCart } from '../redux/actions'

const Cartscreen = () => {

    AOS.init()

    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems
    var subTotal = cartItems.reduce((x, item) => x + item.price, 0)
    const dispatch = useDispatch()

    return (
        <div>
            <div data-aos="fade-bottom" className="row justify-content-center" style={{ margin: 0 }}>
                <div className="col-md-6">
                    <h2 style={{ fontSize: '40px' }}>My Cart</h2>

                    {cartItems.map((item) => {
                        return <div className="flex-container">
                            <div className="text-left m-1">
                                <h1>{item.name} [{item.varient}]</h1>
                                <h1>Price: {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                                <h1 style={{ display: 'inline' }} >Quantity: </h1>
                                <i className="fa fa-plus" style={{ color: 'green' }} aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}></i>
                                <b>{item.quantity}</b>
                                <i className="fa fa-minus" style={{ color: 'red' }} aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}></i>
                                <hr />
                            </div>
                            <div className='m-1 w-100'>
                                <img src={item.image} style={{ width: '80px', height: '80px' }} />
                            </div>
                            <div className='m-1 w-100'>
                                <i className="fa fa-trash" style={{ color: 'red' }} aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }}></i>
                            </div>
                        </div>
                    })}
                </div>

                <div className="col-md-4 text-right p-3">
                    <h2 style={{ fontSize: '30px' }}>SubTotal : {subTotal}/-</h2>
                    <Checkout subTotal={subTotal} />
                </div>
            </div>
        </div>
    )
}

export default Cartscreen