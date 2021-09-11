import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzaById, editPizza } from '../../redux/actions'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import Success from '../../components/Success'

const Editpizza = ({ match }) => {

    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [smallprice, setsmallprice] = useState()
    const [mediumprice, setmediumprice] = useState()
    const [largeprice, setlargeprice] = useState()
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer)
    const { pizza, error, loading } = getpizzabyidstate

    const editpizzastate = useSelector(state => state.editPizzaReducer)
    const { editsuccess, editerror, editloading, } = editpizzastate

    useEffect(() => {
        if (pizza) {
            if (pizza._id == match.params.pizzaid) {
                setname(pizza.name)
                setdescription(pizza.description)
                setcategory(pizza.category)
                setsmallprice(pizza.prices[0]['small'])
                setmediumprice(pizza.prices[0]['medium'])
                setlargeprice(pizza.prices[0]['large'])
                setimage(pizza.image)
            } else {
                dispatch(getPizzaById(match.params.pizzaid))
            }
        } else {
            dispatch(getPizzaById(match.params.pizzaid))
        }
    }, [pizza, dispatch])

    const formHandle = (e) => {
        e.preventDefault();
        const editedpizza = {
            _id: match.params.pizzaid,
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
        dispatch(editPizza(editedpizza))
    }

    return (
        <div>

            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong!' />)}
            {editloading && (<Loading />)}
            {editerror && (<Error error='Something went wrong!' />)}
            {editsuccess && (<Success success='Food Details Edited Successfully.' />)}

            <div className="shadow-lg p-3 mb-5 bg-white rounded" style={{ textAlign: 'left', padding: '10px' }}>
                Edit Food
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
                        EDIT FOOD
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Editpizza;