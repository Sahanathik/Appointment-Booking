// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Admin-management/dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
