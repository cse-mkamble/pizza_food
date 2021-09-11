import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from "../redux/actions";
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'

const Registerscreen = () => {

    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const registerstate = useSelector(state => state.registerUserReducer)
    const { error, success, loading } = registerstate

    const dispatch = useDispatch()

    const register = () => {
        if (password != cpassword) {
            alert("passwords not matched")
        } else {
            const user = { name, phone, password }
            dispatch(registerUser(user))
        }
    }

    return (
        <div>
            <div className="justify-content-center mt-5" style={{ display: 'flex', margin: '10px' }} >
                <div className="col-md-5 text-left shadow-lg mb-5 bg-white rounded" style={{ padding: '20px 10px' }} >
                    <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Register</h2>
                    {loading && (<Loading/>)}
                    {error && (<Error error='Already Registered.'/>)}
                    {success && (<Success success='Registration Successful. Please Login ...' />)}
                    <div>
                        <input
                            required
                            type="text"
                            placeholder="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        />

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

                        <input
                            required
                            type="text"
                            placeholder="confirm password"
                            className="form-control"
                            value={cpassword}
                            onChange={(e) => setcpassword(e.target.value)}
                        />
                        <button onClick={register} className='btn mt-3 btn-danger '>REGISTER</button>
                        <hr />
                        <div style={{ textAlign: 'center' }}>
                            <a style={{ color: 'black' }} href='/login'>Click Here To Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registerscreen;