import React from "react";
import { Input, Button, Form, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import "./Doctorboard.css";
const { Title } = Typography;

const Doctorboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="d-flex justify-content-end me-3">
            <div className="card w-50">
              <div className="card-header board-card">
                <Title
                  level={5}
                  style={{ textAlign: "center" }}
                  className="my-1 board-title"
                >
                  Today Appointment
                </Title>
              </div>
              <Link to={"/today-appointment"} className="link-text">
                <div className="card-body board-text">
                  <p className="card-text text-center">
                    Click here to view today Appointment detail
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="d-flex justify-content-start ms-3">
            <div className="card w-50">
              <div className="card-header board-card">
                <Title
                  level={5}
                  style={{ textAlign: "center" }}
                  className="my-1 board-title"
                >
                  Appointment History
                </Title>
              </div>
              <Link to={"/appointment-history"} className="link-text">
                <div className="card-body board-text ">
                  <p className="card-text text-center">
                    Click here to view Appointment History
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctorboard;
