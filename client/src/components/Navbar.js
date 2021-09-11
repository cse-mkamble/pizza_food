import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from "../redux/actions";

const Navbar = () => {

    const dispatch = useDispatch()
    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { user } = userstate

    return (
        <div style={{
            position: 'fixed',
            zIndex: 10,
            width: '100%',
            top: 0
        }}>
            <nav style={{ justifyContent: 'space-between' }} className="navbar navbar-expand-lg shadow-lg  mb-5 bg-white rounded ">
                <a className="navbar-brand" href="/">FoodHub</a>
                <div id="navbarNav">
                    <ul style={{ display: 'flex', listStyle: 'none', paddingLeft: '0px', marginBottom: '0px' }} >
                        {user ? (
                            <div className="dropdown" style={{ padding: '16px' }}>
                                <a className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user.name}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {user.isAdmin ? (<li><a className="dropdown-item" href='/admin' >Admin</a></li>) : ""}
                                    <li><a className="dropdown-item" href='/myorders' >My Orders</a></li>
                                    <li><a className="dropdown-item" href='' onClick={() => { dispatch(logoutUser()) }} >Logout</a></li>
                                </ul>
                            </div>
                        ) : (
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="/login"
                                    style={{
                                        paddingBottom: '16px',
                                        paddingTop: '16px'
                                    }}
                                >Login</a>
                            </li>
                        )}
                        <div onClick={(e) => window.location.href = '/cart'}
                            className="hover:bg-gray-200"
                            style={{
                                paddingLeft: '0.5rem',
                                paddingRight: '0.5rem',
                                paddingTop: '0.5rem',
                                paddingBottom: '0.5rem',
                                borderRadius: '0.5rem',
                                position: 'relative',
                                cursor: 'pointer'
                            }}
                        >
                            <svg
                                className="text-gray-600 hover:text-gray-800"
                                style={{
                                    width: '2rem',
                                    height: '2rem'
                                }}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                            <span style={{
                                position: 'absolute',
                                top: 0,
                                left: '30px',
                                marginTop: '0.25rem',
                                borderRadius: '0.25rem',
                                paddingLeft: '0.25rem',
                                paddingRight: '0.25rem',
                                fontSize: '0.75rem',
                                fontWeight: '600'
                            }} className="bg-yellow-700 text-white hover:text-gray-200" >
                                {cartstate.cartItems.length}
                            </span>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;