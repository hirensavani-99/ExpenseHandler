import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [isOpen, setisOpen] = useState(false)


    const formopenHandler = () => {
        setisOpen(true)
    }

    const formcloseHandler = () => {
        setisOpen(false)
    }
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()

        }

        props.onAddExpense(expenseData)
        setisOpen(false)
    }

    return (
        <div className="new-expense">
            {!isOpen && <button onClick={formopenHandler}>Add new Expense</button>}
            {isOpen && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancle={formcloseHandler} />}
        </div>
    )

}

export default NewExpense;
