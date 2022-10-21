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
  {
    key: "1",
    title: "Home",
    icon: <HomeOutlined />,
    link: "/",
  },
  {
    key: "2",
    icon: <SettingOutlined />,
    title: "App Setting",
    link: "/app-Setting",
  },
  {
    key: "3",
    icon: <DesktopOutlined />,
    title: "Department",
    link: "/department",
  },
  {
    key: "4",
    icon: <UsergroupAddOutlined />,
    title: "Specialist",
    link: "/specialist",
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
    key: "7",
    icon: <CreditCardOutlined />,
    title: "Payment Setting",
    link: "/payment-setting",
  },
];
export default Sidebar_menu;