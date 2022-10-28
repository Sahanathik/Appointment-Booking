import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Input,
  Button,
  Form,
  Card,
  Select,
  Typography,
  Divider,
  Space,
  Upload,
  Avatar,
  Image,
  message
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { SERVER_URL } from "../../../Globals";
const { Title } = Typography;
const { Option } = Select;
const Specialist = () => {

  const [state, setState] = useState({
    picture : ""
  })


  //CREATE FORM VARIABLE
  const [form] = Form.useForm()

  //CREATE ARRAY OF DEPARTMENTS
  const [data, setData] = useState({
    departments : []
  })



  //TO FETCH DEPARTMENTS TO DISPLAY
  useEffect(()=>{
    axios.get(SERVER_URL+"api/departements/getAllDepartments")
    .then((res)=>{
        setData({
          departments : res.data.data
        })
    }).catch((err)=>{
      console.log(err)
    })

    
  },[])
  //time picker format
 
  const format = "HH:mm";

  let index = 0;
  const [time, setTime] = useState("");
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);
  const ontimeChange = (event) => {
    setTime(event.target.value);
    console.log(event.target.value)
  };
  const addItem = (e) => {

    e.preventDefault();
    setItems([...items, time || `New item ${index++}`]);
    setTime("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleChangeDay = (values) =>{
    console.log('day values',values)
   
  }

  const handleChangeTime = (values) =>{
    console.log(values)
  }

  const formSubmit = (values) =>{
    console.log(values)
    
    values.profile_pic = state.picture
  

    const config = {
      "Content-Type": "multipart/form-data",
    }

    const data = values

 

    console.log(data)
    console.log("available_day",values.available_day)
    // console.log("available_slot",values.available_slot)
    const formData = new FormData()

    formData.append('image', data.profile_pic);
    formData.append('department_id', data.department_id);
    formData.append('specialist_name', data.specialist_name); 
    formData.append('available_slot', data.available_slot);
    formData.append('available_day', data.available_day);

    console.log(formData)
   
    axios.post(SERVER_URL+"api/specialist/addSpecialist",formData,config)
    .then((res)=>{
      console.log("res-status", res.data.status)
      console.log("res", res)

      if(res.data.status === true){
        setTimeout(()=>{
          message.success(res.data.message)
        }, 1000)
      } else {
        setTimeout(()=>{
          message.warning(res.data.message)
        }, 1000)
      }
      
    
    }).catch((err)=>{
      console.log(err)
    })
    
  }

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
      sm: { span: 12, offset: 12 },
      md: { span: 12, offset: 8 },
      lg: { span: 12, offset: 8 },
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
      value: "All",
    },
  ];


  const slotoption = [
    {
      value: "10:00 AM",
    },
    {
      value: "12:00 PM",
    },
    {
      value: "2:00 PM",
    },
    {
      value: "4:00 PM",
    },
  ]

  return (
    <>
      <Card style={{ width: "50%", margin: "0 auto" }} className=" rounded-3">
        <Title level={3} style={{ textAlign: "center" }} className="mb-4">
          Specialist Detail
        </Title>
        <Form {...responsive_layout} form={form} onFinish={formSubmit}>
          <Form.Item
            name="department_id"
            label="Department Name"
            rules={[{ required: true, message: "Enter Department Name" }]}
          >
            <Select placeholder="Select a option below" allowClear>
              {/* <Option value="male">department 1</Option> */}
              {
                data.departments.map((options)=> (
                  <Option value={options.department_id} key={options.department_id}>{options.department_name}</Option>
                ))
              }
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
          {/* <Form.Item
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
              onChange={handleChangeDay}
            />
          </Form.Item> */}

          <Form.Item
            name="available_day"
            label="Choose Available Day"
            rules={[{ required: true, message: "Enter Available Day" }]}
          >
            <Select placeholder="Select a option below" allowClear>
              {/* <Option value="male">department 1</Option> */}
              {
                dayoption.map((options)=> (
                  <Option value={options.value} key={options.value}>{options.value}</Option>
                ))
              }
            </Select>
          </Form.Item>

          {/* <Form.Item label="Choose Slot Time" type="text" name="available_slot">
            <Select
              style={{
                width: "100%",
              }}
              placeholder="Select Slot Time"
              mode="multiple"
              showArrow
              onChange={handleChangeTime}
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
          </Form.Item> */}

            <Form.Item
            name="available_slot"
            label="Choose Available Slot"
            rules={[{ required: true, message: "Enter Available Slot" }]}
          >
            <Select placeholder="Select a option below" allowClear>
              {/* <Option value="male">department 1</Option> */}
              {
                slotoption.map((options)=> (
                  <Option value={options.value} key={options.value}>{options.value}</Option>
                ))
              }
            </Select>
          </Form.Item>


          <Form.Item
            name="profile_pic"
            label="Profile"
            rules={[{ required: true }]}
          >
            <Upload 
            listType="picture"
            beforeUpload={(file) => {
              console.log(file);
              setState({
                picture: file,
              });
              return false;
            }}>
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

export default Specialist;
