import { useState } from "react";

import classes from "./AddTask.module.css";

const AddTask = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (enteredTask.trim().length === 0) {
      return;
    }
    setEnteredTask("");
    props.onAddTask(enteredTask);
    console.log(props.counter);
  };

  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  return (
    <div className={classes.input}>
      <form>
        <input
          type="text"
          name="task"
          onChange={taskChangeHandler}
          value={enteredTask}
        ></input>
        <button onClick={addTaskHandler}>Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
