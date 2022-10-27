import React from "react";
import Navbar from "../navbar/Navbar";
import { Input, Button, Form, Image, Typography } from "antd";
import "./management.css";
const { Title } = Typography;
const Managemtnt_Login = () => {
  const [form] = Form.useForm();
  const responsive_layout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
      md: { span: 6 },
      lg: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
      md: { span: 18 },
      lg: { span: 18 },
    },
  };
  const buttonLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12, offset: 10 },
      md: { span: 12, offset: 10 },
      lg: { span: 12, offset: 10 },
    },
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="mt-5">
        <div class="card mb-3 mx-auto " style={{ maxWidth: "700px" }}>
          <div className="card-header bg-warning">
            <Title
              level={3}
              style={{ textAlign: "center" }}
              className="my-3 text-white"
            >
              Management Login
            </Title>
          </div>

          <div class="row g-0">
            <div class="col-md-5">
              <img
                src="https://img.freepik.com/free-photo/team-young-specialist-doctors-reviewing-documents-corridor-hospital_1303-21211.jpg?w=2000"
                class="img-fluid"
                alt="slide1"
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <Form {...responsive_layout} form={form}>
                  <Form.Item
                    label="Id:"
                    type="text"
                    name="id"
                    hasFeedback
                    rules={[
                      { required: true, message: "Enter Admin/Department Id" },
                    ]}
                  >
                    <Input
                      placeholder="Enter Admin/Department Id"
                      type="text"
                      name="id"
                      id="id"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                        message: "Please input password!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      name="password"
                      placeholder="Enter Admin/Department password"
                    />
                  </Form.Item>
                  <Form.Item {...buttonLayout}>
                    <Button
                      type="ghost"
                      htmlType="submit"
                      className="mt-2 login-button"
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Managemtnt_Login;