import { Image } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import Link from "next/link";
export default function CustomProduct() {
  return (
    <Link href='/post'>
      <div className="w-[250px] flex flex-col bg-white shadow-md rounded-sm hover:shadow-xl">
        <Image src="/service.png" width={250} preview={false} />
        <div className="flex flex-col justify-start items-start ml-2 gap-2 my-2">
          <div className="flex gap-2 opacity-60 text-[11px] items-center cursor-default">
            <HistoryOutlined />
            <p>09/03/2023</p>
          </div>
          <h2 className="text-xs font-bold text-start hover:text-[#1D9BD7]">
            Đánh bóng sơn ô tô, lấy lại vẻ đẹp ban đầu
          </h2>
          <p className=" text-xs text-start cursor-default ">
            Đánh bóng sơn ô tô là phương pháp làm đẹp ô tô hiệu quả và phổ biến
            trong giới chủ xe hiện nay. Tuy nhiên ...
          </p>
        </div>
      </div>
    </Link>
  );
}
