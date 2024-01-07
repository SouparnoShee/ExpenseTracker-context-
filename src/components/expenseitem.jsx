import React, { useContext } from 'react'
import cross from "../assets/cross.png"
import { AppContext } from '../context/AppContext'

const ExpenseItem = (props) => {

    const { dispatch } = useContext(AppContext)

    const handleDelete = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id
        })
    }
    return (
        <div className='expense-item'>
            <span>{props.name}</span>
            <div className="right">
                <span> Rs {props.cost}</span>
                <img src={cross} onClick={handleDelete} />
            </div>
        </div>
    )
}

export default ExpenseItem
