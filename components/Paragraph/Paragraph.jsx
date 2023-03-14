import React from "react";
import CustomParagraph from "../Custom/CustomParagraph";
import { ArrowRightOutlined } from "@ant-design/icons";
const Paragraph = () => {
  return (
    <div className="bg-[#F5F5F5] pt-10 pb-1">
      <div className="text-center">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-xl font-semibold uppercase">Tin tức sự kiện</h1>
          <p className="mt-3 opacity-40 text-xs xl:w-1/3 w-4/5 md:w-2/3 mb-6">
          Với 15 năm kinh nghiệm trong ngành, chúng tôi tự tin sẽ mang đến cho quý khách những trải nghiệm
            tuyệt vời nhất
          </p>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          <CustomParagraph />
          <CustomParagraph />
          <CustomParagraph />
          <CustomParagraph />
        </div>
        <div className="flex justify-center my-5">
          <button className=" flex items-center bg-[#1D9BD7] px-4 py-2 rounded-2xl w-fit text-white hover:bg-sky-400">
            <p className="text-xs mr-2">Xem tất cả</p>
            <ArrowRightOutlined style={{ fontSize: "12px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
