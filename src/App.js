import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./components/routes/Register";
import Login from "./components/routes/Login";
import Home from "./components/pages/Home";
import Dashborard from "./components/pages/Dashboard";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="register" element={<Register />} />
          <Route exact path="Login" element={<Login />} />
          <Route exact path="dashboard" element={<Dashborard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
