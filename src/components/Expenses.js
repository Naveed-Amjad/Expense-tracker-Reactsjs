import ExpenseItem from "./ExpenseItem";
//import Card from "./Card";
import "./Expenses.css";

function Expenses(props) {
  //console.log(props.title);
  return (
    <div className="expenses">
      {props.items.map(function (expense) {
        //console.log("infoo: ", expense.title, expense.amount, expense.date);
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
      })}
      {/* <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
      ></ExpenseItem> */}
    </div>
  );
}

export default Expenses;
