import { useState } from "react";
import "./App.css";

//
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import SearchField from "./components/SearchField";

function App() {
  return (
    <>
      <NavBar />
      <SearchField />
      <Outlet />
    </>
  );
}

export default App;
