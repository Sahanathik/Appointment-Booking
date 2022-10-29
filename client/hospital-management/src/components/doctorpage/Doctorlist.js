import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Route, Routes, NavLink, withRouter } from "react-router-dom";
import "./Doctor.css";

const items = [];

const Doctorlist = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Navbar></Navbar>
      <div>
        <button
          class="btn rounded-pill text-white btn-warning side-button py-0 px-2 mt-3 ms-1 side-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          Departments
          <i class="fa-solid fa-angles-right"></i>
        </button>

        <div
          class="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <h5
              class="offcanvas-title text-white mx-auto"
              id="offcanvasExampleLabel"
            >
              Department
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <nav className="navbar">
              <div className="" id="boostrapnav">
                <ul className="navbar-nav side-nav">
                  <li className="nav-item">
                    <a href="/home " className="nav-link">
                      Department1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/doctor-list" className="nav-link">
                      Department1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/appointment-booking" className="nav-link">
                      Department1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/contact"
                      className="nav-link"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="contact information"
                    >
                      Department1
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctorlist;
