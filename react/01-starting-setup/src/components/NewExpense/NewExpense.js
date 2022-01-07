import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
// component
const NewExpense = () => {
  // function
  const SaveDataHandler = (enteredData) => {
    // object
    const expenseData = {
      ...enteredData,
      // enhance obj with an id
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={SaveDataHandler} />
    </div>
  );
};

export default NewExpense;
