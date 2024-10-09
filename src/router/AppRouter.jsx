import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import List from "../pages/List";
import Edit from "../pages/Edit";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Add from "../pages/Add";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addTodo" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todos/:id" element={<Edit />} />

          {/* <Route path="/edit" element={PrivateRouter}>
            <Route path="todos/:id" element={<Edit />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
