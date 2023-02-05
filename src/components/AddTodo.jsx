const AddTodo = ({ todoItem, todoErr, onChange, onSubmit }) => {
  return (
    <div className="card pt-4 pb-4 py-4 px-4 mb-2">
      <form onSubmit={onSubmit}>
        <div className="mb-3 mt-3">
          <label className="form-label">New Todo:</label>
          <input
            type="text"
            placeholder="Type a todo item"
            className="form-control"
            onChange={onChange}
            value={todoItem}
          />
          {todoErr !== "" && <span className="text-danger">{todoErr}</span>}
        </div>
        <button type="submit" className="btn btn-block btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};
export default AddTodo;
