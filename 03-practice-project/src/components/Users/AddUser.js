import { useState } from "react";

import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

// form where we add a new user
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    // data validation
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    } 
    // force string to num with +
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    // the prop 'className' only works on a custom component if the component is prepared to look for the prop
    // see the template literal on our Card component's props in Card.js
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        {/* use "htmlfor" inside label to link it to input */}
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        ></input>
        <br></br>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        ></input>
        <br></br>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
