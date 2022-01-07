import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // alternative way to do this is with one single state
  // where we pass an object
//   const [userInput, setUserInput] = useState({
//       enteredTitle: '',
//       enteredNumber: '',
//       enteredDate: ''
//   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //     /// spread operator to bring in current state of userInput
    //     ...userInput,
    //     // override the title change
    //     enteredTitle: event.target.value,
    // });
  };

  const numberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredNumber: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    // prevent the default of this request being sent
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        number: enteredNumber,
        date: new Date(enteredDate)
    }

    console.log(expenseData);

    // after submission, reset the state of the form back to blank
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredNumber('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredNumber} min="0.01" step="0.01" onChange={numberChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
