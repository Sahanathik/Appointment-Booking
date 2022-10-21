import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  withRouter,
} from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./Dashboard.css";
// import Sidebarmenu from "./";
import Homepage from "../../homepage/Homepage";
import Appsetting from "../app-setting/Appsetting";
import Department from "../department/Department";
import Specialist from "../specialist/Specialist";
import PaymentSetting from "../payment-setting/PaymentSetting";
import Doctorlog from "../doctor_log/Doctorlog";
import Patientlog from "../patientlog/Patientlog";
import Sidebar_menu from "./Sidebar_menu";

const { Header, Sider, Content, Footer } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [title, setTitle] = useState("");
  const [logo, setLogo] = useState("");

  return (
    <Layout>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "sticky",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            {Sidebar_menu.map((val, key) => {
              return (
                <Menu.Item key={key} icon={val.icon}>
                  <NavLink style={{ textDecoration: "none" }} to={val.link}>
                    <span>{val.title}</span>
                  </NavLink>
                </Menu.Item>
              );
            })}
            <Menu.Item icon={<LogoutOutlined />} key="8">
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px 0",
              height: "73vh",
              overflow: "auto",
            }}
          >
            <div style={{ padding: 24, background: "#fff" }}>
              <Routes>
                <Route exact path="/home" element={<Homepage />} />
                <Route exact path="/app-setting" element={<Appsetting />} />
                <Route exact path="/department" element={<Department />} />
                <Route exact path="/specialist" element={<Specialist />} />
                <Route exact path="/patient-log" element={<Patientlog />} />
                <Route exact path="/doctor-log" element={<Doctorlog />} />
                <Route path="/payment-setting" element={<PaymentSetting />} />
                {/* <Route path="/Logout" element= {<Logout/>} /> */}
              </Routes>
            </div>
          </Content>
          <Footer className="footer-color">
            <div className="text-light text-center">
              Hospital Management @2022
            </div>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
