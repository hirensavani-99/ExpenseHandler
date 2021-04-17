import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {


    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })


    const formSubmitHandler = (event) => {
        event.preventDefault()

        const expenseData = userInput
        props.onSaveExpenseData(expenseData)

        setUserInput((prevState) => {
            return {
                title: '',
                amount: '',
                date: ''
            }
        })
    }

    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [amount, setAmount] = useState('')
    // const [date, setSubmittedDate] = useState('')

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            }
        })
    }

    const settingDateHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            }
        })
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInput.amount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2025-12-31" value={userInput.date} onChange={settingDateHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm