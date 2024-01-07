import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0)

    return (
        <div className='remaining'>
            <span>Remaining: <h2> {totalExpenses > budget ? "Sorry, Budget Extended" : budget - totalExpenses}</h2></span>
        </div>
    )
}

export default Remaining
