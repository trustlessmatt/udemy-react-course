import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const selectionHandler = (event) => {
    // this process is as follows:
    // 1. when the selection option changes, point to this function
    // 2. this function passes the selection data (year) via event.target.value to the 
    // onDateFilter prop, passed from parent Expenses to this component.
    // 3. this component therefore passes the selection data UP to onDateFilter in the
    // parent component where it's defined.
    // 4. that year data is passed to the target function inside Expenses.js and is handled
    // on that level by that function!
    props.onDateFilter(event.target.value);
  };
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectionHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;