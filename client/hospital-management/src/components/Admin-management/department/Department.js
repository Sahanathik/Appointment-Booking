import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  SearchOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Input, Button, Form, Card, Image, Typography, Upload } from "antd";
const { Title } = Typography;
const Department = () => {
  const [form] = Form.useForm();

  const [department, setDepartment] = useState({
    department_name: "",
    password: "",
    department_image: "",
  });

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
      sm: { span: 12, offset: 10 },
      md: { span: 12, offset: 8 },
      lg: { span: 12, offset: 8 },
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
          <Form.Item
            name="department_image"
            label="Department Image"
            rules={[{ required: true }]}
          >
            <Upload
              listType="picture"
              //   action={"http://localhost:8000/items/admin/additemweb"}
              beforeUpload={(file) => {
                setDepartment({
                  ...department,
                  department_image: file,
                });
                console.log({ file });
                return false;
              }}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item {...buttonLayout}>
            <Button type="primary" htmlType="submit" className="mt-3">
              Add Information
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default Department;
