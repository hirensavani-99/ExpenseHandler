

import Expenses from './components/Expenses/Expenses'
import './App.css';

function App() {
  const expense = [
    {
      id: 'e1',
      title: 'react course',
      amount: '42.99 PLN',
      date: new Date(2021, 4, 13)

    },
    {
      id: 'e2',
      title: 'Nodejs course',
      amount: '49.99 PLN',
      date: new Date(2021, 3, 13)

    }, {
      id: 'e1',
      title: 'CSS course',
      amount: '42.99 PLN',
      date: new Date(2021, 2, 13)

    }
  ]

  return (
    <div className="App">
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
