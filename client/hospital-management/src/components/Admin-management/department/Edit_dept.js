import React, { useEffect, useRef, useState } from "react";
import {
  SearchOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Input,
  Space,
  Table,
  Avatar,
  Image,
  Modal,
  Upload,
  Form,
} from "antd";
import { useNavigate } from "react-router-dom";
import { updateLocale } from "moment";
import axios from "axios";
import { SERVER_URL } from "../../../Globals";

const Edit_dept = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editdetail, setEditdetail] = useState(null);

  const [state,setState] = useState({
    data : ""
  })

  useEffect(()=>{
    axios.get(SERVER_URL+"api/departements/getAllDepartments")
    .then((res)=>{
      console.log(res.data.data)
      setState({
        data : res.data.data
      })
    })
  },[])

  const editdata = (deptdata) => {
    console.log("data", deptdata);
    setIsEditing(true);
    setEditdetail({ ...deptdata });
  };

  console.log(setEditdetail);
  const resetEditing = () => {
    setIsEditing(false);
    setEditdetail(null);
  };

  //TABLE VALUES
  const data = state.data

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

  //update data function
  const update = async () => {};

  //on image upload
  const handleOnChange = () => {};

  //table columns
  const columns = [
    {
      title: "Department Id",
      dataIndex: "department_id",
      key: "department_id",
      width: "20%",
      ...getColumnSearchProps("department_id"),
    },
    {
      title: "Department Name",
      dataIndex: "department_name",
      key: "department_name",
      width: "25%",

      ...getColumnSearchProps("department_name"),
    },
    {
      title: "Login password",
      dataIndex: "password",
      key: "password",
      width: "20%",
    },
    {
      title: "Department Image",
      dataIndex: "department_image",
      key: "department_image",
      width: "20%",
      render: (department_image) => (
        <Avatar
          src={
            <Image
              src={SERVER_URL + "uploads/department_img/" + department_image}
              style={{ width: 32 }}
              alt="department image"
            />
          }
        />
      ),
    },

    {
      title: "Action",
      dataIndex: "",
      width: "20%",
      key: "x",
      render: (deptdata) => (
        <>
          <Button
            onClick={() => {
              editdata(deptdata);
            }}
          >
            Edit
            <EditOutlined />
          </Button>
        </>
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

  return (
    <>
      <Table columns={columns} dataSource={data} />
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
              <Form.Item
                label="Department Name"
                type="text"
                name="department_name"
              >
                <Input
                  type="text"
                  name="department_name"
                  value={editdetail?.department_name}
                  onChange={(e) => {
                    setEditdetail((pre) => {
                      return { ...pre, department_name: e.target.value };
                    });
                  }}
                />
              </Form.Item>
              <Form.Item label="Department pawword" type="text" name="password">
                <Input
                  type="text"
                  name="password"
                  value={editdetail?.password}
                  onChange={(e) => {
                    setEditdetail((pre) => {
                      return { ...pre, password: e.target.value };
                    });
                  }}
                />
              </Form.Item>
            </div>
            <Form.Item name="dept_image" label="Deptartment Image">
              <Upload
                listType="picture"
                //   action={"http://localhost:8000/items/admin/additemweb"}
                beforeUpload={(file) => {
                  // value = {editingItems?.item_image}
                  setEditdetail({
                    ...editdetail,
                    dept_image: file,
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
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default Edit_dept;
