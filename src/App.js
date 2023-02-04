import { useState } from "react";
import Todo from "./components/Todo";
import NavItem from "./components/NavItem";

function App() {
  let initialTodos = [
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Learn Node", done: false },
  ];

  const [todo, setTodo] = useState("");
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
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, text: todo },
    ]);
    setTodo("");
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
        <div className="card pt-4 pb-4 py-4 px-4 mb-2">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
              <label className="form-label">New Todo:</label>
              <input
                type="text"
                placeholder="Type a todo item"
                className="form-control"
                onChange={handleChange}
                value={todo}
              />
            </div>
            <button type="submit" className="btn btn-block btn-primary">
              Save
            </button>
          </form>
        </div>
      )}

      <div className="card shadow-sm pt-4 pb-4 py-4 px-4">
        <div className="list-group w-auto">
          {todos.map((item) => {
            return <Todo key={item.id} text={item.text} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
