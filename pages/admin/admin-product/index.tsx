import React from "react";
import { Button, Input, Table, Popconfirm } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { render } from "react-dom";
const { Search } = Input;

interface DataType {
  title: string;
  dataIndex: string;
  width: string | number;
  id: string;
  price: number;
  brand: string;
  thumbnail: string;
  action: () => void;
}
const data: DataType[] = [
  {
    id: "1",
    title: "Iphone X",
    price: 3200,
    brand: "Apple",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    action: (
      <div className="flex gap-2">
        <Link href="/admin/admin-product/view-product">
          <Button size="small" className="flex items-center justify-center">
            <EyeOutlined />
          </Button>
        </Link>
        <Link href="/admin/admin-product/edit-product">
          <Button size="small" className="flex items-center justify-center">
            <EditOutlined />
          </Button>
        </Link>
        <Popconfirm
          title="Xoá sản phẩm"
          description="Bạn chắc chắn muốn xóa sản phẩm?"
          okText="Yes"
          cancelText="No"
        >
          <Button
            size="small"
            className="flex items-center justify-center"
            danger
          >
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      </div>
    ),
  },
];
const columns: ColumnsType<DataType> = [
  {
    title: "Id",
    dataIndex: "id",
    width: 60,
  },
  {
    title: "Tên sản phẩm",
    dataIndex: "title",
    width: 500,
  },
  {
    title: "Giá",
    dataIndex: "price",
    width: 140,
  },
  {
    title: "Thương hiệu",
    dataIndex: "brand",
    width: 140,
  },
  {
    title: "Ảnh đại diện",
    dataIndex: "thumbnail",
  },
  {
    title: "Hành động",
    dataIndex: "action",
    width: 150,
  },
];
const AdminProduct = () => {
  const onSearch = (value: string) => console.log(value);
  return (
    <div className="grow">
      <h1 className="text-center pt-4 uppercase font-bold font">
        Tất cả sản phẩm
      </h1>
      <div className="flex justify-center my-5">
        <Search
          placeholder="Tìm kiếm sản phẩm..."
          onSearch={onSearch}
          enterButton
          className="w-[300px]"
        />
      </div>
      <div>
        <Table
          columns={columns}
          dataSource={data}
          size="middle"
          key={data.id}
        />
      </div>
    </div>
  );
};

export default AdminProduct;
