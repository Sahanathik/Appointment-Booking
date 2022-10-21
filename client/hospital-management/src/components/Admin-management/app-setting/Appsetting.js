import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Input,
  InputNumber,
  Button,
  Upload,
  Form,
  Card,
  Image,
  Typography,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { Title } = Typography;

const Appsetting = () => {
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
    <Card style={{ width: "50%", margin: "0 auto" }} className=" rounded-3">
      <Title level={3} style={{ textAlign: "center" }} className="mb-4">
        App Information
      </Title>
      <Form {...responsive_layout}>
        <Form.Item
          label="Organisation Name"
          type="text"
          name="title"
          rules={[{ required: true, message: "Enter Organisation Name" }]}
        >
          <Input
            placeholder="Organisation Name"
            type="text"
            name="title"
            id="title"
          />
        </Form.Item>

        <Form.Item
          label="Contact Number"
          name="mobilenumber"
          rules={[{ required: true, message: "Enter contact Number" }]}
        >
          <Input
            addonBefore="+91"
            placeholder="mobile number"
            type="text"
            name="mobilenumber"
            id="mobile-number"
          />
        </Form.Item>

        <Form.Item
          label="Emergency Number"
          name="emergency_number"
          // rules={[{ required: true, message: "Enter contact Number!" }]}
        >
          <Input
            placeholder="Enter Emergency Contact number"
            type="text"
            name="emergency_number"
            id="emergency_number"
          />
        </Form.Item>

        <Form.Item
          label="Contact Us Info"
          type="text"
          name="contact_us"
          rules={[
            { required: true, message: "Enter Contact Us page Information" },
          ]}
        >
          <Input.TextArea
            showCount
            maxLength={800}
            placeholder="Write Contact US page info here"
            type="text"
            name="contact_us"
            id="contact_us"
            rows={6}
          />
        </Form.Item>

        <Form.Item
          label="Privacy Policy"
          type="text"
          name="policy"
          rules={[
            {
              required: true,
              message: "Enter Privacy Policy page Information",
            },
          ]}
        >
          <Input.TextArea
            showCount
            maxLength={800}
            placeholder="Write Privacy Policy information here ..."
            type="text"
            name="policy"
            id="policy"
            rows={6}
          />
        </Form.Item>
        <Form.Item name="logo" label="Upload Logo">
          <Upload listType="picture">
            <Button icon={<UploadOutlined />}>Click to Upload logo</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="App Logo">
          <Image width={100} src="" alt="logo" />
        </Form.Item>
        <Form.Item {...buttonLayout}>
          <Button type="primary" htmlType="submit" block>
            Update Information
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Appsetting;
