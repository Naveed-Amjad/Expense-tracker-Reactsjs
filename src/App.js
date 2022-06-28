//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import React, { useState } from "react";

const dummy_expenses = [
  {
    id: "e1",
    title: "School Fee",
    amount: 100,
    date: new Date(2020, 6, 6),
  },
  {
    id: "e2",
    title: "College Fee",
    amount: 200,
    date: new Date(2020, 6, 7),
  },
  {
    id: "e3",
    title: "University Fee",
    amount: 300,
    date: new Date(2020, 6, 8),
  },
  {
    id: "e4",
    title: "Hostel Fee",
    amount: 400,
    date: new Date(2020, 6, 9),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpenses={addExpenseHandler}></NewExpenses>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
