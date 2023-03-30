import React, { useCallback, useEffect, useState } from "react";
import { Input } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
const { Search } = Input;

const CustomSearch: React.FC = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const onSearch = async (params: string) => {
    setInput("");
    router.push({
      pathname: "/search",
      query: { data: params },
    });
  };
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
