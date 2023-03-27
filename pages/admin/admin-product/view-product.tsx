import { Button, Popconfirm } from "antd";
import Link from "next/link";
import React from "react";
import {
  ArrowLeftOutlined,
  EditOutlined,
  FileOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

function Viewproduct() {
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
          <h2 className="font-bold">Chi tiết sản phẩm</h2>
        </div>
        <div className="flex gap-2 ">
          <Link href="/admin/admin-product">
            <Button className=" flex items-center justify-center !font-light">
              <FileOutlined />
              <span>Posts</span>
            </Button>
          </Link>
          <Link href="/admin/admin-product/edit-product">
            <Button className=" flex items-center justify-center !font-light">
              <EditOutlined />
              <span>Sửa</span>
            </Button>
          </Link>
          <Popconfirm
            title="Xoá sản phẩm"
            description="Bạn chắc chắn muốn xóa sản phẩm?"
            okText="Yes"
            cancelText="No"
          >
            <Button
              className=" flex items-center justify-center !font-light"
              danger
            >
              <DeleteOutlined />
              <span>Xóa</span>
            </Button>
          </Popconfirm>
        </div>
      </div>
      <div className="px-[5%] flex flex-col gap-3 mt-5">
        <div>
          <h3 className="font-bold">Id :</h3>
          <p className="text-sm">1</p>
        </div>
        <div>
          <h3 className="font-bold">Tên sản phẩm : </h3>
          <p className="text-sm">Iphone X</p>
        </div>
        <div>
          <h3 className="font-bold">Giá : </h3>
          <p className="text-sm">3200</p>
        </div>
        <div>
          <h3 className="font-bold">Thương hiệu :</h3>
          <p className="text-sm">Apple</p>
        </div>
        <div>
          <h3 className="font-bold">Tên sản phẩm :</h3>
          <img
            src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            alt="iphone"
            width={320}
          />
        </div>
      </div>
    </div>
  );
}

export default Viewproduct;
