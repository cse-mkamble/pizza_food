import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders, deliverOrder } from '../../redux/actions'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Orderslist = () => {

    const dispatch = useDispatch()

    const getallodersstate = useSelector(state => state.getAllOdersReducer)
    const { orders, error, loading } = getallodersstate

    useEffect(() => {
        dispatch(getAllOrders())
    }, [])

    return (
        <div>
            Orders List
            <hr />
            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong!' />)}
            <table className="table table-striped table-bordered table-responsive-sm " >
                <thead className="thead-dark">
                    <tr>
                        <th>Order Id</th>
                        <th>Phone</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Position</th>
                        <th>Shipping Address</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map(order => {
                        return <tr>
                            <td>{order._id}</td>
                            <td>{order.phone}</td>
                            <td>{order.user_id}</td>
                            <td>{order.orderAmount}</td>
                            <td>{order.createdAt}</td>
                            <td>{order.lattLngt}</td>
                            <td>{order.shippingAddress}</td>
                            <td>{order.isDelivered ? (<h1>Delivered</h1>) : (<button className="btn btn-danger" onClick={() => { dispatch(deliverOrder(order._id)) }} >Deliver</button>)}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Orderslist;