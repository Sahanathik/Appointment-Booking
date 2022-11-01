import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Input, Button, Form, Image, Typography } from "antd";
import "./appointment.css";

const Apoointment = () => {
  const [form] = Form.useForm();
  //form - layout
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
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="card w-75 mx-auto">
            <div class="row g-0">
              <div class="col-md-6"></div>
              <div class="col-md-6">
                <div class="card-body doctor-card">
                  <Form {...responsive_layout} form={form}>
                    <Form.Item
                      label="Id:"
                      type="text"
                      name="id"
                      hasFeedback
                      rules={[{ required: true, message: "Enter Your Id" }]}
                    >
                      <Input
                        placeholder="Enter your Id"
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
                        placeholder="Enter your password"
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
      </div>
    </>
  );
};

export default Apoointment;
