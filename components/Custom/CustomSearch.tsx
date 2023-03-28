import React, { useEffect, useState } from "react";
import { Input } from "antd";
import Router from "next/router";
// import productApi from "../../api/productApi";
const { Search } = Input;

const CustomSearch: React.FC = () => {
  const [serviceList, setServiceList] = useState([]);
  const [input,setInput] = useState("");
  const onSearch = async (params?: any) => {
    // try {
    //   // const response = await productApi.getSearch(params);
    //   setServiceList(response.data.products);
    //   setInput('')
    // } catch (error) {
    //   console.log(error);
    // }
    // Router.push("/search");
  };
  useEffect(() => {
    onSearch();
  }, []);
  return (
    <>
      <Search
        placeholder="Tìm kiếm sản phẩm..."
        onSearch={onSearch}
        enterButton
        defaultValue={''}
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />
    </>
  );
};

export default CustomSearch;
