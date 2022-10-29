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
          class="btn rounded-pill text-white btn side-button py-0 px-2 mt-3 ms-1"
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
          <div class="offcanvas-body p-0">
            <nav className="navbar py-0">
              <ul className="navbar-nav side-nav flex-fill">
                <li className="nav-item w-100">
                  <button className="nav-link w-100 btn rounded-0 border-bottom text-white side-link">
                    Department1
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link w-100 btn rounded-0 border-bottom text-white side-link">
                    Department2
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link w-100 btn rounded-0 border-bottom text-white side-link">
                    Department3
                  </button>
                </li>
                <li className="nav-item w-100">
                  <button className="nav-link w-100 btn rounded-0 border-bottom text-white side-link">
                    Department1
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <div className="row row-cols-lg-2 row-cols-md-1 row-cols-1 g-3">
          <div className="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-6">
                  <img
                    src="https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=2000"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-6">
                  <img
                    src="https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=2000"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-6">
                  <img
                    src="https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=2000"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-6">
                  <img
                    src="https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=2000"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctorlist;
