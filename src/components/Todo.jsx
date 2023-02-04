const Todo = ({ text }) => {
  return (
    <div className="list-group-item">
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-2">
          <input
            type="checkbox"
            name="todo-control"
            className="form-check-input"
          />
          <div>{text}</div>
        </div>

        <a href="#" className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </a>
      </div>
    </div>
  );
};
export default Todo;
