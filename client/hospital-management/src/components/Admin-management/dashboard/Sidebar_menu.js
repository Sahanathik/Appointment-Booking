import {
  SettingOutlined,
  UserOutlined,
  DesktopOutlined,
  UsergroupAddOutlined,
  IdcardOutlined,
  SolutionOutlined,
  HomeOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

const Sidebar_menu = [
  // {
  //   key: "1",
  //   title: "Home",
  //   icon: <HomeOutlined />,
  //   link: "/home",
  // },
  {
    key: "2",
    icon: <SettingOutlined />,
    title: "App Setting",
    link: "/Setting",
  },
  {
    key: "3",
    icon: <DesktopOutlined />,
    title: "Department",
    link: "/department-setting",
  },
  {
    key: "4",
    icon: <UsergroupAddOutlined />,
    title: "Specialist",
    link: "/specialist-setting",
  },
  {
    key: "5",
    icon: <IdcardOutlined />,
    title: "Patients Log",
    link: "/patient-log",
  },
  {
    key: "6",
    icon: <SolutionOutlined />,
    title: "Doctor Log",
    link: "/doctor-log",
  },
  {
    key: "6",
    icon: <IdcardOutlined />,
    title: "Query Section",
    link: "/query-tab",
  },
  {
    key: "7",
    icon: <CreditCardOutlined />,
    title: "Payment Setting",
    link: "/payment-setting",
  },
];
export default Sidebar_menu;
