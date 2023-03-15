import React from "react";
import { Menu, Input, Affix } from "antd";
import type { MenuProps } from "antd/es/menu";
import Image from "next/image";
import CustomSearch from "../Custom/CustomSearch";
import {
  WhatsAppOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  GoogleOutlined,
  BarsOutlined
} from "@ant-design/icons";
import Link from "next/link";
type MenuItem = Required<MenuProps>["items"][number];
const Navbar = () => {
  const items: MenuItem[] = [
    {
      label: (
        <Link href="/">
          <Image src="/logo.png" width={120} height={60} alt="logo" />
        </Link>
      ),
      key: "logo",
    },
    { label: <Link href="/">Trang chủ</Link>, key: "home" },
    { label: <Link href="/introduce">Giới thiệu</Link>, key: "intro" },
    {
      label: <Link href="/highlight-product">Sản phẩm</Link>,
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
            <Link href="/policy/policy-warranty">
              Chính sách bảo hành
            </Link>
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
    { label: <Link href="/policy/policy-payment">Thanh toán</Link>, key: "payment" },
    { label: "Tư vấn", key: "advise" },
    { label: "Bảng giá", key: "price" },
    { label: "Liên hệ", key: "contact" },
    { label: <CustomSearch />, key: "search" },
  ];
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
          <hr style={{ border: "1px solid white"}} className='w-1/3 my-2 mx-auto md:hidden md:my-0' />
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
        <div className="flex items-center justify-center bg-white  ">
          <Menu
            className="h-14 flex items-center justify-end lg:gap-2 uppercase gap-0 !text-sm"
            items={items}
            mode="horizontal"
            defaultValue="home"
            overflowedIndicator={<BarsOutlined />}
          />
        </div>
      </div>
    </Affix>
  );
};

export default Navbar;
