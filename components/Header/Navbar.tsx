import React, { useState } from "react";
import { Menu, Input, Affix, Drawer } from "antd";
import type { MenuProps } from "antd/es/menu";
import Image from "next/image";
import CustomSearch from "../Custom/CustomSearch";
import {
  WhatsAppOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  GoogleOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import Link from "next/link";
type MenuItem = Required<MenuProps>["items"][number];
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Affix>
      <div>
        <div className=" flex md:h-10 h-20 bg-[#1D9BD7] md:flex-row flex-col text-sm  items-center md:justify-between justify-evenly md:py-0 py-2 md:px-40">
          <div className="flex text-white gap-2 items-center">
            <div className="">Cần hỗ trợ ?</div>
            <span>
              <WhatsAppOutlined style={{ fontSize: "20px" }} />
            </span>
            <span>Gọi 0903 330 937</span>
          </div>
          <hr
            style={{ border: "1px solid white" }}
            className="w-1/3 my-2 mx-auto md:hidden md:my-0"
          />
          <div className="text-white flex gap-4">
            <span>
              <FacebookOutlined style={{ fontSize: "20px" }} />
            </span>
            <span>
              <YoutubeOutlined style={{ fontSize: "20px" }} />
            </span>
            <span>
              <GoogleOutlined style={{ fontSize: "20px" }} />
            </span>
          </div>
        </div>
        <div className="flex items-center lg:justify-center justify-between bg-white ">
          <div className="px-3 py-3 lg:hidden block">
            <BarsOutlined
              className=" text-2xl "
              onClick={() => setOpenMenu(true)}
            />
          </div>
          <div>
            <Link href="/">
              <Image src="/logo.png" width={120} height={60} alt="logo" />
            </Link>
          </div>
          <div className="lg:block hidden">
            <AppMenu />
          </div>
          <div>
            <Drawer
              open={openMenu}
              closable
              onClose={() => setOpenMenu(false)}
              placement="left"
            >
              <AppMenu />
            </Drawer>
          </div>
          <div>
            <CustomSearch />
          </div>
        </div>
      </div>
    </Affix>
  );
};
export default Navbar;
function AppMenu({ isInline = false }) {
  const items: MenuItem[] = [
    { label: <Link href="/introduce">Giới thiệu</Link>, key: "intro" },
    {
      label: <Link href="/product">Sản phẩm</Link>,
      key: "product",
      children: [
        {
          label: "Chăm sóc xe",
          key: "chamsocxe",
        },
        {
          label: "Camera hành trình",
          key: "camera",
        },
        {
          label: "Màn hình android",
          key: "android",
        },
      ],
    },
    {
      label: "Dịch vụ",
      key: "service",
      children: [
        {
          label: "Độ đèn",
          key: "lamp",
        },
        {
          label: "Lót sàn ô tô",
          key: "san",
        },
        {
          label: "Màn hình android",
          key: "screenandroid",
        },
      ],
    },
    {
      label: <Link href="/policy">Chính sách</Link>,
      key: "policy",
      children: [
        {
          label: (
            <Link href="/policy/policy-payment">Chính sách thanh toán</Link>
          ),
          key: "policy-payment",
        },
        {
          label: (
            <Link href="/policy/policy-warranty">Chính sách bảo hành</Link>
          ),
          key: "policy-warranty",
        },
        {
          label: (
            <Link href="/policy/policy-transport">Chính sách vận chuyển</Link>
          ),
          key: "policy-transport",
        },
        {
          label: (
            <Link href="/policy/policy-refund">
              Chính sách đổi trả/hoàn tiền
            </Link>
          ),
          key: "policy-refund",
        },
        {
          label: (
            <Link href="/policy/policy-security">
              Chính sách bảo mật thông tin
            </Link>
          ),
          key: "policy-security",
        },
      ],
    },
    {
      label: <Link href="/policy/policy-payment">Thanh toán</Link>,
      key: "payment",
    },
    { label: "Tư vấn", key: "advise" },
    { label: "Bảng giá", key: "price" },
    { label: "Liên hệ", key: "contact" },
  ];
  return (
    <Menu
      className=" uppercase my-6 !text-sm !border-none"
      items={items}
      mode={isInline ? "inline" : "horizontal"}
      disabledOverflow
    />
  );
}
