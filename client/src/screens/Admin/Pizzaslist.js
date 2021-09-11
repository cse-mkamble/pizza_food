import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas, deletePizza } from '../../redux/actions'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Pizzaslist = () => {

    const dispatch = useDispatch()
    const pizzasstate = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzasstate

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    return (
        <div>
            Foods List
            <hr />
            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong!' />)}

            <table className='table table-bordered table-responsive-sm'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzas && pizzas.map((pizza) => {
                        return <tr>
                            <td>{pizza.name}</td>
                            <td>
                                Small: {pizza.prices[0]['small']}<br />
                                Medium: {pizza.prices[0]['medium']}<br />
                                Large: {pizza.prices[0]['large']}
                            </td>
                            <td>{pizza.category}</td>
                            <td>
                                <i className='fa fa-trash m-2' style={{ color: 'red' }} onClick={() => { dispatch(deletePizza(pizza._id)) }} ></i>
                                <Link to={`/admin/editpizza/${pizza._id}`} ><i className='fa fa-edit m-2' style={{ color: 'gray' }} ></i></Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Pizzaslist