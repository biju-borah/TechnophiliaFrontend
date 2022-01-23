import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/routes/Register";
import Login from "./components/routes/Login";
import Home from "./components/pages/Home";
import Dashborard from "./components/pages/Dashboard";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="register" element={<Register />} />
          <Route exact path="Login" element={<Login />} />
          <Route exact path="dashboard/main" element={<Dashborard />} />
          <Route exact path="dashboard/book" element={<Dashborard />} />
          <Route exact path="dashboard/events" element={<Dashborard />} />
          <Route exact path="dashboard/profile" element={<Dashborard />} />
          <Route exact path="dashboard/settings" element={<Dashborard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
