import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext)

    const totalExpense = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0)
    return (
        <div className='expensetotal'>
            <span>Expense-Total : <h2> {totalExpense}</h2></span>
        </div>
    )
}


export default ExpenseTotal
