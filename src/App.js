import React, { useState } from "react"
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/newExpense/newExpense'
import './App.css';


const expense = [
  {
    id: 'e1',
    title: 'react course',
    amount: '42.99',
    date: new Date(2021, 4, 13)

  },
  {
    id: 'e2',
    title: 'Nodejs course',
    amount: '49.99',
    date: new Date(2021, 3, 13)

  }, {
    id: 'e3',
    title: 'CSS course',
    amount: '42.99',
    date: new Date(2021, 2, 13)

  }
]
function App() {

  const [expenses, setexpenses] = useState(expense)



  const addExpenseHandler = expenses => {
    setexpenses(prevexpense => {
      return [expenses, ...prevexpense]
    })
    console.log(expenses);

  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenses} />
    </div>
  );
}

export default App;
