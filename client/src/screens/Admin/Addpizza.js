import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPizza } from '../../redux/actions'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import Success from '../../components/Success'

const Addpizza = () => {

    const [name, setname] = useState('')
    const [smallprice, setsmallprice] = useState()
    const [mediumprice, setmediumprice] = useState()
    const [largeprice, setlargeprice] = useState()
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    const dispatch = useDispatch()

    const addpizzastate = useSelector(state => state.addPizzaReducer)
    const { success, error, loading } = addpizzastate

    const formHandle = (e) => {
        e.preventDefault();
        const pizza = {
            name,
            image,
            description,
            category,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice,
            }
        }
        dispatch(addPizza(pizza))
    }

    return (
        <div>

            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong!' />)}
            {success && (<Success success='New Food Added Successfully.' />)}

            <div className="shadow-lg p-3 mb-5 bg-white rounded" style={{ textAlign: 'left', padding: '10px' }}>
                ADD Food
                <hr />
                <form onSubmit={formHandle}>
                    <input
                        className="form-control w-100"
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => { setname(e.target.value) }}
                    />
                    <input
                        className="form-control w-100"
                        type="text"
                        placeholder="small varient price"
                        value={smallprice}
                        onChange={(e) => { setsmallprice(e.target.value) }}
                    />
                    <input
                        className="form-control w-100"
                        type="text"
                        placeholder="medium varient price"
                        value={mediumprice}
                        onChange={(e) => { setmediumprice(e.target.value) }}
                    />
                    <input
                        className="form-control w-100"
                        type="text"
                        placeholder="large varient price"
                        value={largeprice}
                        onChange={(e) => { setlargeprice(e.target.value) }}
                    />
                    <input
                        className="form-control w-100"
                        type="text"
                        placeholder="image url"
                        value={image}
                        onChange={(e) => { setimage(e.target.value) }}
                    />
                    <input
                        className="form-control w-100"
                        type="text"
                        placeholder="description"
                        value={description}
                        onChange={(e) => { setdescription(e.target.value) }}
                    />
                    <input
                        className="form-control w-100"
                        type="text"
                        placeholder="category"
                        value={category}
                        onChange={(e) => { setcategory(e.target.value) }}
                    />
                    <button
                        className="btn btn-danger"
                        style={{ margin: '20px 0', width: '240px' }}
                        type='submit'
                    >
                        ADD FOOD
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Addpizza