import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  // This is the pathway to passing up the data saved to state in expenseform into this parent component.
  // We create a custom attribute (prop) that stores that data and then runs this function in expenseform to save it here
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // This then passes the now saved data from the form to the parent App.js, again using props
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add Expense</button>}
      {showForm && (
        <ExpenseForm
          onHideForm={hideFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
