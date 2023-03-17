import { Image } from "antd";
import React from "react";
import { Tabs } from "antd";
import ProductInfo from "./ProductInfo";
import TechInfo from "./TechInfo";
import { Badge } from 'antd';
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
        <div className="md:flex text-center justify-evenly gap-4">
          <div className="text-center md:mx-0 mx-2" style={{border: '1px solid rgba(0, 0, 0, .2)'}}>
            <Badge.Ribbon text="Sale 10%" color='red' style={{marginTop:'20px'}} >
              <Image src="/img10.png" width={350} />
            </Badge.Ribbon>
          </div>
          <div className="md:self-center text-center md:text-start mb-10">
            <h1 className="text-[#1D9BD7] text-center md:text-start font-semibold my-2">
              BỘ CẢM BIẾN CHỐNG ĐIỂM MÙ KABIS - HÀN QUỐC
            </h1>
            <div>
              <hr className="my-2 md:w-full mx-auto w-1/3 " />
              <p className="line-through">Giá: 6.000.000</p>
              <p className="text-[#D9021C] text-lg font-bold">Giá khuyến mãi: 5.400.000</p>
              <hr className="my-2 md:w-full mx-auto w-1/3 "/>
              <p><span className="font-semibold">Lượt xem :</span> 5300</p>
              <hr className="my-2 md:w-full mx-auto w-1/3 "/>
              <p><span className="font-semibold">Mã sản phẩm :</span> kabis-301</p>
            </div>
          </div>
        </div>
        <div className=" mt-4">
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
