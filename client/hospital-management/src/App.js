// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Admin-management/dashboard/Dashboard";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <>
      <Router>
        <Dashboard />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/admin" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
