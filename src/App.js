import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import SideMenu from "./Components/SideMenu/SideMenu";
import './style.css';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <SideMenu/>
        <AppRouter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
