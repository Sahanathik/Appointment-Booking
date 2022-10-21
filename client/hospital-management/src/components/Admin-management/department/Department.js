import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input, Button, Form, Card, Image, Typography } from "antd";
const { Title } = Typography;
const Department = () => {
  const responsive_layout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 10 },
      md: { span: 8 },
      lg: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
      md: { span: 16 },
      lg: { span: 16 },
    },
  };
  const buttonLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 22, offset: 1 },
      md: { span: 22, offset: 1 },
      lg: { span: 22, offset: 1 },
    },
  };
  return (
    <>
      <Card style={{ width: "50%", margin: "0 auto" }} className=" rounded-3">
        <Title level={3} style={{ textAlign: "center" }} className="mb-4">
          Department Detail
        </Title>
        <Form {...responsive_layout}>
          <Form.Item
            label="Department Name"
            type="text"
            name="department_name"
            hasFeedback
            rules={[{ required: true, message: "Enter Department Name" }]}
          >
            <Input
              placeholder="Department Name"
              type="text"
              name="department_name"
              id="department_name"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password name="password" />
          </Form.Item>
          <Form.Item {...buttonLayout}>
            <Button type="primary" htmlType="submit" block className="mt-3">
              Add Information
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default Department;
