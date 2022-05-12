import Card from "../UI/Card";
import AddTask from "./AddTask";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Card className={classes.card}>
      <h1 className={classes.title}>To-Do List</h1>
      <AddTask onAddTask={props.onAddTask}></AddTask>
    </Card>
  );
};

export default Header;
