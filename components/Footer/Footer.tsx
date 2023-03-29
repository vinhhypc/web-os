import React from "react";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import FooterHead from "./FooterHead";
const Footer = () => {
  return (
    <div>
      <FooterHead />
      <div className="flex md:flex-row flex-col px-5 md:px-0 text-center md:text-start md:justify-evenly bg-[#111111] text-white pt-10 pb-5 text-xs">
        <div className="flex flex-col gap-3">
          <h1 className="text-sm font-semibold my-5">
            CÔNG TY CP KĨ THUẬT DỊCH VỤ THÀNH CÔNG - TST CORPORATION
          </h1>
          <p className="">
            <span className="mr-2">
              <EnvironmentOutlined
                style={{ color: "#1D9BD7", fontSize: "14px" }}
              />
            </span>
            Tầng 12A, toà nhà Thành Công Tower, 79 Dịch Vọng Hậu, Cầu Giấy, Hà
            Nội
          </p>
          <p>
            <span className="mr-2">
              <PhoneOutlined style={{ color: "#1D9BD7", fontSize: "14px" }} />
            </span>
            024 37.958.958 - Fax: 024 37.956.660
          </p>
          <p>
            <span className="mr-2">
              <MailOutlined style={{ color: "#1D9BD7", fontSize: "14px" }} />
            </span>{" "}
            info@tstc.vn
          </p>
          <p>
            <span className="mr-2">
              <GlobalOutlined style={{ color: "#1D9BD7", fontSize: "14px" }} />
            </span>{" "}
            www.tst.com
          </p>
          <hr
            style={{ border: "1px solid #1D9BD7" }}
            className="w-1/2 my-2 mx-auto md:mx-0 md:my-0 "
          />
          <p className="">
            <span className="mr-2">
              <EnvironmentOutlined
                style={{ color: "#1D9BD7", fontSize: "14px" }}
              />
            </span>
            Showroom HCM: 350/1C Quốc Lộ 1A, Khu Phố 1, Phường An Phú Đông, Quận 12, TP.HCM
          </p>
          <p>
            <span className="mr-2">
              <PhoneOutlined style={{ color: "#1D9BD7", fontSize: "14px" }} />
            </span>
            028 66 850 579
          </p>
          <p>
            <span className="mr-2">
              <MailOutlined style={{ color: "#1D9BD7", fontSize: "14px" }} />
            </span>{" "}
            hcm-office@tst.thanhcong.vn
          </p>
          <p>GIỜ LÀM VIỆC : TỪ 8h00 SÁNG - ĐẾN 17h30 (THỨ HAI ĐẾN THỨ BẢY )</p>
          <p>Chủ nhật: 8h00 - 15h00</p>
          <hr
            style={{ border: "1px solid #1D9BD7" }}
            className="w-1/2 my-2 mx-auto md:hidden md:my-0"
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="text-sm font-semibold my-5">CHÍNH SÁCH</h1>
          <Link href="/policy/policy-payment">
            <p className="hover:text-[#1D9BD7]">Chính sách thanh toán</p>
          </Link>
          <Link href="/policy/policy-transport">
            <p className="hover:text-[#1D9BD7]">Chính sách vận chuyển</p>
          </Link>
          <Link href="/policy/policy-warranty">
            <p className="hover:text-[#1D9BD7]">Chính sách bảo hành</p>
          </Link>
          <Link href="/policy/policy-refund">
            <p className="hover:text-[#1D9BD7]">
              Chính sách đổi trả / hoàn tiền
            </p>
          </Link>
          <Link href="/policy/policy-security">
            <p className="hover:text-[#1D9BD7]">Chính sách bảo mật thông tin</p>
          </Link>
          <a href="https://moit.gov.vn/">
            <Image
              src="/logobct.png"
              height={120}
              width={120}
              alt="logobct"
              className="md:m-0"
            />
          </a>
        </div>
        <div className="lg:flex lg:flex-col lg:gap-3 hidden">
          <h1 className="text-sm font-semibold my-5">GIỜ MỞ CỬA</h1>
          <p>Thời gian làm việc</p>
          <p>Bắt đầu: 08:00 AM</p>
          <p>Kết Thúc: 05:30 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
