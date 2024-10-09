import React, { useContext, useState } from "react";
import { data } from "../helper/data";
import { TodoContext } from "../context/TodoProvider";

const Home = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="home">
      <h1>TO DO LİST </h1>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.value}</p>
      ))}
    </div>
  );
};

export default Home;
