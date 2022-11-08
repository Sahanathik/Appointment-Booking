import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { Button, Input, Select, Modal, Typography, Form } from "antd";
import "./Doctor.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../Globals";
const { Title } = Typography;

const { Option } = Select;

const items = [];

const Doctorlist = () => {
  const [isselecting, setIsSelecting] = useState(false);
  const [selectdetail, setSelectdetail] = useState({
    data : []
  });

  const [department, setDepartment] = useState({
    id : ""
  })

  const [specialistData, setSpecialistDta] = useState({
    data : ""
  })

  const [showSlotData, setShowSlotDay] = useState({
    data : []
  })
  const navigate = useNavigate();

  const [state, setState] = useState({
    data : []
  })

  useEffect(()=>{
      axios.get(SERVER_URL+"api/departements/getAllDepartments")
      .then((res)=>{
        console.log(res.data.data)
        setState({
          data : res.data.data
        })
      })

      console.log("department_name", department.id)
      axios.get(SERVER_URL+"api/specialist/getspecialistByDepId", {params : {department_id : department.id}})
      .then((res)=>{ 
        console.log("dep",res.data.result)
        console.log(res.data.result[0].specialist_id)
        setSelectdetail({
          data : res.data.result
        })

        setSpecialistDta({
          data : res.data.result[0].specialist_id
        })

       
      }).catch(err=>{
        console.log(err)
      })

      axios.get(SERVER_URL+"api/specialistDaySlot/getDataSlotDay", {params : {department_id : department.id, specialist_id : specialistData.data}})
      .then((res)=>{ 
        console.log("specialist_data", res.data.data)
        setShowSlotDay({
          data : res.data.data
        })
      }).catch(err=>{
        console.log(err)
      })

      

  },[department.id, specialistData.data])

  console.log("selectdetail", selectdetail)

  const getData = selectedData =>{
    console.log(selectedData)
    setDepartment({
      id : selectedData
    })
    
  }

  


  //slot data
  const selectdata = (doctor_id) => {
    console.log("doctor_id", doctor_id);
    setIsSelecting(true);
  };
  //
  const resetSelect = () => {
    setIsSelecting(false);
  };
  // form layout
  const responsive_layout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 12 },
      lg: { span: 12 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 12 },
      lg: { span: 12 },
    },
  };
  return (
    <>
      <Navbar></Navbar>
      <div>
        <button
          class="btn rounded-pill text-white btn side-button py-0 px-2 mt-3 ms-1"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          Departments
          <i class="fa-solid fa-angles-right"></i>
        </button>
        <div className="doctor-offcanvas">
          <div
            class="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <h5
                class="offcanvas-title text-white mx-auto"
                id="offcanvasExampleLabel"
              >
                Department
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body p-0">
              <nav className="navbar py-0">
                <ul className="navbar-nav side-nav flex-fill">
                  <li className="nav-item w-100">
                    {
                      state.data.map((det, key)=>{
                        return(
                          <button className="nav-link w-100 btn rounded-0 border-bottom text-white side-link" onClick={()=>getData(det.department_id)} value={det.department_id}>
                            {det.department_name}
                          </button>

                          // <Button value={det.department_name} onClick={()=>getData(det.department_name)}>{det.department_name }</Button>

                          // <ul class="nav justify-content-end">
                          //   <li class="nav-item">
                          //     {/* <a class="nav-link active"  key={key} href={det.department_name} onClick={onLinkClick}>{det.department_name}</a> */}
                          //     <Link to={"/"+det.department_name}>{det.department_name}</Link>
                          //   </li>
                          // </ul>
                        )
                      })
                    }
                    
                  </li>
                  {/* <li className="nav-item">
                    <button className="nav-link w-100 btn rounded-0 border-bottom text-white side-link">
                      Department2
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link w-100 btn rounded-0 border-bottom text-white side-link">
                      Department3
                    </button>
                  </li>
                  <li className="nav-item w-100">
                    <button className="nav-link w-100 btn rounded-0 border-bottom text-white side-link">
                      Department4
                    </button>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <div className="row row-cols-lg-2 row-cols-xxl-3 row-cols-md-1 row-cols-1 gy-3 gx-xl-5 gx-3">
          <div className="col">
            <div class="card mb-3 card-list">
              <div class="row g-0">
                <div class="col-md-6">

                  <img
                    src="https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=2000"
                    class="img-fluid rounded-start h-100 doctor-img"
                    alt="..."
                  />
                </div>
                  {
                    selectdetail.data.map((obj, index)=>{
                      return(
                        
                      <div class="col-md-6">
                      <div class="card-body doctor-card">
                      <p class="card-title doctor-name">{obj.specialist_name}</p>
                      <div className="d-flex doctor-exp text-uppercase">
                      <p class="card-text me-3">Cardiologist</p>
                      <p class="card-text">9 years Exp</p>
                    </div>
                    <p class="card-text doctor-avl mb-2">
                      Department : Cardiology
                    </p>   
                      {
                        showSlotData.data.map((obj2, index)=>{
                          return(
                            <div>
                            <p class="card-text doctor-avl mb-2">
                          <span className="span">Available on</span>
                              &nbsp;<i class="fa-solid fa-calendar-days" key={index}></i> : &nbsp;{obj2.available_day}
                            </p>
                            <p class="card-text doctor-time">
                              <span className="span">Available Slot</span>
                              &nbsp;<i class="fa-regular fa-clock"></i> : &nbsp;{obj2.available_slot}
                            </p>
                            </div>
                          )
                        })
                      }
                    
                    
                    
                    <button
                      className="btn book-btn px-1 py-1"
                      // key={index}
                      // onClick={() => {
                      //   selectdata(obj.specialist_id);
                      //   // selectdata();
                      // }}
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>

                      )
                    })
                  }
                
              </div>
            </div>
          </div>
          <div>
            <Modal
              title="Select Your Slot"
              visible={isselecting}
              okText="Proceed For Payment"
              onCancel={() => {
                resetSelect();
              }}
              onOk={() => {
                navigate("/payment");
                resetSelect();
              }}
              className="modal-app"
            >
              <div>
                <Form {...responsive_layout}>
                  <Form.Item
                    name="available_day"
                    label="Choose Day for Appointment"
                    // rules={[{ required: true, message: "Select day" }]}
                  >
                    <Select placeholder="Select a option below" allowClear>
                      <Option>Monday</Option>
                      <Option>Friday</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="slot_option"
                    label="Choose Slot Time"
                    // rules={[
                    //   { required: true, message: "Select consultation time" },
                    // ]}
                  >
                    <Select placeholder="Select a option below" allowClear>
                      <Option>10.00</Option>
                      <Option>2.00</Option>
                    </Select>
                  </Form.Item>
                </Form>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctorlist;
