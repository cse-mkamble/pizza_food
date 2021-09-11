import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { getUserOrders } from '../redux/actions'
import Loading from '../components/Loading'
import Error from '../components/Error'

const Orderscreen = () => {

    AOS.init()

    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOdersReducer)
    const { orders, error, loading } = orderstate

    useEffect(() => {
        dispatch(getUserOrders())
    }, [])

    return (
        <div>

            <h4>My Orders</h4>
            <hr />

            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong!' />)}
            {orders && orders.map((order) => {
                return <div>
                    <div style={{ padding: '10px' }} >
                        <div data-aos="fade-bottom" className="shadow-lg bg-white rounded" style={{ padding: '6px' }} >
                            <div className="text-left w-100">
                                <h2 style={{ fontSize: '20px' }}>Items</h2>
                                <table style={{ fontSize: '14px' }}>
                                    <tbody>
                                        {order.orderItems.map((item) => {
                                            return <tr><td>{item.name}</td><td>[{item.varient}]</td><td>*</td><td>{item.quantity}</td><td>=</td><td>{item.price}</td></tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <div className="text-left w-100">
                                <h2 style={{ fontSize: '20px' }}>Order Info</h2>
                                <table style={{ fontSize: '14px' }}>
                                    <tbody>
                                        <tr><td>Order Amount</td><td>:</td><td>{order.orderAmount}</td></tr>
                                        <tr><td>Date</td><td>:</td><td>{order.createdAt.substring(0, 10)}</td></tr>
                                        <tr><td>Order Id</td><td>:</td><td>{order._id}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            })}


        </div>
    )
}

export default Orderscreen