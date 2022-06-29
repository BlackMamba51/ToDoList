import React from "react";
import Calendar from "../Pages/Calendar";
import { Routes, Route, Navigate } from 'react-router-dom';
import ToDoList from "../Pages/ToDoList";
function AppRouter() {

  return (
    <Routes>
      <Route path="/calendar" element={<Calendar/>}/>
      <Route path="/todolist" element={<ToDoList/>}/>
      <Route path="*" element={<Navigate to="/calendar"/>}/>
    </Routes>
  )
}

export default AppRouter;