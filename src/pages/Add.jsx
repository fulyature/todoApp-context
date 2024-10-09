import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";

const Add = () => {
  const { handleAdd } = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  const addNewTodo = () => {
    handleAdd(todo);
    setTodo("");
  };

  return (
    <>
      <div className="add-todo">
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Enter new todo..."
          className="input"
        />
        <button className="add-btn" onClick={addNewTodo}>
          ADD
        </button>
      </div>
    </>
  );
};

export default Add;
