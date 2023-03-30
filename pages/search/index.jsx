import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import productApi from "../../api/productApi";
import { Rate, Image, Spin, Select, Typography, List } from "antd";
import Link from "next/link";
const SearchAll = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { query } = useRouter();
  const params = query.data;
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("az");
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  useEffect(() => {
    setLoading(true);
    const fetchProductList = async () => {
      try {
        const response = await productApi.getSearch(params);
        setProductList(response?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductList();
  }, [params]);
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
    <div className="text-sm">
      <Spin spinning={loading}>
        <div>
          
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
            <div className="mx-5 my-2">
            Có <span className="font-bold">{productList?.length}</span> kết quả
            cho từ khóa "<span className="font-bold">{params}</span>" :
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
        </div>
      </Spin>
    </div>
  );
};

export default function Search(){
  return(
    <SearchAll />
  )
}
