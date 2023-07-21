import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({ todos, changeComplete }) => {
  return (
    <ul className="todo__list">
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            index={index}
            todo={todo}
            changeComplete={changeComplete}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeComplete: PropTypes.func.isRequired,
};

export default TodoList;
