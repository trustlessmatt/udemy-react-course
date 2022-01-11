import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const dateFilterHandler = (chosenYear) => {
    setSelectedYear(chosenYear);
    console.log("Chosen Year: ", chosenYear);
  };

  // my question was: where does this .items property come from?
  // answer: it is created as a custom property of <Expenses /> in App.js !
  // we are passing this prop into our Expenses.js file and using it
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onDateFilter={dateFilterHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
