import React from "react";
import {
  Button,
  Input,
  Table,
  Popconfirm,
  Empty,
  Spin,
  message,
  Tooltip,
} from "antd";
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
import { v4 as uuidv4 } from "uuid";
const { Search } = Input;

interface DataType {
  title: string;
  dataIndex: string;
  width: string | number;
  action: () => void;
  id: number;
}
interface Props {
  product: string;
  index: string;
}

const AdminProduct = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
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
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return String(record.title)
          .toLowerCase()
          .includes((value as string).toLowerCase());
      },
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
      width: 150,
      key: 5,
      render: (source) => (
        <img src={`${source}`} style={{ width: "40px", height: "40px" }} />
      ),
    },
    {
      title: "Hành động",
      dataIndex: "action",
      width: 150,
      align: "center",
      key: 6,
      render: (record, value) => {
        return (
          <div className="flex gap-2 justify-center">
            <Link href={`/product/${value.id}`} target="_blank">
              <Tooltip placement="bottom" title={"Xem trên trang"}>
                <Button
                  size="small"
                  className="flex items-center justify-center"
                >
                  <EyeOutlined />
                </Button>
              </Tooltip>
            </Link>
            <Tooltip placement="bottom" title="Chỉnh sửa">
              <Button
                size="small"
                className="flex items-center justify-center"
                onClick={() =>
                  router.push({
                    pathname: `/admin/admin-product/${value.id}`,
                    query: { product: value.id },
                  })
                }
              >
                <EditOutlined />
              </Button>
            </Tooltip>
            <Popconfirm
              title="Xoá sản phẩm"
              description="Bạn chắc chắn muốn xóa sản phẩm?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => message.success("Xóa thành công")}
            >
              <Tooltip placement="bottom" title="Xóa sản phẩm">
                <Button
                  size="small"
                  className="flex items-center justify-center"
                  danger
                >
                  <DeleteOutlined />
                </Button>
              </Tooltip>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
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
  const onSearch = (value: string) => setSearchText(value);
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
          onChange={(e) => setSearchText(e.target.value)}
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
          dataSource={productList}
          size="middle"
          rowKey={"id"}
          key={uuidv4()}
          locale={{
            emptyText: loading ? <Spin spinning={true} /> : <Empty />,
          }}
        />
      </div>
    </div>
  );
};

export default AdminProduct;
