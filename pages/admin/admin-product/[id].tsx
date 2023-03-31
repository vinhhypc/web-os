import React, { useState } from "react";
import { Button, AutoComplete } from "antd";
import Link from "next/link";
import { Input } from "antd";
import {
  ArrowLeftOutlined,
  CloseCircleOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import UploadFile from "../components/UploadFile";

const EditProduct = () => {
  const defaultItems = [
    { label: "Apple", value: "Apple" },
    { label: "Samsung", value: "Samsung" },
    { label: "Xiaomi", value: "Xiaomi" },
  ];
  const [option, setOption] = useState(defaultItems);
  const search = (searchText: string) => {
    // Api call
    searchText !== "" &&
      setOption([
        ...defaultItems,
        {
          label: `${searchText}`,
          value: `${searchText}`,
        },
        {
          label: `${searchText} ${searchText}`,
          value: `${searchText} ${searchText}`,
        },
      ]);
  };
  return (
    <div className="grow ">
      <div className="pt-5 flex gap-5 px-3 justify-between !font-light">
        <div className="flex">
          <Link href="/admin/admin-product">
            <Button
              type="link"
              size="small"
              className="flex items-center justify-center"
            >
              <ArrowLeftOutlined />
            </Button>
          </Link>
          <h2 className="font-bold">Chỉnh sửa sản phẩm</h2>
        </div>
      </div>
      <div className="px-[5%] flex flex-col gap-3 mt-5">
        <div>
          <h3 className="font-bold">Id :</h3>
          <p className="text-sm">1</p>
        </div>
        <div>
          <h3 className="font-bold">Tên sản phẩm : </h3>
          <Input
            placeholder="Tên sản phẩm..."
            allowClear
            className="w-[600px]"
          />
        </div>
        <div>
          <h3 className="font-bold">Giá : </h3>
          <Input placeholder="Giá..." allowClear className="w-[500px]" />
        </div>
        <div>
          <h3 className="font-bold">Thương hiệu :</h3>
          <AutoComplete
            className="w-[500px]"
            placeholder="Chọn thương hiệu"
            options={option}
            filterOption={true}
            allowClear
            onSelect={(value) => console.log(value)}
            onSearch={(value) => {
              console.log(value);
              search(value);
            }}
          />
        </div>
        <div>
          <h3 className="font-bold">Ảnh đại diện :</h3>
          <UploadFile />
        </div>
      </div>
      <div className="flex gap-2 justify-end mt-2 pr-[10%]">
        <div>
          <Button className="flex justify-center items-center" type="primary">
            <DownloadOutlined />
            <span>Lưu lại</span>
          </Button>
        </div>
        <div>
          <Button className="flex justify-center items-center" danger>
            <CloseCircleOutlined />
            <span>Hủy</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
