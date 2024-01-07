import React, { useContext } from 'react'
import ExpenseItem from './expenseitem'
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {

    const { expenses } = useContext(AppContext)

    return (
        <div className='expense-list'>
            {
                expenses.map((expense) => (
                    <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
                ))
            }
        </div>
    )
}

export default ExpenseList
