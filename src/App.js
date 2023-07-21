import { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import Spinner from "./Spinner";
import Modal from "./Modal/Modal";

const AddTodo = lazy(() => import("./Todo/AddTodo"));

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

  const changeComplete = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const addTodo = (title) => {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <div className="wrapper">
          <h1>React ToDos!</h1>
          <Modal />
          <Suspense fallback={<p>Loading...</p>}>
            <AddTodo addTodo={addTodo} />
          </Suspense>
          {loading && <Spinner />}
          {todos.length ? (
            <TodoList todos={todos} changeComplete={changeComplete} />
          ) : loading ? null : (
            <p>Список пуст</p>
          )}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
