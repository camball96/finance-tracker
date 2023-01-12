import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "New Chair (Wooden)",
    amount: 410,
    date: new Date(2022, 3, 12),
  },
  {
    id: "e6",
    title: "Food",
    amount: 80,
    date: new Date(2022, 1, 18),
  },
  {
    id: "e7",
    title: "Camera",
    amount: 950,
    date: new Date(2022, 10, 12),
  },
  {
    id: "e8",
    title: "Mattress",
    amount: 450,
    date: new Date(2023, 1, 5),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // Handles the information that originated in the form from the newExpense to here
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
