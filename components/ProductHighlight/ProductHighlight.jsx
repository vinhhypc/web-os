import React from "react";
import CustomProduct from "../Custom/CustomProduct";
import { DownOutlined, ArrowRightOutlined } from "@ant-design/icons";
const ProductHighlight = () => {
  return (
    <div className="bg-[#F5F5F5] pt-12 pb-7">
      <div className="text-center">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-xl font-semibold uppercase">Sản phẩm nổi bật</h1>
          <p className="mt-3 opacity-40 text-[12px] w-1/3">
            TST Ô TÔ chuyên cung cấp các sản phẩm, phụ kiện chính hãng được nhập
            khẩu trực tiếp từ các thương hiệu nổi tiếng trên thế giới.
          </p>
        </div>
        <div className="flex px-[20%] flex-wrap justify-center gap-4 my-6">
          <div className="text-xs flex gap-1 rounded-xl bg-white w-fit py-1 px-3 items-center">
            <p>Sản phẩm chăm sóc xe</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-white w-fit py-1 px-3 items-center ">
            <p>Bình ắc quy</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-white w-fit py-1 px-3 items-center">
            <p>Camera hành trình</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-white w-fit py-1 px-3 items-center">
            <p>Phim cách nhiệt</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-white w-fit py-1 px-3 items-center">
            <p>Màn hình android</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-white w-fit py-1 px-3 items-center">
            <p>Ghế nệm da </p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-white w-fit py-1 px-3 items-center">
            <p>Hiện tốc độ HUD</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-white w-fit py-1 px-3 items-center">
            <p>Car audio</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-white w-fit py-1 px-3 items-center">
            <p>Màn hình xe các loại</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
          <div className="text-xs flex gap-1 rounded-xl bg-white w-fit py-1 px-3 items-center">
            <p>Phụ kiện cho bán tải</p>
            <DownOutlined style={{ fontSize: "10px", color: "#1D9BD7" }} />
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <CustomProduct />
          <CustomProduct />
          <CustomProduct />
          <CustomProduct />
        </div>
        <div className="flex justify-center my-5">
          <div className=" flex items-center bg-[#1D9BD7] px-4 py-2 rounded-2xl w-fit text-white">
            <p className="text-xs mr-2">Xem tất cả</p>
            <ArrowRightOutlined style={{ fontSize: "12px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlight;
