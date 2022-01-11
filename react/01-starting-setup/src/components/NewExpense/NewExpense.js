import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
// component
const NewExpense = (props) => {
  // function
  const SaveDataHandler = (enteredData) => {
    // add id to object
    const expenseData = {
      ...enteredData,
      // enhance obj with an id
      id: Math.random().toString(),
    };

    // forward this enriched data up to App, which imports NewExpense
    // and now has a new function pointer to obtain this data
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={SaveDataHandler} />
    </div>
  );
};

export default NewExpense;
