import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { v4 as uuidv4 } from 'uuid'

const ExpenseForm = () => {
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const { dispatch } = useContext(AppContext);

    const formSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })



    }
    return (
        <div className='expense-form'>
            <form onSubmit={formSubmit}>
                <input
                    type="text"
                    placeholder='Name'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder='Cost'
                    id='cost'
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />

                <div className="button-submit">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm
