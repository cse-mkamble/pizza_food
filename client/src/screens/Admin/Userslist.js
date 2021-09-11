import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser, deleteUser } from '../../redux/actions'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Userslist = () => {

    const dispatch = useDispatch()
    const usersstate = useSelector(state => state.getAllUserReducer)
    const { users, error, loading } = usersstate

    useEffect(() => {
        dispatch(getAllUser())
    }, [])

    return (
        <div>
            Users List
            <hr />
            <div>

                {loading && (<Loading />)}
                {error && (<Error error='Something went wrong!' />)}

                <table className='table table-bordered table-responsive-sm '>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((item) => {
                            return <tr>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.createdAt}</td>
                                <td>{item.updatedAt}</td>
                                <td>
                                    {item.isAdmin ? ("") : (
                                        <i className='fa fa-trash m-2' style={{ color: 'red' }} onClick={() => { dispatch(deleteUser(item._id)) }} ></i>
                                    )}
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Userslist