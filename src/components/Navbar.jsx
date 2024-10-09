import React from "react";

import { RiCalendarTodoFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <NavLink
          style={({ isActive }) => ({ color: isActive && "red" })}
          to="/"
        >
          <RiCalendarTodoFill />
        </NavLink>

        <NavLink
          style={({ isActive }) => ({ color: isActive && "red" })}
          to="/addTodo"
        >
          Add Todo
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive && "red" })}
          to="/list"
        >
          Todo List
        </NavLink>
      </div>
      <div className="navbarRight">
        <NavLink style={({ isActive }) => ({ color: isActive && "red" })}>
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
