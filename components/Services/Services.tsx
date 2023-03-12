import React from "react";
import CustomServiceBox from "../Custom/CustomServiceBox";
const Services = () => {
  return (
    <div className="text-center py-12">
      <div className=" flex justify-center items-center flex-col pb-10">
        <h1 className="text-xl font-semibold uppercase">
          Dịch vụ chăm sóc ô tô tại nhà
        </h1>
        <p className="mt-3 opacity-40 text-[12px] w-1/3">
          Đây chính là Dịch vụ đặc biệt của TST. Các bạn chỉ cần đặt dịch vụ,
          chúng tôi sẽ đến tận nơi phục vụ các bạn.
        </p>
      </div>
      <CustomServiceBox />
    </div>
  );
};

export default Services;
