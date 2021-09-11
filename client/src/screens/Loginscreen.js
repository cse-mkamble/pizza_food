import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from "../redux/actions";
import Loading from '../components/Loading'
import Error from '../components/Error'

const Loginscreen = () => {

    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    const loginstate = useSelector(state => state.loginUserReducer)
    const { error, loading } = loginstate

    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('user')) {
            window.location.href = '/'
        }
    }, [])

    const login = () => {
        if (!password) {
            alert("password filled!")
        } else {
            const user = { phone, password }
            dispatch(loginUser(user))
        }
    }

    return (
        <div>
            <div className="justify-content-center mt-5" style={{ display: 'flex', margin: '10px' }} >
                <div className="col-md-5 text-left shadow-lg mb-5 bg-white rounded" style={{ padding: '20px 10px' }}>
                    <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Login</h2>
                    
                    {loading && (<Loading/>)}
                    {error && (<Error error='Phone number is not registered.'/>)}
                    
                    <div>
                        <input
                            required
                            type="text"
                            placeholder="phone"
                            className="form-control"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                        />

                        <input
                            required
                            type="text"
                            placeholder="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />

                        <button onClick={login} className='btn btn-danger mt-3'>LOGIN</button>
                        <hr />
                        <div style={{ textAlign: 'center' }}>
                            <a style={{ color: 'black' }} href='/register'>Click Here To Register</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginscreen