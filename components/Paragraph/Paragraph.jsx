import React from "react";
import CustomParagraph from "../Custom/CustomParagraph";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
const Paragraph = () => {

  return (
    <div className="bg-[#F5F5F5] pt-10 pb-1">
      <div className="text-center">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-xl font-semibold uppercase">Tin tức sự kiện</h1>
          <p className="mt-3 opacity-40 text-xs xl:w-1/3 w-4/5 md:w-2/3 mb-6">
          Thông tin hữu ích về các sản phẩm và dịch vụ được cập nhật liên tục giúp quý khách có trải nghiệm tốt hơn
          </p>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          <CustomParagraph />
        </div>
        <Link className="flex justify-center my-5" href="./post">
          <button className=" flex items-center bg-[#1D9BD7] px-4 py-2 rounded-2xl w-fit text-white hover:bg-sky-400">
            <p className="text-xs mr-2">Xem tất cả</p>
            <ArrowRightOutlined style={{ fontSize: "12px" }} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Paragraph;
