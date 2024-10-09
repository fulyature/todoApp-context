import React, { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";
import { Link } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
const List = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="home">
      <h1>TO DO LİST </h1>
      {todos.map((todo) => (
        <Link className="list" to={`/todos/${todo.id}`}>
          <p key={todo.id}>{todo.value}</p>
          <div className="icon-wrapper">
            <FaDeleteLeft />
            <Link to={`/todos/${todo.id}`}>
              {" "}
              <FaEdit />
            </Link>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;
