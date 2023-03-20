import { Rate, Image, Pagination, Spin, Select, Typography, List } from "antd";
import Link from "next/link";
import { useState, useEffect } from "react";
import productApi from "../../api/productApi";
function GetAllService() {
  const [serviceList, setServiceList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("az");
  const [current, setCurrent] = useState(1);
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
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
    const fetchServiceList = async () => {
      try {
        const response = await productApi.getAll();
        setServiceList(response.data.products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServiceList();
  }, []);
  const getSortedItems = () => {
    const sortedItems = [...serviceList];
    sortedItems.sort((a, b) => {
        const aLowerCaseTitle = a.title.toLowerCase();
        const bLowerCaseTitle = b.title.toLowerCase();
      if (sortOrder === "az") {
        return aLowerCaseTitle> bLowerCaseTitle ? 1 : aLowerCaseTitle === bLowerCaseTitle ? 0 : -1;
      } else if (sortOrder === "za") {
        return aLowerCaseTitle < bLowerCaseTitle ? 1 : aLowerCaseTitle === bLowerCaseTitle ? 0 : -1;
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
            className="flex flex-col items-center mx-[15%] "
            pagination={{
              onChange: (page) => {
                setPage(page);
                scrollToTop()
              },
              pageSize: 12,
              current: page,
              className: "text-center mb-5 self-end",
              
            }}
            dataSource={getSortedItems()}
            renderItem={(product, index) => {
              return (
                <List.Item>
                  <Link href="/highlight-product" key={index}>
                    <div
                      className="w-[280px] flex flex-col bg-[#F5F5F5] rounded-sm shadow-md hover:shadow-xl"
                      style={{ border: "1px solid rgba(0, 0, 0, .2)" }}
                    >
                      <Image
                        src={`${product.thumbnail}`}
                        height={200}
                        style={{
                          objectFit: "!scale-down",
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
                        <h2 className="text-xs truncate w-[150px]">
                          {product.title}
                        </h2>
                        <p className="text-[#1D9BD7] text-xs">
                          {product.price} $
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
export default function ListService() {
  return (
    // <div className=" flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-5 flex-[0_1_25%] min-[890px]:mx-[15%] mx-[10%] min-[1256px]:mx-0 my-5">
    <div>
      <GetAllService />
    </div>
  );
}
