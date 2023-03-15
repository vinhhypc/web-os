import { Image } from "antd";
import React from "react";
import { Tabs } from "antd";
import ProductInfo from "./ProductInfo";
import TechInfo from "./TechInfo";
const Index = () => {
  const items = [
    {
      label: "Thông tin sản phẩm",
      key: 1,
      children: ProductInfo(),
    },
    { label: "Thông số kĩ thuật", key: 2, children: TechInfo() },
  ];
  return (
    <div>
      <div className="my-4">
        <div className="md:flex text-center justify-evenly">
          <div className="text-center">
            <Image src="/img10.png" width={350} />
          </div>
          <div className="self-center">
            <h1 className="text-[#1D9BD7] text-center my-2">
              BỘ CẢM BIẾN CHỐNG ĐIỂM MÙ KABIS - HÀN QUỐC
            </h1>
            <hr />
            <p>Giá: 5.900.000</p>
            <hr />
            <p>Giá khuyến mãi: 5.300.000</p>
            <hr />
            <p>Lượt xem : 5300</p>
            <hr />
            <p>Mã sản phẩm : kabis-301</p>
          </div>
        </div>
        <div className="mx-5 mt-4">
          <Tabs
            defaultActiveKey="1"
            type="card"
            size="middle" 
            items={items}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
