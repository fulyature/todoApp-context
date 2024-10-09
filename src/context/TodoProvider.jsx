import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const handleAdd = (value) => {
    const newtodo = {
      value: value,
      id: todos.length,
    };
    const updatedtodos = [...todos, newtodo];
    setTodos(updatedtodos);
  };

  // const handleEdit = (id, val) => {
  //   // Edit sayfasından gelen verıler ile yeni todo olustur
  //   const updatedTodo = {
  //     value: val,
  //     id: todos.length,
  //   };
  //   // Orjınal todos ıcınde edit yapmak istedigimiz todoyu bul ve yeni olan ıle degiştir

  //   const updatedArray = todos.map((todo) => {
  //     if (todo.id == id) {
  //       return updatedTodo;
  //     }
  //     return todo;
  //   });
  //   // State i guncelle
  //   setTodos(updatedArray);
  // };
  const handleEdit = (updatedTodo) => {
    // setTodos((prevTodos) =>
    //   prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    // );
    const updatedTodoArray = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodoArray);
  };

  return (
    <TodoContext.Provider value={{ todos, setTodos, handleAdd, handleEdit }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
