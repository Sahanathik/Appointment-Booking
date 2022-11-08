import React from "react";
import { Input, Button, Form, Image, Typography } from "antd";
const { Title } = Typography;

const Doctor_login = () => {
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
      <div className="mt-5">
        <div class="card mb-3 mx-auto " style={{ maxWidth: "600px" }}>
          <div className="card-header">
            <Title level={3} style={{ textAlign: "center" }} className="my-1">
              Doctor Login
            </Title>
          </div>
          <div class="card-body">
            <Form {...responsive_layout} form={form}>
              <Form.Item
                label="Doctor Id:"
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
                <Button type="primary" htmlType="submit" className="mt-2">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctor_login;
