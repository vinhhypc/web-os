import React, { useEffect, useState } from "react";
import { Input } from "antd";
import Router from "next/router";
import productApi from "../../api/productApi";
const { Search } = Input;

const App: React.FC = () => {
  const [serviceList, setServiceList] = useState([]);
  const onSearch = async (params?: string) => {
    // const { data } = await productApi.getSearch(params);
    // setServiceList(data);
    Router.push('/search');
    console.log(params)
  };

  // useEffect(() => {
  //   onSearch();
  // }, []);
  console.log(serviceList);
  return (
    <>
      <Search
        placeholder="Tìm kiếm sản phẩm..."
        onSearch={onSearch}
        enterButton
        allowClear
      />
    </>
  );
};

export default App;
