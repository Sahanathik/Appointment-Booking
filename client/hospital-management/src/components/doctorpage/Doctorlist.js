import React, { useState } from "react";
import Navbar from "../navbar/Navbar";

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
                    Department4
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <div className="row row-cols-lg-2 row-cols-xxl-3 row-cols-md-1 row-cols-1 gy-3 gx-xl-5 gx-3">
          <div className="col">
            <div class="card mb-3 card-list">
              <div class="row g-0">
                <div class="col-md-6">
                  <img
                    src="https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=2000"
                    class="img-fluid rounded-start h-100 doctor-img"
                    alt="..."
                  />
                </div>
                <div class="col-md-6">
                  <div class="card-body doctor-card">
                    <p class="card-title doctor-name">Dr. Shruti Shimha</p>
                    <div className="d-flex doctor-exp text-uppercase">
                      <p class="card-text me-3">Cardiologist</p>
                      <p class="card-text">9 years Exp</p>
                    </div>
                    <p class="card-text doctor-avl mb-2">
                      Department : Cardiology
                    </p>
                    <p class="card-text doctor-avl mb-2">
                      <span className="span">Available on</span>
                      &nbsp;<i class="fa-solid fa-calendar-days"></i> : Monday ,
                      Friday
                    </p>
                    <p class="card-text doctor-time">
                      <span className="span">Available Slot</span>
                      &nbsp;<i class="fa-regular fa-clock"></i> : &nbsp;10.00
                      ,12.00
                    </p>
                    <button className="btn book-btn px-1 py-1">
                      Book Apoointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mb-3 card-list">
              <div class="row g-0">
                <div class="col-md-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUQOk3DsB01Y8AE4u2qiKcP4TKlPUBm_PBA&usqp=CAU"
                    class="img-fluid rounded-start h-100 doctor-img"
                    alt="..."
                  />
                </div>
                <div class="col-md-6">
                  <div class="card-body doctor-card">
                    <p class="card-title doctor-name">Dr. Mike</p>
                    <div className="d-flex doctor-exp text-uppercase">
                      <p class="card-text me-3">Cardiologist</p>
                      <p class="card-text">9 years Exp</p>
                    </div>
                    <p class="card-text doctor-avl mb-2">
                      Department : Cardiology
                    </p>
                    <p class="card-text doctor-avl mb-2">
                      <span className="span">Available on</span>
                      &nbsp;<i class="fa-solid fa-calendar-days"></i> : Monday ,
                      Friday
                    </p>
                    <p class="card-text doctor-time">
                      <span className="span">Available Slot</span>
                      &nbsp;<i class="fa-regular fa-clock"></i> : &nbsp;10.00
                      ,12.00
                    </p>
                    <button className="btn book-btn px-1 py-1">
                      Book Apoointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mb-3 card-list">
              <div class="row g-0">
                <div class="col-md-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUQOk3DsB01Y8AE4u2qiKcP4TKlPUBm_PBA&usqp=CAU"
                    class="img-fluid rounded-start h-100 doctor-img"
                    alt="..."
                  />
                </div>
                <div class="col-md-6">
                  <div class="card-body doctor-card">
                    <p class="card-title doctor-name">Dr. Mike</p>
                    <div className="d-flex doctor-exp text-uppercase">
                      <p class="card-text me-3">Cardiologist</p>
                      <p class="card-text">9 years Exp</p>
                    </div>
                    <p class="card-text doctor-avl mb-2">
                      Department : Cardiology
                    </p>
                    <p class="card-text doctor-avl mb-2">
                      <span className="span">Available on</span>
                      &nbsp;<i class="fa-solid fa-calendar-days"></i> : Monday ,
                      Friday
                    </p>
                    <p class="card-text doctor-time">
                      <span className="span">Available Slot</span>
                      &nbsp;<i class="fa-regular fa-clock"></i> : &nbsp;10.00
                      ,12.00
                    </p>
                    <button className="btn book-btn px-1 py-1">
                      Book Apoointment
                    </button>
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