import React from "react";
import CustomServiceHighLight from "../Custom/CustomServiceHighLight";
import { DownOutlined, ArrowRightOutlined } from "@ant-design/icons";
const ServiceHighlight = () => {
  return (
    <div className="bg-white pt-12 pb-7">
      <div className="text-center">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-xl font-semibold uppercase">Dịch vụ nổi bật</h1>
          <p className="mt-3 opacity-40 text-[12px] w-1/3">
            Với 15 năm kinh nghiệm trong ngành cùng đội ngũ nhân viên chất lượng
            cao, chúng tôi tự tin sẽ mang đến cho quý khách những trải nghiệm
            tuyệt vời nhất
          </p>
        </div>
        <div className="flex px-[20%] flex-wrap justify-center gap-4 my-6">
          <div className="text-xs flex gap-1 rounded-xl bg-[#F5F5F5] w-fit py-1 px-3 items-center">
            <p>Độ đèn</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-[#F5F5F5] w-fit py-1 px-3 items-center ">
            <p>Độ âm thanh</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-[#F5F5F5] w-fit py-1 px-3 items-center">
            <p>Bọc trần 5D</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-[#F5F5F5] w-fit py-1 px-3 items-center">
            <p>Phủ Ceramic</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-[#F5F5F5] w-fit py-1 px-3 items-center">
            <p>Phun gầm</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-[#F5F5F5] w-fit py-1 px-3 items-center">
            <p>Độ mâm</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-[#F5F5F5] w-fit py-1 px-3 items-center">
            <p>Lót sàn ô tô</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-[#F5F5F5] w-fit py-1 px-3 items-center">
            <p>Cách âm</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-[#F5F5F5] w-fit py-1 px-3 items-center">
            <p>Tem xe ô tô</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-[#F5F5F5] w-fit py-1 px-3 items-center">
            <p>Đánh bóng</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-[#F5F5F5] w-fit py-1 px-3 items-center">
            <p>Keo FFT</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
        </div>
        <div className="flex justify-center gap-10 flex-wrap">
          <CustomServiceHighLight />
          <CustomServiceHighLight />
          <CustomServiceHighLight />
          <CustomServiceHighLight />
        </div>
        <div className="flex justify-center my-5">
          <button className=" flex items-center bg-[#1D9BD7] px-4 py-2 rounded-2xl w-fit text-[#F5F5F5]">
            <p className="text-xs mr-2">Xem tất cả</p>
            <ArrowRightOutlined style={{ fontSize: "12px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlight;
