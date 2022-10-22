import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { useNavigate } from "react-router-dom";

// import Highlighter from "react-highlight-words";

const Doctorlog = () => {
  const navigate = useNavigate();
  const data = [
    {
      specialist_name: "doctorname 1",
      department_name: "General",
      available_day: "Monday",
      time: "10.00",
    },
    {
      specialist_name: "doctorname 2",
      department_name: "Orthology",
      available_day: "Sunday",
      time: "2.00",
    },
  ];
  //search-filter function  --------------------------------------
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
      title: "Doctor Name",
      dataIndex: "specialist_name",
      key: "specialist_name",
      width: "25%",
      ...getColumnSearchProps("Doctor Name"),
    },
    {
      title: "Department",
      dataIndex: "department_name",
      key: "department_name",
      width: "20%",
      ...getColumnSearchProps("Department"),
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
      key: "x",
      render: () => (
        <Button type="primary" onClick={update}>
          Update
        </Button>
      ),
    },
  ];
  const update = async () => {
    navigate("/update-doctor");
  };
  return <Table columns={columns} dataSource={data} />;
};

export default Doctorlog;
