import React from "react";
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, GlobalOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import FooterHead from './FooterHead'
const Footer = () => {
  return (
    <div>
      <FooterHead />
      <div className="flex justify-center gap-28 bg-[#111111] text-white pt-12 text-xs">
      <div className="flex flex-col gap-3">
        <h1 className="text-sm font-semibold my-5">
          CÔNG TY TNHH THƯƠNG MẠI XUẤT NHẬP KHẨU TST
        </h1>
        <p className="">
          <span className="mr-2">
            <EnvironmentOutlined
              style={{ color: "#1D9BD7", fontSize: "14px" }}
            />
          </span>
          962A Tỉnh Lộ 10, Khu phố 7, Phường Tân Tạo, Quận Bình Tân, thành phố
          Hồ Chí Minh
        </p>
        <p>
          <span className="mr-2">
            <PhoneOutlined style={{ color: "#1D9BD7", fontSize: "14px" }} />
          </span>
          1900 1209 - 0903 330 937 - Số ĐKKD: 0303617377
        </p>
        <p><span className="mr-2"><MailOutlined style={{ color: "#1D9BD7", fontSize: "14px" }}/></span> tst@gmail.com</p>
        <p><span className="mr-2"><GlobalOutlined style={{ color: "#1D9BD7", fontSize: "14px" }} /></span> www.tst.com</p>
        <hr style={{border:'1px solid #1D9BD7', margin:'14px 0'}}/>
        <p> ✓ Chi nhánh 1: 301-303 An Dương Vương - P. 3 - Q. 5 - TP. HCM</p>
        <p>
          ✓ Chi nhánh 2: 160-162 Nguyễn Hoàng - P. An Phú - Tp. Thủ Đức - TP.
          HCM
        </p>
        <p>✓ Chi nhánh 3: 101B Đường P - P. Tân Phong - Q. 7 - TP. HCM</p>
        <p>✓ Chi nhánh 4: 295 An Dương Vương, P3, Q5, TP. HCM</p>
        <p>GIỜ LÀM VIỆC : TỪ 8h00 SÁNG - ĐẾN 17h30 (THỨ HAI ĐẾN THỨ BẢY )</p>
        <p>Chủ nhật: 8h00 - 15h00</p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-sm font-semibold my-5">CHÍNH SÁCH</h1>
        <Link href='/policy/policy-payment'><p>Chính sách thanh toán</p> </Link>
        <Link href='/policy/policy-transport'><p>Chính sách vận chuyển</p></Link>
        <Link href='/policy/policy-warranty'><p>Chính sách bảo hành</p></Link>
        <Link href='/policy/policy-refund'><p>Chính sách đổi trả / hoàn tiền</p></Link>
        <Link href='/policy/policy-security'><p>Chính sách bảo mật thông tin</p></Link>
        <a href="https://moit.gov.vn/"><Image src='/logobct.png' height={120} width={120} alt='logobct' /></a>
      </div>
      <div className="flex flex-col gap-3">
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
