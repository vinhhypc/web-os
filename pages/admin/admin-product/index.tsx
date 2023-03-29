import React from "react";
import { Button, Input, Table, Popconfirm, Empty, Spin } from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import Link from "next/link";
import productApi from "../../../api/productApi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const { Search } = Input;

interface DataType {
  title: string;
  dataIndex: string;
  width: string | number;
  action: () => void;
}
interface Props {
  product: string;
  index: string;
}

const Action = () => {
 
  return (
    <div className="flex gap-2">
      <Link href={`/admin/admin-product/view-product/`}>
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
  );
};

const columns: ColumnsType<DataType> = [
  {
    title: "Id",
    dataIndex: "id",
    key: 1,
    width: 60,
    align: "center",
  },
  {
    title: "Tên sản phẩm",
    dataIndex: "title",
    key: 2,
    width: 500,
    align: "center",
  },
  {
    title: "Giá",
    dataIndex: "price",
    width: 140,
    align: "center",
    key: 3,
  },
  {
    title: "Thương hiệu",
    dataIndex: "brand",
    width: 140,
    align: "center",
    key: 4,
  },
  {
    title: "Ảnh đại diện",
    dataIndex: "thumbnail",
    align: "center",
    key: 5,
  },
  {
    title: "Hành động",
    dataIndex: "action",
    width: 150,
    align: "center",
    key: 6,
    render: () => <Action />,
  },
];
const AdminProduct = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchProductList = async () => {
      try {
        const response = await productApi.getAll();
        setProductList(response?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductList();
  }, []);
  const onSearch = (value: string) => console.log(value);
  const router = useRouter();
  console.log(productList);
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
      <div className="flex justify-end pr-7 py-1">
        <Link href="/admin/admin-product/add-product">
          <Button className="flex items-center justify-center" type="primary">
            <PlusOutlined />
            <span>Tạo mới</span>
          </Button>
        </Link>
      </div>
      <div>
        <Table
          columns={columns}
          dataSource={loading ? [] : productList}
          size="middle"
          locale={{
            emptyText: loading ? <Spin spinning={true} /> : <Empty />,
          }}
        />
      </div>
    </div>
  );
};

export default AdminProduct;
