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
import Map from "./components/map/google_map";
import Patient from "./components/for_patient/Patient_data";
import Terms from "./components/privacy/Terms";
import Payment from "./components/payment/Payment";
import Dept_dashboard from "./components/Department-portal/dept_dashboard/Dept_dashboard";

function App() {
  return (
    <>
      <Router>
        {/* <Dashboard /> */}
        {/* <Dept_dashboard></Dept_dashboard> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/management-login" element={<Managemtnt_Login />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/map" element={<Map />} />
          <Route path="/login" element={<Managemtnt_Login />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/sign-up" element={<Sign_up />} />
          <Route path="/doctor-list" element={<Doctorlist />} />
          <Route path="/patient-data" element={<Patient />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
 