import Navbar from "../navbar/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  SearchOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Typography,
  Card,
} from "antd";

import formData from "form-data";

const { Title } = Typography;

const Sign_up = () => {
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
      sm: { span: 12, offset: 12 },
      md: { span: 12, offset: 10 },
      lg: { span: 12, offset: 10 },
    },
  };
  const [form] = Form.useForm();
  return (
    <>
      <Navbar></Navbar>
      <div className="row mt-4">
        <div className="col-md-8 col-sm-8 col-12 col-lg-5 mx-auto">
          <Card title="Sign-Up">
            <Form {...responsive_layout}>
              <Form.Item
                label="First Name"
                type="text"
                name="first_name"
                hasFeedback
                rules={[{ required: true, message: "Enter Your First Name" }]}
              >
                <Input
                  placeholder="Enter Your First Name"
                  type="text"
                  name="first_name"
                  id="first_name"
                />
              </Form.Item>
              <Form.Item
                label="Last Name"
                type="text"
                name="last_name"
                hasFeedback
                rules={[{ required: true, message: "Enter Your Last Name" }]}
              >
                <Input
                  placeholder="Enter Your Last Name"
                  type="text"
                  name="last_name"
                  id="last_name"
                />
              </Form.Item>
              <Form.Item
                label="Date of Birth"
                hasFeedback
                rules={[
                  { required: true, message: "Enter Your Date of Birth" },
                ]}
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                name="gender"
                label="Select Gender"
                rules={[
                  {
                    required: true,
                    message: "Please Select Your Gender",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="a">Male</Radio>
                  <Radio value="b">Female</Radio>
                  <Radio value="c">Other</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Mobile Number"
                name="mobilenumber"
                rules={[
                  {
                    required: true,
                    message: "Enter contact Number",
                    pattern: new RegExp(
                      /^\+?([0-9]{2})\)?([0-9]{4})?([0-9]{4})$/
                    ),
                  },
                ]}
              >
                <Input
                  addonBefore="+91"
                  placeholder="Enter Mobile number"
                  type="text"
                  name="mobilenumber"
                  id="mobilenumber"
                  maxLength={10}
                  minLength={10}
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                  id="email"
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
                <Button className="mt-2 login-button">Register</Button>
              </Form.Item>
            </Form>
            <p className="text-center">
              Already have Patient ID then, &nbsp;
              <a href="/login" className="log-sign-link">
                Click here to Login
              </a>
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Sign_up;
