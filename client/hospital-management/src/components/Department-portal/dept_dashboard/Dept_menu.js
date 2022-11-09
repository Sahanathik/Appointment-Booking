import {
  UsergroupAddOutlined,
  SolutionOutlined,
  LoginOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const Portal_menu = [
  {
    key: "1",
    title: "Home",
    icon: <HomeOutlined />,
    link: "/home",
  },
  {
    key: "2",
    icon: <UsergroupAddOutlined />,
    title: "Specialist",
    link: "/dept-doctorlist",
  },
  {
    key: "3",
    icon: <SolutionOutlined />,
    title: "Patient Report",
    link: "/deptartment-patient-report",
  },
  {
    key: "4",
    icon: <LoginOutlined />,
    title: "Doctor Login",
    link: "/doctor-login",
  },
];

export default Portal_menu;
