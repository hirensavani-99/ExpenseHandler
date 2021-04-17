import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'

const Expenses = (props) => {
    const [year, setyear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setyear(selectedYear)
    }

    return (
        <div>

            <Card className="expenses">
                <ExpenseFilter selected={year} onChangeFilter={filterChangeHandler} />
                <ExpenseItem title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date} />
                <ExpenseItem title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date} />
            </Card>
        </div>
    )
}

export default Expenses