import React from "react";
import {
  DashboardOutlined,
  FileOutlined,
  PropertySafetyOutlined,
  PhoneOutlined,
  ToolOutlined,
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
  PlusSquareOutlined,
  MessageOutlined,
  WhatsAppOutlined,
  CarOutlined,
  ContactsOutlined 
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem(<Link href='/admin'>DANH MỤC QUẢN TRỊ</Link>, "admin", null),
  getItem(<Link href='/admin/admin-service'>Dịch vụ</Link> , "services", <ToolOutlined />, ),
  getItem(<Link href='/admin/admin-product'>Sản phẩm</Link>, "products", <DashboardOutlined />, ),
  getItem(<Link href='/admin/admin-post'>Bài viết</Link>, "posts", <FileOutlined />

  ),
  getItem(<Link href='/admin/admin-policy'>Chính sách</Link>, "policy", <PropertySafetyOutlined />),
  getItem(<Link href='/admin/admin-other'>Tư vấn, liên hệ, dịch vụ</Link>, "other", <PhoneOutlined />, [
    getItem("Tư vấn", "tuvan", <MessageOutlined />),
    getItem("Liên hệ", "lienhe", <WhatsAppOutlined />),
    getItem("Dịch vụ", "dichvu", <CarOutlined />),
  ]),
  getItem(<Link href='/admin/admin-info'>Thông tin đơn vị</Link>, "info", <ContactsOutlined />),
];

const Admin: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["admin"]}
      defaultOpenKeys={["admin"]}
      mode="inline"
      items={items}
    />
  );
};

export default Admin;
