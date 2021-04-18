import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'
import ExpenseChart from './ExpensesChart'

const demo = [
    {
        id: 'e3',
        title: 'CSS course',
        amount: '42.99',
        date: new Date(2021, 2, 13)

    }
]
const Expenses = (props) => {
    const [year, setyear] = useState('2020')
   


    const filterChangeHandler = selectedYear => {
        setyear(selectedYear)


    }

    const filteredExpense = props.expense.filter(item => item.date.getFullYear().toString() === year)

    return (
        <div>

            <Card className="expenses">
                <ExpenseFilter selected={year} onChangeFilter={filterChangeHandler} />
                <ExpenseChart expenses={filteredExpense}/>
                {filteredExpense.length === 0 ? <h2 className="expenses-list__fallback">No Expense Found</h2> :
                    filteredExpense.map(item => {

                        return (
                            <ExpenseItem
                                key={item.id}
                                title={item.title}
                                amount={item.amount}
                                date={item.date}
                            />
                        
                        )
                    })}
            </Card>
        </div>
    )
}

export default Expenses