import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [year, setYear] = useState("");

  const saveExpenseFilter = (enteredExpenseYear) => {
    setYear(enteredExpenseYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  // Message when no expenses are found under selectect year
  let expenseContent = (
    <h2 className="expenses-list__fallback">No Expenses Found</h2>
  );
  // If expenses are found under selected year then it will filter those results & render
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map(createExpenseItem);
  }

  function createExpenseItem(expense) {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  }

  return (
    <Card className="expenses">
      <ExpensesFilter chosen={year} chosenYear={saveExpenseFilter} />
      {expenseContent}
    </Card>
  );
}
export default Expenses;
