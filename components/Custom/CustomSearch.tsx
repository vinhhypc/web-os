import React, { useCallback, useEffect, useState } from "react";
import { Input } from "antd";
import Router from "next/router";
import productApi from "../../api/productApi";
const { Search } = Input;

const CustomSearch: React.FC = () => {
  const [productList, setProductList] = useState([]);
  const [input, setInput] = useState("");
  // const onSearch = async (params:any) => {
  //   try {
  //     const res = await productApi.getSearch(params);
  //     setProductList(res?.data);
  //     setInput("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // Router.push("/search");
  // };
  // useEffect(() => {
  //   onSearch();
  // }, []);

  const onSearch = (e:any) =>{
    console.log(e)
    setInput("")
  }
  return (
    <>
      <Search
        placeholder="Tìm kiếm sản phẩm..."
        onSearch={onSearch}
        enterButton
        defaultValue={""}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export default CustomSearch;
