import { useState } from "react";
import React from "react";

import Header from "./Components/Header/Header";
import TaskList from "./Components/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [currentTaskStyle, setTaskStyle] = useState({});

  const changeStyleHandler = (id) => {
    taskList.forEach((task) => {
      if (task.id === id) {
        task.style = { textDecoration: "line-through",
      color: '#c4c4c4' };
        setTaskStyle(task.style);
      }
    });
    setTaskStyle({});
  };

  const deleteTaskHandler = (id) => {
    const newList = taskList.filter((task) => task.id !== id);
    setTaskList(newList);
  };

  const addTaskHandler = (task) => {
    setTaskList((prevTaskList) => {
      return [
        ...prevTaskList,
        { task: task, id: Math.random().toString(), style: currentTaskStyle },
      ];
    });
  };

  return (
    <div className="App">
      <Header onAddTask={addTaskHandler}></Header>
      <TaskList
        tasks={taskList}
        onAddStyle={changeStyleHandler}
        onDeleteTask={deleteTaskHandler}
      ></TaskList>
    </div>
  );
}

export default App;
