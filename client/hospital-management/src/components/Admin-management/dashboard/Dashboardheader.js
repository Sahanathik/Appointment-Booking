import React, { useState } from "react";
import { Layout, Menu } from "antd";
import "./Dashboard.css";
const { Header } = Layout;

const Dashboardheader = () => {
  return (
    <div>
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
    </div>
  );
};

export default Dashboardheader;
