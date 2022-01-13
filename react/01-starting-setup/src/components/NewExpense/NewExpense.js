import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
// component
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // function
  const SaveDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      // enhance obj with an id
      id: Math.random().toString(),
    };

    // forward this enriched data up to App, which imports NewExpense
    // and now has a new function pointer to obtain this data
    props.onAddExpense(expenseData);

    // after submitting, close the form
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const formContent = (
    <button onClick={startEditingHandler}>New Expense</button>
  );

  return (
    <div className="new-expense">
      {!isEditing && formContent}
      {isEditing && (
        <ExpenseForm
          onSaveData={SaveDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
