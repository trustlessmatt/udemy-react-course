import './ExpenseDate.css';

const ExpenseDate = (props) => {
    // define formatted date data here and refer to it in the JSX to keep it lean
    const myMonth = props.date.toLocaleString('en-US', {month: 'short'});
    const myDay = props.date.toLocaleString('en-US', {day: '2-digit'});
    const myYear = props.date.getFullYear();
    
    return (
        <div className='expense-date'>
            {/* Three divs to show the date in a calendar-like format */}
            <div className='expense-date__month'>{ myMonth }</div>
            <div className='expense-date__day'>{ myDay }</div>
            <div className='expense-date__year'>{ myYear }</div>
        </div>
    );
};

export default ExpenseDate;


