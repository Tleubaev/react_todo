import { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState("");

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

const AddTodo = ({ addTodo }) => {
  const input = useInputValue("");

  const submitHundler = (event) => {
    event.preventDefault();
    if (input.value().trim()) {
      addTodo(input.value());
      input.clear();
    }
  };

  return (
    <form onSubmit={submitHundler}>
      <input type="text" {...input.bind} />
      <button type="submit">Add todo</button>
    </form>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
