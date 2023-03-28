import React from "react";
import { Tabs } from "antd";
import serviceInfo from "./serviceInfo";
import serviceProduct from "./serviceProduct";
import ServiceDetail from "./ServiceDetail";
const service = () => {
  const items = [
    {
      label: "Thông tin sản phẩm",
      key: 1,
      children: serviceInfo(),
    },
    { label: "Thông số kĩ thuật", key: 2, children: serviceProduct() },
  ];
  return (
    <div>
      <div className="my-4">
        <ServiceDetail />
        <div className=" mt-4">
          <Tabs defaultActiveKey="1" type="card" size="middle" items={items} />
        </div>
      </div>
    </div>
  );
};

export default service;
