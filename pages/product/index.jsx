import { Rate, Image, Spin, Select, Typography, List } from "antd";
import Link from "next/link";
import { useState, useEffect } from "react";
import productApi from "../../api/productApi";
function GetAllProduct() {
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("az");
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 30,
      behavior: "smooth",
    });
  };
  const options = [
    {
      label: "Theo tên từ A-Z",
      value: "az",
    },
    {
      label: "Theo tên từ Z-A",
      value: "za",
    },
    {
      label: "Theo giá từ thấp -> cao",
      value: "lowHigh",
    },
    { label: "Theo giá từ cao -> thấp", value: "highLow" },
  ];
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getAll();
        setProductList(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductList();
  }, []);
  const getSortedItems = () => {
    const sortedItems = [...productList];
    sortedItems.sort((a, b) => {
      const aLowerCaseTitle = a.title?.toLowerCase();
      const bLowerCaseTitle = b.title?.toLowerCase();
      if (sortOrder === "az") {
        return aLowerCaseTitle > bLowerCaseTitle
          ? 1
          : aLowerCaseTitle === bLowerCaseTitle
          ? 0
          : -1;
      } else if (sortOrder === "za") {
        return aLowerCaseTitle < bLowerCaseTitle
          ? 1
          : aLowerCaseTitle === bLowerCaseTitle
          ? 0
          : -1;
      } else if (sortOrder === "lowHigh") {
        return a.price > b.price ? 1 : a.price === b.price ? 0 : -1;
      } else if (sortOrder === "highLow") {
        return a.price < b.price ? 1 : a.price === b.price ? 0 : -1;
      }
    });
    return sortedItems;
  };
  return (
    <>
      {loading ? (
        <Spin
          spinning={loading}
          tip={"Đang tải ..."}
          className="w-screen h-screen justify-center my-20"
        />
      ) : (
        <div>
          <div className=" mx-5 my-2">
            <Typography.Text>Lọc dữ liệu theo : </Typography.Text>
            <Select
              size="small"
              options={options}
              defaultValue={"az"}
              onChange={(value) => {
                setSortOrder(value);
                setPage(1);
              }}
            />
          </div>
          <List
            split={false}
            className="flex flex-col items-center mx-[5%] min-[1650px]:mx-[10%] min-[1850px]:mx-[15%] min-[2130px]:mx-[20%] "
            pagination={{
              onChange: (page) => {
                setPage(page);
                scrollToTop();
              },
              pageSize: 12,
              current: page,
              className: "text-center mb-5 self-end",
            }}
            dataSource={getSortedItems()}
            renderItem={(product, index) => {
              return (
                <List.Item>
                  <Link href={`/product/${product.id}`} key={index}>
                    <div
                      className="w-[280px] flex flex-col bg-[#F5F5F5] rounded-sm shadow-md hover:shadow-xl"
                      style={{ border: "1px solid rgba(0, 0, 0, .2)" }}
                    >
                      <Image
                        src={`${product.thumbnail}`}
                        height={200}
                        width={278}
                        style={{
                          objectFit: "!cover",
                        }}
                        preview={false}
                      />
                      <div className="flex flex-col justify-start items-start ml-2 gap-2 my-2">
                        <>
                          <Rate
                            disabled
                            defaultValue={product.rating}
                            className="text-xs"
                            allowHalf
                          />
                        </>
                        <h2 className="text-xs truncate w-[150px] uppercase">
                          {product.title}
                        </h2>
                        <p className="text-[#1D9BD7] text-xs">
                          {formatter.format(product?.price)} VNĐ
                        </p>
                      </div>
                    </div>
                  </Link>
                </List.Item>
              );
            }}
          />
        </div>
      )}
    </>
  );
}
export default function ListProduct() {
  return (
    <div>
      <GetAllProduct />
    </div>
  );
}
