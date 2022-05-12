import React from "react";

import classes from "./TaskList.module.css";
import Card from "./UI/Card";

const TaskList = (props) => {
  return (
    <Card className={classes.card}>
      <ul>
        {props.tasks.map((task) => (
          <div className={classes.task} key={task.id}>
            <li style={task.style}>{task.task}</li>
            <div className={classes.btns}>
              <button
                className={classes.button}
                onClick={() => props.onAddStyle(task.id)}
              >
                Done
              </button>
              <button
                className={classes.button}
                onClick={() => props.onDeleteTask(task.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </ul>
    </Card>
  );
};

export default TaskList;
