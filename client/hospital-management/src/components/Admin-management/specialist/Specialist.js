import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";

import {
  Input,
  Button,
  Form,
  Card,
  Select,
  Typography,
  TimePicker,
  Divider,
  Space,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;
const { Option } = Select;
const Specialist = () => {
  //time picker format
  const format = "HH:mm";
  let index = 0;
  const [time, setTime] = useState("");
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);
  const ontimeChange = (event) => {
    setTime(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, time || `New item ${index++}`]);
    setTime("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  //responsive layout
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

  // day picker
  const dayoption = [
    {
      value: "Monday",
    },
    {
      value: "Tuesday",
    },
    {
      value: "Wednesday",
    },
    {
      value: "Thursday",
    },
    {
      value: "Friday",
    },
    {
      value: "Saturday",
    },
    {
      value: "Sunday",
    },
    {
      value: "all",
    },
  ];

  return (
    <>
      <Card style={{ width: "50%", margin: "0 auto" }} className=" rounded-3">
        <Title level={3} style={{ textAlign: "center" }} className="mb-4">
          Specialist Detail
        </Title>
        <Form {...responsive_layout}>
          <Form.Item
            name="department_name"
            label="Department Name"
            rules={[{ required: true, message: "Enter Department Name" }]}
          >
            <Select placeholder="Select a option below" allowClear>
              <Option value="male">department 1</Option>
              <Option value="female">department 2</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Specialist Name"
            type="text"
            name="specialist_name"
            hasFeedback
            rules={[{ required: true, message: "Enter Specialist Name" }]}
          >
            <Input
              placeholder="Enter doctor Name"
              type="text"
              name="specialist_name"
              id="specialist_name"
            />
          </Form.Item>
          <Form.Item
            label="Choose Available Day"
            type="text"
            name="available_day"
          >
            <Select
              mode="multiple"
              showArrow
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Choose Doctors Available Day"
              options={dayoption}
            />
          </Form.Item>
          <Form.Item label="Choose Slot Time" type="text" name="time">
            <Select
              style={{
                width: "100%",
              }}
              placeholder="Select Slot Time"
              mode="multiple"
              showArrow
              dropdownRender={(menu) => (
                <>
                  {menu}
                  <Divider
                    style={{
                      margin: "8px 0",
                    }}
                  />
                  <Space
                    style={{
                      padding: "0 8px 4px",
                    }}
                  >
                    <Input
                      type="time"
                      placeholder="Please enter item"
                      ref={inputRef}
                      value={time}
                      onChange={ontimeChange}
                    />

                    <Button
                      type="text"
                      icon={<PlusOutlined />}
                      onClick={addItem}
                    >
                      Add item
                    </Button>
                  </Space>
                </>
              )}
            >
              {items.map((item) => (
                <Option key={item}>{item}</Option>
              ))}
            </Select>
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

export default Specialist;
