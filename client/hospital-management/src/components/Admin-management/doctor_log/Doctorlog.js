import React, { useRef, useState } from "react";
import {
  SearchOutlined,
  UploadOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Input,
  Space,
  Table,
  Avatar,
  Image,
  Upload,
  Form,
  Modal,
  Select,
  Divider,
} from "antd";
import { useNavigate } from "react-router-dom";
// const { Title } = Typography;
const { Option } = Select;

// import Highlighter from "react-highlight-words";

const Doctorlog = () => {
  // slot-time function
  const [time, setTime] = useState("");
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);
  const ontimeChange = (event) => {
    setTime(event.target.value);
  };
  let index = 0;
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, time || `New item ${index++}`]);
    setTime("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  //dummy data
  const data = [
    {
      specialist_id: "doc-12344567",
      specialist_name: "doctorname 1",
      department_name: "General",
      available_day: "Monday",
      time: "10.00",
    },
    {
      specialist_id: "doc-123447",
      specialist_name: "doctorname 2",
      department_name: "Orthology",
      available_day: "Sunday",
      time: "2.00",
    },
  ];

  //edit functions
  const [isEditing, setIsEditing] = useState(false);
  const [editdetail, setEditdetail] = useState(null);

  const editdata = (data) => {
    console.log("data", data);
    setIsEditing(true);
    setEditdetail({ ...data });
  };

  console.log(setEditdetail);
  const resetEditing = () => {
    setIsEditing(false);
    setEditdetail(null);
  };

  //update data function
  const update = async () => {};

  //on image upload
  const handleOnChange = () => {};

  //search-filter function
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });
  const columns = [
    {
      title: "Doctor Id",
      dataIndex: "specialist_id",
      key: "specialist_id",
      width: "15%",
      fixed: "left",
      ...getColumnSearchProps("specialist_id"),
    },
    {
      title: "Doctor Name",
      dataIndex: "specialist_name",
      key: "specialist_name",
      width: "15%",
      fixed: "left",
      ...getColumnSearchProps("specialist_name"),
    },
    {
      title: "Department",
      dataIndex: "department_name",
      key: "department_name",
      width: "16%",
      ...getColumnSearchProps("department_name"),
    },
    {
      title: "Doctor Profile",
      dataIndex: "profile_pic",
      key: "profile_pic",

      render: (profile_pic) => (
        <Avatar
          src={
            <Image
              scr=""
              // src={SERVER_URL + "/images/profile_pic/" + profile_pic}
              style={{ width: 32 }}
              alt="profile"
            />
          }
        />
      ),
    },
    {
      title: "OP date",
      dataIndex: "available_day",
      key: "available_day",
    },
    {
      title: "OP Timing",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Action",
      dataIndex: "",
      width: "10%",
      fixed: "right",
      key: "x",
      render: (data) => (
        <Button
          type="primary"
          onClick={() => {
            editdata(data);
          }}
        >
          Update
        </Button>
      ),
    },
  ];

  //form layout
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
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1300,
        }}
      />
      <div>
        <Modal
          title="Edit items"
          open={isEditing}
          okText="save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            {
              update();
            }
            resetEditing();
          }}
        >
          <Form {...responsive_layout}>
            <div>
              <Form.Item label="Doctor Name" type="text" name="specialist_name">
                <Input
                  type="text"
                  name="specialist_name"
                  value={editdetail?.specialist_name}
                  onChange={(e) => {
                    setEditdetail((pre) => {
                      return { ...pre, specialist_name: e.target.value };
                    });
                  }}
                />
              </Form.Item>
              <Form.Item label="Op Day" type="text" name="available_day">
                <Select
                  mode="multiple"
                  showArrow
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Choose Doctors Available Day"
                  options={dayoption}
                  value={editdetail?.available_day}
                />
              </Form.Item>
            </div>
            <Form.Item name="profile_pic" label="Profile">
              <Upload
                listType="picture"
                beforeUpload={(file) => {
                  // value = {editingItems?.item_image}
                  setEditdetail({
                    ...editdetail,
                    profile_pic: file,
                  });
                  console.log(setEditdetail);
                  console.log({ file });
                  return false;
                }}
                onChange={handleOnChange}
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
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
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default Doctorlog;
