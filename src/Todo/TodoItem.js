import { useContext } from "react";
import PropTypes from "prop-types";

import Context from "../context";

import "./todo.scss";

const TodoItem = ({ index, todo, changeComplete }) => {
  const { removeTodo } = useContext(Context);

  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className="todo__item">
      <label className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            changeComplete(todo.id);
          }}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </label>
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
};

TodoItem.propTypes = {
  index: PropTypes.number,
  todo: PropTypes.object.isRequired,
  changeComplete: PropTypes.func.isRequired,
};

export default TodoItem;
