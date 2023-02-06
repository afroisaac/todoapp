import { useState } from "react";
import Todo from "./components/Todo";
import NavItem from "./components/NavItem";
import AddTodo from "./components/AddTodo";

function App() {
  let initialTodos = [
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Learn Node", done: false },
  ];

  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");
  const [todos, setTodos] = useState(initialTodos);
  const [visible, setVisible] = useState(false);

  const toggleAddTodoView = (e) => {
    e.preventDefault();
    setVisible(true);
  };

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setTodo(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: prevTodos.length + 2, text: todo, done: false },
      ]);
      setTodo("");
      setVisible(!visible);
    } else {
      setTodoError("You must enter a Todo item before attempting to save.");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };

  return (
    <div className="App container mt-5 w-50">
      <h1 className="text-primary">
        <i className="bi bi-list-task"></i> To do
      </h1>

      <ul className="nav justify-content-end">
        <NavItem text="Add new" click={toggleAddTodoView} />
      </ul>

      {visible && (
        <AddTodo
          todoItem={todo}
          todoErr={todoError}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}

      {todos.length > 0 && (
        <div className="card shadow-sm pt-4 pb-4 py-4 px-4">
          <div className="list-group w-auto">
            {todos
              .map((item) => {
                return (
                  <Todo
                    key={item.id}
                    text={item.text}
                    status={item.done}
                    deleteTodo={() => handleDeleteTodo(item.id)}
                  />
                );
              })
              .reverse()}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
