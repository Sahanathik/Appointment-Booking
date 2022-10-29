// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Admin-management/dashboard/Dashboard";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Managemtnt_Login from "./components/management/Managemtnt_Login";

function App() {
  return (
    <>
      <Router>
        <Dashboard />
        {/* <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/management-login" element={<Managemtnt_Login />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
