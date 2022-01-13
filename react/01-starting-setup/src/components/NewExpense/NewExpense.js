import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
// component
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // function
  const SaveDataHandler = (enteredData) => {
    // return early if no data is sent
    if (enteredData === null)
      return;

    // do nothing if there is any missing data
    if ((enteredData.title.length === 0)
      || (enteredData.amount.length === 0)
      || (enteredData.date.length === 0)) {
      return;
    }
    
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
