import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import Navbar from "../navbar/Navbar";
import "./Home.css";
const { Header, Content, Footer } = Layout;
const Homepage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Layout>
        <Content
          style={{
            padding: "0 5px",
          }}
        >
          <div className="site-layout-content">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active img-pos">
                  <img
                    src="https://www.rkhospitals.org/wp-content/uploads/2018/01/slider.jpg"
                    class="d-block w-100"
                    alt="slide1"
                  />
                  <div className="text-pos px-3 py-1 rounded-pill">
                    <p className="d-inline me-2 text-white border-white">
                      Contact :<span className="phn">1234567890</span>
                    </p>
                    <p className=" border border-3 d-inline border-white"></p>

                    <p className="d-inline ms-2 text-white">
                      Emergency :<span className="phn">1234567890</span>
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.seslhd.health.nsw.gov.au/sites/default/files/2018-08/DSC_7591.jpg"
                    class="d-block w-100"
                    height={375}
                    alt="slider2"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="http://www.seslhd.health.nsw.gov.au/sites/default/files/2018-08/sgh_theatre.jpg"
                    class="d-block w-100"
                    height={375}
                    alt="slider3"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default Homepage;
