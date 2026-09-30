import { Flex, Menu } from "antd";
import {
  BookOpenText,
  CircleGauge,
  ClipboardList,
  UserShield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const SidebarMenu = () => {
  const navigate = useNavigate();

  const items = [
    getItem("Dashboard", "/", <CircleGauge color="#327a0b" />),
    getItem("Records", "/records", <ClipboardList color="#327a0b" />),
    getItem("Manage User", "/auth-user", <UserShield color="#327a0b" />),
  ];

  return (
    <>
      <Flex align="center" justify="center" className="h-16 border-gray-300">
        <div className="flex flex-col items-center justify-center">
          <BookOpenText style={{ fontSize: "24px", color: "#1890ff" }} />
          <p className="font-mono font-semibold">
            Water<span className="text-green-700">Quality</span>
          </p>
        </div>
      </Flex>
      <Menu
        mode="inline"
        theme="light"
        defaultSelectedKeys={["/"]}
        onClick={(item) => {
          navigate(item.key);
        }}
        items={items}
      />
    </>
  );
};

export default SidebarMenu;
