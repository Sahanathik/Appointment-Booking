// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Admin-management/dashboard/Dashboard";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Managemtnt_Login from "./components/management/Managemtnt_Login";
import Sign_up from "./components/management/Sign_up";
import Doctorlist from "./components/doctorpage/Doctorlist";

function App() {
  return (
    <>
      <Router>
        {/* <Dashboard /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<Managemtnt_Login />} />
          <Route path="/sign-up" element={<Sign_up />} />
          <Route path="/doctor-list" element={<Doctorlist />} />
          {/* <Route path="/admin" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
