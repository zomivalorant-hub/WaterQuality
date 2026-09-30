import { useQueryClient } from "@tanstack/react-query";
import { Button, Layout } from "antd";
import { LogOut, Menu, SquareMenu } from "lucide-react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";

const { Header, Content, Footer, Sider } = Layout;

function DashboardApp() {
  const queryClient = useQueryClient();

  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    queryClient.removeQueries({ queryKey: ["userInfo"] });
    navigate("/landing", { replace: true });
  };
  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        width="250"
        className="max-h-full h-screen position-sticky top-0 left-0 z-20"
      >
        <SidebarMenu />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: "#fff" }}
          className="flex items-center justify-between"
        >
          <Button
            type="text"
            icon={collapsed ? <Menu /> : <SquareMenu />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <p className="text-lg font-mono text-mauve-400-400">
            Water Quality Monitoring
          </p>
          <Button
            onClick={() => logout()}
            type={"primary"}
            icon={<LogOut />}
            className="m-6"
          />
        </Header>
        <Content className="flex flex-col gap-2 p-5">
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <p className="text-gray-300 text-sm">
            WaterQ ©2026 Created by Students
          </p>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default DashboardApp;
