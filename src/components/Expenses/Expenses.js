import ExpenseItem from './ExpenseItem'
import Card from '../UI/card'
import './Expenses.css'

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date} />
            <ExpenseItem title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date} />
        </Card>
    )
}

export default Expenses