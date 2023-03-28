import { Rate, Image } from "antd";
import Link from "next/link";
import { useState, useEffect } from "react";
import productApi from "../../api/productApi";
import axios from "axios";
function GetLink() {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
  const [productList, setproductList] = useState([]);
  useEffect(() => {
    const fetchproductList = async () => {
      try {
        const response = await productApi.getHomeProduct();
        setproductList(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchproductList();
  }, []);
  const products = productList.data;
  return (
    <>
      {products?.map((product) => {
        return (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div
              className="w-[280px] flex flex-col bg-[#F5F5F5] rounded-sm shadow-md hover:shadow-xl"
              style={{ border: "1px solid rgba(0, 0, 0, .2)" }}
            >
              <Image
                src={`${product.thumbnail}`}
                width={278}
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
                <h2 className="text-xs text-start truncate w-[150px] ">
                  {product.title}
                </h2>
                <p className="text-[#1D9BD7] text-xs">{formatter.format(product.price)} VNĐ</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
export default function CustomProductHighLight() {
  return (
    <div className=" flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-5 flex-[1_1_25%] min-[890px]:mx-[15%] mx-[10%] min-[1256px]:mx-0 ">
      <GetLink />
    </div>
  );
}


