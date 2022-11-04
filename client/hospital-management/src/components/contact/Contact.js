import React from "react";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Card, Col, Row, Select, Typography } from "antd";
import Navbar from "../navbar/Navbar";
import "./Contact.css";
const { Option } = Select;
const { Title } = Typography;

const Contact = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="my-3">
        <Card
          hoverable
          style={{ width: "75%" }}
          className="mx-auto mb-3"
          cover={
            <img
              alt="example"
              src="https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-medical-doctor-science-background-backgroundbackgrounddoctorsmedicalmedicinehealth-image_68227.jpg"
            />
          }
        >
          <Title
            level={3}
            style={{ textAlign: "center" }}
            className="mb-4 text-warning"
          >
            Contact us
          </Title>
          <p className="mx-4 contact-text">
            content from app setting content . If you would like to get in touch
            with a doctor from a specific department, would like some specific
            information about the services we provide, or just have a question
            for us, please fill up the Form given below and we will get back to
            you.
          </p>
          <div>
            <Form>
              <Form.Item>
                <Row gutter={8}>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                      name="username"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: "Please input your Name",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username*"
                        className="mb-2"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                      hasFeedback
                      name="Email"
                      rules={[
                        {
                          required: true,
                          message: "Please Input Your Email",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <MailOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email*"
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item>
                <Row gutter={8}>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                      name="mobile"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: "Please input your Mobile Number",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <PhoneOutlined className="site-form-item-icon" />
                        }
                        placeholder="Mobile Number*"
                        className="mb-2"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                      hasFeedback
                      name="query_type"
                      rules={[
                        {
                          required: true,
                          message: "Please Query Type",
                        },
                      ]}
                    >
                      <Select placeholder="Type of Query">
                        <Option value="red">Query</Option>
                        <Option value="green">Feedback</Option>
                        <Option value="blue">Complaint</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item>
                <Form.Item extra=" Write Your Message">
                  <Row gutter={8}>
                    <Col span={24}>
                      <Form.Item
                        name="message"
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: "Please Enter Your Messsage",
                          },
                        ]}
                      >
                        <Input.TextArea
                          prefix={
                            <MessageOutlined className="site-form-item-icon" />
                          }
                          showCount
                          maxLength={1200}
                          placeholder="Message*"
                          type="text"
                          name="message"
                          id="message"
                          rows={6}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>
                <Button htmlType="submit" className="contact-btn">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Contact;
