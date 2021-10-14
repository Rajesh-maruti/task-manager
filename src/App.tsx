import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import TaskTable from "./components/TaskTable/TaskTable";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="index-container">
        <SideBar />
        <TaskTable />
      </div>
    </div>
  );
}

export default App;
