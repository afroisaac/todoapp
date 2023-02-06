import { useState } from "react";
const Todo = ({ text, status, deleteTodo }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(!checked);
  };

  return (
    <div className="list-group-item">
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-2">
          <input
            type="checkbox"
            name="todo-control"
            className="form-check-input"
            checked={status ? status : checked}
            onChange={handleChange}
          />
          {status || checked ? (
            <div>
              <strike>{text}</strike>
            </div>
          ) : (
            <div>{text}</div>
          )}
        </div>

        <a href="#" className="btn btn-sm btn-danger" onClick={deleteTodo}>
          <i className="bi bi-trash"></i>
        </a>
      </div>
    </div>
  );
};
export default Todo;
